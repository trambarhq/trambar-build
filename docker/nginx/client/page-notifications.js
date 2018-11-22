webpackJsonp(["page-notifications"],{"../../common/src/objects/finders/story-finder.js":function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return t.findOne({table:"story",criteria:{id:e},required:!0})}function r(t,e){return j.default.isEmpty(e)?T.default.resolve(O):(e=j.default.sortBy(j.default.uniq(e)),t.find({table:"story",criteria:{id:e}}))}function s(t,e,i){return j.default.isEmpty(e)||!i?T.default.resolve(O):(e=j.default.sortBy(j.default.uniq(e)),t.find({table:"story",criteria:{id:e,published:!0,ready:!0,public:S(i)}}))}function a(t,e){return e?t.find({table:"story",criteria:{published:!1,user_ids:[e.id]}}):T.default.resolve(O)}function l(t,e,i,n){if(!e)return T.default.resolve(O);if(!i)return T.default.resolve(O);var o=j.default.filter(i,function(t){if(j.default.includes(t.user_ids,e.id)&&t.ptime>n)return!0}),r=j.default.map(o,"id");return t.find({table:"story",criteria:{exclude:r,user_ids:[e.id],newer_than:n,published:!0}})}function c(t,e,i,n,o){return t.find({table:"story",criteria:{search:{lang:i.languageCode,text:e},published:!0,ready:!0,public:S(n),limit:o?void 0:100,per_user_limit:o},remote:!0})}function u(t,e,i,n,o){return t.find({table:"story",criteria:{tags:e,published:!0,ready:!0,public:S(i),limit:n?void 0:500,per_user_limit:n},minimum:o})}function f(t,e,i,n,o){return t.find({table:"story",criteria:{time_range:k.getDayRange(e),published:!0,ready:!0,public:S(i),limit:n?void 0:500,per_user_limit:n},minimum:o})}function d(t,e,i,n){if(!i)return T.default.resolve(O);var o={table:"listing",criteria:{type:e,target_user_id:i.id,filters:{public:S(i)}},prefetch:!0};return n&&(o.blocking="stale"),t.findOne(o).then(function(n){return n?j.default.isEmpty(n.story_ids)&&n.dirty?t.await({table:"listing"},n,5e3).then(function(o){return o||t.refresh({table:"listing"},n),d(t,e,i)}):s(t,n.story_ids,i):null})}function h(t,e,i,n,o){return t.find({table:"story",criteria:{user_ids:[e.id],search:{lang:n.languageCode,text:i},published:!0,ready:!0,public:S(o),limit:100},remote:!0})}function p(t,e,i,n,o){return t.find({table:"story",criteria:{user_ids:[e.id],tags:i,published:!0,ready:!0,public:S(n),limit:500},minimum:o})}function m(t,e,i,n,o){return t.find({table:"story",criteria:{user_ids:[e.id],time_range:k.getDayRange(i),published:!0,ready:!0,public:S(n),limit:500},minimum:o})}function v(t,e,i,n,o){if(!n)return T.default.resolve(O);var r={table:"listing",criteria:{type:e,target_user_id:n.id,filters:{user_ids:[i.id],public:S(n)}},prefetch:!0};return o&&(r.blocking="stale"),t.findOne(r).then(function(o){return o?j.default.isEmpty(o.story_ids)&&o.dirty?t.await({table:"listing"},o,5e3).then(function(r){return r||t.refresh({table:"listing"},o),v(t,e,i,n)}):s(t,o.story_ids,n):null})}function g(t,e,i,n,o,r){var a={table:"listing",criteria:{type:e,target_user_id:n.id,filters:j.default.map(i,function(t){return{user_ids:[t.id],public:S(n)}})},prefetch:!0};return r&&(a.blocking="stale"),t.find(a).then(function(e){var i=j.default.flatten(j.default.map(e,function(t){return j.default.slice(t.story_ids,-o)}));return j.default.isEmpty(i)&&j.default.some(e,{dirty:!0})?null:s(t,i,n)})}function y(t,e,i,n,o){if(!n)return T.default.resolve(O);var r={table:"listing",criteria:{type:e,target_user_id:n.id,filters:{role_ids:i,public:S(n)}},prefetch:!0};return o&&(r.blocking="stale"),t.findOne(r).then(function(e){return e?j.default.isEmpty(e.story_ids)&&e.dirty?null:s(t,e.story_ids,n):null})}function b(t,e,i){return s(t,j.default.filter(j.default.map(e,"story_id")),i)}function _(t,e,i){return s(t,j.default.map(e,"story_id"),i)}function S(t){if(!t||"guest"===t.type)return!0}Object.defineProperty(e,"__esModule",{value:!0}),e.findStoriesOfBookmarks=e.findStoriesOfNotifications=e.findStoriesWithRolesInListing=e.findStoriesByUsersInListings=e.findStoriesByUserInListing=e.findStoriesByUserOnDate=e.findStoriesByUserWithTags=e.findStoriesByUserMatchingText=e.findStoriesInListing=e.findStoriesOnDate=e.findStoriesWithTags=e.findStoriesMatchingText=e.findUnlistedStories=e.findDraftStories=e.findStories=e.findStory=void 0;var w=i("../../common/node_modules/lodash/lodash.js"),j=n(w),N=i("../../common/node_modules/bluebird/js/browser/bluebird.js"),T=n(N),E=i("../../common/src/utils/date-utils.js"),k=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}(E),O=[];e.findStory=o,e.findStories=r,e.findDraftStories=a,e.findUnlistedStories=l,e.findStoriesMatchingText=c,e.findStoriesWithTags=u,e.findStoriesOnDate=f,e.findStoriesInListing=d,e.findStoriesByUserMatchingText=h,e.findStoriesByUserWithTags=p,e.findStoriesByUserOnDate=m,e.findStoriesByUserInListing=v,e.findStoriesByUsersInListings=g,e.findStoriesWithRolesInListing=y,e.findStoriesOfNotifications=b,e.findStoriesOfBookmarks=_},"../../common/src/widgets/smart-list.jsx":function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){this.node=t}Object.defineProperty(e,"__esModule",{value:!0}),e.SmartList=e.default=void 0;var l=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),c=i("../../common/node_modules/lodash/lodash.js"),u=n(c),f=i("../../common/node_modules/react/index.js"),d=n(f),h=i("../../common/src/utils/component-refs.js"),p=n(h);i("../../common/src/widgets/smart-list.scss");var m=/iPhone|iPad|iPod/.test(navigator.userAgent),v=function(t){function e(t){o(this,e);var i=r(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return i.handleScroll=function(t){var e=i.state,n=e.slots,o=e.currentAnchor;if(!i.scrollPositionInterval){if(i.resizing)return void i.maintainScrollPosition();var r=i.findAnchorSlot(n);r?r.id!==o&&(o=r.id,i.setState({currentAnchor:o},function(){i.triggerAnchorChangeEvent(r)})):o&&(o=null,i.setState({currentAnchor:o},function(){i.triggerAnchorChangeEvent(null)})),i.scrolling=!0,i.scrollingEndTimeout&&clearTimeout(i.scrollingEndTimeout),i.scrollingEndTimeout=setTimeout(function(){i.scrolling=!1,i.scrollingEndTimeout=0},500)}},i.handleWindowResize=function(t){var e=i.state.slots;i.scrollContainerWidth!==i.scrollContainer.clientWidth&&(i.scrollContainerWidth=i.scrollContainer.clientWidth,e=u.default.slice(e),u.default.each(e,function(t){t.height=void 0}),i.setState({slots:e,estimatedHeight:void 0}),i.resizing=!0,i.resizingEndTimeout&&clearTimeout(i.resizingEndTimeout),i.resizingEndTimeout=setTimeout(function(){i.resizing=!1,i.resizingEndTimeout=0},50))},i.handleTransitionEnd=function(t){var e=i.state,n=e.slots,o=e.currentAnchor;if(n=u.default.slice(n),"opacity"===t.propertyName){var r=u.default.find(n,{node:t.target});r&&"appearing"===r.state&&(r.state="present",r.transition=!1,i.setState({slots:n}),i.scrollToAnchorNode===t.target&&(i.maintainScrollPosition(),clearInterval(i.scrollPositionInterval),i.scrollPositionInterval=null,i.scrollToAnchorNode=null))}else if("height"===t.propertyName){var s=u.default.find(n,{node:t.target});if(s&&"disappearing"===s.state){var a=u.default.indexOf(n,s);n.splice(a,1);var l=i.findAnchorSlot(n);l&&l.id!==o&&(o=l.id,i.triggerAnchorChangeEvent(l)),i.setState({slots:n,currentAnchor:o})}}},i.components=(0,p.default)({container:HTMLDivElement}),i.state={},i.scrolling=!1,i.scrollContainer=null,i.scrollContainerWidth=0,i.scrollPositionInterval=0,i.scrollToAnchorNode=null,i.lastReportedAnchor=null,i.anchorEventTimeout=0,i.updateAnchor(t,i.state),i.updateSlots(t,i.state),i}return s(e,t),l(e,[{key:"componentWillReceiveProps",value:function(t){var e=this.props,i=e.anchor,n=e.items,o=u.default.clone(this.state);t.anchor!==i&&(!t.anchor&&t.noReset||this.updateAnchor(t,o)),t.items!==n&&this.updateSlots(t,o);var r=u.default.shallowDiff(o,this.state);u.default.isEmpty(r)||this.setState(r)}},{key:"shouldComponentUpdate",value:function(t,e){return!this.lastReportedAnchor||this.lastReportedAnchor!==e.currentAnchor||(this.lastReportedAnchor=null,!1)}},{key:"updateAnchor",value:function(t,e){e.currentAnchor!==t.anchor&&(e.currentAnchor=t.anchor||null,this.anchorOffset=t.offset)}},{key:"updateSlots",value:function(t,e){var i=this,n=this.props.transitioning,o=t.items,r=function(e,n,o){return t.onIdentity({type:"identity",target:i,item:e,currentIndex:n,alternative:o||!1})},s=function(e,n){return!t.onTransition||t.onTransition({type:"transition",target:i,item:e,currentIndex:n})},a=u.default.slice(e.slots),l=u.default.transform(a,function(t,e){t[e.id]=e},{}),c=!u.default.isEmpty(a),f={};u.default.each(o,function(t,e){var n=r(t,e),o=l[n];if(!o){var u=r(t,e,!0);u&&(o=l[u])&&(o.id=n)}if(o)o.item=t,o.index=e,"disappearing"===o.state&&(o.state="present");else{var d="present";c&&s(t,e)&&(d="appearing"),o=i.createSlot(n,t,e,d),a.push(o)}f[n]=!0}),u.default.each(a,function(t){f[t.id]||(c&&i.isSlotVisible(t)?t.state="disappearing":t.state="gone")});var d=0,h=0;u.default.each(a,function(t){"appearing"===t.state?d<n?d++:t.state="present":"disappearing"===t.state&&(h<n?h++:t.state="gone")});var p=u.default.remove(a,{state:"gone"});if(u.default.some(p,{unseen:!0})){var m=u.default.filter(a,{unseen:!0});this.triggerBeforeAnchorEvent(m)}e.slots=u.default.sortBy(a,"index")}},{key:"createSlot",value:function(t,e,i,n){var o={id:t,key:t,index:i,state:n,item:e,transition:!1,rendering:void 0,contents:null,unseen:!1,height:void 0,node:null,setter:null};return o.setter=a.bind(o),o}},{key:"render",value:function(){var t=this,e=this.props,i=e.onRender,n=e.ahead,o=e.behind,r=e.inverted,s=this.state,a=s.slots,l=s.currentAnchor,c=s.estimatedHeight,f=this.components.setters,h=0;l&&(h=u.default.findIndex(a,{id:l}));var p=Math.max(0,h-o),m=Math.min(u.default.size(a),h+n+1),v=u.default.map(a,function(e,n){var o=p<=n&&n<m,r=void 0;if("disappearing"!==e.state){var s={type:"render",target:t,item:e.item,needed:o,startIndex:p,currentIndex:n,endIndex:m,previousHeight:e.height,estimatedHeight:c};r=e.contents=i(s)}else r=e.contents;o&&(e.rendering=!0);var a="slot",l=void 0;return"appearing"===e.state?(a+=" transition in",e.transition?l={height:e.height}:a+=" hidden"):"disappearing"===e.state&&(a+=" transition out",e.transition?a+=" hidden":l={height:e.height}),d.default.createElement("div",{key:e.key,ref:e.setter,className:a,style:l},r)});return this.startIndex=p,this.endIndex=m,r&&u.default.reverse(v),d.default.createElement("div",{ref:f.container,className:"smart-list",onTransitionEnd:this.handleTransitionEnd},v)}},{key:"componentDidMount",value:function(){for(var t=this.components.container,e=t.parentNode;e;e=e.parentNode){var i=getComputedStyle(e);if("auto"===i.overflowY||"scroll"===i.overflowY){this.scrollContainer=e;break}}this.scrollContainerWidth=this.scrollContainer.clientWidth,this.scrollContainer.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleWindowResize),this.maintainScrollPosition(),this.setSlotHeights()}},{key:"componentDidUpdate",value:function(t,e){var i=this.state.currentAnchor;(!this.scrolling||e.currentAnchor&&!i)&&this.maintainScrollPosition(),this.setSlotHeights(),this.markUnseenSlots(),this.setTransitionState()}},{key:"maintainScrollPosition",value:function(){var t=this.props.inverted,e=this.state,i=e.slots,n=e.currentAnchor,o=void 0,r=void 0;if(n?(o=u.default.find(i,{id:n}),r=this.anchorOffset):t&&(o=u.default.first(i),r=1/0),o&&o.node){if(void 0!==r){var s=this.scrollContainer.offsetTop,a=this.scrollContainer.scrollTop,l=o.node.offsetTop-s;if(t){var c=this.scrollContainer.scrollHeight,f=this.scrollContainer.offsetHeight,d=c-a-f,h=o.node.offsetHeight,p=c-l-h,v=p-d;if(v!==r){var g=Math.max(0,p-r),y=c-g-f;this.scrollContainer.scrollTop=y}}else{var b=l-a;if(b!==r){var _=Math.max(0,l-r);this.scrollContainer.scrollTop=_}}}}else m&&this.scrolling?(this.scrollContainer.style.overflowY="hidden",this.scrollContainer.scrollTop=0,this.scrollContainer.style.overflowY="scroll"):this.scrollContainer.scrollTop=0}},{key:"isSlotVisible",value:function(t){if(!t.rendering||!t.node)return!1;if(t.transition)return!0;if(this.scrollContainer){var e=this.scrollContainer.offsetHeight,i=this.scrollContainer.offsetTop,n=this.scrollContainer.scrollTop,o=n+e,r=t.node.offsetTop-i;if(n<r&&r<=o)return!0;var s=r+t.height;if(n<s&&s<=o)return!0}return!1}},{key:"setSlotHeights",value:function(){var t=this.state,e=t.slots,i=t.estimatedHeight,n=[];if(u.default.each(e,function(t){if(t.rendering){var e=t.node.firstChild,i=e?e.offsetHeight:0;t.height=i,n.push(i)}}),void 0===i&&!u.default.isEmpty(n)){var o=u.default.sum(n)/n.length,r=Math.round(o);0!==r&&this.setState({estimatedHeight:r})}}},{key:"markUnseenSlots",value:function(){var t=this,e=this.state,i=e.slots,n=e.currentAnchor,o=u.default.findIndex(i,{id:n}),r=!1;if(u.default.each(i,function(e,i){"appearing"===e.state?i<o&&(t.isSlotVisible(e)||(e.unseen=!0,r=!0)):e.unseen&&i>=o&&(e.unseen=!1,r=!0)}),r){var s=u.default.filter(i,{unseen:!0});this.triggerBeforeAnchorEvent(s)}}},{key:"setTransitionState",value:function(){var t=this,e=this.props.inverted,i=this.state,n=i.slots,o=i.currentAnchor,r=!1;u.default.each(n,function(i){if(("appearing"===i.state||"disappearing"===i.state)&&!i.transition){var n=t.isSlotVisible(i);e&&("appearing"!==i.state||o||(t.scrollPositionInterval||(t.scrollPositionInterval=setInterval(function(){t.maintainScrollPosition()},10)),t.scrollToAnchorNode=i.node,n=!0)),n?i.transition=!0:i.state="present",r=!0}}),r&&this.setState({slots:n})}},{key:"componentWillUnmount",value:function(){this.scrollContainer.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleWindowResize),clearTimeout(this.anchorEventTimeout)}},{key:"triggerAnchorChangeEvent",value:function(t){var e=this.props.onAnchorChange;if(e){var i=t?t.item:null;e({type:"anchorchange",target:this,anchor:this.lastReportedAnchor=t?t.id:null,item:i})}}},{key:"triggerBeforeAnchorEvent",value:function(t){var e=this,i=this.props.onBeforeAnchor;i&&(clearTimeout(this.anchorEventTimeout),this.anchorEventTimeout=setTimeout(function(){i({type:"beforeanchor",target:e,items:u.default.map(t,"item")})},250))}},{key:"findAnchorSlot",value:function(t){var e=this.props.inverted,i=this.scrollContainer.scrollTop,n=this.scrollContainer.offsetTop,o=void 0;if(e){var r=this.scrollContainer.scrollHeight,s=this.scrollContainer.offsetHeight,a=r-i-s;if(a>0)for(var l=0;l<t.length;l++){var c=t[l];o=c;var u=o.node.offsetTop-n,f=o.node.offsetHeight,d=r-u-f;if(d>a)break}this.anchorOffset=o?void 0-a:void 0}else{var h=void 0;if(i>0)for(var p=0;p<t.length;p++){var m=t[p];if(o=m,(h=o.node.offsetTop-n)>i)break}this.anchorOffset=o?h-i:void 0}return o}}]),e}(f.Component);v.displayName="SmartList",v.defaultProps={behind:5,ahead:10,offset:0,inverted:!1,transitioning:5,noReset:!1},e.default=v,e.SmartList=v},"../../common/src/widgets/smart-list.scss":function(t,e){},"./lists/notification-list.jsx":function(t,e,i){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.NotificationListSync=e.NotificationList=e.default=void 0;var l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},c=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),u=i("../../common/node_modules/lodash/lodash.js"),f=o(u),d=i("../../common/node_modules/react/index.js"),h=o(d),p=i("../../common/node_modules/relaks/index.js"),m=i("../../common/src/utils/memoize.js"),v=i("../../common/src/data/merger.js"),g=(o(v),i("../../common/src/objects/finders/user-finder.js")),y=n(g),b=i("../../common/src/objects/finders/story-finder.js"),_=n(b),S=i("../../common/src/widgets/smart-list.jsx"),w=o(S),j=i("./views/notification-view.jsx"),N=o(j),T=i("./widgets/new-items-alert.jsx"),E=o(T),k=i("../../common/src/widgets/error-boundary.jsx"),O=o(k);i("./lists/notification-list.scss");var A=i("../../common/src/data/database.js"),C=(o(A),i("../../common/src/routing/route.js")),I=(o(C),i("../../common/src/env/environment.js")),P=(o(I),function(t){function e(){return r(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),c(e,[{key:"renderAsync",value:function(t){var e=this.props,i=e.database,n=e.route,o=e.env,r=e.currentUser,s=e.notifications,a=e.scrollToNotificationID,l=i.use({by:this}),c={users:void 0,stories:void 0,currentUser:r,notifications:s,database:i,route:n,env:o,scrollToNotificationID:a};return t.show(h.default.createElement(x,c)),l.start().then(function(t){return y.findNotificationTriggerers(l,c.notifications).then(function(t){c.users=t})}).then(function(){return t.show(h.default.createElement(x,c)),_.findStoriesOfNotifications(l,c.notifications,c.currentUser).then(function(t){c.stories=t})}).then(function(){return h.default.createElement(x,c)})}}]),e}(p.AsyncComponent));P.displayName="NotificationList";var x=function(t){function e(t){r(this,e);var i=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return D.call(i),i.state={hiddenNotificationIDs:[]},i.notificationViewDurations={},i.notificationViewInterval=0,i}return a(e,t),c(e,[{key:"render",value:function(){var t=this.props,e=(t.route,t.notifications),i=t.scrollToNotificationID,n=i,o={items:U(e),behind:20,ahead:40,anchor:n?"notification-"+n:void 0,offset:10,onIdentity:this.handleNotificationIdentity,onRender:this.handleNotificationRender,onAnchorChange:this.handleNotificationAnchorChange,onBeforeAnchor:this.handleNotificationBeforeAnchor};return h.default.createElement("div",{className:"notification-list"},h.default.createElement(w.default,o),this.renderNewNotificationAlert())}},{key:"renderNewNotificationAlert",value:function(){var t=this.props,e=t.route,i=t.env,n=this.state.hiddenNotificationIDs,o=i.locale.t,r=f.default.size(n),s=void 0;f.default.isEmpty(n)||(s=e.find(e.name,{highlightingNotification:f.default.first(n)}));var a={url:s,onClick:this.handleNewNotificationAlertClick};return h.default.createElement(E.default,a,o("alert-$count-new-notifications",r))}},{key:"componentDidMount",value:function(){this.notificationViewInterval=setInterval(this.updateNotificationView.bind(this),250)}},{key:"componentWillUnmount",value:function(){clearInterval(this.notificationViewInterval)}},{key:"updateNotificationView",value:function(){var t=this,e=this.props,i=e.env,n=e.notifications,o=e.hiddenNotificationIDs;if(i.focus&&i.visible){var r=f.default.filter(n,function(t){if(!t.seen&&!f.default.includes(o,t.id))return!0});if(f.default.remove(r,function(e){var i=t.notificationViewDurations[e.id]||0;if(i+=250,t.notificationViewDurations[e.id]=i,i<3e3)return!0}),!f.default.isEmpty(r)){var s=1500*r.length;s<3e3?s=3e3:s>5e3&&(s=5e3);f.default.every(r,function(e){return(t.notificationViewDurations[e.id]||0)>s})&&this.markAsSeen(r)}}}},{key:"reanchorAtNotification",value:function(t){var e=this.props.route,i={scrollToNotificationID:t};e.reanchor(i)}},{key:"markAsSeen",value:function(t){var e=this.props.database,i=e.use({by:this}),n=f.default.map(t,function(t){return{id:t.id,seen:!0}});return i.save({table:"notification"},n)}}]),e}(d.PureComponent);x.displayName="NotificationListSync";var D=function(){var t=this;this.handleNotificationIdentity=function(t){return"notification-"+t.item.id},this.handleNotificationRender=function(e){var i=t.props,n=i.database,o=i.route,r=i.env,s=i.users;if(e.needed){var a=e.item,c=M(s,a),u={notification:a,user:c,database:n,route:o,env:r,onClick:t.handleNotificationClick};return h.default.createElement(O.default,{env:r},h.default.createElement(N.default,l({key:a.id},u)))}var f=e.previousHeight||e.estimatedHeight||25;return h.default.createElement("div",{className:"notification-view",style:{height:f}})},this.handleNotificationClick=function(e){var i=e.target.props.notification;i.seen||t.markAsSeen([i])},this.handleNotificationAnchorChange=function(e){t.reanchorAtNotification(e.item?e.item.id:void 0)},this.handleNotificationBeforeAnchor=function(e){var i=f.default.map(e.items,"id");t.setState({hiddenNotificationIDs:i})},this.handleNewNotificationAlertClick=function(e){t.setState({hiddenNotificationIDs:[]})}},U=(0,m.memoizeWeak)(null,function(t){return f.default.orderBy(t,["ctime"],["desc"])}),M=(0,m.memoizeWeak)(null,function(t,e){if(e)return f.default.find(t,{id:e.user_id})});e.default=P,e.NotificationList=P,e.NotificationListSync=x},"./lists/notification-list.scss":function(t,e){},"./pages/notifications-page.jsx":function(t,e,i){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e.default=t,e}function o(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),e.NotificationsPageSync=e.NotificationsPage=e.default=void 0;var l=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),c=i("../../common/node_modules/lodash/lodash.js"),u=o(c),f=i("../../common/node_modules/moment/moment.js"),d=(o(f),i("../../common/node_modules/react/index.js")),h=o(d),p=i("../../common/node_modules/relaks/index.js"),m=i("../../common/src/objects/finders/user-finder.js"),v=n(m),g=i("../../common/src/objects/finders/notification-finder.js"),y=n(g),b=i("./widgets/page-container.jsx"),_=o(b),S=i("./lists/notification-list.jsx"),w=o(S),j=i("./widgets/loading-animation.jsx"),N=o(j),T=i("./widgets/empty-message.jsx"),E=o(T);i("./pages/notifications-page.scss");var k=i("../../common/src/data/database.js"),O=(o(k),i("../../common/src/routing/route.js")),A=(o(O),i("../../common/src/env/environment.js")),C=(o(A),function(t){function e(){return r(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),l(e,[{key:"renderAsync",value:function(t){var e=this.props,i=e.database,n=e.route,o=e.env,r=e.date,s=e.scrollToNotificationID,a=i.use({by:this}),l={currentUser:void 0,notifications:void 0,date:r,scrollToNotificationID:s,database:i,route:n,env:o};return t.show(h.default.createElement(I,l)),a.start().then(function(t){return v.findUser(a,t).then(function(t){l.currentUser=t})}).then(function(){return r?y.findNotificationsForUserOnDate(a,l.currentUser,r).then(function(t){l.notifications=t}):y.findNotificationsForUser(a,l.currentUser).then(function(t){l.notifications=t})}).then(function(){return h.default.createElement(I,l)})}}]),e}(p.AsyncComponent));C.displayName="NotificationsPage";var I=function(t){function e(){return r(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),l(e,[{key:"render",value:function(){return h.default.createElement(_.default,{className:"notifications-page"},this.renderList(),this.renderEmptyMessage())}},{key:"renderList",value:function(){var t=this.props,e=t.database,i=t.route,n=t.env,o=t.notifications,r=t.currentUser,s=t.scrollToNotificationID,a={notifications:o,currentUser:r,database:e,route:i,env:n,scrollToNotificationID:s};return h.default.createElement(w.default,a)}},{key:"renderEmptyMessage",value:function(){var t=this.props,e=t.env,i=t.notifications,n=t.date;if(!u.default.isEmpty(i))return null;if(i){var o=void 0;o=n?"notifications-no-notifications-on-date":"notifications-no-notifications-yet";var r={phrase:o,env:e};return h.default.createElement(E.default,r)}return h.default.createElement(N.default,null)}}]),e}(d.PureComponent);I.displayName="NotificationsPageSync",e.default=C,e.NotificationsPage=C,e.NotificationsPageSync=I},"./pages/notifications-page.scss":function(t,e){}});