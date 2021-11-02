import{S as z,i as Q,s as X,e as b,k as S,t as I,c as v,a as y,d as h,n as O,g as D,b as $,L as Y,f as A,G as d,h as F,K as x,M as ie,N as ee,O as ne,j as L,m as G,o as J,P as se,x as V,u as W,v as q,A as re}from"../chunks/vendor-3c118b73.js";import{S as oe,N as le}from"../chunks/Sidebar-cd3a2008.js";/* empty css                                                    *//* empty css                                                      */function te(l,e,n){const s=l.slice();return s[1]=e[n],s[3]=n,s}function ae(l){let e,n,s,a,o,r,t=l[1].headline+"",p,c,u,E=l[1].synopsis+"",C,i,g,w=l[1].date+"",T,P,N,j;return{c(){e=b("div"),n=b("a"),s=b("div"),a=S(),o=b("article"),r=b("h1"),p=I(t),c=S(),u=b("p"),C=I(E),i=S(),g=b("span"),T=I(w),N=S(),this.h()},l(f){e=v(f,"DIV",{class:!0});var m=y(e);n=v(m,"A",{href:!0,class:!0});var M=y(n);s=v(M,"DIV",{class:!0,style:!0}),y(s).forEach(h),a=O(M),o=v(M,"ARTICLE",{});var k=y(o);r=v(k,"H1",{});var K=y(r);p=D(K,t),K.forEach(h),c=O(k),u=v(k,"P",{});var U=y(u);C=D(U,E),U.forEach(h),i=O(k),g=v(k,"SPAN",{});var Z=y(g);T=D(Z,w),Z.forEach(h),k.forEach(h),M.forEach(h),N=O(m),m.forEach(h),this.h()},h(){$(s,"class","thumb"),Y(s,"background-image","url("+l[1].image+")"),$(n,"href",P=l[1].url),$(n,"class","card"),$(e,"class",j=l[1].colspan)},m(f,m){A(f,e,m),d(e,n),d(n,s),d(n,a),d(n,o),d(o,r),d(r,p),d(o,c),d(o,u),d(u,C),d(o,i),d(o,g),d(g,T),d(e,N)},p(f,m){m&1&&Y(s,"background-image","url("+f[1].image+")"),m&1&&t!==(t=f[1].headline+"")&&F(p,t),m&1&&E!==(E=f[1].synopsis+"")&&F(C,E),m&1&&w!==(w=f[1].date+"")&&F(T,w),m&1&&P!==(P=f[1].url)&&$(n,"href",P),m&1&&j!==(j=f[1].colspan)&&$(e,"class",j)},d(f){f&&h(e)}}}function pe(l){let e,n,s,a,o=l[0],r=[];for(let t=0;t<o.length;t+=1)r[t]=ae(te(l,o,t));return{c(){e=b("main"),n=b("div"),s=S(),a=b("div");for(let t=0;t<r.length;t+=1)r[t].c();this.h()},l(t){e=v(t,"MAIN",{});var p=y(e);n=v(p,"DIV",{class:!0}),y(n).forEach(h),s=O(p),a=v(p,"DIV",{class:!0});var c=y(a);for(let u=0;u<r.length;u+=1)r[u].l(c);c.forEach(h),p.forEach(h),this.h()},h(){$(n,"class","support-grid"),$(a,"class","band")},m(t,p){A(t,e,p),d(e,n),d(e,s),d(e,a);for(let c=0;c<r.length;c+=1)r[c].m(a,null)},p(t,[p]){if(p&1){o=t[0];let c;for(c=0;c<o.length;c+=1){const u=te(t,o,c);r[c]?r[c].p(u,p):(r[c]=ae(u),r[c].c(),r[c].m(a,null))}for(;c<r.length;c+=1)r[c].d(1);r.length=o.length}},i:x,o:x,d(t){t&&h(e),ie(r,t)}}}function ce(l,e,n){let{articles:s}=e;return l.$$set=a=>{"articles"in a&&n(0,s=a.articles)},[s]}class de extends z{constructor(e){super();Q(this,e,ce,pe,X,{articles:0})}}class R{constructor(e){this._id=e,this._events={}}static create(e){return new R(e)}logger(e){console.log(`${this._id} ${e}`)}publish(e,n){if(!!this._events.hasOwnProperty(e))for(let s of this._events[e])setTimeout(()=>s(e,n),0)}subscribe(e,n){return this._events.hasOwnProperty(e)||(this._events[e]=[]),this._events[e].push(n)}subscribers(){return this._events}unsubscribe(e){this._events.hasOwnProperty(e)&&delete this._events[e]}}class H{constructor(e,n){this._id=e,this._eventEmitter=n,this._state={active:!1,task:{}}}static create(e,n){return new H(e,n)}logger(e,n,s={}){n.mode!==void 0&&n.mode==="debug"&&console.log(`${e}`,JSON.stringify(n,null,2),s)}stubHandler(e,n,s){let a=function(o,r,t){console.log(`handler ${o.handler} `,JSON.stringify({id:o.id,description:o.description,dependsOn:o.onEvent.join(",")})),t(o.publishEvent,r)};setTimeout(()=>a(e,n,s),Math.floor(Math.random()*1e3))}route(e){let n=this,s=Object.assign({},e,{lifecycle:this._name}),a=typeof this[s.handler]=="function"?s.handler:"stubHandler";return function(o,r){n[a](s,r,function(t,p){n.publish(t,p)})}}publish(e,n={}){this._eventEmitter.publish(e,n)}subscribe(e,n){this._eventEmitter.subscribe(e,n)}subscribers(){return this._eventEmitter.subscribers()}trigger(e,n){this.publish(e,n)}}class B{constructor(e){this._id=e}static createTask(e){return typeof e.id!="string"?{task:{},err:"task.id must be type string"}:typeof e.description!="string"?{task:{},err:"task.description must be type string"}:Array.isArray(e.dependsOn)?typeof e.handler!="string"?{task:{},err:"task.handler must be type string"}:typeof e.params!="object"?{task:{},err:"task.params must be type object"}:typeof e.eventType!="string"?{task:{},err:"task.eventType must be type string"}:{task:{id:e.id,description:e.description,dependsOn:e.dependsOn,handler:e.handler,params:e.params,eventType:e.eventType,onEvent:_.map(e.dependsOn,n=>n+":done"),publishEvent:e.id+":done"},err:null}:{task:{},err:`${e.id} task.dependsOn must be type array`}}static parse(e,n){let s=[],a=[];return _.forEach(n,o=>{let{task:r,err:t}=B.createTask(o);t?a.push(t):s.push(r)}),{tasks:s,err:a}}}class ue{constructor(e){this._id=e,this._lifecycleHandler=H.create(e,R.create(e)),console.log("Glossary started with id: "+e)}anchor(){return this._id}logger(e){console.log(this._id+" "+e)}}class ge{constructor(e){this._id=e,this._lifecycleHandler=H.create(e,R.create(e)),console.log("Pipeline started with id: "+e)}configure(e){let{tasks:n,err:s}=B.parse(this._id,e);_.forEach(n,a=>{console.log("configure: "+JSON.stringify(a,void 0,2)),console.log("event: "+a.id," onEvent: "+a.onEvent),_.forEach(a.onEvent,o=>{console.log("event: "+o),this._lifecycleHandler.subscribe(o,this._lifecycleHandler.route.apply(this._lifecycleHandler,[a]))})}),console.log("task subscribers: "+JSON.stringify(this._lifecycleHandler.subscribers(),void 0,2))}}function he(l){let e,n,s,a,o,r,t,p;function c(i){l[2](i)}let u={articles:l[1]};l[0]!==void 0&&(u.open=l[0]),e=new oe({props:u}),ee.push(()=>ne(e,"open",c));function E(i){l[3](i)}let C={};return l[0]!==void 0&&(C.sidebar=l[0]),a=new le({props:C}),ee.push(()=>ne(a,"sidebar",E)),t=new de({props:{articles:l[1]}}),{c(){L(e.$$.fragment),s=S(),L(a.$$.fragment),r=S(),L(t.$$.fragment)},l(i){G(e.$$.fragment,i),s=O(i),G(a.$$.fragment,i),r=O(i),G(t.$$.fragment,i)},m(i,g){J(e,i,g),A(i,s,g),J(a,i,g),A(i,r,g),J(t,i,g),p=!0},p(i,[g]){const w={};!n&&g&1&&(n=!0,w.open=i[0],se(()=>n=!1)),e.$set(w);const T={};!o&&g&1&&(o=!0,T.sidebar=i[0],se(()=>o=!1)),a.$set(T)},i(i){p||(V(e.$$.fragment,i),V(a.$$.fragment,i),V(t.$$.fragment,i),p=!0)},o(i){W(e.$$.fragment,i),W(a.$$.fragment,i),W(t.$$.fragment,i),p=!1},d(i){q(e,i),i&&h(s),q(a,i),i&&h(r),q(t,i)}}}function fe(l,e,n){re(async()=>{new ue("glossary"),new ge("pipeline").configure(a)});let s=!1,a=[{id:"flow:start",description:"Start flow button was clicked by user",eventType:"app",dependsOn:[],handler:"flowStart",params:{}},{id:"flow:configure",description:"Configure Flow",eventType:"app",dependsOn:["flow:start"],handler:"flowConfigure",params:{variant:"release"}},{id:"flow:publish",description:"Publish Flow Configuration",eventType:"app",dependsOn:["flow:configure"],handler:"flowPublish",params:{variant:"release"}},{id:"flow:create",description:"Create Flow",eventType:"app",dependsOn:["flow:configure"],handler:"flowCreate",params:{variant:"release"}},{id:"flow:run",description:"Run flow",eventType:"app",dependsOn:["flow:create"],handler:"flowRun",params:{variant:"release"}},{id:"flow:assembly",description:"Assemble Flow Artifacts",eventType:"app",dependsOn:["flow:run"],handler:"flowAssembly",params:{variant:"release"}},{id:"flow:report",description:"Generate Flow Report",eventType:"app",dependsOn:["flow:run"],handler:"flowReport",params:{variant:"release"}},{id:"flow:upload",description:"Publish flow artifacts",eventType:"app",dependsOn:["flow:report"],handler:"flowUpload",params:{variant:"release"}}],o=[{image:"actionable-core-values.png",url:"articles/core-values",headline:"In the Zone Performance",synopsis:"When we observe a person or team perform at their optimum...",date:"October 29, 2021",colspan:"col-span-2"},{image:"cadence-performance.png",url:"/",headline:"Managing The Cadence",synopsis:"The purpose of cadence and expected results...",date:"Coming soon...",colspan:""},{image:"top-of-funnel-thinking.png",url:"/",headline:"Top of Funnel Thinking",synopsis:"Something about day to day problem solving...",date:"Coming soon...",colspan:""},{image:"problem-solving-strategies.png",url:"/",headline:"Top Line or Bottom Line Results",synopsis:"Aligning problem solving strategies with desired results",date:"Coming soon...",colspan:""},{image:"plc-taxonomy.png",url:"/",headline:"Taxonomies for Product Life Cycles",synopsis:"Something about simplyfing structure...",date:"Coming soon...",colspan:""},{image:"pivot-over-lunch.png",url:"/",headline:"Responsiveness",synopsis:"The business can pivot over lunch. Is product development prepared?",date:"Coming soon...",colspan:""},{image:"execution-strategies.png",url:"/",headline:"Managing Strategies",synopsis:"Something about execution strategies...",date:"Coming soon...",colspan:""},{image:"gatekeeper.png",url:"/",headline:"Managing Change",synopsis:"Something about managing risk...",date:"Coming soon...",colspan:""},{image:"plc-asset-structure.png",url:"/",headline:"Managing Assets",synopsis:"Something about asset structure...",date:"Coming soon...",colspan:""},{image:"backlog-sprint.png",url:"/",headline:"Managing Programs",synopsis:"Something about managing the program...",date:"Coming soon...",colspan:""},{image:"qbal2007_m1.jpg",url:"/",headline:"Managing Releases",synopsis:"Something about managing the release...",date:"Coming soon...",colspan:""},{image:"manage-project.png",url:"/",headline:"Managing Projects",synopsis:"Something about managing the project...",date:"Coming soon...",colspan:""},{image:"workspace-flows.png",url:"/",headline:"The Workspace is the Center of the Developer's World",synopsis:"Something about context switching and productivity...",date:"Coming soon...",colspan:""},{image:"every-build-is-a-release-candidate.png",url:"/",headline:"Every Build is a Release Candidate",synopsis:"Something about always be releasing...",date:"Coming soon...",colspan:""},{image:"qbal-2002.jpg",url:"/",headline:"Managing The Whole Enchilada",synopsis:"Something about managing end to end...",date:"Coming soon...",colspan:""}];function r(p){s=p,n(0,s)}function t(p){s=p,n(0,s)}return[s,o,r,t]}class ye extends z{constructor(e){super();Q(this,e,fe,he,X,{})}}export{ye as default};
