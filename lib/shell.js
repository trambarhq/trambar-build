var ChildProcess = require('child_process');

exports.run = function(cmd, params) {
    var options = {
        encoding: 'utf8'
    };
    var parseLines = false;
    if (params) {
        if (params && params.passthru) {
            options.stdio = [ 'inherit', 'inherit', 'inherit' ]
        }
        if (params && params.silent) {
            options.stdio = [ 'pipe', 'pipe', 'pipe' ]
        }
        if (params && params.lines) {
            parseLines = true;
        }
    }
    var output = ChildProcess.execSync(cmd, options);
    if (parseLines) {
        var lines = output.split(/\r\n?/);
        return lines;
    } else {
        return output;
    }
};
