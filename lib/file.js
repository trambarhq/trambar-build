var FS = require('fs');

module.exports = {
    copy,
    exists,
    remove,
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
