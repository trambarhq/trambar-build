var Shell = require('./shell');

module.exports = {
    release,
};

function release(appName, platform, deployment, mandatory) {
    var cmd = `code-push release-cordova ${appName} ${platform} -d ${deployment}`;
    if (mandatory) {
        cmd += ` -m`;
    }
    Shell.run(cmd);
    Shell.run(`sleep 1`, { silent: true });
}
