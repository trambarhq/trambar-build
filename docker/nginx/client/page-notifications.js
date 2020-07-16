webpackJsonp(["page-notifications"],{"../../common/src/objects/finders/story-finder.js":function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t){if(!t||"guest"===t.type)return!0}Object.defineProperty(e,"__esModule",{value:!0}),e.findStoriesOfBookmarks=e.findStoriesOfNotifications=e.findStoriesWithRolesInListing=e.findStoriesByUsersInListings=e.findStoriesByUserInListing=e.findStoriesByUserOnDate=e.findStoriesByUserWithTags=e.findStoriesByUserMatchingText=e.findStoriesInListing=e.findStoriesOnDate=e.findStoriesWithTags=e.findStoriesMatchingText=e.findUnlistedStories=e.findDraftStories=e.findStories=e.findStory=void 0;var o=n("../../common/node_modules/babel-runtime/regenerator/index.js"),s=r(o),a=n("../../common/node_modules/babel-runtime/helpers/asyncToGenerator.js"),l=r(a),u=function(){var t=(0,l.default)(s.default.mark(function t(e,n){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.findOne({table:"story",criteria:{id:n},required:!0}));case 1:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),c=function(){var t=(0,l.default)(s.default.mark(function t(e,n){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!C.default.isEmpty(n)){t.next=2;break}return t.abrupt("return",A);case 2:return n=C.default.sortBy(C.default.uniq(n)),t.abrupt("return",e.find({table:"story",criteria:{id:n}}));case 4:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),d=function(){var t=(0,l.default)(s.default.mark(function t(e,n,r){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!C.default.isEmpty(n)&&r){t.next=2;break}return t.abrupt("return",A);case 2:return n=C.default.sortBy(C.default.uniq(n)),t.abrupt("return",e.find({table:"story",criteria:{id:n,published:!0,ready:!0,public:i(r)}}));case 4:case"end":return t.stop()}},t,this)}));return function(e,n,r){return t.apply(this,arguments)}}(),f=function(){var t=(0,l.default)(s.default.mark(function t(e,n){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return",A);case 2:return t.abrupt("return",e.find({table:"story",criteria:{published:!1,user_ids:[n.id]}}));case 3:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),h=function(){var t=(0,l.default)(s.default.mark(function t(e,n,r,i){var o,a;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return",A);case 2:if(r){t.next=4;break}return t.abrupt("return",A);case 4:return o=C.default.filter(r,function(t){if(C.default.includes(t.user_ids,n.id)&&t.ptime>i)return!0}),a=C.default.map(o,"id"),t.abrupt("return",e.find({table:"story",criteria:{exclude:a,user_ids:[n.id],newer_than:i,published:!0}}));case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,i){return t.apply(this,arguments)}}(),p=function(){var t=(0,l.default)(s.default.mark(function t(e,n,r,o,a){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.find({table:"story",criteria:{search:{lang:r.languageCode,text:n},published:!0,ready:!0,public:i(o),limit:a?void 0:100,per_user_limit:a},remote:!0}));case 1:case"end":return t.stop()}},t,this)}));return function(e,n,r,i,o){return t.apply(this,arguments)}}(),m=function(){var t=(0,l.default)(s.default.mark(function t(e,n,r,o,a){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.find({table:"story",criteria:{tags:n,published:!0,ready:!0,public:i(r),limit:o?void 0:500,per_user_limit:o},minimum:a}));case 1:case"end":return t.stop()}},t,this)}));return function(e,n,r,i,o){return t.apply(this,arguments)}}(),v=function(){var t=(0,l.default)(s.default.mark(function t(e,n,r,o,a){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.find({table:"story",criteria:{time_range:E.getDayRange(n),published:!0,ready:!0,public:i(r),limit:o?void 0:500,per_user_limit:o},minimum:a}));case 1:case"end":return t.stop()}},t,this)}));return function(e,n,r,i,o){return t.apply(this,arguments)}}(),y=function(){var t=(0,l.default)(s.default.mark(function t(e,n,r,o){var a,l,u;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",A);case 2:return a={table:"listing",criteria:{type:n,target_user_id:r.id,filters:{public:i(r)}},prefetch:!0},o&&(a.blocking="stale"),t.next=6,e.findOne(a);case 6:if(l=t.sent){t.next=9;break}throw new Error("No story listing");case 9:if(!C.default.isEmpty(l.story_ids)||!l.dirty){t.next=15;break}return t.next=12,e.waitForChange({table:"listing"},l,5e3);case 12:return u=t.sent,u||e.refresh({table:"listing"},l),t.abrupt("return",y(e,n,r));case 15:return t.abrupt("return",d(e,l.story_ids,r));case 16:case"end":return t.stop()}},t,this)}));return function(e,n,r,i){return t.apply(this,arguments)}}(),g=function(){var t=(0,l.default)(s.default.mark(function t(e,n,r,o,a){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.find({table:"story",criteria:{user_ids:[n.id],search:{lang:o.languageCode,text:r},published:!0,ready:!0,public:i(a),limit:100},remote:!0}));case 1:case"end":return t.stop()}},t,this)}));return function(e,n,r,i,o){return t.apply(this,arguments)}}(),b=function(){var t=(0,l.default)(s.default.mark(function t(e,n,r,o,a){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.find({table:"story",criteria:{user_ids:[n.id],tags:r,published:!0,ready:!0,public:i(o),limit:500},minimum:a}));case 1:case"end":return t.stop()}},t,this)}));return function(e,n,r,i,o){return t.apply(this,arguments)}}(),_=function(){var t=(0,l.default)(s.default.mark(function t(e,n,r,o,a){return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.find({table:"story",criteria:{user_ids:[n.id],time_range:E.getDayRange(r),published:!0,ready:!0,public:i(o),limit:500},minimum:a}));case 1:case"end":return t.stop()}},t,this)}));return function(e,n,r,i,o){return t.apply(this,arguments)}}(),k=function(){var t=(0,l.default)(s.default.mark(function t(e,n,r,o,a){var l,u,c;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o){t.next=2;break}return t.abrupt("return",A);case 2:return l={table:"listing",criteria:{type:n,target_user_id:o.id,filters:{user_ids:[r.id],public:i(o)}},prefetch:!0},a&&(l.blocking="stale"),t.next=6,e.findOne(l);case 6:if(u=t.sent){t.next=9;break}return t.abrupt("return",null);case 9:if(!C.default.isEmpty(u.story_ids)||!u.dirty){t.next=15;break}return t.next=12,e.waitForChange({table:"listing"},u,5e3);case 12:return c=t.sent,c||e.refresh({table:"listing"},u),t.abrupt("return",k(e,n,r,o));case 15:return t.abrupt("return",d(e,u.story_ids,o));case 16:case"end":return t.stop()}},t,this)}));return function(e,n,r,i,o){return t.apply(this,arguments)}}(),x=function(){var t=(0,l.default)(s.default.mark(function t(e,n,r,o,a,l){var u,c,f;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u={table:"listing",criteria:{type:n,target_user_id:o.id,filters:C.default.map(r,function(t){return{user_ids:[t.id],public:i(o)}})},prefetch:!0},l&&(u.blocking="stale"),t.next=4,e.find(u);case 4:if(c=t.sent,f=C.default.flatten(C.default.map(c,function(t){return C.default.slice(t.story_ids,-a)})),!C.default.isEmpty(f)){t.next=9;break}if(!C.default.some(c,{dirty:!0})){t.next=9;break}return t.abrupt("return",null);case 9:return t.abrupt("return",d(e,f,o));case 10:case"end":return t.stop()}},t,this)}));return function(e,n,r,i,o,s){return t.apply(this,arguments)}}(),w=function(){var t=(0,l.default)(s.default.mark(function t(e,n,r,o,a){var l,u;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(o){t.next=2;break}return t.abrupt("return",A);case 2:return l={table:"listing",criteria:{type:n,target_user_id:o.id,filters:{role_ids:r,public:i(o)}},prefetch:!0},a&&(l.blocking="stale"),t.next=6,e.findOne(l);case 6:if(u=t.sent){t.next=9;break}return t.abrupt("return",null);case 9:if(!C.default.isEmpty(u.story_ids)||!u.dirty){t.next=11;break}return t.abrupt("return",null);case 11:return t.abrupt("return",d(e,u.story_ids,o));case 12:case"end":return t.stop()}},t,this)}));return function(e,n,r,i,o){return t.apply(this,arguments)}}(),S=function(){var t=(0,l.default)(s.default.mark(function t(e,n,r){var i;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=C.default.filter(C.default.map(n,"story_id")),t.abrupt("return",d(e,i,r));case 2:case"end":return t.stop()}},t,this)}));return function(e,n,r){return t.apply(this,arguments)}}(),j=function(){var t=(0,l.default)(s.default.mark(function t(e,n,r){var i;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=C.default.map(n,"story_id"),t.abrupt("return",d(e,i,r));case 2:case"end":return t.stop()}},t,this)}));return function(e,n,r){return t.apply(this,arguments)}}(),N=n("../../common/node_modules/lodash/lodash.js"),C=r(N),T=n("../../common/src/utils/date-utils.js"),E=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(T),A=[];e.findStory=u,e.findStories=c,e.findDraftStories=f,e.findUnlistedStories=h,e.findStoriesMatchingText=p,e.findStoriesWithTags=m,e.findStoriesOnDate=v,e.findStoriesInListing=y,e.findStoriesByUserMatchingText=g,e.findStoriesByUserWithTags=b,e.findStoriesByUserOnDate=_,e.findStoriesByUserInListing=k,e.findStoriesByUsersInListings=x,e.findStoriesWithRolesInListing=w,e.findStoriesOfNotifications=S,e.findStoriesOfBookmarks=j},"../../common/src/widgets/smart-list.jsx":function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function i(t){this.node=t}Object.defineProperty(e,"__esModule",{value:!0}),e.SmartList=e.default=void 0;var o=n("../../common/node_modules/babel-runtime/helpers/slicedToArray.js"),s=r(o),a=n("../../common/node_modules/babel-runtime/core-js/get-iterator.js"),l=r(a),u=n("../../common/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),c=r(u),d=n("../../common/node_modules/babel-runtime/helpers/classCallCheck.js"),f=r(d),h=n("../../common/node_modules/babel-runtime/helpers/createClass.js"),p=r(h),m=n("../../common/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),v=r(m),y=n("../../common/node_modules/babel-runtime/helpers/inherits.js"),g=r(y),b=n("../../common/node_modules/lodash/lodash.js"),_=r(b),k=n("../../common/node_modules/react/index.js"),x=r(k),w=n("../../common/src/utils/component-refs.js"),S=r(w);n("../../common/src/widgets/smart-list.scss");var j=/iPhone|iPad|iPod/.test(navigator.userAgent),N=function(t){function e(t){(0,f.default)(this,e);var n=(0,v.default)(this,(e.__proto__||(0,c.default)(e)).call(this,t));return n.handleScroll=function(t){var e=n.state,r=e.slots,i=e.currentAnchor;if(!n.scrollPositionInterval){if(n.resizing)return void n.maintainScrollPosition();var o=n.findAnchorSlot(r),s=void 0;o&&(s=o.id),s!==i&&n.setState({currentAnchor:s}),n.scrolling=!0,n.scrollingEndTimeout&&clearTimeout(n.scrollingEndTimeout),n.scrollingEndTimeout=setTimeout(function(){n.scrolling=!1,n.scrollingEndTimeout=0,n.triggerAnchorChangeEvent(o)},500)}},n.handleWindowResize=function(t){var e=n.state.slots;if(n.scrollContainerWidth!==n.scrollContainer.clientWidth){n.scrollContainerWidth=n.scrollContainer.clientWidth,e=_.default.slice(e);var r=!0,i=!1,o=void 0;try{for(var s,a=(0,l.default)(e);!(r=(s=a.next()).done);r=!0){s.value.height=void 0}}catch(t){i=!0,o=t}finally{try{!r&&a.return&&a.return()}finally{if(i)throw o}}n.setState({slots:e,estimatedHeight:void 0}),n.resizing=!0,n.resizingEndTimeout&&clearTimeout(n.resizingEndTimeout),n.resizingEndTimeout=setTimeout(function(){n.resizing=!1,n.resizingEndTimeout=0},50)}},n.handleTransitionEnd=function(t){var e=n.state,r=e.slots,i=e.currentAnchor;r=_.default.slice(r);var o=_.default.find(r,{node:t.target});if(o)if("appearing"===o.state)"opacity"===t.propertyName&&(o.state="present",o.transition=!1,n.setState({slots:r}),n.scrollToAnchorNode===t.target&&(n.maintainScrollPosition(),clearInterval(n.scrollPositionInterval),n.scrollPositionInterval=null,n.scrollToAnchorNode=null));else if("disappearing"===o.state&&("height"===t.propertyName||0===o.node.clientHeight)){var s=_.default.indexOf(r,o);r.splice(s,1);var a=n.findAnchorSlot(r);a&&a.id!==i&&(i=a.id,n.triggerAnchorChangeEvent(a)),n.setState({slots:r,currentAnchor:i})}},n.components=(0,S.default)({container:HTMLDivElement}),n.state={},n.scrolling=!1,n.scrollingInterrupted=!1,n.scrollContainer=null,n.scrollContainerWidth=0,n.scrollPositionInterval=0,n.scrollToAnchorNode=null,n.lastReportedAnchor=null,n.updateAnchor(t,n.state),n.updateSlots(t,n.state),n}return(0,g.default)(e,t),(0,p.default)(e,[{key:"componentWillReceiveProps",value:function(t){var e=this.props,n=e.anchor,r=e.items,i=_.default.clone(this.state);t.anchor!==n&&(!t.anchor&&t.noReset||this.updateAnchor(t,i)),t.items!==r&&this.updateSlots(t,i);var o=_.default.shallowDiff(i,this.state);_.default.isEmpty(o)||this.setState(o)}},{key:"shouldComponentUpdate",value:function(t,e){return!this.lastReportedAnchor||this.lastReportedAnchor!==e.currentAnchor||(this.lastReportedAnchor=null,!1)}},{key:"updateAnchor",value:function(t,e){e.currentAnchor!==t.anchor&&(e.currentAnchor=t.anchor||void 0,this.anchorOffset=t.offset,this.scrolling&&(this.scrollingInterrupted=!0))}},{key:"updateSlots",value:function(t,e){var n=this,r=this.props.transitioning,i=t.items||[],o=function(e,r,i){return t.onIdentity({type:"identity",target:n,item:e,currentIndex:r,alternative:i||!1})},a=_.default.slice(e.slots),u=_.default.transform(a,function(t,e){t[e.id]=e},{}),c=!_.default.isEmpty(a),d={},f=!0,h=!1,p=void 0;try{for(var m,v=(0,l.default)(i.entries());!(f=(m=v.next()).done);f=!0){var y=m.value,g=(0,s.default)(y,2),b=g[0],k=g[1],x=o(k,b),w=u[x];if(!w){var S=o(k,b,!0);S&&(w=u[S])&&(w.id=x)}if(w)w.item=k,w.index=b,"disappearing"===w.state&&(w.state="present");else{var j="present";c&&function(e,r){return!t.onTransition||t.onTransition({type:"transition",target:n,item:e,currentIndex:r})}(k,b)&&(j="appearing"),w=this.createSlot(x,k,b,j),a.push(w)}d[x]=!0}}catch(t){h=!0,p=t}finally{try{!f&&v.return&&v.return()}finally{if(h)throw p}}var N=!0,C=!1,T=void 0;try{for(var E,A=(0,l.default)(a);!(N=(E=A.next()).done);N=!0){var w=E.value;d[w.id]||(c&&this.isSlotVisible(w)?w.state="disappearing":w.state="gone")}}catch(t){C=!0,T=t}finally{try{!N&&A.return&&A.return()}finally{if(C)throw T}}var I=0,P=0,D=!0,U=!1,O=void 0;try{for(var M,L=(0,l.default)(a);!(D=(M=L.next()).done);D=!0){var B=M.value;"appearing"===B.state?I<r?I++:B.state="present":"disappearing"===B.state&&(P<r?P++:B.state="gone")}}catch(t){U=!0,O=t}finally{try{!D&&L.return&&L.return()}finally{if(U)throw O}}var R=_.default.remove(a,{state:"gone"});if(_.default.some(R,{unseen:!0})){var H=_.default.filter(a,{unseen:!0});this.triggerBeforeAnchorEvent(H)}e.slots=_.default.sortBy(a,"index")}},{key:"createSlot",value:function(t,e,n,r){var o={id:t,key:t,index:n,state:r,item:e,transition:!1,rendering:void 0,contents:null,unseen:!1,height:void 0,node:null,setter:null};return o.setter=i.bind(o),o}},{key:"render",value:function(){var t=this,e=this.props,n=e.onRender,r=e.ahead,i=e.behind,o=e.inverted,s=this.state,a=s.slots,l=s.currentAnchor,u=s.estimatedHeight,c=this.components.setters,d=0;l&&(d=_.default.findIndex(a,{id:l}));var f=Math.max(0,d-i),h=Math.min(_.default.size(a),d+r+1),p=_.default.map(a,function(e,r){var i=f<=r&&r<h,o=void 0;if("disappearing"!==e.state){var s={type:"render",target:t,item:e.item,needed:i,startIndex:f,currentIndex:r,endIndex:h,previousHeight:e.height,estimatedHeight:u};o=e.contents=n(s)}else o=e.contents;i&&(e.rendering=!0);var a="slot",l=void 0;return"appearing"===e.state?(a+=" transition in",e.transition?l={height:e.height}:a+=" hidden"):"disappearing"===e.state&&(a+=" transition out",e.transition?a+=" hidden":l={height:e.height}),x.default.createElement("div",{key:e.key,ref:e.setter,className:a,style:l},o)});return this.startIndex=f,this.endIndex=h,o&&_.default.reverse(p),x.default.createElement("div",{ref:c.container,className:"smart-list",onTransitionEnd:this.handleTransitionEnd},p)}},{key:"componentDidMount",value:function(){for(var t=this.components.container,e=t.parentNode;e;e=e.parentNode){var n=getComputedStyle(e);if("auto"===n.overflowY||"scroll"===n.overflowY){this.scrollContainer=e;break}}this.scrollContainerWidth=this.scrollContainer.clientWidth,this.scrollContainer.addEventListener("scroll",this.handleScroll),window.addEventListener("resize",this.handleWindowResize),this.maintainScrollPosition(),this.setSlotHeights()}},{key:"componentDidUpdate",value:function(t,e){this.state.currentAnchor;this.scrolling&&!this.scrollingInterrupted||(this.maintainScrollPosition(),this.scrolling&&(clearTimeout(this.scrollingEndTimeout),this.scrolling=!1,this.scrollingInterrupted=!1,this.scrollingEndTimeout=0)),this.setSlotHeights(),this.markUnseenSlots(),this.setTransitionState()}},{key:"maintainScrollPosition",value:function(){var t=this.props.inverted,e=this.state,n=e.slots,r=e.currentAnchor,i=void 0,o=void 0;if(r?(i=_.default.find(n,{id:r}),o=this.anchorOffset):t&&(i=_.default.first(n),o=1/0),i&&i.node){if(void 0!==o){var s=this.scrollContainer.offsetTop,a=this.scrollContainer.scrollTop,l=i.node.offsetTop-s;if(t){var u=this.scrollContainer.scrollHeight,c=this.scrollContainer.offsetHeight,d=u-a-c,f=i.node.offsetHeight,h=u-l-f,p=h-d;if(p!==o){var m=Math.max(0,h-o),v=u-m-c;this.scrollContainer.scrollTop=v,this.scrollContainer.scrollTop!==v&&(this.scrollContainer.scrollTop=v)}}else{var y=l-a;if(y!==o){var g=Math.max(0,l-o);this.scrollContainer.scrollTop!==g&&(this.scrollContainer.scrollTop=g)}}}}else 0!==this.scrollContainer.scrollTop&&(t||(j&&this.scrolling?(this.scrollContainer.style.overflowY="hidden",this.scrollContainer.scrollTop=0,this.scrollContainer.style.overflowY="scroll"):this.scrollContainer.scrollTop=0))}},{key:"isSlotVisible",value:function(t){if(!t.rendering||!t.node)return!1;if(t.transition)return!0;if(this.scrollContainer){var e=this.scrollContainer.offsetHeight,n=this.scrollContainer.offsetTop,r=this.scrollContainer.scrollTop,i=r+e,o=t.node.offsetTop-n;if(r<o&&o<=i)return!0;var s=o+t.height;if(r<s&&s<=i)return!0}return!1}},{key:"setSlotHeights",value:function(){var t=this.state,e=t.slots,n=t.estimatedHeight,r=[],i=!0,o=!1,s=void 0;try{for(var a,u=(0,l.default)(e);!(i=(a=u.next()).done);i=!0){var c=a.value;if(c.rendering){var d=c.node.firstChild,f=d?d.offsetHeight:0;c.height=f,r.push(f)}}}catch(t){o=!0,s=t}finally{try{!i&&u.return&&u.return()}finally{if(o)throw s}}if(void 0===n&&!_.default.isEmpty(r)){var h=_.default.sum(r)/r.length,p=Math.round(h);0!==p&&this.setState({estimatedHeight:p})}}},{key:"markUnseenSlots",value:function(){var t=this.state,e=t.slots,n=t.currentAnchor,r=_.default.findIndex(e,{id:n}),i=!1,o=!0,a=!1,u=void 0;try{for(var c,d=(0,l.default)(e.entries());!(o=(c=d.next()).done);o=!0){var f=c.value,h=(0,s.default)(f,2),p=h[0],m=h[1];"appearing"===m.state?p<r&&(this.isSlotVisible(m)||(m.unseen=!0,i=!0)):m.unseen&&p>=r&&(m.unseen=!1,i=!0)}}catch(t){a=!0,u=t}finally{try{!o&&d.return&&d.return()}finally{if(a)throw u}}if(i){var v=_.default.filter(e,{unseen:!0});this.triggerBeforeAnchorEvent(v)}}},{key:"setTransitionState",value:function(){var t=this,e=this.props.inverted,n=this.state,r=n.slots,i=n.currentAnchor,o=!1,s=!0,a=!1,u=void 0;try{for(var c,d=(0,l.default)(r);!(s=(c=d.next()).done);s=!0){var f=c.value;if(("appearing"===f.state||"disappearing"===f.state)&&!f.transition){var h=this.isSlotVisible(f);e&&("appearing"!==f.state||i||(this.scrollPositionInterval||(this.scrollPositionInterval=setInterval(function(){t.maintainScrollPosition()},10)),this.scrollToAnchorNode=f.node,h=!0)),h?f.transition=!0:f.state="present",o=!0}}}catch(t){a=!0,u=t}finally{try{!s&&d.return&&d.return()}finally{if(a)throw u}}o&&this.setState({slots:r})}},{key:"componentWillUnmount",value:function(){this.scrollContainer.removeEventListener("scroll",this.handleScroll),window.removeEventListener("resize",this.handleWindowResize),this.scrollingEndTimeout&&clearTimeout(this.scrollingEndTimeout)}},{key:"triggerAnchorChangeEvent",value:function(t){var e=this.props.onAnchorChange;if(e){var n=t?t.item:null;e({type:"anchorchange",target:this,anchor:this.lastReportedAnchor=t?t.id:null,item:n})}}},{key:"triggerBeforeAnchorEvent",value:function(t){var e=this.props.onBeforeAnchor;e&&e({type:"beforeanchor",target:this,items:_.default.map(t,"item")})}},{key:"findAnchorSlot",value:function(t){var e=this.props.inverted,n=this.scrollContainer.scrollTop,r=this.scrollContainer.offsetTop,i=void 0;if(e){var o=this.scrollContainer.scrollHeight,s=this.scrollContainer.offsetHeight,a=o-n-s;if(a>0)for(var l=0;l<t.length;l++){var u=t[l];i=u;var c=i.node.offsetTop-r,d=i.node.offsetHeight,f=o-c-d;if(f>a)break}}else{var h=void 0;if(n>0)for(var p=0;p<t.length;p++){var m=t[p];if(i=m,(h=i.node.offsetTop-r)>n)break}this.anchorOffset=i?h-n:void 0}return i}}]),e}(k.Component);N.displayName="SmartList",N.defaultProps={behind:5,ahead:10,offset:0,inverted:!1,transitioning:5,noReset:!1},e.default=N,e.SmartList=N},"../../common/src/widgets/smart-list.scss":function(t,e){},"./lists/notification-list.jsx":function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.NotificationListSync=e.NotificationList=e.default=void 0;var o=n("../../common/node_modules/babel-runtime/helpers/extends.js"),s=i(o),a=n("../../common/node_modules/babel-runtime/regenerator/index.js"),l=i(a),u=n("../../common/node_modules/babel-runtime/helpers/asyncToGenerator.js"),c=i(u),d=n("../../common/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),f=i(d),h=n("../../common/node_modules/babel-runtime/helpers/classCallCheck.js"),p=i(h),m=n("../../common/node_modules/babel-runtime/helpers/createClass.js"),v=i(m),y=n("../../common/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),g=i(y),b=n("../../common/node_modules/babel-runtime/helpers/inherits.js"),_=i(b),k=n("../../common/node_modules/lodash/lodash.js"),x=i(k),w=n("../../common/node_modules/react/index.js"),S=i(w),j=n("../../common/node_modules/relaks/index.js"),N=n("../../common/src/utils/memoize.js"),C=n("../../common/src/data/merger.js"),T=(i(C),n("../../common/src/objects/finders/user-finder.js")),E=r(T),A=n("../../common/src/objects/finders/story-finder.js"),I=r(A),P=n("../../common/src/widgets/smart-list.jsx"),D=i(P),U=n("./views/notification-view.jsx"),O=i(U),M=n("./widgets/new-items-alert.jsx"),L=i(M),B=n("../../common/src/widgets/error-boundary.jsx"),R=i(B);n("./lists/notification-list.scss");var H=n("../../common/src/data/database.js"),W=(i(H),n("../../common/src/routing/route.js")),z=(i(W),n("../../common/src/env/environment.js")),V=(i(z),function(t){function e(){return(0,p.default)(this,e),(0,g.default)(this,(e.__proto__||(0,f.default)(e)).apply(this,arguments))}return(0,_.default)(e,t),(0,v.default)(e,[{key:"renderAsync",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,c.default)(l.default.mark(function t(e){var n,r,i,o,s,a,u,c,d,f,h;return l.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.props,r=n.database,i=n.route,o=n.env,s=this.props,a=s.currentUser,u=s.notifications,c=this.props.scrollToNotificationID,d=r.use({by:this}),f={currentUser:a,notifications:u,database:r,route:i,env:o,scrollToNotificationID:c},e.show(S.default.createElement(F,f)),t.next=8,d.start();case 8:return h=t.sent,t.next=11,E.findNotificationTriggerers(d,f.notifications);case 11:return f.users=t.sent,e.show(S.default.createElement(F,f)),t.next=15,I.findStoriesOfNotifications(d,f.notifications,f.currentUser);case 15:return f.stories=t.sent,t.abrupt("return",S.default.createElement(F,f));case 17:case"end":return t.stop()}},t,this)}));return t}()}]),e}(j.AsyncComponent));V.displayName="NotificationList";var F=function(t){function e(t){(0,p.default)(this,e);var n=(0,g.default)(this,(e.__proto__||(0,f.default)(e)).call(this,t));return Y.call(n),n.state={hiddenNotificationIDs:[]},n.notificationViewDurations={},n.notificationViewInterval=0,n}return(0,_.default)(e,t),(0,v.default)(e,[{key:"render",value:function(){var t=this.props,e=(t.route,t.notifications),n=t.scrollToNotificationID,r=n,i={items:q(e),behind:20,ahead:40,anchor:r?"notification-"+r:void 0,offset:10,onIdentity:this.handleNotificationIdentity,onRender:this.handleNotificationRender,onAnchorChange:this.handleNotificationAnchorChange,onBeforeAnchor:this.handleNotificationBeforeAnchor};return S.default.createElement("div",{className:"notification-list"},S.default.createElement(D.default,i),this.renderNewNotificationAlert())}},{key:"renderNewNotificationAlert",value:function(){var t=this.props,e=t.route,n=t.env,r=this.state.hiddenNotificationIDs,i=n.locale.t,o=x.default.size(r),s=void 0;x.default.isEmpty(r)||(s=e.find(e.name,{highlightingNotification:x.default.first(r)}));var a={url:s,onClick:this.handleNewNotificationAlertClick};return S.default.createElement(L.default,a,i("alert-$count-new-notifications",o))}},{key:"componentDidMount",value:function(){this.notificationViewInterval=setInterval(this.updateNotificationView.bind(this),250)}},{key:"componentWillUnmount",value:function(){clearInterval(this.notificationViewInterval)}},{key:"updateNotificationView",value:function(){var t=this,e=this.props,n=e.env,r=e.notifications,i=this.state.hiddenNotificationIDs;if(n.focus&&n.visible){var o=x.default.filter(r,function(t){if(!t.seen&&!x.default.includes(i,t.id))return!0});if(x.default.remove(o,function(e){var n=t.notificationViewDurations[e.id]||0;if(n+=250,t.notificationViewDurations[e.id]=n,n<3e3)return!0}),!x.default.isEmpty(o)){var s=1500*o.length;s<3e3?s=3e3:s>5e3&&(s=5e3);x.default.every(o,function(e){return(t.notificationViewDurations[e.id]||0)>s})&&this.markAsSeen(o)}}}},{key:"reanchorAtNotification",value:function(t){var e=this.props.route,n={scrollToNotificationID:t};e.reanchor(n)}},{key:"markAsSeen",value:function(t){var e=this.props.database,n=e.use({by:this}),r=x.default.map(t,function(t){return{id:t.id,seen:!0}});return n.save({table:"notification"},r)}}]),e}(w.PureComponent);F.displayName="NotificationListSync";var Y=function(){var t=this;this.handleNotificationIdentity=function(t){return"notification-"+t.item.id},this.handleNotificationRender=function(e){var n=t.props,r=n.database,i=n.route,o=n.env,a=n.users;if(e.needed){var l=e.item,u=G(a,l),c={notification:l,user:u,database:r,route:i,env:o,onClick:t.handleNotificationClick};return S.default.createElement(R.default,{env:o},S.default.createElement(O.default,(0,s.default)({key:l.id},c)))}var d=e.previousHeight||e.estimatedHeight||25;return S.default.createElement("div",{className:"notification-view",style:{height:d}})},this.handleNotificationClick=function(e){var n=e.target.props.notification;n.seen||t.markAsSeen([n])},this.handleNotificationAnchorChange=function(e){t.reanchorAtNotification(e.item?e.item.id:void 0)},this.handleNotificationBeforeAnchor=function(e){var n=x.default.map(e.items,"id");t.setState({hiddenNotificationIDs:n})},this.handleNewNotificationAlertClick=function(e){t.setState({hiddenNotificationIDs:[]})}},q=(0,N.memoizeWeak)(null,function(t){return x.default.orderBy(t,["ctime"],["desc"])}),G=(0,N.memoizeWeak)(null,function(t,e){if(e)return x.default.find(t,{id:e.user_id})});e.default=V,e.NotificationList=V,e.NotificationListSync=F},"./lists/notification-list.scss":function(t,e){},"./pages/notifications-page.jsx":function(t,e,n){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.NotificationsPageSync=e.NotificationsPage=e.default=void 0;var o=n("../../common/node_modules/babel-runtime/regenerator/index.js"),s=i(o),a=n("../../common/node_modules/babel-runtime/helpers/asyncToGenerator.js"),l=i(a),u=n("../../common/node_modules/babel-runtime/core-js/object/get-prototype-of.js"),c=i(u),d=n("../../common/node_modules/babel-runtime/helpers/classCallCheck.js"),f=i(d),h=n("../../common/node_modules/babel-runtime/helpers/createClass.js"),p=i(h),m=n("../../common/node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),v=i(m),y=n("../../common/node_modules/babel-runtime/helpers/inherits.js"),g=i(y),b=n("../../common/node_modules/lodash/lodash.js"),_=i(b),k=n("../../common/node_modules/moment/moment.js"),x=(i(k),n("../../common/node_modules/react/index.js")),w=i(x),S=n("../../common/node_modules/relaks/index.js"),j=n("../../common/src/objects/finders/user-finder.js"),N=r(j),C=n("../../common/src/objects/finders/notification-finder.js"),T=r(C),E=n("./widgets/page-container.jsx"),A=i(E),I=n("./lists/notification-list.jsx"),P=i(I),D=n("./widgets/loading-animation.jsx"),U=i(D),O=n("./widgets/empty-message.jsx"),M=i(O);n("./pages/notifications-page.scss");var L=n("../../common/src/data/database.js"),B=(i(L),n("../../common/src/routing/route.js")),R=(i(B),n("../../common/src/env/environment.js")),H=(i(R),function(t){function e(){return(0,f.default)(this,e),(0,v.default)(this,(e.__proto__||(0,c.default)(e)).apply(this,arguments))}return(0,g.default)(e,t),(0,p.default)(e,[{key:"renderAsync",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,l.default)(s.default.mark(function t(e){var n,r,i,o,a,l,u,c,d;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.props,r=n.database,i=n.route,o=n.env,a=n.date,l=n.scrollToNotificationID,u=r.use({by:this}),c={date:a,scrollToNotificationID:l,database:r,route:i,env:o},e.show(w.default.createElement(W,c)),t.next=6,u.start();case 6:return d=t.sent,t.next=9,N.findUser(u,d);case 9:if(c.currentUser=t.sent,!a){t.next=16;break}return t.next=13,T.findNotificationsForUserOnDate(u,c.currentUser,a);case 13:c.notifications=t.sent,t.next=19;break;case 16:return t.next=18,T.findNotificationsForUser(u,c.currentUser);case 18:c.notifications=t.sent;case 19:return t.abrupt("return",w.default.createElement(W,c));case 20:case"end":return t.stop()}},t,this)}));return t}()}]),e}(S.AsyncComponent));H.displayName="NotificationsPage";var W=function(t){function e(){return(0,f.default)(this,e),(0,v.default)(this,(e.__proto__||(0,c.default)(e)).apply(this,arguments))}return(0,g.default)(e,t),(0,p.default)(e,[{key:"render",value:function(){return w.default.createElement(A.default,{className:"notifications-page"},this.renderList(),this.renderEmptyMessage())}},{key:"renderList",value:function(){var t=this.props,e=t.database,n=t.route,r=t.env,i=t.notifications,o=t.currentUser,s=t.scrollToNotificationID,a={notifications:i,currentUser:o,database:e,route:n,env:r,scrollToNotificationID:s};return w.default.createElement(P.default,a)}},{key:"renderEmptyMessage",value:function(){var t=this.props,e=t.env,n=t.notifications,r=t.date;if(!_.default.isEmpty(n))return null;if(n){var i=void 0;i=r?"notifications-no-notifications-on-date":"notifications-no-notifications-yet";var o={phrase:i,env:e};return w.default.createElement(M.default,o)}return w.default.createElement(U.default,null)}}]),e}(x.PureComponent);W.displayName="NotificationsPageSync",e.default=H,e.NotificationsPage=H,e.NotificationsPageSync=W},"./pages/notifications-page.scss":function(t,e){}});