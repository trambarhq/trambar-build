var Shell = require('./shell');

exports.pull = function(params) {
    var cmd = `git pull ${flags(params)}`;
    Shell.run(cmd);
}

exports.clone = function(url, params) {
    var cmd = `git clone ${flags(params)} ${url}`;
    Shell.run(cmd);
}

function flags(params) {
    var flags = [];
    if (params.depth) {
        flags.push(`--depth ${params.depth}`);
    }
    return flags.join(' ');
}
