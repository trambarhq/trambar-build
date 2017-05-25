var Shell = require('./shell');

exports.buildImage = function(folderPath, name) {
    var cmd = `docker build ${folder} -t ${name}`;
    Shell.run(cmd, { passthru: true });
}
