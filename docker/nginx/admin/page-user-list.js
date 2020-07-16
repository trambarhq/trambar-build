webpackJsonp(["page-user-list"],{"../../common/src/objects/types/user-types.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=["guest","regular","moderator","admin"];t.default=r,t.UserTypes=r},"./pages/user-list-page.jsx":function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.UserListPageSync=t.UserListPage=t.default=void 0;var s=n("../../common/node_modules/babel-runtime/helpers/extends.js"),a=l(s),o=n("../../common/node_modules/babel-runtime/core-js/get-iterator.js"),i=l(o),u=n("../../common/node_modules/babel-runtime/regenerator/index.js"),d=l(u),c=n("../../common/node_modules/babel-runtime/helpers/asyncToGenerator.js"),m=l(c),f=n("../../common/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),p=l(f),h=n("../../common/node_modules/babel-runtime/helpers/classCallCheck.js"),v=l(h),b=n("../../common/node_modules/babel-runtime/helpers/createClass.js"),j=l(b),g=n("../../common/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),y=l(g),E=n("../../common/node_modules/babel-runtime/helpers/inherits.js"),_=l(E),C=n("../../common/node_modules/lodash/lodash.js"),k=l(C),x=n("../../common/node_modules/moment/moment.js"),w=(l(x),n("../../common/node_modules/react/index.js")),T=l(w),U=n("../../common/node_modules/relaks/index.js"),D=n("../../common/src/utils/memoize.js"),N=n("../../common/src/utils/component-refs.js"),P=l(N),I=n("../../common/src/objects/finders/project-finder.js"),L=r(I),M=n("../../common/src/objects/finders/role-finder.js"),R=r(M),S=n("../../common/src/objects/finders/user-finder.js"),F=r(S),W=n("../../common/src/objects/types/user-types.js"),H=l(W),O=n("./widgets/push-button.jsx"),$=l(O),A=n("./widgets/combo-button.jsx"),z=l(A),B=n("./widgets/sortable-table.jsx"),G=l(B),J=n("./widgets/profile-image.jsx"),q=l(J),K=n("./tooltips/project-tooltip.jsx"),Q=l(K),V=n("./tooltips/role-tooltip.jsx"),X=l(V),Y=n("./tooltips/modified-time-tooltip.jsx"),Z=l(Y),ee=n("./widgets/action-badge.jsx"),te=l(ee),ne=n("./widgets/action-confirmation.jsx"),re=l(ne),le=n("./widgets/data-loss-warning.jsx"),se=l(le),ae=n("./widgets/unexpected-error.jsx"),oe=l(ae);n("./pages/user-list-page.scss");var ie=n("../../common/src/data/database.js"),ue=(l(ie),n("../../common/src/routing/route.js")),de=(l(ue),n("../../common/src/env/environment.js")),ce=(l(de),function(e){function t(){return(0,v.default)(this,t),(0,y.default)(this,(t.__proto__||(0,p.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,j.default)(t,[{key:"renderAsync",value:function(){function e(e){return t.apply(this,arguments)}var t=(0,m.default)(d.default.mark(function e(t){var n,r,l,s,a,o,i,u;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.props,r=n.database,l=n.route,s=n.env,a=this.props.editing,o=r.use({schema:"global",by:this}),i={database:r,route:l,env:s,editing:a},t.show(T.default.createElement(me,i)),e.next=7,o.start();case 7:return u=e.sent,e.next=10,F.findAllUsers(o);case 10:return i.users=e.sent,t.show(T.default.createElement(me,i)),e.next=14,L.findProjectsWithMembers(o,i.users);case 14:return i.projects=e.sent,t.show(T.default.createElement(me,i)),e.next=18,R.findRolesOfUsers(o,i.users);case 18:return i.roles=e.sent,e.abrupt("return",T.default.createElement(me,i));case 20:case"end":return e.stop()}},e,this)}));return e}()}]),t}(U.AsyncComponent));ce.displayName="UserListPage";var me=function(e){function t(e){var n=this;(0,v.default)(this,t);var r=e.editing,l=(0,y.default)(this,(t.__proto__||(0,p.default)(t)).call(this,e));return l.handleSort=function(e){l.setState({sortColumns:e.columns,sortDirections:e.directions})},l.handleAddClick=function(e){return l.props.route.push("user-summary-page",{userID:"new"})},l.handleEditClick=function(e){l.setEditability(!0)},l.handleCancelClick=function(e){l.setEditability(!1)},l.handleSaveClick=function(){var e=(0,m.default)(d.default.mark(function e(t){var r,s,a,o,u,c,m,f,p,h,v,b,j,g,y,E,_,C,x,w,T,U,D,N;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=l.props,s=r.database,a=r.env,o=r.users,u=l.state,c=u.disablingUserIDs,m=u.restoringUserIDs,f=l.components.confirmation,p=a.locale.t,h=[p("user-list-confirm-disable-$count",c.length),p("user-list-confirm-reactivate-$count",m.length)],v=[!!k.default.isEmpty(c)||void 0,!!k.default.isEmpty(m)||void 0],e.next=8,f.askSeries(h,v);case 8:if(!(b=e.sent)){e.next=62;break}return l.setState({problems:{}}),j=s.use({schema:"global",by:l}),e.next=14,j.start();case 14:g=e.sent,y=[],E=!0,_=!1,C=void 0,e.prev=19,x=(0,i.default)(o);case 21:if(E=(w=x.next()).done){e.next=38;break}if(T=w.value,U={},!k.default.includes(c,T.id)){e.next=28;break}U.disabled=!0,e.next=33;break;case 28:if(!k.default.includes(m,T.id)){e.next=32;break}U.disabled=U.deleted=!1,e.next=33;break;case 32:return e.abrupt("continue",35);case 33:D=k.default.assign({},T,U),y.push(D);case 35:E=!0,e.next=21;break;case 38:e.next=44;break;case 40:e.prev=40,e.t0=e.catch(19),_=!0,C=e.t0;case 44:e.prev=44,e.prev=45,!E&&x.return&&x.return();case 47:if(e.prev=47,!_){e.next=50;break}throw C;case 50:return e.finish(47);case 51:return e.finish(44);case 52:return e.prev=52,e.next=55,j.save({table:"user"},y);case 55:l.setState({hasChanges:!1},function(){l.setEditability(!1)}),e.next=62;break;case 58:e.prev=58,e.t1=e.catch(52),N={unexpected:e.t1.message},l.setState({problems:N});case 62:case"end":return e.stop()}},e,n,[[19,40,44,52],[45,,47,51],[52,58]])}));return function(t){return e.apply(this,arguments)}}(),l.handleRowClick=function(e){var t=l.props.users,n=l.state,r=n.restoringUserIDs,s=n.disablingUserIDs,a=parseInt(e.currentTarget.getAttribute("data-user-id")),o=k.default.find(t,{id:a});o.deleted||o.disabled?r=k.default.includes(r,o.id)?k.default.without(r,o.id):k.default.concat(r,o.id):s=k.default.includes(s,o.id)?k.default.without(s,o.id):k.default.concat(s,o.id);var i=!k.default.isEmpty(r)||!k.default.isEmpty(s);l.setState({restoringUserIDs:r,disablingUserIDs:s,hasChanges:i})},l.components=(0,P.default)({confirmation:re.default}),l.state={sortColumns:["name"],sortDirections:["asc"],restoringUserIDs:[],disablingUserIDs:[],hasChanges:!1,renderingFullList:r,problems:{}},l}return(0,_.default)(t,e),(0,j.default)(t,[{key:"setEditability",value:function(e){var t=this.props.route,n={editing:e};return t.replace(t.name,n)}},{key:"render",value:function(){var e=this.props,t=e.route,n=e.env,r=this.state,l=r.hasChanges,s=r.problems,a=this.components.setters,o=n.locale.t;return T.default.createElement("div",{className:"user-list-page"},this.renderButtons(),T.default.createElement("h2",null,o("user-list-title")),T.default.createElement(oe.default,null,s.unexpected),this.renderTable(),T.default.createElement(re.default,{ref:a.confirmation,env:n}),T.default.createElement(se.default,{changes:l,env:n,route:t}))}},{key:"renderButtons",value:function(){var e=this.props,t=e.env,n=e.users,r=e.editing,l=this.state.hasChanges,s=t.locale.t;if(r)return T.default.createElement("div",{className:"buttons"},T.default.createElement($.default,{onClick:this.handleCancelClick},s("user-list-cancel"))," ",T.default.createElement($.default,{className:"emphasis",disabled:!l,onClick:this.handleSaveClick},s("user-list-save")));var a=k.default.isEmpty(n);return T.default.createElement("div",{className:"buttons"},T.default.createElement(z.default,null,T.default.createElement("option",{name:"add",onClick:this.handleAddClick},s("user-list-add")))," ",T.default.createElement($.default,{className:"emphasis",disabled:a,onClick:this.handleEditClick},s("user-list-edit")))}},{key:"renderTable",value:function(){var e=this.props.editing,t=this.state,n=t.renderingFullList,r=t.sortColumns,l=t.sortDirections,s={sortColumns:r,sortDirections:l,onSort:this.handleSort};return n&&(s.expanded=e,s.expandable=!0,s.selectable=!0),T.default.createElement(G.default,s,T.default.createElement("thead",null,this.renderHeadings()),T.default.createElement("tbody",null,this.renderRows()))}},{key:"renderHeadings",value:function(){return T.default.createElement("tr",null,this.renderNameColumn(),this.renderUsernameColumn(),this.renderTypeColumn(),this.renderRolesColumn(),this.renderProjectsColumn(),this.renderEmailColumn(),this.renderModifiedTimeColumn())}},{key:"renderRows",value:function(){var e=this,t=this.props,n=t.env,r=t.users,l=t.roles,s=t.projects,a=this.state,o=a.renderingFullList,i=a.sortColumns,u=a.sortDirections;return o||(r=pe(r)),r=fe(r,l,s,n,i,u),k.default.map(r,function(t){return e.renderRow(t)})}},{key:"renderRow",value:function(e){var t=this.props.env,n=this.state,r=n.renderingFullList,l=n.restoringUserIDs,s=n.disablingUserIDs,o=t.locale.t,i=[],u=void 0,d=void 0;e.deleted?(i.push("deleted"),d=o("user-list-status-deleted")):e.disabled&&(i.push("disabled"),d=o("user-list-status-disabled")),r&&(e.deleted||e.disabled?k.default.includes(l,e.id)&&i.push("selected"):(i.push("fixed"),k.default.includes(s,e.id)||i.push("selected")),u=this.handleRowClick);var c={className:i.join(" "),"data-user-id":e.id,title:d,onClick:u};return T.default.createElement("tr",(0,a.default)({key:e.id},c),this.renderNameColumn(e),this.renderUsernameColumn(e),this.renderTypeColumn(e),this.renderRolesColumn(e),this.renderProjectsColumn(e),this.renderEmailColumn(e),this.renderModifiedTimeColumn(e))}},{key:"renderNameColumn",value:function(e){var t=this.props,n=t.route,r=t.env,l=this.state,s=l.renderingFullList,a=l.restoringUserIDs,o=l.disablingUserIDs,i=r.locale,u=i.t,d=i.p;if(e){var c=d(e.details.name),m=void 0,f=void 0;if(s){var p=void 0,h=void 0;e.deleted||e.disabled?(p=!1,h=k.default.includes(a,e.id)):(p=!0,h=!k.default.includes(o,e.id)),p!==h&&(f=h?T.default.createElement(te.default,{type:"reactivate",env:r}):T.default.createElement(te.default,{type:"disable",env:r}))}else{var v={userID:e.id};m=n.find("user-summary-page",v)}var b=T.default.createElement(q.default,{user:e,env:r});return T.default.createElement("td",null,T.default.createElement("a",{href:m},b," ",c),f)}return T.default.createElement(B.TH,{id:"name"},u("table-heading-name"))}},{key:"renderUsernameColumn",value:function(e){var t=this.props.env,n=t.locale.t;return t.isWiderThan("narrow")?e?T.default.createElement("td",null,e.username):T.default.createElement(B.TH,{id:"username"},n("table-heading-username")):null}},{key:"renderTypeColumn",value:function(e){var t=this.props.env,n=t.locale.t;return t.isWiderThan("standard")?e?T.default.createElement("td",null,n("user-list-type-"+e.type)):T.default.createElement(B.TH,{id:"type"},n("table-heading-type")):null}},{key:"renderProjectsColumn",value:function(e){var t=this.props,n=t.route,r=t.env,l=t.projects,s=this.state.renderingFullList,a=r.locale.t;if(!r.isWiderThan("super-wide"))return null;if(e){var o={projects:he(l,e),omit:1,disabled:s,route:n,env:r};return T.default.createElement("td",null,T.default.createElement(Q.default,o))}return T.default.createElement(B.TH,{id:"projects"},a("table-heading-projects"))}},{key:"renderRolesColumn",value:function(e){var t=this.props,n=t.route,r=t.env,l=t.roles,s=this.state.renderingFullList,a=r.locale.t;if(!r.isWiderThan("wide"))return null;if(e){var o={roles:ve(l,e),disabled:s,route:n,env:r};return T.default.createElement("td",null,T.default.createElement(X.default,o))}return T.default.createElement(B.TH,{id:"roles"},a("table-heading-roles"))}},{key:"renderEmailColumn",value:function(e){var t=this.props.env,n=this.state.renderingFullList,r=t.locale.t;if(!t.isWiderThan("wide"))return null;if(e){var l="-",s=e.details.email;if(s){var a=void 0;n||(a="mailto:"+s),l=T.default.createElement("a",{href:a},s)}return T.default.createElement("td",{className:"email"},l)}return T.default.createElement(B.TH,{id:"email"},r("table-heading-email"))}},{key:"renderModifiedTimeColumn",value:function(e){var t=this.props.env,n=this.state.renderingFullList,r=t.locale.t;if(!t.isWiderThan("standard"))return null;if(e){var l={time:e.mtime,disabled:n,env:t};return T.default.createElement("td",null,T.default.createElement(Z.default,l))}return T.default.createElement(B.TH,{id:"mtime"},r("table-heading-last-modified"))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.editing,r=t.renderingFullList;return n&&!r?{renderingFullList:!0}:!n&&r?{renderingFullList:!1,restoringUserIDs:[],disablingUserIDs:[],hasChanges:!1,problems:{}}:null}}]),t}(w.PureComponent);me.displayName="UserListPageSync";var fe=(0,D.memoizeWeak)(null,function(e,t,n,r,l,s){var a=r.locale.p;return l=k.default.map(l,function(e){switch(e){case"name":return function(e){return a(e.details.name)};case"username":return function(e){return k.default.toLower(e.username)};case"type":return function(e){return k.default.indexOf(H.default,e.type)};case"roles":return function(e){var n=k.default.first(ve(t,e));return n?a(n.details.title)||n.name:""};case"projects":return function(e){var t=k.default.first(he(n,e));return t?a(t.details.title)||t.name:""};case"email":return"details.email";default:return e}}),k.default.orderBy(e,l,s)}),pe=(0,D.memoizeWeak)(null,function(e){return k.default.filter(e,function(e){return!0!==e.disabled&&!0!==e.deleted})}),he=(0,D.memoizeWeak)(null,function(e,t){return k.default.filter(e,function(e){return k.default.includes(e.user_ids,t.id)})}),ve=(0,D.memoizeWeak)(null,function(e,t){var n=k.default.keyBy(e,"id");return k.default.filter(k.default.map(t.role_ids,function(e){return n[e]}))});t.default=ce,t.UserListPage=ce,t.UserListPageSync=me},"./pages/user-list-page.scss":function(e,t){},"./tooltips/modified-time-tooltip.jsx":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ModifiedTimeTooltip=t.default=void 0;var l=n("../../common/node_modules/babel-runtime/core-js/get-iterator.js"),s=r(l),a=n("../../common/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),o=r(a),i=n("../../common/node_modules/babel-runtime/helpers/classCallCheck.js"),u=r(i),d=n("../../common/node_modules/babel-runtime/helpers/createClass.js"),c=r(d),m=n("../../common/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),f=r(m),p=n("../../common/node_modules/babel-runtime/helpers/inherits.js"),h=r(p),v=n("../../common/node_modules/lodash/lodash.js"),b=r(v),j=n("../../common/node_modules/react/index.js"),g=r(j),y=n("../../common/node_modules/moment/moment.js"),E=r(y),_=n("../../common/src/env/environment.js"),C=(r(_),n("./widgets/tooltip.jsx")),k=r(C),x=function(e){function t(e){(0,u.default)(this,t);var n=(0,f.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return n.state={relativeTime:null,absoluteTime:null},n}return(0,h.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props.disabled,t=this.state,n=t.relativeTime,r=t.absoluteTime;return g.default.createElement(k.default,{disabled:e},g.default.createElement("inline",null,n),g.default.createElement("window",null,r))}},{key:"componentDidMount",value:function(){w.push(this)}},{key:"componentWillUnmount",value:function(){b.default.pull(w,this)}}],[{key:"getDerivedStateFromProps",value:function(e){var t=e.env,n=e.time,r=t.locale.localeCode,l=void 0;return n&&(l=(0,E.default)(n),l.locale(r)),{relativeTime:l?l.fromNow():null,absoluteTime:l?l.format("lll"):null}}}]),t}(j.PureComponent);x.displayName="ModifiedTimeTooltip";var w=[];setInterval(function(){var e=!0,t=!1,n=void 0;try{for(var r,l=(0,s.default)(w);!(e=(r=l.next()).done);e=!0){r.value.forceUpdate()}}catch(e){t=!0,n=e}finally{try{!e&&l.return&&l.return()}finally{if(t)throw n}}},3e4),t.default=x,t.ModifiedTimeTooltip=x},"./tooltips/project-tooltip.jsx":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ProjectTooltip=t.default=void 0;var l=n("../../common/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),s=r(l),a=n("../../common/node_modules/babel-runtime/helpers/classCallCheck.js"),o=r(a),i=n("../../common/node_modules/babel-runtime/helpers/createClass.js"),u=r(i),d=n("../../common/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),c=r(d),m=n("../../common/node_modules/babel-runtime/helpers/inherits.js"),f=r(m),p=n("../../common/node_modules/lodash/lodash.js"),h=r(p),v=n("../../common/node_modules/react/index.js"),b=r(v),j=n("../../common/src/routing/route.js"),g=(r(j),n("../../common/src/env/environment.js")),y=(r(g),n("./widgets/tooltip.jsx")),E=r(y);n("./tooltips/project-tooltip.scss");var _=function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.route,n=e.env,r=e.projects,l=e.disabled,s=n.locale,a=s.t,o=s.p;if(!r)return null;var i="-";if(r.length>0){var u=r[0],d=void 0;l||(d=t.find("project-summary-page",{projectID:u.id}));var c=o(u.details.title)||u.name;i=b.default.createElement("a",{href:d,key:0},c),r=h.default.slice(r,1)}var m=void 0;if(r.length>0){var f=void 0,p=a("project-tooltip-$count-others",r.length);r.length>10&&(r=h.default.slice(r,0,10),f=b.default.createElement("div",{className:"ellipsis"},b.default.createElement("i",{className:"fa fa-ellipsis-v"})));var v=h.default.map(r,function(e,n){var r=t.find("project-summary-page",{project:e.id}),l=o(e.details.title)||e.name;return b.default.createElement("div",{className:"item",key:n},b.default.createElement("a",{href:r},l))}),j=t.find("project-list-page",{});m=a("tooltip-$first-and-$tooltip",i,b.default.createElement(E.default,{className:"project",disabled:l||0===v.length,key:1},b.default.createElement("inline",null,p),b.default.createElement("window",null,v,f,b.default.createElement("div",{className:"bottom"},b.default.createElement("a",{href:j},a("tooltip-more"))))))}else m=i;return b.default.createElement("span",null,m)}}]),t}(v.PureComponent);_.displayName="ProjectTooltip",t.default=_,t.ProjectTooltip=_},"./tooltips/project-tooltip.scss":function(e,t){},"./tooltips/role-tooltip.jsx":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.RoleTooltip=t.default=void 0;var l=n("../../common/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),s=r(l),a=n("../../common/node_modules/babel-runtime/helpers/classCallCheck.js"),o=r(a),i=n("../../common/node_modules/babel-runtime/helpers/createClass.js"),u=r(i),d=n("../../common/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),c=r(d),m=n("../../common/node_modules/babel-runtime/helpers/inherits.js"),f=r(m),p=n("../../common/node_modules/lodash/lodash.js"),h=r(p),v=n("../../common/node_modules/react/index.js"),b=r(v),j=n("./widgets/tooltip.jsx"),g=r(j);n("./tooltips/role-tooltip.scss");var y=n("../../common/src/routing/route.js"),E=(r(y),n("../../common/src/env/environment.js")),_=(r(E),function(e){function t(){return(0,o.default)(this,t),(0,c.default)(this,(t.__proto__||(0,s.default)(t)).apply(this,arguments))}return(0,f.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.route,n=e.env,r=e.roles,l=e.disabled,s=n.locale,a=s.t,o=s.p;if(!r)return null;var i="-";if(r.length>0){var u=r[0],d=void 0;l||(d=t.find("role-summary-page",{roleID:u.id}));var c=o(u.details.title)||u.name;i=b.default.createElement("a",{href:d,key:0},c),r=h.default.slice(r,1)}var m=void 0;if(r.length>0){var f=void 0,p=a("role-tooltip-$count-others",r.length);r.length>10&&(r=h.default.slice(r,0,10),f=b.default.createElement("div",{className:"ellipsis"},b.default.createElement("i",{className:"fa fa-ellipsis-v"})));var v=h.default.map(r,function(e,n){var r=t.find("role-summary-page",{roleID:e.id}),l=o(e.details.title)||e.name;return b.default.createElement("div",{className:"item",key:n},b.default.createElement("a",{href:r},l))}),j=t.find("role-list-page");m=a("tooltip-$first-and-$tooltip",i,b.default.createElement(g.default,{className:"role",disabled:l||0===v.length,key:1},b.default.createElement("inline",null,p),b.default.createElement("window",null,v,f,b.default.createElement("div",{className:"bottom"},b.default.createElement("a",{href:j},a("tooltip-more"))))))}else m=i;return b.default.createElement("span",null,m)}}]),t}(v.PureComponent));_.displayName="RoleTooltip",t.default=_,t.RoleTooltip=_},"./tooltips/role-tooltip.scss":function(e,t){}});