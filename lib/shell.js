var ChildProcess = require('child_process');

exports.run = function(cmd, params) {
    var options = {
        encoding: 'utf8'
    };
    var parseLines = false;
    if (!params) {
        params = {
            passthru: true
        };
    }
    if (params.passthru) {
        options.stdio = [ 'inherit', 'inherit', 'inherit' ]
    } else if (params.silent) {
        options.stdio = [ 'pipe', 'pipe', 'pipe' ]
    }
    if (params.lines) {
        parseLines = true;
    }
    var output = ChildProcess.execSync(cmd, options);
    if (parseLines) {
        var lines = output.split(/\r\n?/);
        return lines;
    } else {
        return output;
    }
};

exports.chdir = function(dir) {
    process.chdir(dir);
};
