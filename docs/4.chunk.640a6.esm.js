(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"0cPo":function(e,t,n){"use strict";n.r(t);var i=n("f7dk"),o=n("k777"),c=n("c2a7"),s=n("bF8/"),a=n.n(s),r=()=>Object(i.h)("div",{id:"cookiebanner2",className:"cookiebanner "+a.a.banner,"aria-label":"Edit your cookie settings",role:"banner"},Object(i.h)("div",{className:"info"},Object(i.h)("div",{className:"title"},"Your Cookie Controls"),Object(i.h)("div",{className:"description"},"Paste some info for your users here.")),Object(i.h)("div",{className:"choices"},Object(i.h)("label",{className:"choice",htmlFor:"choice-functional"},Object(i.h)("input",{type:"checkbox",name:"choice:functional",id:"choice-functional",checked:!0,disabled:!0}),Object(i.h)("div",{className:"name"},"Functional with a very long long long long long")),Object(i.h)("label",{className:"choice",htmlFor:"choice-analytics"},Object(i.h)("input",{type:"checkbox",name:"choice:analytics",id:"choice-analytics"}),Object(i.h)("div",{className:"name"},"Analytics"),Object(i.h)("p",{className:"info"},"Google Tag Manager will be enabled here."))),Object(i.h)("div",{className:"buttons"},Object(i.h)("button",{className:"reject"},"Reject choices"),Object(i.h)("button",{className:"accept"},"Accept choices"))),h=()=>Object(i.h)("div",{id:"cookienotice2",className:"cookienotice "+a.a.banner,"aria-label":"Show the cookie settings again",role:"button"},Object(i.h)("img",{src:"/assets/cookie.svg",alt:"A shield which represents privacy"}));t.default=()=>(Object(o.d)(()=>{window.consent2=new c.a({name:"consent-with-ga",banner:document.getElementById("cookiebanner2"),notice:document.getElementById("cookienotice2"),capabilities:[{name:"functional",checked:!0,onAccept:e=>{console.log("[functional2:onAccept]");var t=e.getChoices();e.saveUserOptions({choices:t,consented:!0})}},{name:"analytics",checked:!1,onReject:()=>{console.log("[analytics:onReject]"),c.a.cookieService.findCookie("_g")&&c.a.cookieService.clearCookies("_g",{expires:new Date("1996-06-13")})},onAccept:()=>{console.log("[analytics:onAccept]");var e=document.getElementsByTagName("head")[0],t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=UA-156811148-1",t.async=!0,t.onload=()=>{function e(){window.dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","UA-156811148-1",{anonymize_ip:!0})},e.appendChild(t)}}]})}),[Object(i.h)(r,{key:"banner"}),Object(i.h)(h,{key:"notice"})])},EpU2:function(){},"bF8/":function(e){e.exports={banner:"banner__1f7Hi"}},c2a7:function(e,t,n){"use strict";function i(){return window.matchMedia("(prefers-reduced-motion)").matches}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e){var t=("; "+document.cookie).split("; "+e+"=").pop().split(";").shift();if(t&&"undefined"!==t)return["true","false"].includes(t)?"true"===t:JSON.parse(t)}function r(){return document.cookie.split("; ").map(e=>{var[t,n]=e.split("=");return{key:t,value:n}})}function h(e,t,n){var i={};i[e]=JSON.stringify(t),i=p(i=c({},i,{},v,{},n)),document.cookie=i}function l(e,t){var n={};n[e]="",n["max-age"]=0,n.path=v.path,(n=c({},n,{},t)).expires=new Date("1996-06-13"),h(e,n=p(n))}function u(e){void 0===e&&(e=365);var t=new Date;return t.setTime(t.getTime()+24*e*60*60*1e3),t}function p(e){return Object.keys(e).map(t=>t+"="+e[t]).join("; ")}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v={expires:u(),path:"/"},f={getCookie:a,getAllCookies:r,setCookie:h,removeCookie:l,findCookie:function(e){var t=r(),n=new RegExp("^"+e,"g");return t.find(e=>{var{key:t}=e;return n.test(t)})||null},clearCookies:function(e,t){var n=r(),i=new RegExp("^"+e,"g");n.forEach(e=>{var{key:n}=e;n.match(i)&&l(n,t)})},getExpirationDate:u},g={ON_UPDATE:"onUpdate",ON_VALUE_CHANGED:"onValueChange",ON_ACCEPT:"onAccept",ON_REJECT:"onReject"};class O{constructor(e){var t={debug:!1,name:"cookie-consent",banner:document.getElementById("cookiebanner"),notice:document.getElementById("cookienotice"),capabilities:[{name:"functional",checked:!0,onReject:e=>{e.removeUserOptions(),window.location.reload()},onAccept:e=>{var t=e.getChoices();e.saveUserOptions({choices:t,consented:!0})}}]};if(this.options=b({},t,{},e),this.queue=[],this.options.banner&&this.options.notice)if(this.button={},this.button.reject=this.options.banner.querySelector(".reject"),this.button.accept=this.options.banner.querySelector(".accept"),this.button.reject&&this.button.accept){this.initEvents();var n=this.loadUserOptions();n&&n.choices?(this.setChoices(n.choices),this.initStartUpEvents()):this.initFields(),this.showElement(n&&n.consented?this.options.notice:this.options.banner)}else console.error("Can not find required buttons!");else console.error("Can not find required elements!")}initFields(){var e=this.options.capabilities.map(e=>{var{name:t,checked:n}=e;return{name:t,value:n}});return this.setChoices(e),e}initEvents(){this.button.reject.addEventListener("click",()=>{this.options.debug&&console.time("reject"),this.initFields().forEach(e=>{var t=this.getCapability(e.name);this._runValueEventsFor(t,e),this._runEventFor(t,g.ON_REJECT)}),this._startRunner(),this.options.debug&&console.timeEnd("reject"),this.hideElement(this.options.banner),setTimeout(()=>{this.showElement(this.options.notice)},160)}),this.button.accept.addEventListener("click",()=>{this.options.debug&&console.time("accept"),this.getChoices().forEach(e=>{var t=this.getCapability(e.name);this._runValueEventsFor(t,e),this._runEventFor(t,g.ON_ACCEPT)}),this._startRunner(),this.options.debug&&console.timeEnd("accept"),this.hideElement(this.options.banner),setTimeout(()=>{this.showElement(this.options.notice)},160)}),this.options.notice.addEventListener("click",()=>{this.hideElement(this.options.notice),this.showElement(this.options.banner)})}initStartUpEvents(){this.getChoices().forEach(e=>{var t=this.getCapability(e.name);this._runEventFor(t,e.value?g.ON_ACCEPT:g.ON_REJECT),this._startRunner()})}loadUserOptions(){var e=a(this.options.name);return e||null}saveUserOptions(e){var t=b({},a(this.options.name),{},e);h(this.options.name,t)}removeUserOptions(){a(this.options.name)&&l(this.options.name)}getChoice(e){return this.options.banner.querySelector('.choice [name="choice:'+e+'"]').checked}getChoices(){var e=[];return this.options.banner.querySelectorAll(".choice input").forEach(t=>{var n=t.getAttribute("name").replace("choice:","");e.push({name:n,value:t.checked})}),e}setChoices(e){this.options.banner.querySelectorAll(".choice input").forEach(t=>{var n=t.getAttribute("name").replace("choice:",""),i=e.find(e=>e.name===n);i&&(t.checked=i.value)})}getCapability(e){return this.options.capabilities.find(t=>t.name===e)}showElement(e){"animate"in e&&!i()?e.animate([{opacity:0},{opacity:1}],{duration:320,iterations:1}).addEventListener("finish",(function t(){e.classList.add("visible"),e.removeEventListener("finish",t)})):e.classList.add("visible")}hideElement(e){"animate"in e&&!i()?e.animate([{opacity:1},{opacity:0}],{duration:160,iterations:1}).addEventListener("finish",(function t(){e.classList.remove("visible"),e.removeEventListener("finish",t)})):e.classList.remove("visible")}_addToQueue(e,t){this.queue.push({name:e,func:t})}_startRunner(){Object.values(g).forEach(e=>{this.queue.filter(t=>t.name===e).forEach(e=>{var{func:t}=e;return t()})}),this.queue=[]}_runEventFor(e,t,n){void 0===n&&(n={}),e&&t&&e[t]&&e[t]instanceof Function?(this._addToQueue(t,()=>e[t](this,n)),this.options.debug&&console.info("[CookieConsent]: Added "+e.name+"."+t+" to queue")):this.options.debug&&console.warn("[CookieConsent]: Capability "+e.name+" has no event of name "+t)}_runValueEventsFor(e,t){var n={choice:t.value};this._runEventFor(e,g.ON_UPDATE,n);var i=this.loadUserOptions();if(null==i?void 0:i.choices){var o=i.choices.find(e=>e.name===t.name);t.value!==o.value&&this._runEventFor(e,g.ON_VALUE_CHANGED,n)}}}n("EpU2");O.cookieService=f;t.a=O}}]);
//# sourceMappingURL=4.chunk.640a6.esm.js.map