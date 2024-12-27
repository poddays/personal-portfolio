const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./q2Bb-O2S.js","./C9UZdknB.js","./B5TzMui8.js","./MYkimJRI.js","./index.BGZs7Zgm.css","./2GKXtEut.js","./TheProblem.DN1-EnPu.css","./2ZWx_8ad.js","./CQNpMK5p.js","./Dt2mCdJl.js","./C-v3KzvZ.js","./CxYJgpPD.js","./BPcWkrpl.js","./DJ1MnIYU.js","./CK6jyi5z.js","./Denpop9K.js","./Plgk13Q_.js","./DTeB2-iV.js","./DqnyVn7P.js","./Bid4uXYC.js","./CghitLys.js","./VTSbpjRG.js","./ProsePre.B_fgAJq0.css","./eSuI9SLB.js","./CFxgfmNK.js","./NT-2wfhg.js","./error-404.CoZKRZXM.css","./DpwdzuJv.js","./error-500.D6506J9O.css"])))=>i.map(i=>d[i]);
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function yu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ct={},Ur=[],Dn=()=>{},p_=()=>!1,Ws=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Su=t=>t.startsWith("onUpdate:"),Et=Object.assign,Eu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},m_=Object.prototype.hasOwnProperty,nt=(t,e)=>m_.call(t,e),Fe=Array.isArray,Nr=t=>Xs(t)==="[object Map]",Kh=t=>Xs(t)==="[object Set]",g_=t=>Xs(t)==="[object RegExp]",ke=t=>typeof t=="function",pt=t=>typeof t=="string",si=t=>typeof t=="symbol",ft=t=>t!==null&&typeof t=="object",Mu=t=>(ft(t)||ke(t))&&ke(t.then)&&ke(t.catch),Zh=Object.prototype.toString,Xs=t=>Zh.call(t),__=t=>Xs(t).slice(8,-1),Jh=t=>Xs(t)==="[object Object]",bu=t=>pt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Fr=yu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ea=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},v_=/-(\w)/g,dn=Ea(t=>t.replace(v_,(e,n)=>n?n.toUpperCase():"")),x_=/\B([A-Z])/g,cr=Ea(t=>t.replace(x_,"-$1").toLowerCase()),Ma=Ea(t=>t.charAt(0).toUpperCase()+t.slice(1)),$a=Ea(t=>t?`on${Ma(t)}`:""),Ei=(t,e)=>!Object.is(t,e),Es=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Qh=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},y_=t=>{const e=parseFloat(t);return isNaN(e)?t:e},ep=t=>{const e=pt(t)?Number(t):NaN;return isNaN(e)?t:e};let Sf;const ba=()=>Sf||(Sf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ta(t){if(Fe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=pt(i)?b_(i):Ta(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(pt(t)||ft(t))return t}const S_=/;(?![^(]*\))/g,E_=/:([^]+)/,M_=/\/\*[^]*?\*\//g;function b_(t){const e={};return t.replace(M_,"").split(S_).forEach(n=>{if(n){const i=n.split(E_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Aa(t){let e="";if(pt(t))e=t;else if(Fe(t))for(let n=0;n<t.length;n++){const i=Aa(t[n]);i&&(e+=i+" ")}else if(ft(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function T_(t){if(!t)return null;let{class:e,style:n}=t;return e&&!pt(e)&&(t.class=Aa(e)),n&&(t.style=Ta(n)),t}const A_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",w_=yu(A_);function tp(t){return!!t||t===""}const np=t=>!!(t&&t.__v_isRef===!0),R_=t=>pt(t)?t:t==null?"":Fe(t)||ft(t)&&(t.toString===Zh||!ke(t.toString))?np(t)?R_(t.value):JSON.stringify(t,ip,2):String(t),ip=(t,e)=>np(e)?ip(t,e.value):Nr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[qa(i,s)+" =>"]=r,n),{})}:Kh(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>qa(n))}:si(e)?qa(e):ft(e)&&!Fe(e)&&!Jh(e)?String(e):e,qa=(t,e="")=>{var n;return si(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let zt;class rp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=zt,!e&&zt&&(this.index=(zt.scopes||(zt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=zt;try{return zt=this,e()}finally{zt=n}}}on(){zt=this}off(){zt=this.parent}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function C_(t){return new rp(t)}function sp(){return zt}function EP(t,e=!1){zt&&zt.cleanups.push(t)}let lt;const ja=new WeakSet;class op{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,zt&&zt.active&&zt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ja.has(this)&&(ja.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||lp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ef(this),cp(this);const e=lt,n=Mn;lt=this,Mn=!0;try{return this.fn()}finally{up(this),lt=e,Mn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)wu(e);this.deps=this.depsTail=void 0,Ef(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ja.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Xl(this)&&this.run()}get dirty(){return Xl(this)}}let ap=0,Ms,bs;function lp(t,e=!1){if(t.flags|=8,e){t.next=bs,bs=t;return}t.next=Ms,Ms=t}function Tu(){ap++}function Au(){if(--ap>0)return;if(bs){let e=bs;for(bs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ms;){let e=Ms;for(Ms=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function cp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function up(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),wu(i),P_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Xl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(fp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function fp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Is))return;t.globalVersion=Is;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Xl(t)){t.flags&=-3;return}const n=lt,i=Mn;lt=t,Mn=!0;try{cp(t);const r=t.fn(t._value);(e.version===0||Ei(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{lt=n,Mn=i,up(t),t.flags&=-3}}function wu(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)wu(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function P_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Mn=!0;const dp=[];function Li(){dp.push(Mn),Mn=!1}function Ii(){const t=dp.pop();Mn=t===void 0?!0:t}function Ef(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=lt;lt=void 0;try{e()}finally{lt=n}}}let Is=0;class L_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class wa{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!lt||!Mn||lt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==lt)n=this.activeLink=new L_(lt,this),lt.deps?(n.prevDep=lt.depsTail,lt.depsTail.nextDep=n,lt.depsTail=n):lt.deps=lt.depsTail=n,hp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=lt.depsTail,n.nextDep=void 0,lt.depsTail.nextDep=n,lt.depsTail=n,lt.deps===n&&(lt.deps=i)}return n}trigger(e){this.version++,Is++,this.notify(e)}notify(e){Tu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Au()}}}function hp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)hp(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ta=new WeakMap,er=Symbol(""),$l=Symbol(""),Ds=Symbol("");function Ft(t,e,n){if(Mn&&lt){let i=ta.get(t);i||ta.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new wa),r.map=i,r.key=n),r.track()}}function jn(t,e,n,i,r,s){const o=ta.get(t);if(!o){Is++;return}const a=l=>{l&&l.trigger()};if(Tu(),e==="clear")o.forEach(a);else{const l=Fe(t),u=l&&bu(n);if(l&&n==="length"){const c=Number(i);o.forEach((f,d)=>{(d==="length"||d===Ds||!si(d)&&d>=c)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Ds)),e){case"add":l?u&&a(o.get("length")):(a(o.get(er)),Nr(t)&&a(o.get($l)));break;case"delete":l||(a(o.get(er)),Nr(t)&&a(o.get($l)));break;case"set":Nr(t)&&a(o.get(er));break}}Au()}function I_(t,e){const n=ta.get(t);return n&&n.get(e)}function dr(t){const e=Ze(t);return e===t?e:(Ft(e,"iterate",Ds),fn(t)?e:e.map(Ot))}function Ra(t){return Ft(t=Ze(t),"iterate",Ds),t}const D_={__proto__:null,[Symbol.iterator](){return Ya(this,Symbol.iterator,Ot)},concat(...t){return dr(this).concat(...t.map(e=>Fe(e)?dr(e):e))},entries(){return Ya(this,"entries",t=>(t[1]=Ot(t[1]),t))},every(t,e){return Bn(this,"every",t,e,void 0,arguments)},filter(t,e){return Bn(this,"filter",t,e,n=>n.map(Ot),arguments)},find(t,e){return Bn(this,"find",t,e,Ot,arguments)},findIndex(t,e){return Bn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Bn(this,"findLast",t,e,Ot,arguments)},findLastIndex(t,e){return Bn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Bn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ka(this,"includes",t)},indexOf(...t){return Ka(this,"indexOf",t)},join(t){return dr(this).join(t)},lastIndexOf(...t){return Ka(this,"lastIndexOf",t)},map(t,e){return Bn(this,"map",t,e,void 0,arguments)},pop(){return cs(this,"pop")},push(...t){return cs(this,"push",t)},reduce(t,...e){return Mf(this,"reduce",t,e)},reduceRight(t,...e){return Mf(this,"reduceRight",t,e)},shift(){return cs(this,"shift")},some(t,e){return Bn(this,"some",t,e,void 0,arguments)},splice(...t){return cs(this,"splice",t)},toReversed(){return dr(this).toReversed()},toSorted(t){return dr(this).toSorted(t)},toSpliced(...t){return dr(this).toSpliced(...t)},unshift(...t){return cs(this,"unshift",t)},values(){return Ya(this,"values",Ot)}};function Ya(t,e,n){const i=Ra(t),r=i[e]();return i!==t&&!fn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const U_=Array.prototype;function Bn(t,e,n,i,r,s){const o=Ra(t),a=o!==t&&!fn(t),l=o[e];if(l!==U_[e]){const f=l.apply(t,s);return a?Ot(f):f}let u=n;o!==t&&(a?u=function(f,d){return n.call(this,Ot(f),d,t)}:n.length>2&&(u=function(f,d){return n.call(this,f,d,t)}));const c=l.call(o,u,i);return a&&r?r(c):c}function Mf(t,e,n,i){const r=Ra(t);let s=n;return r!==t&&(fn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,Ot(a),l,t)}),r[e](s,...i)}function Ka(t,e,n){const i=Ze(t);Ft(i,"iterate",Ds);const r=i[e](...n);return(r===-1||r===!1)&&Pu(n[0])?(n[0]=Ze(n[0]),i[e](...n)):r}function cs(t,e,n=[]){Li(),Tu();const i=Ze(t)[e].apply(t,n);return Au(),Ii(),i}const N_=yu("__proto__,__v_isRef,__isVue"),pp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(si));function F_(t){si(t)||(t=String(t));const e=Ze(this);return Ft(e,"has",t),e.hasOwnProperty(t)}class mp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?$_:xp:s?vp:_p).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Fe(e);if(!r){let l;if(o&&(l=D_[n]))return l;if(n==="hasOwnProperty")return F_}const a=Reflect.get(e,n,Rt(e)?e:i);return(si(n)?pp.has(n):N_(n))||(r||Ft(e,"get",n),s)?a:Rt(a)?o&&bu(n)?a:a.value:ft(a)?r?yp(a):oi(a):a}}class gp extends mp{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._isShallow){const l=wi(s);if(!fn(i)&&!wi(i)&&(s=Ze(s),i=Ze(i)),!Fe(e)&&Rt(s)&&!Rt(i))return l?!1:(s.value=i,!0)}const o=Fe(e)&&bu(n)?Number(n)<e.length:nt(e,n),a=Reflect.set(e,n,i,Rt(e)?e:r);return e===Ze(r)&&(o?Ei(i,s)&&jn(e,"set",n,i):jn(e,"add",n,i)),a}deleteProperty(e,n){const i=nt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&jn(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!si(n)||!pp.has(n))&&Ft(e,"has",n),i}ownKeys(e){return Ft(e,"iterate",Fe(e)?"length":er),Reflect.ownKeys(e)}}class O_ extends mp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const B_=new gp,k_=new O_,H_=new gp(!0);const ql=t=>t,oo=t=>Reflect.getPrototypeOf(t);function z_(t,e,n){return function(...i){const r=this.__v_raw,s=Ze(r),o=Nr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=r[t](...i),c=n?ql:e?jl:Ot;return!e&&Ft(s,"iterate",l?$l:er),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:a?[c(f[0]),c(f[1])]:c(f),done:d}},[Symbol.iterator](){return this}}}}function ao(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function V_(t,e){const n={get(r){const s=this.__v_raw,o=Ze(s),a=Ze(r);t||(Ei(r,a)&&Ft(o,"get",r),Ft(o,"get",a));const{has:l}=oo(o),u=e?ql:t?jl:Ot;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Ft(Ze(r),"iterate",er),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=Ze(s),a=Ze(r);return t||(Ei(r,a)&&Ft(o,"has",r),Ft(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=Ze(a),u=e?ql:t?jl:Ot;return!t&&Ft(l,"iterate",er),a.forEach((c,f)=>r.call(s,u(c),u(f),o))}};return Et(n,t?{add:ao("add"),set:ao("set"),delete:ao("delete"),clear:ao("clear")}:{add(r){!e&&!fn(r)&&!wi(r)&&(r=Ze(r));const s=Ze(this);return oo(s).has.call(s,r)||(s.add(r),jn(s,"add",r,r)),this},set(r,s){!e&&!fn(s)&&!wi(s)&&(s=Ze(s));const o=Ze(this),{has:a,get:l}=oo(o);let u=a.call(o,r);u||(r=Ze(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?Ei(s,c)&&jn(o,"set",r,s):jn(o,"add",r,s),this},delete(r){const s=Ze(this),{has:o,get:a}=oo(s);let l=o.call(s,r);l||(r=Ze(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&jn(s,"delete",r,void 0),u},clear(){const r=Ze(this),s=r.size!==0,o=r.clear();return s&&jn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=z_(r,t,e)}),n}function Ru(t,e){const n=V_(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(nt(n,r)&&r in i?n:i,r,s)}const G_={get:Ru(!1,!1)},W_={get:Ru(!1,!0)},X_={get:Ru(!0,!1)};const _p=new WeakMap,vp=new WeakMap,xp=new WeakMap,$_=new WeakMap;function q_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function j_(t){return t.__v_skip||!Object.isExtensible(t)?0:q_(__(t))}function oi(t){return wi(t)?t:Cu(t,!1,B_,G_,_p)}function Zn(t){return Cu(t,!1,H_,W_,vp)}function yp(t){return Cu(t,!0,k_,X_,xp)}function Cu(t,e,n,i,r){if(!ft(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=j_(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function tr(t){return wi(t)?tr(t.__v_raw):!!(t&&t.__v_isReactive)}function wi(t){return!!(t&&t.__v_isReadonly)}function fn(t){return!!(t&&t.__v_isShallow)}function Pu(t){return t?!!t.__v_raw:!1}function Ze(t){const e=t&&t.__v_raw;return e?Ze(e):t}function Y_(t){return!nt(t,"__v_skip")&&Object.isExtensible(t)&&Qh(t,"__v_skip",!0),t}const Ot=t=>ft(t)?oi(t):t,jl=t=>ft(t)?yp(t):t;function Rt(t){return t?t.__v_isRef===!0:!1}function Mi(t){return Sp(t,!1)}function Us(t){return Sp(t,!0)}function Sp(t,e){return Rt(t)?t:new K_(t,e)}class K_{constructor(e,n){this.dep=new wa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ze(e),this._value=n?e:Ot(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||fn(e)||wi(e);e=i?e:Ze(e),Ei(e,n)&&(this._rawValue=e,this._value=i?e:Ot(e),this.dep.trigger())}}function ht(t){return Rt(t)?t.value:t}const Z_={get:(t,e,n)=>e==="__v_raw"?t:ht(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Rt(r)&&!Rt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Ep(t){return tr(t)?t:new Proxy(t,Z_)}class J_{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new wa,{get:i,set:r}=e(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}}function MP(t){return new J_(t)}function bP(t){const e=Fe(t)?new Array(t.length):{};for(const n in t)e[n]=Mp(t,n);return e}class Q_{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return I_(Ze(this._object),this._key)}}class ev{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function tv(t,e,n){return Rt(t)?t:ke(t)?new ev(t):ft(t)&&arguments.length>1?Mp(t,e,n):Mi(t)}function Mp(t,e,n){const i=t[e];return Rt(i)?i:new Q_(t,e,n)}class nv{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new wa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Is-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&lt!==this)return lp(this,!0),!0}get value(){const e=this.dep.track();return fp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function iv(t,e,n=!1){let i,r;return ke(t)?i=t:(i=t.get,r=t.set),new nv(i,r,n)}const lo={},na=new WeakMap;let $i;function rv(t,e=!1,n=$i){if(n){let i=na.get(n);i||na.set(n,i=[]),i.push(t)}}function sv(t,e,n=ct){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,u=_=>r?_:fn(_)||r===!1||r===0?yi(_,1):yi(_);let c,f,d,h,v=!1,x=!1;if(Rt(t)?(f=()=>t.value,v=fn(t)):tr(t)?(f=()=>u(t),v=!0):Fe(t)?(x=!0,v=t.some(_=>tr(_)||fn(_)),f=()=>t.map(_=>{if(Rt(_))return _.value;if(tr(_))return u(_);if(ke(_))return l?l(_,2):_()})):ke(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){Li();try{d()}finally{Ii()}}const _=$i;$i=c;try{return l?l(t,3,[h]):t(h)}finally{$i=_}}:f=Dn,e&&r){const _=f,R=r===!0?1/0:r;f=()=>yi(_(),R)}const m=sp(),p=()=>{c.stop(),m&&m.active&&Eu(m.effects,c)};if(s&&e){const _=e;e=(...R)=>{_(...R),p()}}let M=x?new Array(t.length).fill(lo):lo;const g=_=>{if(!(!(c.flags&1)||!c.dirty&&!_))if(e){const R=c.run();if(r||v||(x?R.some((A,C)=>Ei(A,M[C])):Ei(R,M))){d&&d();const A=$i;$i=c;try{const C=[R,M===lo?void 0:x&&M[0]===lo?[]:M,h];l?l(e,3,C):e(...C),M=R}finally{$i=A}}}else c.run()};return a&&a(g),c=new op(f),c.scheduler=o?()=>o(g,!1):g,h=_=>rv(_,!1,c),d=c.onStop=()=>{const _=na.get(c);if(_){if(l)l(_,4);else for(const R of _)R();na.delete(c)}},e?i?g(!0):M=c.run():o?o(g.bind(null,!0),!0):c.run(),p.pause=c.pause.bind(c),p.resume=c.resume.bind(c),p.stop=p,p}function yi(t,e=1/0,n){if(e<=0||!ft(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Rt(t))yi(t.value,e,n);else if(Fe(t))for(let i=0;i<t.length;i++)yi(t[i],e,n);else if(Kh(t)||Nr(t))t.forEach(i=>{yi(i,e,n)});else if(Jh(t)){for(const i in t)yi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&yi(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $s(t,e,n,i){try{return i?t(...i):t()}catch(r){is(r,e,n)}}function Tn(t,e,n,i){if(ke(t)){const r=$s(t,e,n,i);return r&&Mu(r)&&r.catch(s=>{is(s,e,n)}),r}if(Fe(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Tn(t[s],e,n,i));return r}}function is(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ct;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](t,l,u)===!1)return}a=a.parent}if(s){Li(),$s(s,null,10,[t,l,u]),Ii();return}}ov(t,n,r,i,o)}function ov(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const Vt=[];let Rn=-1;const Or=[];let mi=null,Rr=0;const bp=Promise.resolve();let ia=null;function qs(t){const e=ia||bp;return t?e.then(this?t.bind(this):t):e}function av(t){let e=Rn+1,n=Vt.length;for(;e<n;){const i=e+n>>>1,r=Vt[i],s=Ns(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Lu(t){if(!(t.flags&1)){const e=Ns(t),n=Vt[Vt.length-1];!n||!(t.flags&2)&&e>=Ns(n)?Vt.push(t):Vt.splice(av(e),0,t),t.flags|=1,Tp()}}function Tp(){ia||(ia=bp.then(Ap))}function Yl(t){Fe(t)?Or.push(...t):mi&&t.id===-1?mi.splice(Rr+1,0,t):t.flags&1||(Or.push(t),t.flags|=1),Tp()}function bf(t,e,n=Rn+1){for(;n<Vt.length;n++){const i=Vt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Vt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ra(t){if(Or.length){const e=[...new Set(Or)].sort((n,i)=>Ns(n)-Ns(i));if(Or.length=0,mi){mi.push(...e);return}for(mi=e,Rr=0;Rr<mi.length;Rr++){const n=mi[Rr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}mi=null,Rr=0}}const Ns=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Ap(t){try{for(Rn=0;Rn<Vt.length;Rn++){const e=Vt[Rn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$s(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Rn<Vt.length;Rn++){const e=Vt[Rn];e&&(e.flags&=-2)}Rn=-1,Vt.length=0,ra(),ia=null,(Vt.length||Or.length)&&Ap()}}let It=null,wp=null;function sa(t){const e=It;return It=t,wp=t&&t.type.__scopeId||null,e}function Rp(t,e=It,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Ff(-1);const s=sa(e);let o;try{o=t(...r)}finally{sa(s),i._d&&Ff(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Cn(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(Li(),Tn(l,n,8,[t.el,a,t,e]),Ii())}}const lv=Symbol("_vte"),Cp=t=>t.__isTeleport,gi=Symbol("_leaveCb"),co=Symbol("_enterCb");function cv(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Du(()=>{t.isMounted=!0}),Uu(()=>{t.isUnmounting=!0}),t}const sn=[Function,Array],Pp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:sn,onEnter:sn,onAfterEnter:sn,onEnterCancelled:sn,onBeforeLeave:sn,onLeave:sn,onAfterLeave:sn,onLeaveCancelled:sn,onBeforeAppear:sn,onAppear:sn,onAfterAppear:sn,onAppearCancelled:sn},Lp=t=>{const e=t.subTree;return e.component?Lp(e.component):e},uv={name:"BaseTransition",props:Pp,setup(t,{slots:e}){const n=Ks(),i=cv();return()=>{const r=e.default&&Up(e.default(),!0);if(!r||!r.length)return;const s=Ip(r),o=Ze(t),{mode:a}=o;if(i.isLeaving)return Za(s);const l=Tf(s);if(!l)return Za(s);let u=Kl(l,o,i,n,f=>u=f);l.type!==Mt&&Xr(l,u);let c=n.subTree&&Tf(n.subTree);if(c&&c.type!==Mt&&!xn(l,c)&&Lp(n).type!==Mt){let f=Kl(c,o,i,n);if(Xr(c,f),a==="out-in"&&l.type!==Mt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,c=void 0},Za(s);a==="in-out"&&l.type!==Mt?f.delayLeave=(d,h,v)=>{const x=Dp(i,c);x[String(c.key)]=c,d[gi]=()=>{h(),d[gi]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{v(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function Ip(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Mt){e=n;break}}return e}const fv=uv;function Dp(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Kl(t,e,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:v,onLeaveCancelled:x,onBeforeAppear:m,onAppear:p,onAfterAppear:M,onAppearCancelled:g}=e,_=String(t.key),R=Dp(n,t),A=(b,E)=>{b&&Tn(b,i,9,E)},C=(b,E)=>{const L=E[1];A(b,E),Fe(b)?b.every(D=>D.length<=1)&&L():b.length<=1&&L()},I={mode:o,persisted:a,beforeEnter(b){let E=l;if(!n.isMounted)if(s)E=m||l;else return;b[gi]&&b[gi](!0);const L=R[_];L&&xn(t,L)&&L.el[gi]&&L.el[gi](),A(E,[b])},enter(b){let E=u,L=c,D=f;if(!n.isMounted)if(s)E=p||u,L=M||c,D=g||f;else return;let N=!1;const j=b[co]=ne=>{N||(N=!0,ne?A(D,[b]):A(L,[b]),I.delayedLeave&&I.delayedLeave(),b[co]=void 0)};E?C(E,[b,j]):j()},leave(b,E){const L=String(t.key);if(b[co]&&b[co](!0),n.isUnmounting)return E();A(d,[b]);let D=!1;const N=b[gi]=j=>{D||(D=!0,E(),j?A(x,[b]):A(v,[b]),b[gi]=void 0,R[L]===t&&delete R[L])};R[L]=t,h?C(h,[b,N]):N()},clone(b){const E=Kl(b,e,n,i,r);return r&&r(E),E}};return I}function Za(t){if(js(t))return t=ni(t),t.children=null,t}function Tf(t){if(!js(t))return Cp(t.type)&&t.children?Ip(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ke(n.default))return n.default()}}function Xr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Xr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Up(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Lt?(o.patchFlag&128&&r++,i=i.concat(Up(o.children,e,a))):(e||o.type!==Mt)&&i.push(a!=null?ni(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function rs(t,e){return ke(t)?Et({name:t.name},e,{setup:t}):t}function Iu(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Fs(t,e,n,i,r=!1){if(Fe(t)){t.forEach((v,x)=>Fs(v,e&&(Fe(e)?e[x]:e),n,i,r));return}if(bi(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Fs(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Hu(i.component):i.el,o=r?null:s,{i:a,r:l}=t,u=e&&e.r,c=a.refs===ct?a.refs={}:a.refs,f=a.setupState,d=Ze(f),h=f===ct?()=>!1:v=>nt(d,v);if(u!=null&&u!==l&&(pt(u)?(c[u]=null,h(u)&&(f[u]=null)):Rt(u)&&(u.value=null)),ke(l))$s(l,a,12,[o,c]);else{const v=pt(l),x=Rt(l);if(v||x){const m=()=>{if(t.f){const p=v?h(l)?f[l]:c[l]:l.value;r?Fe(p)&&Eu(p,s):Fe(p)?p.includes(s)||p.push(s):v?(c[l]=[s],h(l)&&(f[l]=c[l])):(l.value=[s],t.k&&(c[t.k]=l.value))}else v?(c[l]=o,h(l)&&(f[l]=o)):x&&(l.value=o,t.k&&(c[t.k]=o))};o?(m.id=-1,Pt(m,n)):m()}}}let Af=!1;const hr=()=>{Af||(console.error("Hydration completed but contains mismatches."),Af=!0)},dv=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",hv=t=>t.namespaceURI.includes("MathML"),uo=t=>{if(t.nodeType===1){if(dv(t))return"svg";if(hv(t))return"mathml"}},Lr=t=>t.nodeType===8;function pv(t){const{mt:e,p:n,o:{patchProp:i,createText:r,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:u}}=t,c=(g,_)=>{if(!_.hasChildNodes()){n(null,g,_),ra(),_._vnode=g;return}f(_.firstChild,g,null,null,null),ra(),_._vnode=g},f=(g,_,R,A,C,I=!1)=>{I=I||!!_.dynamicChildren;const b=Lr(g)&&g.data==="[",E=()=>x(g,_,R,A,C,b),{type:L,ref:D,shapeFlag:N,patchFlag:j}=_;let ne=g.nodeType;_.el=g,j===-2&&(I=!1,_.dynamicChildren=null);let H=null;switch(L){case ir:ne!==3?_.children===""?(l(_.el=r(""),o(g),g),H=g):H=E():(g.data!==_.children&&(hr(),g.data=_.children),H=s(g));break;case Mt:M(g)?(H=s(g),p(_.el=g.content.firstChild,g,R)):ne!==8||b?H=E():H=s(g);break;case As:if(b&&(g=s(g),ne=g.nodeType),ne===1||ne===3){H=g;const ee=!_.children.length;for(let F=0;F<_.staticCount;F++)ee&&(_.children+=H.nodeType===1?H.outerHTML:H.data),F===_.staticCount-1&&(_.anchor=H),H=s(H);return b?s(H):H}else E();break;case Lt:b?H=v(g,_,R,A,C,I):H=E();break;default:if(N&1)(ne!==1||_.type.toLowerCase()!==g.tagName.toLowerCase())&&!M(g)?H=E():H=d(g,_,R,A,C,I);else if(N&6){_.slotScopeIds=C;const ee=o(g);if(b?H=m(g):Lr(g)&&g.data==="teleport start"?H=m(g,g.data,"teleport end"):H=s(g),e(_,ee,null,R,A,uo(ee),I),bi(_)&&!_.type.__asyncResolved){let F;b?(F=ut(Lt),F.anchor=H?H.previousSibling:ee.lastChild):F=g.nodeType===3?Bu(""):ut("div"),F.el=g,_.component.subTree=F}}else N&64?ne!==8?H=E():H=_.type.hydrate(g,_,R,A,C,I,t,h):N&128&&(H=_.type.hydrate(g,_,R,A,uo(o(g)),C,I,t,f))}return D!=null&&Fs(D,null,A,_),H},d=(g,_,R,A,C,I)=>{I=I||!!_.dynamicChildren;const{type:b,props:E,patchFlag:L,shapeFlag:D,dirs:N,transition:j}=_,ne=b==="input"||b==="option";if(ne||L!==-1){N&&Cn(_,null,R,"created");let H=!1;if(M(g)){H=nm(null,j)&&R&&R.vnode.props&&R.vnode.props.appear;const F=g.content.firstChild;H&&j.beforeEnter(F),p(F,g,R),_.el=g=F}if(D&16&&!(E&&(E.innerHTML||E.textContent))){let F=h(g.firstChild,_,g,R,A,C,I);for(;F;){fo(g,1)||hr();const de=F;F=F.nextSibling,a(de)}}else if(D&8){let F=_.children;F[0]===`
`&&(g.tagName==="PRE"||g.tagName==="TEXTAREA")&&(F=F.slice(1)),g.textContent!==F&&(fo(g,0)||hr(),g.textContent=_.children)}if(E){if(ne||!I||L&48){const F=g.tagName.includes("-");for(const de in E)(ne&&(de.endsWith("value")||de==="indeterminate")||Ws(de)&&!Fr(de)||de[0]==="."||F)&&i(g,de,null,E[de],void 0,R)}else if(E.onClick)i(g,"onClick",null,E.onClick,void 0,R);else if(L&4&&tr(E.style))for(const F in E.style)E.style[F]}let ee;(ee=E&&E.onVnodeBeforeMount)&&$t(ee,R,_),N&&Cn(_,null,R,"beforeMount"),((ee=E&&E.onVnodeMounted)||N||H)&&cm(()=>{ee&&$t(ee,R,_),H&&j.enter(g),N&&Cn(_,null,R,"mounted")},A)}return g.nextSibling},h=(g,_,R,A,C,I,b)=>{b=b||!!_.dynamicChildren;const E=_.children,L=E.length;for(let D=0;D<L;D++){const N=b?E[D]:E[D]=Qt(E[D]),j=N.type===ir;g?(j&&!b&&D+1<L&&Qt(E[D+1]).type===ir&&(l(r(g.data.slice(N.children.length)),R,s(g)),g.data=N.children),g=f(g,N,A,C,I,b)):j&&!N.children?l(N.el=r(""),R):(fo(R,1)||hr(),n(null,N,R,null,A,C,uo(R),I))}return g},v=(g,_,R,A,C,I)=>{const{slotScopeIds:b}=_;b&&(C=C?C.concat(b):b);const E=o(g),L=h(s(g),_,E,R,A,C,I);return L&&Lr(L)&&L.data==="]"?s(_.anchor=L):(hr(),l(_.anchor=u("]"),E,L),L)},x=(g,_,R,A,C,I)=>{if(fo(g.parentElement,1)||hr(),_.el=null,I){const L=m(g);for(;;){const D=s(g);if(D&&D!==L)a(D);else break}}const b=s(g),E=o(g);return a(g),n(null,_,E,b,R,A,uo(E),C),R&&(R.vnode.el=_.el,La(R,_.el)),b},m=(g,_="[",R="]")=>{let A=0;for(;g;)if(g=s(g),g&&Lr(g)&&(g.data===_&&A++,g.data===R)){if(A===0)return s(g);A--}return g},p=(g,_,R)=>{const A=_.parentNode;A&&A.replaceChild(g,_);let C=R;for(;C;)C.vnode.el===_&&(C.vnode.el=C.subTree.el=g),C=C.parent},M=g=>g.nodeType===1&&g.tagName==="TEMPLATE";return[c,f]}const wf="data-allow-mismatch",mv={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function fo(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(wf);)t=t.parentElement;const n=t&&t.getAttribute(wf);if(n==null)return!1;if(n==="")return!0;{const i=n.split(",");return e===0&&i.includes("children")?!0:n.split(",").includes(mv[e])}}ba().requestIdleCallback;ba().cancelIdleCallback;function gv(t,e){if(Lr(t)&&t.data==="["){let n=1,i=t.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(Lr(i))if(i.data==="]"){if(--n===0)break}else i.data==="["&&n++;i=i.nextSibling}}else e(t)}const bi=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function Xe(t){ke(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:r=200,hydrate:s,timeout:o,suspensible:a=!0,onError:l}=t;let u=null,c,f=0;const d=()=>(f++,u=null,h()),h=()=>{let v;return u||(v=u=e().catch(x=>{if(x=x instanceof Error?x:new Error(String(x)),l)return new Promise((m,p)=>{l(x,()=>m(d()),()=>p(x),f+1)});throw x}).then(x=>v!==u&&u?u:(x&&(x.__esModule||x[Symbol.toStringTag]==="Module")&&(x=x.default),c=x,x)))};return rs({name:"AsyncComponentWrapper",__asyncLoader:h,__asyncHydrate(v,x,m){const p=s?()=>{const M=s(m,g=>gv(v,g));M&&(x.bum||(x.bum=[])).push(M)}:m;c?p():h().then(()=>!x.isUnmounted&&p())},get __asyncResolved(){return c},setup(){const v=bt;if(Iu(v),c)return()=>Ja(c,v);const x=g=>{u=null,is(g,v,13,!i)};if(a&&v.suspense||qr)return h().then(g=>()=>Ja(g,v)).catch(g=>(x(g),()=>i?ut(i,{error:g}):null));const m=Mi(!1),p=Mi(),M=Mi(!!r);return r&&setTimeout(()=>{M.value=!1},r),o!=null&&setTimeout(()=>{if(!m.value&&!p.value){const g=new Error(`Async component timed out after ${o}ms.`);x(g),p.value=g}},o),h().then(()=>{m.value=!0,v.parent&&js(v.parent.vnode)&&v.parent.update()}).catch(g=>{x(g),p.value=g}),()=>{if(m.value&&c)return Ja(c,v);if(p.value&&i)return ut(i,{error:p.value});if(n&&!M.value)return ut(n)}}})}function Ja(t,e){const{ref:n,props:i,children:r,ce:s}=e.vnode,o=ut(t,i,r);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const js=t=>t.type.__isKeepAlive,_v={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=Ks(),i=n.ctx;if(!i.renderer)return()=>{const M=e.default&&e.default();return M&&M.length===1?M[0]:M};const r=new Map,s=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:c,o:{createElement:f}}}=i,d=f("div");i.activate=(M,g,_,R,A)=>{const C=M.component;u(M,g,_,0,a),l(C.vnode,M,g,_,C,a,R,M.slotScopeIds,A),Pt(()=>{C.isDeactivated=!1,C.a&&Es(C.a);const I=M.props&&M.props.onVnodeMounted;I&&$t(I,C.parent,M)},a)},i.deactivate=M=>{const g=M.component;aa(g.m),aa(g.a),u(M,d,null,1,a),Pt(()=>{g.da&&Es(g.da);const _=M.props&&M.props.onVnodeUnmounted;_&&$t(_,g.parent,M),g.isDeactivated=!0},a)};function h(M){Qa(M),c(M,n,a,!0)}function v(M){r.forEach((g,_)=>{const R=sc(g.type);R&&!M(R)&&x(_)})}function x(M){const g=r.get(M);g&&(!o||!xn(g,o))?h(g):o&&Qa(o),r.delete(M),s.delete(M)}kr(()=>[t.include,t.exclude],([M,g])=>{M&&v(_=>xs(M,_)),g&&v(_=>!xs(g,_))},{flush:"post",deep:!0});let m=null;const p=()=>{m!=null&&(la(n.subTree.type)?Pt(()=>{r.set(m,ho(n.subTree))},n.subTree.suspense):r.set(m,ho(n.subTree)))};return Du(p),Fp(p),Uu(()=>{r.forEach(M=>{const{subTree:g,suspense:_}=n,R=ho(g);if(M.type===R.type&&M.key===R.key){Qa(R);const A=R.component.da;A&&Pt(A,_);return}h(M)})}),()=>{if(m=null,!e.default)return o=null;const M=e.default(),g=M[0];if(M.length>1)return o=null,M;if(!sr(g)||!(g.shapeFlag&4)&&!(g.shapeFlag&128))return o=null,g;let _=ho(g);if(_.type===Mt)return o=null,_;const R=_.type,A=sc(bi(_)?_.type.__asyncResolved||{}:R),{include:C,exclude:I,max:b}=t;if(C&&(!A||!xs(C,A))||I&&A&&xs(I,A))return _.shapeFlag&=-257,o=_,g;const E=_.key==null?R:_.key,L=r.get(E);return _.el&&(_=ni(_),g.shapeFlag&128&&(g.ssContent=_)),m=E,L?(_.el=L.el,_.component=L.component,_.transition&&Xr(_,_.transition),_.shapeFlag|=512,s.delete(E),s.add(E)):(s.add(E),b&&s.size>parseInt(b,10)&&x(s.values().next().value)),_.shapeFlag|=256,o=_,la(g.type)?g:_}}},vv=_v;function xs(t,e){return Fe(t)?t.some(n=>xs(n,e)):pt(t)?t.split(",").includes(e):g_(t)?(t.lastIndex=0,t.test(e)):!1}function xv(t,e){Np(t,"a",e)}function yv(t,e){Np(t,"da",e)}function Np(t,e,n=bt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ca(e,i,n),n){let r=n.parent;for(;r&&r.parent;)js(r.parent.vnode)&&Sv(i,e,n,r),r=r.parent}}function Sv(t,e,n,i){const r=Ca(e,t,i,!0);Op(()=>{Eu(i[e],r)},n)}function Qa(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function ho(t){return t.shapeFlag&128?t.ssContent:t}function Ca(t,e,n=bt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{Li();const a=or(n),l=Tn(e,n,t,o);return a(),Ii(),l});return i?r.unshift(s):r.push(s),s}}const ai=t=>(e,n=bt)=>{(!qr||t==="sp")&&Ca(t,(...i)=>e(...i),n)},Ev=ai("bm"),Du=ai("m"),Mv=ai("bu"),Fp=ai("u"),Uu=ai("bum"),Op=ai("um"),bv=ai("sp"),Tv=ai("rtg"),Av=ai("rtc");function Bp(t,e=bt){Ca("ec",t,e)}const kp="components";function TP(t,e){return zp(kp,t,!0,e)||t}const Hp=Symbol.for("v-ndc");function wv(t){return pt(t)?zp(kp,t,!1)||t:t||Hp}function zp(t,e,n=!0,i=!1){const r=It||bt;if(r){const s=r.type;{const a=sc(s,!1);if(a&&(a===e||a===dn(e)||a===Ma(dn(e))))return s}const o=Rf(r[t]||s[t],e)||Rf(r.appContext[t],e);return!o&&i?s:o}}function Rf(t,e){return t&&(t[e]||t[dn(e)]||t[Ma(dn(e))])}function AP(t,e,n,i){let r;const s=n,o=Fe(t);if(o||pt(t)){const a=o&&tr(t);let l=!1;a&&(l=!fn(t),t=Ra(t)),r=new Array(t.length);for(let u=0,c=t.length;u<c;u++)r[u]=e(l?Ot(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(ft(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=e(t[c],c,l,s)}}else r=[];return r}function wP(t,e,n={},i,r){if(It.ce||It.parent&&bi(It.parent)&&It.parent.ce)return Gt(),Yn(Lt,null,[ut("slot",n,i)],64);let s=t[e];s&&s._c&&(s._d=!1),Gt();const o=s&&Vp(s(n)),a=n.key||o&&o.key,l=Yn(Lt,{key:(a&&!si(a)?a:`_${e}`)+""},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function Vp(t){return t.some(e=>sr(e)?!(e.type===Mt||e.type===Lt&&!Vp(e.children)):!0)?t:null}const Zl=t=>t?pm(t)?Hu(t):Zl(t.parent):null,Ts=Et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Zl(t.parent),$root:t=>Zl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Nu(t),$forceUpdate:t=>t.f||(t.f=()=>{Lu(t.update)}),$nextTick:t=>t.n||(t.n=qs.bind(t.proxy)),$watch:t=>jv.bind(t)}),el=(t,e)=>t!==ct&&!t.__isScriptSetup&&nt(t,e),Rv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(el(i,e))return o[e]=1,i[e];if(r!==ct&&nt(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&nt(u,e))return o[e]=3,s[e];if(n!==ct&&nt(n,e))return o[e]=4,n[e];Jl&&(o[e]=0)}}const c=Ts[e];let f,d;if(c)return e==="$attrs"&&Ft(t.attrs,"get",""),c(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==ct&&nt(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,nt(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return el(r,e)?(r[e]=n,!0):i!==ct&&nt(i,e)?(i[e]=n,!0):nt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==ct&&nt(t,o)||el(e,o)||(a=s[0])&&nt(a,o)||nt(i,o)||nt(Ts,o)||nt(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:nt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function RP(){return Cv().slots}function Cv(){const t=Ks();return t.setupContext||(t.setupContext=gm(t))}function Cf(t){return Fe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}function CP(t){const e=Ks();let n=t();return ic(),Mu(n)&&(n=n.catch(i=>{throw or(e),i})),[n,()=>or(e)]}let Jl=!0;function Pv(t){const e=Nu(t),n=t.proxy,i=t.ctx;Jl=!1,e.beforeCreate&&Pf(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:f,mounted:d,beforeUpdate:h,updated:v,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:g,unmounted:_,render:R,renderTracked:A,renderTriggered:C,errorCaptured:I,serverPrefetch:b,expose:E,inheritAttrs:L,components:D,directives:N,filters:j}=e;if(u&&Lv(u,i,null),o)for(const ee in o){const F=o[ee];ke(F)&&(i[ee]=F.bind(n))}if(r){const ee=r.call(n,n);ft(ee)&&(t.data=oi(ee))}if(Jl=!0,s)for(const ee in s){const F=s[ee],de=ke(F)?F.bind(n,n):ke(F.get)?F.get.bind(n,n):Dn,ve=!ke(F)&&ke(F.set)?F.set.bind(n):Dn,Ae=yn({get:de,set:ve});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>Ae.value,set:Le=>Ae.value=Le})}if(a)for(const ee in a)Gp(a[ee],i,n,ee);if(l){const ee=ke(l)?l.call(n):l;Reflect.ownKeys(ee).forEach(F=>{Br(F,ee[F])})}c&&Pf(c,t,"c");function H(ee,F){Fe(F)?F.forEach(de=>ee(de.bind(n))):F&&ee(F.bind(n))}if(H(Ev,f),H(Du,d),H(Mv,h),H(Fp,v),H(xv,x),H(yv,m),H(Bp,I),H(Av,A),H(Tv,C),H(Uu,M),H(Op,_),H(bv,b),Fe(E))if(E.length){const ee=t.exposed||(t.exposed={});E.forEach(F=>{Object.defineProperty(ee,F,{get:()=>n[F],set:de=>n[F]=de})})}else t.exposed||(t.exposed={});R&&t.render===Dn&&(t.render=R),L!=null&&(t.inheritAttrs=L),D&&(t.components=D),N&&(t.directives=N),b&&Iu(t)}function Lv(t,e,n=Dn){Fe(t)&&(t=Ql(t));for(const i in t){const r=t[i];let s;ft(r)?"default"in r?s=en(r.from||i,r.default,!0):s=en(r.from||i):s=en(r),Rt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Pf(t,e,n){Tn(Fe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Gp(t,e,n,i){let r=i.includes(".")?sm(n,i):()=>n[i];if(pt(t)){const s=e[t];ke(s)&&kr(r,s)}else if(ke(t))kr(r,t.bind(n));else if(ft(t))if(Fe(t))t.forEach(s=>Gp(s,e,n,i));else{const s=ke(t.handler)?t.handler.bind(n):e[t.handler];ke(s)&&kr(r,s,t)}}function Nu(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(u=>oa(l,u,o,!0)),oa(l,e,o)),ft(e)&&s.set(e,l),l}function oa(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&oa(t,s,n,!0),r&&r.forEach(o=>oa(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Iv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Iv={data:Lf,props:If,emits:If,methods:ys,computed:ys,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:ys,directives:ys,watch:Uv,provide:Lf,inject:Dv};function Lf(t,e){return e?t?function(){return Et(ke(t)?t.call(this,this):t,ke(e)?e.call(this,this):e)}:e:t}function Dv(t,e){return ys(Ql(t),Ql(e))}function Ql(t){if(Fe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function kt(t,e){return t?[...new Set([].concat(t,e))]:e}function ys(t,e){return t?Et(Object.create(null),t,e):e}function If(t,e){return t?Fe(t)&&Fe(e)?[...new Set([...t,...e])]:Et(Object.create(null),Cf(t),Cf(e??{})):e}function Uv(t,e){if(!t)return e;if(!e)return t;const n=Et(Object.create(null),t);for(const i in e)n[i]=kt(t[i],e[i]);return n}function Wp(){return{app:null,config:{isNativeTag:p_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nv=0;function Fv(t,e){return function(i,r=null){ke(i)||(i=Et({},i)),r!=null&&!ft(r)&&(r=null);const s=Wp(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:Nv++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:_m,get config(){return s.config},set config(c){},use(c,...f){return o.has(c)||(c&&ke(c.install)?(o.add(c),c.install(u,...f)):ke(c)&&(o.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,d){if(!l){const h=u._ceVNode||ut(i,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),f&&e?e(h,c):t(h,c,d),l=!0,u._container=c,c.__vue_app__=u,Hu(h.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Tn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=nr;nr=u;try{return c()}finally{nr=f}}};return u}}let nr=null;function Br(t,e){if(bt){let n=bt.provides;const i=bt.parent&&bt.parent.provides;i===n&&(n=bt.provides=Object.create(i)),n[t]=e}}function en(t,e,n=!1){const i=bt||It;if(i||nr){const r=nr?nr._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&ke(e)?e.call(i&&i.proxy):e}}function Xp(){return!!(bt||It||nr)}const $p={},qp=()=>Object.create($p),jp=t=>Object.getPrototypeOf(t)===$p;function Ov(t,e,n,i=!1){const r={},s=qp();t.propsDefaults=Object.create(null),Yp(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Zn(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Bv(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=Ze(r),[l]=t.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=t.vnode.dynamicProps;for(let f=0;f<c.length;f++){let d=c[f];if(Pa(t.emitsOptions,d))continue;const h=e[d];if(l)if(nt(s,d))h!==s[d]&&(s[d]=h,u=!0);else{const v=dn(d);r[v]=ec(l,a,v,h,t,!1)}else h!==s[d]&&(s[d]=h,u=!0)}}}else{Yp(t,e,r,s)&&(u=!0);let c;for(const f in a)(!e||!nt(e,f)&&((c=cr(f))===f||!nt(e,c)))&&(l?n&&(n[f]!==void 0||n[c]!==void 0)&&(r[f]=ec(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!nt(e,f))&&(delete s[f],u=!0)}u&&jn(t.attrs,"set","")}function Yp(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Fr(l))continue;const u=e[l];let c;r&&nt(r,c=dn(l))?!s||!s.includes(c)?n[c]=u:(a||(a={}))[c]=u:Pa(t.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=Ze(n),u=a||ct;for(let c=0;c<s.length;c++){const f=s[c];n[f]=ec(r,l,f,u[f],t,!nt(u,f))}}return o}function ec(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=nt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ke(l)){const{propsDefaults:u}=r;if(n in u)i=u[n];else{const c=or(r);i=u[n]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===cr(n))&&(i=!0))}return i}const kv=new WeakMap;function Kp(t,e,n=!1){const i=n?kv:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!ke(t)){const c=f=>{l=!0;const[d,h]=Kp(f,e,!0);Et(o,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!s&&!l)return ft(t)&&i.set(t,Ur),Ur;if(Fe(s))for(let c=0;c<s.length;c++){const f=dn(s[c]);Df(f)&&(o[f]=ct)}else if(s)for(const c in s){const f=dn(c);if(Df(f)){const d=s[c],h=o[f]=Fe(d)||ke(d)?{type:d}:Et({},d),v=h.type;let x=!1,m=!0;if(Fe(v))for(let p=0;p<v.length;++p){const M=v[p],g=ke(M)&&M.name;if(g==="Boolean"){x=!0;break}else g==="String"&&(m=!1)}else x=ke(v)&&v.name==="Boolean";h[0]=x,h[1]=m,(x||nt(h,"default"))&&a.push(f)}}const u=[o,a];return ft(t)&&i.set(t,u),u}function Df(t){return t[0]!=="$"&&!Fr(t)}const Zp=t=>t[0]==="_"||t==="$stable",Fu=t=>Fe(t)?t.map(Qt):[Qt(t)],Hv=(t,e,n)=>{if(e._n)return e;const i=Rp((...r)=>Fu(e(...r)),n);return i._c=!1,i},Jp=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Zp(r))continue;const s=t[r];if(ke(s))e[r]=Hv(r,s,i);else if(s!=null){const o=Fu(s);e[r]=()=>o}}},Qp=(t,e)=>{const n=Fu(e);t.slots.default=()=>n},em=(t,e,n)=>{for(const i in e)(n||i!=="_")&&(t[i]=e[i])},zv=(t,e,n)=>{const i=t.slots=qp();if(t.vnode.shapeFlag&32){const r=e._;r?(em(i,e,n),n&&Qh(i,"_",r,!0)):Jp(e,i)}else e&&Qp(t,e)},Vv=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=ct;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:em(r,e,n):(s=!e.$stable,Jp(e,r)),o=e}else e&&(Qp(t,e),o={default:1});if(s)for(const a in r)!Zp(a)&&o[a]==null&&delete r[a]},Pt=cm;function Gv(t){return tm(t)}function Wv(t){return tm(t,pv)}function tm(t,e){const n=ba();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:d,setScopeId:h=Dn,insertStaticContent:v}=t,x=(P,S,G,J=null,$=null,q=null,le=void 0,Q=null,T=!!S.dynamicChildren)=>{if(P===S)return;P&&!xn(P,S)&&(J=O(P),Le(P,$,q,!0),P=null),S.patchFlag===-2&&(T=!1,S.dynamicChildren=null);const{type:y,ref:U,shapeFlag:z}=S;switch(y){case ir:m(P,S,G,J);break;case Mt:p(P,S,G,J);break;case As:P==null&&M(S,G,J,le);break;case Lt:D(P,S,G,J,$,q,le,Q,T);break;default:z&1?R(P,S,G,J,$,q,le,Q,T):z&6?N(P,S,G,J,$,q,le,Q,T):(z&64||z&128)&&y.process(P,S,G,J,$,q,le,Q,T,ue)}U!=null&&$&&Fs(U,P&&P.ref,q,S||P,!S)},m=(P,S,G,J)=>{if(P==null)i(S.el=a(S.children),G,J);else{const $=S.el=P.el;S.children!==P.children&&u($,S.children)}},p=(P,S,G,J)=>{P==null?i(S.el=l(S.children||""),G,J):S.el=P.el},M=(P,S,G,J)=>{[P.el,P.anchor]=v(P.children,S,G,J,P.el,P.anchor)},g=({el:P,anchor:S},G,J)=>{let $;for(;P&&P!==S;)$=d(P),i(P,G,J),P=$;i(S,G,J)},_=({el:P,anchor:S})=>{let G;for(;P&&P!==S;)G=d(P),r(P),P=G;r(S)},R=(P,S,G,J,$,q,le,Q,T)=>{S.type==="svg"?le="svg":S.type==="math"&&(le="mathml"),P==null?A(S,G,J,$,q,le,Q,T):b(P,S,$,q,le,Q,T)},A=(P,S,G,J,$,q,le,Q)=>{let T,y;const{props:U,shapeFlag:z,transition:X,dirs:W}=P;if(T=P.el=o(P.type,q,U&&U.is,U),z&8?c(T,P.children):z&16&&I(P.children,T,null,J,$,tl(P,q),le,Q),W&&Cn(P,null,J,"created"),C(T,P,P.scopeId,le,J),U){for(const ce in U)ce!=="value"&&!Fr(ce)&&s(T,ce,null,U[ce],q,J);"value"in U&&s(T,"value",null,U.value,q),(y=U.onVnodeBeforeMount)&&$t(y,J,P)}W&&Cn(P,null,J,"beforeMount");const he=nm($,X);he&&X.beforeEnter(T),i(T,S,G),((y=U&&U.onVnodeMounted)||he||W)&&Pt(()=>{y&&$t(y,J,P),he&&X.enter(T),W&&Cn(P,null,J,"mounted")},$)},C=(P,S,G,J,$)=>{if(G&&h(P,G),J)for(let q=0;q<J.length;q++)h(P,J[q]);if($){let q=$.subTree;if(S===q||la(q.type)&&(q.ssContent===S||q.ssFallback===S)){const le=$.vnode;C(P,le,le.scopeId,le.slotScopeIds,$.parent)}}},I=(P,S,G,J,$,q,le,Q,T=0)=>{for(let y=T;y<P.length;y++){const U=P[y]=Q?_i(P[y]):Qt(P[y]);x(null,U,S,G,J,$,q,le,Q)}},b=(P,S,G,J,$,q,le)=>{const Q=S.el=P.el;let{patchFlag:T,dynamicChildren:y,dirs:U}=S;T|=P.patchFlag&16;const z=P.props||ct,X=S.props||ct;let W;if(G&&Fi(G,!1),(W=X.onVnodeBeforeUpdate)&&$t(W,G,S,P),U&&Cn(S,P,G,"beforeUpdate"),G&&Fi(G,!0),(z.innerHTML&&X.innerHTML==null||z.textContent&&X.textContent==null)&&c(Q,""),y?E(P.dynamicChildren,y,Q,G,J,tl(S,$),q):le||F(P,S,Q,null,G,J,tl(S,$),q,!1),T>0){if(T&16)L(Q,z,X,G,$);else if(T&2&&z.class!==X.class&&s(Q,"class",null,X.class,$),T&4&&s(Q,"style",z.style,X.style,$),T&8){const he=S.dynamicProps;for(let ce=0;ce<he.length;ce++){const fe=he[ce],Be=z[fe],ae=X[fe];(ae!==Be||fe==="value")&&s(Q,fe,Be,ae,$,G)}}T&1&&P.children!==S.children&&c(Q,S.children)}else!le&&y==null&&L(Q,z,X,G,$);((W=X.onVnodeUpdated)||U)&&Pt(()=>{W&&$t(W,G,S,P),U&&Cn(S,P,G,"updated")},J)},E=(P,S,G,J,$,q,le)=>{for(let Q=0;Q<S.length;Q++){const T=P[Q],y=S[Q],U=T.el&&(T.type===Lt||!xn(T,y)||T.shapeFlag&70)?f(T.el):G;x(T,y,U,null,J,$,q,le,!0)}},L=(P,S,G,J,$)=>{if(S!==G){if(S!==ct)for(const q in S)!Fr(q)&&!(q in G)&&s(P,q,S[q],null,$,J);for(const q in G){if(Fr(q))continue;const le=G[q],Q=S[q];le!==Q&&q!=="value"&&s(P,q,Q,le,$,J)}"value"in G&&s(P,"value",S.value,G.value,$)}},D=(P,S,G,J,$,q,le,Q,T)=>{const y=S.el=P?P.el:a(""),U=S.anchor=P?P.anchor:a("");let{patchFlag:z,dynamicChildren:X,slotScopeIds:W}=S;W&&(Q=Q?Q.concat(W):W),P==null?(i(y,G,J),i(U,G,J),I(S.children||[],G,U,$,q,le,Q,T)):z>0&&z&64&&X&&P.dynamicChildren?(E(P.dynamicChildren,X,G,$,q,le,Q),(S.key!=null||$&&S===$.subTree)&&im(P,S,!0)):F(P,S,G,U,$,q,le,Q,T)},N=(P,S,G,J,$,q,le,Q,T)=>{S.slotScopeIds=Q,P==null?S.shapeFlag&512?$.ctx.activate(S,G,J,le,T):j(S,G,J,$,q,le,T):ne(P,S,T)},j=(P,S,G,J,$,q,le)=>{const Q=P.component=f0(P,J,$);if(js(P)&&(Q.ctx.renderer=ue),d0(Q,!1,le),Q.asyncDep){if($&&$.registerDep(Q,H,le),!P.el){const T=Q.subTree=ut(Mt);p(null,T,S,G)}}else H(Q,P,S,G,$,q,le)},ne=(P,S,G)=>{const J=S.component=P.component;if(e0(P,S,G))if(J.asyncDep&&!J.asyncResolved){ee(J,S,G);return}else J.next=S,J.update();else S.el=P.el,J.vnode=S},H=(P,S,G,J,$,q,le)=>{const Q=()=>{if(P.isMounted){let{next:z,bu:X,u:W,parent:he,vnode:ce}=P;{const we=rm(P);if(we){z&&(z.el=ce.el,ee(P,z,le)),we.asyncDep.then(()=>{P.isUnmounted||Q()});return}}let fe=z,Be;Fi(P,!1),z?(z.el=ce.el,ee(P,z,le)):z=ce,X&&Es(X),(Be=z.props&&z.props.onVnodeBeforeUpdate)&&$t(Be,he,z,ce),Fi(P,!0);const ae=nl(P),ge=P.subTree;P.subTree=ae,x(ge,ae,f(ge.el),O(ge),P,$,q),z.el=ae.el,fe===null&&La(P,ae.el),W&&Pt(W,$),(Be=z.props&&z.props.onVnodeUpdated)&&Pt(()=>$t(Be,he,z,ce),$)}else{let z;const{el:X,props:W}=S,{bm:he,m:ce,parent:fe,root:Be,type:ae}=P,ge=bi(S);if(Fi(P,!1),he&&Es(he),!ge&&(z=W&&W.onVnodeBeforeMount)&&$t(z,fe,S),Fi(P,!0),X&&Ce){const we=()=>{P.subTree=nl(P),Ce(X,P.subTree,P,$,null)};ge&&ae.__asyncHydrate?ae.__asyncHydrate(X,P,we):we()}else{Be.ce&&Be.ce._injectChildStyle(ae);const we=P.subTree=nl(P);x(null,we,G,J,P,$,q),S.el=we.el}if(ce&&Pt(ce,$),!ge&&(z=W&&W.onVnodeMounted)){const we=S;Pt(()=>$t(z,fe,we),$)}(S.shapeFlag&256||fe&&bi(fe.vnode)&&fe.vnode.shapeFlag&256)&&P.a&&Pt(P.a,$),P.isMounted=!0,S=G=J=null}};P.scope.on();const T=P.effect=new op(Q);P.scope.off();const y=P.update=T.run.bind(T),U=P.job=T.runIfDirty.bind(T);U.i=P,U.id=P.uid,T.scheduler=()=>Lu(U),Fi(P,!0),y()},ee=(P,S,G)=>{S.component=P;const J=P.vnode.props;P.vnode=S,P.next=null,Bv(P,S.props,J,G),Vv(P,S.children,G),Li(),bf(P),Ii()},F=(P,S,G,J,$,q,le,Q,T=!1)=>{const y=P&&P.children,U=P?P.shapeFlag:0,z=S.children,{patchFlag:X,shapeFlag:W}=S;if(X>0){if(X&128){ve(y,z,G,J,$,q,le,Q,T);return}else if(X&256){de(y,z,G,J,$,q,le,Q,T);return}}W&8?(U&16&&Se(y,$,q),z!==y&&c(G,z)):U&16?W&16?ve(y,z,G,J,$,q,le,Q,T):Se(y,$,q,!0):(U&8&&c(G,""),W&16&&I(z,G,J,$,q,le,Q,T))},de=(P,S,G,J,$,q,le,Q,T)=>{P=P||Ur,S=S||Ur;const y=P.length,U=S.length,z=Math.min(y,U);let X;for(X=0;X<z;X++){const W=S[X]=T?_i(S[X]):Qt(S[X]);x(P[X],W,G,null,$,q,le,Q,T)}y>U?Se(P,$,q,!0,!1,z):I(S,G,J,$,q,le,Q,T,z)},ve=(P,S,G,J,$,q,le,Q,T)=>{let y=0;const U=S.length;let z=P.length-1,X=U-1;for(;y<=z&&y<=X;){const W=P[y],he=S[y]=T?_i(S[y]):Qt(S[y]);if(xn(W,he))x(W,he,G,null,$,q,le,Q,T);else break;y++}for(;y<=z&&y<=X;){const W=P[z],he=S[X]=T?_i(S[X]):Qt(S[X]);if(xn(W,he))x(W,he,G,null,$,q,le,Q,T);else break;z--,X--}if(y>z){if(y<=X){const W=X+1,he=W<U?S[W].el:J;for(;y<=X;)x(null,S[y]=T?_i(S[y]):Qt(S[y]),G,he,$,q,le,Q,T),y++}}else if(y>X)for(;y<=z;)Le(P[y],$,q,!0),y++;else{const W=y,he=y,ce=new Map;for(y=he;y<=X;y++){const Oe=S[y]=T?_i(S[y]):Qt(S[y]);Oe.key!=null&&ce.set(Oe.key,y)}let fe,Be=0;const ae=X-he+1;let ge=!1,we=0;const De=new Array(ae);for(y=0;y<ae;y++)De[y]=0;for(y=W;y<=z;y++){const Oe=P[y];if(Be>=ae){Le(Oe,$,q,!0);continue}let Ue;if(Oe.key!=null)Ue=ce.get(Oe.key);else for(fe=he;fe<=X;fe++)if(De[fe-he]===0&&xn(Oe,S[fe])){Ue=fe;break}Ue===void 0?Le(Oe,$,q,!0):(De[Ue-he]=y+1,Ue>=we?we=Ue:ge=!0,x(Oe,S[Ue],G,null,$,q,le,Q,T),Be++)}const be=ge?Xv(De):Ur;for(fe=be.length-1,y=ae-1;y>=0;y--){const Oe=he+y,Ue=S[Oe],rt=Oe+1<U?S[Oe+1].el:J;De[y]===0?x(null,Ue,G,rt,$,q,le,Q,T):ge&&(fe<0||y!==be[fe]?Ae(Ue,G,rt,2):fe--)}}},Ae=(P,S,G,J,$=null)=>{const{el:q,type:le,transition:Q,children:T,shapeFlag:y}=P;if(y&6){Ae(P.component.subTree,S,G,J);return}if(y&128){P.suspense.move(S,G,J);return}if(y&64){le.move(P,S,G,ue);return}if(le===Lt){i(q,S,G);for(let z=0;z<T.length;z++)Ae(T[z],S,G,J);i(P.anchor,S,G);return}if(le===As){g(P,S,G);return}if(J!==2&&y&1&&Q)if(J===0)Q.beforeEnter(q),i(q,S,G),Pt(()=>Q.enter(q),$);else{const{leave:z,delayLeave:X,afterLeave:W}=Q,he=()=>i(q,S,G),ce=()=>{z(q,()=>{he(),W&&W()})};X?X(q,he,ce):ce()}else i(q,S,G)},Le=(P,S,G,J=!1,$=!1)=>{const{type:q,props:le,ref:Q,children:T,dynamicChildren:y,shapeFlag:U,patchFlag:z,dirs:X,cacheIndex:W}=P;if(z===-2&&($=!1),Q!=null&&Fs(Q,null,G,P,!0),W!=null&&(S.renderCache[W]=void 0),U&256){S.ctx.deactivate(P);return}const he=U&1&&X,ce=!bi(P);let fe;if(ce&&(fe=le&&le.onVnodeBeforeUnmount)&&$t(fe,S,P),U&6)me(P.component,G,J);else{if(U&128){P.suspense.unmount(G,J);return}he&&Cn(P,null,S,"beforeUnmount"),U&64?P.type.remove(P,S,G,ue,J):y&&!y.hasOnce&&(q!==Lt||z>0&&z&64)?Se(y,S,G,!1,!0):(q===Lt&&z&384||!$&&U&16)&&Se(T,S,G),J&&je(P)}(ce&&(fe=le&&le.onVnodeUnmounted)||he)&&Pt(()=>{fe&&$t(fe,S,P),he&&Cn(P,null,S,"unmounted")},G)},je=P=>{const{type:S,el:G,anchor:J,transition:$}=P;if(S===Lt){ie(G,J);return}if(S===As){_(P);return}const q=()=>{r(G),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(P.shapeFlag&1&&$&&!$.persisted){const{leave:le,delayLeave:Q}=$,T=()=>le(G,q);Q?Q(P.el,q,T):T()}else q()},ie=(P,S)=>{let G;for(;P!==S;)G=d(P),r(P),P=G;r(S)},me=(P,S,G)=>{const{bum:J,scope:$,job:q,subTree:le,um:Q,m:T,a:y}=P;aa(T),aa(y),J&&Es(J),$.stop(),q&&(q.flags|=8,Le(le,P,S,G)),Q&&Pt(Q,S),Pt(()=>{P.isUnmounted=!0},S),S&&S.pendingBranch&&!S.isUnmounted&&P.asyncDep&&!P.asyncResolved&&P.suspenseId===S.pendingId&&(S.deps--,S.deps===0&&S.resolve())},Se=(P,S,G,J=!1,$=!1,q=0)=>{for(let le=q;le<P.length;le++)Le(P[le],S,G,J,$)},O=P=>{if(P.shapeFlag&6)return O(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const S=d(P.anchor||P.el),G=S&&S[lv];return G?d(G):S};let se=!1;const re=(P,S,G)=>{P==null?S._vnode&&Le(S._vnode,null,null,!0):x(S._vnode||null,P,S,null,null,null,G),S._vnode=P,se||(se=!0,bf(),ra(),se=!1)},ue={p:x,um:Le,m:Ae,r:je,mt:j,mc:I,pc:F,pbc:E,n:O,o:t};let Pe,Ce;return e&&([Pe,Ce]=e(ue)),{render:re,hydrate:Pe,createApp:Fv(re,Pe)}}function tl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Fi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function nm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function im(t,e,n=!1){const i=t.children,r=e.children;if(Fe(i)&&Fe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=_i(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&im(o,a)),a.type===ir&&(a.el=o.el)}}function Xv(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const u=t[i];if(u!==0){if(r=n[n.length-1],t[r]<u){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<u?s=a+1:o=a;u<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function rm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:rm(e)}function aa(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const $v=Symbol.for("v-scx"),qv=()=>en($v);function PP(t,e){return Ou(t,null,e)}function kr(t,e,n){return Ou(t,e,n)}function Ou(t,e,n=ct){const{immediate:i,deep:r,flush:s,once:o}=n,a=Et({},n),l=e&&i||!e&&s!=="post";let u;if(qr){if(s==="sync"){const h=qv();u=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Dn,h.resume=Dn,h.pause=Dn,h}}const c=bt;a.call=(h,v,x)=>Tn(h,c,v,x);let f=!1;s==="post"?a.scheduler=h=>{Pt(h,c&&c.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(h,v)=>{v?h():Lu(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const d=sv(t,e,a);return qr&&(u?u.push(d):l&&d()),d}function jv(t,e,n){const i=this.proxy,r=pt(t)?t.includes(".")?sm(i,t):()=>i[t]:t.bind(i,i);let s;ke(e)?s=e:(s=e.handler,n=e);const o=or(this),a=Ou(r,s.bind(i),n);return o(),a}function sm(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const Yv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${dn(e)}Modifiers`]||t[`${cr(e)}Modifiers`];function Kv(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||ct;let r=n;const s=e.startsWith("update:"),o=s&&Yv(i,e.slice(7));o&&(o.trim&&(r=n.map(c=>pt(c)?c.trim():c)),o.number&&(r=n.map(y_)));let a,l=i[a=$a(e)]||i[a=$a(dn(e))];!l&&s&&(l=i[a=$a(cr(e))]),l&&Tn(l,t,6,r);const u=i[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Tn(u,t,6,r)}}function om(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!ke(t)){const l=u=>{const c=om(u,e,!0);c&&(a=!0,Et(o,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(ft(t)&&i.set(t,null),null):(Fe(s)?s.forEach(l=>o[l]=null):Et(o,s),ft(t)&&i.set(t,o),o)}function Pa(t,e){return!t||!Ws(e)?!1:(e=e.slice(2).replace(/Once$/,""),nt(t,e[0].toLowerCase()+e.slice(1))||nt(t,cr(e))||nt(t,e))}function nl(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:f,data:d,setupState:h,ctx:v,inheritAttrs:x}=t,m=sa(t);let p,M;try{if(n.shapeFlag&4){const _=r||i,R=_;p=Qt(u.call(R,_,c,f,h,d,v)),M=a}else{const _=e;p=Qt(_.length>1?_(f,{attrs:a,slots:o,emit:l}):_(f,null)),M=e.props?a:Jv(a)}}catch(_){ws.length=0,is(_,t,1),p=ut(Mt)}let g=p;if(M&&x!==!1){const _=Object.keys(M),{shapeFlag:R}=g;_.length&&R&7&&(s&&_.some(Su)&&(M=Qv(M,s)),g=ni(g,M,!1,!0))}return n.dirs&&(g=ni(g,null,!1,!0),g.dirs=g.dirs?g.dirs.concat(n.dirs):n.dirs),n.transition&&Xr(g,n.transition),p=g,sa(m),p}function Zv(t,e=!0){let n;for(let i=0;i<t.length;i++){const r=t[i];if(sr(r)){if(r.type!==Mt||r.children==="v-if"){if(n)return;n=r}}else return}return n}const Jv=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ws(n))&&((e||(e={}))[n]=t[n]);return e},Qv=(t,e)=>{const n={};for(const i in t)(!Su(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function e0(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Uf(i,o,u):!!o;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const d=c[f];if(o[d]!==i[d]&&!Pa(u,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Uf(i,o,u):!0:!!o;return!1}function Uf(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Pa(n,s))return!0}return!1}function La({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const la=t=>t.__isSuspense;let tc=0;const t0={name:"Suspense",__isSuspense:!0,process(t,e,n,i,r,s,o,a,l,u){if(t==null)n0(e,n,i,r,s,o,a,l,u);else{if(s&&s.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}i0(t,e,n,i,r,o,a,l,u)}},hydrate:r0,normalize:s0},am=t0;function Os(t,e){const n=t.props&&t.props[e];ke(n)&&n()}function n0(t,e,n,i,r,s,o,a,l){const{p:u,o:{createElement:c}}=l,f=c("div"),d=t.suspense=lm(t,r,i,e,f,n,s,o,a,l);u(null,d.pendingBranch=t.ssContent,f,null,i,d,s,o),d.deps>0?(Os(t,"onPending"),Os(t,"onFallback"),u(null,t.ssFallback,e,n,i,null,s,o),Hr(d,t.ssFallback)):d.resolve(!1,!0)}function i0(t,e,n,i,r,s,o,a,{p:l,um:u,o:{createElement:c}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const d=e.ssContent,h=e.ssFallback,{activeBranch:v,pendingBranch:x,isInFallback:m,isHydrating:p}=f;if(x)f.pendingBranch=d,xn(d,x)?(l(x,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():m&&(p||(l(v,h,n,i,r,null,s,o,a),Hr(f,h)))):(f.pendingId=tc++,p?(f.isHydrating=!1,f.activeBranch=x):u(x,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=c("div"),m?(l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():(l(v,h,n,i,r,null,s,o,a),Hr(f,h))):v&&xn(d,v)?(l(v,d,n,i,r,f,s,o,a),f.resolve(!0)):(l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0&&f.resolve()));else if(v&&xn(d,v))l(v,d,n,i,r,f,s,o,a),Hr(f,d);else if(Os(e,"onPending"),f.pendingBranch=d,d.shapeFlag&512?f.pendingId=d.component.suspenseId:f.pendingId=tc++,l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:M,pendingId:g}=f;M>0?setTimeout(()=>{f.pendingId===g&&f.fallback(h)},M):M===0&&f.fallback(h)}}function lm(t,e,n,i,r,s,o,a,l,u,c=!1){const{p:f,m:d,um:h,n:v,o:{parentNode:x,remove:m}}=u;let p;const M=o0(t);M&&e&&e.pendingBranch&&(p=e.pendingId,e.deps++);const g=t.props?ep(t.props.timeout):void 0,_=s,R={vnode:t,parent:e,parentComponent:n,namespace:o,container:i,hiddenContainer:r,deps:0,pendingId:tc++,timeout:typeof g=="number"?g:-1,activeBranch:null,pendingBranch:null,isInFallback:!c,isHydrating:c,isUnmounted:!1,effects:[],resolve(A=!1,C=!1){const{vnode:I,activeBranch:b,pendingBranch:E,pendingId:L,effects:D,parentComponent:N,container:j}=R;let ne=!1;R.isHydrating?R.isHydrating=!1:A||(ne=b&&E.transition&&E.transition.mode==="out-in",ne&&(b.transition.afterLeave=()=>{L===R.pendingId&&(d(E,j,s===_?v(b):s,0),Yl(D))}),b&&(x(b.el)===j&&(s=v(b)),h(b,N,R,!0)),ne||d(E,j,s,0)),Hr(R,E),R.pendingBranch=null,R.isInFallback=!1;let H=R.parent,ee=!1;for(;H;){if(H.pendingBranch){H.effects.push(...D),ee=!0;break}H=H.parent}!ee&&!ne&&Yl(D),R.effects=[],M&&e&&e.pendingBranch&&p===e.pendingId&&(e.deps--,e.deps===0&&!C&&e.resolve()),Os(I,"onResolve")},fallback(A){if(!R.pendingBranch)return;const{vnode:C,activeBranch:I,parentComponent:b,container:E,namespace:L}=R;Os(C,"onFallback");const D=v(I),N=()=>{R.isInFallback&&(f(null,A,E,D,b,null,L,a,l),Hr(R,A))},j=A.transition&&A.transition.mode==="out-in";j&&(I.transition.afterLeave=N),R.isInFallback=!0,h(I,b,null,!0),j||N()},move(A,C,I){R.activeBranch&&d(R.activeBranch,A,C,I),R.container=A},next(){return R.activeBranch&&v(R.activeBranch)},registerDep(A,C,I){const b=!!R.pendingBranch;b&&R.deps++;const E=A.vnode.el;A.asyncDep.catch(L=>{is(L,A,0)}).then(L=>{if(A.isUnmounted||R.isUnmounted||R.pendingId!==A.suspenseId)return;A.asyncResolved=!0;const{vnode:D}=A;rc(A,L,!1),E&&(D.el=E);const N=!E&&A.subTree.el;C(A,D,x(E||A.subTree.el),E?null:v(A.subTree),R,o,I),N&&m(N),La(A,D.el),b&&--R.deps===0&&R.resolve()})},unmount(A,C){R.isUnmounted=!0,R.activeBranch&&h(R.activeBranch,n,A,C),R.pendingBranch&&h(R.pendingBranch,n,A,C)}};return R}function r0(t,e,n,i,r,s,o,a,l){const u=e.suspense=lm(e,i,n,t.parentNode,document.createElement("div"),null,r,s,o,a,!0),c=l(t,u.pendingBranch=e.ssContent,n,u,s,o);return u.deps===0&&u.resolve(!1,!0),c}function s0(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=Nf(i?n.default:n),t.ssFallback=i?Nf(n.fallback):ut(Mt)}function Nf(t){let e;if(ke(t)){const n=$r&&t._c;n&&(t._d=!1,Gt()),t=t(),n&&(t._d=!0,e=qt,um())}return Fe(t)&&(t=Zv(t)),t=Qt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function cm(t,e){e&&e.pendingBranch?Fe(t)?e.effects.push(...t):e.effects.push(t):Yl(t)}function Hr(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;n.el=r,i&&i.subTree===n&&(i.vnode.el=r,La(i,r))}function o0(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Lt=Symbol.for("v-fgt"),ir=Symbol.for("v-txt"),Mt=Symbol.for("v-cmt"),As=Symbol.for("v-stc"),ws=[];let qt=null;function Gt(t=!1){ws.push(qt=t?null:[])}function um(){ws.pop(),qt=ws[ws.length-1]||null}let $r=1;function Ff(t,e=!1){$r+=t,t<0&&qt&&e&&(qt.hasOnce=!0)}function fm(t){return t.dynamicChildren=$r>0?qt||Ur:null,um(),$r>0&&qt&&qt.push(t),t}function Ys(t,e,n,i,r,s){return fm(ei(t,e,n,i,r,s,!0))}function Yn(t,e,n,i,r){return fm(ut(t,e,n,i,r,!0))}function sr(t){return t?t.__v_isVNode===!0:!1}function xn(t,e){return t.type===e.type&&t.key===e.key}const dm=({key:t})=>t??null,zo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?pt(t)||Rt(t)||ke(t)?{i:It,r:t,k:e,f:!!n}:t:null);function ei(t,e=null,n=null,i=0,r=null,s=t===Lt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&dm(e),ref:e&&zo(e),scopeId:wp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:It};return a?(ku(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=pt(n)?8:16),$r>0&&!o&&qt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&qt.push(l),l}const ut=a0;function a0(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Hp)&&(t=Mt),sr(t)){const a=ni(t,e,!0);return n&&ku(a,n),$r>0&&!s&&qt&&(a.shapeFlag&6?qt[qt.indexOf(t)]=a:qt.push(a)),a.patchFlag=-2,a}if(m0(t)&&(t=t.__vccOpts),e){e=hm(e);let{class:a,style:l}=e;a&&!pt(a)&&(e.class=Aa(a)),ft(l)&&(Pu(l)&&!Fe(l)&&(l=Et({},l)),e.style=Ta(l))}const o=pt(t)?1:la(t)?128:Cp(t)?64:ft(t)?4:ke(t)?2:0;return ei(t,e,n,i,r,o,s,!0)}function hm(t){return t?Pu(t)||jp(t)?Et({},t):t:null}function ni(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,u=e?l0(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&dm(u),ref:e&&e.ref?n&&s?Fe(s)?s.concat(zo(e)):[s,zo(e)]:zo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Lt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ni(t.ssContent),ssFallback:t.ssFallback&&ni(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Xr(c,l.clone(c)),c}function Bu(t=" ",e=0){return ut(ir,null,t,e)}function LP(t,e){const n=ut(As,null,t);return n.staticCount=e,n}function IP(t="",e=!1){return e?(Gt(),Yn(Mt,null,t)):ut(Mt,null,t)}function Qt(t){return t==null||typeof t=="boolean"?ut(Mt):Fe(t)?ut(Lt,null,t.slice()):sr(t)?_i(t):ut(ir,null,String(t))}function _i(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ni(t)}function ku(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Fe(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ku(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!jp(e)?e._ctx=It:r===3&&It&&(It.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:It},n=32):(e=String(e),i&64?(n=16,e=[Bu(e)]):n=8);t.children=e,t.shapeFlag|=n}function l0(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Aa([e.class,i.class]));else if(r==="style")e.style=Ta([e.style,i.style]);else if(Ws(r)){const s=e[r],o=i[r];o&&s!==o&&!(Fe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function $t(t,e,n,i=null){Tn(t,e,7,[n,i])}const c0=Wp();let u0=0;function f0(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||c0,s={uid:u0++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new rp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Kp(i,r),emitsOptions:om(i,r),emit:null,emitted:null,propsDefaults:ct,inheritAttrs:i.inheritAttrs,ctx:ct,data:ct,props:ct,attrs:ct,slots:ct,refs:ct,setupState:ct,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Kv.bind(null,s),t.ce&&t.ce(s),s}let bt=null;const Ks=()=>bt||It;let ca,nc;{const t=ba(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ca=e("__VUE_INSTANCE_SETTERS__",n=>bt=n),nc=e("__VUE_SSR_SETTERS__",n=>qr=n)}const or=t=>{const e=bt;return ca(t),t.scope.on(),()=>{t.scope.off(),ca(e)}},ic=()=>{bt&&bt.scope.off(),ca(null)};function pm(t){return t.vnode.shapeFlag&4}let qr=!1;function d0(t,e=!1,n=!1){e&&nc(e);const{props:i,children:r}=t.vnode,s=pm(t);Ov(t,i,s,e),zv(t,r,n);const o=s?h0(t,e):void 0;return e&&nc(!1),o}function h0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Rv);const{setup:i}=n;if(i){Li();const r=t.setupContext=i.length>1?gm(t):null,s=or(t),o=$s(i,t,0,[t.props,r]),a=Mu(o);if(Ii(),s(),(a||t.sp)&&!bi(t)&&Iu(t),a){if(o.then(ic,ic),e)return o.then(l=>{rc(t,l,e)}).catch(l=>{is(l,t,0)});t.asyncDep=o}else rc(t,o,e)}else mm(t,e)}function rc(t,e,n){ke(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ft(e)&&(t.setupState=Ep(e)),mm(t,n)}let Of;function mm(t,e,n){const i=t.type;if(!t.render){if(!e&&Of&&!i.render){const r=i.template||Nu(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,u=Et(Et({isCustomElement:s,delimiters:a},o),l);i.render=Of(r,u)}}t.render=i.render||Dn}{const r=or(t);Li();try{Pv(t)}finally{Ii(),r()}}}const p0={get(t,e){return Ft(t,"get",""),t[e]}};function gm(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,p0),slots:t.slots,emit:t.emit,expose:e}}function Hu(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ep(Y_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ts)return Ts[n](t)},has(e,n){return n in e||n in Ts}})):t.proxy}function sc(t,e=!0){return ke(t)?t.displayName||t.name:t.name||e&&t.__name}function m0(t){return ke(t)&&"__vccOpts"in t}const yn=(t,e)=>iv(t,e,qr);function un(t,e,n){const i=arguments.length;return i===2?ft(e)&&!Fe(e)?sr(e)?ut(t,null,[e]):ut(t,e):ut(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&sr(n)&&(n=[n]),ut(t,e,n))}const _m="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let oc;const Bf=typeof window<"u"&&window.trustedTypes;if(Bf)try{oc=Bf.createPolicy("vue",{createHTML:t=>t})}catch{}const vm=oc?t=>oc.createHTML(t):t=>t,g0="http://www.w3.org/2000/svg",_0="http://www.w3.org/1998/Math/MathML",qn=typeof document<"u"?document:null,kf=qn&&qn.createElement("template"),v0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?qn.createElementNS(g0,t):e==="mathml"?qn.createElementNS(_0,t):n?qn.createElement(t,{is:n}):qn.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>qn.createTextNode(t),createComment:t=>qn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>qn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{kf.innerHTML=vm(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=kf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},li="transition",us="animation",Bs=Symbol("_vtc"),xm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},x0=Et({},Pp,xm),y0=t=>(t.displayName="Transition",t.props=x0,t),S0=y0((t,{slots:e})=>un(fv,E0(t),e)),Oi=(t,e=[])=>{Fe(t)?t.forEach(n=>n(...e)):t&&t(...e)},Hf=t=>t?Fe(t)?t.some(e=>e.length>1):t.length>1:!1;function E0(t){const e={};for(const D in t)D in xm||(e[D]=t[D]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,v=M0(r),x=v&&v[0],m=v&&v[1],{onBeforeEnter:p,onEnter:M,onEnterCancelled:g,onLeave:_,onLeaveCancelled:R,onBeforeAppear:A=p,onAppear:C=M,onAppearCancelled:I=g}=e,b=(D,N,j,ne)=>{D._enterCancelled=ne,Bi(D,N?c:a),Bi(D,N?u:o),j&&j()},E=(D,N)=>{D._isLeaving=!1,Bi(D,f),Bi(D,h),Bi(D,d),N&&N()},L=D=>(N,j)=>{const ne=D?C:M,H=()=>b(N,D,j);Oi(ne,[N,H]),zf(()=>{Bi(N,D?l:s),kn(N,D?c:a),Hf(ne)||Vf(N,i,x,H)})};return Et(e,{onBeforeEnter(D){Oi(p,[D]),kn(D,s),kn(D,o)},onBeforeAppear(D){Oi(A,[D]),kn(D,l),kn(D,u)},onEnter:L(!1),onAppear:L(!0),onLeave(D,N){D._isLeaving=!0;const j=()=>E(D,N);kn(D,f),D._enterCancelled?(kn(D,d),Xf()):(Xf(),kn(D,d)),zf(()=>{D._isLeaving&&(Bi(D,f),kn(D,h),Hf(_)||Vf(D,i,m,j))}),Oi(_,[D,j])},onEnterCancelled(D){b(D,!1,void 0,!0),Oi(g,[D])},onAppearCancelled(D){b(D,!0,void 0,!0),Oi(I,[D])},onLeaveCancelled(D){E(D),Oi(R,[D])}})}function M0(t){if(t==null)return null;if(ft(t))return[il(t.enter),il(t.leave)];{const e=il(t);return[e,e]}}function il(t){return ep(t)}function kn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Bs]||(t[Bs]=new Set)).add(e)}function Bi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Bs];n&&(n.delete(e),n.size||(t[Bs]=void 0))}function zf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let b0=0;function Vf(t,e,n,i){const r=t._endId=++b0,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=T0(t,e);if(!o)return i();const u=o+"end";let c=0;const f=()=>{t.removeEventListener(u,d),s()},d=h=>{h.target===t&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},a+1),t.addEventListener(u,d)}function T0(t,e){const n=window.getComputedStyle(t),i=v=>(n[v]||"").split(", "),r=i(`${li}Delay`),s=i(`${li}Duration`),o=Gf(r,s),a=i(`${us}Delay`),l=i(`${us}Duration`),u=Gf(a,l);let c=null,f=0,d=0;e===li?o>0&&(c=li,f=o,d=s.length):e===us?u>0&&(c=us,f=u,d=l.length):(f=Math.max(o,u),c=f>0?o>u?li:us:null,d=c?c===li?s.length:l.length:0);const h=c===li&&/\b(transform|all)(,|$)/.test(i(`${li}Property`).toString());return{type:c,timeout:f,propCount:d,hasTransform:h}}function Gf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Wf(n)+Wf(t[i])))}function Wf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Xf(){return document.body.offsetHeight}function A0(t,e,n){const i=t[Bs];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const $f=Symbol("_vod"),w0=Symbol("_vsh"),R0=Symbol(""),C0=/(^|;)\s*display\s*:/;function P0(t,e,n){const i=t.style,r=pt(n);let s=!1;if(n&&!r){if(e)if(pt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Vo(i,a,"")}else for(const o in e)n[o]==null&&Vo(i,o,"");for(const o in n)o==="display"&&(s=!0),Vo(i,o,n[o])}else if(r){if(e!==n){const o=i[R0];o&&(n+=";"+o),i.cssText=n,s=C0.test(n)}}else e&&t.removeAttribute("style");$f in t&&(t[$f]=s?i.display:"",t[w0]&&(i.display="none"))}const qf=/\s*!important$/;function Vo(t,e,n){if(Fe(n))n.forEach(i=>Vo(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=L0(t,e);qf.test(n)?t.setProperty(cr(i),n.replace(qf,""),"important"):t[i]=n}}const jf=["Webkit","Moz","ms"],rl={};function L0(t,e){const n=rl[e];if(n)return n;let i=dn(e);if(i!=="filter"&&i in t)return rl[e]=i;i=Ma(i);for(let r=0;r<jf.length;r++){const s=jf[r]+i;if(s in t)return rl[e]=s}return e}const Yf="http://www.w3.org/1999/xlink";function Kf(t,e,n,i,r,s=w_(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Yf,e.slice(6,e.length)):t.setAttributeNS(Yf,e,n):n==null||s&&!tp(n)?t.removeAttribute(e):t.setAttribute(e,s?"":si(n)?String(n):n)}function Zf(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?vm(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=tp(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function I0(t,e,n,i){t.addEventListener(e,n,i)}function D0(t,e,n,i){t.removeEventListener(e,n,i)}const Jf=Symbol("_vei");function U0(t,e,n,i,r=null){const s=t[Jf]||(t[Jf]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=N0(e);if(i){const u=s[e]=B0(i,r);I0(t,a,u,l)}else o&&(D0(t,a,o,l),s[e]=void 0)}}const Qf=/(?:Once|Passive|Capture)$/;function N0(t){let e;if(Qf.test(t)){e={};let i;for(;i=t.match(Qf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):cr(t.slice(2)),e]}let sl=0;const F0=Promise.resolve(),O0=()=>sl||(F0.then(()=>sl=0),sl=Date.now());function B0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Tn(k0(i,n.value),e,5,[i])};return n.value=t,n.attached=O0(),n}function k0(t,e){if(Fe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const ed=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,H0=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?A0(t,i,o):e==="style"?P0(t,n,i):Ws(e)?Su(e)||U0(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):z0(t,e,i,o))?(Zf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Kf(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!pt(i))?Zf(t,dn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Kf(t,e,i,o))};function z0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&ed(e)&&ke(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return ed(e)&&pt(n)?!1:e in t}const ym=Et({patchProp:H0},v0);let Rs,td=!1;function V0(){return Rs||(Rs=Gv(ym))}function G0(){return Rs=td?Rs:Wv(ym),td=!0,Rs}const W0=(...t)=>{const e=V0().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Em(i);if(!r)return;const s=e._component;!ke(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Sm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},X0=(...t)=>{const e=G0().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Em(i);if(r)return n(r,!0,Sm(r))},e};function Sm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Em(t){return pt(t)?document.querySelector(t):t}const $0=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,q0=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,j0=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function Y0(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){K0(t);return}return e}function K0(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function ua(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const i=n.toLowerCase();if(i==="true")return!0;if(i==="false")return!1;if(i==="undefined")return;if(i==="null")return null;if(i==="nan")return Number.NaN;if(i==="infinity")return Number.POSITIVE_INFINITY;if(i==="-infinity")return Number.NEGATIVE_INFINITY}if(!j0.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if($0.test(t)||q0.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,Y0)}return JSON.parse(t)}catch(i){if(e.strict)throw i;return t}}const Z0=/#/g,J0=/&/g,Q0=/\//g,ex=/=/g,zu=/\+/g,tx=/%5e/gi,nx=/%60/gi,ix=/%7c/gi,rx=/%20/gi;function sx(t){return encodeURI(""+t).replace(ix,"|")}function ac(t){return sx(typeof t=="string"?t:JSON.stringify(t)).replace(zu,"%2B").replace(rx,"+").replace(Z0,"%23").replace(J0,"%26").replace(nx,"`").replace(tx,"^").replace(Q0,"%2F")}function ol(t){return ac(t).replace(ex,"%3D")}function fa(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function ox(t){return fa(t.replace(zu," "))}function ax(t){return fa(t.replace(zu," "))}function lx(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const i=n.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const r=ox(i[1]);if(r==="__proto__"||r==="constructor")continue;const s=ax(i[2]||"");e[r]===void 0?e[r]=s:Array.isArray(e[r])?e[r].push(s):e[r]=[e[r],s]}return e}function cx(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${ol(t)}=${ac(n)}`).join("&"):`${ol(t)}=${ac(e)}`:ol(t)}function ux(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>cx(e,t[e])).filter(Boolean).join("&")}const fx=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,dx=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,hx=/^([/\\]\s*){2,}[^/\\]/,px=/^[\s\0]*(blob|data|javascript|vbscript):$/i,mx=/\/$|\/\?|\/#/,gx=/^\.?\//;function ur(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?fx.test(t):dx.test(t)||(e.acceptRelative?hx.test(t):!1)}function _x(t){return!!t&&px.test(t)}function lc(t="",e){return e?mx.test(t):t.endsWith("/")}function Vu(t="",e){if(!e)return(lc(t)?t.slice(0,-1):t)||"/";if(!lc(t,!0))return t||"/";let n=t,i="";const r=t.indexOf("#");r>=0&&(n=t.slice(0,r),i=t.slice(r));const[s,...o]=n.split("?");return((s.endsWith("/")?s.slice(0,-1):s)||"/")+(o.length>0?`?${o.join("?")}`:"")+i}function cc(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(lc(t,!0))return t||"/";let n=t,i="";const r=t.indexOf("#");if(r>=0&&(n=t.slice(0,r),i=t.slice(r),!n))return i;const[s,...o]=n.split("?");return s+"/"+(o.length>0?`?${o.join("?")}`:"")+i}function vx(t=""){return t.startsWith("/")}function nd(t=""){return vx(t)?t:"/"+t}function xx(t,e){if(bm(e)||ur(t))return t;const n=Vu(e);return t.startsWith(n)?t:Gu(n,t)}function id(t,e){if(bm(e))return t;const n=Vu(e);if(!t.startsWith(n))return t;const i=t.slice(n.length);return i[0]==="/"?i:"/"+i}function Mm(t,e){const n=Ex(t),i={...lx(n.search),...e};return n.search=ux(i),Mx(n)}function bm(t){return!t||t==="/"}function yx(t){return t&&t!=="/"}function Gu(t,...e){let n=t||"";for(const i of e.filter(r=>yx(r)))if(n){const r=i.replace(gx,"");n=cc(n)+r}else n=i;return n}function Tm(...t){var o,a,l,u;const e=/\/(?!\/)/,n=t.filter(Boolean),i=[];let r=0;for(const c of n)if(!(!c||c==="/")){for(const[f,d]of c.split(e).entries())if(!(!d||d===".")){if(d===".."){if(i.length===1&&ur(i[0]))continue;i.pop(),r--;continue}if(f===1&&((o=i[i.length-1])!=null&&o.endsWith(":/"))){i[i.length-1]+="/"+d;continue}i.push(d),r++}}let s=i.join("/");return r>=0?(a=n[0])!=null&&a.startsWith("/")&&!s.startsWith("/")?s="/"+s:(l=n[0])!=null&&l.startsWith("./")&&!s.startsWith("./")&&(s="./"+s):s="../".repeat(-1*r)+s,(u=n[n.length-1])!=null&&u.endsWith("/")&&!s.endsWith("/")&&(s+="/"),s}function Sx(t,e,n={}){return n.trailingSlash||(t=cc(t),e=cc(e)),n.leadingSlash||(t=nd(t),e=nd(e)),n.encoding||(t=fa(t),e=fa(e)),t===e}const Am=Symbol.for("ufo:protocolRelative");function Ex(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,f,d=""]=n;return{protocol:f.toLowerCase(),pathname:d,href:f+d,auth:"",host:"",search:"",hash:""}}if(!ur(t,{acceptRelative:!0}))return rd(t);const[,i="",r,s=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=s.match(/([^#/?]*)(.*)?/)||[];i==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:c}=rd(a);return{protocol:i.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:l,search:u,hash:c,[Am]:!i}}function rd(t=""){const[e="",n="",i=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:i}}function Mx(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",i=t.hash||"",r=t.auth?t.auth+"@":"",s=t.host||"";return(t.protocol||t[Am]?(t.protocol||"")+"//":"")+r+s+e+n+i}class bx extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function Tx(t){var l,u,c,f,d;const e=((l=t.error)==null?void 0:l.message)||((u=t.error)==null?void 0:u.toString())||"",n=((c=t.request)==null?void 0:c.method)||((f=t.options)==null?void 0:f.method)||"GET",i=((d=t.request)==null?void 0:d.url)||String(t.request)||"/",r=`[${n}] ${JSON.stringify(i)}`,s=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${r}: ${s}${e?` ${e}`:""}`,a=new bx(o,t.error?{cause:t.error}:void 0);for(const h of["request","options","response"])Object.defineProperty(a,h,{get(){return t[h]}});for(const[h,v]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,h,{get(){return t.response&&t.response[v]}});return a}const Ax=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function sd(t="GET"){return Ax.has(t.toUpperCase())}function wx(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const Rx=new Set(["image/svg","application/xml","application/xhtml","application/html"]),Cx=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function Px(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return Cx.test(e)?"json":Rx.has(e)||e.startsWith("text/")?"text":"blob"}function Lx(t,e,n,i){const r=Ix((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,i);let s;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(s={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:s,params:s,headers:r}}function Ix(t,e,n){if(!e)return new n(t);const i=new n(e);if(t)for(const[r,s]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))i.set(r,s);return i}async function po(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const Dx=new Set([408,409,425,429,500,502,503,504]),Ux=new Set([101,204,205,304]);function wm(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:i=globalThis.AbortController}=t;async function r(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let c;typeof a.options.retry=="number"?c=a.options.retry:c=sd(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(c>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):Dx.has(f))){const d=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return d>0&&await new Promise(h=>setTimeout(h,d)),s(a.request,{...a.options,retry:c-1})}}const u=Tx(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,s),u}const s=async function(l,u={}){const c={request:l,options:Lx(l,u,t.defaults,n),response:void 0,error:void 0};c.options.method&&(c.options.method=c.options.method.toUpperCase()),c.options.onRequest&&await po(c,c.options.onRequest),typeof c.request=="string"&&(c.options.baseURL&&(c.request=xx(c.request,c.options.baseURL)),c.options.query&&(c.request=Mm(c.request,c.options.query),delete c.options.query),"query"in c.options&&delete c.options.query,"params"in c.options&&delete c.options.params),c.options.body&&sd(c.options.method)&&(wx(c.options.body)?(c.options.body=typeof c.options.body=="string"?c.options.body:JSON.stringify(c.options.body),c.options.headers=new n(c.options.headers||{}),c.options.headers.has("content-type")||c.options.headers.set("content-type","application/json"),c.options.headers.has("accept")||c.options.headers.set("accept","application/json")):("pipeTo"in c.options.body&&typeof c.options.body.pipeTo=="function"||typeof c.options.body.pipe=="function")&&("duplex"in c.options||(c.options.duplex="half")));let f;if(!c.options.signal&&c.options.timeout){const h=new i;f=setTimeout(()=>{const v=new Error("[TimeoutError]: The operation was aborted due to timeout");v.name="TimeoutError",v.code=23,h.abort(v)},c.options.timeout),c.options.signal=h.signal}try{c.response=await e(c.request,c.options)}catch(h){return c.error=h,c.options.onRequestError&&await po(c,c.options.onRequestError),await r(c)}finally{f&&clearTimeout(f)}if((c.response.body||c.response._bodyInit)&&!Ux.has(c.response.status)&&c.options.method!=="HEAD"){const h=(c.options.parseResponse?"json":c.options.responseType)||Px(c.response.headers.get("content-type")||"");switch(h){case"json":{const v=await c.response.text(),x=c.options.parseResponse||ua;c.response._data=x(v);break}case"stream":{c.response._data=c.response.body||c.response._bodyInit;break}default:c.response._data=await c.response[h]()}}return c.options.onResponse&&await po(c,c.options.onResponse),!c.options.ignoreResponseError&&c.response.status>=400&&c.response.status<600?(c.options.onResponseError&&await po(c,c.options.onResponseError),await r(c)):c.response},o=async function(l,u){return(await s(l,u))._data};return o.raw=s,o.native=(...a)=>e(...a),o.create=(a={},l={})=>wm({...t,...l,defaults:{...t.defaults,...l.defaults,...a}}),o}const da=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),Nx=da.fetch?(...t)=>da.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),Fx=da.Headers,Ox=da.AbortController,Bx=wm({fetch:Nx,Headers:Fx,AbortController:Ox}),kx=Bx,Hx=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},ha=Hx().app,zx=()=>ha.baseURL,Vx=()=>ha.buildAssetsDir,Wu=(...t)=>Tm(Rm(),Vx(),...t),Rm=(...t)=>{const e=ha.cdnURL||ha.baseURL;return t.length?Tm(e,...t):e};globalThis.__buildAssetsURL=Wu,globalThis.__publicAssetsURL=Rm;globalThis.$fetch||(globalThis.$fetch=kx.create({baseURL:zx()}));function uc(t,e={},n){for(const i in t){const r=t[i],s=n?`${n}:${i}`:i;typeof r=="object"&&r!==null?uc(r,e,s):typeof r=="function"&&(e[s]=r)}return e}const Gx={run:t=>t()},Wx=()=>Gx,Cm=typeof console.createTask<"u"?console.createTask:Wx;function Xx(t,e){const n=e.shift(),i=Cm(n);return t.reduce((r,s)=>r.then(()=>i.run(()=>s(...e))),Promise.resolve())}function $x(t,e){const n=e.shift(),i=Cm(n);return Promise.all(t.map(r=>i.run(()=>r(...e))))}function al(t,e){for(const n of[...t])n(e)}class qx{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,i={}){if(!e||typeof n!="function")return()=>{};const r=e;let s;for(;this._deprecatedHooks[e];)s=this._deprecatedHooks[e],e=s.to;if(s&&!i.allowDeprecated){let o=s.message;o||(o=`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let i,r=(...s)=>(typeof i=="function"&&i(),i=void 0,r=void 0,n(...s));return i=this.hook(e,r),i}removeHook(e,n){if(this._hooks[e]){const i=this._hooks[e].indexOf(n);i!==-1&&this._hooks[e].splice(i,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const i=this._hooks[e]||[];delete this._hooks[e];for(const r of i)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=uc(e),i=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of i.splice(0,i.length))r()}}removeHooks(e){const n=uc(e);for(const i in n)this.removeHook(i,n[i])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(Xx,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith($x,e,...n)}callHookWith(e,n,...i){const r=this._before||this._after?{name:n,args:i,context:{}}:void 0;this._before&&al(this._before,r);const s=e(n in this._hooks?[...this._hooks[n]]:[],i);return s instanceof Promise?s.finally(()=>{this._after&&r&&al(this._after,r)}):(this._after&&r&&al(this._after,r),s)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function Pm(){return new qx}function jx(t={}){let e,n=!1;const i=o=>{if(e&&e!==o)throw new Error("Context conflict")};let r;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?r=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const s=()=>{if(r){const o=r.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=s();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>s(),set:(o,a)=>{a||i(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{i(o),e=o;try{return r?r.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;fc.add(u);try{const c=r?r.run(o,a):a();return n||(e=void 0),await c}finally{fc.delete(u)}}}}function Yx(t={}){const e={};return{get(n,i={}){return e[n]||(e[n]=jx({...t,...i})),e[n]}}}const pa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},od="__unctx__",Kx=pa[od]||(pa[od]=Yx()),Zx=(t,e={})=>Kx.get(t,e),ad="__unctx_async_handlers__",fc=pa[ad]||(pa[ad]=new Set);function zr(t){const e=[];for(const r of fc){const s=r();s&&e.push(s)}const n=()=>{for(const r of e)r()};let i=t();return i&&typeof i=="object"&&"catch"in i&&(i=i.catch(r=>{throw n(),r})),[i,n]}const dc=!1,Jx=!1,DP={componentName:"NuxtLink",prefetch:!0,prefetchOn:{visibility:!0}},UP={value:null,errorValue:null,deep:!0},Qx=null,ey="#__nuxt",Lm="nuxt-app",ld=36e5,ty="vite:preloadError";function Im(t=Lm){return Zx(t,{asyncContext:!1})}const ny="__nuxt_plugin";function iy(t){var r;let e=0;const n={_id:t.id||Lm||"nuxt-app",_scope:C_(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.14.1592"},get vue(){return n.vueApp.version}},payload:Zn({...((r=t.ssrContext)==null?void 0:r.payload)||{},data:Zn({}),state:oi({}),once:new Set,_errors:Zn({})}),static:{data:{}},runWithContext(s){return n._scope.active&&!sp()?n._scope.run(()=>cd(n,s)):cd(n,s)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let s=!1;return()=>{if(!s&&(s=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:Zn({}),_payloadRevivers:{},...t};{const s=window.__NUXT__;if(s)for(const o in s)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],s[o]);break;default:n.payload[o]=s[o]}}n.hooks=Pm(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,o)=>{const a="$"+s;mo(n,a,o),mo(n.vueApp.config.globalProperties,a,o)},mo(n.vueApp,"$nuxt",n),mo(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(ty,o=>{n.callHook("app:chunkError",{error:o.payload}),(n.isHydrating||o.payload.message.includes("Unable to preload CSS"))&&o.preventDefault()}),window.useNuxtApp=window.useNuxtApp||vt;const s=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",s)}const i=n.payload.config;return n.provide("config",i),n}function ry(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function sy(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const i in n)t.provide(i,n[i])}}async function oy(t,e){const n=[],i=[],r=[],s=[];let o=0;async function a(l){var c;const u=((c=l.dependsOn)==null?void 0:c.filter(f=>e.some(d=>d._name===f)&&!n.includes(f)))??[];if(u.length>0)i.push([new Set(u),l]);else{const f=sy(t,l).then(async()=>{l._name&&(n.push(l._name),await Promise.all(i.map(async([d,h])=>{d.has(l._name)&&(d.delete(l._name),d.size===0&&(o++,await a(h)))})))});l.parallel?r.push(f.catch(d=>s.push(d))):await f}}for(const l of e)ry(t,l);for(const l of e)await a(l);if(await Promise.all(r),o)for(let l=0;l<o;l++)await Promise.all(r);if(s.length)throw s[0]}function Fn(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[ny]:!0,_name:e})}function cd(t,e,n){const i=()=>e();return Im(t._id).set(t),t.vueApp.runWithContext(i)}function ay(t){var n;let e;return Xp()&&(e=(n=Ks())==null?void 0:n.appContext.app.$nuxt),e=e||Im(t).tryUse(),e||null}function vt(t){const e=ay(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function Zs(t){return vt().$config}function mo(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function ly(t,e){return{ctx:{table:t},matchAll:n=>Um(n,t)}}function Dm(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([i,r])=>[i,Dm(r)])):new Map(Object.entries(t[n]));return e}function cy(t){return ly(Dm(t))}function Um(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const i=[];for(const[s,o]of ud(e.wildcard))(t===s||t.startsWith(s+"/"))&&i.push(o);for(const[s,o]of ud(e.dynamic))if(t.startsWith(s+"/")){const a="/"+t.slice(s.length).split("/").splice(2).join("/");i.push(...Um(a,o))}const r=e.static.get(t);return r&&i.push(r),i.filter(Boolean)}function ud(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function ll(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function hc(t,e,n=".",i){if(!ll(e))return hc(t,{},n,i);const r=Object.assign({},e);for(const s in t){if(s==="__proto__"||s==="constructor")continue;const o=t[s];o!=null&&(i&&i(r,s,o,n)||(Array.isArray(o)&&Array.isArray(r[s])?r[s]=[...o,...r[s]]:ll(o)&&ll(r[s])?r[s]=hc(o,r[s],(n?`${n}.`:"")+s.toString(),i):r[s]=o))}return r}function Nm(t){return(...e)=>e.reduce((n,i)=>hc(n,i,"",t),{})}const Fm=Nm(),uy=Nm((t,e,n)=>{if(t[e]!==void 0&&typeof n=="function")return t[e]=n(t[e]),!0});function fy(t,e){try{return e in t}catch{return!1}}var dy=Object.defineProperty,hy=(t,e,n)=>e in t?dy(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,qi=(t,e,n)=>(hy(t,typeof e!="symbol"?e+"":e,n),n);class pc extends Error{constructor(e,n={}){super(e,n),qi(this,"statusCode",500),qi(this,"fatal",!1),qi(this,"unhandled",!1),qi(this,"statusMessage"),qi(this,"data"),qi(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:gc(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=Om(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}qi(pc,"__h3_error__",!0);function mc(t){if(typeof t=="string")return new pc(t);if(py(t))return t;const e=new pc(t.message??t.statusMessage??"",{cause:t.cause||t});if(fy(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=gc(t.statusCode,e.statusCode):t.status&&(e.statusCode=gc(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;Om(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function py(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const my=/[^\u0009\u0020-\u007E]/g;function Om(t=""){return t.replace(my,"")}function gc(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const gy=Symbol("layout-meta"),Ia=Symbol("route"),An=()=>{var t;return(t=vt())==null?void 0:t.$router},Bm=()=>Xp()?en(Ia,vt()._route):vt()._route;const _y=()=>{try{if(vt()._processingMiddleware)return!0}catch{return!1}return!1},NP=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?vy(t):An().resolve(t).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:u={}}=e.open,c=Object.entries(u).filter(([f,d])=>d!==void 0).map(([f,d])=>`${f.toLowerCase()}=${d}`).join(", ");return open(n,l,c),Promise.resolve()}const i=ur(n,{acceptRelative:!0}),r=(e==null?void 0:e.external)||i;if(r){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&_x(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const s=_y();if(!r&&s)return t;const o=An(),a=vt();return r?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,s?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function vy(t){return Mm(t.path||"",t.query||{})+(t.hash||"")}const km="__nuxt_error",Da=()=>tv(vt().payload,"error"),Ir=t=>{const e=Ua(t);try{const n=vt(),i=Da();n.hooks.callHook("app:error",e),i.value=i.value||e}catch{throw e}return e},xy=async(t={})=>{const e=vt(),n=Da();e.callHook("app:error:cleared",t),t.redirect&&await An().replace(t.redirect),n.value=Qx},yy=t=>!!t&&typeof t=="object"&&km in t,Ua=t=>{const e=mc(t);return Object.defineProperty(e,km,{value:!0,configurable:!1,writable:!1}),e};function fd(t){const e=Ey(t),n=new ArrayBuffer(e.length),i=new DataView(n);for(let r=0;r<n.byteLength;r++)i.setUint8(r,e.charCodeAt(r));return n}const Sy="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Ey(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,i=0;for(let r=0;r<t.length;r++)n<<=6,n|=Sy.indexOf(t[r]),i+=6,i===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=i=0);return i===12?(n>>=4,e+=String.fromCharCode(n)):i===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const My=-1,by=-2,Ty=-3,Ay=-4,wy=-5,Ry=-6;function Cy(t,e){return Py(JSON.parse(t),e)}function Py(t,e){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,i=Array(n.length);function r(s,o=!1){if(s===My)return;if(s===Ty)return NaN;if(s===Ay)return 1/0;if(s===wy)return-1/0;if(s===Ry)return-0;if(o)throw new Error("Invalid input");if(s in i)return i[s];const a=n[s];if(!a||typeof a!="object")i[s]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=e==null?void 0:e[l];if(u)return i[s]=u(r(a[1]));switch(l){case"Date":i[s]=new Date(a[1]);break;case"Set":const c=new Set;i[s]=c;for(let h=1;h<a.length;h+=1)c.add(r(a[h]));break;case"Map":const f=new Map;i[s]=f;for(let h=1;h<a.length;h+=2)f.set(r(a[h]),r(a[h+1]));break;case"RegExp":i[s]=new RegExp(a[1],a[2]);break;case"Object":i[s]=Object(a[1]);break;case"BigInt":i[s]=BigInt(a[1]);break;case"null":const d=Object.create(null);i[s]=d;for(let h=1;h<a.length;h+=2)d[a[h]]=r(a[h+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const h=globalThis[l],v=a[1],x=fd(v),m=new h(x);i[s]=m;break}case"ArrayBuffer":{const h=a[1],v=fd(h);i[s]=v;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);i[s]=l;for(let u=0;u<a.length;u+=1){const c=a[u];c!==by&&(l[u]=r(c))}}else{const l={};i[s]=l;for(const u in a){const c=a[u];l[u]=r(c)}}return i[s]}return r(0)}const Ly=new Set(["title","titleTemplate","script","style","noscript"]),Go=new Set(["base","meta","link","style","script","noscript"]),Iy=new Set(["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),Dy=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),Hm=new Set(["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"]),Uy=typeof window<"u";function ma(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function _c(t){if(t._h)return t._h;if(t._d)return ma(t._d);let e=`${t.tag}:${t.textContent||t.innerHTML||""}:`;for(const n in t.props)e+=`${n}:${String(t.props[n])},`;return ma(e)}function Ny(t,e){return t instanceof Promise?t.then(e):e(t)}function vc(t,e,n,i){const r=i||Vm(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},t==="templateParams"||t==="titleTemplate");if(r instanceof Promise)return r.then(o=>vc(t,e,n,o));const s={tag:t,props:r};for(const o of Hm){const a=s.props[o]!==void 0?s.props[o]:n[o];a!==void 0&&((!(o==="innerHTML"||o==="textContent"||o==="children")||Ly.has(s.tag))&&(s[o==="children"?"innerHTML":o]=a),delete s.props[o])}return s.props.body&&(s.tagPosition="bodyClose",delete s.props.body),s.tag==="script"&&typeof s.innerHTML=="object"&&(s.innerHTML=JSON.stringify(s.innerHTML),s.props.type=s.props.type||"application/json"),Array.isArray(s.props.content)?s.props.content.map(o=>({...s,props:{...s.props,content:o}})):s}function Fy(t,e){var i;const n=t==="class"?" ":";";return e&&typeof e=="object"&&!Array.isArray(e)&&(e=Object.entries(e).filter(([,r])=>r).map(([r,s])=>t==="style"?`${r}:${s}`:r)),(i=String(Array.isArray(e)?e.join(n):e))==null?void 0:i.split(n).filter(r=>!!r.trim()).join(n)}function zm(t,e,n,i){for(let r=i;r<n.length;r+=1){const s=n[r];if(s==="class"||s==="style"){t[s]=Fy(s,t[s]);continue}if(t[s]instanceof Promise)return t[s].then(o=>(t[s]=o,zm(t,e,n,r)));if(!e&&!Hm.has(s)){const o=String(t[s]),a=s.startsWith("data-");o==="true"||o===""?t[s]=a?"true":!0:t[s]||(a&&o==="false"?t[s]="false":delete t[s])}}}function Vm(t,e=!1){const n=zm(t,e,Object.keys(t),0);return n instanceof Promise?n.then(()=>t):t}const Oy=10;function Gm(t,e,n){for(let i=n;i<e.length;i+=1){const r=e[i];if(r instanceof Promise)return r.then(s=>(e[i]=s,Gm(t,e,i)));Array.isArray(r)?t.push(...r):t.push(r)}}function By(t){const e=[],n=t.resolvedInput;for(const r in n){if(!Object.prototype.hasOwnProperty.call(n,r))continue;const s=n[r];if(!(s===void 0||!Iy.has(r))){if(Array.isArray(s)){for(const o of s)e.push(vc(r,o,t));continue}e.push(vc(r,s,t))}}if(e.length===0)return[];const i=[];return Ny(Gm(i,e,0),()=>i.map((r,s)=>(r._e=t._i,t.mode&&(r._m=t.mode),r._p=(t._i<<Oy)+s,r)))}const dd=new Set(["onload","onerror","onabort","onprogress","onloadstart"]),hd={base:-10,title:10},pd={critical:-80,high:-10,low:20};function ga(t){const e=t.tagPriority;if(typeof e=="number")return e;let n=100;return t.tag==="meta"?t.props["http-equiv"]==="content-security-policy"?n=-30:t.props.charset?n=-20:t.props.name==="viewport"&&(n=-15):t.tag==="link"&&t.props.rel==="preconnect"?n=20:t.tag in hd&&(n=hd[t.tag]),e&&e in pd?n+pd[e]:n}const ky=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],Hy=["name","property","http-equiv"];function Wm(t){const{props:e,tag:n}=t;if(Dy.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(e.id)return`${n}:id:${e.id}`;for(const i of Hy)if(e[i]!==void 0)return`${n}:${i}:${e[i]}`;return!1}const vi="%separator";function zy(t,e,n=!1){var r;let i;if(e==="s"||e==="pageTitle")i=t.pageTitle;else if(e.includes(".")){const s=e.indexOf(".");i=(r=t[e.substring(0,s)])==null?void 0:r[e.substring(s+1)]}else i=t[e];if(i!==void 0)return n?(i||"").replace(/"/g,'\\"'):i||""}const Vy=new RegExp(`${vi}(?:\\s*${vi})*`,"g");function go(t,e,n,i=!1){if(typeof t!="string"||!t.includes("%"))return t;let r=t;try{r=decodeURI(t)}catch{}const s=r.match(/%\w+(?:\.\w+)?/g);if(!s)return t;const o=t.includes(vi);return t=t.replace(/%\w+(?:\.\w+)?/g,a=>{if(a===vi||!s.includes(a))return a;const l=zy(e,a.slice(1),i);return l!==void 0?l:a}).trim(),o&&(t.endsWith(vi)&&(t=t.slice(0,-vi.length)),t.startsWith(vi)&&(t=t.slice(vi.length)),t=t.replace(Vy,n).trim()),t}function md(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function Xm(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const i={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",i),!!i.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async r=>{var f;const s=(await t.resolveTags()).map(d=>({tag:d,id:Go.has(d.tag)?_c(d):d.tag,shouldRender:!0}));let o=t._dom;if(!o){o={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};const d=new Set;for(const h of["body","head"]){const v=(f=n[h])==null?void 0:f.children;for(const x of v){const m=x.tagName.toLowerCase();if(!Go.has(m))continue;const p={tag:m,props:await Vm(x.getAttributeNames().reduce((R,A)=>({...R,[A]:x.getAttribute(A)}),{})),innerHTML:x.innerHTML},M=Wm(p);let g=M,_=1;for(;g&&d.has(g);)g=`${M}:${_++}`;g&&(p._d=g,d.add(g)),o.elMap[x.getAttribute("data-hid")||_c(p)]=x}}}o.pendingSideEffects={...o.sideEffects},o.sideEffects={};function a(d,h,v){const x=`${d}:${h}`;o.sideEffects[x]=v,delete o.pendingSideEffects[x]}function l({id:d,$el:h,tag:v}){const x=v.tag.endsWith("Attrs");if(o.elMap[d]=h,x||(v.textContent&&v.textContent!==h.textContent&&(h.textContent=v.textContent),v.innerHTML&&v.innerHTML!==h.innerHTML&&(h.innerHTML=v.innerHTML),a(d,"el",()=>{var m;(m=o.elMap[d])==null||m.remove(),delete o.elMap[d]})),v._eventHandlers)for(const m in v._eventHandlers)Object.prototype.hasOwnProperty.call(v._eventHandlers,m)&&h.getAttribute(`data-${m}`)!==""&&((v.tag==="bodyAttrs"?n.defaultView:h).addEventListener(m.substring(2),v._eventHandlers[m].bind(h)),h.setAttribute(`data-${m}`,""));for(const m in v.props){if(!Object.prototype.hasOwnProperty.call(v.props,m))continue;const p=v.props[m],M=`attr:${m}`;if(m==="class"){if(!p)continue;for(const g of p.split(" "))x&&a(d,`${M}:${g}`,()=>h.classList.remove(g)),!h.classList.contains(g)&&h.classList.add(g)}else if(m==="style"){if(!p)continue;for(const g of p.split(";")){const _=g.indexOf(":"),R=g.substring(0,_).trim(),A=g.substring(_+1).trim();a(d,`${M}:${R}`,()=>{h.style.removeProperty(R)}),h.style.setProperty(R,A)}}else h.getAttribute(m)!==p&&h.setAttribute(m,p===!0?"":String(p)),x&&a(d,M,()=>h.removeAttribute(m))}}const u=[],c={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const d of s){const{tag:h,shouldRender:v,id:x}=d;if(v){if(h.tag==="title"){n.title=h.textContent;continue}d.$el=d.$el||o.elMap[x],d.$el?l(d):Go.has(h.tag)&&u.push(d)}}for(const d of u){const h=d.tag.tagPosition||"head";d.$el=n.createElement(d.tag.tag),l(d),c[h]=c[h]||n.createDocumentFragment(),c[h].appendChild(d.$el)}for(const d of s)await t.hooks.callHook("dom:renderTag",d,n,a);c.head&&n.head.appendChild(c.head),c.bodyOpen&&n.body.insertBefore(c.bodyOpen,n.body.firstChild),c.bodyClose&&n.body.appendChild(c.bodyClose);for(const d in o.pendingSideEffects)o.pendingSideEffects[d]();t._dom=o,await t.hooks.callHook("dom:rendered",{renders:s}),r()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function Gy(t,e={}){const n=e.delayFn||(i=>setTimeout(i,10));return t._domDebouncedUpdatePromise=t._domDebouncedUpdatePromise||new Promise(i=>n(()=>Xm(t,e).then(()=>{delete t._domDebouncedUpdatePromise,i()})))}function Wy(t){return e=>{var i,r;const n=((r=(i=e.resolvedOptions.document)==null?void 0:i.head.querySelector('script[id="unhead:payload"]'))==null?void 0:r.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":s=>{Gy(s,t)}}}}}const Xy=new Set(["templateParams","htmlAttrs","bodyAttrs"]),$y={hooks:{"tag:normalise":({tag:t})=>{t.props.hid&&(t.key=t.props.hid,delete t.props.hid),t.props.vmid&&(t.key=t.props.vmid,delete t.props.vmid),t.props.key&&(t.key=t.props.key,delete t.props.key);const e=Wm(t);e&&!e.startsWith("meta:og:")&&!e.startsWith("meta:twitter:")&&delete t.key;const n=e||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":t=>{const e=Object.create(null);for(const i of t.tags){const r=(i.key?`${i.tag}:${i.key}`:i._d)||_c(i),s=e[r];if(s){let a=i==null?void 0:i.tagDuplicateStrategy;if(!a&&Xy.has(i.tag)&&(a="merge"),a==="merge"){const l=s.props;l.style&&i.props.style&&(l.style[l.style.length-1]!==";"&&(l.style+=";"),i.props.style=`${l.style} ${i.props.style}`),l.class&&i.props.class?i.props.class=`${l.class} ${i.props.class}`:l.class&&(i.props.class=l.class),e[r].props={...l,...i.props};continue}else if(i._e===s._e){s._duped=s._duped||[],i._d=`${s._d}:${s._duped.length+1}`,s._duped.push(i);continue}else if(ga(i)>ga(s))continue}if(!(i.innerHTML||i.textContent||Object.keys(i.props).length!==0)&&Go.has(i.tag)){delete e[r];continue}e[r]=i}const n=[];for(const i in e){const r=e[i],s=r._duped;n.push(r),s&&(delete r._duped,n.push(...s))}t.tags=n,t.tags=t.tags.filter(i=>!(i.tag==="meta"&&(i.props.name||i.props.property)&&!i.props.content))}}},qy=new Set(["script","link","bodyAttrs"]),jy=t=>({hooks:{"tags:resolve":e=>{for(const n of e.tags){if(!qy.has(n.tag))continue;const i=n.props;for(const r in i){if(r[0]!=="o"||r[1]!=="n"||!Object.prototype.hasOwnProperty.call(i,r))continue;const s=i[r];typeof s=="function"&&(t.ssr&&dd.has(r)?i[r]=`this.dataset.${r}fired = true`:delete i[r],n._eventHandlers=n._eventHandlers||{},n._eventHandlers[r]=s)}t.ssr&&n._eventHandlers&&(n.props.src||n.props.href)&&(n.key=n.key||ma(n.props.src||n.props.href))}},"dom:renderTag":({$el:e,tag:n})=>{var r,s;const i=e==null?void 0:e.dataset;if(i)for(const o in i){if(!o.endsWith("fired"))continue;const a=o.slice(0,-5);dd.has(a)&&((s=(r=n._eventHandlers)==null?void 0:r[a])==null||s.call(e,new Event(a.substring(2))))}}}}),Yy=new Set(["link","style","script","noscript"]),Ky={hooks:{"tag:normalise":({tag:t})=>{t.key&&Yy.has(t.tag)&&(t.props["data-hid"]=t._h=ma(t.key))}}},Zy={mode:"server",hooks:{"tags:beforeResolve":t=>{const e={};let n=!1;for(const i of t.tags)i._m!=="server"||i.tag!=="titleTemplate"&&i.tag!=="templateParams"&&i.tag!=="title"||(e[i.tag]=i.tag==="title"||i.tag==="titleTemplate"?i.textContent:i.props,n=!0);n&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},Jy={hooks:{"tags:resolve":t=>{var e;for(const n of t.tags)if(typeof n.tagPriority=="string")for(const{prefix:i,offset:r}of ky){if(!n.tagPriority.startsWith(i))continue;const s=n.tagPriority.substring(i.length),o=(e=t.tags.find(a=>a._d===s))==null?void 0:e._p;if(o!==void 0){n._p=o+r;break}}t.tags.sort((n,i)=>{const r=ga(n),s=ga(i);return r<s?-1:r>s?1:n._p-i._p})}}},Qy={meta:"content",link:"href",htmlAttrs:"lang"},eS=["innerHTML","textContent"],tS=t=>({hooks:{"tags:resolve":e=>{var o;const{tags:n}=e;let i;for(let a=0;a<n.length;a+=1)n[a].tag==="templateParams"&&(i=e.tags.splice(a,1)[0].props,a-=1);const r=i||{},s=r.separator||"|";delete r.separator,r.pageTitle=go(r.pageTitle||((o=n.find(a=>a.tag==="title"))==null?void 0:o.textContent)||"",r,s);for(const a of n){if(a.processTemplateParams===!1)continue;const l=Qy[a.tag];if(l&&typeof a.props[l]=="string")a.props[l]=go(a.props[l],r,s);else if(a.processTemplateParams||a.tag==="titleTemplate"||a.tag==="title")for(const u of eS)typeof a[u]=="string"&&(a[u]=go(a[u],r,s,a.tag==="script"&&a.props.type.endsWith("json")))}t._templateParams=r,t._separator=s},"tags:afterResolve":({tags:e})=>{let n;for(let i=0;i<e.length;i+=1){const r=e[i];r.tag==="title"&&r.processTemplateParams!==!1&&(n=r)}n!=null&&n.textContent&&(n.textContent=go(n.textContent,t._templateParams,t._separator))}}}),nS={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n,i;for(let r=0;r<e.length;r+=1){const s=e[r];s.tag==="title"?n=s:s.tag==="titleTemplate"&&(i=s)}if(i&&n){const r=md(i.textContent,n.textContent);r!==null?n.textContent=r||n.textContent:t.tags.splice(t.tags.indexOf(n),1)}else if(i){const r=md(i.textContent);r!==null&&(i.textContent=r,i.tag="title",i=void 0)}i&&t.tags.splice(t.tags.indexOf(i),1)}}},iS={hooks:{"tags:afterResolve":t=>{for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&(e.props.type==="application/ld+json"||e.props.type==="application/json")?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let $m;function rS(t={}){const e=sS(t);return e.use(Wy()),$m=e}function gd(t,e){return!t||t==="server"&&e||t==="client"&&!e}function sS(t={}){const e=Pm();e.addHooks(t.hooks||{}),t.document=t.document||(Uy?document:void 0);const n=!t.document,i=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let r=0,s=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return s},use(l){const u=typeof l=="function"?l(a):l;(!u.key||!o.some(c=>c.key===u.key))&&(o.push(u),gd(u.mode,n)&&e.addHooks(u.hooks||{}))},push(l,u){u==null||delete u.head;const c={_i:r++,input:l,...u};return gd(c.mode,n)&&(s.push(c),i()),{dispose(){s=s.filter(f=>f._i!==c._i),i()},patch(f){for(const d of s)d._i===c._i&&(d.input=c.input=f);i()}}},async resolveTags(){const l={tags:[],entries:[...s]};await e.callHook("entries:resolve",l);for(const u of l.entries){const c=u.resolvedInput||u.input;if(u.resolvedInput=await(u.transform?u.transform(c):c),u.resolvedInput)for(const f of await By(u)){const d={tag:f,entry:u,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",d),l.tags.push(d.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:n};return[$y,Zy,jy,Ky,Jy,tS,nS,iS,...(t==null?void 0:t.plugins)||[]].forEach(l=>a.use(l)),a.hooks.callHook("init",a),a}function oS(){return $m}const aS=_m[0]==="3";function lS(t){return typeof t=="function"?t():ht(t)}function xc(t){if(t instanceof Promise||t instanceof Date||t instanceof RegExp)return t;const e=lS(t);if(!t||!e)return e;if(Array.isArray(e))return e.map(n=>xc(n));if(typeof e=="object"){const n={};for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)){if(i==="titleTemplate"||i[0]==="o"&&i[1]==="n"){n[i]=ht(e[i]);continue}n[i]=xc(e[i])}return n}return e}const cS={hooks:{"entries:resolve":t=>{for(const e of t.entries)e.resolvedInput=xc(e.input)}}},qm="usehead";function uS(t){return{install(n){aS&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(qm,t))}}.install}function fS(t={}){t.domDelayFn=t.domDelayFn||(n=>qs(()=>setTimeout(()=>n(),0)));const e=rS(t);return e.use(cS),e.install=uS(e),e}const yc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Sc="__unhead_injection_handler__";function dS(t){yc[Sc]=t}function FP(){return Sc in yc?yc[Sc]():en(qm)||oS()}let Wo,Xo;function hS(){return Wo=$fetch(Wu(`builds/meta/${Zs().app.buildId}.json`),{responseType:"json"}),Wo.then(t=>{Xo=cy(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),Wo}function Na(){return Wo||hS()}async function Xu(t){if(await Na(),!Xo)return console.error("[nuxt] Error creating app manifest matcher.",Xo),{};try{return Fm({},...Xo.matchAll(t).reverse())}catch(e){return console.error("[nuxt] Error matching route rules.",e),{}}}async function _d(t,e={}){const n=await mS(t,e),i=vt(),r=i._payloadCache=i._payloadCache||{};return n in r?r[n]||null:(r[n]=Ym(t).then(s=>s?jm(n).then(o=>o||(delete r[n],null)):(r[n]=null,null)),r[n])}const pS="_payload.json";async function mS(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||ur(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const i=Zs(),r=e.hash||(e.fresh?Date.now():i.app.buildId),s=i.app.cdnURL,o=s&&await Ym(t)?s:i.app.baseURL;return Gu(o,n.pathname,pS+(r?`?${r}`:""))}async function jm(t){const e=fetch(t).then(n=>n.text().then(Km));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function Ym(t=Bm().path){if(t=Vu(t),(await Na()).prerendered.includes(t))return!0;const n=await Xu(t);return!!n.prerender&&!n.redirect}let ki=null;async function gS(){var i;if(ki)return ki;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await Km(t.textContent||""),n=t.dataset.src?await jm(t.dataset.src):void 0;return ki={...e,...n,...window.__NUXT__},(i=ki.config)!=null&&i.public&&(ki.config.public=oi(ki.config.public)),ki}async function Km(t){return await Cy(t,vt()._payloadRevivers)}function _S(t,e){vt()._payloadRevivers[t]=e}const vS=[["NuxtError",t=>Ua(t)],["EmptyShallowRef",t=>Us(t==="_"?void 0:t==="0n"?BigInt(0):ua(t))],["EmptyRef",t=>Mi(t==="_"?void 0:t==="0n"?BigInt(0):ua(t))],["ShallowRef",t=>Us(t)],["ShallowReactive",t=>Zn(t)],["Ref",t=>Mi(t)],["Reactive",t=>oi(t)]],xS=Fn({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[i,r]of vS)_S(i,r);Object.assign(t.payload,([e,n]=zr(()=>t.runWithContext(gS)),e=await e,n(),e)),window.__NUXT__=t.payload}}),yS=[],SS=Fn({name:"nuxt:head",enforce:"pre",setup(t){const e=fS({plugins:yS});dS(()=>vt().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const i=async()=>{n=!1,await Xm(e)};e.hooks.hook("dom:beforeRender",r=>{r.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||i()}),t.hooks.hook("app:error",i),t.hooks.hook("app:suspense:resolve",i)}}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Cr=typeof document<"u";function Zm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ES(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Zm(t.default)}const tt=Object.assign;function cl(t,e){const n={};for(const i in e){const r=e[i];n[i]=wn(r)?r.map(t):t(r)}return n}const Cs=()=>{},wn=Array.isArray,Jm=/#/g,MS=/&/g,bS=/\//g,TS=/=/g,AS=/\?/g,Qm=/\+/g,wS=/%5B/g,RS=/%5D/g,eg=/%5E/g,CS=/%60/g,tg=/%7B/g,PS=/%7C/g,ng=/%7D/g,LS=/%20/g;function $u(t){return encodeURI(""+t).replace(PS,"|").replace(wS,"[").replace(RS,"]")}function IS(t){return $u(t).replace(tg,"{").replace(ng,"}").replace(eg,"^")}function Ec(t){return $u(t).replace(Qm,"%2B").replace(LS,"+").replace(Jm,"%23").replace(MS,"%26").replace(CS,"`").replace(tg,"{").replace(ng,"}").replace(eg,"^")}function DS(t){return Ec(t).replace(TS,"%3D")}function US(t){return $u(t).replace(Jm,"%23").replace(AS,"%3F")}function NS(t){return t==null?"":US(t).replace(bS,"%2F")}function ks(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const FS=/\/$/,OS=t=>t.replace(FS,"");function ul(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=zS(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:ks(o)}}function BS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function vd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function kS(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&jr(e.matched[i],n.matched[r])&&ig(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function jr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ig(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!HS(t[n],e[n]))return!1;return!0}function HS(t,e){return wn(t)?xd(t,e):wn(e)?xd(e,t):t===e}function xd(t,e){return wn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function zS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const vn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Hs;(function(t){t.pop="pop",t.push="push"})(Hs||(Hs={}));var Ps;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ps||(Ps={}));function VS(t){if(!t)if(Cr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),OS(t)}const GS=/^[^#]+#/;function WS(t,e){return t.replace(GS,"#")+e}function XS(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Fa=()=>({left:window.scrollX,top:window.scrollY});function $S(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=XS(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function yd(t,e){return(history.state?history.state.position-e:-1)+t}const Mc=new Map;function qS(t,e){Mc.set(t,e)}function jS(t){const e=Mc.get(t);return Mc.delete(t),e}let YS=()=>location.protocol+"//"+location.host;function rg(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),vd(l,"")}return vd(n,t)+i+r}function KS(t,e,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const h=rg(t,location),v=n.value,x=e.value;let m=0;if(d){if(n.value=h,e.value=d,o&&o===v){o=null;return}m=x?d.position-x.position:0}else i(h);r.forEach(p=>{p(n.value,v,{delta:m,type:Hs.pop,direction:m?m>0?Ps.forward:Ps.back:Ps.unknown})})};function l(){o=n.value}function u(d){r.push(d);const h=()=>{const v=r.indexOf(d);v>-1&&r.splice(v,1)};return s.push(h),h}function c(){const{history:d}=window;d.state&&d.replaceState(tt({},d.state,{scroll:Fa()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:l,listen:u,destroy:f}}function Sd(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Fa():null}}function ZS(t){const{history:e,location:n}=window,i={value:rg(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,u,c){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:YS()+t+l;try{e[c?"replaceState":"pushState"](u,"",d),r.value=u}catch(h){console.error(h),n[c?"replace":"assign"](d)}}function o(l,u){const c=tt({},e.state,Sd(r.value.back,l,r.value.forward,!0),u,{position:r.value.position});s(l,c,!0),i.value=l}function a(l,u){const c=tt({},r.value,e.state,{forward:l,scroll:Fa()});s(c.current,c,!0);const f=tt({},Sd(i.value,l,null),{position:c.position+1},u);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function sg(t){t=VS(t);const e=ZS(t),n=KS(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=tt({location:"",base:t,go:i,createHref:WS.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function JS(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),sg(t)}function QS(t){return typeof t=="string"||t&&typeof t=="object"}function og(t){return typeof t=="string"||typeof t=="symbol"}const ag=Symbol("");var Ed;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Ed||(Ed={}));function Yr(t,e){return tt(new Error,{type:t,[ag]:!0},e)}function Hn(t,e){return t instanceof Error&&ag in t&&(e==null||!!(t.type&e))}const Md="[^/]+?",eE={sensitive:!1,strict:!1,start:!0,end:!0},tE=/[.+*?^${}()[\]/\\]/g;function nE(t,e){const n=tt({},eE,e),i=[];let r=n.start?"^":"";const s=[];for(const u of t){const c=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const d=u[f];let h=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(tE,"\\$&"),h+=40;else if(d.type===1){const{value:v,repeatable:x,optional:m,regexp:p}=d;s.push({name:v,repeatable:x,optional:m});const M=p||Md;if(M!==Md){h+=10;try{new RegExp(`(${M})`)}catch(_){throw new Error(`Invalid custom RegExp for param "${v}" (${M}): `+_.message)}}let g=x?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(g=m&&u.length<2?`(?:/${g})`:"/"+g),m&&(g+="?"),r+=g,h+=20,m&&(h+=-8),x&&(h+=-20),M===".*"&&(h+=-50)}c.push(h)}i.push(c)}if(n.strict&&n.end){const u=i.length-1;i[u][i[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const c=u.match(o),f={};if(!c)return null;for(let d=1;d<c.length;d++){const h=c[d]||"",v=s[d-1];f[v.name]=h&&v.repeatable?h.split("/"):h}return f}function l(u){let c="",f=!1;for(const d of t){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const h of d)if(h.type===0)c+=h.value;else if(h.type===1){const{value:v,repeatable:x,optional:m}=h,p=v in u?u[v]:"";if(wn(p)&&!x)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const M=wn(p)?p.join("/"):p;if(!M)if(m)d.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);c+=M}}return c||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function iE(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function lg(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=iE(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(bd(i))return 1;if(bd(r))return-1}return r.length-i.length}function bd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const rE={type:0,value:""},sE=/[a-zA-Z0-9_]/;function oE(t){if(!t)return[[]];if(t==="/")return[[rE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${u}": ${h}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,u="",c="";function f(){u&&(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(u&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:sE.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=3:c+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,c="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),r}function aE(t,e,n){const i=nE(oE(t.path),n),r=tt(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function lE(t,e){const n=[],i=new Map;e=Rd({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,d,h){const v=!h,x=Ad(f);x.aliasOf=h&&h.record;const m=Rd(e,f),p=[x];if("alias"in f){const _=typeof f.alias=="string"?[f.alias]:f.alias;for(const R of _)p.push(Ad(tt({},x,{components:h?h.record.components:x.components,path:R,aliasOf:h?h.record:x})))}let M,g;for(const _ of p){const{path:R}=_;if(d&&R[0]!=="/"){const A=d.record.path,C=A[A.length-1]==="/"?"":"/";_.path=d.record.path+(R&&C+R)}if(M=aE(_,d,m),h?h.alias.push(M):(g=g||M,g!==M&&g.alias.push(M),v&&f.name&&!wd(M)&&o(f.name)),cg(M)&&l(M),x.children){const A=x.children;for(let C=0;C<A.length;C++)s(A[C],M,h&&h.children[C])}h=h||M}return g?()=>{o(g)}:Cs}function o(f){if(og(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=fE(f,n);n.splice(d,0,f),f.record.name&&!wd(f)&&i.set(f.record.name,f)}function u(f,d){let h,v={},x,m;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw Yr(1,{location:f});m=h.record.name,v=tt(Td(d.params,h.keys.filter(g=>!g.optional).concat(h.parent?h.parent.keys.filter(g=>g.optional):[]).map(g=>g.name)),f.params&&Td(f.params,h.keys.map(g=>g.name))),x=h.stringify(v)}else if(f.path!=null)x=f.path,h=n.find(g=>g.re.test(x)),h&&(v=h.parse(x),m=h.record.name);else{if(h=d.name?i.get(d.name):n.find(g=>g.re.test(d.path)),!h)throw Yr(1,{location:f,currentLocation:d});m=h.record.name,v=tt({},d.params,f.params),x=h.stringify(v)}const p=[];let M=h;for(;M;)p.unshift(M.record),M=M.parent;return{name:m,path:x,params:v,matched:p,meta:uE(p)}}t.forEach(f=>s(f));function c(){n.length=0,i.clear()}return{addRoute:s,resolve:u,removeRoute:o,clearRoutes:c,getRoutes:a,getRecordMatcher:r}}function Td(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Ad(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:cE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function cE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function wd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function uE(t){return t.reduce((e,n)=>tt(e,n.meta),{})}function Rd(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function fE(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;lg(t,e[s])<0?i=s:n=s+1}const r=dE(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function dE(t){let e=t;for(;e=e.parent;)if(cg(e)&&lg(t,e)===0)return e}function cg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function hE(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Qm," "),o=s.indexOf("="),a=ks(o<0?s:s.slice(0,o)),l=o<0?null:ks(s.slice(o+1));if(a in e){let u=e[a];wn(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function Cd(t){let e="";for(let n in t){const i=t[n];if(n=DS(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(wn(i)?i.map(s=>s&&Ec(s)):[i&&Ec(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function pE(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=wn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const mE=Symbol(""),Pd=Symbol(""),qu=Symbol(""),ug=Symbol(""),bc=Symbol("");function fs(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function xi(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const u=d=>{d===!1?l(Yr(4,{from:n,to:e})):d instanceof Error?l(d):QS(d)?l(Yr(2,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},c=s(()=>t.call(i&&i.instances[r],e,n,u));let f=Promise.resolve(c);t.length<3&&(f=f.then(u)),f.catch(d=>l(d))})}function fl(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Zm(l)){const c=(l.__vccOpts||l)[e];c&&s.push(xi(c,n,i,o,a,r))}else{let u=l();s.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=ES(c)?c.default:c;o.mods[a]=c,o.components[a]=f;const h=(f.__vccOpts||f)[e];return h&&xi(h,n,i,o,a,r)()}))}}return s}function Ld(t){const e=en(qu),n=en(ug),i=yn(()=>{const l=ht(t.to);return e.resolve(l)}),r=yn(()=>{const{matched:l}=i.value,{length:u}=l,c=l[u-1],f=n.matched;if(!c||!f.length)return-1;const d=f.findIndex(jr.bind(null,c));if(d>-1)return d;const h=Id(l[u-2]);return u>1&&Id(c)===h&&f[f.length-1].path!==h?f.findIndex(jr.bind(null,l[u-2])):d}),s=yn(()=>r.value>-1&&yE(n.params,i.value.params)),o=yn(()=>r.value>-1&&r.value===n.matched.length-1&&ig(n.params,i.value.params));function a(l={}){if(xE(l)){const u=e[ht(t.replace)?"replace":"push"](ht(t.to)).catch(Cs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:i,href:yn(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function gE(t){return t.length===1?t[0]:t}const _E=rs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ld,setup(t,{slots:e}){const n=oi(Ld(t)),{options:i}=en(qu),r=yn(()=>({[Dd(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Dd(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&gE(e.default(n));return t.custom?s:un("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),vE=_E;function xE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function yE(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!wn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function Id(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Dd=(t,e,n)=>t??e??n,SE=rs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=en(bc),r=yn(()=>t.route||i.value),s=en(Pd,0),o=yn(()=>{let u=ht(s);const{matched:c}=r.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),a=yn(()=>r.value.matched[o.value]);Br(Pd,yn(()=>o.value+1)),Br(mE,a),Br(bc,r);const l=Mi();return kr(()=>[l.value,a.value,t.name],([u,c,f],[d,h,v])=>{c&&(c.instances[f]=u,h&&h!==c&&u&&u===d&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),u&&c&&(!h||!jr(c,h)||!d)&&(c.enterCallbacks[f]||[]).forEach(x=>x(u))},{flush:"post"}),()=>{const u=r.value,c=t.name,f=a.value,d=f&&f.components[c];if(!d)return Ud(n.default,{Component:d,route:u});const h=f.props[c],v=h?h===!0?u.params:typeof h=="function"?h(u):h:null,m=un(d,tt({},v,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[c]=null)},ref:l}));return Ud(n.default,{Component:m,route:u})||m}}});function Ud(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const fg=SE;function EE(t){const e=lE(t.routes,t),n=t.parseQuery||hE,i=t.stringifyQuery||Cd,r=t.history,s=fs(),o=fs(),a=fs(),l=Us(vn);let u=vn;Cr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=cl.bind(null,O=>""+O),f=cl.bind(null,NS),d=cl.bind(null,ks);function h(O,se){let re,ue;return og(O)?(re=e.getRecordMatcher(O),ue=se):ue=O,e.addRoute(ue,re)}function v(O){const se=e.getRecordMatcher(O);se&&e.removeRoute(se)}function x(){return e.getRoutes().map(O=>O.record)}function m(O){return!!e.getRecordMatcher(O)}function p(O,se){if(se=tt({},se||l.value),typeof O=="string"){const S=ul(n,O,se.path),G=e.resolve({path:S.path},se),J=r.createHref(S.fullPath);return tt(S,G,{params:d(G.params),hash:ks(S.hash),redirectedFrom:void 0,href:J})}let re;if(O.path!=null)re=tt({},O,{path:ul(n,O.path,se.path).path});else{const S=tt({},O.params);for(const G in S)S[G]==null&&delete S[G];re=tt({},O,{params:f(S)}),se.params=f(se.params)}const ue=e.resolve(re,se),Pe=O.hash||"";ue.params=c(d(ue.params));const Ce=BS(i,tt({},O,{hash:IS(Pe),path:ue.path})),P=r.createHref(Ce);return tt({fullPath:Ce,hash:Pe,query:i===Cd?pE(O.query):O.query||{}},ue,{redirectedFrom:void 0,href:P})}function M(O){return typeof O=="string"?ul(n,O,l.value.path):tt({},O)}function g(O,se){if(u!==O)return Yr(8,{from:se,to:O})}function _(O){return C(O)}function R(O){return _(tt(M(O),{replace:!0}))}function A(O){const se=O.matched[O.matched.length-1];if(se&&se.redirect){const{redirect:re}=se;let ue=typeof re=="function"?re(O):re;return typeof ue=="string"&&(ue=ue.includes("?")||ue.includes("#")?ue=M(ue):{path:ue},ue.params={}),tt({query:O.query,hash:O.hash,params:ue.path!=null?{}:O.params},ue)}}function C(O,se){const re=u=p(O),ue=l.value,Pe=O.state,Ce=O.force,P=O.replace===!0,S=A(re);if(S)return C(tt(M(S),{state:typeof S=="object"?tt({},Pe,S.state):Pe,force:Ce,replace:P}),se||re);const G=re;G.redirectedFrom=se;let J;return!Ce&&kS(i,ue,re)&&(J=Yr(16,{to:G,from:ue}),Ae(ue,ue,!0,!1)),(J?Promise.resolve(J):E(G,ue)).catch($=>Hn($)?Hn($,2)?$:ve($):F($,G,ue)).then($=>{if($){if(Hn($,2))return C(tt({replace:P},M($.to),{state:typeof $.to=="object"?tt({},Pe,$.to.state):Pe,force:Ce}),se||G)}else $=D(G,ue,!0,P,Pe);return L(G,ue,$),$})}function I(O,se){const re=g(O,se);return re?Promise.reject(re):Promise.resolve()}function b(O){const se=ie.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(O):O()}function E(O,se){let re;const[ue,Pe,Ce]=ME(O,se);re=fl(ue.reverse(),"beforeRouteLeave",O,se);for(const S of ue)S.leaveGuards.forEach(G=>{re.push(xi(G,O,se))});const P=I.bind(null,O,se);return re.push(P),Se(re).then(()=>{re=[];for(const S of s.list())re.push(xi(S,O,se));return re.push(P),Se(re)}).then(()=>{re=fl(Pe,"beforeRouteUpdate",O,se);for(const S of Pe)S.updateGuards.forEach(G=>{re.push(xi(G,O,se))});return re.push(P),Se(re)}).then(()=>{re=[];for(const S of Ce)if(S.beforeEnter)if(wn(S.beforeEnter))for(const G of S.beforeEnter)re.push(xi(G,O,se));else re.push(xi(S.beforeEnter,O,se));return re.push(P),Se(re)}).then(()=>(O.matched.forEach(S=>S.enterCallbacks={}),re=fl(Ce,"beforeRouteEnter",O,se,b),re.push(P),Se(re))).then(()=>{re=[];for(const S of o.list())re.push(xi(S,O,se));return re.push(P),Se(re)}).catch(S=>Hn(S,8)?S:Promise.reject(S))}function L(O,se,re){a.list().forEach(ue=>b(()=>ue(O,se,re)))}function D(O,se,re,ue,Pe){const Ce=g(O,se);if(Ce)return Ce;const P=se===vn,S=Cr?history.state:{};re&&(ue||P?r.replace(O.fullPath,tt({scroll:P&&S&&S.scroll},Pe)):r.push(O.fullPath,Pe)),l.value=O,Ae(O,se,re,P),ve()}let N;function j(){N||(N=r.listen((O,se,re)=>{if(!me.listening)return;const ue=p(O),Pe=A(ue);if(Pe){C(tt(Pe,{replace:!0,force:!0}),ue).catch(Cs);return}u=ue;const Ce=l.value;Cr&&qS(yd(Ce.fullPath,re.delta),Fa()),E(ue,Ce).catch(P=>Hn(P,12)?P:Hn(P,2)?(C(tt(M(P.to),{force:!0}),ue).then(S=>{Hn(S,20)&&!re.delta&&re.type===Hs.pop&&r.go(-1,!1)}).catch(Cs),Promise.reject()):(re.delta&&r.go(-re.delta,!1),F(P,ue,Ce))).then(P=>{P=P||D(ue,Ce,!1),P&&(re.delta&&!Hn(P,8)?r.go(-re.delta,!1):re.type===Hs.pop&&Hn(P,20)&&r.go(-1,!1)),L(ue,Ce,P)}).catch(Cs)}))}let ne=fs(),H=fs(),ee;function F(O,se,re){ve(O);const ue=H.list();return ue.length?ue.forEach(Pe=>Pe(O,se,re)):console.error(O),Promise.reject(O)}function de(){return ee&&l.value!==vn?Promise.resolve():new Promise((O,se)=>{ne.add([O,se])})}function ve(O){return ee||(ee=!O,j(),ne.list().forEach(([se,re])=>O?re(O):se()),ne.reset()),O}function Ae(O,se,re,ue){const{scrollBehavior:Pe}=t;if(!Cr||!Pe)return Promise.resolve();const Ce=!re&&jS(yd(O.fullPath,0))||(ue||!re)&&history.state&&history.state.scroll||null;return qs().then(()=>Pe(O,se,Ce)).then(P=>P&&$S(P)).catch(P=>F(P,O,se))}const Le=O=>r.go(O);let je;const ie=new Set,me={currentRoute:l,listening:!0,addRoute:h,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:x,resolve:p,options:t,push:_,replace:R,go:Le,back:()=>Le(-1),forward:()=>Le(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:H.add,isReady:de,install(O){const se=this;O.component("RouterLink",vE),O.component("RouterView",fg),O.config.globalProperties.$router=se,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>ht(l)}),Cr&&!je&&l.value===vn&&(je=!0,_(r.location).catch(Pe=>{}));const re={};for(const Pe in vn)Object.defineProperty(re,Pe,{get:()=>l.value[Pe],enumerable:!0});O.provide(qu,se),O.provide(ug,Zn(re)),O.provide(bc,l);const ue=O.unmount;ie.add(O),O.unmount=function(){ie.delete(O),ie.size<1&&(u=vn,N&&N(),N=null,l.value=vn,je=!1,ee=!1),ue()}}};function Se(O){return O.reduce((se,re)=>se.then(()=>b(re)),Promise.resolve())}return me}function ME(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(u=>jr(u,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>jr(u,l))||r.push(l))}return[n,i,r]}const bE=/(:\w+)\([^)]+\)/g,TE=/(:\w+)[?+*]/g,AE=/:\w+/g,wE=(t,e)=>e.path.replace(bE,"$1").replace(TE,"$1").replace(AE,n=>{var i;return((i=t.params[n.slice(1)])==null?void 0:i.toString())||""}),Tc=(t,e)=>{const n=t.route.matched.find(r=>{var s;return((s=r.components)==null?void 0:s.default)===t.Component.type}),i=e??(n==null?void 0:n.meta.key)??(n&&wE(t.route,n));return typeof i=="function"?i(t.route):i},RE=(t,e)=>({default:()=>t?un(vv,t===!0?{}:t,e):e});function ju(t){return Array.isArray(t)?t:[t]}const CE="modulepreload",PE=function(t,e){return new URL(t,e).href},Nd={},Ve=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(u=>{if(u=PE(u,i),u in Nd)return;Nd[u]=!0;const c=u.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(!!i)for(let v=o.length-1;v>=0;v--){const x=o[v];if(x.href===u&&(!c||x.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":CE,c||(h.as="script"),h.crossOrigin="",h.href=u,l&&h.setAttribute("nonce",l),document.head.appendChild(h),c)return new Promise((v,x)=>{h.addEventListener("load",v),h.addEventListener("error",()=>x(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},dl=[{name:"index",path:"/",component:()=>Ve(()=>import("./q2Bb-O2S.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url)},{name:"works-slug",path:"/works/:slug(.*)*",component:()=>Ve(()=>import("./CzEyV-ut.js"),[],import.meta.url)},{name:"works",path:"/works",component:()=>Ve(()=>import("./C9SKzReL.js"),[],import.meta.url)}],LE=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var i;return e?un(t,e,n):(i=n.default)==null?void 0:i.call(n)}}),IE=/(:\w+)\([^)]+\)/g,DE=/(:\w+)[?+*]/g,UE=/:\w+/g;function Fd(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(IE,"$1").replace(DE,"$1").replace(UE,n=>{var i;return((i=t.params[n.slice(1)])==null?void 0:i.toString())||""});return typeof e=="function"?e(t):e}function NE(t,e){return t===e||e===vn?!1:Fd(t)!==Fd(e)?!0:!t.matched.every((i,r)=>{var s,o;return i.components&&i.components.default===((o=(s=e.matched[r])==null?void 0:s.components)==null?void 0:o.default)})}const FE={scrollBehavior(t,e,n){var u;const i=vt(),r=((u=An().options)==null?void 0:u.scrollBehaviorType)??"auto";let s=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!s&&e&&t&&o!==!1&&NE(t,e)&&(s={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:Od(t.hash),behavior:r}:!1;const a=c=>!!(c.meta.pageTransition??dc),l=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(c=>{i.hooks.hookOnce(l,async()=>{await new Promise(f=>setTimeout(f,0)),t.hash&&(s={el:t.hash,top:Od(t.hash),behavior:r}),c(s)})})}};function Od(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}const OE={hashMode:!1,scrollBehaviorType:"auto"},on={...OE,...FE},BE=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const i=vt(),r=An(),s=([e,n]=zr(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e);if(s===!0)return;const o=Ua({statusCode:s&&s.statusCode||404,statusMessage:s&&s.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=r.beforeResolve(u=>{if(a(),u===t){const c=r.afterEach(async()=>{c(),await i.runWithContext(()=>Ir(o)),window==null||window.history.pushState({},"",t.fullPath)});return!1}})},kE=async t=>{let e,n;const i=([e,n]=zr(()=>Xu(t.path)),e=await e,n(),e);if(i.redirect)return ur(i.redirect,{acceptRelative:!0})?(window.location.href=i.redirect,!1):i.redirect},HE=[BE,kE],Ls={};function zE(t,e,n){const{pathname:i,search:r,hash:s}=e,o=t.indexOf("#");if(o>-1){const u=s.includes(t.slice(o))?t.slice(o).length:1;let c=s.slice(u);return c[0]!=="/"&&(c="/"+c),id(c,"")}const a=id(i,t),l=!n||Sx(a,n,{trailingSlash:!0})?a:n;return l+(l.includes("?")?"":r)+s}const VE=Fn({name:"nuxt:router",enforce:"pre",async setup(t){var m;let e,n,i=Zs().app.baseURL;on.hashMode&&!i.includes("#")&&(i+="#");const r=((m=on.history)==null?void 0:m.call(on,i))??(on.hashMode?JS(i):sg(i)),s=on.routes?([e,n]=zr(()=>on.routes(dl)),e=await e,n(),e??dl):dl;let o;const a=EE({...on,scrollBehavior:(p,M,g)=>{if(M===vn){o=g;return}if(on.scrollBehavior){if(a.options.scrollBehavior=on.scrollBehavior,"scrollRestoration"in window.history){const _=a.beforeEach(()=>{_(),window.history.scrollRestoration="manual"})}return on.scrollBehavior(p,vn,o||g)}},history:r,routes:s});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=Us(a.currentRoute.value);a.afterEach((p,M)=>{l.value=M}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=zE(i,window.location,t.payload.path),c=Us(a.currentRoute.value),f=()=>{c.value=a.currentRoute.value};t.hook("page:finish",f),a.afterEach((p,M)=>{var g,_,R,A;((_=(g=p.matched[0])==null?void 0:g.components)==null?void 0:_.default)===((A=(R=M.matched[0])==null?void 0:R.components)==null?void 0:A.default)&&f()});const d={};for(const p in c.value)Object.defineProperty(d,p,{get:()=>c.value[p],enumerable:!0});t._route=Zn(d),t._middleware=t._middleware||{global:[],named:{}};const h=Da();a.afterEach(async(p,M,g)=>{delete t._processingMiddleware,!t.isHydrating&&h.value&&await t.runWithContext(xy),g&&await t.callHook("page:loading:end")});try{[e,n]=zr(()=>a.isReady()),await e,n()}catch(p){[e,n]=zr(()=>t.runWithContext(()=>Ir(p))),await e,n()}const v=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;f();const x=t.payload.state._layout;return a.beforeEach(async(p,M)=>{var g;await t.callHook("page:loading:start"),p.meta=oi(p.meta),t.isHydrating&&x&&!wi(p.meta.layout)&&(p.meta.layout=x),t._processingMiddleware=!0;{const _=new Set([...HE,...t._middleware.global]);for(const R of p.matched){const A=R.meta.middleware;if(A)for(const C of ju(A))_.add(C)}{const R=await t.runWithContext(()=>Xu(p.path));if(R.appMiddleware)for(const A in R.appMiddleware)R.appMiddleware[A]?_.add(A):_.delete(A)}for(const R of _){const A=typeof R=="string"?t._middleware.named[R]||await((g=Ls[R])==null?void 0:g.call(Ls).then(I=>I.default||I)):R;if(!A)throw new Error(`Unknown route middleware: '${R}'.`);const C=await t.runWithContext(()=>A(p,M));if(!t.payload.serverRendered&&t.isHydrating&&(C===!1||C instanceof Error)){const I=C||mc({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Ir(I)),!1}if(C!==!0&&(C||C===!1))return C}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(async(p,M)=>{p.matched.length===0&&await t.runWithContext(()=>Ir(mc({statusCode:404,fatal:!1,statusMessage:`Page not found: ${p.fullPath}`,data:{path:p.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in v&&(v.name=void 0),await a.replace({...v,force:!0}),a.options.scrollBehavior=on.scrollBehavior}catch(p){await t.runWithContext(()=>Ir(p))}}),{provide:{router:a}}}}),Bd=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),OP=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Yu=t=>{const e=vt();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{Bd(()=>t())}):Bd(()=>t())},GE=Fn({name:"nuxt:payload",setup(t){An().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const i=await _d(e.path);i&&Object.assign(t.static.data,i.data)}),Yu(()=>{var e;t.hooks.hook("link:prefetch",async n=>{const{hostname:i}=new URL(n,window.location.href);i===window.location.hostname&&await _d(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(Na,1e3)})}}),WE=Fn(()=>{const t=An();Yu(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),XE=Fn(t=>{let e;async function n(){const i=await Na();e&&clearTimeout(e),e=setTimeout(n,ld);try{const r=await $fetch(Wu("builds/latest.json")+`?${Date.now()}`);r.id!==i.id&&t.hooks.callHook("app:manifest:update",r)}catch{}}Yu(()=>{e=setTimeout(n,ld)})});function $E(t={}){const e=t.path||window.location.pathname;let n={};try{n=ua(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:vt().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const qE=Fn({name:"nuxt:chunk-reload",setup(t){const e=An(),n=Zs(),i=new Set;e.beforeEach(()=>{i.clear()}),t.hook("app:chunkError",({error:s})=>{i.add(s)});function r(s){const a="href"in s&&s.href[0]==="#"?n.app.baseURL+s.href:Gu(n.app.baseURL,s.fullPath);$E({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(r)}),e.onError((s,o)=>{i.has(s)&&r(o)})}}),jE=Xe(()=>Ve(()=>import("./2GKXtEut.js"),__vite__mapDeps([5,1,6]),import.meta.url).then(t=>t.default||t.default||t)),YE=Xe(()=>Ve(()=>import("./CgjFaiJc.js"),[],import.meta.url).then(t=>t.default||t.default||t)),KE=Xe(()=>Ve(()=>import("./2ZWx_8ad.js"),__vite__mapDeps([7,8,9,10,11,3,12,2,13]),import.meta.url).then(t=>t.default||t.default||t)),ZE=Xe(()=>Ve(()=>import("./CK6jyi5z.js"),__vite__mapDeps([14,12,3,2]),import.meta.url).then(t=>t.default||t.default||t)),JE=Xe(()=>Ve(()=>import("./Denpop9K.js"),__vite__mapDeps([15,3,2,16]),import.meta.url).then(t=>t.default||t.default||t)),QE=Xe(()=>Ve(()=>import("./BPcWkrpl.js"),__vite__mapDeps([12,3,2]),import.meta.url).then(t=>t.default||t.default||t)),eM=Xe(()=>Ve(()=>import("./CQNpMK5p.js"),__vite__mapDeps([8,9,10,11,3]),import.meta.url).then(t=>t.default||t.default||t)),tM=Xe(()=>Ve(()=>import("./DTeB2-iV.js"),__vite__mapDeps([17,9,10,11,3]),import.meta.url).then(t=>t.default||t.default||t)),nM=Xe(()=>Ve(()=>import("./DqnyVn7P.js"),__vite__mapDeps([18,11]),import.meta.url).then(t=>t.default||t.default||t)),iM=Xe(()=>Ve(()=>import("./7CpnKL7I.js"),[],import.meta.url).then(t=>t.default||t.default||t)),rM=Xe(()=>Ve(()=>import("./BW8h6l-g.js"),[],import.meta.url).then(t=>t.default||t.default||t)),sM=Xe(()=>Ve(()=>import("./Bid4uXYC.js"),__vite__mapDeps([19,18,11]),import.meta.url).then(t=>t.default||t.default||t)),oM=Xe(()=>Ve(()=>import("./CghitLys.js"),__vite__mapDeps([20,21,22]),import.meta.url).then(t=>t.default||t.default||t)),aM=Xe(()=>Ve(()=>import("./P_kO_Htu.js"),[],import.meta.url).then(t=>t.default||t.default||t)),lM=Xe(()=>Ve(()=>import("./eSuI9SLB.js"),__vite__mapDeps([23,21,22]),import.meta.url).then(t=>t.default||t.default||t)),cM=Xe(()=>Ve(()=>import("./CFxgfmNK.js"),__vite__mapDeps([24,16]),import.meta.url).then(t=>t.default||t.default||t)),uM=Xe(()=>Ve(()=>import("./BVCXSnLx.js"),[],import.meta.url).then(t=>t.default||t.default||t)),fM=Xe(()=>Ve(()=>import("./DovSNpiv.js"),[],import.meta.url).then(t=>t.default||t.default||t)),dM=Xe(()=>Ve(()=>import("./0BVRuh7p.js"),[],import.meta.url).then(t=>t.default||t.default||t)),hM=Xe(()=>Ve(()=>import("./B3kzy6gI.js"),[],import.meta.url).then(t=>t.default||t.default||t)),pM=Xe(()=>Ve(()=>import("./CtcDisSb.js"),[],import.meta.url).then(t=>t.default||t.default||t)),mM=Xe(()=>Ve(()=>import("./Wlw6-j53.js"),[],import.meta.url).then(t=>t.default||t.default||t)),gM=Xe(()=>Ve(()=>import("./DRBNXT6S.js"),[],import.meta.url).then(t=>t.default||t.default||t)),_M=Xe(()=>Ve(()=>import("./Bt9O-Sle.js"),[],import.meta.url).then(t=>t.default||t.default||t)),vM=Xe(()=>Ve(()=>import("./uEmJWbgj.js"),[],import.meta.url).then(t=>t.default||t.default||t)),xM=Xe(()=>Ve(()=>import("./CWsw4NEz.js"),[],import.meta.url).then(t=>t.default||t.default||t)),yM=Xe(()=>Ve(()=>import("./C8mjnYt-.js"),[],import.meta.url).then(t=>t.default||t.default||t)),SM=Xe(()=>Ve(()=>import("./DVtC-9Zu.js"),[],import.meta.url).then(t=>t.default||t.default||t)),EM=Xe(()=>Ve(()=>import("./oLh9KuAt.js"),[],import.meta.url).then(t=>t.default||t.default||t)),MM=Xe(()=>Ve(()=>import("./C0mKKt9i.js"),[],import.meta.url).then(t=>t.default||t.default||t)),bM=Xe(()=>Ve(()=>import("./zgr8iuzV.js"),[],import.meta.url).then(t=>t.default||t.default||t)),TM=Xe(()=>Ve(()=>import("./Cu1bCvi7.js"),[],import.meta.url).then(t=>t.default||t.default||t)),AM=Xe(()=>Ve(()=>import("./BIWPt3ME.js"),[],import.meta.url).then(t=>t.default||t.default||t)),wM=Xe(()=>Ve(()=>import("./D1WxZYWR.js"),[],import.meta.url).then(t=>t.default||t.default||t)),RM=Xe(()=>Ve(()=>import("./D4teJTS2.js"),[],import.meta.url).then(t=>t.default||t.default||t)),CM=Xe(()=>Ve(()=>import("./NUB7qdtm.js"),[],import.meta.url).then(t=>t.default||t.default||t)),PM=Xe(()=>Ve(()=>import("./Dhbx-P9t.js"),[],import.meta.url).then(t=>t.default||t.default||t)),LM=Xe(()=>Ve(()=>import("./BbpL8XQ6.js"),[],import.meta.url).then(t=>t.default||t.default||t)),IM=Xe(()=>Ve(()=>import("./C9UZdknB.js"),[],import.meta.url).then(t=>t.default||t.default||t)),DM=[["TheProblem",jE],["VideoContainer",YE],["ContentDoc",KE],["ContentList",ZE],["ContentNavigation",JE],["ContentQuery",QE],["ContentRenderer",eM],["ContentRendererMarkdown",tM],["MDCSlot",nM],["DocumentDrivenEmpty",iM],["DocumentDrivenNotFound",rM],["Markdown",sM],["ProseCode",oM],["ProseCodeInline",aM],["ProsePre",lM],["ProseA",cM],["ProseBlockquote",uM],["ProseEm",fM],["ProseH1",dM],["ProseH2",hM],["ProseH3",pM],["ProseH4",mM],["ProseH5",gM],["ProseH6",_M],["ProseHr",vM],["ProseImg",xM],["ProseLi",yM],["ProseOl",SM],["ProseP",EM],["ProseScript",MM],["ProseStrong",bM],["ProseTable",TM],["ProseTbody",AM],["ProseTd",wM],["ProseTh",RM],["ProseThead",CM],["ProseTr",PM],["ProseUl",LM],["Icon",IM]],UM=Fn({name:"nuxt:global-components",setup(t){for(const[e,n]of DM)t.vueApp.component(e,n),t.vueApp.component("Lazy"+e,n)}}),_o={},NM=Fn({name:"nuxt:prefetch",setup(t){const e=An();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var r;const i=(r=n==null?void 0:n.meta)==null?void 0:r.layout;i&&typeof _o[i]=="function"&&await _o[i]()})}),t.hooks.hook("link:prefetch",n=>{if(ur(n))return;const i=e.resolve(n);if(!i)return;const r=i.meta.layout;let s=ju(i.meta.middleware);s=s.filter(o=>typeof o=="string");for(const o of s)typeof Ls[o]=="function"&&Ls[o]();r&&typeof _o[r]=="function"&&_o[r]()})}}),dg=/^[a-z0-9]+(-[a-z0-9]+)*$/,Js=(t,e,n,i="")=>{const r=t.split(":");if(t.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;i=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const a=r.pop(),l=r.pop(),u={provider:r.length>0?r[0]:i,prefix:l,name:a};return e&&!$o(u)?null:u}const s=r[0],o=s.split("-");if(o.length>1){const a={provider:i,prefix:o.shift(),name:o.join("-")};return e&&!$o(a)?null:a}if(n&&i===""){const a={provider:i,prefix:"",name:s};return e&&!$o(a,n)?null:a}return null},$o=(t,e)=>t?!!((e&&t.prefix===""||t.prefix)&&t.name):!1,hg=Object.freeze({left:0,top:0,width:16,height:16}),_a=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),ss=Object.freeze({...hg,..._a}),Ac=Object.freeze({...ss,body:"",hidden:!1});function FM(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const i=((t.rotate||0)+(e.rotate||0))%4;return i&&(n.rotate=i),n}function kd(t,e){const n=FM(t,e);for(const i in Ac)i in _a?i in t&&!(i in n)&&(n[i]=_a[i]):i in e?n[i]=e[i]:i in t&&(n[i]=t[i]);return n}function OM(t,e){const n=t.icons,i=t.aliases||Object.create(null),r=Object.create(null);function s(o){if(n[o])return r[o]=[];if(!(o in r)){r[o]=null;const a=i[o]&&i[o].parent,l=a&&s(a);l&&(r[o]=[a].concat(l))}return r[o]}return Object.keys(n).concat(Object.keys(i)).forEach(s),r}function BM(t,e,n){const i=t.icons,r=t.aliases||Object.create(null);let s={};function o(a){s=kd(i[a]||r[a],s)}return o(e),n.forEach(o),kd(t,s)}function pg(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(r=>{e(r,null),n.push(r)});const i=OM(t);for(const r in i){const s=i[r];s&&(e(r,BM(t,r,s)),n.push(r))}return n}const kM={provider:"",aliases:{},not_found:{},...hg};function hl(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function mg(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!hl(t,kM))return null;const n=e.icons;for(const r in n){const s=n[r];if(!r||typeof s.body!="string"||!hl(s,Ac))return null}const i=e.aliases||Object.create(null);for(const r in i){const s=i[r],o=s.parent;if(!r||typeof o!="string"||!n[o]&&!i[o]||!hl(s,Ac))return null}return e}const Hd=Object.create(null);function HM(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function Ri(t,e){const n=Hd[t]||(Hd[t]=Object.create(null));return n[e]||(n[e]=HM(t,e))}function Ku(t,e){return mg(e)?pg(e,(n,i)=>{i?t.icons[n]=i:t.missing.add(n)}):[]}function zM(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let zs=!1;function gg(t){return typeof t=="boolean"&&(zs=t),zs}function Zu(t){const e=typeof t=="string"?Js(t,!0,zs):t;if(e){const n=Ri(e.provider,e.prefix),i=e.name;return n.icons[i]||(n.missing.has(i)?null:void 0)}}function VM(t,e){const n=Js(t,!0,zs);if(!n)return!1;const i=Ri(n.provider,n.prefix);return e?zM(i,n.name,e):(i.missing.add(n.name),!0)}function GM(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),zs&&!e&&!t.prefix){let r=!1;return mg(t)&&(t.prefix="",pg(t,(s,o)=>{VM(s,o)&&(r=!0)})),r}const n=t.prefix;if(!$o({provider:e,prefix:n,name:"a"}))return!1;const i=Ri(e,n);return!!Ku(i,t)}function BP(t){const e=Zu(t);return e&&{...ss,...e}}const _g=Object.freeze({width:null,height:null}),vg=Object.freeze({..._g,..._a}),WM=/(-?[0-9.]*[0-9]+[0-9.]*)/g,XM=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function zd(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const i=t.split(WM);if(i===null||!i.length)return t;const r=[];let s=i.shift(),o=XM.test(s);for(;;){if(o){const a=parseFloat(s);isNaN(a)?r.push(s):r.push(Math.ceil(a*e*n)/n)}else r.push(s);if(s=i.shift(),s===void 0)return r.join("");o=!o}}function $M(t,e="defs"){let n="";const i=t.indexOf("<"+e);for(;i>=0;){const r=t.indexOf(">",i),s=t.indexOf("</"+e);if(r===-1||s===-1)break;const o=t.indexOf(">",s);if(o===-1)break;n+=t.slice(r+1,s).trim(),t=t.slice(0,i).trim()+t.slice(o+1)}return{defs:n,content:t}}function qM(t,e){return t?"<defs>"+t+"</defs>"+e:e}function jM(t,e,n){const i=$M(t);return qM(i.defs,e+i.content+n)}const YM=t=>t==="unset"||t==="undefined"||t==="none";function KM(t,e){const n={...ss,...t},i={...vg,...e},r={left:n.left,top:n.top,width:n.width,height:n.height};let s=n.body;[n,i].forEach(x=>{const m=[],p=x.hFlip,M=x.vFlip;let g=x.rotate;p?M?g+=2:(m.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),m.push("scale(-1 1)"),r.top=r.left=0):M&&(m.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),m.push("scale(1 -1)"),r.top=r.left=0);let _;switch(g<0&&(g-=Math.floor(g/4)*4),g=g%4,g){case 1:_=r.height/2+r.top,m.unshift("rotate(90 "+_.toString()+" "+_.toString()+")");break;case 2:m.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:_=r.width/2+r.left,m.unshift("rotate(-90 "+_.toString()+" "+_.toString()+")");break}g%2===1&&(r.left!==r.top&&(_=r.left,r.left=r.top,r.top=_),r.width!==r.height&&(_=r.width,r.width=r.height,r.height=_)),m.length&&(s=jM(s,'<g transform="'+m.join(" ")+'">',"</g>"))});const o=i.width,a=i.height,l=r.width,u=r.height;let c,f;o===null?(f=a===null?"1em":a==="auto"?u:a,c=zd(f,l/u)):(c=o==="auto"?l:o,f=a===null?zd(c,u/l):a==="auto"?u:a);const d={},h=(x,m)=>{YM(m)||(d[x]=m.toString())};h("width",c),h("height",f);const v=[r.left,r.top,l,u];return d.viewBox=v.join(" "),{attributes:d,viewBox:v,body:s}}const ZM=/\sid="(\S+)"/g,JM="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let QM=0;function eb(t,e=JM){const n=[];let i;for(;i=ZM.exec(t);)n.push(i[1]);if(!n.length)return t;const r="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(s=>{const o=typeof e=="function"?e(s):e+(QM++).toString(),a=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")}),t=t.replace(new RegExp(r,"g"),""),t}const wc=Object.create(null);function xg(t,e){wc[t]=e}function Rc(t){return wc[t]||wc[""]}function Ju(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const Oa=Object.create(null),ds=["https://api.simplesvg.com","https://api.unisvg.com"],qo=[];for(;ds.length>0;)ds.length===1||Math.random()>.5?qo.push(ds.shift()):qo.push(ds.pop());Oa[""]=Ju({resources:["https://api.iconify.design"].concat(qo)});function yg(t,e){const n=Ju(e);return n===null?!1:(Oa[t]=n,!0)}function Ba(t){return Oa[t]}function tb(){return Object.keys(Oa)}const nb=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let va=nb();function ib(t){va=t}function rb(){return va}function sb(t,e){const n=Ba(t);if(!n)return 0;let i;if(!n.maxURL)i=0;else{let r=0;n.resources.forEach(o=>{r=Math.max(r,o.length)});const s=e+".json?icons=";i=n.maxURL-r-n.path.length-s.length}return i}function ob(t){return t===404}const ab=(t,e,n)=>{const i=[],r=sb(t,e),s="icons";let o={type:s,provider:t,prefix:e,icons:[]},a=0;return n.forEach((l,u)=>{a+=l.length+1,a>=r&&u>0&&(i.push(o),o={type:s,provider:t,prefix:e,icons:[]},a=l.length),o.icons.push(l)}),i.push(o),i};function lb(t){if(typeof t=="string"){const e=Ba(t);if(e)return e.path}return"/"}const cb=(t,e,n)=>{if(!va){n("abort",424);return}let i=lb(e.provider);switch(e.type){case"icons":{const s=e.prefix,a=e.icons.join(","),l=new URLSearchParams({icons:a});i+=s+".json?"+l.toString();break}case"custom":{const s=e.uri;i+=s.slice(0,1)==="/"?s.slice(1):s;break}default:n("abort",400);return}let r=503;va(t+i).then(s=>{const o=s.status;if(o!==200){setTimeout(()=>{n(ob(o)?"abort":"next",o)});return}return r=501,s.json()}).then(s=>{if(typeof s!="object"||s===null){setTimeout(()=>{s===404?n("abort",s):n("next",r)});return}setTimeout(()=>{n("success",s)})}).catch(()=>{n("next",r)})},ub={prepare:ab,send:cb};function fb(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((r,s)=>r.provider!==s.provider?r.provider.localeCompare(s.provider):r.prefix!==s.prefix?r.prefix.localeCompare(s.prefix):r.name.localeCompare(s.name));let i={provider:"",prefix:"",name:""};return t.forEach(r=>{if(i.name===r.name&&i.prefix===r.prefix&&i.provider===r.provider)return;i=r;const s=r.provider,o=r.prefix,a=r.name,l=n[s]||(n[s]=Object.create(null)),u=l[o]||(l[o]=Ri(s,o));let c;a in u.icons?c=e.loaded:o===""||u.missing.has(a)?c=e.missing:c=e.pending;const f={provider:s,prefix:o,name:a};c.push(f)}),e}function Sg(t,e){t.forEach(n=>{const i=n.loaderCallbacks;i&&(n.loaderCallbacks=i.filter(r=>r.id!==e))})}function db(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const i=t.provider,r=t.prefix;e.forEach(s=>{const o=s.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==r)return!0;const u=l.name;if(t.icons[u])o.loaded.push({provider:i,prefix:r,name:u});else if(t.missing.has(u))o.missing.push({provider:i,prefix:r,name:u});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||Sg([t],s.id),s.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),s.abort))})}))}let hb=0;function pb(t,e,n){const i=hb++,r=Sg.bind(null,n,i);if(!e.pending.length)return r;const s={id:i,icons:e,callback:t,abort:r};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(s)}),r}function mb(t,e=!0,n=!1){const i=[];return t.forEach(r=>{const s=typeof r=="string"?Js(r,e,n):r;s&&i.push(s)}),i}var gb={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function _b(t,e,n,i){const r=t.resources.length,s=t.random?Math.floor(Math.random()*r):t.index;let o;if(t.random){let A=t.resources.slice(0);for(o=[];A.length>1;){const C=Math.floor(Math.random()*A.length);o.push(A[C]),A=A.slice(0,C).concat(A.slice(C+1))}o=o.concat(A)}else o=t.resources.slice(s).concat(t.resources.slice(0,s));const a=Date.now();let l="pending",u=0,c,f=null,d=[],h=[];typeof i=="function"&&h.push(i);function v(){f&&(clearTimeout(f),f=null)}function x(){l==="pending"&&(l="aborted"),v(),d.forEach(A=>{A.status==="pending"&&(A.status="aborted")}),d=[]}function m(A,C){C&&(h=[]),typeof A=="function"&&h.push(A)}function p(){return{startTime:a,payload:e,status:l,queriesSent:u,queriesPending:d.length,subscribe:m,abort:x}}function M(){l="failed",h.forEach(A=>{A(void 0,c)})}function g(){d.forEach(A=>{A.status==="pending"&&(A.status="aborted")}),d=[]}function _(A,C,I){const b=C!=="success";switch(d=d.filter(E=>E!==A),l){case"pending":break;case"failed":if(b||!t.dataAfterTimeout)return;break;default:return}if(C==="abort"){c=I,M();return}if(b){c=I,d.length||(o.length?R():M());return}if(v(),g(),!t.random){const E=t.resources.indexOf(A.resource);E!==-1&&E!==t.index&&(t.index=E)}l="completed",h.forEach(E=>{E(I)})}function R(){if(l!=="pending")return;v();const A=o.shift();if(A===void 0){if(d.length){f=setTimeout(()=>{v(),l==="pending"&&(g(),M())},t.timeout);return}M();return}const C={status:"pending",resource:A,callback:(I,b)=>{_(C,I,b)}};d.push(C),u++,f=setTimeout(R,t.rotate),n(A,e,C.callback)}return setTimeout(R),p}function Eg(t){const e={...gb,...t};let n=[];function i(){n=n.filter(a=>a().status==="pending")}function r(a,l,u){const c=_b(e,a,l,(f,d)=>{i(),u&&u(f,d)});return n.push(c),c}function s(a){return n.find(l=>a(l))||null}return{query:r,find:s,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:i}}function Vd(){}const pl=Object.create(null);function vb(t){if(!pl[t]){const e=Ba(t);if(!e)return;const n=Eg(e),i={config:e,redundancy:n};pl[t]=i}return pl[t]}function Mg(t,e,n){let i,r;if(typeof t=="string"){const s=Rc(t);if(!s)return n(void 0,424),Vd;r=s.send;const o=vb(t);o&&(i=o.redundancy)}else{const s=Ju(t);if(s){i=Eg(s);const o=t.resources?t.resources[0]:"",a=Rc(o);a&&(r=a.send)}}return!i||!r?(n(void 0,424),Vd):i.query(e,r,n)().abort}const Gd="iconify2",Vs="iconify",bg=Vs+"-count",Wd=Vs+"-version",Tg=36e5,xb=168,yb=50;function Cc(t,e){try{return t.getItem(e)}catch{}}function Qu(t,e,n){try{return t.setItem(e,n),!0}catch{}}function Xd(t,e){try{t.removeItem(e)}catch{}}function Pc(t,e){return Qu(t,bg,e.toString())}function Lc(t){return parseInt(Cc(t,bg))||0}const rr={local:!0,session:!0},Ag={local:new Set,session:new Set};let ef=!1;function Sb(t){ef=t}let vo=typeof window>"u"?{}:window;function wg(t){const e=t+"Storage";try{if(vo&&vo[e]&&typeof vo[e].length=="number")return vo[e]}catch{}rr[t]=!1}function Rg(t,e){const n=wg(t);if(!n)return;const i=Cc(n,Wd);if(i!==Gd){if(i){const a=Lc(n);for(let l=0;l<a;l++)Xd(n,Vs+l.toString())}Qu(n,Wd,Gd),Pc(n,0);return}const r=Math.floor(Date.now()/Tg)-xb,s=a=>{const l=Vs+a.toString(),u=Cc(n,l);if(typeof u=="string"){try{const c=JSON.parse(u);if(typeof c=="object"&&typeof c.cached=="number"&&c.cached>r&&typeof c.provider=="string"&&typeof c.data=="object"&&typeof c.data.prefix=="string"&&e(c,a))return!0}catch{}Xd(n,l)}};let o=Lc(n);for(let a=o-1;a>=0;a--)s(a)||(a===o-1?(o--,Pc(n,o)):Ag[t].add(a))}function Cg(){if(!ef){Sb(!0);for(const t in rr)Rg(t,e=>{const n=e.data,i=e.provider,r=n.prefix,s=Ri(i,r);if(!Ku(s,n).length)return!1;const o=n.lastModified||-1;return s.lastModifiedCached=s.lastModifiedCached?Math.min(s.lastModifiedCached,o):o,!0})}}function Eb(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const i in rr)Rg(i,r=>{const s=r.data;return r.provider!==t.provider||s.prefix!==t.prefix||s.lastModified===e});return!0}function Mb(t,e){ef||Cg();function n(i){let r;if(!rr[i]||!(r=wg(i)))return;const s=Ag[i];let o;if(s.size)s.delete(o=Array.from(s).shift());else if(o=Lc(r),o>=yb||!Pc(r,o+1))return;const a={cached:Math.floor(Date.now()/Tg),provider:t.provider,data:e};return Qu(r,Vs+o.toString(),JSON.stringify(a))}e.lastModified&&!Eb(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function $d(){}function bb(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,db(t)}))}function Tb(t){const e=[],n=[];return t.forEach(i=>{(i.match(dg)?e:n).push(i)}),{valid:e,invalid:n}}function hs(t,e,n,i){function r(){const s=t.pendingIcons;e.forEach(o=>{s&&s.delete(o),t.icons[o]||t.missing.add(o)})}if(n&&typeof n=="object")try{if(!Ku(t,n).length){r();return}i&&Mb(t,n)}catch(s){console.error(s)}r(),bb(t)}function qd(t,e){t instanceof Promise?t.then(n=>{e(n)}).catch(()=>{e(null)}):e(t)}function Ab(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:i}=t,r=t.iconsToLoad;if(delete t.iconsToLoad,!r||!r.length)return;const s=t.loadIcon;if(t.loadIcons&&(r.length>1||!s)){qd(t.loadIcons(r,i,n),c=>{hs(t,r,c,!1)});return}if(s){r.forEach(c=>{const f=s(c,i,n);qd(f,d=>{const h=d?{prefix:i,icons:{[c]:d}}:null;hs(t,[c],h,!1)})});return}const{valid:o,invalid:a}=Tb(r);if(a.length&&hs(t,a,null,!1),!o.length)return;const l=i.match(dg)?Rc(n):null;if(!l){hs(t,o,null,!1);return}l.prepare(n,i,o).forEach(c=>{Mg(n,c,f=>{hs(t,c.icons,f,!0)})})}))}const Pg=(t,e)=>{const n=mb(t,!0,gg()),i=fb(n);if(!i.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(i.loaded,i.missing,i.pending,$d)}),()=>{l=!1}}const r=Object.create(null),s=[];let o,a;return i.pending.forEach(l=>{const{provider:u,prefix:c}=l;if(c===a&&u===o)return;o=u,a=c,s.push(Ri(u,c));const f=r[u]||(r[u]=Object.create(null));f[c]||(f[c]=[])}),i.pending.forEach(l=>{const{provider:u,prefix:c,name:f}=l,d=Ri(u,c),h=d.pendingIcons||(d.pendingIcons=new Set);h.has(f)||(h.add(f),r[u][c].push(f))}),s.forEach(l=>{const u=r[l.provider][l.prefix];u.length&&Ab(l,u)}),e?pb(e,i,s):$d},kP=t=>new Promise((e,n)=>{const i=typeof t=="string"?Js(t,!0):t;if(!i){n(t);return}Pg([i||t],r=>{if(r.length&&i){const s=Zu(i);if(s){e({...ss,...s});return}}n(t)})});function wb(t,e,n){Ri("",e).loadIcons=t}function Rb(t,e){switch(t){case"local":case"session":rr[t]=e;break;case"all":for(const n in rr)rr[n]=e;break}}function Cb(t,e){const n={...t};for(const i in e){const r=e[i],s=typeof r;i in _g?(r===null||r&&(s==="string"||s==="number"))&&(n[i]=r):s===typeof n[i]&&(n[i]=i==="rotate"?r%4:r)}return n}const Pb=/[\s,]+/;function Lb(t,e){e.split(Pb).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function Ib(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function i(r){for(;r<0;)r+=4;return r%4}if(n===""){const r=parseInt(t);return isNaN(r)?0:i(r)}else if(n!==t){let r=0;switch(n){case"%":r=25;break;case"deg":r=90}if(r){let s=parseFloat(t.slice(0,t.length-n.length));return isNaN(s)?0:(s=s/r,s%1===0?i(s):0)}}return e}function Db(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const i in e)n+=" "+i+'="'+e[i]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function Ub(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Nb(t){return"data:image/svg+xml,"+Ub(t)}function Fb(t){return'url("'+Nb(t)+'")'}const jd={...vg,inline:!1},Ob={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},Bb={display:"inline-block"},Ic={backgroundColor:"currentColor"},Lg={backgroundColor:"transparent"},Yd={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Kd={webkitMask:Ic,mask:Ic,background:Lg};for(const t in Kd){const e=Kd[t];for(const n in Yd)e[t+n]=Yd[n]}const jo={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";jo[t+"-flip"]=e,jo[t.slice(0,1)+"-flip"]=e,jo[t+"Flip"]=e});function Zd(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Jd=(t,e)=>{const n=Cb(jd,e),i={...Ob},r=e.mode||"svg",s={},o=e.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let x in e){const m=e[x];if(m!==void 0)switch(x){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":n[x]=m===!0||m==="true"||m===1;break;case"flip":typeof m=="string"&&Lb(n,m);break;case"color":s.color=m;break;case"rotate":typeof m=="string"?n[x]=Ib(m):typeof m=="number"&&(n[x]=m);break;case"ariaHidden":case"aria-hidden":m!==!0&&m!=="true"&&delete i["aria-hidden"];break;default:{const p=jo[x];p?(m===!0||m==="true"||m===1)&&(n[p]=!0):jd[x]===void 0&&(i[x]=m)}}}const l=KM(t,n),u=l.attributes;if(n.inline&&(s.verticalAlign="-0.125em"),r==="svg"){i.style={...s,...a},Object.assign(i,u);let x=0,m=e.id;return typeof m=="string"&&(m=m.replace(/-/g,"_")),i.innerHTML=eb(l.body,m?()=>m+"ID"+x++:"iconifyVue"),un("svg",i)}const{body:c,width:f,height:d}=t,h=r==="mask"||(r==="bg"?!1:c.indexOf("currentColor")!==-1),v=Db(c,{...u,width:f+"",height:d+""});return i.style={...s,"--svg":Fb(v),width:Zd(u.width),height:Zd(u.height),...Bb,...h?Ic:Lg,...a},un("span",i)};function kb(t){Rb(t,!1)}gg(!0);xg("",ub);if(typeof document<"u"&&typeof window<"u"){Cg();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(i=>{try{(typeof i!="object"||i===null||i instanceof Array||typeof i.icons!="object"||typeof i.prefix!="string"||!GM(i))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const i="IconifyProviders["+n+"] is invalid.";try{const r=e[n];if(typeof r!="object"||!r||r.resources===void 0)continue;yg(n,r)||console.error(i)}catch{console.error(i)}}}}const Hb={...ss,body:""},HP=rs({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e,n){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let i;if(typeof t!="string"||(i=Js(t,!1,!0))===null)return this.abortLoading(),null;let r=Zu(i);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:t,abort:Pg([i],()=>{this.counter++})})),null;if(this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t)),n){r=Object.assign({},r);const o=n(r.body,i.name,i.prefix,i.provider);typeof o=="string"&&(r.body=o)}const s=["iconify"];return i.prefix!==""&&s.push("iconify--"+i.prefix),i.provider!==""&&s.push("iconify--"+i.provider),{data:r,classes:s}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted||t.ssr?this.getIcon(t.icon,t.onLoad,t.customise):null;if(!e)return Jd(Hb,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),Jd({...ss,...e.data},n)}}),zb={getAPIConfig:Ba,setAPIModule:xg,sendAPIQuery:Mg,setFetch:ib,getFetch:rb,listAPIProviders:tb},Vb={nuxt:{},icon:{provider:"iconify",class:"",aliases:{},iconifyApiEndpoint:"https://api.iconify.design",localApiEndpoint:"/api/_nuxt_icon",fallbackToApi:!0,cssSelectorPrefix:"i-",cssWherePseudo:!0,mode:"css",attrs:{"aria-hidden":!0},collections:["academicons","akar-icons","ant-design","arcticons","basil","bi","bitcoin-icons","bpmn","brandico","bx","bxl","bxs","bytesize","carbon","catppuccin","cbi","charm","ci","cib","cif","cil","circle-flags","circum","clarity","codicon","covid","cryptocurrency","cryptocurrency-color","dashicons","devicon","devicon-plain","ei","el","emojione","emojione-monotone","emojione-v1","entypo","entypo-social","eos-icons","ep","et","eva","f7","fa","fa-brands","fa-regular","fa-solid","fa6-brands","fa6-regular","fa6-solid","fad","fe","feather","file-icons","flag","flagpack","flat-color-icons","flat-ui","flowbite","fluent","fluent-emoji","fluent-emoji-flat","fluent-emoji-high-contrast","fluent-mdl2","fontelico","fontisto","formkit","foundation","fxemoji","gala","game-icons","geo","gg","gis","gravity-ui","gridicons","grommet-icons","guidance","healthicons","heroicons","heroicons-outline","heroicons-solid","hugeicons","humbleicons","ic","icomoon-free","icon-park","icon-park-outline","icon-park-solid","icon-park-twotone","iconamoon","iconoir","icons8","il","ion","iwwa","jam","la","lets-icons","line-md","logos","ls","lucide","lucide-lab","mage","majesticons","maki","map","marketeq","material-symbols","material-symbols-light","mdi","mdi-light","medical-icon","memory","meteocons","mi","mingcute","mono-icons","mynaui","nimbus","nonicons","noto","noto-v1","octicon","oi","ooui","openmoji","oui","pajamas","pepicons","pepicons-pencil","pepicons-pop","pepicons-print","ph","pixelarticons","prime","ps","quill","radix-icons","raphael","ri","rivet-icons","si-glyph","simple-icons","simple-line-icons","skill-icons","solar","streamline","streamline-emojis","subway","svg-spinners","system-uicons","tabler","tdesign","teenyicons","token","token-branded","topcoat","twemoji","typcn","uil","uim","uis","uit","uiw","unjs","vaadin","vs","vscode-icons","websymbol","weui","whh","wi","wpf","zmdi","zondicons"],fetchTimeout:1500}},Gb=uy(Vb);function Wb(){const t=vt();return t._appConfig||(t._appConfig=oi(Gb)),t._appConfig}const Xb=Fn({name:"@nuxt/icon",setup(){var r,s;const t=Zs(),e=Wb().icon;zb.setFetch($fetch.native),kb("all");const n=[];if(e.provider==="server"){const o=((s=(r=t.app)==null?void 0:r.baseURL)==null?void 0:s.replace(/\/$/,""))??"";n.push(o+(e.localApiEndpoint||"/api/_nuxt_icon")),(e.fallbackToApi===!0||e.fallbackToApi==="client-only")&&n.push(e.iconifyApiEndpoint)}else n.push(e.iconifyApiEndpoint);async function i(o,a){try{const l=await $fetch(n[0]+"/"+a+".json",{query:{icons:o.join(",")}});if(!l||l.prefix!==a||!l.icons)throw new Error("Invalid data"+JSON.stringify(l));return l}catch(l){return console.error("Failed to load custom icons",l),null}}yg("",{resources:n});for(const o of e.customCollections||[])o&&wb(i,o)}}),$b=[xS,SS,VE,GE,WE,XE,qE,UM,NM,Xb],qb=rs({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,i={};for(const r in t.route)Object.defineProperty(i,r,{get:()=>e===t.renderKey?t.route[r]:n[r],enumerable:!0});return Br(Ia,Zn(i)),()=>un(t.vnode,{ref:t.vnodeRef})}}),jb=rs({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:i}){const r=vt(),s=Mi(),o=en(Ia,null);let a;i({pageRef:s});const l=en(gy,null);let u;const c=r.deferHydration();if(r.isHydrating){const f=r.hooks.hookOnce("app:error",c);An().beforeEach(f)}return t.pageKey&&kr(()=>t.pageKey,(f,d)=>{f!==d&&r.callHook("page:loading:start")}),()=>un(fg,{name:t.name,route:t.route,...e},{default:f=>{const d=Kb(o,f.route,f.Component),h=o&&o.matched.length===f.route.matched.length;if(!f.Component){if(u&&!h)return u;c();return}if(u&&l&&!l.isCurrent(f.route))return u;if(d&&o&&(!l||l!=null&&l.isCurrent(o)))return h?u:null;const v=Tc(f,t.pageKey);!r.isHydrating&&!Zb(o,f.route,f.Component)&&a===v&&r.callHook("page:loading:end"),a=v;const x=!!(t.transition??f.route.meta.pageTransition??dc),m=x&&Yb([t.transition,f.route.meta.pageTransition,dc,{onAfterLeave:()=>{r.callHook("page:transition:finish",f.Component)}}].filter(Boolean)),p=t.keepalive??f.route.meta.keepalive??Jx;return u=LE(S0,x&&m,RE(p,un(am,{suspensible:!0,onPending:()=>r.callHook("page:start",f.Component),onResolve:()=>{qs(()=>r.callHook("page:finish",f.Component).then(()=>r.callHook("page:loading:end")).finally(c))}},{default:()=>{const M=un(qb,{key:v||void 0,vnode:n.default?un(Lt,void 0,n.default(f)):f.Component,route:f.route,renderKey:v||void 0,trackRootNodes:x,vnodeRef:s});return p&&(M.type.name=f.Component.type.name||f.Component.type.__name||"RouteProvider"),M}}))).default(),u}})}});function Yb(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?ju(n.onAfterLeave):void 0}));return Fm(...e)}function Kb(t,e,n){if(!t)return!1;const i=e.matched.findIndex(r=>{var s;return((s=r.components)==null?void 0:s.default)===(n==null?void 0:n.type)});return!i||i===-1?!1:e.matched.slice(0,i).some((r,s)=>{var o,a,l;return((o=r.components)==null?void 0:o.default)!==((l=(a=t.matched[s])==null?void 0:a.components)==null?void 0:l.default)})||n&&Tc({route:e,Component:n})!==Tc({route:t,Component:n})}function Zb(t,e,n){return t?e.matched.findIndex(r=>{var s;return((s=r.components)==null?void 0:s.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const tf="171",Jb=0,Qd=1,Qb=2,Ig=1,eT=2,$n=3,Ci=0,jt=1,Kn=2,Ti=0,Vr=1,eh=2,th=3,nh=4,tT=5,Ki=100,nT=101,iT=102,rT=103,sT=104,oT=200,aT=201,lT=202,cT=203,Dc=204,Uc=205,uT=206,fT=207,dT=208,hT=209,pT=210,mT=211,gT=212,_T=213,vT=214,Nc=0,Fc=1,Oc=2,Kr=3,Bc=4,kc=5,Hc=6,zc=7,Dg=0,xT=1,yT=2,Ai=0,ST=1,ET=2,MT=3,bT=4,TT=5,AT=6,wT=7,Ug=300,Zr=301,Jr=302,Vc=303,Gc=304,ka=306,Wc=1e3,Ji=1001,Xc=1002,bn=1003,RT=1004,xo=1005,Ln=1006,ml=1007,Qi=1008,ii=1009,Ng=1010,Fg=1011,Gs=1012,nf=1013,ar=1014,Jn=1015,Qs=1016,rf=1017,sf=1018,Qr=1020,Og=35902,Bg=1021,kg=1022,En=1023,Hg=1024,zg=1025,Gr=1026,es=1027,Vg=1028,of=1029,Gg=1030,af=1031,lf=1033,Yo=33776,Ko=33777,Zo=33778,Jo=33779,$c=35840,qc=35841,jc=35842,Yc=35843,Kc=36196,Zc=37492,Jc=37496,Qc=37808,eu=37809,tu=37810,nu=37811,iu=37812,ru=37813,su=37814,ou=37815,au=37816,lu=37817,cu=37818,uu=37819,fu=37820,du=37821,Qo=36492,hu=36494,pu=36495,Wg=36283,mu=36284,gu=36285,_u=36286,CT=3200,PT=3201,LT=0,IT=1,Si="",ln="srgb",ts="srgb-linear",xa="linear",ot="srgb",pr=7680,ih=519,DT=512,UT=513,NT=514,Xg=515,FT=516,OT=517,BT=518,kT=519,rh=35044,sh="300 es",Qn=2e3,ya=2001;class os{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gl=Math.PI/180,vu=180/Math.PI;function eo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[t&255]+Ut[t>>8&255]+Ut[t>>16&255]+Ut[t>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[n&63|128]+Ut[n>>8&255]+"-"+Ut[n>>16&255]+Ut[n>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function HT(t,e){return(t%e+e)%e}function _l(t,e,n){return(1-n)*t+n*e}function ps(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Xt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class it{constructor(e=0,n=0){it.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,s,o,a,l,u){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],h=i[5],v=i[8],x=r[0],m=r[3],p=r[6],M=r[1],g=r[4],_=r[7],R=r[2],A=r[5],C=r[8];return s[0]=o*x+a*M+l*R,s[3]=o*m+a*g+l*A,s[6]=o*p+a*_+l*C,s[1]=u*x+c*M+f*R,s[4]=u*m+c*g+f*A,s[7]=u*p+c*_+f*C,s[2]=d*x+h*M+v*R,s[5]=d*m+h*g+v*A,s[8]=d*p+h*_+v*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,h=u*s-o*l,v=n*f+i*d+r*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(r*u-c*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(c*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=h*x,e[7]=(i*l-u*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(vl.makeScale(e,n)),this}rotate(e){return this.premultiply(vl.makeRotation(-e)),this}translate(e,n){return this.premultiply(vl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vl=new We;function $g(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Sa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function zT(){const t=Sa("canvas");return t.style.display="block",t}const oh={};function Pr(t){t in oh||(oh[t]=!0,console.warn(t))}function VT(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function GT(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function WT(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ah=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),lh=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function XT(){const t={enabled:!0,workingColorSpace:ts,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ot&&(r.r=ti(r.r),r.g=ti(r.g),r.b=ti(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ot&&(r.r=Wr(r.r),r.g=Wr(r.g),r.b=Wr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Si?xa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ts]:{primaries:e,whitePoint:i,transfer:xa,toXYZ:ah,fromXYZ:lh,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:i,transfer:ot,toXYZ:ah,fromXYZ:lh,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),t}const Je=XT();function ti(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Wr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let mr;class $T{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{mr===void 0&&(mr=Sa("canvas")),mr.width=e.width,mr.height=e.height;const i=mr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=mr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Sa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ti(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ti(n[i]/255)*255):n[i]=ti(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qT=0;class qg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qT++}),this.uuid=eo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(xl(r[o].image)):s.push(xl(r[o]))}else s=xl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function xl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$T.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jT=0;class Yt extends os{constructor(e=Yt.DEFAULT_IMAGE,n=Yt.DEFAULT_MAPPING,i=Ji,r=Ji,s=Ln,o=Qi,a=En,l=ii,u=Yt.DEFAULT_ANISOTROPY,c=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jT++}),this.uuid=eo(),this.name="",this.source=new qg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ug)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wc:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case Xc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wc:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case Xc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Ug;Yt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,n=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],h=l[5],v=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-x)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+x)<.1&&Math.abs(v+m)<.1&&Math.abs(u+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,_=(h+1)/2,R=(p+1)/2,A=(c+d)/4,C=(f+x)/4,I=(v+m)/4;return g>_&&g>R?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=A/i,s=C/i):_>R?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=A/r,s=I/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=C/s,r=I/s),this.set(i,r,s,n),this}let M=Math.sqrt((m-v)*(m-v)+(f-x)*(f-x)+(d-c)*(d-c));return Math.abs(M)<.001&&(M=1),this.x=(m-v)/M,this.y=(f-x)/M,this.z=(d-c)/M,this.w=Math.acos((u+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class YT extends os{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new _t(0,0,e,n),this.scissorTest=!1,this.viewport=new _t(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new qg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lr extends YT{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class jg extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class KT extends Yt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class to{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],v=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=h,e[n+2]=v,e[n+3]=x;return}if(f!==x||l!==d||u!==h||c!==v){let m=1-a;const p=l*d+u*h+c*v+f*x,M=p>=0?1:-1,g=1-p*p;if(g>Number.EPSILON){const R=Math.sqrt(g),A=Math.atan2(R,p*M);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const _=a*M;if(l=l*m+d*_,u=u*m+h*_,c=c*m+v*_,f=f*m+x*_,m===1-a){const R=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=R,u*=R,c*=R,f*=R}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],h=s[o+2],v=s[o+3];return e[n]=a*v+c*f+l*h-u*d,e[n+1]=l*v+c*d+u*f-a*h,e[n+2]=u*v+c*h+a*d-l*f,e[n+3]=c*v-a*f-l*d-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*h*v,this._y=u*h*f-d*c*v,this._z=u*c*v+d*h*f,this._w=u*c*f-d*h*v;break;case"YXZ":this._x=d*c*f+u*h*v,this._y=u*h*f-d*c*v,this._z=u*c*v-d*h*f,this._w=u*c*f+d*h*v;break;case"ZXY":this._x=d*c*f-u*h*v,this._y=u*h*f+d*c*v,this._z=u*c*v+d*h*f,this._w=u*c*f-d*h*v;break;case"ZYX":this._x=d*c*f-u*h*v,this._y=u*h*f+d*c*v,this._z=u*c*v-d*h*f,this._w=u*c*f+d*h*v;break;case"YZX":this._x=d*c*f+u*h*v,this._y=u*h*f+d*c*v,this._z=u*c*v-d*h*f,this._w=u*c*f-d*h*v;break;case"XZY":this._x=d*c*f-u*h*v,this._y=u*h*f-d*c*v,this._z=u*c*v+d*h*f,this._w=u*c*f+d*h*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(c-l)*h,this._y=(s-u)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(c-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+u)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-u)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+c)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,n=0,i=0){Y.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ch.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ch.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return yl.copy(this).projectOnVector(e),this.sub(yl)}reflect(e){return this.sub(yl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const yl=new Y,ch=new to;class no{constructor(e=new Y(1/0,1/0,1/0),n=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(mn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(mn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=mn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,mn):mn.fromBufferAttribute(s,o),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yo.copy(i.boundingBox)),yo.applyMatrix4(e.matrixWorld),this.union(yo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ms),So.subVectors(this.max,ms),gr.subVectors(e.a,ms),_r.subVectors(e.b,ms),vr.subVectors(e.c,ms),ci.subVectors(_r,gr),ui.subVectors(vr,_r),Hi.subVectors(gr,vr);let n=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-Hi.z,Hi.y,ci.z,0,-ci.x,ui.z,0,-ui.x,Hi.z,0,-Hi.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-Hi.y,Hi.x,0];return!Sl(n,gr,_r,vr,So)||(n=[1,0,0,0,1,0,0,0,1],!Sl(n,gr,_r,vr,So))?!1:(Eo.crossVectors(ci,ui),n=[Eo.x,Eo.y,Eo.z],Sl(n,gr,_r,vr,So))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],mn=new Y,yo=new no,gr=new Y,_r=new Y,vr=new Y,ci=new Y,ui=new Y,Hi=new Y,ms=new Y,So=new Y,Eo=new Y,zi=new Y;function Sl(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){zi.fromArray(t,s);const a=r.x*Math.abs(zi.x)+r.y*Math.abs(zi.y)+r.z*Math.abs(zi.z),l=e.dot(zi),u=n.dot(zi),c=i.dot(zi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const ZT=new no,gs=new Y,El=new Y;class cf{constructor(e=new Y,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ZT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gs.subVectors(e,this.center);const n=gs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(gs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(El.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gs.copy(e.center).add(El)),this.expandByPoint(gs.copy(e.center).sub(El))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new Y,Ml=new Y,Mo=new Y,fi=new Y,bl=new Y,bo=new Y,Tl=new Y;class JT{constructor(e=new Y,n=new Y(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Vn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Vn.copy(this.origin).addScaledVector(this.direction,n),Vn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ml.copy(e).add(n).multiplyScalar(.5),Mo.copy(n).sub(e).normalize(),fi.copy(this.origin).sub(Ml);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Mo),a=fi.dot(this.direction),l=-fi.dot(Mo),u=fi.lengthSq(),c=Math.abs(1-o*o);let f,d,h,v;if(c>0)if(f=o*l-a,d=o*a-l,v=s*c,f>=0)if(d>=-v)if(d<=v){const x=1/c;f*=x,d*=x,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+u;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+u):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ml).addScaledVector(Mo,d),h}intersectSphere(e,n){Vn.subVectors(e.center,this.origin);const i=Vn.dot(this.direction),r=Vn.dot(Vn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Vn)!==null}intersectTriangle(e,n,i,r,s){bl.subVectors(n,e),bo.subVectors(i,e),Tl.crossVectors(bl,bo);let o=this.direction.dot(Tl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fi.subVectors(this.origin,e);const l=a*this.direction.dot(bo.crossVectors(fi,bo));if(l<0)return null;const u=a*this.direction.dot(bl.cross(fi));if(u<0||l+u>o)return null;const c=-a*fi.dot(Tl);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class St{constructor(e,n,i,r,s,o,a,l,u,c,f,d,h,v,x,m){St.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,f,d,h,v,x,m)}set(e,n,i,r,s,o,a,l,u,c,f,d,h,v,x,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=u,p[6]=c,p[10]=f,p[14]=d,p[3]=h,p[7]=v,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new St().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/xr.setFromMatrixColumn(e,0).length(),s=1/xr.setFromMatrixColumn(e,1).length(),o=1/xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,h=o*f,v=a*c,x=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=h+v*u,n[5]=d-x*u,n[9]=-a*l,n[2]=x-d*u,n[6]=v+h*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,h=l*f,v=u*c,x=u*f;n[0]=d+x*a,n[4]=v*a-h,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=h*a-v,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,h=l*f,v=u*c,x=u*f;n[0]=d-x*a,n[4]=-o*f,n[8]=v+h*a,n[1]=h+v*a,n[5]=o*c,n[9]=x-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,h=o*f,v=a*c,x=a*f;n[0]=l*c,n[4]=v*u-h,n[8]=d*u+x,n[1]=l*f,n[5]=x*u+d,n[9]=h*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*u,v=a*l,x=a*u;n[0]=l*c,n[4]=x-d*f,n[8]=v*f+h,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=h*f+v,n[10]=d-x*f}else if(e.order==="XZY"){const d=o*l,h=o*u,v=a*l,x=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=d*f+x,n[5]=o*c,n[9]=h*f-v,n[2]=v*f-h,n[6]=a*c,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QT,e,eA)}lookAt(e,n,i){const r=this.elements;return Zt.subVectors(e,n),Zt.lengthSq()===0&&(Zt.z=1),Zt.normalize(),di.crossVectors(i,Zt),di.lengthSq()===0&&(Math.abs(i.z)===1?Zt.x+=1e-4:Zt.z+=1e-4,Zt.normalize(),di.crossVectors(i,Zt)),di.normalize(),To.crossVectors(Zt,di),r[0]=di.x,r[4]=To.x,r[8]=Zt.x,r[1]=di.y,r[5]=To.y,r[9]=Zt.y,r[2]=di.z,r[6]=To.z,r[10]=Zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],h=i[13],v=i[2],x=i[6],m=i[10],p=i[14],M=i[3],g=i[7],_=i[11],R=i[15],A=r[0],C=r[4],I=r[8],b=r[12],E=r[1],L=r[5],D=r[9],N=r[13],j=r[2],ne=r[6],H=r[10],ee=r[14],F=r[3],de=r[7],ve=r[11],Ae=r[15];return s[0]=o*A+a*E+l*j+u*F,s[4]=o*C+a*L+l*ne+u*de,s[8]=o*I+a*D+l*H+u*ve,s[12]=o*b+a*N+l*ee+u*Ae,s[1]=c*A+f*E+d*j+h*F,s[5]=c*C+f*L+d*ne+h*de,s[9]=c*I+f*D+d*H+h*ve,s[13]=c*b+f*N+d*ee+h*Ae,s[2]=v*A+x*E+m*j+p*F,s[6]=v*C+x*L+m*ne+p*de,s[10]=v*I+x*D+m*H+p*ve,s[14]=v*b+x*N+m*ee+p*Ae,s[3]=M*A+g*E+_*j+R*F,s[7]=M*C+g*L+_*ne+R*de,s[11]=M*I+g*D+_*H+R*ve,s[15]=M*b+g*N+_*ee+R*Ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],h=e[14],v=e[3],x=e[7],m=e[11],p=e[15];return v*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*h-i*l*h)+x*(+n*l*h-n*u*d+s*o*d-r*o*h+r*u*c-s*l*c)+m*(+n*u*f-n*a*h-s*o*f+i*o*h+s*a*c-i*u*c)+p*(-r*a*c-n*l*f+n*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],h=e[11],v=e[12],x=e[13],m=e[14],p=e[15],M=f*m*u-x*d*u+x*l*h-a*m*h-f*l*p+a*d*p,g=v*d*u-c*m*u-v*l*h+o*m*h+c*l*p-o*d*p,_=c*x*u-v*f*u+v*a*h-o*x*h-c*a*p+o*f*p,R=v*f*l-c*x*l-v*a*d+o*x*d+c*a*m-o*f*m,A=n*M+i*g+r*_+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=M*C,e[1]=(x*d*s-f*m*s-x*r*h+i*m*h+f*r*p-i*d*p)*C,e[2]=(a*m*s-x*l*s+x*r*u-i*m*u-a*r*p+i*l*p)*C,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*h-i*l*h)*C,e[4]=g*C,e[5]=(c*m*s-v*d*s+v*r*h-n*m*h-c*r*p+n*d*p)*C,e[6]=(v*l*s-o*m*s-v*r*u+n*m*u+o*r*p-n*l*p)*C,e[7]=(o*d*s-c*l*s+c*r*u-n*d*u-o*r*h+n*l*h)*C,e[8]=_*C,e[9]=(v*f*s-c*x*s-v*i*h+n*x*h+c*i*p-n*f*p)*C,e[10]=(o*x*s-v*a*s+v*i*u-n*x*u-o*i*p+n*a*p)*C,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*h-n*a*h)*C,e[12]=R*C,e[13]=(c*x*r-v*f*r+v*i*d-n*x*d-c*i*m+n*f*m)*C,e[14]=(v*a*r-o*x*r-v*i*l+n*x*l+o*i*m-n*a*m)*C,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*d+n*a*d)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,d=s*u,h=s*c,v=s*f,x=o*c,m=o*f,p=a*f,M=l*u,g=l*c,_=l*f,R=i.x,A=i.y,C=i.z;return r[0]=(1-(x+p))*R,r[1]=(h+_)*R,r[2]=(v-g)*R,r[3]=0,r[4]=(h-_)*A,r[5]=(1-(d+p))*A,r[6]=(m+M)*A,r[7]=0,r[8]=(v+g)*C,r[9]=(m-M)*C,r[10]=(1-(d+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=xr.set(r[0],r[1],r[2]).length();const o=xr.set(r[4],r[5],r[6]).length(),a=xr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],gn.copy(this);const u=1/s,c=1/o,f=1/a;return gn.elements[0]*=u,gn.elements[1]*=u,gn.elements[2]*=u,gn.elements[4]*=c,gn.elements[5]*=c,gn.elements[6]*=c,gn.elements[8]*=f,gn.elements[9]*=f,gn.elements[10]*=f,n.setFromRotationMatrix(gn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Qn){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let h,v;if(a===Qn)h=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ya)h=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Qn){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(o-s),d=(n+e)*u,h=(i+r)*c;let v,x;if(a===Qn)v=(o+s)*f,x=-2*f;else if(a===ya)v=s*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const xr=new Y,gn=new St,QT=new Y(0,0,0),eA=new Y(1,1,1),di=new Y,To=new Y,Zt=new Y,uh=new St,fh=new to;class ri{constructor(e=0,n=0,i=0,r=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return uh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uh,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fh.setFromEuler(this),this.setFromQuaternion(fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class Yg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tA=0;const dh=new Y,yr=new to,Gn=new St,Ao=new Y,_s=new Y,nA=new Y,iA=new to,hh=new Y(1,0,0),ph=new Y(0,1,0),mh=new Y(0,0,1),gh={type:"added"},rA={type:"removed"},Sr={type:"childadded",child:null},Al={type:"childremoved",child:null};class tn extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tA++}),this.uuid=eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=tn.DEFAULT_UP.clone();const e=new Y,n=new ri,i=new to,r=new Y(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new We}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return yr.setFromAxisAngle(e,n),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,n){return yr.setFromAxisAngle(e,n),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(hh,e)}rotateY(e){return this.rotateOnAxis(ph,e)}rotateZ(e){return this.rotateOnAxis(mh,e)}translateOnAxis(e,n){return dh.copy(e).applyQuaternion(this.quaternion),this.position.add(dh.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(hh,e)}translateY(e){return this.translateOnAxis(ph,e)}translateZ(e){return this.translateOnAxis(mh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ao.copy(e):Ao.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(_s,Ao,this.up):Gn.lookAt(Ao,_s,this.up),this.quaternion.setFromRotationMatrix(Gn),r&&(Gn.extractRotation(r.matrixWorld),yr.setFromRotationMatrix(Gn),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gh),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(rA),Al.child=e,this.dispatchEvent(Al),Al.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gh),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,e,nA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,iA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}tn.DEFAULT_UP=new Y(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new Y,Wn=new Y,wl=new Y,Xn=new Y,Er=new Y,Mr=new Y,_h=new Y,Rl=new Y,Cl=new Y,Pl=new Y,Ll=new _t,Il=new _t,Dl=new _t;class Sn{constructor(e=new Y,n=new Y,i=new Y){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),_n.subVectors(e,n),r.cross(_n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){_n.subVectors(r,n),Wn.subVectors(i,n),wl.subVectors(e,n);const o=_n.dot(_n),a=_n.dot(Wn),l=_n.dot(wl),u=Wn.dot(Wn),c=Wn.dot(wl),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(u*l-a*c)*d,v=(o*c-a*l)*d;return s.set(1-h-v,v,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Xn)===null?!1:Xn.x>=0&&Xn.y>=0&&Xn.x+Xn.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Xn.x),l.addScaledVector(o,Xn.y),l.addScaledVector(a,Xn.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Ll.setScalar(0),Il.setScalar(0),Dl.setScalar(0),Ll.fromBufferAttribute(e,n),Il.fromBufferAttribute(e,i),Dl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ll,s.x),o.addScaledVector(Il,s.y),o.addScaledVector(Dl,s.z),o}static isFrontFacing(e,n,i,r){return _n.subVectors(i,n),Wn.subVectors(e,n),_n.cross(Wn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),_n.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Sn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Sn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Er.subVectors(r,i),Mr.subVectors(s,i),Rl.subVectors(e,i);const l=Er.dot(Rl),u=Mr.dot(Rl);if(l<=0&&u<=0)return n.copy(i);Cl.subVectors(e,r);const c=Er.dot(Cl),f=Mr.dot(Cl);if(c>=0&&f<=c)return n.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(Er,o);Pl.subVectors(e,s);const h=Er.dot(Pl),v=Mr.dot(Pl);if(v>=0&&h<=v)return n.copy(s);const x=h*u-l*v;if(x<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(Mr,a);const m=c*v-h*f;if(m<=0&&f-c>=0&&h-v>=0)return _h.subVectors(s,r),a=(f-c)/(f-c+(h-v)),n.copy(r).addScaledVector(_h,a);const p=1/(m+x+d);return o=x*p,a=d*p,n.copy(i).addScaledVector(Er,o).addScaledVector(Mr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},wo={h:0,s:0,l:0};function Ul(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class at{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=HT(e,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Ul(o,s,e+1/3),this.g=Ul(o,s,e),this.b=Ul(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=ln){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ln){const i=Kg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=Wr(e.r),this.g=Wr(e.g),this.b=Wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return Je.fromWorkingColorSpace(Nt.copy(this),e),Math.round(qe(Nt.r*255,0,255))*65536+Math.round(qe(Nt.g*255,0,255))*256+Math.round(qe(Nt.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(Nt.copy(this),n);const i=Nt.r,r=Nt.g,s=Nt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(Nt.copy(this),n),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=ln){Je.fromWorkingColorSpace(Nt.copy(this),e);const n=Nt.r,i=Nt.g,r=Nt.b;return e!==ln?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+n,hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(hi),e.getHSL(wo);const i=_l(hi.h,wo.h,n),r=_l(hi.s,wo.s,n),s=_l(hi.l,wo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new at;at.NAMES=Kg;let sA=0;class Ha extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sA++}),this.uuid=eo(),this.name="",this.type="Material",this.blending=Vr,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dc,this.blendDst=Uc,this.blendEquation=Ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ih,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Vr&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Dc&&(i.blendSrc=this.blendSrc),this.blendDst!==Uc&&(i.blendDst=this.blendDst),this.blendEquation!==Ki&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Kr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ih&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class uf extends Ha{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Dg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yt=new Y,Ro=new it;class Un{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=rh,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ro.fromBufferAttribute(this,n),Ro.applyMatrix3(e),this.setXY(n,Ro.x,Ro.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix3(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyMatrix4(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.applyNormalMatrix(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)yt.fromBufferAttribute(this,n),yt.transformDirection(e),this.setXYZ(n,yt.x,yt.y,yt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ps(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Xt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ps(n,this.array)),n}setX(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ps(n,this.array)),n}setY(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ps(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ps(n,this.array)),n}setW(e,n){return this.normalized&&(n=Xt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Xt(n,this.array),i=Xt(i,this.array),r=Xt(r,this.array),s=Xt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==rh&&(e.usage=this.usage),e}}class Zg extends Un{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Jg extends Un{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Nn extends Un{constructor(e,n,i){super(new Float32Array(e),n,i)}}let oA=0;const an=new St,Nl=new tn,br=new Y,Jt=new no,vs=new no,wt=new Y;class Di extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oA++}),this.uuid=eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($g(e)?Jg:Zg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,n,i){return an.makeTranslation(e,n,i),this.applyMatrix4(an),this}scale(e,n,i){return an.makeScale(e,n,i),this.applyMatrix4(an),this}lookAt(e){return Nl.lookAt(e),Nl.updateMatrix(),this.applyMatrix4(Nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Nn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new no);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];vs.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(Jt.min,vs.min),Jt.expandByPoint(wt),wt.addVectors(Jt.max,vs.max),Jt.expandByPoint(wt)):(Jt.expandByPoint(vs.min),Jt.expandByPoint(vs.max))}Jt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(wt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)wt.fromBufferAttribute(a,u),l&&(br.fromBufferAttribute(e,u),wt.add(br)),r=Math.max(r,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Un(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new Y,l[I]=new Y;const u=new Y,c=new Y,f=new Y,d=new it,h=new it,v=new it,x=new Y,m=new Y;function p(I,b,E){u.fromBufferAttribute(i,I),c.fromBufferAttribute(i,b),f.fromBufferAttribute(i,E),d.fromBufferAttribute(s,I),h.fromBufferAttribute(s,b),v.fromBufferAttribute(s,E),c.sub(u),f.sub(u),h.sub(d),v.sub(d);const L=1/(h.x*v.y-v.x*h.y);isFinite(L)&&(x.copy(c).multiplyScalar(v.y).addScaledVector(f,-h.y).multiplyScalar(L),m.copy(f).multiplyScalar(h.x).addScaledVector(c,-v.x).multiplyScalar(L),a[I].add(x),a[b].add(x),a[E].add(x),l[I].add(m),l[b].add(m),l[E].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let I=0,b=M.length;I<b;++I){const E=M[I],L=E.start,D=E.count;for(let N=L,j=L+D;N<j;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const g=new Y,_=new Y,R=new Y,A=new Y;function C(I){R.fromBufferAttribute(r,I),A.copy(R);const b=a[I];g.copy(b),g.sub(R.multiplyScalar(R.dot(b))).normalize(),_.crossVectors(A,b);const L=_.dot(l[I])<0?-1:1;o.setXYZW(I,g.x,g.y,g.z,L)}for(let I=0,b=M.length;I<b;++I){const E=M[I],L=E.start,D=E.count;for(let N=L,j=L+D;N<j;N+=3)C(e.getX(N+0)),C(e.getX(N+1)),C(e.getX(N+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Un(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,u=new Y,c=new Y,f=new Y;if(e)for(let d=0,h=e.count;d<h;d+=3){const v=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)wt.fromBufferAttribute(e,n),wt.normalize(),e.setXYZ(n,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let h=0,v=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*c;for(let p=0;p<c;p++)d[v++]=u[h++]}return new Un(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Di,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const h=u[f];c.push(h.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,h=f.length;d<h;d++)c.push(f[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vh=new St,Vi=new JT,Co=new cf,xh=new Y,Po=new Y,Lo=new Y,Io=new Y,Fl=new Y,Do=new Y,yh=new Y,Uo=new Y;class In extends tn{constructor(e=new Di,n=new uf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Do.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Fl.fromBufferAttribute(f,e),o?Do.addScaledVector(Fl,c):Do.addScaledVector(Fl.sub(n),c))}n.add(Do)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(s),Vi.copy(e.ray).recast(e.near),!(Co.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Co,xh)===null||Vi.origin.distanceToSquared(xh)>(e.far-e.near)**2))&&(vh.copy(s).invert(),Vi.copy(e.ray).applyMatrix4(vh),!(i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Vi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],p=o[m.materialIndex],M=Math.max(m.start,h.start),g=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let _=M,R=g;_<R;_+=3){const A=a.getX(_),C=a.getX(_+1),I=a.getX(_+2);r=No(this,p,e,i,u,c,f,A,C,I),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=v,p=x;m<p;m+=3){const M=a.getX(m),g=a.getX(m+1),_=a.getX(m+2);r=No(this,o,e,i,u,c,f,M,g,_),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,x=d.length;v<x;v++){const m=d[v],p=o[m.materialIndex],M=Math.max(m.start,h.start),g=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let _=M,R=g;_<R;_+=3){const A=_,C=_+1,I=_+2;r=No(this,p,e,i,u,c,f,A,C,I),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let m=v,p=x;m<p;m+=3){const M=m,g=m+1,_=m+2;r=No(this,o,e,i,u,c,f,M,g,_),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function aA(t,e,n,i,r,s,o,a){let l;if(e.side===jt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ci,a),l===null)return null;Uo.copy(a),Uo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Uo);return u<n.near||u>n.far?null:{distance:u,point:Uo.clone(),object:t}}function No(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Po),t.getVertexPosition(l,Lo),t.getVertexPosition(u,Io);const c=aA(t,e,n,i,Po,Lo,Io,yh);if(c){const f=new Y;Sn.getBarycoord(yh,Po,Lo,Io,f),r&&(c.uv=Sn.getInterpolatedAttribute(r,a,l,u,f,new it)),s&&(c.uv1=Sn.getInterpolatedAttribute(s,a,l,u,f,new it)),o&&(c.normal=Sn.getInterpolatedAttribute(o,a,l,u,f,new Y),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new Y,materialIndex:0};Sn.getNormal(Po,Lo,Io,d.normal),c.face=d,c.barycoord=f}return c}class io extends Di{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,h=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Nn(u,3)),this.setAttribute("normal",new Nn(c,3)),this.setAttribute("uv",new Nn(f,2));function v(x,m,p,M,g,_,R,A,C,I,b){const E=_/C,L=R/I,D=_/2,N=R/2,j=A/2,ne=C+1,H=I+1;let ee=0,F=0;const de=new Y;for(let ve=0;ve<H;ve++){const Ae=ve*L-N;for(let Le=0;Le<ne;Le++){const je=Le*E-D;de[x]=je*M,de[m]=Ae*g,de[p]=j,u.push(de.x,de.y,de.z),de[x]=0,de[m]=0,de[p]=A>0?1:-1,c.push(de.x,de.y,de.z),f.push(Le/C),f.push(1-ve/I),ee+=1}}for(let ve=0;ve<I;ve++)for(let Ae=0;Ae<C;Ae++){const Le=d+Ae+ne*ve,je=d+Ae+ne*(ve+1),ie=d+(Ae+1)+ne*(ve+1),me=d+(Ae+1)+ne*ve;l.push(Le,je,me),l.push(je,ie,me),F+=6}a.addGroup(h,F,b),h+=F,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ns(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Ht(t){const e={};for(let n=0;n<t.length;n++){const i=ns(t[n]);for(const r in i)e[r]=i[r]}return e}function lA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Qg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const cA={clone:ns,merge:Ht};var uA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends Ha{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uA,this.fragmentShader=fA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.uniformsGroups=lA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class e_ extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Qn}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new Y,Sh=new it,Eh=new it;class cn extends e_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=vu*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vu*2*Math.atan(Math.tan(gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,n){return this.getViewBounds(e,Sh,Eh),n.subVectors(Eh,Sh)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(gl*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Tr=-90,Ar=1;class dA extends tn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new cn(Tr,Ar,e,n);r.layers=this.layers,this.add(r);const s=new cn(Tr,Ar,e,n);s.layers=this.layers,this.add(s);const o=new cn(Tr,Ar,e,n);o.layers=this.layers,this.add(o);const a=new cn(Tr,Ar,e,n);a.layers=this.layers,this.add(a);const l=new cn(Tr,Ar,e,n);l.layers=this.layers,this.add(l);const u=new cn(Tr,Ar,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ya)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,d,h),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class t_ extends Yt{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Zr,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hA extends lr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new t_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ln}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new io(5,5,5),s=new Pi({name:"CubemapFromEquirect",uniforms:ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:Ti});s.uniforms.tEquirect.value=n;const o=new In(r,s),a=n.minFilter;return n.minFilter===Qi&&(n.minFilter=Ln),new dA(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class pA extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ol=new Y,mA=new Y,gA=new We;class ji{constructor(e=new Y(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ol.subVectors(i,n).cross(mA.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ol),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||gA.getNormalMatrix(e),r=this.coplanarPoint(Ol).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new cf,Fo=new Y;class n_{constructor(e=new ji,n=new ji,i=new ji,r=new ji,s=new ji,o=new ji){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Qn){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],h=r[8],v=r[9],x=r[10],m=r[11],p=r[12],M=r[13],g=r[14],_=r[15];if(i[0].setComponents(l-s,d-u,m-h,_-p).normalize(),i[1].setComponents(l+s,d+u,m+h,_+p).normalize(),i[2].setComponents(l+o,d+c,m+v,_+M).normalize(),i[3].setComponents(l-o,d-c,m-v,_-M).normalize(),i[4].setComponents(l-a,d-f,m-x,_-g).normalize(),n===Qn)i[5].setComponents(l+a,d+f,m+x,_+g).normalize();else if(n===ya)i[5].setComponents(a,f,x,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Gi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Fo.x=r.normal.x>0?e.max.x:e.min.x,Fo.y=r.normal.y>0?e.max.y:e.min.y,Fo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Oo extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class i_ extends Yt{constructor(e,n,i,r,s,o,a,l,u,c=Gr){if(c!==Gr&&c!==es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Gr&&(i=ar),i===void 0&&c===es&&(i=Qr),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class ff extends Di{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new Nn(s,3)),this.setAttribute("normal",new Nn(s.slice(),3)),this.setAttribute("uv",new Nn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const g=new Y,_=new Y,R=new Y;for(let A=0;A<n.length;A+=3)h(n[A+0],g),h(n[A+1],_),h(n[A+2],R),l(g,_,R,M)}function l(M,g,_,R){const A=R+1,C=[];for(let I=0;I<=A;I++){C[I]=[];const b=M.clone().lerp(_,I/A),E=g.clone().lerp(_,I/A),L=A-I;for(let D=0;D<=L;D++)D===0&&I===A?C[I][D]=b:C[I][D]=b.clone().lerp(E,D/L)}for(let I=0;I<A;I++)for(let b=0;b<2*(A-I)-1;b++){const E=Math.floor(b/2);b%2===0?(d(C[I][E+1]),d(C[I+1][E]),d(C[I][E])):(d(C[I][E+1]),d(C[I+1][E+1]),d(C[I+1][E]))}}function u(M){const g=new Y;for(let _=0;_<s.length;_+=3)g.x=s[_+0],g.y=s[_+1],g.z=s[_+2],g.normalize().multiplyScalar(M),s[_+0]=g.x,s[_+1]=g.y,s[_+2]=g.z}function c(){const M=new Y;for(let g=0;g<s.length;g+=3){M.x=s[g+0],M.y=s[g+1],M.z=s[g+2];const _=m(M)/2/Math.PI+.5,R=p(M)/Math.PI+.5;o.push(_,1-R)}v(),f()}function f(){for(let M=0;M<o.length;M+=6){const g=o[M+0],_=o[M+2],R=o[M+4],A=Math.max(g,_,R),C=Math.min(g,_,R);A>.9&&C<.1&&(g<.2&&(o[M+0]+=1),_<.2&&(o[M+2]+=1),R<.2&&(o[M+4]+=1))}}function d(M){s.push(M.x,M.y,M.z)}function h(M,g){const _=M*3;g.x=e[_+0],g.y=e[_+1],g.z=e[_+2]}function v(){const M=new Y,g=new Y,_=new Y,R=new Y,A=new it,C=new it,I=new it;for(let b=0,E=0;b<s.length;b+=9,E+=6){M.set(s[b+0],s[b+1],s[b+2]),g.set(s[b+3],s[b+4],s[b+5]),_.set(s[b+6],s[b+7],s[b+8]),A.set(o[E+0],o[E+1]),C.set(o[E+2],o[E+3]),I.set(o[E+4],o[E+5]),R.copy(M).add(g).add(_).divideScalar(3);const L=m(R);x(A,E+0,M,L),x(C,E+2,g,L),x(I,E+4,_,L)}}function x(M,g,_,R){R<0&&M.x===1&&(o[g]=M.x-1),_.x===0&&_.z===0&&(o[g]=R/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ff(e.vertices,e.indices,e.radius,e.details)}}class za extends Di{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=n/l,h=[],v=[],x=[],m=[];for(let p=0;p<c;p++){const M=p*d-o;for(let g=0;g<u;g++){const _=g*f-s;v.push(_,-M,0),x.push(0,0,1),m.push(g/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const g=M+u*p,_=M+u*(p+1),R=M+1+u*(p+1),A=M+1+u*p;h.push(g,_,A),h.push(_,R,A)}this.setIndex(h),this.setAttribute("position",new Nn(v,3)),this.setAttribute("normal",new Nn(x,3)),this.setAttribute("uv",new Nn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.width,e.height,e.widthSegments,e.heightSegments)}}class df extends ff{constructor(e=1,n=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,n),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new df(e.radius,e.detail)}}class _A extends Ha{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=CT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vA extends Ha{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xA extends e_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class yA extends cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function Mh(t,e,n,i){const r=SA(i);switch(n){case Bg:return t*e;case Hg:return t*e;case zg:return t*e*2;case Vg:return t*e/r.components*r.byteLength;case of:return t*e/r.components*r.byteLength;case Gg:return t*e*2/r.components*r.byteLength;case af:return t*e*2/r.components*r.byteLength;case kg:return t*e*3/r.components*r.byteLength;case En:return t*e*4/r.components*r.byteLength;case lf:return t*e*4/r.components*r.byteLength;case Yo:case Ko:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zo:case Jo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qc:case Yc:return Math.max(t,16)*Math.max(e,8)/4;case $c:case jc:return Math.max(t,8)*Math.max(e,8)/2;case Kc:case Zc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Jc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case eu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case tu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case nu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case iu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ru:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case su:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ou:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case au:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case lu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case cu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case uu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case fu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case du:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Qo:case hu:case pu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Wg:case mu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case gu:case _u:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function SA(t){switch(t){case ii:case Ng:return{byteLength:1,components:1};case Gs:case Fg:case Qs:return{byteLength:2,components:1};case rf:case sf:return{byteLength:2,components:4};case ar:case nf:case Jn:return{byteLength:4,components:1};case Og:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:tf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=tf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function r_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function EA(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,f=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,c),a.onUploadCallback();let h;if(u instanceof Float32Array)h=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=t.SHORT;else if(u instanceof Uint32Array)h=t.UNSIGNED_INT;else if(u instanceof Int32Array)h=t.INT;else if(u instanceof Int8Array)h=t.BYTE;else if(u instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(t.bindBuffer(u,a),f.length===0)t.bufferSubData(u,0,c);else{f.sort((h,v)=>h.start-v.start);let d=0;for(let h=1;h<f.length;h++){const v=f[d],x=f[h];x.start<=v.start+v.count+1?v.count=Math.max(v.count,x.start+x.count-v.start):(++d,f[d]=x)}f.length=d+1;for(let h=0,v=f.length;h<v;h++){const x=f[h];t.bufferSubData(u,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var MA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bA=`#ifdef USE_ALPHAHASH
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
#endif`,TA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CA=`#ifdef USE_AOMAP
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
#endif`,PA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,LA=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,IA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,UA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,FA=`#ifdef USE_IRIDESCENCE
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
#endif`,OA=`#ifdef USE_BUMPMAP
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
#endif`,BA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,HA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,WA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,XA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,$A=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,qA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,jA=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,YA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,QA="gl_FragColor = linearToOutputTexel( gl_FragColor );",ew=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iw=`#ifdef USE_ENVMAP
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
#endif`,rw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ow=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uw=`#ifdef USE_GRADIENTMAP
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
}`,fw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pw=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,mw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,gw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_w=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Sw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ew=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Aw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ww=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Iw=`#if defined( USE_POINTS_UV )
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
#endif`,Dw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ow=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bw=`#ifdef USE_MORPHTARGETS
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
#endif`,kw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Vw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ww=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xw=`#ifdef USE_NORMALMAP
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
#endif`,$w=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Jw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rR=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sR=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,oR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,aR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,lR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cR=`#ifdef USE_SKINNING
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
#endif`,uR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fR=`#ifdef USE_SKINNING
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
#endif`,dR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gR=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_R=`#ifdef USE_TRANSMISSION
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
#endif`,vR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,SR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ER=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MR=`uniform sampler2D t2D;
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
}`,bR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RR=`#include <common>
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
}`,CR=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,PR=`#define DISTANCE
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
}`,LR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,IR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UR=`uniform float scale;
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
}`,NR=`uniform vec3 diffuse;
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
}`,FR=`#include <common>
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
}`,OR=`uniform vec3 diffuse;
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
}`,BR=`#define LAMBERT
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
}`,kR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,HR=`#define MATCAP
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
}`,zR=`#define MATCAP
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
}`,VR=`#define NORMAL
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
}`,GR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,WR=`#define PHONG
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
}`,XR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,$R=`#define STANDARD
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
}`,qR=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,jR=`#define TOON
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
}`,YR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,KR=`uniform float size;
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
}`,ZR=`uniform vec3 diffuse;
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
}`,JR=`#include <common>
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
}`,QR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,eC=`uniform float rotation;
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
}`,tC=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:MA,alphahash_pars_fragment:bA,alphamap_fragment:TA,alphamap_pars_fragment:AA,alphatest_fragment:wA,alphatest_pars_fragment:RA,aomap_fragment:CA,aomap_pars_fragment:PA,batching_pars_vertex:LA,batching_vertex:IA,begin_vertex:DA,beginnormal_vertex:UA,bsdfs:NA,iridescence_fragment:FA,bumpmap_pars_fragment:OA,clipping_planes_fragment:BA,clipping_planes_pars_fragment:kA,clipping_planes_pars_vertex:HA,clipping_planes_vertex:zA,color_fragment:VA,color_pars_fragment:GA,color_pars_vertex:WA,color_vertex:XA,common:$A,cube_uv_reflection_fragment:qA,defaultnormal_vertex:jA,displacementmap_pars_vertex:YA,displacementmap_vertex:KA,emissivemap_fragment:ZA,emissivemap_pars_fragment:JA,colorspace_fragment:QA,colorspace_pars_fragment:ew,envmap_fragment:tw,envmap_common_pars_fragment:nw,envmap_pars_fragment:iw,envmap_pars_vertex:rw,envmap_physical_pars_fragment:mw,envmap_vertex:sw,fog_vertex:ow,fog_pars_vertex:aw,fog_fragment:lw,fog_pars_fragment:cw,gradientmap_pars_fragment:uw,lightmap_pars_fragment:fw,lights_lambert_fragment:dw,lights_lambert_pars_fragment:hw,lights_pars_begin:pw,lights_toon_fragment:gw,lights_toon_pars_fragment:_w,lights_phong_fragment:vw,lights_phong_pars_fragment:xw,lights_physical_fragment:yw,lights_physical_pars_fragment:Sw,lights_fragment_begin:Ew,lights_fragment_maps:Mw,lights_fragment_end:bw,logdepthbuf_fragment:Tw,logdepthbuf_pars_fragment:Aw,logdepthbuf_pars_vertex:ww,logdepthbuf_vertex:Rw,map_fragment:Cw,map_pars_fragment:Pw,map_particle_fragment:Lw,map_particle_pars_fragment:Iw,metalnessmap_fragment:Dw,metalnessmap_pars_fragment:Uw,morphinstance_vertex:Nw,morphcolor_vertex:Fw,morphnormal_vertex:Ow,morphtarget_pars_vertex:Bw,morphtarget_vertex:kw,normal_fragment_begin:Hw,normal_fragment_maps:zw,normal_pars_fragment:Vw,normal_pars_vertex:Gw,normal_vertex:Ww,normalmap_pars_fragment:Xw,clearcoat_normal_fragment_begin:$w,clearcoat_normal_fragment_maps:qw,clearcoat_pars_fragment:jw,iridescence_pars_fragment:Yw,opaque_fragment:Kw,packing:Zw,premultiplied_alpha_fragment:Jw,project_vertex:Qw,dithering_fragment:eR,dithering_pars_fragment:tR,roughnessmap_fragment:nR,roughnessmap_pars_fragment:iR,shadowmap_pars_fragment:rR,shadowmap_pars_vertex:sR,shadowmap_vertex:oR,shadowmask_pars_fragment:aR,skinbase_vertex:lR,skinning_pars_vertex:cR,skinning_vertex:uR,skinnormal_vertex:fR,specularmap_fragment:dR,specularmap_pars_fragment:hR,tonemapping_fragment:pR,tonemapping_pars_fragment:mR,transmission_fragment:gR,transmission_pars_fragment:_R,uv_pars_fragment:vR,uv_pars_vertex:xR,uv_vertex:yR,worldpos_vertex:SR,background_vert:ER,background_frag:MR,backgroundCube_vert:bR,backgroundCube_frag:TR,cube_vert:AR,cube_frag:wR,depth_vert:RR,depth_frag:CR,distanceRGBA_vert:PR,distanceRGBA_frag:LR,equirect_vert:IR,equirect_frag:DR,linedashed_vert:UR,linedashed_frag:NR,meshbasic_vert:FR,meshbasic_frag:OR,meshlambert_vert:BR,meshlambert_frag:kR,meshmatcap_vert:HR,meshmatcap_frag:zR,meshnormal_vert:VR,meshnormal_frag:GR,meshphong_vert:WR,meshphong_frag:XR,meshphysical_vert:$R,meshphysical_frag:qR,meshtoon_vert:jR,meshtoon_frag:YR,points_vert:KR,points_frag:ZR,shadow_vert:JR,shadow_frag:QR,sprite_vert:eC,sprite_frag:tC},_e={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Pn={basic:{uniforms:Ht([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Ht([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new at(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Ht([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Ht([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Ht([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new at(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Ht([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Ht([_e.points,_e.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Ht([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Ht([_e.common,_e.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Ht([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Ht([_e.sprite,_e.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Ht([_e.common,_e.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Ht([_e.lights,_e.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Pn.physical={uniforms:Ht([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Bo={r:0,b:0,g:0},Wi=new ri,nC=new St;function iC(t,e,n,i,r,s,o){const a=new at(0);let l=s===!0?0:1,u,c,f=null,d=0,h=null;function v(g){let _=g.isScene===!0?g.background:null;return _&&_.isTexture&&(_=(g.backgroundBlurriness>0?n:e).get(_)),_}function x(g){let _=!1;const R=v(g);R===null?p(a,l):R&&R.isColor&&(p(R,1),_=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,_){const R=v(_);R&&(R.isCubeTexture||R.mapping===ka)?(c===void 0&&(c=new In(new io(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:ns(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,C,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Wi.copy(_.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),c.material.uniforms.envMap.value=R,c.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(nC.makeRotationFromEuler(Wi)),c.material.toneMapped=Je.getTransfer(R.colorSpace)!==ot,(f!==R||d!==R.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=R,d=R.version,h=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):R&&R.isTexture&&(u===void 0&&(u=new In(new za(2,2),new Pi({name:"BackgroundMaterial",uniforms:ns(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=R,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=Je.getTransfer(R.colorSpace)!==ot,R.matrixAutoUpdate===!0&&R.updateMatrix(),u.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||d!==R.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,f=R,d=R.version,h=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function p(g,_){g.getRGB(Bo,Qg(t)),i.buffers.color.setClear(Bo.r,Bo.g,Bo.b,_,o)}function M(){c!==void 0&&(c.geometry.dispose(),c.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,p(a,l)},render:x,addToRenderList:m,dispose:M}}function rC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(E,L,D,N,j){let ne=!1;const H=f(N,D,L);s!==H&&(s=H,u(s.object)),ne=h(E,N,D,j),ne&&v(E,N,D,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,_(E,L,D,N),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function u(E){return t.bindVertexArray(E)}function c(E){return t.deleteVertexArray(E)}function f(E,L,D){const N=D.wireframe===!0;let j=i[E.id];j===void 0&&(j={},i[E.id]=j);let ne=j[L.id];ne===void 0&&(ne={},j[L.id]=ne);let H=ne[N];return H===void 0&&(H=d(l()),ne[N]=H),H}function d(E){const L=[],D=[],N=[];for(let j=0;j<n;j++)L[j]=0,D[j]=0,N[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:N,object:E,attributes:{},index:null}}function h(E,L,D,N){const j=s.attributes,ne=L.attributes;let H=0;const ee=D.getAttributes();for(const F in ee)if(ee[F].location>=0){const ve=j[F];let Ae=ne[F];if(Ae===void 0&&(F==="instanceMatrix"&&E.instanceMatrix&&(Ae=E.instanceMatrix),F==="instanceColor"&&E.instanceColor&&(Ae=E.instanceColor)),ve===void 0||ve.attribute!==Ae||Ae&&ve.data!==Ae.data)return!0;H++}return s.attributesNum!==H||s.index!==N}function v(E,L,D,N){const j={},ne=L.attributes;let H=0;const ee=D.getAttributes();for(const F in ee)if(ee[F].location>=0){let ve=ne[F];ve===void 0&&(F==="instanceMatrix"&&E.instanceMatrix&&(ve=E.instanceMatrix),F==="instanceColor"&&E.instanceColor&&(ve=E.instanceColor));const Ae={};Ae.attribute=ve,ve&&ve.data&&(Ae.data=ve.data),j[F]=Ae,H++}s.attributes=j,s.attributesNum=H,s.index=N}function x(){const E=s.newAttributes;for(let L=0,D=E.length;L<D;L++)E[L]=0}function m(E){p(E,0)}function p(E,L){const D=s.newAttributes,N=s.enabledAttributes,j=s.attributeDivisors;D[E]=1,N[E]===0&&(t.enableVertexAttribArray(E),N[E]=1),j[E]!==L&&(t.vertexAttribDivisor(E,L),j[E]=L)}function M(){const E=s.newAttributes,L=s.enabledAttributes;for(let D=0,N=L.length;D<N;D++)L[D]!==E[D]&&(t.disableVertexAttribArray(D),L[D]=0)}function g(E,L,D,N,j,ne,H){H===!0?t.vertexAttribIPointer(E,L,D,j,ne):t.vertexAttribPointer(E,L,D,N,j,ne)}function _(E,L,D,N){x();const j=N.attributes,ne=D.getAttributes(),H=L.defaultAttributeValues;for(const ee in ne){const F=ne[ee];if(F.location>=0){let de=j[ee];if(de===void 0&&(ee==="instanceMatrix"&&E.instanceMatrix&&(de=E.instanceMatrix),ee==="instanceColor"&&E.instanceColor&&(de=E.instanceColor)),de!==void 0){const ve=de.normalized,Ae=de.itemSize,Le=e.get(de);if(Le===void 0)continue;const je=Le.buffer,ie=Le.type,me=Le.bytesPerElement,Se=ie===t.INT||ie===t.UNSIGNED_INT||de.gpuType===nf;if(de.isInterleavedBufferAttribute){const O=de.data,se=O.stride,re=de.offset;if(O.isInstancedInterleavedBuffer){for(let ue=0;ue<F.locationSize;ue++)p(F.location+ue,O.meshPerAttribute);E.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ue=0;ue<F.locationSize;ue++)m(F.location+ue);t.bindBuffer(t.ARRAY_BUFFER,je);for(let ue=0;ue<F.locationSize;ue++)g(F.location+ue,Ae/F.locationSize,ie,ve,se*me,(re+Ae/F.locationSize*ue)*me,Se)}else{if(de.isInstancedBufferAttribute){for(let O=0;O<F.locationSize;O++)p(F.location+O,de.meshPerAttribute);E.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let O=0;O<F.locationSize;O++)m(F.location+O);t.bindBuffer(t.ARRAY_BUFFER,je);for(let O=0;O<F.locationSize;O++)g(F.location+O,Ae/F.locationSize,ie,ve,Ae*me,Ae/F.locationSize*O*me,Se)}}else if(H!==void 0){const ve=H[ee];if(ve!==void 0)switch(ve.length){case 2:t.vertexAttrib2fv(F.location,ve);break;case 3:t.vertexAttrib3fv(F.location,ve);break;case 4:t.vertexAttrib4fv(F.location,ve);break;default:t.vertexAttrib1fv(F.location,ve)}}}}M()}function R(){I();for(const E in i){const L=i[E];for(const D in L){const N=L[D];for(const j in N)c(N[j].object),delete N[j];delete L[D]}delete i[E]}}function A(E){if(i[E.id]===void 0)return;const L=i[E.id];for(const D in L){const N=L[D];for(const j in N)c(N[j].object),delete N[j];delete L[D]}delete i[E.id]}function C(E){for(const L in i){const D=i[L];if(D[E.id]===void 0)continue;const N=D[E.id];for(const j in N)c(N[j].object),delete N[j];delete D[E.id]}}function I(){b(),o=!0,s!==r&&(s=r,u(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:I,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function sC(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function o(u,c,f){f!==0&&(t.drawArraysInstanced(i,u,c,f),n.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let h=0;for(let v=0;v<f;v++)h+=c[v];n.update(h,i,1)}function l(u,c,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let v=0;v<u.length;v++)o(u[v],c[v],d[v]);else{h.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,f);let v=0;for(let x=0;x<f;x++)v+=c[x]*d[x];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function oC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==En&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const I=C===Qs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ii&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Jn&&!I)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=v>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:h,maxVertexTextures:v,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:R,maxSamples:A}}function aC(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new ji,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=c(f,d,0)},this.setState=function(f,d,h){const v=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||v===null||v.length===0||s&&!m)s?c(null):u();else{const M=s?0:i,g=M*4;let _=p.clippingState||null;l.value=_,_=c(v,d,g,h);for(let R=0;R!==g;++R)_[R]=n[R];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,h,v){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,v!==!0||m===null){const p=h+x*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let g=0,_=h;g!==x;++g,_+=4)o.copy(f[g]).applyMatrix4(M,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function lC(t){let e=new WeakMap;function n(o,a){return a===Vc?o.mapping=Zr:a===Gc&&(o.mapping=Jr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vc||a===Gc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new hA(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Dr=4,bh=[.125,.215,.35,.446,.526,.582],Zi=20,Bl=new xA,Th=new at;let kl=null,Hl=0,zl=0,Vl=!1;const Yi=(1+Math.sqrt(5))/2,wr=1/Yi,Ah=[new Y(-Yi,wr,0),new Y(Yi,wr,0),new Y(-wr,0,Yi),new Y(wr,0,Yi),new Y(0,Yi,-wr),new Y(0,Yi,wr),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class wh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){kl=this._renderer.getRenderTarget(),Hl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kl,Hl,zl),this._renderer.xr.enabled=Vl,e.scissorTest=!1,ko(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Zr||e.mapping===Jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kl=this._renderer.getRenderTarget(),Hl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),Vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Qs,format:En,colorSpace:ts,depthBuffer:!1},r=Rh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cC(s)),this._blurMaterial=uC(s,e,n)}return r}_compileMaterial(e){const n=new In(this._lodPlanes[0],e);this._renderer.compile(n,Bl)}_sceneToCubeUV(e,n,i,r){const a=new cn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Th),c.toneMapping=Ai,c.autoClear=!1;const h=new uf({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),v=new In(new io,h);let x=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,x=!0):(h.color.copy(Th),x=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(u[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,u[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,u[p]));const g=this._cubeSize;ko(r,M*g,p>2?g:0,g,g),c.setRenderTarget(r),x&&c.render(v,a),c.render(e,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Zr||e.mapping===Jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ch());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new In(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ko(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Bl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ah[(r-s-1)%Ah.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new In(this._lodPlanes[r],u),d=u.uniforms,h=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Zi-1),x=s/v,m=isFinite(s)?1+Math.floor(c*x):Zi;m>Zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zi}`);const p=[];let M=0;for(let C=0;C<Zi;++C){const I=C/x,b=Math.exp(-I*I/2);p.push(b),C===0?M+=b:C<m&&(M+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=v,d.mipInt.value=g-i;const _=this._sizeLods[r],R=3*_*(r>g-Dr?r-g+Dr:0),A=4*(this._cubeSize-_);ko(n,R,A,3*_,2*_),l.setRenderTarget(n),l.render(f,Bl)}}function cC(t){const e=[],n=[],i=[];let r=t;const s=t-Dr+1+bh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Dr?l=bh[o-t+Dr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],h=6,v=6,x=3,m=2,p=1,M=new Float32Array(x*v*h),g=new Float32Array(m*v*h),_=new Float32Array(p*v*h);for(let A=0;A<h;A++){const C=A%3*2/3-1,I=A>2?0:-1,b=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];M.set(b,x*v*A),g.set(d,m*v*A);const E=[A,A,A,A,A,A];_.set(E,p*v*A)}const R=new Di;R.setAttribute("position",new Un(M,x)),R.setAttribute("uv",new Un(g,m)),R.setAttribute("faceIndex",new Un(_,p)),e.push(R),r>Dr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Rh(t,e,n){const i=new lr(t,e,n);return i.texture.mapping=ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ko(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function uC(t,e,n){const i=new Float32Array(Zi),r=new Y(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:Zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Ch(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hf(),fragmentShader:`

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
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Ph(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function hf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fC(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Vc||l===Gc,c=l===Zr||l===Jr;if(u||c){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new wh(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return u&&h&&h.height>0||c&&h&&r(h)?(n===null&&(n=new wh(t)),f=u?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function dC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Pr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function hC(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function u(f){const d=[],h=f.index,v=f.attributes.position;let x=0;if(h!==null){const M=h.array;x=h.version;for(let g=0,_=M.length;g<_;g+=3){const R=M[g+0],A=M[g+1],C=M[g+2];d.push(R,A,A,C,C,R)}}else if(v!==void 0){const M=v.array;x=v.version;for(let g=0,_=M.length/3-1;g<_;g+=3){const R=g+0,A=g+1,C=g+2;d.push(R,A,A,C,C,R)}}else return;const m=new($g(d)?Jg:Zg)(d,1);m.version=x;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function c(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function pC(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){t.drawElements(i,h,s,d*o),n.update(h,i,1)}function u(d,h,v){v!==0&&(t.drawElementsInstanced(i,h,s,d*o,v),n.update(h,i,v))}function c(d,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,v);let m=0;for(let p=0;p<v;p++)m+=h[p];n.update(m,i,1)}function f(d,h,v,x){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)u(d[p]/o,h[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,x,0,v);let p=0;for(let M=0;M<v;M++)p+=h[M]*x[M];n.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function mC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function gC(t,e,n){const i=new WeakMap,r=new _t;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let b=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let g=0;h===!0&&(g=1),v===!0&&(g=2),x===!0&&(g=3);let _=a.attributes.position.count*g,R=1;_>e.maxTextureSize&&(R=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const A=new Float32Array(_*R*4*f),C=new jg(A,_,R,f);C.type=Jn,C.needsUpdate=!0;const I=g*4;for(let E=0;E<f;E++){const L=m[E],D=p[E],N=M[E],j=_*R*4*E;for(let ne=0;ne<L.count;ne++){const H=ne*I;h===!0&&(r.fromBufferAttribute(L,ne),A[j+H+0]=r.x,A[j+H+1]=r.y,A[j+H+2]=r.z,A[j+H+3]=0),v===!0&&(r.fromBufferAttribute(D,ne),A[j+H+4]=r.x,A[j+H+5]=r.y,A[j+H+6]=r.z,A[j+H+7]=0),x===!0&&(r.fromBufferAttribute(N,ne),A[j+H+8]=r.x,A[j+H+9]=r.y,A[j+H+10]=r.z,A[j+H+11]=N.itemSize===4?r.w:1)}}d={count:f,texture:C,size:new it(_,R)},i.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let h=0;for(let x=0;x<u.length;x++)h+=u[x];const v=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function _C(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}const s_=new Yt,Lh=new i_(1,1),o_=new jg,a_=new KT,l_=new t_,Ih=[],Dh=[],Uh=new Float32Array(16),Nh=new Float32Array(9),Fh=new Float32Array(4);function as(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ih[r];if(s===void 0&&(s=new Float32Array(r),Ih[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function At(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Va(t,e){let n=Dh[e];n===void 0&&(n=new Int32Array(e),Dh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function vC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function xC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),At(n,e)}}function yC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),At(n,e)}}function SC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),At(n,e)}}function EC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Fh.set(i),t.uniformMatrix2fv(this.addr,!1,Fh),At(n,i)}}function MC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Nh.set(i),t.uniformMatrix3fv(this.addr,!1,Nh),At(n,i)}}function bC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(n,e)}else{if(Tt(n,i))return;Uh.set(i),t.uniformMatrix4fv(this.addr,!1,Uh),At(n,i)}}function TC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function AC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),At(n,e)}}function wC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),At(n,e)}}function RC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),At(n,e)}}function CC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function PC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),At(n,e)}}function LC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),At(n,e)}}function IC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),At(n,e)}}function DC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Lh.compareFunction=Xg,s=Lh):s=s_,n.setTexture2D(e||s,r)}function UC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||a_,r)}function NC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||l_,r)}function FC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||o_,r)}function OC(t){switch(t){case 5126:return vC;case 35664:return xC;case 35665:return yC;case 35666:return SC;case 35674:return EC;case 35675:return MC;case 35676:return bC;case 5124:case 35670:return TC;case 35667:case 35671:return AC;case 35668:case 35672:return wC;case 35669:case 35673:return RC;case 5125:return CC;case 36294:return PC;case 36295:return LC;case 36296:return IC;case 35678:case 36198:case 36298:case 36306:case 35682:return DC;case 35679:case 36299:case 36307:return UC;case 35680:case 36300:case 36308:case 36293:return NC;case 36289:case 36303:case 36311:case 36292:return FC}}function BC(t,e){t.uniform1fv(this.addr,e)}function kC(t,e){const n=as(e,this.size,2);t.uniform2fv(this.addr,n)}function HC(t,e){const n=as(e,this.size,3);t.uniform3fv(this.addr,n)}function zC(t,e){const n=as(e,this.size,4);t.uniform4fv(this.addr,n)}function VC(t,e){const n=as(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function GC(t,e){const n=as(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function WC(t,e){const n=as(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function XC(t,e){t.uniform1iv(this.addr,e)}function $C(t,e){t.uniform2iv(this.addr,e)}function qC(t,e){t.uniform3iv(this.addr,e)}function jC(t,e){t.uniform4iv(this.addr,e)}function YC(t,e){t.uniform1uiv(this.addr,e)}function KC(t,e){t.uniform2uiv(this.addr,e)}function ZC(t,e){t.uniform3uiv(this.addr,e)}function JC(t,e){t.uniform4uiv(this.addr,e)}function QC(t,e,n){const i=this.cache,r=e.length,s=Va(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||s_,s[o])}function e1(t,e,n){const i=this.cache,r=e.length,s=Va(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||a_,s[o])}function t1(t,e,n){const i=this.cache,r=e.length,s=Va(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||l_,s[o])}function n1(t,e,n){const i=this.cache,r=e.length,s=Va(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),At(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||o_,s[o])}function i1(t){switch(t){case 5126:return BC;case 35664:return kC;case 35665:return HC;case 35666:return zC;case 35674:return VC;case 35675:return GC;case 35676:return WC;case 5124:case 35670:return XC;case 35667:case 35671:return $C;case 35668:case 35672:return qC;case 35669:case 35673:return jC;case 5125:return YC;case 36294:return KC;case 36295:return ZC;case 36296:return JC;case 35678:case 36198:case 36298:case 36306:case 35682:return QC;case 35679:case 36299:case 36307:return e1;case 35680:case 36300:case 36308:case 36293:return t1;case 36289:case 36303:case 36311:case 36292:return n1}}class r1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=OC(n.type)}}class s1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=i1(n.type)}}class o1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Gl=/(\w+)(\])?(\[|\.)?/g;function Oh(t,e){t.seq.push(e),t.map[e.id]=e}function a1(t,e,n){const i=t.name,r=i.length;for(Gl.lastIndex=0;;){const s=Gl.exec(i),o=Gl.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Oh(n,u===void 0?new r1(a,t,e):new s1(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new o1(a),Oh(n,f)),n=f}}}class ea{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);a1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Bh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const l1=37297;let c1=0;function u1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const kh=new We;function f1(t){Je._getMatrix(kh,Je.workingColorSpace,t);const e=`mat3( ${kh.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case xa:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Hh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+u1(t.getShaderSource(e),o)}else return r}function d1(t,e){const n=f1(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function h1(t,e){let n;switch(e){case ST:n="Linear";break;case ET:n="Reinhard";break;case MT:n="Cineon";break;case bT:n="ACESFilmic";break;case AT:n="AgX";break;case wT:n="Neutral";break;case TT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ho=new Y;function p1(){Je.getLuminanceCoefficients(Ho);const t=Ho.x.toFixed(4),e=Ho.y.toFixed(4),n=Ho.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function g1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function _1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ss(t){return t!==""}function zh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const v1=/^[ \t]*#include +<([\w\d./]+)>/gm;function xu(t){return t.replace(v1,y1)}const x1=new Map;function y1(t,e){let n=$e[e];if(n===void 0){const i=x1.get(e);if(i!==void 0)n=$e[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return xu(n)}const S1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gh(t){return t.replace(S1,E1)}function E1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wh(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function M1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ig?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===eT?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function b1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Zr:case Jr:e="ENVMAP_TYPE_CUBE";break;case ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function T1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Jr:e="ENVMAP_MODE_REFRACTION";break}return e}function A1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Dg:e="ENVMAP_BLENDING_MULTIPLY";break;case xT:e="ENVMAP_BLENDING_MIX";break;case yT:e="ENVMAP_BLENDING_ADD";break}return e}function w1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function R1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=M1(n),u=b1(n),c=T1(n),f=A1(n),d=w1(n),h=m1(n),v=g1(s),x=r.createProgram();let m,p,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ss).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(Ss).join(`
`),p.length>0&&(p+=`
`)):(m=[Wh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),p=[Wh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ai?"#define TONE_MAPPING":"",n.toneMapping!==Ai?$e.tonemapping_pars_fragment:"",n.toneMapping!==Ai?h1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,d1("linearToOutputTexel",n.outputColorSpace),p1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ss).join(`
`)),o=xu(o),o=zh(o,n),o=Vh(o,n),a=xu(a),a=zh(a,n),a=Vh(a,n),o=Gh(o),a=Gh(a),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const g=M+m+o,_=M+p+a,R=Bh(r,r.VERTEX_SHADER,g),A=Bh(r,r.FRAGMENT_SHADER,_);r.attachShader(x,R),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(L){if(t.debug.checkShaderErrors){const D=r.getProgramInfoLog(x).trim(),N=r.getShaderInfoLog(R).trim(),j=r.getShaderInfoLog(A).trim();let ne=!0,H=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(ne=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,R,A);else{const ee=Hh(r,R,"vertex"),F=Hh(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+D+`
`+ee+`
`+F)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(N===""||j==="")&&(H=!1);H&&(L.diagnostics={runnable:ne,programLog:D,vertexShader:{log:N,prefix:m},fragmentShader:{log:j,prefix:p}})}r.deleteShader(R),r.deleteShader(A),I=new ea(r,x),b=_1(r,x)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(x,l1)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=c1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}let C1=0;class P1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new L1(e),n.set(e,i)),i}}class L1{constructor(e){this.id=C1++,this.code=e,this.usedTimes=0}}function I1(t,e,n,i,r,s,o){const a=new Yg,l=new P1,u=new Set,c=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return u.add(b),b===0?"uv":`uv${b}`}function m(b,E,L,D,N){const j=D.fog,ne=N.geometry,H=b.isMeshStandardMaterial?D.environment:null,ee=(b.isMeshStandardMaterial?n:e).get(b.envMap||H),F=ee&&ee.mapping===ka?ee.image.height:null,de=v[b.type];b.precision!==null&&(h=r.getMaxPrecision(b.precision),h!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));const ve=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,Ae=ve!==void 0?ve.length:0;let Le=0;ne.morphAttributes.position!==void 0&&(Le=1),ne.morphAttributes.normal!==void 0&&(Le=2),ne.morphAttributes.color!==void 0&&(Le=3);let je,ie,me,Se;if(de){const st=Pn[de];je=st.vertexShader,ie=st.fragmentShader}else je=b.vertexShader,ie=b.fragmentShader,l.update(b),me=l.getVertexShaderID(b),Se=l.getFragmentShaderID(b);const O=t.getRenderTarget(),se=t.state.buffers.depth.getReversed(),re=N.isInstancedMesh===!0,ue=N.isBatchedMesh===!0,Pe=!!b.map,Ce=!!b.matcap,P=!!ee,S=!!b.aoMap,G=!!b.lightMap,J=!!b.bumpMap,$=!!b.normalMap,q=!!b.displacementMap,le=!!b.emissiveMap,Q=!!b.metalnessMap,T=!!b.roughnessMap,y=b.anisotropy>0,U=b.clearcoat>0,z=b.dispersion>0,X=b.iridescence>0,W=b.sheen>0,he=b.transmission>0,ce=y&&!!b.anisotropyMap,fe=U&&!!b.clearcoatMap,Be=U&&!!b.clearcoatNormalMap,ae=U&&!!b.clearcoatRoughnessMap,ge=X&&!!b.iridescenceMap,we=X&&!!b.iridescenceThicknessMap,De=W&&!!b.sheenColorMap,be=W&&!!b.sheenRoughnessMap,Oe=!!b.specularMap,Ue=!!b.specularColorMap,rt=!!b.specularIntensityMap,B=he&&!!b.transmissionMap,xe=he&&!!b.thicknessMap,te=!!b.gradientMap,oe=!!b.alphaMap,Me=b.alphaTest>0,Ee=!!b.alphaHash,Ge=!!b.extensions;let mt=Ai;b.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(mt=t.toneMapping);const Dt={shaderID:de,shaderType:b.type,shaderName:b.name,vertexShader:je,fragmentShader:ie,defines:b.defines,customVertexShaderID:me,customFragmentShaderID:Se,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:ue,batchingColor:ue&&N._colorsTexture!==null,instancing:re,instancingColor:re&&N.instanceColor!==null,instancingMorph:re&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:O===null?t.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ts,alphaToCoverage:!!b.alphaToCoverage,map:Pe,matcap:Ce,envMap:P,envMapMode:P&&ee.mapping,envMapCubeUVHeight:F,aoMap:S,lightMap:G,bumpMap:J,normalMap:$,displacementMap:d&&q,emissiveMap:le,normalMapObjectSpace:$&&b.normalMapType===IT,normalMapTangentSpace:$&&b.normalMapType===LT,metalnessMap:Q,roughnessMap:T,anisotropy:y,anisotropyMap:ce,clearcoat:U,clearcoatMap:fe,clearcoatNormalMap:Be,clearcoatRoughnessMap:ae,dispersion:z,iridescence:X,iridescenceMap:ge,iridescenceThicknessMap:we,sheen:W,sheenColorMap:De,sheenRoughnessMap:be,specularMap:Oe,specularColorMap:Ue,specularIntensityMap:rt,transmission:he,transmissionMap:B,thicknessMap:xe,gradientMap:te,opaque:b.transparent===!1&&b.blending===Vr&&b.alphaToCoverage===!1,alphaMap:oe,alphaTest:Me,alphaHash:Ee,combine:b.combine,mapUv:Pe&&x(b.map.channel),aoMapUv:S&&x(b.aoMap.channel),lightMapUv:G&&x(b.lightMap.channel),bumpMapUv:J&&x(b.bumpMap.channel),normalMapUv:$&&x(b.normalMap.channel),displacementMapUv:q&&x(b.displacementMap.channel),emissiveMapUv:le&&x(b.emissiveMap.channel),metalnessMapUv:Q&&x(b.metalnessMap.channel),roughnessMapUv:T&&x(b.roughnessMap.channel),anisotropyMapUv:ce&&x(b.anisotropyMap.channel),clearcoatMapUv:fe&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:Be&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:we&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:De&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:be&&x(b.sheenRoughnessMap.channel),specularMapUv:Oe&&x(b.specularMap.channel),specularColorMapUv:Ue&&x(b.specularColorMap.channel),specularIntensityMapUv:rt&&x(b.specularIntensityMap.channel),transmissionMapUv:B&&x(b.transmissionMap.channel),thicknessMapUv:xe&&x(b.thicknessMap.channel),alphaMapUv:oe&&x(b.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&($||y),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!ne.attributes.uv&&(Pe||oe),fog:!!j,useFog:b.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:se,skinning:N.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Le,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:mt,decodeVideoTexture:Pe&&b.map.isVideoTexture===!0&&Je.getTransfer(b.map.colorSpace)===ot,decodeVideoTextureEmissive:le&&b.emissiveMap.isVideoTexture===!0&&Je.getTransfer(b.emissiveMap.colorSpace)===ot,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Kn,flipSided:b.side===jt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ge&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&b.extensions.multiDraw===!0||ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Dt.vertexUv1s=u.has(1),Dt.vertexUv2s=u.has(2),Dt.vertexUv3s=u.has(3),u.clear(),Dt}function p(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)E.push(L),E.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(M(E,b),g(E,b),E.push(t.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function M(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function g(b,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),b.push(a.mask)}function _(b){const E=v[b.type];let L;if(E){const D=Pn[E];L=cA.clone(D.uniforms)}else L=b.uniforms;return L}function R(b,E){let L;for(let D=0,N=c.length;D<N;D++){const j=c[D];if(j.cacheKey===E){L=j,++L.usedTimes;break}}return L===void 0&&(L=new R1(t,E,b,s),c.push(L)),L}function A(b){if(--b.usedTimes===0){const E=c.indexOf(b);c[E]=c[c.length-1],c.pop(),b.destroy()}}function C(b){l.remove(b)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:_,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:c,dispose:I}}function D1(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function U1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Xh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function $h(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,h,v,x,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:v,renderOrder:f.renderOrder,z:x,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=v,p.renderOrder=f.renderOrder,p.z=x,p.group=m),e++,p}function a(f,d,h,v,x,m){const p=o(f,d,h,v,x,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):n.push(p)}function l(f,d,h,v,x,m){const p=o(f,d,h,v,x,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):n.unshift(p)}function u(f,d){n.length>1&&n.sort(f||U1),i.length>1&&i.sort(d||Xh),r.length>1&&r.sort(d||Xh)}function c(){for(let f=e,d=t.length;f<d;f++){const h=t[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function N1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new $h,t.set(i,[o])):r>=s.length?(o=new $h,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function F1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Y,color:new at};break;case"SpotLight":n={position:new Y,direction:new Y,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Y,color:new at,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Y,skyColor:new at,groundColor:new at};break;case"RectAreaLight":n={color:new at,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return t[e.id]=n,n}}}function O1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let B1=0;function k1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function H1(t){const e=new F1,n=O1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new Y);const r=new Y,s=new St,o=new St;function a(u){let c=0,f=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let h=0,v=0,x=0,m=0,p=0,M=0,g=0,_=0,R=0,A=0,C=0;u.sort(k1);for(let b=0,E=u.length;b<E;b++){const L=u[b],D=L.color,N=L.intensity,j=L.distance,ne=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=D.r*N,f+=D.g*N,d+=D.b*N;else if(L.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],N);C++}else if(L.isDirectionalLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ee=L.shadow,F=n.get(L);F.shadowIntensity=ee.intensity,F.shadowBias=ee.bias,F.shadowNormalBias=ee.normalBias,F.shadowRadius=ee.radius,F.shadowMapSize=ee.mapSize,i.directionalShadow[h]=F,i.directionalShadowMap[h]=ne,i.directionalShadowMatrix[h]=L.shadow.matrix,M++}i.directional[h]=H,h++}else if(L.isSpotLight){const H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(D).multiplyScalar(N),H.distance=j,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[x]=H;const ee=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,ee.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[x]=ee.matrix,L.castShadow){const F=n.get(L);F.shadowIntensity=ee.intensity,F.shadowBias=ee.bias,F.shadowNormalBias=ee.normalBias,F.shadowRadius=ee.radius,F.shadowMapSize=ee.mapSize,i.spotShadow[x]=F,i.spotShadowMap[x]=ne,_++}x++}else if(L.isRectAreaLight){const H=e.get(L);H.color.copy(D).multiplyScalar(N),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=H,m++}else if(L.isPointLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const ee=L.shadow,F=n.get(L);F.shadowIntensity=ee.intensity,F.shadowBias=ee.bias,F.shadowNormalBias=ee.normalBias,F.shadowRadius=ee.radius,F.shadowMapSize=ee.mapSize,F.shadowCameraNear=ee.camera.near,F.shadowCameraFar=ee.camera.far,i.pointShadow[v]=F,i.pointShadowMap[v]=ne,i.pointShadowMatrix[v]=L.shadow.matrix,g++}i.point[v]=H,v++}else if(L.isHemisphereLight){const H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(N),H.groundColor.copy(L.groundColor).multiplyScalar(N),i.hemi[p]=H,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==h||I.pointLength!==v||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==M||I.numPointShadows!==g||I.numSpotShadows!==_||I.numSpotMaps!==R||I.numLightProbes!==C)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=m,i.point.length=v,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=_+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,I.directionalLength=h,I.pointLength=v,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=M,I.numPointShadows=g,I.numSpotShadows=_,I.numSpotMaps=R,I.numLightProbes=C,i.version=B1++)}function l(u,c){let f=0,d=0,h=0,v=0,x=0;const m=c.matrixWorldInverse;for(let p=0,M=u.length;p<M;p++){const g=u[p];if(g.isDirectionalLight){const _=i.directional[f];_.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),f++}else if(g.isSpotLight){const _=i.spot[h];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(g.matrixWorld),r.setFromMatrixPosition(g.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),h++}else if(g.isRectAreaLight){const _=i.rectArea[v];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(m),o.identity(),s.copy(g.matrixWorld),s.premultiply(m),o.extractRotation(s),_.halfWidth.set(g.width*.5,0,0),_.halfHeight.set(0,g.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),v++}else if(g.isPointLight){const _=i.point[d];_.position.setFromMatrixPosition(g.matrixWorld),_.position.applyMatrix4(m),d++}else if(g.isHemisphereLight){const _=i.hemi[x];_.direction.setFromMatrixPosition(g.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function qh(t){const e=new H1(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function z1(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new qh(t),e.set(r,[a])):s>=o.length?(a=new qh(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const V1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function W1(t,e,n){let i=new n_;const r=new it,s=new it,o=new _t,a=new _A({depthPacking:PT}),l=new vA,u={},c=n.maxTextureSize,f={[Ci]:jt,[jt]:Ci,[Kn]:Kn},d=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:V1,fragmentShader:G1}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const v=new Di;v.setAttribute("position",new Un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new In(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ig;let p=this.type;this.render=function(A,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=t.getRenderTarget(),E=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),D=t.state;D.setBlending(Ti),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const N=p!==$n&&this.type===$n,j=p===$n&&this.type!==$n;for(let ne=0,H=A.length;ne<H;ne++){const ee=A[ne],F=ee.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const de=F.getFrameExtents();if(r.multiply(de),s.copy(F.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/de.x),r.x=s.x*de.x,F.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/de.y),r.y=s.y*de.y,F.mapSize.y=s.y)),F.map===null||N===!0||j===!0){const Ae=this.type!==$n?{minFilter:bn,magFilter:bn}:{};F.map!==null&&F.map.dispose(),F.map=new lr(r.x,r.y,Ae),F.map.texture.name=ee.name+".shadowMap",F.camera.updateProjectionMatrix()}t.setRenderTarget(F.map),t.clear();const ve=F.getViewportCount();for(let Ae=0;Ae<ve;Ae++){const Le=F.getViewport(Ae);o.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),D.viewport(o),F.updateMatrices(ee,Ae),i=F.getFrustum(),_(C,I,F.camera,ee,this.type)}F.isPointLightShadow!==!0&&this.type===$n&&M(F,I),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(b,E,L)};function M(A,C){const I=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new lr(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(C,null,I,d,x,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(C,null,I,h,x,null)}function g(A,C,I,b){let E=null;const L=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)E=L;else if(E=I.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const D=E.uuid,N=C.uuid;let j=u[D];j===void 0&&(j={},u[D]=j);let ne=j[N];ne===void 0&&(ne=E.clone(),j[N]=ne,C.addEventListener("dispose",R)),E=ne}if(E.visible=C.visible,E.wireframe=C.wireframe,b===$n?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:f[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,I.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const D=t.properties.get(E);D.light=I}return E}function _(A,C,I,b,E){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===$n)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const N=e.update(A),j=A.material;if(Array.isArray(j)){const ne=N.groups;for(let H=0,ee=ne.length;H<ee;H++){const F=ne[H],de=j[F.materialIndex];if(de&&de.visible){const ve=g(A,de,b,E);A.onBeforeShadow(t,A,C,I,N,ve,F),t.renderBufferDirect(I,null,N,ve,A,F),A.onAfterShadow(t,A,C,I,N,ve,F)}}}else if(j.visible){const ne=g(A,j,b,E);A.onBeforeShadow(t,A,C,I,N,ne,null),t.renderBufferDirect(I,null,N,ne,A,null),A.onAfterShadow(t,A,C,I,N,ne,null)}}const D=A.children;for(let N=0,j=D.length;N<j;N++)_(D[N],C,I,b,E)}function R(A){A.target.removeEventListener("dispose",R);for(const I in u){const b=u[I],E=A.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}const X1={[Nc]:Fc,[Oc]:Hc,[Bc]:zc,[Kr]:kc,[Fc]:Nc,[Hc]:Oc,[zc]:Bc,[kc]:Kr};function $1(t,e){function n(){let B=!1;const xe=new _t;let te=null;const oe=new _t(0,0,0,0);return{setMask:function(Me){te!==Me&&!B&&(t.colorMask(Me,Me,Me,Me),te=Me)},setLocked:function(Me){B=Me},setClear:function(Me,Ee,Ge,mt,Dt){Dt===!0&&(Me*=mt,Ee*=mt,Ge*=mt),xe.set(Me,Ee,Ge,mt),oe.equals(xe)===!1&&(t.clearColor(Me,Ee,Ge,mt),oe.copy(xe))},reset:function(){B=!1,te=null,oe.set(-1,0,0,0)}}}function i(){let B=!1,xe=!1,te=null,oe=null,Me=null;return{setReversed:function(Ee){if(xe!==Ee){const Ge=e.get("EXT_clip_control");xe?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT);const mt=Me;Me=null,this.setClear(mt)}xe=Ee},getReversed:function(){return xe},setTest:function(Ee){Ee?O(t.DEPTH_TEST):se(t.DEPTH_TEST)},setMask:function(Ee){te!==Ee&&!B&&(t.depthMask(Ee),te=Ee)},setFunc:function(Ee){if(xe&&(Ee=X1[Ee]),oe!==Ee){switch(Ee){case Nc:t.depthFunc(t.NEVER);break;case Fc:t.depthFunc(t.ALWAYS);break;case Oc:t.depthFunc(t.LESS);break;case Kr:t.depthFunc(t.LEQUAL);break;case Bc:t.depthFunc(t.EQUAL);break;case kc:t.depthFunc(t.GEQUAL);break;case Hc:t.depthFunc(t.GREATER);break;case zc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}oe=Ee}},setLocked:function(Ee){B=Ee},setClear:function(Ee){Me!==Ee&&(xe&&(Ee=1-Ee),t.clearDepth(Ee),Me=Ee)},reset:function(){B=!1,te=null,oe=null,Me=null,xe=!1}}}function r(){let B=!1,xe=null,te=null,oe=null,Me=null,Ee=null,Ge=null,mt=null,Dt=null;return{setTest:function(st){B||(st?O(t.STENCIL_TEST):se(t.STENCIL_TEST))},setMask:function(st){xe!==st&&!B&&(t.stencilMask(st),xe=st)},setFunc:function(st,hn,On){(te!==st||oe!==hn||Me!==On)&&(t.stencilFunc(st,hn,On),te=st,oe=hn,Me=On)},setOp:function(st,hn,On){(Ee!==st||Ge!==hn||mt!==On)&&(t.stencilOp(st,hn,On),Ee=st,Ge=hn,mt=On)},setLocked:function(st){B=st},setClear:function(st){Dt!==st&&(t.clearStencil(st),Dt=st)},reset:function(){B=!1,xe=null,te=null,oe=null,Me=null,Ee=null,Ge=null,mt=null,Dt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},d=new WeakMap,h=[],v=null,x=!1,m=null,p=null,M=null,g=null,_=null,R=null,A=null,C=new at(0,0,0),I=0,b=!1,E=null,L=null,D=null,N=null,j=null;const ne=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,ee=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(F)[1]),H=ee>=1):F.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),H=ee>=2);let de=null,ve={};const Ae=t.getParameter(t.SCISSOR_BOX),Le=t.getParameter(t.VIEWPORT),je=new _t().fromArray(Ae),ie=new _t().fromArray(Le);function me(B,xe,te,oe){const Me=new Uint8Array(4),Ee=t.createTexture();t.bindTexture(B,Ee),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ge=0;Ge<te;Ge++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,oe,0,t.RGBA,t.UNSIGNED_BYTE,Me):t.texImage2D(xe+Ge,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Me);return Ee}const Se={};Se[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),Se[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Se[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),O(t.DEPTH_TEST),o.setFunc(Kr),J(!1),$(Qd),O(t.CULL_FACE),S(Ti);function O(B){c[B]!==!0&&(t.enable(B),c[B]=!0)}function se(B){c[B]!==!1&&(t.disable(B),c[B]=!1)}function re(B,xe){return f[B]!==xe?(t.bindFramebuffer(B,xe),f[B]=xe,B===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=xe),B===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function ue(B,xe){let te=h,oe=!1;if(B){te=d.get(xe),te===void 0&&(te=[],d.set(xe,te));const Me=B.textures;if(te.length!==Me.length||te[0]!==t.COLOR_ATTACHMENT0){for(let Ee=0,Ge=Me.length;Ee<Ge;Ee++)te[Ee]=t.COLOR_ATTACHMENT0+Ee;te.length=Me.length,oe=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,oe=!0);oe&&t.drawBuffers(te)}function Pe(B){return v!==B?(t.useProgram(B),v=B,!0):!1}const Ce={[Ki]:t.FUNC_ADD,[nT]:t.FUNC_SUBTRACT,[iT]:t.FUNC_REVERSE_SUBTRACT};Ce[rT]=t.MIN,Ce[sT]=t.MAX;const P={[oT]:t.ZERO,[aT]:t.ONE,[lT]:t.SRC_COLOR,[Dc]:t.SRC_ALPHA,[pT]:t.SRC_ALPHA_SATURATE,[dT]:t.DST_COLOR,[uT]:t.DST_ALPHA,[cT]:t.ONE_MINUS_SRC_COLOR,[Uc]:t.ONE_MINUS_SRC_ALPHA,[hT]:t.ONE_MINUS_DST_COLOR,[fT]:t.ONE_MINUS_DST_ALPHA,[mT]:t.CONSTANT_COLOR,[gT]:t.ONE_MINUS_CONSTANT_COLOR,[_T]:t.CONSTANT_ALPHA,[vT]:t.ONE_MINUS_CONSTANT_ALPHA};function S(B,xe,te,oe,Me,Ee,Ge,mt,Dt,st){if(B===Ti){x===!0&&(se(t.BLEND),x=!1);return}if(x===!1&&(O(t.BLEND),x=!0),B!==tT){if(B!==m||st!==b){if((p!==Ki||_!==Ki)&&(t.blendEquation(t.FUNC_ADD),p=Ki,_=Ki),st)switch(B){case Vr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case eh:t.blendFunc(t.ONE,t.ONE);break;case th:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case nh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Vr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case eh:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case th:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case nh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}M=null,g=null,R=null,A=null,C.set(0,0,0),I=0,m=B,b=st}return}Me=Me||xe,Ee=Ee||te,Ge=Ge||oe,(xe!==p||Me!==_)&&(t.blendEquationSeparate(Ce[xe],Ce[Me]),p=xe,_=Me),(te!==M||oe!==g||Ee!==R||Ge!==A)&&(t.blendFuncSeparate(P[te],P[oe],P[Ee],P[Ge]),M=te,g=oe,R=Ee,A=Ge),(mt.equals(C)===!1||Dt!==I)&&(t.blendColor(mt.r,mt.g,mt.b,Dt),C.copy(mt),I=Dt),m=B,b=!1}function G(B,xe){B.side===Kn?se(t.CULL_FACE):O(t.CULL_FACE);let te=B.side===jt;xe&&(te=!te),J(te),B.blending===Vr&&B.transparent===!1?S(Ti):S(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const oe=B.stencilWrite;a.setTest(oe),oe&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),le(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?O(t.SAMPLE_ALPHA_TO_COVERAGE):se(t.SAMPLE_ALPHA_TO_COVERAGE)}function J(B){E!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),E=B)}function $(B){B!==Jb?(O(t.CULL_FACE),B!==L&&(B===Qd?t.cullFace(t.BACK):B===Qb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):se(t.CULL_FACE),L=B}function q(B){B!==D&&(H&&t.lineWidth(B),D=B)}function le(B,xe,te){B?(O(t.POLYGON_OFFSET_FILL),(N!==xe||j!==te)&&(t.polygonOffset(xe,te),N=xe,j=te)):se(t.POLYGON_OFFSET_FILL)}function Q(B){B?O(t.SCISSOR_TEST):se(t.SCISSOR_TEST)}function T(B){B===void 0&&(B=t.TEXTURE0+ne-1),de!==B&&(t.activeTexture(B),de=B)}function y(B,xe,te){te===void 0&&(de===null?te=t.TEXTURE0+ne-1:te=de);let oe=ve[te];oe===void 0&&(oe={type:void 0,texture:void 0},ve[te]=oe),(oe.type!==B||oe.texture!==xe)&&(de!==te&&(t.activeTexture(te),de=te),t.bindTexture(B,xe||Se[B]),oe.type=B,oe.texture=xe)}function U(){const B=ve[de];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function X(){try{t.compressedTexImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function W(){try{t.texSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{t.texSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function fe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Be(){try{t.texStorage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ae(){try{t.texStorage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{t.texImage3D.apply(t,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function De(B){je.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),je.copy(B))}function be(B){ie.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),ie.copy(B))}function Oe(B,xe){let te=u.get(xe);te===void 0&&(te=new WeakMap,u.set(xe,te));let oe=te.get(B);oe===void 0&&(oe=t.getUniformBlockIndex(xe,B.name),te.set(B,oe))}function Ue(B,xe){const oe=u.get(xe).get(B);l.get(xe)!==oe&&(t.uniformBlockBinding(xe,oe,B.__bindingPointIndex),l.set(xe,oe))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},de=null,ve={},f={},d=new WeakMap,h=[],v=null,x=!1,m=null,p=null,M=null,g=null,_=null,R=null,A=null,C=new at(0,0,0),I=0,b=!1,E=null,L=null,D=null,N=null,j=null,je.set(0,0,t.canvas.width,t.canvas.height),ie.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:O,disable:se,bindFramebuffer:re,drawBuffers:ue,useProgram:Pe,setBlending:S,setMaterial:G,setFlipSided:J,setCullFace:$,setLineWidth:q,setPolygonOffset:le,setScissorTest:Q,activeTexture:T,bindTexture:y,unbindTexture:U,compressedTexImage2D:z,compressedTexImage3D:X,texImage2D:ge,texImage3D:we,updateUBOMapping:Oe,uniformBlockBinding:Ue,texStorage2D:Be,texStorage3D:ae,texSubImage2D:W,texSubImage3D:he,compressedTexSubImage2D:ce,compressedTexSubImage3D:fe,scissor:De,viewport:be,reset:rt}}function q1(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new it,c=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(T,y){return h?new OffscreenCanvas(T,y):Sa("canvas")}function x(T,y,U){let z=1;const X=Q(T);if((X.width>U||X.height>U)&&(z=U/Math.max(X.width,X.height)),z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const W=Math.floor(z*X.width),he=Math.floor(z*X.height);f===void 0&&(f=v(W,he));const ce=y?v(W,he):f;return ce.width=W,ce.height=he,ce.getContext("2d").drawImage(T,0,0,W,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+W+"x"+he+")."),ce}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){t.generateMipmap(T)}function M(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function g(T,y,U,z,X=!1){if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let W=y;if(y===t.RED&&(U===t.FLOAT&&(W=t.R32F),U===t.HALF_FLOAT&&(W=t.R16F),U===t.UNSIGNED_BYTE&&(W=t.R8)),y===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(W=t.R8UI),U===t.UNSIGNED_SHORT&&(W=t.R16UI),U===t.UNSIGNED_INT&&(W=t.R32UI),U===t.BYTE&&(W=t.R8I),U===t.SHORT&&(W=t.R16I),U===t.INT&&(W=t.R32I)),y===t.RG&&(U===t.FLOAT&&(W=t.RG32F),U===t.HALF_FLOAT&&(W=t.RG16F),U===t.UNSIGNED_BYTE&&(W=t.RG8)),y===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(W=t.RG8UI),U===t.UNSIGNED_SHORT&&(W=t.RG16UI),U===t.UNSIGNED_INT&&(W=t.RG32UI),U===t.BYTE&&(W=t.RG8I),U===t.SHORT&&(W=t.RG16I),U===t.INT&&(W=t.RG32I)),y===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(W=t.RGB8UI),U===t.UNSIGNED_SHORT&&(W=t.RGB16UI),U===t.UNSIGNED_INT&&(W=t.RGB32UI),U===t.BYTE&&(W=t.RGB8I),U===t.SHORT&&(W=t.RGB16I),U===t.INT&&(W=t.RGB32I)),y===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(W=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(W=t.RGBA16UI),U===t.UNSIGNED_INT&&(W=t.RGBA32UI),U===t.BYTE&&(W=t.RGBA8I),U===t.SHORT&&(W=t.RGBA16I),U===t.INT&&(W=t.RGBA32I)),y===t.RGB&&U===t.UNSIGNED_INT_5_9_9_9_REV&&(W=t.RGB9_E5),y===t.RGBA){const he=X?xa:Je.getTransfer(z);U===t.FLOAT&&(W=t.RGBA32F),U===t.HALF_FLOAT&&(W=t.RGBA16F),U===t.UNSIGNED_BYTE&&(W=he===ot?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(W=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(W=t.RGB5_A1)}return(W===t.R16F||W===t.R32F||W===t.RG16F||W===t.RG32F||W===t.RGBA16F||W===t.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function _(T,y){let U;return T?y===null||y===ar||y===Qr?U=t.DEPTH24_STENCIL8:y===Jn?U=t.DEPTH32F_STENCIL8:y===Gs&&(U=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ar||y===Qr?U=t.DEPTH_COMPONENT24:y===Jn?U=t.DEPTH_COMPONENT32F:y===Gs&&(U=t.DEPTH_COMPONENT16),U}function R(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==bn&&T.minFilter!==Ln?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function A(T){const y=T.target;y.removeEventListener("dispose",A),I(y),y.isVideoTexture&&c.delete(y)}function C(T){const y=T.target;y.removeEventListener("dispose",C),E(y)}function I(T){const y=i.get(T);if(y.__webglInit===void 0)return;const U=T.source,z=d.get(U);if(z){const X=z[y.__cacheKey];X.usedTimes--,X.usedTimes===0&&b(T),Object.keys(z).length===0&&d.delete(U)}i.remove(T)}function b(T){const y=i.get(T);t.deleteTexture(y.__webglTexture);const U=T.source,z=d.get(U);delete z[y.__cacheKey],o.memory.textures--}function E(T){const y=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(y.__webglFramebuffer[z]))for(let X=0;X<y.__webglFramebuffer[z].length;X++)t.deleteFramebuffer(y.__webglFramebuffer[z][X]);else t.deleteFramebuffer(y.__webglFramebuffer[z]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[z])}else{if(Array.isArray(y.__webglFramebuffer))for(let z=0;z<y.__webglFramebuffer.length;z++)t.deleteFramebuffer(y.__webglFramebuffer[z]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let z=0;z<y.__webglColorRenderbuffer.length;z++)y.__webglColorRenderbuffer[z]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[z]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const U=T.textures;for(let z=0,X=U.length;z<X;z++){const W=i.get(U[z]);W.__webglTexture&&(t.deleteTexture(W.__webglTexture),o.memory.textures--),i.remove(U[z])}i.remove(T)}let L=0;function D(){L=0}function N(){const T=L;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),L+=1,T}function j(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function ne(T,y){const U=i.get(T);if(T.isVideoTexture&&q(T),T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){const z=T.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(U,T,y);return}}n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+y)}function H(T,y){const U=i.get(T);if(T.version>0&&U.__version!==T.version){ie(U,T,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+y)}function ee(T,y){const U=i.get(T);if(T.version>0&&U.__version!==T.version){ie(U,T,y);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+y)}function F(T,y){const U=i.get(T);if(T.version>0&&U.__version!==T.version){me(U,T,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+y)}const de={[Wc]:t.REPEAT,[Ji]:t.CLAMP_TO_EDGE,[Xc]:t.MIRRORED_REPEAT},ve={[bn]:t.NEAREST,[RT]:t.NEAREST_MIPMAP_NEAREST,[xo]:t.NEAREST_MIPMAP_LINEAR,[Ln]:t.LINEAR,[ml]:t.LINEAR_MIPMAP_NEAREST,[Qi]:t.LINEAR_MIPMAP_LINEAR},Ae={[DT]:t.NEVER,[kT]:t.ALWAYS,[UT]:t.LESS,[Xg]:t.LEQUAL,[NT]:t.EQUAL,[BT]:t.GEQUAL,[FT]:t.GREATER,[OT]:t.NOTEQUAL};function Le(T,y){if(y.type===Jn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Ln||y.magFilter===ml||y.magFilter===xo||y.magFilter===Qi||y.minFilter===Ln||y.minFilter===ml||y.minFilter===xo||y.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,de[y.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,de[y.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,de[y.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,ve[y.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,ve[y.minFilter]),y.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,Ae[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===bn||y.minFilter!==xo&&y.minFilter!==Qi||y.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function je(T,y){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",A));const z=y.source;let X=d.get(z);X===void 0&&(X={},d.set(z,X));const W=j(y);if(W!==T.__cacheKey){X[W]===void 0&&(X[W]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),X[W].usedTimes++;const he=X[T.__cacheKey];he!==void 0&&(X[T.__cacheKey].usedTimes--,he.usedTimes===0&&b(y)),T.__cacheKey=W,T.__webglTexture=X[W].texture}return U}function ie(T,y,U){let z=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(z=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(z=t.TEXTURE_3D);const X=je(T,y),W=y.source;n.bindTexture(z,T.__webglTexture,t.TEXTURE0+U);const he=i.get(W);if(W.version!==he.__version||X===!0){n.activeTexture(t.TEXTURE0+U);const ce=Je.getPrimaries(Je.workingColorSpace),fe=y.colorSpace===Si?null:Je.getPrimaries(y.colorSpace),Be=y.colorSpace===Si||ce===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let ae=x(y.image,!1,r.maxTextureSize);ae=le(y,ae);const ge=s.convert(y.format,y.colorSpace),we=s.convert(y.type);let De=g(y.internalFormat,ge,we,y.colorSpace,y.isVideoTexture);Le(z,y);let be;const Oe=y.mipmaps,Ue=y.isVideoTexture!==!0,rt=he.__version===void 0||X===!0,B=W.dataReady,xe=R(y,ae);if(y.isDepthTexture)De=_(y.format===es,y.type),rt&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,De,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,De,ae.width,ae.height,0,ge,we,null));else if(y.isDataTexture)if(Oe.length>0){Ue&&rt&&n.texStorage2D(t.TEXTURE_2D,xe,De,Oe[0].width,Oe[0].height);for(let te=0,oe=Oe.length;te<oe;te++)be=Oe[te],Ue?B&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,be.width,be.height,ge,we,be.data):n.texImage2D(t.TEXTURE_2D,te,De,be.width,be.height,0,ge,we,be.data);y.generateMipmaps=!1}else Ue?(rt&&n.texStorage2D(t.TEXTURE_2D,xe,De,ae.width,ae.height),B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,ge,we,ae.data)):n.texImage2D(t.TEXTURE_2D,0,De,ae.width,ae.height,0,ge,we,ae.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ue&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,De,Oe[0].width,Oe[0].height,ae.depth);for(let te=0,oe=Oe.length;te<oe;te++)if(be=Oe[te],y.format!==En)if(ge!==null)if(Ue){if(B)if(y.layerUpdates.size>0){const Me=Mh(be.width,be.height,y.format,y.type);for(const Ee of y.layerUpdates){const Ge=be.data.subarray(Ee*Me/be.data.BYTES_PER_ELEMENT,(Ee+1)*Me/be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,Ee,be.width,be.height,1,ge,Ge)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,be.width,be.height,ae.depth,ge,be.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,De,be.width,be.height,ae.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?B&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,be.width,be.height,ae.depth,ge,we,be.data):n.texImage3D(t.TEXTURE_2D_ARRAY,te,De,be.width,be.height,ae.depth,0,ge,we,be.data)}else{Ue&&rt&&n.texStorage2D(t.TEXTURE_2D,xe,De,Oe[0].width,Oe[0].height);for(let te=0,oe=Oe.length;te<oe;te++)be=Oe[te],y.format!==En?ge!==null?Ue?B&&n.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,be.width,be.height,ge,be.data):n.compressedTexImage2D(t.TEXTURE_2D,te,De,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?B&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,be.width,be.height,ge,we,be.data):n.texImage2D(t.TEXTURE_2D,te,De,be.width,be.height,0,ge,we,be.data)}else if(y.isDataArrayTexture)if(Ue){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,De,ae.width,ae.height,ae.depth),B)if(y.layerUpdates.size>0){const te=Mh(ae.width,ae.height,y.format,y.type);for(const oe of y.layerUpdates){const Me=ae.data.subarray(oe*te/ae.data.BYTES_PER_ELEMENT,(oe+1)*te/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,oe,ae.width,ae.height,1,ge,we,Me)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ge,we,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,De,ae.width,ae.height,ae.depth,0,ge,we,ae.data);else if(y.isData3DTexture)Ue?(rt&&n.texStorage3D(t.TEXTURE_3D,xe,De,ae.width,ae.height,ae.depth),B&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ge,we,ae.data)):n.texImage3D(t.TEXTURE_3D,0,De,ae.width,ae.height,ae.depth,0,ge,we,ae.data);else if(y.isFramebufferTexture){if(rt)if(Ue)n.texStorage2D(t.TEXTURE_2D,xe,De,ae.width,ae.height);else{let te=ae.width,oe=ae.height;for(let Me=0;Me<xe;Me++)n.texImage2D(t.TEXTURE_2D,Me,De,te,oe,0,ge,we,null),te>>=1,oe>>=1}}else if(Oe.length>0){if(Ue&&rt){const te=Q(Oe[0]);n.texStorage2D(t.TEXTURE_2D,xe,De,te.width,te.height)}for(let te=0,oe=Oe.length;te<oe;te++)be=Oe[te],Ue?B&&n.texSubImage2D(t.TEXTURE_2D,te,0,0,ge,we,be):n.texImage2D(t.TEXTURE_2D,te,De,ge,we,be);y.generateMipmaps=!1}else if(Ue){if(rt){const te=Q(ae);n.texStorage2D(t.TEXTURE_2D,xe,De,te.width,te.height)}B&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,we,ae)}else n.texImage2D(t.TEXTURE_2D,0,De,ge,we,ae);m(y)&&p(z),he.__version=W.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function me(T,y,U){if(y.image.length!==6)return;const z=je(T,y),X=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+U);const W=i.get(X);if(X.version!==W.__version||z===!0){n.activeTexture(t.TEXTURE0+U);const he=Je.getPrimaries(Je.workingColorSpace),ce=y.colorSpace===Si?null:Je.getPrimaries(y.colorSpace),fe=y.colorSpace===Si||he===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Be=y.isCompressedTexture||y.image[0].isCompressedTexture,ae=y.image[0]&&y.image[0].isDataTexture,ge=[];for(let oe=0;oe<6;oe++)!Be&&!ae?ge[oe]=x(y.image[oe],!0,r.maxCubemapSize):ge[oe]=ae?y.image[oe].image:y.image[oe],ge[oe]=le(y,ge[oe]);const we=ge[0],De=s.convert(y.format,y.colorSpace),be=s.convert(y.type),Oe=g(y.internalFormat,De,be,y.colorSpace),Ue=y.isVideoTexture!==!0,rt=W.__version===void 0||z===!0,B=X.dataReady;let xe=R(y,we);Le(t.TEXTURE_CUBE_MAP,y);let te;if(Be){Ue&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Oe,we.width,we.height);for(let oe=0;oe<6;oe++){te=ge[oe].mipmaps;for(let Me=0;Me<te.length;Me++){const Ee=te[Me];y.format!==En?De!==null?Ue?B&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,0,0,Ee.width,Ee.height,De,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,Oe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,0,0,Ee.width,Ee.height,De,be,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me,Oe,Ee.width,Ee.height,0,De,be,Ee.data)}}}else{if(te=y.mipmaps,Ue&&rt){te.length>0&&xe++;const oe=Q(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Oe,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(ae){Ue?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ge[oe].width,ge[oe].height,De,be,ge[oe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Oe,ge[oe].width,ge[oe].height,0,De,be,ge[oe].data);for(let Me=0;Me<te.length;Me++){const Ge=te[Me].image[oe].image;Ue?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,0,0,Ge.width,Ge.height,De,be,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,Oe,Ge.width,Ge.height,0,De,be,Ge.data)}}else{Ue?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,De,be,ge[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Oe,De,be,ge[oe]);for(let Me=0;Me<te.length;Me++){const Ee=te[Me];Ue?B&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,0,0,De,be,Ee.image[oe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me+1,Oe,De,be,Ee.image[oe])}}}m(y)&&p(t.TEXTURE_CUBE_MAP),W.__version=X.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function Se(T,y,U,z,X,W){const he=s.convert(U.format,U.colorSpace),ce=s.convert(U.type),fe=g(U.internalFormat,he,ce,U.colorSpace),Be=i.get(y),ae=i.get(U);if(ae.__renderTarget=y,!Be.__hasExternalTextures){const ge=Math.max(1,y.width>>W),we=Math.max(1,y.height>>W);X===t.TEXTURE_3D||X===t.TEXTURE_2D_ARRAY?n.texImage3D(X,W,fe,ge,we,y.depth,0,he,ce,null):n.texImage2D(X,W,fe,ge,we,0,he,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),$(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,z,X,ae.__webglTexture,0,J(y)):(X===t.TEXTURE_2D||X>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,z,X,ae.__webglTexture,W),n.bindFramebuffer(t.FRAMEBUFFER,null)}function O(T,y,U){if(t.bindRenderbuffer(t.RENDERBUFFER,T),y.depthBuffer){const z=y.depthTexture,X=z&&z.isDepthTexture?z.type:null,W=_(y.stencilBuffer,X),he=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=J(y);$(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,W,y.width,y.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,W,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,W,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,he,t.RENDERBUFFER,T)}else{const z=y.textures;for(let X=0;X<z.length;X++){const W=z[X],he=s.convert(W.format,W.colorSpace),ce=s.convert(W.type),fe=g(W.internalFormat,he,ce,W.colorSpace),Be=J(y);U&&$(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,fe,y.width,y.height):$(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Be,fe,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,fe,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function se(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const z=i.get(y.depthTexture);z.__renderTarget=y,(!z.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ne(y.depthTexture,0);const X=z.__webglTexture,W=J(y);if(y.depthTexture.format===Gr)$(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,X,0,W):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,X,0);else if(y.depthTexture.format===es)$(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,X,0,W):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function re(T){const y=i.get(T),U=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const z=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),z){const X=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,z.removeEventListener("dispose",X)};z.addEventListener("dispose",X),y.__depthDisposeCallback=X}y.__boundDepthTexture=z}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");se(y.__webglFramebuffer,T)}else if(U){y.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[z]),y.__webglDepthbuffer[z]===void 0)y.__webglDepthbuffer[z]=t.createRenderbuffer(),O(y.__webglDepthbuffer[z],T,!1);else{const X=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,W=y.__webglDepthbuffer[z];t.bindRenderbuffer(t.RENDERBUFFER,W),t.framebufferRenderbuffer(t.FRAMEBUFFER,X,t.RENDERBUFFER,W)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),O(y.__webglDepthbuffer,T,!1);else{const z=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,X),t.framebufferRenderbuffer(t.FRAMEBUFFER,z,t.RENDERBUFFER,X)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(T,y,U){const z=i.get(T);y!==void 0&&Se(z.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&re(T)}function Pe(T){const y=T.texture,U=i.get(T),z=i.get(y);T.addEventListener("dispose",C);const X=T.textures,W=T.isWebGLCubeRenderTarget===!0,he=X.length>1;if(he||(z.__webglTexture===void 0&&(z.__webglTexture=t.createTexture()),z.__version=y.version,o.memory.textures++),W){U.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer[ce]=[];for(let fe=0;fe<y.mipmaps.length;fe++)U.__webglFramebuffer[ce][fe]=t.createFramebuffer()}else U.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer=[];for(let ce=0;ce<y.mipmaps.length;ce++)U.__webglFramebuffer[ce]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(he)for(let ce=0,fe=X.length;ce<fe;ce++){const Be=i.get(X[ce]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),o.memory.textures++)}if(T.samples>0&&$(T)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ce=0;ce<X.length;ce++){const fe=X[ce];U.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[ce]);const Be=s.convert(fe.format,fe.colorSpace),ae=s.convert(fe.type),ge=g(fe.internalFormat,Be,ae,fe.colorSpace,T.isXRRenderTarget===!0),we=J(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,we,ge,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,U.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),O(U.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(W){n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture),Le(t.TEXTURE_CUBE_MAP,y);for(let ce=0;ce<6;ce++)if(y.mipmaps&&y.mipmaps.length>0)for(let fe=0;fe<y.mipmaps.length;fe++)Se(U.__webglFramebuffer[ce][fe],T,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,fe);else Se(U.__webglFramebuffer[ce],T,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(y)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(he){for(let ce=0,fe=X.length;ce<fe;ce++){const Be=X[ce],ae=i.get(Be);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),Le(t.TEXTURE_2D,Be),Se(U.__webglFramebuffer,T,Be,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),m(Be)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ce=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,z.__webglTexture),Le(ce,y),y.mipmaps&&y.mipmaps.length>0)for(let fe=0;fe<y.mipmaps.length;fe++)Se(U.__webglFramebuffer[fe],T,y,t.COLOR_ATTACHMENT0,ce,fe);else Se(U.__webglFramebuffer,T,y,t.COLOR_ATTACHMENT0,ce,0);m(y)&&p(ce),n.unbindTexture()}T.depthBuffer&&re(T)}function Ce(T){const y=T.textures;for(let U=0,z=y.length;U<z;U++){const X=y[U];if(m(X)){const W=M(T),he=i.get(X).__webglTexture;n.bindTexture(W,he),p(W),n.unbindTexture()}}}const P=[],S=[];function G(T){if(T.samples>0){if($(T)===!1){const y=T.textures,U=T.width,z=T.height;let X=t.COLOR_BUFFER_BIT;const W=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(T),ce=y.length>1;if(ce)for(let fe=0;fe<y.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let fe=0;fe<y.length;fe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(X|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(X|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[fe]);const Be=i.get(y[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Be,0)}t.blitFramebuffer(0,0,U,z,0,0,U,z,X,t.NEAREST),l===!0&&(P.length=0,S.length=0,P.push(t.COLOR_ATTACHMENT0+fe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(P.push(W),S.push(W),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,S)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,P))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let fe=0;fe<y.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,he.__webglColorRenderbuffer[fe]);const Be=i.get(y[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const y=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function J(T){return Math.min(r.maxSamples,T.samples)}function $(T){const y=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function q(T){const y=o.render.frame;c.get(T)!==y&&(c.set(T,y),T.update())}function le(T,y){const U=T.colorSpace,z=T.format,X=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==ts&&U!==Si&&(Je.getTransfer(U)===ot?(z!==En||X!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),y}function Q(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(u.width=T.naturalWidth||T.width,u.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(u.width=T.displayWidth,u.height=T.displayHeight):(u.width=T.width,u.height=T.height),u}this.allocateTextureUnit=N,this.resetTextureUnits=D,this.setTexture2D=ne,this.setTexture2DArray=H,this.setTexture3D=ee,this.setTextureCube=F,this.rebindTextures=ue,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=re,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=$}function j1(t,e){function n(i,r=Si){let s;const o=Je.getTransfer(r);if(i===ii)return t.UNSIGNED_BYTE;if(i===rf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===sf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Og)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Ng)return t.BYTE;if(i===Fg)return t.SHORT;if(i===Gs)return t.UNSIGNED_SHORT;if(i===nf)return t.INT;if(i===ar)return t.UNSIGNED_INT;if(i===Jn)return t.FLOAT;if(i===Qs)return t.HALF_FLOAT;if(i===Bg)return t.ALPHA;if(i===kg)return t.RGB;if(i===En)return t.RGBA;if(i===Hg)return t.LUMINANCE;if(i===zg)return t.LUMINANCE_ALPHA;if(i===Gr)return t.DEPTH_COMPONENT;if(i===es)return t.DEPTH_STENCIL;if(i===Vg)return t.RED;if(i===of)return t.RED_INTEGER;if(i===Gg)return t.RG;if(i===af)return t.RG_INTEGER;if(i===lf)return t.RGBA_INTEGER;if(i===Yo||i===Ko||i===Zo||i===Jo)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Yo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Yo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ko)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$c||i===qc||i===jc||i===Yc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===$c)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kc||i===Zc||i===Jc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Kc||i===Zc)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Jc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Qc||i===eu||i===tu||i===nu||i===iu||i===ru||i===su||i===ou||i===au||i===lu||i===cu||i===uu||i===fu||i===du)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Qc)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===eu)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tu)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===nu)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===iu)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ru)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===su)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ou)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===au)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lu)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cu)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uu)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fu)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===du)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qo||i===hu||i===pu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Qo)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wg||i===mu||i===gu||i===_u)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Qo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===mu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===gu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_u)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Qr?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Y1={type:"move"};class Wl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),p=this._getHandJoint(u,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),h=.02,v=.005;u.inputState.pinching&&d>h+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=h-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Y1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Oo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const K1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z1=`
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

}`;class J1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Yt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Pi({vertexShader:K1,fragmentShader:Z1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new In(new za(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Q1 extends os{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,h=null,v=null;const x=new J1,m=n.getContextAttributes();let p=null,M=null;const g=[],_=[],R=new it;let A=null;const C=new cn;C.viewport=new _t;const I=new cn;I.viewport=new _t;const b=[C,I],E=new yA;let L=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let me=g[ie];return me===void 0&&(me=new Wl,g[ie]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ie){let me=g[ie];return me===void 0&&(me=new Wl,g[ie]=me),me.getGripSpace()},this.getHand=function(ie){let me=g[ie];return me===void 0&&(me=new Wl,g[ie]=me),me.getHandSpace()};function N(ie){const me=_.indexOf(ie.inputSource);if(me===-1)return;const Se=g[me];Se!==void 0&&(Se.update(ie.inputSource,ie.frame,u||o),Se.dispatchEvent({type:ie.type,data:ie.inputSource}))}function j(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",ne);for(let ie=0;ie<g.length;ie++){const me=_[ie];me!==null&&(_[ie]=null,g[ie].disconnect(me))}L=null,D=null,x.reset(),e.setRenderTarget(p),h=null,d=null,f=null,r=null,M=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(ie){u=ie},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",j),r.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,me),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new lr(h.framebufferWidth,h.framebufferHeight,{format:En,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let me=null,Se=null,O=null;m.depth&&(O=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,me=m.stencil?es:Gr,Se=m.stencil?Qr:ar);const se={colorFormat:n.RGBA8,depthFormat:O,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(se),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new lr(d.textureWidth,d.textureHeight,{format:En,type:ii,depthTexture:new i_(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ne(ie){for(let me=0;me<ie.removed.length;me++){const Se=ie.removed[me],O=_.indexOf(Se);O>=0&&(_[O]=null,g[O].disconnect(Se))}for(let me=0;me<ie.added.length;me++){const Se=ie.added[me];let O=_.indexOf(Se);if(O===-1){for(let re=0;re<g.length;re++)if(re>=_.length){_.push(Se),O=re;break}else if(_[re]===null){_[re]=Se,O=re;break}if(O===-1)break}const se=g[O];se&&se.connect(Se)}}const H=new Y,ee=new Y;function F(ie,me,Se){H.setFromMatrixPosition(me.matrixWorld),ee.setFromMatrixPosition(Se.matrixWorld);const O=H.distanceTo(ee),se=me.projectionMatrix.elements,re=Se.projectionMatrix.elements,ue=se[14]/(se[10]-1),Pe=se[14]/(se[10]+1),Ce=(se[9]+1)/se[5],P=(se[9]-1)/se[5],S=(se[8]-1)/se[0],G=(re[8]+1)/re[0],J=ue*S,$=ue*G,q=O/(-S+G),le=q*-S;if(me.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(le),ie.translateZ(q),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),se[10]===-1)ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Q=ue+q,T=Pe+q,y=J-le,U=$+(O-le),z=Ce*Pe/T*Q,X=P*Pe/T*Q;ie.projectionMatrix.makePerspective(y,U,z,X,Q,T),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function de(ie,me){me===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(me.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let me=ie.near,Se=ie.far;x.texture!==null&&(x.depthNear>0&&(me=x.depthNear),x.depthFar>0&&(Se=x.depthFar)),E.near=I.near=C.near=me,E.far=I.far=C.far=Se,(L!==E.near||D!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),L=E.near,D=E.far),C.layers.mask=ie.layers.mask|2,I.layers.mask=ie.layers.mask|4,E.layers.mask=C.layers.mask|I.layers.mask;const O=ie.parent,se=E.cameras;de(E,O);for(let re=0;re<se.length;re++)de(se[re],O);se.length===2?F(E,C,I):E.projectionMatrix.copy(C.projectionMatrix),ve(ie,E,O)};function ve(ie,me,Se){Se===null?ie.matrix.copy(me.matrixWorld):(ie.matrix.copy(Se.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(me.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(me.projectionMatrix),ie.projectionMatrixInverse.copy(me.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=vu*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(ie){l=ie,d!==null&&(d.fixedFoveation=ie),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ie)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(E)};let Ae=null;function Le(ie,me){if(c=me.getViewerPose(u||o),v=me,c!==null){const Se=c.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let O=!1;Se.length!==E.cameras.length&&(E.cameras.length=0,O=!0);for(let re=0;re<Se.length;re++){const ue=Se[re];let Pe=null;if(h!==null)Pe=h.getViewport(ue);else{const P=f.getViewSubImage(d,ue);Pe=P.viewport,re===0&&(e.setRenderTargetTextures(M,P.colorTexture,d.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(M))}let Ce=b[re];Ce===void 0&&(Ce=new cn,Ce.layers.enable(re),Ce.viewport=new _t,b[re]=Ce),Ce.matrix.fromArray(ue.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(ue.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Pe.x,Pe.y,Pe.width,Pe.height),re===0&&(E.matrix.copy(Ce.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),O===!0&&E.cameras.push(Ce)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")){const re=f.getDepthInformation(Se[0]);re&&re.isValid&&re.texture&&x.init(e,re,r.renderState)}}for(let Se=0;Se<g.length;Se++){const O=_[Se],se=g[Se];O!==null&&se!==void 0&&se.update(O,me,u||o)}Ae&&Ae(ie,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),v=null}const je=new r_;je.setAnimationLoop(Le),this.setAnimationLoop=function(ie){Ae=ie},this.dispose=function(){}}}const Xi=new ri,eP=new St;function tP(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Qg(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,g,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),c(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),v(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,g):p.isSpriteMaterial?u(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),g=M.envMap,_=M.envMapRotation;g&&(m.envMap.value=g,Xi.copy(_),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),m.envMapRotation.value.setFromMatrix4(eP.makeRotationFromEuler(Xi)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,g){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=g*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nP(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,g){const _=g.program;i.uniformBlockBinding(M,_)}function u(M,g){let _=r[M.id];_===void 0&&(v(M),_=c(M),r[M.id]=_,M.addEventListener("dispose",m));const R=g.program;i.updateUBOMapping(M,R);const A=e.render.frame;s[M.id]!==A&&(d(M),s[M.id]=A)}function c(M){const g=f();M.__bindingPointIndex=g;const _=t.createBuffer(),R=M.__size,A=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,R,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,_),_}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const g=r[M.id],_=M.uniforms,R=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let A=0,C=_.length;A<C;A++){const I=Array.isArray(_[A])?_[A]:[_[A]];for(let b=0,E=I.length;b<E;b++){const L=I[b];if(h(L,A,b,R)===!0){const D=L.__offset,N=Array.isArray(L.value)?L.value:[L.value];let j=0;for(let ne=0;ne<N.length;ne++){const H=N[ne],ee=x(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,D+j,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,j),j+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,D,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(M,g,_,R){const A=M.value,C=g+"_"+_;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{const I=R[C];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return R[C]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function v(M){const g=M.uniforms;let _=0;const R=16;for(let C=0,I=g.length;C<I;C++){const b=Array.isArray(g[C])?g[C]:[g[C]];for(let E=0,L=b.length;E<L;E++){const D=b[E],N=Array.isArray(D.value)?D.value:[D.value];for(let j=0,ne=N.length;j<ne;j++){const H=N[j],ee=x(H),F=_%R,de=F%ee.boundary,ve=F+de;_+=de,ve!==0&&R-ve<ee.storage&&(_+=R-ve),D.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=_,_+=ee.storage}}}const A=_%R;return A>0&&(_+=R-A),M.__size=_,M.__cache={},this}function x(M){const g={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(g.boundary=4,g.storage=4):M.isVector2?(g.boundary=8,g.storage=8):M.isVector3||M.isColor?(g.boundary=16,g.storage=12):M.isVector4?(g.boundary=16,g.storage=16):M.isMatrix3?(g.boundary=48,g.storage=48):M.isMatrix4?(g.boundary=64,g.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),g}function m(M){const g=M.target;g.removeEventListener("dispose",m);const _=o.indexOf(g.__bindingPointIndex);o.splice(_,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function p(){for(const M in r)t.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:u,dispose:p}}class iP{constructor(e={}){const{canvas:n=zT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const v=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const M=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ln,this.toneMapping=Ai,this.toneMappingExposure=1;const _=this;let R=!1,A=0,C=0,I=null,b=-1,E=null;const L=new _t,D=new _t;let N=null;const j=new at(0);let ne=0,H=n.width,ee=n.height,F=1,de=null,ve=null;const Ae=new _t(0,0,H,ee),Le=new _t(0,0,H,ee);let je=!1;const ie=new n_;let me=!1,Se=!1;const O=new St,se=new St,re=new Y,ue=new _t,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function P(){return I===null?F:1}let S=i;function G(w,k){return n.getContext(w,k)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${tf}`),n.addEventListener("webglcontextlost",oe,!1),n.addEventListener("webglcontextrestored",Me,!1),n.addEventListener("webglcontextcreationerror",Ee,!1),S===null){const k="webgl2";if(S=G(k,w),S===null)throw G(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let J,$,q,le,Q,T,y,U,z,X,W,he,ce,fe,Be,ae,ge,we,De,be,Oe,Ue,rt,B;function xe(){J=new dC(S),J.init(),Ue=new j1(S,J),$=new oC(S,J,e,Ue),q=new $1(S,J),$.reverseDepthBuffer&&d&&q.buffers.depth.setReversed(!0),le=new mC(S),Q=new D1,T=new q1(S,J,q,Q,$,Ue,le),y=new lC(_),U=new fC(_),z=new EA(S),rt=new rC(S,z),X=new hC(S,z,le,rt),W=new _C(S,X,z,le),De=new gC(S,$,T),ae=new aC(Q),he=new I1(_,y,U,J,$,rt,ae),ce=new tP(_,Q),fe=new N1,Be=new z1(J),we=new iC(_,y,U,q,W,h,l),ge=new W1(_,W,$),B=new nP(S,le,$,q),be=new sC(S,J,le),Oe=new pC(S,J,le),le.programs=he.programs,_.capabilities=$,_.extensions=J,_.properties=Q,_.renderLists=fe,_.shadowMap=ge,_.state=q,_.info=le}xe();const te=new Q1(_,S);this.xr=te,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const w=J.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=J.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(w){w!==void 0&&(F=w,this.setSize(H,ee,!1))},this.getSize=function(w){return w.set(H,ee)},this.setSize=function(w,k,K=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,ee=k,n.width=Math.floor(w*F),n.height=Math.floor(k*F),K===!0&&(n.style.width=w+"px",n.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(H*F,ee*F).floor()},this.setDrawingBufferSize=function(w,k,K){H=w,ee=k,F=K,n.width=Math.floor(w*K),n.height=Math.floor(k*K),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(Ae)},this.setViewport=function(w,k,K,Z){w.isVector4?Ae.set(w.x,w.y,w.z,w.w):Ae.set(w,k,K,Z),q.viewport(L.copy(Ae).multiplyScalar(F).round())},this.getScissor=function(w){return w.copy(Le)},this.setScissor=function(w,k,K,Z){w.isVector4?Le.set(w.x,w.y,w.z,w.w):Le.set(w,k,K,Z),q.scissor(D.copy(Le).multiplyScalar(F).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(w){q.setScissorTest(je=w)},this.setOpaqueSort=function(w){de=w},this.setTransparentSort=function(w){ve=w},this.getClearColor=function(w){return w.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(w=!0,k=!0,K=!0){let Z=0;if(w){let V=!1;if(I!==null){const pe=I.texture.format;V=pe===lf||pe===af||pe===of}if(V){const pe=I.texture.type,ye=pe===ii||pe===ar||pe===Gs||pe===Qr||pe===rf||pe===sf,Te=we.getClearColor(),Re=we.getClearAlpha(),He=Te.r,ze=Te.g,Ie=Te.b;ye?(v[0]=He,v[1]=ze,v[2]=Ie,v[3]=Re,S.clearBufferuiv(S.COLOR,0,v)):(x[0]=He,x[1]=ze,x[2]=Ie,x[3]=Re,S.clearBufferiv(S.COLOR,0,x))}else Z|=S.COLOR_BUFFER_BIT}k&&(Z|=S.DEPTH_BUFFER_BIT),K&&(Z|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",oe,!1),n.removeEventListener("webglcontextrestored",Me,!1),n.removeEventListener("webglcontextcreationerror",Ee,!1),we.dispose(),fe.dispose(),Be.dispose(),Q.dispose(),y.dispose(),U.dispose(),W.dispose(),rt.dispose(),B.dispose(),he.dispose(),te.dispose(),te.removeEventListener("sessionstart",pf),te.removeEventListener("sessionend",mf),Ui.stop()};function oe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const w=le.autoReset,k=ge.enabled,K=ge.autoUpdate,Z=ge.needsUpdate,V=ge.type;xe(),le.autoReset=w,ge.enabled=k,ge.autoUpdate=K,ge.needsUpdate=Z,ge.type=V}function Ee(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ge(w){const k=w.target;k.removeEventListener("dispose",Ge),mt(k)}function mt(w){Dt(w),Q.remove(w)}function Dt(w){const k=Q.get(w).programs;k!==void 0&&(k.forEach(function(K){he.releaseProgram(K)}),w.isShaderMaterial&&he.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,K,Z,V,pe){k===null&&(k=Pe);const ye=V.isMesh&&V.matrixWorld.determinant()<0,Te=c_(w,k,K,Z,V);q.setMaterial(Z,ye);let Re=K.index,He=1;if(Z.wireframe===!0){if(Re=X.getWireframeAttribute(K),Re===void 0)return;He=2}const ze=K.drawRange,Ie=K.attributes.position;let Ye=ze.start*He,Qe=(ze.start+ze.count)*He;pe!==null&&(Ye=Math.max(Ye,pe.start*He),Qe=Math.min(Qe,(pe.start+pe.count)*He)),Re!==null?(Ye=Math.max(Ye,0),Qe=Math.min(Qe,Re.count)):Ie!=null&&(Ye=Math.max(Ye,0),Qe=Math.min(Qe,Ie.count));const xt=Qe-Ye;if(xt<0||xt===1/0)return;rt.setup(V,Z,Te,K,Re);let gt,Ke=be;if(Re!==null&&(gt=z.get(Re),Ke=Oe,Ke.setIndex(gt)),V.isMesh)Z.wireframe===!0?(q.setLineWidth(Z.wireframeLinewidth*P()),Ke.setMode(S.LINES)):Ke.setMode(S.TRIANGLES);else if(V.isLine){let Ne=Z.linewidth;Ne===void 0&&(Ne=1),q.setLineWidth(Ne*P()),V.isLineSegments?Ke.setMode(S.LINES):V.isLineLoop?Ke.setMode(S.LINE_LOOP):Ke.setMode(S.LINE_STRIP)}else V.isPoints?Ke.setMode(S.POINTS):V.isSprite&&Ke.setMode(S.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Ke.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(J.get("WEBGL_multi_draw"))Ke.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ne=V._multiDrawStarts,Ct=V._multiDrawCounts,et=V._multiDrawCount,pn=Re?z.get(Re).bytesPerElement:1,fr=Q.get(Z).currentProgram.getUniforms();for(let Kt=0;Kt<et;Kt++)fr.setValue(S,"_gl_DrawID",Kt),Ke.render(Ne[Kt]/pn,Ct[Kt])}else if(V.isInstancedMesh)Ke.renderInstances(Ye,xt,V.count);else if(K.isInstancedBufferGeometry){const Ne=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ct=Math.min(K.instanceCount,Ne);Ke.renderInstances(Ye,xt,Ct)}else Ke.render(Ye,xt)};function st(w,k,K){w.transparent===!0&&w.side===Kn&&w.forceSinglePass===!1?(w.side=jt,w.needsUpdate=!0,so(w,k,K),w.side=Ci,w.needsUpdate=!0,so(w,k,K),w.side=Kn):so(w,k,K)}this.compile=function(w,k,K=null){K===null&&(K=w),p=Be.get(K),p.init(k),g.push(p),K.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),w!==K&&w.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const Z=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const pe=V.material;if(pe)if(Array.isArray(pe))for(let ye=0;ye<pe.length;ye++){const Te=pe[ye];st(Te,K,V),Z.add(Te)}else st(pe,K,V),Z.add(pe)}),g.pop(),p=null,Z},this.compileAsync=function(w,k,K=null){const Z=this.compile(w,k,K);return new Promise(V=>{function pe(){if(Z.forEach(function(ye){Q.get(ye).currentProgram.isReady()&&Z.delete(ye)}),Z.size===0){V(w);return}setTimeout(pe,10)}J.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let hn=null;function On(w){hn&&hn(w)}function pf(){Ui.stop()}function mf(){Ui.start()}const Ui=new r_;Ui.setAnimationLoop(On),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(w){hn=w,te.setAnimationLoop(w),w===null?Ui.stop():Ui.start()},te.addEventListener("sessionstart",pf),te.addEventListener("sessionend",mf),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(k),k=te.getCamera()),w.isScene===!0&&w.onBeforeRender(_,w,k,I),p=Be.get(w,g.length),p.init(k),g.push(p),se.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ie.setFromProjectionMatrix(se),Se=this.localClippingEnabled,me=ae.init(this.clippingPlanes,Se),m=fe.get(w,M.length),m.init(),M.push(m),te.enabled===!0&&te.isPresenting===!0){const pe=_.xr.getDepthSensingMesh();pe!==null&&Wa(pe,k,-1/0,_.sortObjects)}Wa(w,k,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(de,ve),Ce=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Ce&&we.addToRenderList(m,w),this.info.render.frame++,me===!0&&ae.beginShadows();const K=p.state.shadowsArray;ge.render(K,w,k),me===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,V=m.transmissive;if(p.setupLights(),k.isArrayCamera){const pe=k.cameras;if(V.length>0)for(let ye=0,Te=pe.length;ye<Te;ye++){const Re=pe[ye];_f(Z,V,w,Re)}Ce&&we.render(w);for(let ye=0,Te=pe.length;ye<Te;ye++){const Re=pe[ye];gf(m,w,Re,Re.viewport)}}else V.length>0&&_f(Z,V,w,k),Ce&&we.render(w),gf(m,w,k);I!==null&&(T.updateMultisampleRenderTarget(I),T.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(_,w,k),rt.resetDefaultState(),b=-1,E=null,g.pop(),g.length>0?(p=g[g.length-1],me===!0&&ae.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Wa(w,k,K,Z){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ie.intersectsSprite(w)){Z&&ue.setFromMatrixPosition(w.matrixWorld).applyMatrix4(se);const ye=W.update(w),Te=w.material;Te.visible&&m.push(w,ye,Te,K,ue.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ie.intersectsObject(w))){const ye=W.update(w),Te=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ue.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),ue.copy(ye.boundingSphere.center)),ue.applyMatrix4(w.matrixWorld).applyMatrix4(se)),Array.isArray(Te)){const Re=ye.groups;for(let He=0,ze=Re.length;He<ze;He++){const Ie=Re[He],Ye=Te[Ie.materialIndex];Ye&&Ye.visible&&m.push(w,ye,Ye,K,ue.z,Ie)}}else Te.visible&&m.push(w,ye,Te,K,ue.z,null)}}const pe=w.children;for(let ye=0,Te=pe.length;ye<Te;ye++)Wa(pe[ye],k,K,Z)}function gf(w,k,K,Z){const V=w.opaque,pe=w.transmissive,ye=w.transparent;p.setupLightsView(K),me===!0&&ae.setGlobalState(_.clippingPlanes,K),Z&&q.viewport(L.copy(Z)),V.length>0&&ro(V,k,K),pe.length>0&&ro(pe,k,K),ye.length>0&&ro(ye,k,K),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function _f(w,k,K,Z){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Z.id]===void 0&&(p.state.transmissionRenderTarget[Z.id]=new lr(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")||J.has("EXT_color_buffer_float")?Qs:ii,minFilter:Qi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const pe=p.state.transmissionRenderTarget[Z.id],ye=Z.viewport||L;pe.setSize(ye.z,ye.w);const Te=_.getRenderTarget();_.setRenderTarget(pe),_.getClearColor(j),ne=_.getClearAlpha(),ne<1&&_.setClearColor(16777215,.5),_.clear(),Ce&&we.render(K);const Re=_.toneMapping;_.toneMapping=Ai;const He=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),p.setupLightsView(Z),me===!0&&ae.setGlobalState(_.clippingPlanes,Z),ro(w,K,Z),T.updateMultisampleRenderTarget(pe),T.updateRenderTargetMipmap(pe),J.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ie=0,Ye=k.length;Ie<Ye;Ie++){const Qe=k[Ie],xt=Qe.object,gt=Qe.geometry,Ke=Qe.material,Ne=Qe.group;if(Ke.side===Kn&&xt.layers.test(Z.layers)){const Ct=Ke.side;Ke.side=jt,Ke.needsUpdate=!0,vf(xt,K,Z,gt,Ke,Ne),Ke.side=Ct,Ke.needsUpdate=!0,ze=!0}}ze===!0&&(T.updateMultisampleRenderTarget(pe),T.updateRenderTargetMipmap(pe))}_.setRenderTarget(Te),_.setClearColor(j,ne),He!==void 0&&(Z.viewport=He),_.toneMapping=Re}function ro(w,k,K){const Z=k.isScene===!0?k.overrideMaterial:null;for(let V=0,pe=w.length;V<pe;V++){const ye=w[V],Te=ye.object,Re=ye.geometry,He=Z===null?ye.material:Z,ze=ye.group;Te.layers.test(K.layers)&&vf(Te,k,K,Re,He,ze)}}function vf(w,k,K,Z,V,pe){w.onBeforeRender(_,k,K,Z,V,pe),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(_,k,K,Z,w,pe),V.transparent===!0&&V.side===Kn&&V.forceSinglePass===!1?(V.side=jt,V.needsUpdate=!0,_.renderBufferDirect(K,k,Z,V,w,pe),V.side=Ci,V.needsUpdate=!0,_.renderBufferDirect(K,k,Z,V,w,pe),V.side=Kn):_.renderBufferDirect(K,k,Z,V,w,pe),w.onAfterRender(_,k,K,Z,V,pe)}function so(w,k,K){k.isScene!==!0&&(k=Pe);const Z=Q.get(w),V=p.state.lights,pe=p.state.shadowsArray,ye=V.state.version,Te=he.getParameters(w,V.state,pe,k,K),Re=he.getProgramCacheKey(Te);let He=Z.programs;Z.environment=w.isMeshStandardMaterial?k.environment:null,Z.fog=k.fog,Z.envMap=(w.isMeshStandardMaterial?U:y).get(w.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&w.envMap===null?k.environmentRotation:w.envMapRotation,He===void 0&&(w.addEventListener("dispose",Ge),He=new Map,Z.programs=He);let ze=He.get(Re);if(ze!==void 0){if(Z.currentProgram===ze&&Z.lightsStateVersion===ye)return yf(w,Te),ze}else Te.uniforms=he.getUniforms(w),w.onBeforeCompile(Te,_),ze=he.acquireProgram(Te,Re),He.set(Re,ze),Z.uniforms=Te.uniforms;const Ie=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ie.clippingPlanes=ae.uniform),yf(w,Te),Z.needsLights=f_(w),Z.lightsStateVersion=ye,Z.needsLights&&(Ie.ambientLightColor.value=V.state.ambient,Ie.lightProbe.value=V.state.probe,Ie.directionalLights.value=V.state.directional,Ie.directionalLightShadows.value=V.state.directionalShadow,Ie.spotLights.value=V.state.spot,Ie.spotLightShadows.value=V.state.spotShadow,Ie.rectAreaLights.value=V.state.rectArea,Ie.ltc_1.value=V.state.rectAreaLTC1,Ie.ltc_2.value=V.state.rectAreaLTC2,Ie.pointLights.value=V.state.point,Ie.pointLightShadows.value=V.state.pointShadow,Ie.hemisphereLights.value=V.state.hemi,Ie.directionalShadowMap.value=V.state.directionalShadowMap,Ie.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ie.spotShadowMap.value=V.state.spotShadowMap,Ie.spotLightMatrix.value=V.state.spotLightMatrix,Ie.spotLightMap.value=V.state.spotLightMap,Ie.pointShadowMap.value=V.state.pointShadowMap,Ie.pointShadowMatrix.value=V.state.pointShadowMatrix),Z.currentProgram=ze,Z.uniformsList=null,ze}function xf(w){if(w.uniformsList===null){const k=w.currentProgram.getUniforms();w.uniformsList=ea.seqWithValue(k.seq,w.uniforms)}return w.uniformsList}function yf(w,k){const K=Q.get(w);K.outputColorSpace=k.outputColorSpace,K.batching=k.batching,K.batchingColor=k.batchingColor,K.instancing=k.instancing,K.instancingColor=k.instancingColor,K.instancingMorph=k.instancingMorph,K.skinning=k.skinning,K.morphTargets=k.morphTargets,K.morphNormals=k.morphNormals,K.morphColors=k.morphColors,K.morphTargetsCount=k.morphTargetsCount,K.numClippingPlanes=k.numClippingPlanes,K.numIntersection=k.numClipIntersection,K.vertexAlphas=k.vertexAlphas,K.vertexTangents=k.vertexTangents,K.toneMapping=k.toneMapping}function c_(w,k,K,Z,V){k.isScene!==!0&&(k=Pe),T.resetTextureUnits();const pe=k.fog,ye=Z.isMeshStandardMaterial?k.environment:null,Te=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ts,Re=(Z.isMeshStandardMaterial?U:y).get(Z.envMap||ye),He=Z.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ze=!!K.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ie=!!K.morphAttributes.position,Ye=!!K.morphAttributes.normal,Qe=!!K.morphAttributes.color;let xt=Ai;Z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(xt=_.toneMapping);const gt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ke=gt!==void 0?gt.length:0,Ne=Q.get(Z),Ct=p.state.lights;if(me===!0&&(Se===!0||w!==E)){const Bt=w===E&&Z.id===b;ae.setState(Z,w,Bt)}let et=!1;Z.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Ct.state.version||Ne.outputColorSpace!==Te||V.isBatchedMesh&&Ne.batching===!1||!V.isBatchedMesh&&Ne.batching===!0||V.isBatchedMesh&&Ne.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ne.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ne.instancing===!1||!V.isInstancedMesh&&Ne.instancing===!0||V.isSkinnedMesh&&Ne.skinning===!1||!V.isSkinnedMesh&&Ne.skinning===!0||V.isInstancedMesh&&Ne.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ne.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ne.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ne.instancingMorph===!1&&V.morphTexture!==null||Ne.envMap!==Re||Z.fog===!0&&Ne.fog!==pe||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ae.numPlanes||Ne.numIntersection!==ae.numIntersection)||Ne.vertexAlphas!==He||Ne.vertexTangents!==ze||Ne.morphTargets!==Ie||Ne.morphNormals!==Ye||Ne.morphColors!==Qe||Ne.toneMapping!==xt||Ne.morphTargetsCount!==Ke)&&(et=!0):(et=!0,Ne.__version=Z.version);let pn=Ne.currentProgram;et===!0&&(pn=so(Z,k,V));let fr=!1,Kt=!1,ls=!1;const dt=pn.getUniforms(),nn=Ne.uniforms;if(q.useProgram(pn.program)&&(fr=!0,Kt=!0,ls=!0),Z.id!==b&&(b=Z.id,Kt=!0),fr||E!==w){q.buffers.depth.getReversed()?(O.copy(w.projectionMatrix),GT(O),WT(O),dt.setValue(S,"projectionMatrix",O)):dt.setValue(S,"projectionMatrix",w.projectionMatrix),dt.setValue(S,"viewMatrix",w.matrixWorldInverse);const Wt=dt.map.cameraPosition;Wt!==void 0&&Wt.setValue(S,re.setFromMatrixPosition(w.matrixWorld)),$.logarithmicDepthBuffer&&dt.setValue(S,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&dt.setValue(S,"isOrthographic",w.isOrthographicCamera===!0),E!==w&&(E=w,Kt=!0,ls=!0)}if(V.isSkinnedMesh){dt.setOptional(S,V,"bindMatrix"),dt.setOptional(S,V,"bindMatrixInverse");const Bt=V.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),dt.setValue(S,"boneTexture",Bt.boneTexture,T))}V.isBatchedMesh&&(dt.setOptional(S,V,"batchingTexture"),dt.setValue(S,"batchingTexture",V._matricesTexture,T),dt.setOptional(S,V,"batchingIdTexture"),dt.setValue(S,"batchingIdTexture",V._indirectTexture,T),dt.setOptional(S,V,"batchingColorTexture"),V._colorsTexture!==null&&dt.setValue(S,"batchingColorTexture",V._colorsTexture,T));const rn=K.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&De.update(V,K,pn),(Kt||Ne.receiveShadow!==V.receiveShadow)&&(Ne.receiveShadow=V.receiveShadow,dt.setValue(S,"receiveShadow",V.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(nn.envMap.value=Re,nn.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&k.environment!==null&&(nn.envMapIntensity.value=k.environmentIntensity),Kt&&(dt.setValue(S,"toneMappingExposure",_.toneMappingExposure),Ne.needsLights&&u_(nn,ls),pe&&Z.fog===!0&&ce.refreshFogUniforms(nn,pe),ce.refreshMaterialUniforms(nn,Z,F,ee,p.state.transmissionRenderTarget[w.id]),ea.upload(S,xf(Ne),nn,T)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ea.upload(S,xf(Ne),nn,T),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&dt.setValue(S,"center",V.center),dt.setValue(S,"modelViewMatrix",V.modelViewMatrix),dt.setValue(S,"normalMatrix",V.normalMatrix),dt.setValue(S,"modelMatrix",V.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Bt=Z.uniformsGroups;for(let Wt=0,Xa=Bt.length;Wt<Xa;Wt++){const Ni=Bt[Wt];B.update(Ni,pn),B.bind(Ni,pn)}}return pn}function u_(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function f_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,k,K){Q.get(w.texture).__webglTexture=k,Q.get(w.depthTexture).__webglTexture=K;const Z=Q.get(w);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=K===void 0,Z.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,k){const K=Q.get(w);K.__webglFramebuffer=k,K.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,K=0){I=w,A=k,C=K;let Z=!0,V=null,pe=!1,ye=!1;if(w){const Re=Q.get(w);if(Re.__useDefaultFramebuffer!==void 0)q.bindFramebuffer(S.FRAMEBUFFER,null),Z=!1;else if(Re.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(Re.__hasExternalTextures)T.rebindTextures(w,Q.get(w.texture).__webglTexture,Q.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ie=w.depthTexture;if(Re.__boundDepthTexture!==Ie){if(Ie!==null&&Q.has(Ie)&&(w.width!==Ie.image.width||w.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}const He=w.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(ye=!0);const ze=Q.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ze[k])?V=ze[k][K]:V=ze[k],pe=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?V=Q.get(w).__webglMultisampledFramebuffer:Array.isArray(ze)?V=ze[K]:V=ze,L.copy(w.viewport),D.copy(w.scissor),N=w.scissorTest}else L.copy(Ae).multiplyScalar(F).floor(),D.copy(Le).multiplyScalar(F).floor(),N=je;if(q.bindFramebuffer(S.FRAMEBUFFER,V)&&Z&&q.drawBuffers(w,V),q.viewport(L),q.scissor(D),q.setScissorTest(N),pe){const Re=Q.get(w.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+k,Re.__webglTexture,K)}else if(ye){const Re=Q.get(w.texture),He=k||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,Re.__webglTexture,K||0,He)}b=-1},this.readRenderTargetPixels=function(w,k,K,Z,V,pe,ye){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){q.bindFramebuffer(S.FRAMEBUFFER,Te);try{const Re=w.texture,He=Re.format,ze=Re.type;if(!$.textureFormatReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-Z&&K>=0&&K<=w.height-V&&S.readPixels(k,K,Z,V,Ue.convert(He),Ue.convert(ze),pe)}finally{const Re=I!==null?Q.get(I).__webglFramebuffer:null;q.bindFramebuffer(S.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(w,k,K,Z,V,pe,ye){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Q.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){const Re=w.texture,He=Re.format,ze=Re.type;if(!$.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=w.width-Z&&K>=0&&K<=w.height-V){q.bindFramebuffer(S.FRAMEBUFFER,Te);const Ie=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,Ie),S.bufferData(S.PIXEL_PACK_BUFFER,pe.byteLength,S.STREAM_READ),S.readPixels(k,K,Z,V,Ue.convert(He),Ue.convert(ze),0);const Ye=I!==null?Q.get(I).__webglFramebuffer:null;q.bindFramebuffer(S.FRAMEBUFFER,Ye);const Qe=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await VT(S,Qe,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,Ie),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,pe),S.deleteBuffer(Ie),S.deleteSync(Qe),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,k=null,K=0){w.isTexture!==!0&&(Pr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,w=arguments[1]);const Z=Math.pow(2,-K),V=Math.floor(w.image.width*Z),pe=Math.floor(w.image.height*Z),ye=k!==null?k.x:0,Te=k!==null?k.y:0;T.setTexture2D(w,0),S.copyTexSubImage2D(S.TEXTURE_2D,K,0,0,ye,Te,V,pe),q.unbindTexture()};const d_=S.createFramebuffer(),h_=S.createFramebuffer();this.copyTextureToTexture=function(w,k,K=null,Z=null,V=0,pe=null){w.isTexture!==!0&&(Pr("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,w=arguments[1],k=arguments[2],pe=arguments[3]||0,K=null),pe===null&&(V!==0?(Pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=V,V=0):pe=0);let ye,Te,Re,He,ze,Ie,Ye,Qe,xt;const gt=w.isCompressedTexture?w.mipmaps[pe]:w.image;if(K!==null)ye=K.max.x-K.min.x,Te=K.max.y-K.min.y,Re=K.isBox3?K.max.z-K.min.z:1,He=K.min.x,ze=K.min.y,Ie=K.isBox3?K.min.z:0;else{const rn=Math.pow(2,-V);ye=Math.floor(gt.width*rn),Te=Math.floor(gt.height*rn),w.isDataArrayTexture?Re=gt.depth:w.isData3DTexture?Re=Math.floor(gt.depth*rn):Re=1,He=0,ze=0,Ie=0}Z!==null?(Ye=Z.x,Qe=Z.y,xt=Z.z):(Ye=0,Qe=0,xt=0);const Ke=Ue.convert(k.format),Ne=Ue.convert(k.type);let Ct;k.isData3DTexture?(T.setTexture3D(k,0),Ct=S.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(T.setTexture2DArray(k,0),Ct=S.TEXTURE_2D_ARRAY):(T.setTexture2D(k,0),Ct=S.TEXTURE_2D),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,k.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,k.unpackAlignment);const et=S.getParameter(S.UNPACK_ROW_LENGTH),pn=S.getParameter(S.UNPACK_IMAGE_HEIGHT),fr=S.getParameter(S.UNPACK_SKIP_PIXELS),Kt=S.getParameter(S.UNPACK_SKIP_ROWS),ls=S.getParameter(S.UNPACK_SKIP_IMAGES);S.pixelStorei(S.UNPACK_ROW_LENGTH,gt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,gt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,He),S.pixelStorei(S.UNPACK_SKIP_ROWS,ze),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Ie);const dt=w.isDataArrayTexture||w.isData3DTexture,nn=k.isDataArrayTexture||k.isData3DTexture;if(w.isDepthTexture){const rn=Q.get(w),Bt=Q.get(k),Wt=Q.get(rn.__renderTarget),Xa=Q.get(Bt.__renderTarget);q.bindFramebuffer(S.READ_FRAMEBUFFER,Wt.__webglFramebuffer),q.bindFramebuffer(S.DRAW_FRAMEBUFFER,Xa.__webglFramebuffer);for(let Ni=0;Ni<Re;Ni++)dt&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Q.get(w).__webglTexture,V,Ie+Ni),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Q.get(k).__webglTexture,pe,xt+Ni)),S.blitFramebuffer(He,ze,ye,Te,Ye,Qe,ye,Te,S.DEPTH_BUFFER_BIT,S.NEAREST);q.bindFramebuffer(S.READ_FRAMEBUFFER,null),q.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(V!==0||w.isRenderTargetTexture||Q.has(w)){const rn=Q.get(w),Bt=Q.get(k);q.bindFramebuffer(S.READ_FRAMEBUFFER,d_),q.bindFramebuffer(S.DRAW_FRAMEBUFFER,h_);for(let Wt=0;Wt<Re;Wt++)dt?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,rn.__webglTexture,V,Ie+Wt):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,rn.__webglTexture,V),nn?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Bt.__webglTexture,pe,xt+Wt):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Bt.__webglTexture,pe),V!==0?S.blitFramebuffer(He,ze,ye,Te,Ye,Qe,ye,Te,S.COLOR_BUFFER_BIT,S.NEAREST):nn?S.copyTexSubImage3D(Ct,pe,Ye,Qe,xt+Wt,He,ze,ye,Te):S.copyTexSubImage2D(Ct,pe,Ye,Qe,He,ze,ye,Te);q.bindFramebuffer(S.READ_FRAMEBUFFER,null),q.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else nn?w.isDataTexture||w.isData3DTexture?S.texSubImage3D(Ct,pe,Ye,Qe,xt,ye,Te,Re,Ke,Ne,gt.data):k.isCompressedArrayTexture?S.compressedTexSubImage3D(Ct,pe,Ye,Qe,xt,ye,Te,Re,Ke,gt.data):S.texSubImage3D(Ct,pe,Ye,Qe,xt,ye,Te,Re,Ke,Ne,gt):w.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,pe,Ye,Qe,ye,Te,Ke,Ne,gt.data):w.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,pe,Ye,Qe,gt.width,gt.height,Ke,gt.data):S.texSubImage2D(S.TEXTURE_2D,pe,Ye,Qe,ye,Te,Ke,Ne,gt);S.pixelStorei(S.UNPACK_ROW_LENGTH,et),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,pn),S.pixelStorei(S.UNPACK_SKIP_PIXELS,fr),S.pixelStorei(S.UNPACK_SKIP_ROWS,Kt),S.pixelStorei(S.UNPACK_SKIP_IMAGES,ls),pe===0&&k.generateMipmaps&&S.generateMipmap(Ct),q.unbindTexture()},this.copyTextureToTexture3D=function(w,k,K=null,Z=null,V=0){return w.isTexture!==!0&&(Pr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Z=arguments[1]||null,w=arguments[2],k=arguments[3],V=arguments[4]||0),Pr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,k,K,Z,V)},this.initRenderTarget=function(w){Q.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),q.unbindTexture()},this.resetState=function(){A=0,C=0,I=null,q.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}const Ga=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},rP={mounted(){this.init(),window.addEventListener("scroll",this.onScroll)},beforeUnmount(){window.removeEventListener("scroll",this.onScroll),this.renderer.dispose()},methods:{init(){this.scene=new pA,this.camera=new cn(75,this.$refs.canvasContainer.offsetWidth/this.$refs.canvasContainer.offsetHeight,.1,1e3),this.camera.position.z=4,this.renderer=new iP({alpha:!0}),this.renderer.setSize(this.$refs.canvasContainer.offsetWidth,this.$refs.canvasContainer.offsetHeight),this.renderer.setClearColor(0,0),this.$refs.canvasContainer.appendChild(this.renderer.domElement);const t=new df,e=new uf({color:10004132,wireframe:!0});this.mesh=new In(t,e),this.scene.add(this.mesh),this.animate()},animate(){requestAnimationFrame(this.animate),this.renderer.render(this.scene,this.camera)},onScroll(){this.mesh.rotation.y=window.scrollY/300,this.mesh.rotation.x=window.scrollY/340,this.mesh.rotation.z=window.scrollY/500}}},sP={ref:"canvasContainer",class:"canvas-container"};function oP(t,e,n,i,r,s){return Gt(),Ys("div",sP,null,512)}const aP=Ga(rP,[["render",oP],["__scopeId","data-v-fe94fa51"]]),lP={},cP={class:"fixed bottom-[-60px] left-[-110px] w-24"};function uP(t,e){const n=aP;return Gt(),Ys(Lt,null,[e[0]||(e[0]=ei("div",{class:"fixed bottom-[24px] left-8 z-10 w-24"},[ei("h4",{class:"text-gray-400 text-2xl text-bold"},"G")],-1)),ei("div",cP,[ut(n)])],64)}const fP=Ga(lP,[["render",uP]]),dP={},hP={class:"bg-[#000000] h-[40vh] lg:h-[60vh] w-full flex justify-center items-center text-white z-40"};function pP(t,e){return Gt(),Ys("footer",hP,e[0]||(e[0]=[ei("h1",{class:"text-8xl lg:text-9xl font-extrabold py-2 bg-gradient-to-t from-[#5f5f5f] to-white bg-clip-text text-transparent"},[Bu(" C1a0"),ei("span",{class:"inline-block animate-blink text-white font-thin"},"_")],-1)]))}const mP=Ga(dP,[["render",pP]]),gP={},_P={class:"flex flex-col min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 to-black"};function vP(t,e){const n=jb,i=fP,r=mP;return Gt(),Ys("div",null,[ei("div",_P,[ei("main",null,[ut(n),ut(i)])]),ut(r)])}const xP=Ga(gP,[["render",vP]]),yP={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;n.stack&&n.stack.split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const i=Number(n.statusCode||500),r=i===404,s=n.statusMessage??(r?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,c=r?Xe(()=>Ve(()=>import("./NT-2wfhg.js"),__vite__mapDeps([25,16,13,26]),import.meta.url)):Xe(()=>Ve(()=>import("./DpwdzuJv.js"),__vite__mapDeps([27,13,28]),import.meta.url));return(f,d)=>(Gt(),Yn(ht(c),T_(hm({statusCode:ht(i),statusMessage:ht(s),description:ht(o),stack:ht(a)})),null,16))}},SP={key:0},jh={__name:"nuxt-root",setup(t){const e=()=>null,n=vt(),i=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",i);An().beforeEach(l)}const r=!1;Br(Ia,Bm()),n.hooks.callHookWith(l=>l.map(u=>u()),"vue:setup");const s=Da(),o=!1;Bp((l,u,c)=>{if(n.hooks.callHook("vue:error",l,u,c).catch(f=>console.error("[nuxt] Error in `vue:error` hook",f)),yy(l)&&(l.fatal||l.unhandled))return n.runWithContext(()=>Ir(l)),!1});const a=!1;return(l,u)=>(Gt(),Yn(am,{onResolve:ht(i)},{default:Rp(()=>[ht(o)?(Gt(),Ys("div",SP)):ht(s)?(Gt(),Yn(ht(yP),{key:1,error:ht(s)},null,8,["error"])):ht(a)?(Gt(),Yn(ht(e),{key:2,context:ht(a)},null,8,["context"])):ht(r)?(Gt(),Yn(wv(ht(r)),{key:3})):(Gt(),Yn(ht(xP),{key:4}))]),_:1},8,["onResolve"]))}};let Yh;{let t;Yh=async function(){var o,a;if(t)return t;const i=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?X0(jh):W0(jh),r=iy({vueApp:i});async function s(l){await r.callHook("app:error",l),r.payload.error=r.payload.error||Ua(l)}i.config.errorHandler=s,r.hook("app:suspense:resolve",()=>{i.config.errorHandler===s&&(i.config.errorHandler=void 0)});try{await oy(r,$b)}catch(l){s(l)}try{await r.hooks.callHook("app:created",i),await r.hooks.callHook("app:beforeMount",i),i.mount(ey),await r.hooks.callHook("app:mounted",i),await qs()}catch(l){s(l)}return i},t=Yh().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{Xe as $,Uu as A,yv as B,xv as C,xc as D,Ks as E,Lt as F,Ve as G,vt as H,tv as I,Rt as J,bP as K,yn as L,UP as M,Us as N,Ev as O,Op as P,EP as Q,Ua as R,sp as S,xx as T,nd as U,Gu as V,Vu as W,Ze as X,oi as Y,TP as Z,Ga as _,ei as a,ir as a0,Mt as a1,ua as a2,MP as a3,wP as a4,Ta as a5,An as a6,Du as a7,Yu as a8,Bd as a9,OP as aa,lx as ab,DP as ac,ur as ad,vy as ae,NP as af,wv as ag,Wb as ah,BP as ai,kP as aj,VM as ak,HP as al,ut as b,Ys as c,Bu as d,LP as e,rs as f,IP as g,CP as h,Yn as i,aP as j,kr as k,Bm as l,qs as m,Aa as n,Gt as o,Zs as p,RP as q,AP as r,cc as s,R_ as t,ht as u,un as v,Rp as w,FP as x,Mi as y,PP as z};
