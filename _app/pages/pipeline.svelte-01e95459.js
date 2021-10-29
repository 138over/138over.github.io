import{S as E,i as D,s as F,e as O,k as v,Q as z,c as k,a as b,d as f,n as y,R as J,b as S,f as w,G as $,K as R,A as Q,N as G,O as M,j,E as q,m as P,o as A,P as U,x as C,u as I,v as T}from"../chunks/vendor-3c118b73.js";import{S as V,N as B}from"../chunks/Sidebar-cd3a2008.js";/* empty css                                                      */class K{constructor(n){this._anchor=n}load(n){let a=function(t){return t.dependsOn},i=d3.dagStratify().parentIds(a)(n),s=20,r=d3.sugiyama().decross(d3.decrossOpt()).nodeSize(t=>[(t?3.6:.25)*s,3*s]),{width:l,height:p}=r(i),d=d3.select("#"+this._anchor);d.attr("viewBox",[0,0,l,p].join(" "));let u=d.append("defs"),x=i.size(),g=d3.interpolateRainbow,m=new Map;for(let[t,c]of i.idescendants().entries())m.set(c.data.id,g(t/x));let _=d3.line().curve(d3.curveCatmullRom).x(t=>t.x).y(t=>t.y);d.append("g").selectAll("path").data(i.links()).enter().append("path").attr("d",({points:t})=>_(t)).attr("fill","none").attr("stroke-width",3).attr("stroke",({source:t,target:c})=>{let h=encodeURIComponent(`${t.data.id}--${c.data.id}`),N=u.append("linearGradient").attr("id",h).attr("gradientUnits","userSpaceOnUse").attr("x1",t.x).attr("x2",c.x).attr("y1",t.y).attr("y2",c.y);return N.append("stop").attr("offset","0%").attr("stop-color",m.get(t.data.id)),N.append("stop").attr("offset","100%").attr("stop-color",m.get(c.data.id)),`url(#${h})`});let e=d.append("g").selectAll("g").data(i.descendants()).enter().append("g").attr("transform",({x:t,y:c})=>`translate(${t}, ${c})`);e.append("circle").attr("r",s).attr("fill",t=>m.get(t.data.id)),e.append("text").text(t=>t.data.id).style("font-size","4px").attr("font-weight","bold").attr("font-family","sans-serif").attr("text-anchor","middle").attr("alignment-baseline","middle").attr("fill","white").on("click",function(t,c){console.log("click clack "+JSON.stringify(c.data.id)+" "+JSON.stringify(c))})}}function H(o){let n,a,i,s,r;return{c(){n=O("main"),a=O("div"),i=O("div"),s=v(),r=z("svg"),this.h()},l(l){n=k(l,"MAIN",{});var p=b(n);a=k(p,"DIV",{});var d=b(a);i=k(d,"DIV",{id:!0}),b(i).forEach(f),s=y(d),r=J(d,"svg",{id:!0,class:!0}),b(r).forEach(f),d.forEach(f),p.forEach(f),this.h()},h(){S(i,"id","glossary"),S(r,"id","dag"),S(r,"class","w-1/4 h-1/4")},m(l,p){w(l,n,p),$(n,a),$(a,i),$(a,s),$(a,r)},p:R,i:R,o:R,d(l){l&&f(n)}}}function L(o,n,a){let{data:i}=n,{anchor:s}=n;const r={text:"Glossary",state:{opened:!0,selected:!0},children:[{text:"Ideation"},{text:"Roadmap"},{text:"Program"},{text:"Release"},{text:"Project"}]};return Q(async()=>{new K(s).load(i);let p=jQuery.jstree.defaults.contextmenu.items();console.log("menu items:"+JSON.stringify(p)),jQuery("#glossary").jstree({core:{data:[r],check_callback:!0},plugins:["contextmenu","dnd","search","state","types","wholerow"]})}),o.$$set=l=>{"data"in l&&a(0,i=l.data),"anchor"in l&&a(1,s=l.anchor)},[i,s]}class W extends E{constructor(n){super();D(this,n,L,H,F,{data:0,anchor:1})}}function X(o){let n,a,i,s,r,l,p,d,u;function x(e){o[3](e)}let g={articles:o[1]};o[0]!==void 0&&(g.open=o[0]),a=new V({props:g}),G.push(()=>M(a,"open",x));function m(e){o[4](e)}let _={};return o[0]!==void 0&&(_.sidebar=o[0]),r=new B({props:_}),G.push(()=>M(r,"sidebar",m)),d=new W({props:{anchor:Y,data:o[2]}}),{c(){n=v(),j(a.$$.fragment),s=v(),j(r.$$.fragment),p=v(),j(d.$$.fragment),this.h()},l(e){q('[data-svelte="svelte-1mw2fsn"]',document.head).forEach(f),n=y(e),P(a.$$.fragment,e),s=y(e),P(r.$$.fragment,e),p=y(e),P(d.$$.fragment,e),this.h()},h(){document.title="Pipeline"},m(e,t){w(e,n,t),A(a,e,t),w(e,s,t),A(r,e,t),w(e,p,t),A(d,e,t),u=!0},p(e,[t]){const c={};!i&&t&1&&(i=!0,c.open=e[0],U(()=>i=!1)),a.$set(c);const h={};!l&&t&1&&(l=!0,h.sidebar=e[0],U(()=>l=!1)),r.$set(h)},i(e){u||(C(a.$$.fragment,e),C(r.$$.fragment,e),C(d.$$.fragment,e),u=!0)},o(e){I(a.$$.fragment,e),I(r.$$.fragment,e),I(d.$$.fragment,e),u=!1},d(e){e&&f(n),T(a,e),e&&f(s),T(r,e),e&&f(p),T(d,e)}}}let Y="dag";function Z(o,n,a){let i=[],s=!1;const r=[{id:"start",description:"Start flow button was clicked by user",eventType:"app",dependsOn:[],handler:"flowStart",params:{}},{id:"configure",description:"Configure Flow",eventType:"app",dependsOn:["start"],handler:"flowConfigure",params:{variant:"release"}},{id:"publish",description:"Publish Flow Configuration",eventType:"app",dependsOn:["configure"],handler:"flowPublish",params:{variant:"release"}},{id:"create",description:"Create Flow",eventType:"app",dependsOn:["configure","publish"],handler:"flowCreate",params:{variant:"release"}},{id:"run",description:"Run flow",eventType:"app",dependsOn:["create"],handler:"flowRun",params:{variant:"release"}},{id:"assembly",description:"Assemble Flow Artifacts",eventType:"app",dependsOn:["run"],handler:"flowAssembly",params:{variant:"release"}},{id:"report",description:"Generate Flow Report",eventType:"app",dependsOn:["run"],handler:"flowReport",params:{variant:"release"}},{id:"upload",description:"Publish flow artifacts",eventType:"app",dependsOn:["assembly","report"],handler:"flowUpload",params:{variant:"release"}}];function l(d){s=d,a(0,s)}function p(d){s=d,a(0,s)}return[s,i,r,l,p]}class ne extends E{constructor(n){super();D(this,n,Z,X,F,{})}}export{ne as default};
