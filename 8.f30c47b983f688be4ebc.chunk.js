(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{d84a664d9ef1711977f2:function(e,t,n){"use strict";n.r(t);var r=n("8af190b70a6bc55c6f1b"),o=n.n(r),a=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),c=n("ab039aecd4a1d4fedc0e"),i=n("a28fc3c963a1d4d1a2e5"),f=n("ab4cb61bcb2dc161defb"),u=n("adc20f99e57c573c589c"),b=n("d95b0cf107403b178365"),l=n("54f683fcda7806277002"),p="app/ChairmanPage/DEFAULT_ACTION",s=Object(l.fromJS)({});var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s;switch((arguments.length>1?arguments[1]:void 0).type){case p:default:return e}},y=function(e){return e.get("chairmanPage",s)},h=function(){return Object(i.a)(y,function(e){return e.toJS()})},m=regeneratorRuntime.mark(v);function v(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},m,this)}var g,w=Object(c.defineMessages)({header:{id:"".concat("app.containers.ChairmanPage",".header"),defaultMessage:"This is the ChairmanPage container!"}});function O(e){return(O="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t){return!t||"object"!==O(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _(e,t){return(_=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"ChairmanPage",function(){return k});var k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),P(this,S(t).apply(this,arguments))}var n,r,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){return function(e,t,n,r){g||(g="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var c in o)void 0===t[c]&&(t[c]=o[c]);else t||(t=o||{});if(1===a)t.children=r;else if(a>1){for(var i=new Array(a),f=0;f<a;f++)i[f]=arguments[f+3];t.children=i}return{$$typeof:g,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}("div",{},void 0,o.a.createElement(c.FormattedMessage,w.header))}}])&&j(n.prototype,r),a&&j(n,a),t}(),C=Object(i.b)({chairmanPage:h()});var E=Object(a.connect)(C,function(e){return{dispatch:e}}),T=Object(b.a)({key:"chairmanPage",reducer:d}),J=Object(u.a)({key:"chairmanPage",saga:v});t.default=Object(f.compose)(T,J,E)(k)}}]);