var Path = require('path');
var FS = require('fs');

exports.create = function(dstPath) {
    if (FS.existsSync(dstPath)) {
        return;
    }
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
