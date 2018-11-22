webpackJsonp(["page-repo-summary"],{"../../common/src/objects/finders/statistics-finder.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){var n=void 0,r=void 0,i=void 0,s=!1;if(t&&(n=t.type,t.user_id&&(r={id:t.user_id}),e.context.schema&&(i={name:e.context.schema}),s=t.public),"daily-activities"===n){if(r&&i)return o(e,i,r,s);if(i)return a(e,i,r,s)}else if("daily-notifications"===n&&r&&i)return l(e,i,r);return b.default.resolve(null)}function a(e,t,n){if(!t||t.deleted)return null;var r={schema:t.name,table:"statistics",criteria:{type:"story-date-range",filters:{public:n||void 0}},prefetch:!0};return e.findOne(r).then(function(r){if(m(r)){var i=R.getMonthRanges(r.details.start_time,r.details.end_time),a=R.getTimeZoneOffset(),s=y.default.map(i,function(e){return{time_range:e,tz_offset:a,public:n||void 0}}),o={schema:t.name,table:"statistics",criteria:{type:"daily-activities",filters:s},prefetch:!0};return e.find(o).then(function(e){return E(e,r)})}})}function s(e,t){return b.default.mapSeries(t,function(t){return a(e,t)}).then(function(e){var n=y.default.map(t,"id");return y.default.zipObject(n,e)})}function o(e,t,n,r){return n?u(e,t,[n],r).then(function(e){return y.default.get(e,n.id,null)}):null}function u(e,t,n,r){if(!t)return b.default.resolve(null);var i=(t.name,y.default.filter(n,function(e){return!e.deleted})),a=y.default.map(i,function(e){return{user_ids:[e.id],public:r||void 0}}),s={schema:t.name,table:"statistics",criteria:{type:"story-date-range",filters:a},prefetch:!0};return e.find(s).then(function(n){n=y.default.filter(n,m);var i=y.default.map(n,function(e){var t=R.getMonthRanges(e.details.start_time,e.details.end_time),n=R.getTimeZoneOffset();return y.default.map(t,function(t){return{user_ids:e.filters.user_ids,time_range:t,tz_offset:n,public:r||void 0}})}),a=y.default.flatten(i);if(y.default.isEmpty(a))return{};var s={schema:t.name,table:"statistics",criteria:{type:"daily-activities",filters:a},prefetch:!0};return e.find(s).then(function(e){return y.default.transform(n,function(t,n){var r=n.filters.user_ids[0],i=y.default.filter(e,function(e){return e.filters.user_ids[0]===r});t[r]=E(i,n)},{})})})}function l(e,t,n){return n?f(e,t,[n]).then(function(e){return y.default.get(e,n.id,null)}):null}function f(e,t,n){if(!t)return b.default.resolve(null);var r=t.name,i=y.default.filter(n,function(e){return!e.deleted}),a={type:"notification-date-range",filters:y.default.map(i,function(e){return{target_user_id:e.id}})};return e.find({schema:r,table:"statistics",criteria:a}).then(function(t){t=y.default.filter(t,m);var n=y.default.map(t,function(e){var t=R.getMonthRanges(e.details.start_time,e.details.end_time),n=R.getTimeZoneOffset();return y.default.map(t,function(t){return{target_user_id:e.filters.target_user_id,time_range:t,tz_offset:n}})}),i=y.default.flatten(n);if(y.default.isEmpty(i))return{};var a={type:"daily-notifications",filters:i};return e.find({schema:r,table:"statistics",criteria:a}).then(function(e){return y.default.transform(t,function(t,n){var r=n.filters.target_user_id,i=y.default.filter(e,function(e){return e.filters.target_user_id===r});t[r]=E(i,n)},{})})})}function c(e,t,n){return n?d(e,t,[n]).then(function(e){return y.default.get(e,n.id,null)}):null}function d(e,t,n){if(!t)return b.default.resolve(null);var r=t.name,i=y.default.filter(n,function(e){return!e.deleted}),a={type:"story-date-range",filters:y.default.map(i,function(e){return{external_object:y.default.find(e.external,{type:e.type})}})};return e.find({schema:r,table:"statistics",criteria:a}).then(function(t){t=y.default.filter(t,m);var i=y.default.map(t,function(e){var t=R.getMonthRanges(e.details.start_time,e.details.end_time),n=R.getTimeZoneOffset();return y.default.map(t,function(t){return{external_object:e.filters.external_object,time_range:t,tz_offset:n}})}),a=y.default.flatten(i);if(y.default.isEmpty(a))return{};var s={type:"daily-activities",filters:a};return e.find({schema:r,table:"statistics",criteria:s}).then(function(e){return y.default.transform(t,function(t,r){var i=r.filters.external_object,a=y.default.filter(e,function(e){return y.default.isEqual(e.filters.external_object,i)});t[y.default.find(n,function(e){return y.default.some(e.external,i)}).id]=E(a,r)},{})})})}function m(e){return e&&!!e.details.start_time&&!!e.details.end_time}function p(e,t){var n={total:0};return y.default.each(e,function(e){y.default.each(e.details,function(e,r){t&&r.substr(0,7)!==t||y.default.each(e,function(e,t){"#"!==t.charAt(0)&&(n.total+=e),n[t]?n[t]+=e:n[t]=e})})}),n}function h(e){var t={};return y.default.each(e,function(e){y.default.assign(t,e.details)}),t}Object.defineProperty(t,"__esModule",{value:!0}),t.findDailyActivitiesOfRepos=t.findDailyActivitiesOfRepo=t.findDailyNotificationsOfUsers=t.findDailyNotificationsOfUser=t.findDailyActivitiesOfUsers=t.findDailyActivitiesOfUser=t.findDailyActivitiesOfProjects=t.findDailyActivitiesOfProject=t.find=void 0;var v=n("../../common/node_modules/lodash/lodash.js"),y=r(v),g=n("../../common/node_modules/bluebird/js/browser/bluebird.js"),b=r(g),_=n("../../common/node_modules/moment/moment.js"),j=r(_),O=n("../../common/src/utils/memoize.js"),k=n("../../common/src/utils/date-utils.js"),R=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(k),E=(0,O.memoizeWeak)(null,function(e,t,n){var r=(0,j.default)().subtract(1,"month").format("YYYY-MM"),i=(0,j.default)().format("YYYY-MM"),a=h(e),s=p(e,r),o=p(e,i),u=p(e),l=t.details.start_time,f=t.details.end_time;if(0===s.total){l.substr(0,7)<=r||(s.total=void 0)}return{range:{start:l,end:f},last_month:s,this_month:o,to_date:u,daily:a}});t.find=i,t.findDailyActivitiesOfProject=a,t.findDailyActivitiesOfProjects=s,t.findDailyActivitiesOfUser=o,t.findDailyActivitiesOfUsers=u,t.findDailyNotificationsOfUser=l,t.findDailyNotificationsOfUsers=f,t.findDailyActivitiesOfRepo=c,t.findDailyActivitiesOfRepos=d},"../../common/src/objects/finders/system-finder.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e){return e.findOne({schema:"global",table:"system",criteria:{},prefetch:!0}).then(function(e){return e||{}})}Object.defineProperty(t,"__esModule",{value:!0}),t.findSystem=void 0;var a=n("../../common/node_modules/lodash/lodash.js"),s=(r(a),n("../../common/node_modules/bluebird/js/browser/bluebird.js"));r(s);t.findSystem=i},"../../common/src/utils/date-utils.js":function(e,t,n){"use strict";function r(e){var t=e instanceof u.default?e:(0,u.default)(e),n=t.clone().endOf("day");return"["+t.toISOString()+","+n.toISOString()+"]"}function i(e,t){for(var n=e instanceof u.default?e:(0,u.default)(e),r=t instanceof u.default?t:(0,u.default)(t),i=n.startOf("month"),a=r.endOf("month"),s=[],o=i.clone();o<=a;o.add(1,"month")){var l=o.toISOString(),f=o.clone().endOf("month").toISOString(),c="["+l+","+f+"]";s.push(c)}return s}function a(e,t){for(var n=startTime instanceof u.default?startTime:(0,u.default)(startTime),r=t instanceof u.default?t:(0,u.default)(t),i=n.startOf("day"),a=r.endOf("day"),s=[],o=i.clone();o<=a;o.add(1,"day")){var l=o.format("YYYY-MM-DD");s.push(l)}return s}function s(){return(0,u.default)().utcOffset()}Object.defineProperty(t,"__esModule",{value:!0}),t.getDates=t.getTimeZoneOffset=t.getMonthRanges=t.getDayRange=void 0;var o=n("../../common/node_modules/moment/moment.js"),u=function(e){return e&&e.__esModule?e:{default:e}}(o);t.getDayRange=r,t.getMonthRanges=i,t.getTimeZoneOffset=s,t.getDates=a},"./pages/repo-summary-page.jsx":function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.RepoSummaryPageSync=t.RepoSummaryPage=t.default=void 0;var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n("../../common/node_modules/lodash/lodash.js"),f=i(l),c=n("../../common/node_modules/react/index.js"),d=i(c),m=n("../../common/node_modules/relaks/index.js"),p=n("../../common/src/utils/component-refs.js"),h=i(p),v=n("../../common/src/objects/finders/project-finder.js"),y=r(v),g=n("../../common/src/objects/finders/repo-finder.js"),b=r(g),_=n("../../common/src/objects/finders/statistics-finder.js"),j=r(_),O=n("../../common/src/objects/finders/system-finder.js"),k=r(O),R=n("./widgets/push-button.jsx"),E=i(R),C=n("./widgets/combo-button.jsx"),S=i(C),w=n("./widgets/instruction-block.jsx"),x=i(w),P=n("./widgets/text-field.jsx"),D=i(P),I=n("./widgets/multilingual-text-field.jsx"),M=i(I),T=n("./widgets/option-list.jsx"),A=(i(T),n("./widgets/activity-chart.jsx")),N=i(A),Y=n("./widgets/action-confirmation.jsx"),U=i(Y),z=n("./widgets/data-loss-warning.jsx"),L=i(z),Z=n("./widgets/unexpected-error.jsx"),q=i(Z),B=n("../../common/src/widgets/error-boundary.jsx"),F=i(B);n("./pages/repo-summary-page.scss");var W=n("../../common/src/data/database.js"),J=(i(W),n("../../common/src/routing/route.js")),$=(i(J),n("../../common/src/env/environment.js")),G=(i($),function(e){function t(){return a(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),u(t,[{key:"renderAsync",value:function(e){var t=this.props,n=t.database,r=t.route,i=t.env,a=t.projectID,s=t.repoID,o=t.editing,u=n.use({schema:"global",by:this}),l={system:void 0,project:void 0,repo:void 0,statistics:void 0,projectID:a,database:n,route:r,env:i,editing:o};return e.show(d.default.createElement(H,l)),u.start().then(function(e){return k.findSystem(u).then(function(e){l.system=e})}).then(function(){return b.findRepo(u,s).then(function(e){l.repo=e})}).then(function(){return e.show(d.default.createElement(H,l)),y.findProject(u,a).then(function(e){l.project=e})}).then(function(){return e.show(d.default.createElement(H,l)),j.findDailyActivitiesOfRepo(u,l.project,l.repo).then(function(e){l.statistics=e})}).then(function(){return d.default.createElement(H,l)})}}]),t}(m.AsyncComponent));G.displayName="RepoSummaryPage";var H=function(e){function t(e){a(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleRemoveClick=function(e){var t=n.props.env,r=n.components.confirmation,i=t.locale.t,a=i("repo-summary-confirm-remove");return r.ask(a).then(function(e){if(e)return n.changeInclusion(!1).then(function(e){if(e)return n.returnToList()})})},n.handleRestoreClick=function(e){var t=n.props.env,r=n.components.confirmation,i=t.locale.t,a=i("repo-summary-confirm-restore");return r.ask(a).then(function(e){if(e)return n.changeInclusion(!0)})},n.handleReturnClick=function(e){return n.returnToList()},n.handleEditClick=function(e){return n.setEditability(!0)},n.handleCancelClick=function(e){return n.setEditability(!1)},n.handleSaveClick=function(e){var t=n.props.database;if(!n.state.saving){var r=t.use({schema:"global",by:n}),i=n.getRepo();n.setState({saving:!0,problems:{}},function(){return r.start().then(function(e){return r.saveOne({table:"repo"},i).then(function(e){n.setState({hasChanges:!1,saving:!1},function(){n.setEditability(!1)})})}).catch(function(e){var t={unexpected:e.message};n.setState({problems:t,saving:!1})})})}},n.handleTitleChange=function(e){n.setRepoProperty("details.title",e.target.value)},n.components=(0,h.default)({confirmation:U.default}),n.state={newRepo:null,saving:!1,problems:{}},n}return o(t,e),u(t,[{key:"getRepo",value:function(e){var t=this.props,n=t.repo,r=t.editing,i=this.state.newRepo;return!r||e&&"current"!==e?n||K:i||n||K}},{key:"getRepoProperty",value:function(e,t){var n=this.getRepo(t);return f.default.get(n,e)}},{key:"setRepoProperty",value:function(e,t){var n=this.props.repo,r=this.getRepo(),i=f.default.decoupleSet(r,e,t),a=!0;f.default.isEqual(i,n)&&(i=null,a=!1),this.setState({newRepo:i,hasChanges:a})}},{key:"setEditability",value:function(e){var t=this.props.route,n=f.default.clone(t.params);return n.editing=e||void 0,t.replace(t.name,n)}},{key:"returnToList",value:function(){var e=this.props,t=e.route,n=e.projectID,r={projectID:n};return t.push("repo-list-page",r)}},{key:"getInputLanguages",value:function(){var e=this.props.system;return f.default.get(e,"settings.input_languages",[])}},{key:"componentWillReceiveProps",value:function(e){var t=this.props.editing;e.editing!==t&&(e.editing?this.setState({newRepo:null,hasChanges:!1}):this.setState({problems:{}}))}},{key:"render",value:function(){var e=this.props,t=e.route,n=e.env,r=this.state,i=r.hasChanges,a=r.problems,s=this.components.setters,o=n.locale,u=o.t,l=o.p,c=this.getRepo(),m=l(f.default.get(c,"details.title"))||c.name;return d.default.createElement("div",{className:"repo-summary-page"},this.renderButtons(),d.default.createElement("h2",null,u("repo-summary-$title",m)),d.default.createElement(q.default,null,a.unexpected),this.renderForm(),this.renderInstructions(),this.renderChart(),d.default.createElement(U.default,{ref:s.confirmation,env:n}),d.default.createElement(L.default,{changes:i,env:n,route:t}))}},{key:"renderButtons",value:function(){var e=this.props,t=(e.route,e.env),n=e.project,r=e.repo,i=e.editing,a=this.state.hasChanges,s=t.locale.t;if(i)return d.default.createElement("div",{key:"edit",className:"buttons"},d.default.createElement(E.default,{onClick:this.handleCancelClick},s("repo-summary-cancel"))," ",d.default.createElement(E.default,{className:"emphasis",disabled:!a,onClick:this.handleSaveClick},s("repo-summary-save")));var o=!n||!r||f.default.includes(n.repo_ids,r.id),u=o?void 0:"restore";return d.default.createElement("div",{key:"view",className:"buttons"},d.default.createElement(S.default,{preselected:u},d.default.createElement("option",{name:"return",onClick:this.handleReturnClick},s("repo-summary-return")),d.default.createElement("option",{name:"remove",disabled:!o,onClick:this.handleRemoveClick},s("repo-summary-remove")),d.default.createElement("option",{name:"restore",hidden:o,onClick:this.handleRestoreClick},s("repo-summary-restore")))," ",d.default.createElement(E.default,{className:"emphasis",onClick:this.handleEditClick},s("repo-summary-edit")))}},{key:"renderForm",value:function(){return d.default.createElement("div",{className:"form"},this.renderTitleInput(),this.renderNameInput(),this.renderIssueTrackingStatus())}},{key:"renderTitleInput",value:function(){var e=this.props,t=e.env,n=e.editing,r=t.locale.t,i={id:"title",value:this.getRepoProperty("details.title"),availableLanguageCodes:this.getInputLanguages(),readOnly:!n,env:t,onChange:this.handleTitleChange};return d.default.createElement(M.default,i,r("repo-summary-title"))}},{key:"renderNameInput",value:function(){var e=this.props.env,t=e.locale.t,n={id:"name",value:this.getRepoProperty("name"),readOnly:!0,env:e};return d.default.createElement(D.default,n,t("repo-summary-gitlab-name"))}},{key:"renderIssueTrackingStatus",value:function(){var e=this.props.env,t=e.locale.t,n=void 0;n=t(this.getRepoProperty("details.issues_enabled")?"repo-summary-issue-tracker-enabled":"repo-summary-issue-tracker-disabled");var r={id:"issue-tracker",value:n,readOnly:!0,env:e};return d.default.createElement(D.default,r,t("repo-summary-issue-tracker"))}},{key:"renderInstructions",value:function(){var e=this.props,t=e.env,n=e.editing,r={folder:"repo",topic:"repo-summary",hidden:!n,env:t};return d.default.createElement("div",{className:"instructions"},d.default.createElement(x.default,r))}},{key:"renderChart",value:function(){var e=this.props,t=e.env,n=e.statistics,r=t.locale.t,i={statistics:n,env:t};return d.default.createElement("div",{className:"statistics"},d.default.createElement(F.default,{env:t},d.default.createElement(N.default,i,r("repo-summary-statistics"))))}},{key:"changeInclusion",value:function(e){var t=this,n=this.props,r=n.database,i=n.project,a=n.repo,s=r.use({schema:"global",by:this}),o=i.repo_ids;o=e?f.default.union(o,[a.id]):f.default.difference(o,[a.id]);var u=f.default.assign({},i,{repo_ids:o});return s.saveOne({table:"project"},u).catch(function(e){var n={unexpected:e.message};t.setState({problems:n})})}}]),t}(c.PureComponent);H.displayName="RepoSummaryPageSync";var K={details:{}};t.default=G,t.RepoSummaryPage=G,t.RepoSummaryPageSync=H},"./pages/repo-summary-page.scss":function(e,t){}});