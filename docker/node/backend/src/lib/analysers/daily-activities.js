var _ = require('lodash');
var Moment = require('moment');

var Story = require('accessors/story');

module.exports = {
    type: 'daily-activities',
    // tables from which the stats are derived
    sourceTables: [ 'story' ],
    // filters and the columns they act on--determine which objects are
    // included in the statistics;
    filteredColumns: {
        story: {
            user_ids: 'user_ids',
            role_ids: 'role_ids',
            time_range: 'ptime',
            repo_id: 'repo_id',
        },
    },
    // additional criteria that objects must also meet to be included
    fixedFilters: {
        story: {
            deleted: false,
            published: true,
        }
    },
    // columns in the table(s) that affects the results (columns used by the
    // filters would, of course, also impact the results)
    depedentColumns: {
        story: [
            'type',
            'ptime',
        ],
    },

    generate: function(db, schema, filters) {
        // apply fixed filters
        var criteria = _.clone(this.fixedFilters.story);
        // then apply per-row filters
        _.assign(criteria, _.omit(filters, 'timezone'));

        // load the stories
        return Story.find(db, schema, criteria, 'type, ptime').then((rows) => {
            var tzOffset = _.get(filters, 'tz_offset', 0);

            var activities = {};
            _.each(rows, (row) => {
                // get the date, taking into consideration the timezone requested
                var date = Moment(row.ptime).utcOffset(tzOffset).format('YYYY-MM-DD');
                var counts = activities[date];
                if (!counts) {
                    counts = activities[date] = {};
                }
                // increment the count for story type
                counts[row.type] = (counts[row.type] || 0) + 1;
            });
            return {
                details: activities,
                sample_count: rows.length,
            };
        });
    }
}