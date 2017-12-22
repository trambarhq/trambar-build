var Shell = require('./shell');

module.exports = {
    fetch,
    clone,
    rebase,
    reset,
};

function fetch() {
    var cmd = `git fetch`;
    Shell.run(cmd);
}

function clone(url, params) {
    var flags = [];
    if (params.depth) {
        flags.push(`--depth ${params.depth}`);
    }
    var cmd = `git clone ${flags.join(' ')} ${url}`;
    Shell.run(cmd);
}

function rebase() {
    var cmd = `git rebase`;
    Shell.run(cmd);
}

function reset() {
    var cmd = `git reset --hard`;
    Shell.run(cmd);
}
