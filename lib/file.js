var FS = require('fs');

exports.copy = function(srcPath, dstPath) {
    var srcStat = FS.lstatSync(srcPath);
    var data = FS.readFileSync(srcPath);
    FS.writeFileSync(dstPath, data);
    FS.chmod(dstPath, srcStat.mode);
}
