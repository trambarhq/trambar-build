var Path = require('path');
var FS = require('fs');
var File = require('./file');

module.exports = {
    create,
    copy,
    exists,
    remove,
};

function create(dstPath) {
    remove(dstPath);
    var dstParentPath = Path.dirname(dstPath);
    if (!exists(dstParentPath)) {
        exports.create(dstParentPath);
    }
    FS.mkdirSync(dstPath);
}

function copy(srcPath, dstPath) {
    create(dstPath);
    var children = FS.readdirSync(srcPath);
    children.forEach((child) => {
        var srcChildPath = `${srcPath}/${child}`;
        var dstChildPath = `${dstPath}/${child}`;
        var srcChildStat = FS.lstatSync(srcChildPath);
        if (srcChildStat.isDirectory()) {
            copy(srcChildPath, dstChildPath);
        } else if (srcChildStat.isFile()) {
            File.copy(srcChildPath, dstChildPath);
        }
    });
}

function exists(path) {
    return FS.existsSync(path);
}

function remove(path) {
    if (exists(path)) {
        var children = FS.readdirSync(path);
        children.forEach((child) => {
            var childPath = `${path}/${child}`;
            var childStat = FS.lstatSync(childPath);
            if (childStat.isDirectory()) {
                remove(childPath);
            } else if (childStat.isFile()) {
                File.remove(childPath);
            }
        });
        FS.rmdirSync(path);
    }
}
