var FS = require('fs');

module.exports = {
    copy,
    exists,
    remove,
    readText,
    readJSON,
    writeText,
    writeJSON,
};

function copy(srcPath, dstPath) {
    var srcStat = FS.lstatSync(srcPath);
    var data = FS.readFileSync(srcPath);
    FS.writeFileSync(dstPath, data);
    FS.chmod(dstPath, srcStat.mode);
}

function exists(path) {
    return FS.existsSync(path);
}

function remove(path) {
    if (exists(path)) {
        FS.unlinkSync(path);
    }
}

function readText(srcPath) {
    return FS.readFileSync(srcPath, 'utf-8');
}

function readJSON(srcPath) {
    var text = FS.readFileSync(srcPath, 'utf-8');
    try {
        return JSON.parse(text);
    } catch (err) {
        return {};
    }
}

function writeText(dstPath, text) {
    FS.writeFileSync(dstPath, text, 'utf-8');
}

function writeJSON(dstPath, object) {
    var text = JSON.stringify(object, undefined, 2);
    FS.writeFileSync(dstPath, text, 'utf-8');
}
