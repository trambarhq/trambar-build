var _ = require('lodash');
var Promise = require('bluebird');
var Moment = require('moment');
var BlobStream = require('transport/blob-stream');
var BlobManager = require('transport/blob-manager');
var HTTPRequest = require('transport/http-request');
var HTTPError = require('errors/http-error');
var FileError = require('errors/file-error');
var RandomToken = require('utils/random-token');
var Async = require('async-do-while');

if (process.env.PLATFORM === 'cordova') {
    var CordovaFile = require('transport/cordova-file');
}

module.exports = Payload;

function Payload(address, schema, type, token) {
    this.address = address;
    this.schema = schema;
    this.type = type;
    this.action = `add-${type}`;
    this.token = (!token) ? RandomToken.generate() : token;
    this.recreated = !!token;
    this.options = {};
    this.url = `payload:${this.token}`;
    this.processed = 0;
    this.promise = null;
    this.parts = [];
    this.approved = false;
    this.started = !!token;
    this.sent = false;
    this.failed = false;
    this.canceled = false;
    this.completed = false;
    this.uploadStartTime = null;
    this.uploadEndTime = null;
    this.processEndTime = null;
    this.onUploadProgress = null;
    this.onUploadComplete = null;
};

/**
 * Return a URL to an image file that previously placed into a payload
 *
 * @param  {Object} res
 *
 * @return {String|null}
 */
Payload.getImageURL = function(res) {
    if (res.payload_token) {
        var name;
        switch (res.type) {
            case 'image':
                name = 'main';
                break;
            default:
                name = 'poster';
                break;
        }
        var url = `payload:${res.payload_token}/${name}`;
        return BlobManager.find(url);
    }
};

/**
 * Attach a file to a payload
 *
 * @param  {Blob|CordovaFile} file
 * @param  {String|undefined} name
 *
 * @return {Payload}
 */
Payload.prototype.attachFile = function(file, name) {
    if (!name) {
        name = 'main';
    }
    var url = `payload:${this.token}/${name}`;
    // associate file with payload id so we can find it again
    BlobManager.associate(file, url);

    if (file instanceof Blob) {
        this.parts.push({
            blob: file,
            size: file.size,
            uploaded: 0,
            name
        });
    } else if (file instanceof CordovaFile && process.env.PLATFORM === 'cordova') {
        this.parts.push({
            cordovaFile: file,
            size: file.size,
            uploaded: 0,
            name
        });
    }
    return this;
};

/**
 * Attach a stream to a payload
 *
 * @param  {BlobStream} stream
 * @param  {String|undefined} name
 *
 * @return {Payload}
 */
Payload.prototype.attachStream = function(stream, name) {
    if (!name) {
        name = 'main';
    }
    this.parts.push({
        stream: stream,
        size: stream.size,
        uploaded: stream.transferred,
        name
    });
    return this;
};

/**
 * Attach a URL to a payload
 *
 * @param  {BlobStream} stream
 * @param  {String|undefined} name
 *
 * @return {Payload}
 */
Payload.prototype.attachURL = function(url, name) {
    if (!name) {
        name = 'main';
    }
    this.parts.push({ url, name });
    return this;
};

/**
 * Attach a part that generated from the main part (or some other part)
 *
 * @param  {String} source
 * @param  {String} name
 *
 * @return {Payload}
 */
Payload.prototype.attachStep = function(source, name) {
    // add options to the source part
    var options;
    switch (name) {
        case 'poster':
            options = { generate_poster: true };
            break;
    }
    this.setPartOptions(options, source);
    this.parts.push({ name });
    return this;
};

/**
 * Set options for a part
 *
 * @param  {Object} options
 * @param  {String|undefined} name
 */
Payload.prototype.setPartOptions = function(options, name) {
    if (!name) {
        name = 'main';
    }
    var part = _.find(this.parts, { name });
    if (!part) {
        throw new Error(`Unable to find part: ${name}`);
    }
    if (part.stream) {
        // options need to be applied to stream
        part.stream.setOptions(options);
    } else {
        part.options = _.assign({}, part.options, options);
    }
};

/**
 * Send the payload
 */
Payload.prototype.send = function() {
    if (this.started) {
        return;
    }
    if (!this.approved) {
        throw new HTTPError(403);
    }
    this.started = true;
    this.uploadStartTime = Moment().toISOString();
    Promise.each(this.parts, (part) => {
        var sent = false;
        var attempts = 1;
        var delay = 1000;
        Async.do(() => {
            return this.sendPart(part).then(() => {
                sent = true;
            }).catch((err) => {
                if (err.statusCode >= 400 && err.statusCode <= 499) {
                    throw err;
                }
                // wait a bit then try again
                delay = Math.min(delay * 2, 10 * 1000);
                return Promise.delay(delay).then(() => {
                    if (!this.canceled) {
                        attempts++;
                    }
                });
            });
        });
        Async.while(() => {
            return !sent && !this.canceled;
        });
        return Async.end();
    }).then(() => {
        this.sent = true;
        this.uploadEndTime = Moment().toISOString();
        if (this.onUploadComplete) {
            this.onUploadComplete({
                type: 'uploadcomplete',
                target: this,
            });
        }
    });
};

/**
 * Send a part of the payload
 *
 * @param  {Object} part
 *
 * @return {Promise}
 */
Payload.prototype.sendPart = function(part) {
    if (part.stream) {
        return this.sendStream(part);
    } else if (part.blob) {
        return this.sendBlob(part);
    } else if (part.cordovaFile && process.env.PLATFORM === 'cordova') {
        return this.sendCordovaFile(part);
    } else if (part.url) {
        return this.sendURL(part);
    } else {
        return Promise.resolve();
    }
};

/*
 * Send a blob in the payload to remote server
 *
 * @param  {Object} part
 *
 * @return {Promise}
 */
Payload.prototype.sendBlob = function(part) {
    var url = this.getDestinationURL(part.name);
    var blob = part.blob;
    var formData = new FormData;
    formData.append('file', blob);
    _.each(part.options, (value, name) => {
        formData.append(name, value);
    });
    var options = {
        responseType: 'json',
        onUploadProgress: (evt) => {
            this.updateProgress(part, evt.loaded / evt.total)
        },
    };
    part.uploaded = 0;
    return HTTPRequest.fetch('POST', url, formData, options).then((res) => {
        this.associateRemoteURL(res.url, blob);
        return res;
    });
};

/**
 * Send a local file in the payload to remote server
 *
 * @param  {Object} part
 *
 * @return {Promise<Object>}
 */
Payload.prototype.sendCordovaFile = function(part) {
    if (process.env.PLATFORM !== 'cordova') return;
    var url = this.getDestinationURL(part.name);
    var file = part.cordovaFile;
    return new Promise((resolve, reject) => {
        var encodedURL = encodeURI(url);
        var fileTransfer = new FileTransfer;
        fileTransfer.onprogress = (evt) => {
            this.updateProgress(part, evt.loaded / evt.total)
        };
        var successCB = (r) => {
            if (r.responseCode >= 400) {
                reject(new HTTPError(r.responseCode));
            }
            try {
                var res = JSON.parse(r.response);
                resolve(res);
            } catch(err) {
                reject(err);
            }
        };
        var errorCB = (err) => {
            reject(new FileError(err))
        };
        var fileUploadOptions = _.assign(new FileUploadOptions, {
            fileKey: 'file',
            fileName: file.name,
            params: part.options,
            mimeType: file.type,
        });
        part.uploaded = 0;
        fileTransfer.upload(file.fullPath, encodedURL, successCB, errorCB, fileUploadOptions);
    }).then((res) => {
        this.associateRemoteURL(res.url, file);
        return res;
    });
};

/**
 * Send a stream ID to remote server
 *
 * @param  {Object} part
 *
 * @return {Promise<Object>}
 */
Payload.prototype.sendStream = function(part) {
    var url = this.getDestinationURL(part.name);
    var stream = part.stream;
    stream.onProgress = (evt) => {
        this.updateProgress(part, evt.loaded / evt.total)
    };
    // start the stream first and wait for the first chunk to be sent
    return stream.start().then(() => {
        var options = {
            responseType: 'json',
            contentType: 'json',
        };
        return HTTPRequest.fetch('POST', url, { stream: stream.id }, options);
    });
};

/**
 * Send JSON to remote server
 *
 * @param  {Object} part
 *
 * @return {Promise<Object>}
 */
Payload.prototype.sendURL = function(part) {
    var url = this.getDestinationURL(part.name);
    var options = {
        responseType: 'json',
        contentType: 'json',
    };
    var body = _.extend({ url: part.url }, part.options);
    return HTTPRequest.fetch('POST', url, body, options);
};

/**
 * Return the oversize of the payload
 *
 * @return {Number}
 */
Payload.prototype.getSize = function() {
    var sizes = _.map(this.parts, (part) => {
        return part.size || 0;
    });
    return _.sum(sizes);
};

/**
 * Return the number of bytes uploaded
 *
 * @return {Number}
 */
Payload.prototype.getUploaded = function() {
    var counts = _.map(this.parts, (part) => {
        return part.uploaded || 0;
    });
    return _.sum(counts);
};

/**
 * Return the number of files that haven't been fully transferred
 *
 * @return {Number}
 */
Payload.prototype.getRemainingFiles = function() {
    var remainingFiles = _.filter(this.parts, (part) => {
        if (part.size > 0) {
            if (part.uploaded < part.size) {
                return true;
            }
        }
    });
    return remainingFiles.length;
};

/**
 * Return the number of bytes remaining to be uploaded
 *
 * @return {Number}
 */
Payload.prototype.getRemainingBytes = function() {
    var remainingBytes = _.map(this.parts, (part) => {
        return (part.size > 0) ? part.size - part.uploaded : 0;
    });
    return _.sum(remainingBytes);
};

/**
 * Return URL for uploading the given payload
 *
 * @param  {String} name
 *
 * @return {String}
 */
Payload.prototype.getDestinationURL = function(name) {
    var uri;
    switch (this.type) {
        case 'image':
            if (name === 'main') {
                uri = `/srv/media/images/upload/${this.schema}/`;
            }
            break;
        case 'video':
            if (name === 'main') {
                uri = `/srv/media/videos/upload/${this.schema}/`;
            } else if (name === 'poster') {
                uri = `/srv/media/videos/poster/${this.schema}/`;
            }
            break;
        case 'audio':
            if (name === 'main') {
                uri = `/srv/media/audios/upload/${this.schema}/`;
            } else if (name === 'poster') {
                uri = `/srv/media/audios/poster/${this.schema}/`;
            }
            break;
        case 'website':
            if (name === 'poster') {
                uri = `/srv/media/html/poster/${this.schema}/`;
            }
            break;
    }
    return (uri) ? `${this.address}${uri}?token=${this.token}` : null;
};

/**
 * Update progress of a given part and trigger change event
 *
 * @param  {Object} part
 * @param  {Number} completed
 */
Payload.prototype.updateProgress = function(part, completed) {
    if (completed) {
        part.uploaded = Math.round(part.size * completed);
        if (this.onUploadProgress) {
            this.onUploadProgress({
                type: 'uploadprogress',
                target: this,
            });
        }
    }
};

/**
 * Update properties that track backend processing with data from backend
 *
 * @param  {Object} task
 *
 * @return {Boolean}
 */
Payload.prototype.updateBackendStatus = function(task) {
    var changed = false;
    if (this.type === 'unknown') {
        // restore type and action
        this.action = task.action;
        this.type = _.replace(this.action, /^add\-/, '');
        this.sent = (task.completion > 0);
        changed = true;
    }
    if (this.processed !== task.completion) {
        this.processed = task.completion;
        changed = true;
    }
    if (this.processEndTime !== task.etime) {
        this.processEndTime = task.etime;
        if (task.etime && !task.failed) {
            this.completed = true;
        }
        changed = true;
    }
    if (task.failed && !this.failed) {
        this.failed = true;
        changed = true;
    }
    return changed;
}

/**
 * Associate a remote URL with a blob so we don't need to download the file again
 * when the need arises
 *
 * @param  {String} url
 * @param  {Blob|CordovaFile} blob
 */
Payload.prototype.associateRemoteURL = function(url, blob) {
    if (url) {
        BlobManager.associate(blob, this.address + url);
    }
};
