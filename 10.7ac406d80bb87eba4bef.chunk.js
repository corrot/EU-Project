(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"0b8eb3e35929778b339a":function(e,t,n){"use strict";n.r(t);n("c21cf94dcb722da03ae8");var r=n("18256c2a43e4ee9d3ab3"),o=n("8af190b70a6bc55c6f1b"),a=n.n(o),c=(n("8a2d1b95e05b6a321e74"),n("0d7f0986bcd2f33d8a2a")),u=n("d7dd51e1bf6bfc2c9c3d"),i=n("ab4cb61bcb2dc161defb"),f=n("a28fc3c963a1d4d1a2e5"),s=n("d95b0cf107403b178365"),p=n("adc20f99e57c573c589c"),b=function(e){return e.get("global")},l=n("fcb99a06256635f70435");function d(e,t){return{type:l.c,repos:e,username:t}}var v="boilerplate/Home/CHANGE_USERNAME";var m=n("54f683fcda7806277002"),y=Object(m.fromJS)({username:""});var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return e.set("username",t.name.replace(/@/gi,""));default:return e}},g=function(e){return e.get("home",y)},O=function(){return Object(f.a)(g,function(e){return e.get("username")})},j=n("6c68d13fe9e3e77d8fc4");function w(e){return 204===e.status||205===e.status?null:e.json()}function S(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.response=e,t}function k(e,t){return fetch(e,t).then(S).then(w)}var x,P=regeneratorRuntime.mark(E),_=regeneratorRuntime.mark(R);function E(){var e,t,n;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(j.c)(O());case 2:return e=r.sent,t="https://api.github.com/users/".concat(e,"/repos?type=all&sort=updated"),r.prev=4,r.next=7,Object(j.a)(k,t);case 7:return n=r.sent,r.next=10,Object(j.b)(d(n,e));case 10:r.next=16;break;case 12:return r.prev=12,r.t0=r.catch(4),r.next=16,Object(j.b)((o=r.t0,{type:l.b,error:o}));case 16:case"end":return r.stop()}var o},P,this,[[4,12]])}function R(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.d)(l.a,E);case 2:case"end":return e.stop()}},_,this)}function D(e){return(D="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function H(e,t,n,r){x||(x="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,a=arguments.length-3;if(t||0===a||(t={children:void 0}),t&&o)for(var c in o)void 0===t[c]&&(t[c]=o[c]);else t||(t=o||{});if(1===a)t.children=r;else if(a>1){for(var u=new Array(a),i=0;i<a;i++)u[i]=arguments[i+3];t.children=u}return{$$typeof:x,type:e,key:void 0===n?null:""+n,ref:null,props:t,_owner:null}}function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return!t||"object"!==D(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function T(e){return(T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function J(e,t){return(J=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"HomePage",function(){return N}),n.d(t,"mapDispatchToProps",function(){return U});var F=H(c.Helmet,{},void 0,H("title",{},void 0,"Home Page"),H("meta",{name:"description",content:"A React.js Boilerplate application homepage"})),M=H(r.a,{autoplay:!0},void 0,H("div",{},void 0,H("h3",{},void 0,"1")),H("div",{},void 0,H("h3",{},void 0,"2")),H("div",{},void 0,H("h3",{},void 0,"3")),H("div",{},void 0,H("h3",{},void 0,"4"))),N=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),C(this,T(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&J(e,t)}(t,a.a.PureComponent),n=t,(r=[{key:"componentDidMount",value:function(){this.props.username&&this.props.username.trim().length>0&&this.props.onSubmitForm()}},{key:"render",value:function(){return H("article",{},void 0,F,H("div",{},void 0,M))}}])&&A(n.prototype,r),o&&A(n,o),t}();function U(e){return{onChangeUsername:function(t){return e((n=t.target.value,{type:v,name:n}));var n},onSubmitForm:function(t){void 0!==t&&t.preventDefault&&t.preventDefault(),e({type:l.a})}}}var $=Object(f.b)({repos:Object(f.a)(b,function(e){return e.getIn(["userData","repositories"])}),username:O(),loading:Object(f.a)(b,function(e){return e.get("loading")}),error:Object(f.a)(b,function(e){return e.get("error")})}),B=Object(u.connect)($,U),G=Object(s.a)({key:"home",reducer:h}),I=Object(p.a)({key:"home",saga:R});t.default=Object(i.compose)(G,I,B)(N)}}]);