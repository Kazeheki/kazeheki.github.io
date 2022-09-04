import{S as Y,i as F,s as J,t as u,k as K,e as b,J as j,g as d,d as c,n as q,c as v,a as k,b as y,F as r,f as E,C,h as T}from"../chunks/index-045e9507.js";function L(_){let e,i,s,m,t,o,a,l,h,g,z,B,I,p,R,D,V,A,w=_[0].message+"",S;return{c(){e=b("div"),i=u("There seems to be something wrong, sorry."),s=b("br"),m=u(`
      If this error consists, please open an issue in the
      `),t=b("a"),o=u("GitHub\xA0repository"),a=u(`
      of this page and include the error-message below.`),l=b("br"),h=u(`
      You can try and return to the `),g=b("a"),z=u("home\xA0page"),B=u("."),I=K(),p=b("div"),R=u("Status: "),D=u(_[1]),V=b("br"),A=K(),S=u(w),this.h()},l(f){e=v(f,"DIV",{class:!0});var n=k(e);i=d(n,"There seems to be something wrong, sorry."),s=v(n,"BR",{}),m=d(n,`
      If this error consists, please open an issue in the
      `),t=v(n,"A",{href:!0,target:!0});var G=k(t);o=d(G,"GitHub\xA0repository"),G.forEach(c),a=d(n,`
      of this page and include the error-message below.`),l=v(n,"BR",{}),h=d(n,`
      You can try and return to the `),g=v(n,"A",{href:!0});var H=k(g);z=d(H,"home\xA0page"),H.forEach(c),B=d(n,"."),n.forEach(c),I=q(f),p=v(f,"DIV",{class:!0});var x=k(p);R=d(x,"Status: "),D=d(x,_[1]),V=v(x,"BR",{}),A=q(x),S=d(x,w),x.forEach(c),this.h()},h(){y(t,"href","https://github.com/Kazeheki/kazeheki.github.io/issues"),y(t,"target","_blank"),y(g,"href","/"),y(e,"class","font-bold text-xl tracking-wide leading-loose"),y(p,"class","mt-7 px-5 py-3 rounded-xl border border-primary-400 font-mono text-red-900 text-sm")},m(f,n){E(f,e,n),r(e,i),r(e,s),r(e,m),r(e,t),r(t,o),r(e,a),r(e,l),r(e,h),r(e,g),r(g,z),r(e,B),E(f,I,n),E(f,p,n),r(p,R),r(p,D),r(p,V),r(p,A),r(p,S)},p(f,n){n&2&&T(D,f[1]),n&1&&w!==(w=f[0].message+"")&&T(S,w)},d(f){f&&c(e),f&&c(I),f&&c(p)}}}function M(_){let e,i,s,m,t,o,a;return{c(){e=b("div"),i=u("Sorry, I couldn't find that page."),s=b("br"),m=u(`
      Do you want to return to the `),t=b("a"),o=u("home\xA0page"),a=u("?"),this.h()},l(l){e=v(l,"DIV",{class:!0});var h=k(e);i=d(h,"Sorry, I couldn't find that page."),s=v(h,"BR",{}),m=d(h,`
      Do you want to return to the `),t=v(h,"A",{href:!0});var g=k(t);o=d(g,"home\xA0page"),g.forEach(c),a=d(h,"?"),h.forEach(c),this.h()},h(){y(t,"href","/"),y(e,"class","font-bold text-xl tracking-wide leading-loose")},m(l,h){E(l,e,h),r(e,i),r(e,s),r(e,m),r(e,t),r(t,o),r(e,a)},p:C,d(l){l&&c(e)}}}function N(_){let e,i,s;function m(a,l){return a[1]===404?M:L}let t=m(_),o=t(_);return{c(){e=u("Kazeheki - Error"),i=K(),s=b("div"),o.c(),this.h()},l(a){const l=j('[data-svelte="svelte-1kau2cl"]',document.head);e=d(l,"Kazeheki - Error"),l.forEach(c),i=q(a),s=v(a,"DIV",{class:!0});var h=k(s);o.l(h),h.forEach(c),this.h()},h(){y(s,"class","max-w-prose px-5 md:px-0")},m(a,l){r(document.head,e),E(a,i,l),E(a,s,l),o.m(s,null)},p(a,[l]){t===(t=m(a))&&o?o.p(a,l):(o.d(1),o=t(a),o&&(o.c(),o.m(s,null)))},i:C,o:C,d(a){c(e),a&&c(i),a&&c(s),o.d()}}}function Q({error:_,status:e}){return{props:{error:_,status:e}}}function O(_,e,i){let{error:s}=e,{status:m}=e;return _.$$set=t=>{"error"in t&&i(0,s=t.error),"status"in t&&i(1,m=t.status)},[s,m]}class U extends Y{constructor(e){super(),F(this,e,O,N,J,{error:0,status:1})}}export{U as default,Q as load};
