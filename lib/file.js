var FS = require('fs');

exports.copy = function(srcPath, dstPath) {
    var srcStat = FS.lstatSync(srcPath);
    var data = FS.readFileSync(srcPath);
    FS.writeFileSync(dstPath, data);
    FS.chmod(dstPath, srcStat.mode);
};

exports.exists = function(path) {
    return FS.existsSync(path);
};

exports.remove = function(path) {
    if (FS.existsSync(path)) {
        FS.unlinkSync(path);
    }
};
