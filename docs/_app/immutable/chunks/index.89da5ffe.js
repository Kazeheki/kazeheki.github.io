function $(){}const _t=t=>t;function ht(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function U(){return Object.create(null)}function A(t){t.forEach(Z)}function tt(t){return typeof t=="function"}function Jt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let R;function Kt(t,e){return R||(R=document.createElement("a")),R.href=e,t===R.href}function dt(t){return Object.keys(t).length===0}function mt(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Qt(t,e,n){t.$$.on_destroy.push(mt(e,n))}function Ut(t,e,n,i){if(t){const s=et(t,e,n,i);return t[0](s)}}function et(t,e,n,i){return t[1]&&i?ht(n.ctx.slice(),t[1](i(e))):n.ctx}function Wt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const l=[],r=Math.max(e.dirty.length,s.length);for(let u=0;u<r;u+=1)l[u]=e.dirty[u]|s[u];return l}return e.dirty|s}return e.dirty}function Vt(t,e,n,i,s,l){if(s){const r=et(e,n,i,l);t.p(r,s)}}function Xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const nt=typeof window<"u";let pt=nt?()=>window.performance.now():()=>Date.now(),G=nt?t=>requestAnimationFrame(t):$;const v=new Set;function it(t){v.forEach(e=>{e.c(t)||(v.delete(e),e.f())}),v.size!==0&&G(it)}function yt(t){let e;return v.size===0&&G(it),{promise:new Promise(n=>{v.add(e={c:t,f:n})}),abort(){v.delete(e)}}}let P=!1;function gt(){P=!0}function xt(){P=!1}function wt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function $t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let o=0;o<e.length;o++){const c=e[o].claim_order,f=(s>0&&e[n[s]].claim_order<=c?s+1:wt(1,s,_=>e[n[_]].claim_order,c))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,s=Math.max(a,s)}const l=[],r=[];let u=e.length-1;for(let o=n[s]+1;o!=0;o=i[o-1]){for(l.push(e[o-1]);u>=o;u--)r.push(e[u]);u--}for(;u>=0;u--)r.push(e[u]);l.reverse(),r.sort((o,c)=>o.claim_order-c.claim_order);for(let o=0,c=0;o<r.length;o++){for(;c<l.length&&r[o].claim_order>=l[c].claim_order;)c++;const f=c<l.length?l[c]:null;t.insertBefore(r[o],f)}}function bt(t,e){t.appendChild(e)}function st(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=I("style");return Nt(st(t),e),e.sheet}function Nt(t,e){return bt(t.head||t,e),e.sheet}function vt(t,e){if(P){for($t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Tt(t,e,n){t.insertBefore(e,n||null)}function At(t,e,n){P&&!n?vt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function k(t){t.parentNode&&t.parentNode.removeChild(t)}function I(t){return document.createElement(t)}function St(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function J(t){return document.createTextNode(t)}function Yt(){return J(" ")}function Zt(){return J("")}function te(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ee(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Mt(t){return Array.from(t.childNodes)}function rt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ot(t,e,n,i,s=!1){rt(t);const l=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const u=t[r];if(e(u)){const o=n(u);return o===void 0?t.splice(r,1):t[r]=o,s||(t.claim_info.last_index=r),u}}for(let r=t.claim_info.last_index-1;r>=0;r--){const u=t[r];if(e(u)){const o=n(u);return o===void 0?t.splice(r,1):t[r]=o,s?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,u}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function Ct(t,e,n,i){return ot(t,s=>s.nodeName===e,s=>{const l=[];for(let r=0;r<s.attributes.length;r++){const u=s.attributes[r];n[u.name]||l.push(u.name)}l.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ne(t,e,n){return Ct(t,e,n,I)}function kt(t,e){return ot(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>J(e),!0)}function ie(t){return kt(t," ")}function W(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return t.length}function se(t,e){const n=W(t,"HTML_TAG_START",0),i=W(t,"HTML_TAG_END",n);if(n===i)return new V(void 0,e);rt(t);const s=t.splice(n,i-n+1);k(s[0]),k(s[s.length-1]);const l=s.slice(1,s.length-1);for(const r of l)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new V(l,e)}function re(t,e){e=""+e,t.data!==e&&(t.data=e)}function oe(t,e){t.value=e??""}function le(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ce(t,e){const n=[];let i=0;for(const s of e.childNodes)if(s.nodeType===8){const l=s.textContent.trim();l===`HEAD_${t}_END`?(i-=1,n.push(s)):l===`HEAD_${t}_START`&&(i+=1,n.push(s))}else i>0&&n.push(s);return n}class Ht{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=St(n.nodeName):this.e=I(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)Tt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(k)}}class V extends Ht{constructor(e,n=!1){super(n),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)At(this.t,this.n[n],e)}}function ue(t,e){return new t(e)}const D=new Map;let B=0;function Lt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Rt(t,e){const n={stylesheet:Et(e),rules:{}};return D.set(t,n),n}function jt(t,e,n,i,s,l,r,u=0){const o=16.666/i;let c=`{
`;for(let p=0;p<=1;p+=o){const y=e+(n-e)*l(p);c+=p*100+`%{${r(y,1-y)}}
`}const f=c+`100% {${r(n,1-n)}}
}`,a=`__svelte_${Lt(f)}_${u}`,_=st(t),{stylesheet:h,rules:m}=D.get(_)||Rt(_,t);m[a]||(m[a]=!0,h.insertRule(`@keyframes ${a} ${f}`,h.cssRules.length));const w=t.style.animation||"";return t.style.animation=`${w?`${w}, `:""}${a} ${i}ms linear ${s}ms 1 both`,B+=1,a}function Dt(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),B-=s,B||Bt())}function Bt(){G(()=>{B||(D.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&k(e)}),D.clear())})}function ae(t,e,n,i){if(!e)return $;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return $;const{delay:l=0,duration:r=300,easing:u=_t,start:o=pt()+l,end:c=o+r,tick:f=$,css:a}=n(t,{from:e,to:s},i);let _=!0,h=!1,m;function w(){a&&(m=jt(t,0,1,r,l,u,a)),l||(h=!0)}function p(){a&&Dt(t,m),_=!1}return yt(y=>{if(!h&&y>=o&&(h=!0),h&&y>=c&&(f(1,0),p()),!_)return!1;if(h){const S=y-o,M=0+1*u(S/r);f(M,1-M)}return!0}),w(),f(0,1),p}function fe(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Pt(t,s)}}function Pt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let H;function C(t){H=t}function lt(){if(!H)throw new Error("Function called outside component initialization");return H}function _e(t){lt().$$.on_mount.push(t)}function he(t){lt().$$.after_update.push(t)}const N=[],X=[];let T=[];const Y=[],ct=Promise.resolve();let z=!1;function ut(){z||(z=!0,ct.then(at))}function de(){return ut(),ct}function F(t){T.push(t)}const q=new Set;let E=0;function at(){if(E!==0)return;const t=H;do{try{for(;E<N.length;){const e=N[E];E++,C(e),Ot(e.$$)}}catch(e){throw N.length=0,E=0,e}for(C(null),N.length=0,E=0;X.length;)X.pop()();for(let e=0;e<T.length;e+=1){const n=T[e];q.has(n)||(q.add(n),n())}T.length=0}while(N.length);for(;Y.length;)Y.pop()();z=!1,q.clear(),C(t)}function Ot(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}function qt(t){const e=[],n=[];T.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),T=e}const j=new Set;let b;function me(){b={r:0,c:[],p:b}}function pe(){b.r||A(b.c),b=b.p}function ft(t,e){t&&t.i&&(j.delete(t),t.i(e))}function ye(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),b.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function zt(t,e){t.d(1),e.delete(t.key)}function ge(t,e){t.f(),zt(t,e)}function xe(t,e,n,i,s,l,r,u,o,c,f,a){let _=t.length,h=l.length,m=_;const w={};for(;m--;)w[t[m].key]=m;const p=[],y=new Map,S=new Map,M=[];for(m=h;m--;){const d=a(s,l,m),g=n(d);let x=r.get(g);x?i&&M.push(()=>x.p(d,e)):(x=c(g,d),x.c()),y.set(g,p[m]=x),g in w&&S.set(g,Math.abs(m-w[g]))}const K=new Set,Q=new Set;function O(d){ft(d,1),d.m(u,f),r.set(d.key,d),f=d.first,h--}for(;_&&h;){const d=p[h-1],g=t[_-1],x=d.key,L=g.key;d===g?(f=d.first,_--,h--):y.has(L)?!r.has(x)||K.has(x)?O(d):Q.has(L)?_--:S.get(x)>S.get(L)?(Q.add(x),O(d)):(K.add(L),_--):(o(g,r),_--)}for(;_--;){const d=t[_];y.has(d.key)||o(d,r)}for(;h;)O(p[h-1]);return A(M),p}function we(t){t&&t.c()}function $e(t,e){t&&t.l(e)}function Ft(t,e,n,i){const{fragment:s,after_update:l}=t.$$;s&&s.m(e,n),i||F(()=>{const r=t.$$.on_mount.map(Z).filter(tt);t.$$.on_destroy?t.$$.on_destroy.push(...r):A(r),t.$$.on_mount=[]}),l.forEach(F)}function Gt(t,e){const n=t.$$;n.fragment!==null&&(qt(n.after_update),A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function It(t,e){t.$$.dirty[0]===-1&&(N.push(t),ut(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function be(t,e,n,i,s,l,r,u=[-1]){const o=H;C(t);const c=t.$$={fragment:null,ctx:[],props:l,update:$,not_equal:s,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:U(),dirty:u,skip_bound:!1,root:e.target||o.$$.root};r&&r(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,_,...h)=>{const m=h.length?h[0]:_;return c.ctx&&s(c.ctx[a],c.ctx[a]=m)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](m),f&&It(t,a)),_}):[],c.update(),f=!0,A(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){gt();const a=Mt(e.target);c.fragment&&c.fragment.l(a),a.forEach(k)}else c.fragment&&c.fragment.c();e.intro&&ft(t.$$.fragment),Ft(t,e.target,e.anchor,e.customElement),xt(),at()}C(o)}class Ee{$destroy(){Gt(this,1),this.$destroy=$}$on(e,n){if(!tt(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ft as A,Gt as B,Ut as C,Kt as D,vt as E,Vt as F,Xt as G,Wt as H,ce as I,$ as J,Qt as K,V as L,se as M,tt as N,oe as O,te as P,xe as Q,fe as R,Ee as S,ae as T,ge as U,Yt as a,At as b,ie as c,ye as d,Zt as e,pe as f,ft as g,k as h,be as i,he as j,I as k,ne as l,Mt as m,ee as n,_e as o,le as p,J as q,kt as r,Jt as s,de as t,re as u,me as v,X as w,ue as x,we as y,$e as z};
