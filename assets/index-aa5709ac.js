import{I as Jn,J as Fe,K as G,g as an,C as Te,L as We,o as Zn,M as Me,N as Be,O as De,z as cn,P as Qn,Q as $e,R as ne,T as ee,U as Oe,V as Se,W as Ye,_ as E,t as He,X as Ue,a as fn,i as L,Y as An,Z as ln,$ as D,a0 as Ve,a1 as En,A as hn,a2 as V,a3 as te,a4 as qe,c as ze,a5 as Ke,d as Xe,l as je,a6 as oe,a7 as Pn,h as Je,G as Ze,a8 as Qe,k as nt,a9 as un}from"./index-d260b106.js";import{m as _,f,G as y,h as m,b as $,a as et,v as P,r as N,n as tt}from"./index-ea622535.js";function O(n){var e=n==null?0:n.length;return e?n[e-1]:void 0}function ot(n){return Jn(Fe(n,void 0,G),n+"")}function q(n,e){var t={};return e=an(e),Te(n,function(o,r,i){We(t,r,e(o,r,i))}),t}var re=Object.prototype,rt=re.hasOwnProperty,it=Zn(function(n,e){n=Object(n);var t=-1,o=e.length,r=o>2?e[2]:void 0;for(r&&Me(e[0],e[1],r)&&(o=1);++t<o;)for(var i=e[t],s=Be(i),c=-1,u=s.length;++c<u;){var d=s[c],a=n[d];(a===void 0||De(a,re[d])&&!rt.call(n,d))&&(n[d]=i[d])}return n});const st=it;function ct(n,e,t,o){if(!cn(n))return n;e=Qn(e,n);for(var r=-1,i=e.length,s=i-1,c=n;c!=null&&++r<i;){var u=$e(e[r]),d=t;if(u==="__proto__"||u==="constructor"||u==="prototype")return n;if(r!=s){var a=c[u];d=o?o(a,u,c):void 0,d===void 0&&(d=cn(a)?a:ne(e[r+1])?[]:{})}ee(c,u,d),c=c[u]}return n}function ut(n,e,t){for(var o=-1,r=e.length,i={};++o<r;){var s=e[o],c=Oe(n,s);t(c,s)&&ct(i,Qn(s,n),c)}return i}function dt(n,e){return ut(n,e,function(t,o){return Se(n,o)})}var at=ot(function(n,e){return n==null?{}:dt(n,e)});const S=at;var ft=0;function pn(n){var e=++ft;return Ye(n)+e}function z(){const n={};n._next=n._prev=n,this._sentinel=n}z.prototype.dequeue=function(){const n=this._sentinel,e=n._prev;if(e!==n)return ie(e),e};z.prototype.enqueue=function(n){const e=this._sentinel;n._prev&&n._next&&ie(n),n._next=e._next,e._next._prev=n,e._next=n,n._prev=e};z.prototype.toString=function(){const n=[],e=this._sentinel;let t=e._prev;for(;t!==e;)n.push(JSON.stringify(t,lt)),t=t._prev;return"["+n.join(", ")+"]"};function ie(n){n._prev._next=n._next,n._next._prev=n._prev,delete n._next,delete n._prev}function lt(n,e){if(n!=="_next"&&n!=="_prev")return e}const ht=He(1);function pt(n,e){if(n.nodeCount()<=1)return[];const t=mt(n,e||ht),o=wt(t.graph,t.buckets,t.zeroIdx);return G(_(o,function(r){return n.outEdges(r.v,r.w)}))}function wt(n,e,t){let o=[];const r=e[e.length-1],i=e[0];let s;for(;n.nodeCount();){for(;s=i.dequeue();)J(n,e,t,s);for(;s=r.dequeue();)J(n,e,t,s);if(n.nodeCount()){for(let c=e.length-2;c>0;--c)if(s=e[c].dequeue(),s){o=o.concat(J(n,e,t,s,!0));break}}}return o}function J(n,e,t,o,r){const i=r?[]:void 0;return f(n.inEdges(o.v),function(s){const c=n.edge(s),u=n.node(s.v);r&&i.push({v:s.v,w:s.w}),u.out-=c,dn(e,t,u)}),f(n.outEdges(o.v),function(s){const c=n.edge(s),u=s.w,d=n.node(u);d.in-=c,dn(e,t,d)}),n.removeNode(o.v),i}function mt(n,e){const t=new y;let o=0,r=0;f(n.nodes(),function(c){t.setNode(c,{v:c,in:0,out:0})}),f(n.edges(),function(c){const u=t.edge(c.v,c.w)||0,d=e(c),a=u+d;t.setEdge(c.v,c.w,a),r=Math.max(r,t.node(c.v).out+=d),o=Math.max(o,t.node(c.w).in+=d)});const i=E(r+o+3).map(function(){return new z}),s=o+1;return f(t.nodes(),function(c){dn(i,s,t.node(c))}),{graph:t,buckets:i,zeroIdx:s}}function dn(n,e,t){t.out?t.in?n[t.out-t.in+e].enqueue(t):n[n.length-1].enqueue(t):n[0].enqueue(t)}function _t(n){const e=n.graph().acyclicer==="greedy"?pt(n,t(n)):gt(n);f(e,function(o){const r=n.edge(o);n.removeEdge(o),r.forwardName=o.name,r.reversed=!0,n.setEdge(o.w,o.v,r,pn("rev"))});function t(o){return function(r){return o.edge(r).weight}}}function gt(n){const e=[],t={},o={};function r(i){m(o,i)||(o[i]=!0,t[i]=!0,f(n.outEdges(i),function(s){m(t,s.w)?e.push(s):r(s.w)}),delete t[i])}return f(n.nodes(),r),e}function bt(n){f(n.edges(),function(e){const t=n.edge(e);if(t.reversed){n.removeEdge(e);const o=t.forwardName;delete t.reversed,delete t.forwardName,n.setEdge(e.w,e.v,t,o)}})}var Nn={run:_t,undo:bt};function K(n,e,t){for(var o=-1,r=n.length;++o<r;){var i=n[o],s=e(i);if(s!=null&&(c===void 0?s===s&&!Ue(s):t(s,c)))var c=s,u=i}return u}function se(n,e){return n>e}function I(n){return n&&n.length?K(n,fn,se):void 0}function ce(n,e){return n<e}function T(n){return n&&n.length?K(n,fn,ce):void 0}function vt(n,e,t){for(var o=-1,r=n.length,i=e.length,s={};++o<r;){var c=o<i?e[o]:void 0;t(s,n[o],c)}return s}function wn(n,e){return vt(n||[],e||[],ee)}function ue(n,e,t,o){let r;do r=pn(o);while(n.hasNode(r));return t.dummy=e,n.setNode(r,t),r}function de(n){const e=new y().setGraph(n.graph());return f(n.nodes(),function(t){e.setNode(t,n.node(t))}),f(n.edges(),function(t){const o=e.edge(t.v,t.w)||{weight:0,minlen:1},r=n.edge(t);e.setEdge(t.v,t.w,{weight:o.weight+r.weight,minlen:Math.max(o.minlen,r.minlen)})}),e}function Rt(n){const e=new y({multigraph:n.isMultigraph()}).setGraph(n.graph());return f(n.nodes(),function(t){n.children(t).length||e.setNode(t,n.node(t))}),f(n.edges(),function(t){e.setEdge(t,n.edge(t))}),e}function xt(n){const e=_(n.nodes(),function(t){const o={};return f(n.outEdges(t),function(r){o[r.w]=(o[r.w]||0)+n.edge(r).weight}),o});return wn(n.nodes(),e)}function Lt(n){const e=_(n.nodes(),function(t){const o={};return f(n.inEdges(t),function(r){o[r.v]=(o[r.v]||0)+n.edge(r).weight}),o});return wn(n.nodes(),e)}function yt(n,e){const t=n.x,o=n.y,r=e.x-t,i=e.y-o;let s=n.width/2,c=n.height/2;if(!r&&!i)throw new Error("Not possible to find intersection inside of the rectangle");let u,d;return Math.abs(i)*s>Math.abs(r)*c?(i<0&&(c=-c),u=c*r/i,d=c):(r<0&&(s=-s),u=s,d=s*i/r),{x:t+u,y:o+d}}function At(n){const e=_(E(le(n)+1),function(){return[]});return f(n.nodes(),function(t){const o=n.node(t),r=o.rank;L(r)||(e[r][o.order]=t)}),e}function ae(n){const e=T(_(n.nodes(),function(t){return n.node(t).rank}));f(n.nodes(),function(t){const o=n.node(t);m(o,"rank")&&(o.rank-=e)})}function fe(n){const e=T(_(n.nodes(),function(i){return n.node(i).rank})),t=[];f(n.nodes(),function(i){const s=n.node(i).rank-e;t[s]||(t[s]=[]),t[s].push(i)});let o=0;const r=n.graph().nodeRankFactor;f(t,function(i,s){L(i)&&s%r!==0?--o:o&&f(i,function(c){n.node(c).rank+=o})})}function Et(n,e,t,o){const r={width:0,height:0};return arguments.length>=4&&(r.rank=t,r.order=o),ue(n,"border",r,e)}function le(n){return I(_(n.nodes(),function(e){const t=n.node(e).rank;if(!L(t))return t}))}function Pt(n,e){const t={lhs:[],rhs:[]};return f(n,function(o){e(o)?t.lhs.push(o):t.rhs.push(o)}),t}function Nt(n,e){const t=An();try{return e()}finally{console.log(n+" time: "+(An()-t)+"ms")}}function It(n,e){return e()}var g={addDummyNode:ue,simplify:de,asNonCompoundGraph:Rt,successorWeights:xt,predecessorWeights:Lt,intersectRect:yt,buildLayerMatrix:At,normalizeRanks:ae,removeEmptyRanks:fe,addBorderNode:Et,maxRank:le,partition:Pt,time:Nt,notime:It};function kt(n){n.graph().dummyChains=[],f(n.edges(),function(e){Ct(n,e)})}function Ct(n,e){let t=e.v,o=n.node(t).rank;const r=e.w,i=n.node(r).rank,s=e.name,c=n.edge(e),u=c.labelRank;if(i===o+1)return;n.removeEdge(e);let d,a,l;for(l=0,++o;o<i;++l,++o)c.points=[],a={width:0,height:0,edgeLabel:c,edgeObj:e,rank:o},d=g.addDummyNode(n,"edge",a,"_d"),o===u&&(a.width=c.width,a.height=c.height,a.dummy="edge-label",a.labelpos=c.labelpos),n.setEdge(t,d,{weight:c.weight},s),l===0&&n.graph().dummyChains.push(d),t=d;n.setEdge(t,r,{weight:c.weight},s)}function Gt(n){f(n.graph().dummyChains,function(e){let t=n.node(e);const o=t.edgeLabel;let r=null;for(n.setEdge(t.edgeObj,o);t.dummy;)r=n.successors(e)[0],n.removeNode(e),o.points.push({x:t.x,y:t.y}),t.dummy==="edge-label"&&(o.x=t.x,o.y=t.y,o.width=t.width,o.height=t.height),e=r,t=n.node(e)})}var In={run:kt,undo:Gt};function mn(n){const e={};function t(o){const r=n.node(o);if(m(e,o))return r.rank;e[o]=!0;const i=T(_(n.outEdges(o),function(s){return t(s.w)-n.edge(s).minlen}))||0;return r.rank=i}f(n.sources(),t)}function W(n,e){return n.node(e.w).rank-n.node(e.v).rank-n.edge(e).minlen}function Y(n,e){return n&&n.length?K(n,an(e),ce):void 0}function he(n){const e=new y({directed:!1}),t=n.nodes()[0],o=n.nodeCount();e.setNode(t,{});let r,i;for(;Ft(e,n)<o;)r=Tt(e,n),i=e.hasNode(r.v)?W(n,r):-W(n,r),Wt(e,n,i);return e}function Ft(n,e){function t(o){f(e.nodeEdges(o),function(r){const i=r.v,s=o===i?r.w:i;!n.hasNode(s)&&!W(e,r)&&(n.setNode(s,{}),n.setEdge(o,s,{}),t(s))})}return f(n.nodes(),t),n.nodeCount()}function Tt(n,e){return Y(e.edges(),function(t){if(n.hasNode(t.v)!==n.hasNode(t.w))return W(e,t)})}function Wt(n,e,t){f(n.nodes(),function(o){e.node(o).rank+=t})}const{preorder:Mt,postorder:Bt}=et;A.initLowLimValues=gn;A.initCutValues=_n;A.calcCutValue=pe;A.leaveEdge=me;A.enterEdge=_e;A.exchangeEdges=ge;function A(n){n=de(n),mn(n);const e=he(n);gn(e),_n(e,n);let t,o;for(;t=me(e);)o=_e(e,n,t),ge(e,n,t,o)}function _n(n,e){let t=Bt(n,n.nodes());t=t.slice(0,t.length-1),f(t,function(o){Dt(n,e,o)})}function Dt(n,e,t){const r=n.node(t).parent;n.edge(t,r).cutvalue=pe(n,e,t)}function pe(n,e,t){const r=n.node(t).parent;let i=!0,s=e.edge(t,r),c=0;return s||(i=!1,s=e.edge(r,t)),c=s.weight,f(e.nodeEdges(t),function(u){const d=u.v===t,a=d?u.w:u.v;if(a!==r){const l=d===i,h=e.edge(u).weight;if(c+=l?h:-h,Ot(n,t,a)){const p=n.edge(t,a).cutvalue;c+=l?-p:p}}}),c}function gn(n,e){arguments.length<2&&(e=n.nodes()[0]),we(n,{},1,e)}function we(n,e,t,o,r){const i=t,s=n.node(o);return e[o]=!0,f(n.neighbors(o),function(c){m(e,c)||(t=we(n,e,t,c,o))}),s.low=i,s.lim=t++,r?s.parent=r:delete s.parent,t}function me(n){return ln(n.edges(),function(e){return n.edge(e).cutvalue<0})}function _e(n,e,t){let o=t.v,r=t.w;e.hasEdge(o,r)||(o=t.w,r=t.v);const i=n.node(o),s=n.node(r);let c=i,u=!1;i.lim>s.lim&&(c=s,u=!0);const d=$(e.edges(),function(a){return u===kn(n,n.node(a.v),c)&&u!==kn(n,n.node(a.w),c)});return Y(d,function(a){return W(e,a)})}function ge(n,e,t,o){const r=t.v,i=t.w;n.removeEdge(r,i),n.setEdge(o.v,o.w,{}),gn(n),_n(n,e),$t(n,e)}function $t(n,e){const t=ln(n.nodes(),function(r){return!e.node(r).parent});let o=Mt(n,t);o=o.slice(1),f(o,function(r){const i=n.node(r).parent;let s=e.edge(r,i),c=!1;s||(s=e.edge(i,r),c=!0),e.node(r).rank=e.node(i).rank+(c?s.minlen:-s.minlen)})}function Ot(n,e,t){return n.hasEdge(e,t)}function kn(n,e,t){return t.low<=e.lim&&e.lim<=t.lim}function St(n){switch(n.graph().ranker){case"network-simplex":Cn(n);break;case"tight-tree":Ht(n);break;case"longest-path":Yt(n);break;default:Cn(n)}}const Yt=mn;function Ht(n){mn(n),he(n)}function Cn(n){A(n)}function Ut(n){const e=qt(n);f(n.graph().dummyChains,function(t){let o=n.node(t);const r=o.edgeObj,i=Vt(n,e,r.v,r.w),s=i.path,c=i.lca;let u=0,d=s[u],a=!0;for(;t!==r.w;){if(o=n.node(t),a){for(;(d=s[u])!==c&&n.node(d).maxRank<o.rank;)u++;d===c&&(a=!1)}if(!a){for(;u<s.length-1&&n.node(d=s[u+1]).minRank<=o.rank;)u++;d=s[u]}n.setParent(t,d),t=n.successors(t)[0]}})}function Vt(n,e,t,o){const r=[],i=[],s=Math.min(e[t].low,e[o].low),c=Math.max(e[t].lim,e[o].lim);let u,d;u=t;do u=n.parent(u),r.push(u);while(u&&(e[u].low>s||c>e[u].lim));for(d=u,u=o;(u=n.parent(u))!==d;)i.push(u);return{path:r.concat(i.reverse()),lca:d}}function qt(n){const e={};let t=0;function o(r){const i=t;f(n.children(r),o),e[r]={low:i,lim:t++}}return f(n.children(),o),e}function zt(n){const e=g.addDummyNode(n,"root",{},"_root"),t=Kt(n),o=I(P(t))-1,r=2*o+1;n.graph().nestingRoot=e,f(n.edges(),function(s){n.edge(s).minlen*=r});const i=Xt(n)+1;f(n.children(),function(s){be(n,e,r,i,o,t,s)}),n.graph().nodeRankFactor=r}function be(n,e,t,o,r,i,s){const c=n.children(s);if(!c.length){s!==e&&n.setEdge(e,s,{weight:0,minlen:t});return}const u=g.addBorderNode(n,"_bt"),d=g.addBorderNode(n,"_bb"),a=n.node(s);n.setParent(u,s),a.borderTop=u,n.setParent(d,s),a.borderBottom=d,f(c,function(l){be(n,e,t,o,r,i,l);const h=n.node(l),p=h.borderTop?h.borderTop:l,w=h.borderBottom?h.borderBottom:l,b=h.borderTop?o:2*o,v=p!==w?1:r-i[s]+1;n.setEdge(u,p,{weight:b,minlen:v,nestingEdge:!0}),n.setEdge(w,d,{weight:b,minlen:v,nestingEdge:!0})}),n.parent(s)||n.setEdge(e,u,{weight:0,minlen:r+i[s]})}function Kt(n){const e={};function t(o,r){const i=n.children(o);i&&i.length&&f(i,function(s){t(s,r+1)}),e[o]=r}return f(n.children(),function(o){t(o,1)}),e}function Xt(n){return N(n.edges(),function(e,t){return e+n.edge(t).weight},0)}function jt(n){const e=n.graph();n.removeNode(e.nestingRoot),delete e.nestingRoot,f(n.edges(),function(t){n.edge(t).nestingEdge&&n.removeEdge(t)})}var Gn={run:zt,cleanup:jt};function Jt(n){function e(t){const o=n.children(t),r=n.node(t);if(o.length&&f(o,e),m(r,"minRank")){r.borderLeft=[],r.borderRight=[];for(let i=r.minRank,s=r.maxRank+1;i<s;++i)Fn(n,"borderLeft","_bl",t,r,i),Fn(n,"borderRight","_br",t,r,i)}}f(n.children(),e)}function Fn(n,e,t,o,r,i){const s={width:0,height:0,rank:i,borderType:e},c=r[e][i-1],u=g.addDummyNode(n,"border",s,t);r[e][i]=u,n.setParent(u,o),c&&n.setEdge(c,u,{weight:1})}function Zt(n){const e=n.graph().rankdir.toLowerCase();(e==="lr"||e==="rl")&&ve(n)}function Qt(n){const e=n.graph().rankdir.toLowerCase();(e==="bt"||e==="rl")&&no(n),(e==="lr"||e==="rl")&&(eo(n),ve(n))}function ve(n){f(n.nodes(),function(e){Tn(n.node(e))}),f(n.edges(),function(e){Tn(n.edge(e))})}function Tn(n){const e=n.width;n.width=n.height,n.height=e}function no(n){f(n.nodes(),function(e){Z(n.node(e))}),f(n.edges(),function(e){const t=n.edge(e);f(t.points,Z),m(t,"y")&&Z(t)})}function Z(n){n.y=-n.y}function eo(n){f(n.nodes(),function(e){Q(n.node(e))}),f(n.edges(),function(e){const t=n.edge(e);f(t.points,Q),m(t,"x")&&Q(t)})}function Q(n){const e=n.x;n.x=n.y,n.y=e}var Wn={adjust:Zt,undo:Qt};function to(n){const e={},t=$(n.nodes(),function(c){return!n.children(c).length}),o=I(_(t,function(c){return n.node(c).rank})),r=_(E(o+1),function(){return[]});function i(c){if(m(e,c))return;e[c]=!0;const u=n.node(c);r[u.rank].push(c),f(n.successors(c),i)}const s=D(t,function(c){return n.node(c).rank});return f(s,i),r}function oo(n,e){let t=0;for(let o=1;o<e.length;++o)t+=ro(n,e[o-1],e[o]);return t}function ro(n,e,t){const o=wn(t,_(t,function(d,a){return a})),r=G(_(e,function(d){const a=n.outEdges(d),l=_(a,p=>({pos:o[p.w],weight:n.edge(p).weight}));return D(l,"pos")}));let i=1;for(;i<t.length;)i<<=1;const s=2*i-1;i-=1;const c=_(new Array(s),function(){return 0});let u=0;return f(r.forEach(function(d){let a=d.pos+i;c[a]+=d.weight;let l=0;for(;a>0;)a%2&&(l+=c[a+1]),a=a-1>>1,c[a]+=d.weight;u+=d.weight*l})),u}function io(n,e){return _(e,function(t){const o=n.inEdges(t);if(o.length){const r=N(o,function(i,s){const c=n.edge(s),u=n.node(s.v);return{sum:i.sum+c.weight*u.order,weight:i.weight+c.weight}},{sum:0,weight:0});return{v:t,barycenter:r.sum/r.weight,weight:r.weight}}else return{v:t}})}function so(n,e){const t={};f(n,function(r,i){const s=t[r.v]={indegree:0,in:[],out:[],vs:[r.v],i};L(r.barycenter)||(s.barycenter=r.barycenter,s.weight=r.weight)}),f(e.edges(),function(r){const i=t[r.v],s=t[r.w];!L(i)&&!L(s)&&(s.indegree++,i.out.push(t[r.w]))});const o=$(t,function(r){return!r.indegree});return co(o)}function co(n){const e=[];function t(i){return function(s){s.merged||(L(s.barycenter)||L(i.barycenter)||s.barycenter>=i.barycenter)&&uo(i,s)}}function o(i){return function(s){s.in.push(i),--s.indegree===0&&n.push(s)}}for(;n.length;){const i=n.pop();e.push(i),f(i.in.reverse(),t(i)),f(i.out,o(i))}const r=$(e,function(i){return!i.merged});return _(r,function(i){return S(i,["vs","i","barycenter","weight"])})}function uo(n,e){let t=0,o=0;n.weight&&(t+=n.barycenter*n.weight,o+=n.weight),e.weight&&(t+=e.barycenter*e.weight,o+=e.weight),n.vs=e.vs.concat(n.vs),n.barycenter=t/o,n.weight=o,n.i=Math.min(e.i,n.i),e.merged=!0}function ao(n,e){const t=g.partition(n,function(a){return m(a,"barycenter")}),o=t.lhs,r=D(t.rhs,function(a){return-a.i}),i=[];let s=0,c=0,u=0;o.sort(fo(!!e)),u=Mn(i,r,u),f(o,function(a){u+=a.vs.length,i.push(a.vs),s+=a.barycenter*a.weight,c+=a.weight,u=Mn(i,r,u)});const d={vs:G(i)};return c&&(d.barycenter=s/c,d.weight=c),d}function Mn(n,e,t){let o;for(;e.length&&(o=O(e)).i<=t;)e.pop(),n.push(o.vs),t++;return t}function fo(n){return function(e,t){return e.barycenter<t.barycenter?-1:e.barycenter>t.barycenter?1:n?t.i-e.i:e.i-t.i}}function Re(n,e,t,o){let r=n.children(e);const i=n.node(e),s=i?i.borderLeft:void 0,c=i?i.borderRight:void 0,u={};s&&(r=$(r,function(h){return h!==s&&h!==c}));const d=io(n,r);f(d,function(h){if(n.children(h.v).length){const p=Re(n,h.v,t,o);u[h.v]=p,m(p,"barycenter")&&ho(h,p)}});const a=so(d,t);lo(a,u);const l=ao(a,o);if(s&&(l.vs=G([s,l.vs,c]),n.predecessors(s).length)){const h=n.node(n.predecessors(s)[0]),p=n.node(n.predecessors(c)[0]);m(l,"barycenter")||(l.barycenter=0,l.weight=0),l.barycenter=(l.barycenter*l.weight+h.order+p.order)/(l.weight+2),l.weight+=2}return l}function lo(n,e){f(n,function(t){t.vs=G(t.vs.map(function(o){return e[o]?e[o].vs:o}))})}function ho(n,e){L(n.barycenter)?(n.barycenter=e.barycenter,n.weight=e.weight):(n.barycenter=(n.barycenter*n.weight+e.barycenter*e.weight)/(n.weight+e.weight),n.weight+=e.weight)}function po(n,e,t){const o=wo(n),r=new y({compound:!0}).setGraph({root:o}).setDefaultNodeLabel(function(i){return n.node(i)});return f(n.nodes(),function(i){const s=n.node(i),c=n.parent(i);(s.rank===e||s.minRank<=e&&e<=s.maxRank)&&(r.setNode(i),r.setParent(i,c||o),f(n[t](i),function(u){const d=u.v===i?u.w:u.v,a=r.edge(d,i),l=L(a)?0:a.weight;r.setEdge(d,i,{weight:n.edge(u).weight+l})}),m(s,"minRank")&&r.setNode(i,{borderLeft:s.borderLeft[e],borderRight:s.borderRight[e]}))}),r}function wo(n){let e;for(;n.hasNode(e=pn("_root")););return e}function mo(n,e,t){const o={};let r;f(t,function(i){let s=n.parent(i),c,u;for(;s;){if(c=n.parent(s),c?(u=o[c],o[c]=s):(u=r,r=s),u&&u!==s){e.setEdge(u,s);return}s=c}})}function _o(n){const e=g.maxRank(n),t=Bn(n,E(1,e+1),"inEdges"),o=Bn(n,E(e-1,-1,-1),"outEdges");let r=to(n);Dn(n,r);let i=Number.POSITIVE_INFINITY,s;for(let c=0,u=0;u<4;++c,++u){go(c%2?t:o,c%4>=2),r=g.buildLayerMatrix(n);const d=oo(n,r);d<i&&(u=0,s=Ve(r),i=d)}Dn(n,s)}function Bn(n,e,t){return _(e,function(o){return po(n,o,t)})}function go(n,e){const t=new y;f(n,function(o){const r=o.graph().root,i=Re(o,r,t,e);f(i.vs,function(s,c){o.node(s).order=c}),mo(o,t,i.vs)})}function Dn(n,e){f(e,function(t){f(t,function(o,r){n.node(o).order=r})})}var bo=En&&new En;const H=bo;var vo=H?function(n,e){return H.set(n,e),n}:fn;const xe=vo;function M(n){return function(){var e=arguments;switch(e.length){case 0:return new n;case 1:return new n(e[0]);case 2:return new n(e[0],e[1]);case 3:return new n(e[0],e[1],e[2]);case 4:return new n(e[0],e[1],e[2],e[3]);case 5:return new n(e[0],e[1],e[2],e[3],e[4]);case 6:return new n(e[0],e[1],e[2],e[3],e[4],e[5]);case 7:return new n(e[0],e[1],e[2],e[3],e[4],e[5],e[6])}var t=hn(n.prototype),o=n.apply(t,e);return cn(o)?o:t}}var Ro=1;function xo(n,e,t){var o=e&Ro,r=M(n);function i(){var s=this&&this!==V&&this instanceof i?r:n;return s.apply(o?t:this,arguments)}return i}var Lo=Math.max;function Le(n,e,t,o){for(var r=-1,i=n.length,s=t.length,c=-1,u=e.length,d=Lo(i-s,0),a=Array(u+d),l=!o;++c<u;)a[c]=e[c];for(;++r<s;)(l||r<i)&&(a[t[r]]=n[r]);for(;d--;)a[c++]=n[r++];return a}var yo=Math.max;function ye(n,e,t,o){for(var r=-1,i=n.length,s=-1,c=t.length,u=-1,d=e.length,a=yo(i-c,0),l=Array(a+d),h=!o;++r<a;)l[r]=n[r];for(var p=r;++u<d;)l[p+u]=e[u];for(;++s<c;)(h||r<i)&&(l[p+t[s]]=n[r++]);return l}function Ao(n,e){for(var t=n.length,o=0;t--;)n[t]===e&&++o;return o}function bn(){}var Eo=4294967295;function k(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Eo,this.__views__=[]}k.prototype=hn(bn.prototype);k.prototype.constructor=k;var Po=H?function(n){return H.get(n)}:tt;const Ae=Po;var No={};const $n=No;var Io=Object.prototype,ko=Io.hasOwnProperty;function Co(n){for(var e=n.name+"",t=$n[e],o=ko.call($n,e)?t.length:0;o--;){var r=t[o],i=r.func;if(i==null||i==n)return r.name}return e}function C(n,e){this.__wrapped__=n,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=void 0}C.prototype=hn(bn.prototype);C.prototype.constructor=C;function Go(n){if(n instanceof k)return n.clone();var e=new C(n.__wrapped__,n.__chain__);return e.__actions__=te(n.__actions__),e.__index__=n.__index__,e.__values__=n.__values__,e}var Fo=Object.prototype,To=Fo.hasOwnProperty;function U(n){if(qe(n)&&!ze(n)&&!(n instanceof k)){if(n instanceof C)return n;if(To.call(n,"__wrapped__"))return Go(n)}return new C(n)}U.prototype=bn.prototype;U.prototype.constructor=U;function Wo(n){var e=Co(n),t=U[e];if(typeof t!="function"||!(e in k.prototype))return!1;if(n===t)return!0;var o=Ae(t);return!!o&&n===o[0]}var Mo=Ke(xe);const Ee=Mo;var Bo=/\{\n\/\* \[wrapped with (.+)\] \*/,Do=/,? & /;function $o(n){var e=n.match(Bo);return e?e[1].split(Do):[]}var Oo=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;function So(n,e){var t=e.length;if(!t)return n;var o=t-1;return e[o]=(t>1?"& ":"")+e[o],e=e.join(t>2?", ":" "),n.replace(Oo,`{
/* [wrapped with `+e+`] */
`)}var Yo=1,Ho=2,Uo=8,Vo=16,qo=32,zo=64,Ko=128,Xo=256,jo=512,Jo=[["ary",Ko],["bind",Yo],["bindKey",Ho],["curry",Uo],["curryRight",Vo],["flip",jo],["partial",qo],["partialRight",zo],["rearg",Xo]];function Zo(n,e){return Xe(Jo,function(t){var o="_."+t[0];e&t[1]&&!je(n,o)&&n.push(o)}),n.sort()}function Pe(n,e,t){var o=e+"";return Jn(n,So(o,Zo($o(o),t)))}var Qo=1,nr=2,er=4,tr=8,On=32,Sn=64;function Ne(n,e,t,o,r,i,s,c,u,d){var a=e&tr,l=a?s:void 0,h=a?void 0:s,p=a?i:void 0,w=a?void 0:i;e|=a?On:Sn,e&=~(a?Sn:On),e&er||(e&=~(Qo|nr));var b=[n,e,r,p,l,w,h,c,u,d],v=t.apply(void 0,b);return Wo(n)&&Ee(v,b),v.placeholder=o,Pe(v,n,e)}function vn(n){var e=n;return e.placeholder}var or=Math.min;function rr(n,e){for(var t=n.length,o=or(e.length,t),r=te(n);o--;){var i=e[o];n[o]=ne(i,t)?r[i]:void 0}return n}var Yn="__lodash_placeholder__";function B(n,e){for(var t=-1,o=n.length,r=0,i=[];++t<o;){var s=n[t];(s===e||s===Yn)&&(n[t]=Yn,i[r++]=t)}return i}var ir=1,sr=2,cr=8,ur=16,dr=128,ar=512;function Rn(n,e,t,o,r,i,s,c,u,d){var a=e&dr,l=e&ir,h=e&sr,p=e&(cr|ur),w=e&ar,b=h?void 0:M(n);function v(){for(var x=arguments.length,R=Array(x),X=x;X--;)R[X]=arguments[X];if(p)var Ln=vn(v),Ce=Ao(R,Ln);if(o&&(R=Le(R,o,r,p)),i&&(R=ye(R,i,s,p)),x-=Ce,p&&x<d){var Ge=B(R,Ln);return Ne(n,e,Rn,v.placeholder,t,R,Ge,c,u,d-x)}var yn=l?t:this,j=h?yn[n]:n;return x=R.length,c?R=rr(R,c):w&&x>1&&R.reverse(),a&&u<x&&(R.length=u),this&&this!==V&&this instanceof v&&(j=b||M(j)),j.apply(yn,R)}return v}function fr(n,e,t){var o=M(n);function r(){for(var i=arguments.length,s=Array(i),c=i,u=vn(r);c--;)s[c]=arguments[c];var d=i<3&&s[0]!==u&&s[i-1]!==u?[]:B(s,u);if(i-=d.length,i<t)return Ne(n,e,Rn,r.placeholder,void 0,s,d,void 0,void 0,t-i);var a=this&&this!==V&&this instanceof r?o:n;return oe(a,this,s)}return r}var lr=1;function hr(n,e,t,o){var r=e&lr,i=M(n);function s(){for(var c=-1,u=arguments.length,d=-1,a=o.length,l=Array(a+u),h=this&&this!==V&&this instanceof s?i:n;++d<a;)l[d]=o[d];for(;u--;)l[d++]=arguments[++c];return oe(h,r?t:this,l)}return s}var Hn="__lodash_placeholder__",nn=1,pr=2,wr=4,Un=8,F=128,Vn=256,mr=Math.min;function _r(n,e){var t=n[1],o=e[1],r=t|o,i=r<(nn|pr|F),s=o==F&&t==Un||o==F&&t==Vn&&n[7].length<=e[8]||o==(F|Vn)&&e[7].length<=e[8]&&t==Un;if(!(i||s))return n;o&nn&&(n[2]=e[2],r|=t&nn?0:wr);var c=e[3];if(c){var u=n[3];n[3]=u?Le(u,c,e[4]):c,n[4]=u?B(n[3],Hn):e[4]}return c=e[5],c&&(u=n[5],n[5]=u?ye(u,c,e[6]):c,n[6]=u?B(n[5],Hn):e[6]),c=e[7],c&&(n[7]=c),o&F&&(n[8]=n[8]==null?e[8]:mr(n[8],e[8])),n[9]==null&&(n[9]=e[9]),n[0]=e[0],n[1]=r,n}var gr="Expected a function",qn=1,br=2,en=8,tn=16,on=32,zn=64,Kn=Math.max;function vr(n,e,t,o,r,i,s,c){var u=e&br;if(!u&&typeof n!="function")throw new TypeError(gr);var d=o?o.length:0;if(d||(e&=~(on|zn),o=r=void 0),s=s===void 0?s:Kn(Pn(s),0),c=c===void 0?c:Pn(c),d-=r?r.length:0,e&zn){var a=o,l=r;o=r=void 0}var h=u?void 0:Ae(n),p=[n,e,t,o,r,a,l,i,s,c];if(h&&_r(p,h),n=p[0],e=p[1],t=p[2],o=p[3],r=p[4],c=p[9]=p[9]===void 0?u?0:n.length:Kn(p[9]-d,0),!c&&e&(en|tn)&&(e&=~(en|tn)),!e||e==qn)var w=xo(n,e,t);else e==en||e==tn?w=fr(n,e,c):(e==on||e==(qn|on))&&!r.length?w=hr(n,e,t,o):w=Rn.apply(void 0,p);var b=h?xe:Ee;return Pe(b(w,p),n,e)}var Rr=1,xr=32,xn=Zn(function(n,e,t){var o=Rr;if(t.length){var r=B(t,vn(xn));o|=xr}return vr(n,o,e,t,r)});xn.placeholder={};const Lr=xn;function yr(n,e){return n&&n.length?K(n,an(e),se):void 0}function Ar(n,e){return Je(e,function(t){return[t,n[t]]})}function Er(n){var e=-1,t=Array(n.size);return n.forEach(function(o){t[++e]=[o,o]}),t}var Pr="[object Map]",Nr="[object Set]";function Ir(n){return function(e){var t=Ze(e);return t==Pr?Qe(e):t==Nr?Er(e):Ar(e,n(e))}}var kr=Ir(nt);const Xn=kr;function Cr(n,e){const t={};function o(r,i){let s=0,c=0;const u=r.length,d=O(i);return f(i,function(a,l){const h=Fr(n,a),p=h?n.node(h).order:u;(h||a===d)&&(f(i.slice(c,l+1),function(w){f(n.predecessors(w),function(b){const v=n.node(b),x=v.order;(x<s||p<x)&&!(v.dummy&&n.node(w).dummy)&&Ie(t,b,w)})}),c=l+1,s=p)}),i}return N(e,o),t}function Gr(n,e){const t={};function o(i,s,c,u,d){let a;f(E(s,c),function(l){a=i[l],n.node(a).dummy&&f(n.predecessors(a),function(h){const p=n.node(h);p.dummy&&(p.order<u||p.order>d)&&Ie(t,h,a)})})}function r(i,s){let c=-1,u,d=0;return f(s,function(a,l){if(n.node(a).dummy==="border"){const h=n.predecessors(a);h.length&&(u=n.node(h[0]).order,o(s,d,l,c,u),d=l,c=u)}o(s,d,s.length,u,i.length)}),s}return N(e,r),t}function Fr(n,e){if(n.node(e).dummy)return ln(n.predecessors(e),function(t){return n.node(t).dummy})}function Ie(n,e,t){if(e>t){const r=e;e=t,t=r}let o=n[e];o||(n[e]=o={}),o[t]=!0}function Tr(n,e,t){if(e>t){const o=e;e=t,t=o}return m(n[e],t)}function Wr(n,e,t,o){const r={},i={},s={};return f(e,function(c){f(c,function(u,d){r[u]=u,i[u]=u,s[u]=d})}),f(e,function(c){let u=-1;f(c,function(d){let a=o(d);if(a.length){a=D(a,function(h){return s[h]});const l=(a.length-1)/2;for(let h=Math.floor(l),p=Math.ceil(l);h<=p;++h){const w=a[h];i[d]===d&&u<s[w]&&!Tr(t,d,w)&&(i[w]=d,i[d]=r[d]=r[w],u=s[w])}}})}),{root:r,align:i}}function Mr(n,e,t,o,r){const i={},s=Br(n,e,t,r),c={};function u(l){m(c,l)||(c[l]=!0,i[l]=N(s.inEdges(l),function(h,p){return u(p.v),Math.max(h,i[p.v]+s.edge(p))},0))}f(s.nodes(),u);const d=r?"borderLeft":"borderRight";function a(l){if(c[l]!==2){c[l]++;const h=n.node(l),p=N(s.outEdges(l),function(w,b){return a(b.w),Math.min(w,i[b.w]-s.edge(b))},Number.POSITIVE_INFINITY);p!==Number.POSITIVE_INFINITY&&h.borderType!==d&&(i[l]=Math.max(i[l],p))}}return f(s.nodes(),a),f(o,function(l){i[l]=i[t[l]]}),i}function Br(n,e,t,o){const r=new y,i=n.graph(),s=Yr(i.nodesep,i.edgesep,o);return f(e,function(c){let u;f(c,function(d){const a=t[d];if(r.setNode(a),u){const l=t[u],h=r.edge(l,a);r.setEdge(l,a,Math.max(s(n,d,u),h||0))}u=d})}),r}function Dr(n,e){return Y(P(e),function(t){const o=(Y(Xn(t),i=>i[1]-jn(n,i[0])/2)||["k",0])[1];return(yr(Xn(t),i=>i[1]+jn(n,i[0])/2)||["k",0])[1]-o})}function $r(n,e){const t=P(e),o=T(t),r=I(t);f(["u","d"],function(i){f(["l","r"],function(s){const c=i+s,u=n[c];if(u===e)return;const d=P(u),a=s==="l"?o-T(d):r-I(d);a&&(n[c]=q(u,function(l){return l+a}))})})}function Or(n,e){return q(n.ul,function(t,o){if(e)return n[e.toLowerCase()][o];{const r=D(_(n,o));return(r[1]+r[2])/2}})}function Sr(n){const e=g.buildLayerMatrix(n),t=un(Cr(n,e),Gr(n,e)),o={};let r;f(["u","d"],function(s){r=s==="u"?e:P(e).reverse(),f(["l","r"],function(c){c==="r"&&(r=_(r,function(l){return P(l).reverse()}));const u=Lr(s==="u"?n.predecessors:n.successors,n),d=Wr(n,r,t,u);let a=Mr(n,r,d.root,d.align,c==="r");c==="r"&&(a=q(a,function(l){return-l})),o[s+c]=a})});const i=Dr(n,o);return $r(o,i),Or(o,n.graph().align)}function Yr(n,e,t){return function(o,r,i){const s=o.node(r),c=o.node(i);let u=0,d;if(u+=s.width/2,m(s,"labelpos"))switch(s.labelpos.toLowerCase()){case"l":d=-s.width/2;break;case"r":d=s.width/2;break}if(d&&(u+=t?d:-d),d=0,u+=(s.dummy?e:n)/2,u+=(c.dummy?e:n)/2,u+=c.width/2,m(c,"labelpos"))switch(c.labelpos.toLowerCase()){case"l":d=c.width/2;break;case"r":d=-c.width/2;break}return d&&(u+=t?d:-d),d=0,u}}function jn(n,e){return n.node(e).width}function Hr(n){n=g.asNonCompoundGraph(n),Ur(n),f(Sr(n),function(e,t){n.node(t).x=e})}function Ur(n){const e=g.buildLayerMatrix(n),t=n.graph().ranksep;let o=0;f(e,function(r){const i=I(_(r,function(s){return n.node(s).height}));f(r,function(s){n.node(s).y=o+i/2}),o+=i+t})}function ke(n,e){const t=e&&e.debugTiming?g.time:g.notime;t("layout",function(){const o=t("  buildLayoutGraph",function(){return ei(n)});t("  runLayout",function(){Vr(o,t)}),t("  updateInputGraph",function(){qr(n,o)})})}function Vr(n,e){e("    makeSpaceForEdgeLabels",function(){ti(n)}),e("    removeSelfEdges",function(){fi(n)}),e("    acyclic",function(){Nn.run(n)}),e("    nestingGraph.run",function(){Gn.run(n)}),e("    rank",function(){St(g.asNonCompoundGraph(n))}),e("    injectEdgeLabelProxies",function(){oi(n)}),e("    removeEmptyRanks",function(){fe(n)}),e("    nestingGraph.cleanup",function(){Gn.cleanup(n)}),e("    normalizeRanks",function(){ae(n)}),e("    assignRankMinMax",function(){ri(n)}),e("    removeEdgeLabelProxies",function(){ii(n)}),e("    normalize.run",function(){In.run(n)}),e("    parentDummyChains",function(){Ut(n)}),e("    addBorderSegments",function(){Jt(n)}),e("    order",function(){_o(n)}),e("    insertSelfEdges",function(){li(n)}),e("    adjustCoordinateSystem",function(){Wn.adjust(n)}),e("    position",function(){Hr(n)}),e("    positionSelfEdges",function(){hi(n)}),e("    removeBorderNodes",function(){ai(n)}),e("    normalize.undo",function(){In.undo(n)}),e("    fixupEdgeLabelCoords",function(){ui(n)}),e("    undoCoordinateSystem",function(){Wn.undo(n)}),e("    translateGraph",function(){si(n)}),e("    assignNodeIntersects",function(){ci(n)}),e("    reversePoints",function(){di(n)}),e("    acyclic.undo",function(){Nn.undo(n)})}function qr(n,e){f(n.nodes(),function(t){const o=n.node(t),r=e.node(t);o&&(o.x=r.x,o.y=r.y,e.children(t).length&&(o.width=r.width,o.height=r.height))}),f(n.edges(),function(t){const o=n.edge(t),r=e.edge(t);o.points=r.points,m(r,"x")&&(o.x=r.x,o.y=r.y)}),n.graph().width=e.graph().width,n.graph().height=e.graph().height}const zr=["nodesep","edgesep","ranksep","marginx","marginy"],Kr={ranksep:50,edgesep:20,nodesep:50,rankdir:"tb"},Xr=["acyclicer","ranker","rankdir","align"],jr=["width","height"],Jr={width:0,height:0},Zr=["minlen","weight","width","height","labeloffset"],Qr={minlen:1,weight:1,width:0,height:0,labeloffset:10,labelpos:"r"},ni=["labelpos"];function ei(n){const e=new y({multigraph:!0,compound:!0}),t=sn(n.graph());return e.setGraph(un({},Kr,rn(t,zr),S(t,Xr))),f(n.nodes(),function(o){const r=sn(n.node(o));e.setNode(o,st(rn(r,jr),Jr)),e.setParent(o,n.parent(o))}),f(n.edges(),function(o){const r=sn(n.edge(o));e.setEdge(o,un({},Qr,rn(r,Zr),S(r,ni)))}),e}function ti(n){const e=n.graph();e.ranksep/=2,f(n.edges(),function(t){const o=n.edge(t);o.minlen*=2,o.labelpos.toLowerCase()!=="c"&&(e.rankdir==="TB"||e.rankdir==="BT"?o.width+=o.labeloffset:o.height+=o.labeloffset)})}function oi(n){f(n.edges(),function(e){const t=n.edge(e);if(t.width&&t.height){const o=n.node(e.v),i={rank:(n.node(e.w).rank-o.rank)/2+o.rank,e};g.addDummyNode(n,"edge-proxy",i,"_ep")}})}function ri(n){let e=0;f(n.nodes(),function(t){const o=n.node(t);o.borderTop&&(o.minRank=n.node(o.borderTop).rank,o.maxRank=n.node(o.borderBottom).rank,e=Math.max(e,o.maxRank))}),n.graph().maxRank=e}function ii(n){f(n.nodes(),function(e){const t=n.node(e);t.dummy==="edge-proxy"&&(n.edge(t.e).labelRank=t.rank,n.removeNode(e))})}function si(n){let e=Number.POSITIVE_INFINITY,t=0,o=Number.POSITIVE_INFINITY,r=0;const i=n.graph(),s=i.marginx||0,c=i.marginy||0;function u(d){const a=d.x,l=d.y,h=d.width,p=d.height;e=Math.min(e,a-h/2),t=Math.max(t,a+h/2),o=Math.min(o,l-p/2),r=Math.max(r,l+p/2)}f(n.nodes(),function(d){u(n.node(d))}),f(n.edges(),function(d){const a=n.edge(d);m(a,"x")&&u(a)}),e-=s,o-=c,f(n.nodes(),function(d){const a=n.node(d);a.x-=e,a.y-=o}),f(n.edges(),function(d){const a=n.edge(d);f(a.points,function(l){l.x-=e,l.y-=o}),m(a,"x")&&(a.x-=e),m(a,"y")&&(a.y-=o)}),i.width=t-e+s,i.height=r-o+c}function ci(n){f(n.edges(),function(e){const t=n.edge(e),o=n.node(e.v),r=n.node(e.w);let i=null,s=null;t.points?(i=t.points[0],s=t.points[t.points.length-1]):(t.points=[],i=r,s=o),t.points.unshift(g.intersectRect(o,i)),t.points.push(g.intersectRect(r,s))})}function ui(n){f(n.edges(),function(e){const t=n.edge(e);if(m(t,"x"))switch((t.labelpos==="l"||t.labelpos==="r")&&(t.width-=t.labeloffset),t.labelpos){case"l":t.x-=t.width/2+t.labeloffset;break;case"r":t.x+=t.width/2+t.labeloffset;break}})}function di(n){f(n.edges(),function(e){const t=n.edge(e);t.reversed&&t.points.reverse()})}function ai(n){f(n.nodes(),function(e){if(n.children(e).length){const t=n.node(e),o=n.node(t.borderTop),r=n.node(t.borderBottom),i=n.node(O(t.borderLeft)),s=n.node(O(t.borderRight));t.width=Math.abs(s.x-i.x),t.height=Math.abs(r.y-o.y),t.x=i.x+t.width/2,t.y=o.y+t.height/2}}),f(n.nodes(),function(e){n.node(e).dummy==="border"&&n.removeNode(e)})}function fi(n){f(n.edges(),function(e){if(e.v===e.w){const t=n.node(e.v);t.selfEdges||(t.selfEdges=[]),t.selfEdges.push({e,label:n.edge(e)}),n.removeEdge(e)}})}function li(n){const e=g.buildLayerMatrix(n);f(e,function(t){let o=0;f(t,function(r,i){const s=n.node(r);s.order=i+o,f(s.selfEdges,function(c){g.addDummyNode(n,"selfedge",{width:c.label.width,height:c.label.height,rank:s.rank,order:i+ ++o,e:c.e,label:c.label},"_se")}),delete s.selfEdges})})}function hi(n){f(n.nodes(),function(e){const t=n.node(e);if(t.dummy==="selfedge"){const o=n.node(t.e.v),r=o.x+o.width/2,i=o.y,s=t.x-r,c=o.height/2;n.setEdge(t.e,t.label),n.removeNode(e),t.label.points=[{x:r+2*s/3,y:i-c},{x:r+5*s/6,y:i-c},{x:r+s,y:i},{x:r+5*s/6,y:i+c},{x:r+2*s/3,y:i+c}],t.label.x=t.x,t.label.y=t.y}})}function rn(n,e){return q(S(n,e),Number)}function sn(n){const e={};return f(n,function(t,o){e[o.toLowerCase()]=t}),e}const mi=ke;var _i={layout:ke};export{_i as default,mi as layout};
