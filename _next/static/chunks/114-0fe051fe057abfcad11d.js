(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[114],{5774:function(e,t,n){"use strict";var r=n(5893),o=n(1664),i={height:"80px",display:"flex",alignItems:"center",justifyContent:"flex-end"};t.Z=function(){return(0,r.jsx)("header",{children:(0,r.jsx)("div",{className:"row",style:i,children:(0,r.jsx)(o.default,{href:"/menu",children:(0,r.jsx)("a",{className:"button",children:"Menu"})})})})}},6285:function(e,t,n){"use strict";n.d(t,{o:function(){return g},F:function(){return b},db:function(){return m}});var r=n(809),o=n.n(r),i=n(2447);function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?s(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=n(6265);function h(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}var y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(n,e);var t=h(n);function n(){var e;return u(this,n),e=t.call(this,"Database"),(0,v.Z)(s(e),"logs",void 0),(0,v.Z)(s(e),"trainings",void 0),e.version(1).stores({logs:"++id, training, weight, count, date",trainings:"++id, category, name"}),e.logs=e.table("logs"),e.logs.mapToClass(g),e.trainings=e.table("trainings"),e.trainings.mapToClass(b),e}return n}(n(9642).Z),g=function(){function e(t,n,r,o){u(this,e),this.training=t,this.weight=n,this.count=r,this.id=o,(0,v.Z)(this,"date",void 0);var i=new Date;this.date=new Date("".concat(i.getFullYear(),"/").concat(i.getMonth()+1,"/").concat(i.getDate()))}return a(e,[{key:"save",value:function(){var e=this;return m.transaction("rw",m.logs,(0,i.Z)(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.logs.put(e);case 2:e.id=t.sent;case 3:case"end":return t.stop()}}),t)}))))}}]),e}(),b=function(){function e(t,n,r){u(this,e),this.category=t,this.name=n,this.id=r}return a(e,[{key:"save",value:function(){var e=this;return m.transaction("rw",m.trainings,(0,i.Z)(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.trainings.put(e);case 2:e.id=t.sent;case 3:case"end":return t.stop()}}),t)}))))}}]),e}(),m=new y},2167:function(e,t,n){"use strict";var r=n(3848),o=n(9448);t.default=void 0;var i=o(n(7294)),c=n(9414),a=n(4651),u=n(7426),s={};function f(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(o?"%"+o:"")]=!0}}var l=function(e){var t,n=!1!==e.prefetch,o=(0,a.useRouter)(),l=i.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),n=r(t,2),i=n[0],a=n[1];return{href:i,as:e.as?(0,c.resolveHref)(o,e.as):a||i}}),[o,e.href,e.as]),p=l.href,d=l.as,v=e.children,h=e.replace,y=e.shallow,g=e.scroll,b=e.locale;"string"===typeof v&&(v=i.default.createElement("a",null,v));var m=(t=i.Children.only(v))&&"object"===typeof t&&t.ref,w=(0,u.useIntersection)({rootMargin:"200px"}),x=r(w,2),k=x[0],E=x[1],_=i.default.useCallback((function(e){k(e),m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[m,k]);(0,i.useEffect)((function(){var e=E&&n&&(0,c.isLocalURL)(p),t="undefined"!==typeof b?b:o&&o.locale,r=s[p+"%"+d+(t?"%"+t:"")];e&&!r&&f(o,p,d,{locale:t})}),[d,p,E,b,n,o]);var j={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,a,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==a&&r.indexOf("#")>=0&&(a=!1),t[o?"replace":"push"](n,r,{shallow:i,locale:u,scroll:a}))}(e,o,p,d,h,y,g,b)},onMouseEnter:function(e){(0,c.isLocalURL)(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),f(o,p,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var C="undefined"!==typeof b?b:o&&o.locale,L=o&&o.isLocaleDomain&&(0,c.getDomainLocale)(d,C,o&&o.locales,o&&o.domainLocales);j.href=L||(0,c.addBasePath)((0,c.addLocale)(d,C,o&&o.defaultLocale))}return i.default.cloneElement(t,j)};t.default=l},7426:function(e,t,n){"use strict";var r=n(3848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,u=(0,o.useRef)(),s=(0,o.useState)(!1),f=r(s,2),l=f[0],p=f[1],d=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),n||l||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=a.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return a.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,i=r.observer,c=r.elements;return c.set(e,t),i.observe(e),function(){c.delete(e),i.unobserve(e),0===c.size&&(i.disconnect(),a.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,l]);return(0,o.useEffect)((function(){if(!c&&!l){var e=(0,i.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[l]),[d,l]};var o=n(7294),i=n(3447),c="undefined"!==typeof IntersectionObserver;var a=new Map},1664:function(e,t,n){e.exports=n(2167)},2447:function(e,t,n){"use strict";function r(e,t,n,r,o,i,c){try{var a=e[i](c),u=a.value}catch(s){return void n(s)}a.done?t(u):Promise.resolve(u).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var c=e.apply(t,n);function a(e){r(c,o,i,a,u,"next",e)}function u(e){r(c,o,i,a,u,"throw",e)}a(void 0)}))}}n.d(t,{Z:function(){return o}})}}]);