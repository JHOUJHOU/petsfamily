(self["webpackChunkpetsfamily_vue"]=self["webpackChunkpetsfamily_vue"]||[]).push([[424],{5695:function(e,t,n){
/*!
  * Bootstrap base-component.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,i){e.exports=i(n(493),n(9286))})(0,(function(e,t){"use strict";const n=e=>e&&"object"===typeof e&&"default"in e?e:{default:e},i=n(e),s=n(t),o=1e3,r="transitionend",a=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const i=Number.parseFloat(t),s=Number.parseFloat(n);return i||s?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*o):0},l=e=>{e.dispatchEvent(new Event(r))},d=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),u=e=>d(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?document.querySelector(e):null,c=e=>{"function"===typeof e&&e()},h=(e,t,n=!0)=>{if(!n)return void c(e);const i=5,s=a(t)+i;let o=!1;const d=({target:n})=>{n===t&&(o=!0,t.removeEventListener(r,d),c(e))};t.addEventListener(r,d),setTimeout((()=>{o||l(t)}),s)},f="5.1.3";class m{constructor(e){e=u(e),e&&(this._element=e,i.default.set(this._element,this.constructor.DATA_KEY,this))}dispose(){i.default.remove(this._element,this.constructor.DATA_KEY),s.default.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach((e=>{this[e]=null}))}_queueCallback(e,t,n=!0){h(e,t,n)}static getInstance(e){return i.default.get(u(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"===typeof t?t:null)}static get VERSION(){return f}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}return m}))},493:function(e){
/*!
  * Bootstrap data.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,n){e.exports=n()})(0,(function(){"use strict";const e=new Map,t={set(t,n,i){e.has(t)||e.set(t,new Map);const s=e.get(t);s.has(n)||0===s.size?s.set(n,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`)},get(t,n){return e.has(t)&&e.get(t).get(n)||null},remove(t,n){if(!e.has(t))return;const i=e.get(t);i.delete(n),0===i.size&&e.delete(t)}};return t}))},9286:function(e){
/*!
  * Bootstrap event-handler.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,n){e.exports=n()})(0,(function(){"use strict";const e=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},t=/[^.]*(?=\..*)\.|.*/,n=/\..*/,i=/::\d+$/,s={};let o=1;const r={mouseenter:"mouseover",mouseleave:"mouseout"},a=/^(mouseenter|mouseleave)/i,l=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function d(e,t){return t&&`${t}::${o++}`||e.uidEvent||o++}function u(e){const t=d(e);return e.uidEvent=t,s[t]=s[t]||{},s[t]}function c(e,t){return function n(i){return i.delegateTarget=e,n.oneOff&&y.off(e,i.type,t),t.apply(e,[i])}}function h(e,t,n){return function i(s){const o=e.querySelectorAll(t);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(let a=o.length;a--;)if(o[a]===r)return s.delegateTarget=r,i.oneOff&&y.off(e,s.type,t,n),n.apply(r,[s]);return null}}function f(e,t,n=null){const i=Object.keys(e);for(let s=0,o=i.length;s<o;s++){const o=e[i[s]];if(o.originalHandler===t&&o.delegationSelector===n)return o}return null}function m(e,t,n){const i="string"===typeof t,s=i?n:t;let o=b(e);const r=l.has(o);return r||(o=e),[i,s,o]}function p(e,n,i,s,o){if("string"!==typeof n||!e)return;if(i||(i=s,s=null),a.test(n)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};s?s=e(s):i=e(i)}const[r,l,p]=m(n,i,s),g=u(e),_=g[p]||(g[p]={}),b=f(_,l,r?i:null);if(b)return void(b.oneOff=b.oneOff&&o);const y=d(l,n.replace(t,"")),E=r?h(e,i,s):c(e,i);E.delegationSelector=r?i:null,E.originalHandler=l,E.oneOff=o,E.uidEvent=y,_[y]=E,e.addEventListener(p,E,r)}function g(e,t,n,i,s){const o=f(t[n],i,s);o&&(e.removeEventListener(n,o,Boolean(s)),delete t[n][o.uidEvent])}function _(e,t,n,i){const s=t[n]||{};Object.keys(s).forEach((o=>{if(o.includes(i)){const i=s[o];g(e,t,n,i.originalHandler,i.delegationSelector)}}))}function b(e){return e=e.replace(n,""),r[e]||e}const y={on(e,t,n,i){p(e,t,n,i,!1)},one(e,t,n,i){p(e,t,n,i,!0)},off(e,t,n,s){if("string"!==typeof t||!e)return;const[o,r,a]=m(t,n,s),l=a!==t,d=u(e),c=t.startsWith(".");if("undefined"!==typeof r){if(!d||!d[a])return;return void g(e,d,a,r,o?n:null)}c&&Object.keys(d).forEach((n=>{_(e,d,n,t.slice(1))}));const h=d[a]||{};Object.keys(h).forEach((n=>{const s=n.replace(i,"");if(!l||t.includes(s)){const t=h[n];g(e,d,a,t.originalHandler,t.delegationSelector)}}))},trigger(t,n,i){if("string"!==typeof n||!t)return null;const s=e(),o=b(n),r=n!==o,a=l.has(o);let d,u=!0,c=!0,h=!1,f=null;return r&&s&&(d=s.Event(n,i),s(t).trigger(d),u=!d.isPropagationStopped(),c=!d.isImmediatePropagationStopped(),h=d.isDefaultPrevented()),a?(f=document.createEvent("HTMLEvents"),f.initEvent(o,u,!0)):f=new CustomEvent(n,{bubbles:u,cancelable:!0}),"undefined"!==typeof i&&Object.keys(i).forEach((e=>{Object.defineProperty(f,e,{get(){return i[e]}})})),h&&f.preventDefault(),c&&t.dispatchEvent(f),f.defaultPrevented&&"undefined"!==typeof d&&d.preventDefault(),f}};return y}))},3175:function(e){
/*!
  * Bootstrap manipulator.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,n){e.exports=n()})(0,(function(){"use strict";function e(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function t(e){return e.replace(/[A-Z]/g,(e=>`-${e.toLowerCase()}`))}const n={setDataAttribute(e,n,i){e.setAttribute(`data-bs-${t(n)}`,i)},removeDataAttribute(e,n){e.removeAttribute(`data-bs-${t(n)}`)},getDataAttributes(t){if(!t)return{};const n={};return Object.keys(t.dataset).filter((e=>e.startsWith("bs"))).forEach((i=>{let s=i.replace(/^bs/,"");s=s.charAt(0).toLowerCase()+s.slice(1,s.length),n[s]=e(t.dataset[i])})),n},getDataAttribute(n,i){return e(n.getAttribute(`data-bs-${t(i)}`))},offset(e){const t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},position(e){return{top:e.offsetTop,left:e.offsetLeft}}};return n}))},8737:function(e){
/*!
  * Bootstrap selector-engine.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,n){e.exports=n()})(0,(function(){"use strict";const e=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),t=t=>!(!e(t)||0===t.getClientRects().length)&&"visible"===getComputedStyle(t).getPropertyValue("visibility"),n=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),i=3,s={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter((e=>e.matches(t)))},parents(e,t){const n=[];let s=e.parentNode;while(s&&s.nodeType===Node.ELEMENT_NODE&&s.nodeType!==i)s.matches(t)&&n.push(s),s=s.parentNode;return n},prev(e,t){let n=e.previousElementSibling;while(n){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;while(n){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const i=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map((e=>`${e}:not([tabindex^="-"])`)).join(", ");return this.find(i,e).filter((e=>!n(e)&&t(e)))}};return s}))},7424:function(e,t,n){
/*!
  * Bootstrap modal.js v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(t,i){e.exports=i(n(9286),n(3175),n(8737),n(5695))})(0,(function(e,t,n,i){"use strict";const s=e=>e&&"object"===typeof e&&"default"in e?e:{default:e},o=s(e),r=s(t),a=s(n),l=s(i),d=1e3,u="transitionend",c=e=>null===e||void 0===e?`${e}`:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),h=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),t=n&&"#"!==n?n.trim():null}return t},f=e=>{const t=h(e);return t?document.querySelector(t):null},m=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const i=Number.parseFloat(t),s=Number.parseFloat(n);return i||s?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*d):0},p=e=>{e.dispatchEvent(new Event(u))},g=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),_=e=>g(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?document.querySelector(e):null,b=(e,t,n)=>{Object.keys(n).forEach((i=>{const s=n[i],o=t[i],r=o&&g(o)?"element":c(o);if(!new RegExp(s).test(r))throw new TypeError(`${e.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${s}".`)}))},y=e=>!(!g(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),E=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),v=e=>{e.offsetHeight},w=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},A=[],k=e=>{"loading"===document.readyState?(A.length||document.addEventListener("DOMContentLoaded",(()=>{A.forEach((e=>e()))})),A.push(e)):e()},T=()=>"rtl"===document.documentElement.dir,N=e=>{k((()=>{const t=w();if(t){const n=e.NAME,i=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=i,e.jQueryInterface)}}))},C=e=>{"function"===typeof e&&e()},$=(e,t,n=!0)=>{if(!n)return void C(e);const i=5,s=m(t)+i;let o=!1;const r=({target:n})=>{n===t&&(o=!0,t.removeEventListener(u,r),C(e))};t.addEventListener(u,r),setTimeout((()=>{o||p(t)}),s)},D=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",j=".sticky-top";class O{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",(t=>t+e)),this._setElementAttributes(D,"paddingRight",(t=>t+e)),this._setElementAttributes(j,"marginRight",(t=>t-e))}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const i=this.getWidth(),s=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+i)return;this._saveInitialAttribute(e,t);const s=window.getComputedStyle(e)[t];e.style[t]=`${n(Number.parseFloat(s))}px`};this._applyManipulationCallback(e,s)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(D,"paddingRight"),this._resetElementAttributes(j,"marginRight")}_saveInitialAttribute(e,t){const n=e.style[t];n&&r.default.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=e=>{const n=r.default.getDataAttribute(e,t);"undefined"===typeof n?e.style.removeProperty(t):(r.default.removeDataAttribute(e,t),e.style[t]=n)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){g(e)?t(e):a.default.find(e,this._element).forEach(t)}isOverflowing(){return this.getWidth()>0}}const S={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},L={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},M="backdrop",x="fade",B="show",q=`mousedown.bs.${M}`;class R{constructor(e){this._config=this._getConfig(e),this._isAppended=!1,this._element=null}show(e){this._config.isVisible?(this._append(),this._config.isAnimated&&v(this._getElement()),this._getElement().classList.add(B),this._emulateAnimation((()=>{C(e)}))):C(e)}hide(e){this._config.isVisible?(this._getElement().classList.remove(B),this._emulateAnimation((()=>{this.dispose(),C(e)}))):C(e)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(x),this._element=e}return this._element}_getConfig(e){return e={...S,..."object"===typeof e?e:{}},e.rootElement=_(e.rootElement),b(M,e,L),e}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),o.default.on(this._getElement(),q,(()=>{C(this._config.clickCallback)})),this._isAppended=!0)}dispose(){this._isAppended&&(o.default.off(this._element,q),this._element.remove(),this._isAppended=!1)}_emulateAnimation(e){$(e,this._getElement(),this._config.isAnimated)}}const F={trapElement:null,autofocus:!0},I={trapElement:"element",autofocus:"boolean"},P="focustrap",W="bs.focustrap",Y=`.${W}`,z=`focusin${Y}`,K=`keydown.tab${Y}`,V="Tab",H="forward",Q="backward";class U{constructor(e){this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:e,autofocus:t}=this._config;this._isActive||(t&&e.focus(),o.default.off(document,Y),o.default.on(document,z,(e=>this._handleFocusin(e))),o.default.on(document,K,(e=>this._handleKeydown(e))),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,o.default.off(document,Y))}_handleFocusin(e){const{target:t}=e,{trapElement:n}=this._config;if(t===document||t===n||n.contains(t))return;const i=a.default.focusableChildren(n);0===i.length?n.focus():this._lastTabNavDirection===Q?i[i.length-1].focus():i[0].focus()}_handleKeydown(e){e.key===V&&(this._lastTabNavDirection=e.shiftKey?Q:H)}_getConfig(e){return e={...F,..."object"===typeof e?e:{}},b(P,e,I),e}}const X=(e,t="hide")=>{const n=`click.dismiss${e.EVENT_KEY}`,i=e.NAME;o.default.on(document,n,`[data-bs-dismiss="${i}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),E(this))return;const s=f(this)||this.closest(`.${i}`),o=e.getOrCreateInstance(s);o[t]()}))},Z="modal",G="bs.modal",J=`.${G}`,ee=".data-api",te="Escape",ne={backdrop:!0,keyboard:!0,focus:!0},ie={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},se=`hide${J}`,oe=`hidePrevented${J}`,re=`hidden${J}`,ae=`show${J}`,le=`shown${J}`,de=`resize${J}`,ue=`click.dismiss${J}`,ce=`keydown.dismiss${J}`,he=`mouseup.dismiss${J}`,fe=`mousedown.dismiss${J}`,me=`click${J}${ee}`,pe="modal-open",ge="fade",_e="show",be="modal-static",ye=".modal.show",Ee=".modal-dialog",ve=".modal-body",we='[data-bs-toggle="modal"]';class Ae extends l.default{constructor(e,t){super(e),this._config=this._getConfig(t),this._dialog=a.default.findOne(Ee,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new O}static get Default(){return ne}static get NAME(){return Z}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;const t=o.default.trigger(this._element,ae,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(pe),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),o.default.on(this._dialog,fe,(()=>{o.default.one(this._element,he,(e=>{e.target===this._element&&(this._ignoreBackdropClick=!0)}))})),this._showBackdrop((()=>this._showElement(e))))}hide(){if(!this._isShown||this._isTransitioning)return;const e=o.default.trigger(this._element,se);if(e.defaultPrevented)return;this._isShown=!1;const t=this._isAnimated();t&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(_e),o.default.off(this._element,ue),o.default.off(this._dialog,fe),this._queueCallback((()=>this._hideModal()),this._element,t)}dispose(){[window,this._dialog].forEach((e=>o.default.off(e,J))),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new R({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new U({trapElement:this._element})}_getConfig(e){return e={...ne,...r.default.getDataAttributes(this._element),..."object"===typeof e?e:{}},b(Z,e,ie),e}_showElement(e){const t=this._isAnimated(),n=a.default.findOne(ve,this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),t&&v(this._element),this._element.classList.add(_e);const i=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,o.default.trigger(this._element,le,{relatedTarget:e})};this._queueCallback(i,this._dialog,t)}_setEscapeEvent(){this._isShown?o.default.on(this._element,ce,(e=>{this._config.keyboard&&e.key===te?(e.preventDefault(),this.hide()):this._config.keyboard||e.key!==te||this._triggerBackdropTransition()})):o.default.off(this._element,ce)}_setResizeEvent(){this._isShown?o.default.on(window,de,(()=>this._adjustDialog())):o.default.off(window,de)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide((()=>{document.body.classList.remove(pe),this._resetAdjustments(),this._scrollBar.reset(),o.default.trigger(this._element,re)}))}_showBackdrop(e){o.default.on(this._element,ue,(e=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:e.target===e.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())})),this._backdrop.show(e)}_isAnimated(){return this._element.classList.contains(ge)}_triggerBackdropTransition(){const e=o.default.trigger(this._element,oe);if(e.defaultPrevented)return;const{classList:t,scrollHeight:n,style:i}=this._element,s=n>document.documentElement.clientHeight;!s&&"hidden"===i.overflowY||t.contains(be)||(s||(i.overflowY="hidden"),t.add(be),this._queueCallback((()=>{t.remove(be),s||this._queueCallback((()=>{i.overflowY=""}),this._dialog)}),this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;(!n&&e&&!T()||n&&!e&&T())&&(this._element.style.paddingLeft=`${t}px`),(n&&!e&&!T()||!n&&e&&T())&&(this._element.style.paddingRight=`${t}px`)}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const n=Ae.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}}return o.default.on(document,me,we,(function(e){const t=f(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),o.default.one(t,ae,(e=>{e.defaultPrevented||o.default.one(t,re,(()=>{y(this)&&this.focus()}))}));const n=a.default.findOne(ye);n&&Ae.getInstance(n).hide();const i=Ae.getOrCreateInstance(t);i.toggle(this)})),X(Ae),N(Ae),Ae}))}}]);
//# sourceMappingURL=424.d5fc3261.js.map