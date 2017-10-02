var Path = require('path');
var FS = require('fs');
var File = require('./file');

exports.create = function(dstPath) {
    exports.remove(dstPath);
    var dstParentPath = Path.dirname(dstPath);
    if (!FS.existsSync(dstParentPath)) {
        exports.create(dstParentPath);
    }
    FS.mkdirSync(dstPath);
};

exports.copy = function(srcPath, dstPath) {
    exports.create(dstPath);
    var children = FS.readdirSync(srcPath);
    children.forEach((child) => {
        var srcChildPath = `${srcPath}/${child}`;
        var dstChildPath = `${dstPath}/${child}`;
        var srcChildStat = FS.lstatSync(srcChildPath);
        if (srcChildStat.isDirectory()) {
            exports.copy(srcChildPath, dstChildPath);
        } else if (srcChildStat.isFile()) {
            File.copy(srcChildPath, dstChildPath);
        }
    });
};

exports.exists = function(path) {
    return FS.existsSync(path);
};

exports.remove = function(path) {
    if (FS.existsSync(path)) {
        var children = FS.readdirSync(path);
        children.forEach((child) => {
            var childPath = `${path}/${child}`;
            var childStat = FS.lstatSync(childPath);
            if (childStat.isDirectory()) {
                exports.remove(childPath);
            } else if (childStat.isFile()) {
                File.remove(childPath);
            }
        });
        FS.rmdirSync(path);
    }
};
