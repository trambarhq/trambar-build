var Shell = require('./shell');

module.exports = {
    release,
};

function release(appName, platform, deployment) {
    var cmd = `code-push release-cordova ${appName} ${platform} -d ${deployment}`;
    Shell.run(cmd);
    Shell.run(`sleep 1`, { silent: true });
}
