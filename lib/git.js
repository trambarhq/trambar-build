var Shell = require('./shell');

exports.rebase = function() {
    var cmd = `git rebase`;
    Shell.run(cmd);
}

exports.fetch = function() {
    var cmd = `git fetch`;
    Shell.run(cmd);
}

exports.clone = function(url, params) {
    var flags = [];
    if (params.depth) {
        flags.push(`--depth ${params.depth}`);
    }
    var cmd = `git clone ${flags.join(' ')} ${url}`;
    Shell.run(cmd);
}

exports.reset = function() {
    var cmd = `git reset --hard`;
    Shell.run(cmd);
}
