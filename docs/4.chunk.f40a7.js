(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0cPo":function(e,n,t){"use strict";t.r(n);var o=t("f7dk"),i=t("k777"),c=t("c2a7"),a=t("bF8/"),r=t.n(a),s=function(){return Object(o.h)("div",{id:"cookiebanner2",className:"cookiebanner "+r.a.banner,"aria-label":"Edit your cookie settings",role:"banner"},Object(o.h)("div",{className:"info"},Object(o.h)("div",{className:"title"},"Your Cookie Controls"),Object(o.h)("div",{className:"description"},"Paste some info for your users here.")),Object(o.h)("div",{className:"choices"},Object(o.h)("label",{className:"choice",htmlFor:"choice-functional"},Object(o.h)("input",{type:"checkbox",name:"choice:functional",id:"choice-functional",checked:!0,disabled:!0}),Object(o.h)("div",{className:"name"},"Functional with a very long long long long long")),Object(o.h)("label",{className:"choice",htmlFor:"choice-ga_analytics"},Object(o.h)("input",{type:"checkbox",name:"choice:ga_analytics",id:"choice-ga_analytics"}),Object(o.h)("div",{className:"name"},"Google Analytics"),Object(o.h)("p",{className:"info"},"Google Tag Manager will be enabled here. Read more about it here:"," ",Object(o.h)("a",{href:"https://www.google.com/intl/de/tagmanager/faq.html",rel:"noopener noreferrer",target:"_blank"},"Google Tag Manager FAQ"))),Object(o.h)("label",{className:"choice",htmlFor:"choice-sa_analytics"},Object(o.h)("input",{type:"checkbox",name:"choice:sa_analytics",id:"choice-sa_analytics"}),Object(o.h)("div",{className:"name"},"Simple Analytics"),Object(o.h)("p",{className:"info"},"Privacy first analytics provider. Read more here:"," ",Object(o.h)("a",{href:"https://docs.simpleanalytics.com/what-we-collect?ref=simpleanalytics.com",rel:"noopener noreferrer",target:"_blank"},"Simple Analytics – What we collect")))),Object(o.h)("div",{className:"buttons"},Object(o.h)("button",{className:"reject"},"Reject choices"),Object(o.h)("button",{className:"accept"},"Accept choices")))},u=function(){return Object(o.h)("div",{id:"cookienotice2",className:"cookienotice "+r.a.banner,"aria-label":"Show the cookie settings again",role:"button"},Object(o.h)("img",{src:"/assets/cookie.svg",alt:"A shield which represents privacy"}))};n.default=function(){return Object(i.d)((function(){window.consent2=new c.a({name:"consent-with-ga",banner:document.getElementById("cookiebanner2"),notice:document.getElementById("cookienotice2"),capabilities:[{name:"functional",checked:!0,onAccept:function(e){console.log("[functional2:onAccept]"),e.saveUserOptions({consented:!0})}},{name:"ga_analytics",checked:!1,onReject:function(){console.log("[ga_analytics:onReject]"),c.a.cookieService.findCookie("_g")&&c.a.cookieService.clearCookies("_g",{expires:new Date("1996-06-13")})},onAccept:function(){console.log("[ga_analytics:onAccept]");var e=document.getElementsByTagName("head")[0],n=document.createElement("script");n.src="https://www.googletagmanager.com/gtag/js?id=UA-156811148-1",n.async=!0,n.onload=function(){function e(){window.dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","UA-156811148-1",{anonymize_ip:!0})},e.appendChild(n)}},{name:"sa_analytics",checked:!1,onReject:function(){console.log("[sa_analytics:onReject]")},onAccept:function(){console.log("[sa_analytics:onAccept]"),console.log("not yet configured")}}]})})),[Object(o.h)(s,{key:"banner"}),Object(o.h)(u,{key:"notice"})]}},EpU2:function(){},"bF8/":function(e){e.exports={banner:"banner__1f7Hi"}},c2a7:function(e,n,t){"use strict";function o(){return window.matchMedia("(prefers-reduced-motion)").matches}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e){return Object.keys(e).map((function(n){return n+"="+e[n]})).join("; ")}function s(e){var n=("; "+document.cookie).split("; "+e+"=").pop().split(";").shift();if(n&&"undefined"!==n)return["true","false"].includes(n)?"true"===n:JSON.parse(n)}function u(){return document.cookie.split("; ").map((function(e){var n=e.split("=");return{key:n[0],value:n[1]}}))}function l(e,n,t){var o={};o[e]=JSON.stringify(n),o=r(o=c({},o,{},O,{},t)),document.cookie=o}function h(e,n){var t={};t[e]="",t["max-age"]=0,t.path=O.path,(t=c({},t,{},n)).expires=new Date("1996-06-13"),l(e,t=r(t))}function p(e,n){var t=u(),o=new RegExp("^"+e,"g");t.forEach((function(e){var t=e.key;t.match(o)&&h(t,n)}))}function f(e){var n=u(),t=new RegExp("^"+e,"g");return n.find((function(e){return t.test(e.key)}))||null}function d(e){void 0===e&&(e=365);var n=new Date;return n.setTime(n.getTime()+24*e*60*60*1e3),n}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){v(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function v(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var g={};t.r(g),t.d(g,"getCookie",(function(){return s})),t.d(g,"getAllCookies",(function(){return u})),t.d(g,"setCookie",(function(){return l})),t.d(g,"removeCookie",(function(){return h})),t.d(g,"clearCookies",(function(){return p})),t.d(g,"findCookie",(function(){return f})),t.d(g,"getExpirationDate",(function(){return d}));var O={expires:d(),path:"/"},y={ON_UPDATE:"onUpdate",ON_VALUE_CHANGED:"onValueChange",ON_ACCEPT:"onAccept",ON_REJECT:"onReject"},j=function(){function e(e){var n={debug:!1,name:"cookie-consent",banner:document.getElementById("cookiebanner"),notice:document.getElementById("cookienotice"),linkOnly:!1,onRejectEnd:function(){window.location.reload()},onAcceptEnd:function(e){var n=e.getChoices();e.saveUserOptions({choices:n})},capabilities:[{name:"functional",checked:!0,onReject:function(e){e.removeUserOptions()},onAccept:function(e){e.saveUserOptions({consented:!0})}}]};if(this.options=m({},n,{},e),this.queue=[],this.options.banner&&this.options.notice)if(this.button={},this.button.reject=this.options.banner.querySelector(".reject"),this.button.accept=this.options.banner.querySelector(".accept"),this.button.reject&&this.button.accept){this.initEvents();var t=this.loadUserOptions();t&&t.choices?(this.setChoices(t.choices),this.initStartUpEvents()):this.initFields(),t&&t.consented?this.showNotice():this.showBanner()}else console.error("Can not find required buttons!");else console.error("Can not find required elements!")}var n=e.prototype;return n.initFields=function(){var e=this.options.capabilities.map((function(e){return{name:e.name,value:e.checked}}));return this.setChoices(e),e},n.initEvents=function(){var e=this;this.button.reject.addEventListener("click",(function(){e.options.debug&&console.time("reject");var n=e.initFields();n.forEach((function(n){var t=e.getCapability(n.name);e._runValueEventsFor(t,n),e._runEventFor(t,y.ON_REJECT)})),e._startRunner(),e.setChoices(n),e.saveUserOptions({choices:n}),e.options.onRejectEnd instanceof Function&&e.options.onRejectEnd(e),e.options.debug&&console.timeEnd("reject"),e.hideBanner(),setTimeout((function(){e.showNotice()}),160)})),this.button.accept.addEventListener("click",(function(){e.options.debug&&console.time("accept"),e.getChoices().forEach((function(n){var t=e.getCapability(n.name);e._runValueEventsFor(t,n),e._runEventFor(t,y.ON_ACCEPT)})),e._startRunner(),e.options.onAcceptEnd instanceof Function&&e.options.onAcceptEnd(e),e.options.debug&&console.timeEnd("accept"),e.hideBanner(),setTimeout((function(){e.showNotice()}),160)})),this.options.notice.addEventListener("click",(function(){e.hideNotice(),e.showBanner()}))},n.initStartUpEvents=function(){var e=this;this.getChoices().forEach((function(n){var t=e.getCapability(n.name);e._runEventFor(t,n.value?y.ON_ACCEPT:y.ON_REJECT),e._startRunner()}))},n.loadUserOptions=function(){var e=s(this.options.name);return e||null},n.saveUserOptions=function(e){var n=m({},s(this.options.name),{},e);l(this.options.name,n)},n.removeUserOptions=function(){s(this.options.name)&&h(this.options.name)},n.getChoice=function(e){return this.options.banner.querySelector('.choice [name="choice:'+e+'"]').checked},n.getChoices=function(){var e=[];return this.options.banner.querySelectorAll(".choice input").forEach((function(n){var t=n.getAttribute("name").replace("choice:","");e.push({name:t,value:n.checked})})),e},n.setChoices=function(e){this.options.banner.querySelectorAll(".choice input").forEach((function(n){var t=n.getAttribute("name").replace("choice:",""),o=e.find((function(e){return e.name===t}));o&&(n.checked=o.value)}))},n.getCapability=function(e){return this.options.capabilities.find((function(n){return n.name===e}))},n.showElement=function(e){"animate"in e&&!o()?e.animate([{opacity:0},{opacity:1}],{duration:320,iterations:1}).addEventListener("finish",(function(){e.classList.add("visible")})):e.classList.add("visible")},n.hideElement=function(e){"animate"in e&&!o()?e.animate([{opacity:1},{opacity:0}],{duration:160,iterations:1}).addEventListener("finish",(function(){e.classList.remove("visible")})):e.classList.remove("visible")},n.hideBanner=function(){this.hideElement(this.options.banner)},n.showBanner=function(){this.showElement(this.options.banner)},n.hideNotice=function(){this.options.linkOnly||this.hideElement(this.options.notice)},n.showNotice=function(){this.options.linkOnly||this.showElement(this.options.notice)},n._addToQueue=function(e,n){this.queue.push({name:e,func:n})},n._startRunner=function(){var e=this;Object.values(y).forEach((function(n){e.queue.filter((function(e){return e.name===n})).forEach((function(e){return(0,e.func)()}))})),this.queue=[]},n._runEventFor=function(e,n,t){var o=this;void 0===t&&(t={}),e&&n&&e[n]&&e[n]instanceof Function?(this._addToQueue(n,(function(){return e[n](o,t)})),this.options.debug&&console.info("[CookieConsent]: Added "+e.name+"."+n+" to queue")):this.options.debug&&console.warn("[CookieConsent]: Capability "+e.name+" has no event of name "+n)},n._runValueEventsFor=function(e,n){var t={choice:n.value};this._runEventFor(e,y.ON_UPDATE,t);var o=this.loadUserOptions();if(null==o?void 0:o.choices){var i=o.choices.find((function(e){return e.name===n.name}));n.value!==i.value&&this._runEventFor(e,y.ON_VALUE_CHANGED,t)}},e}();t("EpU2");j.cookieService=g;n.a=j}}]);
//# sourceMappingURL=4.chunk.f40a7.js.map