import{aa as Y,ab as F}from"./index-d260b106.js";function yt(t,n){var e,o=1;t==null&&(t=0),n==null&&(n=0);function a(){var f,h=e.length,i,c=0,r=0;for(f=0;f<h;++f)i=e[f],c+=i.x,r+=i.y;for(c=(c/h-t)*o,r=(r/h-n)*o,f=0;f<h;++f)i=e[f],i.x-=c,i.y-=r}return a.initialize=function(f){e=f},a.x=function(f){return arguments.length?(t=+f,a):t},a.y=function(f){return arguments.length?(n=+f,a):n},a.strength=function(f){return arguments.length?(o=+f,a):o},a}function L(t){const n=+this._x.call(null,t),e=+this._y.call(null,t);return X(this.cover(n,e),n,e,t)}function X(t,n,e,o){if(isNaN(n)||isNaN(e))return t;var a,f=t._root,h={data:o},i=t._x0,c=t._y0,r=t._x1,v=t._y1,w,y,l,_,s,u,g,x;if(!f)return t._root=h,t;for(;f.length;)if((s=n>=(w=(i+r)/2))?i=w:r=w,(u=e>=(y=(c+v)/2))?c=y:v=y,a=f,!(f=f[g=u<<1|s]))return a[g]=h,t;if(l=+t._x.call(null,f.data),_=+t._y.call(null,f.data),n===l&&e===_)return h.next=f,a?a[g]=h:t._root=h,t;do a=a?a[g]=new Array(4):t._root=new Array(4),(s=n>=(w=(i+r)/2))?i=w:r=w,(u=e>=(y=(c+v)/2))?c=y:v=y;while((g=u<<1|s)===(x=(_>=y)<<1|l>=w));return a[x]=f,a[g]=h,t}function G(t){var n,e,o=t.length,a,f,h=new Array(o),i=new Array(o),c=1/0,r=1/0,v=-1/0,w=-1/0;for(e=0;e<o;++e)isNaN(a=+this._x.call(null,n=t[e]))||isNaN(f=+this._y.call(null,n))||(h[e]=a,i[e]=f,a<c&&(c=a),a>v&&(v=a),f<r&&(r=f),f>w&&(w=f));if(c>v||r>w)return this;for(this.cover(c,r).cover(v,w),e=0;e<o;++e)X(this,h[e],i[e],t[e]);return this}function H(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var e=this._x0,o=this._y0,a=this._x1,f=this._y1;if(isNaN(e))a=(e=Math.floor(t))+1,f=(o=Math.floor(n))+1;else{for(var h=a-e||1,i=this._root,c,r;e>t||t>=a||o>n||n>=f;)switch(r=(n<o)<<1|t<e,c=new Array(4),c[r]=i,i=c,h*=2,r){case 0:a=e+h,f=o+h;break;case 1:e=a-h,f=o+h;break;case 2:a=e+h,o=f-h;break;case 3:e=a-h,o=f-h;break}this._root&&this._root.length&&(this._root=i)}return this._x0=e,this._y0=o,this._x1=a,this._y1=f,this}function J(){var t=[];return this.visit(function(n){if(!n.length)do t.push(n.data);while(n=n.next)}),t}function K(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function b(t,n,e,o,a){this.node=t,this.x0=n,this.y0=e,this.x1=o,this.y1=a}function O(t,n,e){var o,a=this._x0,f=this._y0,h,i,c,r,v=this._x1,w=this._y1,y=[],l=this._root,_,s;for(l&&y.push(new b(l,a,f,v,w)),e==null?e=1/0:(a=t-e,f=n-e,v=t+e,w=n+e,e*=e);_=y.pop();)if(!(!(l=_.node)||(h=_.x0)>v||(i=_.y0)>w||(c=_.x1)<a||(r=_.y1)<f))if(l.length){var u=(h+c)/2,g=(i+r)/2;y.push(new b(l[3],u,g,c,r),new b(l[2],h,g,u,r),new b(l[1],u,i,c,g),new b(l[0],h,i,u,g)),(s=(n>=g)<<1|t>=u)&&(_=y[y.length-1],y[y.length-1]=y[y.length-1-s],y[y.length-1-s]=_)}else{var x=t-+this._x.call(null,l.data),N=n-+this._y.call(null,l.data),p=x*x+N*N;if(p<e){var m=Math.sqrt(e=p);a=t-m,f=n-m,v=t+m,w=n+m,o=l.data}}return o}function U(t){if(isNaN(v=+this._x.call(null,t))||isNaN(w=+this._y.call(null,t)))return this;var n,e=this._root,o,a,f,h=this._x0,i=this._y0,c=this._x1,r=this._y1,v,w,y,l,_,s,u,g;if(!e)return this;if(e.length)for(;;){if((_=v>=(y=(h+c)/2))?h=y:c=y,(s=w>=(l=(i+r)/2))?i=l:r=l,n=e,!(e=e[u=s<<1|_]))return this;if(!e.length)break;(n[u+1&3]||n[u+2&3]||n[u+3&3])&&(o=n,g=u)}for(;e.data!==t;)if(a=e,!(e=e.next))return this;return(f=e.next)&&delete e.next,a?(f?a.next=f:delete a.next,this):n?(f?n[u]=f:delete n[u],(e=n[0]||n[1]||n[2]||n[3])&&e===(n[3]||n[2]||n[1]||n[0])&&!e.length&&(o?o[g]=e:this._root=e),this):(this._root=f,this)}function V(t){for(var n=0,e=t.length;n<e;++n)this.remove(t[n]);return this}function W(){return this._root}function Z(){var t=0;return this.visit(function(n){if(!n.length)do++t;while(n=n.next)}),t}function q(t){var n=[],e,o=this._root,a,f,h,i,c;for(o&&n.push(new b(o,this._x0,this._y0,this._x1,this._y1));e=n.pop();)if(!t(o=e.node,f=e.x0,h=e.y0,i=e.x1,c=e.y1)&&o.length){var r=(f+i)/2,v=(h+c)/2;(a=o[3])&&n.push(new b(a,r,v,i,c)),(a=o[2])&&n.push(new b(a,f,v,r,c)),(a=o[1])&&n.push(new b(a,r,h,i,v)),(a=o[0])&&n.push(new b(a,f,h,r,v))}return this}function k(t){var n=[],e=[],o;for(this._root&&n.push(new b(this._root,this._x0,this._y0,this._x1,this._y1));o=n.pop();){var a=o.node;if(a.length){var f,h=o.x0,i=o.y0,c=o.x1,r=o.y1,v=(h+c)/2,w=(i+r)/2;(f=a[0])&&n.push(new b(f,h,i,v,w)),(f=a[1])&&n.push(new b(f,v,i,c,w)),(f=a[2])&&n.push(new b(f,h,w,v,r)),(f=a[3])&&n.push(new b(f,v,w,c,r))}e.push(o)}for(;o=e.pop();)t(o.node,o.x0,o.y0,o.x1,o.y1);return this}function tt(t){return t[0]}function nt(t){return arguments.length?(this._x=t,this):this._x}function et(t){return t[1]}function rt(t){return arguments.length?(this._y=t,this):this._y}function C(t,n,e){var o=new P(n??tt,e??et,NaN,NaN,NaN,NaN);return t==null?o:o.addAll(t)}function P(t,n,e,o,a,f){this._x=t,this._y=n,this._x0=e,this._y0=o,this._x1=a,this._y1=f,this._root=void 0}function Q(t){for(var n={data:t.data},e=n;t=t.next;)e=e.next={data:t.data};return n}var I=C.prototype=P.prototype;I.copy=function(){var t=new P(this._x,this._y,this._x0,this._y0,this._x1,this._y1),n=this._root,e,o;if(!n)return t;if(!n.length)return t._root=Q(n),t;for(e=[{source:n,target:t._root=new Array(4)}];n=e.pop();)for(var a=0;a<4;++a)(o=n.source[a])&&(o.length?e.push({source:o,target:n.target[a]=new Array(4)}):n.target[a]=Q(o));return t};I.add=L;I.addAll=G;I.cover=H;I.data=J;I.extent=K;I.find=O;I.remove=U;I.removeAll=V;I.root=W;I.size=Z;I.visit=q;I.visitAfter=k;I.x=nt;I.y=rt;function d(t){return function(){return t}}function B(t){return(t()-.5)*1e-6}function it(t){return t.x+t.vx}function ft(t){return t.y+t.vy}function xt(t){var n,e,o,a=1,f=1;typeof t!="function"&&(t=d(t==null?1:+t));function h(){for(var r,v=n.length,w,y,l,_,s,u,g=0;g<f;++g)for(w=C(n,it,ft).visitAfter(i),r=0;r<v;++r)y=n[r],s=e[y.index],u=s*s,l=y.x+y.vx,_=y.y+y.vy,w.visit(x);function x(N,p,m,z,j){var A=N.data,D=N.r,M=s+D;if(A){if(A.index>y.index){var S=l-A.x-A.vx,$=_-A.y-A.vy,E=S*S+$*$;E<M*M&&(S===0&&(S=B(o),E+=S*S),$===0&&($=B(o),E+=$*$),E=(M-(E=Math.sqrt(E)))/E*a,y.vx+=(S*=E)*(M=(D*=D)/(u+D)),y.vy+=($*=E)*M,A.vx-=S*(M=1-M),A.vy-=$*M)}return}return p>l+M||z<l-M||m>_+M||j<_-M}}function i(r){if(r.data)return r.r=e[r.data.index];for(var v=r.r=0;v<4;++v)r[v]&&r[v].r>r.r&&(r.r=r[v].r)}function c(){if(n){var r,v=n.length,w;for(e=new Array(v),r=0;r<v;++r)w=n[r],e[w.index]=+t(w,r,n)}}return h.initialize=function(r,v){n=r,o=v,c()},h.iterations=function(r){return arguments.length?(f=+r,h):f},h.strength=function(r){return arguments.length?(a=+r,h):a},h.radius=function(r){return arguments.length?(t=typeof r=="function"?r:d(+r),c(),h):t},h}function ot(t){return t.index}function R(t,n){var e=t.get(n);if(!e)throw new Error("node not found: "+n);return e}function pt(t){var n=ot,e=w,o,a=d(30),f,h,i,c,r,v=1;t==null&&(t=[]);function w(u){return 1/Math.min(i[u.source.index],i[u.target.index])}function y(u){for(var g=0,x=t.length;g<v;++g)for(var N=0,p,m,z,j,A,D,M;N<x;++N)p=t[N],m=p.source,z=p.target,j=z.x+z.vx-m.x-m.vx||B(r),A=z.y+z.vy-m.y-m.vy||B(r),D=Math.sqrt(j*j+A*A),D=(D-f[N])/D*u*o[N],j*=D,A*=D,z.vx-=j*(M=c[N]),z.vy-=A*M,m.vx+=j*(M=1-M),m.vy+=A*M}function l(){if(h){var u,g=h.length,x=t.length,N=new Map(h.map((m,z)=>[n(m,z,h),m])),p;for(u=0,i=new Array(g);u<x;++u)p=t[u],p.index=u,typeof p.source!="object"&&(p.source=R(N,p.source)),typeof p.target!="object"&&(p.target=R(N,p.target)),i[p.source.index]=(i[p.source.index]||0)+1,i[p.target.index]=(i[p.target.index]||0)+1;for(u=0,c=new Array(x);u<x;++u)p=t[u],c[u]=i[p.source.index]/(i[p.source.index]+i[p.target.index]);o=new Array(x),_(),f=new Array(x),s()}}function _(){if(h)for(var u=0,g=t.length;u<g;++u)o[u]=+e(t[u],u,t)}function s(){if(h)for(var u=0,g=t.length;u<g;++u)f[u]=+a(t[u],u,t)}return y.initialize=function(u,g){h=u,r=g,l()},y.links=function(u){return arguments.length?(t=u,l(),y):t},y.id=function(u){return arguments.length?(n=u,y):n},y.iterations=function(u){return arguments.length?(v=+u,y):v},y.strength=function(u){return arguments.length?(e=typeof u=="function"?u:d(+u),_(),y):e},y.distance=function(u){return arguments.length?(a=typeof u=="function"?u:d(+u),s(),y):a},y}const at=1664525,ut=1013904223,T=4294967296;function ht(){let t=1;return()=>(t=(at*t+ut)%T)/T}function st(t){return t.x}function lt(t){return t.y}var ct=10,gt=Math.PI*(3-Math.sqrt(5));function _t(t){var n,e=1,o=.001,a=1-Math.pow(o,1/300),f=0,h=.6,i=new Map,c=Y(w),r=F("tick","end"),v=ht();t==null&&(t=[]);function w(){y(),r.call("tick",n),e<o&&(c.stop(),r.call("end",n))}function y(s){var u,g=t.length,x;s===void 0&&(s=1);for(var N=0;N<s;++N)for(e+=(f-e)*a,i.forEach(function(p){p(e)}),u=0;u<g;++u)x=t[u],x.fx==null?x.x+=x.vx*=h:(x.x=x.fx,x.vx=0),x.fy==null?x.y+=x.vy*=h:(x.y=x.fy,x.vy=0);return n}function l(){for(var s=0,u=t.length,g;s<u;++s){if(g=t[s],g.index=s,g.fx!=null&&(g.x=g.fx),g.fy!=null&&(g.y=g.fy),isNaN(g.x)||isNaN(g.y)){var x=ct*Math.sqrt(.5+s),N=s*gt;g.x=x*Math.cos(N),g.y=x*Math.sin(N)}(isNaN(g.vx)||isNaN(g.vy))&&(g.vx=g.vy=0)}}function _(s){return s.initialize&&s.initialize(t,v),s}return l(),n={tick:y,restart:function(){return c.restart(w),n},stop:function(){return c.stop(),n},nodes:function(s){return arguments.length?(t=s,l(),i.forEach(_),n):t},alpha:function(s){return arguments.length?(e=+s,n):e},alphaMin:function(s){return arguments.length?(o=+s,n):o},alphaDecay:function(s){return arguments.length?(a=+s,n):+a},alphaTarget:function(s){return arguments.length?(f=+s,n):f},velocityDecay:function(s){return arguments.length?(h=1-s,n):1-h},randomSource:function(s){return arguments.length?(v=s,i.forEach(_),n):v},force:function(s,u){return arguments.length>1?(u==null?i.delete(s):i.set(s,_(u)),n):i.get(s)},find:function(s,u,g){var x=0,N=t.length,p,m,z,j,A;for(g==null?g=1/0:g*=g,x=0;x<N;++x)j=t[x],p=s-j.x,m=u-j.y,z=p*p+m*m,z<g&&(A=j,g=z);return A},on:function(s,u){return arguments.length>1?(r.on(s,u),n):r.on(s)}}}function wt(){var t,n,e,o,a=d(-30),f,h=1,i=1/0,c=.81;function r(l){var _,s=t.length,u=C(t,st,lt).visitAfter(w);for(o=l,_=0;_<s;++_)n=t[_],u.visit(y)}function v(){if(t){var l,_=t.length,s;for(f=new Array(_),l=0;l<_;++l)s=t[l],f[s.index]=+a(s,l,t)}}function w(l){var _=0,s,u,g=0,x,N,p;if(l.length){for(x=N=p=0;p<4;++p)(s=l[p])&&(u=Math.abs(s.value))&&(_+=s.value,g+=u,x+=u*s.x,N+=u*s.y);l.x=x/g,l.y=N/g}else{s=l,s.x=s.data.x,s.y=s.data.y;do _+=f[s.data.index];while(s=s.next)}l.value=_}function y(l,_,s,u){if(!l.value)return!0;var g=l.x-n.x,x=l.y-n.y,N=u-_,p=g*g+x*x;if(N*N/c<p)return p<i&&(g===0&&(g=B(e),p+=g*g),x===0&&(x=B(e),p+=x*x),p<h&&(p=Math.sqrt(h*p)),n.vx+=g*l.value*o/p,n.vy+=x*l.value*o/p),!0;if(l.length||p>=i)return;(l.data!==n||l.next)&&(g===0&&(g=B(e),p+=g*g),x===0&&(x=B(e),p+=x*x),p<h&&(p=Math.sqrt(h*p)));do l.data!==n&&(N=f[l.data.index]*o/p,n.vx+=g*N,n.vy+=x*N);while(l=l.next)}return r.initialize=function(l,_){t=l,e=_,v()},r.strength=function(l){return arguments.length?(a=typeof l=="function"?l:d(+l),v(),r):a},r.distanceMin=function(l){return arguments.length?(h=l*l,r):Math.sqrt(h)},r.distanceMax=function(l){return arguments.length?(i=l*l,r):Math.sqrt(i)},r.theta=function(l){return arguments.length?(c=l*l,r):Math.sqrt(c)},r}function Nt(t,n,e){var o,a=d(.1),f,h;typeof t!="function"&&(t=d(+t)),n==null&&(n=0),e==null&&(e=0);function i(r){for(var v=0,w=o.length;v<w;++v){var y=o[v],l=y.x-n||1e-6,_=y.y-e||1e-6,s=Math.sqrt(l*l+_*_),u=(h[v]-s)*f[v]*r/s;y.vx+=l*u,y.vy+=_*u}}function c(){if(o){var r,v=o.length;for(f=new Array(v),h=new Array(v),r=0;r<v;++r)h[r]=+t(o[r],r,o),f[r]=isNaN(h[r])?0:+a(o[r],r,o)}}return i.initialize=function(r){o=r,c()},i.strength=function(r){return arguments.length?(a=typeof r=="function"?r:d(+r),c(),i):a},i.radius=function(r){return arguments.length?(t=typeof r=="function"?r:d(+r),c(),i):t},i.x=function(r){return arguments.length?(n=+r,i):n},i.y=function(r){return arguments.length?(e=+r,i):e},i}function mt(t){var n=d(.1),e,o,a;typeof t!="function"&&(t=d(t==null?0:+t));function f(i){for(var c=0,r=e.length,v;c<r;++c)v=e[c],v.vx+=(a[c]-v.x)*o[c]*i}function h(){if(e){var i,c=e.length;for(o=new Array(c),a=new Array(c),i=0;i<c;++i)o[i]=isNaN(a[i]=+t(e[i],i,e))?0:+n(e[i],i,e)}}return f.initialize=function(i){e=i,h()},f.strength=function(i){return arguments.length?(n=typeof i=="function"?i:d(+i),h(),f):n},f.x=function(i){return arguments.length?(t=typeof i=="function"?i:d(+i),h(),f):t},f}function dt(t){var n=d(.1),e,o,a;typeof t!="function"&&(t=d(t==null?0:+t));function f(i){for(var c=0,r=e.length,v;c<r;++c)v=e[c],v.vy+=(a[c]-v.y)*o[c]*i}function h(){if(e){var i,c=e.length;for(o=new Array(c),a=new Array(c),i=0;i<c;++i)o[i]=isNaN(a[i]=+t(e[i],i,e))?0:+n(e[i],i,e)}}return f.initialize=function(i){e=i,h()},f.strength=function(i){return arguments.length?(n=typeof i=="function"?i:d(+i),h(),f):n},f.y=function(i){return arguments.length?(t=typeof i=="function"?i:d(+i),h(),f):t},f}export{yt as forceCenter,xt as forceCollide,pt as forceLink,wt as forceManyBody,Nt as forceRadial,_t as forceSimulation,mt as forceX,dt as forceY};
