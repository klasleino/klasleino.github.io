!function(e){function t(t){for(var r,c,i=t[0],s=t[1],l=t[2],_=0,f=[];_<i.length;_++)c=i[_],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(t);f.length;)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={2:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=function(e){return c.p+"templates/"+({0:"__react_static_root__/src/pages/404.jsx",1:"__react_static_root__/src/pages/index.jsx",4:"vendors~__react_static_root__/src/pages/index.jsx"}[e]||e)+"."+{0:"5cf9b493",1:"ca97f8d7",4:"8cad00da"}[e]+".js"}(e);var s=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=s;a.push([61,3,5]),n()}({108:function(e,t,n){"use strict";n.r(t),function(e){var r=n(0),o=n.n(r),a=n(26),c=n.n(a),i=n(20),s=n(21);if(t.default=s.a,"undefined"!=typeof document){n(129).listen();var l=document.getElementById("root"),u=l.hasChildNodes()?c.a.hydrate:c.a.render,_=function(e){u(o.a.createElement(i.AppContainer,null,o.a.createElement(e,null)),l)};_(s.a),e&&e.hot&&e.hot.accept("./App",(function(){_(s.a)}))}}.call(this,n(44)(e))},21:function(e,t,n){"use strict";(function(e){var r=n(0),o=n.n(r),a=n(19),c=n(51),i=n(20);n(127);t.a=Object(i.hot)(e)((function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.Head,null,o.a.createElement("title",null,"Klas Leino"),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Cuprum",rel:"stylesheet"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300",rel:"stylesheet"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=IBM+Plex+Mono:300",rel:"stylesheet"}),o.a.createElement("link",{rel:"icon",type:"image/x-icon",href:"favicon/favicon.ico"})),o.a.createElement(a.Root,null,o.a.createElement(o.a.Suspense,{fallback:o.a.createElement("em",null,"Loading...")},o.a.createElement(c.a,null,o.a.createElement(a.Routes,{path:"*"})))))}))}).call(this,n(44)(e))},61:function(e,t,n){n(62),n(93),e.exports=n(103)},63:function(e,t,n){"use strict";n.r(t);t.default=[{location:"__react_static_root__/node_modules/react-static-plugin-source-filesystem",plugins:[],hooks:{}},{location:"__react_static_root__/",plugins:[],hooks:{}}]},94:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"notFoundTemplate",(function(){return d}));var r=n(17),o=n.n(r),a=n(18),c=n.n(a),i=n(0),s=n.n(i),l=n(9),u=n.n(l);Object(l.setHasBabelPlugin)();var _={loading:function(){return null},error:function(e){return console.error(e.error),s.a.createElement("div",null,"An error occurred loading this page's template. More information is available in the console.")},ignoreBabelRename:!0},f=u()(c()({id:"__react_static_root__/src/pages/404.jsx",load:function(){return Promise.all([n.e(0).then(n.bind(null,59))]).then((function(e){return e[0]}))},path:function(){return o.a.join(e,"__react_static_root__/src/pages/404.jsx")},resolve:function(){return 59},chunkName:function(){return"__react_static_root__/src/pages/404.jsx"}}),_);f.template="__react_static_root__/src/pages/404.jsx";var p=u()(c()({id:"__react_static_root__/src/pages/index.jsx",load:function(){return Promise.all([Promise.all([n.e(4),n.e(1)]).then(n.bind(null,60))]).then((function(e){return e[0]}))},path:function(){return o.a.join(e,"__react_static_root__/src/pages/index.jsx")},resolve:function(){return 60},chunkName:function(){return"__react_static_root__/src/pages/index.jsx"}}),_);p.template="__react_static_root__/src/pages/index.jsx",t.default={"__react_static_root__/src/pages/404.jsx":f,"__react_static_root__/src/pages/index.jsx":p};var d="__react_static_root__/src/pages/404.jsx"}.call(this,"/")},97:function(e,t,n){var r={".":11,"./":11,"./index":11,"./index.js":11};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id=97}});