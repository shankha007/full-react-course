(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6071:function(e,t,n){"use strict";var r=n(3038),o=n(862);t.default=void 0;var u=o(n(7294)),c=n(1689),i=n(2441),a=n(5749),f={};function l(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[t+"%"+n+(o?"%"+o:"")]=!0}}var s=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.asPath||"/",s=u.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),n=r(t,2),u=n[0],i=n[1];return{href:u,as:e.as?(0,c.resolveHref)(o,e.as):i||u}}),[o,e.href,e.as]),p=s.href,d=s.as,h=e.children,v=e.replace,y=e.shallow,b=e.scroll,m=e.locale;"string"===typeof h&&(h=u.default.createElement("a",null,h));var g=u.Children.only(h),_=g&&"object"===typeof g&&g.ref,w=(0,a.useIntersection)({rootMargin:"200px"}),E=r(w,2),j=E[0],k=E[1],O=u.default.useCallback((function(e){j(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,j]);(0,u.useEffect)((function(){var e=k&&t&&(0,c.isLocalURL)(p),r="undefined"!==typeof m?m:n&&n.locale,o=f[p+"%"+d+(r?"%"+r:"")];e&&!o&&l(n,p,d,{locale:r})}),[d,p,k,m,t,n]);var P={ref:O,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,i,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:u,locale:a,scroll:i}))}(e,n,p,d,v,y,b,m)},onMouseEnter:function(e){(0,c.isLocalURL)(p)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),l(n,p,d,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var C="undefined"!==typeof m?m:n&&n.locale,L=n&&n.isLocaleDomain&&(0,c.getDomainLocale)(d,C,n&&n.locales,n&&n.domainLocales);P.href=L||(0,c.addBasePath)((0,c.addLocale)(d,C,n&&n.defaultLocale))}return u.default.cloneElement(g,P)};t.default=s},5749:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,a=(0,o.useRef)(),f=(0,o.useState)(!1),l=r(f,2),s=l[0],p=l[1],d=(0,o.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||s||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,u=r.observer,c=r.elements;return c.set(e,t),u.observe(e),function(){c.delete(e),u.unobserve(e),0===c.size&&(u.disconnect(),i.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,s]);return(0,o.useEffect)((function(){if(!c&&!s){var e=(0,u.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,u.cancelIdleCallback)(e)}}}),[s]),[d,s]};var o=n(7294),u=n(8391),c="undefined"!==typeof IntersectionObserver;var i=new Map},6279:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(5893);function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=n(7294),s=n(1664),p=n(1163);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var h=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(f,e);var t,n,i,a=d(f);function f(){return o(this,f),a.apply(this,arguments)}return t=f,i=[{key:"getInitialProps",value:function(e){return console.log(e),new Promise((function(e,t){setTimeout((function(){e({appName:"Super App"})}),1e3)}))}}],(n=[{key:"render",value:function(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("h1",{children:["The Main Page of ",this.props.appName]}),(0,r.jsxs)("p",{children:["Go to ",(0,r.jsx)(s.default,{href:"/auth",children:(0,r.jsx)("a",{children:"Auth"})})]}),(0,r.jsx)("button",{onClick:function(){return p.default.push("/auth")},children:"Go to Auth"})]})}}])&&u(t.prototype,n),i&&u(t,i),f}(l.Component)},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6279)}])},1664:function(e,t,n){e.exports=n(6071)},1163:function(e,t,n){e.exports=n(2441)}},function(e){e.O(0,[774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);