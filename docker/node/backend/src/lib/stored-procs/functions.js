exports.matchAny = function(filters, objects) {
    for (var i = 0; i < objects.length; i++) {
        if (matchObject(filters, objects[i])) {
            return true;
        }
    }
    return false;
};
exports.matchAny.args = 'filters jsonb, objects jsonb[]';
exports.matchAny.ret = 'boolean';
exports.matchAny.flags = 'IMMUTABLE';

exports.hasCandidates = function(details, storyIds) {
    var candidates = details.candidates;
    if (candidates instanceof Array) {
        for (var i = 0; i < candidates.length; i++) {
            var id = candidates[i].id;
            for (var j = 0; j < storyIds.length; j++) {
                if (id === storyIds[j]) {
                    return true;
                }
            }
        }
    }
    return false;
};
exports.hasCandidates.args = 'details jsonb, storyIds int[]';
exports.hasCandidates.ret = 'boolean';
exports.hasCandidates.flags = 'IMMUTABLE';

exports.payloadIds = function(details) {
    var payloadIds = [];
    var resources = details.resources;
    if (resources instanceof Array) {
        for (var i = 0; i < resources.length; i++) {
            var res = resources[i];
            payloadIds.push(res.payload_id);
        }
    }
    return (payloadIds.length > 0) ? payloadIds : null;
};
exports.payloadIds.args = 'details jsonb';
exports.payloadIds.ret = 'int[]';
exports.payloadIds.flags = 'IMMUTABLE';

/**
 * Return user id associated with authorization token--if it's still valid
 *
 * NOTE: Runs as root
 *
 * @param  {String} token
 * @param  {String} area
 *
 * @return {Number}
 */
exports.checkAuthorization = function(token, area) {
    var sql = `SELECT user_id, area FROM "global"."authorization"
               WHERE token = $1
               AND (area = $2 OR $2 IS NULL)
               AND expiration_date >= current_date
               AND deleted = false
               LIMIT 1`;
    var row = plv8.execute(sql, [ token, area ])[0];
    return (row) ? row.user_id : null;
};
exports.checkAuthorization.args = 'token text, area text';
exports.checkAuthorization.ret = 'int';
exports.checkAuthorization.flags = 'SECURITY DEFINER';

/**
 * Set the expiration date of an authorization object
 *
 * NOTE: Runs as root
 *
 * @param  {String} token
 * @param  {String} expire
 */
exports.extendAuthorization = function(token, expire) {
    var sql = `UPDATE "global"."authorization"
               SET expiration_date = $2
               WHERE token = $1
               AND deleted = false`;
    plv8.execute(sql, [ token, expire ]);
};
exports.extendAuthorization.args = 'token text, expire date';
exports.extendAuthorization.ret = 'void';
exports.extendAuthorization.flags = 'SECURITY DEFINER';