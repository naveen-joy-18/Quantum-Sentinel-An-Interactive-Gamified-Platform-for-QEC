var pv=Object.defineProperty;var mv=(t,e,n)=>e in t?pv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var xi=(t,e,n)=>mv(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function gv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var rg={exports:{}},Yl={},sg={exports:{}},rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xa=Symbol.for("react.element"),xv=Symbol.for("react.portal"),vv=Symbol.for("react.fragment"),_v=Symbol.for("react.strict_mode"),yv=Symbol.for("react.profiler"),Sv=Symbol.for("react.provider"),Mv=Symbol.for("react.context"),Ev=Symbol.for("react.forward_ref"),Tv=Symbol.for("react.suspense"),wv=Symbol.for("react.memo"),Av=Symbol.for("react.lazy"),Vh=Symbol.iterator;function bv(t){return t===null||typeof t!="object"?null:(t=Vh&&t[Vh]||t["@@iterator"],typeof t=="function"?t:null)}var ag={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},og=Object.assign,lg={};function ks(t,e,n){this.props=t,this.context=e,this.refs=lg,this.updater=n||ag}ks.prototype.isReactComponent={};ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cg(){}cg.prototype=ks.prototype;function hf(t,e,n){this.props=t,this.context=e,this.refs=lg,this.updater=n||ag}var pf=hf.prototype=new cg;pf.constructor=hf;og(pf,ks.prototype);pf.isPureReactComponent=!0;var jh=Array.isArray,ug=Object.prototype.hasOwnProperty,mf={current:null},dg={key:!0,ref:!0,__self:!0,__source:!0};function fg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)ug.call(e,i)&&!dg.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Xa,type:t,key:s,ref:a,props:r,_owner:mf.current}}function Cv(t,e){return{$$typeof:Xa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function gf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xa}function Rv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wh=/\/+/g;function xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Rv(""+t.key):e.toString(36)}function Yo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Xa:case xv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+xc(a,0):i,jh(r)?(n="",t!=null&&(n=t.replace(Wh,"$&/")+"/"),Yo(r,e,n,"",function(u){return u})):r!=null&&(gf(r)&&(r=Cv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Wh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",jh(t))for(var o=0;o<t.length;o++){s=t[o];var c=i+xc(s,o);a+=Yo(s,e,n,c,r)}else if(c=bv(t),typeof c=="function")for(t=c.call(t),o=0;!(s=t.next()).done;)s=s.value,c=i+xc(s,o++),a+=Yo(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function so(t,e,n){if(t==null)return t;var i=[],r=0;return Yo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Nv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var dn={current:null},Zo={transition:null},Pv={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:Zo,ReactCurrentOwner:mf};function hg(){throw Error("act(...) is not supported in production builds of React.")}rt.Children={map:so,forEach:function(t,e,n){so(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return so(t,function(){e++}),e},toArray:function(t){return so(t,function(e){return e})||[]},only:function(t){if(!gf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};rt.Component=ks;rt.Fragment=vv;rt.Profiler=yv;rt.PureComponent=hf;rt.StrictMode=_v;rt.Suspense=Tv;rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pv;rt.act=hg;rt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=og({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=mf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in e)ug.call(e,c)&&!dg.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&o!==void 0?o[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Xa,type:t.type,key:r,ref:s,props:i,_owner:a}};rt.createContext=function(t){return t={$$typeof:Mv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Sv,_context:t},t.Consumer=t};rt.createElement=fg;rt.createFactory=function(t){var e=fg.bind(null,t);return e.type=t,e};rt.createRef=function(){return{current:null}};rt.forwardRef=function(t){return{$$typeof:Ev,render:t}};rt.isValidElement=gf;rt.lazy=function(t){return{$$typeof:Av,_payload:{_status:-1,_result:t},_init:Nv}};rt.memo=function(t,e){return{$$typeof:wv,type:t,compare:e===void 0?null:e}};rt.startTransition=function(t){var e=Zo.transition;Zo.transition={};try{t()}finally{Zo.transition=e}};rt.unstable_act=hg;rt.useCallback=function(t,e){return dn.current.useCallback(t,e)};rt.useContext=function(t){return dn.current.useContext(t)};rt.useDebugValue=function(){};rt.useDeferredValue=function(t){return dn.current.useDeferredValue(t)};rt.useEffect=function(t,e){return dn.current.useEffect(t,e)};rt.useId=function(){return dn.current.useId()};rt.useImperativeHandle=function(t,e,n){return dn.current.useImperativeHandle(t,e,n)};rt.useInsertionEffect=function(t,e){return dn.current.useInsertionEffect(t,e)};rt.useLayoutEffect=function(t,e){return dn.current.useLayoutEffect(t,e)};rt.useMemo=function(t,e){return dn.current.useMemo(t,e)};rt.useReducer=function(t,e,n){return dn.current.useReducer(t,e,n)};rt.useRef=function(t){return dn.current.useRef(t)};rt.useState=function(t){return dn.current.useState(t)};rt.useSyncExternalStore=function(t,e,n){return dn.current.useSyncExternalStore(t,e,n)};rt.useTransition=function(){return dn.current.useTransition()};rt.version="18.3.1";sg.exports=rt;var ae=sg.exports;const Lv=gv(ae);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv=ae,Dv=Symbol.for("react.element"),Uv=Symbol.for("react.fragment"),Fv=Object.prototype.hasOwnProperty,Ov=Iv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kv={key:!0,ref:!0,__self:!0,__source:!0};function pg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Fv.call(e,i)&&!kv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Dv,type:t,key:s,ref:a,props:r,_owner:Ov.current}}Yl.Fragment=Uv;Yl.jsx=pg;Yl.jsxs=pg;rg.exports=Yl;var l=rg.exports,mg={exports:{}},An={},gg={exports:{}},xg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,U){var B=I.length;I.push(U);e:for(;0<B;){var q=B-1>>>1,de=I[q];if(0<r(de,U))I[q]=U,I[B]=de,B=q;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var U=I[0],B=I.pop();if(B!==U){I[0]=B;e:for(var q=0,de=I.length,he=de>>>1;q<he;){var $e=2*(q+1)-1,De=I[$e],ze=$e+1,Y=I[ze];if(0>r(De,B))ze<de&&0>r(Y,De)?(I[q]=Y,I[ze]=B,q=ze):(I[q]=De,I[$e]=B,q=$e);else if(ze<de&&0>r(Y,B))I[q]=Y,I[ze]=B,q=ze;else break e}}return U}function r(I,U){var B=I.sortIndex-U.sortIndex;return B!==0?B:I.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var c=[],u=[],h=1,p=null,f=3,m=!1,x=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(I){for(var U=n(u);U!==null;){if(U.callback===null)i(u);else if(U.startTime<=I)i(u),U.sortIndex=U.expirationTime,e(c,U);else break;U=n(u)}}function S(I){if(M=!1,E(I),!x)if(n(c)!==null)x=!0,K(w);else{var U=n(u);U!==null&&G(S,U.startTime-I)}}function w(I,U){x=!1,M&&(M=!1,d(_),_=-1),m=!0;var B=f;try{for(E(U),p=n(c);p!==null&&(!(p.expirationTime>U)||I&&!L());){var q=p.callback;if(typeof q=="function"){p.callback=null,f=p.priorityLevel;var de=q(p.expirationTime<=U);U=t.unstable_now(),typeof de=="function"?p.callback=de:p===n(c)&&i(c),E(U)}else i(c);p=n(c)}if(p!==null)var he=!0;else{var $e=n(u);$e!==null&&G(S,$e.startTime-U),he=!1}return he}finally{p=null,f=B,m=!1}}var A=!1,b=null,_=-1,C=5,P=-1;function L(){return!(t.unstable_now()-P<C)}function O(){if(b!==null){var I=t.unstable_now();P=I;var U=!0;try{U=b(!0,I)}finally{U?H():(A=!1,b=null)}}else A=!1}var H;if(typeof g=="function")H=function(){g(O)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,z=D.port2;D.port1.onmessage=O,H=function(){z.postMessage(null)}}else H=function(){v(O,0)};function K(I){b=I,A||(A=!0,H())}function G(I,U){_=v(function(){I(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,K(w))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(I){switch(f){case 1:case 2:case 3:var U=3;break;default:U=f}var B=f;f=U;try{return I()}finally{f=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,U){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var B=f;f=I;try{return U()}finally{f=B}},t.unstable_scheduleCallback=function(I,U,B){var q=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?q+B:q):B=q,I){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=B+de,I={id:h++,callback:U,priorityLevel:I,startTime:B,expirationTime:de,sortIndex:-1},B>q?(I.sortIndex=B,e(u,I),n(c)===null&&I===n(u)&&(M?(d(_),_=-1):M=!0,G(S,B-q))):(I.sortIndex=de,e(c,I),x||m||(x=!0,K(w))),I},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(I){var U=f;return function(){var B=f;f=U;try{return I.apply(this,arguments)}finally{f=B}}}})(xg);gg.exports=xg;var Bv=gg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zv=ae,wn=Bv;function pe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vg=new Set,Sa={};function Br(t,e){Cs(t,e),Cs(t+"Capture",e)}function Cs(t,e){for(Sa[t]=e,t=0;t<e.length;t++)vg.add(e[t])}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bu=Object.prototype.hasOwnProperty,Hv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xh={},qh={};function Gv(t){return bu.call(qh,t)?!0:bu.call(Xh,t)?!1:Hv.test(t)?qh[t]=!0:(Xh[t]=!0,!1)}function Vv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function jv(t,e,n,i){if(e===null||typeof e>"u"||Vv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function fn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Yt[t]=new fn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Yt[e]=new fn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Yt[t]=new fn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Yt[t]=new fn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Yt[t]=new fn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Yt[t]=new fn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Yt[t]=new fn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Yt[t]=new fn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Yt[t]=new fn(t,5,!1,t.toLowerCase(),null,!1,!1)});var xf=/[\-:]([a-z])/g;function vf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xf,vf);Yt[e]=new fn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xf,vf);Yt[e]=new fn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xf,vf);Yt[e]=new fn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Yt[t]=new fn(t,1,!1,t.toLowerCase(),null,!1,!1)});Yt.xlinkHref=new fn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Yt[t]=new fn(t,1,!1,t.toLowerCase(),null,!0,!0)});function _f(t,e,n,i){var r=Yt.hasOwnProperty(e)?Yt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(jv(e,n,r,i)&&(n=null),i||r===null?Gv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Fi=zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ao=Symbol.for("react.element"),as=Symbol.for("react.portal"),os=Symbol.for("react.fragment"),yf=Symbol.for("react.strict_mode"),Cu=Symbol.for("react.profiler"),_g=Symbol.for("react.provider"),yg=Symbol.for("react.context"),Sf=Symbol.for("react.forward_ref"),Ru=Symbol.for("react.suspense"),Nu=Symbol.for("react.suspense_list"),Mf=Symbol.for("react.memo"),$i=Symbol.for("react.lazy"),Sg=Symbol.for("react.offscreen"),$h=Symbol.iterator;function Vs(t){return t===null||typeof t!="object"?null:(t=$h&&t[$h]||t["@@iterator"],typeof t=="function"?t:null)}var Ct=Object.assign,vc;function sa(t){if(vc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vc=e&&e[1]||""}return`
`+vc+t}var _c=!1;function yc(t,e){if(!t||_c)return"";_c=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=o);break}}}finally{_c=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?sa(t):""}function Wv(t){switch(t.tag){case 5:return sa(t.type);case 16:return sa("Lazy");case 13:return sa("Suspense");case 19:return sa("SuspenseList");case 0:case 2:case 15:return t=yc(t.type,!1),t;case 11:return t=yc(t.type.render,!1),t;case 1:return t=yc(t.type,!0),t;default:return""}}function Pu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case os:return"Fragment";case as:return"Portal";case Cu:return"Profiler";case yf:return"StrictMode";case Ru:return"Suspense";case Nu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case yg:return(t.displayName||"Context")+".Consumer";case _g:return(t._context.displayName||"Context")+".Provider";case Sf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mf:return e=t.displayName||null,e!==null?e:Pu(t.type)||"Memo";case $i:e=t._payload,t=t._init;try{return Pu(t(e))}catch{}}return null}function Xv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Pu(e);case 8:return e===yf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qv(t){var e=Mg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function oo(t){t._valueTracker||(t._valueTracker=qv(t))}function Eg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Mg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Lu(t,e){var n=e.checked;return Ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Yh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Tg(t,e){e=e.checked,e!=null&&_f(t,"checked",e,!1)}function Iu(t,e){Tg(t,e);var n=ur(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Du(t,e.type,n):e.hasOwnProperty("defaultValue")&&Du(t,e.type,ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Zh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Du(t,e,n){(e!=="number"||hl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var aa=Array.isArray;function ys(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ur(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Uu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(pe(91));return Ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Kh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(pe(92));if(aa(n)){if(1<n.length)throw Error(pe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ur(n)}}function wg(t,e){var n=ur(e.value),i=ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Qh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Ag(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Ag(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var lo,bg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(lo=lo||document.createElement("div"),lo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=lo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var da={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$v=["Webkit","ms","Moz","O"];Object.keys(da).forEach(function(t){$v.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),da[e]=da[t]})});function Cg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||da.hasOwnProperty(t)&&da[t]?(""+e).trim():e+"px"}function Rg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Cg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Yv=Ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ou(t,e){if(e){if(Yv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(pe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(pe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(pe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(pe(62))}}function ku(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bu=null;function Ef(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zu=null,Ss=null,Ms=null;function Jh(t){if(t=Ya(t)){if(typeof zu!="function")throw Error(pe(280));var e=t.stateNode;e&&(e=ec(e),zu(t.stateNode,t.type,e))}}function Ng(t){Ss?Ms?Ms.push(t):Ms=[t]:Ss=t}function Pg(){if(Ss){var t=Ss,e=Ms;if(Ms=Ss=null,Jh(t),e)for(t=0;t<e.length;t++)Jh(e[t])}}function Lg(t,e){return t(e)}function Ig(){}var Sc=!1;function Dg(t,e,n){if(Sc)return t(e,n);Sc=!0;try{return Lg(t,e,n)}finally{Sc=!1,(Ss!==null||Ms!==null)&&(Ig(),Pg())}}function Ea(t,e){var n=t.stateNode;if(n===null)return null;var i=ec(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(pe(231,e,typeof n));return n}var Hu=!1;if(Pi)try{var js={};Object.defineProperty(js,"passive",{get:function(){Hu=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{Hu=!1}function Zv(t,e,n,i,r,s,a,o,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var fa=!1,pl=null,ml=!1,Gu=null,Kv={onError:function(t){fa=!0,pl=t}};function Qv(t,e,n,i,r,s,a,o,c){fa=!1,pl=null,Zv.apply(Kv,arguments)}function Jv(t,e,n,i,r,s,a,o,c){if(Qv.apply(this,arguments),fa){if(fa){var u=pl;fa=!1,pl=null}else throw Error(pe(198));ml||(ml=!0,Gu=u)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ug(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ep(t){if(zr(t)!==t)throw Error(pe(188))}function e_(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(pe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return ep(r),t;if(s===i)return ep(r),e;s=s.sibling}throw Error(pe(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(pe(189))}}if(n.alternate!==i)throw Error(pe(190))}if(n.tag!==3)throw Error(pe(188));return n.stateNode.current===n?t:e}function Fg(t){return t=e_(t),t!==null?Og(t):null}function Og(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Og(t);if(e!==null)return e;t=t.sibling}return null}var kg=wn.unstable_scheduleCallback,tp=wn.unstable_cancelCallback,t_=wn.unstable_shouldYield,n_=wn.unstable_requestPaint,Pt=wn.unstable_now,i_=wn.unstable_getCurrentPriorityLevel,Tf=wn.unstable_ImmediatePriority,Bg=wn.unstable_UserBlockingPriority,gl=wn.unstable_NormalPriority,r_=wn.unstable_LowPriority,zg=wn.unstable_IdlePriority,Zl=null,fi=null;function s_(t){if(fi&&typeof fi.onCommitFiberRoot=="function")try{fi.onCommitFiberRoot(Zl,t,void 0,(t.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:l_,a_=Math.log,o_=Math.LN2;function l_(t){return t>>>=0,t===0?32:31-(a_(t)/o_|0)|0}var co=64,uo=4194304;function oa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function xl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=oa(o):(s&=a,s!==0&&(i=oa(s)))}else a=n&~r,a!==0?i=oa(a):s!==0&&(i=oa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Yn(e),r=1<<n,i|=t[n],e&=~r;return i}function c_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function u_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Yn(s),o=1<<a,c=r[a];c===-1?(!(o&n)||o&i)&&(r[a]=c_(o,e)):c<=e&&(t.expiredLanes|=o),s&=~o}}function Vu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Hg(){var t=co;return co<<=1,!(co&4194240)&&(co=64),t}function Mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yn(e),t[e]=n}function d_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Yn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function wf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var pt=0;function Gg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Vg,Af,jg,Wg,Xg,ju=!1,fo=[],nr=null,ir=null,rr=null,Ta=new Map,wa=new Map,Ki=[],f_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function np(t,e){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":Ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wa.delete(e.pointerId)}}function Ws(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ya(e),e!==null&&Af(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function h_(t,e,n,i,r){switch(e){case"focusin":return nr=Ws(nr,t,e,n,i,r),!0;case"dragenter":return ir=Ws(ir,t,e,n,i,r),!0;case"mouseover":return rr=Ws(rr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ta.set(s,Ws(Ta.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,wa.set(s,Ws(wa.get(s)||null,t,e,n,i,r)),!0}return!1}function qg(t){var e=Tr(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=Ug(n),e!==null){t.blockedOn=e,Xg(t.priority,function(){jg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ko(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Wu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Bu=i,n.target.dispatchEvent(i),Bu=null}else return e=Ya(n),e!==null&&Af(e),t.blockedOn=n,!1;e.shift()}return!0}function ip(t,e,n){Ko(t)&&n.delete(e)}function p_(){ju=!1,nr!==null&&Ko(nr)&&(nr=null),ir!==null&&Ko(ir)&&(ir=null),rr!==null&&Ko(rr)&&(rr=null),Ta.forEach(ip),wa.forEach(ip)}function Xs(t,e){t.blockedOn===e&&(t.blockedOn=null,ju||(ju=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,p_)))}function Aa(t){function e(r){return Xs(r,t)}if(0<fo.length){Xs(fo[0],t);for(var n=1;n<fo.length;n++){var i=fo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(nr!==null&&Xs(nr,t),ir!==null&&Xs(ir,t),rr!==null&&Xs(rr,t),Ta.forEach(e),wa.forEach(e),n=0;n<Ki.length;n++)i=Ki[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ki.length&&(n=Ki[0],n.blockedOn===null);)qg(n),n.blockedOn===null&&Ki.shift()}var Es=Fi.ReactCurrentBatchConfig,vl=!0;function m_(t,e,n,i){var r=pt,s=Es.transition;Es.transition=null;try{pt=1,bf(t,e,n,i)}finally{pt=r,Es.transition=s}}function g_(t,e,n,i){var r=pt,s=Es.transition;Es.transition=null;try{pt=4,bf(t,e,n,i)}finally{pt=r,Es.transition=s}}function bf(t,e,n,i){if(vl){var r=Wu(t,e,n,i);if(r===null)Lc(t,e,i,_l,n),np(t,i);else if(h_(r,t,e,n,i))i.stopPropagation();else if(np(t,i),e&4&&-1<f_.indexOf(t)){for(;r!==null;){var s=Ya(r);if(s!==null&&Vg(s),s=Wu(t,e,n,i),s===null&&Lc(t,e,i,_l,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Lc(t,e,i,null,n)}}var _l=null;function Wu(t,e,n,i){if(_l=null,t=Ef(i),t=Tr(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ug(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return _l=t,null}function $g(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(i_()){case Tf:return 1;case Bg:return 4;case gl:case r_:return 16;case zg:return 536870912;default:return 16}default:return 16}}var er=null,Cf=null,Qo=null;function Yg(){if(Qo)return Qo;var t,e=Cf,n=e.length,i,r="value"in er?er.value:er.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Qo=r.slice(t,1<i?1-i:void 0)}function Jo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ho(){return!0}function rp(){return!1}function bn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ho:rp,this.isPropagationStopped=rp,this}return Ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ho)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ho)},persist:function(){},isPersistent:ho}),e}var Bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rf=bn(Bs),$a=Ct({},Bs,{view:0,detail:0}),x_=bn($a),Ec,Tc,qs,Kl=Ct({},$a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(Ec=t.screenX-qs.screenX,Tc=t.screenY-qs.screenY):Tc=Ec=0,qs=t),Ec)},movementY:function(t){return"movementY"in t?t.movementY:Tc}}),sp=bn(Kl),v_=Ct({},Kl,{dataTransfer:0}),__=bn(v_),y_=Ct({},$a,{relatedTarget:0}),wc=bn(y_),S_=Ct({},Bs,{animationName:0,elapsedTime:0,pseudoElement:0}),M_=bn(S_),E_=Ct({},Bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),T_=bn(E_),w_=Ct({},Bs,{data:0}),ap=bn(w_),A_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function R_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=C_[t])?!!e[t]:!1}function Nf(){return R_}var N_=Ct({},$a,{key:function(t){if(t.key){var e=A_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Jo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?b_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nf,charCode:function(t){return t.type==="keypress"?Jo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Jo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),P_=bn(N_),L_=Ct({},Kl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),op=bn(L_),I_=Ct({},$a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nf}),D_=bn(I_),U_=Ct({},Bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),F_=bn(U_),O_=Ct({},Kl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),k_=bn(O_),B_=[9,13,27,32],Pf=Pi&&"CompositionEvent"in window,ha=null;Pi&&"documentMode"in document&&(ha=document.documentMode);var z_=Pi&&"TextEvent"in window&&!ha,Zg=Pi&&(!Pf||ha&&8<ha&&11>=ha),lp=" ",cp=!1;function Kg(t,e){switch(t){case"keyup":return B_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ls=!1;function H_(t,e){switch(t){case"compositionend":return Qg(e);case"keypress":return e.which!==32?null:(cp=!0,lp);case"textInput":return t=e.data,t===lp&&cp?null:t;default:return null}}function G_(t,e){if(ls)return t==="compositionend"||!Pf&&Kg(t,e)?(t=Yg(),Qo=Cf=er=null,ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Zg&&e.locale!=="ko"?null:e.data;default:return null}}var V_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function up(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!V_[t.type]:e==="textarea"}function Jg(t,e,n,i){Ng(i),e=yl(e,"onChange"),0<e.length&&(n=new Rf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var pa=null,ba=null;function j_(t){u0(t,0)}function Ql(t){var e=ds(t);if(Eg(e))return t}function W_(t,e){if(t==="change")return e}var e0=!1;if(Pi){var Ac;if(Pi){var bc="oninput"in document;if(!bc){var dp=document.createElement("div");dp.setAttribute("oninput","return;"),bc=typeof dp.oninput=="function"}Ac=bc}else Ac=!1;e0=Ac&&(!document.documentMode||9<document.documentMode)}function fp(){pa&&(pa.detachEvent("onpropertychange",t0),ba=pa=null)}function t0(t){if(t.propertyName==="value"&&Ql(ba)){var e=[];Jg(e,ba,t,Ef(t)),Dg(j_,e)}}function X_(t,e,n){t==="focusin"?(fp(),pa=e,ba=n,pa.attachEvent("onpropertychange",t0)):t==="focusout"&&fp()}function q_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ql(ba)}function $_(t,e){if(t==="click")return Ql(e)}function Y_(t,e){if(t==="input"||t==="change")return Ql(e)}function Z_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:Z_;function Ca(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!bu.call(e,r)||!Qn(t[r],e[r]))return!1}return!0}function hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pp(t,e){var n=hp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hp(n)}}function n0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?n0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function i0(){for(var t=window,e=hl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hl(t.document)}return e}function Lf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function K_(t){var e=i0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&n0(n.ownerDocument.documentElement,n)){if(i!==null&&Lf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=pp(n,s);var a=pp(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Q_=Pi&&"documentMode"in document&&11>=document.documentMode,cs=null,Xu=null,ma=null,qu=!1;function mp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qu||cs==null||cs!==hl(i)||(i=cs,"selectionStart"in i&&Lf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ma&&Ca(ma,i)||(ma=i,i=yl(Xu,"onSelect"),0<i.length&&(e=new Rf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=cs)))}function po(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var us={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionend:po("Transition","TransitionEnd")},Cc={},r0={};Pi&&(r0=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function Jl(t){if(Cc[t])return Cc[t];if(!us[t])return t;var e=us[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in r0)return Cc[t]=e[n];return t}var s0=Jl("animationend"),a0=Jl("animationiteration"),o0=Jl("animationstart"),l0=Jl("transitionend"),c0=new Map,gp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(t,e){c0.set(t,e),Br(e,[t])}for(var Rc=0;Rc<gp.length;Rc++){var Nc=gp[Rc],J_=Nc.toLowerCase(),ey=Nc[0].toUpperCase()+Nc.slice(1);hr(J_,"on"+ey)}hr(s0,"onAnimationEnd");hr(a0,"onAnimationIteration");hr(o0,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr(l0,"onTransitionEnd");Cs("onMouseEnter",["mouseout","mouseover"]);Cs("onMouseLeave",["mouseout","mouseover"]);Cs("onPointerEnter",["pointerout","pointerover"]);Cs("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ty=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function xp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Jv(i,e,void 0,t),t.currentTarget=null}function u0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==s&&r.isPropagationStopped())break e;xp(r,o,u),s=c}else for(a=0;a<i.length;a++){if(o=i[a],c=o.instance,u=o.currentTarget,o=o.listener,c!==s&&r.isPropagationStopped())break e;xp(r,o,u),s=c}}}if(ml)throw t=Gu,ml=!1,Gu=null,t}function St(t,e){var n=e[Qu];n===void 0&&(n=e[Qu]=new Set);var i=t+"__bubble";n.has(i)||(d0(e,t,2,!1),n.add(i))}function Pc(t,e,n){var i=0;e&&(i|=4),d0(n,t,i,e)}var mo="_reactListening"+Math.random().toString(36).slice(2);function Ra(t){if(!t[mo]){t[mo]=!0,vg.forEach(function(n){n!=="selectionchange"&&(ty.has(n)||Pc(n,!1,t),Pc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[mo]||(e[mo]=!0,Pc("selectionchange",!1,e))}}function d0(t,e,n,i){switch($g(e)){case 1:var r=m_;break;case 4:r=g_;break;default:r=bf}n=r.bind(null,e,n,t),r=void 0,!Hu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Lc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Tr(o),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Dg(function(){var u=s,h=Ef(n),p=[];e:{var f=c0.get(t);if(f!==void 0){var m=Rf,x=t;switch(t){case"keypress":if(Jo(n)===0)break e;case"keydown":case"keyup":m=P_;break;case"focusin":x="focus",m=wc;break;case"focusout":x="blur",m=wc;break;case"beforeblur":case"afterblur":m=wc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=__;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=D_;break;case s0:case a0:case o0:m=M_;break;case l0:m=F_;break;case"scroll":m=x_;break;case"wheel":m=k_;break;case"copy":case"cut":case"paste":m=T_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=op}var M=(e&4)!==0,v=!M&&t==="scroll",d=M?f!==null?f+"Capture":null:f;M=[];for(var g=u,E;g!==null;){E=g;var S=E.stateNode;if(E.tag===5&&S!==null&&(E=S,d!==null&&(S=Ea(g,d),S!=null&&M.push(Na(g,S,E)))),v)break;g=g.return}0<M.length&&(f=new m(f,x,null,n,h),p.push({event:f,listeners:M}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Bu&&(x=n.relatedTarget||n.fromElement)&&(Tr(x)||x[Li]))break e;if((m||f)&&(f=h.window===h?h:(f=h.ownerDocument)?f.defaultView||f.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=u,x=x?Tr(x):null,x!==null&&(v=zr(x),x!==v||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=u),m!==x)){if(M=sp,S="onMouseLeave",d="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(M=op,S="onPointerLeave",d="onPointerEnter",g="pointer"),v=m==null?f:ds(m),E=x==null?f:ds(x),f=new M(S,g+"leave",m,n,h),f.target=v,f.relatedTarget=E,S=null,Tr(h)===u&&(M=new M(d,g+"enter",x,n,h),M.target=E,M.relatedTarget=v,S=M),v=S,m&&x)t:{for(M=m,d=x,g=0,E=M;E;E=Wr(E))g++;for(E=0,S=d;S;S=Wr(S))E++;for(;0<g-E;)M=Wr(M),g--;for(;0<E-g;)d=Wr(d),E--;for(;g--;){if(M===d||d!==null&&M===d.alternate)break t;M=Wr(M),d=Wr(d)}M=null}else M=null;m!==null&&vp(p,f,m,M,!1),x!==null&&v!==null&&vp(p,v,x,M,!0)}}e:{if(f=u?ds(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var w=W_;else if(up(f))if(e0)w=Y_;else{w=q_;var A=X_}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(w=$_);if(w&&(w=w(t,u))){Jg(p,w,n,h);break e}A&&A(t,f,u),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Du(f,"number",f.value)}switch(A=u?ds(u):window,t){case"focusin":(up(A)||A.contentEditable==="true")&&(cs=A,Xu=u,ma=null);break;case"focusout":ma=Xu=cs=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,mp(p,n,h);break;case"selectionchange":if(Q_)break;case"keydown":case"keyup":mp(p,n,h)}var b;if(Pf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else ls?Kg(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Zg&&n.locale!=="ko"&&(ls||_!=="onCompositionStart"?_==="onCompositionEnd"&&ls&&(b=Yg()):(er=h,Cf="value"in er?er.value:er.textContent,ls=!0)),A=yl(u,_),0<A.length&&(_=new ap(_,t,null,n,h),p.push({event:_,listeners:A}),b?_.data=b:(b=Qg(n),b!==null&&(_.data=b)))),(b=z_?H_(t,n):G_(t,n))&&(u=yl(u,"onBeforeInput"),0<u.length&&(h=new ap("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=b))}u0(p,e)})}function Na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ea(t,n),s!=null&&i.unshift(Na(t,s,r)),s=Ea(t,e),s!=null&&i.push(Na(t,s,r))),t=t.return}return i}function Wr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vp(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,c=o.alternate,u=o.stateNode;if(c!==null&&c===i)break;o.tag===5&&u!==null&&(o=u,r?(c=Ea(n,s),c!=null&&a.unshift(Na(n,c,o))):r||(c=Ea(n,s),c!=null&&a.push(Na(n,c,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var ny=/\r\n?/g,iy=/\u0000|\uFFFD/g;function _p(t){return(typeof t=="string"?t:""+t).replace(ny,`
`).replace(iy,"")}function go(t,e,n){if(e=_p(e),_p(t)!==e&&n)throw Error(pe(425))}function Sl(){}var $u=null,Yu=null;function Zu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ku=typeof setTimeout=="function"?setTimeout:void 0,ry=typeof clearTimeout=="function"?clearTimeout:void 0,yp=typeof Promise=="function"?Promise:void 0,sy=typeof queueMicrotask=="function"?queueMicrotask:typeof yp<"u"?function(t){return yp.resolve(null).then(t).catch(ay)}:Ku;function ay(t){setTimeout(function(){throw t})}function Ic(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Aa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Aa(e)}function sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Sp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zs=Math.random().toString(36).slice(2),oi="__reactFiber$"+zs,Pa="__reactProps$"+zs,Li="__reactContainer$"+zs,Qu="__reactEvents$"+zs,oy="__reactListeners$"+zs,ly="__reactHandles$"+zs;function Tr(t){var e=t[oi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Li]||n[oi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Sp(t);t!==null;){if(n=t[oi])return n;t=Sp(t)}return e}t=n,n=t.parentNode}return null}function Ya(t){return t=t[oi]||t[Li],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(pe(33))}function ec(t){return t[Pa]||null}var Ju=[],fs=-1;function pr(t){return{current:t}}function Mt(t){0>fs||(t.current=Ju[fs],Ju[fs]=null,fs--)}function _t(t,e){fs++,Ju[fs]=t.current,t.current=e}var dr={},sn=pr(dr),gn=pr(!1),Pr=dr;function Rs(t,e){var n=t.type.contextTypes;if(!n)return dr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function xn(t){return t=t.childContextTypes,t!=null}function Ml(){Mt(gn),Mt(sn)}function Mp(t,e,n){if(sn.current!==dr)throw Error(pe(168));_t(sn,e),_t(gn,n)}function f0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(pe(108,Xv(t)||"Unknown",r));return Ct({},n,i)}function El(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||dr,Pr=sn.current,_t(sn,t),_t(gn,gn.current),!0}function Ep(t,e,n){var i=t.stateNode;if(!i)throw Error(pe(169));n?(t=f0(t,e,Pr),i.__reactInternalMemoizedMergedChildContext=t,Mt(gn),Mt(sn),_t(sn,t)):Mt(gn),_t(gn,n)}var Ti=null,tc=!1,Dc=!1;function h0(t){Ti===null?Ti=[t]:Ti.push(t)}function cy(t){tc=!0,h0(t)}function mr(){if(!Dc&&Ti!==null){Dc=!0;var t=0,e=pt;try{var n=Ti;for(pt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ti=null,tc=!1}catch(r){throw Ti!==null&&(Ti=Ti.slice(t+1)),kg(Tf,mr),r}finally{pt=e,Dc=!1}}return null}var hs=[],ps=0,Tl=null,wl=0,Pn=[],Ln=0,Lr=null,wi=1,Ai="";function Mr(t,e){hs[ps++]=wl,hs[ps++]=Tl,Tl=t,wl=e}function p0(t,e,n){Pn[Ln++]=wi,Pn[Ln++]=Ai,Pn[Ln++]=Lr,Lr=t;var i=wi;t=Ai;var r=32-Yn(i)-1;i&=~(1<<r),n+=1;var s=32-Yn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,wi=1<<32-Yn(e)+r|n<<r|i,Ai=s+t}else wi=1<<s|n<<r|i,Ai=t}function If(t){t.return!==null&&(Mr(t,1),p0(t,1,0))}function Df(t){for(;t===Tl;)Tl=hs[--ps],hs[ps]=null,wl=hs[--ps],hs[ps]=null;for(;t===Lr;)Lr=Pn[--Ln],Pn[Ln]=null,Ai=Pn[--Ln],Pn[Ln]=null,wi=Pn[--Ln],Pn[Ln]=null}var Tn=null,En=null,Tt=!1,Xn=null;function m0(t,e){var n=Dn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Tp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Tn=t,En=sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Tn=t,En=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Lr!==null?{id:wi,overflow:Ai}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Tn=t,En=null,!0):!1;default:return!1}}function ed(t){return(t.mode&1)!==0&&(t.flags&128)===0}function td(t){if(Tt){var e=En;if(e){var n=e;if(!Tp(t,e)){if(ed(t))throw Error(pe(418));e=sr(n.nextSibling);var i=Tn;e&&Tp(t,e)?m0(i,n):(t.flags=t.flags&-4097|2,Tt=!1,Tn=t)}}else{if(ed(t))throw Error(pe(418));t.flags=t.flags&-4097|2,Tt=!1,Tn=t}}}function wp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Tn=t}function xo(t){if(t!==Tn)return!1;if(!Tt)return wp(t),Tt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zu(t.type,t.memoizedProps)),e&&(e=En)){if(ed(t))throw g0(),Error(pe(418));for(;e;)m0(t,e),e=sr(e.nextSibling)}if(wp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(pe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){En=sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}En=null}}else En=Tn?sr(t.stateNode.nextSibling):null;return!0}function g0(){for(var t=En;t;)t=sr(t.nextSibling)}function Ns(){En=Tn=null,Tt=!1}function Uf(t){Xn===null?Xn=[t]:Xn.push(t)}var uy=Fi.ReactCurrentBatchConfig;function $s(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(pe(309));var i=n.stateNode}if(!i)throw Error(pe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(pe(284));if(!n._owner)throw Error(pe(290,t))}return t}function vo(t,e){throw t=Object.prototype.toString.call(e),Error(pe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ap(t){var e=t._init;return e(t._payload)}function x0(t){function e(d,g){if(t){var E=d.deletions;E===null?(d.deletions=[g],d.flags|=16):E.push(g)}}function n(d,g){if(!t)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=cr(d,g),d.index=0,d.sibling=null,d}function s(d,g,E){return d.index=E,t?(E=d.alternate,E!==null?(E=E.index,E<g?(d.flags|=2,g):E):(d.flags|=2,g)):(d.flags|=1048576,g)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,g,E,S){return g===null||g.tag!==6?(g=Hc(E,d.mode,S),g.return=d,g):(g=r(g,E),g.return=d,g)}function c(d,g,E,S){var w=E.type;return w===os?h(d,g,E.props.children,S,E.key):g!==null&&(g.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===$i&&Ap(w)===g.type)?(S=r(g,E.props),S.ref=$s(d,g,E),S.return=d,S):(S=al(E.type,E.key,E.props,null,d.mode,S),S.ref=$s(d,g,E),S.return=d,S)}function u(d,g,E,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==E.containerInfo||g.stateNode.implementation!==E.implementation?(g=Gc(E,d.mode,S),g.return=d,g):(g=r(g,E.children||[]),g.return=d,g)}function h(d,g,E,S,w){return g===null||g.tag!==7?(g=Nr(E,d.mode,S,w),g.return=d,g):(g=r(g,E),g.return=d,g)}function p(d,g,E){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Hc(""+g,d.mode,E),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ao:return E=al(g.type,g.key,g.props,null,d.mode,E),E.ref=$s(d,null,g),E.return=d,E;case as:return g=Gc(g,d.mode,E),g.return=d,g;case $i:var S=g._init;return p(d,S(g._payload),E)}if(aa(g)||Vs(g))return g=Nr(g,d.mode,E,null),g.return=d,g;vo(d,g)}return null}function f(d,g,E,S){var w=g!==null?g.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return w!==null?null:o(d,g,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ao:return E.key===w?c(d,g,E,S):null;case as:return E.key===w?u(d,g,E,S):null;case $i:return w=E._init,f(d,g,w(E._payload),S)}if(aa(E)||Vs(E))return w!==null?null:h(d,g,E,S,null);vo(d,E)}return null}function m(d,g,E,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(E)||null,o(g,d,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ao:return d=d.get(S.key===null?E:S.key)||null,c(g,d,S,w);case as:return d=d.get(S.key===null?E:S.key)||null,u(g,d,S,w);case $i:var A=S._init;return m(d,g,E,A(S._payload),w)}if(aa(S)||Vs(S))return d=d.get(E)||null,h(g,d,S,w,null);vo(g,S)}return null}function x(d,g,E,S){for(var w=null,A=null,b=g,_=g=0,C=null;b!==null&&_<E.length;_++){b.index>_?(C=b,b=null):C=b.sibling;var P=f(d,b,E[_],S);if(P===null){b===null&&(b=C);break}t&&b&&P.alternate===null&&e(d,b),g=s(P,g,_),A===null?w=P:A.sibling=P,A=P,b=C}if(_===E.length)return n(d,b),Tt&&Mr(d,_),w;if(b===null){for(;_<E.length;_++)b=p(d,E[_],S),b!==null&&(g=s(b,g,_),A===null?w=b:A.sibling=b,A=b);return Tt&&Mr(d,_),w}for(b=i(d,b);_<E.length;_++)C=m(b,d,_,E[_],S),C!==null&&(t&&C.alternate!==null&&b.delete(C.key===null?_:C.key),g=s(C,g,_),A===null?w=C:A.sibling=C,A=C);return t&&b.forEach(function(L){return e(d,L)}),Tt&&Mr(d,_),w}function M(d,g,E,S){var w=Vs(E);if(typeof w!="function")throw Error(pe(150));if(E=w.call(E),E==null)throw Error(pe(151));for(var A=w=null,b=g,_=g=0,C=null,P=E.next();b!==null&&!P.done;_++,P=E.next()){b.index>_?(C=b,b=null):C=b.sibling;var L=f(d,b,P.value,S);if(L===null){b===null&&(b=C);break}t&&b&&L.alternate===null&&e(d,b),g=s(L,g,_),A===null?w=L:A.sibling=L,A=L,b=C}if(P.done)return n(d,b),Tt&&Mr(d,_),w;if(b===null){for(;!P.done;_++,P=E.next())P=p(d,P.value,S),P!==null&&(g=s(P,g,_),A===null?w=P:A.sibling=P,A=P);return Tt&&Mr(d,_),w}for(b=i(d,b);!P.done;_++,P=E.next())P=m(b,d,_,P.value,S),P!==null&&(t&&P.alternate!==null&&b.delete(P.key===null?_:P.key),g=s(P,g,_),A===null?w=P:A.sibling=P,A=P);return t&&b.forEach(function(O){return e(d,O)}),Tt&&Mr(d,_),w}function v(d,g,E,S){if(typeof E=="object"&&E!==null&&E.type===os&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case ao:e:{for(var w=E.key,A=g;A!==null;){if(A.key===w){if(w=E.type,w===os){if(A.tag===7){n(d,A.sibling),g=r(A,E.props.children),g.return=d,d=g;break e}}else if(A.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===$i&&Ap(w)===A.type){n(d,A.sibling),g=r(A,E.props),g.ref=$s(d,A,E),g.return=d,d=g;break e}n(d,A);break}else e(d,A);A=A.sibling}E.type===os?(g=Nr(E.props.children,d.mode,S,E.key),g.return=d,d=g):(S=al(E.type,E.key,E.props,null,d.mode,S),S.ref=$s(d,g,E),S.return=d,d=S)}return a(d);case as:e:{for(A=E.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===E.containerInfo&&g.stateNode.implementation===E.implementation){n(d,g.sibling),g=r(g,E.children||[]),g.return=d,d=g;break e}else{n(d,g);break}else e(d,g);g=g.sibling}g=Gc(E,d.mode,S),g.return=d,d=g}return a(d);case $i:return A=E._init,v(d,g,A(E._payload),S)}if(aa(E))return x(d,g,E,S);if(Vs(E))return M(d,g,E,S);vo(d,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,g!==null&&g.tag===6?(n(d,g.sibling),g=r(g,E),g.return=d,d=g):(n(d,g),g=Hc(E,d.mode,S),g.return=d,d=g),a(d)):n(d,g)}return v}var Ps=x0(!0),v0=x0(!1),Al=pr(null),bl=null,ms=null,Ff=null;function Of(){Ff=ms=bl=null}function kf(t){var e=Al.current;Mt(Al),t._currentValue=e}function nd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ts(t,e){bl=t,Ff=ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function On(t){var e=t._currentValue;if(Ff!==t)if(t={context:t,memoizedValue:e,next:null},ms===null){if(bl===null)throw Error(pe(308));ms=t,bl.dependencies={lanes:0,firstContext:t}}else ms=ms.next=t;return e}var wr=null;function Bf(t){wr===null?wr=[t]:wr.push(t)}function _0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Bf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ii(t,i)}function Ii(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Yi=!1;function zf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function y0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ar(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ct&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ii(t,n)}return r=i.interleaved,r===null?(e.next=e,Bf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ii(t,n)}function el(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,wf(t,n)}}function bp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Cl(t,e,n,i){var r=t.updateQueue;Yi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=c))}if(s!==null){var p=r.baseState;a=0,h=u=c=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var x=t,M=o;switch(f=e,m=n,M.tag){case 1:if(x=M.payload,typeof x=="function"){p=x.call(m,p,f);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=M.payload,f=typeof x=="function"?x.call(m,p,f):x,f==null)break e;p=Ct({},p,f);break e;case 2:Yi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=m,c=p):h=h.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(h===null&&(c=p),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Dr|=a,t.lanes=a,t.memoizedState=p}}function Cp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(pe(191,r));r.call(i)}}}var Za={},hi=pr(Za),La=pr(Za),Ia=pr(Za);function Ar(t){if(t===Za)throw Error(pe(174));return t}function Hf(t,e){switch(_t(Ia,e),_t(La,t),_t(hi,Za),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fu(e,t)}Mt(hi),_t(hi,e)}function Ls(){Mt(hi),Mt(La),Mt(Ia)}function S0(t){Ar(Ia.current);var e=Ar(hi.current),n=Fu(e,t.type);e!==n&&(_t(La,t),_t(hi,n))}function Gf(t){La.current===t&&(Mt(hi),Mt(La))}var wt=pr(0);function Rl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Uc=[];function Vf(){for(var t=0;t<Uc.length;t++)Uc[t]._workInProgressVersionPrimary=null;Uc.length=0}var tl=Fi.ReactCurrentDispatcher,Fc=Fi.ReactCurrentBatchConfig,Ir=0,bt=null,Ut=null,Ht=null,Nl=!1,ga=!1,Da=0,dy=0;function Kt(){throw Error(pe(321))}function jf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qn(t[n],e[n]))return!1;return!0}function Wf(t,e,n,i,r,s){if(Ir=s,bt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tl.current=t===null||t.memoizedState===null?my:gy,t=n(i,r),ga){s=0;do{if(ga=!1,Da=0,25<=s)throw Error(pe(301));s+=1,Ht=Ut=null,e.updateQueue=null,tl.current=xy,t=n(i,r)}while(ga)}if(tl.current=Pl,e=Ut!==null&&Ut.next!==null,Ir=0,Ht=Ut=bt=null,Nl=!1,e)throw Error(pe(300));return t}function Xf(){var t=Da!==0;return Da=0,t}function si(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?bt.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function kn(){if(Ut===null){var t=bt.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=Ht===null?bt.memoizedState:Ht.next;if(e!==null)Ht=e,Ut=t;else{if(t===null)throw Error(pe(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},Ht===null?bt.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function Ua(t,e){return typeof e=="function"?e(t):e}function Oc(t){var e=kn(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=Ut,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,c=null,u=s;do{var h=u.lane;if((Ir&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=p,a=i):c=c.next=p,bt.lanes|=h,Dr|=h}u=u.next}while(u!==null&&u!==s);c===null?a=i:c.next=o,Qn(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,bt.lanes|=s,Dr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kc(t){var e=kn(),n=e.queue;if(n===null)throw Error(pe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Qn(s,e.memoizedState)||(mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function M0(){}function E0(t,e){var n=bt,i=kn(),r=e(),s=!Qn(i.memoizedState,r);if(s&&(i.memoizedState=r,mn=!0),i=i.queue,qf(A0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,Fa(9,w0.bind(null,n,i,r,e),void 0,null),Gt===null)throw Error(pe(349));Ir&30||T0(n,e,r)}return r}function T0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function w0(t,e,n,i){e.value=n,e.getSnapshot=i,b0(e)&&C0(t)}function A0(t,e,n){return n(function(){b0(e)&&C0(t)})}function b0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qn(t,n)}catch{return!0}}function C0(t){var e=Ii(t,1);e!==null&&Zn(e,t,1,-1)}function Rp(t){var e=si();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:t},e.queue=t,t=t.dispatch=py.bind(null,bt,t),[e.memoizedState,t]}function Fa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=bt.updateQueue,e===null?(e={lastEffect:null,stores:null},bt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function R0(){return kn().memoizedState}function nl(t,e,n,i){var r=si();bt.flags|=t,r.memoizedState=Fa(1|e,n,void 0,i===void 0?null:i)}function nc(t,e,n,i){var r=kn();i=i===void 0?null:i;var s=void 0;if(Ut!==null){var a=Ut.memoizedState;if(s=a.destroy,i!==null&&jf(i,a.deps)){r.memoizedState=Fa(e,n,s,i);return}}bt.flags|=t,r.memoizedState=Fa(1|e,n,s,i)}function Np(t,e){return nl(8390656,8,t,e)}function qf(t,e){return nc(2048,8,t,e)}function N0(t,e){return nc(4,2,t,e)}function P0(t,e){return nc(4,4,t,e)}function L0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function I0(t,e,n){return n=n!=null?n.concat([t]):null,nc(4,4,L0.bind(null,e,t),n)}function $f(){}function D0(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&jf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function U0(t,e){var n=kn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&jf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function F0(t,e,n){return Ir&21?(Qn(n,e)||(n=Hg(),bt.lanes|=n,Dr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function fy(t,e){var n=pt;pt=n!==0&&4>n?n:4,t(!0);var i=Fc.transition;Fc.transition={};try{t(!1),e()}finally{pt=n,Fc.transition=i}}function O0(){return kn().memoizedState}function hy(t,e,n){var i=lr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},k0(t))B0(e,n);else if(n=_0(t,e,n,i),n!==null){var r=cn();Zn(n,t,i,r),z0(n,e,i)}}function py(t,e,n){var i=lr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(k0(t))B0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Qn(o,a)){var c=e.interleaved;c===null?(r.next=r,Bf(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=_0(t,e,r,i),n!==null&&(r=cn(),Zn(n,t,i,r),z0(n,e,i))}}function k0(t){var e=t.alternate;return t===bt||e!==null&&e===bt}function B0(t,e){ga=Nl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function z0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,wf(t,n)}}var Pl={readContext:On,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},my={readContext:On,useCallback:function(t,e){return si().memoizedState=[t,e===void 0?null:e],t},useContext:On,useEffect:Np,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nl(4194308,4,L0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return nl(4,2,t,e)},useMemo:function(t,e){var n=si();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=si();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=hy.bind(null,bt,t),[i.memoizedState,t]},useRef:function(t){var e=si();return t={current:t},e.memoizedState=t},useState:Rp,useDebugValue:$f,useDeferredValue:function(t){return si().memoizedState=t},useTransition:function(){var t=Rp(!1),e=t[0];return t=fy.bind(null,t[1]),si().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=bt,r=si();if(Tt){if(n===void 0)throw Error(pe(407));n=n()}else{if(n=e(),Gt===null)throw Error(pe(349));Ir&30||T0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Np(A0.bind(null,i,s,t),[t]),i.flags|=2048,Fa(9,w0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=si(),e=Gt.identifierPrefix;if(Tt){var n=Ai,i=wi;n=(i&~(1<<32-Yn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Da++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gy={readContext:On,useCallback:D0,useContext:On,useEffect:qf,useImperativeHandle:I0,useInsertionEffect:N0,useLayoutEffect:P0,useMemo:U0,useReducer:Oc,useRef:R0,useState:function(){return Oc(Ua)},useDebugValue:$f,useDeferredValue:function(t){var e=kn();return F0(e,Ut.memoizedState,t)},useTransition:function(){var t=Oc(Ua)[0],e=kn().memoizedState;return[t,e]},useMutableSource:M0,useSyncExternalStore:E0,useId:O0,unstable_isNewReconciler:!1},xy={readContext:On,useCallback:D0,useContext:On,useEffect:qf,useImperativeHandle:I0,useInsertionEffect:N0,useLayoutEffect:P0,useMemo:U0,useReducer:kc,useRef:R0,useState:function(){return kc(Ua)},useDebugValue:$f,useDeferredValue:function(t){var e=kn();return Ut===null?e.memoizedState=t:F0(e,Ut.memoizedState,t)},useTransition:function(){var t=kc(Ua)[0],e=kn().memoizedState;return[t,e]},useMutableSource:M0,useSyncExternalStore:E0,useId:O0,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=Ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function id(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ic={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=cn(),r=lr(t),s=bi(i,r);s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,r),e!==null&&(Zn(e,t,r,i),el(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=cn(),r=lr(t),s=bi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ar(t,s,r),e!==null&&(Zn(e,t,r,i),el(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),i=lr(t),r=bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ar(t,r,i),e!==null&&(Zn(e,t,i,n),el(e,t,i))}};function Pp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ca(n,i)||!Ca(r,s):!0}function H0(t,e,n){var i=!1,r=dr,s=e.contextType;return typeof s=="object"&&s!==null?s=On(s):(r=xn(e)?Pr:sn.current,i=e.contextTypes,s=(i=i!=null)?Rs(t,r):dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ic,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Lp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ic.enqueueReplaceState(e,e.state,null)}function rd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},zf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=On(s):(s=xn(e)?Pr:sn.current,r.context=Rs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(id(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ic.enqueueReplaceState(r,r.state,null),Cl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Is(t,e){try{var n="",i=e;do n+=Wv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Bc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function sd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vy=typeof WeakMap=="function"?WeakMap:Map;function G0(t,e,n){n=bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Il||(Il=!0,md=i),sd(t,e)},n}function V0(t,e,n){n=bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){sd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){sd(t,e),typeof i!="function"&&(or===null?or=new Set([this]):or.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Ip(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new vy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ly.bind(null,t,e,n),e.then(t,t))}function Dp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Up(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bi(-1,1),e.tag=2,ar(n,e,1))),n.lanes|=1),t)}var _y=Fi.ReactCurrentOwner,mn=!1;function ln(t,e,n,i){e.child=t===null?v0(e,null,n,i):Ps(e,t.child,n,i)}function Fp(t,e,n,i,r){n=n.render;var s=e.ref;return Ts(e,r),i=Wf(t,e,n,i,s,r),n=Xf(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(Tt&&n&&If(e),e.flags|=1,ln(t,e,i,r),e.child)}function Op(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!nh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,j0(t,e,s,i,r)):(t=al(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ca,n(a,i)&&t.ref===e.ref)return Di(t,e,r)}return e.flags|=1,t=cr(s,i),t.ref=e.ref,t.return=e,e.child=t}function j0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ca(s,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,Di(t,e,r)}return ad(t,e,n,i,r)}function W0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_t(xs,Sn),Sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_t(xs,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,_t(xs,Sn),Sn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,_t(xs,Sn),Sn|=i;return ln(t,e,r,n),e.child}function X0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ad(t,e,n,i,r){var s=xn(n)?Pr:sn.current;return s=Rs(e,s),Ts(e,r),n=Wf(t,e,n,i,s,r),i=Xf(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(Tt&&i&&If(e),e.flags|=1,ln(t,e,n,r),e.child)}function kp(t,e,n,i,r){if(xn(n)){var s=!0;El(e)}else s=!1;if(Ts(e,r),e.stateNode===null)il(t,e),H0(e,n,i),rd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=On(u):(u=xn(n)?Pr:sn.current,u=Rs(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||c!==u)&&Lp(e,a,i,u),Yi=!1;var f=e.memoizedState;a.state=f,Cl(e,i,a,r),c=e.memoizedState,o!==i||f!==c||gn.current||Yi?(typeof h=="function"&&(id(e,n,h,i),c=e.memoizedState),(o=Yi||Pp(e,n,o,i,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,y0(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:jn(e.type,o),a.props=u,p=e.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=On(c):(c=xn(n)?Pr:sn.current,c=Rs(e,c));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||f!==c)&&Lp(e,a,i,c),Yi=!1,f=e.memoizedState,a.state=f,Cl(e,i,a,r);var x=e.memoizedState;o!==p||f!==x||gn.current||Yi?(typeof m=="function"&&(id(e,n,m,i),x=e.memoizedState),(u=Yi||Pp(e,n,u,i,f,x,c)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,x,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,x,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),a.props=i,a.state=x,a.context=c,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return od(t,e,n,i,s,r)}function od(t,e,n,i,r,s){X0(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Ep(e,n,!1),Di(t,e,s);i=e.stateNode,_y.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ps(e,t.child,null,s),e.child=Ps(e,null,o,s)):ln(t,e,o,s),e.memoizedState=i.state,r&&Ep(e,n,!0),e.child}function q0(t){var e=t.stateNode;e.pendingContext?Mp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mp(t,e.context,!1),Hf(t,e.containerInfo)}function Bp(t,e,n,i,r){return Ns(),Uf(r),e.flags|=256,ln(t,e,n,i),e.child}var ld={dehydrated:null,treeContext:null,retryLane:0};function cd(t){return{baseLanes:t,cachePool:null,transitions:null}}function $0(t,e,n){var i=e.pendingProps,r=wt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),_t(wt,r&1),t===null)return td(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ac(a,i,0,null),t=Nr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=cd(n),e.memoizedState=ld,t):Yf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return yy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=cr(r,c),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=cr(o,s):(s=Nr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?cd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=ld,i}return s=t.child,t=s.sibling,i=cr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Yf(t,e){return e=ac({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _o(t,e,n,i){return i!==null&&Uf(i),Ps(e,t.child,null,n),t=Yf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function yy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Bc(Error(pe(422))),_o(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ac({mode:"visible",children:i.children},r,0,null),s=Nr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ps(e,t.child,null,a),e.child.memoizedState=cd(a),e.memoizedState=ld,s);if(!(e.mode&1))return _o(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(pe(419)),i=Bc(s,i,void 0),_o(t,e,a,i)}if(o=(a&t.childLanes)!==0,mn||o){if(i=Gt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ii(t,r),Zn(i,t,r,-1))}return th(),i=Bc(Error(pe(421))),_o(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Iy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,En=sr(r.nextSibling),Tn=e,Tt=!0,Xn=null,t!==null&&(Pn[Ln++]=wi,Pn[Ln++]=Ai,Pn[Ln++]=Lr,wi=t.id,Ai=t.overflow,Lr=e),e=Yf(e,i.children),e.flags|=4096,e)}function zp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),nd(t.return,e,n)}function zc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Y0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=wt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&zp(t,n,e);else if(t.tag===19)zp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(_t(wt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Rl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),zc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Rl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}zc(e,!0,n,null,s);break;case"together":zc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Di(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Dr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(pe(153));if(e.child!==null){for(t=e.child,n=cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Sy(t,e,n){switch(e.tag){case 3:q0(e),Ns();break;case 5:S0(e);break;case 1:xn(e.type)&&El(e);break;case 4:Hf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;_t(Al,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(_t(wt,wt.current&1),e.flags|=128,null):n&e.child.childLanes?$0(t,e,n):(_t(wt,wt.current&1),t=Di(t,e,n),t!==null?t.sibling:null);_t(wt,wt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Y0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),_t(wt,wt.current),i)break;return null;case 22:case 23:return e.lanes=0,W0(t,e,n)}return Di(t,e,n)}var Z0,ud,K0,Q0;Z0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ud=function(){};K0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ar(hi.current);var s=null;switch(n){case"input":r=Lu(t,r),i=Lu(t,i),s=[];break;case"select":r=Ct({},r,{value:void 0}),i=Ct({},i,{value:void 0}),s=[];break;case"textarea":r=Uu(t,r),i=Uu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Sl)}Ou(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Sa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Sa.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&St("scroll",t),s||o===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Q0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ys(t,e){if(!Tt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function My(t,e,n){var i=e.pendingProps;switch(Df(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(e),null;case 1:return xn(e.type)&&Ml(),Qt(e),null;case 3:return i=e.stateNode,Ls(),Mt(gn),Mt(sn),Vf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(xo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Xn!==null&&(vd(Xn),Xn=null))),ud(t,e),Qt(e),null;case 5:Gf(e);var r=Ar(Ia.current);if(n=e.type,t!==null&&e.stateNode!=null)K0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(pe(166));return Qt(e),null}if(t=Ar(hi.current),xo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[oi]=e,i[Pa]=s,t=(e.mode&1)!==0,n){case"dialog":St("cancel",i),St("close",i);break;case"iframe":case"object":case"embed":St("load",i);break;case"video":case"audio":for(r=0;r<la.length;r++)St(la[r],i);break;case"source":St("error",i);break;case"img":case"image":case"link":St("error",i),St("load",i);break;case"details":St("toggle",i);break;case"input":Yh(i,s),St("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},St("invalid",i);break;case"textarea":Kh(i,s),St("invalid",i)}Ou(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&go(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&go(i.textContent,o,t),r=["children",""+o]):Sa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&St("scroll",i)}switch(n){case"input":oo(i),Zh(i,s,!0);break;case"textarea":oo(i),Qh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Sl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Ag(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[oi]=e,t[Pa]=i,Z0(t,e,!1,!1),e.stateNode=t;e:{switch(a=ku(n,i),n){case"dialog":St("cancel",t),St("close",t),r=i;break;case"iframe":case"object":case"embed":St("load",t),r=i;break;case"video":case"audio":for(r=0;r<la.length;r++)St(la[r],t);r=i;break;case"source":St("error",t),r=i;break;case"img":case"image":case"link":St("error",t),St("load",t),r=i;break;case"details":St("toggle",t),r=i;break;case"input":Yh(t,i),r=Lu(t,i),St("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Ct({},i,{value:void 0}),St("invalid",t);break;case"textarea":Kh(t,i),r=Uu(t,i),St("invalid",t);break;default:r=i}Ou(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?Rg(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&bg(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ma(t,c):typeof c=="number"&&Ma(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Sa.hasOwnProperty(s)?c!=null&&s==="onScroll"&&St("scroll",t):c!=null&&_f(t,s,c,a))}switch(n){case"input":oo(t),Zh(t,i,!1);break;case"textarea":oo(t),Qh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ur(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ys(t,!!i.multiple,s,!1):i.defaultValue!=null&&ys(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Sl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Qt(e),null;case 6:if(t&&e.stateNode!=null)Q0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(pe(166));if(n=Ar(Ia.current),Ar(hi.current),xo(e)){if(i=e.stateNode,n=e.memoizedProps,i[oi]=e,(s=i.nodeValue!==n)&&(t=Tn,t!==null))switch(t.tag){case 3:go(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&go(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[oi]=e,e.stateNode=i}return Qt(e),null;case 13:if(Mt(wt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Tt&&En!==null&&e.mode&1&&!(e.flags&128))g0(),Ns(),e.flags|=98560,s=!1;else if(s=xo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(pe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(pe(317));s[oi]=e}else Ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Qt(e),s=!1}else Xn!==null&&(vd(Xn),Xn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||wt.current&1?Ft===0&&(Ft=3):th())),e.updateQueue!==null&&(e.flags|=4),Qt(e),null);case 4:return Ls(),ud(t,e),t===null&&Ra(e.stateNode.containerInfo),Qt(e),null;case 10:return kf(e.type._context),Qt(e),null;case 17:return xn(e.type)&&Ml(),Qt(e),null;case 19:if(Mt(wt),s=e.memoizedState,s===null)return Qt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ys(s,!1);else{if(Ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Rl(t),a!==null){for(e.flags|=128,Ys(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _t(wt,wt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pt()>Ds&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304)}else{if(!i)if(t=Rl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ys(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Tt)return Qt(e),null}else 2*Pt()-s.renderingStartTime>Ds&&n!==1073741824&&(e.flags|=128,i=!0,Ys(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,n=wt.current,_t(wt,i?n&1|2:n&1),e):(Qt(e),null);case 22:case 23:return eh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&(Qt(e),e.subtreeFlags&6&&(e.flags|=8192)):Qt(e),null;case 24:return null;case 25:return null}throw Error(pe(156,e.tag))}function Ey(t,e){switch(Df(e),e.tag){case 1:return xn(e.type)&&Ml(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ls(),Mt(gn),Mt(sn),Vf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Gf(e),null;case 13:if(Mt(wt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(pe(340));Ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Mt(wt),null;case 4:return Ls(),null;case 10:return kf(e.type._context),null;case 22:case 23:return eh(),null;case 24:return null;default:return null}}var yo=!1,tn=!1,Ty=typeof WeakSet=="function"?WeakSet:Set,Ne=null;function gs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Rt(t,e,i)}else n.current=null}function dd(t,e,n){try{n()}catch(i){Rt(t,e,i)}}var Hp=!1;function wy(t,e){if($u=vl,t=i0(),Lf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,u=0,h=0,p=t,f=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(c=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)f=p,p=m;for(;;){if(p===t)break t;if(f===n&&++u===r&&(o=a),f===s&&++h===i&&(c=a),(m=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=m}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yu={focusedElem:t,selectionRange:n},vl=!1,Ne=e;Ne!==null;)if(e=Ne,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ne=t;else for(;Ne!==null;){e=Ne;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var M=x.memoizedProps,v=x.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?M:jn(e.type,M),v);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(pe(163))}}catch(S){Rt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ne=t;break}Ne=e.return}return x=Hp,Hp=!1,x}function xa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&dd(e,n,s)}r=r.next}while(r!==i)}}function rc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function fd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function J0(t){var e=t.alternate;e!==null&&(t.alternate=null,J0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[oi],delete e[Pa],delete e[Qu],delete e[oy],delete e[ly])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ex(t){return t.tag===5||t.tag===3||t.tag===4}function Gp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ex(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sl));else if(i!==4&&(t=t.child,t!==null))for(hd(t,e,n),t=t.sibling;t!==null;)hd(t,e,n),t=t.sibling}function pd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(pd(t,e,n),t=t.sibling;t!==null;)pd(t,e,n),t=t.sibling}var jt=null,Wn=!1;function zi(t,e,n){for(n=n.child;n!==null;)tx(t,e,n),n=n.sibling}function tx(t,e,n){if(fi&&typeof fi.onCommitFiberUnmount=="function")try{fi.onCommitFiberUnmount(Zl,n)}catch{}switch(n.tag){case 5:tn||gs(n,e);case 6:var i=jt,r=Wn;jt=null,zi(t,e,n),jt=i,Wn=r,jt!==null&&(Wn?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(Wn?(t=jt,n=n.stateNode,t.nodeType===8?Ic(t.parentNode,n):t.nodeType===1&&Ic(t,n),Aa(t)):Ic(jt,n.stateNode));break;case 4:i=jt,r=Wn,jt=n.stateNode.containerInfo,Wn=!0,zi(t,e,n),jt=i,Wn=r;break;case 0:case 11:case 14:case 15:if(!tn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&dd(n,e,a),r=r.next}while(r!==i)}zi(t,e,n);break;case 1:if(!tn&&(gs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Rt(n,e,o)}zi(t,e,n);break;case 21:zi(t,e,n);break;case 22:n.mode&1?(tn=(i=tn)||n.memoizedState!==null,zi(t,e,n),tn=i):zi(t,e,n);break;default:zi(t,e,n)}}function Vp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ty),e.forEach(function(i){var r=Dy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:jt=o.stateNode,Wn=!1;break e;case 3:jt=o.stateNode.containerInfo,Wn=!0;break e;case 4:jt=o.stateNode.containerInfo,Wn=!0;break e}o=o.return}if(jt===null)throw Error(pe(160));tx(s,a,r),jt=null,Wn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){Rt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)nx(e,t),e=e.sibling}function nx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(zn(e,t),ni(t),i&4){try{xa(3,t,t.return),rc(3,t)}catch(M){Rt(t,t.return,M)}try{xa(5,t,t.return)}catch(M){Rt(t,t.return,M)}}break;case 1:zn(e,t),ni(t),i&512&&n!==null&&gs(n,n.return);break;case 5:if(zn(e,t),ni(t),i&512&&n!==null&&gs(n,n.return),t.flags&32){var r=t.stateNode;try{Ma(r,"")}catch(M){Rt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Tg(r,s),ku(o,a);var u=ku(o,s);for(a=0;a<c.length;a+=2){var h=c[a],p=c[a+1];h==="style"?Rg(r,p):h==="dangerouslySetInnerHTML"?bg(r,p):h==="children"?Ma(r,p):_f(r,h,p,u)}switch(o){case"input":Iu(r,s);break;case"textarea":wg(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ys(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?ys(r,!!s.multiple,s.defaultValue,!0):ys(r,!!s.multiple,s.multiple?[]:"",!1))}r[Pa]=s}catch(M){Rt(t,t.return,M)}}break;case 6:if(zn(e,t),ni(t),i&4){if(t.stateNode===null)throw Error(pe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Rt(t,t.return,M)}}break;case 3:if(zn(e,t),ni(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Aa(e.containerInfo)}catch(M){Rt(t,t.return,M)}break;case 4:zn(e,t),ni(t);break;case 13:zn(e,t),ni(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Qf=Pt())),i&4&&Vp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(tn=(u=tn)||h,zn(e,t),tn=u):zn(e,t),ni(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(Ne=t,h=t.child;h!==null;){for(p=Ne=h;Ne!==null;){switch(f=Ne,m=f.child,f.tag){case 0:case 11:case 14:case 15:xa(4,f,f.return);break;case 1:gs(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(M){Rt(i,n,M)}}break;case 5:gs(f,f.return);break;case 22:if(f.memoizedState!==null){Wp(p);continue}}m!==null?(m.return=f,Ne=m):Wp(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Cg("display",a))}catch(M){Rt(t,t.return,M)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(M){Rt(t,t.return,M)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:zn(e,t),ni(t),i&4&&Vp(t);break;case 21:break;default:zn(e,t),ni(t)}}function ni(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ex(n)){var i=n;break e}n=n.return}throw Error(pe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ma(r,""),i.flags&=-33);var s=Gp(t);pd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=Gp(t);hd(t,o,a);break;default:throw Error(pe(161))}}catch(c){Rt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ay(t,e,n){Ne=t,ix(t)}function ix(t,e,n){for(var i=(t.mode&1)!==0;Ne!==null;){var r=Ne,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||yo;if(!a){var o=r.alternate,c=o!==null&&o.memoizedState!==null||tn;o=yo;var u=tn;if(yo=a,(tn=c)&&!u)for(Ne=r;Ne!==null;)a=Ne,c=a.child,a.tag===22&&a.memoizedState!==null?Xp(r):c!==null?(c.return=a,Ne=c):Xp(r);for(;s!==null;)Ne=s,ix(s),s=s.sibling;Ne=r,yo=o,tn=u}jp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ne=s):jp(t)}}function jp(t){for(;Ne!==null;){var e=Ne;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tn||rc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!tn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Cp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Cp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Aa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(pe(163))}tn||e.flags&512&&fd(e)}catch(f){Rt(e,e.return,f)}}if(e===t){Ne=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ne=n;break}Ne=e.return}}function Wp(t){for(;Ne!==null;){var e=Ne;if(e===t){Ne=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ne=n;break}Ne=e.return}}function Xp(t){for(;Ne!==null;){var e=Ne;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{rc(4,e)}catch(c){Rt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){Rt(e,r,c)}}var s=e.return;try{fd(e)}catch(c){Rt(e,s,c)}break;case 5:var a=e.return;try{fd(e)}catch(c){Rt(e,a,c)}}}catch(c){Rt(e,e.return,c)}if(e===t){Ne=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Ne=o;break}Ne=e.return}}var by=Math.ceil,Ll=Fi.ReactCurrentDispatcher,Zf=Fi.ReactCurrentOwner,Un=Fi.ReactCurrentBatchConfig,ct=0,Gt=null,Dt=null,qt=0,Sn=0,xs=pr(0),Ft=0,Oa=null,Dr=0,sc=0,Kf=0,va=null,pn=null,Qf=0,Ds=1/0,Ei=null,Il=!1,md=null,or=null,So=!1,tr=null,Dl=0,_a=0,gd=null,rl=-1,sl=0;function cn(){return ct&6?Pt():rl!==-1?rl:rl=Pt()}function lr(t){return t.mode&1?ct&2&&qt!==0?qt&-qt:uy.transition!==null?(sl===0&&(sl=Hg()),sl):(t=pt,t!==0||(t=window.event,t=t===void 0?16:$g(t.type)),t):1}function Zn(t,e,n,i){if(50<_a)throw _a=0,gd=null,Error(pe(185));qa(t,n,i),(!(ct&2)||t!==Gt)&&(t===Gt&&(!(ct&2)&&(sc|=n),Ft===4&&Qi(t,qt)),vn(t,i),n===1&&ct===0&&!(e.mode&1)&&(Ds=Pt()+500,tc&&mr()))}function vn(t,e){var n=t.callbackNode;u_(t,e);var i=xl(t,t===Gt?qt:0);if(i===0)n!==null&&tp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&tp(n),e===1)t.tag===0?cy(qp.bind(null,t)):h0(qp.bind(null,t)),sy(function(){!(ct&6)&&mr()}),n=null;else{switch(Gg(i)){case 1:n=Tf;break;case 4:n=Bg;break;case 16:n=gl;break;case 536870912:n=zg;break;default:n=gl}n=dx(n,rx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rx(t,e){if(rl=-1,sl=0,ct&6)throw Error(pe(327));var n=t.callbackNode;if(ws()&&t.callbackNode!==n)return null;var i=xl(t,t===Gt?qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ul(t,i);else{e=i;var r=ct;ct|=2;var s=ax();(Gt!==t||qt!==e)&&(Ei=null,Ds=Pt()+500,Rr(t,e));do try{Ny();break}catch(o){sx(t,o)}while(!0);Of(),Ll.current=s,ct=r,Dt!==null?e=0:(Gt=null,qt=0,e=Ft)}if(e!==0){if(e===2&&(r=Vu(t),r!==0&&(i=r,e=xd(t,r))),e===1)throw n=Oa,Rr(t,0),Qi(t,i),vn(t,Pt()),n;if(e===6)Qi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Cy(r)&&(e=Ul(t,i),e===2&&(s=Vu(t),s!==0&&(i=s,e=xd(t,s))),e===1))throw n=Oa,Rr(t,0),Qi(t,i),vn(t,Pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(pe(345));case 2:Er(t,pn,Ei);break;case 3:if(Qi(t,i),(i&130023424)===i&&(e=Qf+500-Pt(),10<e)){if(xl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){cn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ku(Er.bind(null,t,pn,Ei),e);break}Er(t,pn,Ei);break;case 4:if(Qi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Yn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*by(i/1960))-i,10<i){t.timeoutHandle=Ku(Er.bind(null,t,pn,Ei),i);break}Er(t,pn,Ei);break;case 5:Er(t,pn,Ei);break;default:throw Error(pe(329))}}}return vn(t,Pt()),t.callbackNode===n?rx.bind(null,t):null}function xd(t,e){var n=va;return t.current.memoizedState.isDehydrated&&(Rr(t,e).flags|=256),t=Ul(t,e),t!==2&&(e=pn,pn=n,e!==null&&vd(e)),t}function vd(t){pn===null?pn=t:pn.push.apply(pn,t)}function Cy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Qn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Qi(t,e){for(e&=~Kf,e&=~sc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yn(e),i=1<<n;t[n]=-1,e&=~i}}function qp(t){if(ct&6)throw Error(pe(327));ws();var e=xl(t,0);if(!(e&1))return vn(t,Pt()),null;var n=Ul(t,e);if(t.tag!==0&&n===2){var i=Vu(t);i!==0&&(e=i,n=xd(t,i))}if(n===1)throw n=Oa,Rr(t,0),Qi(t,e),vn(t,Pt()),n;if(n===6)throw Error(pe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Er(t,pn,Ei),vn(t,Pt()),null}function Jf(t,e){var n=ct;ct|=1;try{return t(e)}finally{ct=n,ct===0&&(Ds=Pt()+500,tc&&mr())}}function Ur(t){tr!==null&&tr.tag===0&&!(ct&6)&&ws();var e=ct;ct|=1;var n=Un.transition,i=pt;try{if(Un.transition=null,pt=1,t)return t()}finally{pt=i,Un.transition=n,ct=e,!(ct&6)&&mr()}}function eh(){Sn=xs.current,Mt(xs)}function Rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ry(n)),Dt!==null)for(n=Dt.return;n!==null;){var i=n;switch(Df(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ml();break;case 3:Ls(),Mt(gn),Mt(sn),Vf();break;case 5:Gf(i);break;case 4:Ls();break;case 13:Mt(wt);break;case 19:Mt(wt);break;case 10:kf(i.type._context);break;case 22:case 23:eh()}n=n.return}if(Gt=t,Dt=t=cr(t.current,null),qt=Sn=e,Ft=0,Oa=null,Kf=sc=Dr=0,pn=va=null,wr!==null){for(e=0;e<wr.length;e++)if(n=wr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}wr=null}return t}function sx(t,e){do{var n=Dt;try{if(Of(),tl.current=Pl,Nl){for(var i=bt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Nl=!1}if(Ir=0,Ht=Ut=bt=null,ga=!1,Da=0,Zf.current=null,n===null||n.return===null){Ft=1,Oa=e,Dt=null;break}e:{var s=t,a=n.return,o=n,c=e;if(e=qt,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var f=h.alternate;f?(h.updateQueue=f.updateQueue,h.memoizedState=f.memoizedState,h.lanes=f.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Dp(a);if(m!==null){m.flags&=-257,Up(m,a,o,s,e),m.mode&1&&Ip(s,u,e),e=m,c=u;var x=e.updateQueue;if(x===null){var M=new Set;M.add(c),e.updateQueue=M}else x.add(c);break e}else{if(!(e&1)){Ip(s,u,e),th();break e}c=Error(pe(426))}}else if(Tt&&o.mode&1){var v=Dp(a);if(v!==null){!(v.flags&65536)&&(v.flags|=256),Up(v,a,o,s,e),Uf(Is(c,o));break e}}s=c=Is(c,o),Ft!==4&&(Ft=2),va===null?va=[s]:va.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=G0(s,c,e);bp(s,d);break e;case 1:o=c;var g=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(or===null||!or.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=V0(s,o,e);bp(s,S);break e}}s=s.return}while(s!==null)}lx(n)}catch(w){e=w,Dt===n&&n!==null&&(Dt=n=n.return);continue}break}while(!0)}function ax(){var t=Ll.current;return Ll.current=Pl,t===null?Pl:t}function th(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Gt===null||!(Dr&268435455)&&!(sc&268435455)||Qi(Gt,qt)}function Ul(t,e){var n=ct;ct|=2;var i=ax();(Gt!==t||qt!==e)&&(Ei=null,Rr(t,e));do try{Ry();break}catch(r){sx(t,r)}while(!0);if(Of(),ct=n,Ll.current=i,Dt!==null)throw Error(pe(261));return Gt=null,qt=0,Ft}function Ry(){for(;Dt!==null;)ox(Dt)}function Ny(){for(;Dt!==null&&!t_();)ox(Dt)}function ox(t){var e=ux(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?lx(t):Dt=e,Zf.current=null}function lx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ey(n,e),n!==null){n.flags&=32767,Dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ft=6,Dt=null;return}}else if(n=My(n,e,Sn),n!==null){Dt=n;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=t}while(e!==null);Ft===0&&(Ft=5)}function Er(t,e,n){var i=pt,r=Un.transition;try{Un.transition=null,pt=1,Py(t,e,n,i)}finally{Un.transition=r,pt=i}return null}function Py(t,e,n,i){do ws();while(tr!==null);if(ct&6)throw Error(pe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(pe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(d_(t,s),t===Gt&&(Dt=Gt=null,qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||So||(So=!0,dx(gl,function(){return ws(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Un.transition,Un.transition=null;var a=pt;pt=1;var o=ct;ct|=4,Zf.current=null,wy(t,n),nx(n,t),K_(Yu),vl=!!$u,Yu=$u=null,t.current=n,Ay(n),n_(),ct=o,pt=a,Un.transition=s}else t.current=n;if(So&&(So=!1,tr=t,Dl=r),s=t.pendingLanes,s===0&&(or=null),s_(n.stateNode),vn(t,Pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Il)throw Il=!1,t=md,md=null,t;return Dl&1&&t.tag!==0&&ws(),s=t.pendingLanes,s&1?t===gd?_a++:(_a=0,gd=t):_a=0,mr(),null}function ws(){if(tr!==null){var t=Gg(Dl),e=Un.transition,n=pt;try{if(Un.transition=null,pt=16>t?16:t,tr===null)var i=!1;else{if(t=tr,tr=null,Dl=0,ct&6)throw Error(pe(331));var r=ct;for(ct|=4,Ne=t.current;Ne!==null;){var s=Ne,a=s.child;if(Ne.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(Ne=u;Ne!==null;){var h=Ne;switch(h.tag){case 0:case 11:case 15:xa(8,h,s)}var p=h.child;if(p!==null)p.return=h,Ne=p;else for(;Ne!==null;){h=Ne;var f=h.sibling,m=h.return;if(J0(h),h===u){Ne=null;break}if(f!==null){f.return=m,Ne=f;break}Ne=m}}}var x=s.alternate;if(x!==null){var M=x.child;if(M!==null){x.child=null;do{var v=M.sibling;M.sibling=null,M=v}while(M!==null)}}Ne=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ne=a;else e:for(;Ne!==null;){if(s=Ne,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ne=d;break e}Ne=s.return}}var g=t.current;for(Ne=g;Ne!==null;){a=Ne;var E=a.child;if(a.subtreeFlags&2064&&E!==null)E.return=a,Ne=E;else e:for(a=g;Ne!==null;){if(o=Ne,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:rc(9,o)}}catch(w){Rt(o,o.return,w)}if(o===a){Ne=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,Ne=S;break e}Ne=o.return}}if(ct=r,mr(),fi&&typeof fi.onPostCommitFiberRoot=="function")try{fi.onPostCommitFiberRoot(Zl,t)}catch{}i=!0}return i}finally{pt=n,Un.transition=e}}return!1}function $p(t,e,n){e=Is(n,e),e=G0(t,e,1),t=ar(t,e,1),e=cn(),t!==null&&(qa(t,1,e),vn(t,e))}function Rt(t,e,n){if(t.tag===3)$p(t,t,n);else for(;e!==null;){if(e.tag===3){$p(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(or===null||!or.has(i))){t=Is(n,t),t=V0(e,t,1),e=ar(e,t,1),t=cn(),e!==null&&(qa(e,1,t),vn(e,t));break}}e=e.return}}function Ly(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=cn(),t.pingedLanes|=t.suspendedLanes&n,Gt===t&&(qt&n)===n&&(Ft===4||Ft===3&&(qt&130023424)===qt&&500>Pt()-Qf?Rr(t,0):Kf|=n),vn(t,e)}function cx(t,e){e===0&&(t.mode&1?(e=uo,uo<<=1,!(uo&130023424)&&(uo=4194304)):e=1);var n=cn();t=Ii(t,e),t!==null&&(qa(t,e,n),vn(t,n))}function Iy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cx(t,n)}function Dy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(pe(314))}i!==null&&i.delete(e),cx(t,n)}var ux;ux=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,Sy(t,e,n);mn=!!(t.flags&131072)}else mn=!1,Tt&&e.flags&1048576&&p0(e,wl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;il(t,e),t=e.pendingProps;var r=Rs(e,sn.current);Ts(e,n),r=Wf(null,e,i,t,r,n);var s=Xf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xn(i)?(s=!0,El(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,zf(e),r.updater=ic,e.stateNode=r,r._reactInternals=e,rd(e,i,t,n),e=od(null,e,i,!0,s,n)):(e.tag=0,Tt&&s&&If(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(il(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Fy(i),t=jn(i,t),r){case 0:e=ad(null,e,i,t,n);break e;case 1:e=kp(null,e,i,t,n);break e;case 11:e=Fp(null,e,i,t,n);break e;case 14:e=Op(null,e,i,jn(i.type,t),n);break e}throw Error(pe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),ad(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),kp(t,e,i,r,n);case 3:e:{if(q0(e),t===null)throw Error(pe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,y0(t,e),Cl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Is(Error(pe(423)),e),e=Bp(t,e,i,n,r);break e}else if(i!==r){r=Is(Error(pe(424)),e),e=Bp(t,e,i,n,r);break e}else for(En=sr(e.stateNode.containerInfo.firstChild),Tn=e,Tt=!0,Xn=null,n=v0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ns(),i===r){e=Di(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return S0(e),t===null&&td(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Zu(i,r)?a=null:s!==null&&Zu(i,s)&&(e.flags|=32),X0(t,e),ln(t,e,a,n),e.child;case 6:return t===null&&td(e),null;case 13:return $0(t,e,n);case 4:return Hf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ps(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Fp(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,_t(Al,i._currentValue),i._currentValue=a,s!==null)if(Qn(s.value,a)){if(s.children===r.children&&!gn.current){e=Di(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var c=o.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=bi(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),nd(s.return,n,e),o.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(pe(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),nd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ts(e,n),r=On(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),Op(t,e,i,r,n);case 15:return j0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),il(t,e),e.tag=1,xn(i)?(t=!0,El(e)):t=!1,Ts(e,n),H0(e,i,r),rd(e,i,r,n),od(null,e,i,!0,t,n);case 19:return Y0(t,e,n);case 22:return W0(t,e,n)}throw Error(pe(156,e.tag))};function dx(t,e){return kg(t,e)}function Uy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dn(t,e,n,i){return new Uy(t,e,n,i)}function nh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fy(t){if(typeof t=="function")return nh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sf)return 11;if(t===Mf)return 14}return 2}function cr(t,e){var n=t.alternate;return n===null?(n=Dn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function al(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")nh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case os:return Nr(n.children,r,s,e);case yf:a=8,r|=8;break;case Cu:return t=Dn(12,n,e,r|2),t.elementType=Cu,t.lanes=s,t;case Ru:return t=Dn(13,n,e,r),t.elementType=Ru,t.lanes=s,t;case Nu:return t=Dn(19,n,e,r),t.elementType=Nu,t.lanes=s,t;case Sg:return ac(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _g:a=10;break e;case yg:a=9;break e;case Sf:a=11;break e;case Mf:a=14;break e;case $i:a=16,i=null;break e}throw Error(pe(130,t==null?t:typeof t,""))}return e=Dn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Nr(t,e,n,i){return t=Dn(7,t,i,e),t.lanes=n,t}function ac(t,e,n,i){return t=Dn(22,t,i,e),t.elementType=Sg,t.lanes=n,t.stateNode={isHidden:!1},t}function Hc(t,e,n){return t=Dn(6,t,null,e),t.lanes=n,t}function Gc(t,e,n){return e=Dn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Oy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Mc(0),this.expirationTimes=Mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function ih(t,e,n,i,r,s,a,o,c){return t=new Oy(t,e,n,o,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zf(s),t}function ky(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:as,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function fx(t){if(!t)return dr;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(pe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(pe(171))}if(t.tag===1){var n=t.type;if(xn(n))return f0(t,n,e)}return e}function hx(t,e,n,i,r,s,a,o,c){return t=ih(n,i,!0,t,r,s,a,o,c),t.context=fx(null),n=t.current,i=cn(),r=lr(n),s=bi(i,r),s.callback=e??null,ar(n,s,r),t.current.lanes=r,qa(t,r,i),vn(t,i),t}function oc(t,e,n,i){var r=e.current,s=cn(),a=lr(r);return n=fx(n),e.context===null?e.context=n:e.pendingContext=n,e=bi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ar(r,e,a),t!==null&&(Zn(t,r,a,s),el(t,r,a)),a}function Fl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Yp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function rh(t,e){Yp(t,e),(t=t.alternate)&&Yp(t,e)}function By(){return null}var px=typeof reportError=="function"?reportError:function(t){console.error(t)};function sh(t){this._internalRoot=t}lc.prototype.render=sh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(pe(409));oc(t,e,null,null)};lc.prototype.unmount=sh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ur(function(){oc(null,t,null,null)}),e[Li]=null}};function lc(t){this._internalRoot=t}lc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Wg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ki.length&&e!==0&&e<Ki[n].priority;n++);Ki.splice(n,0,t),n===0&&qg(t)}};function ah(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Zp(){}function zy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Fl(a);s.call(u)}}var a=hx(e,i,t,0,null,!1,!1,"",Zp);return t._reactRootContainer=a,t[Li]=a.current,Ra(t.nodeType===8?t.parentNode:t),Ur(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Fl(c);o.call(u)}}var c=ih(t,0,!1,null,null,!1,!1,"",Zp);return t._reactRootContainer=c,t[Li]=c.current,Ra(t.nodeType===8?t.parentNode:t),Ur(function(){oc(e,c,n,i)}),c}function uc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var c=Fl(a);o.call(c)}}oc(e,a,t,r)}else a=zy(n,e,t,r,i);return Fl(a)}Vg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=oa(e.pendingLanes);n!==0&&(wf(e,n|1),vn(e,Pt()),!(ct&6)&&(Ds=Pt()+500,mr()))}break;case 13:Ur(function(){var i=Ii(t,1);if(i!==null){var r=cn();Zn(i,t,1,r)}}),rh(t,1)}};Af=function(t){if(t.tag===13){var e=Ii(t,134217728);if(e!==null){var n=cn();Zn(e,t,134217728,n)}rh(t,134217728)}};jg=function(t){if(t.tag===13){var e=lr(t),n=Ii(t,e);if(n!==null){var i=cn();Zn(n,t,e,i)}rh(t,e)}};Wg=function(){return pt};Xg=function(t,e){var n=pt;try{return pt=t,e()}finally{pt=n}};zu=function(t,e,n){switch(e){case"input":if(Iu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ec(i);if(!r)throw Error(pe(90));Eg(i),Iu(i,r)}}}break;case"textarea":wg(t,n);break;case"select":e=n.value,e!=null&&ys(t,!!n.multiple,e,!1)}};Lg=Jf;Ig=Ur;var Hy={usingClientEntryPoint:!1,Events:[Ya,ds,ec,Ng,Pg,Jf]},Zs={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Gy={bundleType:Zs.bundleType,version:Zs.version,rendererPackageName:Zs.rendererPackageName,rendererConfig:Zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Fi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fg(t),t===null?null:t.stateNode},findFiberByHostInstance:Zs.findFiberByHostInstance||By,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mo.isDisabled&&Mo.supportsFiber)try{Zl=Mo.inject(Gy),fi=Mo}catch{}}An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hy;An.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ah(e))throw Error(pe(200));return ky(t,e,null,n)};An.createRoot=function(t,e){if(!ah(t))throw Error(pe(299));var n=!1,i="",r=px;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=ih(t,1,!1,null,null,n,!1,i,r),t[Li]=e.current,Ra(t.nodeType===8?t.parentNode:t),new sh(e)};An.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(pe(188)):(t=Object.keys(t).join(","),Error(pe(268,t)));return t=Fg(e),t=t===null?null:t.stateNode,t};An.flushSync=function(t){return Ur(t)};An.hydrate=function(t,e,n){if(!cc(e))throw Error(pe(200));return uc(null,t,e,!0,n)};An.hydrateRoot=function(t,e,n){if(!ah(t))throw Error(pe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=px;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=hx(e,null,t,1,n??null,r,!1,s,a),t[Li]=e.current,Ra(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new lc(e)};An.render=function(t,e,n){if(!cc(e))throw Error(pe(200));return uc(null,t,e,!1,n)};An.unmountComponentAtNode=function(t){if(!cc(t))throw Error(pe(40));return t._reactRootContainer?(Ur(function(){uc(null,null,t,!1,function(){t._reactRootContainer=null,t[Li]=null})}),!0):!1};An.unstable_batchedUpdates=Jf;An.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!cc(n))throw Error(pe(200));if(t==null||t._reactInternals===void 0)throw Error(pe(38));return uc(t,e,n,!1,i)};An.version="18.3.1-next-f1338f8080-20240426";function mx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mx)}catch(t){console.error(t)}}mx(),mg.exports=An;var Vy=mg.exports,gx,Kp=Vy;gx=Kp.createRoot,Kp.hydrateRoot;/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),xx=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Wy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=ae.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},c)=>ae.createElement("svg",{ref:c,...Wy,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:xx("lucide",r),...o},[...a.map(([u,h])=>ae.createElement(u,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=(t,e)=>{const n=ae.forwardRef(({className:i,...r},s)=>ae.createElement(Xy,{ref:s,iconNode:e,className:xx(`lucide-${jy(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=at("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=at("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=at("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=at("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=at("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=at("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=at("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=at("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=at("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=at("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=at("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=at("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=at("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=at("Dice5",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=at("Dna",[["path",{d:"m10 16 1.5 1.5",key:"11lckj"}],["path",{d:"m14 8-1.5-1.5",key:"1ohn8i"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m17 6-2.891-2.891",key:"xu6p2f"}],["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"m20 9 .891.891",key:"3xwk7g"}],["path",{d:"M3.109 14.109 4 15",key:"q76aoh"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m7 18 2.891 2.891",key:"1sisit"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=at("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=at("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=at("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=at("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=at("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=at("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rS=at("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=at("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=at("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=at("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aS=at("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=at("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=at("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=at("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=at("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=at("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=at("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=at("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=at("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=at("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=at("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Qp=["#0d9488","rgba(13, 148, 136, 0.75)","#e11d48","rgba(225, 29, 72, 0.65)","#0284c7"];function dS({accent:t="#0d9488"}){const e=ae.useRef(null);return ae.useEffect(()=>{const n=e.current;if(!n)return;const i=n.getContext("2d");if(!i)return;let r=0,s=n.width=window.innerWidth,a=n.height=window.innerHeight;const o={x:-1e3,y:-1e3,targetX:-1e3,targetY:-1e3,radius:160},c=[{x:s*.25,y:a*.35,vx:.06,vy:.04,radius:320,color:"rgba(13, 148, 136, 0.06)"},{x:s*.75,y:a*.3,vx:-.05,vy:.03,radius:360,color:"rgba(225, 29, 72, 0.04)"},{x:s*.5,y:a*.75,vx:.04,vy:-.05,radius:280,color:"rgba(2, 132, 199, 0.05)"}],u=Math.min(65,Math.floor(s*a/22e3)),h=[];for(let d=0;d<u;d++){const g=Qp[d%Qp.length];h.push({x:Math.random()*s,y:Math.random()*a,vx:(Math.random()-.5)*.3,vy:-.2-Math.random()*.4,baseRadius:1+Math.random()*1.5,radius:1.5,color:g,alpha:.2+Math.random()*.35,pulseSpeed:.015+Math.random()*.02,phase:Math.random()*Math.PI*2})}const p=d=>{o.targetX=d.clientX,o.targetY=d.clientY},f=d=>{d.touches.length>0&&(o.targetX=d.touches[0].clientX,o.targetY=d.touches[0].clientY)},m=()=>{o.targetX=-1e3,o.targetY=-1e3},x=()=>{s=n.width=window.innerWidth,a=n.height=window.innerHeight};window.addEventListener("mousemove",p),window.addEventListener("touchmove",f),window.addEventListener("mouseleave",m),window.addEventListener("resize",x);let M=0;const v=()=>{M+=.012,i.clearRect(0,0,s,a),o.x+=(o.targetX-o.x)*.08,o.y+=(o.targetY-o.y)*.08,i.save(),c.forEach(d=>{d.x+=d.vx,d.y+=d.vy,(d.x<-100||d.x>s+100)&&(d.vx*=-1),(d.y<-100||d.y>a+100)&&(d.vy*=-1);const g=i.createRadialGradient(d.x,d.y,0,d.x,d.y,d.radius);g.addColorStop(0,d.color),g.addColorStop(1,"rgba(0, 0, 0, 0)"),i.fillStyle=g,i.beginPath(),i.arc(d.x,d.y,d.radius,0,Math.PI*2),i.fill()}),i.restore(),i.lineWidth=.5;for(let d=0;d<h.length;d++)for(let g=d+1;g<h.length;g++){const E=h[d].x-h[g].x,S=h[d].y-h[g].y,w=E*E+S*S;if(w<90*90){const b=(1-Math.sqrt(w)/90)*.12;i.strokeStyle=`rgba(20, 184, 166, ${b})`,i.beginPath(),i.moveTo(h[d].x,h[d].y),i.lineTo(h[g].x,h[g].y),i.stroke()}}if(h.forEach(d=>{d.phase+=d.pulseSpeed,d.radius=d.baseRadius+Math.sin(d.phase)*.4,d.x+=d.vx+Math.sin(M*1.2+d.phase)*.2,d.y+=d.vy;const g=d.x-o.x,E=d.y-o.y,S=Math.sqrt(g*g+E*E);if(S<o.radius&&S>0){const w=(1-S/o.radius)*2.2,A=Math.atan2(E,g);d.x+=Math.cos(A)*w,d.y+=Math.sin(A)*w}d.y<-10&&(d.y=a+10,d.x=Math.random()*s),d.x<-10&&(d.x=s+10),d.x>s+10&&(d.x=-10),i.save(),i.globalAlpha=d.alpha,i.fillStyle=d.color,i.beginPath(),i.arc(d.x,d.y,d.radius,0,Math.PI*2),i.fill(),i.restore()}),o.x>0&&o.y>0){i.save();const d=i.createRadialGradient(o.x,o.y,0,o.x,o.y,o.radius*.8);d.addColorStop(0,"rgba(20, 184, 166, 0.06)"),d.addColorStop(1,"rgba(0, 0, 0, 0)"),i.fillStyle=d,i.beginPath(),i.arc(o.x,o.y,o.radius*.8,0,Math.PI*2),i.fill(),i.restore()}r=requestAnimationFrame(v)};return r=requestAnimationFrame(v),()=>{cancelAnimationFrame(r),window.removeEventListener("mousemove",p),window.removeEventListener("touchmove",f),window.removeEventListener("mouseleave",m),window.removeEventListener("resize",x)}},[t]),l.jsx("canvas",{ref:e,className:"antigravity-canvas","aria-hidden":"true"})}const zt=[{id:1,codename:"QS-01",label:"THE FIRST DEFENSE",title:"SIGNAL RESCUE",headline:"Protect a fragile quantum signal",brief:"Payload telemetry is under heavy thermal decoherence. Rig spacetime tripwires across active data channels to intercept bit-flip corruptions before the terminal state collapses.",threat:"Depolarising noise on entangling gates; readout bit-flips on measurement.",objectives:[{label:"PRIMARY",text:"Deploy at least one real spacetime check and raise accepted-shot fidelity by 0.005.",tone:"primary"},{label:"SECONDARY",text:"Keep at least 70% of shots and stay inside the ancilla, gate and depth budgets.",tone:"secondary"},{label:"TACTICAL",text:"Checks detect some errors the syndrome can see, but every check also discards useful shots.",tone:"lesson"}],winRule:"WIN: >=1 check, fixed +0.005 output-distribution fidelity, all resource budgets satisfied.",starRules:{two:"utility ratio vs baseline >= 0.90",three:"retained-shot fraction >= 80%"},accent:"#0d9488",accentSoft:"rgba(13, 148, 136, 0.12)",budget:{ancillas:2,gates:30,depth:60,retention:.7},incentivise:"Best trade-off between fidelity and kept shots wins the highest score.",method:"qiskit-paulice coherent Pauli checks + Aer syndrome post-selection."},{id:2,codename:"QS-02",label:"THE HARD TRADE-OFF",title:"RESOURCE SIEGE",headline:"Defend the core with one ancilla",brief:"Power grid critical. System restricted to a single watcher ancilla. Every auxiliary gate burns precious coherence. Intercept the noise without suffocating data throughput.",threat:"Same noise floor, but the hardware budget is slashed to a single ancilla.",objectives:[{label:"PRIMARY",text:"Achieve a 0.003 fidelity gain with at most one ancilla qubit.",tone:"primary"},{label:"SECONDARY",text:"Respect tighter gate (<=12) and depth (<=25) limits and keep >=75% of shots.",tone:"secondary"},{label:"TACTICAL",text:"The most accurate measured choice can still be too expensive to deploy.",tone:"lesson"}],winRule:"WIN: fixed +0.003 fidelity, <=1 ancilla, every budget satisfied.",starRules:{two:"utility ratio vs baseline >= 0.90",three:"retained-shot fraction >= 85%"},accent:"#e11d48",accentSoft:"rgba(225, 29, 72, 0.12)",budget:{ancillas:1,gates:12,depth:25,retention:.75},incentivise:"Prove a single ancilla can pay for itself.",method:"Resource-matched check placement under a one-ancilla cap."},{id:3,codename:"QS-03",label:"THE SEARCH FRONTIER",title:"BENCHMARK DUEL",headline:"Challenge the best tested strategy",brief:"Engage the automated defense matrix. Scan the combinatorial frontier of target qubits to match and beat the highest recorded empirical baseline under matched constraints.",threat:"Selection-optimistic rankings; the measured best is not a proven global optimum.",objectives:[{label:"PRIMARY",text:"Match the highest conditional fidelity among feasible scanned candidates.",tone:"primary"},{label:"SECONDARY",text:"Beat or equal the recorded benchmark without breaking budgets.",tone:"secondary"},{label:"TACTICAL",text:"Scientific rankings require matched comparisons, not cherry-picking.",tone:"lesson"}],winRule:"WIN: match the best feasible protected measured candidate in the scanned set.",starRules:{two:"matched the benchmark with utility ratio >= 0.90",three:"retained-shot fraction >= 80%"},accent:"#0d9488",accentSoft:"rgba(13, 148, 136, 0.12)",budget:{ancillas:2,gates:30,depth:60,retention:.7},incentivise:"Read the frontier, then beat it.",method:"Ordered target-subset search scored by real Aer fidelity."},{id:4,codename:"QS-04",label:"THE UNKNOWN TERRITORY",title:"T-GATE FRONTIER",headline:"Explore beyond Clifford circuits",brief:"Breaching stabilizer limits. Non-Clifford T-gates inject raw magic states that break standard Pauli commute rules. Navigate coherent phase rotation without false confidence.",threat:"T-doped circuits alter the ideal statevector; standard stabilizer checks do not automatically apply.",objectives:[{label:"PRIMARY",text:"Run a matched unprotected Clifford vs T-doped comparison.",tone:"primary"},{label:"SECONDARY",text:"Select the scientifically correct conclusion.",tone:"secondary"},{label:"TACTICAL",text:"A T is diagonal, so a check only survives it if its Pauli acts as I or Z there.",tone:"lesson"}],winRule:"WIN: run a matched T comparison AND choose the valid scientific interpretation.",starRules:{two:"chose the correct interpretation",three:"diagnostic mission completed"},accent:"#e11d48",accentSoft:"rgba(225, 29, 72, 0.12)",budget:{ancillas:0,gates:0,depth:0,retention:0},incentivise:"Know the limits of detection.",method:"Matched ideal-distribution comparison; no invented non-Clifford checks."}],Sd=[{value:"t_gates_improve_hardware",text:"Higher output fidelity proves T gates improve physical reliability",correct:!1},{value:"checks_work_across_t",text:"Clifford Pauli checks automatically remain valid across T gates",correct:!1},{value:"different_ideals_not_causal",text:"Different ideal outputs: cannot infer T gates improve reliability",correct:!0}],Vc=[{name:"CADET",xp:0},{name:"OPERATOR",xp:180},{name:"SENTINEL",xp:420},{name:"WARDEN",xp:720},{name:"ARCHON",xp:1100},{name:"QUANTUM LEGEND",xp:1600}];function Jp(t){let e=Vc[0];for(const i of Vc)t>=i.xp&&(e=i);const n=Vc.find(i=>i.xp>t)??null;return{current:e,next:n}}const em="quantum-sentinel-muted";class fS{constructor(){xi(this,"ctx",null);xi(this,"sfxMaster",null);xi(this,"bgmMaster",null);xi(this,"muted",!1);xi(this,"bgmPlaying",!1);xi(this,"bgmTimer",null);xi(this,"currentStep",0);xi(this,"bpm",108);try{this.muted=localStorage.getItem(em)==="1"}catch{}if(typeof window<"u"){const e=()=>{this.ctx&&this.ctx.state==="suspended"?this.ctx.resume():!this.ctx&&!this.muted&&this.ensure(),!this.muted&&!this.bgmPlaying&&this.startBgm()};window.addEventListener("pointerdown",e,{once:!0}),window.addEventListener("keydown",e,{once:!0})}}ensure(){if(this.muted)return!1;const e=window.AudioContext??window.webkitAudioContext;if(!e)return!1;if(!this.ctx){this.ctx=new e,this.sfxMaster=this.ctx.createGain(),this.sfxMaster.gain.value=.7,this.sfxMaster.connect(this.ctx.destination),this.bgmMaster=this.ctx.createGain(),this.bgmMaster.gain.value=.22;const n=this.ctx.createBiquadFilter();n.type="lowpass",n.frequency.value=2400,this.bgmMaster.connect(n),n.connect(this.ctx.destination)}return this.ctx.state==="suspended"&&this.ctx.resume(),!0}startBgm(){if(this.bgmPlaying||this.muted||!this.ensure())return;this.bgmPlaying=!0,this.currentStep=0;const e=[[146.83,220,261.63,329.63],[116.54,174.61,220,261.63],[174.61,261.63,349.23,392],[164.81,196,261.63,329.63]],n=[73.42,58.27,87.31,82.41],i=[293.66,349.23,440,523.25,659.25,523.25,440,349.23,293.66,349.23,440,587.33,523.25,440,349.23,293.66],r=60/this.bpm/4*1e3;this.bgmTimer=window.setInterval(()=>{if(!this.ctx||!this.bgmMaster||!this.bgmPlaying)return;const s=Math.floor(this.currentStep/16)%4,a=this.currentStep%16;if(this.ctx.currentTime,a===0&&(e[s].forEach((c,u)=>{this.playPadVoice(c,60/this.bpm*3.8,u*.04)}),this.playSubBass(n[s],60/this.bpm*3.6)),a%2===0){const o=this.currentStep%i.length,c=i[o];a!==6&&a!==14&&this.playArpPluck(c,.28)}a===0||a===8?this.playSoftKick():a%4===2&&this.playSoftHat(),this.currentStep=(this.currentStep+1)%64},r)}stopBgm(){this.bgmPlaying=!1,this.bgmTimer!==null&&(clearInterval(this.bgmTimer),this.bgmTimer=null)}playPadVoice(e,n,i=0){if(!(!this.ctx||!this.bgmMaster))try{const r=this.ctx.currentTime+i,s=this.ctx.createOscillator(),a=this.ctx.createGain();s.type="triangle",s.frequency.setValueAtTime(e,r),a.gain.setValueAtTime(1e-4,r),a.gain.linearRampToValueAtTime(.06,r+.4),a.gain.exponentialRampToValueAtTime(1e-4,r+n),s.connect(a),a.connect(this.bgmMaster),s.start(r),s.stop(r+n+.1)}catch{}}playSubBass(e,n){if(!(!this.ctx||!this.bgmMaster))try{const i=this.ctx.currentTime,r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(e,i),s.gain.setValueAtTime(1e-4,i),s.gain.linearRampToValueAtTime(.14,i+.08),s.gain.exponentialRampToValueAtTime(1e-4,i+n),r.connect(s),s.connect(this.bgmMaster),r.start(i),r.stop(i+n+.05)}catch{}}playArpPluck(e,n){if(!(!this.ctx||!this.bgmMaster))try{const i=this.ctx.currentTime,r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(e,i),s.gain.setValueAtTime(1e-4,i),s.gain.linearRampToValueAtTime(.05,i+.015),s.gain.exponentialRampToValueAtTime(1e-4,i+n),r.connect(s),s.connect(this.bgmMaster),r.start(i),r.stop(i+n+.02)}catch{}}playSoftKick(){if(!(!this.ctx||!this.bgmMaster))try{const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(110,e),n.frequency.exponentialRampToValueAtTime(35,e+.12),i.gain.setValueAtTime(.12,e),i.gain.exponentialRampToValueAtTime(1e-4,e+.15),n.connect(i),i.connect(this.bgmMaster),n.start(e),n.stop(e+.16)}catch{}}playSoftHat(){if(!(!this.ctx||!this.bgmMaster))try{const e=this.ctx.currentTime,n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(7500,e),i.gain.setValueAtTime(.02,e),i.gain.exponentialRampToValueAtTime(1e-4,e+.04),n.connect(i),i.connect(this.bgmMaster),n.start(e),n.stop(e+.05)}catch{}}tone(e,n,i,r=0,s=1,a){if(!(!this.ensure()||!this.ctx||!this.sfxMaster))try{const o=this.ctx.currentTime+r,c=this.ctx.createOscillator(),u=this.ctx.createGain();c.type=i,c.frequency.setValueAtTime(e,o),a&&c.frequency.exponentialRampToValueAtTime(Math.max(40,a),o+n),u.gain.setValueAtTime(1e-4,o),u.gain.linearRampToValueAtTime(.85*s,o+.015),u.gain.exponentialRampToValueAtTime(1e-4,o+n),c.connect(u),u.connect(this.sfxMaster),c.start(o),c.stop(o+n+.05)}catch{}}play(e){if(this.ensure())switch(e){case"hover":this.tone(880,.04,"sine",0,.4,1100);break;case"select":this.tone(587,.1,"triangle",0,.7,880),this.tone(1174,.09,"sine",.03,.6);break;case"place":this.tone(330,.15,"triangle",0,.8,660),this.tone(990,.12,"sine",.02,.7,1320);break;case"remove":this.tone(550,.12,"triangle",0,.5,220);break;case"launch":this.tone(150,.6,"sawtooth",0,.7,750),this.tone(300,.55,"sine",.05,.75,1200),this.tone(600,.45,"triangle",.1,.6,1600);break;case"scan":this.tone(440,.35,"triangle",0,.6,1320),this.tone(880,.3,"sine",.05,.5,1760);break;case"hit":this.tone(280,.22,"square",0,.7,140),this.tone(560,.18,"sawtooth",.03,.6,120);break;case"chime":this.tone(784,.25,"sine",0,.7),this.tone(1046,.28,"triangle",.05,.65);break;case"zap":this.tone(190,.18,"sawtooth",0,.65,80);break;case"pulse":this.tone(520+Math.random()*260,.08,"triangle",0,.4);break;case"success":[587.33,739.99,880,1174.66,1479.98].forEach((n,i)=>{this.tone(n,.38,"triangle",i*.08,.75),this.tone(n*1.5,.25,"sine",i*.08+.02,.4)});break;case"fail":[330,277,196].forEach((n,i)=>{this.tone(n,.35,"sawtooth",i*.11,.65,n*.7)});break;case"unlock":[659,880,1175,1760].forEach((n,i)=>{this.tone(n,.45,"sine",i*.08,.75)});break;case"error":this.tone(180,.24,"sawtooth",0,.65,120);break}}toggleMute(){this.muted=!this.muted;try{localStorage.setItem(em,this.muted?"1":"0")}catch{}return this.muted?(this.stopBgm(),this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()):(this.ensure(),this.startBgm(),this.play("select")),this.muted}}const Ve=new fS;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dh="186",hS=0,tm=1,pS=2,ol=1,mS=2,ca=3,Fr=0,un=1,li=2,Ci=0,ya=1,Md=2,nm=3,im=4,gS=5,ss=100,xS=101,vS=102,_S=103,yS=104,SS=200,MS=201,ES=202,TS=203,Mx=204,Ex=205,wS=206,AS=207,bS=208,CS=209,RS=210,NS=211,PS=212,LS=213,IS=214,Ed=0,Td=1,wd=2,Ha=3,Ad=4,bd=5,Cd=6,Rd=7,Tx=0,DS=1,US=2,pi=0,wx=1,Ax=2,bx=3,fh=4,Cx=5,Rx=6,Nx=7,Px=300,Or=301,Fs=302,jc=303,Wc=304,dc=306,Bl=1e3,ci=1001,Nd=1002,Wt=1003,FS=1004,Eo=1005,nn=1006,Xc=1007,br=1008,Mn=1009,Lx=1010,Ix=1011,Ga=1012,hh=1013,mi=1014,ui=1015,gi=1016,ph=1017,mh=1018,Va=1020,Dx=35902,Ux=35899,Fx=1021,Ox=1022,$n=1023,Ui=1026,Cr=1027,kx=1028,gh=1029,kr=1030,xh=1031,vh=1033,ll=33776,cl=33777,ul=33778,dl=33779,Pd=35840,Ld=35841,Id=35842,Dd=35843,Ud=36196,Fd=37492,Od=37496,kd=37488,Bd=37489,zl=37490,zd=37491,Hd=37808,Gd=37809,Vd=37810,jd=37811,Wd=37812,Xd=37813,qd=37814,$d=37815,Yd=37816,Zd=37817,Kd=37818,Qd=37819,Jd=37820,ef=37821,tf=36492,nf=36494,rf=36495,sf=36283,af=36284,Hl=36285,of=36286,OS=3200,lf=0,kS=1,Ji="",Nn="srgb",Gl="srgb-linear",Vl="linear",ht="srgb",qc=7680,BS=519,zS=512,HS=513,GS=514,_h=515,VS=516,jS=517,yh=518,WS=519,XS=35044,rm="300 es",di=2e3,ja=2001;function qS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function jl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function $S(){const t=jl("canvas");return t.style.display="block",t}const sm={};function am(...t){const e="THREE."+t.shift();console.log(e,...t)}function Bx(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Xe(...t){t=Bx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ut(...t){t=Bx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function As(...t){const e=t.join(" ");e in sm||(sm[e]=!0,Xe(...t))}function YS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const ZS={[Ed]:Td,[wd]:Cd,[Ad]:Rd,[Ha]:bd,[Td]:Ed,[Cd]:wd,[Rd]:Ad,[bd]:Ha};class Hr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$c=Math.PI/180,cf=180/Math.PI;function Ja(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[t&255]+Jt[t>>8&255]+Jt[t>>16&255]+Jt[t>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[n&63|128]+Jt[n>>8&255]+"-"+Jt[n>>16&255]+Jt[n>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function nt(t,e,n){return Math.max(e,Math.min(n,t))}function KS(t,e){return(t%e+e)%e}function Yc(t,e,n){return(1-n)*t+n*e}function Ks(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function hn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ch=class Ch{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ch.prototype.isVector2=!0;let it=Ch;class Hs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],u=i[r+1],h=i[r+2],p=i[r+3],f=s[a+0],m=s[a+1],x=s[a+2],M=s[a+3];if(p!==M||c!==f||u!==m||h!==x){let v=c*f+u*m+h*x+p*M;v<0&&(f=-f,m=-m,x=-x,M=-M,v=-v);let d=1-o;if(v<.9995){const g=Math.acos(v),E=Math.sin(g);d=Math.sin(d*g)/E,o=Math.sin(o*g)/E,c=c*d+f*o,u=u*d+m*o,h=h*d+x*o,p=p*d+M*o}else{c=c*d+f*o,u=u*d+m*o,h=h*d+x*o,p=p*d+M*o;const g=1/Math.sqrt(c*c+u*u+h*h+p*p);c*=g,u*=g,h*=g,p*=g}}e[n]=c,e[n+1]=u,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],u=i[r+2],h=i[r+3],p=s[a],f=s[a+1],m=s[a+2],x=s[a+3];return e[n]=o*x+h*p+c*m-u*f,e[n+1]=c*x+h*f+u*p-o*m,e[n+2]=u*x+h*m+o*f-c*p,e[n+3]=h*x-o*p-c*f-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(i/2),h=o(r/2),p=o(s/2),f=c(i/2),m=c(r/2),x=c(s/2);switch(a){case"XYZ":this._x=f*h*p+u*m*x,this._y=u*m*p-f*h*x,this._z=u*h*x+f*m*p,this._w=u*h*p-f*m*x;break;case"YXZ":this._x=f*h*p+u*m*x,this._y=u*m*p-f*h*x,this._z=u*h*x-f*m*p,this._w=u*h*p+f*m*x;break;case"ZXY":this._x=f*h*p-u*m*x,this._y=u*m*p+f*h*x,this._z=u*h*x+f*m*p,this._w=u*h*p-f*m*x;break;case"ZYX":this._x=f*h*p-u*m*x,this._y=u*m*p+f*h*x,this._z=u*h*x-f*m*p,this._w=u*h*p+f*m*x;break;case"YZX":this._x=f*h*p+u*m*x,this._y=u*m*p+f*h*x,this._z=u*h*x-f*m*p,this._w=u*h*p-f*m*x;break;case"XZY":this._x=f*h*p-u*m*x,this._y=u*m*p-f*h*x,this._z=u*h*x+f*m*p,this._w=u*h*p+f*m*x;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],u=n[2],h=n[6],p=n[10],f=i+o+p;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,u=n._z,h=n._w;return this._x=i*h+a*o+r*u-s*c,this._y=r*h+a*c+s*o-i*u,this._z=s*h+a*u+i*c-r*o,this._w=a*h-i*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-n;if(o<.9995){const u=Math.acos(o),h=Math.sin(u);c=Math.sin(c*u)/h,n=Math.sin(n*u)/h,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Rh=class Rh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(om.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(om.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*i),h=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+c*u+a*p-o*h,this.y=i+c*h+o*u-s*p,this.z=r+c*p+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Zc.copy(this).projectOnVector(e),this.sub(Zc)}reflect(e){return this.sub(Zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Rh.prototype.isVector3=!0;let j=Rh;const Zc=new j,om=new Hs,Nh=class Nh{constructor(e,n,i,r,s,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u)}set(e,n,i,r,s,a,o,c,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],u=i[1],h=i[4],p=i[7],f=i[2],m=i[5],x=i[8],M=r[0],v=r[3],d=r[6],g=r[1],E=r[4],S=r[7],w=r[2],A=r[5],b=r[8];return s[0]=a*M+o*g+c*w,s[3]=a*v+o*E+c*A,s[6]=a*d+o*S+c*b,s[1]=u*M+h*g+p*w,s[4]=u*v+h*E+p*A,s[7]=u*d+h*S+p*b,s[2]=f*M+m*g+x*w,s[5]=f*v+m*E+x*A,s[8]=f*d+m*S+x*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return n*a*h-n*o*u-i*s*h+i*o*c+r*s*u-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],p=h*a-o*u,f=o*c-h*s,m=u*s-a*c,x=n*p+i*f+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/x;return e[0]=p*M,e[1]=(r*u-h*i)*M,e[2]=(o*i-r*a)*M,e[3]=f*M,e[4]=(h*n-r*c)*M,e[5]=(r*s-o*n)*M,e[6]=m*M,e[7]=(i*c-u*n)*M,e[8]=(a*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+n,0,0,1),this}scale(e,n){return As("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Kc.makeScale(e,n)),this}rotate(e){return As("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Kc.makeRotation(-e)),this}translate(e,n){return As("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Kc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Nh.prototype.isMatrix3=!0;let Ye=Nh;const Kc=new Ye,lm=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cm=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QS(){const t={enabled:!0,workingColorSpace:Gl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ht&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(r.r=bs(r.r),r.g=bs(r.g),r.b=bs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ji?Vl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return As("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return As("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Gl]:{primaries:e,whitePoint:i,transfer:Vl,toXYZ:lm,fromXYZ:cm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Nn},outputColorSpaceConfig:{drawingBufferColorSpace:Nn}},[Nn]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:lm,fromXYZ:cm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Nn}}}),t}const ot=QS();function Ri(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function bs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Xr;class JS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Xr===void 0&&(Xr=jl("canvas")),Xr.width=e.width,Xr.height=e.height;const r=Xr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Xr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=jl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ri(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ri(n[i]/255)*255):n[i]=Ri(n[i]);return{data:n,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eM=0;class Sh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Qc(r[a].image)):s.push(Qc(r[a]))}else s=Qc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Qc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?JS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}let tM=0;const Jc=new j;class rn extends Hr{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=ci,r=ci,s=nn,a=br,o=$n,c=Mn,u=rn.DEFAULT_ANISOTROPY,h=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Ja(),this.name="",this.source=new Sh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Jc).x}get height(){return this.source.getSize(Jc).y}get depth(){return this.source.getSize(Jc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Xe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Xe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Px)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bl:e.x=e.x-Math.floor(e.x);break;case ci:e.x=e.x<0?0:1;break;case Nd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bl:e.y=e.y-Math.floor(e.y);break;case ci:e.y=e.y<0?0:1;break;case Nd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Px;rn.DEFAULT_ANISOTROPY=1;const Ph=class Ph{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],h=c[4],p=c[8],f=c[1],m=c[5],x=c[9],M=c[2],v=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(p-M)<.01&&Math.abs(x-v)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+M)<.1&&Math.abs(x+v)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(u+1)/2,S=(m+1)/2,w=(d+1)/2,A=(h+f)/4,b=(p+M)/4,_=(x+v)/4;return E>S&&E>w?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=A/i,s=b/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=_/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=b/s,r=_/s),this.set(i,r,s,n),this}let g=Math.sqrt((v-x)*(v-x)+(p-M)*(p-M)+(f-h)*(f-h));return Math.abs(g)<.001&&(g=1),this.x=(v-x)/g,this.y=(p-M)/g,this.z=(f-h)/g,this.w=Math.acos((u+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this.w=nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this.w=nt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ph.prototype.isVector4=!0;let At=Ph;class nM extends Hr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new rn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:nn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Sh(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends nM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class zx extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iM extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const $l=class $l{constructor(e,n,i,r,s,a,o,c,u,h,p,f,m,x,M,v){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u,h,p,f,m,x,M,v)}set(e,n,i,r,s,a,o,c,u,h,p,f,m,x,M,v){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=u,d[6]=h,d[10]=p,d[14]=f,d[3]=m,d[7]=x,d[11]=M,d[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $l().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/qr.setFromMatrixColumn(e,0).length(),s=1/qr.setFromMatrixColumn(e,1).length(),a=1/qr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const f=a*h,m=a*p,x=o*h,M=o*p;n[0]=c*h,n[4]=-c*p,n[8]=u,n[1]=m+x*u,n[5]=f-M*u,n[9]=-o*c,n[2]=M-f*u,n[6]=x+m*u,n[10]=a*c}else if(e.order==="YXZ"){const f=c*h,m=c*p,x=u*h,M=u*p;n[0]=f+M*o,n[4]=x*o-m,n[8]=a*u,n[1]=a*p,n[5]=a*h,n[9]=-o,n[2]=m*o-x,n[6]=M+f*o,n[10]=a*c}else if(e.order==="ZXY"){const f=c*h,m=c*p,x=u*h,M=u*p;n[0]=f-M*o,n[4]=-a*p,n[8]=x+m*o,n[1]=m+x*o,n[5]=a*h,n[9]=M-f*o,n[2]=-a*u,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const f=a*h,m=a*p,x=o*h,M=o*p;n[0]=c*h,n[4]=x*u-m,n[8]=f*u+M,n[1]=c*p,n[5]=M*u+f,n[9]=m*u-x,n[2]=-u,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const f=a*c,m=a*u,x=o*c,M=o*u;n[0]=c*h,n[4]=M-f*p,n[8]=x*p+m,n[1]=p,n[5]=a*h,n[9]=-o*h,n[2]=-u*h,n[6]=m*p+x,n[10]=f-M*p}else if(e.order==="XZY"){const f=a*c,m=a*u,x=o*c,M=o*u;n[0]=c*h,n[4]=-p,n[8]=u*h,n[1]=f*p+M,n[5]=a*h,n[9]=m*p-x,n[2]=x*p-m,n[6]=o*h,n[10]=M*p+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rM,e,sM)}lookAt(e,n,i){const r=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Hi.crossVectors(i,_n),Hi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Hi.crossVectors(i,_n)),Hi.normalize(),To.crossVectors(_n,Hi),r[0]=Hi.x,r[4]=To.x,r[8]=_n.x,r[1]=Hi.y,r[5]=To.y,r[9]=_n.y,r[2]=Hi.z,r[6]=To.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],u=i[12],h=i[1],p=i[5],f=i[9],m=i[13],x=i[2],M=i[6],v=i[10],d=i[14],g=i[3],E=i[7],S=i[11],w=i[15],A=r[0],b=r[4],_=r[8],C=r[12],P=r[1],L=r[5],O=r[9],H=r[13],D=r[2],z=r[6],K=r[10],G=r[14],I=r[3],U=r[7],B=r[11],q=r[15];return s[0]=a*A+o*P+c*D+u*I,s[4]=a*b+o*L+c*z+u*U,s[8]=a*_+o*O+c*K+u*B,s[12]=a*C+o*H+c*G+u*q,s[1]=h*A+p*P+f*D+m*I,s[5]=h*b+p*L+f*z+m*U,s[9]=h*_+p*O+f*K+m*B,s[13]=h*C+p*H+f*G+m*q,s[2]=x*A+M*P+v*D+d*I,s[6]=x*b+M*L+v*z+d*U,s[10]=x*_+M*O+v*K+d*B,s[14]=x*C+M*H+v*G+d*q,s[3]=g*A+E*P+S*D+w*I,s[7]=g*b+E*L+S*z+w*U,s[11]=g*_+E*O+S*K+w*B,s[15]=g*C+E*H+S*G+w*q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],p=e[6],f=e[10],m=e[14],x=e[3],M=e[7],v=e[11],d=e[15],g=c*m-u*f,E=o*m-u*p,S=o*f-c*p,w=a*m-u*h,A=a*f-c*h,b=a*p-o*h;return n*(M*g-v*E+d*S)-i*(x*g-v*w+d*A)+r*(x*E-M*w+d*b)-s*(x*S-M*A+v*b)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],u=e[6],h=e[10];return n*(a*h-o*u)-i*(s*h-o*c)+r*(s*u-a*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],p=e[9],f=e[10],m=e[11],x=e[12],M=e[13],v=e[14],d=e[15],g=n*o-i*a,E=n*c-r*a,S=n*u-s*a,w=i*c-r*o,A=i*u-s*o,b=r*u-s*c,_=h*M-p*x,C=h*v-f*x,P=h*d-m*x,L=p*v-f*M,O=p*d-m*M,H=f*d-m*v,D=g*H-E*O+S*L+w*P-A*C+b*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/D;return e[0]=(o*H-c*O+u*L)*z,e[1]=(r*O-i*H-s*L)*z,e[2]=(M*b-v*A+d*w)*z,e[3]=(f*A-p*b-m*w)*z,e[4]=(c*P-a*H-u*C)*z,e[5]=(n*H-r*P+s*C)*z,e[6]=(v*S-x*b-d*E)*z,e[7]=(h*b-f*S+m*E)*z,e[8]=(a*O-o*P+u*_)*z,e[9]=(i*P-n*O-s*_)*z,e[10]=(x*A-M*S+d*g)*z,e[11]=(p*S-h*A-m*g)*z,e[12]=(o*C-a*L-c*_)*z,e[13]=(n*L-i*C+r*_)*z,e[14]=(M*E-x*w-v*g)*z,e[15]=(h*w-p*E+f*g)*z,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,u=s*a,h=s*o;return this.set(u*a+i,u*o-r*c,u*c+r*o,0,u*o+r*c,h*o+i,h*c-r*a,0,u*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,u=s+s,h=a+a,p=o+o,f=s*u,m=s*h,x=s*p,M=a*h,v=a*p,d=o*p,g=c*u,E=c*h,S=c*p,w=i.x,A=i.y,b=i.z;return r[0]=(1-(M+d))*w,r[1]=(m+S)*w,r[2]=(x-E)*w,r[3]=0,r[4]=(m-S)*A,r[5]=(1-(f+d))*A,r[6]=(v+g)*A,r[7]=0,r[8]=(x+E)*b,r[9]=(v-g)*b,r[10]=(1-(f+M))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=qr.set(r[0],r[1],r[2]).length();const o=qr.set(r[4],r[5],r[6]).length(),c=qr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Hn.copy(this);const u=1/a,h=1/o,p=1/c;return Hn.elements[0]*=u,Hn.elements[1]*=u,Hn.elements[2]*=u,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=p,Hn.elements[9]*=p,Hn.elements[10]*=p,n.setFromRotationMatrix(Hn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,n,i,r,s,a,o=di,c=!1){const u=this.elements,h=2*s/(n-e),p=2*s/(i-r),f=(n+e)/(n-e),m=(i+r)/(i-r);let x,M;if(c)x=s/(a-s),M=a*s/(a-s);else if(o===di)x=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===ja)x=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=di,c=!1){const u=this.elements,h=2/(n-e),p=2/(i-r),f=-(n+e)/(n-e),m=-(i+r)/(i-r);let x,M;if(c)x=1/(a-s),M=a/(a-s);else if(o===di)x=-2/(a-s),M=-(a+s)/(a-s);else if(o===ja)x=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=p,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=x,u[14]=M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};$l.prototype.isMatrix4=!0;let Et=$l;const qr=new j,Hn=new Et,rM=new j(0,0,0),sM=new j(1,1,1),Hi=new j,To=new j,_n=new j,um=new Et,dm=new Hs;class fr{constructor(e=0,n=0,i=0,r=fr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],h=r[9],p=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-nt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return um.makeRotationFromQuaternion(e),this.setFromRotationMatrix(um,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return dm.setFromEuler(this),this.setFromQuaternion(dm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fr.DEFAULT_ORDER="XYZ";class Hx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let aM=0;const fm=new j,$r=new Hs,vi=new Et,wo=new j,Qs=new j,oM=new j,lM=new Hs,hm=new j(1,0,0),pm=new j(0,1,0),mm=new j(0,0,1),gm={type:"added"},cM={type:"removed"},Yr={type:"childadded",child:null},eu={type:"childremoved",child:null};class Vt extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new j,n=new fr,i=new Hs,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ye}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(hm,e)}rotateY(e){return this.rotateOnAxis(pm,e)}rotateZ(e){return this.rotateOnAxis(mm,e)}translateOnAxis(e,n){return fm.copy(e).applyQuaternion(this.quaternion),this.position.add(fm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(hm,e)}translateY(e){return this.translateOnAxis(pm,e)}translateZ(e){return this.translateOnAxis(mm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?wo.copy(e):wo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Qs,wo,this.up):vi.lookAt(wo,Qs,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(vi),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gm),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null):ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(cM),eu.child=e,this.dispatchEvent(eu),eu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gm),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,e,oM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qs,lM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const p=c[u];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),p=a(e.shapes),f=a(e.skeletons),m=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Vt.DEFAULT_UP=new j(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class vs extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uM={type:"move"};class tu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const M of e.hand.values()){const v=n.getJointPose(M,i),d=this._getHandJoint(u,M);v!==null&&(d.matrix.fromArray(v.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=v.radius),d.visible=v!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],f=h.position.distanceTo(p.position),m=.02,x=.005;u.inputState.pinching&&f>m+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=m-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(uM)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new vs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Gx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function nu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class st{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=KS(e,1),n=nt(n,0,1),i=nt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=nu(a,s,e+1/3),this.g=nu(a,s,e),this.b=nu(a,s,e-1/3)}return ot.colorSpaceToWorking(this,r),this}setStyle(e,n=Nn){function i(s){s!==void 0&&parseFloat(s)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Xe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Nn){const i=Gx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=bs(e.r),this.g=bs(e.g),this.b=bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nn){return ot.workingToColorSpace(en.copy(this),e),Math.round(nt(en.r*255,0,255))*65536+Math.round(nt(en.g*255,0,255))*256+Math.round(nt(en.b*255,0,255))}getHexString(e=Nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.workingToColorSpace(en.copy(this),n);const i=en.r,r=en.g,s=en.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,u;const h=(o+a)/2;if(o===a)c=0,u=0;else{const p=a-o;switch(u=h<=.5?p/(a+o):p/(2-a-o),a){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,n=ot.workingColorSpace){return ot.workingToColorSpace(en.copy(this),n),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Nn){ot.workingToColorSpace(en.copy(this),e);const n=en.r,i=en.g,r=en.b;return e!==Nn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+n,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Gi),e.getHSL(Ao);const i=Yc(Gi.h,Ao.h,n),r=Yc(Gi.s,Ao.s,n),s=Yc(Gi.l,Ao.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new st;st.NAMES=Gx;class dM extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fr,this.environmentIntensity=1,this.environmentRotation=new fr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Gn=new j,_i=new j,iu=new j,yi=new j,Zr=new j,Kr=new j,xm=new j,ru=new j,su=new j,au=new j,ou=new At,lu=new At,cu=new At;class qn{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Gn.subVectors(e,n),r.cross(Gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Gn.subVectors(r,n),_i.subVectors(i,n),iu.subVectors(e,n);const a=Gn.dot(Gn),o=Gn.dot(_i),c=Gn.dot(iu),u=_i.dot(_i),h=_i.dot(iu),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;const f=1/p,m=(u*c-o*h)*f,x=(a*h-o*c)*f;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,yi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,yi.x),c.addScaledVector(a,yi.y),c.addScaledVector(o,yi.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return ou.setScalar(0),lu.setScalar(0),cu.setScalar(0),ou.fromBufferAttribute(e,n),lu.fromBufferAttribute(e,i),cu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ou,s.x),a.addScaledVector(lu,s.y),a.addScaledVector(cu,s.z),a}static isFrontFacing(e,n,i,r){return Gn.subVectors(i,n),_i.subVectors(e,n),Gn.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Gn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Zr.subVectors(r,i),Kr.subVectors(s,i),ru.subVectors(e,i);const c=Zr.dot(ru),u=Kr.dot(ru);if(c<=0&&u<=0)return n.copy(i);su.subVectors(e,r);const h=Zr.dot(su),p=Kr.dot(su);if(h>=0&&p<=h)return n.copy(r);const f=c*p-h*u;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(i).addScaledVector(Zr,a);au.subVectors(e,s);const m=Zr.dot(au),x=Kr.dot(au);if(x>=0&&m<=x)return n.copy(s);const M=m*u-c*x;if(M<=0&&u>=0&&x<=0)return o=u/(u-x),n.copy(i).addScaledVector(Kr,o);const v=h*x-m*p;if(v<=0&&p-h>=0&&m-x>=0)return xm.subVectors(s,r),o=(p-h)/(p-h+(m-x)),n.copy(r).addScaledVector(xm,o);const d=1/(v+M+f);return a=M*d,o=f*d,n.copy(i).addScaledVector(Zr,a).addScaledVector(Kr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class eo{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Vn):Vn.fromBufferAttribute(s,a),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bo.copy(i.boundingBox)),bo.applyMatrix4(e.matrixWorld),this.union(bo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),Co.subVectors(this.max,Js),Qr.subVectors(e.a,Js),Jr.subVectors(e.b,Js),es.subVectors(e.c,Js),Vi.subVectors(Jr,Qr),ji.subVectors(es,Jr),xr.subVectors(Qr,es);let n=[0,-Vi.z,Vi.y,0,-ji.z,ji.y,0,-xr.z,xr.y,Vi.z,0,-Vi.x,ji.z,0,-ji.x,xr.z,0,-xr.x,-Vi.y,Vi.x,0,-ji.y,ji.x,0,-xr.y,xr.x,0];return!uu(n,Qr,Jr,es,Co)||(n=[1,0,0,0,1,0,0,0,1],!uu(n,Qr,Jr,es,Co))?!1:(Ro.crossVectors(Vi,ji),n=[Ro.x,Ro.y,Ro.z],uu(n,Qr,Jr,es,Co))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Si=[new j,new j,new j,new j,new j,new j,new j,new j],Vn=new j,bo=new eo,Qr=new j,Jr=new j,es=new j,Vi=new j,ji=new j,xr=new j,Js=new j,Co=new j,Ro=new j,vr=new j;function uu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){vr.fromArray(t,s);const o=r.x*Math.abs(vr.x)+r.y*Math.abs(vr.y)+r.z*Math.abs(vr.z),c=e.dot(vr),u=n.dot(vr),h=i.dot(vr);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const It=new j,No=new it;let fM=0;class Ni extends Hr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=XS,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)No.fromBufferAttribute(this,n),No.applyMatrix3(e),this.setXY(n,No.x,No.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix3(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix4(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyNormalMatrix(e),this.setXYZ(n,It.x,It.y,It.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.transformDirection(e),this.setXYZ(n,It.x,It.y,It.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ks(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=hn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ks(n,this.array)),n}setX(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ks(n,this.array)),n}setY(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ks(n,this.array)),n}setZ(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ks(n,this.array)),n}setW(e,n){return this.normalized&&(n=hn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),r=hn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=hn(n,this.array),i=hn(i,this.array),r=hn(r,this.array),s=hn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Vx extends Ni{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class jx extends Ni{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class $t extends Ni{constructor(e,n,i){super(new Float32Array(e),n,i)}}const hM=new eo,ea=new j,du=new j;class to{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):hM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);const n=ea.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ea,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(du)),this.expandByPoint(ea.copy(e.center).sub(du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let pM=0;const Rn=new Et,fu=new Vt,ts=new j,yn=new eo,ta=new eo,Bt=new j;class Xt extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(qS(e)?jx:Vx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return fu.lookAt(e),fu.updateMatrix(),this.applyMatrix4(fu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $t(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new to);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ta.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(yn.min,ta.min),yn.expandByPoint(Bt),Bt.addVectors(yn.max,ta.max),yn.expandByPoint(Bt)):(yn.expandByPoint(ta.min),yn.expandByPoint(ta.max))}yn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Bt.fromBufferAttribute(o,u),c&&(ts.fromBufferAttribute(e,u),Bt.add(ts)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ni(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new j,c[_]=new j;const u=new j,h=new j,p=new j,f=new it,m=new it,x=new it,M=new j,v=new j;function d(_,C,P){u.fromBufferAttribute(i,_),h.fromBufferAttribute(i,C),p.fromBufferAttribute(i,P),f.fromBufferAttribute(s,_),m.fromBufferAttribute(s,C),x.fromBufferAttribute(s,P),h.sub(u),p.sub(u),m.sub(f),x.sub(f);const L=1/(m.x*x.y-x.x*m.y);isFinite(L)&&(M.copy(h).multiplyScalar(x.y).addScaledVector(p,-m.y).multiplyScalar(L),v.copy(p).multiplyScalar(m.x).addScaledVector(h,-x.x).multiplyScalar(L),o[_].add(M),o[C].add(M),o[P].add(M),c[_].add(v),c[C].add(v),c[P].add(v))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let _=0,C=g.length;_<C;++_){const P=g[_],L=P.start,O=P.count;for(let H=L,D=L+O;H<D;H+=3)d(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const E=new j,S=new j,w=new j,A=new j;function b(_){w.fromBufferAttribute(r,_),A.copy(w);const C=o[_];E.copy(C),E.sub(w.multiplyScalar(w.dot(C))).normalize(),S.crossVectors(A,C);const L=S.dot(c[_])<0?-1:1;a.setXYZW(_,E.x,E.y,E.z,L)}for(let _=0,C=g.length;_<C;++_){const P=g[_],L=P.start,O=P.count;for(let H=L,D=L+O;H<D;H+=3)b(e.getX(H+0)),b(e.getX(H+1)),b(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Ni(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new j,s=new j,a=new j,o=new j,c=new j,u=new j,h=new j,p=new j;if(e)for(let f=0,m=e.count;f<m;f+=3){const x=e.getX(f+0),M=e.getX(f+1),v=e.getX(f+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,M),a.fromBufferAttribute(n,v),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,x),c.fromBufferAttribute(i,M),u.fromBufferAttribute(i,v),o.add(h),c.add(h),u.add(h),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(v,u.x,u.y,u.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,c){const u=o.array,h=o.itemSize,p=o.normalized,f=new u.constructor(c.length*h);let m=0,x=0;for(let M=0,v=c.length;M<v;M++){o.isInterleavedBufferAttribute?m=c[M]*o.data.stride+o.offset:m=c[M]*h;for(let d=0;d<h;d++)f[x++]=u[m++]}return new Ni(f,h,p)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Xt,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let h=0,p=u.length;h<p;h++){const f=u[h],m=e(f,i);c.push(m)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let p=0,f=u.length;p<f;p++){const m=u[p];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],p=s[u];for(let f=0,m=p.length;f<m;f++)h.push(p[f].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hu=new j,mM=new j,gM=new Ye;class Zi{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=hu.subVectors(i,n).cross(mM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(hu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||gM.getNormalMatrix(e),r=this.coplanarPoint(hu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let xM=0;class Gr extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xM++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=ya,this.side=Fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mx,this.blendDst=Ex,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=BS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qc,this.stencilZFail=qc,this.stencilZPass=qc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Xe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Xe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new st().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Zi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new it().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Mi=new j,pu=new j,Po=new j,Lo=new j;class Mh{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,n),Mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){pu.copy(e).add(n).multiplyScalar(.5),Po.copy(n).sub(e).normalize(),Lo.copy(this.origin).sub(pu);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Po),o=Lo.dot(this.direction),c=-Lo.dot(Po),u=Lo.lengthSq(),h=Math.abs(1-a*a);let p,f,m,x;if(h>0)if(p=a*c-o,f=a*o-c,x=s*h,p>=0)if(f>=-x)if(f<=x){const M=1/h;p*=M,f*=M,m=p*(p+a*f+2*o)+f*(a*p+f+2*c)+u}else f=s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;else f=-s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;else f<=-x?(p=Math.max(0,-(-a*s+o)),f=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+u):f<=x?(p=0,f=Math.min(Math.max(-s,-c),s),m=f*(f+2*c)+u):(p=Math.max(0,-(a*s+o)),f=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+f*(f+2*c)+u);else f=a>0?-s:s,p=Math.max(0,-(a*f+o)),m=-p*p+f*(f+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(pu).addScaledVector(Po,f),m}intersectSphere(e,n){if(e.radius<0)return null;Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),h>=0?(s=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(o=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,c=o.x,u=o.y,h=o.z,p=e.x-a.x,f=e.y-a.y,m=e.z-a.z,x=n.x-a.x,M=n.y-a.y,v=n.z-a.z,d=i.x-a.x,g=i.y-a.y,E=i.z-a.z,S=Math.abs(c),w=Math.abs(u),A=Math.abs(h);let b,_,C,P,L,O,H,D,z,K,G,I;if(S>=w&&S>=A?(C=c,O=p,z=x,I=d,c>=0?(b=u,_=h,P=f,L=m,H=M,D=v,K=g,G=E):(b=h,_=u,P=m,L=f,H=v,D=M,K=E,G=g)):w>=A?(C=u,O=f,z=M,I=g,u>=0?(b=h,_=c,P=m,L=p,H=v,D=x,K=E,G=d):(b=c,_=h,P=p,L=m,H=x,D=v,K=d,G=E)):(C=h,O=m,z=v,I=E,h>=0?(b=c,_=u,P=p,L=f,H=x,D=M,K=d,G=g):(b=u,_=c,P=f,L=p,H=M,D=x,K=g,G=d)),C===0)return null;const U=b/C,B=_/C,q=1/C,de=P-U*O,he=L-B*O,$e=H-U*z,De=D-B*z,ze=K-U*I,Y=G-B*I,J=ze*De-Y*$e,ve=de*Y-he*ze,He=$e*he-De*de;if(r){if(J<0||ve<0||He<0)return null}else if((J<0||ve<0||He<0)&&(J>0||ve>0||He>0))return null;const ge=J+ve+He;if(ge===0)return null;const ne=q*(J*O+ve*z+He*I);return(ge>0?ne<0:ne>0)?null:this.at(ne/ge,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Eh extends Gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.combine=Tx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vm=new Et,_r=new Mh,Io=new to,_m=new j,Do=new j,Uo=new j,Fo=new j,mu=new j,Oo=new j,ym=new j,ko=new j;class Fn extends Vt{constructor(e=new Xt,n=new Eh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Oo.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=o[c],p=s[c];h!==0&&(mu.fromBufferAttribute(p,e),a?Oo.addScaledVector(mu,h):Oo.addScaledVector(mu.sub(n),h))}n.add(Oo)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(s),_r.copy(e.ray).recast(e.near),!(Io.containsPoint(_r.origin)===!1&&(_r.intersectSphere(Io,_m)===null||_r.origin.distanceToSquared(_m)>(e.far-e.near)**2))&&(vm.copy(s).invert(),_r.copy(e.ray).applyMatrix4(vm),!(i.boundingBox!==null&&_r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,_r)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=f.length;x<M;x++){const v=f[x],d=a[v.materialIndex],g=Math.max(v.start,m.start),E=Math.min(o.count,Math.min(v.start+v.count,m.start+m.count));for(let S=g,w=E;S<w;S+=3){const A=o.getX(S),b=o.getX(S+1),_=o.getX(S+2);r=Bo(this,d,e,i,u,h,p,A,b,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let v=x,d=M;v<d;v+=3){const g=o.getX(v),E=o.getX(v+1),S=o.getX(v+2);r=Bo(this,a,e,i,u,h,p,g,E,S),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let x=0,M=f.length;x<M;x++){const v=f[x],d=a[v.materialIndex],g=Math.max(v.start,m.start),E=Math.min(c.count,Math.min(v.start+v.count,m.start+m.count));for(let S=g,w=E;S<w;S+=3){const A=S,b=S+1,_=S+2;r=Bo(this,d,e,i,u,h,p,A,b,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=v.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),M=Math.min(c.count,m.start+m.count);for(let v=x,d=M;v<d;v+=3){const g=v,E=v+1,S=v+2;r=Bo(this,a,e,i,u,h,p,g,E,S),r&&(r.faceIndex=Math.floor(v/3),n.push(r))}}}}function vM(t,e,n,i,r,s,a,o){let c;if(e.side===un?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Fr,o),c===null)return null;ko.copy(o),ko.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ko);return u<n.near||u>n.far?null:{distance:u,point:ko.clone(),object:t}}function Bo(t,e,n,i,r,s,a,o,c,u){t.getVertexPosition(o,Do),t.getVertexPosition(c,Uo),t.getVertexPosition(u,Fo);const h=vM(t,e,n,i,Do,Uo,Fo,ym);if(h){const p=new j;qn.getBarycoord(ym,Do,Uo,Fo,p),r&&(h.uv=qn.getInterpolatedAttribute(r,o,c,u,p,new it)),s&&(h.uv1=qn.getInterpolatedAttribute(s,o,c,u,p,new it)),a&&(h.normal=qn.getInterpolatedAttribute(a,o,c,u,p,new j),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:u,normal:new j,materialIndex:0};qn.getNormal(Do,Uo,Fo,f.normal),h.face=f,h.barycoord=p}return h}class _M extends rn{constructor(e=null,n=1,i=1,r,s,a,o,c,u=Wt,h=Wt,p,f){super(null,a,o,c,u,h,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yr=new to,yM=new it(.5,.5),zo=new j;class Th{constructor(e=new Zi,n=new Zi,i=new Zi,r=new Zi,s=new Zi,a=new Zi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=di,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],u=s[3],h=s[4],p=s[5],f=s[6],m=s[7],x=s[8],M=s[9],v=s[10],d=s[11],g=s[12],E=s[13],S=s[14],w=s[15];if(r[0].setComponents(u-a,m-h,d-x,w-g).normalize(),r[1].setComponents(u+a,m+h,d+x,w+g).normalize(),r[2].setComponents(u+o,m+p,d+M,w+E).normalize(),r[3].setComponents(u-o,m-p,d-M,w-E).normalize(),i)r[4].setComponents(c,f,v,S).normalize(),r[5].setComponents(u-c,m-f,d-v,w-S).normalize();else if(r[4].setComponents(u-c,m-f,d-v,w-S).normalize(),n===di)r[5].setComponents(u+c,m+f,d+v,w+S).normalize();else if(n===ja)r[5].setComponents(c,f,v,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){yr.center.set(0,0,0);const n=yM.distanceTo(e.center);return yr.radius=.7071067811865476+n,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(zo.x=r.normal.x>0?e.max.x:e.min.x,zo.y=r.normal.y>0?e.max.y:e.min.y,zo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wh extends Gr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wl=new j,Xl=new j,Sm=new Et,na=new Mh,Ho=new to,gu=new j,Mm=new j;class xu extends Vt{constructor(e=new Xt,n=new wh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Wl.fromBufferAttribute(n,r-1),Xl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Wl.distanceTo(Xl);e.setAttribute("lineDistance",new $t(i,1))}else Xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ho.copy(i.boundingSphere),Ho.applyMatrix4(r),Ho.radius+=s,e.ray.intersectsSphere(Ho)===!1)return;Sm.copy(r).invert(),na.copy(e.ray).applyMatrix4(Sm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const m=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let M=m,v=x-1;M<v;M+=u){const d=h.getX(M),g=h.getX(M+1),E=Go(this,e,na,c,d,g,M);E&&n.push(E)}if(this.isLineLoop){const M=h.getX(x-1),v=h.getX(m),d=Go(this,e,na,c,M,v,x-1);d&&n.push(d)}}else{const m=Math.max(0,a.start),x=Math.min(f.count,a.start+a.count);for(let M=m,v=x-1;M<v;M+=u){const d=Go(this,e,na,c,M,M+1,M);d&&n.push(d)}if(this.isLineLoop){const M=Go(this,e,na,c,x-1,m,x-1);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Go(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(Wl.fromBufferAttribute(o,r),Xl.fromBufferAttribute(o,s),n.distanceSqToSegment(Wl,Xl,gu,Mm)>i)return;gu.applyMatrix4(t.matrixWorld);const u=e.ray.origin.distanceTo(gu);if(!(u<e.near||u>e.far))return{distance:u,point:Mm.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}class Wx extends Gr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Em=new Et,uf=new Mh,Vo=new to,jo=new j;class SM extends Vt{constructor(e=new Xt,n=new Wx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Vo.copy(i.boundingSphere),Vo.applyMatrix4(r),Vo.radius+=s,e.ray.intersectsSphere(Vo)===!1)return;Em.copy(r).invert(),uf.copy(e.ray).applyMatrix4(Em);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=i.index,p=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=f,M=m;x<M;x++){const v=u.getX(x);jo.fromBufferAttribute(p,v),Tm(jo,v,c,r,e,n,this)}}else{const f=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let x=f,M=m;x<M;x++)jo.fromBufferAttribute(p,x),Tm(jo,x,c,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Tm(t,e,n,i,r,s,a){const o=uf.distanceSqToPoint(t);if(o<n){const c=new j;uf.closestPointToPoint(t,c),c.applyMatrix4(i);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Xx extends rn{constructor(e=[],n=Or,i,r,s,a,o,c,u,h){super(e,n,i,r,s,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class MM extends rn{constructor(e,n,i,r,s,a,o,c,u){super(e,n,i,r,s,a,o,c,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wa extends rn{constructor(e,n,i=mi,r,s,a,o=Wt,c=Wt,u,h=Ui,p=1){if(h!==Ui&&h!==Cr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:p};super(f,r,s,a,o,c,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class EM extends Wa{constructor(e,n=mi,i=Or,r,s,a=Wt,o=Wt,c,u=Ui){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,c,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class qx extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class no extends Xt{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],h=[],p=[];let f=0,m=0;x("z","y","x",-1,-1,i,n,e,a,s,0),x("z","y","x",1,-1,i,n,-e,a,s,1),x("x","z","y",1,1,e,i,n,r,a,2),x("x","z","y",1,-1,e,i,-n,r,a,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(p,2));function x(M,v,d,g,E,S,w,A,b,_,C){const P=S/b,L=w/_,O=S/2,H=w/2,D=A/2,z=b+1,K=_+1;let G=0,I=0;const U=new j;for(let B=0;B<K;B++){const q=B*L-H;for(let de=0;de<z;de++){const he=de*P-O;U[M]=he*g,U[v]=q*E,U[d]=D,u.push(U.x,U.y,U.z),U[M]=0,U[v]=0,U[d]=A>0?1:-1,h.push(U.x,U.y,U.z),p.push(de/b),p.push(1-B/_),G+=1}}for(let B=0;B<_;B++)for(let q=0;q<b;q++){const de=f+q+z*B,he=f+q+z*(B+1),$e=f+(q+1)+z*(B+1),De=f+(q+1)+z*B;c.push(de,he,De),c.push(he,$e,De),I+=6}o.addGroup(m,I,C),m+=I,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class TM{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xe("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let a;n?a=n:a=e*i[s-1];let o=0,c=s-1,u;for(;o<=c;)if(r=Math.floor(o+(c-o)/2),u=i[r]-a,u<0)o=r+1;else if(u>0)c=r-1;else{c=r;break}if(r=c,i[r]===a)return r/(s-1);const h=i[r],f=i[r+1]-h,m=(a-h)/f;return(r+m)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),c=n||(a.isVector2?new it:new j);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new j,r=[],s=[],a=[],o=new j,c=new Et;for(let m=0;m<=e;m++){const x=m/e;r[m]=this.getTangentAt(x,new j)}s[0]=new j,a[0]=new j;let u=Number.MAX_VALUE;const h=Math.abs(r[0].x),p=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=u&&(u=h,i.set(1,0,0)),p<=u&&(u=p,i.set(0,1,0)),f<=u&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const x=Math.acos(nt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(c.makeRotationAxis(o,x))}a[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(nt(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(m=-m);for(let x=1;x<=e;x++)s[x].applyMatrix4(c.makeRotationAxis(r[x],m*x)),a[x].crossVectors(r[x],s[x])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class vu extends TM{constructor(e=0,n=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,n=new it){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=c-this.aX,m=u-this.aY;c=f*h-m*p+this.aX,u=f*p+m*h+this.aY}return i.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class fc extends Xt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),u=o+1,h=c+1,p=e/o,f=n/c,m=[],x=[],M=[],v=[];for(let d=0;d<h;d++){const g=d*f-a;for(let E=0;E<u;E++){const S=E*p-s;x.push(S,-g,0),M.push(0,0,1),v.push(E/o),v.push(1-d/c)}}for(let d=0;d<c;d++)for(let g=0;g<o;g++){const E=g+u*d,S=g+u*(d+1),w=g+1+u*(d+1),A=g+1+u*d;m.push(E,S,A),m.push(S,w,A)}this.setIndex(m),this.setAttribute("position",new $t(x,3)),this.setAttribute("normal",new $t(M,3)),this.setAttribute("uv",new $t(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ah extends Xt{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],c=[],u=[],h=[];let p=e;const f=(n-e)/r,m=new j,x=new it;for(let M=0;M<=r;M++){for(let v=0;v<=i;v++){const d=s+v/i*a;m.x=p*Math.cos(d),m.y=p*Math.sin(d),c.push(m.x,m.y,m.z),u.push(0,0,1),x.x=(m.x/n+1)/2,x.y=(m.y/n+1)/2,h.push(x.x,x.y)}p+=f}for(let M=0;M<r;M++){const v=M*(i+1);for(let d=0;d<i;d++){const g=d+v,E=g,S=g+i+1,w=g+i+2,A=g+1;o.push(E,S,A),o.push(S,w,A)}}this.setIndex(o),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ah(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ql extends Xt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let u=0;const h=[],p=new j,f=new j,m=[],x=[],M=[],v=[];for(let d=0;d<=i;d++){const g=[],E=d/i,S=a+E*o,w=e*Math.cos(S),A=Math.sqrt(e*e-w*w);let b=0;d===0&&a===0?b=.5/n:d===i&&c===Math.PI&&(b=-.5/n);for(let _=0;_<=n;_++){const C=_/n,P=r+C*s;p.x=-A*Math.cos(P),p.y=w,p.z=A*Math.sin(P),x.push(p.x,p.y,p.z),f.copy(p).normalize(),M.push(f.x,f.y,f.z),v.push(C+b,1-E),g.push(u++)}h.push(g)}for(let d=0;d<i;d++)for(let g=0;g<n;g++){const E=h[d][g+1],S=h[d][g],w=h[d+1][g],A=h[d+1][g+1];(d!==0||a>0)&&m.push(E,S,A),(d!==i-1||c<Math.PI)&&m.push(S,w,A)}this.setIndex(m),this.setAttribute("position",new $t(x,3)),this.setAttribute("normal",new $t(M,3)),this.setAttribute("uv",new $t(v,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Os(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(wm(r))r.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(wm(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=Os(t[n]);for(const r in i)e[r]=i[r]}return e}function wm(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function wM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function $x(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const AM={clone:Os,merge:on};var bM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,CM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends Gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bM,this.fragmentShader=CM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=wM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new st().setHex(r.value);break;case"v2":this.uniforms[i].value=new it().fromArray(r.value);break;case"v3":this.uniforms[i].value=new j().fromArray(r.value);break;case"v4":this.uniforms[i].value=new At().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Et().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class RM extends Jn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class NM extends Gr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lf,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class PM extends Gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LM extends Gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Am extends wh{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class Yx extends Vt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const _u=new Et,bm=new j,Cm=new j;class IM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Th,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;bm.setFromMatrixPosition(e.matrixWorld),n.position.copy(bm),Cm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Cm),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){_u.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(_u,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===ja||e.reversedDepth?n.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+u,0,0,.5,.5,0,0,0,1),n.multiply(_u)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Wo=new j,Xo=new Hs,ii=new j;class Zx extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wo,Xo,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wo,Xo,ii.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Wo,Xo,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wo,Xo,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new j,Rm=new it,Nm=new it;class In extends Zx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=cf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cf*2*Math.atan(Math.tan($c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,n){return this.getViewBounds(e,Rm,Nm),n.subVectors(Nm,Rm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan($c*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class bh extends Zx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class DM extends IM{constructor(){super(new bh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pm extends Yx{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new DM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class UM extends Yx{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ns=-90,is=1;class FM extends Vt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new In(ns,is,e,n);r.layers=this.layers,this.add(r);const s=new In(ns,is,e,n);s.layers=this.layers,this.add(s);const a=new In(ns,is,e,n);a.layers=this.layers,this.add(a);const o=new In(ns,is,e,n);o.layers=this.layers,this.add(o);const c=new In(ns,is,e,n);c.layers=this.layers,this.add(c);const u=new In(ns,is,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const u of n)this.remove(u);if(e===di)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ja)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;e.isWebGLRenderer===!0?v=e.state.buffers.depth.getReversed():v=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),v&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(p,f,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class OM extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Lh=class Lh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Lh.prototype.isMatrix2=!0;let Lm=Lh;function Im(t,e,n,i){const r=kM(i);switch(n){case Fx:return t*e;case kx:return t*e/r.components*r.byteLength;case gh:return t*e/r.components*r.byteLength;case kr:return t*e*2/r.components*r.byteLength;case xh:return t*e*2/r.components*r.byteLength;case Ox:return t*e*3/r.components*r.byteLength;case $n:return t*e*4/r.components*r.byteLength;case vh:return t*e*4/r.components*r.byteLength;case ll:case cl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ul:case dl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ld:case Dd:return Math.max(t,16)*Math.max(e,8)/4;case Pd:case Id:return Math.max(t,8)*Math.max(e,8)/2;case Ud:case Fd:case kd:case Bd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Od:case zl:case zd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case jd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Wd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Xd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case qd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case $d:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Yd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Qd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Jd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case ef:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case tf:case nf:case rf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case sf:case af:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Hl:case of:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function kM(t){switch(t){case Mn:case Lx:return{byteLength:1,components:1};case Ga:case Ix:case gi:return{byteLength:2,components:1};case ph:case mh:return{byteLength:2,components:4};case mi:case hh:case ui:return{byteLength:4,components:1};case Dx:case Ux:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dh}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kx(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function BM(t){const e=new WeakMap;function n(o,c){const u=o.array,h=o.usage,p=u.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,u,h),o.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,c,u){const h=c.array,p=c.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,h);else{p.sort((m,x)=>m.start-x.start);let f=0;for(let m=1;m<p.length;m++){const x=p[f],M=p[m];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++f,p[f]=M)}p.length=f+1;for(let m=0,x=p.length;m<x;m++){const M=p[m];t.bufferSubData(u,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}var zM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,GM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,XM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,qM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$M=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,YM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,JM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,e1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,n1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,i1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,r1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,s1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,a1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,o1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,l1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,c1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,u1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,d1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,f1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,h1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,p1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,m1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g1="gl_FragColor = linearToOutputTexel( gl_FragColor );",x1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,v1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,_1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,y1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,S1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,E1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,T1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,w1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,b1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,C1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,L1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,I1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,U1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,k1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,B1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,z1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,H1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,V1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,W1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Z1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,iE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,sE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,aE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,gE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,SE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ME=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,wE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,AE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,CE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,NE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,DE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,UE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,BE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,$E=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,YE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,ZE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,sT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,oT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_T=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:zM,alphahash_pars_fragment:HM,alphamap_fragment:GM,alphamap_pars_fragment:VM,alphatest_fragment:jM,alphatest_pars_fragment:WM,aomap_fragment:XM,aomap_pars_fragment:qM,batching_pars_vertex:$M,batching_vertex:YM,begin_vertex:ZM,beginnormal_vertex:KM,bsdfs:QM,iridescence_fragment:JM,bumpmap_pars_fragment:e1,clipping_planes_fragment:t1,clipping_planes_pars_fragment:n1,clipping_planes_pars_vertex:i1,clipping_planes_vertex:r1,color_fragment:s1,color_pars_fragment:a1,color_pars_vertex:o1,color_vertex:l1,common:c1,cube_uv_reflection_fragment:u1,defaultnormal_vertex:d1,displacementmap_pars_vertex:f1,displacementmap_vertex:h1,emissivemap_fragment:p1,emissivemap_pars_fragment:m1,colorspace_fragment:g1,colorspace_pars_fragment:x1,envmap_fragment:v1,envmap_common_pars_fragment:_1,envmap_pars_fragment:y1,envmap_pars_vertex:S1,envmap_physical_pars_fragment:L1,envmap_vertex:M1,fog_vertex:E1,fog_pars_vertex:T1,fog_fragment:w1,fog_pars_fragment:A1,gradientmap_pars_fragment:b1,lightmap_pars_fragment:C1,lights_lambert_fragment:R1,lights_lambert_pars_fragment:N1,lights_pars_begin:P1,lights_toon_fragment:I1,lights_toon_pars_fragment:D1,lights_phong_fragment:U1,lights_phong_pars_fragment:F1,lights_physical_fragment:O1,lights_physical_pars_fragment:k1,lights_fragment_begin:B1,lights_fragment_maps:z1,lights_fragment_end:H1,lightprobes_pars_fragment:G1,logdepthbuf_fragment:V1,logdepthbuf_pars_fragment:j1,logdepthbuf_pars_vertex:W1,logdepthbuf_vertex:X1,map_fragment:q1,map_pars_fragment:$1,map_particle_fragment:Y1,map_particle_pars_fragment:Z1,metalnessmap_fragment:K1,metalnessmap_pars_fragment:Q1,morphinstance_vertex:J1,morphcolor_vertex:eE,morphnormal_vertex:tE,morphtarget_pars_vertex:nE,morphtarget_vertex:iE,normal_fragment_begin:rE,normal_fragment_maps:sE,normal_pars_fragment:aE,normal_pars_vertex:oE,normal_vertex:lE,normalmap_pars_fragment:cE,clearcoat_normal_fragment_begin:uE,clearcoat_normal_fragment_maps:dE,clearcoat_pars_fragment:fE,iridescence_pars_fragment:hE,opaque_fragment:pE,packing:mE,premultiplied_alpha_fragment:gE,project_vertex:xE,dithering_fragment:vE,dithering_pars_fragment:_E,roughnessmap_fragment:yE,roughnessmap_pars_fragment:SE,shadowmap_pars_fragment:ME,shadowmap_pars_vertex:EE,shadowmap_vertex:TE,shadowmask_pars_fragment:wE,skinbase_vertex:AE,skinning_pars_vertex:bE,skinning_vertex:CE,skinnormal_vertex:RE,specularmap_fragment:NE,specularmap_pars_fragment:PE,tonemapping_fragment:LE,tonemapping_pars_fragment:IE,transmission_fragment:DE,transmission_pars_fragment:UE,uv_pars_fragment:FE,uv_pars_vertex:OE,uv_vertex:kE,worldpos_vertex:BE,background_vert:zE,background_frag:HE,backgroundCube_vert:GE,backgroundCube_frag:VE,cube_vert:jE,cube_frag:WE,depth_vert:XE,depth_frag:qE,distance_vert:$E,distance_frag:YE,equirect_vert:ZE,equirect_frag:KE,linedashed_vert:QE,linedashed_frag:JE,meshbasic_vert:eT,meshbasic_frag:tT,meshlambert_vert:nT,meshlambert_frag:iT,meshmatcap_vert:rT,meshmatcap_frag:sT,meshnormal_vert:aT,meshnormal_frag:oT,meshphong_vert:lT,meshphong_frag:cT,meshphysical_vert:uT,meshphysical_frag:dT,meshtoon_vert:fT,meshtoon_frag:hT,points_vert:pT,points_frag:mT,shadow_vert:gT,shadow_frag:xT,sprite_vert:vT,sprite_frag:_T},Te={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new j},probesMax:{value:new j},probesResolution:{value:new j}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ai={basic:{uniforms:on([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:on([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new st(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:on([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:on([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:on([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new st(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:on([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:on([Te.points,Te.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:on([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:on([Te.common,Te.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:on([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:on([Te.sprite,Te.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:on([Te.common,Te.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:on([Te.lights,Te.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ai.physical={uniforms:on([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const qo={r:0,b:0,g:0},yT=new Et,Qx=new Ye;Qx.set(-1,0,0,0,1,0,0,0,1);function ST(t,e,n,i,r,s){const a=new st(0);let o=r===!0?0:1,c,u,h=null,p=0,f=null;function m(g){let E=g.isScene===!0?g.background:null;if(E&&E.isTexture){const S=g.backgroundBlurriness>0;E=e.get(E,S)}return E}function x(g){let E=!1;const S=m(g);S===null?v(a,o):S&&S.isColor&&(v(S,1),E=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(g,E){const S=m(E);S&&(S.isCubeTexture||S.mapping===dc)?(u===void 0&&(u=new Fn(new no(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:Os(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(yT.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Qx),u.material.toneMapped=ot.getTransfer(S.colorSpace)!==ht,(h!==S||p!==S.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,h=S,p=S.version,f=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Fn(new fc(2,2),new Jn({name:"BackgroundMaterial",uniforms:Os(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Fr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=ot.getTransfer(S.colorSpace)!==ht,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||p!==S.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,p=S.version,f=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function v(g,E){g.getRGB(qo,$x(t)),n.buffers.color.setClear(qo.r,qo.g,qo.b,E,s)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(g,E=1){a.set(g),o=E,v(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(g){o=g,v(a,o)},render:x,addToRenderList:M,dispose:d}}function MT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(L,O,H,D,z){let K=!1;const G=p(L,D,H,O);s!==G&&(s=G,u(s.object)),K=m(L,D,H,z),K&&x(L,D,H,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,S(L,O,H,D),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return t.createVertexArray()}function u(L){return t.bindVertexArray(L)}function h(L){return t.deleteVertexArray(L)}function p(L,O,H,D){const z=D.wireframe===!0;let K=i[O.id];K===void 0&&(K={},i[O.id]=K);const G=L.isInstancedMesh===!0?L.id:0;let I=K[G];I===void 0&&(I={},K[G]=I);let U=I[H.id];U===void 0&&(U={},I[H.id]=U);let B=U[z];return B===void 0&&(B=f(c()),U[z]=B),B}function f(L){const O=[],H=[],D=[];for(let z=0;z<n;z++)O[z]=0,H[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:D,object:L,attributes:{},index:null}}function m(L,O,H,D){const z=s.attributes,K=O.attributes;let G=0;const I=H.getAttributes();for(const U in I)if(I[U].location>=0){const q=z[U];let de=K[U];if(de===void 0&&(U==="instanceMatrix"&&L.instanceMatrix&&(de=L.instanceMatrix),U==="instanceColor"&&L.instanceColor&&(de=L.instanceColor)),q===void 0||q.attribute!==de||de&&q.data!==de.data)return!0;G++}return s.attributesNum!==G||s.index!==D}function x(L,O,H,D){const z={},K=O.attributes;let G=0;const I=H.getAttributes();for(const U in I)if(I[U].location>=0){let q=K[U];q===void 0&&(U==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),U==="instanceColor"&&L.instanceColor&&(q=L.instanceColor));const de={};de.attribute=q,q&&q.data&&(de.data=q.data),z[U]=de,G++}s.attributes=z,s.attributesNum=G,s.index=D}function M(){const L=s.newAttributes;for(let O=0,H=L.length;O<H;O++)L[O]=0}function v(L){d(L,0)}function d(L,O){const H=s.newAttributes,D=s.enabledAttributes,z=s.attributeDivisors;H[L]=1,D[L]===0&&(t.enableVertexAttribArray(L),D[L]=1),z[L]!==O&&(t.vertexAttribDivisor(L,O),z[L]=O)}function g(){const L=s.newAttributes,O=s.enabledAttributes;for(let H=0,D=O.length;H<D;H++)O[H]!==L[H]&&(t.disableVertexAttribArray(H),O[H]=0)}function E(L,O,H,D,z,K,G){G===!0?t.vertexAttribIPointer(L,O,H,z,K):t.vertexAttribPointer(L,O,H,D,z,K)}function S(L,O,H,D){M();const z=D.attributes,K=H.getAttributes(),G=O.defaultAttributeValues;for(const I in K){const U=K[I];if(U.location>=0){let B=z[I];if(B===void 0&&(I==="instanceMatrix"&&L.instanceMatrix&&(B=L.instanceMatrix),I==="instanceColor"&&L.instanceColor&&(B=L.instanceColor)),B!==void 0){const q=B.normalized,de=B.itemSize,he=e.get(B);if(he===void 0)continue;const $e=he.buffer,De=he.type,ze=he.bytesPerElement,Y=De===t.INT||De===t.UNSIGNED_INT||B.gpuType===hh;if(B.isInterleavedBufferAttribute){const J=B.data,ve=J.stride,He=B.offset;if(J.isInstancedInterleavedBuffer){for(let ge=0;ge<U.locationSize;ge++)d(U.location+ge,J.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ge=0;ge<U.locationSize;ge++)v(U.location+ge);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let ge=0;ge<U.locationSize;ge++)E(U.location+ge,de/U.locationSize,De,q,ve*ze,(He+de/U.locationSize*ge)*ze,Y)}else{if(B.isInstancedBufferAttribute){for(let J=0;J<U.locationSize;J++)d(U.location+J,B.meshPerAttribute);L.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let J=0;J<U.locationSize;J++)v(U.location+J);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let J=0;J<U.locationSize;J++)E(U.location+J,de/U.locationSize,De,q,de*ze,de/U.locationSize*J*ze,Y)}}else if(G!==void 0){const q=G[I];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(U.location,q);break;case 3:t.vertexAttrib3fv(U.location,q);break;case 4:t.vertexAttrib4fv(U.location,q);break;default:t.vertexAttrib1fv(U.location,q)}}}}g()}function w(){C();for(const L in i){const O=i[L];for(const H in O){const D=O[H];for(const z in D){const K=D[z];for(const G in K)h(K[G].object),delete K[G];delete D[z]}}delete i[L]}}function A(L){if(i[L.id]===void 0)return;const O=i[L.id];for(const H in O){const D=O[H];for(const z in D){const K=D[z];for(const G in K)h(K[G].object),delete K[G];delete D[z]}}delete i[L.id]}function b(L){for(const O in i){const H=i[O];for(const D in H){const z=H[D];if(z[L.id]===void 0)continue;const K=z[L.id];for(const G in K)h(K[G].object),delete K[G];delete z[L.id]}}}function _(L){for(const O in i){const H=i[O],D=L.isInstancedMesh===!0?L.id:0,z=H[D];if(z!==void 0){for(const K in z){const G=z[K];for(const I in G)h(G[I].object),delete G[I];delete z[K]}delete H[D],Object.keys(H).length===0&&delete i[O]}}}function C(){P(),a=!0,s!==r&&(s=r,u(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:b,initAttributes:M,enableAttribute:v,disableUnusedAttributes:g}}function ET(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function TT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(b){return!(b!==$n&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const _=b===gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Mn&&b!==ui&&!_&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function c(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=c(u);h!==u&&(Xe("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:v,maxAttributes:d,maxVertexUniforms:g,maxVaryings:E,maxFragmentUniforms:S,maxSamples:w,samples:A}}function wT(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Zi,o=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){const m=p.length!==0||f||i!==0||r;return r=f,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){n=h(p,f,0)},this.setState=function(p,f,m){const x=p.clippingPlanes,M=p.clipIntersection,v=p.clipShadows,d=t.get(p);if(!r||x===null||x.length===0||s&&!v)s?h(null):u();else{const g=s?0:i,E=g*4;let S=d.clippingState||null;c.value=S,S=h(x,f,E,m);for(let w=0;w!==E;++w)S[w]=n[w];d.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=g}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,f,m,x){const M=p!==null?p.length:0;let v=null;if(M!==0){if(v=c.value,x!==!0||v===null){const d=m+M*4,g=f.matrixWorldInverse;o.getNormalMatrix(g),(v===null||v.length<d)&&(v=new Float32Array(d));for(let E=0,S=m;E!==M;++E,S+=4)a.copy(p[E]).applyMatrix4(g,o),a.normal.toArray(v,S),v[S+3]=a.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,v}}const _s=4,AT=6,bT=20,CT=256,ia=new bh,Dm=new st;let yu=null,Su=0,Mu=0,Eu=!1;const RT=new j,Sr=new j;class Um{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=RT}=s;yu=this._renderer.getRenderTarget(),Su=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=km(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Om(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yu,Su,Mu),this._renderer.xr.enabled=Eu,e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Or||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yu=this._renderer.getRenderTarget(),Su=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:gi,format:$n,colorSpace:Gl,depthBuffer:!1},r=Fm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=NT(s)),this._blurMaterial=LT(s,e,n),this._ggxMaterial=PT(s,e,n)}return r}_compileMaterial(e){const n=new Fn(new Xt,e);this._renderer.compile(n,ia)}_sceneToCubeUV(e,n,i,r,s){const c=new In(90,1,n,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,f=p.autoClear,m=p.toneMapping;p.getClearColor(Dm),p.toneMapping=pi,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fn(new no,new Eh({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,v=M.material;let d=!1;const g=e.background;g?g.isColor&&(v.color.copy(g),e.background=null,d=!0):(v.color.copy(Dm),d=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(c.up.set(0,u[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[E],s.y,s.z)):S===1?(c.up.set(0,0,u[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[E],s.z)):(c.up.set(0,u[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[E]));const w=this._cubeSize;rs(r,S*w,E>2?w:0,w,w),p.setRenderTarget(r),d&&p.render(M,c),p.render(e,c)}p.toneMapping=m,p.autoClear=f,e.background=g}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Or||e.mapping===Fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=km()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Om());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;rs(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,ia)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,u=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(u*u-h*h),f=u*1.25,m=p*f,{_lodMax:x}=this,M=this._sizeLods[i],v=3*M*(i>x-_s?i-x+_s:0),d=4*(this._cubeSize-M);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=x-n,rs(s,v,d,3*M,2*M),r.setRenderTarget(s),r.render(o,ia),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=x-i,rs(e,v,d,3*M,2*M),r.setRenderTarget(e),r.render(o,ia)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,n,i,r,s){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;const u=o.uniforms;u.envMap.value=e.texture,u.sigma.value=s,u.mipInt.value=this._lodMax-i;const h=this._sizeLods[r],p=3*h*(r>this._lodMax-_s?r-this._lodMax+_s:0),f=4*(this._cubeSize-h);rs(n,p,f,3*h,2*h),a.setRenderTarget(n),a.render(c,ia)}}function NT(t){const e=[],n=[];let i=t;const r=t-_s+1+AT;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),c=-o,u=1+o,h=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,f=6,m=3,x=new Float32Array(m*f*p),M=new Float32Array(m*f*p);for(let d=0;d<p;d++){const g=d%3*2/3-1,E=d>2?0:-1,S=[g,E,0,g+2/3,E,0,g+2/3,E+1,0,g,E,0,g+2/3,E+1,0,g,E+1,0];x.set(S,m*f*d);for(let w=0;w<f;w++){const A=h[w*2]*2-1,b=h[w*2+1]*2-1;d===0?Sr.set(1,b,A):d===1?Sr.set(-A,1,-b):d===2?Sr.set(-A,b,1):d===3?Sr.set(-1,b,-A):d===4?Sr.set(-A,-1,b):Sr.set(A,b,-1),Sr.toArray(M,(d*f+w)*m)}}const v=new Xt;v.setAttribute("position",new Ni(x,m)),v.setAttribute("outputDirection",new Ni(M,m)),n.push(new Fn(v,null)),i>_s&&i--}return{lodMeshes:n,sizeLods:e}}function Fm(t,e,n){const i=new Kn(t,e,n);return i.texture.mapping=dc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function rs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function PT(t,e,n){return new Jn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:CT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function LT(t,e,n){return new Jn({name:"SphericalGaussianBlur",defines:{SAMPLES:bT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:hc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Om(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function km(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function hc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Jx extends Kn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Xx(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new no(5,5,5),s=new Jn({name:"CubemapFromEquirect",uniforms:Os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Ci});s.uniforms.tEquirect.value=n;const a=new Fn(r,s),o=n.minFilter;return n.minFilter===br&&(n.minFilter=nn),new FM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function IT(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,m=!1){return f==null?null:m?a(f):s(f)}function s(f){if(f&&f.isTexture){const m=f.mapping;if(m===jc||m===Wc)if(e.has(f)){const x=e.get(f).texture;return o(x,f.mapping)}else{const x=f.image;if(x&&x.height>0){const M=new Jx(x.height);return M.fromEquirectangularTexture(t,f),e.set(f,M),f.addEventListener("dispose",u),o(M.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const m=f.mapping,x=m===jc||m===Wc,M=m===Or||m===Fs;if(x||M){let v=n.get(f);const d=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return i===null&&(i=new Um(t)),v=x?i.fromEquirectangular(f,v):i.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,n.set(f,v),v.texture;if(v!==void 0)return v.texture;{const g=f.image;return x&&g&&g.height>0||M&&g&&c(g)?(i===null&&(i=new Um(t)),v=x?i.fromEquirectangular(f):i.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,n.set(f,v),f.addEventListener("dispose",h),v.texture):null}}}return f}function o(f,m){return m===jc?f.mapping=Or:m===Wc&&(f.mapping=Fs),f}function c(f){let m=0;const x=6;for(let M=0;M<x;M++)f[M]!==void 0&&m++;return m===x}function u(f){const m=f.target;m.removeEventListener("dispose",u);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function h(f){const m=f.target;m.removeEventListener("dispose",h);const x=n.get(m);x!==void 0&&(n.delete(m),x.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function DT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&As("WebGLRenderer: "+i+" extension not supported."),r}}}function UT(t,e,n,i){const r={},s=new WeakMap;function a(p){const f=p.target;f.index!==null&&e.remove(f.index);for(const x in f.attributes)e.remove(f.attributes[x]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(p,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function c(p){const f=p.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER)}function u(p){const f=[],m=p.index,x=p.attributes.position;let M=0;if(x===void 0)return;if(m!==null){const g=m.array;M=m.version;for(let E=0,S=g.length;E<S;E+=3){const w=g[E+0],A=g[E+1],b=g[E+2];f.push(w,A,A,b,b,w)}}else{const g=x.array;M=x.version;for(let E=0,S=g.length/3-1;E<S;E+=3){const w=E+0,A=E+1,b=E+2;f.push(w,A,A,b,b,w)}}const v=new(x.count>=65535?jx:Vx)(f,1);v.version=M;const d=s.get(p);d&&e.remove(d),s.set(p,v)}function h(p){const f=s.get(p);if(f){const m=p.index;m!==null&&f.version<m.version&&u(p)}else u(p);return s.get(p)}return{get:o,update:c,getWireframeAttribute:h}}function FT(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,f){t.drawElements(i,f,s,p*a),n.update(f,i,1)}function u(p,f,m){m!==0&&(t.drawElementsInstanced(i,f,s,p*a,m),n.update(f,i,m))}function h(p,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,p,0,m);let M=0;for(let v=0;v<m;v++)M+=f[v];n.update(M,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function OT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:ut("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function kT(t,e,n){const i=new WeakMap,r=new At;function s(a,o,c){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==p){let P=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var m=P;f!==void 0&&f.texture.dispose();const x=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let S=0;x===!0&&(S=1),M===!0&&(S=2),v===!0&&(S=3);let w=o.attributes.position.count*S,A=1;w>e.maxTextureSize&&(A=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const b=new Float32Array(w*A*4*p),_=new zx(b,w,A,p);_.type=ui,_.needsUpdate=!0;const C=S*4;for(let L=0;L<p;L++){const O=d[L],H=g[L],D=E[L],z=w*A*4*L;for(let K=0;K<O.count;K++){const G=K*C;x===!0&&(r.fromBufferAttribute(O,K),b[z+G+0]=r.x,b[z+G+1]=r.y,b[z+G+2]=r.z,b[z+G+3]=0),M===!0&&(r.fromBufferAttribute(H,K),b[z+G+4]=r.x,b[z+G+5]=r.y,b[z+G+6]=r.z,b[z+G+7]=0),v===!0&&(r.fromBufferAttribute(D,K),b[z+G+8]=r.x,b[z+G+9]=r.y,b[z+G+10]=r.z,b[z+G+11]=D.itemSize===4?r.w:1)}}f={count:p,texture:_,size:new it(w,A)},i.set(o,f),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let x=0;for(let v=0;v<u.length;v++)x+=u[v];const M=o.morphTargetsRelative?1:1-x;c.getUniforms().setValue(t,"morphTargetBaseInfluence",M),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function BT(t,e,n,i,r){let s=new WeakMap;function a(u){const h=r.render.frame,p=u.geometry,f=e.get(u,p);if(s.get(f)!==h&&(e.update(f),s.set(f,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==h&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return f}function o(){s=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const zT={[wx]:"LINEAR_TONE_MAPPING",[Ax]:"REINHARD_TONE_MAPPING",[bx]:"CINEON_TONE_MAPPING",[fh]:"ACES_FILMIC_TONE_MAPPING",[Rx]:"AGX_TONE_MAPPING",[Nx]:"NEUTRAL_TONE_MAPPING",[Cx]:"CUSTOM_TONE_MAPPING"};function HT(t,e,n,i,r,s){const a=new Kn(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const u=new Xt;u.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new $t([0,2,0,0,2,0],2));const h=new RM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Fn(u,h),f=new bh(-1,1,1,-1,0,1);let m=null,x=null,M=!1,v,d=null,g=[],E=!1;this.setSize=function(S,w){a.setSize(S,w),o!==null&&o.setSize(S,w),c!==null&&c.setSize(S,w);for(let A=0;A<g.length;A++){const b=g[A];b.setSize&&b.setSize(S,w)}},this.setEffects=function(S){g=S,E=g.length>0&&g[0].isRenderPass===!0;const w=a.width,A=a.height;g.length>0&&o===null&&(o=new Kn(w,A,{type:gi,depthBuffer:!1,stencilBuffer:!1}),c=new Kn(w,A,{type:gi,depthBuffer:!1,stencilBuffer:!1}));for(let b=0;b<g.length;b++){const _=g[b];_.setSize&&_.setSize(w,A)}},this.begin=function(S,w){if(M||S.toneMapping===pi&&g.length===0)return!1;if(d=w,w!==null){const A=w.width,b=w.height;(a.width!==A||a.height!==b)&&this.setSize(A,b)}return E===!1&&S.setRenderTarget(a),v=S.toneMapping,S.toneMapping=pi,!0},this.hasRenderPass=function(){return E},this.end=function(S,w){S.toneMapping=v,M=!0;let A=a,b=o;for(let _=0;_<g.length;_++){const C=g[_];C.enabled!==!1&&(C.render(S,b,A,w),C.needsSwap!==!1&&(A=b,b=b===o?c:o))}if(m!==S.outputColorSpace||x!==S.toneMapping){m=S.outputColorSpace,x=S.toneMapping,h.defines={},ot.getTransfer(m)===ht&&(h.defines.SRGB_TRANSFER="");const _=zT[x];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=A.texture,S.setRenderTarget(d),S.render(p,f),d=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),h.dispose()}}const ev=new rn,df=new Wa(1,1),tv=new zx,nv=new iM,iv=new Xx,Bm=[],zm=[],Hm=new Float32Array(16),Gm=new Float32Array(9),Vm=new Float32Array(4);function Gs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Bm[r];if(s===void 0&&(s=new Float32Array(r),Bm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function pc(t,e){let n=zm[e];n===void 0&&(n=new Int32Array(e),zm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function GT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function VT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function jT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function WT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function XT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;Vm.set(i),t.uniformMatrix2fv(this.addr,!1,Vm),kt(n,i)}}function qT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;Gm.set(i),t.uniformMatrix3fv(this.addr,!1,Gm),kt(n,i)}}function $T(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Ot(n,i))return;Hm.set(i),t.uniformMatrix4fv(this.addr,!1,Hm),kt(n,i)}}function YT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ZT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function KT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function QT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function JT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function iw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(df.compareFunction=n.isReversedDepthBuffer()?yh:_h,s=df):s=ev,n.setTexture2D(e||s,r)}function rw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||nv,r)}function sw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||iv,r)}function aw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||tv,r)}function ow(t){switch(t){case 5126:return GT;case 35664:return VT;case 35665:return jT;case 35666:return WT;case 35674:return XT;case 35675:return qT;case 35676:return $T;case 5124:case 35670:return YT;case 35667:case 35671:return ZT;case 35668:case 35672:return KT;case 35669:case 35673:return QT;case 5125:return JT;case 36294:return ew;case 36295:return tw;case 36296:return nw;case 35678:case 36198:case 36298:case 36306:case 35682:return iw;case 35679:case 36299:case 36307:return rw;case 35680:case 36300:case 36308:case 36293:return sw;case 36289:case 36303:case 36311:case 36292:return aw}}function lw(t,e){t.uniform1fv(this.addr,e)}function cw(t,e){const n=Gs(e,this.size,2);t.uniform2fv(this.addr,n)}function uw(t,e){const n=Gs(e,this.size,3);t.uniform3fv(this.addr,n)}function dw(t,e){const n=Gs(e,this.size,4);t.uniform4fv(this.addr,n)}function fw(t,e){const n=Gs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function hw(t,e){const n=Gs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function pw(t,e){const n=Gs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function mw(t,e){t.uniform1iv(this.addr,e)}function gw(t,e){t.uniform2iv(this.addr,e)}function xw(t,e){t.uniform3iv(this.addr,e)}function vw(t,e){t.uniform4iv(this.addr,e)}function _w(t,e){t.uniform1uiv(this.addr,e)}function yw(t,e){t.uniform2uiv(this.addr,e)}function Sw(t,e){t.uniform3uiv(this.addr,e)}function Mw(t,e){t.uniform4uiv(this.addr,e)}function Ew(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=df:a=ev;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function Tw(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||nv,s[a])}function ww(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||iv,s[a])}function Aw(t,e,n){const i=this.cache,r=e.length,s=pc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||tv,s[a])}function bw(t){switch(t){case 5126:return lw;case 35664:return cw;case 35665:return uw;case 35666:return dw;case 35674:return fw;case 35675:return hw;case 35676:return pw;case 5124:case 35670:return mw;case 35667:case 35671:return gw;case 35668:case 35672:return xw;case 35669:case 35673:return vw;case 5125:return _w;case 36294:return yw;case 36295:return Sw;case 36296:return Mw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ew;case 35679:case 36299:case 36307:return Tw;case 35680:case 36300:case 36308:case 36293:return ww;case 36289:case 36303:case 36311:case 36292:return Aw}}class Cw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ow(n.type)}}class Rw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bw(n.type)}}class Nw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Tu=/(\w+)(\])?(\[|\.)?/g;function jm(t,e){t.seq.push(e),t.map[e.id]=e}function Pw(t,e,n){const i=t.name,r=i.length;for(Tu.lastIndex=0;;){const s=Tu.exec(i),a=Tu.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){jm(n,u===void 0?new Cw(o,t,e):new Rw(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new Nw(o),jm(n,p)),n=p}}}class fl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),c=e.getUniformLocation(n,o.name);Pw(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Wm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Lw=37297;let Iw=0;function Dw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Xm=new Ye;function Uw(t){ot._getMatrix(Xm,ot.workingColorSpace,t);const e=`mat3( ${Xm.elements.map(n=>n.toFixed(4))} )`;switch(ot.getTransfer(t)){case Vl:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function qm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Dw(t.getShaderSource(e),o)}else return s}function Fw(t,e){const n=Uw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Ow={[wx]:"Linear",[Ax]:"Reinhard",[bx]:"Cineon",[fh]:"ACESFilmic",[Rx]:"AgX",[Nx]:"Neutral",[Cx]:"Custom"};function kw(t,e){const n=Ow[e];return n===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const $o=new j;function Bw(){ot.getLuminanceCoefficients($o);const t=$o.x.toFixed(4),e=$o.y.toFixed(4),n=$o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function Hw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Gw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ua(t){return t!==""}function $m(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ym(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vw=/^[ \t]*#include +<([\w\d./]+)>/gm;function ff(t){return t.replace(Vw,Ww)}const jw=new Map;function Ww(t,e){let n=et[e];if(n===void 0){const i=jw.get(e);if(i!==void 0)n=et[i],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ff(n)}const Xw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zm(t){return t.replace(Xw,qw)}function qw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Km(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const $w={[ol]:"SHADOWMAP_TYPE_PCF",[ca]:"SHADOWMAP_TYPE_VSM"};function Yw(t){return $w[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Zw={[Or]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE",[dc]:"ENVMAP_TYPE_CUBE_UV"};function Kw(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Zw[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const Qw={[Fs]:"ENVMAP_MODE_REFRACTION"};function Jw(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Qw[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eA={[Tx]:"ENVMAP_BLENDING_MULTIPLY",[DS]:"ENVMAP_BLENDING_MIX",[US]:"ENVMAP_BLENDING_ADD"};function tA(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":eA[t.combine]||"ENVMAP_BLENDING_NONE"}function nA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function iA(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=Yw(n),u=Kw(n),h=Jw(n),p=tA(n),f=nA(n),m=zw(n),x=Hw(s),M=r.createProgram();let v,d,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ua).join(`
`),v.length>0&&(v+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(ua).join(`
`),d.length>0&&(d+=`
`)):(v=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),d=[Km(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==pi?"#define TONE_MAPPING":"",n.toneMapping!==pi?et.tonemapping_pars_fragment:"",n.toneMapping!==pi?kw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,Fw("linearToOutputTexel",n.outputColorSpace),Bw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ua).join(`
`)),a=ff(a),a=$m(a,n),a=Ym(a,n),o=ff(o),o=$m(o,n),o=Ym(o,n),a=Zm(a),o=Zm(o),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,v=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,d=["#define varying in",n.glslVersion===rm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===rm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=g+v+a,S=g+d+o,w=Wm(r,r.VERTEX_SHADER,E),A=Wm(r,r.FRAGMENT_SHADER,S);r.attachShader(M,w),r.attachShader(M,A),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function b(L){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(M)||"",H=r.getShaderInfoLog(w)||"",D=r.getShaderInfoLog(A)||"",z=O.trim(),K=H.trim(),G=D.trim();let I=!0,U=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(I=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,w,A);else{const B=qm(r,w,"vertex"),q=qm(r,A,"fragment");ut("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+z+`
`+B+`
`+q)}else z!==""?Xe("WebGLProgram: Program Info Log:",z):(K===""||G==="")&&(U=!1);U&&(L.diagnostics={runnable:I,programLog:z,vertexShader:{log:K,prefix:v},fragmentShader:{log:G,prefix:d}})}r.deleteShader(w),r.deleteShader(A),_=new fl(r,M),C=Gw(r,M)}let _;this.getUniforms=function(){return _===void 0&&b(this),_};let C;this.getAttributes=function(){return C===void 0&&b(this),C};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(M,Lw)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Iw++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=A,this}let rA=0;class sA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new aA(e),n.set(e,i)),i}}class aA{constructor(e){this.id=rA++,this.code=e,this.usedTimes=0}}function oA(t){return t===kr||t===zl||t===Hl}function lA(t,e,n,i,r,s){const a=new Hx,o=new sA,c=new Set,u=[],h=new Map,p=i.logarithmicDepthBuffer;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return c.add(_),_===0?"uv":`uv${_}`}function M(_,C,P,L,O,H){const D=L.fog,z=O.geometry,K=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,I=e.get(_.envMap||K,G),U=I&&I.mapping===dc?I.image.height:null,B=m[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&Xe("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const q=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,de=q!==void 0?q.length:0;let he=0;z.morphAttributes.position!==void 0&&(he=1),z.morphAttributes.normal!==void 0&&(he=2),z.morphAttributes.color!==void 0&&(he=3);let $e,De,ze,Y;if(B){const xt=ai[B];$e=xt.vertexShader,De=xt.fragmentShader}else{$e=_.vertexShader,De=_.fragmentShader;const xt=o.getVertexShaderStage(_),dt=o.getFragmentShaderStage(_);o.update(_,xt,dt),ze=xt.id,Y=dt.id}const J=t.getRenderTarget(),ve=t.state.buffers.depth.getReversed(),He=O.isInstancedMesh===!0,ge=O.isBatchedMesh===!0,ne=!!_.map,Ge=!!_.matcap,se=!!I,oe=!!_.aoMap,fe=!!_.lightMap,le=!!_.bumpMap&&_.wireframe===!1,re=!!_.normalMap,je=!!_.displacementMap,Ze=!!_.emissiveMap,ke=!!_.metalnessMap,ue=!!_.roughnessMap,N=_.anisotropy>0,Qe=_.clearcoat>0,qe=_.dispersion>0,R=_.retroreflectivity>0,y=_.iridescence>0,V=_.sheen>0,$=_.transmission>0,Q=N&&!!_.anisotropyMap,me=Qe&&!!_.clearcoatMap,xe=Qe&&!!_.clearcoatNormalMap,ee=Qe&&!!_.clearcoatRoughnessMap,ie=y&&!!_.iridescenceMap,_e=y&&!!_.iridescenceThicknessMap,Fe=V&&!!_.sheenColorMap,Ee=V&&!!_.sheenRoughnessMap,ye=!!_.specularMap,Oe=!!_.specularColorMap,We=!!_.specularIntensityMap,Ke=$&&!!_.transmissionMap,k=$&&!!_.thicknessMap,Se=!!_.gradientMap,te=!!_.alphaMap,Me=_.alphaTest>0,be=!!_.alphaHash,ce=!!_.extensions;let Be=pi;_.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Be=t.toneMapping);const Ie={shaderID:B,shaderType:_.type,shaderName:_.name,vertexShader:$e,fragmentShader:De,defines:_.defines,customVertexShaderID:ze,customFragmentShaderID:Y,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:ge,batchingColor:ge&&O._colorsTexture!==null,instancing:He,instancingColor:He&&O.instanceColor!==null,instancingMorph:He&&O.morphTexture!==null,outputColorSpace:J===null?t.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ot.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ne,matcap:Ge,envMap:se,envMapMode:se&&I.mapping,envMapCubeUVHeight:U,aoMap:oe,lightMap:fe,bumpMap:le,normalMap:re,displacementMap:je,emissiveMap:Ze,normalMapObjectSpace:re&&_.normalMapType===kS,normalMapTangentSpace:re&&_.normalMapType===lf,packedNormalMap:re&&_.normalMapType===lf&&oA(_.normalMap.format),metalnessMap:ke,roughnessMap:ue,anisotropy:N,anisotropyMap:Q,clearcoat:Qe,clearcoatMap:me,clearcoatNormalMap:xe,clearcoatRoughnessMap:ee,dispersion:qe,retroreflection:R,iridescence:y,iridescenceMap:ie,iridescenceThicknessMap:_e,sheen:V,sheenColorMap:Fe,sheenRoughnessMap:Ee,specularMap:ye,specularColorMap:Oe,specularIntensityMap:We,transmission:$,transmissionMap:Ke,thicknessMap:k,gradientMap:Se,opaque:_.transparent===!1&&_.blending===ya&&_.alphaToCoverage===!1,alphaMap:te,alphaTest:Me,alphaHash:be,combine:_.combine,mapUv:ne&&x(_.map.channel),aoMapUv:oe&&x(_.aoMap.channel),lightMapUv:fe&&x(_.lightMap.channel),bumpMapUv:le&&x(_.bumpMap.channel),normalMapUv:re&&x(_.normalMap.channel),displacementMapUv:je&&x(_.displacementMap.channel),emissiveMapUv:Ze&&x(_.emissiveMap.channel),metalnessMapUv:ke&&x(_.metalnessMap.channel),roughnessMapUv:ue&&x(_.roughnessMap.channel),anisotropyMapUv:Q&&x(_.anisotropyMap.channel),clearcoatMapUv:me&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:xe&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&x(_.sheenRoughnessMap.channel),specularMapUv:ye&&x(_.specularMap.channel),specularColorMapUv:Oe&&x(_.specularColorMap.channel),specularIntensityMapUv:We&&x(_.specularIntensityMap.channel),transmissionMapUv:Ke&&x(_.transmissionMap.channel),thicknessMapUv:k&&x(_.thicknessMap.channel),alphaMapUv:te&&x(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(re||N),vertexNormals:!!z.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(ne||te),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||z.attributes.normal===void 0&&re===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ve,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:he,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Be,decodeVideoTexture:ne&&_.map.isVideoTexture===!0&&ot.getTransfer(_.map.colorSpace)===ht,decodeVideoTextureEmissive:Ze&&_.emissiveMap.isVideoTexture===!0&&ot.getTransfer(_.emissiveMap.colorSpace)===ht,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===li,flipSided:_.side===un,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ce&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&_.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ie.vertexUv1s=c.has(1),Ie.vertexUv2s=c.has(2),Ie.vertexUv3s=c.has(3),c.clear(),Ie}function v(_){const C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(const P in _.defines)C.push(P),C.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(d(C,_),g(C,_),C.push(t.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function d(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.anisotropyMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numSunLights),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numSunLightShadows),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.numLightProbes),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function g(_,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.retroreflection&&a.enable(24),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function E(_){const C=m[_.type];let P;if(C){const L=ai[C];P=AM.clone(L.uniforms)}else P=_.uniforms;return P}function S(_,C){let P=h.get(C);return P!==void 0?++P.usedTimes:(P=new iA(t,C,_,r),u.push(P),h.set(C,P)),P}function w(_){if(--_.usedTimes===0){const C=u.indexOf(_);u[C]=u[u.length-1],u.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function b(){o.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:E,acquireProgram:S,releaseProgram:w,releaseShaderCache:A,programs:u,dispose:b}}function cA(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function uA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Qm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Jm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function o(f,m,x,M,v,d){let g=t[e];return g===void 0?(g={id:f.id,object:f,geometry:m,material:x,materialVariant:a(f),groupOrder:M,renderOrder:f.renderOrder,z:v,group:d},t[e]=g):(g.id=f.id,g.object=f,g.geometry=m,g.material=x,g.materialVariant=a(f),g.groupOrder=M,g.renderOrder=f.renderOrder,g.z=v,g.group=d),e++,g}function c(f,m,x,M,v,d,g){g.reversedDepth===!0&&(v=-v);const E=o(f,m,x,M,v,d);x.transmission>0?i.push(E):x.transparent===!0?r.push(E):n.push(E)}function u(f,m,x,M,v,d){const g=o(f,m,x,M,v,d);x.transmission>0?i.unshift(g):x.transparent===!0?r.unshift(g):n.unshift(g)}function h(f,m){n.length>1&&n.sort(f||uA),i.length>1&&i.sort(m||Qm),r.length>1&&r.sort(m||Qm)}function p(){for(let f=e,m=t.length;f<m;f++){const x=t[f];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:u,finish:p,sort:h}}function dA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Jm,t.set(i,[a])):r>=s.length?(a=new Jm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function fA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new j,color:new st};break;case"SpotLight":n={position:new j,direction:new j,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new st,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new st,groundColor:new st};break;case"RectAreaLight":n={color:new st,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function hA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let pA=0;function mA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function gA(t){const e=new fA,n=hA(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new j);const r=new j,s=new Et,a=new Et;function o(u){let h=0,p=0,f=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let m=0,x=0,M=0,v=0,d=0,g=0,E=0,S=0,w=0,A=0,b=0,_=0,C=0,P=0;u.sort(mA);for(let O=0,H=u.length;O<H;O++){const D=u[O],z=D.color,K=D.intensity,G=D.distance;let I=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===kr?I=D.shadow.map.texture:I=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=z.r*K,p+=z.g*K,f+=z.b*K;else if(D.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(D.sh.coefficients[U],K);P++}else if(D.isSunLight){const U=e.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const B=D.shadow,q=n.get(D);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),i.sunShadow[x]=q,i.sunShadowMap[x]=I;const de=B.getViewportCount();for(let he=0;he<de;he++)i.sunShadowMatrix[M+he]=B.getMatrix(he),i.sunShadowCascade[M+he]=B._cascadeData[he];M+=de,x++}i.sun[m]=U,m++}else if(D.isDirectionalLight){const U=e.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const B=D.shadow,q=n.get(D);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,i.directionalShadow[v]=q,i.directionalShadowMap[v]=I,i.directionalShadowMatrix[v]=D.shadow.matrix,w++}i.directional[v]=U,v++}else if(D.isSpotLight){const U=e.get(D);U.position.setFromMatrixPosition(D.matrixWorld),U.color.copy(z).multiplyScalar(K),U.distance=G,U.coneCos=Math.cos(D.angle),U.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),U.decay=D.decay,i.spot[g]=U;const B=D.shadow;if(D.map&&(i.spotLightMap[_]=D.map,_++,B.updateMatrices(D),D.castShadow&&C++),i.spotLightMatrix[g]=B.matrix,D.castShadow){const q=n.get(D);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,i.spotShadow[g]=q,i.spotShadowMap[g]=I,b++}g++}else if(D.isRectAreaLight){const U=e.get(D);U.color.copy(z).multiplyScalar(K),U.halfWidth.set(D.width*.5,0,0),U.halfHeight.set(0,D.height*.5,0),i.rectArea[E]=U,E++}else if(D.isPointLight){const U=e.get(D);if(U.color.copy(D.color).multiplyScalar(D.intensity),U.distance=D.distance,U.decay=D.decay,D.castShadow){const B=D.shadow,q=n.get(D);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,q.shadowCameraNear=B.camera.near,q.shadowCameraFar=B.camera.far,i.pointShadow[d]=q,i.pointShadowMap[d]=I,i.pointShadowMatrix[d]=D.shadow.matrix,A++}i.point[d]=U,d++}else if(D.isHemisphereLight){const U=e.get(D);U.skyColor.copy(D.color).multiplyScalar(K),U.groundColor.copy(D.groundColor).multiplyScalar(K),i.hemi[S]=U,S++}}E>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=f;const L=i.hash;(L.sunLength!==m||L.directionalLength!==v||L.pointLength!==d||L.spotLength!==g||L.rectAreaLength!==E||L.hemiLength!==S||L.numSunShadows!==x||L.numDirectionalShadows!==w||L.numPointShadows!==A||L.numSpotShadows!==b||L.numSpotMaps!==_||L.numLightProbes!==P)&&(i.sun.length=m,i.directional.length=v,i.spot.length=g,i.rectArea.length=E,i.point.length=d,i.hemi.length=S,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=b,i.spotShadowMap.length=b,i.spotLightMatrix.length=b+_-C,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=P,L.sunLength=m,L.directionalLength=v,L.pointLength=d,L.spotLength=g,L.rectAreaLength=E,L.hemiLength=S,L.numSunShadows=x,L.numDirectionalShadows=w,L.numPointShadows=A,L.numSpotShadows=b,L.numSpotMaps=_,L.numLightProbes=P,i.version=pA++)}function c(u,h){let p=0,f=0,m=0,x=0,M=0,v=0;const d=h.matrixWorldInverse;for(let g=0,E=u.length;g<E;g++){const S=u[g];if(S.isSunLight){const w=i.sun[p];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(d),p++}else if(S.isDirectionalLight){const w=i.directional[f];w.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(d),f++}else if(S.isSpotLight){const w=i.spot[x];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(d),x++}else if(S.isRectAreaLight){const w=i.rectArea[M];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(d),a.identity(),s.copy(S.matrixWorld),s.premultiply(d),a.extractRotation(s),w.halfWidth.set(S.width*.5,0,0),w.halfHeight.set(0,S.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),M++}else if(S.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(S.matrixWorld),w.position.applyMatrix4(d),m++}else if(S.isHemisphereLight){const w=i.hemi[v];w.direction.setFromMatrixPosition(S.matrixWorld),w.direction.transformDirection(d),v++}}}return{setup:o,setupView:c,state:i}}function eg(t){const e=new gA(t),n=[],i=[],r=[];function s(f){p.camera=f,n.length=0,i.length=0,r.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function c(f){r.push(f)}function u(){e.setup(n)}function h(f){e.setupView(n,f)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function xA(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new eg(t),e.set(r,[o])):s>=a.length?(o=new eg(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const vA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_A=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,yA=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],SA=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],tg=new Et,ra=new j,wu=new j;function MA(t,e,n){let i=new Th;const r=new it,s=new it,a=new At,o=new PM,c=new LM,u={},h=n.maxTextureSize,p={[Fr]:un,[un]:Fr,[li]:li},f=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:vA,fragmentShader:_A}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const x=new Xt;x.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Fn(x,f),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ol;let d=this.type;this.render=function(A,b,_){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||A.length===0)return;this.type===mS&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ol);const C=t.getRenderTarget(),P=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),O=t.state;O.setBlending(Ci),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const H=d!==this.type;H&&b.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(z=>z.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,z=A.length;D<z;D++){const K=A[D],G=K.shadow;if(G===void 0){Xe("WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const I=G.getFrameExtents();r.multiply(I),s.copy(G.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/I.x),r.x=s.x*I.x,G.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/I.y),r.y=s.y*I.y,G.mapSize.y=s.y));const U=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=U,G.map===null||H===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ca){if(K.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Kn(r.x,r.y,{format:kr,type:gi,minFilter:nn,magFilter:nn,generateMipmaps:!1}),G.map.texture.name=K.name+".shadowMap",G.map.depthTexture=new Wa(r.x,r.y,ui),G.map.depthTexture.name=K.name+".shadowMapDepth",G.map.depthTexture.format=Ui,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Wt,G.map.depthTexture.magFilter=Wt}else K.isPointLight?(G.map=new Jx(r.x),G.map.depthTexture=new EM(r.x,mi)):(G.map=new Kn(r.x,r.y),G.map.depthTexture=new Wa(r.x,r.y,mi)),G.map.depthTexture.name=K.name+".shadowMap",G.map.depthTexture.format=Ui,this.type===ol?(G.map.depthTexture.compareFunction=U?yh:_h,G.map.depthTexture.minFilter=nn,G.map.depthTexture.magFilter=nn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Wt,G.map.depthTexture.magFilter=Wt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==r.x||G.map.height!==r.y)&&G.map.setSize(r.x,r.y);const B=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();K.isPointLight!==!0&&G.updateMatrices(K,_);for(let q=0;q<B;q++){const de=G.getCamera(q);if(K.isPointLight){const he=G.camera,$e=G.matrix,De=K.distance||he.far;De!==he.far&&(he.far=De,he.updateProjectionMatrix()),ra.setFromMatrixPosition(K.matrixWorld),he.position.copy(ra),wu.copy(he.position),wu.add(yA[q]),he.up.copy(SA[q]),he.lookAt(wu),he.updateMatrixWorld(),$e.makeTranslation(-ra.x,-ra.y,-ra.z),tg.multiplyMatrices(he.projectionMatrix,he.matrixWorldInverse),G._frustum.setFromProjectionMatrix(tg,he.coordinateSystem,he.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,q),t.clear();else{q===0&&(t.setRenderTarget(G.map),t.clear());const he=G.getViewport(q);a.set(s.x*he.x,s.y*he.y,s.x*he.z,s.y*he.w),O.viewport(a)}i=G.getFrustum(q),S(b,_,de,K,this.type)}G.isPointLightShadow!==!0&&this.type===ca&&g(G,_),G.needsUpdate=!1}d=this.type,v.needsUpdate=!1,t.setRenderTarget(C,P,L)};function g(A,b){const _=e.update(M);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null?A.mapPass=new Kn(r.x,r.y,{format:kr,type:gi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(b,null,_,f,M,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value.set(A.map.width,A.map.height),m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(b,null,_,m,M,null)}function E(A,b,_,C){let P=null;const L=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)P=L;else if(P=_.isPointLight===!0?c:o,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const O=P.uuid,H=b.uuid;let D=u[O];D===void 0&&(D={},u[O]=D);let z=D[H];z===void 0&&(z=P.clone(),D[H]=z,b.addEventListener("dispose",w)),P=z}if(P.visible=b.visible,P.wireframe=b.wireframe,C===ca?P.side=b.shadowSide!==null?b.shadowSide:b.side:P.side=b.shadowSide!==null?b.shadowSide:p[b.side],P.alphaMap=b.alphaMap,P.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,P.map=b.map,P.clipShadows=b.clipShadows,P.clippingPlanes=b.clippingPlanes,P.clipIntersection=b.clipIntersection,P.displacementMap=b.displacementMap,P.displacementScale=b.displacementScale,P.displacementBias=b.displacementBias,P.wireframeLinewidth=b.wireframeLinewidth,P.linewidth=b.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const O=t.properties.get(P);O.light=_}return P}function S(A,b,_,C,P){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&P===ca)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);const H=e.update(A),D=A.material;if(Array.isArray(D)){const z=H.groups;for(let K=0,G=z.length;K<G;K++){const I=z[K],U=D[I.materialIndex];if(U&&U.visible){const B=E(A,U,C,P);A.onBeforeShadow(t,A,b,_,H,B,I),t.renderBufferDirect(_,null,H,B,A,I),A.onAfterShadow(t,A,b,_,H,B,I)}}}else if(D.visible){const z=E(A,D,C,P);A.onBeforeShadow(t,A,b,_,H,z,null),t.renderBufferDirect(_,null,H,z,A,null),A.onAfterShadow(t,A,b,_,H,z,null)}}const O=A.children;for(let H=0,D=O.length;H<D;H++)S(O[H],b,_,C,P)}function w(A){A.target.removeEventListener("dispose",w);for(const _ in u){const C=u[_],P=A.target.uuid;P in C&&(C[P].dispose(),delete C[P])}}}function EA(t,e){function n(){let k=!1;const Se=new At;let te=null;const Me=new At(0,0,0,0);return{setMask:function(be){te!==be&&!k&&(t.colorMask(be,be,be,be),te=be)},setLocked:function(be){k=be},setClear:function(be,ce,Be,Ie,xt){xt===!0&&(be*=Ie,ce*=Ie,Be*=Ie),Se.set(be,ce,Be,Ie),Me.equals(Se)===!1&&(t.clearColor(be,ce,Be,Ie),Me.copy(Se))},reset:function(){k=!1,te=null,Me.set(-1,0,0,0)}}}function i(){let k=!1,Se=!1,te=null,Me=null,be=null;return{setReversed:function(ce){if(Se!==ce){const Be=e.get("EXT_clip_control");ce?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),Se=ce;const Ie=be;be=null,this.setClear(Ie)}},getReversed:function(){return Se},setTest:function(ce){ce?J(t.DEPTH_TEST):ve(t.DEPTH_TEST)},setMask:function(ce){te!==ce&&!k&&(t.depthMask(ce),te=ce)},setFunc:function(ce){if(Se&&(ce=ZS[ce]),Me!==ce){switch(ce){case Ed:t.depthFunc(t.NEVER);break;case Td:t.depthFunc(t.ALWAYS);break;case wd:t.depthFunc(t.LESS);break;case Ha:t.depthFunc(t.LEQUAL);break;case Ad:t.depthFunc(t.EQUAL);break;case bd:t.depthFunc(t.GEQUAL);break;case Cd:t.depthFunc(t.GREATER);break;case Rd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Me=ce}},setLocked:function(ce){k=ce},setClear:function(ce){be!==ce&&(be=ce,Se&&(ce=1-ce),t.clearDepth(ce))},reset:function(){k=!1,te=null,Me=null,be=null,Se=!1}}}function r(){let k=!1,Se=null,te=null,Me=null,be=null,ce=null,Be=null,Ie=null,xt=null;return{setTest:function(dt){k||(dt?J(t.STENCIL_TEST):ve(t.STENCIL_TEST))},setMask:function(dt){Se!==dt&&!k&&(t.stencilMask(dt),Se=dt)},setFunc:function(dt,Bn,ei){(te!==dt||Me!==Bn||be!==ei)&&(t.stencilFunc(dt,Bn,ei),te=dt,Me=Bn,be=ei)},setOp:function(dt,Bn,ei){(ce!==dt||Be!==Bn||Ie!==ei)&&(t.stencilOp(dt,Bn,ei),ce=dt,Be=Bn,Ie=ei)},setLocked:function(dt){k=dt},setClear:function(dt){xt!==dt&&(t.clearStencil(dt),xt=dt)},reset:function(){k=!1,Se=null,te=null,Me=null,be=null,ce=null,Be=null,Ie=null,xt=null}}}const s=new n,a=new i,o=new r,c=new WeakMap,u=new WeakMap;let h={},p={},f={},m=new WeakMap,x=[],M=null,v=!1,d=null,g=null,E=null,S=null,w=null,A=null,b=null,_=new st(0,0,0),C=0,P=!1,L=null,O=null,H=null,D=null,z=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,I=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(I=parseFloat(/^WebGL (\d)/.exec(U)[1]),G=I>=1):U.indexOf("OpenGL ES")!==-1&&(I=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),G=I>=2);let B=null,q={};const de=t.getParameter(t.SCISSOR_BOX),he=t.getParameter(t.VIEWPORT),$e=new At().fromArray(de),De=new At().fromArray(he);function ze(k,Se,te,Me){const be=new Uint8Array(4),ce=t.createTexture();t.bindTexture(k,ce),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Be=0;Be<te;Be++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(Se,0,t.RGBA,1,1,Me,0,t.RGBA,t.UNSIGNED_BYTE,be):t.texImage2D(Se+Be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,be);return ce}const Y={};Y[t.TEXTURE_2D]=ze(t.TEXTURE_2D,t.TEXTURE_2D,1),Y[t.TEXTURE_CUBE_MAP]=ze(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[t.TEXTURE_2D_ARRAY]=ze(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Y[t.TEXTURE_3D]=ze(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(t.DEPTH_TEST),a.setFunc(Ha),le(!1),re(tm),J(t.CULL_FACE),oe(Ci);function J(k){h[k]!==!0&&(t.enable(k),h[k]=!0)}function ve(k){h[k]!==!1&&(t.disable(k),h[k]=!1)}function He(k,Se){return f[k]!==Se?(t.bindFramebuffer(k,Se),f[k]=Se,k===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Se),k===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Se),!0):!1}function ge(k,Se){let te=x,Me=!1;if(k){te=m.get(Se),te===void 0&&(te=[],m.set(Se,te));const be=k.textures;if(te.length!==be.length||te[0]!==t.COLOR_ATTACHMENT0){for(let ce=0,Be=be.length;ce<Be;ce++)te[ce]=t.COLOR_ATTACHMENT0+ce;te.length=be.length,Me=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,Me=!0);Me&&t.drawBuffers(te)}function ne(k){return M!==k?(t.useProgram(k),M=k,!0):!1}const Ge={[ss]:t.FUNC_ADD,[xS]:t.FUNC_SUBTRACT,[vS]:t.FUNC_REVERSE_SUBTRACT};Ge[_S]=t.MIN,Ge[yS]=t.MAX;const se={[SS]:t.ZERO,[MS]:t.ONE,[ES]:t.SRC_COLOR,[Mx]:t.SRC_ALPHA,[RS]:t.SRC_ALPHA_SATURATE,[bS]:t.DST_COLOR,[wS]:t.DST_ALPHA,[TS]:t.ONE_MINUS_SRC_COLOR,[Ex]:t.ONE_MINUS_SRC_ALPHA,[CS]:t.ONE_MINUS_DST_COLOR,[AS]:t.ONE_MINUS_DST_ALPHA,[NS]:t.CONSTANT_COLOR,[PS]:t.ONE_MINUS_CONSTANT_COLOR,[LS]:t.CONSTANT_ALPHA,[IS]:t.ONE_MINUS_CONSTANT_ALPHA};function oe(k,Se,te,Me,be,ce,Be,Ie,xt,dt){if(k===Ci){v===!0&&(ve(t.BLEND),v=!1);return}if(v===!1&&(J(t.BLEND),v=!0),k!==gS){if(k!==d||dt!==P){if((g!==ss||w!==ss)&&(t.blendEquation(t.FUNC_ADD),g=ss,w=ss),dt)switch(k){case ya:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Md:t.blendFunc(t.ONE,t.ONE);break;case nm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case im:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ut("WebGLState: Invalid blending: ",k);break}else switch(k){case ya:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Md:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case nm:ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case im:ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ut("WebGLState: Invalid blending: ",k);break}E=null,S=null,A=null,b=null,_.set(0,0,0),C=0,d=k,P=dt}return}be=be||Se,ce=ce||te,Be=Be||Me,(Se!==g||be!==w)&&(t.blendEquationSeparate(Ge[Se],Ge[be]),g=Se,w=be),(te!==E||Me!==S||ce!==A||Be!==b)&&(t.blendFuncSeparate(se[te],se[Me],se[ce],se[Be]),E=te,S=Me,A=ce,b=Be),(Ie.equals(_)===!1||xt!==C)&&(t.blendColor(Ie.r,Ie.g,Ie.b,xt),_.copy(Ie),C=xt),d=k,P=!1}function fe(k,Se){k.side===li?ve(t.CULL_FACE):J(t.CULL_FACE);let te=k.side===un;Se&&(te=!te),le(te),k.blending===ya&&k.transparent===!1?oe(Ci):oe(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),s.setMask(k.colorWrite);const Me=k.stencilWrite;o.setTest(Me),Me&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ze(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?J(t.SAMPLE_ALPHA_TO_COVERAGE):ve(t.SAMPLE_ALPHA_TO_COVERAGE)}function le(k){L!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),L=k)}function re(k){k!==hS?(J(t.CULL_FACE),k!==O&&(k===tm?t.cullFace(t.BACK):k===pS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ve(t.CULL_FACE),O=k}function je(k){k!==H&&(G&&t.lineWidth(k),H=k)}function Ze(k,Se,te){k?(J(t.POLYGON_OFFSET_FILL),(D!==Se||z!==te)&&(D=Se,z=te,a.getReversed()&&(Se=-Se),t.polygonOffset(Se,te))):ve(t.POLYGON_OFFSET_FILL)}function ke(k){k?J(t.SCISSOR_TEST):ve(t.SCISSOR_TEST)}function ue(k){k===void 0&&(k=t.TEXTURE0+K-1),B!==k&&(t.activeTexture(k),B=k)}function N(k,Se,te){te===void 0&&(B===null?te=t.TEXTURE0+K-1:te=B);let Me=q[te];Me===void 0&&(Me={type:void 0,texture:void 0},q[te]=Me),(Me.type!==k||Me.texture!==Se)&&(B!==te&&(t.activeTexture(te),B=te),t.bindTexture(k,Se||Y[k]),Me.type=k,Me.texture=Se)}function Qe(){const k=q[B];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function qe(){try{t.compressedTexImage2D(...arguments)}catch(k){ut("WebGLState:",k)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(k){ut("WebGLState:",k)}}function y(){try{t.texSubImage2D(...arguments)}catch(k){ut("WebGLState:",k)}}function V(){try{t.texSubImage3D(...arguments)}catch(k){ut("WebGLState:",k)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(k){ut("WebGLState:",k)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(k){ut("WebGLState:",k)}}function me(){try{t.texStorage2D(...arguments)}catch(k){ut("WebGLState:",k)}}function xe(){try{t.texStorage3D(...arguments)}catch(k){ut("WebGLState:",k)}}function ee(){try{t.texImage2D(...arguments)}catch(k){ut("WebGLState:",k)}}function ie(){try{t.texImage3D(...arguments)}catch(k){ut("WebGLState:",k)}}function _e(k){return p[k]!==void 0?p[k]:t.getParameter(k)}function Fe(k,Se){p[k]!==Se&&(t.pixelStorei(k,Se),p[k]=Se)}function Ee(k){$e.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),$e.copy(k))}function ye(k){De.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),De.copy(k))}function Oe(k,Se){let te=u.get(Se);te===void 0&&(te=new WeakMap,u.set(Se,te));let Me=te.get(k);Me===void 0&&(Me=t.getUniformBlockIndex(Se,k.name),te.set(k,Me))}function We(k,Se){const Me=u.get(Se).get(k);c.get(Se)!==Me&&(t.uniformBlockBinding(Se,Me,k.__bindingPointIndex),c.set(Se,Me))}function Ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},p={},B=null,q={},f={},m=new WeakMap,x=[],M=null,v=!1,d=null,g=null,E=null,S=null,w=null,A=null,b=null,_=new st(0,0,0),C=0,P=!1,L=null,O=null,H=null,D=null,z=null,$e.set(0,0,t.canvas.width,t.canvas.height),De.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:ve,bindFramebuffer:He,drawBuffers:ge,useProgram:ne,setBlending:oe,setMaterial:fe,setFlipSided:le,setCullFace:re,setLineWidth:je,setPolygonOffset:Ze,setScissorTest:ke,activeTexture:ue,bindTexture:N,unbindTexture:Qe,compressedTexImage2D:qe,compressedTexImage3D:R,texImage2D:ee,texImage3D:ie,pixelStorei:Fe,getParameter:_e,updateUBOMapping:Oe,uniformBlockBinding:We,texStorage2D:me,texStorage3D:xe,texSubImage2D:y,texSubImage3D:V,compressedTexSubImage2D:$,compressedTexSubImage3D:Q,scissor:Ee,viewport:ye,reset:Ke}}function TA(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new it,h=new WeakMap,p=new Set;let f;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,y){return x?new OffscreenCanvas(R,y):jl("canvas")}function v(R,y,V){let $=1;const Q=qe(R);if((Q.width>V||Q.height>V)&&($=V/Math.max(Q.width,Q.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const me=Math.floor($*Q.width),xe=Math.floor($*Q.height);f===void 0&&(f=M(me,xe));const ee=y?M(me,xe):f;return ee.width=me,ee.height=xe,ee.getContext("2d").drawImage(R,0,0,me,xe),Xe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+me+"x"+xe+")."),ee}else return"data"in R&&Xe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function d(R){return R.generateMipmaps}function g(R){t.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(R,y,V,$,Q,me=!1){if(R!==null){if(t[R]!==void 0)return t[R];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let xe;$&&(xe=e.get("EXT_texture_norm16"),xe||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=y;if(y===t.RED&&(V===t.FLOAT&&(ee=t.R32F),V===t.HALF_FLOAT&&(ee=t.R16F),V===t.UNSIGNED_BYTE&&(ee=t.R8),V===t.UNSIGNED_SHORT&&xe&&(ee=xe.R16_EXT),V===t.SHORT&&xe&&(ee=xe.R16_SNORM_EXT)),y===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.R8UI),V===t.UNSIGNED_SHORT&&(ee=t.R16UI),V===t.UNSIGNED_INT&&(ee=t.R32UI),V===t.BYTE&&(ee=t.R8I),V===t.SHORT&&(ee=t.R16I),V===t.INT&&(ee=t.R32I)),y===t.RG&&(V===t.FLOAT&&(ee=t.RG32F),V===t.HALF_FLOAT&&(ee=t.RG16F),V===t.UNSIGNED_BYTE&&(ee=t.RG8),V===t.UNSIGNED_SHORT&&xe&&(ee=xe.RG16_EXT),V===t.SHORT&&xe&&(ee=xe.RG16_SNORM_EXT)),y===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.RG8UI),V===t.UNSIGNED_SHORT&&(ee=t.RG16UI),V===t.UNSIGNED_INT&&(ee=t.RG32UI),V===t.BYTE&&(ee=t.RG8I),V===t.SHORT&&(ee=t.RG16I),V===t.INT&&(ee=t.RG32I)),y===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),V===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),V===t.UNSIGNED_INT&&(ee=t.RGB32UI),V===t.BYTE&&(ee=t.RGB8I),V===t.SHORT&&(ee=t.RGB16I),V===t.INT&&(ee=t.RGB32I)),y===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),V===t.UNSIGNED_INT&&(ee=t.RGBA32UI),V===t.BYTE&&(ee=t.RGBA8I),V===t.SHORT&&(ee=t.RGBA16I),V===t.INT&&(ee=t.RGBA32I)),y===t.RGB&&(V===t.UNSIGNED_SHORT&&xe&&(ee=xe.RGB16_EXT),V===t.SHORT&&xe&&(ee=xe.RGB16_SNORM_EXT),V===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),V===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),y===t.RGBA){const ie=me?Vl:ot.getTransfer(Q);V===t.FLOAT&&(ee=t.RGBA32F),V===t.HALF_FLOAT&&(ee=t.RGBA16F),V===t.UNSIGNED_BYTE&&(ee=ie===ht?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT&&xe&&(ee=xe.RGBA16_EXT),V===t.SHORT&&xe&&(ee=xe.RGBA16_SNORM_EXT),V===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function w(R,y){let V;return R?y===null||y===mi||y===Va?V=t.DEPTH24_STENCIL8:y===ui?V=t.DEPTH32F_STENCIL8:y===Ga&&(V=t.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===mi||y===Va?V=t.DEPTH_COMPONENT24:y===ui?V=t.DEPTH_COMPONENT32F:y===Ga&&(V=t.DEPTH_COMPONENT16),V}function A(R,y){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==Wt&&R.minFilter!==nn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function b(R){const y=R.target;y.removeEventListener("dispose",b),C(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&p.delete(y)}function _(R){const y=R.target;y.removeEventListener("dispose",_),L(y)}function C(R){const y=i.get(R);if(y.__webglInit===void 0)return;const V=R.source,$=m.get(V);if($){const Q=$[y.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&P(R),Object.keys($).length===0&&m.delete(V)}i.remove(R)}function P(R){const y=i.get(R);t.deleteTexture(y.__webglTexture);const V=R.source,$=m.get(V);delete $[y.__cacheKey],a.memory.textures--}function L(R){const y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let Q=0;Q<y.__webglFramebuffer[$].length;Q++)t.deleteFramebuffer(y.__webglFramebuffer[$][Q]);else t.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)t.deleteFramebuffer(y.__webglFramebuffer[$]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=R.textures;for(let $=0,Q=V.length;$<Q;$++){const me=i.get(V[$]);me.__webglTexture&&(t.deleteTexture(me.__webglTexture),a.memory.textures--),i.remove(V[$])}i.remove(R)}let O=0;function H(){O=0}function D(){return O}function z(R){O=R}function K(){const R=O;return R>=r.maxTextures&&Xe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),O+=1,R}function G(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function I(R,y){const V=i.get(R);if(R.isVideoTexture&&N(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){const $=R.image;if($===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{ve(V,R,y);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+y)}function U(R,y){const V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){ve(V,R,y);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+y)}function B(R,y){const V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){ve(V,R,y);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+y)}function q(R,y){const V=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&V.__version!==R.version){He(V,R,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+y)}const de={[Bl]:t.REPEAT,[ci]:t.CLAMP_TO_EDGE,[Nd]:t.MIRRORED_REPEAT},he={[Wt]:t.NEAREST,[FS]:t.NEAREST_MIPMAP_NEAREST,[Eo]:t.NEAREST_MIPMAP_LINEAR,[nn]:t.LINEAR,[Xc]:t.LINEAR_MIPMAP_NEAREST,[br]:t.LINEAR_MIPMAP_LINEAR},$e={[zS]:t.NEVER,[WS]:t.ALWAYS,[HS]:t.LESS,[_h]:t.LEQUAL,[GS]:t.EQUAL,[yh]:t.GEQUAL,[VS]:t.GREATER,[jS]:t.NOTEQUAL};function De(R,y){if(y.type===ui&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===nn||y.magFilter===Xc||y.magFilter===Eo||y.magFilter===br||y.minFilter===nn||y.minFilter===Xc||y.minFilter===Eo||y.minFilter===br)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,de[y.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,de[y.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,de[y.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,he[y.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,he[y.minFilter]),y.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,$e[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Wt||y.minFilter!==Eo&&y.minFilter!==br||y.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ze(R,y){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",b));const $=y.source;let Q=m.get($);Q===void 0&&(Q={},m.set($,Q));const me=G(y);if(me!==R.__cacheKey){Q[me]===void 0&&(Q[me]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[me].usedTimes++;const xe=Q[R.__cacheKey];xe!==void 0&&(Q[R.__cacheKey].usedTimes--,xe.usedTimes===0&&P(y)),R.__cacheKey=me,R.__webglTexture=Q[me].texture}return V}function Y(R,y,V){return Math.floor(Math.floor(R/V)/y)}function J(R,y,V,$){const me=R.updateRanges;if(me.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,V,$,y.data);else{me.sort((Fe,Ee)=>Fe.start-Ee.start);let xe=0;for(let Fe=1;Fe<me.length;Fe++){const Ee=me[xe],ye=me[Fe],Oe=Ee.start+Ee.count,We=Y(ye.start,y.width,4),Ke=Y(Ee.start,y.width,4);ye.start<=Oe+1&&We===Ke&&Y(ye.start+ye.count-1,y.width,4)===We?Ee.count=Math.max(Ee.count,ye.start+ye.count-Ee.start):(++xe,me[xe]=ye)}me.length=xe+1;const ee=n.getParameter(t.UNPACK_ROW_LENGTH),ie=n.getParameter(t.UNPACK_SKIP_PIXELS),_e=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let Fe=0,Ee=me.length;Fe<Ee;Fe++){const ye=me[Fe],Oe=Math.floor(ye.start/4),We=Math.ceil(ye.count/4),Ke=Oe%y.width,k=Math.floor(Oe/y.width),Se=We,te=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ke),n.pixelStorei(t.UNPACK_SKIP_ROWS,k),n.texSubImage2D(t.TEXTURE_2D,0,Ke,k,Se,te,V,$,y.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ee),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(t.UNPACK_SKIP_ROWS,_e)}}function ve(R,y,V){let $=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=t.TEXTURE_3D);const Q=ze(R,y),me=y.source;n.bindTexture($,R.__webglTexture,t.TEXTURE0+V);const xe=i.get(me);if(me.version!==xe.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+V),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const te=ot.getPrimaries(ot.workingColorSpace),Me=y.colorSpace===Ji?null:ot.getPrimaries(y.colorSpace),be=y.colorSpace===Ji||te===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let ie=v(y.image,!1,r.maxTextureSize);ie=Qe(y,ie);const _e=s.convert(y.format,y.colorSpace),Fe=s.convert(y.type);let Ee=S(y.internalFormat,_e,Fe,y.normalized,y.colorSpace,y.isVideoTexture);De($,y);let ye;const Oe=y.mipmaps,We=y.isVideoTexture!==!0,Ke=xe.__version===void 0||Q===!0,k=me.dataReady,Se=A(y,ie);if(y.isDepthTexture)Ee=w(y.format===Cr,y.type),Ke&&(We?n.texStorage2D(t.TEXTURE_2D,1,Ee,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Ee,ie.width,ie.height,0,_e,Fe,null));else if(y.isDataTexture)if(Oe.length>0){We&&Ke&&n.texStorage2D(t.TEXTURE_2D,Se,Ee,Oe[0].width,Oe[0].height);for(let te=0,Me=Oe.length;te<Me;te++)ye=Oe[te],We?k&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ye.width,ye.height,_e,Fe,ye.data):n.texImage2D(t.TEXTURE_2D,te,Ee,ye.width,ye.height,0,_e,Fe,ye.data);y.generateMipmaps=!1}else We?(Ke&&n.texStorage2D(t.TEXTURE_2D,Se,Ee,ie.width,ie.height),k&&J(y,ie,_e,Fe)):n.texImage2D(t.TEXTURE_2D,0,Ee,ie.width,ie.height,0,_e,Fe,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){We&&Ke&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,Ee,Oe[0].width,Oe[0].height,ie.depth);for(let te=0,Me=Oe.length;te<Me;te++)if(ye=Oe[te],y.format!==$n)if(_e!==null)if(We){if(k)if(y.layerUpdates.size>0){const be=Im(ye.width,ye.height,y.format,y.type);for(const ce of y.layerUpdates){const Be=ye.data.subarray(ce*be/ye.data.BYTES_PER_ELEMENT,(ce+1)*be/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,ce,ye.width,ye.height,1,_e,Be)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,ye.width,ye.height,ie.depth,_e,ye.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,Ee,ye.width,ye.height,ie.depth,0,ye.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?k&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,ye.width,ye.height,ie.depth,_e,Fe,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,Ee,ye.width,ye.height,ie.depth,0,_e,Fe,ye.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{We&&Ke&&n.texStorage2D(t.TEXTURE_2D,Se,Ee,Oe[0].width,Oe[0].height);for(let te=0,Me=Oe.length;te<Me;te++)ye=Oe[te],y.format!==$n?_e!==null?We?k&&n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,ye.width,ye.height,_e,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,te,Ee,ye.width,ye.height,0,ye.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?k&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ye.width,ye.height,_e,Fe,ye.data):n.texImage2D(t.TEXTURE_2D,te,Ee,ye.width,ye.height,0,_e,Fe,ye.data)}else if(y.isDataArrayTexture)if(We){if(Ke&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,Ee,ie.width,ie.height,ie.depth),k)if(y.layerUpdates.size>0){const te=Im(ie.width,ie.height,y.format,y.type);for(const Me of y.layerUpdates){const be=ie.data.subarray(Me*te/ie.data.BYTES_PER_ELEMENT,(Me+1)*te/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Me,ie.width,ie.height,1,_e,Fe,be)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,_e,Fe,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,ie.width,ie.height,ie.depth,0,_e,Fe,ie.data);else if(y.isData3DTexture)We?(Ke&&n.texStorage3D(t.TEXTURE_3D,Se,Ee,ie.width,ie.height,ie.depth),k&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,_e,Fe,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Ee,ie.width,ie.height,ie.depth,0,_e,Fe,ie.data);else if(y.isFramebufferTexture){if(Ke)if(We)n.texStorage2D(t.TEXTURE_2D,Se,Ee,ie.width,ie.height);else{let te=ie.width,Me=ie.height;for(let be=0;be<Se;be++)n.texImage2D(t.TEXTURE_2D,be,Ee,te,Me,0,_e,Fe,null),te>>=1,Me>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){const te=t.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),ie.parentNode!==te){te.appendChild(ie),p.add(y),te.onpaint=Me=>{const be=Me.changedElements;for(const ce of p)be.includes(ce.image)&&(ce.needsUpdate=!0)},te.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ie);else{const be=t.RGBA,ce=t.RGBA,Be=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,be,ce,Be,ie)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(We&&Ke){const te=qe(Oe[0]);n.texStorage2D(t.TEXTURE_2D,Se,Ee,te.width,te.height)}for(let te=0,Me=Oe.length;te<Me;te++)ye=Oe[te],We?k&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,_e,Fe,ye):n.texImage2D(t.TEXTURE_2D,te,Ee,_e,Fe,ye);y.generateMipmaps=!1}else if(We){if(Ke){const te=qe(ie);n.texStorage2D(t.TEXTURE_2D,Se,Ee,te.width,te.height)}k&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,_e,Fe,ie)}else n.texImage2D(t.TEXTURE_2D,0,Ee,_e,Fe,ie);d(y)&&g($),xe.__version=me.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function He(R,y,V){if(y.image.length!==6)return;const $=ze(R,y),Q=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+V);const me=i.get(Q);if(Q.version!==me.__version||$===!0){n.activeTexture(t.TEXTURE0+V);const xe=ot.getPrimaries(ot.workingColorSpace),ee=y.colorSpace===Ji?null:ot.getPrimaries(y.colorSpace),ie=y.colorSpace===Ji||xe===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const _e=y.isCompressedTexture||y.image[0].isCompressedTexture,Fe=y.image[0]&&y.image[0].isDataTexture,Ee=[];for(let ce=0;ce<6;ce++)!_e&&!Fe?Ee[ce]=v(y.image[ce],!0,r.maxCubemapSize):Ee[ce]=Fe?y.image[ce].image:y.image[ce],Ee[ce]=Qe(y,Ee[ce]);const ye=Ee[0],Oe=s.convert(y.format,y.colorSpace),We=s.convert(y.type),Ke=S(y.internalFormat,Oe,We,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,Se=me.__version===void 0||$===!0,te=Q.dataReady;let Me=A(y,ye);De(t.TEXTURE_CUBE_MAP,y);let be;if(_e){k&&Se&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,Ke,ye.width,ye.height);for(let ce=0;ce<6;ce++){be=Ee[ce].mipmaps;for(let Be=0;Be<be.length;Be++){const Ie=be[Be];y.format!==$n?Oe!==null?k?te&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Be,0,0,Ie.width,Ie.height,Oe,Ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Be,Ke,Ie.width,Ie.height,0,Ie.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Be,0,0,Ie.width,Ie.height,Oe,We,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Be,Ke,Ie.width,Ie.height,0,Oe,We,Ie.data)}}}else{if(be=y.mipmaps,k&&Se){be.length>0&&Me++;const ce=qe(Ee[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Me,Ke,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(Fe){k?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ee[ce].width,Ee[ce].height,Oe,We,Ee[ce].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ke,Ee[ce].width,Ee[ce].height,0,Oe,We,Ee[ce].data);for(let Be=0;Be<be.length;Be++){const xt=be[Be].image[ce].image;k?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Be+1,0,0,xt.width,xt.height,Oe,We,xt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Be+1,Ke,xt.width,xt.height,0,Oe,We,xt.data)}}else{k?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Oe,We,Ee[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ke,Oe,We,Ee[ce]);for(let Be=0;Be<be.length;Be++){const Ie=be[Be];k?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Be+1,0,0,Oe,We,Ie.image[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Be+1,Ke,Oe,We,Ie.image[ce])}}}d(y)&&g(t.TEXTURE_CUBE_MAP),me.__version=Q.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ge(R,y,V,$,Q,me){const xe=s.convert(V.format,V.colorSpace),ee=s.convert(V.type),ie=S(V.internalFormat,xe,ee,V.normalized,V.colorSpace),_e=i.get(y),Fe=i.get(V);if(Fe.__renderTarget=y,!_e.__hasExternalTextures){const Ee=Math.max(1,y.width>>me),ye=Math.max(1,y.height>>me);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,me,ie,Ee,ye,y.depth,0,xe,ee,null):n.texImage2D(Q,me,ie,Ee,ye,0,xe,ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ue(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,Q,Fe.__webglTexture,0,ke(y)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,Q,Fe.__webglTexture,me),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ne(R,y,V){if(t.bindRenderbuffer(t.RENDERBUFFER,R),y.depthBuffer){const $=y.depthTexture,Q=$&&$.isDepthTexture?$.type:null,me=w(y.stencilBuffer,Q),xe=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ue(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ke(y),me,y.width,y.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,ke(y),me,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,me,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,xe,t.RENDERBUFFER,R)}else{const $=y.textures;for(let Q=0;Q<$.length;Q++){const me=$[Q],xe=s.convert(me.format,me.colorSpace),ee=s.convert(me.type),ie=S(me.internalFormat,xe,ee,me.normalized,me.colorSpace);ue(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ke(y),ie,y.width,y.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,ke(y),ie,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ie,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ge(R,y,V){const $=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Q=i.get(y.depthTexture);if(Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,y.depthTexture.addEventListener("dispose",b)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),De(t.TEXTURE_CUBE_MAP,y.depthTexture);const _e=s.convert(y.depthTexture.format),Fe=s.convert(y.depthTexture.type);let Ee;y.depthTexture.format===Ui?Ee=t.DEPTH_COMPONENT24:y.depthTexture.format===Cr&&(Ee=t.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,Ee,y.width,y.height,0,_e,Fe,null)}}else I(y.depthTexture,0);const me=Q.__webglTexture,xe=ke(y),ee=$?t.TEXTURE_CUBE_MAP_POSITIVE_X+V:t.TEXTURE_2D,ie=y.depthTexture.format===Cr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ui)ue(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,me,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,me,0);else if(y.depthTexture.format===Cr)ue(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,me,0,xe):t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(R){const y=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const Q=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",Q)};$.addEventListener("dispose",Q),y.__depthDisposeCallback=Q}y.__boundDepthTexture=$}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(V)for(let $=0;$<6;$++)Ge(y.__webglFramebuffer[$],R,$);else{const $=R.texture.mipmaps;$&&$.length>0?Ge(y.__webglFramebuffer[0],R,0):Ge(y.__webglFramebuffer,R,0)}else if(V){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=t.createRenderbuffer(),ne(y.__webglDepthbuffer[$],R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=y.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,me),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,me)}}else{const $=R.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),ne(y.__webglDepthbuffer,R,!1);else{const Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,me),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,me)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function oe(R,y,V){const $=i.get(R);y!==void 0&&ge($.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&se(R)}function fe(R){const y=R.texture,V=i.get(R),$=i.get(y);R.addEventListener("dispose",_);const Q=R.textures,me=R.isWebGLCubeRenderTarget===!0,xe=Q.length>1;if(xe||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=y.version,a.memory.textures++),me){V.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[ee]=[];for(let ie=0;ie<y.mipmaps.length;ie++)V.__webglFramebuffer[ee][ie]=t.createFramebuffer()}else V.__webglFramebuffer[ee]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let ee=0;ee<y.mipmaps.length;ee++)V.__webglFramebuffer[ee]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(xe)for(let ee=0,ie=Q.length;ee<ie;ee++){const _e=i.get(Q[ee]);_e.__webglTexture===void 0&&(_e.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&ue(R)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ee=0;ee<Q.length;ee++){const ie=Q[ee];V.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[ee]);const _e=s.convert(ie.format,ie.colorSpace),Fe=s.convert(ie.type),Ee=S(ie.internalFormat,_e,Fe,ie.normalized,ie.colorSpace,R.isXRRenderTarget===!0),ye=ke(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,Ee,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,V.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),ne(V.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(me){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),De(t.TEXTURE_CUBE_MAP,y);for(let ee=0;ee<6;ee++)if(y.mipmaps&&y.mipmaps.length>0)for(let ie=0;ie<y.mipmaps.length;ie++)ge(V.__webglFramebuffer[ee][ie],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ie);else ge(V.__webglFramebuffer[ee],R,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);d(y)&&g(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(xe){for(let ee=0,ie=Q.length;ee<ie;ee++){const _e=Q[ee],Fe=i.get(_e);let Ee=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ee=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ee,Fe.__webglTexture),De(Ee,_e),ge(V.__webglFramebuffer,R,_e,t.COLOR_ATTACHMENT0+ee,Ee,0),d(_e)&&g(Ee)}n.unbindTexture()}else{let ee=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,$.__webglTexture),De(ee,y),y.mipmaps&&y.mipmaps.length>0)for(let ie=0;ie<y.mipmaps.length;ie++)ge(V.__webglFramebuffer[ie],R,y,t.COLOR_ATTACHMENT0,ee,ie);else ge(V.__webglFramebuffer,R,y,t.COLOR_ATTACHMENT0,ee,0);d(y)&&g(ee),n.unbindTexture()}R.depthBuffer&&se(R)}function le(R){const y=R.textures;for(let V=0,$=y.length;V<$;V++){const Q=y[V];if(d(Q)){const me=E(R),xe=i.get(Q).__webglTexture;n.bindTexture(me,xe),g(me),n.unbindTexture()}}}const re=[],je=[];function Ze(R){if(R.samples>0){if(ue(R)===!1){const y=R.textures,V=R.width,$=R.height;let Q=t.COLOR_BUFFER_BIT;const me=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,xe=i.get(R),ee=y.length>1;if(ee)for(let _e=0;_e<y.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const ie=R.texture.mipmaps;ie&&ie.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let _e=0;_e<y.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,xe.__webglColorRenderbuffer[_e]);const Fe=i.get(y[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Fe,0)}t.blitFramebuffer(0,0,V,$,0,0,V,$,Q,t.NEAREST),c===!0&&(re.length=0,je.length=0,re.push(t.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(re.push(me),je.push(me),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,je)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,re))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ee)for(let _e=0;_e<y.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,xe.__webglColorRenderbuffer[_e]);const Fe=i.get(y[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,xe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,Fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){const y=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function ke(R){return Math.min(r.maxSamples,R.samples)}function ue(R){const y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function N(R){const y=a.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function Qe(R,y){const V=R.colorSpace,$=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Gl&&V!==Ji&&(ot.getTransfer(V)===ht?($!==$n||Q!==Mn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ut("WebGLTextures: Unsupported texture color space:",V)),y}function qe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=K,this.resetTextureUnits=H,this.getTextureUnits=D,this.setTextureUnits=z,this.setTexture2D=I,this.setTexture2DArray=U,this.setTexture3D=B,this.setTextureCube=q,this.rebindTextures=oe,this.setupRenderTarget=fe,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ue,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function wA(t,e){function n(i,r=Ji){let s;const a=ot.getTransfer(r);if(i===Mn)return t.UNSIGNED_BYTE;if(i===ph)return t.UNSIGNED_SHORT_4_4_4_4;if(i===mh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Dx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Ux)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Lx)return t.BYTE;if(i===Ix)return t.SHORT;if(i===Ga)return t.UNSIGNED_SHORT;if(i===hh)return t.INT;if(i===mi)return t.UNSIGNED_INT;if(i===ui)return t.FLOAT;if(i===gi)return t.HALF_FLOAT;if(i===Fx)return t.ALPHA;if(i===Ox)return t.RGB;if(i===$n)return t.RGBA;if(i===Ui)return t.DEPTH_COMPONENT;if(i===Cr)return t.DEPTH_STENCIL;if(i===kx)return t.RED;if(i===gh)return t.RED_INTEGER;if(i===kr)return t.RG;if(i===xh)return t.RG_INTEGER;if(i===vh)return t.RGBA_INTEGER;if(i===ll||i===cl||i===ul||i===dl)if(a===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ll)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===dl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ll)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ul)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===dl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Pd||i===Ld||i===Id||i===Dd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Pd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ld)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Id)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ud||i===Fd||i===Od||i===kd||i===Bd||i===zl||i===zd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ud||i===Fd)return a===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Od)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===kd)return s.COMPRESSED_R11_EAC;if(i===Bd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===zl)return s.COMPRESSED_RG11_EAC;if(i===zd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Hd||i===Gd||i===Vd||i===jd||i===Wd||i===Xd||i===qd||i===$d||i===Yd||i===Zd||i===Kd||i===Qd||i===Jd||i===ef)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Hd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Gd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$d)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Zd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Qd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Jd)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ef)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tf||i===nf||i===rf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===tf)return a===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===sf||i===af||i===Hl||i===of)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===sf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===af)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===of)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Va?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const AA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class CA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new qx(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Jn({vertexShader:AA,fragmentShader:bA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Fn(new fc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RA extends Hr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,h=null,p=null,f=null,m=null,x=null;const M=typeof XRWebGLBinding<"u",v=new CA,d={},g=n.getContextAttributes();let E=null,S=null;const w=[],A=[],b=new it;let _=null,C=null;const P=new In;P.viewport=new At;const L=new In;L.viewport=new At;const O=[P,L],H=new OM;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=w[Y];return J===void 0&&(J=new tu,w[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=w[Y];return J===void 0&&(J=new tu,w[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=w[Y];return J===void 0&&(J=new tu,w[Y]=J),J.getHandSpace()};function K(Y){const J=A.indexOf(Y.inputSource);if(J===-1)return;const ve=w[J];ve!==void 0&&(ve.update(Y.inputSource,Y.frame,u||a),ve.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",I);for(let Y=0;Y<w.length;Y++){const J=A[Y];J!==null&&(A[Y]=null,w[Y].disconnect(J))}D=null,z=null,v.reset();for(const Y in d)delete d[Y];if(e.setRenderTarget(E),m=null,f=null,p=null,r=null,S=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(b.width,b.height,!1),C!==null){const Y=C.camera;Y.fov=C.fov,Y.zoom=C.zoom,Y.updateProjectionMatrix(),C=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(E=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",G),r.addEventListener("inputsourceschange",I),g.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(b),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,He=null,ge=null;g.depth&&(ge=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ve=g.stencil?Cr:Ui,He=g.stencil?Va:mi);const ne={colorFormat:n.RGBA8,depthFormat:ge,scaleFactor:s};p=this.getBinding(),f=p.createProjectionLayer(ne),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Kn(f.textureWidth,f.textureHeight,{format:$n,type:Mn,depthTexture:new Wa(f.textureWidth,f.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const ve={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,ve),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Kn(m.framebufferWidth,m.framebufferHeight,{format:$n,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function I(Y){for(let J=0;J<Y.removed.length;J++){const ve=Y.removed[J],He=A.indexOf(ve);He>=0&&(A[He]=null,w[He].disconnect(ve))}for(let J=0;J<Y.added.length;J++){const ve=Y.added[J];let He=A.indexOf(ve);if(He===-1){for(let ne=0;ne<w.length;ne++)if(ne>=A.length){A.push(ve),He=ne;break}else if(A[ne]===null){A[ne]=ve,He=ne;break}if(He===-1)break}const ge=w[He];ge&&ge.connect(ve)}}const U=new j,B=new j;function q(Y,J,ve){U.setFromMatrixPosition(J.matrixWorld),B.setFromMatrixPosition(ve.matrixWorld);const He=U.distanceTo(B),ge=J.projectionMatrix.elements,ne=ve.projectionMatrix.elements,Ge=ge[14]/(ge[10]-1),se=ge[14]/(ge[10]+1),oe=(ge[9]+1)/ge[5],fe=(ge[9]-1)/ge[5],le=(ge[8]-1)/ge[0],re=(ne[8]+1)/ne[0],je=Ge*le,Ze=Ge*re,ke=He/(-le+re),ue=ke*-le;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ue),Y.translateZ(ke),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ge[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const N=Ge+ke,Qe=se+ke,qe=je-ue,R=Ze+(He-ue),y=oe*se/Qe*N,V=fe*se/Qe*N;Y.projectionMatrix.makePerspective(qe,R,y,V,N,Qe),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function de(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let J=Y.near,ve=Y.far;v.texture!==null&&(v.depthNear>0&&(J=v.depthNear),v.depthFar>0&&(ve=v.depthFar)),H.near=L.near=P.near=J,H.far=L.far=P.far=ve,(D!==H.near||z!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),D=H.near,z=H.far),H.layers.mask=Y.layers.mask|6,P.layers.mask=H.layers.mask&-5,L.layers.mask=H.layers.mask&-3;const He=Y.parent,ge=H.cameras;de(H,He);for(let ne=0;ne<ge.length;ne++)de(ge[ne],He);ge.length===2?q(H,P,L):H.projectionMatrix.copy(P.projectionMatrix),C===null&&Y.isPerspectiveCamera&&(C={camera:Y,fov:Y.fov,zoom:Y.zoom}),he(Y,H,He)};function he(Y,J,ve){ve===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(ve.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=cf*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(f===null&&m===null))return c},this.setFoveation=function(Y){c=Y,f!==null&&(f.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(H)},this.getCameraTexture=function(Y){return d[Y]};let $e=null;function De(Y,J){if(h=J.getViewerPose(u||a),x=J,h!==null){const ve=h.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let He=!1;ve.length!==H.cameras.length&&(H.cameras.length=0,He=!0);for(let se=0;se<ve.length;se++){const oe=ve[se];let fe=null;if(m!==null)fe=m.getViewport(oe);else{const re=p.getViewSubImage(f,oe);fe=re.viewport,se===0&&(e.setRenderTargetTextures(S,re.colorTexture,re.depthStencilTexture),e.setRenderTarget(S))}let le=O[se];le===void 0&&(le=new In,le.layers.enable(se),le.viewport=new At,O[se]=le),le.matrix.fromArray(oe.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(oe.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(fe.x,fe.y,fe.width,fe.height),se===0&&(H.matrix.copy(le.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),He===!0&&H.cameras.push(le)}const ge=r.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){p=i.getBinding();const se=p.getDepthInformation(ve[0]);se&&se.isValid&&se.texture&&v.init(se,r.renderState)}if(ge&&ge.includes("camera-access")&&M){e.state.unbindTexture(),p=i.getBinding();for(let se=0;se<ve.length;se++){const oe=ve[se].camera;if(oe){let fe=d[oe];fe||(fe=new qx,d[oe]=fe);const le=p.getCameraImage(oe);fe.sourceTexture=le}}}}for(let ve=0;ve<w.length;ve++){const He=A[ve],ge=w[ve];He!==null&&ge!==void 0&&ge.update(He,J,u||a)}$e&&$e(Y,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),x=null}const ze=new Kx;ze.setAnimationLoop(De),this.setAnimationLoop=function(Y){$e=Y},this.dispose=function(){}}}const NA=new Et,rv=new Ye;rv.set(-1,0,0,0,1,0,0,0,1);function PA(t,e){function n(v,d){v.matrixAutoUpdate===!0&&v.updateMatrix(),d.value.copy(v.matrix)}function i(v,d){d.color.getRGB(v.fogColor.value,$x(t)),d.isFog?(v.fogNear.value=d.near,v.fogFar.value=d.far):d.isFogExp2&&(v.fogDensity.value=d.density)}function r(v,d,g,E,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(v,d):d.isMeshLambertMaterial?(s(v,d),d.envMap&&(v.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(v,d),p(v,d)):d.isMeshPhongMaterial?(s(v,d),h(v,d),d.envMap&&(v.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(v,d),f(v,d),d.isMeshPhysicalMaterial&&m(v,d,S)):d.isMeshMatcapMaterial?(s(v,d),x(v,d)):d.isMeshDepthMaterial?s(v,d):d.isMeshDistanceMaterial?(s(v,d),M(v,d)):d.isMeshNormalMaterial?s(v,d):d.isLineBasicMaterial?(a(v,d),d.isLineDashedMaterial&&o(v,d)):d.isPointsMaterial?c(v,d,g,E):d.isSpriteMaterial?u(v,d):d.isShadowMaterial?(v.color.value.copy(d.color),v.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(v,d){v.opacity.value=d.opacity,d.color&&v.diffuse.value.copy(d.color),d.emissive&&v.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(v.map.value=d.map,n(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,n(d.alphaMap,v.alphaMapTransform)),d.bumpMap&&(v.bumpMap.value=d.bumpMap,n(d.bumpMap,v.bumpMapTransform),v.bumpScale.value=d.bumpScale,d.side===un&&(v.bumpScale.value*=-1)),d.normalMap&&(v.normalMap.value=d.normalMap,n(d.normalMap,v.normalMapTransform),v.normalScale.value.copy(d.normalScale),d.side===un&&v.normalScale.value.negate()),d.displacementMap&&(v.displacementMap.value=d.displacementMap,n(d.displacementMap,v.displacementMapTransform),v.displacementScale.value=d.displacementScale,v.displacementBias.value=d.displacementBias),d.emissiveMap&&(v.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,v.emissiveMapTransform)),d.specularMap&&(v.specularMap.value=d.specularMap,n(d.specularMap,v.specularMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest);const g=e.get(d),E=g.envMap,S=g.envMapRotation;E&&(v.envMap.value=E,v.envMapRotation.value.setFromMatrix4(NA.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&v.envMapRotation.value.premultiply(rv),v.reflectivity.value=d.reflectivity,v.ior.value=d.ior,v.refractionRatio.value=d.refractionRatio),d.lightMap&&(v.lightMap.value=d.lightMap,v.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,v.lightMapTransform)),d.aoMap&&(v.aoMap.value=d.aoMap,v.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,v.aoMapTransform))}function a(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,d.map&&(v.map.value=d.map,n(d.map,v.mapTransform))}function o(v,d){v.dashSize.value=d.dashSize,v.totalSize.value=d.dashSize+d.gapSize,v.scale.value=d.scale}function c(v,d,g,E){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.size.value=d.size*g,v.scale.value=E*.5,d.map&&(v.map.value=d.map,n(d.map,v.uvTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,n(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function u(v,d){v.diffuse.value.copy(d.color),v.opacity.value=d.opacity,v.rotation.value=d.rotation,d.map&&(v.map.value=d.map,n(d.map,v.mapTransform)),d.alphaMap&&(v.alphaMap.value=d.alphaMap,n(d.alphaMap,v.alphaMapTransform)),d.alphaTest>0&&(v.alphaTest.value=d.alphaTest)}function h(v,d){v.specular.value.copy(d.specular),v.shininess.value=Math.max(d.shininess,1e-4)}function p(v,d){d.gradientMap&&(v.gradientMap.value=d.gradientMap)}function f(v,d){v.metalness.value=d.metalness,d.metalnessMap&&(v.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,v.metalnessMapTransform)),v.roughness.value=d.roughness,d.roughnessMap&&(v.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,v.roughnessMapTransform)),d.envMap&&(v.envMapIntensity.value=d.envMapIntensity)}function m(v,d,g){v.ior.value=d.ior,d.sheen>0&&(v.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),v.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(v.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,v.sheenColorMapTransform)),d.sheenRoughnessMap&&(v.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,v.sheenRoughnessMapTransform))),d.clearcoat>0&&(v.clearcoat.value=d.clearcoat,v.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(v.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,v.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(v.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===un&&v.clearcoatNormalScale.value.negate())),d.dispersion>0&&(v.dispersion.value=d.dispersion),d.retroreflectivity>0&&(v.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(v.iridescence.value=d.iridescence,v.iridescenceIOR.value=d.iridescenceIOR,v.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(v.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,v.iridescenceMapTransform)),d.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),d.transmission>0&&(v.transmission.value=d.transmission,v.transmissionSamplerMap.value=g.texture,v.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(v.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,v.transmissionMapTransform)),v.thickness.value=d.thickness,d.thicknessMap&&(v.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=d.attenuationDistance,v.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(v.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(v.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=d.specularIntensity,v.specularColor.value.copy(d.specularColor),d.specularColorMap&&(v.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,v.specularColorMapTransform)),d.specularIntensityMap&&(v.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,v.specularIntensityMapTransform))}function x(v,d){d.matcap&&(v.matcap.value=d.matcap)}function M(v,d){const g=e.get(d).light;v.referencePosition.value.setFromMatrixPosition(g.matrixWorld),v.nearDistance.value=g.shadow.camera.near,v.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function LA(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,w){const A=w.program;i.uniformBlockBinding(S,A)}function u(S,w){let A=r[S.id];A===void 0&&(v(S),A=h(S),r[S.id]=A,S.addEventListener("dispose",g));const b=w.program;i.updateUBOMapping(S,b);const _=e.render.frame;s[S.id]!==_&&(f(S),s[S.id]=_)}function h(S){const w=p();S.__bindingPointIndex=w;const A=t.createBuffer(),b=S.__size,_=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,b,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,A),A}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const w=r[S.id],A=S.uniforms,b=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let _=0,C=A.length;_<C;_++){const P=A[_];if(Array.isArray(P))for(let L=0,O=P.length;L<O;L++)m(P[L],_,L,b);else m(P,_,0,b)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(S,w,A,b){if(M(S,w,A,b)===!0){const _=S.__offset,C=S.value;if(Array.isArray(C)){let P=0;for(let L=0;L<C.length;L++){const O=C[L],H=d(O);x(O,S.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(C,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,S.__data)}}function x(S,w,A){typeof S=="number"||typeof S=="boolean"?w[0]=S:S.isMatrix3?(w[0]=S.elements[0],w[1]=S.elements[1],w[2]=S.elements[2],w[3]=0,w[4]=S.elements[3],w[5]=S.elements[4],w[6]=S.elements[5],w[7]=0,w[8]=S.elements[6],w[9]=S.elements[7],w[10]=S.elements[8],w[11]=0):ArrayBuffer.isView(S)?w.set(new S.constructor(S.buffer,S.byteOffset,w.length)):S.toArray(w,A)}function M(S,w,A,b){const _=S.value,C=w+"_"+A;if(b[C]===void 0)return typeof _=="number"||typeof _=="boolean"?b[C]=_:ArrayBuffer.isView(_)?b[C]=_.slice():b[C]=_.clone(),!0;{const P=b[C];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return b[C]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function v(S){const w=S.uniforms;let A=0;const b=16;for(let C=0,P=w.length;C<P;C++){const L=Array.isArray(w[C])?w[C]:[w[C]];for(let O=0,H=L.length;O<H;O++){const D=L[O],z=Array.isArray(D.value)?D.value:[D.value];for(let K=0,G=z.length;K<G;K++){const I=z[K],U=d(I),B=A%b,q=B%U.boundary,de=B+q;A+=q,de!==0&&b-de<U.storage&&(A+=b-de),D.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=A,A+=U.storage}}}const _=A%b;return _>0&&(A+=b-_),S.__size=A,S.__cache={},this}function d(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(w.boundary=16,w.storage=S.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",S),w}function g(S){const w=S.target;w.removeEventListener("dispose",g);const A=a.indexOf(w.__bindingPointIndex);a.splice(A,1),t.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function E(){for(const S in r)t.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:c,update:u,dispose:E}}const IA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ri=null;function DA(){return ri===null&&(ri=new _M(IA,16,16,kr,gi),ri.name="DFG_LUT",ri.minFilter=nn,ri.magFilter=nn,ri.wrapS=ci,ri.wrapT=ci,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}class UA{constructor(e={}){const{canvas:n=$S(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Mn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const M=m,v=new Set([vh,xh,gh]),d=new Set([Mn,mi,Ga,Va,ph,mh]),g=new Uint32Array(4),E=new Int32Array(4),S=new j;let w=null,A=null;const b=[],_=[];let C=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let L=!1,O=null,H=null,D=null,z=null;this._outputColorSpace=Nn;let K=0,G=0,I=null,U=-1,B=null;const q=new At,de=new At;let he=null;const $e=new st(0);let De=0,ze=n.width,Y=n.height,J=1,ve=null,He=null;const ge=new At(0,0,ze,Y),ne=new At(0,0,ze,Y);let Ge=!1;const se=new Th;let oe=!1,fe=!1;const le=new Et,re=new j,je=new At,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function ue(){return I===null?J:1}let N=i;function Qe(T,F){return n.getContext(T,F)}let qe,R,y,V,$,Q,me,xe,ee,ie,_e,Fe,Ee,ye,Oe,We,Ke,k,Se,te,Me,be,ce;try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${dh}`),n.addEventListener("webglcontextlost",xt,!1),n.addEventListener("webglcontextrestored",dt,!1),n.addEventListener("webglcontextcreationerror",Bn,!1),N===null){const F="webgl2";if(N=Qe(F,T),N===null)throw Qe(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(T){throw n.removeEventListener("webglcontextlost",xt,!1),n.removeEventListener("webglcontextrestored",dt,!1),n.removeEventListener("webglcontextcreationerror",Bn,!1),ut("WebGLRenderer: "+T.message),T}function Be(){qe=new DT(N),qe.init(),Me=new wA(N,qe),R=new TT(N,qe,e,Me),y=new EA(N,qe),R.reversedDepthBuffer&&f&&y.buffers.depth.setReversed(!0),H=N.createFramebuffer(),D=N.createFramebuffer(),z=N.createFramebuffer(),V=new OT(N),$=new cA,Q=new TA(N,qe,y,$,R,Me,V),me=new IT(P),xe=new BM(N),be=new MT(N,xe),ee=new UT(N,xe,V,be),ie=new BT(N,ee,xe,be,V),k=new kT(N,R,Q),Oe=new wT($),_e=new lA(P,me,qe,R,be,Oe),Fe=new PA(P,$),Ee=new dA,ye=new xA(qe),Ke=new ST(P,me,y,ie,x,c),We=new MA(P,ie,R),ce=new LA(N,V,R,y),Se=new ET(N,qe,V),te=new FT(N,qe,V),V.programs=_e.programs,P.capabilities=R,P.extensions=qe,P.properties=$,P.renderLists=Ee,P.shadowMap=We,P.state=y,P.info=V}M!==Mn&&(C=new HT(M,n.width,n.height,o,r,s));const Ie=new RA(P,N);this.xr=Ie,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=qe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=qe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(T){T!==void 0&&(J=T,this.setSize(ze,Y,!1))},this.getSize=function(T){return T.set(ze,Y)},this.setSize=function(T,F,Z=!0){if(Ie.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}ze=T,Y=F,n.width=Math.floor(T*J),n.height=Math.floor(F*J),Z===!0&&(n.style.width=T+"px",n.style.height=F+"px"),C!==null&&C.setSize(n.width,n.height),this.setViewport(0,0,T,F)},this.getDrawingBufferSize=function(T){return T.set(ze*J,Y*J).floor()},this.setDrawingBufferSize=function(T,F,Z){ze=T,Y=F,J=Z,n.width=Math.floor(T*Z),n.height=Math.floor(F*Z),this.setViewport(0,0,T,F)},this.setEffects=function(T){if(M===Mn){ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let F=0;F<T.length;F++)if(T[F].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(q)},this.getViewport=function(T){return T.copy(ge)},this.setViewport=function(T,F,Z,W){T.isVector4?ge.set(T.x,T.y,T.z,T.w):ge.set(T,F,Z,W),y.viewport(q.copy(ge).multiplyScalar(J).round())},this.getScissor=function(T){return T.copy(ne)},this.setScissor=function(T,F,Z,W){T.isVector4?ne.set(T.x,T.y,T.z,T.w):ne.set(T,F,Z,W),y.scissor(de.copy(ne).multiplyScalar(J).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(T){y.setScissorTest(Ge=T)},this.setOpaqueSort=function(T){ve=T},this.setTransparentSort=function(T){He=T},this.getClearColor=function(T){return T.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(T=!0,F=!0,Z=!0){let W=0;if(T){let X=!1;if(I!==null){const Ae=I.texture.format;X=v.has(Ae)}if(X){const Ae=I.texture.type,Re=d.has(Ae),we=Ke.getClearColor(),Pe=Ke.getClearAlpha(),Ue=we.r,Je=we.g,tt=we.b;Re?(g[0]=Ue,g[1]=Je,g[2]=tt,g[3]=Pe,N.clearBufferuiv(N.COLOR,0,g)):(E[0]=Ue,E[1]=Je,E[2]=tt,E[3]=Pe,N.clearBufferiv(N.COLOR,0,E))}else W|=N.COLOR_BUFFER_BIT}F&&(W|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(W|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&N.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),O=T},this.dispose=function(){n.removeEventListener("webglcontextlost",xt,!1),n.removeEventListener("webglcontextrestored",dt,!1),n.removeEventListener("webglcontextcreationerror",Bn,!1),Ke.dispose(),Ee.dispose(),ye.dispose(),$.dispose(),me.dispose(),ie.dispose(),be.dispose(),ce.dispose(),_e.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",Dh),Ie.removeEventListener("sessionend",Uh),gr.stop()};function xt(T){T.preventDefault(),am("WebGLRenderer: Context Lost."),L=!0}function dt(){am("WebGLRenderer: Context Restored."),L=!1;const T=V.autoReset,F=We.enabled,Z=We.autoUpdate,W=We.needsUpdate,X=We.type;Be(),V.autoReset=T,We.enabled=F,We.autoUpdate=Z,We.needsUpdate=W,We.type=X}function Bn(T){ut("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ei(T){const F=T.target;F.removeEventListener("dispose",ei),ov(F)}function ov(T){lv(T),$.remove(T)}function lv(T){const F=$.get(T).programs;F!==void 0&&(F.forEach(function(Z){_e.releaseProgram(Z)}),T.isShaderMaterial&&_e.releaseShaderCache(T))}this.renderBufferDirect=function(T,F,Z,W,X,Ae){F===null&&(F=Ze);const Re=X.isMesh&&X.matrixWorld.determinantAffine()<0,we=dv(T,F,Z,W,X);y.setMaterial(W,Re);let Pe=Z.index,Ue=1;if(W.wireframe===!0){if(Pe=ee.getWireframeAttribute(Z),Pe===void 0)return;Ue=2}const Je=Z.drawRange,tt=Z.attributes.position;let Le=Je.start*Ue,ft=(Je.start+Je.count)*Ue;Ae!==null&&(Le=Math.max(Le,Ae.start*Ue),ft=Math.min(ft,(Ae.start+Ae.count)*Ue)),Pe!==null?(Le=Math.max(Le,0),ft=Math.min(ft,Pe.count)):tt!=null&&(Le=Math.max(Le,0),ft=Math.min(ft,tt.count));const Lt=ft-Le;if(Lt<0||Lt===1/0)return;be.setup(X,W,we,Z,Pe);let yt,gt=Se;if(Pe!==null&&(yt=xe.get(Pe),gt=te,gt.setIndex(yt)),X.isMesh)W.wireframe===!0?(y.setLineWidth(W.wireframeLinewidth*ue()),gt.setMode(N.LINES)):gt.setMode(N.TRIANGLES);else if(X.isLine){let Zt=W.linewidth;Zt===void 0&&(Zt=1),y.setLineWidth(Zt*ue()),X.isLineSegments?gt.setMode(N.LINES):X.isLineLoop?gt.setMode(N.LINE_LOOP):gt.setMode(N.LINE_STRIP)}else X.isPoints?gt.setMode(N.POINTS):X.isSprite&&gt.setMode(N.TRIANGLES);if(X.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))gt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Zt=X._multiDrawStarts,Ce=X._multiDrawCounts,an=X._multiDrawCount,lt=Pe?xe.get(Pe).bytesPerElement:1,Cn=$.get(W).currentProgram.getUniforms();for(let ti=0;ti<an;ti++)Cn.setValue(N,"_gl_DrawID",ti),gt.render(Zt[ti]/lt,Ce[ti])}else if(X.isInstancedMesh)gt.renderInstances(Le,Lt,X.count);else if(Z.isInstancedBufferGeometry){const Zt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ce=Math.min(Z.instanceCount,Zt);gt.renderInstances(Le,Lt,Ce)}else gt.render(Le,Lt)};function Ih(T,F,Z,W){O!==null&&T.isNodeMaterial&&O.setObject(W,T),oe===!0&&Oe.setState(T,Z,!1),T.transparent===!0&&T.side===li&&T.forceSinglePass===!1?(T.side=un,T.needsUpdate=!0,ro(T,F,W),T.side=Fr,T.needsUpdate=!0,ro(T,F,W),T.side=li):ro(T,F,W)}this.compile=function(T,F,Z=null){Z===null&&(Z=T),O!==null&&O.renderStart(T,F,Z),A=ye.get(Z),A.init(F),_.push(A),Z.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(A.pushLight(X),X.castShadow&&A.pushShadow(X))}),T!==Z&&T.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(A.pushLight(X),X.castShadow&&A.pushShadow(X))}),A.setupLights(),O!==null&&O.updateLights(A.state.lightsArray),fe=this.localClippingEnabled,oe=Oe.init(this.clippingPlanes,fe),oe===!0&&Oe.setGlobalState(this.clippingPlanes,F),O!==null&&We.render(A.state.shadowsArray,Z,F);const W=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ae=X.material;if(Ae)if(Array.isArray(Ae))for(let Re=0;Re<Ae.length;Re++){const we=Ae[Re];Ih(we,Z,F,X),W.add(we)}else Ih(Ae,Z,F,X),W.add(Ae)}),A=_.pop(),O!==null&&O.renderEnd(),W},this.compileAsync=function(T,F,Z=null){const W=this.compile(T,F,Z);return new Promise(X=>{function Ae(){if(W.forEach(function(Re){const Pe=$.get(Re).currentProgram;(Pe===void 0||Pe.isReady())&&W.delete(Re)}),W.size===0){X(T);return}setTimeout(Ae,10)}qe.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let mc=null;function cv(T){mc&&mc(T)}function Dh(){gr.stop()}function Uh(){gr.start()}const gr=new Kx;gr.setAnimationLoop(cv),typeof self<"u"&&gr.setContext(self),this.setAnimationLoop=function(T){mc=T,Ie.setAnimationLoop(T),T===null?gr.stop():gr.start()},Ie.addEventListener("sessionstart",Dh),Ie.addEventListener("sessionend",Uh),this.render=function(T,F){if(F!==void 0&&F.isCamera!==!0){ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(T,F);const Z=Ie.enabled===!0&&Ie.isPresenting===!0,W=C!==null&&(I===null||Z)&&C.begin(P,I);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(F),F=Ie.getCamera()),T.isScene===!0&&T.onBeforeRender(P,T,F,I),A=ye.get(T,_.length),A.init(F),A.state.textureUnits=Q.getTextureUnits(),_.push(A),le.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),se.setFromProjectionMatrix(le,di,F.reversedDepth),fe=this.localClippingEnabled,oe=Oe.init(this.clippingPlanes,fe),w=Ee.get(T,b.length),w.init(),b.push(w),Ie.enabled===!0&&Ie.isPresenting===!0){const Re=P.xr.getDepthSensingMesh();Re!==null&&gc(Re,F,-1/0,P.sortObjects)}gc(T,F,0,P.sortObjects),w.finish(),O!==null&&O.updateLights(A.state.lightsArray),P.sortObjects===!0&&w.sort(ve,He),ke=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,ke&&Ke.addToRenderList(w,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&Oe.beginShadows();const X=A.state.shadowsArray;if(We.render(X,T,F),oe===!0&&Oe.endShadows(),(W&&C.hasRenderPass())===!1){const Re=w.opaque,we=w.transmissive;if(A.setupLights(),F.isArrayCamera){const Pe=F.cameras;if(we.length>0)for(let Ue=0,Je=Pe.length;Ue<Je;Ue++){const tt=Pe[Ue];Oh(Re,we,T,tt)}ke&&Ke.render(T);for(let Ue=0,Je=Pe.length;Ue<Je;Ue++){const tt=Pe[Ue];Fh(w,T,tt,tt.viewport)}}else we.length>0&&Oh(Re,we,T,F),ke&&Ke.render(T),Fh(w,T,F)}I!==null&&G===0&&(Q.updateMultisampleRenderTarget(I),Q.updateRenderTargetMipmap(I)),W&&C.end(P),T.isScene===!0&&T.onAfterRender(P,T,F),be.resetDefaultState(),U=-1,B=null,_.pop(),_.length>0?(A=_[_.length-1],Q.setTextureUnits(A.state.textureUnits),oe===!0&&Oe.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,b.pop(),b.length>0?w=b[b.length-1]:w=null,O!==null&&O.renderEnd()};function gc(T,F,Z,W){if(T.visible===!1)return;if(T.layers.test(F.layers)){if(T.isGroup)Z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(F);else if(T.isLightProbeGrid)A.pushLightProbeGrid(T);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(se)){W&&je.setFromMatrixPosition(T.matrixWorld).applyMatrix4(le);const Re=ie.update(T),we=T.material;we.visible&&w.push(T,Re,we,Z,je.z,null,F)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(se))){const Re=ie.update(T),we=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),je.copy(T.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),je.copy(Re.boundingSphere.center)),je.applyMatrix4(T.matrixWorld).applyMatrix4(le)),Array.isArray(we)){const Pe=Re.groups;for(let Ue=0,Je=Pe.length;Ue<Je;Ue++){const tt=Pe[Ue],Le=we[tt.materialIndex];Le&&Le.visible&&w.push(T,Re,Le,Z,je.z,tt,F)}}else we.visible&&w.push(T,Re,we,Z,je.z,null,F)}}const Ae=T.children;for(let Re=0,we=Ae.length;Re<we;Re++)gc(Ae[Re],F,Z,W)}function Fh(T,F,Z,W){const{opaque:X,transmissive:Ae,transparent:Re}=T;A.setupLightsView(Z),oe===!0&&Oe.setGlobalState(P.clippingPlanes,Z),W&&y.viewport(q.copy(W)),X.length>0&&io(X,F,Z),Ae.length>0&&io(Ae,F,Z),Re.length>0&&io(Re,F,Z),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Oh(T,F,Z,W){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[W.id]===void 0){const Le=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[W.id]=new Kn(1,1,{generateMipmaps:!0,type:Le?gi:Mn,minFilter:br,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const Ae=A.state.transmissionRenderTarget[W.id],Re=W.viewport||q;Ae.setSize(Re.z*P.transmissionResolutionScale,Re.w*P.transmissionResolutionScale);const we=P.getRenderTarget(),Pe=P.getActiveCubeFace(),Ue=P.getActiveMipmapLevel();P.setRenderTarget(Ae),P.getClearColor($e),De=P.getClearAlpha(),De<1&&P.setClearColor(16777215,.5),P.clear(),ke&&Ke.render(Z);const Je=P.toneMapping;P.toneMapping=pi;const tt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),A.setupLightsView(W),oe===!0&&Oe.setGlobalState(P.clippingPlanes,W),io(T,Z,W),Q.updateMultisampleRenderTarget(Ae),Q.updateRenderTargetMipmap(Ae),qe.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let ft=0,Lt=F.length;ft<Lt;ft++){const yt=F[ft],{object:gt,geometry:Zt,material:Ce,group:an}=yt;if(Ce.side===li&&gt.layers.test(W.layers)){const lt=Ce.side;Ce.side=un,Ce.needsUpdate=!0,kh(gt,Z,W,Zt,Ce,an),Ce.side=lt,Ce.needsUpdate=!0,Le=!0}}Le===!0&&(Q.updateMultisampleRenderTarget(Ae),Q.updateRenderTargetMipmap(Ae))}P.setRenderTarget(we,Pe,Ue),P.setClearColor($e,De),tt!==void 0&&(W.viewport=tt),P.toneMapping=Je}function io(T,F,Z){const W=F.isScene===!0?F.overrideMaterial:null;for(let X=0,Ae=T.length;X<Ae;X++){const Re=T[X],{object:we,geometry:Pe,group:Ue}=Re;let Je=Re.material;Je.allowOverride===!0&&W!==null&&(Je=W),we.layers.test(Z.layers)&&kh(we,F,Z,Pe,Je,Ue)}}function kh(T,F,Z,W,X,Ae){O!==null&&X.isNodeMaterial&&O.setObject(T,X),T.onBeforeRender(P,F,Z,W,X,Ae),T.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(P,F,Z,W,T,Ae),X.transparent===!0&&X.side===li&&X.forceSinglePass===!1?(X.side=un,X.needsUpdate=!0,P.renderBufferDirect(Z,F,W,X,T,Ae),X.side=Fr,X.needsUpdate=!0,P.renderBufferDirect(Z,F,W,X,T,Ae),X.side=li):P.renderBufferDirect(Z,F,W,X,T,Ae),T.onAfterRender(P,F,Z,W,X,Ae)}function ro(T,F,Z){F.isScene!==!0&&(F=Ze);const W=$.get(T),X=A.state.lights,Ae=A.state.shadowsArray,Re=X.state.version,we=_e.getParameters(T,X.state,Ae,F,Z,A.state.lightProbeGridArray),Pe=_e.getProgramCacheKey(we);let Ue=W.programs;W.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,W.fog=F.fog;const Je=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;W.envMap=me.get(T.envMap||W.environment,Je),W.envMapRotation=W.environment!==null&&T.envMap===null?F.environmentRotation:T.envMapRotation,Ue===void 0&&(T.addEventListener("dispose",ei),Ue=new Map,W.programs=Ue);let tt=Ue.get(Pe);if(tt!==void 0){if(W.currentProgram===tt&&W.lightsStateVersion===Re)return zh(T,we),tt}else we.uniforms=_e.getUniforms(T),O!==null&&T.isNodeMaterial&&O.build(T,Z,we),T.onBeforeCompile(we,P),tt=_e.acquireProgram(we,Pe),Ue.set(Pe,tt),W.uniforms=we.uniforms;const Le=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=Oe.uniform),zh(T,we),W.needsLights=hv(T),W.lightsStateVersion=Re,W.needsLights&&(Le.ambientLightColor.value=X.state.ambient,Le.lightProbe.value=X.state.probe,Le.sunLights.value=X.state.sun,Le.sunLightShadows.value=X.state.sunShadow,Le.directionalLights.value=X.state.directional,Le.directionalLightShadows.value=X.state.directionalShadow,Le.spotLights.value=X.state.spot,Le.spotLightShadows.value=X.state.spotShadow,Le.rectAreaLights.value=X.state.rectArea,Le.ltc_1.value=X.state.rectAreaLTC1,Le.ltc_2.value=X.state.rectAreaLTC2,Le.pointLights.value=X.state.point,Le.pointLightShadows.value=X.state.pointShadow,Le.hemisphereLights.value=X.state.hemi,Le.sunShadowMatrix.value=X.state.sunShadowMatrix,Le.sunShadowCascade.value=X.state.sunShadowCascade,Le.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Le.spotLightMatrix.value=X.state.spotLightMatrix,Le.spotLightMap.value=X.state.spotLightMap,Le.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=A.state.lightProbeGridArray.length>0,W.currentProgram=tt,W.uniformsList=null,tt}function Bh(T){if(T.uniformsList===null){const F=T.currentProgram.getUniforms();T.uniformsList=fl.seqWithValue(F.seq,T.uniforms)}return T.uniformsList}function zh(T,F){const Z=$.get(T);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function uv(T,F){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;S.setFromMatrixPosition(F.matrixWorld);for(let Z=0,W=T.length;Z<W;Z++){const X=T[Z];if(X.texture!==null&&X.boundingBox.containsPoint(S))return X}return null}function dv(T,F,Z,W,X){F.isScene!==!0&&(F=Ze),Q.resetTextureUnits();const Ae=F.fog,Re=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?F.environment:null,we=I===null?P.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ot.workingColorSpace,Pe=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Ue=me.get(W.envMap||Re,Pe),Je=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,tt=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Le=!!Z.morphAttributes.position,ft=!!Z.morphAttributes.normal,Lt=!!Z.morphAttributes.color;let yt=pi;W.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(yt=P.toneMapping);const gt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Zt=gt!==void 0?gt.length:0,Ce=$.get(W),an=A.state.lights;if(oe===!0&&(fe===!0||T!==B)){const vt=T===B&&W.id===U;Oe.setState(W,T,vt)}let lt=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==an.state.version||Ce.outputColorSpace!==we||X.isBatchedMesh&&Ce.batching===!1||!X.isBatchedMesh&&Ce.batching===!0||X.isBatchedMesh&&Ce.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Ce.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Ce.instancing===!1||!X.isInstancedMesh&&Ce.instancing===!0||X.isSkinnedMesh&&Ce.skinning===!1||!X.isSkinnedMesh&&Ce.skinning===!0||X.isInstancedMesh&&Ce.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ce.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ce.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ce.instancingMorph===!1&&X.morphTexture!==null||Ce.envMap!==Ue||W.fog===!0&&Ce.fog!==Ae||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Oe.numPlanes||Ce.numIntersection!==Oe.numIntersection)||Ce.vertexAlphas!==Je||Ce.vertexTangents!==tt||Ce.morphTargets!==Le||Ce.morphNormals!==ft||Ce.morphColors!==Lt||Ce.toneMapping!==yt||Ce.morphTargetsCount!==Zt||!!Ce.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(lt=!0):(lt=!0,Ce.__version=W.version);let Cn=Ce.currentProgram;lt===!0&&(Cn=ro(W,F,X),O&&W.isNodeMaterial&&O.onUpdateProgram(W,Cn,Ce));let ti=!1,Oi=!1,Vr=!1;const mt=Cn.getUniforms(),Nt=Ce.uniforms;if(y.useProgram(Cn.program)&&(ti=!0,Oi=!0,Vr=!0),W.id!==U&&(U=W.id,Oi=!0),Ce.needsLights){const vt=uv(A.state.lightProbeGridArray,X);Ce.lightProbeGrid!==vt&&(Ce.lightProbeGrid=vt,Oi=!0)}if(ti||B!==T){y.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),mt.setValue(N,"projectionMatrix",T.projectionMatrix),mt.setValue(N,"viewMatrix",T.matrixWorldInverse);const Bi=mt.map.cameraPosition;Bi!==void 0&&Bi.setValue(N,re.setFromMatrixPosition(T.matrixWorld)),R.logarithmicDepthBuffer&&mt.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&mt.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),B!==T&&(B=T,Oi=!0,Vr=!0)}if(Ce.needsLights&&(an.state.sunShadowMap.length>0&&mt.setValue(N,"sunShadowMap",an.state.sunShadowMap,Q),an.state.directionalShadowMap.length>0&&mt.setValue(N,"directionalShadowMap",an.state.directionalShadowMap,Q),an.state.spotShadowMap.length>0&&mt.setValue(N,"spotShadowMap",an.state.spotShadowMap,Q),an.state.pointShadowMap.length>0&&mt.setValue(N,"pointShadowMap",an.state.pointShadowMap,Q)),X.isSkinnedMesh){mt.setOptional(N,X,"bindMatrix"),mt.setOptional(N,X,"bindMatrixInverse");const vt=X.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),mt.setValue(N,"boneTexture",vt.boneTexture,Q))}X.isBatchedMesh&&(mt.setOptional(N,X,"batchingTexture"),mt.setValue(N,"batchingTexture",X._matricesTexture,Q),mt.setOptional(N,X,"batchingIdTexture"),mt.setValue(N,"batchingIdTexture",X._indirectTexture,Q),mt.setOptional(N,X,"batchingColorTexture"),X._colorsTexture!==null&&mt.setValue(N,"batchingColorTexture",X._colorsTexture,Q));const ki=Z.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0)&&k.update(X,Z,Cn),(Oi||Ce.receiveShadow!==X.receiveShadow)&&(Ce.receiveShadow=X.receiveShadow,mt.setValue(N,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&F.environment!==null&&(Nt.envMapIntensity.value=F.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=DA()),Oi){if(mt.setValue(N,"toneMappingExposure",P.toneMappingExposure),Ce.needsLights&&fv(Nt,Vr),Ae&&W.fog===!0&&Fe.refreshFogUniforms(Nt,Ae),Fe.refreshMaterialUniforms(Nt,W,J,Y,A.state.transmissionRenderTarget[T.id]),Ce.needsLights&&Ce.lightProbeGrid){const vt=Ce.lightProbeGrid;Nt.probesSH.value=vt.texture,Nt.probesMin.value.copy(vt.boundingBox.min),Nt.probesMax.value.copy(vt.boundingBox.max),Nt.probesResolution.value.copy(vt.resolution)}fl.upload(N,Bh(Ce),Nt,Q)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(fl.upload(N,Bh(Ce),Nt,Q),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&mt.setValue(N,"center",X.center),mt.setValue(N,"modelViewMatrix",X.modelViewMatrix),mt.setValue(N,"normalMatrix",X.normalMatrix),mt.setValue(N,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){const vt=W.uniformsGroups;for(let Bi=0,jr=vt.length;Bi<jr;Bi++){const Gh=vt[Bi];ce.update(Gh,Cn),ce.bind(Gh,Cn)}}return Cn}function fv(T,F){T.ambientLightColor.needsUpdate=F,T.lightProbe.needsUpdate=F,T.sunLights.needsUpdate=F,T.sunLightShadows.needsUpdate=F,T.directionalLights.needsUpdate=F,T.directionalLightShadows.needsUpdate=F,T.pointLights.needsUpdate=F,T.pointLightShadows.needsUpdate=F,T.spotLights.needsUpdate=F,T.spotLightShadows.needsUpdate=F,T.rectAreaLights.needsUpdate=F,T.hemisphereLights.needsUpdate=F}function hv(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(T,F,Z){const W=$.get(T);W.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),$.get(T.texture).__webglTexture=F,$.get(T.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Z,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,F){const Z=$.get(T);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(T,F=0,Z=0){I=T,K=F,G=Z;let W=null,X=!1,Ae=!1;if(T){const we=$.get(T);if(we.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(N.FRAMEBUFFER,we.__webglFramebuffer),q.copy(T.viewport),de.copy(T.scissor),he=T.scissorTest,y.viewport(q),y.scissor(de),y.setScissorTest(he),U=-1;return}else if(we.__webglFramebuffer===void 0)Q.setupRenderTarget(T);else if(we.__hasExternalTextures)Q.rebindTextures(T,$.get(T.texture).__webglTexture,$.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Je=T.depthTexture;if(we.__boundDepthTexture!==Je){if(Je!==null&&$.has(Je)&&(T.width!==Je.image.width||T.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(T)}}const Pe=T.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Ae=!0);const Ue=$.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ue[F])?W=Ue[F][Z]:W=Ue[F],X=!0):T.samples>0&&Q.useMultisampledRTT(T)===!1?W=$.get(T).__webglMultisampledFramebuffer:Array.isArray(Ue)?W=Ue[Z]:W=Ue,q.copy(T.viewport),de.copy(T.scissor),he=T.scissorTest}else q.copy(ge).multiplyScalar(J).floor(),de.copy(ne).multiplyScalar(J).floor(),he=Ge;if(Z!==0&&(W=H),y.bindFramebuffer(N.FRAMEBUFFER,W)&&y.drawBuffers(T,W),y.viewport(q),y.scissor(de),y.setScissorTest(he),X){const we=$.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,we.__webglTexture,Z)}else if(Ae){const we=F;for(let Pe=0;Pe<T.textures.length;Pe++){const Ue=$.get(T.textures[Pe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Pe,Ue.__webglTexture,Z,we)}}else if(T!==null&&Z!==0){const we=$.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,we.__webglTexture,Z)}U=-1};function Hh(T){const F=$.get(T);return(F.__readFormat!==T.format||F.__readType!==T.type)&&(F.__readFormat=T.format,F.__readType=T.type,F.__formatReadable=R.textureFormatReadable(T.format),F.__typeReadable=R.textureTypeReadable(T.type)),F}this.readRenderTargetPixels=function(T,F,Z,W,X,Ae,Re,we=0){if(!(T&&T.isWebGLRenderTarget)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=$.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe){y.bindFramebuffer(N.FRAMEBUFFER,Pe);try{const Ue=T.textures[we],Je=Ue.format,tt=Ue.type;T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+we);const Le=Hh(Ue);if(Le.__formatReadable===!1){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=T.width-W&&Z>=0&&Z<=T.height-X&&N.readPixels(F,Z,W,X,Me.convert(Je),Me.convert(tt),Ae)}finally{const Ue=I!==null?$.get(I).__webglFramebuffer:null;y.bindFramebuffer(N.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(T,F,Z,W,X,Ae,Re,we=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=$.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe)if(F>=0&&F<=T.width-W&&Z>=0&&Z<=T.height-X){y.bindFramebuffer(N.FRAMEBUFFER,Pe);const Ue=T.textures[we],Je=Ue.format,tt=Ue.type;T.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+we);const Le=Hh(Ue);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ft),N.bufferData(N.PIXEL_PACK_BUFFER,Ae.byteLength,N.STREAM_READ),N.readPixels(F,Z,W,X,Me.convert(Je),Me.convert(tt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const Lt=I!==null?$.get(I).__webglFramebuffer:null;y.bindFramebuffer(N.FRAMEBUFFER,Lt);const yt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await YS(N,yt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ft),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Ae),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(ft),N.deleteSync(yt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,F=null,Z=0){const W=Math.pow(2,-Z),X=Math.floor(T.image.width*W),Ae=Math.floor(T.image.height*W),Re=F!==null?F.x:0,we=F!==null?F.y:0;Q.setTexture2D(T,0),N.copyTexSubImage2D(N.TEXTURE_2D,Z,0,0,Re,we,X,Ae),y.unbindTexture()},this.copyTextureToTexture=function(T,F,Z=null,W=null,X=0,Ae=0){let Re,we,Pe,Ue,Je,tt,Le,ft,Lt;const yt=T.isCompressedTexture?T.mipmaps[Ae]:T.image;if(Z!==null)Re=Z.max.x-Z.min.x,we=Z.max.y-Z.min.y,Pe=Z.isBox3?Z.max.z-Z.min.z:1,Ue=Z.min.x,Je=Z.min.y,tt=Z.isBox3?Z.min.z:0;else{const Nt=Math.pow(2,-X);Re=Math.floor(yt.width*Nt),we=Math.floor(yt.height*Nt),T.isDataArrayTexture?Pe=yt.depth:T.isData3DTexture?Pe=Math.floor(yt.depth*Nt):Pe=1,Ue=0,Je=0,tt=0}W!==null?(Le=W.x,ft=W.y,Lt=W.z):(Le=0,ft=0,Lt=0);const gt=Me.convert(F.format),Zt=Me.convert(F.type);let Ce;F.isData3DTexture?(Q.setTexture3D(F,0),Ce=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Q.setTexture2DArray(F,0),Ce=N.TEXTURE_2D_ARRAY):(Q.setTexture2D(F,0),Ce=N.TEXTURE_2D),y.activeTexture(N.TEXTURE0),y.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),y.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),y.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const an=y.getParameter(N.UNPACK_ROW_LENGTH),lt=y.getParameter(N.UNPACK_IMAGE_HEIGHT),Cn=y.getParameter(N.UNPACK_SKIP_PIXELS),ti=y.getParameter(N.UNPACK_SKIP_ROWS),Oi=y.getParameter(N.UNPACK_SKIP_IMAGES);y.pixelStorei(N.UNPACK_ROW_LENGTH,yt.width),y.pixelStorei(N.UNPACK_IMAGE_HEIGHT,yt.height),y.pixelStorei(N.UNPACK_SKIP_PIXELS,Ue),y.pixelStorei(N.UNPACK_SKIP_ROWS,Je),y.pixelStorei(N.UNPACK_SKIP_IMAGES,tt);const Vr=T.isDataArrayTexture||T.isData3DTexture,mt=F.isDataArrayTexture||F.isData3DTexture;if(T.isDepthTexture){const Nt=$.get(T),ki=$.get(F),vt=$.get(Nt.__renderTarget),Bi=$.get(ki.__renderTarget);y.bindFramebuffer(N.READ_FRAMEBUFFER,vt.__webglFramebuffer),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let jr=0;jr<Pe;jr++)Vr&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$.get(T).__webglTexture,X,tt+jr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$.get(F).__webglTexture,Ae,Lt+jr)),N.blitFramebuffer(Ue,Je,Re,we,Le,ft,Re,we,N.DEPTH_BUFFER_BIT,N.NEAREST);y.bindFramebuffer(N.READ_FRAMEBUFFER,null),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||$.has(T)){const Nt=$.get(T),ki=$.get(F);y.bindFramebuffer(N.READ_FRAMEBUFFER,D),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,z);for(let vt=0;vt<Pe;vt++)Vr?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Nt.__webglTexture,X,tt+vt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Nt.__webglTexture,X),mt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ki.__webglTexture,Ae,Lt+vt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ki.__webglTexture,Ae),X!==0?N.blitFramebuffer(Ue,Je,Re,we,Le,ft,Re,we,N.COLOR_BUFFER_BIT,N.NEAREST):mt?N.copyTexSubImage3D(Ce,Ae,Le,ft,Lt+vt,Ue,Je,Re,we):N.copyTexSubImage2D(Ce,Ae,Le,ft,Ue,Je,Re,we);y.bindFramebuffer(N.READ_FRAMEBUFFER,null),y.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else mt?T.isDataTexture||T.isData3DTexture?N.texSubImage3D(Ce,Ae,Le,ft,Lt,Re,we,Pe,gt,Zt,yt.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(Ce,Ae,Le,ft,Lt,Re,we,Pe,gt,yt.data):N.texSubImage3D(Ce,Ae,Le,ft,Lt,Re,we,Pe,gt,Zt,yt):T.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Ae,Le,ft,Re,we,gt,Zt,yt.data):T.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Ae,Le,ft,yt.width,yt.height,gt,yt.data):N.texSubImage2D(N.TEXTURE_2D,Ae,Le,ft,Re,we,gt,Zt,yt);y.pixelStorei(N.UNPACK_ROW_LENGTH,an),y.pixelStorei(N.UNPACK_IMAGE_HEIGHT,lt),y.pixelStorei(N.UNPACK_SKIP_PIXELS,Cn),y.pixelStorei(N.UNPACK_SKIP_ROWS,ti),y.pixelStorei(N.UNPACK_SKIP_IMAGES,Oi),Ae===0&&F.generateMipmaps&&N.generateMipmap(Ce),y.unbindTexture()},this.initRenderTarget=function(T){$.get(T).__webglFramebuffer===void 0&&Q.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Q.setTextureCube(T,0):T.isData3DTexture?Q.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Q.setTexture2DArray(T,0):Q.setTexture2D(T,0),y.unbindTexture()},this.resetState=function(){K=0,G=0,I=null,y.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),n.unpackColorSpace=ot._getUnpackColorSpace()}}function FA({sectorTitle:t="GJ 504B",codename:e="SEC-01",onTargetClick:n}){const i=ae.useRef(null);return ae.useEffect(()=>{const r=i.current;if(!r)return;let s=r.clientWidth||500,a=r.clientHeight||500;const o=new dM,c=new In(36,s/a,.1,100);c.position.set(0,0,7.2);const u=new UA({alpha:!0,antialias:!0,powerPreference:"high-performance"});u.setSize(s,a),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.toneMapping=fh,u.toneMappingExposure=1.15,r.appendChild(u.domElement);const h=document.createElement("canvas");h.width=1024,h.height=512;const p=h.getContext("2d");if(p){const fe=p.createLinearGradient(0,0,0,512);fe.addColorStop(0,"#061017"),fe.addColorStop(.35,"#0c222c"),fe.addColorStop(.7,"#081720"),fe.addColorStop(1,"#040b10"),p.fillStyle=fe,p.fillRect(0,0,1024,512);for(let re=0;re<512;re+=4){const Ze=re%16<8?"rgba(13, 148, 136, 0.45)":"rgba(225, 29, 72, 0.4)";p.fillStyle=Ze,p.fillRect(0,re,1024,4)}[{cx:320,cy:210,r:90,col:"rgba(20, 184, 166, 0.35)"},{cx:720,cy:300,r:110,col:"rgba(255, 107, 90, 0.32)"},{cx:512,cy:140,r:70,col:"rgba(20, 184, 166, 0.28)"},{cx:180,cy:370,r:80,col:"rgba(255, 107, 90, 0.25)"}].forEach(re=>{const je=p.createRadialGradient(re.cx,re.cy,0,re.cx,re.cy,re.r);je.addColorStop(0,re.col),je.addColorStop(.7,"rgba(12, 34, 44, 0.2)"),je.addColorStop(1,"rgba(0, 0, 0, 0)"),p.fillStyle=je,p.beginPath(),p.arc(re.cx,re.cy,re.r,0,Math.PI*2),p.fill()}),p.fillStyle="rgba(255, 255, 255, 0.04)";for(let re=0;re<3500;re++){const je=Math.random()*1024,Ze=Math.random()*512;p.fillRect(je,Ze,1.5,1.5)}}const f=new MM(h);f.wrapS=Bl,f.wrapT=ci;const m=new ql(1.5,64,64),x=new NM({map:f,roughness:.65,metalness:.15,emissive:new st(400932),emissiveIntensity:.5}),M=new Fn(m,x);o.add(M);const v=new ql(1.56,48,48),d=new Jn({vertexShader:`
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.72 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.2);
          gl_FragColor = vec4(0.08, 0.72, 0.65, intensity * 0.7);
        }
      `,blending:Md,side:un,transparent:!0,depthWrite:!1}),g=new Fn(v,d);o.add(g);const E=new vs;o.add(E);const S=new vu(0,0,2.35,1.95,0,2*Math.PI,!1,0),w=S.getPoints(120),A=new Xt().setFromPoints(w),b=new wh({color:16739162,transparent:!0,opacity:.65,linewidth:1.5}),_=new xu(A,b);_.rotation.x=Math.PI*.38,_.rotation.y=Math.PI*.15,E.add(_);const P=new vu(0,0,2.5,2.1,0,2*Math.PI,!1,0).getPoints(120),L=new Xt().setFromPoints(P),O=new Am({color:1357990,transparent:!0,opacity:.45,dashSize:.18,gapSize:.12}),H=new xu(L,O);H.computeLineDistances(),H.rotation.x=Math.PI*.48,H.rotation.y=-Math.PI*.28,E.add(H);const D=new Xt;D.setAttribute("position",new $t([0,0,0],3));const z=new Wx({color:1357990,size:.18,transparent:!0,opacity:.95}),K=new SM(D,z);_.add(K);const G=new vs;o.add(G);const U=new vu(0,0,2,2,0,2*Math.PI,!1,0).getPoints(64),B=new Xt().setFromPoints(U),q=new Am({color:1357990,transparent:!0,opacity:.25,dashSize:.15,gapSize:.25}),de=new xu(B,q);de.computeLineDistances(),G.add(de);const he=new Ah(.06,.08,4),$e=new Eh({color:16739162,side:li,transparent:!0,opacity:.85}),De=new Fn(he,$e);De.position.set(-.25,.5,1.4),De.rotation.z=Math.PI/4,o.add(De);const ze=new Pm(15268085,2.2);ze.position.set(4,3,5),o.add(ze);const Y=new Pm(16739162,1.4);Y.position.set(-4,-2,-3),o.add(Y);const J=new UM(2246744,1.8);o.add(J);let ve=0,He=0;const ge=fe=>{const le=r.getBoundingClientRect();(fe.clientX-le.left)/le.width*2-1,ve=-((fe.clientY-le.top)/le.height*2-1),He=-ve*.35};r.addEventListener("mousemove",ge);let ne=0,Ge=0;const se=()=>{Ge+=.012,M.rotation.y+=.002,M.rotation.x+=(He-M.rotation.x)*.05,M.rotation.z=Math.sin(Ge*.5)*.03;const fe=Ge*.3%1,le=S.getPoint(fe);K.position.set(le.x,le.y,0),G.rotation.z=Ge*.02,De.scale.setScalar(1+Math.sin(Ge*3.5)*.08),u.render(o,c),ne=requestAnimationFrame(se)};ne=requestAnimationFrame(se);const oe=()=>{r&&(s=r.clientWidth,a=r.clientHeight,c.aspect=s/a,c.updateProjectionMatrix(),u.setSize(s,a))};return window.addEventListener("resize",oe),()=>{cancelAnimationFrame(ne),r.removeEventListener("mousemove",ge),window.removeEventListener("resize",oe),u.dispose(),m.dispose(),x.dispose(),v.dispose(),d.dispose(),f.dispose(),r.contains(u.domElement)&&r.removeChild(u.domElement)}},[]),l.jsx("div",{className:"celestial-viewport",ref:i})}function OA({campaign:t,progress:e,active:n,onSetActive:i,onDeploy:r,muted:s,onToggleMute:a,registerPick:o,setStage:c,onHelp:u}){const h=zt[n]||zt[0],p=ae.useRef(null);ae.useEffect(()=>(o(m=>{if(m.startsWith("sector:")){const x=Number(m.slice(7));x>=1&&x<=zt.length&&x-1!==n&&(Ve.play("select"),i(x-1))}}),()=>o(()=>{})),[o,i,n]),ae.useEffect(()=>{var x;const m={};for(const M of zt)m[M.id]=!!((x=e.missions[M.id])!=null&&x.passed);c({kind:"map",sectors:zt,active:n,passed:m})},[n,e,c]),ae.useEffect(()=>{const m=x=>{if(x.key==="Enter"||x.key===" ")x.preventDefault(),Ve.play("launch"),r(h.id);else if(["1","2","3","4"].includes(x.key)){const M=Number(x.key)-1;M<zt.length&&(Ve.play("select"),i(M))}};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[n,h.id,r,i]);const f=()=>{var m;(m=p.current)==null||m.scrollIntoView({behavior:"smooth"})};return l.jsxs("div",{className:"scrollable-home-container",children:[l.jsxs("section",{className:"home-planet-hero-section",children:[l.jsxs("div",{className:"hero-editorial-center",children:[l.jsx("span",{className:"hero-kicker-tag",children:"SPACETIME DEFENSE SYSTEM"}),l.jsx("h1",{className:"hero-garamond-title",children:"Quantum Sentinel"}),l.jsxs("div",{className:"hero-subtitle-bar",children:[l.jsx("span",{className:"sub-dash"}),l.jsx("span",{className:"sub-tag",children:"THE PROTECTION PARADOX"}),l.jsx("span",{className:"sub-dash"})]}),l.jsx("p",{className:"hero-tagline-text gaming-punchline",children:"Catch Errors. Protect Qubits."})]}),l.jsx("div",{className:"home-planet-orb-wrap",children:l.jsx(FA,{sectorTitle:h.title,codename:h.codename})}),l.jsxs("div",{className:"home-hero-cta-deck",children:[l.jsx("button",{id:"home-start-mission-btn",type:"button",className:"home-primary-deploy-btn",style:{cursor:"pointer",pointerEvents:"auto"},onClick:()=>{Ve.play("launch"),r(h.id)},children:l.jsxs("span",{children:["START MISSION · SECTOR 0",h.id," (",h.title,")"]})}),l.jsxs("button",{className:"scroll-indicator-btn",onClick:f,children:[l.jsx("span",{children:"Explore campaign sectors & system intel"}),l.jsx(qy,{size:14,className:"bounce-arrow"})]})]})]}),l.jsxs("section",{className:"home-scroll-section",ref:p,children:[l.jsxs("div",{className:"section-header-row",children:[l.jsxs("div",{className:"sec-title-wrap",children:[l.jsx("span",{className:"section-kicker",children:"OPERATIONAL CAMPAIGN"}),l.jsx("h2",{className:"section-title",children:"Deployment Sectors"})]}),l.jsx("div",{className:"sec-header-line"})]}),l.jsx("div",{className:"home-sectors-grid",children:zt.map((m,x)=>{var d;const M=x===n,v=!!((d=e.missions[m.id])!=null&&d.passed);return l.jsxs("div",{className:`sector-mission-card ${M?"active":""} ${v?"cleared":""}`,onClick:()=>{Ve.play("select"),i(x)},children:[l.jsxs("div",{className:"card-top-status",children:[l.jsxs("span",{className:"card-sec-badge",children:["SEC-0",m.id]}),l.jsx("span",{className:`card-verdict-pill ${v?"cleared":"ready"}`,children:v?"✓ SECURED":M?"TARGETED":"STANDBY"})]}),l.jsx("h3",{className:"card-sector-name",children:m.title}),l.jsx("span",{className:"card-sector-subtitle",children:m.label}),l.jsx("p",{className:"card-brief-excerpt",children:m.brief}),l.jsxs("div",{className:"card-spec-strip",children:[l.jsxs("div",{className:"spec-pill",children:[l.jsx("small",{children:"NOISE"}),l.jsxs("strong",{children:[(m.id===1||m.id===2?.04:.01)*100,"%"]})]}),l.jsxs("div",{className:"spec-pill",children:[l.jsx("small",{children:"METHOD"}),l.jsx("strong",{children:m.id===4?"T-Gate Magic":"Spacetime Checks"})]})]}),l.jsxs("button",{className:"card-deploy-action-btn",onClick:g=>{g.stopPropagation(),Ve.play("launch"),i(x),r(m.id)},children:[l.jsxs("span",{children:["Deploy Sector 0",m.id]}),l.jsx(vx,{size:14})]})]},m.id)})})]}),l.jsxs("section",{className:"home-scroll-section",children:[l.jsxs("div",{className:"section-header-row",children:[l.jsxs("div",{className:"sec-title-wrap",children:[l.jsx("span",{className:"section-kicker",children:"SCIENTIFIC PRINCIPLES"}),l.jsx("h2",{className:"section-title",children:"Spacetime Quantum Architecture"})]}),l.jsx("div",{className:"sec-header-line"})]}),l.jsxs("div",{className:"home-intel-grid",children:[l.jsxs("div",{className:"intel-glass-card",children:[l.jsx("div",{className:"intel-card-icon",style:{color:"#0d9488"},children:l.jsx(Ka,{size:22})}),l.jsx("h4",{children:"Spacetime Parity Checks"}),l.jsx("p",{className:"gaming-intel-text",children:"Helper ancilla tripwires weave through the circuit's timeline, latching onto data qubits with two-qubit couplers. If noise corrupts a wire, the ancilla fires a syndrome alarm before terminal readout."})]}),l.jsxs("div",{className:"intel-glass-card",children:[l.jsx("div",{className:"intel-card-icon",style:{color:"#e11d48"},children:l.jsx(ka,{size:22})}),l.jsx("h4",{children:"Syndrome Post-Selection"}),l.jsx("p",{className:"gaming-intel-text",children:"Instead of burning thousands of physical qubits on active fault-tolerant correction, the system purges any run flagging an alarm. Surviving clean runs yield dramatically purer quantum states."})]}),l.jsxs("div",{className:"intel-glass-card",children:[l.jsx("div",{className:"intel-card-icon",style:{color:"#0d9488"},children:l.jsx(yx,{size:22})}),l.jsx("h4",{children:"The Protection Paradox"}),l.jsx("p",{className:"gaming-intel-text",children:"The core dilemma: helper check gates are physical circuits that inject their own hardware noise. Over-checking destroys throughput faster than postselection can purify it. Calibration is everything."})]})]})]}),l.jsx("footer",{className:"home-scroll-footer",children:l.jsxs("div",{className:"footer-telemetry-strip",children:[l.jsx("span",{children:"QISKIT 2.5 AER ENGINE"}),l.jsx("span",{className:"dot-sep",children:"·"}),l.jsx("span",{children:"2,048 SHOTS / RUN"}),l.jsx("span",{className:"dot-sep",children:"·"}),l.jsx("span",{children:"SPACETIME CODES (qiskit-paulice)"}),l.jsx("span",{className:"dot-sep",children:"·"}),l.jsx("span",{children:"ZERO SYNTHETIC SCORES"})]})}),l.jsxs("div",{className:"bottom-floating-tools",children:[l.jsxs("button",{className:"floating-tool-btn",onClick:a,title:s?"Unmute Audio FX":"Mute Audio FX","aria-label":"Toggle Audio FX",children:[s?l.jsx(uh,{size:15}):l.jsx(ch,{size:15}),l.jsx("span",{children:s?"MUTED":"AUDIO"})]}),l.jsxs("button",{className:"floating-tool-btn",onClick:u,title:"Game Guide & Rules","aria-label":"Game Guide",children:[l.jsx(Ol,{size:15}),l.jsx("span",{children:"GUIDE"})]})]})]})}async function Xi(t,e){const n=await fetch(t,e===void 0?void 0:{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});let i=null;try{i=await n.json()}catch{}if(!n.ok){const r=i==null?void 0:i.detail;throw new Error(typeof r=="string"?r:r?JSON.stringify(r):`API ${n.status}`)}return i}const qi={campaign:()=>Xi("/api/campaign"),health:()=>Xi("/api/health"),configurations:()=>Xi("/api/configurations"),scene:t=>Xi("/api/scene",t),preflight:(t,e,n)=>Xi("/api/preflight",{mission:t,spec:e,budget:n}),recommendations:(t,e)=>Xi("/api/recommendations",{mission:t,budget:e}),circuit:t=>Xi("/api/circuit",t),execute:(t,e,n,i,r)=>Xi("/api/execute",{mission:t,mode:e,spec:n,budget:i,interpretation:r})};function kA(t){return t===2?{ancillas:1,gates:12,depth:25,retention:.75}:{ancillas:2,gates:30,depth:60,retention:.7}}function BA(){return{n:4,seed:19,depth_parameter:3,noise_2q:.01,shots:2048,readout_noise:.01}}function zA(t,e){const n=e.targetOrder.length?e.targetOrder.join("-"):"none";return{...t,shots:e.shots,readout:t.readout_noise??.01,t_count:e.t_count,target_order:e.checks===0?"none":n,checks:e.checks}}function sv({mission:t,spec:e,result:n,onComplete:i}){const[r,s]=ae.useState(0),[a,o]=ae.useState(!1),[c,u]=ae.useState(0),[h,p]=ae.useState(0),[f,m]=ae.useState(0),[x,M]=ae.useState(0),[v,d]=ae.useState(0),[g,E]=ae.useState(0),{row:S}=n,w=e.shots||2048,A=S.accepted??Math.round(w*(Number(S.retention)||1)),b=w-A,_=((Number(S.retention)||1)*100).toFixed(1),C=((Number(S.baseline_fidelity)||0)*100).toFixed(1),P=((Number(S.conditional_fidelity)||0)*100).toFixed(1),L=((Number(S.conditional_fidelity)-Number(S.baseline_fidelity))*100).toFixed(1),O=e.checks,H=t.id===4,D=[{id:0,phaseTitle:"PHASE 1 · HARDWARE NOISE INJECTION",shortTitle:"1. Noise Injection",badge:"DEPENG-01: NOISE ACTIVE",badgeColor:"#ff6b5a",summary:`Simulating ${w.toLocaleString()} shots on ${e.n} qubits with hardware depolarizing noise.`,description:`In physical quantum processors, entangling 2-qubit CZ gates suffer ${(e.noise_2q*100).toFixed(1)}% depolarizing error rates. Random bit-flips and phase-flips corrupt quantum states mid-circuit.`},{id:1,phaseTitle:"PHASE 2 · SPACETIME CHECK DEPLOYMENT",shortTitle:"2. Spacetime Checks",badge:"CHECK-02: WATCHERS ARMED",badgeColor:"#14b8a6",summary:O>0?`Deploying ${O} spacetime check(s) across target qubits [${e.target_order}].`:H?"Non-Clifford T-gate computation (diagonal Z-checks commute: TZ = ZT).":"Running unprotected baseline configuration (0 checks).",description:O>0?"Helper ancilla qubits act as real-time parity tripwires. They entangle with data qubits to measure parity across circuit depth. When noise flips a qubit, the ancilla sounds an alarm (syndrome bit = 1).":H?"T-gates are non-Clifford rotations by π/4. They only commute with diagonal Z-checks. Standard Clifford checks do not commute with T rotations!":"Zero checks deployed. No tripwires are watching for errors, so noise corrupts the final measurement unchecked."},{id:2,phaseTitle:"PHASE 3 · SYNDROME POST-SELECTION SIFTER",shortTitle:"3. Dual-Chute Sorter",badge:"FILTER-03: SIFTER ACTIVE",badgeColor:"#14b8a6",summary:O>0?`Sorting ${w.toLocaleString()} shots: ${A.toLocaleString()} clean preserved, ${b.toLocaleString()} corrupted purged.`:`All ${w.toLocaleString()} shots kept (no checks deployed).`,description:O>0?"Quantum error detection isolates pure states without active logical overhead: every run where the watcher ancilla alarmed (syndrome = 1) is discarded. Only clean-syndrome runs (0) are passed to the final output.":"Without checks, no syndrome alarms are measured. Corrupted shots remain mixed with clean shots."},{id:3,phaseTitle:"PHASE 4 · PURIFIED FIDELITY & MISSION SCORE",shortTitle:"4. Accuracy & Score",badge:"METRIC-04: SCORE VERIFIED",badgeColor:"#14b8a6",summary:Number(L)>0?`Fidelity elevated by +${L}% (from ${C}% baseline to ${P}%)!`:`Output fidelity evaluated at ${P}%.`,description:"Purging corrupted runs purifies the final quantum distribution, achieving higher fidelity to the ideal state. Mission score balances fidelity with shot retention: Score = Fidelity × Retention × 100."}];ae.useEffect(()=>{if(a)return;const I=setInterval(()=>{u(U=>U>=100?r<D.length-1?(s(B=>B+1),0):(clearInterval(I),100):U+2.5)},100);return()=>clearInterval(I)},[r,a,D.length]),ae.useEffect(()=>{if(r===0)Ve.play("zap");else if(r===1)Ve.play("place");else if(r===2){Ve.play("scan"),p(0),m(0);const I=performance.now(),U=1200,B=q=>{const de=q-I,he=Math.min(1,de/U);p(Math.round(A*he)),m(Math.round(b*he)),he<1?requestAnimationFrame(B):Ve.play("chime")};requestAnimationFrame(B)}else if(r===3){Ve.play("success"),M(Number(C)),d(0),E(0);const I=Number(P),U=n.verdict.score,B=performance.now(),q=1400,de=he=>{const $e=he-B,De=Math.min(1,$e/q);M(Number((Number(C)+(I-Number(C))*De).toFixed(1))),d(Number((U*De).toFixed(1))),De<1?requestAnimationFrame(de):E(n.verdict.passed?3:1)};requestAnimationFrame(de)}},[r,A,b,C,P,n.verdict.score,n.verdict.passed]);const z=D[r],K=()=>{r<D.length-1?(s(I=>I+1),u(0),Ve.play("select")):i()},G=()=>{r>0&&(s(I=>I-1),u(0),Ve.play("select"))};return l.jsx("div",{className:"exec-gamified-overlay",children:l.jsxs("div",{className:"exec-gamified-modal",children:[l.jsxs("div",{className:"exec-modal-header",children:[l.jsxs("div",{className:"exec-header-info",children:[l.jsxs("span",{className:"phase-pill-badge",style:{backgroundColor:`${z.badgeColor}18`,color:z.badgeColor,borderColor:`${z.badgeColor}40`},children:[l.jsx(ka,{size:13})," ",z.badge]}),l.jsx("h2",{className:"exec-modal-title",children:z.phaseTitle})]}),l.jsxs("button",{className:"skip-action-btn",onClick:i,children:[l.jsx("span",{children:"Skip to Debrief"}),l.jsx(oS,{size:14})]})]}),l.jsxs("div",{className:"exec-modal-body",children:[l.jsx("div",{className:"exec-stepper-row",children:D.map((I,U)=>{const B=U<r,q=U===r;return l.jsxs("button",{className:`stepper-tab ${q?"active":""} ${B?"done":""}`,onClick:()=>{s(U),u(0)},children:[l.jsx("div",{className:"tab-number-circle",children:B?l.jsx(Ba,{size:13}):U+1}),l.jsx("span",{className:"tab-title-text",children:I.shortTitle})]},I.id)})}),l.jsxs("div",{className:"exec-phase-briefing",children:[l.jsxs("div",{className:"briefing-header",children:[l.jsx(oh,{size:13,color:"#0d9488"}),l.jsxs("span",{className:"briefing-tag",children:["MISSION TELEMETRY · ",z.badge]})]}),l.jsx("p",{className:"phase-summary-text",children:z.summary}),l.jsx("p",{className:"phase-desc-text",children:z.description})]}),r===0&&l.jsxs("div",{className:"phase-chamber noise-chamber",children:[l.jsxs("div",{className:"chamber-game-stage",children:[l.jsxs("div",{className:"stage-header-tag",children:[l.jsx(za,{size:14,color:"#ff6b5a"}),l.jsx("span",{children:"SILICON QUANTUM PROCESSOR BUS · LIVE DEPOLARIZING NOISE INJECTION"})]}),l.jsx("div",{className:"silicon-bus-canvas",children:Array.from({length:e.n},(I,U)=>l.jsxs("div",{className:"bus-wire-row",children:[l.jsxs("span",{className:"bus-wire-label",children:["q",U]}),l.jsxs("div",{className:"bus-wire-track",children:[l.jsxs("div",{className:"particle-stream",children:[l.jsx("span",{className:"quantum-orb orb-clean o1"}),l.jsx("span",{className:"quantum-orb orb-glitch o2",children:"⚡"}),l.jsx("span",{className:"quantum-orb orb-clean o3"}),l.jsx("span",{className:"quantum-orb orb-glitch o4",children:"⚡"}),l.jsx("span",{className:"quantum-orb orb-clean o5"})]}),l.jsxs("div",{className:"noise-hazard-gate",children:[l.jsx("span",{className:"hazard-pulse"}),l.jsxs("span",{className:"hazard-label",children:["CZ GATE NOISE (",(e.noise_2q*100).toFixed(0),"%)"]})]})]})]},U))}),l.jsxs("div",{className:"noise-live-legend",children:[l.jsxs("span",{className:"legend-item",children:[l.jsx("i",{className:"dot-clean"})," Clean State |ψ⟩"]}),l.jsxs("span",{className:"legend-item",children:[l.jsx("i",{className:"dot-glitch"})," Depolarized State |ψ'⟩ (Bit/Phase Corrupted)"]})]})]}),l.jsxs("div",{className:"chamber-telemetry-grid",children:[l.jsxs("div",{className:"telemetry-card",children:[l.jsx("small",{children:"TOTAL PHYSICAL SHOTS"}),l.jsx("strong",{style:{color:"#0d9488"},children:w.toLocaleString()}),l.jsx("span",{children:"Executed in Qiskit Aer"})]}),l.jsxs("div",{className:"telemetry-card",children:[l.jsx("small",{children:"2Q HARDWARE NOISE"}),l.jsxs("strong",{style:{color:"#ff6b5a"},children:[(e.noise_2q*100).toFixed(1),"%"]}),l.jsx("span",{children:"Depolarizing error rate"})]}),l.jsxs("div",{className:"telemetry-card",children:[l.jsx("small",{children:"RAW UNPROTECTED ACCURACY"}),l.jsxs("strong",{style:{color:"#64748b"},children:[C,"%"]}),l.jsx("span",{children:"Fidelity without QED checks"})]})]})]}),r===1&&l.jsxs("div",{className:"phase-chamber check-chamber",children:[l.jsxs("div",{className:"chamber-game-stage",children:[l.jsxs("div",{className:"stage-header-tag",children:[l.jsx(rS,{size:14,color:"#0d9488"}),l.jsx("span",{children:"SPACETIME PARITY TRIPWIRE GRID · COHERENT ERROR INTERCEPTION"})]}),l.jsxs("div",{className:"tripwire-matrix-view",children:[l.jsx("div",{className:"matrix-data-layer",children:Array.from({length:e.n},(I,U)=>{const B=e.target_order!=="none"&&e.target_order.split("-").map(Number).includes(U);return l.jsxs("div",{className:`matrix-data-rail ${B?"monitored":""}`,children:[l.jsxs("span",{className:"rail-badge",children:["q",U]}),l.jsx("div",{className:"rail-wire",children:B&&l.jsxs("div",{className:"tripwire-laser-beam",children:[l.jsx("span",{className:"laser-pulse"}),l.jsx("span",{className:"tripwire-tag",children:"Z⊗Z COUPLER ARMED"})]})}),l.jsx("span",{className:`status-pill ${B?"on":"off"}`,children:B?"✓ PROTECTED":"UNMONITORED"})]},U)})}),l.jsxs("div",{className:"matrix-ancilla-core",children:[l.jsxs("div",{className:"core-badge",children:[l.jsx(lh,{size:16,color:"#0d9488"}),l.jsx("span",{children:"WATCHER ANCILLA a0 REGISTER:"})]}),l.jsx("div",{className:"core-readout-pill",children:O>0?l.jsx("span",{className:"armed-indicator",children:"● ARMED: Parity Tripwire Listening (Syndrome s0 = 0 default / 1 on Alarm)"}):l.jsx("span",{className:"idle-indicator",children:"○ 0 Checks Deployed (Raw Hardware Pass-Through)"})})]})]})]}),l.jsxs("div",{className:"chamber-telemetry-grid",children:[l.jsxs("div",{className:"telemetry-card",children:[l.jsx("small",{children:"WATCHER ANCILLAS"}),l.jsxs("strong",{style:{color:"#0d9488"},children:["+",S.added_ancillas||0," Qubits"]}),l.jsx("span",{children:"Helper parity registers"})]}),l.jsxs("div",{className:"telemetry-card",children:[l.jsx("small",{children:"ADDED GATE OVERHEAD"}),l.jsxs("strong",{style:{color:"#f59e0b"},children:["+",S.added_two_qubit||0," Couplers"]}),l.jsx("span",{children:"Entangling parity gates"})]}),l.jsxs("div",{className:"telemetry-card",children:[l.jsx("small",{children:"PARITY TRIPWIRE COMMUTATION"}),l.jsx("strong",{style:{color:"#0d9488"},children:H?"TZ = ZT Valid":"Pauli Preserved"}),l.jsx("span",{children:"Commutes across spacetime"})]})]})]}),r===2&&l.jsxs("div",{className:"phase-chamber filter-chamber",children:[l.jsxs("div",{className:"chamber-game-stage sifter-stage",children:[l.jsxs("div",{className:"stage-header-tag",children:[l.jsx(tS,{size:14,color:"#0d9488"}),l.jsx("span",{children:"AUTOMATED SYNDROME SIFTER · POST-SELECTION ERROR PURGE"})]}),l.jsxs("div",{className:"arcade-sifter-grid",children:[l.jsxs("div",{className:"sifter-chute chute-preserved",children:[l.jsxs("div",{className:"chute-header",children:[l.jsx(Ba,{size:16,color:"#0d9488"}),l.jsx("span",{children:"PRESERVED CLEAN RUNS"})]}),l.jsx("div",{className:"chute-odometer",style:{color:"#0d9488"},children:h.toLocaleString()}),l.jsx("div",{className:"chute-bar-container",children:l.jsx("div",{className:"chute-bar-fill clean-fill",style:{width:`${_}%`}})}),l.jsxs("div",{className:"chute-sub-text",children:[l.jsxs("b",{children:[_,"% Retention:"]})," Syndrome s0 = 0 (No Alarms)"]}),l.jsxs("div",{className:"chute-particles-animation clean-stream",children:[l.jsx("span",{className:"cp p1"}),l.jsx("span",{className:"cp p2"}),l.jsx("span",{className:"cp p3"})]})]}),l.jsxs("div",{className:"sifter-scanner-core",children:[l.jsx("div",{className:"scanner-beam-icon",children:l.jsx(ka,{size:22,color:"#0d9488"})}),l.jsx("span",{className:"scanner-label",children:"SYNDROME SIFTER"}),l.jsxs("small",{children:["s0 = 0 ➔ Keep",l.jsx("br",{}),"s0 = 1 ➔ Purge"]})]}),l.jsxs("div",{className:"sifter-chute chute-purged",children:[l.jsxs("div",{className:"chute-header",children:[l.jsx(yd,{size:16,color:"#ff6b5a"}),l.jsx("span",{children:"PURGED CORRUPTED RUNS"})]}),l.jsx("div",{className:"chute-odometer",style:{color:"#ff6b5a"},children:f.toLocaleString()}),l.jsx("div",{className:"chute-bar-container",children:l.jsx("div",{className:"chute-bar-fill purge-fill",style:{width:`${(100-Number(_)).toFixed(1)}%`}})}),l.jsxs("div",{className:"chute-sub-text",children:[l.jsxs("b",{children:[(100-Number(_)).toFixed(1),"% Purged:"]})," Syndrome s0 = 1 (Alarm Flashed)"]}),l.jsxs("div",{className:"chute-particles-animation purge-stream",children:[l.jsx("span",{className:"pp p1"}),l.jsx("span",{className:"pp p2"})]})]})]})]}),l.jsxs("div",{className:"chamber-telemetry-grid",children:[l.jsxs("div",{className:"telemetry-card",children:[l.jsx("small",{children:"SHOT RETENTION RATE (r)"}),l.jsxs("strong",{style:{color:"#0d9488"},children:[_,"%"]}),l.jsx("span",{children:"Preserved clean throughput"})]}),l.jsxs("div",{className:"telemetry-card",children:[l.jsx("small",{children:"CORRUPTED RUNS ELIMINATED"}),l.jsx("strong",{style:{color:"#ff6b5a"},children:b.toLocaleString()}),l.jsx("span",{children:"Discarded by syndrome filter"})]}),l.jsxs("div",{className:"telemetry-card",children:[l.jsx("small",{children:"POST-SELECTION PURITY"}),l.jsx("strong",{style:{color:"#0d9488"},children:"Zero-Alarm Filter"}),l.jsx("span",{children:"Pure quantum subspace"})]})]})]}),r===3&&l.jsxs("div",{className:"phase-chamber victory-chamber",children:[l.jsxs("div",{className:"chamber-game-stage victory-hero-stage",children:[l.jsxs("div",{className:"victory-badge-banner",children:[l.jsx(cS,{size:18,color:"#0d9488"}),l.jsx("span",{children:"QUANTUM PURIFICATION VERIFIED · MISSION OUTCOME"})]}),l.jsxs("div",{className:"victory-arcade-board",children:[l.jsx("div",{className:"victory-stars-row",children:[1,2,3].map(I=>l.jsx(Sx,{size:28,className:`victory-star ${g>=I?"active":""}`,fill:g>=I?"#f59e0b":"none",color:g>=I?"#f59e0b":"#cbd5e1"},I))}),l.jsxs("div",{className:"victory-score-counter",children:[l.jsx("span",{className:"score-number",children:v.toFixed(1)}),l.jsx("span",{className:"score-label",children:"POINTS"})]}),l.jsxs("div",{className:"fidelity-comparison-strip",children:[l.jsxs("div",{className:"fid-item baseline",children:[l.jsx("small",{children:"RAW BASELINE FIDELITY"}),l.jsxs("strong",{children:[C,"%"]})]}),l.jsx("div",{className:"fid-arrow",children:"➔"}),l.jsxs("div",{className:"fid-item protected",children:[l.jsx("small",{children:"PURIFIED ACCURACY (F)"}),l.jsxs("strong",{style:{color:"#0d9488"},children:[x.toFixed(1),"%"]})]}),l.jsxs("div",{className:"fid-boost-badge",children:[l.jsx(Us,{size:14}),l.jsxs("span",{children:[Number(L)>=0?"+":"",L,"% BOOST"]})]})]})]})]}),l.jsxs("div",{className:"chamber-telemetry-grid",children:[l.jsxs("div",{className:"telemetry-card",children:[l.jsx("small",{children:"FINAL PURIFIED FIDELITY"}),l.jsxs("strong",{style:{color:"#0d9488"},children:[P,"%"]}),l.jsx("span",{children:"Clean distribution accuracy"})]}),l.jsxs("div",{className:"telemetry-card",children:[l.jsx("small",{children:"CLEAN THROUGHPUT YIELD"}),l.jsxs("strong",{style:{color:"#0d9488"},children:[_,"%"]}),l.jsxs("span",{children:[A.toLocaleString()," surviving shots"]})]}),l.jsxs("div",{className:"telemetry-card",children:[l.jsx("small",{children:"MISSION VERDICT"}),l.jsx("strong",{style:{color:n.verdict.passed?"#0d9488":"#f59e0b"},children:n.verdict.passed?"✓ THRESHOLD MET":"BUDGET REVIEW"}),l.jsx("span",{children:n.verdict.passed?"All parameters satisfied":"Check constraints"})]})]})]})]}),l.jsxs("div",{className:"exec-modal-footer",children:[l.jsxs("button",{className:"exec-ctrl-btn",onClick:()=>o(I=>!I),title:"Pause auto-advancing",children:[a?l.jsx(Qa,{size:14}):l.jsx(iS,{size:14}),l.jsx("span",{children:a?"Resume":"Pause"})]}),l.jsx("div",{className:"exec-progress-bar-track",children:l.jsx("div",{className:"exec-progress-bar-fill",style:{width:`${c}%`}})}),l.jsxs("div",{className:"exec-nav-actions",children:[l.jsx("button",{className:"exec-nav-btn prev",onClick:G,disabled:r===0,children:"Previous Phase"}),l.jsx("button",{className:"exec-nav-btn next",onClick:K,children:r===D.length-1?"Go to Debrief":"Next Phase ▶"})]})]})]})})}function HA({circuit:t,loading:e,dataQubits:n,selected:i,checks:r,maxChecks:s,isT:a,tCount:o=1,missionId:c,accent:u,budget:h,exact:p,shots:f,onToggleQubit:m,onSetChecks:x}){const M=ae.useRef(null),[v,d]=ae.useState(!1),[g,E]=ae.useState(null),[S,w]=ae.useState(null),[A,b]=ae.useState(null),[_,C]=ae.useState(null),P=(t==null?void 0:t.n_qubits)||n+(a?0:r),L=(t==null?void 0:t.data_qubits)||n,O=ae.useMemo(()=>{var se;return(se=t==null?void 0:t.ancilla_indices)!=null&&se.length?t.ancilla_indices:r>0&&!a?Array.from({length:r},(oe,fe)=>L+fe):[]},[t,r,a,L]),{positionedOps:H,maxLayer:D}=ae.useMemo(()=>{const se=new Array(P).fill(0),fe=((t==null?void 0:t.operations)||[]).map(re=>{const Ze=(re.qubits.length?re.qubits:[0]).filter(ue=>ue<P),ke=Ze.length?Math.max(...Ze.map(ue=>se[ue]||0)):0;return Ze.forEach(ue=>{se[ue]=ke+1}),{...re,layer:ke}}),le=Math.max(1,...se);return{positionedOps:fe,maxLayer:le}},[t,P]),z=54,K=62,G=50,I=140,U=110,B=Math.max(880,I+(D+2)*z+U),q=G+P*K+40,de=se=>G+se*K+K/2,he=se=>I+se*z+z/2,$e=()=>{if(v)return;d(!0),E(0),C(null),b(null),Ve.play("scan");let se=0;const oe=setInterval(()=>{if(se+=1,E(se),se===Math.floor(D*.45)){const fe=i.length?i[0]:0;b({x:he(se),y:de(fe)})}se===Math.floor(D*.85)&&(r>0?(C(!0),Ve.play("hit")):C(!1)),se>D+1&&(clearInterval(oe),setTimeout(()=>{d(!1),E(null),b(null)},1200))},70)},De=()=>{d(!1),E(null),b(null),C(null)},ze=P,Y=h.ancillas+n,J=(t==null?void 0:t.depth)||D,ve=h.depth,He=(p==null?void 0:p.added_two_qubit)??r*4,ge=p!=null&&p.baseline_fidelity?(Number(p.baseline_fidelity)*100).toFixed(1):"72.0",ne=p!=null&&p.conditional_fidelity?(Number(p.conditional_fidelity)*100).toFixed(1):r>0?"88.5":ge,Ge=p!=null&&p.retention?(Number(p.retention)*100).toFixed(1):r>0?"82.4":"100.0";return(!O.length||O.length<=h.ancillas)&&J<=ve,l.jsxs("div",{className:"spacetime-board-container",children:[l.jsxs("div",{className:"litinski-telemetry-hud",children:[l.jsxs("div",{className:`hud-metric-card ${O.length>h.ancillas?"alert":""}`,children:[l.jsxs("div",{className:"hud-metric-top",children:[l.jsxs("span",{className:"hud-icon-label",children:[l.jsx(yx,{size:14,color:"#0d9488"}),l.jsx("span",{children:"SPACE FOOTPRINT (QUBITS)"})]}),l.jsxs("strong",{className:"hud-val",children:[ze," / ",Y," Q"]})]}),l.jsx("div",{className:"hud-progress-bar",children:l.jsx("div",{className:"hud-fill space-fill",style:{width:`${Math.min(100,ze/Y*100)}%`,backgroundColor:O.length>h.ancillas?"#ef4444":"#0d9488"}})}),l.jsxs("small",{className:"hud-sub",children:[L," Data + ",O.length," Ancilla Watcher",O.length===1?"":"s",c===2&&" (Strict 1-Ancilla Budget)"]})]}),l.jsxs("div",{className:"hud-metric-card",children:[l.jsxs("div",{className:"hud-metric-top",children:[l.jsxs("span",{className:"hud-icon-label",children:[l.jsx(Qy,{size:14,color:"#3b82f6"}),l.jsx("span",{children:"TIME OVERHEAD (DEPTH)"})]}),l.jsxs("strong",{className:"hud-val",children:[J," / ",ve," t"]})]}),l.jsx("div",{className:"hud-progress-bar",children:l.jsx("div",{className:"hud-fill depth-fill",style:{width:`${Math.min(100,J/ve*100)}%`,backgroundColor:J>ve?"#f97316":"#3b82f6"}})}),l.jsxs("small",{className:"hud-sub",children:[D," Circuit Timesteps (2Q Gate Layers)"]})]}),l.jsxs("div",{className:"hud-metric-card",children:[l.jsxs("div",{className:"hud-metric-top",children:[l.jsxs("span",{className:"hud-icon-label",children:[l.jsx(za,{size:14,color:"#f59e0b"}),l.jsx("span",{children:"PROTECTION PARADOX GAUGE"})]}),l.jsx("strong",{className:"hud-val",style:{color:r>0?"#0d9488":"#64748b"},children:r>0?`+${He} 2Q Couplers`:"0 Added Gates"})]}),l.jsx("div",{className:"hud-progress-bar",children:l.jsx("div",{className:"hud-fill noise-fill",style:{width:r===0?"10%":r===1?"45%":"80%",backgroundColor:"#f59e0b"}})}),l.jsx("small",{className:"hud-sub",children:r>0?`Adds physical gate noise, but post-selection purifies +${(Number(ne)-Number(ge)).toFixed(1)}%`:"Unchecked raw hardware noise degrades transmission"})]}),l.jsxs("div",{className:"hud-metric-card highlight",children:[l.jsxs("div",{className:"hud-metric-top",children:[l.jsxs("span",{className:"hud-icon-label",children:[l.jsx(Us,{size:14,color:"#0d9488"}),l.jsx("span",{children:"PURIFIED ACCURACY & YIELD"})]}),l.jsxs("strong",{className:"hud-val",style:{color:"#0d9488"},children:[ne,"% Acc"]})]}),l.jsxs("div",{className:"hud-dual-tags",children:[l.jsxs("span",{className:"hud-tag gain-tag",children:["Gain: ",Number(ne)>=Number(ge)?"+":"",(Number(ne)-Number(ge)).toFixed(1),"%"]}),l.jsxs("span",{className:"hud-tag yield-tag",children:["Yield: ",Ge,"%"]})]}),l.jsxs("small",{className:"hud-sub",children:[Math.round(f*(Number(Ge)/100)).toLocaleString()," clean surviving shots"]})]})]}),l.jsxs("div",{className:"spacetime-board-viewport",children:[l.jsxs("div",{className:"board-toolbar",children:[l.jsxs("div",{className:"toolbar-left",children:[l.jsxs("div",{className:"board-badge",children:[l.jsx(Ka,{size:14}),l.jsx("span",{children:"SPACETIME QUANTUM CIRCUIT BOARD"})]}),l.jsxs("span",{className:"board-info-pill",children:["X = Time (Timesteps t₀ … t",D,") · Y = Space (Data & Ancilla Wires)"]})]}),l.jsxs("div",{className:"toolbar-right",children:[l.jsxs("button",{className:`probe-action-btn ${v?"active":""}`,onClick:$e,disabled:v||e,title:"Sweep a laser wavefront through spacetime to inspect gate execution, noise injection, and syndrome alarm flags",children:[l.jsx(Qa,{size:13,fill:"currentColor"}),v?"PROBING SPACETIME…":"▶ SWEEP SPACETIME WAVEFRONT"]}),v&&l.jsx("button",{className:"probe-reset-btn",onClick:De,title:"Reset probe",children:l.jsx(kl,{size:13})})]})]}),v&&g!==null&&l.jsxs("div",{className:"probe-status-banner",children:[l.jsx(ka,{size:14,className:"pulse-icon",color:"#0d9488"}),l.jsxs("span",{children:[l.jsxs("b",{children:["TIMESTEP t = ",Math.min(g,D),":"]})," ",g<D*.4?"Quantum state evolving through single-qubit rotations and entangling gates.":g<D*.75?"Depolarizing hardware noise active. Watcher ancilla tripwires measuring Pauli parity products.":_?"ALARM FLAGGED on Watcher Ancilla (Syndrome bit = 1)! Corrupted shot isolated for rejection.":"PARITY CLEAN (Syndrome bit = 0). Pure quantum state preserved for transmission."]})]}),l.jsx("div",{className:"circuit-scroll-frame",ref:M,children:e?l.jsxs("div",{className:"board-loading-cover",children:[l.jsx("div",{className:"spinner-glow"}),l.jsx("span",{children:"SYNTHESIZING SPACETIME CIRCUIT FROM QISKIT AER…"})]}):l.jsxs("svg",{className:"spacetime-svg",width:B,height:q,viewBox:`0 0 ${B} ${q}`,children:[l.jsxs("defs",{children:[l.jsxs("filter",{id:"teal-glow",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[l.jsx("feGaussianBlur",{stdDeviation:"3",result:"blur"}),l.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]}),l.jsxs("filter",{id:"coral-glow",x:"-20%",y:"-20%",width:"140%",height:"140%",children:[l.jsx("feGaussianBlur",{stdDeviation:"4",result:"blur"}),l.jsx("feComposite",{in:"SourceGraphic",in2:"blur",operator:"over"})]}),l.jsxs("linearGradient",{id:"wavefront-grad",x1:"0%",y1:"0%",x2:"0%",y2:"100%",children:[l.jsx("stop",{offset:"0%",stopColor:"#0d9488",stopOpacity:"0.1"}),l.jsx("stop",{offset:"50%",stopColor:"#0d9488",stopOpacity:"0.9"}),l.jsx("stop",{offset:"100%",stopColor:"#0d9488",stopOpacity:"0.1"})]})]}),l.jsx("g",{className:"grid-layer",children:Array.from({length:D+2},(se,oe)=>{const fe=he(oe);return l.jsx("line",{x1:fe,y1:G,x2:fe,y2:q-20,stroke:"#f1f5f9",strokeWidth:"1",strokeDasharray:"3 3"},`grid-${oe}`)})}),l.jsx("g",{className:"time-headers",children:Array.from({length:D+1},(se,oe)=>{const fe=he(oe);return l.jsxs("text",{x:fe,y:G-14,textAnchor:"middle",fill:"#94a3b8",fontSize:"10",fontFamily:"var(--font-mono)",fontWeight:"600",children:["t",oe]},`th-${oe}`)})}),O.length>0&&l.jsxs("g",{className:"ancilla-region-backdrop",children:[l.jsx("rect",{x:I-30,y:de(L)-K/2,width:B-I+20,height:O.length*K+10,fill:"#f0fdfa",stroke:"#ccfbf1",strokeWidth:"1.5",strokeDasharray:"6 4",rx:"8"}),l.jsx("text",{x:I-20,y:de(L)-K/2+16,fill:"#0d9488",fontSize:"9.5",fontFamily:"var(--font-display)",fontWeight:"700",letterSpacing:"1px",children:"AUXILIARY WATCHER REGION (PARITY DETECTION)"})]}),Array.from({length:P},(se,oe)=>{const fe=oe>=L,le=i.includes(oe),re=de(oe);return l.jsxs("g",{className:`wire-group ${fe?"ancilla-wire":"data-wire"}`,children:[l.jsx("line",{x1:I-15,y1:re,x2:B-U+40,y2:re,stroke:fe?"#0d9488":"#cbd5e1",strokeWidth:fe?"2":"1.5",strokeDasharray:fe?"5 3":"none"}),l.jsxs("g",{className:`qubit-pin ${!fe&&!a?"clickable":""}`,onClick:()=>{!fe&&!a&&m(oe)},style:{cursor:!fe&&!a?"pointer":"default"},children:[l.jsx("rect",{x:12,y:re-18,width:I-32,height:36,rx:"6",fill:fe?"#f0fdfa":le?"#f0fdf4":"#ffffff",stroke:fe?"#0d9488":le?"#16a34a":"#e2e8f0",strokeWidth:le||fe?"1.5":"1"}),l.jsx("text",{x:22,y:re-2,fill:fe?"#0d9488":le?"#15803d":"#0f172a",fontSize:"12",fontWeight:"700",fontFamily:"var(--font-mono)",children:fe?`a${oe-L}`:`q${oe}`}),l.jsx("text",{x:22,y:re+11,fill:fe?"#14b8a6":le?"#16a34a":"#64748b",fontSize:"8.5",fontWeight:"600",fontFamily:"var(--font-display)",children:fe?"Watcher Ancilla":le?"✓ Watching [Click]":a?"Data Wire":"+ Protect [Click]"})]})]},`wire-${oe}`)}),l.jsx("g",{className:"two-qubit-couplers",children:H.filter(se=>se.qubits.length>=2).map((se,oe)=>{const[fe,le]=se.qubits;if(fe>=P||le>=P)return null;const re=he(se.layer),je=de(fe),Ze=de(le),ke=Math.min(je,Ze),ue=Math.max(je,Ze),N=se.role==="check_related";return l.jsxs("g",{className:`coupler-group ${N?"check-coupler":"payload-coupler"}`,onMouseEnter:()=>w({name:se.name.toUpperCase(),qubits:se.qubits,layer:se.layer,role:se.role}),onMouseLeave:()=>w(null),children:[l.jsx("line",{x1:re,y1:ke,x2:re,y2:ue,stroke:N?"#0d9488":"#64748b",strokeWidth:N?"3":"2",strokeDasharray:N?"4 2":"none",filter:N?"url(#teal-glow)":void 0}),l.jsx("circle",{cx:re,cy:je,r:N?5.5:4.5,fill:N?"#0d9488":"#334155"}),se.name.toLowerCase()==="cx"?l.jsxs("g",{children:[l.jsx("circle",{cx:re,cy:Ze,r:8,fill:"#ffffff",stroke:N?"#0d9488":"#334155",strokeWidth:"2"}),l.jsx("line",{x1:re-5,y1:Ze,x2:re+5,y2:Ze,stroke:N?"#0d9488":"#334155",strokeWidth:"2"}),l.jsx("line",{x1:re,y1:Ze-5,x2:re,y2:Ze+5,stroke:N?"#0d9488":"#334155",strokeWidth:"2"})]}):l.jsx("circle",{cx:re,cy:Ze,r:N?5.5:4.5,fill:N?"#0d9488":"#334155"}),N&&l.jsx("rect",{x:re-16,y:(ke+ue)/2-8,width:32,height:16,rx:"4",fill:"#0d9488"}),N&&l.jsx("text",{x:re,y:(ke+ue)/2+4,textAnchor:"middle",fill:"#ffffff",fontSize:"8",fontFamily:"var(--font-mono)",fontWeight:"700",children:"Z⊗Z"})]},`2q-${oe}`)})}),l.jsx("g",{className:"single-qubit-gates",children:H.filter(se=>se.qubits.length===1).map((se,oe)=>{const fe=se.qubits[0];if(fe>=P)return null;const le=he(se.layer),re=de(fe),je=se.name.toLowerCase(),Ze=se.role==="check_related",ke=je==="t",ue=je==="measure",N=ue?28:ke?32:26,Qe=26;let qe="#3b82f6",R="#2563eb",y=je.toUpperCase();return ke?(qe="#f59e0b",R="#d97706",y="T"):je==="s"||je==="sx"?(qe="#8b5cf6",R="#7c3aed"):Ze?(qe="#0d9488",R="#0f766e"):ue&&(qe="#475569",R="#334155",y="M"),l.jsxs("g",{className:`gate-tile-node ${ke?"t-gate-node":""}`,onMouseEnter:()=>w({name:y,qubits:se.qubits,layer:se.layer,role:se.role}),onMouseLeave:()=>w(null),children:[ke&&l.jsx("rect",{x:le-N/2-2,y:re-Qe/2-2,width:N+4,height:Qe+4,rx:"6",fill:"none",stroke:"#f59e0b",strokeWidth:"2",filter:"url(#coral-glow)"}),l.jsx("rect",{x:le-N/2,y:re-Qe/2,width:N,height:Qe,rx:"4",fill:qe,stroke:R,strokeWidth:"1.5"}),l.jsx("text",{x:le,y:re+4,textAnchor:"middle",fill:"#ffffff",fontSize:ke?"11":"10",fontWeight:"700",fontFamily:"var(--font-display)",children:y}),ke&&l.jsx("text",{x:le+10,y:re-5,fill:"#fef08a",fontSize:"7.5",fontWeight:"800",fontFamily:"var(--font-mono)",children:"π/4"}),ue&&l.jsx("path",{d:`M ${le-5} ${re+5} A 6 6 0 0 1 ${le+5} ${re+5}`,fill:"none",stroke:"#ffffff",strokeWidth:"1.2"})]},`1q-${oe}`)})}),l.jsx("g",{className:"terminal-readout-flags",children:Array.from({length:P},(se,oe)=>{const fe=oe>=L,le=de(oe),re=B-U+20;return l.jsxs("g",{className:"readout-flag",children:[l.jsx("rect",{x:re,y:le-12,width:70,height:24,rx:"4",fill:fe?_?"#fef2f2":"#f0fdfa":"#f8fafc",stroke:fe?_?"#ef4444":"#0d9488":"#cbd5e1",strokeWidth:"1.2"}),l.jsx("text",{x:re+35,y:le+4,textAnchor:"middle",fill:fe?_?"#dc2626":"#0d9488":"#475569",fontSize:"9.5",fontWeight:"700",fontFamily:"var(--font-mono)",children:fe?_?"ALARM (1)":"CLEAN (0)":`OUT c[${oe}]`})]},`readout-${oe}`)})}),A&&l.jsxs("g",{className:"noise-sparkle-marker",filter:"url(#coral-glow)",children:[l.jsx("circle",{cx:A.x,cy:A.y,r:12,fill:"#ef4444",fillOpacity:"0.3"}),l.jsx("circle",{cx:A.x,cy:A.y,r:6,fill:"#ef4444"}),l.jsx("text",{x:A.x,y:A.y-14,textAnchor:"middle",fill:"#ef4444",fontSize:"9",fontWeight:"800",fontFamily:"var(--font-mono)",children:"⚡ NOISE FLIP!"})]}),v&&g!==null&&l.jsxs("g",{className:"wavefront-laser-line",children:[l.jsx("rect",{x:he(g)-2,y:G-10,width:4,height:q-G-10,fill:"url(#wavefront-grad)"}),l.jsx("line",{x1:he(g),y1:G-10,x2:he(g),y2:q-20,stroke:"#0d9488",strokeWidth:"2",filter:"url(#teal-glow)"}),l.jsx("polygon",{points:`${he(g)-5},${G-10} ${he(g)+5},${G-10} ${he(g)},${G-3}`,fill:"#0d9488"})]})]})}),l.jsxs("div",{className:"board-footer-guide",children:[l.jsxs("div",{className:"guide-left",children:[l.jsx(oh,{size:14,color:"#0d9488"}),a?l.jsxs("span",{children:[l.jsx("b",{children:"Non-Clifford T Commutation:"})," T gates introduce non-Clifford rotations by π/4. Automatic Clifford checks fail across T wires; only hand-made checks aligned as I or Z commute (TZ = ZT)."]}):l.jsxs("span",{children:[l.jsx("b",{children:"Litinski Space-Time Principle:"})," Click any data qubit pin (q0–q",L-1,") to route helper ancilla checks. Every check measures multi-qubit Pauli products (Z ⊗ Z), intercepting errors before terminal readout."]})]}),S&&l.jsxs("div",{className:"inspected-gate-tooltip",children:[l.jsxs("strong",{children:[S.name," GATE"]}),l.jsxs("span",{children:["Layer t",S.layer," · Qubit(s): [",S.qubits.map(se=>se>=L?`a${se-L}`:`q${se}`).join(", "),"]",S.role==="check_related"&&" · Watcher Coupler (Tripwire)"]})]})]})]})]})}function Au(t,e,n){const i=[],r=["A","B","C","D","E"];for(let s=0;s<t;s++)for(let a=0;a<t;a++){const o=`t-${s}-${a}`,c=`${r[a]}${s+1}`;let u=!1,h,p=!1,f;if(t===3?s===0&&a===0?(u=!0,h=0,p=!0,f="X"):s===0&&a===2?(u=!0,h=1,p=!0,f="X"):s===2&&a===0?(u=!0,h=2,p=e===2,f="Z"):s===2&&a===2&&(u=!0,h=3,p=n,f="Z"):t===4?s===0&&a===0?(u=!0,h=0,p=!0,f="X"):s===0&&a===3?(u=!0,h=1,p=!0,f="X"):s===3&&a===0?(u=!0,h=2,p=e===2,f="Z"):s===3&&a===3&&(u=!0,h=3,p=n,f="Z"):t===5&&(s===0&&a===0?(u=!0,h=0,p=!0,f="X"):s===0&&a===4?(u=!0,h=1,p=!0,f="X"):s===4&&a===0?(u=!0,h=2,p=e===2,f="Z"):s===4&&a===4&&(u=!0,h=3,p=n,f="Z")),u){i.push({id:o,coord:c,row:s,col:a,type:"data_patch",qubitId:h,hasNoiseThreat:p,threatType:f});continue}let m=[],x="Z ⊗ Z";if(t===3)s===0&&a===1?(m=[0,1],x="Z₀ ⊗ Z₁"):s===1&&a===0?(m=[0,2],x="X₀ ⊗ X₂"):s===1&&a===1?(m=[0,1,2,3],x="Z₀Z₁Z₂Z₃"):s===1&&a===2?(m=[1,3],x="X₁ ⊗ X₃"):s===2&&a===1&&(m=[2,3],x="Z₂ ⊗ Z₃");else if(t===4)s===0?(m=[0,1],x=a===1?"Z₀ ⊗ A":"A ⊗ Z₁"):s===3?(m=[2,3],x=a===1?"Z₂ ⊗ A":"A ⊗ Z₃"):a===0?(m=[0,2],x=s===1?"X₀ ⊗ A":"A ⊗ X₂"):a===3?(m=[1,3],x=s===1?"X₁ ⊗ A":"A ⊗ X₃"):s===1&&a===1?(m=[0,1,2],x="Z₀ ⊗ Z₁ ⊗ Z₂"):s===1&&a===2?(m=[1,3],x="X₁ ⊗ X₃ ⊗ Anc"):s===2&&a===1?(m=[0,2],x="X₀ ⊗ X₂ ⊗ Anc"):s===2&&a===2&&(m=[1,2,3],x="Z₁ ⊗ Z₂ ⊗ Z₃");else if(t===5)if(s===0)m=[0,1],x=a===2?"Z₀ ⊗ Z₁":a===1?"Z₀ ⊗ A₁":"A₂ ⊗ Z₁";else if(s===4)m=[2,3],x=a===2?"Z₂ ⊗ Z₃":a===1?"Z₂ ⊗ A₁":"A₂ ⊗ Z₃";else if(a===0)m=[0,2],x=s===2?"X₀ ⊗ X₂":s===1?"X₀ ⊗ A₁":"A₂ ⊗ X₂";else if(a===4)m=[1,3],x=s===2?"X₁ ⊗ X₃":s===1?"X₁ ⊗ A₁":"A₂ ⊗ X₃";else if(s===2&&a===2)m=[0,1,2,3],x=n?"|T⟩ Factory":"Z₀Z₁Z₂Z₃";else{const M=(s+a)%2===0;(s===1||s===2||s===3)&&(m=a<=2?s<=2?[0,1]:[0,2,3]:s<=2?[1,3]:[1,2,3]),x=M?"Z-Plaquette":"X-Star (d=5)"}i.push({id:o,coord:c,row:s,col:a,type:"empty",connectedQubits:m,stabilizerLabel:x})}return i}function GA({mission:t,budget:e,selected:n,checks:i,maxChecks:r,isT:s,tCount:a=1,exact:o,shots:c,circuit:u,brief:h,interpretation:p="",onSetInterpretation:f,onToggleQubit:m,onSetChecks:x,onEngage:M,onAutoWin:v,suggesting:d=!1}){const[g,E]=ae.useState(3),[S,w]=ae.useState("bridge_z"),[A,b]=ae.useState(!1),[_,C]=ae.useState(3),[P,L]=ae.useState("⚂"),[O,H]=ae.useState(null),[D,z]=ae.useState(null),[K,G]=ae.useState(null),[I,U]=ae.useState(""),[B,q]=ae.useState(null),[de,he]=ae.useState(null),$e=["⚀","⚁","⚂","⚃","⚄","⚅"],[De,ze]=ae.useState(()=>Au(3,t.id,s));ae.useEffect(()=>{s&&!p&&f&&f("different_ideals_not_causal")},[s,p,f]),ae.useEffect(()=>{ze(ne=>{const Ge=ne.length===g*g?ne:Au(g,t.id,s),se=g===3||g===4?"t-0-1":"t-0-2",oe=g===3||g===4?"t-1-0":"t-2-0",fe=g===3?"t-1-2":g===4?"t-1-3":"t-2-4",le=g===3?"t-2-1":g===4?"t-3-1":"t-4-2";return Ge.map(re=>re.type==="data_patch"?re:i>=1&&n.includes(0)&&n.includes(1)&&re.id===se?{...re,type:"ancilla_z"}:i>=1&&n.includes(2)&&!n.includes(0)&&re.id===oe?{...re,type:"ancilla_x"}:i>=1&&n.includes(1)&&!n.includes(0)&&re.id===fe?{...re,type:"ancilla_z"}:i>=2&&n.includes(2)&&re.id===oe?{...re,type:"ancilla_x"}:i>=2&&n.includes(3)&&re.id===le?{...re,type:"ancilla_z"}:i===1&&n.includes(0)&&re.id===se?{...re,type:"ancilla_z"}:{...re,type:"empty"})})},[i,n,g,t.id,s]);const Y=ne=>{ne!==g&&(E(ne),z(null),G(null),H(null),q(null),Ve.play("select"))},J=ne=>{var Ge;if(he(null),ne.type==="data_patch"&&ne.qubitId!==void 0){if(s&&ne.qubitId===3){he("RULE: Data patch q3 hosts the non-Clifford T-gate. Select your scientific interpretation in the command panel.");return}m(ne.qubitId),Ve.play("select");return}if(ne.type==="empty"){if(S==="remove")return;if(t.id===2&&i>=1){he("SPACE OVERFLOW (Sector 2): Tight physical substrate! Max 1 Ancilla allowed on this board."),Ve.play("error");return}if(s&&S==="bridge_x"&&((Ge=ne.connectedQubits)!=null&&Ge.includes(3))){he("COMMUTATION VIOLATION: Non-Clifford T rotation fails to commute with X-edges (TX ≠ XT)! Only Z-checks commute (TZ = ZT)."),Ve.play("error");return}if(i>=e.ancillas){he(`SPACE BUDGET EXCEEDED: You have already allocated all ${e.ancillas} Ancilla Space Tokens!`),Ve.play("error");return}Ve.play("place");const se=Math.min(e.ancillas,i+1);x(se),ne.connectedQubits&&ne.connectedQubits.forEach(oe=>{n.includes(oe)||m(oe)}),ze(oe=>oe.map(fe=>fe.id===ne.id?{...fe,type:S==="bridge_z"?"ancilla_z":"ancilla_x"}:fe))}else(ne.type==="ancilla_z"||ne.type==="ancilla_x")&&(Ve.play("remove"),x(Math.max(0,i-1)),ze(se=>se.map(oe=>oe.id===ne.id?{...oe,type:"empty"}:oe)))},ve=(ne,Ge)=>{A||(b(!0),H(1),z(Ge),G(null),q(null),U(`Manual Test: Depolarizing noise pulse injected into Data Patch q${ne}!`),Ve.play("hit"),setTimeout(()=>{if(i>0&&n.includes(ne)){const oe=De.find(le=>{var re;return(le.type==="ancilla_z"||le.type==="ancilla_x")&&((re=le.connectedQubits)==null?void 0:re.includes(ne))});G(oe?oe.id:g===3||g===4?"t-0-1":"t-0-2"),Ve.play("scan"),H(2),setTimeout(()=>{Ve.play("success"),H(3);const le=o!=null&&o.conditional_fidelity?(Number(o.conditional_fidelity)*100).toFixed(1):"77.5",re=o!=null&&o.retention?(Number(o.retention)*100).toFixed(1):"90.4";q({status:"alarm_purified",message:`ALARM TRIGGERED ON ANCILLA BRIDGE (${g===5?"d=5":"d=3"})! Parity flip on q${ne} caught with syndrome s=1. Corrupted shot discarded via post-selection ➔ Purified Output Fidelity: ${le}% (Yield: ${re}%).`}),b(!1)},1e3)}else{Ve.play("fail"),H(2);const oe=o!=null&&o.baseline_fidelity?(Number(o.baseline_fidelity)*100).toFixed(1):"76.1";q({status:"corrupted",message:`UNCHECKED DATA BREACH! Data Patch q${ne} had no active Ancilla Bridge monitoring its boundary on the ${g}×${g} lattice! Bit flip leaked into output, collapsing fidelity down to ${oe}%.`}),b(!1)}},900))},He=()=>{if(A)return;b(!0),H(null),q(null),z(null),G(null),Ve.play("scan");let ne=0;const Ge=setInterval(()=>{const se=Math.floor(Math.random()*6);if(L($e[se]),ne++,ne>8){clearInterval(Ge);const oe=Math.floor(Math.random()*6)+1;C(oe),L($e[oe-1]);const fe=Ze=>Ze===0?"t-0-0":Ze===1?g===3?"t-0-2":g===4?"t-0-3":"t-0-4":Ze===2?g===3?"t-2-0":g===4?"t-3-0":"t-4-0":g===3?"t-2-2":g===4?"t-3-3":"t-4-4";let le=0,re="t-0-0",je="";oe===1?(le=0,re=fe(0),je=`Rolled 1: Hardware bit-flip burst on Patch q0 (${re})!`):oe===2?(le=1,re=fe(1),je=`Rolled 2: Entangling gate noise on Patch q1 (${re})!`):oe===3?(le=t.id===2?2:0,re=fe(le),je=`Rolled 3: Thermal decoherence pulse on Patch q${le}!`):oe===4?(le=2,re=fe(2),je=`Rolled 4: Crosstalk noise pulse on Patch q2 (${re})!`):oe===5?(le=s?3:1,re=fe(le),je=`Rolled 5: Depolarizing spike on Patch q${le}!`):(le=n[0]??0,re=fe(le),je=`Rolled 6 (CRITICAL): High-frequency noise wavefront strikes Patch q${le}!`),U(je),z(re),H(1),Ve.play("hit"),setTimeout(()=>{if(i>0&&n.includes(le)){const ke=De.find(N=>{var Qe;return(N.type==="ancilla_z"||N.type==="ancilla_x")&&((Qe=N.connectedQubits)==null?void 0:Qe.includes(le))});G(ke?ke.id:g===3||g===4?"t-0-1":"t-0-2"),Ve.play("scan"),H(2),setTimeout(()=>{Ve.play("success"),H(3);const N=o!=null&&o.conditional_fidelity?(Number(o.conditional_fidelity)*100).toFixed(1):"77.5",Qe=o!=null&&o.retention?(Number(o.retention)*100).toFixed(1):"90.4";q({status:"alarm_purified",message:`PARITY ALARM TRIGGERED! Ancilla caught error on q${le}. Post-selection purged corrupted shot ➔ Purified Output: ${N}% Fidelity (Yield: ${Qe}%).`}),b(!1)},1100)}else{Ve.play("fail"),H(2);const ke=o!=null&&o.baseline_fidelity?(Number(o.baseline_fidelity)*100).toFixed(1):"76.1";q({status:"corrupted",message:`UNCHECKED DATA CORRUPTION! Patch q${le} was unprotected! Error propagated through the quantum circuit, dropping fidelity down to ${ke}%.`}),b(!1)}},900)}},80)},ge=()=>{x(0),ze(Au(g,t.id,s)),q(null),z(null),G(null),he(null),Ve.play("select")};return l.jsxs("div",{className:"quantum-board-game-container",children:[l.jsxs("div",{className:"board-game-header",children:[l.jsxs("div",{className:"board-header-left",children:[l.jsxs("div",{className:"game-badge",children:[l.jsx(_d,{size:16}),l.jsx("span",{children:"SURFACE-CODE TABLETOP BOARD"})]}),l.jsx("span",{className:"board-caption",children:"Litinski Rules (Quantum 2019): Place Ancilla Bridges between boundary edges to measure joint Pauli products."})]}),l.jsxs("div",{className:"board-resource-counters",children:[l.jsxs("div",{className:`resource-chip ${i>e.ancillas?"over-budget":""}`,children:[l.jsx("span",{className:"chip-label",children:"SPACE TOKENS:"}),l.jsx("div",{className:"token-piles",children:Array.from({length:e.ancillas}).map((ne,Ge)=>l.jsx("span",{className:`token-coin ${Ge<i?"used":"available"}`,title:Ge<i?`Space Token ${Ge+1} (On Board)`:`Space Token ${Ge+1} (Available)`,children:"🪙"},Ge))}),l.jsxs("strong",{className:"chip-value",children:[i," / ",e.ancillas]})]}),l.jsxs("div",{className:"resource-chip",children:[l.jsx("span",{className:"chip-label",children:"TIME BUDGET:"}),l.jsxs("strong",{className:"chip-value",children:[(u==null?void 0:u.depth)||24," / ",e.depth," Steps"]})]})]})]}),de&&l.jsxs("div",{className:"board-rule-alert",children:[l.jsx(yd,{size:15,color:"#ef4444"}),l.jsx("span",{children:de}),l.jsx("button",{onClick:()=>he(null),children:"Dismiss"})]}),l.jsxs("div",{className:"tabletop-stage",children:[l.jsxs("div",{className:"tabletop-board-column",children:[l.jsxs("div",{className:"board-dimension-bar",children:[l.jsxs("div",{className:"dimension-bar-title",children:[l.jsx(Ka,{size:14,color:"#0d9488"}),l.jsx("span",{children:"LATTICE SCALE:"})]}),l.jsxs("div",{className:"dimension-toggle-group",children:[l.jsxs("button",{type:"button",className:`dimension-btn ${g===3?"active":""}`,onClick:()=>Y(3),title:"3×3 Minimal Surface Code: 9 tiles, distance d=3, 4 data qubits, 5 syndrome routing slots",children:[l.jsx("span",{className:"btn-size",children:"3×3"}),l.jsx("span",{className:"btn-desc",children:"Compact (d=3)"})]}),l.jsxs("button",{type:"button",className:`dimension-btn ${g===4?"active":""}`,onClick:()=>Y(4),title:"4×4 Expanded Lattice: 16 tiles, dual-rail routing corridors, isolated ancilla buses",children:[l.jsx("span",{className:"btn-size",children:"4×4"}),l.jsx("span",{className:"btn-desc",children:"Tactical"})]}),l.jsxs("button",{type:"button",className:`dimension-btn ${g===5?"active":""}`,onClick:()=>Y(5),title:"5×5 High-Density Surface Code: 25 tiles, distance d=5, full checkerboard plaquettes",children:[l.jsx("span",{className:"btn-size",children:"5×5"}),l.jsx("span",{className:"btn-desc",children:"Lattice (d=5)"})]})]}),l.jsxs("span",{className:"dimension-tile-count",children:[g*g," Tiles · ",g===3?"d=3 Patch":g===4?"Dual-Rail Bus":"d=5 Rotated Lattice"]})]}),l.jsxs("div",{className:"board-grid-wrapper",children:[l.jsxs("div",{className:"grid-axis-label-row",style:{gridTemplateColumns:`24px repeat(${g}, minmax(0, 1fr))`},children:[l.jsx("span",{className:"axis-label corner"}),["A","B","C","D","E"].slice(0,g).map(ne=>l.jsx("span",{className:"axis-label",children:ne},ne))]}),l.jsxs("div",{className:"grid-with-row-labels",children:[l.jsx("div",{className:"grid-axis-label-col",children:Array.from({length:g}).map((ne,Ge)=>l.jsx("span",{className:"axis-label",children:Ge+1},Ge))}),l.jsx("div",{className:`surface-tile-grid grid-size-${g}`,style:{gridTemplateColumns:`repeat(${g}, minmax(0, 1fr))`},children:De.map(ne=>{const Ge=D===ne.id,se=K===ne.id;if(ne.type==="data_patch"){const le=ne.qubitId??0,re=n.includes(le),je=s&&le===3;return l.jsxs("div",{className:`grid-tile data-patch-tile ${re?"monitored":""} ${Ge?"struck-by-noise":""}`,onClick:()=>J(ne),title:`Data Patch q${le} (${ne.coord}) · Click to toggle protection`,children:[l.jsx("div",{className:"tile-edge edge-top-z",title:"Z-Boundary: measures bit-flips"}),l.jsx("div",{className:"tile-edge edge-bottom-z",title:"Z-Boundary: measures bit-flips"}),l.jsx("div",{className:"tile-edge edge-left-x",title:"X-Boundary: measures phase-flips"}),l.jsx("div",{className:"tile-edge edge-right-x",title:"X-Boundary: measures phase-flips"}),l.jsxs("div",{className:"tile-top-bar",children:[l.jsx("span",{className:"tile-coord-badge",children:ne.coord}),l.jsx("button",{type:"button",className:"manual-test-strike-btn",onClick:Ze=>{Ze.stopPropagation(),ve(le,ne.id)},title:`Test noise pulse directly on Data Patch q${le}`,children:"⚡ Test"})]}),l.jsxs("div",{className:"tile-content",children:[l.jsxs("span",{className:"patch-qubit-id",children:["q",le]}),l.jsx("span",{className:"patch-role-tag",children:je?"T-Gate (π/4)":re?"✓ MONITORED":"DATA PATCH"}),ne.hasNoiseThreat&&l.jsxs("span",{className:"threat-indicator",title:"Hardware Depolarizing Hazard",children:["⚡ ",ne.threatType,"-Noise"]})]}),Ge&&l.jsx("div",{className:"noise-strike-overlay",children:l.jsx("span",{children:"⚡ NOISE HIT!"})})]},ne.id)}const oe=ne.type==="ancilla_z"||ne.type==="ancilla_x",fe=ne.stabilizerLabel==="|T⟩ Factory";return l.jsxs("div",{className:`grid-tile routing-tile ${oe?"ancilla-active":"empty-slot"} ${se?"ancilla-alarmed":""} ${fe?"magic-factory-tile":""}`,onClick:()=>J(ne),title:oe?`Click to reclaim Ancilla Bridge (${ne.coord})`:`Click to place Ancilla Bridge (${ne.coord})`,children:[l.jsx("div",{className:"tile-coord-badge",children:ne.coord}),oe?l.jsxs("div",{className:"ancilla-bridge-content",children:[l.jsx("div",{className:"bridge-glow-pulse"}),l.jsx("span",{className:"bridge-operator",children:ne.stabilizerLabel||"Z ⊗ Z"}),l.jsx("span",{className:"bridge-label",children:g===5?ne.type==="ancilla_z"?"Z⊗Z":"X⊗X":ne.type==="ancilla_z"?"Z⊗Z BRIDGE":"X⊗X BRIDGE"}),l.jsx("small",{className:`bridge-status ${se?"alarm":"clean"}`,children:se?"🚨 ALARM":"CLEAN"})]}):l.jsxs("div",{className:"empty-slot-content",children:[l.jsx("span",{className:"plus-glyph",children:fe?"✨":"+"}),l.jsx("span",{className:"slot-operator",children:ne.stabilizerLabel}),g<5&&l.jsx("span",{className:"slot-label",children:fe?"MAGIC ANVIL":"PLACE BRIDGE"})]})]},ne.id)})})]})]}),l.jsxs("div",{className:"tabletop-player-tray",children:[l.jsxs("div",{className:"tray-header",children:[l.jsx("span",{className:"tray-title",children:"YOUR TACTICAL PIECE TRAY"}),l.jsx("small",{children:"Click a piece below, then click any empty board slot to deploy:"})]}),l.jsxs("div",{className:"tray-tools-row",children:[l.jsxs("button",{className:`tool-piece-btn ${S==="bridge_z"?"selected":""}`,onClick:()=>{w("bridge_z"),Ve.play("select")},children:[l.jsx("div",{className:"piece-icon-box teal",children:l.jsx(aS,{size:16})}),l.jsxs("div",{className:"piece-meta",children:[l.jsx("strong",{children:"Z⊗Z Bridge"}),l.jsx("small",{children:"Bit-flips · 1 Space"})]})]}),l.jsxs("button",{className:`tool-piece-btn ${S==="bridge_x"?"selected":""}`,onClick:()=>{w("bridge_x"),Ve.play("select")},children:[l.jsx("div",{className:"piece-icon-box orange",children:l.jsx(lh,{size:16})}),l.jsxs("div",{className:"piece-meta",children:[l.jsx("strong",{children:"X⊗X Bridge"}),l.jsx("small",{children:"Phase-flips · 1 Space"})]})]}),l.jsxs("button",{className:`tool-piece-btn ${S==="remove"?"selected":""}`,onClick:()=>{w("remove"),Ve.play("select")},children:[l.jsx("div",{className:"piece-icon-box slate",children:l.jsx(kl,{size:16})}),l.jsxs("div",{className:"piece-meta",children:[l.jsx("strong",{children:"Reclaim Piece"}),l.jsx("small",{children:"Refunds space"})]})]})]})]})]}),l.jsxs("div",{className:"tabletop-command-column",children:[l.jsxs("div",{className:"command-card goal-card",children:[l.jsxs("div",{className:"command-card-header",children:[l.jsx("span",{className:"goal-badge",children:"EPISODE OBJECTIVE"}),l.jsx("h3",{children:t.headline})]}),l.jsx("p",{className:"win-rule-box",children:t.winRule}),l.jsxs("p",{className:"threat-text",children:[l.jsx("b",{children:"Hardware Threat:"})," ",t.threat]})]}),s&&f&&l.jsxs("div",{className:"command-card t-interpretation-card",children:[l.jsxs("div",{className:"command-card-header",children:[l.jsx(eS,{size:16,color:"#0d9488"}),l.jsx("span",{className:"card-title",children:"CHOOSE SCIENTIFIC INTERPRETATION"})]}),l.jsx("p",{className:"interp-caption",children:"The non-Clifford T rotation is fault-tolerant only under specific transversal/magic-state frameworks:"}),l.jsx("div",{className:"interpretation-options-list",children:Sd.map(ne=>l.jsxs("button",{className:`interp-option-btn ${p===ne.value?"active":""}`,onClick:()=>{f==null||f(ne.value),Ve.play("select")},children:[l.jsx("strong",{children:ne.value==="different_ideals_not_causal"?"Scientifically Valid Finding":"Alternative Hypothesis"}),l.jsx("small",{children:ne.text})]},ne.value))})]}),l.jsxs("div",{className:"command-card dice-action-card",children:[l.jsxs("div",{className:"dice-card-header",children:[l.jsx("div",{className:"dice-display-box",children:l.jsx("span",{className:"dice-glyph",children:P})}),l.jsxs("div",{className:"dice-header-text",children:[l.jsx("strong",{children:"TEST ROUND: NOISE SIMULATOR"}),l.jsx("small",{children:"Roll physical hardware noise to test your placed Ancilla Bridges:"})]})]}),I&&l.jsx("div",{className:"strike-intel-callout",children:l.jsx("span",{children:I})}),O!==null&&l.jsxs("div",{className:"turn-step-meter",children:[l.jsxs("div",{className:`step-item ${O>=1?"active":""}`,children:[l.jsx("span",{className:"step-num",children:"1"}),l.jsx("span",{children:"Noise Strikes"})]}),l.jsxs("div",{className:`step-item ${O>=2?"active":""}`,children:[l.jsx("span",{className:"step-num",children:"2"}),l.jsx("span",{children:"Parity Caught"})]}),l.jsxs("div",{className:`step-item ${O>=3?"active":""}`,children:[l.jsx("span",{className:"step-num",children:"3"}),l.jsx("span",{children:"Post-Selected"})]})]}),l.jsx("div",{className:"dice-buttons-row",children:l.jsxs("button",{className:`roll-dice-btn ${A?"active":""}`,onClick:He,disabled:A,children:[l.jsx(_d,{size:18}),l.jsx("span",{children:A?"ROLLING NOISE & EVALUATING PARITIES…":"🎲 ROLL NOISE & PLAY ROUND"})]})})]}),B&&l.jsxs("div",{className:`round-results-banner ${B.status}`,children:[B.status==="alarm_purified"?l.jsx(Ba,{size:20,color:"#0d9488"}):l.jsx(yd,{size:20,color:"#ef4444"}),l.jsxs("div",{className:"result-text-group",children:[l.jsx("strong",{children:B.status==="alarm_purified"?"ROUND DEFENDED · PURIFICATION SUCCESSFUL":"ROUND FAILED · UNCHECKED DATA BREACH"}),l.jsx("p",{children:B.message})]})]}),l.jsxs("div",{className:"command-card live-prediction-card",children:[l.jsxs("div",{className:"prediction-header",children:[l.jsx(Us,{size:16,color:"#0d9488"}),l.jsx("span",{children:"MEASURED RUN PREDICTION (AER DATA)"})]}),o?l.jsxs("div",{className:"prediction-grid",children:[l.jsxs("div",{className:"pred-item",children:[l.jsx("small",{children:"ACCURACY (F)"}),l.jsxs("strong",{children:[(Number(o.conditional_fidelity)*100).toFixed(1),"%"]}),l.jsxs("span",{children:["Gain: ",Number(o.conditional_fidelity)>=Number(o.baseline_fidelity)?"+":"",((Number(o.conditional_fidelity)-Number(o.baseline_fidelity))*100).toFixed(1),"%"]})]}),l.jsxs("div",{className:"pred-item",children:[l.jsx("small",{children:"SHOTS KEPT (r)"}),l.jsxs("strong",{children:[(Number(o.retention)*100).toFixed(1),"%"]}),l.jsxs("span",{children:[Math.round(c*Number(o.retention)).toLocaleString()," clean shots"]})]}),l.jsxs("div",{className:"pred-item",children:[l.jsx("small",{children:"PREDICTED SCORE"}),l.jsx("strong",{style:{color:"#0d9488"},children:(Number(o.conditional_fidelity)*Number(o.retention)*100).toFixed(1)}),l.jsx("span",{children:"Accuracy × Yield"})]})]}):l.jsx("div",{className:"custom-setup-note",children:l.jsxs("p",{children:[l.jsx("b",{children:"Custom Layout Deployed:"})," This specific placement will be benchmarked live via Qiskit Aer upon execution. Click ",l.jsx("b",{children:"Auto-Win Setup"})," anytime to revert to the optimal verified strategy."]})})]}),s&&l.jsxs("div",{className:"telemetry-card t-quiz-card",style:{marginBottom:"14px"},children:[l.jsxs("div",{className:"telemetry-card-header",children:[l.jsx("span",{className:"telemetry-badge",style:{color:"#ff6b5a"},children:"SECTOR 4 DIAGNOSTIC · SCIENTIFIC CONCLUSION"}),l.jsx("span",{style:{fontSize:"11px",color:"#94a3b8"},children:"RESEARCH INTERPRETATION"})]}),l.jsx("p",{style:{fontSize:"12px",color:"#cbd5e1",margin:"6px 0 10px 0",lineHeight:"1.4"},children:"Un-noised T-gates alter the output distribution, artificially increasing classical Bhattacharyya fidelity. Which research conclusion is scientifically valid?"}),l.jsx("div",{className:"interpretation-list",style:{display:"flex",flexDirection:"column",gap:"8px"},children:Sd.map(ne=>l.jsxs("button",{type:"button",className:`interpretation-btn ${p===ne.value?"selected":""}`,onClick:()=>{f==null||f(ne.value),Ve.play("select")},style:{textAlign:"left",cursor:"pointer"},children:[l.jsx("div",{className:"radio-circle",children:p===ne.value&&l.jsx("div",{className:"dot"})}),l.jsx("span",{children:ne.text})]},ne.value))})]}),l.jsxs("div",{className:"tabletop-action-deck",children:[l.jsxs("div",{className:"action-deck-row",children:[v&&l.jsxs("button",{className:"smart-tune-btn",onClick:v,disabled:d,title:"Automatically configure an optimal strategy that wins this episode",children:[l.jsx(Us,{size:14}),l.jsx("span",{children:d?"Scanning…":"✨ Auto-Win Setup"})]}),l.jsxs("button",{className:"reset-board-btn",onClick:ge,title:"Clear all placed pieces",children:[l.jsx(kl,{size:14})," Clear Board"]})]}),l.jsxs("button",{className:"engage-mission-btn",onClick:M,disabled:s&&!p,title:s&&!p?"Please select a scientific conclusion above":"Execute quantum simulation",children:[l.jsx(Qa,{size:18,fill:"currentColor"}),l.jsx("span",{children:s&&!p?"SELECT CONCLUSION ABOVE TO RUN":"LOCK IN & EXECUTE FULL RUN"}),l.jsx(za,{size:16})]}),l.jsx("small",{className:"engage-sub-hint",children:"Executes circuit on Qiskit Aer, tracks physical syndrome parities, and generates debrief report."})]})]})]}),l.jsxs("div",{className:"board-game-legend",children:[l.jsxs("div",{className:"legend-col",children:[l.jsx("span",{className:"legend-title",children:"LITINSKI 2019 TABLETOP RULES:"}),l.jsxs("p",{children:["Vertical boundaries are ",l.jsx("b",{children:"Z-edges"})," (teal). Horizontal boundaries are ",l.jsx("b",{children:"X-edges"})," (coral). An ancilla placed between adjacent edges measures their joint Pauli product ($Z \\otimes Z$ or $X \\otimes X$)."]})]}),l.jsxs("div",{className:"legend-col",children:[l.jsx("span",{className:"legend-title",children:"THE PROTECTION PARADOX:"}),l.jsx("p",{children:"Ancillas catch hardware noise, but their 2Q entangling gates add extra physical errors! Deploy checks only where they provide net gain in post-selected fidelity."})]}),l.jsxs("div",{className:"legend-col",children:[l.jsx("span",{className:"legend-title",children:"ADAPTIVE LATTICE SCALING:"}),l.jsxs("p",{children:["Select ",l.jsx("b",{children:"3×3 Compact"})," (minimal distance-3 patch), ",l.jsx("b",{children:"4×4 Tactical"})," (dual-rail routing corridors), or ",l.jsx("b",{children:"5×5 Full Lattice"})," (canonical distance-5 code with 25 stabilizer plaquettes)."]})]})]})]})}const VA={1:{setup:{n:4,seed:19,depth_parameter:6,noise_2q:.04,shots:2048,readout_noise:.01},targets:[0,1],checks:1},2:{setup:{n:4,seed:73,depth_parameter:3,noise_2q:.04,shots:2048,readout_noise:.01},targets:[2],checks:1},3:{setup:{n:4,seed:19,depth_parameter:3,noise_2q:.01,shots:2048,readout_noise:.01},targets:[1],checks:1},4:{setup:{n:4,seed:19,depth_parameter:3,noise_2q:.01,shots:2048,readout_noise:.01},targets:[],checks:0,tCount:1}};function jA({mission:t,setStage:e,onResult:n,onBack:i,onHelp:r,muted:s,onToggleMute:a,registerPick:o}){const c=t.id===4,u=VA[t.id]||{setup:BA(),targets:[],checks:0},[h,p]=ae.useState(null),[f,m]=ae.useState(!1),[x,M]=ae.useState("cached"),[v,d]=ae.useState(u.setup),[g,E]=ae.useState(u.setup.shots||2048),[S,w]=ae.useState(u.targets),[A,b]=ae.useState(u.checks),[_,C]=ae.useState(u.tCount||1),[P,L]=ae.useState(c?"different_ideals_not_causal":""),[O,H]=ae.useState([]);ae.useEffect(()=>{c&&!P&&L("different_ideals_not_causal")},[c,P]);const[D,z]=ae.useState(null),[K,G]=ae.useState(null),[I,U]=ae.useState(!1),[B,q]=ae.useState(!1),[de,he]=ae.useState(""),[$e,De]=ae.useState(""),[ze,Y]=ae.useState(!1),[J,ve]=ae.useState("board_game"),He=ae.useRef(null);ae.useEffect(()=>{var ue;(ue=He.current)==null||ue.scrollTo({top:0,behavior:"smooth"})},[t.id,J]);const[ge,ne]=ae.useState(null),Ge=ae.useRef(void 0),se=ae.useMemo(()=>kA(t.id),[t.id]),oe=ae.useMemo(()=>zA(v,{t_count:c?_:0,targetOrder:S,checks:c?0:A,shots:g}),[v,c,_,S,A,g]);ae.useEffect(()=>{qi.health().then(ue=>{p(ue),m(!1)}).catch(()=>{p(null),m(!0)})},[]),ae.useEffect(()=>{let ue=!1;return qi.scene(oe).then(N=>{!ue&&N.rows&&H(N.rows)}).catch(()=>{ue||H([])}),()=>{ue=!0}},[oe]),ae.useEffect(()=>{let ue=!1;return qi.preflight(t.id,oe,se).then(N=>{ue||z(N.brief)}).catch(()=>{ue||z(null)}),()=>{ue=!0}},[t.id,oe,se]);const fe=!!(h!=null&&h.qiskit_available)&&v.n<=6&&v.depth_parameter<=20;ae.useEffect(()=>{if(!fe){G(null);return}return window.clearTimeout(Ge.current),Ge.current=window.setTimeout(()=>{U(!0),qi.circuit(oe).then(G).catch(()=>G(null)).finally(()=>U(!1))},250),()=>window.clearTimeout(Ge.current)},[oe,fe]),ae.useEffect(()=>{ge||e({kind:"play",circuit:K,dataQubits:v.n,selected:S,checks:c?0:A,tCount:c?_:0,scanning:B,accent:t.accent})},[K,v.n,S,A,c,_,B,t.accent,e,ge]);const le=ae.useCallback(ue=>{const N=S.includes(ue);Ve.play(N?"remove":"place");const Qe=N?S.filter(qe=>qe!==ue):[...S,ue];b(qe=>Math.min(qe,Math.max(0,Qe.length))),w(Qe)},[S]);ae.useEffect(()=>(o(ue=>{if(ue.startsWith("qubit:")){const N=Number(ue.slice(6));!c&&N>=0&&N<v.n&&le(N)}}),()=>o(()=>{})),[o,le,c,v.n]);const re=Math.min(S.length,3),je=async()=>{var ue;Y(!0),De("");try{const N=await qi.recommendations(t.id,se);if(!N.matches.length){De("No tested feasible scenario found in cache.");return}const Qe=N.matches[0];if(d(Qe.setup),E(Qe.setup.shots??2048),M("cached"),(ue=Qe.brief)!=null&&ue.best_tested){const qe=Qe.brief.best_tested,R=qe.target_order!=="none"?qe.target_order.split("-").map(Number):[];w(R),b(Number(qe.checks)||1),De(`Configured winning setup: Qubits [${qe.target_order}] with ${qe.checks} check(s).`)}else w([0,1]),b(1),De("Configured recommended setup for this sector.");Ve.play("select")}catch(N){De(N.message)}finally{Y(!1)}},Ze=async()=>{he(""),q(!0);try{Ve.play("launch");let ue;const N=x==="cached"&&!ke?"live":x;try{ue=await qi.execute(t.id,N,oe,se,c&&P||null)}catch(Qe){if(N==="cached")ue=await qi.execute(t.id,"live",oe,se,c&&P||null);else throw Qe}ne(ue)}catch(ue){he(ue.message),Ve.play("error")}finally{q(!1)}},ke=O.find(ue=>ue.t_count===oe.t_count&&ue.target_order===oe.target_order&&ue.checks===oe.checks)||null;return l.jsxs(l.Fragment,{children:[ge&&l.jsx(sv,{mission:t,spec:oe,result:ge,onComplete:()=>{n(ge)}}),l.jsxs("div",{className:"play-root",style:{"--accent":t.accent,"--accent-soft":t.accentSoft},children:[l.jsxs("header",{className:"topbar",children:[l.jsxs("button",{className:"ghost",onClick:i,children:[l.jsx($y,{size:16})," MISSION MAP"]}),l.jsxs("div",{className:"sector-title",children:[l.jsxs("small",{children:["EPISODE ",t.id," · ",t.label]}),l.jsx("strong",{children:t.title})]}),l.jsxs("div",{className:"top-actions",children:[l.jsxs("span",{className:"engine",title:f?"API Offline":h!=null&&h.qiskit_available?"Qiskit Aer Online":"Cached Results Online",children:[l.jsx("span",{className:"dot","data-on":!f}),l.jsx("small",{children:h!=null&&h.qiskit_available?"Qiskit 2.5 Aer":"Cached Aer Data"})]}),l.jsxs("button",{className:"ghost",onClick:r,title:"How to play",children:[l.jsx(Ol,{size:16})," HOW TO PLAY"]}),l.jsx("button",{className:"ghost",onClick:a,children:s?l.jsx(uh,{size:16}):l.jsx(ch,{size:16})})]})]}),l.jsxs("div",{className:"play-scroll-container",ref:He,children:[l.jsxs("div",{className:"workspace-view-switcher",children:[l.jsxs("button",{className:`view-mode-tab ${J==="board_game"?"active":""}`,onClick:()=>{ve("board_game"),Ve.play("select")},children:[l.jsx(_d,{size:16}),l.jsx("span",{children:"SURFACE-CODE TABLETOP BOARD (LITINSKI 2019)"}),l.jsx("span",{className:"tab-pill",children:"TABLETOP GAMEPLAY"})]}),l.jsxs("button",{className:`view-mode-tab ${J==="circuit"?"active":""}`,onClick:()=>{ve("circuit"),Ve.play("select")},children:[l.jsx(Ka,{size:16}),l.jsx("span",{children:"SPACETIME QUANTUM CIRCUIT (AER TIMELINE)"}),l.jsx("span",{className:"tab-pill",children:"CIRCUIT VIEW"})]})]}),J==="board_game"?l.jsx(GA,{mission:t,budget:se,selected:S,checks:c?0:A,maxChecks:re,isT:c,tCount:_,exact:ke,shots:g,circuit:K,brief:D,interpretation:P,onSetInterpretation:L,onToggleQubit:le,onSetChecks:b,onEngage:Ze,onAutoWin:je,suggesting:ze}):l.jsxs(l.Fragment,{children:[l.jsx(HA,{circuit:K,loading:I,dataQubits:v.n,selected:S,checks:c?0:A,maxChecks:re,isT:c,tCount:_,missionId:t.id,accent:t.accent,budget:se,exact:ke,shots:g,onToggleQubit:le,onSetChecks:b}),l.jsxs("div",{className:"tactical-deck-grid",children:[l.jsxs("section",{className:"dashboard-panel build-panel",children:[l.jsxs("div",{className:"panel-header",children:[l.jsxs("div",{className:"panel-title-group",children:[l.jsx(lh,{size:18,color:t.accent}),l.jsx("h2",{children:"DEFENSE STRATEGY BUILDER"})]}),l.jsxs("button",{className:"smart-tune-btn",disabled:ze,onClick:je,title:"Automatically configure an optimal strategy that wins this episode",children:[l.jsx(Us,{size:14}),ze?"Scanning…":"✨ Auto-Win Setup"]})]}),$e&&l.jsx("div",{className:"notice-banner",children:$e}),l.jsxs("div",{className:"form-group",children:[l.jsxs("label",{children:[l.jsx("span",{children:"1 · SIMULATION ENGINE"}),l.jsx("em",{children:x==="cached"?"Exact Measured Runs":"Live Aer Execution"})]}),l.jsxs("div",{className:"segmented-control",children:[l.jsxs("button",{className:x==="cached"?"active":"",onClick:()=>M("cached"),children:[l.jsx(Jy,{size:14})," MEASURED BENCHMARK (RECOMMENDED)"]}),l.jsxs("button",{className:x==="live"?"active":"",onClick:()=>M("live"),children:[l.jsx(za,{size:14})," LIVE QISKIT RUN"]})]})]}),x==="live"&&l.jsxs("div",{className:"live-grid",children:[l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Data Qubits"}),l.jsx("select",{value:v.n,onChange:ue=>d(N=>({...N,n:Number(ue.target.value)})),children:[2,3,4,5,6].map(ue=>l.jsxs("option",{value:ue,children:[ue," qubits"]},ue))})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Layers (Depth)"}),l.jsx("input",{type:"number",min:1,max:20,value:v.depth_parameter,onChange:ue=>d(N=>({...N,depth_parameter:Number(ue.target.value)}))})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"2Q Gate Noise"}),l.jsxs("select",{value:v.noise_2q,onChange:ue=>d(N=>({...N,noise_2q:Number(ue.target.value)})),children:[l.jsx("option",{value:.01,children:"1% Noise"}),l.jsx("option",{value:.04,children:"4% Noise"}),l.jsx("option",{value:.08,children:"8% Noise"})]})]}),l.jsxs("div",{className:"input-group",children:[l.jsx("label",{children:"Total Shots"}),l.jsx("select",{value:g,onChange:ue=>E(Number(ue.target.value)),children:[512,1024,2048,4096].map(ue=>l.jsxs("option",{value:ue,children:[ue.toLocaleString()," shots"]},ue))})]})]}),c?l.jsxs("div",{className:"form-group t-section",children:[l.jsxs("label",{children:[l.jsx("span",{children:"2 · T-GATE COUNT IN PAYLOAD"}),l.jsx("em",{children:"Non-Clifford Rotations"})]}),l.jsx("div",{className:"segmented-control t-control",children:[1,2,4].map(ue=>l.jsxs("button",{className:_===ue?"active":"",onClick:()=>C(ue),children:[ue,"× T Gate",ue>1?"s":""]},ue))}),l.jsxs("div",{className:"info-callout",children:[l.jsx(oh,{size:15,color:"#14b8a6"}),l.jsxs("div",{children:[l.jsx("strong",{children:"Why T Gates are Special:"})," T gates are non-Clifford rotations (phase shift by π/4). Standard automatic Pauli checks do not commute with T. A hand-made check is ONLY valid across a T gate if its Pauli acts as ",l.jsx("b",{children:"I or Z"})," on that wire, because T is diagonal and commutes with Z (TZ = ZT)!"]})]}),l.jsxs("label",{style:{marginTop:"14px"},children:[l.jsx("span",{children:"3 · SCIENTIFIC CONCLUSION"}),l.jsx("em",{children:"Select Valid Finding"})]}),l.jsx("div",{className:"interpretation-list",children:Sd.map(ue=>l.jsxs("button",{className:`interpretation-btn ${P===ue.value?"selected":""}`,onClick:()=>{L(ue.value),Ve.play("select")},children:[l.jsx("div",{className:"radio-circle",children:P===ue.value&&l.jsx("div",{className:"dot"})}),l.jsx("span",{children:ue.text})]},ue.value))})]}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"form-group",children:[l.jsxs("label",{children:[l.jsx("span",{children:"2 · ATTACH CHECKS TO QUBITS"}),l.jsx("em",{children:S.length?`Monitoring Qubits [${S.map(ue=>`q${ue}`).join(", ")}]`:"Click qubits to attach checks"})]}),l.jsx("p",{className:"field-hint",children:"Attach spacetime checks to data qubits where entangling gates cause errors:"}),l.jsxs("div",{className:"qubit-selection-grid",children:[Array.from({length:v.n},(ue,N)=>{const Qe=S.includes(N),qe=S.indexOf(N)+1;return l.jsxs("button",{className:`qubit-card ${Qe?"selected":""}`,onClick:()=>le(N),children:[l.jsxs("div",{className:"qubit-card-top",children:[l.jsxs("span",{className:"qubit-name",children:["q",N]}),Qe&&l.jsxs("span",{className:"qubit-order-tag",children:["Target #",qe]})]}),l.jsx("span",{className:"qubit-status",children:Qe?"Protected by Checks":"Click to Monitor"})]},N)}),S.length>0&&l.jsx("button",{className:"qubit-clear-btn",onClick:()=>{w([]),b(0)},children:"Clear All"})]})]}),l.jsxs("div",{className:"form-group",children:[l.jsxs("label",{children:[l.jsx("span",{children:"3 · NUMBER OF CHECKS"}),l.jsx("em",{children:A===0?"0 Checks (Unprotected)":`${A} Check(s) Active`})]}),l.jsx("div",{className:"segmented-control checks-control",children:Array.from({length:Math.max(1,re+1)},(ue,N)=>l.jsx("button",{className:A===N?"active":"",onClick:()=>b(N),disabled:N>0&&S.length===0,children:N===0?"0 (None)":`${N} Check${N>1?"s":""}`},N))}),l.jsx("p",{className:"field-hint",children:A===0?"No checks placed. Raw hardware results will be measured.":`${A} check(s) deploy ${A} helper ancilla(s) to detect errors and post-select clean runs.`})]})]}),l.jsxs("div",{className:"engage-section",children:[l.jsx("button",{className:"engage-btn",disabled:B||c&&!P,onClick:Ze,children:B?l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"spinner-glow"}),"RUNNING QISKIT SIMULATION…"]}):l.jsxs(l.Fragment,{children:[l.jsx(Qa,{size:18,fill:"currentColor"}),"ENGAGE & RUN QISKIT SIMULATION",l.jsx(za,{size:16})]})}),l.jsx("small",{className:"engage-sub",children:"Executes circuits, measures syndrome parities, and computes post-selected fidelity."})]})]}),l.jsxs("section",{className:"dashboard-panel intel-panel",children:[l.jsxs("div",{className:"intel-card goal-card",children:[l.jsxs("div",{className:"intel-card-header",children:[l.jsx("span",{className:"goal-badge",children:"MISSION OBJECTIVE"}),l.jsx("h3",{children:t.headline})]}),l.jsx("p",{className:"win-rule-box",children:t.winRule}),l.jsxs("p",{className:"threat-text",children:[l.jsx("b",{children:"Hardware Environment:"})," ",t.threat]})]}),D&&l.jsxs("div",{className:`intel-card preflight-card ${D.status}`,children:[l.jsxs("div",{className:"preflight-header",children:[D.status==="feasible_tested"?l.jsx(Ba,{size:18,color:"#14b8a6"}):l.jsx(sS,{size:18,color:"#ff6b5a"}),l.jsx("strong",{children:D.status==="feasible_tested"?"FEASIBLE STRATEGY AVAILABLE":D.status==="mathematically_unattainable"?"TARGET MATHEMATICALLY UNATTAINABLE":"DIAGNOSTIC BENCHMARK"})]}),l.jsx("p",{className:"preflight-reason",children:D.reason}),D.target_fidelity!==null&&l.jsxs("div",{className:"preflight-metrics",children:[l.jsxs("div",{className:"p-metric",children:[l.jsx("span",{children:"Baseline Fidelity:"}),l.jsxs("b",{children:[(Number(D.baseline_fidelity)*100).toFixed(1),"%"]})]}),l.jsxs("div",{className:"p-metric",children:[l.jsx("span",{children:"Needed to Win:"}),l.jsxs("b",{children:[(Number(D.target_fidelity)*100).toFixed(1),"%"]})]}),l.jsxs("div",{className:"p-metric",children:[l.jsx("span",{children:"Required Gain:"}),l.jsxs("b",{style:{color:"#14b8a6"},children:["+",(Number(D.required_gain)*100).toFixed(1),"%"]})]})]})]}),ke&&l.jsxs("div",{className:"intel-card live-prediction-card",children:[l.jsxs("div",{className:"prediction-header",children:[l.jsx(Us,{size:16,color:"#14b8a6"}),l.jsx("span",{children:"MEASURED OUTCOME PREVIEW"})]}),l.jsxs("div",{className:"prediction-grid",children:[l.jsxs("div",{className:"pred-item",children:[l.jsx("small",{children:"ACCURACY (F)"}),l.jsxs("strong",{children:[(Number(ke.conditional_fidelity)*100).toFixed(1),"%"]}),l.jsxs("span",{children:["Gain: ",Number(ke.conditional_fidelity)>=Number(ke.baseline_fidelity)?"+":"",((Number(ke.conditional_fidelity)-Number(ke.baseline_fidelity))*100).toFixed(1),"%"]})]}),l.jsxs("div",{className:"pred-item",children:[l.jsx("small",{children:"SHOTS KEPT (r)"}),l.jsxs("strong",{children:[(Number(ke.retention)*100).toFixed(1),"%"]}),l.jsxs("span",{children:[Math.round(g*Number(ke.retention)).toLocaleString()," clean shots"]})]}),l.jsxs("div",{className:"pred-item",children:[l.jsx("small",{children:"PREDICTED SCORE"}),l.jsx("strong",{style:{color:"#14b8a6"},children:(Number(ke.conditional_fidelity)*Number(ke.retention)*100).toFixed(1)}),l.jsx("span",{children:"Accuracy × Retention"})]})]})]}),l.jsxs("div",{className:"intel-card tutorial-card",children:[l.jsxs("div",{className:"tut-header",children:[l.jsx(Ol,{size:15,color:"#14b8a6"}),l.jsx("span",{children:"HOW ERROR DETECTION WORKS (THE 4 STEPS)"})]}),l.jsxs("ol",{className:"tut-list",children:[l.jsxs("li",{children:[l.jsx("b",{children:"Noise occurs:"})," Gates flip qubits randomly during computation."]}),l.jsxs("li",{children:[l.jsx("b",{children:"Checks measure parities:"})," Helper qubits (ancillas) catch errors."]}),l.jsxs("li",{children:[l.jsx("b",{children:"Discard alarmed runs:"})," Every shot where a check triggered an alarm is discarded."]}),l.jsxs("li",{children:[l.jsx("b",{children:"High accuracy:"})," Surviving clean shots achieve higher fidelity!"]})]})]})]})]})]})]}),de&&l.jsxs("div",{className:"toast-banner error",children:[l.jsx(_x,{size:18}),l.jsx("span",{children:de}),l.jsx("button",{onClick:()=>he(""),children:"Dismiss"})]})]})]})}function WA(t,e=950){const[n,i]=ae.useState(0);return ae.useEffect(()=>{let r=0;const s=performance.now(),a=o=>{const c=Math.min(1,(o-s)/e);i(t*(.5-.5*Math.cos(Math.PI*c))),c<1&&(r=requestAnimationFrame(a))};return r=requestAnimationFrame(a),()=>cancelAnimationFrame(r)},[t,e]),n}function XA({result:t,sector:e,stars:n,xpGained:i,rankedUp:r,onRetry:s,onNext:a,onMap:o,hasNext:c,onHelp:u}){const{row:h,verdict:p}=t,[f,m]=ae.useState({}),[x,M]=ae.useState("plain"),[v,d]=ae.useState(!1);ae.useEffect(()=>{try{m(h.syndrome_histogram?JSON.parse(h.syndrome_histogram):{})}catch{m({})}},[h.syndrome_histogram]);const g=p.passed,E=Number(h.shots)||2048,S=(100*Number(h.retention)).toFixed(1),w=(100*Number(h.conditional_fidelity)).toFixed(1),A=(100*Number(h.baseline_fidelity)).toFixed(1),b=((Number(h.conditional_fidelity)-Number(h.baseline_fidelity))*100).toFixed(1),_=WA(p.score),C=h.accepted??Math.round(E*(Number(h.retention)||1)),P=E-C;return l.jsxs(l.Fragment,{children:[v&&l.jsx(sv,{mission:e,spec:{n:h.n,seed:h.seed,depth_parameter:h.depth_parameter,noise_2q:h.noise_2q,shots:h.shots,t_count:h.t_count,target_order:h.target_order,checks:h.checks,readout:Number(h.readout_noise)||.01},result:t,onComplete:()=>d(!1)}),l.jsxs("div",{className:`debrief-container ${g?"pass":"fail"}`,style:{"--accent":e.accent},children:[l.jsxs("div",{className:`debrief-hero ${g?"hero-pass":"hero-fail"}`,children:[l.jsx("div",{className:"hero-status-icon",children:g?l.jsx(Ba,{size:36,color:"#14b8a6"}):l.jsx(_x,{size:36,color:"#ff6b5a"})}),l.jsxs("div",{className:"hero-text",children:[l.jsxs("span",{className:"hero-subtitle",children:["EPISODE ",e.id," · ",e.label," · ",e.codename]}),l.jsx("h2",{children:g?"MISSION SUCCESS: SECTOR SECURED!":"OBJECTIVE MISSED: THREAT ESCAPED"}),l.jsx("p",{className:"hero-summary",children:g?l.jsxs(l.Fragment,{children:["Your spacetime check caught ",l.jsxs("b",{children:[P.toLocaleString()," corrupted runs"]}),", boosting accuracy from ",l.jsxs("b",{children:[A,"%"]})," to ",l.jsxs("b",{children:[w,"%"]})," (",l.jsxs("b",{children:["+",b,"% gain"]}),") while keeping ",l.jsxs("b",{children:[S,"% of shots"]}),"!"]}):l.jsx(l.Fragment,{children:p.reasons[0]||"The chosen strategy did not satisfy the target accuracy gain or shot retention budget."})})]}),l.jsx("div",{className:"hero-rewards",children:l.jsx("div",{className:"star-row",children:Array.from({length:3},(L,O)=>l.jsx(Sx,{size:22,className:O<n?"star-filled on star-pop":"star-empty"},O))})})]}),l.jsxs("div",{className:"debrief-metrics-grid",children:[l.jsxs("div",{className:"metric-card score-card",children:[l.jsxs("div",{className:"metric-header",children:[l.jsx(Zy,{size:16,color:"#14b8a6"}),l.jsx("span",{children:"FINAL MISSION SCORE"})]}),l.jsxs("div",{className:"score-display",children:[l.jsx("strong",{style:{color:"#14b8a6"},children:g?_.toFixed(1):p.score.toFixed(1)}),l.jsx("span",{className:"score-sub",children:"POINTS"})]}),l.jsxs("p",{className:"metric-desc",children:["Formula: ",l.jsxs("b",{children:["Accuracy (",w,"%) × Retention (",S,"%) × 100"]})]})]}),l.jsxs("div",{className:"metric-card compare-card",children:[l.jsxs("div",{className:"metric-header",children:[l.jsx(lS,{size:16,color:"#14b8a6"}),l.jsx("span",{children:"BEFORE VS AFTER PROTECTION"})]}),l.jsxs("div",{className:"compare-grid",children:[l.jsxs("div",{className:"compare-col before",children:[l.jsx("small",{children:"WITHOUT CHECKS (RAW)"}),l.jsxs("strong",{children:[A,"%"]}),l.jsx("span",{children:"100% shots kept (full noise)"})]}),l.jsx("div",{className:"compare-arrow",children:l.jsx(Yy,{size:18})}),l.jsxs("div",{className:"compare-col after",children:[l.jsx("small",{children:"WITH CHECKS (POST-SELECTED)"}),l.jsxs("strong",{style:{color:"#14b8a6"},children:[w,"%"]}),l.jsxs("span",{children:[S,"% clean shots kept"]})]})]}),l.jsxs("div",{className:"compare-footer",children:[l.jsxs("span",{className:"gain-chip",style:{color:Number(b)>=0?"#14b8a6":"#ff6b5a"},children:[Number(b)>=0?`+${b}%`:`${b}%`," Net Accuracy Boost"]}),l.jsxs("span",{className:"filtered-chip",children:[P.toLocaleString()," corrupted runs discarded"]})]})]}),l.jsxs("div",{className:"metric-card resource-card",children:[l.jsxs("div",{className:"metric-header",children:[l.jsx(Ka,{size:16,color:"#14b8a6"}),l.jsx("span",{children:"HARDWARE OVERHEAD"})]}),l.jsxs("div",{className:"resource-pills",children:[l.jsxs("div",{className:"res-pill",children:[l.jsxs("strong",{children:["+",h.added_ancillas||0]}),l.jsx("span",{children:"Helper Qubits"})]}),l.jsxs("div",{className:"res-pill",children:[l.jsxs("strong",{children:["+",h.added_two_qubit||0]}),l.jsx("span",{children:"Extra 2Q Gates"})]}),l.jsxs("div",{className:"res-pill",children:[l.jsxs("strong",{children:["+",h.added_depth||0]}),l.jsx("span",{children:"Added Depth"})]})]}),l.jsxs("p",{className:"metric-desc",children:["Checks add minimal hardware: only +",h.added_ancillas||0," extra wire(s)."]})]})]}),l.jsxs("div",{className:"debrief-tabs",children:[l.jsxs("button",{className:`debrief-tab ${x==="plain"?"active":""}`,onClick:()=>M("plain"),children:[l.jsx(Ky,{size:15})," Plain English Explanation"]}),l.jsxs("button",{className:`debrief-tab ${x==="quantum"?"active":""}`,onClick:()=>M("quantum"),children:[l.jsx(ka,{size:15})," Quantum Science & Qiskit Data"]}),l.jsxs("button",{className:"walkthrough-btn",onClick:()=>d(!0),title:"Replay step-by-step visualizer",children:[l.jsx(Qa,{size:14,fill:"currentColor"})," Replay Execution Steps"]})]}),x==="plain"?l.jsx("div",{className:"tab-pane plain-pane",children:l.jsxs("div",{className:"plain-grid",children:[l.jsxs("div",{className:"intel-card",children:[l.jsx("h3",{children:"MISSION REQUIREMENTS CHECKLIST"}),l.jsx("div",{className:"checklist",children:p.reasons.map((L,O)=>l.jsxs("div",{className:"check-item",children:[l.jsx("span",{className:"bullet",children:"●"}),l.jsx("span",{children:L})]},O))})]}),l.jsxs("div",{className:"intel-card concept-card",children:[l.jsx("h3",{children:"HOW SPACETIME ERROR DETECTION WORKED"}),l.jsxs("p",{children:["Think of sending fragile porcelain cups through the mail. Rather than wrapping them in heavy steel armor (which is quantum error correction), we place a delicate seal on each box (the ",l.jsx("b",{children:"watcher check"}),")."]}),l.jsxs("ul",{children:[l.jsxs("li",{children:[l.jsx("b",{children:"The Noise:"})," While traveling through quantum gates, noise jostles the boxes, cracking some seals."]}),l.jsxs("li",{children:[l.jsx("b",{children:"The Detection:"})," When the packages arrive, helper qubits check the seals. Boxes with broken seals (",l.jsx("b",{children:"syndrome = 1"}),") are thrown away!"]}),l.jsxs("li",{children:[l.jsx("b",{children:"The Result:"})," The surviving unsealed boxes (",l.jsx("b",{children:"syndrome = 0"}),") have near-perfect cups inside! Accuracy went from ",A,"% to ",w,"%."]}),l.jsxs("li",{children:[l.jsx("b",{children:"The Trade-off:"})," You threw away ",P.toLocaleString()," boxes. If you throw away too many, you have no shipment left. Your high score comes from balancing accuracy and kept shipments."]})]})]})]})}):l.jsx("div",{className:"tab-pane quantum-pane",children:l.jsxs("div",{className:"quantum-grid",children:[l.jsxs("div",{className:"intel-card",children:[l.jsx("h3",{children:"MEASURED SYNDROME PARITIES (ALARM DISTRIBUTION)"}),l.jsx("p",{className:"micro-text",children:"Qiskit Aer measured these classical bitstring outcomes from the helper ancilla registers:"}),l.jsx("div",{className:"syndrome-list",children:Object.entries(f).map(([L,O])=>{const H=L==="0"||L==="00"||L==="unprotected",D=(O/E*100).toFixed(1);return l.jsxs("div",{className:`syn-item ${H?"clean":"corrupted"}`,children:[l.jsxs("div",{className:"syn-code",children:[l.jsx("code",{children:L}),l.jsx("span",{children:H?"Clean (Kept)":"Error Alarm (Discarded)"})]}),l.jsx("div",{className:"syn-bar-wrap",children:l.jsx("div",{className:"syn-bar",style:{width:`${D}%`,backgroundColor:H?"#14b8a6":"#ff6b5a"}})}),l.jsxs("div",{className:"syn-count",children:[l.jsx("b",{children:O.toLocaleString()})," shots (",D,"%)"]})]},L)})})]}),l.jsxs("div",{className:"intel-card",children:[l.jsx("h3",{children:"SCIENTIFIC PROVENANCE & FORMULAS"}),l.jsxs("div",{className:"formula-box",children:[l.jsxs("div",{className:"formula-line",children:[l.jsx("code",{children:"Fidelity F = (∑ √(P_ideal(x) · P_measured(x)))²"}),l.jsx("small",{children:"Squared Bhattacharyya overlap between measured classical distribution and ideal statevector."})]}),l.jsxs("div",{className:"formula-line",children:[l.jsx("code",{children:"Game Score = 100 × F × r"}),l.jsx("small",{children:"Where r is the retained-shot fraction (kept shots / attempted shots)."})]}),l.jsxs("div",{className:"formula-line",children:[l.jsxs("code",{children:["Source: ",t.source]}),l.jsx("small",{children:"Generated using real Qiskit Aer simulations; zero fabricated scores."})]})]})]})]})}),l.jsxs("div",{className:"debrief-nav-bar",children:[l.jsxs("button",{className:"nav-btn ghost",onClick:o,children:[l.jsx(nS,{size:16})," Return to Mission Map"]}),l.jsxs("button",{className:"nav-btn ghost",onClick:s,children:[l.jsx(kl,{size:16})," Re-tune Strategy"]}),c&&g&&l.jsxs("button",{className:"nav-btn primary",onClick:()=>a(),children:["Deploy Next Episode ",l.jsx(vx,{size:18})]})]})]})]})}function qA({onEnter:t,onDeploySector:e,onHelp:n,muted:i,onToggleMute:r,progress:s}){return l.jsxs("div",{className:"classy-boot-terminal",children:[l.jsxs("main",{className:"boot-editorial-hero",children:[l.jsxs("div",{className:"boot-hero-frame",children:[l.jsx("span",{className:"boot-pre-tag",children:"SPACETIME DEFENSE SYSTEM"}),l.jsx("h1",{className:"boot-garamond-title",children:"Quantum Sentinel"}),l.jsxs("div",{className:"boot-subtitle-row",children:[l.jsx("span",{className:"sub-dash"}),l.jsx("span",{className:"sub-tag",children:"THE PROTECTION PARADOX"}),l.jsx("span",{className:"sub-dash"})]}),l.jsx("p",{className:"boot-editorial-desc gaming-punchline",children:"Catch Errors. Protect Qubits."}),l.jsxs("div",{className:"boot-cta-deck",children:[l.jsx("button",{className:"tactical-start-mission-btn",onClick:()=>{Ve.play("launch"),t()},children:l.jsx("span",{children:"ENTER MISSION TERMINAL"})}),l.jsx("span",{className:"boot-telemetry-note",children:"Verified Qiskit Aer simulation backend · Zero synthetic scores"})]})]}),l.jsx("div",{className:"boot-sectors-grid",children:zt.map(a=>{var c;const o=!!((c=s.missions[a.id])!=null&&c.passed);return l.jsxs("div",{className:`boot-sector-card ${o?"cleared":""}`,onClick:()=>{Ve.play("select"),e(a.id)},children:[l.jsxs("div",{className:"card-top-row",children:[l.jsxs("span",{className:"card-ep",children:["SEC-0",a.id]}),l.jsx("span",{className:"card-status",children:o?"✓ SECURED":"READY"})]}),l.jsx("strong",{className:"card-title",children:a.title}),l.jsx("p",{className:"card-headline",children:a.headline}),l.jsx("div",{className:"card-foot",children:l.jsx("span",{className:"card-action-link",children:"Initialize ▶"})})]},a.id)})})]}),l.jsxs("div",{className:"bottom-floating-tools",children:[l.jsxs("button",{className:"floating-tool-btn",onClick:r,title:i?"Unmute Audio FX":"Mute Audio FX","aria-label":"Toggle Audio FX",children:[i?l.jsx(uh,{size:15}):l.jsx(ch,{size:15}),l.jsx("span",{children:i?"MUTED":"AUDIO"})]}),l.jsxs("button",{className:"floating-tool-btn",onClick:n,title:"Game Guide & Rules","aria-label":"Game Guide",children:[l.jsx(Ol,{size:15}),l.jsx("span",{children:"GUIDE"})]})]})]})}const av="quantum-sentinel-progress";function ng(){return{xp:0,missions:{}}}function $A(){try{const t=localStorage.getItem(av);if(!t)return ng();const e=JSON.parse(t);return{xp:Number(e.xp)||0,missions:e.missions??{}}}catch{return ng()}}function YA(t){try{localStorage.setItem(av,JSON.stringify(t))}catch{}}function ZA(t,e,n,i){if(!e)return 0;let r=1;return t===4?3:(n>=.9&&(r=2),(t===2?i>=.85:i>=.8)&&(r=3),r)}function KA(t,e,n){return Math.round(Math.max(0,e))+n*25+t*10}function QA(t,e,n){const i=t.missions[e]??{stars:0,best:-1/0,passed:!1,attempts:0},r=ZA(e,n.passed,n.yieldRatio,n.retention),s=Jp(t.xp).current.name,a=n.passed?KA(e,n.score,r):10,o={xp:t.xp+a,missions:{...t.missions,[e]:{stars:Math.max(i.stars,r),best:Math.max(i.best===-1/0?0:i.best,n.score),passed:i.passed||n.passed,attempts:i.attempts+1}}};YA(o);const c=Jp(o.xp).current.name;return{next:o,stars:r,xpGained:a,rankedUp:c!==s}}function ig(t){var n;const e={};for(const i of zt)e[i.id]=!!((n=t.missions[i.id])!=null&&n.passed);return e}function JA({onClose:t}){return l.jsx("div",{className:"modal-backdrop",onClick:t,children:l.jsxs("div",{className:"help-modal",onClick:e=>e.stopPropagation(),children:[l.jsxs("header",{children:[l.jsxs("div",{children:[l.jsx("h2",{children:"HOW TO PLAY"}),l.jsx("small",{children:"No quantum experience needed — this is what is actually happening."})]}),l.jsx("button",{className:"ghost",onClick:t,children:l.jsx(uS,{size:16})})]}),l.jsxs("article",{className:"help-grid",children:[l.jsxs("section",{children:[l.jsx("h3",{children:"1 · GOAL"}),l.jsxs("p",{children:["Quantum computers are error-prone. Your job: protect a quantum computation so its ",l.jsx("b",{children:"final answer survives real noise"}),". Each sector needs a higher protection score than the last."]})]}),l.jsxs("section",{children:[l.jsx("h3",{children:"2 · YOUR CONTROLS"}),l.jsxs("p",{children:["On the ",l.jsx("b",{children:"build board"})," pick how many qbits the computation uses and how you defend it. ",l.jsx("b",{children:"Watchers"})," are extra qubits wired in to spot damage the moment it happens. ",l.jsx("b",{children:"T"})," is a special high-value quantum move that is harder to protect. Press ",l.jsx("b",{children:"ENGAGE"}),"."]})]}),l.jsxs("section",{children:[l.jsx("h3",{children:"3 · WHAT ENGAGE DOES"}),l.jsxs("p",{children:["Your exact circuit is compiled in ",l.jsx("b",{children:"Qiskit"})," and run through a simulated noisy chip thousands of times. Each run is checked for damage (an ",l.jsx("b",{children:"alarm"}),"). Every run that sets off an alarm is ",l.jsx("b",{children:"discarded"}),". The survivors are recounted and compared to the perfect answer to grade how true they are."]})]}),l.jsxs("section",{children:[l.jsx("h3",{children:"4 · HOW TO READ THE RESULT"}),l.jsxs("p",{children:[l.jsx("b",{children:"Survivors"})," = fraction of runs that avoided alarm. ",l.jsx("b",{children:"Faithfulness"})," = how close the survivors are to the perfect answer. ",l.jsx("b",{children:"Score"})," = faithfulness × survivors. Win the stars the sector demands; any attempt still logs a real measured result you can find in the LAB."]})]}),l.jsxs("section",{children:[l.jsx("h3",{children:"QUICK GLOSSARY"}),l.jsxs("ul",{children:[l.jsxs("li",{children:[l.jsx("b",{children:"Watchers / ancilla"})," — extra qubits that detect damage (syndrome bit = alarm state)."]}),l.jsxs("li",{children:[l.jsx("b",{children:"Alarm / non-trivial syndrome"})," — the watcher says the run was corrupted; that run is dropped."]}),l.jsxs("li",{children:[l.jsx("b",{children:"Faithfulness"})," — output-distribution fidelity F: how close the kept shots look to the perfect outcome."]}),l.jsxs("li",{children:[l.jsx("b",{children:"Survivors"})," — kept-shot fraction r. Score = r × F."]}),l.jsxs("li",{children:[l.jsx("b",{children:"Measured results"})," — cached real runs from an offline benchmark on the same noisy engine."]})]})]})]}),l.jsxs("footer",{children:[l.jsx("span",{children:"Every number you see is computed by Qiskit + Qiskit Aer + qiskit-paulice. Nothing is scripted."}),l.jsx("button",{className:"deploy",onClick:t,children:"GOT IT"})]})]})})}function eb(){var G;const[t,e]=ae.useState("map"),[n,i]=ae.useState({kind:"map",sectors:zt,active:0,passed:{}}),[r,s]=ae.useState(null),[a,o]=ae.useState(null),[c,u]=ae.useState(()=>$A()),[h,p]=ae.useState(1),[f,m]=ae.useState(0),[x,M]=ae.useState(Ve.muted),[v,d]=ae.useState(null),[g,E]=ae.useState(0),[S,w]=ae.useState(0),[A,b]=ae.useState(!1),[_,C]=ae.useState(!1),P=ae.useRef(()=>{});ae.useEffect(()=>{qi.campaign().then(o).catch(()=>o(null))},[]);const L=ae.useCallback(I=>{P.current=I},[]);ae.useCallback(I=>{Ve.play("pulse"),P.current(I)},[]),ae.useCallback(I=>s(I??null),[]);const O=ae.useCallback(I=>{Ve.play("launch"),p(I),s(null),e("play")},[]),H=ae.useCallback(I=>{d(I);const U=zt[h-1];i({kind:"debrief",passed:I.verdict.passed,fidelity:Number(I.row.conditional_fidelity)||0,retention:Number(I.row.retention)||0,score:I.verdict.score,accent:U.accent});const B={passed:I.verdict.passed,score:I.verdict.score,yieldRatio:Number(I.row.yield_ratio)||0,retention:Number(I.row.retention)||0},q=QA(c,h,B);u(q.next),E(q.stars),w(q.xpGained),b(q.rankedUp),Ve.play(I.verdict.passed?"success":"fail"),q.rankedUp&&setTimeout(()=>Ve.play("unlock"),600),e("debrief")},[c,h]),D=ae.useCallback(()=>{h<zt.length?O(h+1):(i({kind:"core"}),e("map"))},[h,O]),z=ae.useCallback(()=>M(Ve.toggleMute()),[]),K=ae.useCallback(()=>{i({kind:"map",sectors:zt,active:f,passed:ig(c)}),e("map")},[f,c]);return l.jsxs("div",{className:"game-root",children:[l.jsx(dS,{accent:(G=zt[h-1])==null?void 0:G.accent}),t==="boot"&&l.jsx(qA,{onEnter:()=>{i({kind:"map",sectors:zt,active:0,passed:ig(c)}),e("map")},onDeploySector:I=>{O(I)},onHelp:()=>C(!0),muted:x,onToggleMute:z,progress:c}),t==="map"&&l.jsx(OA,{campaign:a,progress:c,active:f,onSetActive:m,onDeploy:O,muted:x,onToggleMute:z,registerPick:L,setStage:i,onHelp:()=>C(!0)}),t==="play"&&l.jsx(jA,{mission:zt[h-1],setStage:i,onResult:H,onBack:K,onHelp:()=>C(!0),muted:x,onToggleMute:z,registerPick:L}),t==="debrief"&&v&&l.jsx(XA,{result:v,sector:zt[h-1],stars:g,xpGained:S,rankedUp:A,onRetry:()=>{s(null),e("play")},onNext:D,onMap:K,hasNext:h<zt.length,onHelp:()=>C(!0)}),_&&l.jsx(JA,{onClose:()=>C(!1)}),r&&t!=="boot"&&t!=="debrief"&&l.jsx("div",{className:"hover-tip",children:r})]})}gx(document.getElementById("root")).render(l.jsx(Lv.StrictMode,{children:l.jsx(eb,{})}));
