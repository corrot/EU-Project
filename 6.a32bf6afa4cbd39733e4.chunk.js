(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"54db7b0199cad9e5ca64":function(e,t,n){"use strict";n.r(t);var o=n("8af190b70a6bc55c6f1b"),r=n.n(o),a=(n("8a2d1b95e05b6a321e74"),n("d7dd51e1bf6bfc2c9c3d")),c=n("0d7f0986bcd2f33d8a2a"),i=n("ab039aecd4a1d4fedc0e"),u=n("a28fc3c963a1d4d1a2e5"),f=n("ab4cb61bcb2dc161defb"),b=n("adc20f99e57c573c589c"),s=n("d95b0cf107403b178365"),d=n("54f683fcda7806277002"),l="app/AboutUsPage/DEFAULT_ACTION",p=Object(d.fromJS)({});var y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;switch((arguments.length>1?arguments[1]:void 0).type){case l:default:return e}},h=function(e){return e.get("aboutUsPage",p)},v=function(){return Object(u.a)(h,function(e){return e.toJS()})},g=regeneratorRuntime.mark(m);function m(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},g,this)}var w,O=Object(i.defineMessages)({header:{id:"".concat("app.containers.AboutUsPage",".header"),defaultMessage:"This is the AboutUsPage container!"}});function P(e){return(P="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t,n,o){w||(w="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var r=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&r)for(var c in r)void 0===t[c]&&(t[c]=r[c]);else t||(t=r||{});if(1===a)t.children=o;else if(a>1){for(var i=new Array(a),u=0;u<a;u++)i[u]=arguments[u+3];t.children=i}return{$$typeof:w,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function U(e,t){return!t||"object"!==P(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function _(e){return(_=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function A(e,t){return(A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"AboutUsPage",function(){return E});var k=j(c.Helmet,{},void 0,j("title",{},void 0,"AboutUsPage"),j("meta",{name:"description",content:"Description of AboutUsPage"})),E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),U(this,_(t).apply(this,arguments))}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){return j("div",{},void 0,k,r.a.createElement(i.FormattedMessage,O.header))}}])&&S(n.prototype,o),a&&S(n,a),t}(),T=Object(u.b)({aboutUsPage:v()});var J=Object(a.connect)(T,function(e){return{dispatch:e}}),C=Object(s.a)({key:"aboutUsPage",reducer:y}),M=Object(b.a)({key:"aboutUsPage",saga:m});t.default=Object(f.compose)(C,M,J)(E)}}]);