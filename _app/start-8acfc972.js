var at=Object.defineProperty,ot=Object.defineProperties;var lt=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var X=(n,t,e)=>t in n?at(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,E=(n,t)=>{for(var e in t||(t={}))M.call(t,e)&&X(n,e,t[e]);if(C)for(var e of C(t))Y.call(t,e)&&X(n,e,t[e]);return n},F=(n,t)=>ot(n,lt(t));var H=(n,t)=>{var e={};for(var s in n)M.call(n,s)&&t.indexOf(s)<0&&(e[s]=n[s]);if(n!=null&&C)for(var s of C(n))t.indexOf(s)<0&&Y.call(n,s)&&(e[s]=n[s]);return e};import{S as ut,i as ct,s as ft,e as ht,c as dt,a as _t,d as v,b as V,f as k,t as pt,g as mt,h as gt,j as L,k as wt,l as b,m as D,n as bt,o as q,p as B,q as K,r as j,u as y,v as U,w as P,x as m,y as yt,z as vt,A as Et,B as J,C as W}from"./chunks/vendor-33e37d12.js";function Q(n){let t,e,s;const r=[n[2]||{}];var a=n[0][1];function i(o){let l={$$slots:{default:[kt]},$$scope:{ctx:o}};for(let u=0;u<r.length;u+=1)l=J(l,r[u]);return{props:l}}return a&&(t=new a(i(n))),{c(){t&&L(t.$$.fragment),e=b()},l(o){t&&D(t.$$.fragment,o),e=b()},m(o,l){t&&q(t,o,l),k(o,e,l),s=!0},p(o,l){const u=l&4?B(r,[K(o[2]||{})]):{};if(l&521&&(u.$$scope={dirty:l,ctx:o}),a!==(a=o[0][1])){if(t){j();const c=t;y(c.$$.fragment,1,0,()=>{U(c,1)}),P()}a?(t=new a(i(o)),L(t.$$.fragment),m(t.$$.fragment,1),q(t,e.parentNode,e)):t=null}else a&&t.$set(u)},i(o){s||(t&&m(t.$$.fragment,o),s=!0)},o(o){t&&y(t.$$.fragment,o),s=!1},d(o){o&&v(e),t&&U(t,o)}}}function Z(n){let t,e,s;const r=[n[3]||{}];var a=n[0][2];function i(o){let l={};for(let u=0;u<r.length;u+=1)l=J(l,r[u]);return{props:l}}return a&&(t=new a(i())),{c(){t&&L(t.$$.fragment),e=b()},l(o){t&&D(t.$$.fragment,o),e=b()},m(o,l){t&&q(t,o,l),k(o,e,l),s=!0},p(o,l){const u=l&8?B(r,[K(o[3]||{})]):{};if(a!==(a=o[0][2])){if(t){j();const c=t;y(c.$$.fragment,1,0,()=>{U(c,1)}),P()}a?(t=new a(i()),L(t.$$.fragment),m(t.$$.fragment,1),q(t,e.parentNode,e)):t=null}else a&&t.$set(u)},i(o){s||(t&&m(t.$$.fragment,o),s=!0)},o(o){t&&y(t.$$.fragment,o),s=!1},d(o){o&&v(e),t&&U(t,o)}}}function kt(n){let t,e,s=n[0][2]&&Z(n);return{c(){s&&s.c(),t=b()},l(r){s&&s.l(r),t=b()},m(r,a){s&&s.m(r,a),k(r,t,a),e=!0},p(r,a){r[0][2]?s?(s.p(r,a),a&1&&m(s,1)):(s=Z(r),s.c(),m(s,1),s.m(t.parentNode,t)):s&&(j(),y(s,1,1,()=>{s=null}),P())},i(r){e||(m(s),e=!0)},o(r){y(s),e=!1},d(r){s&&s.d(r),r&&v(t)}}}function $t(n){let t,e,s=n[0][1]&&Q(n);return{c(){s&&s.c(),t=b()},l(r){s&&s.l(r),t=b()},m(r,a){s&&s.m(r,a),k(r,t,a),e=!0},p(r,a){r[0][1]?s?(s.p(r,a),a&1&&m(s,1)):(s=Q(r),s.c(),m(s,1),s.m(t.parentNode,t)):s&&(j(),y(s,1,1,()=>{s=null}),P())},i(r){e||(m(s),e=!0)},o(r){y(s),e=!1},d(r){s&&s.d(r),r&&v(t)}}}function x(n){let t,e=n[5]&&tt(n);return{c(){t=ht("div"),e&&e.c(),this.h()},l(s){t=dt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,class:!0});var r=_t(t);e&&e.l(r),r.forEach(v),this.h()},h(){V(t,"id","svelte-announcer"),V(t,"aria-live","assertive"),V(t,"aria-atomic","true"),V(t,"class","svelte-1pdgbjn")},m(s,r){k(s,t,r),e&&e.m(t,null)},p(s,r){s[5]?e?e.p(s,r):(e=tt(s),e.c(),e.m(t,null)):e&&(e.d(1),e=null)},d(s){s&&v(t),e&&e.d()}}}function tt(n){let t;return{c(){t=pt(n[6])},l(e){t=mt(e,n[6])},m(e,s){k(e,t,s)},p(e,s){s&64&&gt(t,e[6])},d(e){e&&v(t)}}}function Rt(n){let t,e,s,r;const a=[n[1]||{}];var i=n[0][0];function o(u){let c={$$slots:{default:[$t]},$$scope:{ctx:u}};for(let f=0;f<a.length;f+=1)c=J(c,a[f]);return{props:c}}i&&(t=new i(o(n)));let l=n[4]&&x(n);return{c(){t&&L(t.$$.fragment),e=wt(),l&&l.c(),s=b()},l(u){t&&D(t.$$.fragment,u),e=bt(u),l&&l.l(u),s=b()},m(u,c){t&&q(t,u,c),k(u,e,c),l&&l.m(u,c),k(u,s,c),r=!0},p(u,[c]){const f=c&2?B(a,[K(u[1]||{})]):{};if(c&525&&(f.$$scope={dirty:c,ctx:u}),i!==(i=u[0][0])){if(t){j();const h=t;y(h.$$.fragment,1,0,()=>{U(h,1)}),P()}i?(t=new i(o(u)),L(t.$$.fragment),m(t.$$.fragment,1),q(t,e.parentNode,e)):t=null}else i&&t.$set(f);u[4]?l?l.p(u,c):(l=x(u),l.c(),l.m(s.parentNode,s)):l&&(l.d(1),l=null)},i(u){r||(t&&m(t.$$.fragment,u),r=!0)},o(u){t&&y(t.$$.fragment,u),r=!1},d(u){t&&U(t,u),u&&v(e),l&&l.d(u),u&&v(s)}}}function St(n,t,e){let{stores:s}=t,{page:r}=t,{components:a}=t,{props_0:i=null}=t,{props_1:o=null}=t,{props_2:l=null}=t;yt("__svelte__",s),vt(s.page.notify);let u=!1,c=!1,f=null;return Et(()=>{const h=s.page.subscribe(()=>{u&&(e(5,c=!0),e(6,f=document.title||"untitled page"))});return e(4,u=!0),h}),n.$$set=h=>{"stores"in h&&e(7,s=h.stores),"page"in h&&e(8,r=h.page),"components"in h&&e(0,a=h.components),"props_0"in h&&e(1,i=h.props_0),"props_1"in h&&e(2,o=h.props_1),"props_2"in h&&e(3,l=h.props_2)},n.$$.update=()=>{n.$$.dirty&384&&s.page.set(r)},[a,i,o,l,u,c,f,s,r]}class Lt extends ut{constructor(t){super();ct(this,t,St,Rt,ft,{stores:7,page:8,components:0,props_0:1,props_1:2,props_2:3})}}const qt="modulepreload",et={},Ut="/_app/",I=function(t,e){return!e||e.length===0?t():Promise.all(e.map(s=>{if(s=`${Ut}${s}`,s in et)return;et[s]=!0;const r=s.endsWith(".css"),a=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${a}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":qt,r||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),r)return new Promise((o,l)=>{i.addEventListener("load",o),i.addEventListener("error",l)})})).then(()=>t())},w=[()=>I(()=>import("./pages/__layout.svelte-291db62e.js"),["pages/__layout.svelte-291db62e.js","assets/pages/__layout.svelte-a162a33f.css","chunks/vendor-33e37d12.js"]),()=>I(()=>import("./error.svelte-634b1c56.js"),["error.svelte-634b1c56.js","chunks/vendor-33e37d12.js"]),()=>I(()=>import("./pages/index.svelte-a5f5d9b1.js"),["pages/index.svelte-a5f5d9b1.js","assets/pages/index.svelte-97fdf856.css","chunks/vendor-33e37d12.js"]),()=>I(()=>import("./pages/proto.svelte-4845cf96.js"),["pages/proto.svelte-4845cf96.js","chunks/vendor-33e37d12.js"]),()=>I(()=>import("./pages/flex.svelte-7fb82269.js"),["pages/flex.svelte-7fb82269.js","assets/pages/flex.svelte-6d19001e.css","chunks/vendor-33e37d12.js"])],At=[[/^\/$/,[w[0],w[2]],[w[1]]],[/^\/proto\/?$/,[w[0],w[3]],[w[1]]],[/^\/flex\/?$/,[w[0],w[4]],[w[1]]]],Tt=[w[0](),w[1]()];function jt(n){let t=n.baseURI;if(!t){const e=n.getElementsByTagName("base");t=e.length?e[0].href:n.URL}return t}let st="";function Pt(n){st=n.base,n.assets}function z(){return{x:pageXOffset,y:pageYOffset}}function rt(n){for(;n&&n.nodeName.toUpperCase()!=="A";)n=n.parentNode;return n}function it(n){return n instanceof SVGAElement?new URL(n.href.baseVal,document.baseURI):new URL(n.href)}class It{constructor({base:t,routes:e,trailing_slash:s,renderer:r}){this.base=t,this.routes=e,this.trailing_slash=s,this.renderer=r,r.router=this,this.enabled=!0,document.body.setAttribute("tabindex","-1"),history.replaceState(history.state||{},"",location.href)}init_listeners(){"scrollRestoration"in history&&(history.scrollRestoration="manual"),addEventListener("beforeunload",()=>{history.scrollRestoration="auto"}),addEventListener("load",()=>{history.scrollRestoration="manual"});let t;addEventListener("scroll",()=>{clearTimeout(t),t=setTimeout(()=>{const a=F(E({},history.state||{}),{"sveltekit:scroll":z()});history.replaceState(a,document.title,window.location.href)},50)});const e=a=>{const i=rt(a.target);i&&i.href&&i.hasAttribute("sveltekit:prefetch")&&this.prefetch(it(i))};let s;const r=a=>{clearTimeout(s),s=setTimeout(()=>{e(a)},20)};addEventListener("touchstart",e),addEventListener("mousemove",r),addEventListener("click",a=>{if(!this.enabled||a.button||a.which!==1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||a.defaultPrevented)return;const i=rt(a.target);if(!i||!i.href)return;const o=it(i);if(o.toString()===location.href){location.hash||a.preventDefault();return}const l=(i.getAttribute("rel")||"").split(/\s+/);if(i.hasAttribute("download")||l&&l.includes("external")||(i instanceof SVGAElement?i.target.baseVal:i.target)||!this.owns(o))return;const u=i.hasAttribute("sveltekit:noscroll");history.pushState({},"",o.href),this._navigate(o,u?z():null,!1,[],o.hash),a.preventDefault()}),addEventListener("popstate",a=>{if(a.state&&this.enabled){const i=new URL(location.href);this._navigate(i,a.state["sveltekit:scroll"],!1,[])}})}owns(t){return t.origin===location.origin&&t.pathname.startsWith(this.base)}parse(t){if(this.owns(t)){const e=t.pathname.slice(this.base.length)||"/",s=decodeURI(e),r=this.routes.filter(([o])=>o.test(s)),a=new URLSearchParams(t.search);return{id:`${e}?${a}`,routes:r,path:e,decoded_path:s,query:a}}}async goto(t,{noscroll:e=!1,replaceState:s=!1,keepfocus:r=!1,state:a={}}={},i){const o=new URL(t,jt(document));return this.enabled&&this.owns(o)?(history[s?"replaceState":"pushState"](a,"",t),this._navigate(o,e?z():null,r,i,o.hash)):(location.href=o.href,new Promise(()=>{}))}enable(){this.enabled=!0}disable(){this.enabled=!1}async prefetch(t){const e=this.parse(t);if(!e)throw new Error("Attempted to prefetch a URL that does not belong to this app");return this.renderer.load(e)}async _navigate(t,e,s,r,a){const i=this.parse(t);if(!i)throw new Error("Attempted to navigate to a URL that does not belong to this app");if(i.path!=="/"){const o=i.path.endsWith("/");(o&&this.trailing_slash==="never"||!o&&this.trailing_slash==="always"&&!(i.path.split("/").pop()||"").includes("."))&&(i.path=o?i.path.slice(0,-1):i.path+"/",history.replaceState({},"",`${this.base}${i.path}${location.search}`))}this.renderer.notify({path:i.path,query:i.query}),await this.renderer.update(i,r,!1,{hash:a,scroll:e,keepfocus:s})}}function nt(n){return n instanceof Error||n&&n.name&&n.message?n:new Error(JSON.stringify(n))}function Nt(n){let t=5381,e=n.length;if(typeof n=="string")for(;e;)t=t*33^n.charCodeAt(--e);else for(;e;)t=t*33^n[--e];return(t>>>0).toString(36)}function Ot(n){const t=n.status&&n.status>=400&&n.status<=599&&!n.redirect;if(n.error||t){const e=n.status;if(!n.error&&t)return{status:e||500,error:new Error};const s=typeof n.error=="string"?new Error(n.error):n.error;return s instanceof Error?!e||e<400||e>599?(console.warn('"error" returned from load() without a valid status code \u2014 defaulting to 500'),{status:500,error:s}):{status:e,error:s}:{status:500,error:new Error(`"error" property returned from load() must be a string or instance of Error, received type "${typeof s}"`)}}if(n.redirect){if(!n.status||Math.floor(n.status/100)!==3)return{status:500,error:new Error('"redirect" property returned from load() must be accompanied by a 3xx status code')};if(typeof n.redirect!="string")return{status:500,error:new Error('"redirect" property returned from load() must be a string')}}if(n.context)throw new Error('You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.');return n}function Ct(n){const t=W(n);let e=!0;function s(){e=!0,t.update(i=>i)}function r(i){e=!1,t.set(i)}function a(i){let o;return t.subscribe(l=>{(o===void 0||e&&l!==o)&&i(o=l)})}return{notify:s,set:r,subscribe:a}}function Vt(n,t){const e=typeof n=="string"?n:n.url;let s=`script[data-type="svelte-data"][data-url=${JSON.stringify(e)}]`;t&&typeof t.body=="string"&&(s+=`[data-body="${Nt(t.body)}"]`);const r=document.querySelector(s);if(r&&r.textContent){const a=JSON.parse(r.textContent),{body:i}=a,o=H(a,["body"]);return Promise.resolve(new Response(i,o))}return fetch(n,t)}class Dt{constructor({Root:t,fallback:e,target:s,session:r,host:a}){this.Root=t,this.fallback=e,this.host=a,this.router,this.target=s,this.started=!1,this.session_id=1,this.invalid=new Set,this.invalidating=null,this.current={page:null,session_id:0,branch:[]},this.cache=new Map,this.loading={id:null,promise:null},this.stores={page:Ct({}),navigating:W(null),session:W(r)},this.$session=null,this.root=null;let i=!1;this.stores.session.subscribe(async o=>{if(this.$session=o,!i||!this.router)return;this.session_id+=1;const l=this.router.parse(new URL(location.href));l&&this.update(l,[],!0)}),i=!0}async start({status:t,error:e,nodes:s,page:r}){const a=[];let i={},o,l;try{for(let u=0;u<s.length;u+=1){const c=u===s.length-1,f=await this._load_node({module:await s[u],page:r,stuff:i,status:c?t:void 0,error:c?e:void 0});if(a.push(f),f&&f.loaded)if(f.loaded.error){if(e)throw f.loaded.error;l={status:f.loaded.status,error:f.loaded.error,path:r.path,query:r.query}}else f.loaded.stuff&&(i=E(E({},i),f.loaded.stuff))}o=l?await this._load_error(l):await this._get_navigation_result_from_branch({page:r,branch:a})}catch(u){if(e)throw u;o=await this._load_error({status:500,error:nt(u),path:r.path,query:r.query})}if(o.redirect){location.href=new URL(o.redirect,location.href).href;return}this._init(o)}notify({path:t,query:e}){dispatchEvent(new CustomEvent("sveltekit:navigation-start")),this.started&&this.stores.navigating.set({from:{path:this.current.page.path,query:this.current.page.query},to:{path:t,query:e}})}async update(t,e,s,r){const a=this.token={};let i=await this._get_navigation_result(t,s);if(a!==this.token)return;if(this.invalid.clear(),i.redirect)if(e.length>10||e.includes(t.path))i=await this._load_error({status:500,error:new Error("Redirect loop"),path:t.path,query:t.query});else{this.router?this.router.goto(i.redirect,{replaceState:!0},[...e,t.path]):location.href=new URL(i.redirect,location.href).href;return}if(i.reload?location.reload():this.started?(this.current=i.state,this.root.$set(i.props),this.stores.navigating.set(null)):this._init(i),r){const{hash:l,scroll:u,keepfocus:c}=r;c||document.body.focus();const f=l&&document.getElementById(l.slice(1));u?scrollTo(u.x,u.y):f?f.scrollIntoView():scrollTo(0,0)}if(await 0,dispatchEvent(new CustomEvent("sveltekit:navigation-end")),this.loading.promise=null,this.loading.id=null,!this.router)return;const o=i.state.branch[i.state.branch.length-1];o&&o.module.router===!1?this.router.disable():this.router.enable()}load(t){return this.loading.promise=this._get_navigation_result(t,!1),this.loading.id=t.id,this.loading.promise}invalidate(t){return this.invalid.add(t),this.invalidating||(this.invalidating=Promise.resolve().then(async()=>{const e=this.router&&this.router.parse(new URL(location.href));e&&await this.update(e,[],!0),this.invalidating=null})),this.invalidating}_init(t){this.current=t.state;const e=document.querySelector("style[data-svelte]");e&&e.remove(),this.root=new this.Root({target:this.target,props:E({stores:this.stores},t.props),hydrate:!0}),this.started=!0}async _get_navigation_result(t,e){if(this.loading.id===t.id&&this.loading.promise)return this.loading.promise;for(let s=0;s<t.routes.length;s+=1){const r=t.routes[s];if(r.length===1)return{reload:!0,props:{},state:this.current};let a=s+1;for(;a<t.routes.length;){const o=t.routes[a];if(o[0].toString()===r[0].toString())o.length!==1&&o[1].forEach(l=>l()),a+=1;else break}const i=await this._load({route:r,info:t},e);if(i)return i}return await this._load_error({status:404,error:new Error(`Not found: ${t.path}`),path:t.path,query:t.query})}async _get_navigation_result_from_branch({page:t,branch:e}){const s=e.filter(Boolean),r=s.find(l=>l.loaded&&l.loaded.redirect),a={redirect:r&&r.loaded?r.loaded.redirect:void 0,state:{page:t,branch:e,session_id:this.session_id},props:{components:s.map(l=>l.module.default)}};for(let l=0;l<s.length;l+=1){const u=s[l].loaded;a.props[`props_${l}`]=u?await u.props:null}(!this.current.page||t.path!==this.current.page.path||t.query.toString()!==this.current.page.query.toString())&&(a.props.page=t);const i=s[s.length-1],o=i.loaded&&i.loaded.maxage;if(o){const l=`${t.path}?${t.query}`;let u=!1;const c=()=>{this.cache.get(l)===a&&this.cache.delete(l),h(),clearTimeout(f)},f=setTimeout(c,o*1e3),h=this.stores.session.subscribe(()=>{u&&c()});u=!0,this.cache.set(l,a)}return a}async _load_node({status:t,error:e,module:s,page:r,stuff:a}){const i={module:s,uses:{params:new Set,path:!1,query:!1,session:!1,stuff:!1,dependencies:[]},loaded:null,stuff:a},o={};for(const u in r.params)Object.defineProperty(o,u,{get(){return i.uses.params.add(u),r.params[u]},enumerable:!0});const l=this.$session;if(s.load){const{started:u}=this,c={page:{host:r.host,params:o,get path(){return i.uses.path=!0,r.path},get query(){return i.uses.query=!0,r.query}},get session(){return i.uses.session=!0,l},get stuff(){return i.uses.stuff=!0,E({},a)},fetch(h,R){const $=typeof h=="string"?h:h.url,{href:A}=new URL($,new URL(r.path,document.baseURI));return i.uses.dependencies.push(A),u?fetch(h,R):Vt(h,R)}};e&&(c.status=t,c.error=e);const f=await s.load.call(null,c);if(!f)return;i.loaded=Ot(f),i.loaded.stuff&&(i.stuff=i.loaded.stuff)}return i}async _load({route:t,info:{path:e,decoded_path:s,query:r}},a){const i=`${s}?${r}`;if(!a){const d=this.cache.get(i);if(d)return d}const[o,l,u,c]=t,f=c?c(o.exec(s)):{},h=this.current.page&&{path:e!==this.current.page.path,params:Object.keys(f).filter(d=>this.current.page.params[d]!==f[d]),query:r.toString()!==this.current.page.query.toString(),session:this.session_id!==this.current.session_id},R={host:this.host,path:e,query:r,params:f};let $=[],A={},G=!1,N=200,T;l.forEach(d=>d());t:for(let d=0;d<l.length;d+=1){let _;try{if(!l[d])continue;const g=await l[d](),p=this.current.branch[d];if(!p||g!==p.module||h.path&&p.uses.path||h.params.some(S=>p.uses.params.has(S))||h.query&&p.uses.query||h.session&&p.uses.session||p.uses.dependencies.some(S=>this.invalid.has(S))||G&&p.uses.stuff){_=await this._load_node({module:g,page:R,stuff:A});const S=d===l.length-1;if(_&&_.loaded){if(_.loaded.error&&(N=_.loaded.status,T=_.loaded.error),_.loaded.redirect)return{redirect:_.loaded.redirect,props:{},state:this.current};_.loaded.stuff&&(G=!0)}else if(S&&g.load)return}else _=p}catch(g){N=500,T=nt(g)}if(T){for(;d--;)if(u[d]){let g,p,O=d;for(;!(p=$[O]);)O-=1;try{if(g=await this._load_node({status:N,error:T,module:await u[d](),page:R,stuff:p.stuff}),g&&g.loaded&&g.loaded.error)continue;$=$.slice(0,O+1).concat(g);break t}catch(S){continue}}return await this._load_error({status:N,error:T,path:e,query:r})}else _&&_.loaded&&_.loaded.stuff&&(A=E(E({},A),_.loaded.stuff)),$.push(_)}return await this._get_navigation_result_from_branch({page:R,branch:$})}async _load_error({status:t,error:e,path:s,query:r}){const a={host:this.host,path:s,query:r,params:{}},i=await this._load_node({module:await this.fallback[0],page:a,stuff:{}}),o=[i,await this._load_node({status:t,error:e,module:await this.fallback[1],page:a,stuff:i&&i.loaded&&i.loaded.stuff||{}})];return await this._get_navigation_result_from_branch({page:a,branch:o})}}async function Jt({paths:n,target:t,session:e,host:s,route:r,spa:a,trailing_slash:i,hydrate:o}){const l=new Dt({Root:Lt,fallback:Tt,target:t,session:e,host:s}),u=r?new It({base:n.base,routes:At,trailing_slash:i,renderer:l}):null;Pt(n),o&&await l.start(o),u&&(a&&u.goto(location.href,{replaceState:!0},[]),u.init_listeners()),dispatchEvent(new CustomEvent("sveltekit:start"))}export{Jt as start};
