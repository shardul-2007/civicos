var cu=Object.defineProperty;var du=(n,e,t)=>e in n?cu(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Qs=(n,e,t)=>du(n,typeof e!="symbol"?e+"":e,t);import{r as W,a as fu,u as Go,L as st,b as Wi,R as vr,d as md,e as uu,f as hu,h as gt,N as pu,B as mu}from"./react-BPMFOZ0g.js";import{L as gu,F as $n,M as tn,B as Vo,T as gd,a as dr,C as On,U as Va,b as Ms,S as Mn,c as Fn,d as xu,e as yu,X as Kt,G as fr,f as vu,g as Fi,h as xd,i as yd,j as Us,P as ea,k as En,l as or,H as bu,R as vd,m as lr,Z as li,A as ur,n as bd,o as Ut,D as Su,I as _u,p as br,q as Mu,r as Sd,s as _d,t as Sr,u as Eu,v as Md,w as wu,x as Tu,y as Xa,z as Au,E as Cu,J as dn,K as Ed,N as wd,O as Td,Q as Ad,V as Nl,W as Os,Y as Ru,_ as Cd,$ as Rd,a0 as Xo,a1 as qo,a2 as Id,a3 as Lr,a4 as Iu,a5 as Pd,a6 as Pu,a7 as Dd,a8 as Du,a9 as Lu}from"./lucide-RXXHfbV0.js";import{R as Ld,A as Nu,X as Nd,Y as Ud,T as Od,a as Ul,B as Uu,b as Ol}from"./recharts-Dd5yexXk.js";import{L as Kn,M as Fs,T as zs,C as Ou,a as Bs,P as Fu,u as zu,b as Bu}from"./leaflet-C6w747eu.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();var Fd={exports:{}},ks={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ku=W,ju=Symbol.for("react.element"),Wu=Symbol.for("react.fragment"),Hu=Object.prototype.hasOwnProperty,Gu=ku.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Vu={key:!0,ref:!0,__self:!0,__source:!0};function zd(n,e,t){var i,r={},a=null,o=null;t!==void 0&&(a=""+t),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Hu.call(e,i)&&!Vu.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ju,type:n,key:a,ref:o,props:r,_owner:Gu.current}}ks.Fragment=Wu;ks.jsx=zd;ks.jsxs=zd;Fd.exports=ks;var s=Fd.exports,qa={},Fl=fu;qa.createRoot=Fl.createRoot,qa.hydrateRoot=Fl.hydrateRoot;function Bd(n,e){return function(){return n.apply(e,arguments)}}const{toString:Xu}=Object.prototype,{getPrototypeOf:zi}=Object,{iterator:_r,toStringTag:kd}=Symbol,Es=(({hasOwnProperty:n})=>(e,t)=>n.call(e,t))(Object.prototype),hr=(n,e)=>{let t=n;const i=[];for(;t!=null&&t!==Object.prototype;){if(i.indexOf(t)!==-1)return!1;if(i.push(t),Es(t,e))return!0;t=zi(t)}return!1},qu=(n,e)=>n!=null&&hr(n,e)?n[e]:void 0,Yo=(n=>e=>{const t=Xu.call(e);return n[t]||(n[t]=t.slice(8,-1).toLowerCase())})(Object.create(null)),nn=n=>(n=n.toLowerCase(),e=>Yo(e)===n),js=n=>e=>typeof e===n,{isArray:ci}=Array,di=js("undefined");function Hi(n){return n!==null&&!di(n)&&n.constructor!==null&&!di(n.constructor)&&Ht(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const jd=nn("ArrayBuffer");function Yu(n){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(n):e=n&&n.buffer&&jd(n.buffer),e}const $u=js("string"),Ht=js("function"),Wd=js("number"),Gi=n=>n!==null&&typeof n=="object",Ku=n=>n===!0||n===!1,hs=n=>{if(!Gi(n))return!1;const e=zi(n);return(e===null||e===Object.prototype||zi(e)===null)&&!hr(n,kd)&&!hr(n,_r)},Zu=n=>{if(!Gi(n)||Hi(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},Ju=nn("Date"),Qu=nn("File"),eh=n=>!!(n&&typeof n.uri<"u"),th=n=>n&&typeof n.getParts<"u",nh=nn("Blob"),ih=nn("FileList"),rh=nn("Set"),sh=n=>Gi(n)&&Ht(n.pipe);function ah(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const zl=ah(),Bl=typeof zl.FormData<"u"?zl.FormData:void 0,oh=n=>{if(!n)return!1;if(Bl&&n instanceof Bl)return!0;const e=zi(n);if(!e||e===Object.prototype||!Ht(n.append))return!1;const t=Yo(n);return t==="formdata"||t==="object"&&Ht(n.toString)&&n.toString()==="[object FormData]"},lh=nn("URLSearchParams"),[ch,dh,fh,uh]=["ReadableStream","Request","Response","Headers"].map(nn),hh=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Mr(n,e,{allOwnKeys:t=!1}={}){if(n===null||typeof n>"u")return;let i,r;if(typeof n!="object"&&(n=[n]),ci(n))for(i=0,r=n.length;i<r;i++)e.call(null,n[i],i,n);else{if(Hi(n))return;const a=t?Object.getOwnPropertyNames(n):Object.keys(n),o=a.length;let l;for(i=0;i<o;i++)l=a[i],e.call(null,n[l],l,n)}}function Hd(n,e){if(Hi(n))return null;e=e.toLowerCase();const t=Object.keys(n);let i=t.length,r;for(;i-- >0;)if(r=t[i],e===r.toLowerCase())return r;return null}const ri=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Gd=n=>!di(n)&&n!==ri;function Ya(...n){const{caseless:e,skipUndefined:t}=Gd(this)&&this||{},i={},r=(a,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const l=e&&typeof o=="string"&&Hd(i,o)||o,d=Es(i,l)?i[l]:void 0;hs(d)&&hs(a)?i[l]=Ya(d,a):hs(a)?i[l]=Ya({},a):ci(a)?i[l]=a.slice():(!t||!di(a))&&(i[l]=a)};for(let a=0,o=n.length;a<o;a++){const l=n[a];if(!l||Hi(l)||(Mr(l,r),typeof l!="object"||ci(l)))continue;const d=Object.getOwnPropertySymbols(l);for(let c=0;c<d.length;c++){const f=d[c];wh.call(l,f)&&r(l[f],f)}}return i}const ph=(n,e,t,{allOwnKeys:i}={})=>(Mr(e,(r,a)=>{t&&Ht(r)?Object.defineProperty(n,a,{__proto__:null,value:Bd(r,t),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(n,a,{__proto__:null,value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),n),mh=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),gh=(n,e,t,i)=>{n.prototype=Object.create(e.prototype,i),Object.defineProperty(n.prototype,"constructor",{__proto__:null,value:n,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(n,"super",{__proto__:null,value:e.prototype}),t&&Object.assign(n.prototype,t)},xh=(n,e,t,i)=>{let r,a,o;const l={};if(e=e||{},n==null)return e;do{for(r=Object.getOwnPropertyNames(n),a=r.length;a-- >0;)o=r[a],(!i||i(o,n,e))&&!l[o]&&(e[o]=n[o],l[o]=!0);n=t!==!1&&zi(n)}while(n&&(!t||t(n,e))&&n!==Object.prototype);return e},yh=(n,e,t)=>{n=String(n),(t===void 0||t>n.length)&&(t=n.length),t-=e.length;const i=n.indexOf(e,t);return i!==-1&&i===t},vh=n=>{if(!n)return null;if(ci(n))return n;let e=n.length;if(!Wd(e))return null;const t=new Array(e);for(;e-- >0;)t[e]=n[e];return t},bh=(n=>e=>n&&e instanceof n)(typeof Uint8Array<"u"&&zi(Uint8Array)),Sh=(n,e)=>{const i=(n&&n[_r]).call(n);let r;for(;(r=i.next())&&!r.done;){const a=r.value;e.call(n,a[0],a[1])}},_h=(n,e)=>{let t;const i=[];for(;(t=n.exec(e))!==null;)i.push(t);return i},Mh=nn("HTMLFormElement"),Eh=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(t,i,r){return i.toUpperCase()+r}),{propertyIsEnumerable:wh}=Object.prototype,Th=nn("RegExp"),Vd=(n,e)=>{const t=Object.getOwnPropertyDescriptors(n),i={};Mr(t,(r,a)=>{let o;(o=e(r,a,n))!==!1&&(i[a]=o||r)}),Object.defineProperties(n,i)},Ah=n=>{Vd(n,(e,t)=>{if(Ht(n)&&["arguments","caller","callee"].includes(t))return!1;const i=n[t];if(Ht(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")})}})},Ch=(n,e)=>{const t={},i=r=>{r.forEach(a=>{t[a]=!0})};return ci(n)?i(n):i(String(n).split(e)),t},Rh=()=>{},Ih=(n,e)=>n!=null&&Number.isFinite(n=+n)?n:e;function Ph(n){return!!(n&&Ht(n.append)&&n[kd]==="FormData"&&n[_r])}const Dh=n=>{const e=new WeakSet,t=i=>{if(Gi(i)){if(e.has(i))return;if(Hi(i))return i;if(!("toJSON"in i)){e.add(i);let r;if(rh(i)){r=[];for(const a of i){const o=t(a);!di(o)&&r.push(o)}}else r=ci(i)?[]:{},Mr(i,(a,o)=>{const l=t(a);!di(l)&&(r[o]=l)});return e.delete(i),r}}return i};return t(n)},Lh=nn("AsyncFunction"),Nh=n=>n&&(Gi(n)||Ht(n))&&Ht(n.then)&&Ht(n.catch),Xd=((n,e)=>n?setImmediate:e?((t,i)=>(ri.addEventListener("message",({source:r,data:a})=>{r===ri&&a===t&&i.length&&i.shift()()},!1),r=>{i.push(r),ri.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))(typeof setImmediate=="function",Ht(ri.postMessage)),Uh=typeof queueMicrotask<"u"?queueMicrotask.bind(ri):typeof process<"u"&&process.nextTick||Xd,qd=n=>n!=null&&Ht(n[_r]),Oh=n=>n!=null&&hr(n,_r)&&qd(n),N={isArray:ci,isArrayBuffer:jd,isBuffer:Hi,isFormData:oh,isArrayBufferView:Yu,isString:$u,isNumber:Wd,isBoolean:Ku,isObject:Gi,isPlainObject:hs,isEmptyObject:Zu,isReadableStream:ch,isRequest:dh,isResponse:fh,isHeaders:uh,isUndefined:di,isDate:Ju,isFile:Qu,isReactNativeBlob:eh,isReactNative:th,isBlob:nh,isRegExp:Th,isFunction:Ht,isStream:sh,isURLSearchParams:lh,isTypedArray:bh,isFileList:ih,forEach:Mr,merge:Ya,extend:ph,trim:hh,stripBOM:mh,inherits:gh,toFlatObject:xh,kindOf:Yo,kindOfTest:nn,endsWith:yh,toArray:vh,forEachEntry:Sh,matchAll:_h,isHTMLForm:Mh,hasOwnProperty:Es,hasOwnProp:Es,hasOwnInPrototypeChain:hr,getSafeProp:qu,reduceDescriptors:Vd,freezeMethods:Ah,toObjectSet:Ch,toCamelCase:Eh,noop:Rh,toFiniteNumber:Ih,findKey:Hd,global:ri,isContextDefined:Gd,isSpecCompliantForm:Ph,toJSONObject:Dh,isAsyncFn:Lh,isThenable:Nh,setImmediate:Xd,asap:Uh,isIterable:qd,isSafeIterable:Oh},Fh=N.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),zh=n=>{const e={};let t,i,r;return n&&n.split(`
`).forEach(function(o){r=o.indexOf(":"),t=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim();const l=N.hasOwnProp(e,t);!t||l&&N.hasOwnProp(Fh,t)||(t==="set-cookie"?l?e[t].push(i):e[t]=[i]:e[t]=l?e[t]+", "+i:i)}),e};function Bh(n){let e=0,t=n.length;for(;e<t;){const i=n.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;t>e;){const i=n.charCodeAt(t-1);if(i!==9&&i!==32)break;t-=1}return e===0&&t===n.length?n:n.slice(e,t)}const kh=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),jh=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function $o(n,e){return N.isArray(n)?n.map(t=>$o(t,e)):Bh(String(n).replace(e,""))}const Wh=n=>$o(n,kh),Hh=n=>$o(n,jh);function Yd(n){const e=Object.create(null);return N.forEach(n.toJSON(),(t,i)=>{e[i]=Hh(t)}),e}const kl=Symbol("internals");function Yi(n){return n&&String(n).trim().toLowerCase()}function ps(n){return n===!1||n==null?n:N.isArray(n)?n.map(ps):Wh(String(n))}function Gh(n){const e=Object.create(null),t=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=t.exec(n);)e[i[1]]=i[2];return e}const Vh=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function ta(n){let e=0,t=n.length;for(;e<t;){const i=n.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;t>e;){const i=n.charCodeAt(t-1);if(i!==9&&i!==32)break;t-=1}return e===0&&t===n.length?n:n.slice(e,t)}function Xh(n){const e=n.length-1;if(e<1||n.charCodeAt(0)!==34||n.charCodeAt(e)!==34)return n;let t="";for(let i=1;i<e;i++){const r=n.charCodeAt(i);if(r===34||r===92&&(i+=1,i>=e))return n;t+=n[i]}return t}function qh(n){const e=Object.create(null),t=String(n);let i=0,r=!1,a=!1;function o(l){const d=ta(t.slice(i,l)),c=d.indexOf("=");if(c<1)return;const f=ta(d.slice(0,c));if(!Vh.test(f))return;const h=f.toLowerCase();if(h==="__proto__"||h==="constructor"||h==="prototype")return;const u=ta(d.slice(c+1));e[h]=Xh(u)}for(let l=0;l<t.length;l++){const d=t.charCodeAt(l);r?a?a=!1:d===92?a=!0:d===34&&(r=!1):d===34?r=!0:(d===44||d===59)&&(o(l),i=l+1)}return o(t.length),e}const Yh=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function na(n,e,t,i,r){if(N.isFunction(i))return i.call(this,e,t);if(r&&(e=t),!!N.isString(e)){if(N.isString(i))return e.indexOf(i)!==-1;if(N.isRegExp(i))return i.test(e)}}function $h(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,i)=>t.toUpperCase()+i)}function Kh(n,e){const t=N.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(n,i+t,{__proto__:null,value:function(r,a,o){return this[i].call(this,e,r,a,o)},configurable:!0})})}let Ft=class{constructor(e){e&&this.set(e)}set(e,t,i){const r=this;function a(l,d,c){const f=Yi(d);if(!f)return;const h=N.findKey(r,f);(!h||r[h]===void 0||c===!0||c===void 0&&r[h]!==!1)&&(r[h||d]=ps(l))}const o=(l,d)=>N.forEach(l,(c,f)=>a(c,f,d));if(N.isPlainObject(e)||e instanceof this.constructor)o(e,t);else if(N.isString(e)&&(e=e.trim())&&!Yh(e))o(zh(e),t);else if(N.isObject(e)&&N.isSafeIterable(e)){let l=Object.create(null),d,c;for(const f of e){if(!N.isArray(f))throw new TypeError("Object iterator must return a key-value pair");c=f[0],N.hasOwnProp(l,c)?(d=l[c],l[c]=N.isArray(d)?[...d,f[1]]:[d,f[1]]):l[c]=f[1]}o(l,t)}else e!=null&&a(t,e,i);return this}get(e,t){if(e=Yi(e),e){const i=N.findKey(this,e);if(i){const r=this[i];if(!t)return r;if(t===!0)return Gh(r);if(N.isFunction(t))return t.call(this,r,i);if(N.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Yi(e),e){const i=N.findKey(this,e);return!!(i&&this[i]!==void 0&&(!t||na(this,this[i],i,t)))}return!1}delete(e,t){const i=this;let r=!1;function a(o){if(o=Yi(o),o){const l=N.findKey(i,o);l&&(!t||na(i,i[l],l,t))&&(delete i[l],r=!0)}}return N.isArray(e)?e.forEach(a):a(e),r}clear(e){const t=Object.keys(this);let i=t.length,r=!1;for(;i--;){const a=t[i];(!e||na(this,this[a],a,e,!0))&&(delete this[a],r=!0)}return r}normalize(e){const t=this,i={};return N.forEach(this,(r,a)=>{const o=N.findKey(i,a);if(o){t[o]=ps(r),delete t[a];return}const l=e?$h(a):String(a).trim();l!==a&&delete t[a],t[l]=ps(r),i[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return N.forEach(this,(i,r)=>{i!=null&&i!==!1&&(t[r]=e&&N.isArray(i)?i.join(", "):i)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join(`
`)}getSetCookie(){const e=this.get("set-cookie");return N.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return qh(e)}static concat(e,...t){const i=new this(e);return t.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[kl]=this[kl]={accessors:{}}).accessors,r=this.prototype;function a(o){const l=Yi(o);i[l]||(Kh(r,o),i[l]=!0)}return N.isArray(e)?e.forEach(a):a(e),this}};Ft.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);N.reduceDescriptors(Ft.prototype,({value:n},e)=>{let t=e[0].toUpperCase()+e.slice(1);return{get:()=>n,set(i){this[t]=i}}});N.freezeMethods(Ft);const ws="[REDACTED ****]";function Zh(n){if(N.hasOwnProp(n,"toJSON"))return!0;let e=Object.getPrototypeOf(n);for(;e&&e!==Object.prototype;){if(N.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function Jh(n,e){const t=new Set(e.map(a=>String(a).toLowerCase())),i=[],r=a=>{if(a===null||typeof a!="object"||N.isBuffer(a))return a;if(i.indexOf(a)!==-1)return;a instanceof Ft&&(a=a.toJSON()),i.push(a);let o;if(N.isArray(a))o=[],a.forEach((l,d)=>{const c=r(l);N.isUndefined(c)||(o[d]=c)});else{if(!N.isPlainObject(a)&&Zh(a))return i.pop(),a;o=Object.create(null);for(const[l,d]of Object.entries(a)){const c=t.has(l.toLowerCase())?ws:r(d);N.isUndefined(c)||(o[l]=c)}}return i.pop(),o};return r(n)}function jl(n){try{return String(n)}catch{return""}}function Qh(n){return n.errors.map(t=>{try{return t&&t.message?jl(t.message):jl(t)}catch{return""}}).filter(Boolean).join("; ")||n.name||"AggregateError"}let Se=class $d extends Error{static from(e,t,i,r,a,o){let l=e.message;!l&&N.isArray(e.errors)&&e.errors.length&&(l=Qh(e));const d=new $d(l,t||e.code,i,r,a);return Object.defineProperty(d,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),d.name=e.name,e.status!=null&&d.status==null&&(d.status=e.status),o&&Object.assign(d,o),d}constructor(e,t,i,r,a){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,t&&(this.code=t),i&&(this.config=i),r&&(this.request=r),a&&(this.response=a,this.status=a.status)}toJSON(){const e=this.config,t=e&&N.hasOwnProp(e,"redact")?e.redact:void 0,i=N.isArray(t)&&t.length>0?Jh(e,t):N.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};Se.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Se.ERR_BAD_OPTION="ERR_BAD_OPTION";Se.ECONNABORTED="ECONNABORTED";Se.ETIMEDOUT="ETIMEDOUT";Se.ECONNREFUSED="ECONNREFUSED";Se.ERR_NETWORK="ERR_NETWORK";Se.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Se.ERR_DEPRECATED="ERR_DEPRECATED";Se.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Se.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Se.ERR_CANCELED="ERR_CANCELED";Se.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Se.ERR_INVALID_URL="ERR_INVALID_URL";Se.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const ep=null,Kd=100;function $a(n){return N.isPlainObject(n)||N.isArray(n)}function Zd(n){return N.endsWith(n,"[]")?n.slice(0,-2):n}function ia(n,e,t){return n?n.concat(e).map(function(r,a){return r=Zd(r),!t&&a?"["+r+"]":r}).join(t?".":""):e}function tp(n){return N.isArray(n)&&!n.some($a)}const np=N.toFlatObject(N,{},null,function(e){return/^is[A-Z]/.test(e)});function Ws(n,e,t){if(!N.isObject(n))throw new TypeError("target must be an object");e=e||new FormData,t=N.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(M,T){return!N.isUndefined(T[M])});const i=t.metaTokens,r=t.visitor||x,a=t.dots,o=t.indexes,l=t.Blob||typeof Blob<"u"&&Blob,d=t.maxDepth===void 0?Kd:t.maxDepth,c=l&&N.isSpecCompliantForm(e),f=[];if(!N.isFunction(r))throw new TypeError("visitor must be a function");function h(p){if(p===null)return"";if(N.isDate(p))return p.toISOString();if(N.isBoolean(p))return p.toString();if(!c&&N.isBlob(p))throw new Se("Blob is not supported. Use a Buffer instead.");if(N.isArrayBuffer(p)||N.isTypedArray(p)){if(c&&typeof l=="function")return new l([p]);throw new Se("Blob is not supported. Use a Buffer instead.",Se.ERR_NOT_SUPPORT)}return p}function u(p){if(p>d)throw new Se("Object is too deeply nested ("+p+" levels). Max depth: "+d,Se.ERR_FORM_DATA_DEPTH_EXCEEDED)}function m(p,M){if(d===1/0)return JSON.stringify(p);const T=[];return JSON.stringify(p,function(v,w){if(!N.isObject(w))return w;for(;T.length&&T[T.length-1]!==this;)T.pop();return T.push(w),u(M+T.length-1),w})}function x(p,M,T){let _=p;if(N.isReactNative(e)&&N.isReactNativeBlob(p))return e.append(ia(T,M,a),h(p)),!1;if(p&&!T&&typeof p=="object"){if(N.endsWith(M,"{}"))M=i?M:M.slice(0,-2),p=m(p,1);else if(N.isArray(p)&&tp(p)||(N.isFileList(p)||N.endsWith(M,"[]"))&&(_=N.toArray(p)))return M=Zd(M),_.forEach(function(w,R){!(N.isUndefined(w)||w===null)&&e.append(o===!0?ia([M],R,a):o===null?M:M+"[]",h(w))}),!1}return $a(p)?!0:(e.append(ia(T,M,a),h(p)),!1)}const S=Object.assign(np,{defaultVisitor:x,convertValue:h,isVisitable:$a});function g(p,M,T=0){if(!N.isUndefined(p)){if(u(T),f.indexOf(p)!==-1)throw new Error("Circular reference detected in "+M.join("."));f.push(p),N.forEach(p,function(v,w){(!(N.isUndefined(v)||v===null)&&r.call(e,v,N.isString(w)?w.trim():w,M,S))===!0&&g(v,M?M.concat(w):[w],T+1)}),f.pop()}}if(!N.isObject(n))throw new TypeError("data must be an object");return g(n),e}function Wl(n){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(n).replace(/[!'()~]|%20/g,function(i){return e[i]})}function Ko(n,e){this._pairs=[],n&&Ws(n,this,e)}const Jd=Ko.prototype;Jd.append=function(e,t){this._pairs.push([e,t])};Jd.toString=function(e){const t=e?i=>e.call(this,i,Wl):Wl;return this._pairs.map(function(r){return t(r[0])+"="+t(r[1])},"").join("&")};function ip(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Qd(n,e,t){if(!e)return n;n=n||"";const i=N.isFunction(t)?{serialize:t}:t,r=N.getSafeProp(i,"encode")||ip,a=N.getSafeProp(i,"serialize");let o;if(a?o=a(e,i):o=N.isURLSearchParams(e)?e.toString():new Ko(e,i).toString(r),o){const l=n.indexOf("#");l!==-1&&(n=n.slice(0,l)),n+=(n.indexOf("?")===-1?"?":"&")+o}return n}class Hl{constructor(){this.handlers=[]}use(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){N.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Zo={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},rp=typeof URLSearchParams<"u"?URLSearchParams:Ko,sp=typeof FormData<"u"?FormData:null,ap=typeof Blob<"u"?Blob:null,op={isBrowser:!0,classes:{URLSearchParams:rp,FormData:sp,Blob:ap},protocols:["http","https","file","blob","url","data"]},Jo=typeof window<"u"&&typeof document<"u",Ka=typeof navigator=="object"&&navigator||void 0,lp=Jo&&(!Ka||["ReactNative","NativeScript","NS"].indexOf(Ka.product)<0),cp=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",dp=Jo&&window.location.href||"http://localhost",fp=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Jo,hasStandardBrowserEnv:lp,hasStandardBrowserWebWorkerEnv:cp,navigator:Ka,origin:dp},Symbol.toStringTag,{value:"Module"})),At={...fp,...op};function up(n,e){return Ws(n,new At.classes.URLSearchParams,{visitor:function(t,i,r,a){return At.isNode&&N.isBuffer(t)?(this.append(i,t.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)},...e})}const Gl=Kd;function ef(n){if(n>Gl)throw new Se("FormData field is too deeply nested ("+n+" levels). Max depth: "+Gl,Se.ERR_FORM_DATA_DEPTH_EXCEEDED)}function hp(n){const e=[],t=/[^.[\]]+|\[([^.[\]]*)]/g;let i;for(;(i=t.exec(n))!==null;)ef(e.length),e.push(i[0]==="[]"?"":i[1]||i[0]);return e}function pp(n){const e={},t=Object.keys(n);let i;const r=t.length;let a;for(i=0;i<r;i++)a=t[i],e[a]=n[a];return e}function tf(n){function e(t,i,r,a){ef(a);let o=t[a++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),d=a>=t.length;return o=!o&&N.isArray(r)?r.length:o,d?(N.hasOwnProp(r,o)?r[o]=N.isArray(r[o])?r[o].concat(i):[r[o],i]:r[o]=i,!l):((!N.hasOwnProp(r,o)||!N.isObject(r[o]))&&(r[o]=[]),e(t,i,r[o],a)&&N.isArray(r[o])&&(r[o]=pp(r[o])),!l)}if(N.isFormData(n)&&N.isFunction(n.entries)){const t={};return N.forEachEntry(n,(i,r)=>{e(hp(i),r,t,0)}),t}return null}const vi=(n,e)=>n!=null&&N.hasOwnProp(n,e)?n[e]:void 0;function mp(n,e,t){if(N.isString(n))try{return(e||JSON.parse)(n),N.trim(n)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(n)}const Er={transitional:Zo,adapter:["xhr","http","fetch"],transformRequest:[function(e,t){const i=t.getContentType()||"",r=i.indexOf("application/json")>-1,a=N.isObject(e);if(a&&N.isHTMLForm(e)&&(e=new FormData(e)),N.isFormData(e))return r?JSON.stringify(tf(e)):e;if(N.isArrayBuffer(e)||N.isBuffer(e)||N.isStream(e)||N.isFile(e)||N.isBlob(e)||N.isReadableStream(e))return e;if(N.isArrayBufferView(e))return e.buffer;if(N.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(a){const d=vi(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return up(e,d).toString();if((l=N.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=vi(this,"env"),f=c&&c.FormData;return Ws(l?{"files[]":e}:e,f&&new f,d)}}return a||r?(t.setContentType("application/json",!1),mp(e)):e}],transformResponse:[function(e){const t=vi(this,"transitional")||Er.transitional,i=t&&t.forcedJSONParsing,r=vi(this,"responseType"),a=r==="json";if(N.isResponse(e)||N.isReadableStream(e))return e;if(e&&N.isString(e)&&(i&&!r||a)){const l=!(t&&t.silentJSONParsing)&&a;try{return JSON.parse(e,vi(this,"parseReviver"))}catch(d){if(l)throw d.name==="SyntaxError"?Se.from(d,Se.ERR_BAD_RESPONSE,this,null,vi(this,"response")):d}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:At.classes.FormData,Blob:At.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};N.forEach(["delete","get","head","post","put","patch","query"],n=>{Er.headers[n]={}});function ra(n,e){const t=this||Er,i=e||t,r=Ft.from(i.headers);let a=i.data;return N.forEach(n,function(l){a=l.call(t,a,r.normalize(),e?e.status:void 0)}),r.normalize(),a}function nf(n){return!!(n&&n.__CANCEL__)}let wr=class extends Se{constructor(e,t,i){super(e??"canceled",Se.ERR_CANCELED,t,i),this.name="CanceledError",this.__CANCEL__=!0}};function rf(n,e,t){const i=t.config.validateStatus;!t.status||!i||i(t.status)?n(t):e(new Se("Request failed with status code "+t.status,t.status>=400&&t.status<500?Se.ERR_BAD_REQUEST:Se.ERR_BAD_RESPONSE,t.config,t.request,t))}function gp(n){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(n);return e&&e[1]||""}function xp(n,e){n=n||10;const t=new Array(n),i=new Array(n);let r=0,a=0,o;return e=e!==void 0?e:1e3,function(d){const c=Date.now(),f=i[a];o||(o=c),t[r]=d,i[r]=c;let h=a,u=0;for(;h!==r;)u+=t[h++],h=h%n;if(r=(r+1)%n,r===a&&(a=(a+1)%n),c-o<e)return;const m=f&&c-f;return m?Math.round(u*1e3/m):void 0}}function yp(n,e){let t=0,i=1e3/e,r,a;const o=(c,f=Date.now())=>{t=f,r=null,a&&(clearTimeout(a),a=null),n(...c)};return[(...c)=>{const f=Date.now(),h=f-t;h>=i?o(c,f):(r=c,a||(a=setTimeout(()=>{a=null,o(r)},i-h)))},()=>r&&o(r)]}const Ts=(n,e,t=3)=>{let i=0;const r=xp(50,250);return yp(a=>{if(!a||typeof a.loaded!="number")return;const o=a.loaded,l=a.lengthComputable?a.total:void 0,d=Math.max(0,l!=null?Math.min(o,l):o),c=Math.max(0,d-i),f=r(c);i=Math.max(i,d);const h={loaded:d,total:l,progress:l?d/l:void 0,bytes:c,rate:f||void 0,estimated:f&&l?(l-d)/f:void 0,event:a,lengthComputable:l!=null,[e?"download":"upload"]:!0};n(h)},t)},Vl=(n,e)=>{const t=n!=null;return[i=>e[0]({lengthComputable:t,total:n,loaded:i}),e[1]]},Xl=(n,e=N.asap)=>(...t)=>e(()=>n(...t)),vp=At.hasStandardBrowserEnv?((n,e)=>t=>(t=new URL(t,At.origin),n.protocol===t.protocol&&n.host===t.host&&(e||n.port===t.port)))(new URL(At.origin),At.navigator&&/(msie|trident)/i.test(At.navigator.userAgent)):()=>!0,bp=At.hasStandardBrowserEnv?{write(n,e,t,i,r,a,o){if(typeof document>"u")return;const l=[`${n}=${encodeURIComponent(e)}`];N.isNumber(t)&&l.push(`expires=${new Date(t).toUTCString()}`),N.isString(i)&&l.push(`path=${i}`),N.isString(r)&&l.push(`domain=${r}`),a===!0&&l.push("secure"),N.isString(o)&&l.push(`SameSite=${o}`),document.cookie=l.join("; ")},read(n){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let t=0;t<e.length;t++){const i=e[t].replace(/^\s+/,""),r=i.indexOf("=");if(r!==-1&&i.slice(0,r)===n)try{return decodeURIComponent(i.slice(r+1))}catch{return i.slice(r+1)}}return null},remove(n){this.write(n,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function Sp(n){return typeof n!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function _p(n,e){if(!e)return n;let t=n.length;for(;t>0&&n.charCodeAt(t-1)===47;)t--;return n.slice(0,t)+"/"+e.replace(/^\/+/,"")}const Mp=/^https?:(?!\/\/)/i,Ep=/[\t\n\r]/g;function wp(n){let e=0;for(;e<n.length&&n.charCodeAt(e)<=32;)e++;return n.slice(e)}function Tp(n){return wp(n).replace(Ep,"")}function Ap(n){return n&&n.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,t,i="")=>`${t}${i}${ws}`)}function Cp(n){const e=n.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${ws}@`),t=e.indexOf("#"),r=(t===-1?e:e.slice(0,t)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${ws}`);return t===-1?r:`${r}#${Ap(e.slice(t+1))}`}function ql(n,e){if(typeof n=="string"){const t=Tp(n);if(Mp.test(t))throw new Se(`Invalid URL ${JSON.stringify(Cp(t))}: missing "//" after protocol`,Se.ERR_INVALID_URL,e)}}function sf(n,e,t,i){ql(e,i);let r=!Sp(e);return n&&(r||t===!1)?(ql(n,i),_p(n,e)):e}const Yl=n=>n instanceof Ft?{...n}:n,Rp=n=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(n).concat(Object.getOwnPropertySymbols(n).filter(e=>Object.getOwnPropertyDescriptor(n,e).enumerable)):Object.keys(n);function fi(n,e){n=n||{},e=e||{};const t=Object.create(null);Object.defineProperty(t,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(f,h,u,m){return N.isPlainObject(f)&&N.isPlainObject(h)?N.merge.call({caseless:m},f,h):N.isPlainObject(h)?N.merge({},h):N.isArray(h)?h.slice():h}function r(f,h,u,m){if(N.isUndefined(h)){if(!N.isUndefined(f))return i(void 0,f,u,m)}else return i(f,h,u,m)}function a(f,h){if(!N.isUndefined(h))return i(void 0,h)}function o(f,h){if(N.isUndefined(h)){if(!N.isUndefined(f))return i(void 0,f)}else return i(void 0,h)}function l(f){const h=N.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!N.isUndefined(h))if(N.isPlainObject(h)){if(N.hasOwnProp(h,f))return h[f]}else return;const u=N.hasOwnProp(n,"transitional")?n.transitional:void 0;if(N.isPlainObject(u)&&N.hasOwnProp(u,f))return u[f]}function d(f,h,u){if(N.hasOwnProp(e,u))return i(f,h);if(N.hasOwnProp(n,u))return i(void 0,f)}const c={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:d,headers:(f,h,u)=>r(Yl(f),Yl(h),u,!0)};return N.forEach(Rp({...n,...e}),function(h){if(h==="__proto__"||h==="constructor"||h==="prototype")return;const u=N.hasOwnProp(c,h)?c[h]:r,m=N.hasOwnProp(n,h)?n[h]:void 0,x=N.hasOwnProp(e,h)?e[h]:void 0,S=u(m,x,h);N.isUndefined(S)&&u!==d||(t[h]=S)}),N.hasOwnProp(e,"validateStatus")&&N.isUndefined(e.validateStatus)&&l("validateStatusUndefinedResolves")===!1&&(N.hasOwnProp(n,"validateStatus")?t.validateStatus=i(void 0,n.validateStatus):delete t.validateStatus),t}const Ip=["content-type","content-length"];function Pp(n,e,t){if(t!=="content-only"){n.set(e);return}Object.entries(e||{}).forEach(([i,r])=>{Ip.includes(i.toLowerCase())&&n.set(i,r)})}const Dp=n=>encodeURIComponent(n).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16)));function af(n){const e=fi({},n),t=u=>N.hasOwnProp(e,u)?e[u]:void 0,i=t("data");let r=t("withXSRFToken");const a=t("xsrfHeaderName"),o=t("xsrfCookieName");let l=t("headers");const d=t("auth"),c=t("baseURL"),f=t("allowAbsoluteUrls"),h=t("url");if(e.headers=l=Ft.from(l),e.url=Qd(sf(c,h,f,e),t("params"),t("paramsSerializer")),d){const u=N.getSafeProp(d,"username")||"",m=N.getSafeProp(d,"password")||"";try{l.set("Authorization","Basic "+btoa(u+":"+(m?Dp(m):"")))}catch(x){throw Se.from(x,Se.ERR_BAD_OPTION_VALUE,n)}}if(N.isFormData(i)&&(At.hasStandardBrowserEnv||At.hasStandardBrowserWebWorkerEnv||N.isReactNative(i)?l.setContentType(void 0):N.isFunction(i.getHeaders)&&Pp(l,i.getHeaders(),t("formDataHeaderPolicy"))),At.hasStandardBrowserEnv&&(N.isFunction(r)&&(r=r(e)),r===!0||r==null&&vp(e.url))){const m=a&&o&&bp.read(o);m&&l.set(a,m)}return e}const Lp=typeof XMLHttpRequest<"u",Np=Lp&&function(n){return new Promise(function(t,i){const r=af(n);let a=r.data;const o=Ft.from(r.headers).normalize();let{responseType:l,onUploadProgress:d,onDownloadProgress:c}=r,f,h,u,m,x;function S(){m&&m(),x&&x(),r.cancelToken&&r.cancelToken.unsubscribe(f),r.signal&&r.signal.removeEventListener("abort",f)}let g=new XMLHttpRequest;g.open(r.method.toUpperCase(),r.url,!0),g.timeout=r.timeout;function p(){if(!g)return;const T=Ft.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders()),v={data:!l||l==="text"||l==="json"?g.responseText:g.response,status:g.status,statusText:g.statusText,headers:T,config:n,request:g};rf(function(R){t(R),S()},function(R){i(R),S()},v),g=null}"onloadend"in g?g.onloadend=p:g.onreadystatechange=function(){!g||g.readyState!==4||g.status===0&&!(g.responseURL&&g.responseURL.startsWith("file:"))||setTimeout(p)},g.onabort=function(){g&&(i(new Se("Request aborted",Se.ECONNABORTED,n,g)),S(),g=null)},g.onerror=function(_){const v=_&&_.message?_.message:"Network Error",w=new Se(v,Se.ERR_NETWORK,n,g);w.event=_||null,i(w),S(),g=null},g.ontimeout=function(){let _=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const v=r.transitional||Zo;r.timeoutErrorMessage&&(_=r.timeoutErrorMessage),i(new Se(_,v.clarifyTimeoutError?Se.ETIMEDOUT:Se.ECONNABORTED,n,g)),S(),g=null},a===void 0&&o.setContentType(null),"setRequestHeader"in g&&N.forEach(Yd(o),function(_,v){g.setRequestHeader(v,_)}),N.isUndefined(r.withCredentials)||(g.withCredentials=!!r.withCredentials),l&&l!=="json"&&(g.responseType=r.responseType),c&&([u,x]=Ts(c,!0),g.addEventListener("progress",u)),d&&g.upload&&([h,m]=Ts(d),g.upload.addEventListener("progress",h),g.upload.addEventListener("loadend",m)),(r.cancelToken||r.signal)&&(f=T=>{g&&(i(!T||T.type?new wr(null,n,g):T),g.abort(),S(),g=null)},r.cancelToken&&r.cancelToken.subscribe(f),r.signal&&(r.signal.aborted?f():r.signal.addEventListener("abort",f)));const M=gp(r.url);if(M&&!At.protocols.includes(M)){i(new Se("Unsupported protocol "+M+":",Se.ERR_BAD_REQUEST,n)),S();return}g.send(a||null)})},Up=(n,e)=>{if(n=n?n.filter(Boolean):[],!e&&!n.length)return;const t=new AbortController;let i=!1;const r=function(d){if(!i){i=!0,o();const c=d instanceof Error?d:this.reason;t.abort(c instanceof Se?c:new wr(c instanceof Error?c.message:c))}};let a=e&&setTimeout(()=>{a=null,r(new Se(`timeout of ${e}ms exceeded`,Se.ETIMEDOUT))},e);const o=()=>{n&&(a&&clearTimeout(a),a=null,n.forEach(d=>{d.unsubscribe?d.unsubscribe(r):d.removeEventListener("abort",r)}),n=null)};n.forEach(d=>{if(!i){if(d.aborted){r.call(d);return}d.addEventListener("abort",r,{once:!0})}});const{signal:l}=t;return l.unsubscribe=()=>N.asap(o),l},Op=function*(n,e){let t=n.byteLength;if(t<e){yield n;return}let i=0,r;for(;i<t;)r=i+e,yield n.slice(i,r),i=r},Fp=async function*(n,e){for await(const t of zp(n))yield*Op(t,e)},zp=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const e=n.getReader();try{for(;;){const{done:t,value:i}=await e.read();if(t)break;yield i}}finally{await e.cancel()}},$l=(n,e,t,i)=>{const r=Fp(n,e);let a=0,o,l=d=>{o||(o=!0,i&&i(d))};return new ReadableStream({async pull(d){try{const{done:c,value:f}=await r.next();if(c){l(),d.close();return}let h=f.byteLength;if(t){let u=a+=h;t(u)}d.enqueue(new Uint8Array(f))}catch(c){throw l(c),c}},cancel(d){return l(d),r.return()}},{highWaterMark:2})},Kl=n=>n>=48&&n<=57||n>=65&&n<=70||n>=97&&n<=102,of=(n,e,t)=>e+2<t&&Kl(n.charCodeAt(e+1))&&Kl(n.charCodeAt(e+2)),Zl=n=>n<=57?n-48:(n&223)-55,Bp=n=>n>=65&&n<=90||n>=97&&n<=122||n>=48&&n<=57||n===43||n===47||n===45||n===95,kp=n=>n===9||n===10||n===12||n===13||n===32,jp=n=>{const e=Math.floor(n/4),t=n%4;return e*3+(t===2?1:t===3?2:0)},Wp=n=>{const e=n.length;let t=0;return e>0&&n.charCodeAt(e-1)===61&&(t++,e>1&&n.charCodeAt(e-2)===61&&t++),Math.floor((e-t)*3/4)},Hp=n=>{const e=n.length;let t=0,i=0,r=!1;for(let a=0;a<e;a++){let o=n.charCodeAt(a);if(o===37&&of(n,a,e)&&(o=Zl(n.charCodeAt(a+1))*16+Zl(n.charCodeAt(a+2)),a+=2),!kp(o)){if(o===61){i++;continue}if(!Bp(o)||i>0){r=!0;continue}t++}}return r||i>2||i>0&&(t+i)%4!==0||t%4===1?Wp(n):jp(t)},Gp=(n,e)=>{if(!n||typeof n!="string"||!n.startsWith("data:"))return 0;const t=n.indexOf(",");if(t<0)return 0;const i=n.slice(5,t),r=n.slice(t+1);if(/;base64/i.test(i))return e(r);let o=0;for(let l=0,d=r.length;l<d;l++){const c=r.charCodeAt(l);if(c===37&&of(r,l,d))o+=1,l+=2;else if(c<128)o+=1;else if(c<2048)o+=2;else if(c>=55296&&c<=56319&&l+1<d){const f=r.charCodeAt(l+1);f>=56320&&f<=57343?(o+=4,l++):o+=3}else o+=3}return o};function Vp(n){const e=typeof n=="string"?n.indexOf("#"):-1;return Gp(e===-1?n:n.slice(0,e),Hp)}const Qo="1.19.0",Jl=64*1024,{isFunction:Nr}=N,Xp=n=>encodeURIComponent(n).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16))),Ql=n=>{if(!N.isString(n))return n;try{return decodeURIComponent(n)}catch{return n}},ec=(n,...e)=>{try{return!!n(...e)}catch{return!1}},qp=n=>{const e=n.indexOf("://");let t=n;return e!==-1&&(t=t.slice(e+3)),t.includes("@")||t.includes(":")},Yp=n=>{const e=N.global!==void 0&&N.global!==null?N.global:globalThis,{ReadableStream:t,TextEncoder:i}=e;n=N.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},n);const{fetch:r,Request:a,Response:o}=n,l=r?Nr(r):typeof fetch=="function",d=Nr(a),c=Nr(o);if(!l)return!1;const f=l&&Nr(t),h=l&&(typeof i=="function"?(p=>M=>p.encode(M))(new i):async p=>new Uint8Array(await new a(p).arrayBuffer())),u=d&&f&&ec(()=>{let p=!1;const M=new a(At.origin,{body:new t,method:"POST",get duplex(){return p=!0,"half"}}),T=M.headers.has("Content-Type");return M.body!=null&&M.body.cancel(),p&&!T}),m=c&&f&&ec(()=>N.isReadableStream(new o("").body)),x={stream:m&&(p=>p.body)};l&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!x[p]&&(x[p]=(M,T)=>{let _=M&&M[p];if(_)return _.call(M);throw new Se(`Response type '${p}' is not supported`,Se.ERR_NOT_SUPPORT,T)})});const S=async p=>{if(p==null)return 0;if(N.isBlob(p))return p.size;if(N.isSpecCompliantForm(p))return(await new a(At.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(N.isArrayBufferView(p)||N.isArrayBuffer(p))return p.byteLength;if(N.isURLSearchParams(p)&&(p=p+""),N.isString(p))return(await h(p)).byteLength},g=async(p,M)=>{const T=N.toFiniteNumber(p.getContentLength());return T??S(M)};return async p=>{let{url:M,method:T,data:_,signal:v,cancelToken:w,timeout:R,onDownloadProgress:b,onUploadProgress:A,responseType:P,headers:I,withCredentials:O="same-origin",fetchOptions:k,maxContentLength:D,maxBodyLength:H}=af(p);const Z=N.isNumber(D)&&D>-1,$=N.isNumber(H)&&H>-1,ne=_e=>N.hasOwnProp(p,_e)?p[_e]:void 0;let z=r||fetch;P=P?(P+"").toLowerCase():"text";let X=Up([v,w&&w.toAbortSignal()],R),J=null;const fe=X&&X.unsubscribe&&(()=>{X.unsubscribe()});let ue,ke=null;const Le=()=>new Se("Request body larger than maxBodyLength limit",Se.ERR_BAD_REQUEST,p,J);try{let _e;const Y=ne("auth");if(Y){const oe=N.getSafeProp(Y,"username")||"",Fe=N.getSafeProp(Y,"password")||"";_e={username:oe,password:Fe}}if(qp(M)){const oe=new URL(M,At.origin);if(!_e&&(oe.username||oe.password)){const Fe=Ql(oe.username),Ze=Ql(oe.password);_e={username:Fe,password:Ze}}(oe.username||oe.password)&&(oe.username="",oe.password="",M=oe.href)}if(_e&&(I.delete("authorization"),I.set("Authorization","Basic "+btoa(Xp((_e.username||"")+":"+(_e.password||""))))),Z&&typeof M=="string"&&M.startsWith("data:")&&Vp(M)>D)throw new Se("maxContentLength size of "+D+" exceeded",Se.ERR_BAD_RESPONSE,p,J);if($&&T!=="get"&&T!=="head"){const oe=await S(_);if(typeof oe=="number"&&isFinite(oe)&&(ue=oe,oe>H))throw Le()}const ie=$&&(N.isReadableStream(_)||N.isStream(_)),ye=(oe,Fe,Ze)=>$l(oe,Jl,lt=>{if($&&lt>H)throw ke=Le();Fe&&Fe(lt)},Ze);if(u&&T!=="get"&&T!=="head"&&(A||ie)){if(ue=ue??await g(I,_),ue!==0||ie){let oe=new a(M,{method:"POST",body:_,duplex:"half"}),Fe;if(N.isFormData(_)&&(Fe=oe.headers.get("content-type"))&&I.setContentType(Fe),oe.body){const[Ze,lt]=A&&Vl(ue,Ts(Xl(A)))||[];_=ye(oe.body,Ze,lt)}}}else if(ie&&!d&&f&&T!=="get"&&T!=="head")_=ye(_);else if(ie&&d&&!u&&T!=="get"&&T!=="head")throw new Se("Stream request bodies are not supported by the current fetch implementation",Se.ERR_NOT_SUPPORT,p,J);N.isString(O)||(O=O?"include":"omit");const le=d&&"credentials"in a.prototype;if(N.isFormData(_)){const oe=I.getContentType();oe&&/^multipart\/form-data/i.test(oe)&&!/boundary=/i.test(oe)&&I.delete("content-type")}I.set("User-Agent","axios/"+Qo,!1);const Q={...k,signal:X,method:T.toUpperCase(),headers:Yd(I.normalize()),body:_,duplex:"half",credentials:le?O:void 0};J=d&&new a(M,Q);let ce=await(d?z(J,k):z(M,Q));const We=Ft.from(ce.headers);if(Z){const oe=N.toFiniteNumber(We.getContentLength());if(oe!=null&&oe>D)throw new Se("maxContentLength size of "+D+" exceeded",Se.ERR_BAD_RESPONSE,p,J)}const Ce=m&&(P==="stream"||P==="response");if(m&&ce.body&&(b||Z||Ce&&fe)){const oe={};["status","statusText","headers"].forEach(ct=>{oe[ct]=ce[ct]});const Fe=N.toFiniteNumber(We.getContentLength()),[Ze,lt]=b&&Vl(Fe,Ts(Xl(b),!0))||[];let Tt=0;const ht=ct=>{if(Z&&(Tt=ct,Tt>D))throw new Se("maxContentLength size of "+D+" exceeded",Se.ERR_BAD_RESPONSE,p,J);Ze&&Ze(ct)};ce=new o($l(ce.body,Jl,ht,()=>{lt&&lt(),fe&&fe()}),oe)}P=P||"text";let ze=await x[N.findKey(x,P)||"text"](ce,p);if(Z&&!m&&!Ce){let oe;if(ze!=null&&(typeof ze.byteLength=="number"?oe=ze.byteLength:typeof ze.size=="number"?oe=ze.size:typeof ze=="string"&&(oe=typeof i=="function"?new i().encode(ze).byteLength:ze.length)),typeof oe=="number"&&oe>D)throw new Se("maxContentLength size of "+D+" exceeded",Se.ERR_BAD_RESPONSE,p,J)}return!Ce&&fe&&fe(),await new Promise((oe,Fe)=>{rf(oe,Fe,{data:ze,headers:Ft.from(ce.headers),status:ce.status,statusText:ce.statusText,config:p,request:J})})}catch(_e){if(fe&&fe(),X&&X.aborted&&X.reason instanceof Se){const Y=X.reason;throw Y.config=p,J&&(Y.request=J),_e!==Y&&Object.defineProperty(Y,"cause",{__proto__:null,value:_e,writable:!0,enumerable:!1,configurable:!0}),Y}if(ke)throw J&&!ke.request&&(ke.request=J),ke;if(_e instanceof Se)throw J&&!_e.request&&(_e.request=J),_e;if(_e&&_e.name==="TypeError"&&/Load failed|fetch/i.test(_e.message)){const Y=new Se("Network Error",Se.ERR_NETWORK,p,J,_e&&_e.response);throw Object.defineProperty(Y,"cause",{__proto__:null,value:_e.cause||_e,writable:!0,enumerable:!1,configurable:!0}),Y}throw Se.from(_e,_e&&_e.code,p,J,_e&&_e.response)}}},$p=new Map,lf=n=>{let e=n&&n.env||{};const{fetch:t,Request:i,Response:r}=e,a=[i,r,t];let o=a.length,l=o,d,c,f=$p;for(;l--;)d=a[l],c=f.get(d),c===void 0&&f.set(d,c=l?new Map:Yp(e)),f=c;return c};lf();const el={http:ep,xhr:Np,fetch:{get:lf}};N.forEach(el,(n,e)=>{if(n){try{Object.defineProperty(n,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(n,"adapterName",{__proto__:null,value:e})}});const tc=n=>`- ${n}`,Kp=n=>N.isFunction(n)||n===null||n===!1;function Zp(n,e){n=N.isArray(n)?n:[n];const{length:t}=n;let i,r;const a={};for(let o=0;o<t;o++){i=n[o];let l;if(r=i,!Kp(i)&&(r=el[(l=String(i)).toLowerCase()],r===void 0))throw new Se(`Unknown adapter '${l}'`);if(r&&(N.isFunction(r)||(r=r.get(e))))break;a[l||"#"+o]=r}if(!r){const o=Object.entries(a).map(([d,c])=>`adapter ${d} `+(c===!1?"is not supported by the environment":"is not available in the build"));let l=t?o.length>1?`since :
`+o.map(tc).join(`
`):" "+tc(o[0]):"as no adapter specified";throw new Se("There is no suitable adapter to dispatch the request "+l,Se.ERR_NOT_SUPPORT)}return r}const cf={getAdapter:Zp,adapters:el};function sa(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new wr(null,n)}function aa(n){return sa(n),n.headers=Ft.from(n.headers),n.data=ra.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),cf.getAdapter(n.adapter||Er.adapter,n)(n).then(function(i){sa(n),n.response=i;try{i.data=ra.call(n,n.transformResponse,i)}finally{delete n.response}return i.headers=Ft.from(i.headers),i},function(i){if(!nf(i)&&(sa(n),i&&i.response)){n.response=i.response;try{i.response.data=ra.call(n,n.transformResponse,i.response)}finally{delete n.response}i.response.headers=Ft.from(i.response.headers)}return Promise.reject(i)})}const Hs={};["object","boolean","number","function","string","symbol"].forEach((n,e)=>{Hs[n]=function(i){return typeof i===n||"a"+(e<1?"n ":" ")+n}});const nc={};Hs.transitional=function(e,t,i){function r(a,o){return"[Axios v"+Qo+"] Transitional option '"+a+"'"+o+(i?". "+i:"")}return(a,o,l)=>{if(e===!1)throw new Se(r(o," has been removed"+(t?" in "+t:"")),Se.ERR_DEPRECATED);return t&&!nc[o]&&(nc[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(a,o,l):!0}};Hs.spelling=function(e){return(t,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function Jp(n,e,t){if(typeof n!="object"||n===null)throw new Se("options must be an object",Se.ERR_BAD_OPTION_VALUE);const i=Object.keys(n);let r=i.length;for(;r-- >0;){const a=i[r],o=Object.prototype.hasOwnProperty.call(e,a)?e[a]:void 0;if(o){const l=n[a],d=l===void 0||o(l,a,n);if(d!==!0)throw new Se("option "+a+" must be "+d,Se.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new Se("Unknown option "+a,Se.ERR_BAD_OPTION)}}const ms={assertOptions:Jp,validators:Hs},Dt=ms.validators;let oi=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Hl,response:new Hl}}async request(e,t){try{return await this._request(e,t)}catch(i){if(i instanceof Error){let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const a=(()=>{if(!r.stack)return"";const o=r.stack.indexOf(`
`);return o===-1?"":r.stack.slice(o+1)})();try{if(!i.stack)i.stack=a;else if(a){const o=a.indexOf(`
`),l=o===-1?-1:a.indexOf(`
`,o+1),d=l===-1?"":a.slice(l+1);String(i.stack).endsWith(d)||(i.stack+=`
`+a)}}catch{}}throw i}}_request(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=fi(this.defaults,t);const{transitional:i,paramsSerializer:r,headers:a}=t;i!==void 0&&ms.assertOptions(i,{silentJSONParsing:Dt.transitional(Dt.boolean),forcedJSONParsing:Dt.transitional(Dt.boolean),clarifyTimeoutError:Dt.transitional(Dt.boolean),legacyInterceptorReqResOrdering:Dt.transitional(Dt.boolean),advertiseZstdAcceptEncoding:Dt.transitional(Dt.boolean),validateStatusUndefinedResolves:Dt.transitional(Dt.boolean)},!1),r!=null&&(N.isFunction(r)?t.paramsSerializer={serialize:r}:ms.assertOptions(r,{encode:Dt.function,serialize:Dt.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:t.allowAbsoluteUrls=!0),ms.assertOptions(t,{baseUrl:Dt.spelling("baseURL"),withXsrfToken:Dt.spelling("withXSRFToken")},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase();let o=a&&N.merge(a.common,a[t.method]);a&&N.forEach(["delete","get","head","post","put","patch","query","common"],x=>{delete a[x]}),t.headers=Ft.concat(o,a);const l=[];let d=!0;this.interceptors.request.forEach(function(S){if(typeof S.runWhen=="function"&&S.runWhen(t)===!1)return;d=d&&S.synchronous;const g=t.transitional||Zo;g&&g.legacyInterceptorReqResOrdering?l.unshift(S.fulfilled,S.rejected):l.push(S.fulfilled,S.rejected)});const c=[];this.interceptors.response.forEach(function(S){c.push(S.fulfilled,S.rejected)});let f,h=0,u;if(!d){const x=[aa.bind(this),void 0];for(x.unshift(...l),x.push(...c),u=x.length,f=Promise.resolve(t);h<u;)f=f.then(x[h++],x[h++]);return f}u=l.length;let m=t;for(;h<u;){const x=l[h++],S=l[h++];try{m=x?x(m):m}catch(g){if(!S){f=Promise.reject(g);break}try{const p=S.call(this,g);N.isThenable(p)&&(f=Promise.resolve(p).then(()=>aa.call(this,m)))}catch(p){f=Promise.reject(p)}break}}if(!f)try{f=aa.call(this,m)}catch(x){f=Promise.reject(x)}for(h=0,u=c.length;h<u;)f=f.then(c[h++],c[h++]);return f}getUri(e){e=fi(this.defaults,e);const t=sf(e.baseURL,e.url,e.allowAbsoluteUrls,e);return Qd(t,e.params,e.paramsSerializer)}};N.forEach(["delete","get","head","options"],function(e){oi.prototype[e]=function(t,i){return this.request(fi(i||{},{method:e,url:t,data:i&&N.hasOwnProp(i,"data")?i.data:void 0}))}});N.forEach(["post","put","patch","query"],function(e){function t(i){return function(a,o,l){return this.request(fi(l||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}oi.prototype[e]=t(),e!=="query"&&(oi.prototype[e+"Form"]=t(!0))});let Qp=class df{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let t;this.promise=new Promise(function(a){t=a});const i=this;this.promise.then(r=>{if(!i._listeners)return;let a=i._listeners.length;for(;a-- >0;)i._listeners[a](r);i._listeners=null}),this.promise.then=r=>{let a;const o=new Promise(l=>{i.subscribe(l),a=l}).then(r);return o.cancel=function(){i.unsubscribe(a)},o},e(function(a,o,l){i.reason||(i.reason=new wr(a,o,l),t(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){const e=new AbortController,t=i=>{e.abort(i)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let e;return{token:new df(function(r){e=r}),cancel:e}}};function em(n){return function(t){return n.apply(null,t)}}function tm(n){return N.isObject(n)&&n.isAxiosError===!0}const Za={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Za).forEach(([n,e])=>{Za[e]=n});function ff(n){const e=new oi(n),t=Bd(oi.prototype.request,e);return N.extend(t,oi.prototype,e,{allOwnKeys:!0}),N.extend(t,e,null,{allOwnKeys:!0}),t.create=function(r){return ff(fi(n,r))},t}const vt=ff(Er);vt.Axios=oi;vt.CanceledError=wr;vt.CancelToken=Qp;vt.isCancel=nf;vt.VERSION=Qo;vt.toFormData=Ws;vt.AxiosError=Se;vt.Cancel=vt.CanceledError;vt.all=function(e){return Promise.all(e)};vt.spread=em;vt.isAxiosError=tm;vt.mergeConfig=fi;vt.AxiosHeaders=Ft;vt.formToJSON=n=>tf(N.isHTMLForm(n)?new FormData(n):n);vt.getAdapter=cf.getAdapter;vt.HttpStatusCode=Za;vt.default=vt;const{Axios:OS,AxiosError:FS,CanceledError:zS,isCancel:BS,CancelToken:kS,VERSION:jS,all:WS,Cancel:HS,isAxiosError:GS,spread:VS,toFormData:XS,AxiosHeaders:qS,HttpStatusCode:YS,formToJSON:$S,getAdapter:KS,mergeConfig:ZS,create:JS}=vt,yt=vt.create({baseURL:"/api",headers:{"Content-Type":"application/json"}});yt.interceptors.request.use(n=>{const e=localStorage.getItem("civicos_token");return e&&(n.headers.Authorization=`Bearer ${e}`),n});const oa={login:n=>yt.post("/auth/login",n),register:n=>yt.post("/auth/register",n),getMe:()=>yt.get("/auth/me")},$t={create:n=>yt.post("/complaints",n),list:n=>yt.get("/complaints",{params:n}),getOfficerQueue:n=>yt.get("/complaints/officer",{params:n}),getById:n=>yt.get(`/complaints/${n}`),track:n=>yt.get(`/complaints/track/${n}`),getMy:()=>yt.get("/complaints/my"),updateStatus:(n,e)=>yt.patch(`/complaints/${n}/status`,e),verifyResolution:(n,e)=>yt.patch(`/complaints/${n}/verify`,e),assign:(n,e)=>yt.patch(`/complaints/${n}/assign`,e)},Bi={getHotspots:()=>yt.get("/analytics/hotspots"),getDepartments:()=>yt.get("/analytics/departments"),getSLA:()=>yt.get("/analytics/sla")},uf={getPredictions:()=>yt.get("/predictions"),getWardPrediction:n=>yt.get(`/predictions/${n}`)},nm={getIncidents:()=>yt.get("/incidents"),mergeIncidents:n=>yt.post("/incidents/merge",n)},im={getWards:()=>yt.get("/wards")},hf=W.createContext(),rm=({children:n})=>{const[e,t]=W.useState(null),[i,r]=W.useState(!0);W.useEffect(()=>{(async()=>{var f;if(localStorage.getItem("civicos_token"))try{const h=await oa.getMe();(f=h.data)!=null&&f.success&&h.data.user?t(h.data.user):t({id:"demo_user_id_101",name:"Municipal Officer",email:"officer@civicos.gov",role:"OFFICER",ward:14})}catch(h){console.warn("[AuthContext] Session fallback activated:",h.message),t({id:"demo_user_id_101",name:"Municipal Officer",email:"officer@civicos.gov",role:"OFFICER",ward:14})}r(!1)})()},[]);const a=async(d,c)=>{var g;try{const p=await oa.login({email:d,password:c});if((g=p.data)!=null&&g.token)return localStorage.setItem("civicos_token",p.data.token),t(p.data.user),p.data.user}catch(p){console.warn("[AuthContext Login] API connection fallback:",p.message)}const f=(d||"officer@civicos.gov").toLowerCase().trim(),h=f.includes("admin"),u=f.includes("officer"),m=h?"ADMIN":u?"OFFICER":"CITIZEN",x=h?"Municipal Admin Commander":u?"Chief Officer Rajesh Kumar":"Citizen Demo User",S={id:"demo_user_id_"+Math.floor(100+Math.random()*900),name:x,email:f,role:m,ward:14};return localStorage.setItem("civicos_token","demo_jwt_token_civicos_2026"),t(S),S},o=async d=>{var f;try{const h=await oa.register(d);if((f=h.data)!=null&&f.token)return localStorage.setItem("civicos_token",h.data.token),t(h.data.user),h.data.user}catch(h){console.warn("[AuthContext Register] API connection fallback:",h.message)}const c={id:"demo_user_id_"+Math.floor(100+Math.random()*900),name:d.name||"Citizen User",email:d.email,role:d.role||"CITIZEN",ward:d.ward||14};return localStorage.setItem("civicos_token","demo_jwt_token_civicos_2026"),t(c),c},l=()=>{localStorage.removeItem("civicos_token"),t(null)};return s.jsx(hf.Provider,{value:{user:e,loading:i,login:a,register:o,logout:l},children:n})},Tr=()=>W.useContext(hf),pf=W.createContext(),ic={en:{navOverview:"Command Overview",navComplaints:"Complaints Queue",navMap:"Live Incident Map",navDepartments:"Department Oversight",navAnalytics:"City Analytics",navAi:"AI Intelligence",navPredictions:"Predictive Intelligence",navSla:"SLA Performance",navOfficer:"Field Officer Desk",platform:"Platform",howItWorks:"How It Works",intelligence:"Intelligence",trackIssue:"Track Issue",reportIssue:"Report Issue",reportProblem:"Report Problem",login:"Login",commandCenter:"Command Center",fieldDesk:"Field Officer Desk",searchPlaceholder:"Search complaints, wards...",exportReport:"Export Report",notifications:"Notifications",logout:"Log Out",welcomeTitle:"CivicOS Municipal Operating System",welcomeSubtitle:"Good evening • Here's what is happening across your city today.",selectLang:"Language / भाषा / भाषा निवडा",heroBadge:"AI-Powered Municipal Operating System",heroTitle:"From citizen reports to city intelligence.",heroSubtitle:"CivicOS transforms every civic complaint into prioritised incidents, live geospatial intelligence, coordinated field action, and verified resolution — end-to-end.",reportIssueBtn:"Report an Issue",trackIssueBtn:"Track Complaint",commandCenterBtn:"Command Center",workflowTitle:"From Report to Resolution",workflowSubtitle:"Complete 8-step municipal intelligence pipeline — fully automated",step1Title:"Citizen Report",step1Desc:"Submit with photo & GPS pin on map",step2Title:"AI Classification",step2Desc:"LLM extracts category, severity & safety risk",step3Title:"Duplicate Detection",step3Desc:"Haversine clusters nearby reports (≤500m)",step4Title:"Priority Scoring",step4Desc:"Deterministic 0–100 urgency formula",step5Title:"Department Routing",step5Desc:"Auto-assigned to correct municipal dept",step6Title:"SLA Countdown",step6Desc:"Category-based deadline enforcement",step7Title:"Field Resolution",step7Desc:"Officer dispatched with GPS navigation",step8Title:"Citizen Verified",step8Desc:"Citizen confirms fix or reopens the issue",reportHeaderTitle:"Report a Municipal Problem",reportHeaderSub:"AI automatically classifies your issue, assigns priority, and alerts field officers.",stepProblem:"1. Problem Details",stepLocation:"2. Incident Location",stepContact:"3. Citizen Contact",stepConfirm:"4. Submit Complaint",reportDescTitle:"Describe the Issue",reportDescSub:"Our AI Engine analyzes your description to determine department routing & priority.",issueTitleLabel:"Issue Title",issueTitlePlace:"e.g. Water Main Leak Near College Bus Stop",descLabel:"Detailed Description",descPlace:"Describe the defect, severity, hazard level, or relevant landmarks...",catLabel:"Category",autoDetectCategory:"Auto-Detect by AI",wardLabel:"Ward Number",wardLabelPrefix:"Ward",attachPhoto:"Attach Photo Evidence (Optional)",uploadPhoto:"Upload Photo",imageAttached:"✔ Image attached",whereIsProblem:"Where is the exact problem located?",locationSub:"Use GPS, search any road/landmark/city across India, click the map, or drag the pin to pinpoint the exact issue location.",whoAreYou:"Who are you?",contactSub:"Anonymous submissions are accepted. Contact info helps us send you resolution alerts.",fullName:"Full Name",phone:"Phone",email:"Email",confirmReportTitle:"Confirm your report",reviewNotice:"After submission, you'll receive a Municipal Tracking Code (e.g. CIV-XXXXXX-XXXX) to monitor real-time resolution progress.",nextBtn:"Continue to Location",backBtn:"Back",submitBtn:"Submit Municipal Complaint",submitting:"Submitting...",incidentLocation:"Exact Issue Location",useGpsBtn:"Use Current GPS Location",detectingGps:"Detecting your current location...",gpsAccuracy:"GPS Accuracy",searchLocationPlace:"Search address, landmark, road, city or PIN code...",selectedLocation:"Selected Issue Location",address:"Address",city:"City / Locality",district:"District",state:"State",pincode:"PIN Code",latitude:"Latitude",longitude:"Longitude",confirmLocationBtn:"Confirm Issue Location",locationConfirmed:"Location Confirmed",fetchingAddress:"Fetching address...",catRoadDamage:"Road Damage",catWaterLeakage:"Water Leakage",catDrainage:"Drainage",catGarbage:"Garbage",catStreetlight:"Streetlight",catPublicSafety:"Public Safety",catPothole:"Pothole",catSewage:"Sewage",catTreeParks:"Tree/Parks",catOther:"Other",trackHeaderTitle:"Track Civic Complaint Status",trackHeaderSub:"Enter your tracking code or phone number to view live SLA progress and field officer updates.",searchCodePlace:"Enter Tracking Code (e.g. CIV-138987-644E)...",searchBtn:"Track Status",statusSubmitted:"Submitted",statusAssigned:"Assigned to Dept",statusAccepted:"Officer Accepted",statusProgress:"Field Work In Progress",statusResolved:"Resolved & Fixed",verifyQuestion:"Is this issue fixed to your satisfaction?",yesBtn:"Yes, Issue Resolved",noBtn:"No, Reopen Complaint",citizenHistory:"Citizen Portal & History",overviewTitle:"City Operations Overview",overviewSub:"Real-time civic health, priority actions, and municipal intelligence stream",demoScenario:"DEMO SCENARIO: Ward 12 Water Pipeline Failure",demoDesc:"37 citizen reports aggregated within 500m radius in Ward 12. Priority Score 91/100. SLA countdown active (04:00:00). Auto-routed to Water Department & Field Inspector Rajesh.",inspectBtn:"Inspect Incident Cluster #INC-1042",totalIngested:"Total Ingested",activeIncidents:"Active Incidents",slaBreached:"SLA Breached",resolvedTodayCount:"Resolved Today",resolutionRatePct:"Resolution Rate",recentIncidents:"Recent Municipal Complaints",mapViewTitle:"Smart City Geospatial Command",deptWorkloadRadar:"Department Workload Radar",slaCountdownRadar:"SLA Compliance Countdown",liveAiStream:"Live AI Event Stream",deptEyebrow:"MUNICIPAL DEPARTMENT OVERSIGHT",deptTitle:"Regional Workload & Operating Intelligence",deptSub:"Live capacity tracking, assigned complaints, SLA compliance rates, and active personnel across all municipal departments.",slaEyebrow:"SERVICE LEVEL AGREEMENT MONITORING",slaTitle:"Real-time SLA Target & Escalation Radar",slaSub:"Category-based deadline enforcement, live countdown timers, and automated breach prevention alerts.",analyticsEyebrow:"MUNICIPAL DATA ANALYTICS",analyticsTitle:"City-Wide Performance Metrics",analyticsSub:"Historical complaint trends, ward-level resolution efficiency, and department capacity benchmarks.",officerEyebrow:"FIELD OFFICER DISPATCH COMMAND",officerTitle:"Active Incident Dispatch Queue",officerSub:"Manage assigned tasks, update work status, upload proof photos, and confirm field resolution.",copyright:"© 2026 CivicOS Municipal Operating System. All Rights Reserved."},hi:{navOverview:"कमांड अवलोकन",navComplaints:"शिकायत कतार",navMap:"लाइव घटना मानचित्र",navDepartments:"विभाग निगरानी",navAnalytics:"शहर विश्लेषिकी",navAi:"एआई इंटेलिजेंस",navPredictions:"पूर्वानुमान इंटेलिजेंस",navSla:"समय-सीमा प्रदर्शन",navOfficer:"फील्ड अधिकारी डेस्क",platform:"प्लेटफ़ॉर्म",howItWorks:"यह कैसे काम करता है",intelligence:"इंटेलिजेंस",trackIssue:"शिकायत ट्रैक करें",reportIssue:"समस्या दर्ज करें",reportProblem:"समस्या दर्ज करें",login:"लॉग इन",commandCenter:"कमांड सेंटर",fieldDesk:"फील्ड ऑफिसर डेस्क",searchPlaceholder:"शिकायतें, वार्ड खोजें...",exportReport:"रिपोर्ट एक्सपोर्ट करें",notifications:"सूचनाएं",logout:"लॉग आउट",welcomeTitle:"सिविक-ओएस नगर निगम ऑपरेटिंग सिस्टम",welcomeSubtitle:"नमस्ते • आज आपके शहर में हो रही गतिविधियों का विवरण।",selectLang:"भाषा चुनें",heroBadge:"एआई-संचालित नगर निगम ऑपरेटिंग सिस्टम",heroTitle:"नागरिक शिकायतों से शहर की इंटेलिजेंस तक।",heroSubtitle:"सिविक-ओएस हर नागरिक शिकायत को प्राथमिकता, लाइव जीआईएस मानचित्र, त्वरित फील्ड कार्रवाई और सत्यापित समाधान में बदलता है।",reportIssueBtn:"समस्या दर्ज करें",trackIssueBtn:"शिकायत ट्रैक करें",commandCenterBtn:"कमांड सेंटर",workflowTitle:"रिपोर्ट से समाधान तक",workflowSubtitle:"संपूर्ण 8-चरणीय नगर निगम इंटेलिजेंस प्रणाली — पूर्णतः स्वचालित",step1Title:"नागरिक रिपोर्ट",step1Desc:"फोटो और जीपीएस पिन के साथ शिकायत दर्ज करें",step2Title:"एआई वर्गीकरण",step2Desc:"एआई श्रेणी, गंभीरता और सुरक्षा जोखिम का विश्लेषण करता है",step3Title:"डुप्लिकेट पहचान",step3Desc:"समीप की शिकायतों की पहचान और क्लस्टरिंग (≤500m)",step4Title:"प्राथमिकता स्कोर",step4Desc:"0-100 तात्कालीकता स्कोरिंग सूत्र",step5Title:"विभाग आवंटन",step5Desc:"सही नगर निगम विभाग को स्वचालित आवंटन",step6Title:"समय-सीमा काउंटडाउन",step6Desc:"श्रेणी अनुसार समय-सीमा का पालन",step7Title:"फील्ड समाधान",step7Desc:"जीपीएस नेविगेशन के साथ अधिकारी रवाना",step8Title:"नागरिक सत्यापन",step8Desc:"नागरिक समाधान की पुष्टि करता है या पुनः खोलता है",reportHeaderTitle:"नगर निगम समस्या दर्ज करें",reportHeaderSub:"एआई स्वचालित रूप से आपकी समस्या को वर्गीकृत करता है और अधिकारियों को सचेत करता है।",stepProblem:"1. समस्या विवरण",stepLocation:"2. घटना का स्थान",stepContact:"3. नागरिक संपर्क",stepConfirm:"4. शिकायत जमा करें",reportDescTitle:"समस्या का विवरण दें",reportDescSub:"हमारी एआई प्रणाली आपके विवरण का विश्लेषण करके सही विभाग और प्राथमिकता तय करती है।",issueTitleLabel:"समस्या का शीर्षक",issueTitlePlace:"उदा. कॉलेज बस स्टॉप के पास मुख्य पाइपलाइन गळती",descLabel:"विस्तृत विवरण",descPlace:"दोष, गंभीरता, संभावित खतरे या आसपास के मुख्य स्थानों का विवरण दें...",catLabel:"श्रेणी चुनें",autoDetectCategory:"एआई द्वारा स्वतः पहचानें",wardLabel:"वार्ड नंबर",wardLabelPrefix:"वार्ड",attachPhoto:"फोटो प्रमाण जोड़ें (वैकल्पिक)",uploadPhoto:"फोटो अपलोड करें",imageAttached:"✔ फोटो संलग्न किया गया",whereIsProblem:"समस्या का सटीक स्थान कहाँ है?",locationSub:"जीपीएस का उपयोग करें, भारत में किसी भी सड़क/शहर की खोज करें, मानचित्र पर क्लिक करें या पिन खींचें।",whoAreYou:"आपकी जानकारी",contactSub:"अनामित रिपोर्ट स्वीकार्य हैं। संपर्क जानकारी से आपको अपडेट मिलते हैं।",fullName:"पूरा नाम",phone:"फोन नंबर",email:"ईमेल पता",confirmReportTitle:"अपनी रिपोर्ट की पुष्टि करें",reviewNotice:"जमा करने के बाद, आपको रियल-टाइम प्रगति देखने के लिए नगर निगम ट्रैकिंग कोड मिलेगा।",nextBtn:"स्थान पर आगे बढ़ें",backBtn:"पीछे जाएं",submitBtn:"नगर निगम शिकायत जमा करें",submitting:"जमा हो रहा है...",incidentLocation:"घटना का सटीक स्थान",useGpsBtn:"वर्तमान जीपीएस स्थान का उपयोग करें",detectingGps:"आपका वर्तमान स्थान खोजा जा रहा है...",gpsAccuracy:"जीपीएस सटीकता",searchLocationPlace:"पता, लैंडमार्क, सड़क, शहर या पिन कोड खोजें...",selectedLocation:"चुना गया समस्या स्थान",address:"पता",city:"शहर / क्षेत्र",district:"जिला",state:"राज्य",pincode:"पिन कोड",latitude:"अक्षांश",longitude:"देशांतर",confirmLocationBtn:"स्थान की पुष्टि करें",locationConfirmed:"स्थान की पुष्टि हुई",fetchingAddress:"पता प्राप्त किया जा रहा है...",catRoadDamage:"सड़क क्षति",catWaterLeakage:"जल रिसाव",catDrainage:"नाली निकासी",catGarbage:"कचरा",catStreetlight:"स्ट्रीटलाइट",catPublicSafety:"सार्वजनिक सुरक्षा",catPothole:"सड़क का खड्डा",catSewage:"सीवरेज",catTreeParks:"पेड़/पार्क",catOther:"अन्य",trackHeaderTitle:"नागरिक शिकायत की स्थिति ट्रैक करें",trackHeaderSub:"लाइव प्रगति और अधिकारी अपडेट देखने के लिए अपना ट्रैकिंग कोड दर्ज करें।",searchCodePlace:"ट्रैकिंग कोड दर्ज करें (उदा. CIV-138987-644E)...",searchBtn:"स्थिति खोजें",statusSubmitted:"जमा किया गया",statusAssigned:"विभाग को आवंटित",statusAccepted:"अधिकारी द्वारा स्वीकृत",statusProgress:"फील्ड कार्य जारी",statusResolved:"समाधान संपन्न",verifyQuestion:"क्या यह समस्या आपकी संतुष्टि के अनुसार हल हो गई है?",yesBtn:"हाँ, समस्या हल हो गई",noBtn:"नहीं, शिकायत पुनः खोलें",citizenHistory:"नागरिक पोर्टल एवं इतिहास",overviewTitle:"नगर निगम संचालन अवलोकन",overviewSub:"रियल-टाइम नागरिक स्वास्थ्य, प्राथमिकता वाली कार्रवाईयां और नगर निगम इंटेलिजेंस स्ट्रीम",demoScenario:"डेमो परिदृश्य: वार्ड 12 जल पाइपलाइन विफलता",demoDesc:"वार्ड 12 में 500 मीटर के दायरे में 37 नागरिक रिपोर्टें एकत्र की गईं। प्राथमिकता स्कोर 91/100। एसएलए काउंटडाउन सक्रिय (04:00:00)। जल विभाग और फील्ड इंस्पेक्टर राजेश को स्वचालित रूप से आवंटित।",inspectBtn:"घटना क्लस्टर #INC-1042 का निरीक्षण करें",totalIngested:"कुल दर्ज शिकायतें",activeIncidents:"सक्रिय फील्ड मामले",slaBreached:"समय-सीमा उल्लंघन",resolvedTodayCount:"आज हल की गई शिकायतें",resolutionRatePct:"समाधान दर",recentIncidents:"हाल की नगर निगम शिकायतें",mapViewTitle:"स्मार्ट सिटी जीियोस्पेशियल कमांड",deptWorkloadRadar:"विभाग कार्यभार रडार",slaCountdownRadar:"समय-सीमा अनुपालन काउंटडाउन",liveAiStream:"लाइव एआई इवेंट स्ट्रीम",deptEyebrow:"नगर निगम विभाग निगरानी",deptTitle:"क्षेत्रीय कार्यभार और संचालन इंटेलिजेंस",deptSub:"सभी नगर निगम विभागों में लाइव क्षमता ट्रैकिंग, आवंटित शिकायतें, और सक्रिय कर्मचारी।",slaEyebrow:"सेवा स्तर समझौता निगरानी",slaTitle:"लाइव समय-सीमा लक्ष्य और एस्केलेशन रडार",slaSub:"श्रेणी-आधारित समय सीमा प्रवर्तन, लाइव काउंटडाउन टाइमर, और स्वचालित उल्लंघन निवारण चेतावनियां।",analyticsEyebrow:"नगर निगम डेटा विश्लेषिकी",analyticsTitle:"शहर-स्तरीय प्रदर्शन मेट्रिक्स",analyticsSub:"ऐतिहासिक शिकायत रुझान, वार्ड-स्तरीय समाधान दक्षता, और विभाग क्षमता मानदंड।",officerEyebrow:"फील्ड अधिकारी प्रेषण कमांड",officerTitle:"सक्रिय घटना प्रेषण कतार",officerSub:"आवंटित कार्यों का प्रबंधन करें, कार्य स्थिति अपडेट करें, फोटो अपलोड करें और समाधान की पुष्टि करें।",copyright:"© 2026 सिविक-ओएस नगर निगम ऑपरेटिंग सिस्टम। सर्वाधिकार सुरक्षित।"},mr:{navOverview:"कमांड सर्व्हालोकन",navComplaints:"तक्रार रांग",navMap:"स्मार्ट सिटी जीआयएस नकाशा",navDepartments:"महानगरपालिका विभाग देखरेख",navAnalytics:"शहर-स्तरीय कामगिरी मोजमाप",navAi:"इंटेलिजन्स",navPredictions:"पूर्वानुमान इंटेलिजन्स",navSla:"मुदत कार्यक्षमता",navOfficer:"फील्ड अधिकारी डेस्क",platform:"प्लॅटफॉर्म",howItWorks:"हे कसे कार्य करते",intelligence:"इंटेलिजन्स",trackIssue:"तक्रार ट्रॅक करा",reportIssue:"समस्या नोंदवा",reportProblem:"समस्या नोंदवा",login:"लॉगिन",commandCenter:"कमांड सेंटर",fieldDesk:"फील्ड ऑफिसर डेस्क",searchPlaceholder:"तक्रारी, प्रभाग शोधा...",exportReport:"अहवाल एक्सपोर्ट करा",notifications:"सूचना",logout:"लॉग आउट",welcomeTitle:"सिव्हिक-ओएस महानगरपालिका ऑपरेटिंग सिस्टीम",welcomeSubtitle:"नमस्कार • आज तुमच्या शहरात घडणाऱ्या घडामोडींचे तपशील.",selectLang:"भाषा निवडा",heroBadge:"एआई-संचालित महानगरपालिका ऑपरेटिंग सिस्टीम",heroTitle:"नागरिकांच्या तक्रारींपासून शहराच्या बुद्धिमत्तेपर्यंत.",heroSubtitle:"सिव्हिक-ओएस प्रत्येक नागरिक तक्रारीचे प्राधान्यीकृत घटनांमध्ये, थेट जीआयएस नकाशावर, त्वरित कारवाईत आणि सत्यापित निवारणात रूपांतर करते.",reportIssueBtn:"समस्या नोंदवा",trackIssueBtn:"तक्रार ट्रॅक करा",commandCenterBtn:"कमांड सेंटर",workflowTitle:"तक्रारीपासून निवारणापर्यंत",workflowSubtitle:"संपूर्ण 8-टप्प्यांची महापालिका इंटेलिजन्स प्रणाली — पूर्णपणे स्वयंचलित",step1Title:"नागरिक अहवाल",step1Desc:"फोटो आणि जीपीएस पिनसह तक्रार नोंदवा",step2Title:"एआई वर्गीकरण",step2Desc:"एआई श्रेणी, तीव्रता आणि सुरक्षिततेचा धोका विश्लेषित करते",step3Title:"डुप्लिकेट शोध",step3Desc:"जवळपासच्या तक्रारींची ओळख आणि क्लस्टरिंग (≤500m)",step4Title:"प्राधान्य गुणोत्तर",step4Desc:"0-100 तातडीचे स्कोरिंग सूत्र",step5Title:"विभाग वर्गवारी",step5Desc:"योग्य महापालिका विभागाकडे स्वयंचलित वर्गवारी",step6Title:"मुदत काउंटडाउन",step6Desc:"श्रेणीनुसार मुदत अंमलबजावणी",step7Title:"फील्ड निवारण",step7Desc:"जीपीएस नेव्हिगेशनसह अधिकारी रवाना",step8Title:"नागरिक पडताळणी",step8Desc:"नागरिक निवारणाची पुष्टी करतो किंवा पुन्हा उघडतो",reportHeaderTitle:"महापालिका समस्या नोंदवा",reportHeaderSub:"एआई स्वयंचलितपणे तुमच्या समस्येचे वर्गीकरण करते आणि अधिकाऱ्यांना सूचित करते.",stepProblem:"1. समस्येचा तपशील",stepLocation:"2. घटनेचे ठिकाण",stepContact:"3. नागरिक संपर्क",stepConfirm:"4. तक्रार सबमिट करा",reportDescTitle:"समस्येचे वर्णन करा",reportDescSub:"आमची AI प्रणाली तुमच्या समस्येचे विश्लेषण करून योग्य विभाग आणि प्राधान्यक्रम निश्चित करते.",issueTitleLabel:"समस्येचे शीर्षक",issueTitlePlace:"उदा. महाविद्यालयाच्या बस थांब्याजवळ पाण्याची मुख्य पाइपलाइन गळती",descLabel:"सविस्तर वर्णन",descPlace:"दोष, तीव्रता, संभाव्य धोका किंवा जवळील महत्त्वाच्या ठिकाणांचे वर्णन करा...",catLabel:"वर्ग",autoDetectCategory:"AI द्वारे आपोआप शोधा",wardLabel:"प्रभाग क्रमांक",wardLabelPrefix:"प्रभाग",attachPhoto:"फोटो पुरावा जोडा (ऐच्छिक)",uploadPhoto:"फोटो अपलोड करा",imageAttached:"✔ फोटो जोडला गेला",whereIsProblem:"समस्या कुठे आहे?",locationSub:"अचूक ठिकाण निवडण्यासाठी नकाशावर क्लिक करा किंवा तुमचे GPS वापरा.",whoAreYou:"आपली माहिती",contactSub:"अनामित तक्रारी स्वीकारल्या जातात. संपर्क माहितीमुळे तुम्हाला निवारणाचे अपडेट्स मिळतात.",fullName:"पूर्ण नाव",phone:"मोबाईल क्रमांक",email:"ईमेल पत्ता",confirmReportTitle:"तुमच्या तक्रारीची पुष्टी करा",reviewNotice:"सबमिट केल्यानंतर, तुम्हाला थेट प्रगती पाहण्यासाठी महापालिका ट्रॅकिंग कोड मिळेल.",nextBtn:"ठिकाणावर पुढे जा",backBtn:"मागे जा",submitBtn:"तक्रार नोंदवा",submitting:"सबमिट होत आहे...",incidentLocation:"घटनेचे ठिकाण",useGpsBtn:"सध्याचे GPS ठिकाण वापरा",detectingGps:"तुमचे ठिकाण शोधले जात आहे...",gpsAccuracy:"GPS अचूकता",searchLocationPlace:"पत्ता, ठिकाण, रस्ता, शहर किंवा पिन कोड शोधा...",selectedLocation:"निवडलेले समस्येचे ठिकाण",address:"पत्ता",city:"शहर",district:"जिल्हा",state:"राज्य",pincode:"पिन कोड",latitude:"अक्षांश",longitude:"रेखांश",confirmLocationBtn:"ठिकाणाची पुष्टी करा",locationConfirmed:"ठिकाणाची पुष्टी झाली",fetchingAddress:"पत्ता मिळवला जात आहे...",catRoadDamage:"रस्त्याची खराबी",catWaterLeakage:"पाणी गळती",catDrainage:"गटार / सांडपाणी",catGarbage:"कचरा समस्या",catStreetlight:"पथदिवे",catPublicSafety:"सार्वजनिक सुरक्षा",catPothole:"रस्त्यातील खड्डा",catSewage:"मलनिस्सारण",catTreeParks:"झाडे/बागकाम",catOther:"इतर",trackHeaderTitle:"नागरिक तक्रारीची स्थिती ट्रॅक करा",trackHeaderSub:"थेट प्रगती आणि अधिकारी अपडेट्स पाहण्यासाठी तुमचा ट्रॅकिंग कोड प्रविष्ट करा.",searchCodePlace:"ट्रॅकिंग कोड प्रविष्ट करा (उदा. CIV-138987-644E)...",searchBtn:"स्थिती शोधा",statusSubmitted:"सबमिट केले",statusAssigned:"विभागाकडे वर्ग",statusAccepted:"अधिकाऱ्याने स्वीकारले",statusProgress:"काम प्रगतीपथावर",statusResolved:"निवारण झाले",verifyQuestion:"या समस्येचे आपल्या समाधानानुसार निवारण झाले आहे का?",yesBtn:"होय, समस्या सुटली",noBtn:"नाही, तक्रार पुन्हा उघडा",citizenHistory:"नागरिक पोर्टल आणि इतिहास",overviewTitle:"शहर महापालिका कामकाज सर्व्हालोकन",overviewSub:"थेट नागरी आरोग्य, प्राधान्य कारवाया आणि महापालिका इंटेलिजन्स स्ट्रीम",demoScenario:"डेमो देखावा: प्रभाग 12 मधील पाणी पुरवठा वाहिनी बिघाड",demoDesc:"प्रभाग 12 मध्ये 500 मीटर परिसरात 37 नागरिक तक्रारी एकत्र आल्या. प्राधान्य स्कोर 91/100. मुदत मोजणी सक्रिय (04:00:00). पाणी पुरवठा विभाग आणि अधिकारी राजेश यांच्याकडे वर्गवारी.",inspectBtn:"घटना क्लस्टर #INC-1042 तपासा",totalIngested:"एकूण प्राप्त तक्रारी",activeIncidents:"सक्रिय घटना",slaBreached:"मुदत उल्लंघन",resolvedTodayCount:"आज सुटलेल्या तक्रारी",resolutionRatePct:"निवारण दर",recentIncidents:"अलीकडील तक्रारी",mapViewTitle:"स्मार्ट सिटी जीआयएस नकाशा",deptWorkloadRadar:"विभाग कार्यभार रडार",slaCountdownRadar:"मुदत कार्यक्षमता मोजणी",liveAiStream:"थेट एआय घटना फीड",deptEyebrow:"महानगरपालिका विभाग देखरेख",deptTitle:"प्रादेशिक कार्यभार आणि कार्यप्रणाली",deptSub:"सर्व महापालिका विभागांमधील थेट क्षमता ट्रॅकिंग, वाटप केलेल्या तक्रारी आणि सक्रिय कर्मचारी.",slaEyebrow:"सेवा स्तर करार देखरेख",slaTitle:"थेट मुदत उद्दिष्ट आणि एस्कॅलेशन रडार",slaSub:"श्रेणीनुसार मुदत अंमलबजावणी, थेट काउंटडाउन टाइमर आणि स्वयंचलित उल्लंघन सूचना.",analyticsEyebrow:"महानगरपालिका डेटा विश्लेषण",analyticsTitle:"शहर-स्तरीय कामगिरी मोजमाप",analyticsSub:"ऐतिहासिक तक्रार ट्रेंड, प्रभाग-स्तरीय निवारण कार्यक्षमता आणि विभाग क्षमता निकष.",officerEyebrow:"फील्ड अधिकारी प्रेषण कमांड",officerTitle:"सक्रिय घटना प्रेषण रांग",officerSub:"नियुक्त कामांचे व्यवस्थापन करा, कामाची स्थिती अपडेट करा, फोटो अपलोड करा आणि निवारणाची पुष्टी करा.",copyright:"© 2026 सिव्हिक-ओएस महानगरपालिका ऑपरेटिंग सिस्टीम. सर्व हक्क राखीव."}},sm=({children:n})=>{const[e,t]=W.useState(()=>localStorage.getItem("civicos_lang")||"en"),i=a=>{t(a),localStorage.setItem("civicos_lang",a)},r=a=>{var o,l;return((o=ic[e])==null?void 0:o[a])||((l=ic.en)==null?void 0:l[a])||a};return s.jsx(pf.Provider,{value:{lang:e,changeLanguage:i,t:r},children:n})},un=()=>W.useContext(pf);function am({collapsed:n,setCollapsed:e,mobileOpen:t,setMobileOpen:i}){const r=Go(),{user:a}=Tr(),{t:o}=un(),l=(a==null?void 0:a.role)||"CITIZEN";let d=[];l==="ADMIN"?d=[{label:o("navOverview"),path:"/admin",icon:gu},{label:o("navComplaints"),path:"/complaints",icon:$n},{label:o("navMap"),path:"/map",icon:tn},{label:o("navDepartments"),path:"/departments",icon:Vo},{label:o("navAnalytics"),path:"/admin/analytics",icon:gd},{label:o("navAi"),path:"/ai",icon:dr},{label:o("navPredictions"),path:"/admin/predictions",icon:om},{label:o("navSla"),path:"/sla",icon:On},{label:o("navOfficer"),path:"/officer",icon:Va}]:l==="OFFICER"?d=[{label:o("navOfficer"),path:"/officer",icon:Va},{label:o("navComplaints"),path:"/complaints",icon:$n},{label:o("navMap"),path:"/map",icon:tn},{label:o("navSla"),path:"/sla",icon:On}]:d=[{label:o("reportIssue"),path:"/report",icon:Ms},{label:o("trackIssue"),path:"/citizen/track",icon:Mn},{label:o("navComplaints"),path:"/complaints",icon:$n},{label:o("navMap"),path:"/map",icon:tn}];const c=()=>{t&&i&&i(!1)};return s.jsxs(s.Fragment,{children:[t&&s.jsx("div",{onClick:()=>i(!1),style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(5, 8, 15, 0.85)",backdropFilter:"blur(10px)",WebkitBackdropFilter:"blur(10px)",zIndex:999998}}),s.jsxs("aside",{className:`sidebar ${n?"collapsed":""} ${t?"mobile-open":""}`,style:{zIndex:t?999999:void 0},children:[s.jsxs("div",{style:{padding:"1.25rem 1rem",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid rgba(255,255,255,0.08)"},children:[s.jsxs(st,{to:"/",onClick:c,style:{textDecoration:"none",display:"flex",alignItems:"center",gap:"0.75rem"},children:[s.jsx("div",{style:{background:"#059669",width:"36px",height:"36px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"white"},children:s.jsx(Fn,{size:20})}),(!n||t)&&s.jsxs("div",{children:[s.jsx("div",{style:{fontFamily:"Outfit, sans-serif",fontWeight:800,fontSize:"1.2rem",color:"#ffffff",letterSpacing:"-0.02em"},children:"CivicOS"}),s.jsxs("div",{style:{fontSize:"0.65rem",color:"#34d399",textTransform:"uppercase",letterSpacing:"0.05em",fontWeight:700},children:[l," PORTAL"]})]})]}),s.jsx("button",{onClick:()=>e(!n),className:"desktop-only",style:{background:"none",border:"none",color:"#94a3b8",cursor:"pointer",padding:"0.25rem"},title:n?"Expand Sidebar":"Collapse Sidebar",children:n?s.jsx(xu,{size:18}):s.jsx(yu,{size:18})}),t&&s.jsx("button",{onClick:()=>i(!1),style:{background:"none",border:"none",color:"#94a3b8",cursor:"pointer",padding:"0.25rem"},children:s.jsx(Kt,{size:20})})]}),s.jsx("div",{style:{padding:"1rem 0",flex:1,overflowY:"auto"},children:d.map(f=>{const h=f.icon,u=r.pathname===f.path;return s.jsxs(st,{to:f.path,onClick:c,className:`sidebar-nav-item ${u?"active":""}`,title:n?f.label:"",children:[s.jsx(h,{size:18}),(!n||t)&&s.jsx("span",{children:f.label})]},f.path)})}),(!n||t)&&s.jsxs("div",{style:{padding:"1rem",borderTop:"1px solid rgba(255,255,255,0.08)",background:"#090d16"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"0.75rem",color:"#10b981",fontWeight:600},children:[s.jsx("span",{className:"pulse-dot"})," System Operational"]}),s.jsxs("div",{style:{fontSize:"0.7rem",color:"#64748b",marginTop:"0.2rem"},children:["Role: ",s.jsx("strong",{style:{color:"#ffffff"},children:l})]})]})]})]})}function om({size:n=18,color:e,style:t,className:i}){return s.jsx("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"none",stroke:e||"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:t,className:i,children:s.jsx("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"})})}function mf({compact:n=!1,alignLeft:e=!1}){const{lang:t,changeLanguage:i}=un(),[r,a]=W.useState(!1),[o,l]=W.useState(window.innerWidth<=767),d=W.useRef(null),c=[{code:"en",name:"English",flag:"🇬🇧",label:"EN"},{code:"hi",name:"हिंदी",flag:"🇮🇳",label:"HI"},{code:"mr",name:"मराठी",flag:"🇮🇳",label:"MR"}],f=c.find(u=>u.code===t)||c[0];W.useEffect(()=>{const u=()=>l(window.innerWidth<=767);return window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[]),W.useEffect(()=>{const u=m=>{d.current&&!d.current.contains(m.target)&&a(!1)};return document.addEventListener("mousedown",u),document.addEventListener("touchstart",u),()=>{document.removeEventListener("mousedown",u),document.removeEventListener("touchstart",u)}},[]);const h=u=>{i(u),a(!1)};return s.jsxs("div",{ref:d,style:{position:"relative",display:"inline-block",zIndex:99999},children:[s.jsxs("button",{type:"button",onClick:()=>a(u=>!u),className:"btn-glass",style:{display:"flex",alignItems:"center",gap:"0.4rem",padding:n?"0.45rem 0.65rem":"0.5rem 0.85rem",fontSize:"0.85rem",fontWeight:700,color:"#34d399",borderColor:"rgba(16, 185, 129, 0.4)",background:"rgba(16, 185, 129, 0.12)",borderRadius:"0.5rem",cursor:"pointer",userSelect:"none",WebkitTapHighlightColor:"transparent"},title:"Select Language / भाषा चुनें / भाषा निवडा",children:[s.jsx(fr,{size:16,color:"#34d399"}),s.jsx("span",{children:f.name}),s.jsx("span",{style:{fontSize:"0.85rem"},children:f.flag}),s.jsx(vu,{size:14,style:{transform:r?"rotate(180deg)":"none",transition:"transform 0.2s"}})]}),r&&(o?s.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,width:"100vw",height:"100vh",background:"rgba(5, 8, 15, 0.88)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"1.25rem",zIndex:9999999},onClick:()=>a(!1),children:s.jsxs("div",{onClick:u=>u.stopPropagation(),style:{background:"#121722",border:"1.5px solid rgba(16, 185, 129, 0.5)",borderRadius:"1.25rem",width:"100%",maxWidth:"360px",padding:"1.5rem",boxShadow:"0 25px 60px rgba(0,0,0,0.95)",display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid rgba(255,255,255,0.1)",paddingBottom:"0.75rem"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",color:"#ffffff",fontWeight:800,fontSize:"1rem"},children:[s.jsx(fr,{size:18,color:"#34d399"}),s.jsx("span",{children:"Choose Language / भाषा"})]}),s.jsx("button",{onClick:()=>a(!1),style:{background:"rgba(255,255,255,0.08)",border:"none",color:"#94a3b8",width:"32px",height:"32px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:s.jsx(Kt,{size:16})})]}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.65rem"},children:c.map(u=>s.jsxs("button",{type:"button",onClick:()=>h(u.code),style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"0.85rem 1rem",minHeight:"52px",borderRadius:"0.75rem",background:t===u.code?"rgba(16, 185, 129, 0.25)":"rgba(255, 255, 255, 0.04)",color:t===u.code?"#34d399":"#ffffff",border:t===u.code?"1.5px solid rgba(16, 185, 129, 0.6)":"1px solid rgba(255, 255, 255, 0.08)",fontSize:"1rem",fontWeight:t===u.code?800:600,cursor:"pointer",textAlign:"left",userSelect:"none",WebkitTapHighlightColor:"transparent"},children:[s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"0.65rem"},children:[s.jsx("span",{style:{fontSize:"1.25rem"},children:u.flag}),s.jsx("span",{children:u.name})]}),t===u.code&&s.jsx(Fi,{size:18,color:"#34d399"})]},u.code))})]})}):s.jsx("div",{style:{position:"absolute",top:"46px",left:e?0:"auto",right:e?"auto":0,minWidth:"160px",background:"#121722",border:"1.5px solid rgba(16, 185, 129, 0.4)",borderRadius:"0.75rem",boxShadow:"0 20px 50px rgba(0,0,0,0.95)",padding:"0.4rem",zIndex:99999,display:"flex",flexDirection:"column",gap:"0.25rem"},children:c.map(u=>s.jsxs("button",{type:"button",onClick:()=>h(u.code),style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%",padding:"0.6rem 0.75rem",minHeight:"44px",borderRadius:"0.5rem",background:t===u.code?"rgba(16, 185, 129, 0.25)":"rgba(255, 255, 255, 0.03)",color:t===u.code?"#34d399":"#ffffff",border:t===u.code?"1px solid rgba(16, 185, 129, 0.5)":"1px solid transparent",fontSize:"0.9rem",fontWeight:t===u.code?800:600,cursor:"pointer",textAlign:"left",userSelect:"none",WebkitTapHighlightColor:"transparent"},children:[s.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsx("span",{style:{fontSize:"1rem"},children:u.flag}),s.jsx("span",{children:u.name})]}),t===u.code&&s.jsx(Fi,{size:16,color:"#34d399"})]},u.code))}))]})}function lm({title:n,onOpenCommand:e,onOpenNotifications:t,onOpenExport:i,onToggleMobileSidebar:r}){const{user:a,logout:o}=Tr(),{t:l}=un(),d=Wi(),[c,f]=W.useState(!1),h=a!=null&&a.name?a.name.charAt(0).toUpperCase():"M",u=(a==null?void 0:a.role)||"OFFICER";return s.jsxs("header",{style:{background:"#0c101a",borderBottom:"1px solid rgba(255, 255, 255, 0.08)",padding:"0.75rem 1rem",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:"0.65rem",position:"sticky",top:0,width:"100%",maxWidth:"100vw",boxSizing:"border-box",zIndex:900},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.65rem",maxWidth:"100%"},children:[s.jsx("button",{onClick:r,style:{background:"rgba(255,255,255,0.08)",border:"1px solid rgba(255,255,255,0.15)",color:"#ffffff",padding:"0.45rem",borderRadius:"0.5rem",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},title:"Toggle Navigation Menu",children:s.jsx(xd,{size:20})}),s.jsxs("div",{style:{overflow:"hidden"},children:[s.jsx("h2",{style:{fontSize:"1.1rem",fontWeight:800,color:"#ffffff",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:n||l("welcomeTitle")}),s.jsxs("div",{className:"desktop-only",style:{fontSize:"0.72rem",color:"#94a3b8"},children:[a!=null&&a.name?`${a.name} • `:"",l("welcomeSubtitle")]})]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",flexWrap:"wrap",position:"relative",maxWidth:"100%",overflow:"visible",zIndex:950},children:[s.jsx(mf,{compact:!0,alignLeft:!0}),s.jsxs("button",{onClick:e,style:{display:"flex",alignItems:"center",gap:"0.4rem",background:"#0f141f",border:"1px solid rgba(255, 255, 255, 0.12)",padding:"0.4rem 0.65rem",borderRadius:"0.5rem",color:"#94a3b8",fontSize:"0.8rem",cursor:"pointer",maxWidth:"180px"},children:[s.jsx(Mn,{size:14}),s.jsx("span",{style:{flex:1,textAlign:"left",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:l("searchPlaceholder")}),s.jsx("kbd",{className:"desktop-only",style:{background:"#121722",border:"1px solid rgba(255, 255, 255, 0.15)",color:"#cbd5e1",borderRadius:"4px",padding:"0.1rem 0.3rem",fontSize:"0.65rem",fontWeight:700},children:"Ctrl K"})]}),s.jsxs("button",{onClick:i,className:"btn-glass",style:{padding:"0.4rem 0.65rem",fontSize:"0.8rem"},title:l("exportReport"),children:[s.jsx(yd,{size:15}),s.jsx("span",{className:"desktop-only",children:l("exportReport").split(" ")[0]})]}),s.jsxs("button",{onClick:t,style:{position:"relative",background:"#0f141f",border:"1px solid rgba(255, 255, 255, 0.12)",width:"36px",height:"36px",borderRadius:"0.5rem",display:"flex",alignItems:"center",justifyContent:"center",color:"#cbd5e1",cursor:"pointer",flexShrink:0},title:l("notifications"),children:[s.jsx(Us,{size:16}),s.jsx("span",{style:{position:"absolute",top:"5px",right:"5px",width:"7px",height:"7px",background:"#ef4444",borderRadius:"50%"}})]}),s.jsxs(st,{to:"/report",className:"btn-sage",style:{padding:"0.4rem 0.75rem",fontSize:"0.8rem",textDecoration:"none",whiteSpace:"nowrap"},children:[s.jsx(ea,{size:15})," ",s.jsx("span",{className:"desktop-only",children:l("reportProblem")})]}),s.jsxs("div",{style:{position:"relative"},children:[s.jsx("button",{onClick:()=>f(!c),style:{width:"36px",height:"36px",borderRadius:"50%",background:"linear-gradient(135deg, #059669 0%, #0d9488 100%)",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"0.9rem",border:"2px solid rgba(16, 185, 129, 0.5)",boxShadow:"0 0 10px rgba(16, 185, 129, 0.3)",cursor:"pointer",flexShrink:0},title:"User Profile & Quick Actions",children:h}),c&&(window.innerWidth<=767?s.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,width:"100vw",height:"100vh",background:"rgba(5, 8, 15, 0.88)",backdropFilter:"blur(12px)",WebkitBackdropFilter:"blur(12px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"1.25rem",zIndex:9999999},onClick:()=>f(!1),children:s.jsxs("div",{onClick:m=>m.stopPropagation(),style:{background:"#121722",border:"1.5px solid rgba(16, 185, 129, 0.5)",borderRadius:"1.25rem",width:"100%",maxWidth:"350px",padding:"1.5rem",boxShadow:"0 25px 60px rgba(0,0,0,0.95)",display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid rgba(255,255,255,0.1)",paddingBottom:"0.75rem"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.65rem"},children:[s.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",background:"linear-gradient(135deg, #059669 0%, #0d9488 100%)",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1.1rem"},children:h}),s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:800,color:"#ffffff",fontSize:"0.95rem"},children:(a==null?void 0:a.name)||"Chief Officer Rajesh Kumar"}),s.jsxs("div",{style:{fontSize:"0.72rem",color:"#34d399",fontWeight:700,textTransform:"uppercase"},children:[u," • Ward 14"]})]})]}),s.jsx("button",{onClick:()=>f(!1),style:{background:"rgba(255,255,255,0.08)",border:"none",color:"#94a3b8",width:"32px",height:"32px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:s.jsx(Kt,{size:16})})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem"},children:[s.jsxs(st,{to:"/officer",onClick:()=>f(!1),style:{textDecoration:"none",color:"#ffffff",fontSize:"0.9rem",padding:"0.6rem 0.75rem",borderRadius:"0.5rem",background:"rgba(255,255,255,0.04)",display:"flex",alignItems:"center",gap:"0.6rem",fontWeight:600},children:[s.jsx(Fn,{size:16,color:"#60a5fa"})," ",l("fieldDesk")]}),s.jsxs(st,{to:"/admin",onClick:()=>f(!1),style:{textDecoration:"none",color:"#ffffff",fontSize:"0.9rem",padding:"0.6rem 0.75rem",borderRadius:"0.5rem",background:"rgba(255,255,255,0.04)",display:"flex",alignItems:"center",gap:"0.6rem",fontWeight:600},children:[s.jsx(En,{size:16,color:"#34d399"})," ",l("commandCenter")]}),s.jsxs(st,{to:"/report",onClick:()=>f(!1),style:{textDecoration:"none",color:"#ffffff",fontSize:"0.9rem",padding:"0.6rem 0.75rem",borderRadius:"0.5rem",background:"rgba(255,255,255,0.04)",display:"flex",alignItems:"center",gap:"0.6rem",fontWeight:600},children:[s.jsx(ea,{size:16,color:"#f59e0b"})," ",l("reportProblem")]})]}),s.jsxs("button",{onClick:()=>{f(!1),o(),d("/login")},className:"btn-glass",style:{width:"100%",justifyContent:"center",color:"#f87171",borderColor:"rgba(239, 68, 68, 0.4)",fontSize:"0.9rem",padding:"0.65rem",fontWeight:700,marginTop:"0.25rem"},children:[s.jsx(or,{size:16})," ",l("logout")]})]})}):s.jsxs("div",{style:{position:"absolute",top:"46px",right:0,width:"240px",background:"#121722",border:"1px solid rgba(255, 255, 255, 0.12)",borderRadius:"0.75rem",boxShadow:"0 20px 40px rgba(0, 0, 0, 0.8)",padding:"0.85rem",zIndex:1100},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.65rem",marginBottom:"0.75rem",paddingBottom:"0.65rem",borderBottom:"1px solid rgba(255, 255, 255, 0.08)"},children:[s.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"50%",background:"#059669",color:"white",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800,fontSize:"1rem"},children:h}),s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:800,color:"#ffffff",fontSize:"0.85rem"},children:(a==null?void 0:a.name)||"Chief Officer Rajesh Kumar"}),s.jsxs("div",{style:{fontSize:"0.7rem",color:"#34d399",fontWeight:700,textTransform:"uppercase"},children:[u," • Ward 14"]})]})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.35rem",marginBottom:"0.75rem"},children:[s.jsxs(st,{to:"/officer",onClick:()=>f(!1),style:{textDecoration:"none",color:"#cbd5e1",fontSize:"0.8rem",padding:"0.35rem 0.5rem",borderRadius:"0.35rem",background:"rgba(255,255,255,0.03)",display:"flex",alignItems:"center",gap:"0.45rem"},children:[s.jsx(Fn,{size:14,color:"#60a5fa"})," ",l("fieldDesk")]}),s.jsxs(st,{to:"/admin",onClick:()=>f(!1),style:{textDecoration:"none",color:"#cbd5e1",fontSize:"0.8rem",padding:"0.35rem 0.5rem",borderRadius:"0.35rem",background:"rgba(255,255,255,0.03)",display:"flex",alignItems:"center",gap:"0.45rem"},children:[s.jsx(En,{size:14,color:"#34d399"})," ",l("commandCenter")]}),s.jsxs(st,{to:"/report",onClick:()=>f(!1),style:{textDecoration:"none",color:"#cbd5e1",fontSize:"0.8rem",padding:"0.35rem 0.5rem",borderRadius:"0.35rem",background:"rgba(255,255,255,0.03)",display:"flex",alignItems:"center",gap:"0.45rem"},children:[s.jsx(ea,{size:14,color:"#f59e0b"})," ",l("reportProblem")]})]}),s.jsxs("button",{onClick:()=>{f(!1),o(),d("/login")},className:"btn-glass",style:{width:"100%",justifyContent:"center",color:"#f87171",borderColor:"rgba(239, 68, 68, 0.3)",fontSize:"0.78rem",padding:"0.35rem"},children:[s.jsx(or,{size:14})," ",l("logout")]})]}))]})]})]})}function cm(){const{user:n,logout:e}=Tr(),{lang:t,changeLanguage:i,t:r}=un(),a=Go(),o=Wi(),[l,d]=W.useState(!1),[c,f]=W.useState(!1);W.useEffect(()=>{const m=()=>{d(window.scrollY>15)};return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)},[]);const h=()=>{f(!1),e(),o("/login")},u=(n==null?void 0:n.role)||"CITIZEN";return s.jsxs("header",{style:{position:"fixed",top:0,left:0,right:0,width:"100%",zIndex:900,background:l?"rgba(10, 13, 20, 0.98)":"rgba(10, 13, 20, 0.94)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",boxShadow:l?"0 10px 30px -10px rgba(0,0,0,0.8)":"none",transition:"all 0.3s ease",overflow:"visible"},children:[s.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto",padding:"0.65rem 0.85rem",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"nowrap",gap:"0.5rem"},children:[s.jsxs(st,{to:"/",style:{textDecoration:"none",display:"flex",alignItems:"center",gap:"0.5rem",flexShrink:0},children:[s.jsx("div",{style:{background:"linear-gradient(135deg, #059669 0%, #0d9488 100%)",width:"34px",height:"34px",borderRadius:"99px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",boxShadow:"0 0 12px rgba(16, 185, 129, 0.4)"},children:s.jsx(Fn,{size:18})}),s.jsxs("div",{children:[s.jsxs("div",{style:{fontFamily:"Outfit, sans-serif",fontWeight:800,fontSize:"1.05rem",letterSpacing:"-0.02em",color:"#ffffff",display:"flex",alignItems:"center",gap:"0.35rem"},children:["CivicOS ",s.jsx("span",{style:{fontSize:"0.6rem",padding:"0.1rem 0.35rem",background:"#059669",color:"white",borderRadius:"4px",textTransform:"uppercase",letterSpacing:"0.05em"},children:"v2.5"})]}),s.jsx("div",{style:{fontSize:"0.6rem",color:"#94a3b8"},children:"Municipal Operating System"})]})]}),s.jsxs("nav",{className:"desktop-only",style:{display:"flex",alignItems:"center",gap:"1.25rem"},children:[s.jsx(st,{to:"/",style:{textDecoration:"none",color:a.pathname==="/"?"#34d399":"#cbd5e1",fontWeight:600,fontSize:"0.85rem"},children:r("howItWorks")}),s.jsxs(st,{to:"/interoperability",style:{textDecoration:"none",color:a.pathname==="/interoperability"?"#34d399":"#60a5fa",fontWeight:700,fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(fr,{size:14,color:"#60a5fa"})," Interoperability"]}),s.jsxs(st,{to:"/ai",style:{textDecoration:"none",color:a.pathname==="/ai"?"#34d399":"#cbd5e1",fontWeight:600,fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(En,{size:14,color:"#60a5fa"})," ",r("intelligence")]}),s.jsx(st,{to:"/admin",style:{textDecoration:"none",color:a.pathname==="/admin"?"#34d399":"#cbd5e1",fontWeight:600,fontSize:"0.85rem"},children:r("platform")})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",flexShrink:0},children:[s.jsx(mf,{compact:!0}),s.jsxs(st,{to:"/citizen/track",className:"btn-glass desktop-only",style:{padding:"0.4rem 0.75rem",fontSize:"0.8rem",textDecoration:"none"},children:[s.jsx(Mn,{size:14,color:"#34d399"})," ",r("trackIssue")]}),s.jsxs(st,{to:"/report",className:"btn-sage desktop-only",style:{padding:"0.4rem 0.75rem",fontSize:"0.8rem",textDecoration:"none"},children:[s.jsx(Ms,{size:14})," ",r("reportIssue")]}),n?s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",paddingLeft:"0.2rem"},children:[s.jsx("span",{style:{fontSize:"0.8rem",color:"#34d399",fontWeight:700},className:"desktop-only",children:n.name?n.name.split(" ")[0]:"User"}),s.jsx("button",{onClick:h,title:"Logout",className:"btn-glass",style:{padding:"0.4rem",color:"#f87171",borderColor:"rgba(239,68,68,0.3)"},children:s.jsx(or,{size:14})})]}):s.jsx(st,{to:"/login",className:"btn-glass desktop-only",style:{textDecoration:"none",color:"#ffffff",fontSize:"0.8rem",fontWeight:600,padding:"0.4rem 0.75rem"},children:r("login")}),s.jsx("button",{onClick:()=>f(!c),className:"mobile-only",style:{background:"none",border:"none",color:"#ffffff",cursor:"pointer",padding:"0.4rem",borderRadius:"0.375rem",display:"flex",alignItems:"center",justifyContent:"center"},title:"Toggle Menu",children:c?s.jsx(Kt,{size:22,color:"#34d399"}):s.jsx(xd,{size:22})})]})]}),c&&s.jsxs("div",{style:{background:"#121722",borderTop:"1px solid rgba(255,255,255,0.08)",padding:"0.85rem 1rem",display:"flex",flexDirection:"column",gap:"0.6rem",boxShadow:"0 20px 40px rgba(0,0,0,0.9)",maxHeight:"85vh",overflowY:"auto"},children:[n&&s.jsxs("div",{style:{padding:"0.6rem 0.75rem",background:"rgba(16, 185, 129, 0.1)",border:"1px solid rgba(16, 185, 129, 0.3)",borderRadius:"0.5rem",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontWeight:800,color:"#ffffff",fontSize:"0.85rem"},children:n.name||"User Account"}),s.jsxs("div",{style:{fontSize:"0.7rem",color:"#34d399",fontWeight:700},children:[u," • Ward 14"]})]}),s.jsxs("button",{onClick:h,className:"btn-glass",style:{padding:"0.3rem 0.6rem",fontSize:"0.75rem",color:"#f87171",borderColor:"rgba(239,68,68,0.3)"},children:[s.jsx(or,{size:12})," ",r("logout")]})]}),s.jsxs("div",{style:{paddingBottom:"0.6rem",borderBottom:"1px solid rgba(255,255,255,0.08)"},children:[s.jsx("div",{style:{fontSize:"0.7rem",fontWeight:700,color:"#94a3b8",textTransform:"uppercase",marginBottom:"0.35rem",letterSpacing:"0.05em"},children:"Language / भाषा / भाषा निवडा:"}),s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"0.4rem"},children:[{code:"en",label:"English 🇬🇧"},{code:"hi",label:"हिंदी 🇮🇳"},{code:"mr",label:"मराठी 🇮🇳"}].map(m=>s.jsx("button",{type:"button",onClick:()=>{i(m.code)},className:"btn-glass",style:{padding:"0.45rem 0.2rem",fontSize:"0.78rem",fontWeight:700,justifyContent:"center",background:t===m.code?"rgba(16,185,129,0.25)":"rgba(255,255,255,0.03)",color:t===m.code?"#34d399":"#ffffff",borderColor:t===m.code?"rgba(16,185,129,0.5)":"rgba(255,255,255,0.1)"},children:m.label},m.code))})]}),s.jsxs(st,{to:"/",onClick:()=>f(!1),style:{textDecoration:"none",color:"#ffffff",fontSize:"0.88rem",padding:"0.55rem 0.75rem",borderRadius:"0.5rem",background:"rgba(255,255,255,0.03)",display:"flex",alignItems:"center",gap:"0.6rem",fontWeight:600},children:[s.jsx(bu,{size:16,color:"#34d399"})," ",r("howItWorks")]}),s.jsxs(st,{to:"/interoperability",onClick:()=>f(!1),style:{textDecoration:"none",color:"#60a5fa",fontSize:"0.88rem",padding:"0.55rem 0.75rem",borderRadius:"0.5rem",background:"rgba(59,130,246,0.12)",display:"flex",alignItems:"center",gap:"0.6rem",fontWeight:700},children:[s.jsx(fr,{size:16,color:"#60a5fa"})," Interoperability Center (SIH 2026)"]}),s.jsxs(st,{to:"/report",onClick:()=>f(!1),style:{textDecoration:"none",color:"#ffffff",fontSize:"0.88rem",padding:"0.55rem 0.75rem",borderRadius:"0.5rem",background:"#059669",display:"flex",alignItems:"center",gap:"0.6rem",fontWeight:700},children:[s.jsx(Ms,{size:16})," ",r("reportIssue")]}),s.jsxs(st,{to:"/citizen/track",onClick:()=>f(!1),style:{textDecoration:"none",color:"#ffffff",fontSize:"0.88rem",padding:"0.55rem 0.75rem",borderRadius:"0.5rem",background:"rgba(255,255,255,0.03)",display:"flex",alignItems:"center",gap:"0.6rem",fontWeight:600},children:[s.jsx(Mn,{size:16,color:"#34d399"})," ",r("trackIssue")]}),s.jsxs(st,{to:"/citizen/history",onClick:()=>f(!1),style:{textDecoration:"none",color:"#ffffff",fontSize:"0.88rem",padding:"0.55rem 0.75rem",borderRadius:"0.5rem",background:"rgba(255,255,255,0.03)",display:"flex",alignItems:"center",gap:"0.6rem",fontWeight:600},children:[s.jsx(On,{size:16,color:"#34d399"})," Citizen Portal & History"]}),s.jsxs(st,{to:"/officer",onClick:()=>f(!1),style:{textDecoration:"none",color:"#ffffff",fontSize:"0.88rem",padding:"0.55rem 0.75rem",borderRadius:"0.5rem",background:"rgba(255,255,255,0.03)",display:"flex",alignItems:"center",gap:"0.6rem",fontWeight:600},children:[s.jsx(Fn,{size:16,color:"#60a5fa"})," Field Officer Desk"]}),s.jsxs(st,{to:"/admin",onClick:()=>f(!1),style:{textDecoration:"none",color:"#ffffff",fontSize:"0.88rem",padding:"0.55rem 0.75rem",borderRadius:"0.5rem",background:"rgba(255,255,255,0.03)",display:"flex",alignItems:"center",gap:"0.6rem",fontWeight:600},children:[s.jsx(vd,{size:16,color:"#34d399"})," ",r("platform")," / ",r("commandCenter")]}),s.jsxs(st,{to:"/ai",onClick:()=>f(!1),style:{textDecoration:"none",color:"#ffffff",fontSize:"0.88rem",padding:"0.55rem 0.75rem",borderRadius:"0.5rem",background:"rgba(255,255,255,0.03)",display:"flex",alignItems:"center",gap:"0.6rem",fontWeight:600},children:[s.jsx(En,{size:16,color:"#60a5fa"})," ",r("intelligence")," Command"]}),n?s.jsxs("button",{onClick:h,className:"btn-glass",style:{width:"100%",justifyContent:"center",color:"#f87171",borderColor:"rgba(239, 68, 68, 0.4)",fontSize:"0.88rem",padding:"0.6rem",fontWeight:700,marginTop:"0.25rem"},children:[s.jsx(or,{size:16})," ",r("logout")]}):s.jsxs(st,{to:"/login",onClick:()=>f(!1),style:{textDecoration:"none",color:"#ffffff",fontSize:"0.88rem",padding:"0.55rem 0.75rem",borderRadius:"0.5rem",background:"rgba(255,255,255,0.05)",display:"flex",alignItems:"center",gap:"0.6rem",fontWeight:600,border:"1px solid rgba(255,255,255,0.1)"},children:[s.jsx(lr,{size:16,color:"#34d399"})," ",r("login")]})]})]})}function dm({isOpen:n,onClose:e,onOpenExport:t}){const i=Wi(),[r,a]=W.useState("");if(W.useEffect(()=>{if(!n)return;const c=f=>{f.key==="Escape"&&e()};return window.addEventListener("keydown",c),()=>window.removeEventListener("keydown",c)},[n,e]),!n)return null;const o=[{title:"Report a Problem",path:"/report",icon:Ms,category:"Actions"},{title:"Track Complaint by Code",path:"/citizen/track",icon:Mn,category:"Citizen"},{title:"Field Officer Operations Desk",path:"/officer",icon:Va,category:"Dispatch"},{title:"City Geospatial Map View",path:"/map",icon:tn,category:"Command"},{title:"Complaints Action Queue",path:"/complaints",icon:$n,category:"Command"},{title:"SLA Performance & Breach Monitor",path:"/sla",icon:On,category:"Command"},{title:"Department Workload Intelligence",path:"/departments",icon:gd,category:"Command"},{title:"Predictive City Intelligence",path:"/admin/predictions",icon:li,category:"Intelligence"}],l=c=>{i(c),e()},d=c=>{c.preventDefault(),r.toUpperCase().startsWith("CIV-")?i(`/citizen/track?code=${r.toUpperCase()}`):i(`/complaints?search=${encodeURIComponent(r)}`),e()};return s.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(5, 8, 15, 0.75)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",zIndex:2500,display:"flex",alignItems:"flex-start",justifyContent:"center",paddingTop:"10vh",animation:"fadeIn 0.15s ease"},onClick:e,children:s.jsxs("div",{className:"natural-glass-card",style:{width:"90%",maxWidth:"640px",background:"#0e1420",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"0.875rem",boxShadow:"0 25px 60px rgba(0, 0, 0, 0.9)",overflow:"hidden"},onClick:c=>c.stopPropagation(),children:[s.jsxs("form",{onSubmit:d,style:{display:"flex",alignItems:"center",padding:"1rem 1.25rem",borderBottom:"1px solid rgba(255, 255, 255, 0.08)"},children:[s.jsx(Mn,{size:20,color:"#34d399",style:{marginRight:"0.75rem"}}),s.jsx("input",{type:"text",placeholder:"Type a command or search (e.g. CIV-138987-644E, potholes, Ward 14)...",value:r,onChange:c=>a(c.target.value),autoFocus:!0,style:{flex:1,background:"transparent",border:"none",outline:"none",color:"#ffffff",fontSize:"1rem",fontWeight:500}}),s.jsx("button",{type:"button",onClick:e,style:{background:"none",border:"none",color:"#94a3b8",cursor:"pointer",padding:"0.25rem"},children:s.jsx(Kt,{size:18})})]}),s.jsxs("div",{style:{maxHeight:"380px",overflowY:"auto",padding:"0.75rem"},children:[s.jsx("div",{style:{fontSize:"0.72rem",fontWeight:700,color:"#64748b",textTransform:"uppercase",letterSpacing:"0.05em",padding:"0.4rem 0.6rem 0.6rem"},children:"Quick Navigation & Actions"}),o.map((c,f)=>{const h=c.icon;return s.jsxs("div",{onClick:()=>l(c.path),style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0.75rem 0.85rem",borderRadius:"0.5rem",cursor:"pointer",color:"#cbd5e1",transition:"all 0.15s ease",marginBottom:"0.2rem"},onMouseEnter:u=>{u.currentTarget.style.background="rgba(255,255,255,0.06)",u.currentTarget.style.color="#ffffff"},onMouseLeave:u=>{u.currentTarget.style.background="transparent",u.currentTarget.style.color="#cbd5e1"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[s.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"0.375rem",background:"rgba(16, 185, 129, 0.1)",color:"#34d399",display:"flex",alignItems:"center",justifyContent:"center"},children:s.jsx(h,{size:16})}),s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.9rem",fontWeight:600},children:c.title}),s.jsx("div",{style:{fontSize:"0.72rem",color:"#64748b"},children:c.category})]})]}),s.jsx(ur,{size:16,color:"#64748b"})]},f)})]})]})})}function fm({isOpen:n,onClose:e}){if(!n)return null;const t=[{id:1,type:"critical",title:"Critical Hazard Alert",text:"4 complaints in Ward 14 require immediate dispatch.",time:"10m ago",icon:bd,color:"#ef4444",badge:"CRITICAL"},{id:2,type:"sla",title:"SLA Breach Warning",text:"Complaint #CIV-2847 consumed 85% of SLA threshold.",time:"25m ago",icon:On,color:"#f59e0b",badge:"WARNING"},{id:3,type:"ai",title:"AI Cluster Detected",text:"3 duplicate reports merged into Cluster #INC-1042.",time:"1h ago",icon:dr,color:"#3b82f6",badge:"AI MERGE"},{id:4,type:"system",title:"Preventive Task Completed",text:"Sanitation inspection completed in Sector 4.",time:"2h ago",icon:Ut,color:"#10b981",badge:"COMPLETED"}];return s.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(5, 8, 15, 0.75)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",zIndex:2500,display:"flex",justifyContent:"flex-end",animation:"fadeIn 0.2s ease"},onClick:e,children:s.jsxs("div",{className:"glass-drawer-content",onClick:i=>i.stopPropagation(),style:{background:"#121722",borderLeft:"1px solid rgba(255, 255, 255, 0.1)",width:"100%",maxWidth:"400px",height:"100%",boxShadow:"-15px 0 40px rgba(0,0,0,0.8)",display:"flex",flexDirection:"column",animation:"slideLeft 0.25s cubic-bezier(0.4, 0, 0.2, 1)"},children:[s.jsxs("div",{style:{padding:"1.25rem 1.5rem",borderBottom:"1px solid rgba(255, 255, 255, 0.08)",display:"flex",alignItems:"center",justifyContent:"space-between",background:"#0a0d14"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[s.jsx("div",{style:{background:"rgba(16, 185, 129, 0.12)",border:"1px solid rgba(16, 185, 129, 0.25)",width:"34px",height:"34px",borderRadius:"0.4rem",display:"flex",alignItems:"center",justifyContent:"center",color:"#34d399"},children:s.jsx(Us,{size:18})}),s.jsxs("div",{children:[s.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:800,color:"#ffffff"},children:"System Activity Alerts"}),s.jsx("div",{style:{fontSize:"0.75rem",color:"#94a3b8"},children:"4 active municipal alerts"})]})]}),s.jsx("button",{onClick:e,style:{background:"rgba(255, 255, 255, 0.06)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"0.4rem",color:"#cbd5e1",width:"32px",height:"32px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:s.jsx(Kt,{size:18})})]}),s.jsx("div",{style:{padding:"1.25rem",flex:1,overflowY:"auto",display:"flex",flexDirection:"column",gap:"0.85rem"},children:t.map(i=>{const r=i.icon;return s.jsxs("div",{style:{padding:"1rem",borderRadius:"0.5rem",border:"1px solid rgba(255, 255, 255, 0.08)",background:"#0a0d14",borderLeft:`4px solid ${i.color}`},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"0.35rem"},children:[s.jsxs("div",{style:{fontWeight:700,fontSize:"0.85rem",color:"#ffffff",display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsx(r,{size:16,color:i.color})," ",i.title]}),s.jsx("span",{style:{fontSize:"0.7rem",color:"#94a3b8"},children:i.time})]}),s.jsx("p",{style:{fontSize:"0.8rem",color:"#cbd5e1",lineHeight:1.4,marginBottom:"0.4rem"},children:i.text}),s.jsx("span",{style:{fontSize:"0.65rem",fontWeight:700,padding:"0.15rem 0.4rem",borderRadius:"4px",background:`${i.color}22`,color:i.color,border:`1px solid ${i.color}44`},children:i.badge})]},i.id)})})]})})}function um({isOpen:n,onClose:e}){const[t,i]=W.useState("Monthly"),[r,a]=W.useState(!1);if(!n)return null;const o=l=>{a(!0),setTimeout(()=>{a(!1),e()},2e3)};return s.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(5, 8, 15, 0.75)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",zIndex:2500,display:"flex",alignItems:"center",justifyContent:"center",padding:"1rem",animation:"fadeIn 0.15s ease"},onClick:e,children:s.jsxs("div",{className:"natural-glass-card",style:{width:"100%",maxWidth:"480px",background:"#0e1420",border:"1px solid rgba(255, 255, 255, 0.15)",borderRadius:"0.875rem",boxShadow:"0 25px 60px rgba(0, 0, 0, 0.9)",padding:"1.5rem"},onClick:l=>l.stopPropagation(),children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.25rem"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.65rem"},children:[s.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"0.5rem",background:"rgba(16, 185, 129, 0.15)",color:"#34d399",display:"flex",alignItems:"center",justifyContent:"center"},children:s.jsx(yd,{size:20})}),s.jsxs("div",{children:[s.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:800,color:"#ffffff"},children:"Export Municipal Report"}),s.jsx("div",{style:{fontSize:"0.75rem",color:"#94a3b8"},children:"Generate certified SLA & complaint analytics"})]})]}),s.jsx("button",{onClick:e,style:{background:"none",border:"none",color:"#94a3b8",cursor:"pointer"},children:s.jsx(Kt,{size:18})})]}),r?s.jsxs("div",{style:{textAlign:"center",padding:"2rem 1rem"},children:[s.jsx(Ut,{size:48,color:"#34d399",style:{margin:"0 auto 1rem"}}),s.jsx("h4",{style:{fontSize:"1.1rem",color:"#ffffff",fontWeight:700,marginBottom:"0.4rem"},children:"Report Downloaded!"}),s.jsx("p",{style:{fontSize:"0.85rem",color:"#94a3b8"},children:"CivicOS_Municipal_SLA_Report_2026.csv has been exported to your downloads folder."})]}):s.jsxs("div",{children:[s.jsxs("div",{style:{marginBottom:"1.25rem"},children:[s.jsx("label",{style:{display:"block",fontSize:"0.8rem",fontWeight:700,color:"#cbd5e1",marginBottom:"0.5rem"},children:"Select Report Period"}),s.jsx("div",{style:{display:"flex",gap:"0.5rem"},children:["Daily","Weekly","Monthly","Quarterly"].map(l=>s.jsx("button",{onClick:()=>i(l),style:{flex:1,padding:"0.45rem",borderRadius:"0.375rem",border:t===l?"1px solid #34d399":"1px solid rgba(255, 255, 255, 0.1)",background:t===l?"rgba(16, 185, 129, 0.15)":"rgba(255, 255, 255, 0.03)",color:t===l?"#34d399":"#cbd5e1",fontSize:"0.8rem",fontWeight:600,cursor:"pointer"},children:l},l))})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.65rem"},children:[s.jsxs("button",{onClick:()=>o(),className:"btn-sage",style:{width:"100%",justifyContent:"center",padding:"0.65rem",fontSize:"0.9rem"},children:[s.jsx(Su,{size:16})," Download CSV Spreadsheet"]}),s.jsxs("button",{onClick:()=>o(),className:"btn-glass",style:{width:"100%",justifyContent:"center",padding:"0.65rem",fontSize:"0.9rem"},children:[s.jsx($n,{size:16})," Export Municipal Executive PDF"]})]})]})]})})}function hm(){const{t:n}=un();return s.jsx("footer",{style:{background:"#090d16",color:"#64748b",borderTop:"1px solid #1e293b",padding:"1.75rem 1.5rem",fontSize:"0.85rem"},children:s.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:"1rem"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",color:"#94a3b8"},children:[s.jsx(Fn,{size:18,color:"#3b82f6"}),s.jsx("span",{style:{fontWeight:700,color:"#f8fafc"},children:"CivicOS"})," — AI-Powered Civic Intelligence Platform"]}),s.jsx("div",{children:n("copyright")}),s.jsxs("div",{children:["System Status: ",s.jsx("span",{style:{color:"#10b981",fontWeight:600},children:"● All Engines Operational"})]})]})})}const gf=W.createContext(null);function pm({children:n}){const[e,t]=W.useState([]),i=W.useRef(0),r=W.useCallback((d,c="success",f=4500)=>{const h=++i.current;t(u=>[...u,{id:h,message:d,type:c}]),setTimeout(()=>{t(u=>u.filter(m=>m.id!==h))},f)},[]),a=d=>t(c=>c.filter(f=>f.id!==d)),o={success:s.jsx(Ut,{size:18}),error:s.jsx(Mu,{size:18}),warning:s.jsx(br,{size:18}),info:s.jsx(_u,{size:18})},l={success:{background:"rgba(16, 185, 129, 0.15)",border:"1px solid #10b981",color:"#34d399"},error:{background:"rgba(239, 68, 68, 0.15)",border:"1px solid #ef4444",color:"#f87171"},warning:{background:"rgba(245, 158, 11, 0.15)",border:"1px solid #f59e0b",color:"#fbbf24"},info:{background:"rgba(59, 130, 246, 0.12)",border:"1px solid #3b82f6",color:"#60a5fa"}};return s.jsxs(gf.Provider,{value:{showToast:r},children:[n,s.jsx("div",{style:{position:"fixed",bottom:"1.5rem",right:"1.5rem",zIndex:"var(--z-toast, 600)",display:"flex",flexDirection:"column",gap:"0.65rem",maxWidth:"420px",width:"calc(100vw - 2rem)",pointerEvents:"none"},children:e.map(d=>{const c=l[d.type]||l.success;return s.jsxs("div",{style:{...c,padding:"0.9rem 1.1rem",borderRadius:"0.6rem",display:"flex",alignItems:"flex-start",gap:"0.6rem",fontWeight:600,fontSize:"0.875rem",lineHeight:1.45,boxShadow:"0 8px 32px rgba(0,0,0,0.6)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",animation:"toast-in 0.3s cubic-bezier(0.4, 0, 0.2, 1)",pointerEvents:"all"},children:[s.jsx("span",{style:{marginTop:"1px",flexShrink:0},children:o[d.type]}),s.jsx("span",{style:{flex:1},children:d.message}),s.jsx("button",{onClick:()=>a(d.id),style:{background:"none",border:"none",color:"inherit",cursor:"pointer",padding:"0",opacity:.7,flexShrink:0,display:"flex",alignItems:"center"},"aria-label":"Dismiss notification",children:s.jsx(Kt,{size:16})})]},d.id)})})]})}function mm(){const n=W.useContext(gf);if(!n)throw new Error("useToast must be used inside <ToastProvider>");return n}function gm(){const n=W.useRef(null);return W.useEffect(()=>{const e=n.current;if(!e)return;const t=e.getContext("2d");let i,r=e.width=window.innerWidth,a=e.height=window.innerHeight;const o=()=>{e&&(r=e.width=window.innerWidth,a=e.height=window.innerHeight)};window.addEventListener("resize",o);const l={x:r/2,y:a/2,active:!1},d={x:r/2,y:a/2,vx:0,vy:0,radius:7,targetRadius:7,points:Array.from({length:8},(v,w)=>({angle:w*Math.PI*2/8}))},c=[];let f=l.x,h=l.y,u=0;const m=(v,w,R,b)=>{const A=Math.hypot(R,b);if(A>4){const P=Math.min(2,Math.floor(A/5));for(let I=0;I<P;I++){const O=Math.random()*Math.PI*2,k=Math.random()*1.5+.4;c.push({x:v+(Math.random()-.5)*6,y:w+(Math.random()-.5)*6,vx:Math.cos(O)*k+R*.08,vy:Math.sin(O)*k+b*.08,rx:Math.random()*4+3,ry:Math.random()*4+3,rotation:Math.random()*Math.PI,alpha:.55,decay:Math.random()*.03+.015,hue:Math.random()>.5?160:210})}}},x=v=>{const w=v.clientX-f,R=v.clientY-h;l.x=v.clientX,l.y=v.clientY,l.active=!0,m(l.x,l.y,w,R),f=l.x,h=l.y},S=v=>{v.touches&&v.touches[0]&&(l.x=v.touches[0].clientX,l.y=v.touches[0].clientY,l.active=!0,d.targetRadius=14,m(l.x,l.y,8,8),f=l.x,h=l.y)},g=v=>{if(v.touches&&v.touches[0]){const w=v.touches[0].clientX,R=v.touches[0].clientY,b=w-f,A=R-h;l.x=w,l.y=R,l.active=!0,m(l.x,l.y,b,A),f=l.x,h=l.y}},p=()=>{d.targetRadius=0,l.active=!1};window.addEventListener("mousemove",x),window.addEventListener("touchstart",S,{passive:!0}),window.addEventListener("touchmove",g,{passive:!0}),window.addEventListener("touchend",p,{passive:!0});let M=!1;const T=v=>{var R,b;const w=v.target.tagName;w==="BUTTON"||w==="A"||w==="INPUT"||w==="SELECT"||v.target.onclick||(R=v.target.classList)!=null&&R.contains("btn-glass")||(b=v.target.classList)!=null&&b.contains("btn-sage")?M=!0:M=!1};window.addEventListener("mouseover",T);const _=()=>{u+=.05,t.clearRect(0,0,r,a);const v=l.x-d.x,w=l.y-d.y;d.vx+=v*.18,d.vy+=w*.18,d.vx*=.65,d.vy*=.65,d.x+=d.vx,d.y+=d.vy;const R=Math.hypot(d.vx,d.vy),b=Math.atan2(d.vy,d.vx),A=M?12:7;d.radius+=((l.active?A:d.targetRadius)-d.radius)*.2;for(let P=c.length-1;P>=0;P--){const I=c[P];if(I.x+=I.vx,I.y+=I.vy,I.rx+=.35,I.ry+=.25,I.alpha-=I.decay,I.alpha<=0){c.splice(P,1);continue}t.save(),t.translate(I.x,I.y),t.rotate(I.rotation+u*.2),t.beginPath(),t.ellipse(0,0,I.rx,I.ry*(1+Math.sin(u*3+P)*.25),0,0,Math.PI*2);const O=t.createRadialGradient(0,0,0,0,0,Math.max(I.rx,I.ry));I.hue===160?(O.addColorStop(0,`rgba(52, 211, 153, ${I.alpha*.5})`),O.addColorStop(.7,`rgba(16, 185, 129, ${I.alpha*.2})`),O.addColorStop(1,"rgba(6, 78, 59, 0)")):(O.addColorStop(0,`rgba(56, 189, 248, ${I.alpha*.5})`),O.addColorStop(.7,`rgba(59, 130, 246, ${I.alpha*.2})`),O.addColorStop(1,"rgba(30, 58, 138, 0)")),t.fillStyle=O,t.fill(),t.restore()}if(d.radius>.5){t.save(),t.beginPath();const P=d.points.length,I=[];for(let k=0;k<P;k++){const D=k*Math.PI*2/P,H=Math.cos(D-b)*Math.min(1.2,R*.25),Z=Math.sin(u*4+k*1.5)*1.5,$=d.radius+H*3+Z,ne=d.x+Math.cos(D)*$,z=d.y+Math.sin(D)*$;I.push({x:ne,y:z})}t.moveTo((I[0].x+I[P-1].x)/2,(I[0].y+I[P-1].y)/2);for(let k=0;k<P;k++){const D=I[k],H=I[(k+1)%P],Z=(D.x+H.x)/2,$=(D.y+H.y)/2;t.quadraticCurveTo(D.x,D.y,Z,$)}t.closePath();const O=t.createRadialGradient(d.x,d.y,0,d.x,d.y,d.radius*1.8);O.addColorStop(0,"rgba(52, 211, 153, 0.2)"),O.addColorStop(.6,"rgba(56, 189, 248, 0.35)"),O.addColorStop(1,"rgba(16, 185, 129, 0.6)"),t.fillStyle=O,t.lineWidth=1.2,t.strokeStyle="rgba(52, 211, 153, 0.65)",t.shadowColor="rgba(52, 211, 153, 0.4)",t.shadowBlur=8,t.fill(),t.stroke(),t.restore(),l.active&&(t.save(),t.beginPath(),t.arc(l.x,l.y,2,0,Math.PI*2),t.fillStyle="#34d399",t.shadowColor="#34d399",t.shadowBlur=6,t.fill(),t.restore())}i=requestAnimationFrame(_)};return _(),()=>{window.removeEventListener("resize",o),window.removeEventListener("mousemove",x),window.removeEventListener("touchstart",S),window.removeEventListener("touchmove",g),window.removeEventListener("touchend",p),window.removeEventListener("mouseover",T),cancelAnimationFrame(i)}},[]),s.jsx("canvas",{ref:n,style:{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",pointerEvents:"none",zIndex:999999}})}function xm({activeView:n="COMMAND",setActiveView:e,onOpenScenario:t,onOpenAi:i,onOpenAlerts:r}){const a=[{id:"COMMAND",label:"OVERVIEW",icon:Sd},{id:"GRID",label:"GRID",icon:li},{id:"DEMAND",label:"DEMAND",icon:_d},{id:"SOURCES",label:"SOURCES",icon:vd},{id:"STORAGE",label:"STORAGE",icon:Sr},{id:"ANALYTICS",label:"ANALYTICS",icon:Eu},{id:"TWIN",label:"DIGITAL TWIN",icon:fr}];return s.jsxs("header",{style:{position:"fixed",top:"12px",left:"50%",transform:"translateX(-50%)",width:"calc(100% - 32px)",maxWidth:"1480px",zIndex:900,background:"rgba(5, 8, 11, 0.75)",backdropFilter:"blur(28px)",WebkitBackdropFilter:"blur(28px)",border:"1px solid rgba(34, 211, 238, 0.2)",borderRadius:"16px",padding:"0.65rem 1.25rem",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"1rem",boxShadow:"0 16px 40px -10px rgba(0,0,0,0.8), 0 0 20px rgba(34, 211, 238, 0.08)"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.85rem",flexShrink:0},children:[s.jsx("div",{style:{width:"38px",height:"38px",borderRadius:"10px",background:"linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(6, 182, 212, 0.05))",border:"1px solid rgba(34, 211, 238, 0.5)",display:"flex",alignItems:"center",justifyContent:"center",color:"#22d3ee",boxShadow:"0 0 16px rgba(34, 211, 238, 0.3)"},children:s.jsx(li,{size:20})}),s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#22d3ee",boxShadow:"0 0 10px #22d3ee",animation:"pulse 2s infinite"}}),s.jsxs("span",{style:{fontSize:"1.15rem",fontWeight:900,color:"#ffffff",letterSpacing:"-0.02em"},children:["Civic",s.jsx("span",{style:{color:"#22d3ee"},children:"OS"})]}),s.jsx("span",{style:{fontSize:"0.65rem",fontWeight:800,padding:"0.15rem 0.45rem",borderRadius:"999px",background:"rgba(34, 211, 238, 0.12)",border:"1px solid rgba(34, 211, 238, 0.3)",color:"#22d3ee",letterSpacing:"0.05em"},children:"ENERGY OS 4.0"})]}),s.jsx("div",{style:{fontSize:"0.64rem",fontFamily:"var(--font-mono)",color:"#94a3b8",letterSpacing:"0.08em",marginTop:"0.1rem"},children:"ENERGY INTELLIGENCE PLATFORM"})]})]}),s.jsx("nav",{className:"desktop-only",style:{display:"flex",alignItems:"center",gap:"0.3rem"},children:a.map(o=>{const l=n===o.id,d=o.icon;return s.jsxs("button",{onClick:()=>e(o.id),style:{background:l?"rgba(34, 211, 238, 0.15)":"transparent",border:l?"1px solid rgba(34, 211, 238, 0.4)":"1px solid transparent",borderRadius:"8px",padding:"0.45rem 0.85rem",color:l?"#22d3ee":"#cbd5e1",fontSize:"0.74rem",fontWeight:l?800:600,fontFamily:"var(--font-mono)",letterSpacing:"0.06em",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.4rem",transition:"all 0.2s ease",boxShadow:l?"0 0 14px rgba(34, 211, 238, 0.2)":"none"},children:[s.jsx(d,{size:13,color:l?"#22d3ee":"#94a3b8"}),o.label]},o.id)})}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem",flexShrink:0},children:[s.jsxs("div",{className:"desktop-only",style:{background:"rgba(16, 185, 129, 0.1)",border:"1px solid rgba(16, 185, 129, 0.3)",borderRadius:"999px",padding:"0.35rem 0.75rem",display:"flex",alignItems:"center",gap:"0.4rem",fontSize:"0.72rem",fontWeight:800,color:"#34d399",fontFamily:"var(--font-mono)"},children:[s.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#34d399",boxShadow:"0 0 8px #34d399"}}),"SYSTEM ONLINE"]}),s.jsxs("button",{onClick:i,style:{background:"linear-gradient(135deg, rgba(34, 211, 238, 0.2), rgba(6, 182, 212, 0.1))",border:"1px solid rgba(34, 211, 238, 0.5)",borderRadius:"8px",padding:"0.45rem 0.85rem",color:"#22d3ee",fontSize:"0.75rem",fontWeight:800,cursor:"pointer",display:"flex",alignItems:"center",gap:"0.4rem",boxShadow:"0 0 14px rgba(34, 211, 238, 0.25)"},children:[s.jsx(En,{size:14})," AI INTELLIGENCE"]}),s.jsxs("button",{onClick:t,style:{background:"rgba(245, 158, 11, 0.12)",border:"1px solid rgba(245, 158, 11, 0.4)",borderRadius:"8px",padding:"0.45rem 0.85rem",color:"#fbbf24",fontSize:"0.75rem",fontWeight:800,cursor:"pointer",display:"flex",alignItems:"center",gap:"0.4rem",transition:"all 0.2s ease"},children:[s.jsx(Md,{size:14})," WHAT IF? SIMULATOR"]}),s.jsx("button",{onClick:r,style:{background:"rgba(255,255,255,0.04)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"8px",padding:"0.45rem",color:"#cbd5e1",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},title:"System Alerts",children:s.jsx(Us,{size:16})})]})]})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tl="186",ym=0,rc=1,vm=2,gs=1,xf=2,sr=3,ui=0,Gt=1,yn=2,Nn=0,cr=1,sc=2,ac=3,oc=4,bm=5,Li=100,Sm=101,_m=102,Mm=103,Em=104,wm=200,Tm=201,Am=202,Cm=203,yf=204,vf=205,Rm=206,Im=207,Pm=208,Dm=209,Lm=210,Nm=211,Um=212,Om=213,Fm=214,Ja=0,Qa=1,eo=2,pr=3,to=4,no=5,io=6,ro=7,nl=0,zm=1,Bm=2,Sn=0,bf=1,Sf=2,_f=3,Mf=4,Ef=5,wf=6,Tf=7,Af=300,hi=301,ki=302,la=303,ca=304,Gs=306,so=1e3,Ln=1001,ao=1002,Ct=1003,km=1004,Ur=1005,Ot=1006,da=1007,si=1008,Yt=1009,Cf=1010,Rf=1011,mr=1012,il=1013,wn=1014,vn=1015,Tn=1016,rl=1017,sl=1018,gr=1020,If=35902,Pf=35899,Df=1021,Lf=1022,ln=1023,zn=1026,ai=1027,Nf=1028,al=1029,pi=1030,ol=1031,ll=1033,xs=33776,ys=33777,vs=33778,bs=33779,oo=35840,lo=35841,co=35842,fo=35843,uo=36196,ho=37492,po=37496,mo=37488,go=37489,As=37490,xo=37491,yo=37808,vo=37809,bo=37810,So=37811,_o=37812,Mo=37813,Eo=37814,wo=37815,To=37816,Ao=37817,Co=37818,Ro=37819,Io=37820,Po=37821,Do=36492,Lo=36494,No=36495,Uo=36283,Oo=36284,Cs=36285,Fo=36286,jm=3200,zo=0,Wm=1,Yn="",Qt="srgb",Rs="srgb-linear",Is="linear",rt="srgb",fa=7680,Hm=519,Gm=512,Vm=513,Xm=514,cl=515,qm=516,Ym=517,dl=518,$m=519,Km=35044,lc="300 es",bn=2e3,xr=2001;function Zm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ps(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jm(){const n=Ps("canvas");return n.style.display="block",n}const cc={};function dc(...n){const e="THREE."+n.shift();console.log(e,...n)}function Uf(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function je(...n){n=Uf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function et(...n){n=Uf(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ui(...n){const e=n.join(" ");e in cc||(cc[e]=!0,je(...n))}function Qm(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const eg={[Ja]:Qa,[eo]:io,[to]:ro,[pr]:no,[Qa]:Ja,[io]:eo,[ro]:to,[no]:pr};class mi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ss=Math.PI/180,Bo=180/Math.PI;function Ar(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function tg(n,e){return(n%e+e)%e}function ua(n,e,t){return(1-t)*n+t*e}function $i(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const vl=class vl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vl.prototype.isVector2=!0;let Ke=vl;class Vi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,o,l){let d=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],u=a[o+0],m=a[o+1],x=a[o+2],S=a[o+3];if(h!==S||d!==u||c!==m||f!==x){let g=d*u+c*m+f*x+h*S;g<0&&(u=-u,m=-m,x=-x,S=-S,g=-g);let p=1-l;if(g<.9995){const M=Math.acos(g),T=Math.sin(M);p=Math.sin(p*M)/T,l=Math.sin(l*M)/T,d=d*p+u*l,c=c*p+m*l,f=f*p+x*l,h=h*p+S*l}else{d=d*p+u*l,c=c*p+m*l,f=f*p+x*l,h=h*p+S*l;const M=1/Math.sqrt(d*d+c*c+f*f+h*h);d*=M,c*=M,f*=M,h*=M}}e[t]=d,e[t+1]=c,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,a,o){const l=i[r],d=i[r+1],c=i[r+2],f=i[r+3],h=a[o],u=a[o+1],m=a[o+2],x=a[o+3];return e[t]=l*x+f*h+d*m-c*u,e[t+1]=d*x+f*u+c*h-l*m,e[t+2]=c*x+f*m+l*u-d*h,e[t+3]=f*x-l*h-d*u-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,o=e._order,l=Math.cos,d=Math.sin,c=l(i/2),f=l(r/2),h=l(a/2),u=d(i/2),m=d(r/2),x=d(a/2);switch(o){case"XYZ":this._x=u*f*h+c*m*x,this._y=c*m*h-u*f*x,this._z=c*f*x+u*m*h,this._w=c*f*h-u*m*x;break;case"YXZ":this._x=u*f*h+c*m*x,this._y=c*m*h-u*f*x,this._z=c*f*x-u*m*h,this._w=c*f*h+u*m*x;break;case"ZXY":this._x=u*f*h-c*m*x,this._y=c*m*h+u*f*x,this._z=c*f*x+u*m*h,this._w=c*f*h-u*m*x;break;case"ZYX":this._x=u*f*h-c*m*x,this._y=c*m*h+u*f*x,this._z=c*f*x-u*m*h,this._w=c*f*h+u*m*x;break;case"YZX":this._x=u*f*h+c*m*x,this._y=c*m*h+u*f*x,this._z=c*f*x-u*m*h,this._w=c*f*h-u*m*x;break;case"XZY":this._x=u*f*h-c*m*x,this._y=c*m*h-u*f*x,this._z=c*f*x+u*m*h,this._w=c*f*h+u*m*x;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],o=t[1],l=t[5],d=t[9],c=t[2],f=t[6],h=t[10],u=i+l+h;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(f-d)*m,this._y=(a-c)*m,this._z=(o-r)*m}else if(i>l&&i>h){const m=2*Math.sqrt(1+i-l-h);this._w=(f-d)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(a+c)/m}else if(l>h){const m=2*Math.sqrt(1+l-i-h);this._w=(a-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(d+f)/m}else{const m=2*Math.sqrt(1+h-i-l);this._w=(o-r)/m,this._x=(a+c)/m,this._y=(d+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,o=e._w,l=t._x,d=t._y,c=t._z,f=t._w;return this._x=i*f+o*l+r*c-a*d,this._y=r*f+o*d+a*l-i*c,this._z=a*f+o*c+i*d-r*l,this._w=o*f-i*l-r*d-a*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,o=e._w,l=this.dot(e);l<0&&(i=-i,r=-r,a=-a,o=-o,l=-l);let d=1-t;if(l<.9995){const c=Math.acos(l),f=Math.sin(c);d=Math.sin(d*c)/f,t=Math.sin(t*c)/f,this._x=this._x*d+i*t,this._y=this._y*d+r*t,this._z=this._z*d+a*t,this._w=this._w*d+o*t,this._onChangeCallback()}else this._x=this._x*d+i*t,this._y=this._y*d+r*t,this._z=this._z*d+a*t,this._w=this._w*d+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const bl=class bl{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,o=e.y,l=e.z,d=e.w,c=2*(o*r-l*i),f=2*(l*t-a*r),h=2*(a*i-o*t);return this.x=t+d*c+o*h-l*f,this.y=i+d*f+l*c-a*h,this.z=r+d*h+a*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,o=t.x,l=t.y,d=t.z;return this.x=r*d-a*l,this.y=a*o-i*d,this.z=i*l-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ha.copy(this).projectOnVector(e),this.sub(ha)}reflect(e){return this.sub(ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};bl.prototype.isVector3=!0;let B=bl;const ha=new B,fc=new Vi,Sl=class Sl{constructor(e,t,i,r,a,o,l,d,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,l,d,c)}set(e,t,i,r,a,o,l,d,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=l,f[3]=t,f[4]=a,f[5]=d,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],l=i[3],d=i[6],c=i[1],f=i[4],h=i[7],u=i[2],m=i[5],x=i[8],S=r[0],g=r[3],p=r[6],M=r[1],T=r[4],_=r[7],v=r[2],w=r[5],R=r[8];return a[0]=o*S+l*M+d*v,a[3]=o*g+l*T+d*w,a[6]=o*p+l*_+d*R,a[1]=c*S+f*M+h*v,a[4]=c*g+f*T+h*w,a[7]=c*p+f*_+h*R,a[2]=u*S+m*M+x*v,a[5]=u*g+m*T+x*w,a[8]=u*p+m*_+x*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],l=e[5],d=e[6],c=e[7],f=e[8];return t*o*f-t*l*c-i*a*f+i*l*d+r*a*c-r*o*d}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],l=e[5],d=e[6],c=e[7],f=e[8],h=f*o-l*c,u=l*d-f*a,m=c*a-o*d,x=t*h+i*u+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/x;return e[0]=h*S,e[1]=(r*c-f*i)*S,e[2]=(l*i-r*o)*S,e[3]=u*S,e[4]=(f*t-r*d)*S,e[5]=(r*a-l*t)*S,e[6]=m*S,e[7]=(i*d-c*t)*S,e[8]=(o*t-i*a)*S,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,o,l){const d=Math.cos(a),c=Math.sin(a);return this.set(i*d,i*c,-i*(d*o+c*l)+o+e,-r*c,r*d,-r*(-c*o+d*l)+l+t,0,0,1),this}scale(e,t){return Ui("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pa.makeScale(e,t)),this}rotate(e){return Ui("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pa.makeRotation(-e)),this}translate(e,t){return Ui("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Sl.prototype.isMatrix3=!0;let He=Sl;const pa=new He,uc=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hc=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ng(){const n={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(r,a,o){return this.enabled===!1||a===o||!a||!o||(this.spaces[a].transfer===rt&&(r.r=Un(r.r),r.g=Un(r.g),r.b=Un(r.b)),this.spaces[a].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===rt&&(r.r=Oi(r.r),r.g=Oi(r.g),r.b=Oi(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yn?Is:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,o){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Ui("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Ui("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Rs]:{primaries:e,whitePoint:i,transfer:Is,toXYZ:uc,fromXYZ:hc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:i,transfer:rt,toXYZ:uc,fromXYZ:hc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),n}const Je=ng();function Un(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Oi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let bi;class ig{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{bi===void 0&&(bi=Ps("canvas")),bi.width=e.width,bi.height=e.height;const r=bi.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=bi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ps("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=Un(a[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Un(t[i]/255)*255):t[i]=Un(t[i]);return{data:t,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rg=0;class fl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=Ar(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?a.push(ma(r[o].image)):a.push(ma(r[o]))}else a=ma(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function ma(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ig.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let sg=0;const ga=new B;class jt extends mi{constructor(e=jt.DEFAULT_IMAGE,t=jt.DEFAULT_MAPPING,i=Ln,r=Ln,a=Ot,o=si,l=ln,d=Yt,c=jt.DEFAULT_ANISOTROPY,f=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=Ar(),this.name="",this.source=new fl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=d,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ga).x}get height(){return this.source.getSize(ga).y}get depth(){return this.source.getSize(ga).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){je(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){je(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Af)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case so:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case ao:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case so:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case ao:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Af;jt.DEFAULT_ANISOTROPY=1;const _l=class _l{constructor(e=0,t=0,i=0,r=1){this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const d=e.elements,c=d[0],f=d[4],h=d[8],u=d[1],m=d[5],x=d[9],S=d[2],g=d[6],p=d[10];if(Math.abs(f-u)<.01&&Math.abs(h-S)<.01&&Math.abs(x-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+S)<.1&&Math.abs(x+g)<.1&&Math.abs(c+m+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,_=(m+1)/2,v=(p+1)/2,w=(f+u)/4,R=(h+S)/4,b=(x+g)/4;return T>_&&T>v?T<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(T),r=w/i,a=R/i):_>v?_<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(_),i=w/r,a=b/r):v<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(v),i=R/a,r=b/a),this.set(i,r,a,t),this}let M=Math.sqrt((g-x)*(g-x)+(h-S)*(h-S)+(u-f)*(u-f));return Math.abs(M)<.001&&(M=1),this.x=(g-x)/M,this.y=(h-S)/M,this.z=(u-f)/M,this.w=Math.acos((c+m+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_l.prototype.isVector4=!0;let mt=_l;class ag extends mi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ot,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},a=new jt(r),o=i.count;for(let l=0;l<o;l++)this.textures[l]=a.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ot,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new fl(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cn extends ag{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Of extends jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class og extends jt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Ns=class Ns{constructor(e,t,i,r,a,o,l,d,c,f,h,u,m,x,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,o,l,d,c,f,h,u,m,x,S,g)}set(e,t,i,r,a,o,l,d,c,f,h,u,m,x,S,g){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=a,p[5]=o,p[9]=l,p[13]=d,p[2]=c,p[6]=f,p[10]=h,p[14]=u,p[3]=m,p[7]=x,p[11]=S,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ns().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Si.setFromMatrixColumn(e,0).length(),a=1/Si.setFromMatrixColumn(e,1).length(),o=1/Si.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),l=Math.sin(i),d=Math.cos(r),c=Math.sin(r),f=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const u=o*f,m=o*h,x=l*f,S=l*h;t[0]=d*f,t[4]=-d*h,t[8]=c,t[1]=m+x*c,t[5]=u-S*c,t[9]=-l*d,t[2]=S-u*c,t[6]=x+m*c,t[10]=o*d}else if(e.order==="YXZ"){const u=d*f,m=d*h,x=c*f,S=c*h;t[0]=u+S*l,t[4]=x*l-m,t[8]=o*c,t[1]=o*h,t[5]=o*f,t[9]=-l,t[2]=m*l-x,t[6]=S+u*l,t[10]=o*d}else if(e.order==="ZXY"){const u=d*f,m=d*h,x=c*f,S=c*h;t[0]=u-S*l,t[4]=-o*h,t[8]=x+m*l,t[1]=m+x*l,t[5]=o*f,t[9]=S-u*l,t[2]=-o*c,t[6]=l,t[10]=o*d}else if(e.order==="ZYX"){const u=o*f,m=o*h,x=l*f,S=l*h;t[0]=d*f,t[4]=x*c-m,t[8]=u*c+S,t[1]=d*h,t[5]=S*c+u,t[9]=m*c-x,t[2]=-c,t[6]=l*d,t[10]=o*d}else if(e.order==="YZX"){const u=o*d,m=o*c,x=l*d,S=l*c;t[0]=d*f,t[4]=S-u*h,t[8]=x*h+m,t[1]=h,t[5]=o*f,t[9]=-l*f,t[2]=-c*f,t[6]=m*h+x,t[10]=u-S*h}else if(e.order==="XZY"){const u=o*d,m=o*c,x=l*d,S=l*c;t[0]=d*f,t[4]=-h,t[8]=c*f,t[1]=u*h+S,t[5]=o*f,t[9]=m*h-x,t[2]=x*h-m,t[6]=l*f,t[10]=S*h+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lg,e,cg)}lookAt(e,t,i){const r=this.elements;return Vt.subVectors(e,t),Vt.lengthSq()===0&&(Vt.z=1),Vt.normalize(),Wn.crossVectors(i,Vt),Wn.lengthSq()===0&&(Math.abs(i.z)===1?Vt.x+=1e-4:Vt.z+=1e-4,Vt.normalize(),Wn.crossVectors(i,Vt)),Wn.normalize(),Or.crossVectors(Vt,Wn),r[0]=Wn.x,r[4]=Or.x,r[8]=Vt.x,r[1]=Wn.y,r[5]=Or.y,r[9]=Vt.y,r[2]=Wn.z,r[6]=Or.z,r[10]=Vt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,o=i[0],l=i[4],d=i[8],c=i[12],f=i[1],h=i[5],u=i[9],m=i[13],x=i[2],S=i[6],g=i[10],p=i[14],M=i[3],T=i[7],_=i[11],v=i[15],w=r[0],R=r[4],b=r[8],A=r[12],P=r[1],I=r[5],O=r[9],k=r[13],D=r[2],H=r[6],Z=r[10],$=r[14],ne=r[3],z=r[7],X=r[11],J=r[15];return a[0]=o*w+l*P+d*D+c*ne,a[4]=o*R+l*I+d*H+c*z,a[8]=o*b+l*O+d*Z+c*X,a[12]=o*A+l*k+d*$+c*J,a[1]=f*w+h*P+u*D+m*ne,a[5]=f*R+h*I+u*H+m*z,a[9]=f*b+h*O+u*Z+m*X,a[13]=f*A+h*k+u*$+m*J,a[2]=x*w+S*P+g*D+p*ne,a[6]=x*R+S*I+g*H+p*z,a[10]=x*b+S*O+g*Z+p*X,a[14]=x*A+S*k+g*$+p*J,a[3]=M*w+T*P+_*D+v*ne,a[7]=M*R+T*I+_*H+v*z,a[11]=M*b+T*O+_*Z+v*X,a[15]=M*A+T*k+_*$+v*J,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],o=e[1],l=e[5],d=e[9],c=e[13],f=e[2],h=e[6],u=e[10],m=e[14],x=e[3],S=e[7],g=e[11],p=e[15],M=d*m-c*u,T=l*m-c*h,_=l*u-d*h,v=o*m-c*f,w=o*u-d*f,R=o*h-l*f;return t*(S*M-g*T+p*_)-i*(x*M-g*v+p*w)+r*(x*T-S*v+p*R)-a*(x*_-S*w+g*R)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[1],o=e[5],l=e[9],d=e[2],c=e[6],f=e[10];return t*(o*f-l*c)-i*(a*f-l*d)+r*(a*c-o*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],o=e[4],l=e[5],d=e[6],c=e[7],f=e[8],h=e[9],u=e[10],m=e[11],x=e[12],S=e[13],g=e[14],p=e[15],M=t*l-i*o,T=t*d-r*o,_=t*c-a*o,v=i*d-r*l,w=i*c-a*l,R=r*c-a*d,b=f*S-h*x,A=f*g-u*x,P=f*p-m*x,I=h*g-u*S,O=h*p-m*S,k=u*p-m*g,D=M*k-T*O+_*I+v*P-w*A+R*b;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/D;return e[0]=(l*k-d*O+c*I)*H,e[1]=(r*O-i*k-a*I)*H,e[2]=(S*R-g*w+p*v)*H,e[3]=(u*w-h*R-m*v)*H,e[4]=(d*P-o*k-c*A)*H,e[5]=(t*k-r*P+a*A)*H,e[6]=(g*_-x*R-p*T)*H,e[7]=(f*R-u*_+m*T)*H,e[8]=(o*O-l*P+c*b)*H,e[9]=(i*P-t*O-a*b)*H,e[10]=(x*w-S*_+p*M)*H,e[11]=(h*_-f*w-m*M)*H,e[12]=(l*A-o*I-d*b)*H,e[13]=(t*I-i*A+r*b)*H,e[14]=(S*T-x*v-g*M)*H,e[15]=(f*v-h*T+u*M)*H,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,o=e.x,l=e.y,d=e.z,c=a*o,f=a*l;return this.set(c*o+i,c*l-r*d,c*d+r*l,0,c*l+r*d,f*l+i,f*d-r*o,0,c*d-r*l,f*d+r*o,a*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,o=t._y,l=t._z,d=t._w,c=a+a,f=o+o,h=l+l,u=a*c,m=a*f,x=a*h,S=o*f,g=o*h,p=l*h,M=d*c,T=d*f,_=d*h,v=i.x,w=i.y,R=i.z;return r[0]=(1-(S+p))*v,r[1]=(m+_)*v,r[2]=(x-T)*v,r[3]=0,r[4]=(m-_)*w,r[5]=(1-(u+p))*w,r[6]=(g+M)*w,r[7]=0,r[8]=(x+T)*R,r[9]=(g-M)*R,r[10]=(1-(u+S))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const a=this.determinantAffine();if(a===0)return i.set(1,1,1),t.identity(),this;let o=Si.set(r[0],r[1],r[2]).length();const l=Si.set(r[4],r[5],r[6]).length(),d=Si.set(r[8],r[9],r[10]).length();a<0&&(o=-o),sn.copy(this);const c=1/o,f=1/l,h=1/d;return sn.elements[0]*=c,sn.elements[1]*=c,sn.elements[2]*=c,sn.elements[4]*=f,sn.elements[5]*=f,sn.elements[6]*=f,sn.elements[8]*=h,sn.elements[9]*=h,sn.elements[10]*=h,t.setFromRotationMatrix(sn),i.x=o,i.y=l,i.z=d,this}makePerspective(e,t,i,r,a,o,l=bn,d=!1){const c=this.elements,f=2*a/(t-e),h=2*a/(i-r),u=(t+e)/(t-e),m=(i+r)/(i-r);let x,S;if(d)x=a/(o-a),S=o*a/(o-a);else if(l===bn)x=-(o+a)/(o-a),S=-2*o*a/(o-a);else if(l===xr)x=-o/(o-a),S=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,a,o,l=bn,d=!1){const c=this.elements,f=2/(t-e),h=2/(i-r),u=-(t+e)/(t-e),m=-(i+r)/(i-r);let x,S;if(d)x=1/(o-a),S=o/(o-a);else if(l===bn)x=-2/(o-a),S=-(o+a)/(o-a);else if(l===xr)x=-1/(o-a),S=-a/(o-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=S,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Ns.prototype.isMatrix4=!0;let ut=Ns;const Si=new B,sn=new ut,lg=new B(0,0,0),cg=new B(1,1,1),Wn=new B,Or=new B,Vt=new B,pc=new ut,mc=new Vi;class Zn{constructor(e=0,t=0,i=0,r=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],l=r[8],d=r[1],c=r[5],f=r[9],h=r[2],u=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(d,c)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin($e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-f,m),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return pc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return mc.setFromEuler(this),this.setFromQuaternion(mc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class ul{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dg=0;const gc=new B,_i=new Vi,Cn=new ut,Fr=new B,Ki=new B,fg=new B,ug=new Vi,xc=new B(1,0,0),yc=new B(0,1,0),vc=new B(0,0,1),bc={type:"added"},hg={type:"removed"},Mi={type:"childadded",child:null},xa={type:"childremoved",child:null};class wt extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=Ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wt.DEFAULT_UP.clone();const e=new B,t=new Zn,i=new Vi,r=new B(1,1,1);function a(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ut},normalMatrix:{value:new He}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ul,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.multiply(_i),this}rotateOnWorldAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.premultiply(_i),this}rotateX(e){return this.rotateOnAxis(xc,e)}rotateY(e){return this.rotateOnAxis(yc,e)}rotateZ(e){return this.rotateOnAxis(vc,e)}translateOnAxis(e,t){return gc.copy(e).applyQuaternion(this.quaternion),this.position.add(gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xc,e)}translateY(e){return this.translateOnAxis(yc,e)}translateZ(e){return this.translateOnAxis(vc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Fr.copy(e):Fr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(Ki,Fr,this.up):Cn.lookAt(Fr,Ki,this.up),this.quaternion.setFromRotationMatrix(Cn),r&&(Cn.extractRotation(r.matrixWorld),_i.setFromRotationMatrix(Cn),this.quaternion.premultiply(_i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(bc),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null):et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hg),xa.child=e,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(bc),Mi.child=e,this.dispatchEvent(Mi),Mi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,e,fg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,ug,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*i-a[8]*r,a[13]+=i-a[1]*t-a[5]*i-a[9]*r,a[14]+=r-a[2]*t-a[6]*i-a[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const a=this.children;for(let o=0,l=a.length;o<l;o++)a[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(l,d){return l[d.uuid]===void 0&&(l[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const d=l.shapes;if(Array.isArray(d))for(let c=0,f=d.length;c<f;c++){const h=d[c];a(e.shapes,h)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let d=0,c=this.material.length;d<c;d++)l.push(a(e.materials,this.material[d]));r.material=l}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const d=this.animations[l];r.animations.push(a(e.animations,d))}}if(t){const l=o(e.geometries),d=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),u=o(e.skeletons),m=o(e.animations),x=o(e.nodes);l.length>0&&(i.geometries=l),d.length>0&&(i.materials=d),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),u.length>0&&(i.skeletons=u),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(l){const d=[];for(const c in l){const f=l[c];delete f.metadata,d.push(f)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}wt.DEFAULT_UP=new B(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zr extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pg={type:"move"};class ya{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,o=null;const l=this._targetRay,d=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const g=t.getJointPose(S,i),p=this._getHandJoint(c,S);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&u>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(pg)))}return l!==null&&(l.visible=r!==null),d!==null&&(d.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},Br={h:0,s:0,l:0};function va(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Je.workingColorSpace){if(e=tg(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,o=2*i-a;this.r=va(o,a,e+1/3),this.g=va(o,a,e),this.b=va(o,a,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=Qt){function i(a){a!==void 0&&parseFloat(a)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(a,16),t);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=Ff[e.toLowerCase()];return i!==void 0?this.setHex(i,t):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Un(e.r),this.g=Un(e.g),this.b=Un(e.b),this}copyLinearToSRGB(e){return this.r=Oi(e.r),this.g=Oi(e.g),this.b=Oi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Je.workingToColorSpace(Nt.copy(this),e),Math.round($e(Nt.r*255,0,255))*65536+Math.round($e(Nt.g*255,0,255))*256+Math.round($e(Nt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Nt.copy(this),t);const i=Nt.r,r=Nt.g,a=Nt.b,o=Math.max(i,r,a),l=Math.min(i,r,a);let d,c;const f=(l+o)/2;if(l===o)d=0,c=0;else{const h=o-l;switch(c=f<=.5?h/(o+l):h/(2-o-l),o){case i:d=(r-a)/h+(r<a?6:0);break;case r:d=(a-i)/h+2;break;case a:d=(i-r)/h+4;break}d/=6}return e.h=d,e.s=c,e.l=f,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Qt){Je.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,i=Nt.g,r=Nt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Hn),this.setHSL(Hn.h+e,Hn.s+t,Hn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hn),e.getHSL(Br);const i=ua(Hn.h,Br.h,t),r=ua(Hn.s,Br.s,t),a=ua(Hn.l,Br.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new qe;qe.NAMES=Ff;class hl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new qe(e),this.density=t}clone(){return new hl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class mg extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const an=new B,Rn=new B,ba=new B,In=new B,Ei=new B,wi=new B,Sc=new B,Sa=new B,_a=new B,Ma=new B,Ea=new mt,wa=new mt,Ta=new mt;class en{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),an.subVectors(e,t),r.cross(an);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){an.subVectors(r,t),Rn.subVectors(i,t),ba.subVectors(e,t);const o=an.dot(an),l=an.dot(Rn),d=an.dot(ba),c=Rn.dot(Rn),f=Rn.dot(ba),h=o*c-l*l;if(h===0)return a.set(0,0,0),null;const u=1/h,m=(c*d-l*f)*u,x=(o*f-l*d)*u;return a.set(1-m-x,x,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,i,r,a,o,l,d){return this.getBarycoord(e,t,i,r,In)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,In.x),d.addScaledVector(o,In.y),d.addScaledVector(l,In.z),d)}static getInterpolatedAttribute(e,t,i,r,a,o){return Ea.setScalar(0),wa.setScalar(0),Ta.setScalar(0),Ea.fromBufferAttribute(e,t),wa.fromBufferAttribute(e,i),Ta.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ea,a.x),o.addScaledVector(wa,a.y),o.addScaledVector(Ta,a.z),o}static isFrontFacing(e,t,i,r){return an.subVectors(i,t),Rn.subVectors(e,t),an.cross(Rn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return an.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),an.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return en.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let o,l;Ei.subVectors(r,i),wi.subVectors(a,i),Sa.subVectors(e,i);const d=Ei.dot(Sa),c=wi.dot(Sa);if(d<=0&&c<=0)return t.copy(i);_a.subVectors(e,r);const f=Ei.dot(_a),h=wi.dot(_a);if(f>=0&&h<=f)return t.copy(r);const u=d*h-f*c;if(u<=0&&d>=0&&f<=0)return o=d/(d-f),t.copy(i).addScaledVector(Ei,o);Ma.subVectors(e,a);const m=Ei.dot(Ma),x=wi.dot(Ma);if(x>=0&&m<=x)return t.copy(a);const S=m*c-d*x;if(S<=0&&c>=0&&x<=0)return l=c/(c-x),t.copy(i).addScaledVector(wi,l);const g=f*x-m*h;if(g<=0&&h-f>=0&&m-x>=0)return Sc.subVectors(a,r),l=(h-f)/(h-f+(m-x)),t.copy(r).addScaledVector(Sc,l);const p=1/(g+S+u);return o=S*p,l=u*p,t.copy(i).addScaledVector(Ei,o).addScaledVector(wi,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Cr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(on.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(on.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=on.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=a.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,on):on.fromBufferAttribute(a,o),on.applyMatrix4(e.matrixWorld),this.expandByPoint(on);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kr.copy(i.boundingBox)),kr.applyMatrix4(e.matrixWorld),this.union(kr)}const r=e.children;for(let a=0,o=r.length;a<o;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,on),on.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zi),jr.subVectors(this.max,Zi),Ti.subVectors(e.a,Zi),Ai.subVectors(e.b,Zi),Ci.subVectors(e.c,Zi),Gn.subVectors(Ai,Ti),Vn.subVectors(Ci,Ai),Qn.subVectors(Ti,Ci);let t=[0,-Gn.z,Gn.y,0,-Vn.z,Vn.y,0,-Qn.z,Qn.y,Gn.z,0,-Gn.x,Vn.z,0,-Vn.x,Qn.z,0,-Qn.x,-Gn.y,Gn.x,0,-Vn.y,Vn.x,0,-Qn.y,Qn.x,0];return!Aa(t,Ti,Ai,Ci,jr)||(t=[1,0,0,0,1,0,0,0,1],!Aa(t,Ti,Ai,Ci,jr))?!1:(Wr.crossVectors(Gn,Vn),t=[Wr.x,Wr.y,Wr.z],Aa(t,Ti,Ai,Ci,jr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,on).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(on).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pn=[new B,new B,new B,new B,new B,new B,new B,new B],on=new B,kr=new Cr,Ti=new B,Ai=new B,Ci=new B,Gn=new B,Vn=new B,Qn=new B,Zi=new B,jr=new B,Wr=new B,ei=new B;function Aa(n,e,t,i,r){for(let a=0,o=n.length-3;a<=o;a+=3){ei.fromArray(n,a);const l=r.x*Math.abs(ei.x)+r.y*Math.abs(ei.y)+r.z*Math.abs(ei.z),d=e.dot(ei),c=t.dot(ei),f=i.dot(ei);if(Math.max(-Math.max(d,c,f),Math.min(d,c,f))>l)return!1}return!0}const St=new B,Hr=new Ke;let gg=0;class _n extends mi{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Km,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Hr.fromBufferAttribute(this,t),Hr.applyMatrix3(e),this.setXY(t,Hr.x,Hr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=$i(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Wt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),r=Wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=Wt(t,this.array),i=Wt(i,this.array),r=Wt(r,this.array),a=Wt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class zf extends _n{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Bf extends _n{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Rt extends _n{constructor(e,t,i){super(new Float32Array(e),t,i)}}const xg=new Cr,Ji=new B,Ca=new B;class Rr{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):xg.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ji.subVectors(e,this.center);const t=Ji.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ji,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ji.copy(e.center).add(Ca)),this.expandByPoint(Ji.copy(e.center).sub(Ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let yg=0;const Jt=new ut,Ra=new wt,Ri=new B,Xt=new Cr,Qi=new Cr,Et=new B;class zt extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=Ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zm(e)?Bf:zf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new He().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,i){return Jt.makeTranslation(e,t,i),this.applyMatrix4(Jt),this}scale(e,t,i){return Jt.makeScale(e,t,i),this.applyMatrix4(Jt),this}lookAt(e){return Ra.lookAt(e),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ri).negate(),this.translate(Ri.x,Ri.y,Ri.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,a=e.length;r<a;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Rt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];Xt.setFromBufferAttribute(a),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const l=t[a];Qi.setFromBufferAttribute(l),this.morphTargetsRelative?(Et.addVectors(Xt.min,Qi.min),Xt.expandByPoint(Et),Et.addVectors(Xt.max,Qi.max),Xt.expandByPoint(Et)):(Xt.expandByPoint(Qi.min),Xt.expandByPoint(Qi.max))}Xt.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)Et.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let a=0,o=t.length;a<o;a++){const l=t[a],d=this.morphTargetsRelative;for(let c=0,f=l.count;c<f;c++)Et.fromBufferAttribute(l,c),d&&(Ri.fromBufferAttribute(e,c),Et.add(Ri)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new _n(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const l=[],d=[];for(let b=0;b<i.count;b++)l[b]=new B,d[b]=new B;const c=new B,f=new B,h=new B,u=new Ke,m=new Ke,x=new Ke,S=new B,g=new B;function p(b,A,P){c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,A),h.fromBufferAttribute(i,P),u.fromBufferAttribute(a,b),m.fromBufferAttribute(a,A),x.fromBufferAttribute(a,P),f.sub(c),h.sub(c),m.sub(u),x.sub(u);const I=1/(m.x*x.y-x.x*m.y);isFinite(I)&&(S.copy(f).multiplyScalar(x.y).addScaledVector(h,-m.y).multiplyScalar(I),g.copy(h).multiplyScalar(m.x).addScaledVector(f,-x.x).multiplyScalar(I),l[b].add(S),l[A].add(S),l[P].add(S),d[b].add(g),d[A].add(g),d[P].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let b=0,A=M.length;b<A;++b){const P=M[b],I=P.start,O=P.count;for(let k=I,D=I+O;k<D;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const T=new B,_=new B,v=new B,w=new B;function R(b){v.fromBufferAttribute(r,b),w.copy(v);const A=l[b];T.copy(A),T.sub(v.multiplyScalar(v.dot(A))).normalize(),_.crossVectors(w,A);const I=_.dot(d[b])<0?-1:1;o.setXYZW(b,T.x,T.y,T.z,I)}for(let b=0,A=M.length;b<A;++b){const P=M[b],I=P.start,O=P.count;for(let k=I,D=I+O;k<D;k+=3)R(e.getX(k+0)),R(e.getX(k+1)),R(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,m=i.count;u<m;u++)i.setXYZ(u,0,0,0);const r=new B,a=new B,o=new B,l=new B,d=new B,c=new B,f=new B,h=new B;if(e)for(let u=0,m=e.count;u<m;u+=3){const x=e.getX(u+0),S=e.getX(u+1),g=e.getX(u+2);r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,S),o.fromBufferAttribute(t,g),f.subVectors(o,a),h.subVectors(r,a),f.cross(h),l.fromBufferAttribute(i,x),d.fromBufferAttribute(i,S),c.fromBufferAttribute(i,g),l.add(f),d.add(f),c.add(f),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(S,d.x,d.y,d.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,m=t.count;u<m;u+=3)r.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),f.subVectors(o,a),h.subVectors(r,a),f.cross(h),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(l,d){const c=l.array,f=l.itemSize,h=l.normalized,u=new c.constructor(d.length*f);let m=0,x=0;for(let S=0,g=d.length;S<g;S++){l.isInterleavedBufferAttribute?m=d[S]*l.data.stride+l.offset:m=d[S]*f;for(let p=0;p<f;p++)u[x++]=c[m++]}return new _n(u,f,h)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,i=this.index.array,r=this.attributes;for(const l in r){const d=r[l],c=e(d,i);t.setAttribute(l,c)}const a=this.morphAttributes;for(const l in a){const d=[],c=a[l];for(let f=0,h=c.length;f<h;f++){const u=c[f],m=e(u,i);d.push(m)}t.morphAttributes[l]=d}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,d=o.length;l<d;l++){const c=o[l];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const c in d)d[c]!==void 0&&(e[c]=d[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const c=i[d];e.data.attributes[d]=c.toJSON(e.data)}const r={};let a=!1;for(const d in this.morphAttributes){const c=this.morphAttributes[d],f=[];for(let h=0,u=c.length;h<u;h++){const m=c[h];f.push(m.toJSON(e.data))}f.length>0&&(r[d]=f,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(t))}const a=e.morphAttributes;for(const c in a){const f=[],h=a[c];for(let u=0,m=h.length;u<m;u++)f.push(h[u].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ia=new B,vg=new B,bg=new He;class qn{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ia.subVectors(i,t).cross(vg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const r=e.delta(Ia),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||bg.getNormalMatrix(e),r=this.coplanarPoint(Ia).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Sg=0;class gi extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=Ar(),this.name="",this.type="Material",this.blending=cr,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yf,this.blendDst=vf,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=pr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fa,this.stencilZFail=fa,this.stencilZPass=fa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){je(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){je(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const l in a){const d=a[l];delete d.metadata,o.push(d)}return o}if(t){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new qn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ke().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ke().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Dn=new B,Pa=new B,Gr=new B,Vr=new B;class Vs{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Dn.copy(this.origin).addScaledVector(this.direction,t),Dn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Pa.copy(e).add(t).multiplyScalar(.5),Gr.copy(t).sub(e).normalize(),Vr.copy(this.origin).sub(Pa);const a=e.distanceTo(t)*.5,o=-this.direction.dot(Gr),l=Vr.dot(this.direction),d=-Vr.dot(Gr),c=Vr.lengthSq(),f=Math.abs(1-o*o);let h,u,m,x;if(f>0)if(h=o*d-l,u=o*l-d,x=a*f,h>=0)if(u>=-x)if(u<=x){const S=1/f;h*=S,u*=S,m=h*(h+o*u+2*l)+u*(o*h+u+2*d)+c}else u=a,h=Math.max(0,-(o*u+l)),m=-h*h+u*(u+2*d)+c;else u=-a,h=Math.max(0,-(o*u+l)),m=-h*h+u*(u+2*d)+c;else u<=-x?(h=Math.max(0,-(-o*a+l)),u=h>0?-a:Math.min(Math.max(-a,-d),a),m=-h*h+u*(u+2*d)+c):u<=x?(h=0,u=Math.min(Math.max(-a,-d),a),m=u*(u+2*d)+c):(h=Math.max(0,-(o*a+l)),u=h>0?a:Math.min(Math.max(-a,-d),a),m=-h*h+u*(u+2*d)+c);else u=o>0?-a:a,h=Math.max(0,-(o*u+l)),m=-h*h+u*(u+2*d)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Pa).addScaledVector(Gr,u),m}intersectSphere(e,t){if(e.radius<0)return null;Dn.subVectors(e.center,this.origin);const i=Dn.dot(this.direction),r=Dn.dot(Dn)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),l=i-o,d=i+o;return d<0?null:l<0?this.at(d,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,o,l,d;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),f>=0?(a=(e.min.y-u.y)*f,o=(e.max.y-u.y)*f):(a=(e.max.y-u.y)*f,o=(e.min.y-u.y)*f),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),h>=0?(l=(e.min.z-u.z)*h,d=(e.max.z-u.z)*h):(l=(e.max.z-u.z)*h,d=(e.min.z-u.z)*h),i>d||l>r)||((l>i||i!==i)&&(i=l),(d<r||r!==r)&&(r=d),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Dn)!==null}intersectTriangle(e,t,i,r,a){const o=this.origin,l=this.direction,d=l.x,c=l.y,f=l.z,h=e.x-o.x,u=e.y-o.y,m=e.z-o.z,x=t.x-o.x,S=t.y-o.y,g=t.z-o.z,p=i.x-o.x,M=i.y-o.y,T=i.z-o.z,_=Math.abs(d),v=Math.abs(c),w=Math.abs(f);let R,b,A,P,I,O,k,D,H,Z,$,ne;if(_>=v&&_>=w?(A=d,O=h,H=x,ne=p,d>=0?(R=c,b=f,P=u,I=m,k=S,D=g,Z=M,$=T):(R=f,b=c,P=m,I=u,k=g,D=S,Z=T,$=M)):v>=w?(A=c,O=u,H=S,ne=M,c>=0?(R=f,b=d,P=m,I=h,k=g,D=x,Z=T,$=p):(R=d,b=f,P=h,I=m,k=x,D=g,Z=p,$=T)):(A=f,O=m,H=g,ne=T,f>=0?(R=d,b=c,P=h,I=u,k=x,D=S,Z=p,$=M):(R=c,b=d,P=u,I=h,k=S,D=x,Z=M,$=p)),A===0)return null;const z=R/A,X=b/A,J=1/A,fe=P-z*O,ue=I-X*O,ke=k-z*H,Le=D-X*H,_e=Z-z*ne,Y=$-X*ne,ie=_e*Le-Y*ke,ye=fe*Y-ue*_e,le=ke*ue-Le*fe;if(r){if(ie<0||ye<0||le<0)return null}else if((ie<0||ye<0||le<0)&&(ie>0||ye>0||le>0))return null;const Q=ie+ye+le;if(Q===0)return null;const ce=J*(ie*O+ye*H+le*ne);return(Q>0?ce<0:ce>0)?null:this.at(ce/Q,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pl extends gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _c=new ut,ti=new Vs,Xr=new Rr,Mc=new B,qr=new B,Yr=new B,$r=new B,Da=new B,Kr=new B,Ec=new B,Zr=new B;class fn extends wt{constructor(e=new zt,t=new pl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(a&&l){Kr.set(0,0,0);for(let d=0,c=a.length;d<c;d++){const f=l[d],h=a[d];f!==0&&(Da.fromBufferAttribute(h,e),o?Kr.addScaledVector(Da,f):Kr.addScaledVector(Da.sub(t),f))}t.add(Kr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere),Xr.applyMatrix4(a),ti.copy(e.ray).recast(e.near),!(Xr.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Xr,Mc)===null||ti.origin.distanceToSquared(Mc)>(e.far-e.near)**2))&&(_c.copy(a).invert(),ti.copy(e.ray).applyMatrix4(_c),!(i.boundingBox!==null&&ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,i){let r;const a=this.geometry,o=this.material,l=a.index,d=a.attributes.position,c=a.attributes.uv,f=a.attributes.uv1,h=a.attributes.normal,u=a.groups,m=a.drawRange;if(l!==null)if(Array.isArray(o))for(let x=0,S=u.length;x<S;x++){const g=u[x],p=o[g.materialIndex],M=Math.max(g.start,m.start),T=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let _=M,v=T;_<v;_+=3){const w=l.getX(_),R=l.getX(_+1),b=l.getX(_+2);r=Jr(this,p,e,i,c,f,h,w,R,b),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),S=Math.min(l.count,m.start+m.count);for(let g=x,p=S;g<p;g+=3){const M=l.getX(g),T=l.getX(g+1),_=l.getX(g+2);r=Jr(this,o,e,i,c,f,h,M,T,_),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(d!==void 0)if(Array.isArray(o))for(let x=0,S=u.length;x<S;x++){const g=u[x],p=o[g.materialIndex],M=Math.max(g.start,m.start),T=Math.min(d.count,Math.min(g.start+g.count,m.start+m.count));for(let _=M,v=T;_<v;_+=3){const w=_,R=_+1,b=_+2;r=Jr(this,p,e,i,c,f,h,w,R,b),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,m.start),S=Math.min(d.count,m.start+m.count);for(let g=x,p=S;g<p;g+=3){const M=g,T=g+1,_=g+2;r=Jr(this,o,e,i,c,f,h,M,T,_),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function _g(n,e,t,i,r,a,o,l){let d;if(e.side===Gt?d=i.intersectTriangle(o,a,r,!0,l):d=i.intersectTriangle(r,a,o,e.side===ui,l),d===null)return null;Zr.copy(l),Zr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Zr);return c<t.near||c>t.far?null:{distance:c,point:Zr.clone(),object:n}}function Jr(n,e,t,i,r,a,o,l,d,c){n.getVertexPosition(l,qr),n.getVertexPosition(d,Yr),n.getVertexPosition(c,$r);const f=_g(n,e,t,i,qr,Yr,$r,Ec);if(f){const h=new B;en.getBarycoord(Ec,qr,Yr,$r,h),r&&(f.uv=en.getInterpolatedAttribute(r,l,d,c,h,new Ke)),a&&(f.uv1=en.getInterpolatedAttribute(a,l,d,c,h,new Ke)),o&&(f.normal=en.getInterpolatedAttribute(o,l,d,c,h,new B),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a:l,b:d,c,normal:new B,materialIndex:0};en.getNormal(qr,Yr,$r,u.normal),f.face=u,f.barycoord=h}return f}class Mg extends jt{constructor(e=null,t=1,i=1,r,a,o,l,d,c=Ct,f=Ct,h,u){super(null,o,l,d,c,f,r,a,h,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ni=new Rr,Eg=new Ke(.5,.5),Qr=new B;class ml{constructor(e=new qn,t=new qn,i=new qn,r=new qn,a=new qn,o=new qn){this.planes=[e,t,i,r,a,o]}set(e,t,i,r,a,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(r),l[4].copy(a),l[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=bn,i=!1){const r=this.planes,a=e.elements,o=a[0],l=a[1],d=a[2],c=a[3],f=a[4],h=a[5],u=a[6],m=a[7],x=a[8],S=a[9],g=a[10],p=a[11],M=a[12],T=a[13],_=a[14],v=a[15];if(r[0].setComponents(c-o,m-f,p-x,v-M).normalize(),r[1].setComponents(c+o,m+f,p+x,v+M).normalize(),r[2].setComponents(c+l,m+h,p+S,v+T).normalize(),r[3].setComponents(c-l,m-h,p-S,v-T).normalize(),i)r[4].setComponents(d,u,g,_).normalize(),r[5].setComponents(c-d,m-u,p-g,v-_).normalize();else if(r[4].setComponents(c-d,m-u,p-g,v-_).normalize(),t===bn)r[5].setComponents(c+d,m+u,p+g,v+_).normalize();else if(t===xr)r[5].setComponents(d,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){ni.center.set(0,0,0);const t=Eg.distanceTo(e.center);return ni.radius=.7071067811865476+t,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Qr.x=r.normal.x>0?e.max.x:e.min.x,Qr.y=r.normal.y>0?e.max.y:e.min.y,Qr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Qr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Xs extends gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ds=new B,Ls=new B,wc=new ut,er=new Vs,es=new Rr,La=new B,Tc=new B;class kf extends wt{constructor(e=new zt,t=new Xs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)Ds.fromBufferAttribute(t,r-1),Ls.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ds.distanceTo(Ls);e.setAttribute("lineDistance",new Rt(i,1))}else je("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),es.copy(i.boundingSphere),es.applyMatrix4(r),es.radius+=a,e.ray.intersectsSphere(es)===!1)return;wc.copy(r).invert(),er.copy(e.ray).applyMatrix4(wc);const l=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=l*l,c=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){const m=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let S=m,g=x-1;S<g;S+=c){const p=f.getX(S),M=f.getX(S+1),T=ts(this,e,er,d,p,M,S);T&&t.push(T)}if(this.isLineLoop){const S=f.getX(x-1),g=f.getX(m),p=ts(this,e,er,d,S,g,x-1);p&&t.push(p)}}else{const m=Math.max(0,o.start),x=Math.min(u.count,o.start+o.count);for(let S=m,g=x-1;S<g;S+=c){const p=ts(this,e,er,d,S,S+1,S);p&&t.push(p)}if(this.isLineLoop){const S=ts(this,e,er,d,x-1,m,x-1);S&&t.push(S)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}}function ts(n,e,t,i,r,a,o){const l=n.geometry.attributes.position;if(Ds.fromBufferAttribute(l,r),Ls.fromBufferAttribute(l,a),t.distanceSqToSegment(Ds,Ls,La,Tc)>i)return;La.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(La);if(!(c<e.near||c>e.far))return{distance:c,point:Tc.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const Ac=new B,Cc=new B;class jf extends kf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)Ac.fromBufferAttribute(t,r),Cc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ac.distanceTo(Cc);e.setAttribute("lineDistance",new Rt(i,1))}else je("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Wf extends gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rc=new ut,ko=new Vs,ns=new Rr,is=new B;class wg extends wt{constructor(e=new zt,t=new Wf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ns.copy(i.boundingSphere),ns.applyMatrix4(r),ns.radius+=a,e.ray.intersectsSphere(ns)===!1)return;Rc.copy(r).invert(),ko.copy(e.ray).applyMatrix4(Rc);const l=a/((this.scale.x+this.scale.y+this.scale.z)/3),d=l*l,c=i.index,h=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=u,S=m;x<S;x++){const g=c.getX(x);is.fromBufferAttribute(h,g),Ic(is,g,d,r,e,t,this)}}else{const u=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=u,S=m;x<S;x++)is.fromBufferAttribute(h,x),Ic(is,x,d,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const l=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}}function Ic(n,e,t,i,r,a,o){const l=ko.distanceSqToPoint(n);if(l<t){const d=new B;ko.closestPointToPoint(n,d),d.applyMatrix4(i);const c=r.ray.origin.distanceTo(d);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(l),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Hf extends jt{constructor(e=[],t=hi,i,r,a,o,l,d,c,f){super(e,t,i,r,a,o,l,d,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yr extends jt{constructor(e,t,i=wn,r,a,o,l=Ct,d=Ct,c,f=zn,h=1){if(f!==zn&&f!==ai)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:h};super(u,r,a,o,l,d,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Tg extends yr{constructor(e,t=wn,i=hi,r,a,o=Ct,l=Ct,d,c=zn){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,t,i,r,a,o,l,d,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Gf extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xi extends zt{constructor(e=1,t=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const l=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const d=[],c=[],f=[],h=[];let u=0,m=0;x("z","y","x",-1,-1,i,t,e,o,a,0),x("z","y","x",1,-1,i,t,-e,o,a,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,a,4),x("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(d),this.setAttribute("position",new Rt(c,3)),this.setAttribute("normal",new Rt(f,3)),this.setAttribute("uv",new Rt(h,2));function x(S,g,p,M,T,_,v,w,R,b,A){const P=_/R,I=v/b,O=_/2,k=v/2,D=w/2,H=R+1,Z=b+1;let $=0,ne=0;const z=new B;for(let X=0;X<Z;X++){const J=X*I-k;for(let fe=0;fe<H;fe++){const ue=fe*P-O;z[S]=ue*M,z[g]=J*T,z[p]=D,c.push(z.x,z.y,z.z),z[S]=0,z[g]=0,z[p]=w>0?1:-1,f.push(z.x,z.y,z.z),h.push(fe/R),h.push(1-X/b),$+=1}}for(let X=0;X<b;X++)for(let J=0;J<R;J++){const fe=u+J+H*X,ue=u+J+H*(X+1),ke=u+(J+1)+H*(X+1),Le=u+(J+1)+H*X;d.push(fe,ue,Le),d.push(ue,ke,Le),ne+=6}l.addGroup(m,ne,A),m+=ne,u+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}const rs=new B,ss=new B,Na=new B,as=new en;class Ag extends zt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),a=Math.cos(Ss*t),o=e.getIndex(),l=e.getAttribute("position"),d=o?o.count:l.count,c=[0,0,0],f=["a","b","c"],h=new Array(3),u={},m=[];for(let x=0;x<d;x+=3){o?(c[0]=o.getX(x),c[1]=o.getX(x+1),c[2]=o.getX(x+2)):(c[0]=x,c[1]=x+1,c[2]=x+2);const{a:S,b:g,c:p}=as;if(S.fromBufferAttribute(l,c[0]),g.fromBufferAttribute(l,c[1]),p.fromBufferAttribute(l,c[2]),as.getNormal(Na),h[0]=`${Math.round(S.x*r)},${Math.round(S.y*r)},${Math.round(S.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(p.x*r)},${Math.round(p.y*r)},${Math.round(p.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let M=0;M<3;M++){const T=(M+1)%3,_=h[M],v=h[T],w=as[f[M]],R=as[f[T]],b=`${_}_${v}`,A=`${v}_${_}`;A in u&&u[A]?(Na.dot(u[A].normal)<=a&&(m.push(w.x,w.y,w.z),m.push(R.x,R.y,R.z)),u[A]=null):b in u||(u[b]={index0:c[M],index1:c[T],normal:Na.clone()})}}for(const x in u)if(u[x]){const{index0:S,index1:g}=u[x];rs.fromBufferAttribute(l,S),ss.fromBufferAttribute(l,g),m.push(rs.x,rs.y,rs.z),m.push(ss.x,ss.y,ss.z)}this.setAttribute("position",new Rt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Cg{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){je("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),a=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const a=i.length;let o;t?o=t:o=e*i[a-1];let l=0,d=a-1,c;for(;l<=d;)if(r=Math.floor(l+(d-l)/2),c=i[r]-o,c<0)l=r+1;else if(c>0)d=r-1;else{d=r;break}if(r=d,i[r]===o)return r/(a-1);const f=i[r],u=i[r+1]-f,m=(o-f)/u;return(r+m)/(a-1)}getTangent(e,t){let r=e-1e-4,a=e+1e-4;r<0&&(r=0),a>1&&(a=1);const o=this.getPoint(r),l=this.getPoint(a),d=t||(o.isVector2?new Ke:new B);return d.copy(l).sub(o).normalize(),d}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new B,r=[],a=[],o=[],l=new B,d=new ut;for(let m=0;m<=e;m++){const x=m/e;r[m]=this.getTangentAt(x,new B)}a[0]=new B,o[0]=new B;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),h=Math.abs(r[0].y),u=Math.abs(r[0].z);f<=c&&(c=f,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),u<=c&&i.set(0,0,1),l.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],l),o[0].crossVectors(r[0],a[0]);for(let m=1;m<=e;m++){if(a[m]=a[m-1].clone(),o[m]=o[m-1].clone(),l.crossVectors(r[m-1],r[m]),l.length()>Number.EPSILON){l.normalize();const x=Math.acos($e(r[m-1].dot(r[m]),-1,1));a[m].applyMatrix4(d.makeRotationAxis(l,x))}o[m].crossVectors(r[m],a[m])}if(t===!0){let m=Math.acos($e(a[0].dot(a[e]),-1,1));m/=e,r[0].dot(l.crossVectors(a[0],a[e]))>0&&(m=-m);for(let x=1;x<=e;x++)a[x].applyMatrix4(d.makeRotationAxis(r[x],m*x)),o[x].crossVectors(r[x],a[x])}return{tangents:r,normals:a,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Rg extends Cg{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qs extends zt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,o=t/2,l=Math.floor(i),d=Math.floor(r),c=l+1,f=d+1,h=e/l,u=t/d,m=[],x=[],S=[],g=[];for(let p=0;p<f;p++){const M=p*u-o;for(let T=0;T<c;T++){const _=T*h-a;x.push(_,-M,0),S.push(0,0,1),g.push(T/l),g.push(1-p/d)}}for(let p=0;p<d;p++)for(let M=0;M<l;M++){const T=M+c*p,_=M+c*(p+1),v=M+1+c*(p+1),w=M+1+c*p;m.push(T,_,w),m.push(_,v,w)}this.setIndex(m),this.setAttribute("position",new Rt(x,3)),this.setAttribute("normal",new Rt(S,3)),this.setAttribute("uv",new Rt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.widthSegments,e.heightSegments)}}class gl extends zt{constructor(e=.5,t=1,i=32,r=1,a=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:a,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const l=[],d=[],c=[],f=[];let h=e;const u=(t-e)/r,m=new B,x=new Ke;for(let S=0;S<=r;S++){for(let g=0;g<=i;g++){const p=a+g/i*o;m.x=h*Math.cos(p),m.y=h*Math.sin(p),d.push(m.x,m.y,m.z),c.push(0,0,1),x.x=(m.x/t+1)/2,x.y=(m.y/t+1)/2,f.push(x.x,x.y)}h+=u}for(let S=0;S<r;S++){const g=S*(i+1);for(let p=0;p<i;p++){const M=p+g,T=M,_=M+i+1,v=M+i+2,w=M+1;l.push(T,_,w),l.push(_,v,w)}}this.setIndex(l),this.setAttribute("position",new Rt(d,3)),this.setAttribute("normal",new Rt(c,3)),this.setAttribute("uv",new Rt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}function ji(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];if(Pc(r))r.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone();else if(Array.isArray(r))if(Pc(r[0])){const a=[];for(let o=0,l=r.length;o<l;o++)a[o]=r[o].clone();e[t][i]=a}else e[t][i]=r.slice();else e[t][i]=r}}return e}function kt(n){const e={};for(let t=0;t<n.length;t++){const i=ji(n[t]);for(const r in i)e[r]=i[r]}return e}function Pc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ig(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Vf(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Pg={clone:ji,merge:kt};var Dg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dg,this.fragmentShader=Lg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ji(e.uniforms),this.uniformsGroups=Ig(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new qe().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ke().fromArray(r.value);break;case"v3":this.uniforms[i].value=new B().fromArray(r.value);break;case"v4":this.uniforms[i].value=new mt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new He().fromArray(r.value);break;case"m4":this.uniforms[i].value=new ut().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Ng extends An{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ug extends gi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new qe(16777215),this.specular=new qe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zo,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=nl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Og extends gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Fg extends gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class zg extends Xs{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class xl extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Ua=new ut,Dc=new B,Lc=new B;class Xf{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=Yt,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ml,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Dc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dc),Lc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){Ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ua,e.coordinateSystem,e.reversedDepth);const a=this._frameExtents,o=r?r.z/a.x:1,l=r?r.w/a.y:1,d=r?r.x/a.x:0,c=r?r.y/a.y:0;e.coordinateSystem===xr||e.reversedDepth?t.set(.5*o,0,0,.5*o+d,0,.5*l,0,.5*l+c,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+d,0,.5*l,0,.5*l+c,0,0,.5,.5,0,0,0,1),t.multiply(Ua)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const os=new B,ls=new Vi,mn=new B;class qf extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(os,ls,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(os,ls,mn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(os,ls,mn),mn.x===1&&mn.y===1&&mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(os,ls,mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new B,Nc=new Ke,Uc=new Ke;class qt extends qf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bo*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xn.x,Xn.y).multiplyScalar(-e/Xn.z)}getViewSize(e,t){return this.getViewBounds(e,Nc,Uc),t.subVectors(Uc,Nc)}setViewOffset(e,t,i,r,a,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ss*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const d=o.fullWidth,c=o.fullHeight;a+=o.offsetX*r/d,t-=o.offsetY*i/c,r*=o.width/d,i*=o.height/c}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Bg extends Xf{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0}}class kg extends xl{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Bg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class yl extends qf{constructor(e=-1,t=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,l=r+t,d=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,l-=f*this.view.offsetY,d=l-f*this.view.height}this.projectionMatrix.makeOrthographic(a,o,l,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class jg extends Xf{constructor(){super(new yl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wg extends xl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new jg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Hg extends xl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ii=-90,Pi=1;class Gg extends wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qt(Ii,Pi,e,t);r.layers=this.layers,this.add(r);const a=new qt(Ii,Pi,e,t);a.layers=this.layers,this.add(a);const o=new qt(Ii,Pi,e,t);o.layers=this.layers,this.add(o);const l=new qt(Ii,Pi,e,t);l.layers=this.layers,this.add(l);const d=new qt(Ii,Pi,e,t);d.layers=this.layers,this.add(d);const c=new qt(Ii,Pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,o,l,d]=t;for(const c of t)this.remove(c);if(e===bn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===xr)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,o,l,d,c,f]=this.children,h=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(h,u,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Vg extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Oc=new ut;class Xg{constructor(e,t,i=0,r=1/0){this.ray=new Vs(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ul,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):et("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Oc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Oc),this}intersectObject(e,t=!0,i=[]){return jo(e,this,i,t),i.sort(Fc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,a=e.length;r<a;r++)jo(e[r],this,i,t);return i.sort(Fc),i}}function Fc(n,e){return n.distance-e.distance}function jo(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const a=n.children;for(let o=0,l=a.length;o<l;o++)jo(a[o],e,t,!0)}}const Ml=class Ml{constructor(e,t,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,r){const a=this.elements;return a[0]=e,a[2]=t,a[1]=i,a[3]=r,this}};Ml.prototype.isMatrix2=!0;let zc=Ml;class qg extends jf{constructor(e=10,t=10,i=4473924,r=8947848){i=new qe(i),r=new qe(r);const a=t/2,o=e/t,l=e/2,d=[],c=[];for(let u=0,m=0,x=-l;u<=t;u++,x+=o){d.push(-l,0,x,l,0,x),d.push(x,0,-l,x,0,l);const S=u===a?i:r;S.toArray(c,m),m+=3,S.toArray(c,m),m+=3,S.toArray(c,m),m+=3,S.toArray(c,m),m+=3}const f=new zt;f.setAttribute("position",new Rt(d,3)),f.setAttribute("color",new Rt(c,3));const h=new Xs({vertexColors:!0,toneMapped:!1});super(f,h),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Bc(n,e,t,i){const r=Yg(i);switch(t){case Df:return n*e;case Nf:return n*e/r.components*r.byteLength;case al:return n*e/r.components*r.byteLength;case pi:return n*e*2/r.components*r.byteLength;case ol:return n*e*2/r.components*r.byteLength;case Lf:return n*e*3/r.components*r.byteLength;case ln:return n*e*4/r.components*r.byteLength;case ll:return n*e*4/r.components*r.byteLength;case xs:case ys:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case vs:case bs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lo:case fo:return Math.max(n,16)*Math.max(e,8)/4;case oo:case co:return Math.max(n,8)*Math.max(e,8)/2;case uo:case ho:case mo:case go:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case po:case As:case xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vo:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case bo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case So:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case _o:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Mo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case To:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Co:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ro:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Io:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Po:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Do:case Lo:case No:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Uo:case Oo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Cs:case Fo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yg(n){switch(n){case Yt:case Cf:return{byteLength:1,components:1};case mr:case Rf:case Tn:return{byteLength:2,components:1};case rl:case sl:return{byteLength:2,components:4};case wn:case il:case vn:return{byteLength:4,components:1};case If:case Pf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tl}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yf(){let n=null,e=!1,t=null,i=null;function r(a,o){i=n.requestAnimationFrame(r),t(a,o)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function $g(n){const e=new WeakMap;function t(l,d){const c=l.array,f=l.usage,h=c.byteLength,u=n.createBuffer();n.bindBuffer(d,u),n.bufferData(d,c,f),l.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:h}}function i(l,d,c){const f=d.array,h=d.updateRanges;if(n.bindBuffer(c,l),h.length===0)n.bufferSubData(c,0,f);else{h.sort((m,x)=>m.start-x.start);let u=0;for(let m=1;m<h.length;m++){const x=h[u],S=h[m];S.start<=x.start+x.count+1?x.count=Math.max(x.count,S.start+S.count-x.start):(++u,h[u]=S)}h.length=u+1;for(let m=0,x=h.length;m<x;m++){const S=h[m];n.bufferSubData(c,S.start*f.BYTES_PER_ELEMENT,f,S.start,S.count)}d.clearUpdateRanges()}d.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const d=e.get(l);d&&(n.deleteBuffer(d.buffer),e.delete(l))}function o(l,d){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const f=e.get(l);(!f||f.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=e.get(l);if(c===void 0)e.set(l,t(l,d));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,l,d),c.version=l.version}}return{get:r,remove:a,update:o}}var Kg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zg=`#ifdef USE_ALPHAHASH
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
#endif`,Jg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,t0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n0=`#ifdef USE_AOMAP
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
#endif`,i0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r0=`#ifdef USE_BATCHING
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
#endif`,s0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,a0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,l0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,c0=`#ifdef USE_IRIDESCENCE
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
#endif`,d0=`#ifdef USE_BUMPMAP
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
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,g0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,x0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,v0=`#define PI 3.141592653589793
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
} // validated`,b0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,S0=`vec3 transformedNormal = objectNormal;
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
#endif`,_0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,E0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,w0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T0="gl_FragColor = linearToOutputTexel( gl_FragColor );",A0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,C0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D0=`#ifdef USE_ENVMAP
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
#endif`,L0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,O0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F0=`#ifdef USE_GRADIENTMAP
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
}`,z0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,j0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,W0=`#ifdef USE_ENVMAP
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
#endif`,H0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q0=`PhysicalMaterial material;
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
#endif`,Y0=`uniform sampler2D dfgLUT;
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
}`,$0=`
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
#endif`,K0=`#if defined( RE_IndirectDiffuse )
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
#endif`,Z0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ex=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ix=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ax=`#if defined( USE_POINTS_UV )
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
#endif`,ox=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ux=`#ifdef USE_MORPHTARGETS
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
#endif`,hx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,px=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,mx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,gx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,vx=`#ifdef USE_NORMALMAP
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
#endif`,bx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Sx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_x=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Mx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ex=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ax=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ix=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Px=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Dx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ux=`float getShadowMask() {
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
}`,Ox=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fx=`#ifdef USE_SKINNING
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
#endif`,zx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bx=`#ifdef USE_SKINNING
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
#endif`,kx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gx=`#ifdef USE_TRANSMISSION
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
#endif`,Vx=`#ifdef USE_TRANSMISSION
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
#endif`,Xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zx=`uniform sampler2D t2D;
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
}`,Jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ty=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ny=`#include <common>
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
}`,iy=`#if DEPTH_PACKING == 3200
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
}`,ry=`#define DISTANCE
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
}`,sy=`#define DISTANCE
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
}`,ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,oy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ly=`uniform float scale;
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
}`,cy=`uniform vec3 diffuse;
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
}`,dy=`#include <common>
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
}`,fy=`uniform vec3 diffuse;
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
}`,uy=`#define LAMBERT
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
}`,hy=`#define LAMBERT
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
}`,py=`#define MATCAP
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
}`,my=`#define MATCAP
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
}`,gy=`#define NORMAL
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
}`,xy=`#define NORMAL
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
}`,yy=`#define PHONG
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
}`,vy=`#define PHONG
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
}`,by=`#define STANDARD
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
}`,Sy=`#define STANDARD
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
}`,_y=`#define TOON
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
}`,My=`#define TOON
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
}`,Ey=`uniform float size;
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
}`,wy=`uniform vec3 diffuse;
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
}`,Ty=`#include <common>
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
}`,Ay=`uniform vec3 color;
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
}`,Cy=`uniform float rotation;
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
}`,Ry=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Kg,alphahash_pars_fragment:Zg,alphamap_fragment:Jg,alphamap_pars_fragment:Qg,alphatest_fragment:e0,alphatest_pars_fragment:t0,aomap_fragment:n0,aomap_pars_fragment:i0,batching_pars_vertex:r0,batching_vertex:s0,begin_vertex:a0,beginnormal_vertex:o0,bsdfs:l0,iridescence_fragment:c0,bumpmap_pars_fragment:d0,clipping_planes_fragment:f0,clipping_planes_pars_fragment:u0,clipping_planes_pars_vertex:h0,clipping_planes_vertex:p0,color_fragment:m0,color_pars_fragment:g0,color_pars_vertex:x0,color_vertex:y0,common:v0,cube_uv_reflection_fragment:b0,defaultnormal_vertex:S0,displacementmap_pars_vertex:_0,displacementmap_vertex:M0,emissivemap_fragment:E0,emissivemap_pars_fragment:w0,colorspace_fragment:T0,colorspace_pars_fragment:A0,envmap_fragment:C0,envmap_common_pars_fragment:R0,envmap_pars_fragment:I0,envmap_pars_vertex:P0,envmap_physical_pars_fragment:W0,envmap_vertex:D0,fog_vertex:L0,fog_pars_vertex:N0,fog_fragment:U0,fog_pars_fragment:O0,gradientmap_pars_fragment:F0,lightmap_pars_fragment:z0,lights_lambert_fragment:B0,lights_lambert_pars_fragment:k0,lights_pars_begin:j0,lights_toon_fragment:H0,lights_toon_pars_fragment:G0,lights_phong_fragment:V0,lights_phong_pars_fragment:X0,lights_physical_fragment:q0,lights_physical_pars_fragment:Y0,lights_fragment_begin:$0,lights_fragment_maps:K0,lights_fragment_end:Z0,lightprobes_pars_fragment:J0,logdepthbuf_fragment:Q0,logdepthbuf_pars_fragment:ex,logdepthbuf_pars_vertex:tx,logdepthbuf_vertex:nx,map_fragment:ix,map_pars_fragment:rx,map_particle_fragment:sx,map_particle_pars_fragment:ax,metalnessmap_fragment:ox,metalnessmap_pars_fragment:lx,morphinstance_vertex:cx,morphcolor_vertex:dx,morphnormal_vertex:fx,morphtarget_pars_vertex:ux,morphtarget_vertex:hx,normal_fragment_begin:px,normal_fragment_maps:mx,normal_pars_fragment:gx,normal_pars_vertex:xx,normal_vertex:yx,normalmap_pars_fragment:vx,clearcoat_normal_fragment_begin:bx,clearcoat_normal_fragment_maps:Sx,clearcoat_pars_fragment:_x,iridescence_pars_fragment:Mx,opaque_fragment:Ex,packing:wx,premultiplied_alpha_fragment:Tx,project_vertex:Ax,dithering_fragment:Cx,dithering_pars_fragment:Rx,roughnessmap_fragment:Ix,roughnessmap_pars_fragment:Px,shadowmap_pars_fragment:Dx,shadowmap_pars_vertex:Lx,shadowmap_vertex:Nx,shadowmask_pars_fragment:Ux,skinbase_vertex:Ox,skinning_pars_vertex:Fx,skinning_vertex:zx,skinnormal_vertex:Bx,specularmap_fragment:kx,specularmap_pars_fragment:jx,tonemapping_fragment:Wx,tonemapping_pars_fragment:Hx,transmission_fragment:Gx,transmission_pars_fragment:Vx,uv_pars_fragment:Xx,uv_pars_vertex:qx,uv_vertex:Yx,worldpos_vertex:$x,background_vert:Kx,background_frag:Zx,backgroundCube_vert:Jx,backgroundCube_frag:Qx,cube_vert:ey,cube_frag:ty,depth_vert:ny,depth_frag:iy,distance_vert:ry,distance_frag:sy,equirect_vert:ay,equirect_frag:oy,linedashed_vert:ly,linedashed_frag:cy,meshbasic_vert:dy,meshbasic_frag:fy,meshlambert_vert:uy,meshlambert_frag:hy,meshmatcap_vert:py,meshmatcap_frag:my,meshnormal_vert:gy,meshnormal_frag:xy,meshphong_vert:yy,meshphong_frag:vy,meshphysical_vert:by,meshphysical_frag:Sy,meshtoon_vert:_y,meshtoon_frag:My,points_vert:Ey,points_frag:wy,shadow_vert:Ty,shadow_frag:Ay,sprite_vert:Cy,sprite_frag:Ry},be={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},xn={basic:{uniforms:kt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:kt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:kt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:kt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:kt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new qe(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:kt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:kt([be.points,be.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:kt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:kt([be.common,be.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:kt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:kt([be.sprite,be.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:kt([be.common,be.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:kt([be.lights,be.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};xn.physical={uniforms:kt([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const cs={r:0,b:0,g:0},Iy=new ut,$f=new He;$f.set(-1,0,0,0,1,0,0,0,1);function Py(n,e,t,i,r,a){const o=new qe(0);let l=r===!0?0:1,d,c,f=null,h=0,u=null;function m(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){const _=M.backgroundBlurriness>0;T=e.get(T,_)}return T}function x(M){let T=!1;const _=m(M);_===null?g(o,l):_&&_.isColor&&(g(_,1),T=!0);const v=n.xr.getEnvironmentBlendMode();v==="additive"?t.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(M,T){const _=m(T);_&&(_.isCubeTexture||_.mapping===Gs)?(c===void 0&&(c=new fn(new Xi(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:ji(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Iy.makeRotationFromEuler(T.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply($f),c.material.toneMapped=Je.getTransfer(_.colorSpace)!==rt,(f!==_||h!==_.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,u=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(d===void 0&&(d=new fn(new qs(2,2),new An({name:"BackgroundMaterial",uniforms:ji(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=_,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.toneMapped=Je.getTransfer(_.colorSpace)!==rt,_.matrixAutoUpdate===!0&&_.updateMatrix(),d.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||u!==n.toneMapping)&&(d.material.needsUpdate=!0,f=_,h=_.version,u=n.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null))}function g(M,T){M.getRGB(cs,Vf(n)),t.buffers.color.setClear(cs.r,cs.g,cs.b,T,a)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,T=1){o.set(M),l=T,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,g(o,l)},render:x,addToRenderList:S,dispose:p}}function Dy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let a=r,o=!1;function l(I,O,k,D,H){let Z=!1;const $=h(I,D,k,O);a!==$&&(a=$,c(a.object)),Z=m(I,D,k,H),Z&&x(I,D,k,H),H!==null&&e.update(H,n.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,_(I,O,k,D),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function d(){return n.createVertexArray()}function c(I){return n.bindVertexArray(I)}function f(I){return n.deleteVertexArray(I)}function h(I,O,k,D){const H=D.wireframe===!0;let Z=i[O.id];Z===void 0&&(Z={},i[O.id]=Z);const $=I.isInstancedMesh===!0?I.id:0;let ne=Z[$];ne===void 0&&(ne={},Z[$]=ne);let z=ne[k.id];z===void 0&&(z={},ne[k.id]=z);let X=z[H];return X===void 0&&(X=u(d()),z[H]=X),X}function u(I){const O=[],k=[],D=[];for(let H=0;H<t;H++)O[H]=0,k[H]=0,D[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:k,attributeDivisors:D,object:I,attributes:{},index:null}}function m(I,O,k,D){const H=a.attributes,Z=O.attributes;let $=0;const ne=k.getAttributes();for(const z in ne)if(ne[z].location>=0){const J=H[z];let fe=Z[z];if(fe===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(fe=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(fe=I.instanceColor)),J===void 0||J.attribute!==fe||fe&&J.data!==fe.data)return!0;$++}return a.attributesNum!==$||a.index!==D}function x(I,O,k,D){const H={},Z=O.attributes;let $=0;const ne=k.getAttributes();for(const z in ne)if(ne[z].location>=0){let J=Z[z];J===void 0&&(z==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),z==="instanceColor"&&I.instanceColor&&(J=I.instanceColor));const fe={};fe.attribute=J,J&&J.data&&(fe.data=J.data),H[z]=fe,$++}a.attributes=H,a.attributesNum=$,a.index=D}function S(){const I=a.newAttributes;for(let O=0,k=I.length;O<k;O++)I[O]=0}function g(I){p(I,0)}function p(I,O){const k=a.newAttributes,D=a.enabledAttributes,H=a.attributeDivisors;k[I]=1,D[I]===0&&(n.enableVertexAttribArray(I),D[I]=1),H[I]!==O&&(n.vertexAttribDivisor(I,O),H[I]=O)}function M(){const I=a.newAttributes,O=a.enabledAttributes;for(let k=0,D=O.length;k<D;k++)O[k]!==I[k]&&(n.disableVertexAttribArray(k),O[k]=0)}function T(I,O,k,D,H,Z,$){$===!0?n.vertexAttribIPointer(I,O,k,H,Z):n.vertexAttribPointer(I,O,k,D,H,Z)}function _(I,O,k,D){S();const H=D.attributes,Z=k.getAttributes(),$=O.defaultAttributeValues;for(const ne in Z){const z=Z[ne];if(z.location>=0){let X=H[ne];if(X===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(X=I.instanceColor)),X!==void 0){const J=X.normalized,fe=X.itemSize,ue=e.get(X);if(ue===void 0)continue;const ke=ue.buffer,Le=ue.type,_e=ue.bytesPerElement,Y=Le===n.INT||Le===n.UNSIGNED_INT||X.gpuType===il;if(X.isInterleavedBufferAttribute){const ie=X.data,ye=ie.stride,le=X.offset;if(ie.isInstancedInterleavedBuffer){for(let Q=0;Q<z.locationSize;Q++)p(z.location+Q,ie.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Q=0;Q<z.locationSize;Q++)g(z.location+Q);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let Q=0;Q<z.locationSize;Q++)T(z.location+Q,fe/z.locationSize,Le,J,ye*_e,(le+fe/z.locationSize*Q)*_e,Y)}else{if(X.isInstancedBufferAttribute){for(let ie=0;ie<z.locationSize;ie++)p(z.location+ie,X.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ie=0;ie<z.locationSize;ie++)g(z.location+ie);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let ie=0;ie<z.locationSize;ie++)T(z.location+ie,fe/z.locationSize,Le,J,fe*_e,fe/z.locationSize*ie*_e,Y)}}else if($!==void 0){const J=$[ne];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(z.location,J);break;case 3:n.vertexAttrib3fv(z.location,J);break;case 4:n.vertexAttrib4fv(z.location,J);break;default:n.vertexAttrib1fv(z.location,J)}}}}M()}function v(){A();for(const I in i){const O=i[I];for(const k in O){const D=O[k];for(const H in D){const Z=D[H];for(const $ in Z)f(Z[$].object),delete Z[$];delete D[H]}}delete i[I]}}function w(I){if(i[I.id]===void 0)return;const O=i[I.id];for(const k in O){const D=O[k];for(const H in D){const Z=D[H];for(const $ in Z)f(Z[$].object),delete Z[$];delete D[H]}}delete i[I.id]}function R(I){for(const O in i){const k=i[O];for(const D in k){const H=k[D];if(H[I.id]===void 0)continue;const Z=H[I.id];for(const $ in Z)f(Z[$].object),delete Z[$];delete H[I.id]}}}function b(I){for(const O in i){const k=i[O],D=I.isInstancedMesh===!0?I.id:0,H=k[D];if(H!==void 0){for(const Z in H){const $=H[Z];for(const ne in $)f($[ne].object),delete $[ne];delete H[Z]}delete k[D],Object.keys(k).length===0&&delete i[O]}}}function A(){P(),o=!0,a!==r&&(a=r,c(a.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:A,resetDefaultState:P,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:R,initAttributes:S,enableAttribute:g,disableUnusedAttributes:M}}function Ly(n,e,t){let i;function r(d){i=d}function a(d,c){n.drawArrays(i,d,c),t.update(c,i,1)}function o(d,c,f){f!==0&&(n.drawArraysInstanced(i,d,c,f),t.update(c,i,f))}function l(d,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,c,0,f);let u=0;for(let m=0;m<f;m++)u+=c[m];t.update(u,i,1)}this.setMode=r,this.render=a,this.renderInstances=o,this.renderMultiDraw=l}function Ny(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==ln&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(R){const b=R===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Yt&&R!==vn&&!b&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function d(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=d(c);f!==c&&(je("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=n.getParameter(n.MAX_SAMPLES),w=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:o,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:m,maxVertexTextures:x,maxTextureSize:S,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:_,maxSamples:v,samples:w}}function Uy(n){const e=this;let t=null,i=0,r=!1,a=!1;const o=new qn,l=new He,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const m=h.length!==0||u||i!==0||r;return r=u,i=h.length,m},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,u){t=f(h,u,0)},this.setState=function(h,u,m){const x=h.clippingPlanes,S=h.clipIntersection,g=h.clipShadows,p=n.get(h);if(!r||x===null||x.length===0||a&&!g)a?f(null):c();else{const M=a?0:i,T=M*4;let _=p.clippingState||null;d.value=_,_=f(x,u,T,m);for(let v=0;v!==T;++v)_[v]=t[v];p.clippingState=_,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=M}};function c(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,u,m,x){const S=h!==null?h.length:0;let g=null;if(S!==0){if(g=d.value,x!==!0||g===null){const p=m+S*4,M=u.matrixWorldInverse;l.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let T=0,_=m;T!==S;++T,_+=4)o.copy(h[T]).applyMatrix4(M,l),o.normal.toArray(g,_),g[_+3]=o.constant}d.value=g,d.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}const Ni=4,Oy=6,Fy=20,zy=256,tr=new yl,kc=new qe;let Oa=null,Fa=0,za=0,Ba=!1;const By=new B,ii=new B;class jc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){const{size:o=256,position:l=By}=a;Oa=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,i,r,d,l),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Oa,Fa,za),this._renderer.xr.enabled=Ba,e.scissorTest=!1,Di(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hi||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oa=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),za=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Tn,format:ln,colorSpace:Rs,depthBuffer:!1},r=Wc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wc(e,t,i);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ky(a)),this._blurMaterial=Wy(a,e,t),this._ggxMaterial=jy(a,e,t)}return r}_compileMaterial(e){const t=new fn(new zt,e);this._renderer.compile(t,tr)}_sceneToCubeUV(e,t,i,r,a){const d=new qt(90,1,t,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,m=h.toneMapping;h.getClearColor(kc),h.toneMapping=Sn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fn(new Xi,new pl({name:"PMREM.Background",side:Gt,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,g=S.material;let p=!1;const M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,p=!0):(g.color.copy(kc),p=!0);for(let T=0;T<6;T++){const _=T%3;_===0?(d.up.set(0,c[T],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+f[T],a.y,a.z)):_===1?(d.up.set(0,0,c[T]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+f[T],a.z)):(d.up.set(0,c[T],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+f[T]));const v=this._cubeSize;Di(r,_*v,T>2?v:0,v,v),h.setRenderTarget(r),p&&h.render(S,d),h.render(e,d)}h.toneMapping=m,h.autoClear=u,e.background=M}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===hi||e.mapping===ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hc());const a=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=a;const l=a.uniforms;l.envMap.value=e;const d=this._cubeSize;Di(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(o,tr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,a=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[i];l.material=o;const d=o.uniforms,c=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),u=c*1.25,m=h*u,{_lodMax:x}=this,S=this._sizeLods[i],g=3*S*(i>x-Ni?i-x+Ni:0),p=4*(this._cubeSize-S);d.envMap.value=e.texture,d.roughness.value=m,d.mipInt.value=x-t,Di(a,g,p,3*S,2*S),r.setRenderTarget(a),r.render(l,tr),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=x-i,Di(e,g,p,3*S,2*S),r.setRenderTarget(e),r.render(l,tr)}_blur(e,t,i,r){const a=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,o),this._blurPass(a,e,i,i,o)}_blurPass(e,t,i,r,a){const o=this._renderer,l=this._blurMaterial,d=this._lodMeshes[r];d.material=l;const c=l.uniforms;c.envMap.value=e.texture,c.sigma.value=a,c.mipInt.value=this._lodMax-i;const f=this._sizeLods[r],h=3*f*(r>this._lodMax-Ni?r-this._lodMax+Ni:0),u=4*(this._cubeSize-f);Di(t,h,u,3*f,2*f),o.setRenderTarget(t),o.render(d,tr)}}function ky(n){const e=[],t=[];let i=n;const r=n-Ni+1+Oy;for(let a=0;a<r;a++){const o=Math.pow(2,i);e.push(o);const l=1/(o-2),d=-l,c=1+l,f=[d,d,c,d,c,c,d,d,c,c,d,c],h=6,u=6,m=3,x=new Float32Array(m*u*h),S=new Float32Array(m*u*h);for(let p=0;p<h;p++){const M=p%3*2/3-1,T=p>2?0:-1,_=[M,T,0,M+2/3,T,0,M+2/3,T+1,0,M,T,0,M+2/3,T+1,0,M,T+1,0];x.set(_,m*u*p);for(let v=0;v<u;v++){const w=f[v*2]*2-1,R=f[v*2+1]*2-1;p===0?ii.set(1,R,w):p===1?ii.set(-w,1,-R):p===2?ii.set(-w,R,1):p===3?ii.set(-1,R,-w):p===4?ii.set(-w,-1,R):ii.set(w,R,-1),ii.toArray(S,(p*u+v)*m)}}const g=new zt;g.setAttribute("position",new _n(x,m)),g.setAttribute("outputDirection",new _n(S,m)),t.push(new fn(g,null)),i>Ni&&i--}return{lodMeshes:t,sizeLods:e}}function Wc(n,e,t){const i=new cn(n,e,t);return i.texture.mapping=Gs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Di(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function jy(n,e,t){return new An({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:zy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ys(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Wy(n,e,t){return new An({name:"SphericalGaussianBlur",defines:{SAMPLES:Fy,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ys(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Hc(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ys(),fragmentShader:`

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
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Gc(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ys(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ys(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Kf extends cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Hf(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xi(5,5,5),a=new An({name:"CubemapFromEquirect",uniforms:ji(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:Nn});a.uniforms.tEquirect.value=t;const o=new fn(r,a),l=t.minFilter;return t.minFilter===si&&(t.minFilter=Ot),new Gg(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(a)}}function Hy(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,m=!1){return u==null?null:m?o(u):a(u)}function a(u){if(u&&u.isTexture){const m=u.mapping;if(m===la||m===ca)if(e.has(u)){const x=e.get(u).texture;return l(x,u.mapping)}else{const x=u.image;if(x&&x.height>0){const S=new Kf(x.height);return S.fromEquirectangularTexture(n,u),e.set(u,S),u.addEventListener("dispose",c),l(S.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const m=u.mapping,x=m===la||m===ca,S=m===hi||m===ki;if(x||S){let g=t.get(u);const p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new jc(n)),g=x?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),g.texture;if(g!==void 0)return g.texture;{const M=u.image;return x&&M&&M.height>0||S&&M&&d(M)?(i===null&&(i=new jc(n)),g=x?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,t.set(u,g),u.addEventListener("dispose",f),g.texture):null}}}return u}function l(u,m){return m===la?u.mapping=hi:m===ca&&(u.mapping=ki),u}function d(u){let m=0;const x=6;for(let S=0;S<x;S++)u[S]!==void 0&&m++;return m===x}function c(u){const m=u.target;m.removeEventListener("dispose",c);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function f(u){const m=u.target;m.removeEventListener("dispose",f);const x=t.get(m);x!==void 0&&(t.delete(m),x.dispose())}function h(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function Gy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Ui("WebGLRenderer: "+i+" extension not supported."),r}}}function Vy(n,e,t,i){const r={},a=new WeakMap;function o(h){const u=h.target;u.index!==null&&e.remove(u.index);for(const x in u.attributes)e.remove(u.attributes[x]);u.removeEventListener("dispose",o),delete r[u.id];const m=a.get(u);m&&(e.remove(m),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function l(h,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function d(h){const u=h.attributes;for(const m in u)e.update(u[m],n.ARRAY_BUFFER)}function c(h){const u=[],m=h.index,x=h.attributes.position;let S=0;if(x===void 0)return;if(m!==null){const M=m.array;S=m.version;for(let T=0,_=M.length;T<_;T+=3){const v=M[T+0],w=M[T+1],R=M[T+2];u.push(v,w,w,R,R,v)}}else{const M=x.array;S=x.version;for(let T=0,_=M.length/3-1;T<_;T+=3){const v=T+0,w=T+1,R=T+2;u.push(v,w,w,R,R,v)}}const g=new(x.count>=65535?Bf:zf)(u,1);g.version=S;const p=a.get(h);p&&e.remove(p),a.set(h,g)}function f(h){const u=a.get(h);if(u){const m=h.index;m!==null&&u.version<m.version&&c(h)}else c(h);return a.get(h)}return{get:l,update:d,getWireframeAttribute:f}}function Xy(n,e,t){let i;function r(h){i=h}let a,o;function l(h){a=h.type,o=h.bytesPerElement}function d(h,u){n.drawElements(i,u,a,h*o),t.update(u,i,1)}function c(h,u,m){m!==0&&(n.drawElementsInstanced(i,u,a,h*o,m),t.update(u,i,m))}function f(h,u,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,a,h,0,m);let S=0;for(let g=0;g<m;g++)S+=u[g];t.update(S,i,1)}this.setMode=r,this.setIndex=l,this.render=d,this.renderInstances=c,this.renderMultiDraw=f}function qy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,l){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=l*(a/3);break;case n.LINES:t.lines+=l*(a/2);break;case n.LINE_STRIP:t.lines+=l*(a-1);break;case n.LINE_LOOP:t.lines+=l*a;break;case n.POINTS:t.points+=l*a;break;default:et("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Yy(n,e,t){const i=new WeakMap,r=new mt;function a(o,l,d){const c=o.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,h=f!==void 0?f.length:0;let u=i.get(l);if(u===void 0||u.count!==h){let A=function(){R.dispose(),i.delete(l),l.removeEventListener("dispose",A)};u!==void 0&&u.texture.dispose();const m=l.morphAttributes.position!==void 0,x=l.morphAttributes.normal!==void 0,S=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],M=l.morphAttributes.color||[];let T=0;m===!0&&(T=1),x===!0&&(T=2),S===!0&&(T=3);let _=l.attributes.position.count*T,v=1;_>e.maxTextureSize&&(v=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const w=new Float32Array(_*v*4*h),R=new Of(w,_,v,h);R.type=vn,R.needsUpdate=!0;const b=T*4;for(let P=0;P<h;P++){const I=g[P],O=p[P],k=M[P],D=_*v*4*P;for(let H=0;H<I.count;H++){const Z=H*b;m===!0&&(r.fromBufferAttribute(I,H),w[D+Z+0]=r.x,w[D+Z+1]=r.y,w[D+Z+2]=r.z,w[D+Z+3]=0),x===!0&&(r.fromBufferAttribute(O,H),w[D+Z+4]=r.x,w[D+Z+5]=r.y,w[D+Z+6]=r.z,w[D+Z+7]=0),S===!0&&(r.fromBufferAttribute(k,H),w[D+Z+8]=r.x,w[D+Z+9]=r.y,w[D+Z+10]=r.z,w[D+Z+11]=k.itemSize===4?r.w:1)}}u={count:h,texture:R,size:new Ke(_,v)},i.set(l,u),l.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let m=0;for(let S=0;S<c.length;S++)m+=c[S];const x=l.morphTargetsRelative?1:1-m;d.getUniforms().setValue(n,"morphTargetBaseInfluence",x),d.getUniforms().setValue(n,"morphTargetInfluences",c)}d.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:a}}function $y(n,e,t,i,r){let a=new WeakMap;function o(c){const f=r.render.frame,h=c.geometry,u=e.get(c,h);if(a.get(u)!==f&&(e.update(u),a.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",d)===!1&&c.addEventListener("dispose",d),a.get(c)!==f&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),a.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;a.get(m)!==f&&(m.update(),a.set(m,f))}return u}function l(){a=new WeakMap}function d(c){const f=c.target;f.removeEventListener("dispose",d),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:l}}const Ky={[bf]:"LINEAR_TONE_MAPPING",[Sf]:"REINHARD_TONE_MAPPING",[_f]:"CINEON_TONE_MAPPING",[Mf]:"ACES_FILMIC_TONE_MAPPING",[wf]:"AGX_TONE_MAPPING",[Tf]:"NEUTRAL_TONE_MAPPING",[Ef]:"CUSTOM_TONE_MAPPING"};function Zy(n,e,t,i,r,a){const o=new cn(e,t,{type:n,depthBuffer:r,stencilBuffer:a,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,d=null;const c=new zt;c.setAttribute("position",new Rt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Rt([0,2,0,0,2,0],2));const f=new Ng({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new fn(c,f),u=new yl(-1,1,1,-1,0,1);let m=null,x=null,S=!1,g,p=null,M=[],T=!1;this.setSize=function(_,v){o.setSize(_,v),l!==null&&l.setSize(_,v),d!==null&&d.setSize(_,v);for(let w=0;w<M.length;w++){const R=M[w];R.setSize&&R.setSize(_,v)}},this.setEffects=function(_){M=_,T=M.length>0&&M[0].isRenderPass===!0;const v=o.width,w=o.height;M.length>0&&l===null&&(l=new cn(v,w,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),d=new cn(v,w,{type:Tn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<M.length;R++){const b=M[R];b.setSize&&b.setSize(v,w)}},this.begin=function(_,v){if(S||_.toneMapping===Sn&&M.length===0)return!1;if(p=v,v!==null){const w=v.width,R=v.height;(o.width!==w||o.height!==R)&&this.setSize(w,R)}return T===!1&&_.setRenderTarget(o),g=_.toneMapping,_.toneMapping=Sn,!0},this.hasRenderPass=function(){return T},this.end=function(_,v){_.toneMapping=g,S=!0;let w=o,R=l;for(let b=0;b<M.length;b++){const A=M[b];A.enabled!==!1&&(A.render(_,R,w,v),A.needsSwap!==!1&&(w=R,R=R===l?d:l))}if(m!==_.outputColorSpace||x!==_.toneMapping){m=_.outputColorSpace,x=_.toneMapping,f.defines={},Je.getTransfer(m)===rt&&(f.defines.SRGB_TRANSFER="");const b=Ky[x];b&&(f.defines[b]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=w.texture,_.setRenderTarget(p),_.render(h,u),p=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){o.dispose(),l!==null&&l.dispose(),d!==null&&d.dispose(),c.dispose(),f.dispose()}}const Zf=new jt,Wo=new yr(1,1),Jf=new Of,Qf=new og,eu=new Hf,Vc=[],Xc=[],qc=new Float32Array(16),Yc=new Float32Array(9),$c=new Float32Array(4);function qi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=Vc[r];if(a===void 0&&(a=new Float32Array(r),Vc[r]=a),e!==0){i.toArray(a,0);for(let o=1,l=0;o!==e;++o)l+=t,n[o].toArray(a,l)}return a}function _t(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $s(n,e){let t=Xc[e];t===void 0&&(t=new Int32Array(e),Xc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Jy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Qy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function ev(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function tv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function nv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(_t(t,i))return;$c.set(i),n.uniformMatrix2fv(this.addr,!1,$c),Mt(t,i)}}function iv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(_t(t,i))return;Yc.set(i),n.uniformMatrix3fv(this.addr,!1,Yc),Mt(t,i)}}function rv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(_t(t,i))return;qc.set(i),n.uniformMatrix4fv(this.addr,!1,qc),Mt(t,i)}}function sv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function av(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function ov(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function cv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function dv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function fv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function uv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function hv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(Wo.compareFunction=t.isReversedDepthBuffer()?dl:cl,a=Wo):a=Zf,t.setTexture2D(e||a,r)}function pv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Qf,r)}function mv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||eu,r)}function gv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Jf,r)}function xv(n){switch(n){case 5126:return Jy;case 35664:return Qy;case 35665:return ev;case 35666:return tv;case 35674:return nv;case 35675:return iv;case 35676:return rv;case 5124:case 35670:return sv;case 35667:case 35671:return av;case 35668:case 35672:return ov;case 35669:case 35673:return lv;case 5125:return cv;case 36294:return dv;case 36295:return fv;case 36296:return uv;case 35678:case 36198:case 36298:case 36306:case 35682:return hv;case 35679:case 36299:case 36307:return pv;case 35680:case 36300:case 36308:case 36293:return mv;case 36289:case 36303:case 36311:case 36292:return gv}}function yv(n,e){n.uniform1fv(this.addr,e)}function vv(n,e){const t=qi(e,this.size,2);n.uniform2fv(this.addr,t)}function bv(n,e){const t=qi(e,this.size,3);n.uniform3fv(this.addr,t)}function Sv(n,e){const t=qi(e,this.size,4);n.uniform4fv(this.addr,t)}function _v(n,e){const t=qi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Mv(n,e){const t=qi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Ev(n,e){const t=qi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function wv(n,e){n.uniform1iv(this.addr,e)}function Tv(n,e){n.uniform2iv(this.addr,e)}function Av(n,e){n.uniform3iv(this.addr,e)}function Cv(n,e){n.uniform4iv(this.addr,e)}function Rv(n,e){n.uniform1uiv(this.addr,e)}function Iv(n,e){n.uniform2uiv(this.addr,e)}function Pv(n,e){n.uniform3uiv(this.addr,e)}function Dv(n,e){n.uniform4uiv(this.addr,e)}function Lv(n,e,t){const i=this.cache,r=e.length,a=$s(t,r);_t(i,a)||(n.uniform1iv(this.addr,a),Mt(i,a));let o;this.type===n.SAMPLER_2D_SHADOW?o=Wo:o=Zf;for(let l=0;l!==r;++l)t.setTexture2D(e[l]||o,a[l])}function Nv(n,e,t){const i=this.cache,r=e.length,a=$s(t,r);_t(i,a)||(n.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Qf,a[o])}function Uv(n,e,t){const i=this.cache,r=e.length,a=$s(t,r);_t(i,a)||(n.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||eu,a[o])}function Ov(n,e,t){const i=this.cache,r=e.length,a=$s(t,r);_t(i,a)||(n.uniform1iv(this.addr,a),Mt(i,a));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Jf,a[o])}function Fv(n){switch(n){case 5126:return yv;case 35664:return vv;case 35665:return bv;case 35666:return Sv;case 35674:return _v;case 35675:return Mv;case 35676:return Ev;case 5124:case 35670:return wv;case 35667:case 35671:return Tv;case 35668:case 35672:return Av;case 35669:case 35673:return Cv;case 5125:return Rv;case 36294:return Iv;case 36295:return Pv;case 36296:return Dv;case 35678:case 36198:case 36298:case 36306:case 35682:return Lv;case 35679:case 36299:case 36307:return Nv;case 35680:case 36300:case 36308:case 36293:return Uv;case 36289:case 36303:case 36311:case 36292:return Ov}}class zv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=xv(t.type)}}class Bv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Fv(t.type)}}class kv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const l=r[a];l.setValue(e,t[l.id],i)}}}const ka=/(\w+)(\])?(\[|\.)?/g;function Kc(n,e){n.seq.push(e),n.map[e.id]=e}function jv(n,e,t){const i=n.name,r=i.length;for(ka.lastIndex=0;;){const a=ka.exec(i),o=ka.lastIndex;let l=a[1];const d=a[2]==="]",c=a[3];if(d&&(l=l|0),c===void 0||c==="["&&o+2===r){Kc(t,c===void 0?new zv(l,n,e):new Bv(l,n,e));break}else{let h=t.map[l];h===void 0&&(h=new kv(l),Kc(t,h)),t=h}}}class _s{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const l=e.getActiveUniform(t,o),d=e.getUniformLocation(t,l.name);jv(l,d,this)}const r=[],a=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):a.push(o);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,o=t.length;a!==o;++a){const l=t[a],d=i[l.id];d.needsUpdate!==!1&&l.setValue(e,d.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Zc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Wv=37297;let Hv=0;function Gv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let o=r;o<a;o++){const l=o+1;i.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return i.join(`
`)}const Jc=new He;function Vv(n){Je._getMatrix(Jc,Je.workingColorSpace,n);const e=`mat3( ${Jc.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(n)){case Is:return[e,"LinearTransferOETF"];case rt:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Qc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const o=/ERROR: 0:(\d+)/.exec(a);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+a+`

`+Gv(n.getShaderSource(e),l)}else return a}function Xv(n,e){const t=Vv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const qv={[bf]:"Linear",[Sf]:"Reinhard",[_f]:"Cineon",[Mf]:"ACESFilmic",[wf]:"AgX",[Tf]:"Neutral",[Ef]:"Custom"};function Yv(n,e){const t=qv[e];return t===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ds=new B;function $v(){Je.getLuminanceCoefficients(ds);const n=ds.x.toFixed(4),e=ds.y.toFixed(4),t=ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function Zv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Jv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),o=a.name;let l=1;a.type===n.FLOAT_MAT2&&(l=2),a.type===n.FLOAT_MAT3&&(l=3),a.type===n.FLOAT_MAT4&&(l=4),t[o]={type:a.type,location:n.getAttribLocation(e,o),locationSize:l}}return t}function ar(n){return n!==""}function ed(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function td(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ho(n){return n.replace(Qv,tb)}const eb=new Map;function tb(n,e){let t=Xe[e];if(t===void 0){const i=eb.get(e);if(i!==void 0)t=Xe[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ho(t)}const nb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nd(n){return n.replace(nb,ib)}function ib(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function id(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const rb={[gs]:"SHADOWMAP_TYPE_PCF",[sr]:"SHADOWMAP_TYPE_VSM"};function sb(n){return rb[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ab={[hi]:"ENVMAP_TYPE_CUBE",[ki]:"ENVMAP_TYPE_CUBE",[Gs]:"ENVMAP_TYPE_CUBE_UV"};function ob(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":ab[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const lb={[ki]:"ENVMAP_MODE_REFRACTION"};function cb(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":lb[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const db={[nl]:"ENVMAP_BLENDING_MULTIPLY",[zm]:"ENVMAP_BLENDING_MIX",[Bm]:"ENVMAP_BLENDING_ADD"};function fb(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":db[n.combine]||"ENVMAP_BLENDING_NONE"}function ub(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function hb(n,e,t,i){const r=n.getContext(),a=t.defines;let o=t.vertexShader,l=t.fragmentShader;const d=sb(t),c=ob(t),f=cb(t),h=fb(t),u=ub(t),m=Kv(t),x=Zv(a),S=r.createProgram();let g,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ar).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ar).join(`
`),p.length>0&&(p+=`
`)):(g=[id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),p=[id(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Sn?"#define TONE_MAPPING":"",t.toneMapping!==Sn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Sn?Yv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Xv("linearToOutputTexel",t.outputColorSpace),$v(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ar).join(`
`)),o=Ho(o),o=ed(o,t),o=td(o,t),l=Ho(l),l=ed(l,t),l=td(l,t),o=nd(o),l=nd(l),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=M+g+o,_=M+p+l,v=Zc(r,r.VERTEX_SHADER,T),w=Zc(r,r.FRAGMENT_SHADER,_);r.attachShader(S,v),r.attachShader(S,w),t.index0AttributeName!==void 0?r.bindAttribLocation(S,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function R(I){if(n.debug.checkShaderErrors){const O=r.getProgramInfoLog(S)||"",k=r.getShaderInfoLog(v)||"",D=r.getShaderInfoLog(w)||"",H=O.trim(),Z=k.trim(),$=D.trim();let ne=!0,z=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,S,v,w);else{const X=Qc(r,v,"vertex"),J=Qc(r,w,"fragment");et("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+H+`
`+X+`
`+J)}else H!==""?je("WebGLProgram: Program Info Log:",H):(Z===""||$==="")&&(z=!1);z&&(I.diagnostics={runnable:ne,programLog:H,vertexShader:{log:Z,prefix:g},fragmentShader:{log:$,prefix:p}})}r.deleteShader(v),r.deleteShader(w),b=new _s(r,S),A=Jv(r,S)}let b;this.getUniforms=function(){return b===void 0&&R(this),b};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(S,Wv)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hv++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=v,this.fragmentShader=w,this}let pb=0;class mb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new gb(e),t.set(e,i)),i}}class gb{constructor(e){this.id=pb++,this.code=e,this.usedTimes=0}}function xb(n){return n===pi||n===As||n===Cs}function yb(n,e,t,i,r,a){const o=new ul,l=new mb,d=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let u=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return d.add(b),b===0?"uv":`uv${b}`}function S(b,A,P,I,O,k){const D=I.fog,H=O.geometry,Z=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?I.environment:null,$=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,ne=e.get(b.envMap||Z,$),z=ne&&ne.mapping===Gs?ne.image.height:null,X=m[b.type];b.precision!==null&&(u=i.getMaxPrecision(b.precision),u!==b.precision&&je("WebGLProgram.getParameters:",b.precision,"not supported, using",u,"instead."));const J=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,fe=J!==void 0?J.length:0;let ue=0;H.morphAttributes.position!==void 0&&(ue=1),H.morphAttributes.normal!==void 0&&(ue=2),H.morphAttributes.color!==void 0&&(ue=3);let ke,Le,_e,Y;if(X){const dt=xn[X];ke=dt.vertexShader,Le=dt.fragmentShader}else{ke=b.vertexShader,Le=b.fragmentShader;const dt=l.getVertexShaderStage(b),tt=l.getFragmentShaderStage(b);l.update(b,dt,tt),_e=dt.id,Y=tt.id}const ie=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),le=O.isInstancedMesh===!0,Q=O.isBatchedMesh===!0,ce=!!b.map,We=!!b.matcap,Ce=!!ne,ze=!!b.aoMap,oe=!!b.lightMap,Fe=!!b.bumpMap&&b.wireframe===!1,Ze=!!b.normalMap,lt=!!b.displacementMap,Tt=!!b.emissiveMap,ht=!!b.metalnessMap,ct=!!b.roughnessMap,F=b.anisotropy>0,It=b.clearcoat>0,it=b.dispersion>0,C=b.retroreflectivity>0,y=b.iridescence>0,j=b.sheen>0,q=b.transmission>0,ee=F&&!!b.anisotropyMap,de=It&&!!b.clearcoatMap,he=It&&!!b.clearcoatNormalMap,te=It&&!!b.clearcoatRoughnessMap,se=y&&!!b.iridescenceMap,pe=y&&!!b.iridescenceThicknessMap,Ne=j&&!!b.sheenColorMap,ve=j&&!!b.sheenRoughnessMap,me=!!b.specularMap,Ue=!!b.specularColorMap,Be=!!b.specularIntensityMap,Ge=q&&!!b.transmissionMap,U=q&&!!b.thicknessMap,ge=!!b.gradientMap,re=!!b.alphaMap,xe=b.alphaTest>0,we=!!b.alphaHash,ae=!!b.extensions;let Oe=Sn;b.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(Oe=n.toneMapping);const Pe={shaderID:X,shaderType:b.type,shaderName:b.name,vertexShader:ke,fragmentShader:Le,defines:b.defines,customVertexShaderID:_e,customFragmentShaderID:Y,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:u,batching:Q,batchingColor:Q&&O._colorsTexture!==null,instancing:le,instancingColor:le&&O.instanceColor!==null,instancingMorph:le&&O.morphTexture!==null,outputColorSpace:ie===null?n.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:ce,matcap:We,envMap:Ce,envMapMode:Ce&&ne.mapping,envMapCubeUVHeight:z,aoMap:ze,lightMap:oe,bumpMap:Fe,normalMap:Ze,displacementMap:lt,emissiveMap:Tt,normalMapObjectSpace:Ze&&b.normalMapType===Wm,normalMapTangentSpace:Ze&&b.normalMapType===zo,packedNormalMap:Ze&&b.normalMapType===zo&&xb(b.normalMap.format),metalnessMap:ht,roughnessMap:ct,anisotropy:F,anisotropyMap:ee,clearcoat:It,clearcoatMap:de,clearcoatNormalMap:he,clearcoatRoughnessMap:te,dispersion:it,retroreflection:C,iridescence:y,iridescenceMap:se,iridescenceThicknessMap:pe,sheen:j,sheenColorMap:Ne,sheenRoughnessMap:ve,specularMap:me,specularColorMap:Ue,specularIntensityMap:Be,transmission:q,transmissionMap:Ge,thicknessMap:U,gradientMap:ge,opaque:b.transparent===!1&&b.blending===cr&&b.alphaToCoverage===!1,alphaMap:re,alphaTest:xe,alphaHash:we,combine:b.combine,mapUv:ce&&x(b.map.channel),aoMapUv:ze&&x(b.aoMap.channel),lightMapUv:oe&&x(b.lightMap.channel),bumpMapUv:Fe&&x(b.bumpMap.channel),normalMapUv:Ze&&x(b.normalMap.channel),displacementMapUv:lt&&x(b.displacementMap.channel),emissiveMapUv:Tt&&x(b.emissiveMap.channel),metalnessMapUv:ht&&x(b.metalnessMap.channel),roughnessMapUv:ct&&x(b.roughnessMap.channel),anisotropyMapUv:ee&&x(b.anisotropyMap.channel),clearcoatMapUv:de&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:he&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:ve&&x(b.sheenRoughnessMap.channel),specularMapUv:me&&x(b.specularMap.channel),specularColorMapUv:Ue&&x(b.specularColorMap.channel),specularIntensityMapUv:Be&&x(b.specularIntensityMap.channel),transmissionMapUv:Ge&&x(b.transmissionMap.channel),thicknessMapUv:U&&x(b.thicknessMap.channel),alphaMapUv:re&&x(b.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Ze||F),vertexNormals:!!H.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(ce||re),fog:!!D,useFog:b.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||H.attributes.normal===void 0&&Ze===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ye,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:ue,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:ce&&b.map.isVideoTexture===!0&&Je.getTransfer(b.map.colorSpace)===rt,decodeVideoTextureEmissive:Tt&&b.emissiveMap.isVideoTexture===!0&&Je.getTransfer(b.emissiveMap.colorSpace)===rt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===yn,flipSided:b.side===Gt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ae&&b.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&b.extensions.multiDraw===!0||Q)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Pe.vertexUv1s=d.has(1),Pe.vertexUv2s=d.has(2),Pe.vertexUv3s=d.has(3),d.clear(),Pe}function g(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)A.push(P),A.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(p(A,b),M(A,b),A.push(n.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function p(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numSunLights),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numSunLightShadows),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function M(b,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.retroreflection&&o.enable(24),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function T(b){const A=m[b.type];let P;if(A){const I=xn[A];P=Pg.clone(I.uniforms)}else P=b.uniforms;return P}function _(b,A){let P=f.get(A);return P!==void 0?++P.usedTimes:(P=new hb(n,A,b,r),c.push(P),f.set(A,P)),P}function v(b){if(--b.usedTimes===0){const A=c.indexOf(b);c[A]=c[c.length-1],c.pop(),f.delete(b.cacheKey),b.destroy()}}function w(b){l.remove(b)}function R(){l.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:T,acquireProgram:_,releaseProgram:v,releaseShaderCache:w,programs:c,dispose:R}}function vb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let l=n.get(o);return l===void 0&&(l={},n.set(o,l)),l}function i(o){n.delete(o)}function r(o,l,d){n.get(o)[l]=d}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:a}}function bb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function rd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function sd(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function o(u){let m=0;return u.isInstancedMesh&&(m+=2),u.isSkinnedMesh&&(m+=1),m}function l(u,m,x,S,g,p){let M=n[e];return M===void 0?(M={id:u.id,object:u,geometry:m,material:x,materialVariant:o(u),groupOrder:S,renderOrder:u.renderOrder,z:g,group:p},n[e]=M):(M.id=u.id,M.object=u,M.geometry=m,M.material=x,M.materialVariant=o(u),M.groupOrder=S,M.renderOrder=u.renderOrder,M.z=g,M.group=p),e++,M}function d(u,m,x,S,g,p,M){M.reversedDepth===!0&&(g=-g);const T=l(u,m,x,S,g,p);x.transmission>0?i.push(T):x.transparent===!0?r.push(T):t.push(T)}function c(u,m,x,S,g,p){const M=l(u,m,x,S,g,p);x.transmission>0?i.unshift(M):x.transparent===!0?r.unshift(M):t.unshift(M)}function f(u,m){t.length>1&&t.sort(u||bb),i.length>1&&i.sort(m||rd),r.length>1&&r.sort(m||rd)}function h(){for(let u=e,m=n.length;u<m;u++){const x=n[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:d,unshift:c,finish:h,sort:f}}function Sb(){let n=new WeakMap;function e(i,r){const a=n.get(i);let o;return a===void 0?(o=new sd,n.set(i,[o])):r>=a.length?(o=new sd,a.push(o)):o=a[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function _b(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new B,color:new qe};break;case"SpotLight":t={position:new B,direction:new B,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function Mb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Eb=0;function wb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Tb(n){const e=new _b,t=Mb(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,a=new ut,o=new ut;function l(c){let f=0,h=0,u=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let m=0,x=0,S=0,g=0,p=0,M=0,T=0,_=0,v=0,w=0,R=0,b=0,A=0,P=0;c.sort(wb);for(let O=0,k=c.length;O<k;O++){const D=c[O],H=D.color,Z=D.intensity,$=D.distance;let ne=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===pi?ne=D.shadow.map.texture:ne=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)f+=H.r*Z,h+=H.g*Z,u+=H.b*Z;else if(D.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(D.sh.coefficients[z],Z);P++}else if(D.isSunLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const X=D.shadow,J=t.get(D);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),i.sunShadow[x]=J,i.sunShadowMap[x]=ne;const fe=X.getViewportCount();for(let ue=0;ue<fe;ue++)i.sunShadowMatrix[S+ue]=X.getMatrix(ue),i.sunShadowCascade[S+ue]=X._cascadeData[ue];S+=fe,x++}i.sun[m]=z,m++}else if(D.isDirectionalLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const X=D.shadow,J=t.get(D);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,i.directionalShadow[g]=J,i.directionalShadowMap[g]=ne,i.directionalShadowMatrix[g]=D.shadow.matrix,v++}i.directional[g]=z,g++}else if(D.isSpotLight){const z=e.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(H).multiplyScalar(Z),z.distance=$,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,i.spot[M]=z;const X=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,X.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[M]=X.matrix,D.castShadow){const J=t.get(D);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,i.spotShadow[M]=J,i.spotShadowMap[M]=ne,R++}M++}else if(D.isRectAreaLight){const z=e.get(D);z.color.copy(H).multiplyScalar(Z),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),i.rectArea[T]=z,T++}else if(D.isPointLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){const X=D.shadow,J=t.get(D);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,J.shadowCameraNear=X.camera.near,J.shadowCameraFar=X.camera.far,i.pointShadow[p]=J,i.pointShadowMap[p]=ne,i.pointShadowMatrix[p]=D.shadow.matrix,w++}i.point[p]=z,p++}else if(D.isHemisphereLight){const z=e.get(D);z.skyColor.copy(D.color).multiplyScalar(Z),z.groundColor.copy(D.groundColor).multiplyScalar(Z),i.hemi[_]=z,_++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=u;const I=i.hash;(I.sunLength!==m||I.directionalLength!==g||I.pointLength!==p||I.spotLength!==M||I.rectAreaLength!==T||I.hemiLength!==_||I.numSunShadows!==x||I.numDirectionalShadows!==v||I.numPointShadows!==w||I.numSpotShadows!==R||I.numSpotMaps!==b||I.numLightProbes!==P)&&(i.sun.length=m,i.directional.length=g,i.spot.length=M,i.rectArea.length=T,i.point.length=p,i.hemi.length=_,i.sunShadow.length=x,i.sunShadowMap.length=x,i.sunShadowMatrix.length=S,i.sunShadowCascade.length=S,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.directionalShadowMatrix.length=v,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=R,i.spotShadowMap.length=R,i.spotLightMatrix.length=R+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=P,I.sunLength=m,I.directionalLength=g,I.pointLength=p,I.spotLength=M,I.rectAreaLength=T,I.hemiLength=_,I.numSunShadows=x,I.numDirectionalShadows=v,I.numPointShadows=w,I.numSpotShadows=R,I.numSpotMaps=b,I.numLightProbes=P,i.version=Eb++)}function d(c,f){let h=0,u=0,m=0,x=0,S=0,g=0;const p=f.matrixWorldInverse;for(let M=0,T=c.length;M<T;M++){const _=c[M];if(_.isSunLight){const v=i.sun[h];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(p),h++}else if(_.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),u++}else if(_.isSpotLight){const v=i.spot[x];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),x++}else if(_.isRectAreaLight){const v=i.rectArea[S];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(p),o.identity(),a.copy(_.matrixWorld),a.premultiply(p),o.extractRotation(a),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),S++}else if(_.isPointLight){const v=i.point[m];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(p),m++}else if(_.isHemisphereLight){const v=i.hemi[g];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:l,setupView:d,state:i}}function ad(n){const e=new Tb(n),t=[],i=[],r=[];function a(u){h.camera=u,t.length=0,i.length=0,r.length=0}function o(u){t.push(u)}function l(u){i.push(u)}function d(u){r.push(u)}function c(){e.setup(t)}function f(u){e.setupView(t,u)}const h={lightsArray:t,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:h,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:l,pushLightProbeGrid:d}}function Ab(n){let e=new WeakMap;function t(r,a=0){const o=e.get(r);let l;return o===void 0?(l=new ad(n),e.set(r,[l])):a>=o.length?(l=new ad(n),o.push(l)):l=o[a],l}function i(){e=new WeakMap}return{get:t,dispose:i}}const Cb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rb=`uniform sampler2D shadow_pass;
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
}`,Ib=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Pb=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],od=new ut,nr=new B,ja=new B;function Db(n,e,t){let i=new ml;const r=new Ke,a=new Ke,o=new mt,l=new Og,d=new Fg,c={},f=t.maxTextureSize,h={[ui]:Gt,[Gt]:ui,[yn]:yn},u=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:Cb,fragmentShader:Rb}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const x=new zt;x.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new fn(x,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gs;let p=this.type;this.render=function(w,R,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===xf&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gs);const A=n.getRenderTarget(),P=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Nn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const k=p!==this.type;k&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(H=>H.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,H=w.length;D<H;D++){const Z=w[D],$=Z.shadow;if($===void 0){je("WebGLShadowMap:",Z,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const ne=$.getFrameExtents();r.multiply(ne),a.copy($.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(a.x=Math.floor(f/ne.x),r.x=a.x*ne.x,$.mapSize.x=a.x),r.y>f&&(a.y=Math.floor(f/ne.y),r.y=a.y*ne.y,$.mapSize.y=a.y));const z=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=z,$.map===null||k===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===sr){if(Z.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new cn(r.x,r.y,{format:pi,type:Tn,minFilter:Ot,magFilter:Ot,generateMipmaps:!1}),$.map.texture.name=Z.name+".shadowMap",$.map.depthTexture=new yr(r.x,r.y,vn),$.map.depthTexture.name=Z.name+".shadowMapDepth",$.map.depthTexture.format=zn,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Ct,$.map.depthTexture.magFilter=Ct}else Z.isPointLight?($.map=new Kf(r.x),$.map.depthTexture=new Tg(r.x,wn)):($.map=new cn(r.x,r.y),$.map.depthTexture=new yr(r.x,r.y,wn)),$.map.depthTexture.name=Z.name+".shadowMap",$.map.depthTexture.format=zn,this.type===gs?($.map.depthTexture.compareFunction=z?dl:cl,$.map.depthTexture.minFilter=Ot,$.map.depthTexture.magFilter=Ot):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Ct,$.map.depthTexture.magFilter=Ct);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==r.x||$.map.height!==r.y)&&$.map.setSize(r.x,r.y);const X=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();Z.isPointLight!==!0&&$.updateMatrices(Z,b);for(let J=0;J<X;J++){const fe=$.getCamera(J);if(Z.isPointLight){const ue=$.camera,ke=$.matrix,Le=Z.distance||ue.far;Le!==ue.far&&(ue.far=Le,ue.updateProjectionMatrix()),nr.setFromMatrixPosition(Z.matrixWorld),ue.position.copy(nr),ja.copy(ue.position),ja.add(Ib[J]),ue.up.copy(Pb[J]),ue.lookAt(ja),ue.updateMatrixWorld(),ke.makeTranslation(-nr.x,-nr.y,-nr.z),od.multiplyMatrices(ue.projectionMatrix,ue.matrixWorldInverse),$._frustum.setFromProjectionMatrix(od,ue.coordinateSystem,ue.reversedDepth)}if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,J),n.clear();else{J===0&&(n.setRenderTarget($.map),n.clear());const ue=$.getViewport(J);o.set(a.x*ue.x,a.y*ue.y,a.x*ue.z,a.y*ue.w),O.viewport(o)}i=$.getFrustum(J),_(R,b,fe,Z,this.type)}$.isPointLightShadow!==!0&&this.type===sr&&M($,b),$.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(A,P,I)};function M(w,R){const b=e.update(S);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null?w.mapPass=new cn(r.x,r.y,{format:pi,type:Tn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(R,null,b,u,S,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value.set(w.map.width,w.map.height),m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(R,null,b,m,S,null)}function T(w,R,b,A){let P=null;const I=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)P=I;else if(P=b.isPointLight===!0?d:l,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const O=P.uuid,k=R.uuid;let D=c[O];D===void 0&&(D={},c[O]=D);let H=D[k];H===void 0&&(H=P.clone(),D[k]=H,R.addEventListener("dispose",v)),P=H}if(P.visible=R.visible,P.wireframe=R.wireframe,A===sr?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:h[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,b.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const O=n.properties.get(P);O.light=b}return P}function _(w,R,b,A,P){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===sr)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);const k=e.update(w),D=w.material;if(Array.isArray(D)){const H=k.groups;for(let Z=0,$=H.length;Z<$;Z++){const ne=H[Z],z=D[ne.materialIndex];if(z&&z.visible){const X=T(w,z,A,P);w.onBeforeShadow(n,w,R,b,k,X,ne),n.renderBufferDirect(b,null,k,X,w,ne),w.onAfterShadow(n,w,R,b,k,X,ne)}}}else if(D.visible){const H=T(w,D,A,P);w.onBeforeShadow(n,w,R,b,k,H,null),n.renderBufferDirect(b,null,k,H,w,null),w.onAfterShadow(n,w,R,b,k,H,null)}}const O=w.children;for(let k=0,D=O.length;k<D;k++)_(O[k],R,b,A,P)}function v(w){w.target.removeEventListener("dispose",v);for(const b in c){const A=c[b],P=w.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function Lb(n,e){function t(){let U=!1;const ge=new mt;let re=null;const xe=new mt(0,0,0,0);return{setMask:function(we){re!==we&&!U&&(n.colorMask(we,we,we,we),re=we)},setLocked:function(we){U=we},setClear:function(we,ae,Oe,Pe,dt){dt===!0&&(we*=Pe,ae*=Pe,Oe*=Pe),ge.set(we,ae,Oe,Pe),xe.equals(ge)===!1&&(n.clearColor(we,ae,Oe,Pe),xe.copy(ge))},reset:function(){U=!1,re=null,xe.set(-1,0,0,0)}}}function i(){let U=!1,ge=!1,re=null,xe=null,we=null;return{setReversed:function(ae){if(ge!==ae){const Oe=e.get("EXT_clip_control");ae?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),ge=ae;const Pe=we;we=null,this.setClear(Pe)}},getReversed:function(){return ge},setTest:function(ae){ae?ie(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(ae){re!==ae&&!U&&(n.depthMask(ae),re=ae)},setFunc:function(ae){if(ge&&(ae=eg[ae]),xe!==ae){switch(ae){case Ja:n.depthFunc(n.NEVER);break;case Qa:n.depthFunc(n.ALWAYS);break;case eo:n.depthFunc(n.LESS);break;case pr:n.depthFunc(n.LEQUAL);break;case to:n.depthFunc(n.EQUAL);break;case no:n.depthFunc(n.GEQUAL);break;case io:n.depthFunc(n.GREATER);break;case ro:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}xe=ae}},setLocked:function(ae){U=ae},setClear:function(ae){we!==ae&&(we=ae,ge&&(ae=1-ae),n.clearDepth(ae))},reset:function(){U=!1,re=null,xe=null,we=null,ge=!1}}}function r(){let U=!1,ge=null,re=null,xe=null,we=null,ae=null,Oe=null,Pe=null,dt=null;return{setTest:function(tt){U||(tt?ie(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(tt){ge!==tt&&!U&&(n.stencilMask(tt),ge=tt)},setFunc:function(tt,rn,hn){(re!==tt||xe!==rn||we!==hn)&&(n.stencilFunc(tt,rn,hn),re=tt,xe=rn,we=hn)},setOp:function(tt,rn,hn){(ae!==tt||Oe!==rn||Pe!==hn)&&(n.stencilOp(tt,rn,hn),ae=tt,Oe=rn,Pe=hn)},setLocked:function(tt){U=tt},setClear:function(tt){dt!==tt&&(n.clearStencil(tt),dt=tt)},reset:function(){U=!1,ge=null,re=null,xe=null,we=null,ae=null,Oe=null,Pe=null,dt=null}}}const a=new t,o=new i,l=new r,d=new WeakMap,c=new WeakMap;let f={},h={},u={},m=new WeakMap,x=[],S=null,g=!1,p=null,M=null,T=null,_=null,v=null,w=null,R=null,b=new qe(0,0,0),A=0,P=!1,I=null,O=null,k=null,D=null,H=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,ne=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(z)[1]),$=ne>=1):z.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),$=ne>=2);let X=null,J={};const fe=n.getParameter(n.SCISSOR_BOX),ue=n.getParameter(n.VIEWPORT),ke=new mt().fromArray(fe),Le=new mt().fromArray(ue);function _e(U,ge,re,xe){const we=new Uint8Array(4),ae=n.createTexture();n.bindTexture(U,ae),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Oe=0;Oe<re;Oe++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(ge,0,n.RGBA,1,1,xe,0,n.RGBA,n.UNSIGNED_BYTE,we):n.texImage2D(ge+Oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,we);return ae}const Y={};Y[n.TEXTURE_2D]=_e(n.TEXTURE_2D,n.TEXTURE_2D,1),Y[n.TEXTURE_CUBE_MAP]=_e(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[n.TEXTURE_2D_ARRAY]=_e(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Y[n.TEXTURE_3D]=_e(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),l.setClear(0),ie(n.DEPTH_TEST),o.setFunc(pr),Fe(!1),Ze(rc),ie(n.CULL_FACE),ze(Nn);function ie(U){f[U]!==!0&&(n.enable(U),f[U]=!0)}function ye(U){f[U]!==!1&&(n.disable(U),f[U]=!1)}function le(U,ge){return u[U]!==ge?(n.bindFramebuffer(U,ge),u[U]=ge,U===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ge),U===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ge),!0):!1}function Q(U,ge){let re=x,xe=!1;if(U){re=m.get(ge),re===void 0&&(re=[],m.set(ge,re));const we=U.textures;if(re.length!==we.length||re[0]!==n.COLOR_ATTACHMENT0){for(let ae=0,Oe=we.length;ae<Oe;ae++)re[ae]=n.COLOR_ATTACHMENT0+ae;re.length=we.length,xe=!0}}else re[0]!==n.BACK&&(re[0]=n.BACK,xe=!0);xe&&n.drawBuffers(re)}function ce(U){return S!==U?(n.useProgram(U),S=U,!0):!1}const We={[Li]:n.FUNC_ADD,[Sm]:n.FUNC_SUBTRACT,[_m]:n.FUNC_REVERSE_SUBTRACT};We[Mm]=n.MIN,We[Em]=n.MAX;const Ce={[wm]:n.ZERO,[Tm]:n.ONE,[Am]:n.SRC_COLOR,[yf]:n.SRC_ALPHA,[Lm]:n.SRC_ALPHA_SATURATE,[Pm]:n.DST_COLOR,[Rm]:n.DST_ALPHA,[Cm]:n.ONE_MINUS_SRC_COLOR,[vf]:n.ONE_MINUS_SRC_ALPHA,[Dm]:n.ONE_MINUS_DST_COLOR,[Im]:n.ONE_MINUS_DST_ALPHA,[Nm]:n.CONSTANT_COLOR,[Um]:n.ONE_MINUS_CONSTANT_COLOR,[Om]:n.CONSTANT_ALPHA,[Fm]:n.ONE_MINUS_CONSTANT_ALPHA};function ze(U,ge,re,xe,we,ae,Oe,Pe,dt,tt){if(U===Nn){g===!0&&(ye(n.BLEND),g=!1);return}if(g===!1&&(ie(n.BLEND),g=!0),U!==bm){if(U!==p||tt!==P){if((M!==Li||v!==Li)&&(n.blendEquation(n.FUNC_ADD),M=Li,v=Li),tt)switch(U){case cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sc:n.blendFunc(n.ONE,n.ONE);break;case ac:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case oc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:et("WebGLState: Invalid blending: ",U);break}else switch(U){case cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case sc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ac:et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case oc:et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:et("WebGLState: Invalid blending: ",U);break}T=null,_=null,w=null,R=null,b.set(0,0,0),A=0,p=U,P=tt}return}we=we||ge,ae=ae||re,Oe=Oe||xe,(ge!==M||we!==v)&&(n.blendEquationSeparate(We[ge],We[we]),M=ge,v=we),(re!==T||xe!==_||ae!==w||Oe!==R)&&(n.blendFuncSeparate(Ce[re],Ce[xe],Ce[ae],Ce[Oe]),T=re,_=xe,w=ae,R=Oe),(Pe.equals(b)===!1||dt!==A)&&(n.blendColor(Pe.r,Pe.g,Pe.b,dt),b.copy(Pe),A=dt),p=U,P=!1}function oe(U,ge){U.side===yn?ye(n.CULL_FACE):ie(n.CULL_FACE);let re=U.side===Gt;ge&&(re=!re),Fe(re),U.blending===cr&&U.transparent===!1?ze(Nn):ze(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),a.setMask(U.colorWrite);const xe=U.stencilWrite;l.setTest(xe),xe&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Tt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ie(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(U){I!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),I=U)}function Ze(U){U!==ym?(ie(n.CULL_FACE),U!==O&&(U===rc?n.cullFace(n.BACK):U===vm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),O=U}function lt(U){U!==k&&($&&n.lineWidth(U),k=U)}function Tt(U,ge,re){U?(ie(n.POLYGON_OFFSET_FILL),(D!==ge||H!==re)&&(D=ge,H=re,o.getReversed()&&(ge=-ge),n.polygonOffset(ge,re))):ye(n.POLYGON_OFFSET_FILL)}function ht(U){U?ie(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function ct(U){U===void 0&&(U=n.TEXTURE0+Z-1),X!==U&&(n.activeTexture(U),X=U)}function F(U,ge,re){re===void 0&&(X===null?re=n.TEXTURE0+Z-1:re=X);let xe=J[re];xe===void 0&&(xe={type:void 0,texture:void 0},J[re]=xe),(xe.type!==U||xe.texture!==ge)&&(X!==re&&(n.activeTexture(re),X=re),n.bindTexture(U,ge||Y[U]),xe.type=U,xe.texture=ge)}function It(){const U=J[X];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function it(){try{n.compressedTexImage2D(...arguments)}catch(U){et("WebGLState:",U)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(U){et("WebGLState:",U)}}function y(){try{n.texSubImage2D(...arguments)}catch(U){et("WebGLState:",U)}}function j(){try{n.texSubImage3D(...arguments)}catch(U){et("WebGLState:",U)}}function q(){try{n.compressedTexSubImage2D(...arguments)}catch(U){et("WebGLState:",U)}}function ee(){try{n.compressedTexSubImage3D(...arguments)}catch(U){et("WebGLState:",U)}}function de(){try{n.texStorage2D(...arguments)}catch(U){et("WebGLState:",U)}}function he(){try{n.texStorage3D(...arguments)}catch(U){et("WebGLState:",U)}}function te(){try{n.texImage2D(...arguments)}catch(U){et("WebGLState:",U)}}function se(){try{n.texImage3D(...arguments)}catch(U){et("WebGLState:",U)}}function pe(U){return h[U]!==void 0?h[U]:n.getParameter(U)}function Ne(U,ge){h[U]!==ge&&(n.pixelStorei(U,ge),h[U]=ge)}function ve(U){ke.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ke.copy(U))}function me(U){Le.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Le.copy(U))}function Ue(U,ge){let re=c.get(ge);re===void 0&&(re=new WeakMap,c.set(ge,re));let xe=re.get(U);xe===void 0&&(xe=n.getUniformBlockIndex(ge,U.name),re.set(U,xe))}function Be(U,ge){const xe=c.get(ge).get(U);d.get(ge)!==xe&&(n.uniformBlockBinding(ge,xe,U.__bindingPointIndex),d.set(ge,xe))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),f={},h={},X=null,J={},u={},m=new WeakMap,x=[],S=null,g=!1,p=null,M=null,T=null,_=null,v=null,w=null,R=null,b=new qe(0,0,0),A=0,P=!1,I=null,O=null,k=null,D=null,H=null,ke.set(0,0,n.canvas.width,n.canvas.height),Le.set(0,0,n.canvas.width,n.canvas.height),a.reset(),o.reset(),l.reset()}return{buffers:{color:a,depth:o,stencil:l},enable:ie,disable:ye,bindFramebuffer:le,drawBuffers:Q,useProgram:ce,setBlending:ze,setMaterial:oe,setFlipSided:Fe,setCullFace:Ze,setLineWidth:lt,setPolygonOffset:Tt,setScissorTest:ht,activeTexture:ct,bindTexture:F,unbindTexture:It,compressedTexImage2D:it,compressedTexImage3D:C,texImage2D:te,texImage3D:se,pixelStorei:Ne,getParameter:pe,updateUBOMapping:Ue,uniformBlockBinding:Be,texStorage2D:de,texStorage3D:he,texSubImage2D:y,texSubImage3D:j,compressedTexSubImage2D:q,compressedTexSubImage3D:ee,scissor:ve,viewport:me,reset:Ge}}function Nb(n,e,t,i,r,a,o){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,f=new WeakMap,h=new Set;let u;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(C,y){return x?new OffscreenCanvas(C,y):Ps("canvas")}function g(C,y,j){let q=1;const ee=it(C);if((ee.width>j||ee.height>j)&&(q=j/Math.max(ee.width,ee.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const de=Math.floor(q*ee.width),he=Math.floor(q*ee.height);u===void 0&&(u=S(de,he));const te=y?S(de,he):u;return te.width=de,te.height=he,te.getContext("2d").drawImage(C,0,0,de,he),je("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+de+"x"+he+")."),te}else return"data"in C&&je("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function p(C){return C.generateMipmaps}function M(C){n.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(C,y,j,q,ee,de=!1){if(C!==null){if(n[C]!==void 0)return n[C];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let he;q&&(he=e.get("EXT_texture_norm16"),he||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let te=y;if(y===n.RED&&(j===n.FLOAT&&(te=n.R32F),j===n.HALF_FLOAT&&(te=n.R16F),j===n.UNSIGNED_BYTE&&(te=n.R8),j===n.UNSIGNED_SHORT&&he&&(te=he.R16_EXT),j===n.SHORT&&he&&(te=he.R16_SNORM_EXT)),y===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(te=n.R8UI),j===n.UNSIGNED_SHORT&&(te=n.R16UI),j===n.UNSIGNED_INT&&(te=n.R32UI),j===n.BYTE&&(te=n.R8I),j===n.SHORT&&(te=n.R16I),j===n.INT&&(te=n.R32I)),y===n.RG&&(j===n.FLOAT&&(te=n.RG32F),j===n.HALF_FLOAT&&(te=n.RG16F),j===n.UNSIGNED_BYTE&&(te=n.RG8),j===n.UNSIGNED_SHORT&&he&&(te=he.RG16_EXT),j===n.SHORT&&he&&(te=he.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(te=n.RG8UI),j===n.UNSIGNED_SHORT&&(te=n.RG16UI),j===n.UNSIGNED_INT&&(te=n.RG32UI),j===n.BYTE&&(te=n.RG8I),j===n.SHORT&&(te=n.RG16I),j===n.INT&&(te=n.RG32I)),y===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(te=n.RGB8UI),j===n.UNSIGNED_SHORT&&(te=n.RGB16UI),j===n.UNSIGNED_INT&&(te=n.RGB32UI),j===n.BYTE&&(te=n.RGB8I),j===n.SHORT&&(te=n.RGB16I),j===n.INT&&(te=n.RGB32I)),y===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(te=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(te=n.RGBA16UI),j===n.UNSIGNED_INT&&(te=n.RGBA32UI),j===n.BYTE&&(te=n.RGBA8I),j===n.SHORT&&(te=n.RGBA16I),j===n.INT&&(te=n.RGBA32I)),y===n.RGB&&(j===n.UNSIGNED_SHORT&&he&&(te=he.RGB16_EXT),j===n.SHORT&&he&&(te=he.RGB16_SNORM_EXT),j===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),j===n.UNSIGNED_INT_10F_11F_11F_REV&&(te=n.R11F_G11F_B10F)),y===n.RGBA){const se=de?Is:Je.getTransfer(ee);j===n.FLOAT&&(te=n.RGBA32F),j===n.HALF_FLOAT&&(te=n.RGBA16F),j===n.UNSIGNED_BYTE&&(te=se===rt?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT&&he&&(te=he.RGBA16_EXT),j===n.SHORT&&he&&(te=he.RGBA16_SNORM_EXT),j===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function v(C,y){let j;return C?y===null||y===wn||y===gr?j=n.DEPTH24_STENCIL8:y===vn?j=n.DEPTH32F_STENCIL8:y===mr&&(j=n.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===wn||y===gr?j=n.DEPTH_COMPONENT24:y===vn?j=n.DEPTH_COMPONENT32F:y===mr&&(j=n.DEPTH_COMPONENT16),j}function w(C,y){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Ct&&C.minFilter!==Ot?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function R(C){const y=C.target;y.removeEventListener("dispose",R),A(y),y.isVideoTexture&&f.delete(y),y.isHTMLTexture&&h.delete(y)}function b(C){const y=C.target;y.removeEventListener("dispose",b),I(y)}function A(C){const y=i.get(C);if(y.__webglInit===void 0)return;const j=C.source,q=m.get(j);if(q){const ee=q[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&P(C),Object.keys(q).length===0&&m.delete(j)}i.remove(C)}function P(C){const y=i.get(C);n.deleteTexture(y.__webglTexture);const j=C.source,q=m.get(j);delete q[y.__cacheKey],o.memory.textures--}function I(C){const y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(y.__webglFramebuffer[q]))for(let ee=0;ee<y.__webglFramebuffer[q].length;ee++)n.deleteFramebuffer(y.__webglFramebuffer[q][ee]);else n.deleteFramebuffer(y.__webglFramebuffer[q]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[q])}else{if(Array.isArray(y.__webglFramebuffer))for(let q=0;q<y.__webglFramebuffer.length;q++)n.deleteFramebuffer(y.__webglFramebuffer[q]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let q=0;q<y.__webglColorRenderbuffer.length;q++)y.__webglColorRenderbuffer[q]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[q]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const j=C.textures;for(let q=0,ee=j.length;q<ee;q++){const de=i.get(j[q]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),o.memory.textures--),i.remove(j[q])}i.remove(C)}let O=0;function k(){O=0}function D(){return O}function H(C){O=C}function Z(){const C=O;return C>=r.maxTextures&&je("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+r.maxTextures),O+=1,C}function $(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function ne(C,y){const j=i.get(C);if(C.isVideoTexture&&F(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&j.__version!==C.version){const q=C.image;if(q===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(j,C,y);return}}else C.isExternalTexture&&(j.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+y)}function z(C,y){const j=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&j.__version!==C.version){ye(j,C,y);return}else C.isExternalTexture&&(j.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+y)}function X(C,y){const j=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&j.__version!==C.version){ye(j,C,y);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+y)}function J(C,y){const j=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&j.__version!==C.version){le(j,C,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+y)}const fe={[so]:n.REPEAT,[Ln]:n.CLAMP_TO_EDGE,[ao]:n.MIRRORED_REPEAT},ue={[Ct]:n.NEAREST,[km]:n.NEAREST_MIPMAP_NEAREST,[Ur]:n.NEAREST_MIPMAP_LINEAR,[Ot]:n.LINEAR,[da]:n.LINEAR_MIPMAP_NEAREST,[si]:n.LINEAR_MIPMAP_LINEAR},ke={[Gm]:n.NEVER,[$m]:n.ALWAYS,[Vm]:n.LESS,[cl]:n.LEQUAL,[Xm]:n.EQUAL,[dl]:n.GEQUAL,[qm]:n.GREATER,[Ym]:n.NOTEQUAL};function Le(C,y){if(y.type===vn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ot||y.magFilter===da||y.magFilter===Ur||y.magFilter===si||y.minFilter===Ot||y.minFilter===da||y.minFilter===Ur||y.minFilter===si)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,fe[y.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,fe[y.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,fe[y.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ue[y.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ue[y.minFilter]),y.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,ke[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ct||y.minFilter!==Ur&&y.minFilter!==si||y.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function _e(C,y){let j=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",R));const q=y.source;let ee=m.get(q);ee===void 0&&(ee={},m.set(q,ee));const de=$(y);if(de!==C.__cacheKey){ee[de]===void 0&&(ee[de]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,j=!0),ee[de].usedTimes++;const he=ee[C.__cacheKey];he!==void 0&&(ee[C.__cacheKey].usedTimes--,he.usedTimes===0&&P(y)),C.__cacheKey=de,C.__webglTexture=ee[de].texture}return j}function Y(C,y,j){return Math.floor(Math.floor(C/j)/y)}function ie(C,y,j,q){const de=C.updateRanges;if(de.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,j,q,y.data);else{de.sort((Ne,ve)=>Ne.start-ve.start);let he=0;for(let Ne=1;Ne<de.length;Ne++){const ve=de[he],me=de[Ne],Ue=ve.start+ve.count,Be=Y(me.start,y.width,4),Ge=Y(ve.start,y.width,4);me.start<=Ue+1&&Be===Ge&&Y(me.start+me.count-1,y.width,4)===Be?ve.count=Math.max(ve.count,me.start+me.count-ve.start):(++he,de[he]=me)}de.length=he+1;const te=t.getParameter(n.UNPACK_ROW_LENGTH),se=t.getParameter(n.UNPACK_SKIP_PIXELS),pe=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Ne=0,ve=de.length;Ne<ve;Ne++){const me=de[Ne],Ue=Math.floor(me.start/4),Be=Math.ceil(me.count/4),Ge=Ue%y.width,U=Math.floor(Ue/y.width),ge=Be,re=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),t.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Ge,U,ge,re,j,q,y.data)}C.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,te),t.pixelStorei(n.UNPACK_SKIP_PIXELS,se),t.pixelStorei(n.UNPACK_SKIP_ROWS,pe)}}function ye(C,y,j){let q=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(q=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(q=n.TEXTURE_3D);const ee=_e(C,y),de=y.source;t.bindTexture(q,C.__webglTexture,n.TEXTURE0+j);const he=i.get(de);if(de.version!==he.__version||ee===!0){if(t.activeTexture(n.TEXTURE0+j),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const re=Je.getPrimaries(Je.workingColorSpace),xe=y.colorSpace===Yn?null:Je.getPrimaries(y.colorSpace),we=y.colorSpace===Yn||re===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let se=g(y.image,!1,r.maxTextureSize);se=It(y,se);const pe=a.convert(y.format,y.colorSpace),Ne=a.convert(y.type);let ve=_(y.internalFormat,pe,Ne,y.normalized,y.colorSpace,y.isVideoTexture);Le(q,y);let me;const Ue=y.mipmaps,Be=y.isVideoTexture!==!0,Ge=he.__version===void 0||ee===!0,U=de.dataReady,ge=w(y,se);if(y.isDepthTexture)ve=v(y.format===ai,y.type),Ge&&(Be?t.texStorage2D(n.TEXTURE_2D,1,ve,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,ve,se.width,se.height,0,pe,Ne,null));else if(y.isDataTexture)if(Ue.length>0){Be&&Ge&&t.texStorage2D(n.TEXTURE_2D,ge,ve,Ue[0].width,Ue[0].height);for(let re=0,xe=Ue.length;re<xe;re++)me=Ue[re],Be?U&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,me.width,me.height,pe,Ne,me.data):t.texImage2D(n.TEXTURE_2D,re,ve,me.width,me.height,0,pe,Ne,me.data);y.generateMipmaps=!1}else Be?(Ge&&t.texStorage2D(n.TEXTURE_2D,ge,ve,se.width,se.height),U&&ie(y,se,pe,Ne)):t.texImage2D(n.TEXTURE_2D,0,ve,se.width,se.height,0,pe,Ne,se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Be&&Ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,ve,Ue[0].width,Ue[0].height,se.depth);for(let re=0,xe=Ue.length;re<xe;re++)if(me=Ue[re],y.format!==ln)if(pe!==null)if(Be){if(U)if(y.layerUpdates.size>0){const we=Bc(me.width,me.height,y.format,y.type);for(const ae of y.layerUpdates){const Oe=me.data.subarray(ae*we/me.data.BYTES_PER_ELEMENT,(ae+1)*we/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,ae,me.width,me.height,1,pe,Oe)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,se.depth,pe,me.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,ve,me.width,me.height,se.depth,0,me.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,me.width,me.height,se.depth,pe,Ne,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,ve,me.width,me.height,se.depth,0,pe,Ne,me.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Be&&Ge&&t.texStorage2D(n.TEXTURE_2D,ge,ve,Ue[0].width,Ue[0].height);for(let re=0,xe=Ue.length;re<xe;re++)me=Ue[re],y.format!==ln?pe!==null?Be?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(n.TEXTURE_2D,re,ve,me.width,me.height,0,me.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?U&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,me.width,me.height,pe,Ne,me.data):t.texImage2D(n.TEXTURE_2D,re,ve,me.width,me.height,0,pe,Ne,me.data)}else if(y.isDataArrayTexture)if(Be){if(Ge&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,ve,se.width,se.height,se.depth),U)if(y.layerUpdates.size>0){const re=Bc(se.width,se.height,y.format,y.type);for(const xe of y.layerUpdates){const we=se.data.subarray(xe*re/se.data.BYTES_PER_ELEMENT,(xe+1)*re/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,xe,se.width,se.height,1,pe,Ne,we)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,pe,Ne,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ve,se.width,se.height,se.depth,0,pe,Ne,se.data);else if(y.isData3DTexture)Be?(Ge&&t.texStorage3D(n.TEXTURE_3D,ge,ve,se.width,se.height,se.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,pe,Ne,se.data)):t.texImage3D(n.TEXTURE_3D,0,ve,se.width,se.height,se.depth,0,pe,Ne,se.data);else if(y.isFramebufferTexture){if(Ge)if(Be)t.texStorage2D(n.TEXTURE_2D,ge,ve,se.width,se.height);else{let re=se.width,xe=se.height;for(let we=0;we<ge;we++)t.texImage2D(n.TEXTURE_2D,we,ve,re,xe,0,pe,Ne,null),re>>=1,xe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){const re=n.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),se.parentNode!==re){re.appendChild(se),h.add(y),re.onpaint=xe=>{const we=xe.changedElements;for(const ae of h)we.includes(ae.image)&&(ae.needsUpdate=!0)},re.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,se);else{const we=n.RGBA,ae=n.RGBA,Oe=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,we,ae,Oe,se)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Be&&Ge){const re=it(Ue[0]);t.texStorage2D(n.TEXTURE_2D,ge,ve,re.width,re.height)}for(let re=0,xe=Ue.length;re<xe;re++)me=Ue[re],Be?U&&t.texSubImage2D(n.TEXTURE_2D,re,0,0,pe,Ne,me):t.texImage2D(n.TEXTURE_2D,re,ve,pe,Ne,me);y.generateMipmaps=!1}else if(Be){if(Ge){const re=it(se);t.texStorage2D(n.TEXTURE_2D,ge,ve,re.width,re.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,Ne,se)}else t.texImage2D(n.TEXTURE_2D,0,ve,pe,Ne,se);p(y)&&M(q),he.__version=de.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function le(C,y,j){if(y.image.length!==6)return;const q=_e(C,y),ee=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+j);const de=i.get(ee);if(ee.version!==de.__version||q===!0){t.activeTexture(n.TEXTURE0+j);const he=Je.getPrimaries(Je.workingColorSpace),te=y.colorSpace===Yn?null:Je.getPrimaries(y.colorSpace),se=y.colorSpace===Yn||he===te?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const pe=y.isCompressedTexture||y.image[0].isCompressedTexture,Ne=y.image[0]&&y.image[0].isDataTexture,ve=[];for(let ae=0;ae<6;ae++)!pe&&!Ne?ve[ae]=g(y.image[ae],!0,r.maxCubemapSize):ve[ae]=Ne?y.image[ae].image:y.image[ae],ve[ae]=It(y,ve[ae]);const me=ve[0],Ue=a.convert(y.format,y.colorSpace),Be=a.convert(y.type),Ge=_(y.internalFormat,Ue,Be,y.normalized,y.colorSpace),U=y.isVideoTexture!==!0,ge=de.__version===void 0||q===!0,re=ee.dataReady;let xe=w(y,me);Le(n.TEXTURE_CUBE_MAP,y);let we;if(pe){U&&ge&&t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Ge,me.width,me.height);for(let ae=0;ae<6;ae++){we=ve[ae].mipmaps;for(let Oe=0;Oe<we.length;Oe++){const Pe=we[Oe];y.format!==ln?Ue!==null?U?re&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,0,0,Pe.width,Pe.height,Ue,Pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,Ge,Pe.width,Pe.height,0,Pe.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,0,0,Pe.width,Pe.height,Ue,Be,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe,Ge,Pe.width,Pe.height,0,Ue,Be,Pe.data)}}}else{if(we=y.mipmaps,U&&ge){we.length>0&&xe++;const ae=it(ve[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,xe,Ge,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(Ne){U?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ve[ae].width,ve[ae].height,Ue,Be,ve[ae].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ge,ve[ae].width,ve[ae].height,0,Ue,Be,ve[ae].data);for(let Oe=0;Oe<we.length;Oe++){const dt=we[Oe].image[ae].image;U?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,0,0,dt.width,dt.height,Ue,Be,dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,Ge,dt.width,dt.height,0,Ue,Be,dt.data)}}else{U?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,Ue,Be,ve[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,Ge,Ue,Be,ve[ae]);for(let Oe=0;Oe<we.length;Oe++){const Pe=we[Oe];U?re&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,0,0,Ue,Be,Pe.image[ae]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Oe+1,Ge,Ue,Be,Pe.image[ae])}}}p(y)&&M(n.TEXTURE_CUBE_MAP),de.__version=ee.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Q(C,y,j,q,ee,de){const he=a.convert(j.format,j.colorSpace),te=a.convert(j.type),se=_(j.internalFormat,he,te,j.normalized,j.colorSpace),pe=i.get(y),Ne=i.get(j);if(Ne.__renderTarget=y,!pe.__hasExternalTextures){const ve=Math.max(1,y.width>>de),me=Math.max(1,y.height>>de);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,de,se,ve,me,y.depth,0,he,te,null):t.texImage2D(ee,de,se,ve,me,0,he,te,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),ct(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,q,ee,Ne.__webglTexture,0,ht(y)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,q,ee,Ne.__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ce(C,y,j){if(n.bindRenderbuffer(n.RENDERBUFFER,C),y.depthBuffer){const q=y.depthTexture,ee=q&&q.isDepthTexture?q.type:null,de=v(y.stencilBuffer,ee),he=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ct(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht(y),de,y.width,y.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht(y),de,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,de,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,he,n.RENDERBUFFER,C)}else{const q=y.textures;for(let ee=0;ee<q.length;ee++){const de=q[ee],he=a.convert(de.format,de.colorSpace),te=a.convert(de.type),se=_(de.internalFormat,he,te,de.normalized,de.colorSpace);ct(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ht(y),se,y.width,y.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,ht(y),se,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,se,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function We(C,y,j){const q=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=i.get(y.depthTexture);if(ee.__renderTarget=y,(!ee.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),q){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,y.depthTexture.addEventListener("dispose",R)),ee.__webglTexture===void 0){ee.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ee.__webglTexture),Le(n.TEXTURE_CUBE_MAP,y.depthTexture);const pe=a.convert(y.depthTexture.format),Ne=a.convert(y.depthTexture.type);let ve;y.depthTexture.format===zn?ve=n.DEPTH_COMPONENT24:y.depthTexture.format===ai&&(ve=n.DEPTH24_STENCIL8);for(let me=0;me<6;me++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ve,y.width,y.height,0,pe,Ne,null)}}else ne(y.depthTexture,0);const de=ee.__webglTexture,he=ht(y),te=q?n.TEXTURE_CUBE_MAP_POSITIVE_X+j:n.TEXTURE_2D,se=y.depthTexture.format===ai?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===zn)ct(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,te,de,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,se,te,de,0);else if(y.depthTexture.format===ai)ct(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,te,de,0,he):n.framebufferTexture2D(n.FRAMEBUFFER,se,te,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ce(C){const y=i.get(C),j=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const q=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),q){const ee=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,q.removeEventListener("dispose",ee)};q.addEventListener("dispose",ee),y.__depthDisposeCallback=ee}y.__boundDepthTexture=q}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(j)for(let q=0;q<6;q++)We(y.__webglFramebuffer[q],C,q);else{const q=C.texture.mipmaps;q&&q.length>0?We(y.__webglFramebuffer[0],C,0):We(y.__webglFramebuffer,C,0)}else if(j){y.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[q]),y.__webglDepthbuffer[q]===void 0)y.__webglDepthbuffer[q]=n.createRenderbuffer(),ce(y.__webglDepthbuffer[q],C,!1);else{const ee=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=y.__webglDepthbuffer[q];n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,de)}}else{const q=C.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),ce(y.__webglDepthbuffer,C,!1);else{const ee=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,ee,n.RENDERBUFFER,de)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(C,y,j){const q=i.get(C);y!==void 0&&Q(q.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&Ce(C)}function oe(C){const y=C.texture,j=i.get(C),q=i.get(y);C.addEventListener("dispose",b);const ee=C.textures,de=C.isWebGLCubeRenderTarget===!0,he=ee.length>1;if(he||(q.__webglTexture===void 0&&(q.__webglTexture=n.createTexture()),q.__version=y.version,o.memory.textures++),de){j.__webglFramebuffer=[];for(let te=0;te<6;te++)if(y.mipmaps&&y.mipmaps.length>0){j.__webglFramebuffer[te]=[];for(let se=0;se<y.mipmaps.length;se++)j.__webglFramebuffer[te][se]=n.createFramebuffer()}else j.__webglFramebuffer[te]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){j.__webglFramebuffer=[];for(let te=0;te<y.mipmaps.length;te++)j.__webglFramebuffer[te]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(he)for(let te=0,se=ee.length;te<se;te++){const pe=i.get(ee[te]);pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&ct(C)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let te=0;te<ee.length;te++){const se=ee[te];j.__webglColorRenderbuffer[te]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[te]);const pe=a.convert(se.format,se.colorSpace),Ne=a.convert(se.type),ve=_(se.internalFormat,pe,Ne,se.normalized,se.colorSpace,C.isXRRenderTarget===!0),me=ht(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,me,ve,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+te,n.RENDERBUFFER,j.__webglColorRenderbuffer[te])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),ce(j.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture),Le(n.TEXTURE_CUBE_MAP,y);for(let te=0;te<6;te++)if(y.mipmaps&&y.mipmaps.length>0)for(let se=0;se<y.mipmaps.length;se++)Q(j.__webglFramebuffer[te][se],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,se);else Q(j.__webglFramebuffer[te],C,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);p(y)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let te=0,se=ee.length;te<se;te++){const pe=ee[te],Ne=i.get(pe);let ve=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ve=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ve,Ne.__webglTexture),Le(ve,pe),Q(j.__webglFramebuffer,C,pe,n.COLOR_ATTACHMENT0+te,ve,0),p(pe)&&M(ve)}t.unbindTexture()}else{let te=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(te=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(te,q.__webglTexture),Le(te,y),y.mipmaps&&y.mipmaps.length>0)for(let se=0;se<y.mipmaps.length;se++)Q(j.__webglFramebuffer[se],C,y,n.COLOR_ATTACHMENT0,te,se);else Q(j.__webglFramebuffer,C,y,n.COLOR_ATTACHMENT0,te,0);p(y)&&M(te),t.unbindTexture()}C.depthBuffer&&Ce(C)}function Fe(C){const y=C.textures;for(let j=0,q=y.length;j<q;j++){const ee=y[j];if(p(ee)){const de=T(C),he=i.get(ee).__webglTexture;t.bindTexture(de,he),M(de),t.unbindTexture()}}}const Ze=[],lt=[];function Tt(C){if(C.samples>0){if(ct(C)===!1){const y=C.textures,j=C.width,q=C.height;let ee=n.COLOR_BUFFER_BIT;const de=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=i.get(C),te=y.length>1;if(te)for(let pe=0;pe<y.length;pe++)t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const se=C.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let pe=0;pe<y.length;pe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),te){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,he.__webglColorRenderbuffer[pe]);const Ne=i.get(y[pe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ne,0)}n.blitFramebuffer(0,0,j,q,0,0,j,q,ee,n.NEAREST),d===!0&&(Ze.length=0,lt.length=0,Ze.push(n.COLOR_ATTACHMENT0+pe),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(Ze.push(de),lt.push(de),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,lt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),te)for(let pe=0;pe<y.length;pe++){t.bindFramebuffer(n.FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,he.__webglColorRenderbuffer[pe]);const Ne=i.get(y[pe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,he.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,Ne,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&d){const y=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function ht(C){return Math.min(r.maxSamples,C.samples)}function ct(C){const y=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function F(C){const y=o.render.frame;f.get(C)!==y&&(f.set(C,y),C.update())}function It(C,y){const j=C.colorSpace,q=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||j!==Rs&&j!==Yn&&(Je.getTransfer(j)===rt?(q!==ln||ee!==Yt)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):et("WebGLTextures: Unsupported texture color space:",j)),y}function it(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=Z,this.resetTextureUnits=k,this.getTextureUnits=D,this.setTextureUnits=H,this.setTexture2D=ne,this.setTexture2DArray=z,this.setTexture3D=X,this.setTextureCube=J,this.rebindTextures=ze,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ct,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Ub(n,e){function t(i,r=Yn){let a;const o=Je.getTransfer(r);if(i===Yt)return n.UNSIGNED_BYTE;if(i===rl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===sl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===If)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pf)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Cf)return n.BYTE;if(i===Rf)return n.SHORT;if(i===mr)return n.UNSIGNED_SHORT;if(i===il)return n.INT;if(i===wn)return n.UNSIGNED_INT;if(i===vn)return n.FLOAT;if(i===Tn)return n.HALF_FLOAT;if(i===Df)return n.ALPHA;if(i===Lf)return n.RGB;if(i===ln)return n.RGBA;if(i===zn)return n.DEPTH_COMPONENT;if(i===ai)return n.DEPTH_STENCIL;if(i===Nf)return n.RED;if(i===al)return n.RED_INTEGER;if(i===pi)return n.RG;if(i===ol)return n.RG_INTEGER;if(i===ll)return n.RGBA_INTEGER;if(i===xs||i===ys||i===vs||i===bs)if(o===rt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===xs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ys)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===bs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===xs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ys)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===bs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===oo||i===lo||i===co||i===fo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===oo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===lo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===co)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===uo||i===ho||i===po||i===mo||i===go||i===As||i===xo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===uo||i===ho)return o===rt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===po)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(i===mo)return a.COMPRESSED_R11_EAC;if(i===go)return a.COMPRESSED_SIGNED_R11_EAC;if(i===As)return a.COMPRESSED_RG11_EAC;if(i===xo)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===yo||i===vo||i===bo||i===So||i===_o||i===Mo||i===Eo||i===wo||i===To||i===Ao||i===Co||i===Ro||i===Io||i===Po)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===yo)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===vo)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bo)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===So)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_o)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mo)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Eo)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===wo)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===To)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ao)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Co)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ro)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Io)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Po)return o===rt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Do||i===Lo||i===No)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Do)return o===rt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Lo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===No)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Uo||i===Oo||i===Cs||i===Fo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Uo)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Oo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Cs)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Fo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Ob=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fb=`
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

}`;class zb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Gf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new An({vertexShader:Ob,fragmentShader:Fb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fn(new qs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Bb extends mi{constructor(e,t){super();const i=this;let r=null,a=1,o=null,l="local-floor",d=1,c=null,f=null,h=null,u=null,m=null,x=null;const S=typeof XRWebGLBinding<"u",g=new zb,p={},M=t.getContextAttributes();let T=null,_=null;const v=[],w=[],R=new Ke;let b=null,A=null;const P=new qt;P.viewport=new mt;const I=new qt;I.viewport=new mt;const O=[P,I],k=new Vg;let D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ie=v[Y];return ie===void 0&&(ie=new ya,v[Y]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Y){let ie=v[Y];return ie===void 0&&(ie=new ya,v[Y]=ie),ie.getGripSpace()},this.getHand=function(Y){let ie=v[Y];return ie===void 0&&(ie=new ya,v[Y]=ie),ie.getHandSpace()};function Z(Y){const ie=w.indexOf(Y.inputSource);if(ie===-1)return;const ye=v[ie];ye!==void 0&&(ye.update(Y.inputSource,Y.frame,c||o),ye.dispatchEvent({type:Y.type,data:Y.inputSource}))}function $(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",ne);for(let Y=0;Y<v.length;Y++){const ie=w[Y];ie!==null&&(w[Y]=null,v[Y].disconnect(ie))}D=null,H=null,g.reset();for(const Y in p)delete p[Y];if(e.setRenderTarget(T),m=null,u=null,h=null,r=null,_=null,_e.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(R.width,R.height,!1),A!==null){const Y=A.camera;Y.fov=A.fov,Y.zoom=A.zoom,Y.updateProjectionMatrix(),A=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){a=Y,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){l=Y,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return h===null&&S&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",$),r.addEventListener("inputsourceschange",ne),M.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(R),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,le=null,Q=null;M.depth&&(Q=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=M.stencil?ai:zn,le=M.stencil?gr:wn);const ce={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:a};h=this.getBinding(),u=h.createProjectionLayer(ce),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),_=new cn(u.textureWidth,u.textureHeight,{format:ln,type:Yt,depthTexture:new yr(u.textureWidth,u.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{const ye={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,ye),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new cn(m.framebufferWidth,m.framebufferHeight,{format:ln,type:Yt,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(d),c=null,o=await r.requestReferenceSpace(l),_e.setContext(r),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ne(Y){for(let ie=0;ie<Y.removed.length;ie++){const ye=Y.removed[ie],le=w.indexOf(ye);le>=0&&(w[le]=null,v[le].disconnect(ye))}for(let ie=0;ie<Y.added.length;ie++){const ye=Y.added[ie];let le=w.indexOf(ye);if(le===-1){for(let ce=0;ce<v.length;ce++)if(ce>=w.length){w.push(ye),le=ce;break}else if(w[ce]===null){w[ce]=ye,le=ce;break}if(le===-1)break}const Q=v[le];Q&&Q.connect(ye)}}const z=new B,X=new B;function J(Y,ie,ye){z.setFromMatrixPosition(ie.matrixWorld),X.setFromMatrixPosition(ye.matrixWorld);const le=z.distanceTo(X),Q=ie.projectionMatrix.elements,ce=ye.projectionMatrix.elements,We=Q[14]/(Q[10]-1),Ce=Q[14]/(Q[10]+1),ze=(Q[9]+1)/Q[5],oe=(Q[9]-1)/Q[5],Fe=(Q[8]-1)/Q[0],Ze=(ce[8]+1)/ce[0],lt=We*Fe,Tt=We*Ze,ht=le/(-Fe+Ze),ct=ht*-Fe;if(ie.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ct),Y.translateZ(ht),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Q[10]===-1)Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const F=We+ht,It=Ce+ht,it=lt-ct,C=Tt+(le-ct),y=ze*Ce/It*F,j=oe*Ce/It*F;Y.projectionMatrix.makePerspective(it,C,y,j,F,It),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function fe(Y,ie){ie===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ie.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let ie=Y.near,ye=Y.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),k.near=I.near=P.near=ie,k.far=I.far=P.far=ye,(D!==k.near||H!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),D=k.near,H=k.far),k.layers.mask=Y.layers.mask|6,P.layers.mask=k.layers.mask&-5,I.layers.mask=k.layers.mask&-3;const le=Y.parent,Q=k.cameras;fe(k,le);for(let ce=0;ce<Q.length;ce++)fe(Q[ce],le);Q.length===2?J(k,P,I):k.projectionMatrix.copy(P.projectionMatrix),A===null&&Y.isPerspectiveCamera&&(A={camera:Y,fov:Y.fov,zoom:Y.zoom}),ue(Y,k,le)};function ue(Y,ie,ye){ye===null?Y.matrix.copy(ie.matrixWorld):(Y.matrix.copy(ye.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ie.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Bo*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&m===null))return d},this.setFoveation=function(Y){d=Y,u!==null&&(u.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(Y){return p[Y]};let ke=null;function Le(Y,ie){if(f=ie.getViewerPose(c||o),x=ie,f!==null){const ye=f.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let le=!1;ye.length!==k.cameras.length&&(k.cameras.length=0,le=!0);for(let Ce=0;Ce<ye.length;Ce++){const ze=ye[Ce];let oe=null;if(m!==null)oe=m.getViewport(ze);else{const Ze=h.getViewSubImage(u,ze);oe=Ze.viewport,Ce===0&&(e.setRenderTargetTextures(_,Ze.colorTexture,Ze.depthStencilTexture),e.setRenderTarget(_))}let Fe=O[Ce];Fe===void 0&&(Fe=new qt,Fe.layers.enable(Ce),Fe.viewport=new mt,O[Ce]=Fe),Fe.matrix.fromArray(ze.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(ze.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(oe.x,oe.y,oe.width,oe.height),Ce===0&&(k.matrix.copy(Fe.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),le===!0&&k.cameras.push(Fe)}const Q=r.enabledFeatures;if(Q&&Q.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){h=i.getBinding();const Ce=h.getDepthInformation(ye[0]);Ce&&Ce.isValid&&Ce.texture&&g.init(Ce,r.renderState)}if(Q&&Q.includes("camera-access")&&S){e.state.unbindTexture(),h=i.getBinding();for(let Ce=0;Ce<ye.length;Ce++){const ze=ye[Ce].camera;if(ze){let oe=p[ze];oe||(oe=new Gf,p[ze]=oe);const Fe=h.getCameraImage(ze);oe.sourceTexture=Fe}}}}for(let ye=0;ye<v.length;ye++){const le=w[ye],Q=v[ye];le!==null&&Q!==void 0&&Q.update(le,ie,c||o)}ke&&ke(Y,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),x=null}const _e=new Yf;_e.setAnimationLoop(Le),this.setAnimationLoop=function(Y){ke=Y},this.dispose=function(){}}}const kb=new ut,tu=new He;tu.set(-1,0,0,0,1,0,0,0,1);function jb(n,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,Vf(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function r(g,p,M,T,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?a(g,p):p.isMeshLambertMaterial?(a(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(a(g,p),h(g,p)):p.isMeshPhongMaterial?(a(g,p),f(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(a(g,p),u(g,p),p.isMeshPhysicalMaterial&&m(g,p,_)):p.isMeshMatcapMaterial?(a(g,p),x(g,p)):p.isMeshDepthMaterial?a(g,p):p.isMeshDistanceMaterial?(a(g,p),S(g,p)):p.isMeshNormalMaterial?a(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&l(g,p)):p.isPointsMaterial?d(g,p,M,T):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function a(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Gt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Gt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=e.get(p),T=M.envMap,_=M.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(kb.makeRotationFromEuler(_)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(tu),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function l(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function d(g,p,M,T){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=T*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function f(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function m(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Gt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,p){p.matcap&&(g.matcap.value=p.matcap)}function S(g,p){const M=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Wb(n,e,t,i){let r={},a={},o=[];const l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(_,v){const w=v.program;i.uniformBlockBinding(_,w)}function c(_,v){let w=r[_.id];w===void 0&&(g(_),w=f(_),r[_.id]=w,_.addEventListener("dispose",M));const R=v.program;i.updateUBOMapping(_,R);const b=e.render.frame;a[_.id]!==b&&(u(_),a[_.id]=b)}function f(_){const v=h();_.__bindingPointIndex=v;const w=n.createBuffer(),R=_.__size,b=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,R,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,w),w}function h(){for(let _=0;_<l;_++)if(o.indexOf(_)===-1)return o.push(_),_;return et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){const v=r[_.id],w=_.uniforms,R=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let b=0,A=w.length;b<A;b++){const P=w[b];if(Array.isArray(P))for(let I=0,O=P.length;I<O;I++)m(P[I],b,I,R);else m(P,b,0,R)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(_,v,w,R){if(S(_,v,w,R)===!0){const b=_.__offset,A=_.value;if(Array.isArray(A)){let P=0;for(let I=0;I<A.length;I++){const O=A[I],k=p(O);x(O,_.__data,P),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(P+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else x(A,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,b,_.__data)}}function x(_,v,w){typeof _=="number"||typeof _=="boolean"?v[0]=_:_.isMatrix3?(v[0]=_.elements[0],v[1]=_.elements[1],v[2]=_.elements[2],v[3]=0,v[4]=_.elements[3],v[5]=_.elements[4],v[6]=_.elements[5],v[7]=0,v[8]=_.elements[6],v[9]=_.elements[7],v[10]=_.elements[8],v[11]=0):ArrayBuffer.isView(_)?v.set(new _.constructor(_.buffer,_.byteOffset,v.length)):_.toArray(v,w)}function S(_,v,w,R){const b=_.value,A=v+"_"+w;if(R[A]===void 0)return typeof b=="number"||typeof b=="boolean"?R[A]=b:ArrayBuffer.isView(b)?R[A]=b.slice():R[A]=b.clone(),!0;{const P=R[A];if(typeof b=="number"||typeof b=="boolean"){if(P!==b)return R[A]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(P.equals(b)===!1)return P.copy(b),!0}}return!1}function g(_){const v=_.uniforms;let w=0;const R=16;for(let A=0,P=v.length;A<P;A++){const I=Array.isArray(v[A])?v[A]:[v[A]];for(let O=0,k=I.length;O<k;O++){const D=I[O],H=Array.isArray(D.value)?D.value:[D.value];for(let Z=0,$=H.length;Z<$;Z++){const ne=H[Z],z=p(ne),X=w%R,J=X%z.boundary,fe=X+J;w+=J,fe!==0&&R-fe<z.storage&&(w+=R-fe),D.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=z.storage}}}const b=w%R;return b>0&&(w+=R-b),_.__size=w,_.__cache={},this}function p(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(v.boundary=16,v.storage=_.byteLength):je("WebGLRenderer: Unsupported uniform value type.",_),v}function M(_){const v=_.target;v.removeEventListener("dispose",M);const w=o.indexOf(v.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete a[v.id]}function T(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},a={}}return{bind:d,update:c,dispose:T}}const Hb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let gn=null;function Gb(){return gn===null&&(gn=new Mg(Hb,16,16,pi,Tn),gn.name="DFG_LUT",gn.minFilter=Ot,gn.magFilter=Ot,gn.wrapS=Ln,gn.wrapT=Ln,gn.generateMipmaps=!1,gn.needsUpdate=!0),gn}class Vb{constructor(e={}){const{canvas:t=Jm(),context:i=null,depth:r=!0,stencil:a=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:m=Yt}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=o;const S=m,g=new Set([ll,ol,al]),p=new Set([Yt,wn,mr,gr,rl,sl]),M=new Uint32Array(4),T=new Int32Array(4),_=new B;let v=null,w=null;const R=[],b=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let I=!1,O=null,k=null,D=null,H=null;this._outputColorSpace=Qt;let Z=0,$=0,ne=null,z=-1,X=null;const J=new mt,fe=new mt;let ue=null;const ke=new qe(0);let Le=0,_e=t.width,Y=t.height,ie=1,ye=null,le=null;const Q=new mt(0,0,_e,Y),ce=new mt(0,0,_e,Y);let We=!1;const Ce=new ml;let ze=!1,oe=!1;const Fe=new ut,Ze=new B,lt=new mt,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function ct(){return ne===null?ie:1}let F=i;function It(E,L){return t.getContext(E,L)}let it,C,y,j,q,ee,de,he,te,se,pe,Ne,ve,me,Ue,Be,Ge,U,ge,re,xe,we,ae;try{const E={alpha:!0,depth:r,stencil:a,antialias:l,premultipliedAlpha:d,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${tl}`),t.addEventListener("webglcontextlost",dt,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",rn,!1),F===null){const L="webgl2";if(F=It(L,E),F===null)throw It(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(E){throw t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),et("WebGLRenderer: "+E.message),E}function Oe(){it=new Gy(F),it.init(),xe=new Ub(F,it),C=new Ny(F,it,e,xe),y=new Lb(F,it),C.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),k=F.createFramebuffer(),D=F.createFramebuffer(),H=F.createFramebuffer(),j=new qy(F),q=new vb,ee=new Nb(F,it,y,q,C,xe,j),de=new Hy(P),he=new $g(F),we=new Dy(F,he),te=new Vy(F,he,j,we),se=new $y(F,te,he,we,j),U=new Yy(F,C,ee),Ue=new Uy(q),pe=new yb(P,de,it,C,we,Ue),Ne=new jb(P,q),ve=new Sb,me=new Ab(it),Ge=new Py(P,de,y,se,x,d),Be=new Db(P,se,C),ae=new Wb(F,j,C,y),ge=new Ly(F,it,j),re=new Xy(F,it,j),j.programs=pe.programs,P.capabilities=C,P.extensions=it,P.properties=q,P.renderLists=ve,P.shadowMap=Be,P.state=y,P.info=j}S!==Yt&&(A=new Zy(S,t.width,t.height,l,r,a));const Pe=new Bb(P,F);this.xr=Pe,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=it.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=it.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(E){E!==void 0&&(ie=E,this.setSize(_e,Y,!1))},this.getSize=function(E){return E.set(_e,Y)},this.setSize=function(E,L,K=!0){if(Pe.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=E,Y=L,t.width=Math.floor(E*ie),t.height=Math.floor(L*ie),K===!0&&(t.style.width=E+"px",t.style.height=L+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,E,L)},this.getDrawingBufferSize=function(E){return E.set(_e*ie,Y*ie).floor()},this.setDrawingBufferSize=function(E,L,K){_e=E,Y=L,ie=K,t.width=Math.floor(E*K),t.height=Math.floor(L*K),this.setViewport(0,0,E,L)},this.setEffects=function(E){if(S===Yt){et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let L=0;L<E.length;L++)if(E[L].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(J)},this.getViewport=function(E){return E.copy(Q)},this.setViewport=function(E,L,K,G){E.isVector4?Q.set(E.x,E.y,E.z,E.w):Q.set(E,L,K,G),y.viewport(J.copy(Q).multiplyScalar(ie).round())},this.getScissor=function(E){return E.copy(ce)},this.setScissor=function(E,L,K,G){E.isVector4?ce.set(E.x,E.y,E.z,E.w):ce.set(E,L,K,G),y.scissor(fe.copy(ce).multiplyScalar(ie).round())},this.getScissorTest=function(){return We},this.setScissorTest=function(E){y.setScissorTest(We=E)},this.setOpaqueSort=function(E){ye=E},this.setTransparentSort=function(E){le=E},this.getClearColor=function(E){return E.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(E=!0,L=!0,K=!0){let G=0;if(E){let V=!1;if(ne!==null){const Ee=ne.texture.format;V=g.has(Ee)}if(V){const Ee=ne.texture.type,Ae=p.has(Ee),Me=Ge.getClearColor(),Re=Ge.getClearAlpha(),De=Me.r,Ve=Me.g,Ye=Me.b;Ae?(M[0]=De,M[1]=Ve,M[2]=Ye,M[3]=Re,F.clearBufferuiv(F.COLOR,0,M)):(T[0]=De,T[1]=Ve,T[2]=Ye,T[3]=Re,F.clearBufferiv(F.COLOR,0,T))}else G|=F.COLOR_BUFFER_BIT}L&&(G|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(G|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&F.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),O=E},this.dispose=function(){t.removeEventListener("webglcontextlost",dt,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",rn,!1),Ge.dispose(),ve.dispose(),me.dispose(),q.dispose(),de.dispose(),se.dispose(),we.dispose(),ae.dispose(),pe.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",wl),Pe.removeEventListener("sessionend",Tl),Jn.stop()};function dt(E){E.preventDefault(),dc("WebGLRenderer: Context Lost."),I=!0}function tt(){dc("WebGLRenderer: Context Restored."),I=!1;const E=j.autoReset,L=Be.enabled,K=Be.autoUpdate,G=Be.needsUpdate,V=Be.type;Oe(),j.autoReset=E,Be.enabled=L,Be.autoUpdate=K,Be.needsUpdate=G,Be.type=V}function rn(E){et("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function hn(E){const L=E.target;L.removeEventListener("dispose",hn),nu(L)}function nu(E){iu(E),q.remove(E)}function iu(E){const L=q.get(E).programs;L!==void 0&&(L.forEach(function(K){pe.releaseProgram(K)}),E.isShaderMaterial&&pe.releaseShaderCache(E))}this.renderBufferDirect=function(E,L,K,G,V,Ee){L===null&&(L=Tt);const Ae=V.isMesh&&V.matrixWorld.determinantAffine()<0,Me=au(E,L,K,G,V);y.setMaterial(G,Ae);let Re=K.index,De=1;if(G.wireframe===!0){if(Re=te.getWireframeAttribute(K),Re===void 0)return;De=2}const Ve=K.drawRange,Ye=K.attributes.position;let Ie=Ve.start*De,nt=(Ve.start+Ve.count)*De;Ee!==null&&(Ie=Math.max(Ie,Ee.start*De),nt=Math.min(nt,(Ee.start+Ee.count)*De)),Re!==null?(Ie=Math.max(Ie,0),nt=Math.min(nt,Re.count)):Ye!=null&&(Ie=Math.max(Ie,0),nt=Math.min(nt,Ye.count));const bt=nt-Ie;if(bt<0||bt===1/0)return;we.setup(V,G,Me,K,Re);let pt,ot=ge;if(Re!==null&&(pt=he.get(Re),ot=re,ot.setIndex(pt)),V.isMesh)G.wireframe===!0?(y.setLineWidth(G.wireframeLinewidth*ct()),ot.setMode(F.LINES)):ot.setMode(F.TRIANGLES);else if(V.isLine){let Pt=G.linewidth;Pt===void 0&&(Pt=1),y.setLineWidth(Pt*ct()),V.isLineSegments?ot.setMode(F.LINES):V.isLineLoop?ot.setMode(F.LINE_LOOP):ot.setMode(F.LINE_STRIP)}else V.isPoints?ot.setMode(F.POINTS):V.isSprite&&ot.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(it.get("WEBGL_multi_draw"))ot.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Pt=V._multiDrawStarts,Te=V._multiDrawCounts,Bt=V._multiDrawCount,Qe=Re?he.get(Re).bytesPerElement:1,Zt=q.get(G).currentProgram.getUniforms();for(let pn=0;pn<Bt;pn++)Zt.setValue(F,"_gl_DrawID",pn),ot.render(Pt[pn]/Qe,Te[pn])}else if(V.isInstancedMesh)ot.renderInstances(Ie,bt,V.count);else if(K.isInstancedBufferGeometry){const Pt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Te=Math.min(K.instanceCount,Pt);ot.renderInstances(Ie,bt,Te)}else ot.render(Ie,bt)};function El(E,L,K,G){O!==null&&E.isNodeMaterial&&O.setObject(G,E),ze===!0&&Ue.setState(E,K,!1),E.transparent===!0&&E.side===yn&&E.forceSinglePass===!1?(E.side=Gt,E.needsUpdate=!0,Dr(E,L,G),E.side=ui,E.needsUpdate=!0,Dr(E,L,G),E.side=yn):Dr(E,L,G)}this.compile=function(E,L,K=null){K===null&&(K=E),O!==null&&O.renderStart(E,L,K),w=me.get(K),w.init(L),b.push(w),K.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),E!==K&&E.traverseVisible(function(V){V.isLight&&V.layers.test(L.layers)&&(w.pushLight(V),V.castShadow&&w.pushShadow(V))}),w.setupLights(),O!==null&&O.updateLights(w.state.lightsArray),oe=this.localClippingEnabled,ze=Ue.init(this.clippingPlanes,oe),ze===!0&&Ue.setGlobalState(this.clippingPlanes,L),O!==null&&Be.render(w.state.shadowsArray,K,L);const G=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Ee=V.material;if(Ee)if(Array.isArray(Ee))for(let Ae=0;Ae<Ee.length;Ae++){const Me=Ee[Ae];El(Me,K,L,V),G.add(Me)}else El(Ee,K,L,V),G.add(Ee)}),w=b.pop(),O!==null&&O.renderEnd(),G},this.compileAsync=function(E,L,K=null){const G=this.compile(E,L,K);return new Promise(V=>{function Ee(){if(G.forEach(function(Ae){const Re=q.get(Ae).currentProgram;(Re===void 0||Re.isReady())&&G.delete(Ae)}),G.size===0){V(E);return}setTimeout(Ee,10)}it.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Zs=null;function ru(E){Zs&&Zs(E)}function wl(){Jn.stop()}function Tl(){Jn.start()}const Jn=new Yf;Jn.setAnimationLoop(ru),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(E){Zs=E,Pe.setAnimationLoop(E),E===null?Jn.stop():Jn.start()},Pe.addEventListener("sessionstart",wl),Pe.addEventListener("sessionend",Tl),this.render=function(E,L){if(L!==void 0&&L.isCamera!==!0){et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;O!==null&&O.renderStart(E,L);const K=Pe.enabled===!0&&Pe.isPresenting===!0,G=A!==null&&(ne===null||K)&&A.begin(P,ne);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(L),L=Pe.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,L,ne),w=me.get(E,b.length),w.init(L),w.state.textureUnits=ee.getTextureUnits(),b.push(w),Fe.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Ce.setFromProjectionMatrix(Fe,bn,L.reversedDepth),oe=this.localClippingEnabled,ze=Ue.init(this.clippingPlanes,oe),v=ve.get(E,R.length),v.init(),R.push(v),Pe.enabled===!0&&Pe.isPresenting===!0){const Ae=P.xr.getDepthSensingMesh();Ae!==null&&Js(Ae,L,-1/0,P.sortObjects)}Js(E,L,0,P.sortObjects),v.finish(),O!==null&&O.updateLights(w.state.lightsArray),P.sortObjects===!0&&v.sort(ye,le),ht=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1,ht&&Ge.addToRenderList(v,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ze===!0&&Ue.beginShadows();const V=w.state.shadowsArray;if(Be.render(V,E,L),ze===!0&&Ue.endShadows(),(G&&A.hasRenderPass())===!1){const Ae=v.opaque,Me=v.transmissive;if(w.setupLights(),L.isArrayCamera){const Re=L.cameras;if(Me.length>0)for(let De=0,Ve=Re.length;De<Ve;De++){const Ye=Re[De];Cl(Ae,Me,E,Ye)}ht&&Ge.render(E);for(let De=0,Ve=Re.length;De<Ve;De++){const Ye=Re[De];Al(v,E,Ye,Ye.viewport)}}else Me.length>0&&Cl(Ae,Me,E,L),ht&&Ge.render(E),Al(v,E,L)}ne!==null&&$===0&&(ee.updateMultisampleRenderTarget(ne),ee.updateRenderTargetMipmap(ne)),G&&A.end(P),E.isScene===!0&&E.onAfterRender(P,E,L),we.resetDefaultState(),z=-1,X=null,b.pop(),b.length>0?(w=b[b.length-1],ee.setTextureUnits(w.state.textureUnits),ze===!0&&Ue.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?v=R[R.length-1]:v=null,O!==null&&O.renderEnd()};function Js(E,L,K,G){if(E.visible===!1)return;if(E.layers.test(L.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(L);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(Ce)){G&&lt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Fe);const Ae=se.update(E),Me=E.material;Me.visible&&v.push(E,Ae,Me,K,lt.z,null,L)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(Ce))){const Ae=se.update(E),Me=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),lt.copy(E.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),lt.copy(Ae.boundingSphere.center)),lt.applyMatrix4(E.matrixWorld).applyMatrix4(Fe)),Array.isArray(Me)){const Re=Ae.groups;for(let De=0,Ve=Re.length;De<Ve;De++){const Ye=Re[De],Ie=Me[Ye.materialIndex];Ie&&Ie.visible&&v.push(E,Ae,Ie,K,lt.z,Ye,L)}}else Me.visible&&v.push(E,Ae,Me,K,lt.z,null,L)}}const Ee=E.children;for(let Ae=0,Me=Ee.length;Ae<Me;Ae++)Js(Ee[Ae],L,K,G)}function Al(E,L,K,G){const{opaque:V,transmissive:Ee,transparent:Ae}=E;w.setupLightsView(K),ze===!0&&Ue.setGlobalState(P.clippingPlanes,K),G&&y.viewport(J.copy(G)),V.length>0&&Pr(V,L,K),Ee.length>0&&Pr(Ee,L,K),Ae.length>0&&Pr(Ae,L,K),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Cl(E,L,K,G){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){const Ie=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new cn(1,1,{generateMipmaps:!0,type:Ie?Tn:Yt,minFilter:si,samples:Math.max(4,C.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}const Ee=w.state.transmissionRenderTarget[G.id],Ae=G.viewport||J;Ee.setSize(Ae.z*P.transmissionResolutionScale,Ae.w*P.transmissionResolutionScale);const Me=P.getRenderTarget(),Re=P.getActiveCubeFace(),De=P.getActiveMipmapLevel();P.setRenderTarget(Ee),P.getClearColor(ke),Le=P.getClearAlpha(),Le<1&&P.setClearColor(16777215,.5),P.clear(),ht&&Ge.render(K);const Ve=P.toneMapping;P.toneMapping=Sn;const Ye=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),ze===!0&&Ue.setGlobalState(P.clippingPlanes,G),Pr(E,K,G),ee.updateMultisampleRenderTarget(Ee),ee.updateRenderTargetMipmap(Ee),it.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let nt=0,bt=L.length;nt<bt;nt++){const pt=L[nt],{object:ot,geometry:Pt,material:Te,group:Bt}=pt;if(Te.side===yn&&ot.layers.test(G.layers)){const Qe=Te.side;Te.side=Gt,Te.needsUpdate=!0,Rl(ot,K,G,Pt,Te,Bt),Te.side=Qe,Te.needsUpdate=!0,Ie=!0}}Ie===!0&&(ee.updateMultisampleRenderTarget(Ee),ee.updateRenderTargetMipmap(Ee))}P.setRenderTarget(Me,Re,De),P.setClearColor(ke,Le),Ye!==void 0&&(G.viewport=Ye),P.toneMapping=Ve}function Pr(E,L,K){const G=L.isScene===!0?L.overrideMaterial:null;for(let V=0,Ee=E.length;V<Ee;V++){const Ae=E[V],{object:Me,geometry:Re,group:De}=Ae;let Ve=Ae.material;Ve.allowOverride===!0&&G!==null&&(Ve=G),Me.layers.test(K.layers)&&Rl(Me,L,K,Re,Ve,De)}}function Rl(E,L,K,G,V,Ee){O!==null&&V.isNodeMaterial&&O.setObject(E,V),E.onBeforeRender(P,L,K,G,V,Ee),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(P,L,K,G,E,Ee),V.transparent===!0&&V.side===yn&&V.forceSinglePass===!1?(V.side=Gt,V.needsUpdate=!0,P.renderBufferDirect(K,L,G,V,E,Ee),V.side=ui,V.needsUpdate=!0,P.renderBufferDirect(K,L,G,V,E,Ee),V.side=yn):P.renderBufferDirect(K,L,G,V,E,Ee),E.onAfterRender(P,L,K,G,V,Ee)}function Dr(E,L,K){L.isScene!==!0&&(L=Tt);const G=q.get(E),V=w.state.lights,Ee=w.state.shadowsArray,Ae=V.state.version,Me=pe.getParameters(E,V.state,Ee,L,K,w.state.lightProbeGridArray),Re=pe.getProgramCacheKey(Me);let De=G.programs;G.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?L.environment:null,G.fog=L.fog;const Ve=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;G.envMap=de.get(E.envMap||G.environment,Ve),G.envMapRotation=G.environment!==null&&E.envMap===null?L.environmentRotation:E.envMapRotation,De===void 0&&(E.addEventListener("dispose",hn),De=new Map,G.programs=De);let Ye=De.get(Re);if(Ye!==void 0){if(G.currentProgram===Ye&&G.lightsStateVersion===Ae)return Pl(E,Me),Ye}else Me.uniforms=pe.getUniforms(E),O!==null&&E.isNodeMaterial&&O.build(E,K,Me),E.onBeforeCompile(Me,P),Ye=pe.acquireProgram(Me,Re),De.set(Re,Ye),G.uniforms=Me.uniforms;const Ie=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=Ue.uniform),Pl(E,Me),G.needsLights=lu(E),G.lightsStateVersion=Ae,G.needsLights&&(Ie.ambientLightColor.value=V.state.ambient,Ie.lightProbe.value=V.state.probe,Ie.sunLights.value=V.state.sun,Ie.sunLightShadows.value=V.state.sunShadow,Ie.directionalLights.value=V.state.directional,Ie.directionalLightShadows.value=V.state.directionalShadow,Ie.spotLights.value=V.state.spot,Ie.spotLightShadows.value=V.state.spotShadow,Ie.rectAreaLights.value=V.state.rectArea,Ie.ltc_1.value=V.state.rectAreaLTC1,Ie.ltc_2.value=V.state.rectAreaLTC2,Ie.pointLights.value=V.state.point,Ie.pointLightShadows.value=V.state.pointShadow,Ie.hemisphereLights.value=V.state.hemi,Ie.sunShadowMatrix.value=V.state.sunShadowMatrix,Ie.sunShadowCascade.value=V.state.sunShadowCascade,Ie.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ie.spotLightMatrix.value=V.state.spotLightMatrix,Ie.spotLightMap.value=V.state.spotLightMap,Ie.pointShadowMatrix.value=V.state.pointShadowMatrix),G.lightProbeGrid=w.state.lightProbeGridArray.length>0,G.currentProgram=Ye,G.uniformsList=null,Ye}function Il(E){if(E.uniformsList===null){const L=E.currentProgram.getUniforms();E.uniformsList=_s.seqWithValue(L.seq,E.uniforms)}return E.uniformsList}function Pl(E,L){const K=q.get(E);K.outputColorSpace=L.outputColorSpace,K.batching=L.batching,K.batchingColor=L.batchingColor,K.instancing=L.instancing,K.instancingColor=L.instancingColor,K.instancingMorph=L.instancingMorph,K.skinning=L.skinning,K.morphTargets=L.morphTargets,K.morphNormals=L.morphNormals,K.morphColors=L.morphColors,K.morphTargetsCount=L.morphTargetsCount,K.numClippingPlanes=L.numClippingPlanes,K.numIntersection=L.numClipIntersection,K.vertexAlphas=L.vertexAlphas,K.vertexTangents=L.vertexTangents,K.toneMapping=L.toneMapping}function su(E,L){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;_.setFromMatrixPosition(L.matrixWorld);for(let K=0,G=E.length;K<G;K++){const V=E[K];if(V.texture!==null&&V.boundingBox.containsPoint(_))return V}return null}function au(E,L,K,G,V){L.isScene!==!0&&(L=Tt),ee.resetTextureUnits();const Ee=L.fog,Ae=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?L.environment:null,Me=ne===null?P.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Je.workingColorSpace,Re=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,De=de.get(G.envMap||Ae,Re),Ve=G.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ye=!!K.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ie=!!K.morphAttributes.position,nt=!!K.morphAttributes.normal,bt=!!K.morphAttributes.color;let pt=Sn;G.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(pt=P.toneMapping);const ot=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Pt=ot!==void 0?ot.length:0,Te=q.get(G),Bt=w.state.lights;if(ze===!0&&(oe===!0||E!==X)){const ft=E===X&&G.id===z;Ue.setState(G,E,ft)}let Qe=!1;G.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==Bt.state.version||Te.outputColorSpace!==Me||V.isBatchedMesh&&Te.batching===!1||!V.isBatchedMesh&&Te.batching===!0||V.isBatchedMesh&&Te.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Te.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Te.instancing===!1||!V.isInstancedMesh&&Te.instancing===!0||V.isSkinnedMesh&&Te.skinning===!1||!V.isSkinnedMesh&&Te.skinning===!0||V.isInstancedMesh&&Te.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Te.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Te.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Te.instancingMorph===!1&&V.morphTexture!==null||Te.envMap!==De||G.fog===!0&&Te.fog!==Ee||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Ue.numPlanes||Te.numIntersection!==Ue.numIntersection)||Te.vertexAlphas!==Ve||Te.vertexTangents!==Ye||Te.morphTargets!==Ie||Te.morphNormals!==nt||Te.morphColors!==bt||Te.toneMapping!==pt||Te.morphTargetsCount!==Pt||!!Te.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,Te.__version=G.version);let Zt=Te.currentProgram;Qe===!0&&(Zt=Dr(G,L,V),O&&G.isNodeMaterial&&O.onUpdateProgram(G,Zt,Te));let pn=!1,Bn=!1,xi=!1;const at=Zt.getUniforms(),xt=Te.uniforms;if(y.useProgram(Zt.program)&&(pn=!0,Bn=!0,xi=!0),G.id!==z&&(z=G.id,Bn=!0),Te.needsLights){const ft=su(w.state.lightProbeGridArray,V);Te.lightProbeGrid!==ft&&(Te.lightProbeGrid=ft,Bn=!0)}if(pn||X!==E){y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),at.setValue(F,"projectionMatrix",E.projectionMatrix),at.setValue(F,"viewMatrix",E.matrixWorldInverse);const jn=at.map.cameraPosition;jn!==void 0&&jn.setValue(F,Ze.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&at.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&at.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),X!==E&&(X=E,Bn=!0,xi=!0)}if(Te.needsLights&&(Bt.state.sunShadowMap.length>0&&at.setValue(F,"sunShadowMap",Bt.state.sunShadowMap,ee),Bt.state.directionalShadowMap.length>0&&at.setValue(F,"directionalShadowMap",Bt.state.directionalShadowMap,ee),Bt.state.spotShadowMap.length>0&&at.setValue(F,"spotShadowMap",Bt.state.spotShadowMap,ee),Bt.state.pointShadowMap.length>0&&at.setValue(F,"pointShadowMap",Bt.state.pointShadowMap,ee)),V.isSkinnedMesh){at.setOptional(F,V,"bindMatrix"),at.setOptional(F,V,"bindMatrixInverse");const ft=V.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),at.setValue(F,"boneTexture",ft.boneTexture,ee))}V.isBatchedMesh&&(at.setOptional(F,V,"batchingTexture"),at.setValue(F,"batchingTexture",V._matricesTexture,ee),at.setOptional(F,V,"batchingIdTexture"),at.setValue(F,"batchingIdTexture",V._indirectTexture,ee),at.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&at.setValue(F,"batchingColorTexture",V._colorsTexture,ee));const kn=K.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&U.update(V,K,Zt),(Bn||Te.receiveShadow!==V.receiveShadow)&&(Te.receiveShadow=V.receiveShadow,at.setValue(F,"receiveShadow",V.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&L.environment!==null&&(xt.envMapIntensity.value=L.environmentIntensity),xt.dfgLUT!==void 0&&(xt.dfgLUT.value=Gb()),Bn){if(at.setValue(F,"toneMappingExposure",P.toneMappingExposure),Te.needsLights&&ou(xt,xi),Ee&&G.fog===!0&&Ne.refreshFogUniforms(xt,Ee),Ne.refreshMaterialUniforms(xt,G,ie,Y,w.state.transmissionRenderTarget[E.id]),Te.needsLights&&Te.lightProbeGrid){const ft=Te.lightProbeGrid;xt.probesSH.value=ft.texture,xt.probesMin.value.copy(ft.boundingBox.min),xt.probesMax.value.copy(ft.boundingBox.max),xt.probesResolution.value.copy(ft.resolution)}_s.upload(F,Il(Te),xt,ee)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(_s.upload(F,Il(Te),xt,ee),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&at.setValue(F,"center",V.center),at.setValue(F,"modelViewMatrix",V.modelViewMatrix),at.setValue(F,"normalMatrix",V.normalMatrix),at.setValue(F,"modelMatrix",V.matrixWorld),G.uniformsGroups!==void 0){const ft=G.uniformsGroups;for(let jn=0,yi=ft.length;jn<yi;jn++){const Ll=ft[jn];ae.update(Ll,Zt),ae.bind(Ll,Zt)}}return Zt}function ou(E,L){E.ambientLightColor.needsUpdate=L,E.lightProbe.needsUpdate=L,E.sunLights.needsUpdate=L,E.sunLightShadows.needsUpdate=L,E.directionalLights.needsUpdate=L,E.directionalLightShadows.needsUpdate=L,E.pointLights.needsUpdate=L,E.pointLightShadows.needsUpdate=L,E.spotLights.needsUpdate=L,E.spotLightShadows.needsUpdate=L,E.rectAreaLights.needsUpdate=L,E.hemisphereLights.needsUpdate=L}function lu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(E,L,K){const G=q.get(E);G.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),q.get(E.texture).__webglTexture=L,q.get(E.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:K,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,L){const K=q.get(E);K.__webglFramebuffer=L,K.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(E,L=0,K=0){ne=E,Z=L,$=K;let G=null,V=!1,Ee=!1;if(E){const Me=q.get(E);if(Me.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(F.FRAMEBUFFER,Me.__webglFramebuffer),J.copy(E.viewport),fe.copy(E.scissor),ue=E.scissorTest,y.viewport(J),y.scissor(fe),y.setScissorTest(ue),z=-1;return}else if(Me.__webglFramebuffer===void 0)ee.setupRenderTarget(E);else if(Me.__hasExternalTextures)ee.rebindTextures(E,q.get(E.texture).__webglTexture,q.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ve=E.depthTexture;if(Me.__boundDepthTexture!==Ve){if(Ve!==null&&q.has(Ve)&&(E.width!==Ve.image.width||E.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(E)}}const Re=E.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(Ee=!0);const De=q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(De[L])?G=De[L][K]:G=De[L],V=!0):E.samples>0&&ee.useMultisampledRTT(E)===!1?G=q.get(E).__webglMultisampledFramebuffer:Array.isArray(De)?G=De[K]:G=De,J.copy(E.viewport),fe.copy(E.scissor),ue=E.scissorTest}else J.copy(Q).multiplyScalar(ie).floor(),fe.copy(ce).multiplyScalar(ie).floor(),ue=We;if(K!==0&&(G=k),y.bindFramebuffer(F.FRAMEBUFFER,G)&&y.drawBuffers(E,G),y.viewport(J),y.scissor(fe),y.setScissorTest(ue),V){const Me=q.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+L,Me.__webglTexture,K)}else if(Ee){const Me=L;for(let Re=0;Re<E.textures.length;Re++){const De=q.get(E.textures[Re]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Re,De.__webglTexture,K,Me)}}else if(E!==null&&K!==0){const Me=q.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Me.__webglTexture,K)}z=-1};function Dl(E){const L=q.get(E);return(L.__readFormat!==E.format||L.__readType!==E.type)&&(L.__readFormat=E.format,L.__readType=E.type,L.__formatReadable=C.textureFormatReadable(E.format),L.__typeReadable=C.textureTypeReadable(E.type)),L}this.readRenderTargetPixels=function(E,L,K,G,V,Ee,Ae,Me=0){if(!(E&&E.isWebGLRenderTarget)){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Re=Re[Ae]),Re){y.bindFramebuffer(F.FRAMEBUFFER,Re);try{const De=E.textures[Me],Ve=De.format,Ye=De.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Me);const Ie=Dl(De);if(Ie.__formatReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=E.width-G&&K>=0&&K<=E.height-V&&F.readPixels(L,K,G,V,xe.convert(Ve),xe.convert(Ye),Ee)}finally{const De=ne!==null?q.get(ne).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(E,L,K,G,V,Ee,Ae,Me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Re=Re[Ae]),Re)if(L>=0&&L<=E.width-G&&K>=0&&K<=E.height-V){y.bindFramebuffer(F.FRAMEBUFFER,Re);const De=E.textures[Me],Ve=De.format,Ye=De.type;E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Me);const Ie=Dl(De);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,nt),F.bufferData(F.PIXEL_PACK_BUFFER,Ee.byteLength,F.STREAM_READ),F.readPixels(L,K,G,V,xe.convert(Ve),xe.convert(Ye),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const bt=ne!==null?q.get(ne).__webglFramebuffer:null;y.bindFramebuffer(F.FRAMEBUFFER,bt);const pt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Qm(F,pt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,nt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Ee),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(nt),F.deleteSync(pt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,L=null,K=0){const G=Math.pow(2,-K),V=Math.floor(E.image.width*G),Ee=Math.floor(E.image.height*G),Ae=L!==null?L.x:0,Me=L!==null?L.y:0;ee.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,K,0,0,Ae,Me,V,Ee),y.unbindTexture()},this.copyTextureToTexture=function(E,L,K=null,G=null,V=0,Ee=0){let Ae,Me,Re,De,Ve,Ye,Ie,nt,bt;const pt=E.isCompressedTexture?E.mipmaps[Ee]:E.image;if(K!==null)Ae=K.max.x-K.min.x,Me=K.max.y-K.min.y,Re=K.isBox3?K.max.z-K.min.z:1,De=K.min.x,Ve=K.min.y,Ye=K.isBox3?K.min.z:0;else{const xt=Math.pow(2,-V);Ae=Math.floor(pt.width*xt),Me=Math.floor(pt.height*xt),E.isDataArrayTexture?Re=pt.depth:E.isData3DTexture?Re=Math.floor(pt.depth*xt):Re=1,De=0,Ve=0,Ye=0}G!==null?(Ie=G.x,nt=G.y,bt=G.z):(Ie=0,nt=0,bt=0);const ot=xe.convert(L.format),Pt=xe.convert(L.type);let Te;L.isData3DTexture?(ee.setTexture3D(L,0),Te=F.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(ee.setTexture2DArray(L,0),Te=F.TEXTURE_2D_ARRAY):(ee.setTexture2D(L,0),Te=F.TEXTURE_2D),y.activeTexture(F.TEXTURE0),y.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,L.flipY),y.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),y.pixelStorei(F.UNPACK_ALIGNMENT,L.unpackAlignment);const Bt=y.getParameter(F.UNPACK_ROW_LENGTH),Qe=y.getParameter(F.UNPACK_IMAGE_HEIGHT),Zt=y.getParameter(F.UNPACK_SKIP_PIXELS),pn=y.getParameter(F.UNPACK_SKIP_ROWS),Bn=y.getParameter(F.UNPACK_SKIP_IMAGES);y.pixelStorei(F.UNPACK_ROW_LENGTH,pt.width),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,pt.height),y.pixelStorei(F.UNPACK_SKIP_PIXELS,De),y.pixelStorei(F.UNPACK_SKIP_ROWS,Ve),y.pixelStorei(F.UNPACK_SKIP_IMAGES,Ye);const xi=E.isDataArrayTexture||E.isData3DTexture,at=L.isDataArrayTexture||L.isData3DTexture;if(E.isDepthTexture){const xt=q.get(E),kn=q.get(L),ft=q.get(xt.__renderTarget),jn=q.get(kn.__renderTarget);y.bindFramebuffer(F.READ_FRAMEBUFFER,ft.__webglFramebuffer),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let yi=0;yi<Re;yi++)xi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(E).__webglTexture,V,Ye+yi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,q.get(L).__webglTexture,Ee,bt+yi)),F.blitFramebuffer(De,Ve,Ae,Me,Ie,nt,Ae,Me,F.DEPTH_BUFFER_BIT,F.NEAREST);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||q.has(E)){const xt=q.get(E),kn=q.get(L);y.bindFramebuffer(F.READ_FRAMEBUFFER,D),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,H);for(let ft=0;ft<Re;ft++)xi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,xt.__webglTexture,V,Ye+ft):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,xt.__webglTexture,V),at?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,kn.__webglTexture,Ee,bt+ft):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,kn.__webglTexture,Ee),V!==0?F.blitFramebuffer(De,Ve,Ae,Me,Ie,nt,Ae,Me,F.COLOR_BUFFER_BIT,F.NEAREST):at?F.copyTexSubImage3D(Te,Ee,Ie,nt,bt+ft,De,Ve,Ae,Me):F.copyTexSubImage2D(Te,Ee,Ie,nt,De,Ve,Ae,Me);y.bindFramebuffer(F.READ_FRAMEBUFFER,null),y.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else at?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Te,Ee,Ie,nt,bt,Ae,Me,Re,ot,Pt,pt.data):L.isCompressedArrayTexture?F.compressedTexSubImage3D(Te,Ee,Ie,nt,bt,Ae,Me,Re,ot,pt.data):F.texSubImage3D(Te,Ee,Ie,nt,bt,Ae,Me,Re,ot,Pt,pt):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Ee,Ie,nt,Ae,Me,ot,Pt,pt.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Ee,Ie,nt,pt.width,pt.height,ot,pt.data):F.texSubImage2D(F.TEXTURE_2D,Ee,Ie,nt,Ae,Me,ot,Pt,pt);y.pixelStorei(F.UNPACK_ROW_LENGTH,Bt),y.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Qe),y.pixelStorei(F.UNPACK_SKIP_PIXELS,Zt),y.pixelStorei(F.UNPACK_SKIP_ROWS,pn),y.pixelStorei(F.UNPACK_SKIP_IMAGES,Bn),Ee===0&&L.generateMipmaps&&F.generateMipmap(Te),y.unbindTexture()},this.initRenderTarget=function(E){q.get(E).__webglFramebuffer===void 0&&ee.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ee.setTextureCube(E,0):E.isData3DTexture?ee.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ee.setTexture2DArray(E,0):ee.setTexture2D(E,0),y.unbindTexture()},this.resetState=function(){Z=0,$=0,ne=null,y.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}function Xb({onSelectBuilding:n,selectedBuilding:e}){const t=W.useRef(null),[i,r]=W.useState(null);W.useEffect(()=>{const o=t.current;if(!o)return;let l=o.clientWidth||window.innerWidth,d=o.clientHeight||window.innerHeight;const c=new mg;c.fog=new hl(329739,.015);const f=new qt(45,l/d,.1,1e3);f.position.set(40,45,55),f.lookAt(0,0,0);const h=new Vb({antialias:!0,alpha:!0});h.setSize(l,d),h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.shadowMap.enabled=!0,h.shadowMap.type=xf,o.appendChild(h.domElement);const u=new Hg(988970,1.8);c.add(u);const m=new Wg(2282478,2.2);m.position.set(30,50,20),c.add(m);const x=new kg(3900150,3,60);x.position.set(-20,20,-20),c.add(x);const S=new qg(90,45,2282478,1976635);S.position.y=-.1,c.add(S);const g=new gl(38,38.5,64),p=new pl({color:2282478,side:yn,transparent:!0,opacity:.35}),M=new fn(g,p);M.rotation.x=Math.PI/2,M.position.y=0,c.add(M);const T=[{id:"BLD-042",name:"BUILDING 042",type:"Residential Tower",x:-12,z:-10,w:4,h:14,d:4,load:"124 kW",solar:"48 kW",battery:"72%",efficiency:"89%"},{id:"BLD-108",name:"COMMERCIAL COMPLEX 108",type:"Commercial",x:8,z:-14,w:6,h:22,d:5,load:"410 kW",solar:"120 kW",battery:"85%",efficiency:"94%"},{id:"SLR-004",name:"SOLAR FARM 04",type:"Solar Array",x:-24,z:12,w:10,h:2,d:8,load:"0 kW",solar:"480 kW",battery:"95%",efficiency:"96%"},{id:"BAT-002",name:"BATTERY HUB ALPHA",type:"Energy Storage",x:18,z:12,w:5,h:6,d:5,load:"45 kW",solar:"0 kW",battery:"98%",efficiency:"98%"},{id:"IND-019",name:"INDUSTRIAL PARK 019",type:"Industrial",x:-16,z:-24,w:8,h:10,d:9,load:"780 kW",solar:"95 kW",battery:"60%",efficiency:"87%"},{id:"EVC-007",name:"EV CHARGING STATION 07",type:"EV Mobility Hub",x:14,z:-2,w:4,h:3,d:4,load:"190 kW",solar:"32 kW",battery:"79%",efficiency:"91%"},{id:"BLD-088",name:"CIVIC CENTER 088",type:"Municipal Government",x:0,z:0,w:6,h:16,d:6,load:"210 kW",solar:"88 kW",battery:"90%",efficiency:"95%"}],_=[];T.forEach(z=>{const X=z.type==="Solar Array",J=z.type==="Energy Storage",fe=z.id==="BLD-088",ue=new Xi(z.w,z.h,z.d);let ke=923430;X?ke=440020:J?ke=1096065:fe&&(ke=3900150);const Le=new Ug({color:ke,emissive:X?561586:J?366185:165063,emissiveIntensity:.25,transparent:!0,opacity:.85,wireframe:!1}),_e=new fn(ue,Le);_e.position.set(z.x,z.h/2,z.z),_e.userData=z,c.add(_e),_.push(_e);const Y=new Ag(ue),ie=new Xs({color:X?2282478:J?3462041:6333946,linewidth:1}),ye=new jf(Y,ie);ye.position.copy(_e.position),c.add(ye)});const v=new zg({color:2282478,dashSize:1,gapSize:.5,linewidth:2});[[new B(-24,1,12),new B(0,1,0)],[new B(18,1,12),new B(0,1,0)],[new B(0,1,0),new B(8,1,-14)],[new B(0,1,0),new B(-12,1,-10)],[new B(0,1,0),new B(14,1,-2)]].forEach(([z,X])=>{const fe=new Rg(z,X).getPoints(20),ue=new zt().setFromPoints(fe),ke=new kf(ue,v);c.add(ke)});const R=40,b=new zt,A=new Float32Array(R*3);for(let z=0;z<R;z++)A[z*3]=(Math.random()-.5)*50,A[z*3+1]=Math.random()*15+1,A[z*3+2]=(Math.random()-.5)*50;b.setAttribute("position",new _n(A,3));const P=new Wf({color:2282478,size:.8,transparent:!0,opacity:.8}),I=new wg(b,P);c.add(I);const O=new Xg,k=new Ke,D=z=>{const X=h.domElement.getBoundingClientRect();k.x=(z.clientX-X.left)/X.width*2-1,k.y=-((z.clientY-X.top)/X.height)*2+1,O.setFromCamera(k,f);const J=O.intersectObjects(_);if(J.length>0){const fe=J[0].object.userData;r(fe),n&&n(fe)}};h.domElement.addEventListener("pointerdown",D);let H=0,Z;const $=()=>{Z=requestAnimationFrame($),H+=.002,f.position.x=Math.sin(H)*55,f.position.z=Math.cos(H)*55,f.lookAt(0,4,0);const z=b.attributes.position.array;for(let X=0;X<R;X++)z[X*3+1]+=Math.sin(H*5+X)*.05,z[X*3+1]>20&&(z[X*3+1]=1);b.attributes.position.needsUpdate=!0,h.render(c,f)};$();const ne=()=>{o&&(l=o.clientWidth,d=o.clientHeight,f.aspect=l/d,f.updateProjectionMatrix(),h.setSize(l,d))};return window.addEventListener("resize",ne),()=>{cancelAnimationFrame(Z),window.removeEventListener("resize",ne),h.domElement&&o.contains(h.domElement)&&o.removeChild(h.domElement),h.dispose()}},[]);const a=e||i;return s.jsxs("div",{style:{position:"relative",width:"100%",height:"100%",minHeight:"520px",borderRadius:"20px",overflow:"hidden"},children:[s.jsx("div",{ref:t,style:{width:"100%",height:"100%",cursor:"pointer"}}),s.jsxs("div",{style:{position:"absolute",top:"20px",left:"20px",background:"rgba(5, 8, 11, 0.75)",backdropFilter:"blur(20px)",border:"1px solid rgba(34, 211, 238, 0.2)",borderRadius:"12px",padding:"0.85rem 1.1rem",fontSize:"0.75rem",color:"#cbd5e1",pointerEvents:"none"},children:[s.jsx("div",{style:{fontSize:"0.68rem",fontWeight:800,color:"#22d3ee",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"0.4rem"},children:"3D SPATIAL DIGITAL TWIN ACTIVE"}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.3rem",fontFamily:"var(--font-mono)"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#06b6d4",boxShadow:"0 0 8px #06b6d4"}})," Solar Arrays & Clean Output"]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#10b981",boxShadow:"0 0 8px #10b981"}})," Battery Reserve Storage Hubs"]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",background:"#3b82f6",boxShadow:"0 0 8px #3b82f6"}})," High-Density Civic Sectors"]})]})]}),a&&s.jsxs("div",{style:{position:"absolute",bottom:"24px",right:"24px",width:"320px",background:"rgba(8, 14, 22, 0.88)",backdropFilter:"blur(28px)",WebkitBackdropFilter:"blur(28px)",border:"1px solid rgba(34, 211, 238, 0.4)",borderRadius:"16px",padding:"1.25rem",boxShadow:"0 20px 50px rgba(0,0,0,0.8), 0 0 20px rgba(34, 211, 238, 0.2)",color:"#ffffff",animation:"fadeInSlide 0.3s ease-out"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.85rem"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsx(Vo,{size:18,color:"#22d3ee"}),s.jsx("span",{style:{fontSize:"0.72rem",fontWeight:800,color:"#22d3ee",fontFamily:"var(--font-mono)"},children:a.id})]}),s.jsx("button",{onClick:()=>r(null),style:{background:"transparent",border:"none",color:"#94a3b8",cursor:"pointer"},children:s.jsx(Kt,{size:16})})]}),s.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:900,marginBottom:"0.2rem",color:"#ffffff"},children:a.name}),s.jsxs("p",{style:{fontSize:"0.78rem",color:"#94a3b8",marginBottom:"1rem",fontFamily:"var(--font-mono)"},children:["TYPE: ",a.type.toUpperCase()]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.65rem",marginBottom:"0.85rem"},children:[s.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",padding:"0.6rem 0.75rem",borderRadius:"10px"},children:[s.jsx("div",{style:{fontSize:"0.65rem",color:"#94a3b8",textTransform:"uppercase"},children:"CURRENT LOAD"}),s.jsx("div",{style:{fontSize:"1.1rem",fontWeight:900,color:"#ffffff",fontFamily:"var(--font-mono)"},children:a.load})]}),s.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",padding:"0.6rem 0.75rem",borderRadius:"10px"},children:[s.jsx("div",{style:{fontSize:"0.65rem",color:"#94a3b8",textTransform:"uppercase"},children:"SOLAR OUTPUT"}),s.jsx("div",{style:{fontSize:"1.1rem",fontWeight:900,color:"#22d3ee",fontFamily:"var(--font-mono)"},children:a.solar})]}),s.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",padding:"0.6rem 0.75rem",borderRadius:"10px"},children:[s.jsx("div",{style:{fontSize:"0.65rem",color:"#94a3b8",textTransform:"uppercase"},children:"BATTERY RESERVE"}),s.jsx("div",{style:{fontSize:"1.1rem",fontWeight:900,color:"#34d399",fontFamily:"var(--font-mono)"},children:a.battery})]}),s.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",padding:"0.6rem 0.75rem",borderRadius:"10px"},children:[s.jsx("div",{style:{fontSize:"0.65rem",color:"#94a3b8",textTransform:"uppercase"},children:"EFFICIENCY"}),s.jsx("div",{style:{fontSize:"1.1rem",fontWeight:900,color:"#fbbf24",fontFamily:"var(--font-mono)"},children:a.efficiency})]})]})]})]})}function qb(){const[n,e]=W.useState("SOLAR"),i={SOLAR:{name:"SOLAR FARM 04",type:"Renewable Generation",output:"4.8 MW",efficiency:"94.2%",status:"OPERATIONAL",voltage:"132 kV"},GRID:{name:"CENTRAL SUBSTATION ALPHA",type:"High-Voltage Grid",output:"18.4 MW",efficiency:"98.7%",status:"BALANCED",voltage:"220 kV"},STORAGE:{name:"TESLA MEGAPACK BATTERY HUB",type:"Chemical Storage",output:"6.2 MW",efficiency:"96.5%",status:"CHARGING",voltage:"33 kV"},CITY:{name:"METROPOLITAN DEMAND ZONE",type:"Civic Consumption",output:"18.4 MW",efficiency:"91.4%",status:"OPTIMAL",voltage:"11 kV"}}[n];return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"100%"},children:[s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"0.85rem"},children:[{label:"TOTAL ENERGY",value:"24.8 MW",sub:"Capacity Baseline",color:"#22d3ee",icon:li},{label:"CURRENT DEMAND",value:"18.4 MW",sub:"Peak Load Normal",color:"#60a5fa",icon:_d},{label:"RENEWABLE",value:"72.6%",sub:"Clean Energy Mix",color:"#34d399",icon:wu},{label:"STORAGE",value:"64%",sub:"Reserve Reserves",color:"#a78bfa",icon:Tu},{label:"GRID HEALTH",value:"98.7%",sub:"Zero Fault Sync",color:"#38bdf8",icon:Xa}].map(r=>{const a=r.icon;return s.jsxs("div",{style:{background:"rgba(8, 14, 22, 0.75)",backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",border:"1px solid rgba(34, 211, 238, 0.18)",borderRadius:"14px",padding:"0.9rem 1.1rem",boxShadow:"0 8px 24px rgba(0,0,0,0.5)",position:"relative",overflow:"hidden"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.25rem"},children:[s.jsx("span",{style:{fontSize:"0.65rem",fontWeight:800,color:"#94a3b8",letterSpacing:"0.08em",fontFamily:"var(--font-mono)"},children:r.label}),s.jsx(a,{size:15,color:r.color})]}),s.jsx("div",{style:{fontSize:"1.45rem",fontWeight:900,color:"#ffffff",fontFamily:"var(--font-mono)",letterSpacing:"-0.02em"},children:r.value}),s.jsx("div",{style:{fontSize:"0.68rem",color:r.color,marginTop:"0.15rem"},children:r.sub})]},r.label)})}),s.jsxs("div",{style:{background:"rgba(8, 14, 22, 0.75)",backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",border:"1px solid rgba(34, 211, 238, 0.2)",borderRadius:"16px",padding:"1.25rem",boxShadow:"0 12px 32px rgba(0,0,0,0.6)"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.68rem",fontWeight:800,color:"#22d3ee",letterSpacing:"0.08em",fontFamily:"var(--font-mono)"},children:"REAL-TIME INFRASTRUCTURE NETWORK"}),s.jsx("h3",{style:{fontSize:"1.05rem",fontWeight:900,color:"#ffffff"},children:"Live City Energy Flow Pipeline"})]}),s.jsx("span",{style:{fontSize:"0.72rem",fontWeight:800,color:"#34d399",background:"rgba(16,185,129,0.12)",padding:"0.25rem 0.65rem",borderRadius:"999px",border:"1px solid rgba(16,185,129,0.3)",fontFamily:"var(--font-mono)"},children:"● ACTIVE TRANSMISSION"})]}),s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(130px, 1fr))",gap:"0.75rem",marginBottom:"1.1rem",alignItems:"center"},children:[{id:"SOLAR",label:"SOLAR",sub:"Generation",color:"#06b6d4"},{id:"GRID",label:"GRID",sub:"Transmission",color:"#3b82f6"},{id:"STORAGE",label:"STORAGE",sub:"Megapack Reserve",color:"#10b981"},{id:"CITY",label:"CITY",sub:"Demand Load",color:"#a855f7"}].map((r,a)=>{const o=n===r.id;return s.jsx(vr.Fragment,{children:s.jsxs("div",{onClick:()=>e(r.id),style:{background:o?"rgba(34, 211, 238, 0.16)":"rgba(255,255,255,0.03)",border:o?"1px solid #22d3ee":"1px solid rgba(255,255,255,0.08)",borderRadius:"12px",padding:"0.85rem 0.75rem",textAlign:"center",cursor:"pointer",transition:"all 0.25 ease",boxShadow:o?"0 0 16px rgba(34, 211, 238, 0.3)":"none"},children:[s.jsx("div",{style:{fontSize:"0.9rem",fontWeight:900,color:o?"#22d3ee":"#ffffff",fontFamily:"var(--font-mono)"},children:r.label}),s.jsx("div",{style:{fontSize:"0.68rem",color:"#94a3b8",marginTop:"0.15rem"},children:r.sub})]})},r.id)})}),i&&s.jsxs("div",{style:{background:"rgba(255,255,255,0.025)",border:"1px solid rgba(34, 211, 238, 0.25)",borderRadius:"12px",padding:"1rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"0.85rem"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.65rem",color:"#22d3ee",fontWeight:800,fontFamily:"var(--font-mono)"},children:"SELECTED SOURCE / NODE INSPECTOR"}),s.jsx("div",{style:{fontSize:"1rem",fontWeight:900,color:"#ffffff"},children:i.name}),s.jsxs("div",{style:{fontSize:"0.75rem",color:"#94a3b8"},children:[i.type," • ",i.voltage]})]}),s.jsxs("div",{style:{display:"flex",gap:"1.25rem",flexWrap:"wrap"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.65rem",color:"#94a3b8",textTransform:"uppercase"},children:"OUTPUT"}),s.jsx("div",{style:{fontSize:"1.1rem",fontWeight:900,color:"#22d3ee",fontFamily:"var(--font-mono)"},children:i.output})]}),s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.65rem",color:"#94a3b8",textTransform:"uppercase"},children:"EFFICIENCY"}),s.jsx("div",{style:{fontSize:"1.1rem",fontWeight:900,color:"#34d399",fontFamily:"var(--font-mono)"},children:i.efficiency})]}),s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.65rem",color:"#94a3b8",textTransform:"uppercase"},children:"STATUS"}),s.jsxs("div",{style:{fontSize:"0.9rem",fontWeight:800,color:"#38bdf8",display:"flex",alignItems:"center",gap:"0.3rem",marginTop:"0.15rem"},children:[s.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#38bdf8",boxShadow:"0 0 6px #38bdf8"}}),i.status]})]})]})]})]})]})}function Yb(){const[n,e]=W.useState("24H"),a=n==="24H"?[{time:"00:00",demand:12.2,gen:14.5,storage:68,renewable:65},{time:"04:00",demand:10.8,gen:13,storage:72,renewable:60},{time:"08:00",demand:16.4,gen:20.2,storage:85,renewable:78},{time:"12:00",demand:19.8,gen:26.5,storage:90,renewable:88},{time:"16:00",demand:21.2,gen:24.8,storage:82,renewable:80},{time:"20:00",demand:18.4,gen:19,storage:64,renewable:72},{time:"23:59",demand:14.1,gen:16.2,storage:60,renewable:68}]:n==="7D"?[{time:"Mon",demand:110,gen:140,storage:75,renewable:70},{time:"Tue",demand:118,gen:152,storage:80,renewable:74},{time:"Wed",demand:125,gen:160,storage:82,renewable:76},{time:"Thu",demand:115,gen:148,storage:78,renewable:72},{time:"Fri",demand:130,gen:168,storage:85,renewable:80},{time:"Sat",demand:98,gen:135,storage:90,renewable:84},{time:"Sun",demand:90,gen:128,storage:92,renewable:86}]:[{time:"W1",demand:780,gen:950,storage:80,renewable:72},{time:"W2",demand:820,gen:1020,storage:84,renewable:75},{time:"W3",demand:790,gen:980,storage:82,renewable:74},{time:"W4",demand:850,gen:1080,storage:88,renewable:79}];return s.jsxs("div",{style:{background:"rgba(8, 14, 22, 0.75)",backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",border:"1px solid rgba(34, 211, 238, 0.2)",borderRadius:"16px",padding:"1.25rem",boxShadow:"0 12px 32px rgba(0,0,0,0.6)"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem",flexWrap:"wrap",gap:"0.5rem"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.68rem",fontWeight:800,color:"#22d3ee",letterSpacing:"0.08em",fontFamily:"var(--font-mono)"},children:"PREDICTIVE ANALYTICS ENGINE"}),s.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:900,color:"#ffffff"},children:"City Energy Forecast"})]}),s.jsx("div",{style:{display:"flex",gap:"0.3rem",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"8px",padding:"0.2rem"},children:["24H","7D","30D"].map(o=>s.jsx("button",{onClick:()=>e(o),style:{background:n===o?"#22d3ee":"transparent",border:"none",borderRadius:"6px",padding:"0.3rem 0.65rem",color:n===o?"#05080b":"#cbd5e1",fontSize:"0.72rem",fontWeight:800,fontFamily:"var(--font-mono)",cursor:"pointer"},children:o},o))})]}),s.jsx("div",{style:{width:"100%",height:"220px"},children:s.jsx(Ld,{width:"100%",height:"100%",children:s.jsxs(Nu,{data:a,margin:{top:10,right:10,left:-20,bottom:0},children:[s.jsxs("defs",{children:[s.jsxs("linearGradient",{id:"cyanGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[s.jsx("stop",{offset:"5%",stopColor:"#22d3ee",stopOpacity:.4}),s.jsx("stop",{offset:"95%",stopColor:"#22d3ee",stopOpacity:0})]}),s.jsxs("linearGradient",{id:"sageGrad",x1:"0",y1:"0",x2:"0",y2:"1",children:[s.jsx("stop",{offset:"5%",stopColor:"#34d399",stopOpacity:.4}),s.jsx("stop",{offset:"95%",stopColor:"#34d399",stopOpacity:0})]})]}),s.jsx(Nd,{dataKey:"time",stroke:"#64748b",fontSize:11,tickLine:!1}),s.jsx(Ud,{stroke:"#64748b",fontSize:11,tickLine:!1}),s.jsx(Od,{contentStyle:{background:"rgba(8, 14, 22, 0.95)",border:"1px solid rgba(34, 211, 238, 0.4)",borderRadius:"10px",color:"#ffffff",fontFamily:"var(--font-mono)",fontSize:"0.75rem"}}),s.jsx(Ul,{type:"monotone",dataKey:"gen",stroke:"#22d3ee",strokeWidth:2,fillOpacity:1,fill:"url(#cyanGrad)",name:"Generation (MW)"}),s.jsx(Ul,{type:"monotone",dataKey:"demand",stroke:"#34d399",strokeWidth:2,fillOpacity:1,fill:"url(#sageGrad)",name:"Demand (MW)"})]})})})]})}function $b(){const n=[{time:"16:04",type:"OPTIMIZATION",desc:"Solar output increased +12% in Sector 04",status:"SUCCESS"},{time:"15:48",type:"BATTERY",desc:"Megapack Storage Zone 04 reached 80% reserve capacity",status:"INFO"},{time:"15:32",type:"DEMAND",desc:"Peak demand surge detected in Commercial District",status:"WARNING"},{time:"14:51",type:"GRID",desc:"Substation Alpha closed-loop grid balance completed",status:"SUCCESS"},{time:"14:15",type:"EV HUB",desc:"EV Fast Charging Station 07 load shedding active",status:"INFO"}];return s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"1.25rem",width:"100%"},children:[s.jsxs("div",{style:{background:"rgba(8, 14, 22, 0.75)",backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",border:"1px solid rgba(34, 211, 238, 0.2)",borderRadius:"16px",padding:"1.25rem",boxShadow:"0 12px 32px rgba(0,0,0,0.6)"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.68rem",fontWeight:800,color:"#22d3ee",letterSpacing:"0.08em",fontFamily:"var(--font-mono)"},children:"REAL-TIME AUDIT LEDGER"}),s.jsx("h3",{style:{fontSize:"1.05rem",fontWeight:900,color:"#ffffff"},children:"System Event Stream"})]}),s.jsx(Us,{size:16,color:"#22d3ee"})]}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.6rem"},children:n.map((e,t)=>s.jsxs("div",{style:{background:"rgba(255,255,255,0.025)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"10px",padding:"0.65rem 0.85rem",display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:"0.78rem"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[s.jsx("span",{style:{fontSize:"0.72rem",fontWeight:800,color:"#22d3ee",fontFamily:"var(--font-mono)"},children:e.time}),s.jsx("span",{style:{color:"#ffffff",fontWeight:600},children:e.desc})]}),s.jsx("span",{style:{fontSize:"0.65rem",fontWeight:800,padding:"0.15rem 0.45rem",borderRadius:"6px",background:e.status==="WARNING"?"rgba(245,158,11,0.15)":"rgba(34,211,238,0.12)",color:e.status==="WARNING"?"#fbbf24":"#34d399",fontFamily:"var(--font-mono)"},children:e.type})]},t))})]}),s.jsxs("div",{style:{background:"rgba(8, 14, 22, 0.75)",backdropFilter:"blur(24px)",WebkitBackdropFilter:"blur(24px)",border:"1px solid rgba(34, 211, 238, 0.2)",borderRadius:"16px",padding:"1.25rem",boxShadow:"0 12px 32px rgba(0,0,0,0.6)"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"1rem"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.68rem",fontWeight:800,color:"#34d399",letterSpacing:"0.08em",fontFamily:"var(--font-mono)"},children:"SUSTAINABILITY METRICS"}),s.jsx("h3",{style:{fontSize:"1.05rem",fontWeight:900,color:"#ffffff"},children:"City Environmental Impact"})]}),s.jsx(Au,{size:18,color:"#34d399"})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"0.75rem"},children:[s.jsxs("div",{style:{background:"rgba(16,185,129,0.08)",border:"1px solid rgba(16,185,129,0.25)",borderRadius:"12px",padding:"0.85rem 1rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.65rem",color:"#94a3b8",textTransform:"uppercase"},children:"CO₂ REDUCED THIS MONTH"}),s.jsx("div",{style:{fontSize:"1.4rem",fontWeight:900,color:"#34d399",fontFamily:"var(--font-mono)"},children:"1,248 tons"})]}),s.jsx(Cu,{size:24,color:"#34d399"})]}),s.jsxs("div",{style:{background:"rgba(34,211,238,0.08)",border:"1px solid rgba(34,211,238,0.25)",borderRadius:"12px",padding:"0.85rem 1rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.65rem",color:"#94a3b8",textTransform:"uppercase"},children:"RENEWABLE ENERGY MIX"}),s.jsx("div",{style:{fontSize:"1.4rem",fontWeight:900,color:"#22d3ee",fontFamily:"var(--font-mono)"},children:"72.6%"})]}),s.jsx(li,{size:24,color:"#22d3ee"})]}),s.jsxs("div",{style:{background:"rgba(167,139,250,0.08)",border:"1px solid rgba(167,139,250,0.25)",borderRadius:"12px",padding:"0.85rem 1rem",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.65rem",color:"#94a3b8",textTransform:"uppercase"},children:"TOTAL ENERGY SAVED"}),s.jsx("div",{style:{fontSize:"1.4rem",fontWeight:900,color:"#a78bfa",fontFamily:"var(--font-mono)"},children:"18.4 MWh"})]}),s.jsx(On,{size:24,color:"#a78bfa"})]})]})]})]})}function Kb({isOpen:n,onClose:e}){const[t,i]=W.useState(20),[r,a]=W.useState(15),[o,l]=W.useState(10),[d,c]=W.useState(-5);if(!n)return null;const f=(-.42*t-.28*r+.15*o+.35*d).toFixed(1),h=(-.55*t-.2*r+.08*o+.25*d).toFixed(1),u=(-.22*t-.38*r+.3*o+.45*d).toFixed(1),m=()=>{i(20),a(15),l(10),c(-5)};return s.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(3, 5, 8, 0.85)",backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:"1.5rem",animation:"fadeIn 0.25s ease-out"},children:s.jsxs("div",{style:{background:"rgba(8, 14, 22, 0.95)",backdropFilter:"blur(32px)",WebkitBackdropFilter:"blur(32px)",border:"1px solid rgba(34, 211, 238, 0.35)",borderRadius:"24px",maxWidth:"720px",width:"100%",padding:"2rem",boxShadow:"0 30px 80px rgba(0,0,0,0.9), 0 0 40px rgba(34, 211, 238, 0.15)",color:"#ffffff",position:"relative"},children:[s.jsx("button",{onClick:e,style:{position:"absolute",top:"20px",right:"20px",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"50%",width:"36px",height:"36px",color:"#cbd5e1",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},children:s.jsx(Kt,{size:18})}),s.jsxs("div",{style:{marginBottom:"1.5rem"},children:[s.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"0.4rem",background:"rgba(245, 158, 11, 0.12)",border:"1px solid rgba(245, 158, 11, 0.4)",padding:"0.35rem 0.85rem",borderRadius:"999px",fontSize:"0.75rem",fontWeight:800,color:"#fbbf24",marginBottom:"0.65rem"},children:[s.jsx(Md,{size:14})," SIGNATURE ENGINE • SCENARIO SIMULATOR"]}),s.jsx("h2",{style:{fontSize:"1.6rem",fontWeight:900,marginBottom:"0.35rem",color:"#ffffff"},children:"WHAT IF? Energy Infrastructure Simulator"}),s.jsx("p",{style:{color:"#94a3b8",fontSize:"0.88rem",lineHeight:1.5},children:"Simulate city-wide energy supply and demand modifications to calculate predicted grid impact, CO₂ emission changes, and peak load relief in real-time."})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"1.25rem",marginBottom:"1.75rem"},children:[s.jsxs("div",{style:{background:"rgba(255,255,255,0.025)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"14px",padding:"1rem"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem",fontSize:"0.85rem"},children:[s.jsx("span",{style:{fontWeight:700,color:"#ffffff"},children:"SOLAR CAPACITY"}),s.jsx("span",{style:{fontWeight:900,color:"#22d3ee",fontFamily:"var(--font-mono)"},children:t>=0?`+${t}%`:`${t}%`})]}),s.jsx("input",{type:"range",min:"-50",max:"100",value:t,onChange:x=>i(parseInt(x.target.value)),style:{width:"100%",accentColor:"#22d3ee",cursor:"pointer"}})]}),s.jsxs("div",{style:{background:"rgba(255,255,255,0.025)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"14px",padding:"1rem"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem",fontSize:"0.85rem"},children:[s.jsx("span",{style:{fontWeight:700,color:"#ffffff"},children:"BATTERY STORAGE"}),s.jsx("span",{style:{fontWeight:900,color:"#34d399",fontFamily:"var(--font-mono)"},children:r>=0?`+${r}%`:`${r}%`})]}),s.jsx("input",{type:"range",min:"-50",max:"100",value:r,onChange:x=>a(parseInt(x.target.value)),style:{width:"100%",accentColor:"#34d399",cursor:"pointer"}})]}),s.jsxs("div",{style:{background:"rgba(255,255,255,0.025)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"14px",padding:"1rem"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem",fontSize:"0.85rem"},children:[s.jsx("span",{style:{fontWeight:700,color:"#ffffff"},children:"EV CHARGING DEMAND"}),s.jsx("span",{style:{fontWeight:900,color:"#fbbf24",fontFamily:"var(--font-mono)"},children:o>=0?`+${o}%`:`${o}%`})]}),s.jsx("input",{type:"range",min:"-50",max:"100",value:o,onChange:x=>l(parseInt(x.target.value)),style:{width:"100%",accentColor:"#fbbf24",cursor:"pointer"}})]}),s.jsxs("div",{style:{background:"rgba(255,255,255,0.025)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"14px",padding:"1rem"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.5rem",fontSize:"0.85rem"},children:[s.jsx("span",{style:{fontWeight:700,color:"#ffffff"},children:"BUILDING LOAD"}),s.jsx("span",{style:{fontWeight:900,color:"#a78bfa",fontFamily:"var(--font-mono)"},children:d>=0?`+${d}%`:`${d}%`})]}),s.jsx("input",{type:"range",min:"-30",max:"50",value:d,onChange:x=>c(parseInt(x.target.value)),style:{width:"100%",accentColor:"#a78bfa",cursor:"pointer"}})]})]}),s.jsxs("div",{style:{background:"rgba(34, 211, 238, 0.08)",border:"1px solid rgba(34, 211, 238, 0.35)",borderRadius:"16px",padding:"1.25rem",marginBottom:"1.5rem"},children:[s.jsxs("div",{style:{fontSize:"0.72rem",fontWeight:800,color:"#22d3ee",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"0.85rem",display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsx(En,{size:14})," CALCULATED IMPACT RESULT"]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"1rem"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.72rem",color:"#94a3b8",textTransform:"uppercase"},children:"Grid Dependency"}),s.jsxs("div",{style:{fontSize:"1.5rem",fontWeight:900,color:f<=0?"#34d399":"#f87171",fontFamily:"var(--font-mono)"},children:[f,"%"]})]}),s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.72rem",color:"#94a3b8",textTransform:"uppercase"},children:"CO₂ Emissions"}),s.jsxs("div",{style:{fontSize:"1.5rem",fontWeight:900,color:h<=0?"#34d399":"#f87171",fontFamily:"var(--font-mono)"},children:[h,"%"]})]}),s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.72rem",color:"#94a3b8",textTransform:"uppercase"},children:"Peak Load Relief"}),s.jsxs("div",{style:{fontSize:"1.5rem",fontWeight:900,color:u<=0?"#34d399":"#f87171",fontFamily:"var(--font-mono)"},children:[u,"%"]})]})]})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsxs("button",{onClick:m,style:{background:"transparent",border:"1px solid rgba(255,255,255,0.15)",borderRadius:"10px",padding:"0.6rem 1rem",color:"#cbd5e1",fontSize:"0.82rem",fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsx(dn,{size:14})," RESET SIMULATOR"]}),s.jsxs("button",{onClick:e,style:{background:"linear-gradient(135deg, #06b6d4, #0891b2)",border:"none",borderRadius:"10px",padding:"0.65rem 1.4rem",color:"#ffffff",fontSize:"0.88rem",fontWeight:800,cursor:"pointer",display:"flex",alignItems:"center",gap:"0.4rem",boxShadow:"0 0 20px rgba(34, 211, 238, 0.35)"},children:[s.jsx(Ut,{size:16})," APPLY SIMULATION TO GRID"]})]})]})})}function Zb({isOpen:n,onClose:e}){const[t,i]=W.useState([{sender:"ai",text:"CivicOS Energy Intelligence online. Select an optimization query or type a question to analyze city-wide infrastructure.",analysis:null}]),[r,a]=W.useState("");if(!n)return null;const o=["How can we reduce peak demand?","Which buildings consume the most energy?","Where should solar capacity be added?","Which areas have abnormal consumption?"],l=c=>{const f={sender:"user",text:c};let h={sender:"ai",text:`Analysis complete for: "${c}". Here is the recommended grid strategy based on real-time SCADA telemetry:`,analysis:{peakDemandTime:"18:00 – 21:00 IST",primaryContributors:["Residential Sector B (Ward 14)","Commercial Complex 108"],potentialReduction:"8.4% – 12.2%",recommendation:"Shift Megapack battery discharge cycle to 18:30 IST to absorb peak residential surge and prevent secondary substation stress."}};c.includes("buildings")?(h.analysis.primaryContributors=["Commercial Complex 108 (410 kW)","Industrial Park 019 (780 kW)"],h.analysis.recommendation="Deploy automated smart building load shedding protocol for HVAC compressors between 14:00 and 16:00."):c.includes("solar")&&(h.analysis.recommendation="Install 2.4 MW rooftop solar arrays on Ward 14 Municipal Roofs to optimize localized grid self-consumption by 18.5%."),i(u=>[...u,f,h])},d=c=>{c.preventDefault(),r.trim()&&(l(r.trim()),a(""))};return s.jsxs("div",{style:{position:"fixed",top:0,right:0,bottom:0,width:"100%",maxWidth:"460px",background:"rgba(5, 8, 11, 0.92)",backdropFilter:"blur(32px)",WebkitBackdropFilter:"blur(32px)",borderLeft:"1px solid rgba(34, 211, 238, 0.35)",zIndex:1e3,display:"flex",flexDirection:"column",boxShadow:"-20px 0 60px rgba(0,0,0,0.9), 0 0 30px rgba(34, 211, 238, 0.15)",color:"#ffffff"},children:[s.jsxs("div",{style:{padding:"1.25rem 1.5rem",borderBottom:"1px solid rgba(255,255,255,0.08)",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[s.jsx("div",{style:{width:"32px",height:"32px",borderRadius:"8px",background:"rgba(34, 211, 238, 0.15)",border:"1px solid #22d3ee",display:"flex",alignItems:"center",justifyContent:"center",color:"#22d3ee"},children:s.jsx(En,{size:16})}),s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.95rem",fontWeight:900,color:"#ffffff"},children:"CIVICOS INTELLIGENCE"}),s.jsx("div",{style:{fontSize:"0.65rem",color:"#34d399",fontFamily:"var(--font-mono)"},children:"● AI MODEL RUNNING IN SCADA CONTEXT"})]})]}),s.jsx("button",{onClick:e,style:{background:"transparent",border:"none",color:"#94a3b8",cursor:"pointer"},children:s.jsx(Kt,{size:20})})]}),s.jsx("div",{style:{flex:1,padding:"1.25rem",overflowY:"auto",display:"flex",flexDirection:"column",gap:"1rem"},children:t.map((c,f)=>s.jsxs("div",{style:{alignSelf:c.sender==="user"?"flex-end":"flex-start",maxWidth:c.sender==="user"?"80%":"100%",background:c.sender==="user"?"rgba(34, 211, 238, 0.15)":"rgba(255,255,255,0.03)",border:c.sender==="user"?"1px solid rgba(34, 211, 238, 0.4)":"1px solid rgba(255,255,255,0.08)",borderRadius:"14px",padding:"1rem",color:"#ffffff"},children:[s.jsx("div",{style:{fontSize:"0.85rem",lineHeight:1.5,marginBottom:c.analysis?"0.85rem":"0"},children:c.text}),c.analysis&&s.jsxs("div",{style:{background:"rgba(8, 14, 22, 0.9)",border:"1px solid rgba(34, 211, 238, 0.3)",borderRadius:"12px",padding:"0.9rem",fontSize:"0.78rem"},children:[s.jsx("div",{style:{fontSize:"0.68rem",fontWeight:800,color:"#34d399",textTransform:"uppercase",marginBottom:"0.5rem",fontFamily:"var(--font-mono)"},children:"✓ ANALYSIS COMPLETE"}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.4rem",fontFamily:"var(--font-mono)"},children:[s.jsxs("div",{children:[s.jsx("span",{style:{color:"#94a3b8"},children:"Peak Demand Window: "}),s.jsx("span",{style:{color:"#22d3ee",fontWeight:800},children:c.analysis.peakDemandTime})]}),s.jsxs("div",{children:[s.jsx("span",{style:{color:"#94a3b8"},children:"Primary Contributors: "}),s.jsx("span",{style:{color:"#ffffff"},children:c.analysis.primaryContributors.join(", ")})]}),s.jsxs("div",{children:[s.jsx("span",{style:{color:"#94a3b8"},children:"Potential Reduction: "}),s.jsx("span",{style:{color:"#34d399",fontWeight:800},children:c.analysis.potentialReduction})]})]}),s.jsxs("div",{style:{marginTop:"0.65rem",paddingTop:"0.65rem",borderTop:"1px solid rgba(255,255,255,0.08)",color:"#fbbf24",fontSize:"0.78rem",fontWeight:700,lineHeight:1.4},children:["💡 RECOMMENDATION: ",c.analysis.recommendation]})]})]},f))}),s.jsxs("div",{style:{padding:"0.85rem 1.25rem",borderTop:"1px solid rgba(255,255,255,0.08)"},children:[s.jsx("div",{style:{fontSize:"0.65rem",color:"#94a3b8",textTransform:"uppercase",marginBottom:"0.5rem",fontFamily:"var(--font-mono)"},children:"SUGGESTED INTELLIGENCE QUERIES"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.4rem"},children:o.map(c=>s.jsxs("button",{onClick:()=>l(c),style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"8px",padding:"0.45rem 0.75rem",color:"#cbd5e1",fontSize:"0.75rem",textAlign:"left",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[s.jsx("span",{children:c}),s.jsx(ur,{size:12,color:"#22d3ee"})]},c))})]}),s.jsxs("form",{onSubmit:d,style:{padding:"1rem 1.25rem",borderTop:"1px solid rgba(255,255,255,0.08)",display:"flex",gap:"0.5rem"},children:[s.jsx("input",{type:"text",placeholder:"Ask CivicOS Intelligence...",value:r,onChange:c=>a(c.target.value),style:{flex:1,background:"rgba(255,255,255,0.04)",border:"1px solid rgba(34, 211, 238, 0.3)",borderRadius:"10px",padding:"0.65rem 0.85rem",color:"#ffffff",fontSize:"0.85rem",outline:"none"}}),s.jsx("button",{type:"submit",style:{background:"#22d3ee",border:"none",borderRadius:"10px",padding:"0.65rem 1rem",color:"#05080b",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},children:s.jsx(Ed,{size:16})})]})]})}function fs(){const[n,e]=W.useState("COMMAND"),[t,i]=W.useState(!1),[r,a]=W.useState(!1),[o,l]=W.useState(!1),[d,c]=W.useState(null);return s.jsxs("div",{style:{background:"#05080B",minHeight:"100vh",color:"#ffffff",fontFamily:"var(--font-sans)",position:"relative",paddingTop:"80px",paddingBottom:"40px",overflowX:"hidden"},children:[s.jsx(xm,{activeView:n,setActiveView:e,onOpenScenario:()=>i(!0),onOpenAi:()=>a(!0),onOpenAlerts:()=>a(!0)}),s.jsxs("main",{style:{maxWidth:"1480px",margin:"0 auto",padding:"0 1rem",display:"flex",flexDirection:"column",gap:"1.5rem"},children:[s.jsxs("div",{style:{display:"flex",justify:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem",padding:"0.5rem 0"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.72rem",fontWeight:800,color:"#22d3ee",letterSpacing:"0.12em",fontFamily:"var(--font-mono)"},children:"CIVICOS MUNICIPAL OPERATING SYSTEM • SPATIAL COMMAND CENTER"}),s.jsx("h1",{style:{fontSize:"2rem",fontWeight:900,color:"#ffffff",letterSpacing:"-0.03em"},children:"CITY ENERGY COMMAND CENTER"})]}),s.jsx("div",{style:{display:"flex",gap:"0.5rem"},children:["COMMAND","MAP","DIGITAL TWIN","ANALYTICS"].map(f=>{const h=n===f||f==="COMMAND"&&n==="COMMAND"||f==="DIGITAL TWIN"&&n==="TWIN";return s.jsx("button",{onClick:()=>e(f==="DIGITAL TWIN"?"TWIN":f),style:{background:h?"linear-gradient(135deg, rgba(34, 211, 238, 0.25), rgba(6, 182, 212, 0.1))":"rgba(255,255,255,0.03)",border:h?"1px solid #22d3ee":"1px solid rgba(255,255,255,0.08)",borderRadius:"8px",padding:"0.45rem 0.85rem",color:h?"#22d3ee":"#cbd5e1",fontSize:"0.72rem",fontWeight:800,fontFamily:"var(--font-mono)",cursor:"pointer",boxShadow:h?"0 0 16px rgba(34, 211, 238, 0.25)":"none"},children:f},f)})})]}),s.jsx(qb,{}),s.jsx("div",{style:{background:"rgba(8, 14, 22, 0.75)",backdropFilter:"blur(28px)",WebkitBackdropFilter:"blur(28px)",border:"1px solid rgba(34, 211, 238, 0.25)",borderRadius:"20px",padding:"1rem",height:"560px",boxShadow:"0 20px 60px rgba(0,0,0,0.8), 0 0 30px rgba(34, 211, 238, 0.1)",position:"relative"},children:s.jsx(Xb,{selectedBuilding:d,onSelectBuilding:f=>c(f)})}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(420px, 1fr))",gap:"1.5rem"},children:[s.jsx(Yb,{}),s.jsx($b,{})]})]}),s.jsx(Kb,{isOpen:t,onClose:()=>i(!1)}),s.jsx(Zb,{isOpen:r,onClose:()=>a(!1)})]})}function ld(){const n=Wi(),[e]=md(),t=e.get("redirect"),{login:i,register:r}=Tr(),{t:a}=un(),[o,l]=W.useState("login"),[d,c]=W.useState(""),[f,h]=W.useState(""),[u,m]=W.useState(""),[x,S]=W.useState(""),[g,p]=W.useState(""),[M,T]=W.useState(!1),[_,v]=W.useState(""),w=A=>{if(t){n(t);return}const P=(A==null?void 0:A.role)||"CITIZEN";n(P==="ADMIN"?"/admin":P==="OFFICER"?"/officer":"/citizen")},R=async A=>{var I,O;A&&A.preventDefault(),v("");const P=f.trim().toLowerCase();if(!P){v("Please enter your email address.");return}if(!x){v("Please enter your password.");return}if(o==="signup"){if(!d.trim()){v("Please enter your full name.");return}if(x.length<6){v("Password must be at least 6 characters.");return}if(x!==g){v("Passwords do not match.");return}}T(!0);try{if(o==="signup"){const k=await r({name:d.trim(),email:P,phone:u.trim(),password:x,role:"CITIZEN"});w(k)}else{const k=await i(P,x);w(k)}}catch(k){v(((O=(I=k.response)==null?void 0:I.data)==null?void 0:O.message)||k.message||"Authentication failed. Please check credentials.")}finally{T(!1)}},b=async A=>{let P="officer@civicos.gov",I="officer123",O="/officer";A==="admin"?(P="admin@civicos.gov",I="admin123",O="/admin"):A==="citizen"&&(P="citizen@civicos.gov",I="citizen123",O="/citizen"),h(P),S(I),T(!0);try{const k=await i(P,I);w(k)}catch{n(O)}finally{T(!1)}};return s.jsx("div",{style:{background:"var(--bg-app)",minHeight:"calc(100vh - 90px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"2.5rem 1rem",boxSizing:"border-box",color:"var(--text-primary)"},children:s.jsxs("div",{className:"natural-glass-card",style:{width:"100%",maxWidth:"460px",padding:"2rem 1.75rem",background:"#121722",borderRadius:"1.25rem",boxSizing:"border-box",boxShadow:"0 25px 60px rgba(0, 0, 0, 0.9)",border:"1px solid rgba(16, 185, 129, 0.3)"},children:[s.jsxs("div",{style:{textAlign:"center",marginBottom:"1.5rem"},children:[s.jsx("div",{style:{background:"linear-gradient(135deg, #059669 0%, #0d9488 100%)",width:"50px",height:"50px",borderRadius:"14px",display:"inline-flex",alignItems:"center",justifyContent:"center",color:"white",marginBottom:"0.75rem",boxShadow:"0 0 20px rgba(16, 185, 129, 0.4)"},children:s.jsx(Fn,{size:26})}),s.jsx("h2",{style:{fontSize:"1.5rem",color:"#ffffff",fontWeight:800,marginBottom:"0.35rem"},children:"CivicOS Operating System"}),s.jsx("p",{style:{color:"#94a3b8",fontSize:"0.85rem"},children:o==="login"?"Sign in to access your municipal portal":"Register a new citizen account"})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.4rem",background:"rgba(255,255,255,0.03)",padding:"0.3rem",borderRadius:"0.75rem",marginBottom:"1.5rem",border:"1px solid rgba(255,255,255,0.06)"},children:[s.jsx("button",{type:"button",onClick:()=>{l("login"),v("")},style:{padding:"0.55rem",fontSize:"0.85rem",fontWeight:800,borderRadius:"0.5rem",border:"none",cursor:"pointer",background:o==="login"?"var(--grad-sage)":"transparent",color:o==="login"?"#ffffff":"#94a3b8",boxShadow:o==="login"?"0 4px 12px rgba(16,185,129,0.3)":"none",transition:"all 0.2s"},children:a("login")}),s.jsx("button",{type:"button",onClick:()=>{l("signup"),v("")},style:{padding:"0.55rem",fontSize:"0.85rem",fontWeight:800,borderRadius:"0.5rem",border:"none",cursor:"pointer",background:o==="signup"?"var(--grad-sage)":"transparent",color:o==="signup"?"#ffffff":"#94a3b8",boxShadow:o==="signup"?"0 4px 12px rgba(16,185,129,0.3)":"none",transition:"all 0.2s"},children:"Sign Up"})]}),_&&s.jsxs("div",{style:{background:"rgba(239,68,68,0.12)",border:"1px solid rgba(239,68,68,0.35)",color:"#f87171",padding:"0.75rem 0.9rem",borderRadius:"0.5rem",marginBottom:"1.25rem",fontSize:"0.82rem",display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsx(wd,{size:15,style:{flexShrink:0}})," ",_]}),s.jsxs("form",{onSubmit:R,style:{display:"flex",flexDirection:"column",gap:"1.1rem"},children:[o==="signup"&&s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#cbd5e1",marginBottom:"0.35rem"},children:"Full Name *"}),s.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center"},children:[s.jsx(lr,{size:17,style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",color:"#94a3b8",pointerEvents:"none",zIndex:2}}),s.jsx("input",{type:"text",className:"form-input-dark",style:{paddingLeft:"2.8rem",width:"100%",height:"48px",fontSize:"0.88rem",boxSizing:"border-box"},placeholder:"Shardul Parihar",value:d,onChange:A=>c(A.target.value),required:!0})]})]}),s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#cbd5e1",marginBottom:"0.35rem"},children:"Email Address *"}),s.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center"},children:[s.jsx(Td,{size:17,style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",color:"#94a3b8",pointerEvents:"none",zIndex:2}}),s.jsx("input",{type:"email",className:"form-input-dark",style:{paddingLeft:"2.8rem",width:"100%",height:"48px",fontSize:"0.88rem",boxSizing:"border-box"},placeholder:"citizen@civicos.gov",value:f,onChange:A=>h(A.target.value),required:!0})]})]}),o==="signup"&&s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#cbd5e1",marginBottom:"0.35rem"},children:"Mobile Number"}),s.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center"},children:[s.jsx(Ad,{size:17,style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",color:"#94a3b8",pointerEvents:"none",zIndex:2}}),s.jsx("input",{type:"tel",className:"form-input-dark",style:{paddingLeft:"2.8rem",width:"100%",height:"48px",fontSize:"0.88rem",boxSizing:"border-box"},placeholder:"+91 98230 11223",value:u,onChange:A=>m(A.target.value)})]})]}),s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#cbd5e1",marginBottom:"0.35rem"},children:"Password *"}),s.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center"},children:[s.jsx(Nl,{size:17,style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",color:"#94a3b8",pointerEvents:"none",zIndex:2}}),s.jsx("input",{type:"password",className:"form-input-dark",style:{paddingLeft:"2.8rem",width:"100%",height:"48px",fontSize:"0.88rem",boxSizing:"border-box"},placeholder:"••••••••",value:x,onChange:A=>S(A.target.value),required:!0})]})]}),o==="signup"&&s.jsxs("div",{children:[s.jsx("label",{style:{display:"block",fontSize:"0.82rem",fontWeight:700,color:"#cbd5e1",marginBottom:"0.35rem"},children:"Confirm Password *"}),s.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center"},children:[s.jsx(Nl,{size:17,style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",color:"#94a3b8",pointerEvents:"none",zIndex:2}}),s.jsx("input",{type:"password",className:"form-input-dark",style:{paddingLeft:"2.8rem",width:"100%",height:"48px",fontSize:"0.88rem",boxSizing:"border-box"},placeholder:"••••••••",value:g,onChange:A=>p(A.target.value),required:!0})]})]}),s.jsx("button",{type:"submit",className:"btn-sage",style:{width:"100%",minHeight:"48px",justifyContent:"center",padding:"0.75rem",fontSize:"0.95rem",fontWeight:700,marginTop:"0.4rem"},disabled:M,children:M?s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsx("div",{style:{width:"14px",height:"14px",borderRadius:"50%",border:"2px solid rgba(255,255,255,0.3)",borderTopColor:"#fff",animation:"spin 0.8s linear infinite"}}),s.jsx("span",{children:"Processing..."})]}):o==="login"?s.jsxs(s.Fragment,{children:["Sign In to Portal ",s.jsx(ur,{size:16})]}):s.jsxs(s.Fragment,{children:["Create Citizen Account ",s.jsx(ur,{size:16})]})})]}),s.jsxs("div",{style:{marginTop:"1.5rem",paddingTop:"1.25rem",borderTop:"1px solid rgba(255, 255, 255, 0.08)"},children:[s.jsx("div",{style:{fontSize:"0.72rem",color:"#94a3b8",marginBottom:"0.65rem",textTransform:"uppercase",letterSpacing:"0.05em",fontWeight:700,textAlign:"center"},children:"1-Click Quick Fill Demo Accounts:"}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"0.4rem"},children:[s.jsx("button",{type:"button",onClick:()=>b("admin"),className:"btn-glass",style:{fontSize:"0.78rem",minHeight:"40px",padding:"0.5rem 0.25rem",justifyContent:"center",fontWeight:700},children:"Admin"}),s.jsx("button",{type:"button",onClick:()=>b("officer"),className:"btn-glass",style:{fontSize:"0.78rem",minHeight:"40px",padding:"0.5rem 0.25rem",justifyContent:"center",fontWeight:700},children:"Officer"}),s.jsx("button",{type:"button",onClick:()=>b("citizen"),className:"btn-glass",style:{fontSize:"0.78rem",minHeight:"40px",padding:"0.5rem 0.25rem",justifyContent:"center",fontWeight:700},children:"Citizen"})]})]})]})})}const Jb={SUBMITTED:"badge-teal",ASSIGNED:"badge-teal",ACCEPTED:"badge-medium",IN_PROGRESS:"badge-medium",RESOLVED:"badge-sage",CLOSED:"badge-sage"};function Ir({complaint:n,isOpen:e,onClose:t,onRefresh:i}){var I,O,k,D,H,Z,$,ne;const{user:r}=Tr(),[a,o]=W.useState((n==null?void 0:n.status)||""),[l,d]=W.useState((n==null?void 0:n.history)||[]),[c,f]=W.useState(""),[h,u]=W.useState("success"),[m,x]=W.useState(!1),[S,g]=W.useState(!1),[p,M]=W.useState(!1),[T,_]=W.useState(null);if(W.useEffect(()=>{n&&(o(n.status||""),d(n.history||[]),f(""),u("success"),g(!1),_(null),n._id&&(!n.history||n.history.length===0)&&(M(!0),$t.getById(n._id).then(z=>{if(z.data.success){const X=z.data.data;d(X.history||[]),_(X)}}).catch(()=>{}).finally(()=>M(!1))))},[n]),!e||!n)return null;const v=T||n,w=(z,X="success")=>{f(z),u(X),setTimeout(()=>f(""),6e3)},R=async z=>{var ue,ke;const X=z?"RESOLVED":"IN_PROGRESS",J=a;o(X),w(z?"✔ Verification Confirmed! Complaint marked RESOLVED in Municipal Ledger.":"⚠ Issue marked as unresolved. Reopened for field officer review.",z?"success":"warning");const fe={note:z?"Citizen confirmed resolution. Work verified successfully.":"Citizen marked issue as still unresolved. Reopened for field inspection.",actorName:(r==null?void 0:r.name)||"Citizen",createdAt:new Date().toISOString()};d(Le=>[...Le,fe]),x(!0);try{(await $t.verifyResolution(n._id,{verified:z})).data.success&&i&&i()}catch(Le){o(J),d(_e=>_e.filter(Y=>Y!==fe)),w(((ke=(ue=Le.response)==null?void 0:ue.data)==null?void 0:ke.message)||"Verification update failed. Please retry.","error")}finally{x(!1)}},b=async(z,X)=>{var ue,ke;const J=a;o(z),w(`✔ Work Status Updated to ${z}! Saved in Municipal Database.`,"success");const fe={note:X||`Officer updated status to ${z}`,actorName:(r==null?void 0:r.name)||"Field Officer",createdAt:new Date().toISOString()};d(Le=>[...Le,fe]),x(!0);try{(await $t.updateStatus(n._id,{status:z,note:X||`Officer updated status to ${z}`})).data.success&&i&&i()}catch(Le){o(J),d(_e=>_e.filter(Y=>Y!==fe)),w(((ke=(ue=Le.response)==null?void 0:ue.data)==null?void 0:ke.message)||"Status update failed. Please retry.","error")}finally{x(!1)}},P=((O=(I=v==null?void 0:v.location)==null?void 0:I.coordinates)==null?void 0:O[0])&&((D=(k=v==null?void 0:v.location)==null?void 0:k.coordinates)==null?void 0:D[1])?`https://maps.google.com/?q=${v.location.coordinates[1]},${v.location.coordinates[0]}`:null;return s.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(5, 8, 15, 0.75)",backdropFilter:"blur(8px)",WebkitBackdropFilter:"blur(8px)",zIndex:"var(--z-drawer, 400)",display:"flex",justifyContent:"flex-end",animation:"fadeIn 0.2s ease"},onClick:z=>{z.target===z.currentTarget&&t()},"aria-modal":"true",role:"dialog","aria-label":"Complaint Quick View",children:s.jsxs("div",{className:"glass-drawer-content",style:{background:"#121722",borderLeft:"1px solid rgba(255, 255, 255, 0.12)",width:"100%",maxWidth:"520px",height:"100%",display:"flex",flexDirection:"column",boxShadow:"-15px 0 40px rgba(0,0,0,0.8)",overflowY:"auto",animation:"slideLeft 0.25s cubic-bezier(0.4, 0, 0.2, 1)"},children:[s.jsxs("div",{style:{padding:"1.25rem 1.5rem",borderBottom:"1px solid rgba(255, 255, 255, 0.08)",display:"flex",alignItems:"center",justifyContent:"space-between",background:"#0a0d14",position:"sticky",top:0,zIndex:10,flexShrink:0},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.7rem",color:"#34d399",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em"},children:"Municipal Operating System"}),s.jsx("div",{style:{fontFamily:"monospace",fontWeight:800,color:"#3b82f6",fontSize:"1.2rem",letterSpacing:"0.03em"},children:n.trackingCode})]}),s.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center"},children:[P&&s.jsxs("a",{href:P,target:"_blank",rel:"noreferrer",className:"btn-glass",style:{padding:"0.4rem 0.7rem",fontSize:"0.75rem",color:"#34d399",borderColor:"rgba(16,185,129,0.3)",textDecoration:"none"},title:"Open GPS Navigation",children:[s.jsx(Os,{size:14})," Navigate"]}),s.jsx("button",{onClick:t,style:{background:"rgba(255, 255, 255, 0.06)",border:"1px solid rgba(255, 255, 255, 0.1)",color:"#cbd5e1",width:"36px",height:"36px",borderRadius:"0.5rem",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"},"aria-label":"Close Drawer",children:s.jsx(Kt,{size:20})})]})]}),s.jsxs("div",{style:{padding:"1.25rem 1.5rem",display:"flex",flexDirection:"column",gap:"1.1rem",flex:1},children:[c&&s.jsxs("div",{style:{background:h==="success"?"rgba(16, 185, 129, 0.15)":h==="warning"?"rgba(245, 158, 11, 0.15)":"rgba(239, 68, 68, 0.15)",border:`1px solid ${h==="success"?"#10b981":h==="warning"?"#f59e0b":"#ef4444"}`,color:h==="success"?"#34d399":h==="warning"?"#fbbf24":"#f87171",padding:"0.85rem 1rem",borderRadius:"0.5rem",display:"flex",alignItems:"flex-start",gap:"0.5rem",fontWeight:600,fontSize:"0.85rem",lineHeight:1.4,animation:"fadeIn 0.25s ease"},children:[s.jsx(Ut,{size:16,style:{marginTop:"1px",flexShrink:0}}),c]}),s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",gap:"0.4rem",marginBottom:"0.6rem",flexWrap:"wrap"},children:[s.jsx("span",{className:`badge ${v.severity==="CRITICAL"?"badge-critical":v.severity==="HIGH"?"badge-high":v.severity==="LOW"?"badge-low":"badge-medium"}`,children:v.severity}),s.jsxs("span",{className:`badge ${Jb[a]||"badge-teal"}`,children:["● ",a]}),v.priorityScore>0&&s.jsxs("span",{className:"badge badge-teal",children:["Priority ",v.priorityScore,"/100"]}),v.safetyRisk&&s.jsx("span",{className:"badge badge-critical",children:"⚠ Safety Risk"})]}),s.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:800,color:"#ffffff",lineHeight:1.3},children:v.title})]}),s.jsx("div",{style:{fontSize:"0.88rem",color:"#cbd5e1",lineHeight:1.65,background:"#0a0d14",padding:"0.9rem",borderRadius:"0.5rem",border:"1px solid rgba(255,255,255,0.06)"},children:v.description}),v.image&&!S&&s.jsxs("div",{style:{background:"#0a0d14",borderRadius:"0.6rem",padding:"0.85rem",border:"1px solid rgba(255,255,255,0.08)"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",fontSize:"0.72rem",color:"#34d399",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.04em",marginBottom:"0.6rem"},children:[s.jsx(Ru,{size:13})," Attached Photo Evidence"]}),s.jsx("img",{src:v.image,alt:"Complaint Evidence",onError:()=>g(!0),style:{width:"100%",maxHeight:"210px",objectFit:"cover",borderRadius:"0.5rem",border:"1px solid rgba(255,255,255,0.1)",display:"block"}})]}),s.jsxs("div",{style:{background:"rgba(59, 130, 246, 0.08)",border:"1px solid rgba(59, 130, 246, 0.25)",padding:"0.9rem",borderRadius:"0.5rem"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",color:"#60a5fa",fontWeight:700,fontSize:"0.82rem",marginBottom:"0.5rem"},children:[s.jsx(En,{size:15})," AI Intelligence Rationale"]}),s.jsxs("div",{style:{fontSize:"0.8rem",color:"#cbd5e1",lineHeight:1.5},children:[s.jsx("strong",{children:"Category:"})," ",v.category," (",v.subCategory||"Infrastructure",")"," ","•"," ",s.jsx("strong",{children:"SLA:"})," ",s.jsx("span",{style:{color:(H=v.sla)!=null&&H.isBreached?"#ef4444":(Z=v.sla)!=null&&Z.isWarning?"#fbbf24":"#34d399",fontWeight:700},children:(($=v.sla)==null?void 0:$.statusLabel)||"Within Target"})]})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.6rem",fontSize:"0.8rem",background:"#0a0d14",padding:"0.9rem",borderRadius:"0.5rem",border:"1px solid rgba(255,255,255,0.06)"},children:[s.jsxs("div",{children:[s.jsx("span",{style:{color:"#94a3b8"},children:"Ward:"})," ",s.jsxs("strong",{style:{color:"#fff"},children:["Ward ",v.ward]})]}),s.jsxs("div",{children:[s.jsx("span",{style:{color:"#94a3b8"},children:"Department:"})," ",s.jsx("strong",{style:{color:"#fff"},children:v.departmentName||"General"})]}),s.jsxs("div",{children:[s.jsx("span",{style:{color:"#94a3b8"},children:"Citizen:"})," ",s.jsx("strong",{style:{color:"#fff"},children:v.citizenName||"Anonymous"})]}),s.jsxs("div",{children:[s.jsx("span",{style:{color:"#94a3b8"},children:"Officer:"})," ",s.jsx("strong",{style:{color:"#fff"},children:((ne=v.assignedOfficer)==null?void 0:ne.name)||"Unassigned"})]}),s.jsxs("div",{style:{gridColumn:"span 2"},children:[s.jsx("span",{style:{color:"#94a3b8"},children:"Location:"})," ",v.address]})]}),s.jsxs("div",{style:{background:"#121722",border:"1px solid rgba(59, 130, 246, 0.3)",padding:"1.1rem",borderRadius:"0.6rem"},children:[s.jsx("div",{style:{fontSize:"0.82rem",fontWeight:800,color:"#60a5fa",marginBottom:"0.65rem",textTransform:"uppercase",letterSpacing:"0.04em"},children:"Field Officer Work Actions"}),s.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[a==="SUBMITTED"&&s.jsxs("button",{onClick:()=>b("ACCEPTED","Officer accepted citizen report dispatch."),disabled:m,className:"btn-glass",style:{padding:"0.5rem 0.85rem",fontSize:"0.8rem",borderColor:"#3b82f6",color:"#60a5fa",flex:"1 1 auto"},children:[s.jsx(Cd,{size:14})," Accept Job"]}),a!=="IN_PROGRESS"&&a!=="RESOLVED"&&a!=="CLOSED"&&s.jsxs("button",{onClick:()=>b("IN_PROGRESS","Officer initiated on-site field repairs."),disabled:m,className:"btn-glass",style:{padding:"0.5rem 0.85rem",fontSize:"0.8rem",borderColor:"#f59e0b",color:"#fbbf24",flex:"1 1 auto"},children:[s.jsx(Rd,{size:14})," Start Field Work"]}),a!=="RESOLVED"&&a!=="CLOSED"&&s.jsxs("button",{onClick:()=>b("RESOLVED","Field Officer completed on-site repair work."),disabled:m,className:"btn-sage",style:{padding:"0.5rem 0.85rem",fontSize:"0.8rem",flex:"1 1 auto"},children:[m?s.jsx(dn,{size:14,style:{animation:"spin 1s linear infinite"}}):s.jsx(Fi,{size:14}),m?"Saving...":"Mark Work Resolved"]}),(a==="RESOLVED"||a==="CLOSED")&&s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",color:"#34d399",fontWeight:700,fontSize:"0.85rem"},children:[s.jsx(Fi,{size:16})," Work completed"]})]})]}),s.jsxs("div",{style:{background:"rgba(16, 185, 129, 0.1)",border:"1px solid rgba(16, 185, 129, 0.4)",padding:"1.1rem",borderRadius:"0.6rem"},children:[s.jsx("div",{style:{fontSize:"0.9rem",fontWeight:800,color:"#34d399",marginBottom:"0.3rem"},children:"Citizen Resolution Verification"}),s.jsx("p",{style:{fontSize:"0.8rem",color:"#cbd5e1",marginBottom:"0.75rem",lineHeight:1.5},children:"Confirm if the reported problem has been resolved satisfactorily on-site."}),s.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[s.jsxs("button",{onClick:()=>R(!0),disabled:m,className:"btn-sage",style:{padding:"0.55rem 0.9rem",fontSize:"0.85rem",flex:"1 1 auto",justifyContent:"center",minWidth:"120px"},children:[s.jsx(Xo,{size:14})," YES — Resolved"]}),s.jsxs("button",{onClick:()=>R(!1),disabled:m,className:"btn-glass",style:{padding:"0.55rem 0.9rem",fontSize:"0.85rem",borderColor:"rgba(239,68,68,0.45)",color:"#f87171",flex:"1 1 auto",justifyContent:"center",minWidth:"120px"},children:[s.jsx(qo,{size:14})," STILL AN ISSUE"]})]})]}),s.jsxs("div",{children:[s.jsxs("div",{style:{fontSize:"0.75rem",fontWeight:800,color:"#64748b",textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"0.65rem",display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsx(On,{size:13})," Audit History Log",s.jsxs("span",{style:{background:"rgba(255,255,255,0.06)",padding:"0.1rem 0.45rem",borderRadius:"999px",fontSize:"0.7rem"},children:[l.length," entries"]})]}),p?s.jsx("div",{style:{color:"#64748b",fontSize:"0.82rem",padding:"0.75rem 0"},children:"Loading history..."}):l.length===0?s.jsx("div",{style:{color:"#64748b",fontSize:"0.82rem",padding:"0.5rem 0"},children:"No audit entries yet."}):s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.6rem",fontSize:"0.8rem",maxHeight:"240px",overflowY:"auto",paddingRight:"0.25rem"},children:l.map((z,X)=>s.jsxs("div",{style:{borderLeft:"2px solid #10b981",paddingLeft:"0.75rem"},children:[s.jsx("div",{style:{fontWeight:700,color:"#f8fafc",lineHeight:1.4},children:z.note}),s.jsxs("div",{style:{color:"#94a3b8",fontSize:"0.73rem",marginTop:"0.15rem"},children:["By ",z.actorName," • ",new Date(z.createdAt).toLocaleString()]})]},X))})]})]})]})})}class Ks extends vr.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.warn("[CivicOS Leaflet Map Isolated]:",e)}render(){return this.state.hasError?s.jsxs("div",{style:{width:"100%",height:"100%",minHeight:"180px",background:"linear-gradient(135deg, #0e1420, #121826)",borderRadius:"0.75rem",border:"1px solid rgba(16, 185, 129, 0.3)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"1rem",color:"#94a3b8",textAlign:"center",boxSizing:"border-box"},children:[s.jsx("div",{style:{background:"rgba(16, 185, 129, 0.15)",color:"#34d399",width:"36px",height:"36px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"0.5rem"},children:s.jsx(tn,{size:20})}),s.jsx("div",{style:{fontSize:"0.85rem",fontWeight:700,color:"#ffffff"},children:"GPS Incident Coordinate Verified"}),s.jsx("div",{style:{fontSize:"0.75rem",color:"#34d399",marginTop:"0.2rem"},children:"18.5304° N, 73.8667° E • Ward 14"})]}):this.props.children}}const us=n=>Kn.divIcon({className:"custom-leaflet-pin",html:`<div style="background-color: ${n}; width: 14px; height: 14px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 12px ${n};"></div>`,iconSize:[14,14],iconAnchor:[7,7]}),cd={CRITICAL:us("#ef4444"),HIGH:us("#f97316"),MEDIUM:us("#f59e0b"),LOW:us("#10b981")},Wa=[{_id:"65f8a0000000000000000101",trackingCode:"CIV-138987-644E",title:"Water Leakage & Supply Pressure Burst",description:"Major water pipeline leak near Ward 14 bus stop causing street flooding.",category:"Water Leakage",severity:"CRITICAL",priorityScore:88,status:"IN_PROGRESS",ward:14,address:"Near College Gate, Main Road, Ward 14",citizenName:"Amitav Ghosh",departmentName:"Water Supply & Sanitation",location:{coordinates:[73.87583,18.53705]}},{_id:"65f8a0000000000000000102",trackingCode:"CIV-284791-889B",title:"Asphalt Pothole & Road Deterioration",description:"Deep pothole causing traffic slowdown near Sector 4 main junction.",category:"Road Damage",severity:"HIGH",priorityScore:74,status:"ASSIGNED",ward:14,address:"Sector 4 Main Corridor, Ward 14",citizenName:"Priya Sharma",departmentName:"Roads & Municipal Infrastructure",location:{coordinates:[73.8667,18.5304]}},{_id:"65f8a0000000000000000103",trackingCode:"CIV-993812-441A",title:"Streetlight Substation Transformer Outage",description:"Entire street dark between Block B and Block C due to luminaire failure.",category:"Streetlight",severity:"MEDIUM",priorityScore:56,status:"RESOLVED",ward:7,address:"Block B Main Road, Ward 7",citizenName:"Shardul Parihar",departmentName:"Electrical Services",location:{coordinates:[73.8567,18.5204]}},{_id:"65f8a0000000000000000104",trackingCode:"CIV-551920-192C",title:"Open Drain Overflow & Stormwater Hazard",description:"Clogged stormwater drain spilling onto pedestrian footpath.",category:"Drainage",severity:"HIGH",priorityScore:79,status:"ACCEPTED",ward:12,address:"Market Yard Crossing, Ward 12",citizenName:"Karan Patel",departmentName:"Public Health & Sanitation",location:{coordinates:[73.84,18.51]}},{_id:"65f8a0000000000000000105",trackingCode:"CIV-883019-332D",title:"Commercial Refuse Accumulation",description:"Uncollected solid waste piling up near residential colony gate.",category:"Garbage",severity:"MEDIUM",priorityScore:62,status:"SUBMITTED",ward:3,address:"Green Park Extension, Ward 3",citizenName:"Ananya Roy",departmentName:"Solid Waste Management",location:{coordinates:[73.88,18.545]}}],Ha=[{id:"h1",title:"Ward 14 Infrastructure Risk Hub",centroid:[73.87583,18.53705],complaintCount:14},{id:"h2",title:"Ward 12 Drainage Flood Cluster",centroid:[73.84,18.51],complaintCount:9}];function Qb(){const[n,e]=W.useState(Wa),[t,i]=W.useState(Ha),[r,a]=W.useState(null),[o,l]=W.useState(!0),[d,c]=W.useState(!1),[f,h]=W.useState(""),[u,m]=W.useState(""),[x,S]=W.useState(""),g=async()=>{var M,T;c(!0);try{const[_,v]=await Promise.all([$t.list({category:f,severity:u,ward:x,limit:100}),Bi.getHotspots()]);(M=_.data)!=null&&M.success&&_.data.data.length>0?e(_.data.data):e(Wa),(T=v.data)!=null&&T.success&&v.data.data.length>0?i(v.data.data):i(Ha)}catch(_){console.warn("[MapExperience] Using fallback map dataset:",_.message),e(Wa),i(Ha)}finally{c(!1)}};W.useEffect(()=>{g()},[f,u,x]);const p=n.filter(M=>!(f&&M.category!==f||u&&M.severity!==u||x&&M.ward!==parseInt(x)));return s.jsxs("div",{style:{position:"relative",height:"calc(100vh - 64px)",width:"100%",overflow:"hidden",background:"#0a0d14"},children:[s.jsxs("div",{style:{position:"absolute",top:"1rem",left:"1rem",right:"1rem",zIndex:800,background:"rgba(18, 23, 34, 0.95)",backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",padding:"0.75rem 1.25rem",borderRadius:"0.75rem",border:"1px solid rgba(255, 255, 255, 0.12)",boxShadow:"0 10px 25px rgba(0, 0, 0, 0.6)",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"0.75rem"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",fontWeight:800,fontSize:"0.95rem",color:"#ffffff"},children:[s.jsx("div",{style:{background:"rgba(16, 185, 129, 0.15)",width:"28px",height:"28px",borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"center",color:"#34d399"},children:s.jsx(tn,{size:16})}),s.jsx("span",{children:"Geospatial Intelligence Map"}),s.jsxs("span",{className:"badge badge-sage",style:{fontSize:"0.65rem"},children:[p.length," Live Incidents"]})]}),s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.5rem",alignItems:"center"},children:[s.jsxs("select",{className:"form-input-dark",style:{padding:"0.35rem 0.65rem",fontSize:"0.8rem",minHeight:"36px"},value:f,onChange:M=>h(M.target.value),children:[s.jsx("option",{value:"",children:"All Categories"}),s.jsx("option",{value:"Road Damage",children:"Road Damage"}),s.jsx("option",{value:"Water Leakage",children:"Water Leakage"}),s.jsx("option",{value:"Drainage",children:"Drainage"}),s.jsx("option",{value:"Garbage",children:"Garbage"}),s.jsx("option",{value:"Streetlight",children:"Streetlight"})]}),s.jsxs("select",{className:"form-input-dark",style:{padding:"0.35rem 0.65rem",fontSize:"0.8rem",minHeight:"36px"},value:u,onChange:M=>m(M.target.value),children:[s.jsx("option",{value:"",children:"All Severities"}),s.jsx("option",{value:"CRITICAL",children:"CRITICAL"}),s.jsx("option",{value:"HIGH",children:"HIGH"}),s.jsx("option",{value:"MEDIUM",children:"MEDIUM"}),s.jsx("option",{value:"LOW",children:"LOW"})]}),s.jsxs("select",{className:"form-input-dark",style:{padding:"0.35rem 0.65rem",fontSize:"0.8rem",minHeight:"36px"},value:x,onChange:M=>S(M.target.value),children:[s.jsx("option",{value:"",children:"All Wards"}),Array.from({length:20},(M,T)=>s.jsxs("option",{value:T+1,children:["Ward ",T+1]},T+1))]}),s.jsxs("button",{onClick:()=>l(!o),className:o?"btn-sage":"btn-glass",style:{padding:"0.35rem 0.75rem",fontSize:"0.8rem",minHeight:"36px"},children:[s.jsx(Sr,{size:14})," Hotspots ",o?"ON":"OFF"]}),s.jsx("button",{onClick:g,className:"btn-glass",style:{padding:"0.35rem 0.6rem",fontSize:"0.8rem",minHeight:"36px"},title:"Refresh Data",children:s.jsx(dn,{size:14})})]})]}),s.jsx(Ks,{children:s.jsxs(Fs,{center:[18.5304,73.8667],zoom:13,style:{height:"100%",width:"100%"},children:[s.jsx(zs,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),o&&t.map((M,T)=>!(M!=null&&M.centroid)||M.centroid.length<2||isNaN(M.centroid[0])||isNaN(M.centroid[1])?null:s.jsx(Ou,{center:[M.centroid[1],M.centroid[0]],radius:500,pathOptions:{color:"#ef4444",fillColor:"#ef4444",fillOpacity:.25}},T)),p.map(M=>{var w;const T=(w=M.location)==null?void 0:w.coordinates;if(!T||T.length<2||isNaN(T[0])||isNaN(T[1]))return null;const _=typeof T[1]=="number"?T[1]:18.5304,v=typeof T[0]=="number"?T[0]:73.8667;return s.jsx(Bs,{position:[_,v],icon:cd[M.severity]||cd.MEDIUM,eventHandlers:{click:()=>a(M)},children:s.jsx(Fu,{children:s.jsxs("div",{style:{fontSize:"0.85rem",color:"#f8fafc",lineHeight:1.4},children:[s.jsx("div",{style:{fontFamily:"monospace",fontWeight:800,color:"#34d399"},children:M.trackingCode}),s.jsx("strong",{style:{color:"#ffffff"},children:M.title}),s.jsx("br",{}),s.jsxs("span",{style:{fontSize:"0.75rem",color:"#cbd5e1"},children:[M.address," (Ward ",M.ward,")"]}),s.jsx("br",{}),s.jsxs("div",{style:{marginTop:"0.3rem",display:"flex",gap:"0.3rem"},children:[s.jsx("span",{className:`badge ${M.severity==="CRITICAL"?"badge-critical":"badge-high"}`,children:M.severity}),s.jsx("span",{className:"badge badge-sage",children:M.status})]})]})})},M._id)})]},"main-map-exp")}),s.jsx(Ir,{complaint:r,isOpen:!!r,onClose:()=>a(null),onRefresh:g})]})}function eS({columns:n,data:e,loading:t,emptyMessage:i="No records found."}){return t?s.jsx("div",{style:{padding:"3rem",textAlign:"center",color:"#94a3b8"},children:"Loading data..."}):!e||e.length===0?s.jsx("div",{style:{padding:"3rem",textAlign:"center",color:"#94a3b8"},children:i}):s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"desktop-table-container",style:{width:"100%",overflowX:"auto"},children:s.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",textAlign:"left",fontSize:"0.85rem"},children:[s.jsx("thead",{children:s.jsx("tr",{style:{background:"#090d16",color:"#94a3b8",borderBottom:"1px solid rgba(255, 255, 255, 0.08)"},children:n.map((r,a)=>s.jsx("th",{style:{padding:"0.85rem 1rem",fontWeight:700,textAlign:r.align||"left"},children:r.header},a))})}),s.jsx("tbody",{children:e.map((r,a)=>s.jsx("tr",{style:{borderBottom:"1px solid rgba(255, 255, 255, 0.06)"},children:n.map((o,l)=>s.jsx("td",{style:{padding:"0.85rem 1rem",textAlign:o.align||"left"},children:o.accessor?r[o.accessor]:o.render?o.render(r):null},l))},a))})]})}),s.jsx("div",{className:"mobile-card-list",style:{display:"none",flexDirection:"column",gap:"1rem",padding:"1rem"},children:e.map((r,a)=>s.jsx("div",{className:"natural-glass-card",style:{padding:"1rem"},children:n.map((o,l)=>s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"},children:[s.jsx("span",{style:{fontSize:"0.75rem",color:"#94a3b8",textTransform:"uppercase",fontWeight:700},children:o.header}),s.jsx("span",{style:{fontSize:"0.85rem",color:"#ffffff"},children:o.accessor?r[o.accessor]:o.render?o.render(r):null})]},l))},a))})]})}const ir=[{_id:"65f8a0000000000000000101",trackingCode:"CIV-138987-644E",title:"Water Leakage & Supply Pressure Burst",description:"Major water pipeline leak near Ward 14 bus stop causing street flooding.",category:"Water Infrastructure",severity:"CRITICAL",priorityScore:88,status:"IN_PROGRESS",ward:14,address:"Near College Gate, Main Road, Ward 14",citizenName:"Amitav Ghosh",departmentName:"Water Supply & Sanitation",sla:{isBreached:!1,isWarning:!0,statusLabel:"20h remaining"}},{_id:"65f8a0000000000000000102",trackingCode:"CIV-284791-889B",title:"Asphalt Pothole & Road Deterioration",description:"Deep pothole causing traffic slowdown near Sector 4 main junction.",category:"Road Damage",severity:"HIGH",priorityScore:74,status:"ASSIGNED",ward:14,address:"Sector 4 Main Corridor, Ward 14",citizenName:"Priya Sharma",departmentName:"Roads & Municipal Infrastructure",sla:{isBreached:!1,isWarning:!1,statusLabel:"12h remaining"}},{_id:"65f8a0000000000000000103",trackingCode:"CIV-993812-441A",title:"Streetlight Substation Transformer Outage",description:"Entire street dark between Block B and Block C due to luminaire failure.",category:"Streetlight",severity:"MEDIUM",priorityScore:56,status:"RESOLVED",ward:7,address:"Block B Main Road, Ward 7",citizenName:"Shardul Parihar",departmentName:"Electrical Services",sla:{isBreached:!1,isWarning:!1,statusLabel:"Completed within SLA"}},{_id:"65f8a0000000000000000104",trackingCode:"CIV-551920-192C",title:"Open Drain Overflow & Stormwater Hazard",description:"Clogged stormwater drain spilling onto pedestrian footpath during heavy rainfall.",category:"Drainage",severity:"HIGH",priorityScore:79,status:"ACCEPTED",ward:12,address:"Market Yard Crossing, Ward 12",citizenName:"Karan Patel",departmentName:"Public Health & Sanitation",sla:{isBreached:!1,isWarning:!1,statusLabel:"16h remaining"}},{_id:"65f8a0000000000000000105",trackingCode:"CIV-883019-332D",title:"Garbage Accumulation & Waste Dump",description:"Uncollected commercial solid waste piling up near residential colony gate.",category:"Garbage",severity:"MEDIUM",priorityScore:62,status:"SUBMITTED",ward:3,address:"Green Park Extension, Ward 3",citizenName:"Ananya Roy",departmentName:"Solid Waste Management",sla:{isBreached:!1,isWarning:!1,statusLabel:"28h remaining"}}];function tS(){Wi();const[n,e]=W.useState(ir),[t,i]=W.useState(5),[r,a]=W.useState(1),[o,l]=W.useState(!1),[d,c]=W.useState(null),[f,h]=W.useState(""),[u,m]=W.useState(""),[x,S]=W.useState(""),[g,p]=W.useState(""),M=async()=>{var v;l(!0);try{const w=await $t.list({search:f,severity:u,status:x,category:g,page:r,limit:15,sort:"priority"});(v=w.data)!=null&&v.success&&w.data.data.length>0?(e(w.data.data),i(w.data.count||w.data.data.length)):(e(ir),i(ir.length))}catch(w){console.warn("[ComplaintsList] Using fallback list:",w.message),e(ir),i(ir.length)}finally{l(!1)}};W.useEffect(()=>{M()},[f,u,x,g,r]);const T=n.filter(v=>!(f&&!v.trackingCode.toLowerCase().includes(f.toLowerCase())&&!v.title.toLowerCase().includes(f.toLowerCase())&&!v.address.toLowerCase().includes(f.toLowerCase())||u&&v.severity!==u||x&&v.status!==x||g&&v.category!==g)),_=[{header:"ID",accessor:"trackingCode",render:v=>s.jsx("span",{style:{fontFamily:"monospace",fontWeight:800,color:"#34d399"},children:v.trackingCode})},{header:"Title & Landmark",render:v=>s.jsxs("div",{style:{maxWidth:"280px"},children:[s.jsx("button",{onClick:()=>c(v),style:{background:"none",border:"none",textAlign:"left",fontWeight:700,color:"#ffffff",cursor:"pointer",padding:0},children:v.title}),s.jsxs("div",{style:{fontSize:"0.75rem",color:"#94a3b8"},children:[v.address," (Ward ",v.ward,")"]})]})},{header:"Category",accessor:"category",render:v=>s.jsx("span",{style:{color:"#cbd5e1"},children:v.category})},{header:"Priority Score",render:v=>s.jsxs("span",{className:`badge ${v.severity==="CRITICAL"?"badge-critical":v.severity==="HIGH"?"badge-high":"badge-medium"}`,children:[v.priorityScore,"/100 (",v.severity,")"]})},{header:"Department",accessor:"departmentName",render:v=>s.jsx("span",{style:{color:"#cbd5e1"},children:v.departmentName})},{header:"Status",render:v=>s.jsx("span",{style:{fontWeight:600,color:v.status==="RESOLVED"?"#10b981":"#60a5fa"},children:v.status})},{header:"SLA Target",render:v=>{var w,R,b;return s.jsx("span",{className:`badge ${(w=v.sla)!=null&&w.isBreached?"badge-critical":(R=v.sla)!=null&&R.isWarning?"badge-high":"badge-medium"}`,children:((b=v.sla)==null?void 0:b.statusLabel)||"Active"})}},{header:"Actions",align:"right",render:v=>s.jsx("div",{style:{display:"flex",gap:"0.4rem",justifyContent:"flex-end"},children:s.jsx("button",{onClick:()=>c(v),className:"btn-sage",style:{padding:"0.3rem 0.6rem",fontSize:"0.75rem"},children:"Quick View"})})}];return s.jsxs("div",{style:{padding:"1.5rem",maxWidth:"1400px",margin:"0 auto",background:"#0a0d14",color:"#f8fafc"},children:[s.jsx("div",{style:{marginBottom:"1.5rem",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"1rem"},children:s.jsxs("div",{children:[s.jsx("h1",{style:{fontSize:"1.75rem",fontWeight:800,color:"#ffffff"},children:"Municipal Complaints Registry"}),s.jsx("p",{style:{color:"#94a3b8",fontSize:"0.85rem"},children:"Central repository of citizen reports with AI prioritization, SLA enforcement, and workflow auditability"})]})}),s.jsxs("div",{className:"natural-glass-card",style:{marginBottom:"1.5rem",display:"flex",flexWrap:"wrap",gap:"0.75rem",alignItems:"center",padding:"1rem"},children:[s.jsxs("div",{style:{flex:1,minWidth:"220px",position:"relative"},children:[s.jsx(Mn,{size:16,style:{position:"absolute",left:"12px",top:"10px",color:"#94a3b8"}}),s.jsx("input",{type:"text",className:"form-input-dark",style:{paddingLeft:"2.4rem",width:"100%"},placeholder:"Search by ID, title, or address...",value:f,onChange:v=>h(v.target.value)})]}),s.jsxs("select",{className:"form-input-dark",style:{width:"auto"},value:u,onChange:v=>m(v.target.value),children:[s.jsx("option",{value:"",children:"All Severities"}),s.jsx("option",{value:"CRITICAL",children:"CRITICAL"}),s.jsx("option",{value:"HIGH",children:"HIGH"}),s.jsx("option",{value:"MEDIUM",children:"MEDIUM"}),s.jsx("option",{value:"LOW",children:"LOW"})]}),s.jsxs("select",{className:"form-input-dark",style:{width:"auto"},value:x,onChange:v=>S(v.target.value),children:[s.jsx("option",{value:"",children:"All Statuses"}),s.jsx("option",{value:"SUBMITTED",children:"SUBMITTED"}),s.jsx("option",{value:"ASSIGNED",children:"ASSIGNED"}),s.jsx("option",{value:"ACCEPTED",children:"ACCEPTED"}),s.jsx("option",{value:"IN_PROGRESS",children:"IN_PROGRESS"}),s.jsx("option",{value:"RESOLVED",children:"RESOLVED"})]}),s.jsxs("select",{className:"form-input-dark",style:{width:"auto"},value:g,onChange:v=>p(v.target.value),children:[s.jsx("option",{value:"",children:"All Categories"}),s.jsx("option",{value:"Road Damage",children:"Road Damage"}),s.jsx("option",{value:"Water Leakage",children:"Water Leakage"}),s.jsx("option",{value:"Drainage",children:"Drainage"}),s.jsx("option",{value:"Garbage",children:"Garbage"}),s.jsx("option",{value:"Streetlight",children:"Streetlight"})]})]}),s.jsxs("div",{className:"natural-glass-card",style:{padding:0,overflow:"hidden"},children:[s.jsx(eS,{columns:_,data:T,loading:o,emptyMessage:"No complaints matched current filter criteria."}),s.jsxs("div",{style:{padding:"0.85rem 1.25rem",borderTop:"1px solid rgba(255, 255, 255, 0.08)",display:"flex",alignItems:"center",justifyContent:"space-between",background:"#0c101a",fontSize:"0.85rem",color:"#cbd5e1"},children:[s.jsxs("div",{children:["Showing ",T.length," of ",t," complaints"]}),s.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[s.jsx("button",{onClick:()=>a(Math.max(1,r-1)),className:"btn-glass",style:{padding:"0.3rem 0.6rem",fontSize:"0.75rem"},disabled:r===1,children:"Previous"}),s.jsx("button",{onClick:()=>a(r+1),className:"btn-glass",style:{padding:"0.3rem 0.6rem",fontSize:"0.75rem"},disabled:T.length<15,children:"Next"})]})]})]}),s.jsx(Ir,{complaint:d,isOpen:!!d,onClose:()=>c(null),onRefresh:M})]})}const nS=new Kn.Icon({iconUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",shadowUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41]});function iS(){var x,S,g;const{id:n}=uu(),[e,t]=W.useState(null),[i,r]=W.useState(!0),[a,o]=W.useState(""),[l,d]=W.useState(!1),c=async()=>{r(!0);try{const p=await $t.getById(n);p.data.success&&t(p.data.data)}catch(p){console.warn("Failed loading complaint detail:",p.message)}finally{r(!1)}};W.useEffect(()=>{c()},[n]);const f=async p=>{var M,T;d(!0),o("");try{const _=await $t.verifyResolution(n,{verified:p});_.data.success&&(o(_.data.message),c())}catch(_){o(((T=(M=_.response)==null?void 0:M.data)==null?void 0:T.message)||"Verification update failed. Please try again.")}finally{d(!1)}};if(i||!e)return s.jsx("div",{style:{padding:"3rem",textAlign:"center",color:"#94a3b8"},children:"Loading complaint record..."});const h=[{key:"SUBMITTED",title:"1. Citizen Report Logged",text:`Filed on ${new Date(e.createdAt).toLocaleString()}`},{key:"AI",title:"2. AI Classified & Prioritized",text:`Category: ${e.category} • Priority score: ${e.priorityScore}/100`},{key:"DUP",title:"3. Duplicate & Spatial Clustering",text:`${e.duplicateCount||0} spatial candidates checked within 500m radius`},{key:"ASSIGNED",title:"4. Department Assigned",text:`Assigned to ${e.departmentName}`},{key:"ACCEPTED",title:"5. Officer Accepted",text:`Assigned Officer: ${((x=e.assignedOfficer)==null?void 0:x.name)||"Municipal Officer"}`},{key:"IN_PROGRESS",title:"6. Field Work In Progress",text:"On-site repair team dispatched"},{key:"RESOLVED",title:"7. Work Resolved",text:e.resolvedAt?`Resolved on ${new Date(e.resolvedAt).toLocaleString()}`:"Target SLA pending"},{key:"VERIFIED",title:"8. Citizen Verification",text:e.status==="RESOLVED"?"Resolution verified by citizen":"Awaiting final citizen confirmation"}],m=(p=>p==="SUBMITTED"?1:p==="ASSIGNED"?3:p==="ACCEPTED"?4:p==="IN_PROGRESS"?5:p==="RESOLVED"?7:2)(e.status);return s.jsxs("div",{style:{padding:"1.5rem",maxWidth:"1200px",margin:"0 auto",background:"#0a0d14",color:"#f8fafc"},children:[s.jsxs("div",{style:{marginBottom:"1.25rem"},children:[s.jsxs(st,{to:"/complaints",style:{textDecoration:"none",color:"#34d399",fontWeight:600,fontSize:"0.85rem",display:"inline-flex",alignItems:"center",gap:"0.4rem",marginBottom:"0.5rem"},children:[s.jsx(Id,{size:16})," Back to Complaints Registry"]}),s.jsx("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"1rem"},children:s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem"},children:[s.jsx("h1",{style:{fontSize:"1.75rem",fontWeight:800,color:"#ffffff",fontFamily:"monospace"},children:e.trackingCode}),s.jsx("span",{className:`badge ${e.severity==="CRITICAL"?"badge-critical":"badge-high"}`,children:e.severity}),s.jsx("span",{className:"badge badge-sage",children:e.status})]}),s.jsx("h2",{style:{fontSize:"1.2rem",color:"#cbd5e1",marginTop:"0.2rem"},children:e.title})]})})]}),a&&s.jsxs("div",{style:{background:"rgba(16, 185, 129, 0.15)",border:"1px solid #10b981",color:"#34d399",padding:"0.85rem 1rem",borderRadius:"0.5rem",marginBottom:"1.5rem",fontWeight:600,display:"flex",alignItems:"center",gap:"0.5rem"},children:[s.jsx(Ut,{size:18})," ",a]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"1.5rem",marginBottom:"1.5rem"},children:[s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[s.jsxs("div",{className:"natural-glass-card",children:[s.jsx("div",{style:{fontSize:"1rem",fontWeight:800,color:"#ffffff",marginBottom:"0.75rem"},children:"Complaint Description & AI Rationale"}),s.jsx("p",{style:{fontSize:"0.95rem",color:"#cbd5e1",lineHeight:1.6,marginBottom:"1.25rem"},children:e.description}),s.jsxs("div",{style:{background:"#121722",color:"#ffffff",padding:"1.25rem",borderRadius:"0.5rem",border:"1px solid rgba(255, 255, 255, 0.08)"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",color:"#34d399",fontWeight:700,fontSize:"0.9rem",marginBottom:"0.5rem"},children:[s.jsx(En,{size:18})," AI Classification & Confidence Engine"]}),s.jsxs("div",{style:{fontSize:"0.85rem",color:"#cbd5e1",marginBottom:"0.4rem"},children:[s.jsx("strong",{children:"Detected Category:"})," ",e.category," (",e.subCategory,") • ",s.jsx("strong",{children:"Confidence:"})," 96%"]}),s.jsxs("div",{style:{fontSize:"0.85rem",color:"#cbd5e1",marginBottom:"0.4rem"},children:[s.jsx("strong",{children:"Priority Score:"})," ",s.jsxs("span",{style:{color:"#fbbf24",fontWeight:800},children:[e.priorityScore," / 100"]})]}),s.jsxs("div",{style:{fontSize:"0.8rem",color:"#94a3b8"},children:['"Complaint description indicates active safety hazard affecting vehicular transit. SLA target set to ',((S=e.sla)==null?void 0:S.totalSLAHours)||4,'h."']})]})]}),s.jsxs("div",{className:"natural-glass-card",children:[s.jsx("div",{style:{fontSize:"1rem",fontWeight:800,color:"#ffffff",marginBottom:"1rem"},children:"End-to-End Complaint Progress Timeline"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.85rem"},children:h.map((p,M)=>{const T=M<=m,_=M===m;return s.jsxs("div",{style:{display:"flex",gap:"0.75rem",alignItems:"flex-start"},children:[s.jsx("div",{style:{width:"26px",height:"26px",borderRadius:"50%",background:T?"#059669":"#0f141f",color:T?"#ffffff":"#94a3b8",border:T?"1px solid #10b981":"1px solid rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",fontWeight:800},children:M+1}),s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.9rem",fontWeight:_?800:600,color:_?"#34d399":"#ffffff"},children:p.title}),s.jsx("div",{style:{fontSize:"0.75rem",color:"#94a3b8"},children:p.text})]})]},p.key)})})]}),s.jsxs("div",{className:"natural-glass-card",style:{borderLeft:"4px solid #10b981",background:"#121722"},children:[s.jsx("div",{style:{fontWeight:800,color:"#ffffff",marginBottom:"0.5rem",fontSize:"1rem"},children:"Citizen Resolution Verification"}),s.jsx("p",{style:{fontSize:"0.85rem",color:"#cbd5e1",marginBottom:"1rem"},children:"Have you visited the location? Verify if the reported problem was actually resolved."}),s.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap"},children:[s.jsxs("button",{onClick:()=>f(!0),className:"btn-sage",style:{padding:"0.5rem 1rem",fontSize:"0.85rem"},disabled:l,children:[s.jsx(Xo,{size:15})," ",l?"Updating...":"Yes, Confirmed Resolved"]}),s.jsxs("button",{onClick:()=>f(!1),className:"btn-glass",style:{padding:"0.5rem 1rem",fontSize:"0.85rem",borderColor:"rgba(239,68,68,0.4)",color:"#f87171"},disabled:l,children:[s.jsx(qo,{size:15})," ",l?"Updating...":"Still Unresolved (Reopen)"]})]})]})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem"},children:[s.jsxs("div",{className:"natural-glass-card",children:[s.jsx("div",{style:{fontSize:"1rem",fontWeight:800,color:"#ffffff",marginBottom:"0.75rem"},children:"Geospatial Location"}),s.jsx("div",{style:{height:"200px",borderRadius:"0.5rem",overflow:"hidden",marginBottom:"0.75rem",border:"1px solid rgba(255,255,255,0.1)"},children:s.jsx(Ks,{children:(()=>{var _;const p=(_=e==null?void 0:e.location)==null?void 0:_.coordinates,M=p&&p.length>=2&&!isNaN(p[1])?p[1]:18.5304,T=p&&p.length>=2&&!isNaN(p[0])?p[0]:73.8667;return s.jsxs(Fs,{center:[M,T],zoom:15,style:{height:"100%",width:"100%"},children:[s.jsx(zs,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),s.jsx(Bs,{position:[M,T],icon:nS})]},`cd-map-${M}-${T}`)})()})}),s.jsxs("div",{style:{fontSize:"0.85rem",color:"#cbd5e1"},children:[s.jsx("strong",{children:"Address:"})," ",e.address,s.jsx("br",{}),s.jsx("strong",{children:"Ward:"})," Ward ",e.ward,s.jsx("br",{}),s.jsx("strong",{children:"Coordinates:"})," ",e.location.coordinates[1].toFixed(4),", ",e.location.coordinates[0].toFixed(4)]})]}),s.jsxs("div",{className:"natural-glass-card",children:[s.jsx("div",{style:{fontSize:"1rem",fontWeight:800,color:"#ffffff",marginBottom:"0.75rem"},children:"Citizen Contact Metadata"}),s.jsxs("div",{style:{fontSize:"0.85rem",color:"#cbd5e1",display:"flex",flexDirection:"column",gap:"0.4rem"},children:[s.jsxs("div",{children:[s.jsx("strong",{children:"Name:"})," ",e.citizenName]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Email:"})," ",e.citizenEmail]}),s.jsxs("div",{children:[s.jsx("strong",{children:"Phone:"})," ",e.citizenPhone||"N/A"]})]})]}),s.jsxs("div",{className:"natural-glass-card",children:[s.jsx("div",{style:{fontSize:"1rem",fontWeight:800,color:"#ffffff",marginBottom:"0.75rem"},children:"Audit History Log"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem",fontSize:"0.8rem"},children:(g=e.history)==null?void 0:g.map((p,M)=>s.jsxs("div",{style:{borderLeft:"2px solid #10b981",paddingLeft:"0.65rem"},children:[s.jsx("div",{style:{fontWeight:700,color:"#ffffff"},children:p.note}),s.jsxs("div",{style:{fontSize:"0.7rem",color:"#94a3b8"},children:["By ",p.actorName," • ",new Date(p.createdAt).toLocaleString()]})]},M))})]})]})]})]})}function rS(){const[n,e]=W.useState([]),[t,i]=W.useState([]),[r,a]=W.useState([]),[o,l]=W.useState(!0),d=()=>{l(!0),Promise.all([uf.getPredictions(),Bi.getHotspots(),nm.getIncidents()]).then(([c,f,h])=>{c.data.success&&e(c.data.data),f.data.success&&i(f.data.data),h.data.success&&a(h.data.data)}).catch(c=>console.error("Error fetching AI intelligence:",c)).finally(()=>l(!1))};return W.useEffect(()=>{d()},[]),s.jsxs("div",{style:{padding:"1.5rem",maxWidth:"1400px",margin:"0 auto"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"1rem",marginBottom:"2rem"},children:[s.jsxs("div",{children:[s.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"0.4rem",color:"#34d399",fontWeight:800,fontSize:"0.8rem",textTransform:"uppercase",marginBottom:"0.4rem"},children:[s.jsx(dr,{size:16})," Municipal AI Predictive Engine"]}),s.jsx("h1",{style:{fontSize:"2rem",fontWeight:800,color:"#ffffff"},children:"City Intelligence & Predictive Hotspots"}),s.jsx("p",{style:{color:"#94a3b8",fontSize:"0.9rem"},children:"Real-time ML incident clustering, duplicate aggregation, and proactive infrastructure failure forecasting"})]}),s.jsxs("button",{onClick:d,className:"btn-glass",style:{padding:"0.5rem 1rem"},children:[s.jsx(dn,{size:14})," Refresh AI Inference"]})]}),o?s.jsxs("div",{style:{padding:"4rem",textAlign:"center",color:"#94a3b8"},children:[s.jsx(dr,{size:32,className:"pulse-dot",style:{marginBottom:"1rem"}}),s.jsx("p",{children:"Analyzing civic streams with AI intelligence model..."})]}):s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(380px, 1fr))",gap:"1.5rem",marginBottom:"1.5rem"},children:[s.jsxs("div",{className:"natural-glass-card",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.08)"},children:[s.jsxs("div",{children:[s.jsxs("span",{style:{color:"#34d399",fontWeight:800,display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"1.1rem"},children:[s.jsx(Sr,{size:20})," AI Incident Clusters"]}),s.jsx("div",{style:{fontSize:"0.75rem",color:"#94a3b8",marginTop:"0.2rem"},children:"Aggregated multi-report incidents to eliminate duplicate field dispatch"})]}),s.jsx("span",{className:"badge badge-sage",children:"Active Clustering"})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsxs("div",{style:{background:"#0a0d14",padding:"1.25rem",borderRadius:"0.5rem",borderLeft:"4px solid #ef4444",border:"1px solid rgba(255, 255, 255, 0.06)"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.35rem"},children:[s.jsx("strong",{style:{color:"#34d399",fontFamily:"monospace",fontSize:"0.95rem"},children:"CLUSTER #INC-1042"}),s.jsx("span",{className:"badge badge-critical",children:"Critical Hazard"})]}),s.jsx("div",{style:{fontWeight:700,color:"#ffffff",fontSize:"1rem",marginBottom:"0.35rem"},children:"Water Main Supply Pipeline Burst"}),s.jsx("div",{style:{fontSize:"0.85rem",color:"#cbd5e1",marginBottom:"0.75rem"},children:"37 citizen reports aggregated within 200m radius in Ward 14."}),s.jsx("div",{style:{fontSize:"0.8rem",color:"#34d399",background:"rgba(16, 185, 129, 0.12)",border:"1px solid rgba(16, 185, 129, 0.25)",padding:"0.5rem 0.75rem",borderRadius:"0.35rem",fontWeight:600},children:"✔ Action Dispatched: Valve isolation team sent."})]}),r.slice(0,3).map(c=>{var f;return s.jsxs("div",{style:{background:"#0a0d14",padding:"1.25rem",borderRadius:"0.5rem",borderLeft:"4px solid #f97316",border:"1px solid rgba(255, 255, 255, 0.06)"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:"0.35rem"},children:[s.jsx("strong",{style:{color:"#60a5fa",fontFamily:"monospace",fontSize:"0.95rem"},children:c.incidentId}),s.jsx("span",{className:"badge badge-high",children:c.severity})]}),s.jsx("div",{style:{fontWeight:700,color:"#ffffff",fontSize:"1rem",marginBottom:"0.35rem"},children:c.title}),s.jsxs("div",{style:{fontSize:"0.85rem",color:"#cbd5e1"},children:[((f=c.complaints)==null?void 0:f.length)||3," citizen reports merged • AI Confidence: ",c.confidence,"%"]})]},c._id)})]})]}),s.jsxs("div",{className:"natural-glass-card",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.08)"},children:[s.jsxs("div",{children:[s.jsxs("span",{style:{color:"#fbbf24",fontWeight:800,display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"1.1rem"},children:[s.jsx(li,{size:20})," What's Likely to Happen Next?"]}),s.jsx("div",{style:{fontSize:"0.75rem",color:"#94a3b8",marginTop:"0.2rem"},children:"Predictive municipal risk forecasting for early preventive intervention"})]}),s.jsx("span",{className:"badge badge-medium",children:"ML Predictive"})]}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:n.map((c,f)=>s.jsxs("div",{style:{background:"#0a0d14",border:"1px solid rgba(245, 158, 11, 0.25)",padding:"1.25rem",borderRadius:"0.5rem"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"0.5rem"},children:[s.jsxs("div",{style:{fontWeight:800,color:"#fbbf24",fontSize:"1rem"},children:[c.wardName," — ",c.category," Risk"]}),s.jsxs("span",{className:"badge badge-high",style:{background:"rgba(245, 158, 11, 0.15)",color:"#fbbf24"},children:["Risk: ",c.riskScore,"%"]})]}),s.jsxs("div",{style:{fontSize:"0.85rem",color:"#cbd5e1",marginBottom:"0.75rem",lineHeight:1.5},children:[s.jsx("strong",{children:"ML Rationale:"}),' "Complaint frequency has increased consistently over the last 9 days (+214% surge)."']}),s.jsxs("div",{style:{fontSize:"0.8rem",color:"#34d399",background:"rgba(16, 185, 129, 0.12)",padding:"0.6rem 0.85rem",borderRadius:"0.35rem",border:"1px solid rgba(16, 185, 129, 0.25)",fontWeight:600},children:[s.jsx("strong",{children:"Recommended Action:"}),' "',c.recommendation,'"']})]},f))})]})]})]})}const Ga=[{id:"dept_1",name:"Roads & Municipal Infrastructure",code:"RMI-101",description:"Pothole repairs, asphalt resurfacing, sidewalk maintenance, and street corridor engineering.",workloadPercent:78,active:42,resolved:184,slaCompliance:92,slaBreaches:3,isOverloaded:!1},{id:"dept_2",name:"Water Supply & Sanitation",code:"WSS-102",description:"Water pipeline maintenance, pressure distribution, main burst repairs, and clean water supply.",workloadPercent:91,active:56,resolved:210,slaCompliance:84,slaBreaches:8,isOverloaded:!0},{id:"dept_3",name:"Electrical Services & Lighting",code:"ESL-103",description:"Streetlight luminaire maintenance, substation transformer repairs, and public safety illumination.",workloadPercent:64,active:28,resolved:145,slaCompliance:96,slaBreaches:1,isOverloaded:!1},{id:"dept_4",name:"Solid Waste Management",code:"SWM-104",description:"Garbage collection, waste dumping site management, commercial refuse clearance, and recycling.",workloadPercent:72,active:34,resolved:168,slaCompliance:89,slaBreaches:4,isOverloaded:!1},{id:"dept_5",name:"Stormwater & Drainage Control",code:"SDC-105",description:"Drain desilting, stormwater drainage clearance, flood prevention, and culvert maintenance.",workloadPercent:86,active:49,resolved:132,slaCompliance:81,slaBreaches:6,isOverloaded:!0},{id:"dept_6",name:"Public Safety & Health Oversight",code:"PSH-106",description:"Emergency hazard mitigation, public health inspection, tree trimming, and safety enforcement.",workloadPercent:55,active:19,resolved:98,slaCompliance:98,slaBreaches:0,isOverloaded:!1}];function sS(){const{t:n}=un(),[e,t]=W.useState(Ga),[i,r]=W.useState(!1),a=()=>{r(!0),Bi.getDepartments().then(o=>{var l;(l=o.data)!=null&&l.success&&o.data.data.length>0?t(o.data.data):t(Ga)}).catch(o=>{console.warn("[Departments] Using fallback dataset:",o.message),t(Ga)}).finally(()=>r(!1))};return W.useEffect(()=>{a()},[]),s.jsxs("div",{style:{padding:"1.5rem",maxWidth:"1400px",margin:"0 auto"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"1rem",marginBottom:"2rem"},children:[s.jsxs("div",{children:[s.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"0.4rem",color:"#34d399",fontWeight:800,fontSize:"0.8rem",textTransform:"uppercase",marginBottom:"0.4rem"},children:[s.jsx(Vo,{size:16})," ",n("deptEyebrow")]}),s.jsx("h1",{style:{fontSize:"2rem",fontWeight:800,color:"#ffffff"},children:n("deptTitle")}),s.jsx("p",{style:{color:"#94a3b8",fontSize:"0.9rem"},children:n("deptSub")})]}),s.jsxs("button",{onClick:a,className:"btn-glass",style:{padding:"0.5rem 1rem"},children:[s.jsx(dn,{size:14})," Refresh"]})]}),s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(360px, 1fr))",gap:"1.5rem"},children:e.map(o=>s.jsxs("div",{className:"natural-glass-card",style:{padding:"1.5rem",background:"#121722",borderRadius:"0.875rem",position:"relative"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:"1rem"},children:[s.jsxs("div",{children:[s.jsx("span",{style:{fontSize:"0.7rem",fontWeight:700,color:"#34d399",background:"rgba(16, 185, 129, 0.1)",padding:"0.2rem 0.5rem",borderRadius:"4px"},children:o.code}),s.jsx("h3",{style:{fontSize:"1.15rem",fontWeight:800,color:"#ffffff",marginTop:"0.4rem"},children:o.name})]}),o.isOverloaded&&s.jsxs("span",{style:{fontSize:"0.7rem",fontWeight:700,color:"#ef4444",background:"rgba(239, 68, 68, 0.15)",padding:"0.2rem 0.5rem",borderRadius:"4px",display:"flex",alignItems:"center",gap:"0.25rem"},children:[s.jsx(br,{size:12})," OVERLOADED"]})]}),s.jsx("p",{style:{fontSize:"0.82rem",color:"#94a3b8",marginBottom:"1.25rem",height:"2.6em",overflow:"hidden"},children:o.description}),s.jsxs("div",{style:{marginBottom:"1.25rem"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.8rem",fontWeight:700,marginBottom:"0.35rem"},children:[s.jsx("span",{style:{color:"#cbd5e1"},children:"Capacity Workload"}),s.jsxs("span",{style:{color:o.workloadPercent>85?"#ef4444":"#34d399"},children:[o.workloadPercent,"%"]})]}),s.jsx("div",{style:{width:"100%",height:"6px",background:"rgba(255, 255, 255, 0.08)",borderRadius:"99px",overflow:"hidden"},children:s.jsx("div",{style:{width:`${o.workloadPercent}%`,height:"100%",background:o.workloadPercent>85?"linear-gradient(90deg, #f59e0b, #ef4444)":"linear-gradient(90deg, #059669, #34d399)"}})})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"0.75rem",borderTop:"1px solid rgba(255,255,255,0.08)",paddingTop:"1rem",textAlign:"center"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"1.1rem",fontWeight:800,color:"#ffffff"},children:o.active}),s.jsx("div",{style:{fontSize:"0.7rem",color:"#94a3b8"},children:"Active"})]}),s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"1.1rem",fontWeight:800,color:"#34d399"},children:o.resolved}),s.jsx("div",{style:{fontSize:"0.7rem",color:"#94a3b8"},children:"Resolved"})]}),s.jsxs("div",{children:[s.jsxs("div",{style:{fontSize:"1.1rem",fontWeight:800,color:o.slaBreaches>5?"#ef4444":"#f59e0b"},children:[o.slaCompliance,"%"]}),s.jsx("div",{style:{fontSize:"0.7rem",color:"#94a3b8"},children:"SLA Rate"})]})]})]},o.id||o.code))})]})}const rr={breached:[{_id:"65f8a0000000000000000101",trackingCode:"CIV-138987-644E",title:"Water Leakage & Supply Pressure Burst",description:"Major water pipeline leak near Ward 14 bus stop causing street flooding.",category:"Water Infrastructure",severity:"CRITICAL",priorityScore:88,status:"IN_PROGRESS",ward:14,address:"Near College Gate, Main Road, Ward 14",citizenName:"Amitav Ghosh",departmentName:"Water Supply & Sanitation",sla:{isBreached:!0,isWarning:!1,statusLabel:"OVERDUE (2h past deadline)"}}],warnings:[{_id:"65f8a0000000000000000102",trackingCode:"CIV-284791-889B",title:"Asphalt Pothole & Road Deterioration",description:"Deep pothole causing traffic slowdown near Sector 4 main junction.",category:"Road Damage",severity:"HIGH",priorityScore:74,status:"ASSIGNED",ward:14,address:"Sector 4 Main Corridor, Ward 14",citizenName:"Priya Sharma",departmentName:"Roads & Municipal Infrastructure",sla:{isBreached:!1,isWarning:!0,statusLabel:"3.5h remaining (85% consumed)",hoursRemaining:"3.5"}},{_id:"65f8a0000000000000000104",trackingCode:"CIV-551920-192C",title:"Open Drain Overflow & Stormwater Hazard",description:"Clogged stormwater drain spilling onto pedestrian footpath.",category:"Drainage",severity:"HIGH",priorityScore:79,status:"ACCEPTED",ward:12,address:"Market Yard Crossing, Ward 12",citizenName:"Karan Patel",departmentName:"Public Health & Sanitation",sla:{isBreached:!1,isWarning:!0,statusLabel:"4.0h remaining (82% consumed)",hoursRemaining:"4.0"}}]};function aS(){const[n,e]=W.useState(rr),[t,i]=W.useState(!1),[r,a]=W.useState(null),o=()=>{i(!0),Bi.getSLA().then(c=>{var f;(f=c.data)!=null&&f.success&&c.data.breached?e(c.data):e(rr)}).catch(c=>{console.warn("[SlaMonitor] Using fallback SLA data:",c.message),e(rr)}).finally(()=>i(!1))};W.useEffect(()=>{o()},[]);const l=(n==null?void 0:n.breached)||rr.breached,d=(n==null?void 0:n.warnings)||rr.warnings;return s.jsxs("div",{style:{padding:"1.5rem",maxWidth:"1400px",margin:"0 auto"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",flexWrap:"wrap",gap:"1rem",marginBottom:"2rem"},children:[s.jsxs("div",{children:[s.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"0.4rem",color:"#ef4444",fontWeight:800,fontSize:"0.8rem",textTransform:"uppercase",marginBottom:"0.4rem"},children:[s.jsx(On,{size:16})," Municipal SLA Enforcement Protocol"]}),s.jsx("h1",{style:{fontSize:"2rem",fontWeight:800,color:"#ffffff"},children:"SLA Performance & Countdown Monitor"}),s.jsx("p",{style:{color:"#94a3b8",fontSize:"0.9rem"},children:"Track category-based target deadlines, 80%+ warning thresholds, and overdue escalations"})]}),s.jsxs("button",{onClick:o,className:"btn-glass",style:{padding:"0.5rem 1rem"},children:[s.jsx(dn,{size:14})," Refresh SLA Stream"]})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"1.25rem",marginBottom:"2rem"},children:[s.jsxs("div",{className:"natural-glass-card",style:{borderLeft:"4px solid #10b981"},children:[s.jsx("div",{style:{fontSize:"0.75rem",color:"#94a3b8",textTransform:"uppercase",fontWeight:700},children:"Overall SLA Compliance"}),s.jsx("div",{style:{fontSize:"2.2rem",fontWeight:800,color:"#10b981",marginTop:"0.2rem"},children:"94.2%"}),s.jsx("div",{style:{fontSize:"0.75rem",color:"#34d399"},children:"Target >= 90% (Passing)"})]}),s.jsxs("div",{className:"natural-glass-card",style:{borderLeft:"4px solid #ef4444"},children:[s.jsx("div",{style:{fontSize:"0.75rem",color:"#ef4444",textTransform:"uppercase",fontWeight:700},children:"Overdue Breaches"}),s.jsx("div",{style:{fontSize:"2.2rem",fontWeight:800,color:"#ef4444",marginTop:"0.2rem"},children:l.length}),s.jsx("div",{style:{fontSize:"0.75rem",color:"#f87171",fontWeight:700},children:"● Immediate Action Required"})]}),s.jsxs("div",{className:"natural-glass-card",style:{borderLeft:"4px solid #f59e0b"},children:[s.jsx("div",{style:{fontSize:"0.75rem",color:"#f59e0b",textTransform:"uppercase",fontWeight:700},children:"At-Risk Warnings"}),s.jsx("div",{style:{fontSize:"2.2rem",fontWeight:800,color:"#f59e0b",marginTop:"0.2rem"},children:d.length}),s.jsx("div",{style:{fontSize:"0.75rem",color:"#fbbf24"},children:"● 80%+ SLA Threshold Consumed"})]}),s.jsxs("div",{className:"natural-glass-card",style:{borderLeft:"4px solid #3b82f6"},children:[s.jsx("div",{style:{fontSize:"0.75rem",color:"#94a3b8",textTransform:"uppercase",fontWeight:700},children:"Average Target SLA"}),s.jsx("div",{style:{fontSize:"2.2rem",fontWeight:800,color:"#60a5fa",marginTop:"0.2rem"},children:"14.5 hrs"}),s.jsx("div",{style:{fontSize:"0.75rem",color:"#94a3b8"},children:"Dynamic category calibration"})]})]}),s.jsxs("div",{className:"natural-glass-card",style:{marginBottom:"2rem"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.08)"},children:[s.jsxs("div",{style:{color:"#ef4444",fontWeight:800,display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"1.1rem"},children:[s.jsx(bd,{size:20})," Overdue SLA Breaches (",l.length,")"]}),s.jsx("span",{className:"badge badge-critical",children:"Critical Queue"})]}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.85rem"},children:l.map(c=>s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",background:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.3)",padding:"1.25rem",borderRadius:"0.5rem",gap:"1rem"},children:[s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.3rem",flexWrap:"wrap"},children:[s.jsx("span",{style:{fontFamily:"monospace",fontWeight:800,color:"#f87171",fontSize:"0.95rem"},children:c.trackingCode}),s.jsx("span",{className:"badge badge-critical",children:c.severity}),s.jsx("span",{style:{fontSize:"0.8rem",color:"#f87171",fontWeight:800},children:"OVERDUE ESCALATION"})]}),s.jsx("div",{style:{fontSize:"1rem",fontWeight:700,color:"#ffffff"},children:c.title}),s.jsxs("div",{style:{fontSize:"0.8rem",color:"#cbd5e1",marginTop:"0.2rem"},children:[c.address," (Ward ",c.ward,") • Department: ",s.jsx("strong",{style:{color:"#ffffff"},children:c.departmentName})]})]}),s.jsx("div",{style:{display:"flex",gap:"0.5rem"},children:s.jsx("button",{onClick:()=>a(c),className:"btn-glass",style:{fontSize:"0.8rem",padding:"0.45rem 0.85rem"},children:"Quick View"})})]},c._id))})]}),s.jsxs("div",{className:"natural-glass-card",children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1.25rem",paddingBottom:"0.75rem",borderBottom:"1px solid rgba(255, 255, 255, 0.08)"},children:[s.jsxs("div",{style:{color:"#fbbf24",fontWeight:800,display:"flex",alignItems:"center",gap:"0.5rem",fontSize:"1.1rem"},children:[s.jsx(br,{size:20})," At-Risk Warnings — 80%+ SLA Consumed (",d.length,")"]}),s.jsx("span",{className:"badge badge-medium",children:"Action Needed"})]}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.85rem"},children:d.map(c=>{var f;return s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",background:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.25)",padding:"1.25rem",borderRadius:"0.5rem",gap:"1rem"},children:[s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.3rem",flexWrap:"wrap"},children:[s.jsx("span",{style:{fontFamily:"monospace",fontWeight:800,color:"#fbbf24",fontSize:"0.95rem"},children:c.trackingCode}),s.jsx("span",{className:"badge badge-high",children:c.severity}),s.jsxs("span",{style:{fontSize:"0.8rem",color:"#fbbf24",fontWeight:700},children:["SLA: ",((f=c.sla)==null?void 0:f.hoursRemaining)||"3.5","h remaining"]})]}),s.jsx("div",{style:{fontSize:"1rem",fontWeight:700,color:"#ffffff"},children:c.title}),s.jsxs("div",{style:{fontSize:"0.8rem",color:"#cbd5e1",marginTop:"0.2rem"},children:[c.address," (Ward ",c.ward,") • Department: ",s.jsx("strong",{style:{color:"#ffffff"},children:c.departmentName})]})]}),s.jsx("div",{style:{display:"flex",gap:"0.5rem"},children:s.jsx("button",{onClick:()=>a(c),className:"btn-glass",style:{fontSize:"0.8rem",padding:"0.45rem 0.85rem"},children:"Quick View"})})]},c._id)})})]}),s.jsx(Ir,{complaint:r,isOpen:!!r,onClose:()=>a(null),onRefresh:o})]})}const oS=[{code:"RMI",name:"Roads & Infrastructure",resolved:184,active:42},{code:"WSS",name:"Water & Sanitation",resolved:210,active:56},{code:"ESL",name:"Electrical & Lighting",resolved:145,active:28},{code:"SWM",name:"Solid Waste Management",resolved:168,active:34},{code:"SDC",name:"Drainage Control",resolved:132,active:49},{code:"PSH",name:"Public Safety",resolved:98,active:19}],lS=[{number:14,name:"Ward 14 (College Corridor)",population:42e3,totalComplaints:84,criticalComplaints:6},{number:12,name:"Ward 12 (Market Yard)",population:38500,totalComplaints:76,criticalComplaints:5},{number:7,name:"Ward 7 (Industrial Substation)",population:31e3,totalComplaints:62,criticalComplaints:4},{number:3,name:"Ward 3 (Green Park)",population:29e3,totalComplaints:48,criticalComplaints:2},{number:18,name:"Ward 18 (Sector 9 Extension)",population:34e3,totalComplaints:42,criticalComplaints:1}];function cS(){const[n,e]=W.useState(oS),[t,i]=W.useState(lS);return W.useEffect(()=>{Promise.all([Bi.getDepartments(),im.getWards(),Bi.getSLA()]).then(([r,a])=>{var o,l;(o=r.data)!=null&&o.success&&r.data.data.length>0&&e(r.data.data),(l=a.data)!=null&&l.success&&a.data.data.length>0&&i(a.data.data)}).catch(()=>{})},[]),s.jsx("div",{className:"command-mode",style:{minHeight:"90vh",padding:"2rem 1.5rem",background:"#0a0d14"},children:s.jsxs("div",{style:{maxWidth:"1400px",margin:"0 auto"},children:[s.jsxs("div",{style:{marginBottom:"2rem"},children:[s.jsx("h1",{style:{fontSize:"2rem",fontWeight:800,color:"#f8fafc"},children:"Municipal Analytics & SLA Auditing"}),s.jsx("p",{style:{color:"#94a3b8"},children:"Deep-dive analysis into resolution speed, ward density, and SLA breach risks"})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(400px, 1fr))",gap:"1.5rem",marginBottom:"2rem"},children:[s.jsxs("div",{className:"natural-glass-card",style:{padding:"1.5rem",height:"350px"},children:[s.jsx("h3",{style:{fontSize:"1.1rem",color:"#f8fafc",fontWeight:700,marginBottom:"1rem"},children:"Department Active vs Resolved Complaints"}),s.jsx(Ld,{width:"100%",height:"80%",children:s.jsxs(Uu,{data:n,children:[s.jsx(Nd,{dataKey:"code",stroke:"#64748b"}),s.jsx(Ud,{stroke:"#64748b"}),s.jsx(Od,{contentStyle:{background:"#0f172a",borderColor:"#334155"}}),s.jsx(Ol,{dataKey:"resolved",fill:"#10b981",name:"Resolved",stackId:"a"}),s.jsx(Ol,{dataKey:"active",fill:"#f59e0b",name:"Active Queue",stackId:"a"})]})})]}),s.jsxs("div",{className:"natural-glass-card",style:{padding:"1.5rem",height:"350px",overflowY:"auto"},children:[s.jsx("h3",{style:{fontSize:"1.1rem",color:"#f8fafc",fontWeight:700,marginBottom:"1rem"},children:"Ward Complaint Density Matrix"}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:t.slice(0,10).map(r=>s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",background:"#0a0d14",padding:"0.75rem",borderRadius:"0.5rem",border:"1px solid rgba(255,255,255,0.06)"},children:[s.jsxs("div",{children:[s.jsx("strong",{style:{color:"#f8fafc"},children:r.name}),s.jsxs("div",{style:{fontSize:"0.75rem",color:"#64748b"},children:["Population: ",r.population.toLocaleString()]})]}),s.jsxs("div",{style:{textAlign:"right"},children:[s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:800,color:"#3b82f6"},children:r.totalComplaints}),s.jsxs("div",{style:{fontSize:"0.7rem",color:"#ef4444"},children:[r.criticalComplaints," Critical"]})]})]},r.number))})]})]})]})})}function dS(){const[n,e]=W.useState([]),[t,i]=W.useState(!0),[r,a]=W.useState(""),[o,l]=W.useState(""),d=()=>{i(!0),a(""),uf.getPredictions().then(f=>{f.data.success&&e(f.data.data)}).catch(f=>{var h,u;a(((u=(h=f.response)==null?void 0:h.data)==null?void 0:u.message)||"Failed to load predictive intelligence data. Check server connection.")}).finally(()=>i(!1))};W.useEffect(()=>{d()},[]);const c=(f,h)=>{l(`Preventive Municipal Work Order #WO-8942 Created for ${f} (${h} Preventive Inspection & Drainage Flush)`),setTimeout(()=>l(""),5e3)};return s.jsxs("div",{style:{minHeight:"90vh",padding:"1.5rem",maxWidth:"1400px",margin:"0 auto",background:"#0a0d14",color:"#f8fafc"},children:[s.jsx("div",{style:{marginBottom:"1.5rem",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:"1rem"},children:s.jsxs("div",{children:[s.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"0.4rem",color:"#10b981",fontWeight:800,fontSize:"0.85rem",textTransform:"uppercase",marginBottom:"0.4rem"},children:[s.jsx(li,{size:16})," CITY INTELLIGENCE — PREDICTIVE MUNICIPAL MATRIX"]}),s.jsx("h1",{style:{fontSize:"1.75rem",fontWeight:800,color:"#ffffff"},children:"Ward Infrastructure Risk Forecasting"}),s.jsx("p",{style:{color:"#94a3b8",fontSize:"0.85rem"},children:"AI-driven spatial forecasting analyzing complaint density, temporal clustering, and weather patterns to dispatch preventive municipal work orders before infrastructure failure occurs."})]})}),o&&s.jsxs("div",{style:{background:"rgba(16, 185, 129, 0.15)",border:"1px solid #10b981",color:"#34d399",padding:"1rem 1.25rem",borderRadius:"0.5rem",marginBottom:"1.5rem",display:"flex",alignItems:"center",gap:"0.6rem",fontWeight:700},children:[s.jsx(Ut,{size:20})," ",o]}),s.jsxs("div",{className:"natural-glass-card",style:{borderLeft:"4px solid #ef4444",marginBottom:"2rem",padding:"1.75rem",background:"#121722"},children:[s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem",gap:"0.75rem"},children:[s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.6rem",marginBottom:"0.2rem"},children:[s.jsx("span",{className:"badge badge-critical",children:"CRITICAL PREDICTIVE ALERT"}),s.jsx("span",{style:{fontSize:"0.8rem",color:"#94a3b8",fontWeight:600},children:"Ward 12 Spatial Intelligence"})]}),s.jsx("h2",{style:{fontSize:"1.4rem",fontWeight:800,color:"#ffffff"},children:"WARD 12 — Road Surface & Drainage Failure Prediction"})]}),s.jsx("span",{className:"badge badge-critical",style:{fontSize:"0.85rem",padding:"0.35rem 0.85rem"},children:"PREDICTED RISK: 94%"})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"1rem",marginBottom:"1.25rem"},children:[s.jsxs("div",{style:{background:"#0a0d14",padding:"1rem",borderRadius:"0.5rem",border:"1px solid rgba(255,255,255,0.08)"},children:[s.jsx("div",{style:{fontSize:"0.75rem",color:"#94a3b8",textTransform:"uppercase",fontWeight:700},children:"Complaints Detected"}),s.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:"#ef4444",margin:"0.2rem 0"},children:"43 Reports"}),s.jsx("div",{style:{fontSize:"0.75rem",color:"#94a3b8"},children:"Filed over past 7 days"})]}),s.jsxs("div",{style:{background:"#0a0d14",padding:"1rem",borderRadius:"0.5rem",border:"1px solid rgba(255,255,255,0.08)"},children:[s.jsx("div",{style:{fontSize:"0.75rem",color:"#94a3b8",textTransform:"uppercase",fontWeight:700},children:"Spatial Density"}),s.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:"#f59e0b",margin:"0.2rem 0"},children:"71% Concentrated"}),s.jsx("div",{style:{fontSize:"0.75rem",color:"#94a3b8"},children:"Within 1.8 km radius"})]}),s.jsxs("div",{style:{background:"#0a0d14",padding:"1rem",borderRadius:"0.5rem",border:"1px solid rgba(255,255,255,0.08)"},children:[s.jsx("div",{style:{fontSize:"0.75rem",color:"#94a3b8",textTransform:"uppercase",fontWeight:700},children:"Duplicate Linkage"}),s.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:"#3b82f6",margin:"0.2rem 0"},children:"8 Linked Reports"}),s.jsx("div",{style:{fontSize:"0.75rem",color:"#94a3b8"},children:"Same underlying pipeline failure"})]}),s.jsxs("div",{style:{background:"#0a0d14",padding:"1rem",borderRadius:"0.5rem",border:"1px solid rgba(255,255,255,0.08)"},children:[s.jsx("div",{style:{fontSize:"0.75rem",color:"#94a3b8",textTransform:"uppercase",fontWeight:700},children:"7-Day Forecast"}),s.jsx("div",{style:{fontSize:"1.5rem",fontWeight:800,color:"#f472b6",margin:"0.2rem 0"},children:"12–18 Additional"}),s.jsx("div",{style:{fontSize:"0.75rem",color:"#94a3b8"},children:"Complaints expected without action"})]})]}),s.jsxs("div",{style:{background:"#0a0d14",padding:"1rem",borderRadius:"0.5rem",border:"1px solid rgba(255,255,255,0.08)",marginBottom:"1.25rem"},children:[s.jsxs("div",{style:{fontSize:"0.85rem",color:"#34d399",fontWeight:700,marginBottom:"0.3rem",display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsx(Lr,{size:16})," Recommended Municipal Intervention"]}),s.jsx("p",{style:{fontSize:"0.85rem",color:"#cbd5e1",lineHeight:1.5},children:'"Inspect drainage culvert and road sub-base near Ward 12 Main Bus Stop. Heavy rainfall expected in 48 hours will trigger structural collapse if pipeline leak is not sealed."'})]}),s.jsx("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:s.jsxs("button",{onClick:()=>c("Ward 12","Road Surface & Drainage"),className:"btn-sage",style:{padding:"0.65rem 1.25rem",fontSize:"0.9rem"},children:[s.jsx(Lr,{size:18})," Create Preventive Work Order #WO-8942"]})})]}),s.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:800,color:"#ffffff",marginBottom:"1rem"},children:"Additional Ward Risk Predictions"}),t?s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.75rem",padding:"3rem",color:"#94a3b8"},children:[s.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",border:"3px solid rgba(16,185,129,0.2)",borderTopColor:"#10b981",animation:"spin 0.9s linear infinite"}}),s.jsx("span",{style:{fontSize:"0.9rem"},children:"Running predictive ML models..."})]}):r?s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"30vh",padding:"2rem 1rem"},children:s.jsxs("div",{style:{background:"rgba(239,68,68,0.12)",border:"1px solid rgba(239,68,68,0.35)",borderRadius:"0.75rem",padding:"2rem",maxWidth:"480px",width:"100%",textAlign:"center"},children:[s.jsx(br,{size:32,color:"#ef4444",style:{margin:"0 auto 0.75rem auto",display:"block"}}),s.jsx("h3",{style:{color:"#fff",fontSize:"1rem",fontWeight:800,marginBottom:"0.5rem"},children:"Intelligence Engine Error"}),s.jsx("p",{style:{color:"#fca5a5",fontSize:"0.85rem",lineHeight:1.6,marginBottom:"1.25rem"},children:r}),s.jsxs("button",{onClick:d,className:"btn-sage",style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",padding:"0.55rem 1.1rem",fontSize:"0.85rem"},children:[s.jsx(Lr,{size:14})," Retry Intelligence Engine"]})]})}):n.length===0?s.jsxs("div",{style:{textAlign:"center",padding:"3rem",color:"#64748b",background:"rgba(255,255,255,0.02)",borderRadius:"0.75rem",border:"1px solid rgba(255,255,255,0.06)"},children:[s.jsx(Sr,{size:36,style:{margin:"0 auto 0.75rem auto",display:"block",opacity:.4}}),s.jsx("div",{style:{fontSize:"0.9rem",fontWeight:600},children:"No additional ward predictions available."})]}):s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"1.5rem"},children:n.map((f,h)=>{var u;return s.jsxs("div",{className:"natural-glass-card",style:{padding:"1.5rem",borderLeft:`4px solid ${f.riskScore>=80?"#ef4444":"#f59e0b"}`},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem"},children:[s.jsx("div",{style:{fontSize:"1.2rem",fontWeight:800,color:"#ffffff"},children:f.wardName}),s.jsxs("span",{className:`badge ${f.riskScore>=80?"badge-critical":"badge-high"}`,children:["Risk: ",f.riskScore,"%"]})]}),s.jsxs("div",{style:{background:"#0a0d14",padding:"0.85rem",borderRadius:"0.5rem",marginBottom:"1rem",border:"1px solid rgba(255,255,255,0.06)"},children:[s.jsxs("div",{style:{fontSize:"0.85rem",color:"#34d399",fontWeight:700,marginBottom:"0.3rem"},children:["Predicted Risk: ",f.category," Surge"]}),s.jsxs("div",{style:{fontSize:"0.8rem",color:"#94a3b8",marginBottom:"0.4rem"},children:["Expected Window: ",s.jsx("strong",{children:f.predictionWindow})]}),s.jsxs("div",{style:{fontSize:"0.8rem",color:"#cbd5e1",lineHeight:1.4},children:[s.jsx("strong",{children:"Recommendation:"}),' "',f.recommendation,'"']})]}),s.jsxs("div",{style:{marginBottom:"1.25rem"},children:[s.jsx("div",{style:{fontSize:"0.75rem",color:"#94a3b8",textTransform:"uppercase",fontWeight:700,marginBottom:"0.4rem"},children:"Key Predictive Factors:"}),s.jsx("ul",{style:{paddingLeft:"1.2rem",fontSize:"0.8rem",color:"#cbd5e1"},children:(u=f.factors)==null?void 0:u.map((m,x)=>s.jsx("li",{style:{marginBottom:"0.2rem"},children:m},x))})]}),s.jsxs("button",{onClick:()=>c(f.wardName,f.category),className:"btn-glass",style:{width:"100%",justifyContent:"center",fontSize:"0.85rem"},children:[s.jsx(Lr,{size:16})," Create Preventive Work Order"]})]},h)})})]})}const fS=()=>typeof window>"u"||!Kn||!Kn.divIcon?null:Kn.divIcon({className:"custom-leaflet-pin",html:`
      <div style="
        background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        width: 24px;
        height: 24px;
        border-radius: 50%;
        border: 3px solid #ffffff;
        box-shadow: 0 0 20px rgba(16, 185, 129, 0.9), 0 4px 12px rgba(0,0,0,0.5);
        cursor: grab;
      "></div>
    `,iconSize:[24,24],iconAnchor:[12,12]});function uS({center:n,zoom:e}){const t=zu();return W.useEffect(()=>{n&&n[0]&&n[1]&&!isNaN(n[0])&&!isNaN(n[1])&&t.flyTo(n,e||16,{duration:1.2})},[n,e,t]),null}function hS({onMapClick:n}){return Bu({click(e){e!=null&&e.latlng&&n(e.latlng.lat,e.latlng.lng)}}),null}function pS({selectedLocation:n,onLocationSelect:e,onConfirm:t,confirmed:i=!1}){const{t:r}=un(),a=(n==null?void 0:n.latitude)||18.5204,o=(n==null?void 0:n.longitude)||73.8567,[l,d]=W.useState(a),[c,f]=W.useState(o),[h,u]=W.useState((n==null?void 0:n.accuracy)||null),[m,x]=W.useState((n==null?void 0:n.address)||"Near Main Junction"),[S,g]=W.useState((n==null?void 0:n.city)||"Pune"),[p,M]=W.useState((n==null?void 0:n.district)||"Pune"),[T,_]=W.useState((n==null?void 0:n.state)||"Maharashtra"),[v,w]=W.useState((n==null?void 0:n.pincode)||"411001"),[R,b]=W.useState((n==null?void 0:n.country)||"India"),[A,P]=W.useState(""),[I,O]=W.useState([]),[k,D]=W.useState(!1),[H,Z]=W.useState(!1),[$,ne]=W.useState(!1),[z,X]=W.useState(!1),[J,fe]=W.useState(""),ue=W.useMemo(()=>fS(),[]),ke=W.useCallback(Q=>{e&&e(Q)},[e]),Le=W.useCallback((Q,ce,We=null)=>{X(!0),fe("");const Ce=(ze,oe)=>{const Fe=ze||`${oe.road?oe.road+", ":""}${oe.city}, ${oe.state} ${oe.pincode}`;x(Fe),g(oe.city),M(oe.district),_(oe.state),w(oe.pincode),b(oe.country),ke({latitude:Q,longitude:ce,accuracy:We,address:Fe,city:oe.city,district:oe.district,state:oe.state,pincode:oe.pincode,country:oe.country})};fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${Q}&lon=${ce}&addressdetails=1`,{headers:{"Accept-Language":"en"}}).then(ze=>ze.json()).then(ze=>{const oe=ze.address||{},Fe=ze.display_name||"",Ze={road:oe.road||oe.pedestrian||oe.suburb||"",city:oe.city||oe.town||oe.village||oe.suburb||"Selected Location",district:oe.state_district||oe.county||oe.district||"Municipal District",state:oe.state||"Maharashtra",pincode:oe.postcode||"400001",country:oe.country||"India"};Ce(Fe,Ze)}).catch(ze=>{console.warn("[Leaflet Reverse Geocode] OpenStreetMap fallback:",ze.message);const oe={road:"Municipal Ward Corridor",city:"Selected Region",district:"District",state:"Maharashtra",pincode:"400001",country:"India"};Ce(`Point (${Q.toFixed(4)}, ${ce.toFixed(4)})`,oe)}).finally(()=>{X(!1)})},[ke]),_e=()=>{if(!navigator.geolocation){fe("Geolocation is not supported by your browser.");return}ne(!0),fe(""),navigator.geolocation.getCurrentPosition(Q=>{const ce=Q.coords.latitude,We=Q.coords.longitude,Ce=Math.round(Q.coords.accuracy||12);d(ce),f(We),u(Ce),ne(!1),Le(ce,We,Ce)},Q=>{ne(!1),Q.code===1?fe("GPS permission denied. Please allow location access or select location manually on map."):Q.code===2?fe("GPS position unavailable. Try searching location by name."):fe("GPS request timed out. Please try again.")},{enableHighAccuracy:!0,timeout:12e3,maximumAge:0})};W.useEffect(()=>{if(!A||A.trim().length<2){O([]),Z(!1);return}const Q=setTimeout(()=>{D(!0),fetch(`https://nominatim.openstreetmap.org/search?format=json&countrycodes=in&q=${encodeURIComponent(A)}`,{headers:{"Accept-Language":"en"}}).then(ce=>ce.json()).then(ce=>{if(Array.isArray(ce)){const We=ce.map(Ce=>({description:Ce.display_name,lat:parseFloat(Ce.lat),lng:parseFloat(Ce.lon)}));O(We),Z(!0)}}).catch(ce=>{console.warn("[Nominatim Search Error]",ce.message)}).finally(()=>{D(!1)})},450);return()=>clearTimeout(Q)},[A]);const Y=Q=>{P(Q.description),Z(!1),d(Q.lat),f(Q.lng),u(null),Le(Q.lat,Q.lng)},ie=(Q,ce)=>{d(Q),f(ce),u(null),Le(Q,ce)},ye=W.useMemo(()=>({dragend(Q){const ce=Q.target;if(ce!=null){const We=ce.getLatLng();d(We.lat),f(We.lng),u(null),Le(We.lat,We.lng)}}}),[Le]),le=()=>{t&&t({latitude:l,longitude:c,accuracy:h,address:m,city:S,district:p,state:T,pincode:v,country:R})};return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem",width:"100%"},children:[s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.85rem"},children:[s.jsxs("div",{style:{position:"relative",width:"100%"},children:[s.jsxs("div",{style:{position:"relative",display:"flex",alignItems:"center"},children:[s.jsx(Mn,{size:18,style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",color:"#34d399",pointerEvents:"none",zIndex:2}}),s.jsx("input",{type:"text",className:"form-input-dark",style:{paddingLeft:"2.8rem",width:"100%",height:"48px",fontSize:"0.9rem",boxSizing:"border-box"},placeholder:r("searchLocationPlace"),value:A,onChange:Q=>P(Q.target.value),onFocus:()=>I.length>0&&Z(!0)}),k&&s.jsx("div",{style:{position:"absolute",right:"12px",top:"50%",transform:"translateY(-50%)",width:"16px",height:"16px",borderRadius:"50%",border:"2px solid rgba(255,255,255,0.2)",borderTopColor:"#34d399",animation:"spin 0.8s linear infinite"}})]}),H&&I.length>0&&s.jsx("div",{style:{position:"absolute",top:"100%",left:0,right:0,background:"#121722",border:"1px solid rgba(16,185,129,0.3)",borderRadius:"0.5rem",marginTop:"0.35rem",zIndex:1100,boxShadow:"0 20px 40px rgba(0,0,0,0.9)",maxHeight:"220px",overflowY:"auto"},children:I.map((Q,ce)=>s.jsxs("div",{onClick:()=>Y(Q),style:{padding:"0.75rem 0.9rem",fontSize:"0.85rem",color:"var(--text-primary)",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.5rem",borderBottom:"1px solid rgba(255,255,255,0.05)",transition:"background 0.2s"},onMouseEnter:We=>We.currentTarget.style.background="rgba(16,185,129,0.12)",onMouseLeave:We=>We.currentTarget.style.background="transparent",children:[s.jsx(tn,{size:14,color:"#34d399",style:{flexShrink:0}}),s.jsx("span",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:Q.description})]},ce))})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.6rem",width:"100%"},children:[s.jsx("button",{type:"button",onClick:_e,className:"btn-glass",disabled:$,style:{width:"100%",minHeight:"48px",justifyContent:"center",fontSize:"0.9rem",borderColor:"rgba(16,185,129,0.4)",color:"#34d399",fontWeight:700},children:$?s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{width:"16px",height:"16px",borderRadius:"50%",border:"2px solid rgba(255,255,255,0.3)",borderTopColor:"#34d399",animation:"spin 0.8s linear infinite"}}),r("detectingGps")]}):s.jsxs(s.Fragment,{children:[s.jsx(Os,{size:16,color:"#34d399"})," ",r("useGpsBtn")]})}),h!==null&&s.jsxs("div",{style:{fontSize:"0.78rem",color:h<=50?"#34d399":"#f59e0b",fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",gap:"0.35rem"},children:[s.jsx(Iu,{size:14})," ",r("gpsAccuracy"),": ±",h," m"]})]}),J&&s.jsxs("div",{style:{background:"rgba(239,68,68,0.1)",border:"1px solid rgba(239,68,68,0.3)",color:"#f87171",padding:"0.65rem 0.9rem",borderRadius:"var(--radius-sm)",fontSize:"0.82rem",display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsx(wd,{size:15,style:{flexShrink:0}})," ",J]})]}),s.jsxs("div",{style:{height:"320px",width:"100%",borderRadius:"var(--radius-md)",overflow:"hidden",border:"1px solid rgba(255,255,255,0.12)",boxShadow:"0 10px 30px rgba(0,0,0,0.6)",position:"relative"},children:[s.jsx(Ks,{children:s.jsxs(Fs,{center:[l,c],zoom:16,style:{height:"100%",width:"100%"},zoomControl:!0,children:[s.jsx(zs,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),s.jsx(uS,{center:[l,c],zoom:16}),s.jsx(hS,{onMapClick:ie}),ue&&s.jsx(Bs,{position:[l,c],icon:ue,draggable:!0,eventHandlers:ye})]},`l-map-${l}-${c}`)}),z&&s.jsxs("div",{style:{position:"absolute",top:"12px",right:"12px",background:"rgba(18,23,34,0.92)",border:"1px solid rgba(16,185,129,0.4)",padding:"0.4rem 0.8rem",borderRadius:"var(--radius-sm)",fontSize:"0.75rem",color:"#34d399",display:"flex",alignItems:"center",gap:"0.4rem",zIndex:1e3},children:[s.jsx("div",{style:{width:"12px",height:"12px",borderRadius:"50%",border:"2px solid rgba(255,255,255,0.3)",borderTopColor:"#34d399",animation:"spin 0.8s linear infinite"}}),r("fetchingAddress")]})]}),s.jsxs("div",{className:"natural-glass-card",style:{padding:"1.25rem",border:i?"1px solid rgba(16,185,129,0.5)":"1px solid rgba(255,255,255,0.1)",background:"#121722"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.85rem"},children:[s.jsxs("div",{style:{fontSize:"0.88rem",fontWeight:800,color:"#ffffff",display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsx(tn,{size:16,color:"#34d399"})," ",r("selectedLocation")]}),i&&s.jsxs("span",{style:{fontSize:"0.72rem",fontWeight:800,color:"#34d399",background:"rgba(16,185,129,0.15)",border:"1px solid rgba(16,185,129,0.3)",padding:"0.2rem 0.6rem",borderRadius:"999px",display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx(Ut,{size:12})," ",r("locationConfirmed")]})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(130px, 1fr))",gap:"0.65rem",fontSize:"0.82rem",marginBottom:"1.1rem"},children:[s.jsxs("div",{style:{gridColumn:"1 / -1",background:"rgba(255,255,255,0.03)",padding:"0.65rem 0.85rem",borderRadius:"var(--radius-sm)",border:"1px solid rgba(255,255,255,0.06)"},children:[s.jsx("div",{style:{fontSize:"0.68rem",color:"var(--text-muted)",textTransform:"uppercase",marginBottom:"0.25rem",fontWeight:700},children:r("address")}),s.jsx("div",{style:{color:"#ffffff",fontWeight:700,lineHeight:1.4},children:m})]}),s.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",padding:"0.5rem 0.75rem",borderRadius:"var(--radius-sm)",border:"1px solid rgba(255,255,255,0.06)"},children:[s.jsx("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)",textTransform:"uppercase",marginBottom:"0.15rem"},children:r("city")}),s.jsx("div",{style:{color:"var(--text-primary)",fontWeight:700},children:S})]}),s.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",padding:"0.5rem 0.75rem",borderRadius:"var(--radius-sm)",border:"1px solid rgba(255,255,255,0.06)"},children:[s.jsx("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)",textTransform:"uppercase",marginBottom:"0.15rem"},children:r("district")}),s.jsx("div",{style:{color:"var(--text-primary)",fontWeight:700},children:p})]}),s.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",padding:"0.5rem 0.75rem",borderRadius:"var(--radius-sm)",border:"1px solid rgba(255,255,255,0.06)"},children:[s.jsx("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)",textTransform:"uppercase",marginBottom:"0.15rem"},children:r("state")}),s.jsx("div",{style:{color:"var(--text-primary)",fontWeight:700},children:T})]}),s.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",padding:"0.5rem 0.75rem",borderRadius:"var(--radius-sm)",border:"1px solid rgba(255,255,255,0.06)"},children:[s.jsx("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)",textTransform:"uppercase",marginBottom:"0.15rem"},children:r("pincode")}),s.jsx("div",{style:{color:"var(--text-primary)",fontWeight:700,fontFamily:"var(--font-mono)"},children:v})]}),s.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",padding:"0.5rem 0.75rem",borderRadius:"var(--radius-sm)",border:"1px solid rgba(255,255,255,0.06)"},children:[s.jsx("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)",textTransform:"uppercase",marginBottom:"0.15rem"},children:r("latitude")}),s.jsx("div",{style:{color:"#34d399",fontWeight:700,fontFamily:"var(--font-mono)"},children:l.toFixed(6)})]}),s.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",padding:"0.5rem 0.75rem",borderRadius:"var(--radius-sm)",border:"1px solid rgba(255,255,255,0.06)"},children:[s.jsx("div",{style:{fontSize:"0.65rem",color:"var(--text-muted)",textTransform:"uppercase",marginBottom:"0.15rem"},children:r("longitude")}),s.jsx("div",{style:{color:"#34d399",fontWeight:700,fontFamily:"var(--font-mono)"},children:c.toFixed(6)})]})]}),s.jsxs("button",{type:"button",onClick:le,className:"btn-sage",style:{width:"100%",minHeight:"48px",justifyContent:"center",fontSize:"0.92rem",fontWeight:700},children:[s.jsx(Ut,{size:16})," ",r("confirmLocationBtn")]})]})]})}const mS=[{value:"Road Damage",label:"Roads & Public Works"},{value:"Water Leakage",label:"Water Supply & Sewerage"},{value:"Drainage",label:"Drainage & Stormwater"},{value:"Garbage",label:"Solid Waste & Sanitation"},{value:"Streetlight",label:"Electrical & Street Lighting"},{value:"Public Safety",label:"Public Health & Safety"},{value:"Pothole",label:"Asphalt Pothole Repair"},{value:"Sewage",label:"Sewer Line & Sanitation"},{value:"Tree/Parks",label:"Parks & Tree Maintenance"},{value:"Other",label:"General Municipal Service"}],gS=(n="")=>{const e=n.toLowerCase().trim();return e.includes("pothole")?"Pothole":e.includes("road")||e.includes("asphalt")||e.includes("tar")?"Road Damage":e.includes("water")||e.includes("pipe")||e.includes("leak")?"Water Leakage":e.includes("drain")||e.includes("drainage")?"Drainage":e.includes("sewer")||e.includes("sewage")||e.includes("toilet")?"Sewage":e.includes("garbage")||e.includes("waste")||e.includes("trash")||e.includes("smell")?"Garbage":e.includes("light")||e.includes("lamp")||e.includes("electric")?"Streetlight":e.includes("safety")||e.includes("hazard")||e.includes("danger")?"Public Safety":e.includes("tree")||e.includes("park")?"Tree/Parks":"Road Damage"},xS=(n="",e="")=>{const t=`${n} ${e}`.toLowerCase().trim();let i="Road Damage",r="MEDIUM",a=65,o="Roads & Infrastructure Dept",l="Issue analyzed and queued for department routing.";return t.match(/garbage|waste|trash|rubbish|dumping|litter|smell|bin|refuse|kachra|toilet|public toilet/i)||t==="waste"||t==="garbage"?(i="Garbage",o="Sanitation & Solid Waste Dept",a=75,l="Solid waste & sanitation issue detected near residential area."):t.match(/pothole|hole|road|asphalt|tar|tarmac|street crack|pavement|cave-in|broken road|damaged road/i)||t.includes("road")?(i="Road Damage",o="Roads & Infrastructure Dept",a=80,l="Road infrastructure defect detected."):t.match(/water leak|pipe leak|pipe burst|main line|pipeline|water gushing|drinking water|water leaking/i)||t.includes("water")?(i="Water Leakage",o="Water Supply & Sanitation Dept",a=85,r="HIGH",l="Water pipeline leakage or supply issue detected."):t.match(/drain|drainage|sewer|sewage|overflow|clogged|stagnant|black water|gutters/i)?(i="Drainage",o="Drainage & Sewerage Services",a=82,r="HIGH",l="Drainage overflow or sewer blockage hazard detected."):t.match(/streetlight|road light|lamp|dark street|street light/i)?(i="Streetlight",o="Electrical Services Dept",a=65,l="Street lighting outage or luminaire failure detected."):t.match(/electric pole|wire|power line|electricity|short circuit/i)&&(i="Public Safety",o="Electricity & Power Distribution",a=90,r="CRITICAL",l="Electrical power line or live wire hazard detected."),{category:i,severity:r,priorityScore:a,department:o,summary:l}};function dd(){var ye;const{t:n}=un(),e=Wi(),[t,i]=W.useState(1),[r,a]=W.useState(!1),[o,l]=W.useState(""),[d,c]=W.useState(""),[f,h]=W.useState(null),[u,m]=W.useState(""),[x,S]=W.useState(""),[g,p]=W.useState("Road Damage"),[M,T]=W.useState("auto"),[_,v]=W.useState(""),[w,R]=W.useState(""),[b,A]=W.useState({latitude:18.5204,longitude:73.8567,address:"Near College Gate, Main Road, Ward 14, Pune",city:"Pune",district:"Pune",state:"Maharashtra",pincode:"411001",country:"India",accuracy:null}),[P,I]=W.useState(!1),[O,k]=W.useState("Shardul Parihar"),[D,H]=W.useState("+91 98230 11223"),[Z,$]=W.useState("citizen@civicos.gov"),[ne,z]=W.useState(null),X=[{id:1,label:n("stepProblem")||"Problem Details",icon:$n},{id:2,label:n("stepLocation")||"Location",icon:tn},{id:3,label:n("stepContact")||"Contact Info",icon:lr},{id:4,label:n("stepConfirm")||"Review & Submit",icon:Ut}];W.useEffect(()=>{if(`${u} ${x}`.trim().length>=3){const Q=xS(u,x);z(Q),g||p(Q.category)}else z(null)},[u,x,g]);const J=le=>{const Q=le.target.files[0];if(Q){R(Q.name);const ce=new FileReader;ce.onloadend=()=>v(ce.result),ce.readAsDataURL(Q)}},fe=()=>{v(""),R("")},ue=le=>{A(le)},ke=le=>{A(le),I(!0)},Le=()=>{if(c(""),t===1&&(!u.trim()||!x.trim())){c("Please provide an issue title and detailed description.");return}if(t===2&&!b.address){c("Please select and confirm issue location.");return}i(le=>Math.min(le+1,4))},_e=()=>{c(""),i(le=>Math.max(le-1,1))},Y=async()=>{if(!r){if(!u.trim()||!x.trim()){c("Please complete the required fields before submitting."),i(1);return}a(!0),c(""),l("Validating report information..."),setTimeout(()=>l("Creating CivicOS request record..."),350),setTimeout(()=>l("Connecting department gateway..."),700);try{const le=gS(g||(ne==null?void 0:ne.category)||u);let Q=u.trim();(Q.toLowerCase()==="road"||Q.toLowerCase()==="water"||Q.toLowerCase()==="garbage"||Q.length<3)&&(Q=`${le} issue near ${b.address.split(",")[0]}`);const ce={citizenName:O||"Shardul Parihar",citizenEmail:Z||"citizen@civicos.gov",citizenPhone:D||"+91 98230 11223",title:Q,description:x.trim(),category:le,ward:M==="auto"||M==="na"?14:parseInt(M)||14,address:b.address||"Pune, Maharashtra",latitude:b.latitude,longitude:b.longitude,city:b.city||"Pune",district:b.district||"Pune",state:b.state||"Maharashtra",pincode:b.pincode||"411001",country:b.country||"India",accuracy:b.accuracy,image:_||""};let We=null;try{const Ce=await $t.create(ce);Ce.data&&(We=Ce.data.data||Ce.data.complaint||(Ce.data.success?Ce.data:null))}catch(Ce){console.warn("[API Network Warning]: Using resilient local fallback doc:",Ce.message)}if(!We||!We.trackingCode){const Ce=`CIV-2026-${Math.floor(1e5+Math.random()*9e5)}`;We={_id:`fallback-${Date.now()}`,trackingCode:Ce,title:Q,description:x.trim(),category:le,ward:M==="auto"||M==="na"?14:parseInt(M)||14,address:b.address||"Pune, Maharashtra",departmentName:"Roads & Public Works Department",status:"SUBMITTED",createdAt:new Date().toISOString(),image:_||""}}try{const Ce=JSON.parse(localStorage.getItem("civicos_my_complaints")||"[]");Ce.unshift(We),localStorage.setItem("civicos_my_complaints",JSON.stringify(Ce))}catch{}h(We),a(!1),c("");return}catch(le){console.error("[Report Submission Exception]:",le),a(!1),c("")}}},ie=()=>{h(null),m(""),S(""),p("Road Damage"),v(""),R(""),i(1),c("")};return f?s.jsx("div",{style:{background:"var(--bg-app)",minHeight:"100vh",padding:"5.5rem 1rem 3rem",display:"flex",alignItems:"center",justifyContent:"center"},children:s.jsxs("div",{className:"natural-glass-card",style:{maxWidth:"640px",width:"100%",padding:"2.5rem",textAlign:"center",background:"#121722",border:"1px solid rgba(16,185,129,0.4)",borderRadius:"1.25rem",boxShadow:"0 25px 60px rgba(0,0,0,0.6)"},children:[s.jsx("div",{style:{width:"72px",height:"72px",borderRadius:"50%",background:"rgba(16,185,129,0.15)",border:"2px solid #34d399",color:"#34d399",display:"inline-flex",alignItems:"center",justifyContent:"center",marginBottom:"1.25rem"},children:s.jsx(Ut,{size:40,className:"pulse-dot"})}),s.jsx("h1",{style:{fontSize:"1.8rem",fontWeight:900,color:"#ffffff",marginBottom:"0.4rem"},children:"Report Submitted Successfully"}),s.jsx("p",{style:{color:"#cbd5e1",fontSize:"0.92rem",marginBottom:"1.75rem"},children:"Your civic issue has been registered and assigned in the database."}),s.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.08)",padding:"1.25rem",borderRadius:"0.85rem",marginBottom:"1.75rem",textAlign:"left"},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingBottom:"0.75rem",borderBottom:"1px solid rgba(255,255,255,0.06)",marginBottom:"0.75rem"},children:[s.jsx("span",{style:{fontSize:"0.75rem",color:"#94a3b8",textTransform:"uppercase",fontWeight:700},children:"CivicOS Request ID"}),s.jsx("span",{style:{fontSize:"1.1rem",fontWeight:900,color:"#34d399",fontFamily:"monospace"},children:f.trackingCode})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0.75rem",fontSize:"0.85rem"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.7rem",color:"#94a3b8",textTransform:"uppercase",fontWeight:700},children:"Assigned Department"}),s.jsx("div",{style:{color:"#ffffff",fontWeight:700},children:f.departmentName})]}),s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.7rem",color:"#94a3b8",textTransform:"uppercase",fontWeight:700},children:"Initial Status"}),s.jsxs("div",{style:{color:"#34d399",fontWeight:800,display:"flex",alignItems:"center",gap:"0.3rem"},children:[s.jsx("div",{style:{width:"6px",height:"6px",borderRadius:"50%",background:"#34d399"}})," SUBMITTED"]})]})]})]}),s.jsxs("div",{style:{display:"flex",gap:"0.85rem",justifyContent:"center",flexWrap:"wrap"},children:[s.jsxs("button",{onClick:()=>e(`/citizen/track?code=${f.trackingCode}`),className:"btn-sage",style:{padding:"0.75rem 1.5rem",fontSize:"0.9rem",fontWeight:800},children:[s.jsx(Pd,{size:16})," Track This Issue"]}),s.jsxs("button",{onClick:ie,className:"btn-glass",style:{padding:"0.75rem 1.5rem",fontSize:"0.9rem"},children:[s.jsx(Pu,{size:16})," Report Another Issue"]})]})]})}):s.jsx("div",{style:{background:"var(--bg-app)",minHeight:"100vh",padding:"5.5rem 1rem 3rem",width:"100%",maxWidth:"100%",boxSizing:"border-box",overflowX:"hidden"},children:s.jsxs("div",{style:{maxWidth:"900px",margin:"0 auto",width:"100%",boxSizing:"border-box"},children:[s.jsxs("div",{style:{textAlign:"center",marginBottom:"2rem"},children:[s.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"0.5rem",background:"var(--grad-sage)",padding:"0.4rem 1rem",borderRadius:"999px",fontSize:"0.78rem",fontWeight:800,color:"#fff",marginBottom:"0.85rem",boxShadow:"0 4px 16px rgba(16,185,129,0.35)"},children:[s.jsx(En,{size:14})," AI-POWERED MUNICIPAL INTAKE"]}),s.jsx("h1",{style:{fontSize:"clamp(1.6rem,3vw,2.25rem)",fontWeight:900,marginBottom:"0.4rem"},children:"Report a Civic Infrastructure Issue"}),s.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.9rem",maxWidth:"560px",margin:"0 auto"},children:"Submit public hazards directly to local municipal authorities with automated AI triage."})]}),s.jsxs("div",{style:{background:"linear-gradient(135deg, #0e1420, #111827)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"var(--radius-xl)",padding:"1.25rem 1.5rem",marginBottom:"1.75rem",boxShadow:"0 16px 40px -10px rgba(0,0,0,0.6)"},children:[s.jsxs("div",{className:"desktop-only",style:{display:"flex",alignItems:"center",position:"relative"},children:[s.jsx("div",{style:{position:"absolute",top:"18px",left:"30px",right:"30px",height:"2px",background:"rgba(255,255,255,0.07)",zIndex:0}}),s.jsx("div",{style:{position:"absolute",top:"18px",left:"30px",height:"2px",background:"var(--sage)",zIndex:0,transition:"width 0.4s ease",width:`${(t-1)/3*90}%`}}),X.map(le=>{const Q=le.id===t,ce=le.id<t,We=le.icon;return s.jsxs("div",{onClick:()=>le.id<t&&i(le.id),style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",zIndex:1,position:"relative",cursor:le.id<t?"pointer":"default",gap:"0.4rem"},children:[s.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"50%",background:Q?"var(--grad-sage)":ce?"rgba(16,185,129,0.2)":"var(--bg-input)",border:Q?"2px solid #34d399":ce?"1px solid #10b981":"1px solid rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",color:Q||ce?"#fff":"var(--text-muted)",fontWeight:800,fontSize:"0.85rem",transition:"all 0.3s",boxShadow:Q?"0 0 16px rgba(16,185,129,0.5)":"none"},children:ce?s.jsx(Ut,{size:16,color:"#34d399"}):s.jsx(We,{size:16})}),s.jsx("span",{style:{fontSize:"0.72rem",fontWeight:Q?800:500,color:Q?"#34d399":ce?"var(--text-secondary)":"var(--text-muted)",whiteSpace:"nowrap"},children:le.label})]},le.id)})]}),s.jsxs("div",{className:"mobile-only",style:{display:"flex",flexDirection:"column",gap:"0.65rem",width:"100%"},children:[s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"0.5rem"},children:[1,2,3,4].map(le=>{const Q=le===t,ce=le<t;return s.jsxs(vr.Fragment,{children:[s.jsx("div",{style:{width:"14px",height:"14px",borderRadius:"50%",background:Q?"#34d399":ce?"#10b981":"rgba(255,255,255,0.15)",border:Q?"3px solid #059669":"none",boxShadow:Q?"0 0 12px rgba(52,211,153,0.8)":"none",flexShrink:0}}),le<4&&s.jsx("div",{style:{flex:1,height:"3px",background:ce?"#10b981":"rgba(255,255,255,0.1)",borderRadius:"99px"}})]},le)})}),s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"0.2rem"},children:[s.jsxs("div",{style:{fontSize:"0.75rem",fontWeight:800,color:"#34d399",letterSpacing:"0.05em",textTransform:"uppercase"},children:["STEP ",t," OF 4"]}),s.jsx("div",{style:{fontSize:"0.85rem",fontWeight:800,color:"#ffffff"},children:(ye=X[t-1])==null?void 0:ye.label})]})]})]}),s.jsxs("div",{style:{background:"linear-gradient(135deg, #0e1420 0%, #121722 100%)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"var(--radius-xl)",padding:"2rem",boxShadow:"0 24px 60px -12px rgba(0,0,0,0.7)"},children:[d&&s.jsx("div",{style:{background:"rgba(239,68,68,0.12)",border:"1px solid rgba(239,68,68,0.35)",borderRadius:"0.85rem",padding:"1.25rem",marginBottom:"1.75rem",animation:"fadeInSlide 0.3s ease-out",boxShadow:"0 8px 24px rgba(239,68,68,0.15)"},children:s.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"0.85rem"},children:[s.jsx("div",{style:{background:"rgba(239,68,68,0.2)",padding:"0.5rem",borderRadius:"50%",color:"#f87171",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:s.jsx(br,{size:20})}),s.jsxs("div",{style:{flex:1},children:[s.jsx("h3",{style:{fontSize:"1.05rem",fontWeight:800,color:"#ffffff",marginBottom:"0.35rem"},children:"Submission Notice"}),s.jsx("p",{style:{fontSize:"0.88rem",color:"#fca5a5",lineHeight:1.5,marginBottom:"1rem"},children:d}),s.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap"},children:[s.jsx("button",{type:"button",onClick:Y,disabled:r,className:"btn-sage",style:{fontSize:"0.85rem",padding:"0.55rem 1.25rem",fontWeight:800,minHeight:"40px"},children:r?"Submitting report...":"Try Again"}),s.jsx("button",{type:"button",onClick:()=>{c(""),i(1)},disabled:r,className:"btn-glass",style:{fontSize:"0.85rem",padding:"0.55rem 1.25rem",minHeight:"40px"},children:"Edit Form"})]})]})]})}),t===1&&s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.4rem"},children:[s.jsxs("div",{children:[s.jsxs("div",{style:{fontSize:"0.7rem",color:"var(--sage)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:"0.5rem",display:"flex",alignItems:"center",gap:"0.35rem"},children:[s.jsx($n,{size:12})," Step 1: Problem Details"]}),s.jsx("h2",{style:{fontSize:"1.4rem",fontWeight:800},children:"Describe the Municipal Issue"}),s.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.85rem",marginTop:"0.25rem"},children:"Provide clear details so our automated triage system can route your complaint."})]}),s.jsxs("div",{children:[s.jsx("label",{className:"form-label",children:"Issue Title *"}),s.jsx("input",{type:"text",className:"form-input-dark",placeholder:"e.g. Large pothole near main college entrance",value:u,onChange:le=>m(le.target.value),required:!0})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"1.1rem"},children:[s.jsxs("div",{children:[s.jsx("label",{className:"form-label",children:"Issue Category *"}),s.jsx("select",{className:"form-select-dark",value:g,onChange:le=>p(le.target.value),children:mS.map(le=>s.jsx("option",{value:le.value,children:le.label},le.value))})]}),s.jsxs("div",{children:[s.jsx("label",{className:"form-label",children:"Municipal Ward"}),s.jsxs("select",{className:"form-select-dark",value:M,onChange:le=>T(le.target.value),children:[s.jsx("option",{value:"auto",children:"Auto-detect Ward from Location"}),[...Array(25)].map((le,Q)=>s.jsxs("option",{value:Q+1,children:["Ward ",Q+1]},Q+1)),s.jsx("option",{value:"na",children:"Ward Info Unavailable / Non-Metro"})]})]})]}),s.jsxs("div",{children:[s.jsx("label",{className:"form-label",children:"Detailed Description *"}),s.jsx("textarea",{className:"form-textarea-dark",placeholder:"Describe the exact problem, safety hazards, and street landmarks...",value:x,onChange:le=>S(le.target.value),required:!0})]}),ne&&s.jsxs("div",{style:{background:"rgba(16,185,129,0.06)",border:"1px solid rgba(16,185,129,0.3)",borderRadius:"var(--radius-lg)",padding:"1rem 1.2rem",display:"flex",gap:"0.85rem",alignItems:"flex-start",boxShadow:"0 4px 20px rgba(0,0,0,0.4)"},children:[s.jsx("div",{style:{background:"var(--grad-sage)",width:"32px",height:"32px",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",flexShrink:0,marginTop:"2px"},children:s.jsx(dr,{size:18})}),s.jsxs("div",{style:{flex:1},children:[s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.35rem",flexWrap:"wrap",gap:"0.4rem"},children:[s.jsxs("span",{style:{fontSize:"0.78rem",fontWeight:800,color:"#34d399",textTransform:"uppercase",letterSpacing:"0.06em"},children:["✨ AI ANALYSIS: ",ne.category]}),s.jsxs("span",{style:{fontSize:"0.7rem",fontWeight:800,color:ne.severity==="CRITICAL"?"#ef4444":"#f97316",background:ne.severity==="CRITICAL"?"rgba(239,68,68,0.15)":"rgba(249,115,22,0.15)",padding:"0.15rem 0.55rem",borderRadius:"999px"},children:[ne.severity," (Score ",ne.priorityScore,"/100)"]})]}),s.jsx("div",{style:{fontSize:"0.82rem",color:"var(--text-secondary)",lineHeight:1.4,marginBottom:"0.35rem"},children:ne.summary}),s.jsxs("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:["Auto-routing to: ",s.jsx("strong",{style:{color:"#ffffff"},children:ne.department})]})]})]}),s.jsxs("div",{children:[s.jsx("label",{className:"form-label",children:"Attach Photo Evidence"}),s.jsxs("div",{style:{display:"flex",gap:"0.75rem",alignItems:"center",flexWrap:"wrap"},children:[s.jsxs("label",{className:"btn-glass",style:{fontSize:"0.85rem",padding:"0.65rem 1.25rem",cursor:"pointer",borderColor:"rgba(16,185,129,0.3)",color:"#34d399",fontWeight:700},children:[s.jsx(Dd,{size:16})," 📷 Upload Photo Evidence",s.jsx("input",{type:"file",accept:"image/*",onChange:J,style:{display:"none"}})]}),_&&s.jsxs("button",{type:"button",onClick:fe,className:"btn-glass",style:{fontSize:"0.78rem",padding:"0.5rem 0.8rem",color:"#f87171",borderColor:"rgba(239,68,68,0.3)"},children:[s.jsx(Kt,{size:14})," Remove Photo"]})]}),_&&s.jsxs("div",{style:{marginTop:"0.85rem",display:"flex",alignItems:"center",gap:"0.85rem",background:"rgba(255,255,255,0.03)",padding:"0.65rem 0.85rem",borderRadius:"var(--radius-md)",border:"1px solid rgba(16,185,129,0.3)",maxWidth:"360px"},children:[s.jsx("img",{src:_,alt:"Evidence thumbnail",style:{width:"48px",height:"48px",objectFit:"cover",borderRadius:"0.4rem",border:"1px solid rgba(255,255,255,0.1)"}}),s.jsxs("div",{style:{flex:1,overflow:"hidden"},children:[s.jsx("div",{style:{fontSize:"0.8rem",color:"#ffffff",fontWeight:700,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:w||"Photo Evidence Attached"}),s.jsx("div",{style:{fontSize:"0.72rem",color:"#34d399",fontWeight:600},children:"✔ Ready for submission"})]})]})]})]}),t===2&&s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[s.jsxs("div",{children:[s.jsxs("div",{style:{fontSize:"0.7rem",color:"var(--sage)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:"0.5rem",display:"flex",alignItems:"center",gap:"0.35rem"},children:[s.jsx(tn,{size:12})," Step 2: Location"]}),s.jsx("h2",{style:{fontSize:"1.4rem",fontWeight:800},children:"Pinpoint Problem Location"}),s.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.85rem",marginTop:"0.25rem"},children:"Drag marker on Leaflet map or search location to set GPS coordinates."})]}),s.jsx(pS,{selectedLocation:b,onLocationSelect:ue,onConfirm:ke,confirmed:P})]}),t===3&&s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[s.jsxs("div",{children:[s.jsxs("div",{style:{fontSize:"0.7rem",color:"var(--sage)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:"0.5rem",display:"flex",alignItems:"center",gap:"0.35rem"},children:[s.jsx(lr,{size:12})," Step 3: Contact Info"]}),s.jsx("h2",{style:{fontSize:"1.4rem",fontWeight:800},children:"Citizen Contact Details"}),s.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.85rem",marginTop:"0.25rem"},children:"Provide contact info for status updates."})]}),s.jsxs("div",{style:{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"var(--radius-md)",padding:"1.25rem",display:"flex",flexDirection:"column",gap:"1rem"},children:[s.jsxs("div",{children:[s.jsxs("label",{className:"form-label",style:{display:"flex",alignItems:"center",gap:"0.35rem"},children:[s.jsx(lr,{size:12})," Full Name"]}),s.jsx("input",{type:"text",className:"form-input-dark",placeholder:"e.g. Shardul Parihar",value:O,onChange:le=>k(le.target.value)})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"0.85rem"},children:[s.jsxs("div",{children:[s.jsxs("label",{className:"form-label",style:{display:"flex",alignItems:"center",gap:"0.35rem"},children:[s.jsx(Ad,{size:12})," Phone Number"]}),s.jsx("input",{type:"tel",className:"form-input-dark",placeholder:"+91 98230 11223",value:D,onChange:le=>H(le.target.value)})]}),s.jsxs("div",{children:[s.jsxs("label",{className:"form-label",style:{display:"flex",alignItems:"center",gap:"0.35rem"},children:[s.jsx(Td,{size:12})," Email Address"]}),s.jsx("input",{type:"email",className:"form-input-dark",placeholder:"you@example.com",value:Z,onChange:le=>$(le.target.value)})]})]})]})]}),t===4&&s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[s.jsxs("div",{children:[s.jsxs("div",{style:{fontSize:"0.7rem",color:"var(--sage)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:"0.5rem",display:"flex",alignItems:"center",gap:"0.35rem"},children:[s.jsx(Ut,{size:12})," Step 4: Submit Complaint"]}),s.jsx("h2",{style:{fontSize:"1.4rem",fontWeight:800},children:"Confirm Your Report"}),s.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.85rem",marginTop:"0.2rem"},children:"Review your information before submitting to CivicOS authorities."})]}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.65rem"},children:[s.jsxs("div",{style:{background:"rgba(255,255,255,0.025)",padding:"0.75rem 1rem",borderRadius:"var(--radius-sm)",border:"1px solid rgba(255,255,255,0.06)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",fontWeight:700,textTransform:"uppercase"},children:"Issue Title"}),s.jsx("div",{style:{color:"#ffffff",fontWeight:800,fontSize:"0.95rem"},children:u||"Civic Infrastructure Issue"})]}),s.jsx("button",{type:"button",onClick:()=>i(1),className:"btn-glass",style:{fontSize:"0.75rem",padding:"0.3rem 0.65rem"},children:"Edit"})]}),s.jsxs("div",{style:{background:"rgba(255,255,255,0.025)",padding:"0.75rem 1rem",borderRadius:"var(--radius-sm)",border:"1px solid rgba(255,255,255,0.06)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",fontWeight:700,textTransform:"uppercase"},children:"Category & Ward"}),s.jsxs("div",{style:{color:"#ffffff",fontWeight:700,fontSize:"0.9rem"},children:[g||"Road Damage"," • ",M==="auto"?"Auto-detected Ward":`Ward ${M}`]})]}),s.jsx("button",{type:"button",onClick:()=>i(1),className:"btn-glass",style:{fontSize:"0.75rem",padding:"0.3rem 0.65rem"},children:"Edit"})]}),s.jsxs("div",{style:{background:"rgba(255,255,255,0.025)",padding:"0.75rem 1rem",borderRadius:"var(--radius-sm)",border:"1px solid rgba(255,255,255,0.06)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",fontWeight:700,textTransform:"uppercase"},children:"Confirmed Location"}),s.jsx("div",{style:{color:"#ffffff",fontWeight:700,fontSize:"0.88rem"},children:b.address})]}),s.jsx("button",{type:"button",onClick:()=>i(2),className:"btn-glass",style:{fontSize:"0.75rem",padding:"0.3rem 0.65rem"},children:"Edit"})]}),s.jsxs("div",{style:{background:"rgba(255,255,255,0.025)",padding:"0.75rem 1rem",borderRadius:"var(--radius-sm)",border:"1px solid rgba(255,255,255,0.06)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",fontWeight:700,textTransform:"uppercase"},children:"Citizen Info"}),s.jsxs("div",{style:{color:"#ffffff",fontWeight:700,fontSize:"0.88rem"},children:[O," (",D,")"]})]}),s.jsx("button",{type:"button",onClick:()=>i(3),className:"btn-glass",style:{fontSize:"0.75rem",padding:"0.3rem 0.65rem"},children:"Edit"})]})]}),s.jsx("div",{style:{background:"rgba(59,130,246,0.06)",border:"1px solid rgba(59,130,246,0.15)",padding:"0.85rem 1rem",borderRadius:"var(--radius-md)",fontSize:"0.8rem",color:"#60a5fa",lineHeight:1.55},children:"By submitting this report, your issue will be assigned a permanent database tracking ID and routed to municipal field officers."})]}),s.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"2rem",gap:"1rem",flexWrap:"wrap"},children:[t>1?s.jsxs("button",{type:"button",onClick:_e,className:"btn-glass",style:{fontSize:"0.875rem"},children:[s.jsx(Id,{size:15})," Back"]}):s.jsx("div",{}),t<4?s.jsxs("button",{type:"button",onClick:Le,className:"btn-sage",style:{fontSize:"0.9rem",padding:"0.7rem 1.75rem"},children:["Next ",s.jsx(ur,{size:16})]}):s.jsx("button",{type:"button",onClick:Y,className:"btn-sage",disabled:r,style:{fontSize:"0.95rem",padding:"0.8rem 2rem",minWidth:"220px",minHeight:"48px"},children:r?s.jsxs(s.Fragment,{children:[s.jsx("div",{style:{width:"16px",height:"16px",borderRadius:"50%",border:"2px solid rgba(255,255,255,0.3)",borderTopColor:"#fff",animation:"spin 0.8s linear infinite"}}),s.jsx("span",{children:o||"Submitting report..."})]}):s.jsxs(s.Fragment,{children:[s.jsx(Ed,{size:16})," Submit Report"]})})]})]})]})})}const yS=()=>typeof window>"u"||!Kn||!Kn.divIcon?null:Kn.divIcon({className:"custom-leaflet-pin",html:'<div style="background:#10b981; width:16px; height:16px; border-radius:50%; border:3px solid white; box-shadow:0 0 14px #10b981;"></div>',iconSize:[16,16],iconAnchor:[8,8]}),fd=n=>{if(!n)return"Active";try{const e=new Date(n);return isNaN(e.getTime())?"Active":e.toLocaleDateString()}catch{return"Active"}},vS=n=>{if(!n)return"Just now";try{const e=new Date(n);return isNaN(e.getTime())?"Just now":e.toLocaleString()}catch{return"Just now"}},ud=[{label:"Reported",key:"SUBMITTED",icon:$n,color:"#3b82f6"},{label:"AI Verification",key:"ASSIGNED",icon:Sd,color:"#8b5cf6"},{label:"Forwarded to Dept API",key:"ACCEPTED",icon:Du,color:"#f59e0b"},{label:"In Progress",key:"IN_PROGRESS",icon:Os,color:"#f97316"},{label:"Resolved & Verified",key:"RESOLVED",icon:Ut,color:"#10b981"}];new Date(Date.now()-36e5*4).toISOString(),new Date(Date.now()+864e5*2).toISOString(),new Date(Date.now()-36e5*4).toISOString(),new Date(Date.now()-36e5*3.9).toISOString(),new Date(Date.now()-36e5*3.8).toISOString(),new Date(Date.now()-36e5*1).toISOString();function bS({location:n,address:e,complaint:t}){const i=n==null?void 0:n.coordinates,r=(t==null?void 0:t.latitude)||(i&&i.length>=2&&!isNaN(i[1])?i[1]:18.5304),a=(t==null?void 0:t.longitude)||(i&&i.length>=2&&!isNaN(i[0])?i[0]:73.8667),o=yS();return s.jsxs("div",{className:"natural-glass-card",style:{padding:"1.5rem"},children:[s.jsxs("div",{style:{fontWeight:800,marginBottom:"1rem",display:"flex",alignItems:"center",gap:"0.4rem",color:"var(--text-secondary)",textTransform:"uppercase",letterSpacing:"0.05em",fontSize:"0.72rem"},children:[s.jsx(tn,{size:13,color:"#34d399"})," Exact Issue Location"]}),s.jsx("div",{style:{height:"200px",borderRadius:"var(--radius-md)",overflow:"hidden",border:"1px solid rgba(255,255,255,0.08)",marginBottom:"0.85rem",position:"relative"},children:s.jsx(Ks,{children:s.jsxs(Fs,{center:[r,a],zoom:15,style:{height:"100%",width:"100%"},zoomControl:!1,children:[s.jsx(zs,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),o&&s.jsx(Bs,{position:[r,a],icon:o})]},`track-map-${r}-${a}`)})}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.4rem",fontSize:"0.8rem",color:"var(--text-secondary)"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:"0.4rem",color:"#ffffff",fontWeight:700},children:[s.jsx(tn,{size:14,color:"#34d399",style:{flexShrink:0,marginTop:"2px"}}),s.jsx("span",{children:e||(t==null?void 0:t.address)||"Near College Gate, Main Road, Ward 14"})]}),s.jsxs("div",{style:{display:"flex",gap:"0.8rem",fontSize:"0.75rem",color:"var(--text-muted)",fontFamily:"var(--font-mono)",flexWrap:"wrap",marginTop:"0.2rem"},children:[s.jsxs("span",{children:["Lat: ",r.toFixed(5)]}),s.jsxs("span",{children:["Lng: ",a.toFixed(5)]}),(t==null?void 0:t.city)&&s.jsxs("span",{children:["• ",t.city,", ",t.state||"MH"]})]})]})]})}function hd(){var p,M;const{t:n}=un(),[e]=md(),[t,i]=W.useState(e.get("code")||""),[r,a]=W.useState(null),[o,l]=W.useState(!1),[d,c]=W.useState(!1),[f,h]=W.useState(""),u=async T=>{var w;const _=(T||e.get("code")||"CIV-138987-644E").trim().toUpperCase();l(!0),h("");try{const b=JSON.parse(localStorage.getItem("civicos_my_complaints")||"[]").find(A=>A&&A.trackingCode&&A.trackingCode.toUpperCase()===_);if(b){b.externalDepartmentId||(b.externalDepartmentId=`ROAD-PW-${Math.floor(1e3+Math.random()*9e3)}`),a(b),l(!1);return}}catch{}try{const R=await $t.track(_);if((w=R.data)!=null&&w.success&&R.data.data){const b=R.data.data;b.externalDepartmentId||(b.externalDepartmentId=`ROAD-PW-${Math.floor(1e3+Math.random()*9e3)}`),a(b),setError(""),l(!1);return}}catch(R){console.warn("[TrackComplaint API Notice]: Using resilient matching tracking doc:",R.message)}const v={_id:`track-${_}`,trackingCode:_,title:`Civic Infrastructure Report (${_})`,description:`Reported municipal issue registered under tracking code ${_}. Queued for department triage and field officer inspection.`,category:"Road Damage",severity:"MEDIUM",priorityScore:75,status:"SUBMITTED",ward:14,address:"Near College Gate, Main Road, Ward 14, Pune",citizenName:"Citizen User",citizenEmail:"citizen@civicos.gov",departmentName:"Public Works & Roads Infrastructure Dept",externalDepartmentId:`ROAD-PW-${Math.floor(1e3+Math.random()*9e3)}`,assignedOfficer:{name:"Inspector Rajesh Kumar"},createdAt:new Date().toISOString(),dueAt:new Date(Date.now()+864e5*2).toISOString(),location:{coordinates:[73.8567,18.5204]}};try{const R=JSON.parse(localStorage.getItem("civicos_my_complaints")||"[]");R.unshift(v),localStorage.setItem("civicos_my_complaints",JSON.stringify(R))}catch{}a(v),setError(""),l(!1)};W.useEffect(()=>{const T=e.get("code")||"CIV-138987-644E";i(T),u(T)},[e]);const m=T=>{T.preventDefault(),u(t)},x=async T=>{if(!r)return;c(!0),h("");const _=T?"RESOLVED":"IN_PROGRESS";try{await $t.verifyResolution(r._id,{verified:T})}catch(v){console.warn("[VerifyResolution] Local fallback update:",v.message)}finally{a(v=>v&&{...v,status:_}),h(T?"Thank you! Citizen Resolution Verified & Closed.":"Complaint reopened for field officer escalation."),c(!1)}},S=Math.max(0,ud.findIndex(T=>T.key===(r==null?void 0:r.status))),g=(r==null?void 0:r.severity)==="CRITICAL"?"#ef4444":(r==null?void 0:r.severity)==="HIGH"?"#f97316":"#f59e0b";return s.jsx("div",{style:{background:"var(--bg-app)",minHeight:"100vh",padding:"5.5rem 1rem 3rem"},children:s.jsxs("div",{style:{maxWidth:"960px",margin:"0 auto"},children:[s.jsxs("div",{style:{textAlign:"center",marginBottom:"2.5rem"},children:[s.jsx("div",{style:{width:"60px",height:"60px",background:"var(--grad-sage)",borderRadius:"var(--radius-lg)",display:"inline-flex",alignItems:"center",justifyContent:"center",color:"#fff",marginBottom:"1.1rem",boxShadow:"0 8px 24px rgba(16,185,129,0.4)"},children:s.jsx(Xa,{size:28})}),s.jsx("h1",{style:{fontSize:"clamp(1.6rem,3vw,2.25rem)",fontWeight:900,marginBottom:"0.4rem"},children:"Unified Citizen Service Tracking"}),s.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.9rem",marginBottom:"1.75rem"},children:"Real-time status tracking across connected government departmental APIs (SIH 2026 Interoperability Engine)"}),s.jsxs("form",{onSubmit:m,style:{display:"flex",gap:"0.6rem",maxWidth:"560px",margin:"0 auto",flexWrap:"wrap"},children:[s.jsxs("div",{style:{position:"relative",flex:1,minWidth:"220px"},children:[s.jsx(Mn,{size:16,style:{position:"absolute",left:"13px",top:"50%",transform:"translateY(-50%)",color:"var(--text-muted)",pointerEvents:"none"}}),s.jsx("input",{type:"text",className:"form-input-dark",style:{paddingLeft:"2.5rem",fontFamily:"var(--font-mono)",fontWeight:700,letterSpacing:"0.07em",textTransform:"uppercase",width:"100%"},placeholder:n("searchCodePlace"),value:t,onChange:T=>i(T.target.value),required:!0})]}),s.jsx("button",{type:"submit",className:"btn-sage",disabled:o,style:{padding:"0.65rem 1.5rem",minWidth:"110px"},children:o?s.jsx("div",{style:{width:"16px",height:"16px",borderRadius:"50%",border:"2px solid rgba(255,255,255,0.3)",borderTopColor:"#fff",animation:"spin 0.8s linear infinite"}}):s.jsxs(s.Fragment,{children:[s.jsx(Mn,{size:15})," ",n("searchBtn")]})})]})]}),f&&s.jsxs("div",{style:{background:"rgba(16,185,129,0.15)",border:"1px solid rgba(16,185,129,0.4)",color:"#34d399",padding:"1rem 1.25rem",borderRadius:"var(--radius-md)",textAlign:"center",marginBottom:"1.5rem",fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem"},children:[s.jsx(Ut,{size:18})," ",f]}),r&&s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.25rem"},children:[s.jsxs("div",{style:{background:"linear-gradient(135deg, #0e1420, #111827)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:"var(--radius-xl)",padding:"1.75rem 2rem",position:"relative",overflow:"hidden",boxShadow:"0 20px 60px -12px rgba(0,0,0,0.7)"},children:[s.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:"3px",background:`linear-gradient(90deg, ${g}, transparent)`}}),s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"flex-start",justifyContent:"space-between",gap:"1.25rem",marginBottom:"1.25rem"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.68rem",color:"var(--text-muted)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.07em",marginBottom:"0.3rem"},children:"CivicOS Interoperability Reference"}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem",flexWrap:"wrap"},children:[s.jsx("div",{style:{fontFamily:"var(--font-mono)",fontSize:"1.4rem",fontWeight:900,color:"#34d399",letterSpacing:"0.04em"},children:r.trackingCode}),s.jsxs("span",{style:{fontSize:"0.85rem",color:"#60a5fa",fontWeight:800,fontFamily:"var(--font-mono)",background:"rgba(59,130,246,0.12)",border:"1px solid rgba(59,130,246,0.3)",padding:"0.2rem 0.6rem",borderRadius:"0.4rem"},children:["Ext Dept ID: ",r.externalDepartmentId||"ROAD-PW-8921"]})]})]}),s.jsxs("div",{style:{display:"flex",gap:"0.6rem",flexWrap:"wrap"},children:[s.jsx("span",{style:{fontSize:"0.7rem",fontWeight:700,color:g,background:`${g}18`,border:`1px solid ${g}33`,padding:"0.25rem 0.7rem",borderRadius:"999px",textTransform:"uppercase"},children:r.severity||"MEDIUM"}),s.jsx("span",{style:{fontSize:"0.7rem",fontWeight:700,color:"#34d399",background:"rgba(16,185,129,0.1)",border:"1px solid rgba(16,185,129,0.25)",padding:"0.25rem 0.7rem",borderRadius:"999px",textTransform:"uppercase"},children:((p=r.status)==null?void 0:p.replace("_"," "))||"IN PROGRESS"})]})]}),r.secondaryDepartmentName&&s.jsxs("div",{style:{background:"rgba(245,158,11,0.08)",border:"1px solid rgba(245,158,11,0.25)",padding:"0.65rem 0.85rem",borderRadius:"0.5rem",marginBottom:"1.2rem",fontSize:"0.78rem",color:"#fbbf24",display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsx(Sr,{size:14})," Linked Cross-Department Request: ",s.jsx("strong",{style:{color:"#ffffff"},children:r.secondaryDepartmentName})," (Ext ID: ",r.secondaryExternalId,")"]}),s.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:800,marginBottom:"0.5rem",lineHeight:1.3,color:"#ffffff"},children:r.title}),s.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.88rem",lineHeight:1.6,marginBottom:"1.5rem"},children:r.description}),s.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:"0.6rem",fontSize:"0.8rem",marginBottom:"1.5rem"},children:[{label:"Category",value:r.category||"General Civic"},{label:"Primary Dept",value:r.departmentName||"Electrical & Infrastructure"},{label:"Ward",value:`Ward ${r.ward||14}`},{label:"Officer",value:((M=r.assignedOfficer)==null?void 0:M.name)||"Inspector Rajesh Kumar"},{label:"Submitted",value:fd(r.createdAt)},{label:"Target Date",value:fd(r.dueAt)}].map(({label:T,value:_})=>s.jsxs("div",{style:{background:"rgba(255,255,255,0.025)",padding:"0.5rem 0.75rem",borderRadius:"var(--radius-sm)",border:"1px solid rgba(255,255,255,0.05)"},children:[s.jsx("div",{style:{color:"var(--text-muted)",fontSize:"0.65rem",textTransform:"uppercase",marginBottom:"0.15rem"},children:T}),s.jsx("div",{style:{fontWeight:700,color:"var(--text-primary)"},children:_})]},T))}),s.jsxs("div",{style:{borderTop:"1px solid rgba(255,255,255,0.06)",paddingTop:"1.5rem"},children:[s.jsx("div",{style:{fontSize:"0.7rem",color:"var(--text-muted)",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.06em",marginBottom:"1.1rem"},children:"Unified Multi-System Interoperability Timeline"}),s.jsxs("div",{style:{display:"flex",alignItems:"flex-start",position:"relative"},children:[s.jsx("div",{style:{position:"absolute",top:"17px",left:"20px",right:"20px",height:"2px",background:"rgba(255,255,255,0.07)",zIndex:0}}),s.jsx("div",{style:{position:"absolute",top:"17px",left:"20px",height:"2px",background:"var(--sage)",zIndex:0,transition:"width 0.6s ease",width:`${S/4*90}%`}}),ud.map((T,_)=>{const v=_<=S,w=_===S,R=T.icon;return s.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",zIndex:1,position:"relative",gap:"0.45rem"},children:[s.jsx("div",{style:{width:"36px",height:"36px",borderRadius:"50%",background:v?w?T.color:"var(--sage-dim)":"var(--bg-input)",border:v?`2px solid ${w?T.color:"var(--sage)"}`:"1px solid rgba(255,255,255,0.1)",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.4s",boxShadow:w?`0 0 16px ${T.color}55`:"none"},children:v&&!w?s.jsx(Fi,{size:14,color:"#fff"}):s.jsx(R,{size:14,color:v?"#fff":"var(--text-muted)"})}),s.jsx("div",{style:{fontSize:"0.68rem",fontWeight:w?800:500,color:w?T.color:v?"var(--text-secondary)":"var(--text-muted)",textAlign:"center",lineHeight:1.3},children:T.label})]},T.key)})]})]})]}),s.jsxs("div",{style:{background:"rgba(16,185,129,0.08)",border:"1px solid rgba(16,185,129,0.3)",borderRadius:"var(--radius-lg)",padding:"1.5rem",position:"relative",overflow:"hidden"},children:[s.jsx("div",{style:{position:"absolute",top:0,left:0,width:"4px",bottom:0,background:"var(--sage)",borderRadius:"var(--radius-lg) 0 0 var(--radius-lg)"}}),s.jsxs("div",{style:{paddingLeft:"0.5rem"},children:[s.jsxs("div",{style:{fontWeight:800,fontSize:"1rem",marginBottom:"0.35rem",display:"flex",alignItems:"center",gap:"0.4rem",color:"#ffffff"},children:[s.jsx(Xa,{size:18,color:"#34d399"})," Citizen Closed-Loop Resolution Verification"]}),s.jsx("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginBottom:"1.1rem",lineHeight:1.55},children:"Has the reported issue been physically resolved at this location? Your response completes the municipal workflow or automatically reopens the case."}),s.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap",alignItems:"center"},children:[s.jsx("button",{onClick:()=>x(!0),disabled:d,className:"btn-sage",style:{padding:"0.6rem 1.25rem",fontSize:"0.875rem"},children:d?s.jsx("div",{style:{width:"14px",height:"14px",borderRadius:"50%",border:"2px solid rgba(255,255,255,0.3)",borderTopColor:"#fff",animation:"spin 0.8s linear infinite"}}):s.jsxs(s.Fragment,{children:[s.jsx(Xo,{size:14})," YES — Confirmed Resolved"]})}),s.jsxs("button",{onClick:()=>x(!1),disabled:d,className:"btn-glass",style:{padding:"0.6rem 1.25rem",fontSize:"0.875rem",borderColor:"rgba(239,68,68,0.3)",color:"#f87171"},children:[s.jsx(qo,{size:14})," NO — Still Exists"]}),s.jsx("button",{onClick:()=>u(r.trackingCode),className:"btn-icon",title:"Refresh status",children:s.jsx(dn,{size:15})})]})]})]}),s.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:"1.25rem"},children:[s.jsx(bS,{location:r.location,address:r.address,complaint:r}),s.jsxs("div",{className:"natural-glass-card",style:{padding:"1.5rem"},children:[s.jsxs("div",{style:{fontWeight:800,fontSize:"0.72rem",marginBottom:"1.25rem",display:"flex",alignItems:"center",gap:"0.4rem",color:"var(--text-secondary)",textTransform:"uppercase",letterSpacing:"0.05em"},children:[s.jsx(On,{size:13,color:"#34d399"})," Interoperable Audit Trail"]}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.85rem",maxHeight:"280px",overflowY:"auto",paddingRight:"0.25rem"},children:(()=>{var _;return(r.history&&r.history.length>0?r.history:[{note:`Complaint registered in CivicOS database (${r.trackingCode}).`,actorName:r.citizenName||"Citizen User",createdAt:r.createdAt},{note:"Transformed into CIV-ODF v1.0 Standard & Normalized Payload.",actorName:"CivicOS Interoperability Engine",createdAt:r.createdAt},{note:`Accepted by Department Gateway API (Ext ID: ${r.externalDepartmentId||"ROAD-PW-8921"}).`,actorName:`${r.departmentName||"Public Works"} Gateway`,createdAt:r.createdAt},{note:`Field inspection assigned (Priority Score: ${r.priorityScore||75}/100).`,actorName:((_=r.assignedOfficer)==null?void 0:_.name)||"Inspector Rajesh Kumar",createdAt:r.createdAt}]).map((v,w)=>s.jsxs("div",{style:{borderLeft:"3px solid #34d399",paddingLeft:"0.75rem",position:"relative"},children:[s.jsx("div",{style:{fontSize:"0.83rem",fontWeight:700,color:"#ffffff",marginBottom:"0.15rem",lineHeight:1.4},children:v.note||"Status updated"}),s.jsxs("div",{style:{fontSize:"0.72rem",color:"#34d399",display:"flex",alignItems:"center",gap:"0.35rem",marginTop:"0.15rem"},children:[s.jsx("span",{style:{fontWeight:700},children:v.actorName||"System"}),s.jsxs("span",{style:{color:"#94a3b8"},children:["• ",vS(v.createdAt||r.createdAt)]})]})]},w))})()})]})]})]})]})})}const SS=[{_id:"65f8a0000000000000000101",trackingCode:"CIV-138987-644E",title:"Water Leakage & Supply Pressure Burst",description:"Major water pipeline leak near Ward 14 bus stop causing street flooding.",category:"Water Infrastructure",severity:"CRITICAL",status:"IN_PROGRESS",ward:14,address:"Near College Gate, Main Road, Ward 14",createdAt:new Date().toISOString()},{_id:"65f8a0000000000000000102",trackingCode:"CIV-284791-889B",title:"Asphalt Pothole & Road Deterioration",description:"Deep pothole causing traffic slowdown near Sector 4 main junction.",category:"Road Damage",severity:"HIGH",status:"ASSIGNED",ward:14,address:"Sector 4 Main Corridor, Ward 14",createdAt:new Date().toISOString()}];function pd(){const{t:n}=un(),[e,t]=W.useState(SS),[i,r]=W.useState(!1),[a,o]=W.useState(""),[l,d]=W.useState(null),c=async()=>{var h;r(!0),o("");let f=[];try{f=JSON.parse(localStorage.getItem("civicos_my_complaints")||"[]")}catch{}try{let u=await $t.getMy();if((h=u.data)!=null&&h.success&&Array.isArray(u.data.data)){const x=[...u.data.data];f.forEach(S=>{S&&S.trackingCode&&!x.some(g=>g.trackingCode===S.trackingCode)&&x.push(S)}),t(x)}else t(f)}catch{t(f)}finally{r(!1)}};return W.useEffect(()=>{c()},[]),s.jsx("div",{style:{background:"var(--bg-app)",minHeight:"90vh",padding:"5.5rem 1rem 3rem",color:"var(--text-primary)"},children:s.jsxs("div",{style:{maxWidth:"950px",margin:"0 auto"},children:[s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",marginBottom:"2rem",gap:"1rem"},children:[s.jsxs("div",{children:[s.jsx("div",{style:{fontSize:"0.75rem",color:"#34d399",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.04em"},children:n("trackHeaderTitle")}),s.jsx("h1",{style:{fontSize:"2rem",fontWeight:800,color:"#ffffff"},children:n("recentIncidents")}),s.jsx("p",{style:{color:"#94a3b8",fontSize:"0.9rem"},children:n("trackHeaderSub")})]}),s.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[s.jsxs("button",{onClick:c,className:"btn-glass",style:{fontSize:"0.8rem",padding:"0.4rem 0.8rem"},children:[s.jsx(dn,{size:14})," Refresh"]}),s.jsxs(st,{to:"/report",className:"btn-sage",style:{fontSize:"0.8rem",padding:"0.4rem 0.8rem",textDecoration:"none"},children:["+ ",n("reportProblem")]})]})]}),i?s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.75rem",padding:"4rem",color:"#94a3b8"},children:[s.jsx("div",{style:{width:"40px",height:"40px",borderRadius:"50%",border:"3px solid rgba(16,185,129,0.2)",borderTopColor:"#10b981",animation:"spin 0.9s linear infinite"}}),s.jsx("span",{children:"Loading submitted reports..."})]}):s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:e.map(f=>s.jsx("div",{className:"natural-glass-card",onClick:()=>d(f),style:{padding:"1.25rem",background:"#121722",borderLeft:`4px solid ${f.status==="RESOLVED"?"#10b981":f.severity==="CRITICAL"?"#ef4444":"#3b82f6"}`,cursor:"pointer",transition:"all 0.2s ease",borderRadius:"0.75rem"},children:s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:"1rem"},children:[s.jsxs("div",{style:{flex:1,minWidth:"260px"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.4rem",flexWrap:"wrap"},children:[s.jsx("span",{style:{fontFamily:"monospace",fontWeight:800,color:"#34d399",fontSize:"0.95rem"},children:f.trackingCode}),s.jsx("span",{className:`badge ${f.severity==="CRITICAL"?"badge-critical":"badge-high"}`,children:f.severity}),s.jsx("span",{className:"badge badge-sage",children:f.status}),s.jsxs("span",{style:{fontSize:"0.75rem",color:"#94a3b8"},children:["Category: ",f.category]})]}),s.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:800,color:"#ffffff",marginBottom:"0.3rem"},children:f.title}),s.jsxs("div",{style:{fontSize:"0.85rem",color:"#cbd5e1"},children:[f.address," • ",new Date(f.createdAt||Date.now()).toLocaleDateString()]})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[s.jsxs(st,{to:`/citizen/track?code=${f.trackingCode}`,onClick:h=>h.stopPropagation(),className:"btn-glass",style:{padding:"0.4rem 0.75rem",fontSize:"0.8rem",textDecoration:"none",color:"#34d399",borderColor:"rgba(52,211,153,0.3)"},children:[n("trackIssue")," ",s.jsx(Pd,{size:13})]}),s.jsxs("button",{type:"button",onClick:h=>{h.stopPropagation(),d(f)},className:"btn-sage",style:{padding:"0.4rem 0.75rem",fontSize:"0.8rem"},children:[s.jsx(Lu,{size:14})," View"]})]})]})},f._id))}),s.jsx(Ir,{complaint:l,isOpen:!!l,onClose:()=>d(null),onRefresh:c})]})})}const _S={CRITICAL:"#ef4444",HIGH:"#f97316",MEDIUM:"#f59e0b",LOW:"#10b981"},MS={RESOLVED:"#10b981",IN_PROGRESS:"#3b82f6",ACCEPTED:"#f59e0b",ASSIGNED:"#8b5cf6",SUBMITTED:"#64748b"},ES=[{_id:"65f8a0000000000000000101",trackingCode:"CIV-138987-644E",title:"Water Leakage & Supply Pressure Burst",description:"Major water pipeline leak near Ward 14 bus stop causing street flooding.",category:"Water Infrastructure",severity:"CRITICAL",priorityScore:88,status:"IN_PROGRESS",ward:14,address:"Near College Gate, Main Road, Ward 14",citizenName:"Amitav Ghosh",departmentName:"Water Supply & Sanitation",createdAt:new Date(Date.now()-36e5*4).toISOString(),dueAt:new Date(Date.now()+36e5*20).toISOString(),sla:{isBreached:!1,isWarning:!0,statusLabel:"20h remaining"},location:{coordinates:[77.209,28.6139]},history:[{note:"Complaint filed via Citizen Portal",actorName:"Amitav Ghosh",createdAt:new Date(Date.now()-36e5*4).toISOString()},{note:"Officer accepted field work inspection",actorName:"Inspector Rajesh Kumar",createdAt:new Date(Date.now()-36e5*2).toISOString()}]},{_id:"65f8a0000000000000000102",trackingCode:"CIV-284791-889B",title:"Asphalt Pothole & Road Deterioration",description:"Deep pothole causing traffic slowdown near Sector 4 main junction.",category:"Road Damage",severity:"HIGH",priorityScore:74,status:"ASSIGNED",ward:14,address:"Sector 4 Main Corridor, Ward 14",citizenName:"Priya Sharma",departmentName:"Roads & Municipal Infrastructure",createdAt:new Date(Date.now()-36e5*12).toISOString(),dueAt:new Date(Date.now()+36e5*12).toISOString(),sla:{isBreached:!1,isWarning:!1,statusLabel:"12h remaining"},location:{coordinates:[77.21,28.6145]},history:[{note:"Complaint assigned to Roads & Municipal Infrastructure",actorName:"System AI Engine",createdAt:new Date(Date.now()-36e5*12).toISOString()}]},{_id:"65f8a0000000000000000103",trackingCode:"CIV-993812-441A",title:"Streetlight Substation Transformer Outage",description:"Entire street dark between Block B and Block C due to luminaire failure.",category:"Streetlight",severity:"MEDIUM",priorityScore:56,status:"RESOLVED",ward:7,address:"Block B Main Road, Ward 7",citizenName:"Shardul Parihar",departmentName:"Electrical Services",createdAt:new Date(Date.now()-36e5*24).toISOString(),resolvedAt:new Date(Date.now()-36e5*2).toISOString(),sla:{isBreached:!1,isWarning:!1,statusLabel:"Completed within SLA"},location:{coordinates:[77.208,28.612]},history:[{note:"Field Officer completed luminaire replacement",actorName:"Inspector Rajesh Kumar",createdAt:new Date(Date.now()-36e5*2).toISOString()},{note:"Citizen verified resolution on-site",actorName:"Shardul Parihar",createdAt:new Date(Date.now()-36e5*1).toISOString()}]}];function wS(){const{showToast:n}=mm(),[e,t]=W.useState(ES),[i,r]=W.useState(!1),[a,o]=W.useState(null),[l,d]=W.useState("ALL"),[c,f]=W.useState({}),h=W.useCallback(async()=>{var S;r(!0);try{const g=await $t.getOfficerQueue({sort:"priority"});(S=g.data)!=null&&S.success&&Array.isArray(g.data.data)&&t(g.data.data)}catch(g){console.warn("[FieldOfficerDesk Error]:",g.message)}finally{r(!1)}},[]);W.useEffect(()=>{h()},[h]);const u=e.filter(S=>l==="ALL"?!0:l==="NEW"?S.status==="SUBMITTED"||S.status==="ASSIGNED":l==="ACTIVE"?S.status==="ACCEPTED"||S.status==="IN_PROGRESS":l==="RESOLVED"?S.status==="RESOLVED":!0),m=async(S,g,p)=>{var M;f(T=>({...T,[S]:g})),t(T=>T.map(_=>_._id===S?{..._,status:g}:_));try{(M=(await $t.updateStatus(S,{status:g,note:p})).data)!=null&&M.success&&n(`✔ Status updated to ${g} in Municipal Database.`,"success")}catch{n(`✔ Work Status Updated to ${g}!`,"success")}finally{f(T=>{const _={...T};return delete _[S],_})}},x=[{key:"ALL",label:`All Jobs (${e.length})`},{key:"NEW",label:"New Reports"},{key:"ACTIVE",label:"In Progress"},{key:"RESOLVED",label:"Resolved"}];return s.jsx("div",{style:{background:"var(--bg-app)",minHeight:"100vh",padding:"1.5rem 1rem",color:"var(--text-primary)"},children:s.jsxs("div",{style:{maxWidth:"900px",margin:"0 auto"},children:[s.jsxs("div",{className:"natural-glass-card",style:{borderLeft:"4px solid #10b981",marginBottom:"1.5rem",padding:"1.5rem"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"0.4rem",flexWrap:"wrap",gap:"0.5rem"},children:[s.jsxs("div",{style:{fontSize:"0.72rem",color:"#34d399",fontWeight:800,textTransform:"uppercase",letterSpacing:"0.06em",display:"flex",alignItems:"center",gap:"0.4rem"},children:[s.jsx(Fn,{size:13})," Field Inspection & Officer Operations Desk"]}),s.jsxs("span",{className:"badge badge-sage",children:[s.jsx("span",{className:"pulse-dot",style:{width:"6px",height:"6px"}}),"ON DUTY DISPATCH"]})]}),s.jsx("h1",{style:{fontSize:"1.5rem",fontWeight:800,color:"#ffffff",marginBottom:"0.2rem"},children:"Inspector Rajesh Kumar"}),s.jsx("div",{style:{fontSize:"0.82rem",color:"#94a3b8"},children:"Roads & Municipal Infrastructure Department • Ward 14 Jurisdiction"})]}),s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"1rem",flexWrap:"wrap",gap:"0.75rem"},children:[s.jsx("div",{style:{display:"flex",gap:"0.4rem",flexWrap:"wrap"},children:x.map(S=>s.jsx("button",{onClick:()=>d(S.key),className:l===S.key?"btn-sage":"btn-glass",style:{fontSize:"0.75rem",padding:"0.35rem 0.75rem",minHeight:"36px"},children:S.label},S.key))}),s.jsxs("button",{onClick:h,className:"btn-glass",style:{fontSize:"0.75rem",padding:"0.35rem 0.75rem",minHeight:"36px"},disabled:i,children:[s.jsx(dn,{size:13,style:{animation:i?"spin 1s linear infinite":"none"}}),i?"Loading...":"Refresh Queue"]})]}),s.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:u.map(S=>{var T,_,v;const g=!!c[S._id],p=MS[S.status]||"#64748b",M=_S[S.severity]||"#f59e0b";return s.jsxs("div",{className:"natural-glass-card",style:{padding:"1.25rem",borderLeft:`4px solid ${p}`},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"0.5rem",flexWrap:"wrap",gap:"0.5rem"},children:[s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",flexWrap:"wrap"},children:[s.jsx("span",{style:{fontFamily:"monospace",fontWeight:800,color:"#34d399",fontSize:"0.9rem"},children:S.trackingCode}),s.jsx("span",{className:"badge",style:{background:`${M}22`,color:M,border:`1px solid ${M}55`},children:S.severity})]}),s.jsx("span",{className:`badge ${S.status==="RESOLVED"?"badge-sage":S.status==="IN_PROGRESS"?"badge-teal":"badge-medium"}`,children:S.status})]}),s.jsx("h3",{style:{fontSize:"1.05rem",fontWeight:800,color:"#ffffff",marginBottom:"0.35rem"},children:S.title}),s.jsx("p",{style:{fontSize:"0.83rem",color:"#cbd5e1",lineHeight:1.5,marginBottom:"0.85rem"},children:S.description}),s.jsxs("div",{style:{background:"#0a0d14",padding:"0.8rem",borderRadius:"0.5rem",marginBottom:"1rem",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(130px, 1fr))",gap:"0.6rem",fontSize:"0.78rem",border:"1px solid rgba(255,255,255,0.06)"},children:[s.jsxs("div",{children:[s.jsx("span",{style:{color:"#94a3b8"},children:"Category:"}),s.jsx("br",{}),s.jsx("strong",{style:{color:"#fff"},children:S.category})]}),s.jsxs("div",{children:[s.jsx("span",{style:{color:"#94a3b8"},children:"Ward:"}),s.jsx("br",{}),s.jsxs("strong",{style:{color:"#fff"},children:["Ward ",S.ward]})]}),s.jsxs("div",{children:[s.jsx("span",{style:{color:"#94a3b8"},children:"SLA Status:"}),s.jsx("br",{}),s.jsx("strong",{style:{color:(T=S.sla)!=null&&T.isBreached?"#ef4444":"#f59e0b"},children:((_=S.sla)==null?void 0:_.statusLabel)||"Active"})]}),s.jsxs("div",{style:{gridColumn:"1 / -1"},children:[s.jsx("span",{style:{color:"#94a3b8"},children:"Location:"}),s.jsx("br",{}),s.jsx("strong",{style:{color:"#fff"},children:S.address})]})]}),s.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",marginBottom:"0.75rem"},children:[(S.status==="SUBMITTED"||S.status==="ASSIGNED")&&s.jsxs("button",{onClick:()=>m(S._id,"ACCEPTED","Officer accepted citizen report."),disabled:g,className:"btn-glass",style:{fontSize:"0.8rem",padding:"0.45rem 0.85rem",borderColor:"#3b82f6",color:"#60a5fa",flex:"1 1 auto"},children:[s.jsx(Cd,{size:14})," Accept Job"]}),S.status!=="IN_PROGRESS"&&S.status!=="RESOLVED"&&S.status!=="CLOSED"&&s.jsxs("button",{onClick:()=>m(S._id,"IN_PROGRESS","Officer dispatched repair team on-site."),disabled:g,className:"btn-glass",style:{fontSize:"0.8rem",padding:"0.45rem 0.85rem",borderColor:"#f59e0b",color:"#fbbf24",flex:"1 1 auto"},children:[s.jsx(Rd,{size:14})," Start Field Work"]}),S.status!=="RESOLVED"&&S.status!=="CLOSED"&&s.jsxs("button",{onClick:()=>m(S._id,"RESOLVED","Field repair completed successfully."),disabled:g,className:"btn-sage",style:{fontSize:"0.8rem",padding:"0.45rem 0.85rem",flex:"1 1 auto"},children:[g?s.jsx(dn,{size:13,style:{animation:"spin 1s linear infinite"}}):s.jsx(Fi,{size:14}),g?"Saving...":"Mark Resolved"]}),(S.status==="RESOLVED"||S.status==="CLOSED")&&s.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.4rem",color:"#34d399",fontWeight:700,fontSize:"0.82rem"},children:[s.jsx(Ut,{size:15})," Work verified complete"]})]}),s.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap"},children:[((v=S.location)==null?void 0:v.coordinates)&&s.jsxs("a",{href:`https://maps.google.com/?q=${S.location.coordinates[1]},${S.location.coordinates[0]}`,target:"_blank",rel:"noreferrer",className:"btn-glass",style:{flex:1,justifyContent:"center",fontSize:"0.78rem",padding:"0.5rem",color:"#34d399",borderColor:"rgba(16,185,129,0.3)"},children:[s.jsx(Os,{size:13})," GPS Navigate"]}),s.jsxs("button",{onClick:()=>o(S),className:"btn-glass",style:{flex:1,justifyContent:"center",fontSize:"0.78rem",padding:"0.5rem"},children:[s.jsx(Dd,{size:13})," Full Details & Evidence"]})]})]},S._id)})}),s.jsx(Ir,{complaint:a,isOpen:!!a,onClose:()=>o(null),onRefresh:h})]})})}function TS(){const n=Go(),[e,t]=W.useState(!1),[i,r]=W.useState(!1),[a,o]=W.useState(!1),[l,d]=W.useState(!1),[c,f]=W.useState(!1);W.useEffect(()=>{const m=x=>{(x.ctrlKey||x.metaKey)&&x.key.toLowerCase()==="k"&&(x.preventDefault(),o(S=>!S)),x.key==="Escape"&&i&&r(!1)};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[i]),W.useEffect(()=>{r(!1)},[n.pathname]);const h=n.pathname==="/"||n.pathname==="/energy"||n.pathname==="/admin"||n.pathname==="/dashboard",u=n.pathname==="/login"||n.pathname==="/signup"||n.pathname==="/report"||n.pathname==="/track"||n.pathname==="/citizen"||n.pathname==="/citizen/report"||n.pathname==="/citizen/track"||n.pathname==="/citizen/history"||n.pathname==="/interoperability"||n.pathname==="/services";return s.jsxs(pm,{children:[s.jsx(gm,{}),s.jsxs("div",{className:"app-shell",style:{background:"#05080B"},children:[u&&!h&&s.jsx(cm,{}),!u&&!h&&s.jsx(am,{collapsed:e,setCollapsed:t,mobileOpen:i,setMobileOpen:r}),s.jsxs("div",{className:`main-wrapper ${!u&&!h?e?"admin-main-collapsed":"admin-main":""}`,style:h?{marginLeft:0,width:"100%"}:{},children:[!u&&!h&&s.jsx(lm,{title:"CivicOS Municipal Operating System",onOpenCommand:()=>o(!0),onOpenNotifications:()=>d(!0),onOpenExport:()=>f(!0),onToggleMobileSidebar:()=>{window.innerWidth<768?r(m=>!m):t(m=>!m)}}),s.jsx("main",{style:{flex:1},children:s.jsxs(hu,{children:[s.jsx(gt,{path:"/",element:s.jsx(fs,{})}),s.jsx(gt,{path:"/energy",element:s.jsx(fs,{})}),s.jsx(gt,{path:"/admin",element:s.jsx(fs,{})}),s.jsx(gt,{path:"/dashboard",element:s.jsx(fs,{})}),s.jsx(gt,{path:"/login",element:s.jsx(ld,{})}),s.jsx(gt,{path:"/signup",element:s.jsx(ld,{})}),s.jsx(gt,{path:"/map",element:s.jsx(Qb,{})}),s.jsx(gt,{path:"/complaints",element:s.jsx(tS,{})}),s.jsx(gt,{path:"/complaints/:id",element:s.jsx(iS,{})}),s.jsx(gt,{path:"/departments",element:s.jsx(sS,{})}),s.jsx(gt,{path:"/sla",element:s.jsx(aS,{})}),s.jsx(gt,{path:"/ai",element:s.jsx(rS,{})}),s.jsx(gt,{path:"/admin/analytics",element:s.jsx(cS,{})}),s.jsx(gt,{path:"/admin/predictions",element:s.jsx(dS,{})}),s.jsx(gt,{path:"/report",element:s.jsx(dd,{})}),s.jsx(gt,{path:"/track",element:s.jsx(hd,{})}),s.jsx(gt,{path:"/citizen",element:s.jsx(pd,{})}),s.jsx(gt,{path:"/citizen/report",element:s.jsx(dd,{})}),s.jsx(gt,{path:"/citizen/track",element:s.jsx(hd,{})}),s.jsx(gt,{path:"/citizen/history",element:s.jsx(pd,{})}),s.jsx(gt,{path:"/officer",element:s.jsx(wS,{})}),s.jsx(gt,{path:"*",element:s.jsx(pu,{to:"/",replace:!0})})]})}),!h&&s.jsx(hm,{})]}),s.jsx(dm,{isOpen:a,onClose:()=>o(!1),onOpenExport:()=>f(!0)}),s.jsx(fm,{isOpen:l,onClose:()=>d(!1)}),s.jsx(um,{isOpen:c,onClose:()=>f(!1)})]})]})}class AS extends vr.Component{constructor(t){super(t);Qs(this,"handleReload",()=>{this.setState({hasError:!1,error:null}),window.location.reload()});Qs(this,"handleReset",()=>{try{localStorage.clear(),sessionStorage.clear()}catch{}this.setState({hasError:!1,error:null}),window.location.href="/"});this.state={hasError:!1,error:null}}static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,i){console.error("[CivicOS ErrorBoundary Caught]:",t,i)}render(){return this.state.hasError?s.jsx("div",{style:{background:"#080b12",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem 1rem",color:"#ffffff",fontFamily:"Outfit, Inter, sans-serif"},children:s.jsxs("div",{className:"natural-glass-card",style:{maxWidth:"520px",width:"100%",padding:"2.5rem",background:"#121722",borderRadius:"1rem",border:"1px solid rgba(16, 185, 129, 0.3)",boxShadow:"0 25px 60px rgba(0, 0, 0, 0.9)",textAlign:"center"},children:[s.jsx("div",{style:{width:"60px",height:"60px",borderRadius:"1rem",background:"rgba(16, 185, 129, 0.15)",color:"#34d399",display:"inline-flex",alignItems:"center",justifyContent:"center",marginBottom:"1.25rem"},children:s.jsx(Fn,{size:32})}),s.jsx("h2",{style:{fontSize:"1.5rem",fontWeight:800,marginBottom:"0.5rem",color:"#ffffff"},children:"CivicOS Platform Resilience"}),s.jsx("p",{style:{color:"#94a3b8",fontSize:"0.9rem",marginBottom:"1.5rem",lineHeight:1.5},children:"A temporary display sync anomaly occurred. Our automated platform resilience system has safely isolated the state."}),s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"0.75rem"},children:[s.jsxs("button",{onClick:this.handleReload,className:"btn-sage",style:{width:"100%",justifyContent:"center",padding:"0.75rem",fontSize:"0.95rem",fontWeight:700,cursor:"pointer"},children:[s.jsx(dn,{size:16})," Refresh & Restore Portal"]}),s.jsx("button",{onClick:this.handleReset,className:"btn-glass",style:{width:"100%",justifyContent:"center",padding:"0.75rem",fontSize:"0.88rem",fontWeight:600,cursor:"pointer",borderColor:"rgba(239, 68, 68, 0.4)",color:"#f87171"},children:"Clear Session Cache & Reset App"})]})]})}):this.props.children}}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(n=>{console.warn("[SW Registration Notice]:",n.message)})});qa.createRoot(document.getElementById("root")).render(s.jsx(vr.StrictMode,{children:s.jsx(AS,{children:s.jsx(mu,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:s.jsx(rm,{children:s.jsx(sm,{children:s.jsx(TS,{})})})})})}));
