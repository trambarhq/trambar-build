!function(e){function a(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,a),n.l=!0,n.exports}var o=window.webpackJsonp;window.webpackJsonp=function(a,r,t){for(var c,l,s=0,d=[];s<a.length;s++)l=a[s],n[l]&&d.push(n[l][0]),n[l]=0;for(c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c]);for(o&&o(a,r,t);d.length;)d.shift()()};var r={},n={main:0};a.e=function(e){function o(){l.onerror=l.onload=null,clearTimeout(s);var a=n[e];0!==a&&(a&&a[1](new Error("Loading chunk "+e+" failed.")),n[e]=void 0)}var r=n[e];if(0===r)return new Promise(function(e){e()});if(r)return r[2];var t=new Promise(function(a,o){r=n[e]=[a,o]});r[2]=t;var c=document.getElementsByTagName("head")[0],l=document.createElement("script");l.type="text/javascript",l.charset="utf-8",l.async=!0,l.timeout=12e4,a.nc&&l.setAttribute("nonce",a.nc),l.src=a.p+""+({app:"app","locale-cs":"locale-cs","locale-de":"locale-de","locale-en":"locale-en","locale-fi":"locale-fi","locale-fr":"locale-fr","locale-it":"locale-it","locale-nb":"locale-nb","locale-pl":"locale-pl","locale-ru":"locale-ru","locale-zh":"locale-zh","page-error":"page-error","page-member-list":"page-member-list","page-project-list":"page-project-list","page-project-summary":"page-project-summary","page-repo-list":"page-repo-list","page-repo-summary":"page-repo-summary","page-role-list":"page-role-list","page-role-summary":"page-role-summary","page-server-list":"page-server-list","page-server-summary":"page-server-summary","page-settings":"page-settings","page-sign-in":"page-sign-in","page-start":"page-start","page-user-list":"page-user-list","page-user-summary":"page-user-summary",bluebird:"bluebird",chartist:"chartist",diff:"diff",hammerjs:"hammerjs",lodash:"lodash","mark-gor":"mark-gor",moment:"moment",react:"react","react-dom":"react-dom","sockjs-client":"sockjs-client"}[e]||e)+".js?"+{0:"4364609cb09156157760",1:"c51dbd35eb180a53bbd5",2:"a63e937c954df1a1d5e6",3:"00d786aa1aa36a9db25d",4:"e2d481a6fe87f4ed8c81",5:"44e6077e1436f6775b6b",6:"3a9daf1e764e74ab4ff8",7:"0deae5c6e61856e8839b",8:"9a6a82ad4e180fec0748",9:"9f54175a11ded208636e",10:"4e71071f7463056ae966",11:"961bf33234560b2b78e8",12:"87d92015b1d0ec8bb78e",13:"ee73832ed355ef8715e8",14:"cedf2a2d34b327b6190f",15:"e9df019f35ea8d89b43d",16:"b293a80a8ca6c22f1de1",17:"844aa9b5bfa3e3333e5f",18:"310bebbc5d1779e3e0e5",app:"4b778692a8e2f5d3bb82","locale-cs":"abf99724d11b84046f40","locale-de":"630826f66ef83f6fd417","locale-en":"e61dc63522e9b79be020","locale-fi":"3ddde5a6d9c6cc2cfaf4","locale-fr":"43910512fe0608531af2","locale-it":"7239b4f00674b5e147c0","locale-nb":"e12b3152a7145ebd6ef6","locale-pl":"c96b027224a88239bac0","locale-ru":"8285ebba569f8119de8d","locale-zh":"ad23624c594c5794b408","page-error":"5ff574376c15bf7a60d8","page-member-list":"7d9ef7828176667cf4d1","page-project-list":"36fbd8e3a77a19a22fe6","page-project-summary":"6e9e41847dea9990fd46","page-repo-list":"98cce914f954dbddbf58","page-repo-summary":"92ae4e17ae0a8ed21d5a","page-role-list":"812701db68889b28b361","page-role-summary":"936ae433623d0c7603a4","page-server-list":"9348ac91a507b64186ff","page-server-summary":"290a74b0d19605283f18","page-settings":"cb6e2a680ae5b7d6b9da","page-sign-in":"627c443fd4be59814d6e","page-start":"f04c13a31e381a023167","page-user-list":"ad333e54beb8083298cf","page-user-summary":"7841ba0da3cce3455d88",bluebird:"fd4b375741f4eaee5fa0",chartist:"9667998a7a8c514e5fb9",diff:"bb91cdbd8887bbc4ceee",hammerjs:"fd5bdb181d443515aca2",lodash:"0875c5327936aa2d542f","mark-gor":"f4bad7be738797c8c06a",moment:"28eb4864277876a04d0f",react:"233c2496fd35e1bce942","react-dom":"98542bc61d7da571da7e","sockjs-client":"1d00be9511a45c2afc79"}[e];var s=setTimeout(o,12e4);return l.onerror=l.onload=o,c.appendChild(l),t},a.m=e,a.c=r,a.d=function(e,o,r){a.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:r})},a.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(o,"a",o),o},a.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},a.p="",a.oe=function(e){throw console.error(e),e},a(a.s="./main.js")}({"../../common/src/utils/bootstrap-loader.js":function(e,a,o){"use strict";function r(e,a){return new Promise(function(o,r){var t=Object.keys(e),c={},l=0;a&&a(l,t.length),t.forEach(function(s){(0,e[s])().then(function(e){c[s]=e,l++,a&&a(l,t.length,s),l===t.length&&o(c)}).catch(function(e){/Loading chunk/i.test(e.message)&&"object"===("undefined"==typeof performance?"undefined":n(performance))&&"object"===n(performance.navigation)&&1!==performance.navigation.type&&navigator.onLine&&(console.log("Reloading page..."),location.reload(!0)),console.error(e),r&&(r(e),r=null)})})})}Object.defineProperty(a,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};a.load=r},"./libraries.js":function(e,a,o){"use strict";e.exports={bluebird:function(){return o.e("bluebird").then(o.bind(null,"../../common/node_modules/bluebird/js/browser/bluebird.js"))},chartist:function(){return o.e("chartist").then(o.bind(null,"../../common/node_modules/chartist/dist/chartist.js"))},diff:function(){return o.e("diff").then(o.bind(null,"../../common/node_modules/diff/dist/diff.js"))},hammerjs:function(){return o.e("hammerjs").then(o.bind(null,"../../common/node_modules/hammerjs/hammer.js"))},lodash:function(){return o.e("lodash").then(o.bind(null,"../../common/node_modules/lodash/lodash.js"))},"mark-gor":function(){return o.e("mark-gor").then(o.bind(null,"../../common/node_modules/mark-gor/index.js"))},moment:function(){return o.e("moment").then(o.bind(null,"../../common/node_modules/moment/moment.js"))},"sockjs-client":function(){return o.e("sockjs-client").then(o.bind(null,"../../common/node_modules/sockjs-client/lib/entry.js"))},react:function(){return o.e("react").then(o.bind(null,"../../common/node_modules/react/index.js"))},"react-dom":function(){return o.e("react-dom").then(o.bind(null,"../../common/node_modules/react-dom/index.js"))}}},"./main.js":function(e,a,o){"use strict";function r(e){var a=document.getElementById("app-container");if(!a)throw new Error("Unable to find app element in DOM");var r={};for(var c in d.default)r[c]=d.default[c];r.app=function(){return Promise.all([o.e("app"),o.e("sockjs-client"),o.e("react-dom"),o.e("mark-gor"),o.e("bluebird"),o.e("react"),o.e("moment"),o.e("lodash"),o.e("hammerjs"),o.e("diff"),o.e("chartist")]).then(o.bind(null,"./application.jsx"))},l.load(r,t).then(function(e){var o=e.app.AppCore,r=e.app.default,t=e.react,c=e["react-dom"];o(r.coreConfiguration).then(function(e){var o=t.createElement(r,e);c.render(o,a),n()})})}function n(){var e=document.getElementById("splash-screen"),a=document.getElementById("splash-screen-style");e&&(e.className="transition-out",setTimeout(function(){e.parentNode&&e.parentNode.removeChild(e),a&&a.parentNode&&a.parentNode.removeChild(a)},1e3))}function t(e,a){var o=document.getElementById("bootstrap-progress-bar"),r=document.getElementById("bootstrap-progress-bar-filled");o&&r&&(e<a?"show"!==o.className&&(o.className="show"):o.className="",r.style.width=Math.round(e/a*100)+"%")}var c=o("../../common/src/utils/bootstrap-loader.js"),l=function(e){if(e&&e.__esModule)return e;var a={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(a[o]=e[o]);return a.default=e,a}(c),s=o("./libraries.js"),d=function(e){return e&&e.__esModule?e:{default:e}}(s);window.addEventListener("load",r)}});