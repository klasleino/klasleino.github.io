!function(e){function t(t){for(var r,c,i=t[0],l=t[1],s=t[2],f=0,_=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&_.push(o[c][0]),o[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);for(u&&u(t);_.length;)_.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==o[l]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={2:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=function(e){return c.p+"templates/"+({0:"__react_static_root__/node_modules/react-static/lib/browser/components/Default404",1:"__react_static_root__/src/pages/index.jsx",4:"vendors~__react_static_root__/src/pages/index.jsx"}[e]||e)+"."+{0:"8fcbbaea",1:"a043b3d4",4:"c9c4f9fa"}[e]+".js"}(e);var l=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=l;a.push([61,3,5]),n()}({108:function(e,t,n){"use strict";n.r(t),function(e){var r=n(0),o=n.n(r),a=n(26),c=n.n(a),i=n(20),l=n(21);if(t.default=l.a,"undefined"!=typeof document){n(129).listen();var s=document.getElementById("root"),u=s.hasChildNodes()?c.a.hydrate:c.a.render,f=function(e){u(o.a.createElement(i.AppContainer,null,o.a.createElement(e,null)),s)};f(l.a),e&&e.hot&&e.hot.accept("./App",(function(){f(l.a)}))}}.call(this,n(44)(e))},21:function(e,t,n){"use strict";(function(e){var r=n(0),o=n.n(r),a=n(19),c=n(51),i=n(20);n(127);t.a=Object(i.hot)(e)((function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.Head,null,o.a.createElement("title",null,"Klas Leino"),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Cuprum",rel:"stylesheet"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300",rel:"stylesheet"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300",rel:"stylesheet"}),o.a.createElement("link",{rel:"icon",type:"image/x-icon",href:"favicon/favicon.ico"})),o.a.createElement(a.Root,null,o.a.createElement(o.a.Suspense,{fallback:o.a.createElement("em",null,"Loading...")},o.a.createElement(c.a,null,o.a.createElement(a.Routes,{path:"/"})))))}))}).call(this,n(44)(e))},61:function(e,t,n){n(62),n(93),e.exports=n(103)},63:function(e,t,n){"use strict";n.r(t);t.default=[{location:"__react_static_root__/",plugins:[],hooks:{}}]},94:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"notFoundTemplate",(function(){return p}));var r=n(17),o=n.n(r),a=n(18),c=n.n(a),i=n(0),l=n.n(i),s=n(9),u=n.n(s);Object(s.setHasBabelPlugin)();var f={loading:function(){return null},error:function(e){return console.error(e.error),l.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},_=u()(c()({id:"__react_static_root__/node_modules/react-static/lib/browser/components/Default404",load:function(){return Promise.all([n.e(0).then(n.t.bind(null,59,7))]).then((function(e){return e[0]}))},path:function(){return o.a.join(e,"__react_static_root__/node_modules/react-static/lib/browser/components/Default404")},resolve:function(){return 59},chunkName:function(){return"__react_static_root__/node_modules/react-static/lib/browser/components/Default404"}}),f);_.template="__react_static_root__/node_modules/react-static/lib/browser/components/Default404";var d=u()(c()({id:"__react_static_root__/src/pages/index.jsx",load:function(){return Promise.all([Promise.all([n.e(4),n.e(1)]).then(n.bind(null,60))]).then((function(e){return e[0]}))},path:function(){return o.a.join(e,"__react_static_root__/src/pages/index.jsx")},resolve:function(){return 60},chunkName:function(){return"__react_static_root__/src/pages/index.jsx"}}),f);d.template="__react_static_root__/src/pages/index.jsx",t.default={"__react_static_root__/node_modules/react-static/lib/browser/components/Default404":_,"__react_static_root__/src/pages/index.jsx":d};var p="__react_static_root__/node_modules/react-static/lib/browser/components/Default404"}.call(this,"/")},97:function(e,t,n){var r={".":11,"./":11,"./index":11,"./index.js":11};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=97}});