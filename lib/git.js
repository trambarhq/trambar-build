var Shell = require('./shell');

module.exports = {
    fetch,
    clone,
    rebase,
    reset,
    checkout,
    getCurrentBranch,
};

function fetch() {
    var cmd = `git fetch`;
    Shell.run(cmd);
}

function clone(url, destination, params) {
    var flags = [];
    if (!params) {
        params = {};
    }
    if (params.depth) {
        flags.push(`--depth ${params.depth}`);
    }
    var cmd = `git clone ${flags.join(' ')} ${url} ${destination}`;
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

function checkout(branch, params) {
    var flags = [];
    if (!params) {
        params = {};
    }
    if (params.quiet) {
        flags.push('--quiet');
    }
    if (params.force) {
        flags.push('--force');
    }
    var cmd = `git checkout ${flags.join(' ')} ${branch}`;
    Shell.run(cmd);
}

function getCurrentBranch() {
    var cmd = `git rev-parse --abbrev-ref HEAD`;
    var text = Shell.run(cmd, { silent: true });
    return text.trim();
}
