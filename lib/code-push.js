var Shell = require('./shell');

module.exports = {
    release,
};

function release(appName, platform, deployment, version) {
    var cmd = `code-push release-cordova ${appName} ${platform} -d ${deployment}`;
    if (version) {
        cmd += ` -t ${version}`;
    }
    Shell.run(cmd);
    Shell.run(`sleep 1`, { silent: true });
}
