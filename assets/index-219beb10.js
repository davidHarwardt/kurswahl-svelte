(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function $(){}function ve(t){return t()}function oe(){return Object.create(null)}function F(t){t.forEach(ve)}function ke(t){return typeof t=="function"}function N(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let Z;function ie(t,e){return Z||(Z=document.createElement("a")),Z.href=e,t===Z.href}function Ce(t){return Object.keys(t).length===0}function Ee(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Pe(t,e,n){t.$$.on_destroy.push(Ee(e,n))}function g(t,e){t.appendChild(e)}function x(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function Q(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function p(t){return document.createElement(t)}function A(t){return document.createTextNode(t)}function E(){return A(" ")}function Se(){return A("")}function D(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Ae(t){return function(e){e.target===this&&t.call(this,e)}}function h(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Le(t){return Array.from(t.childNodes)}function U(t,e){e=""+e,t.data!==e&&(t.data=e)}function z(t,e,n){t.classList[n?"add":"remove"](e)}let se;function R(t){se=t}const q=[],Y=[];let I=[];const ue=[],Fe=Promise.resolve();let ee=!1;function Ne(){ee||(ee=!0,Fe.then($e))}function te(t){I.push(t)}const X=new Set;let j=0;function $e(){if(j!==0)return;const t=se;do{try{for(;j<q.length;){const e=q[j];j++,R(e),Oe(e.$$)}}catch(e){throw q.length=0,j=0,e}for(R(null),q.length=0,j=0;Y.length;)Y.pop()();for(let e=0;e<I.length;e+=1){const n=I[e];X.has(n)||(X.add(n),n())}I.length=0}while(q.length);for(;ue.length;)ue.pop()();ee=!1,X.clear(),R(t)}function Oe(t){if(t.fragment!==null){t.update(),F(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(te)}}function ze(t){const e=[],n=[];I.forEach(s=>t.indexOf(s)===-1?e.push(s):n.push(s)),n.forEach(s=>s()),I=e}const J=new Set;let L;function we(){L={r:0,c:[],p:L}}function ye(){L.r||F(L.c),L=L.p}function C(t,e){t&&t.i&&(J.delete(t),t.i(e))}function S(t,e,n,s){if(t&&t.o){if(J.has(t))return;J.add(t),L.c.push(()=>{J.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function W(t){t&&t.c()}function M(t,e,n,s){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),s||te(()=>{const a=t.$$.on_mount.map(ve).filter(ke);t.$$.on_destroy?t.$$.on_destroy.push(...a):F(a),t.$$.on_mount=[]}),o.forEach(te)}function K(t,e){const n=t.$$;n.fragment!==null&&(ze(n.after_update),F(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function je(t,e){t.$$.dirty[0]===-1&&(q.push(t),Ne(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(t,e,n,s,r,o,a,f=[-1]){const c=se;R(t);const l=t.$$={fragment:null,ctx:[],props:o,update:$,not_equal:r,bound:oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:oe(),dirty:f,skip_bound:!1,root:e.target||c.$$.root};a&&a(l.root);let d=!1;if(l.ctx=n?n(t,e.props||{},(u,m,...i)=>{const b=i.length?i[0]:m;return l.ctx&&r(l.ctx[u],l.ctx[u]=b)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](b),d&&je(t,u)),m}):[],l.update(),d=!0,F(l.before_update),l.fragment=s?s(l.ctx):!1,e.target){if(e.hydrate){const u=Le(e.target);l.fragment&&l.fragment.l(u),u.forEach(w)}else l.fragment&&l.fragment.c();e.intro&&C(t.$$.fragment),M(t,e.target,e.anchor,e.customElement),$e()}R(c)}class T{$destroy(){K(this,1),this.$destroy=$}$on(e,n){if(!ke(n))return $;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!Ce(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Be(t,e){const n=new Array(t.num_semesters??e).fill(!1);return{course:t,selected:n}}function qe(t,e){return{name:t.name,id:t.id,courses:t.courses.map(n=>Be(n,e)),note:t.note,max_usable:t.max_usable}}function De(t){return{num_semesters:t.num_semesters,groups:t.groups.map(e=>qe(e,t.num_semesters))}}function xe(t,e,n){let s=t.course.offset??0;s<0&&(s=e+s);let r=n-s;return r<0||r>=t.selected.length?void 0:r}function Ie(t,e){return new Array(e).fill(!1).map((s,r)=>{let o=xe(t,e,r);return o!==void 0?t.selected[o]?"selected":"non-selected":"empty"})}function Me(t){return t.selected.reduce((e,n)=>e&&n)}const B=[];function Ke(t,e=$){let n;const s=new Set;function r(f){if(N(t,f)&&(t=f,n)){const c=!B.length;for(const l of s)l[1](),B.push(l,t);if(c){for(let l=0;l<B.length;l+=2)B[l][0](B[l+1]);B.length=0}}}function o(f){r(f(t))}function a(f,c=$){const l=[f,c];return s.add(l),s.size===1&&(n=e(r)||$),f(t),()=>{s.delete(l),s.size===0&&n&&(n(),n=null)}}return{set:r,update:o,subscribe:a}}const ne=Ke(void 0);function ce(t,e,n){const s=t.slice();s[6]=e[n],s[9]=n;const r=xe(s[0],s[1],s[9]);return s[7]=r,s}function ae(t){let e,n,s;function r(...o){return t[5](t[7],...o)}return{c(){e=p("button"),e.textContent=`__
            `,h(e,"class","semester w-full rounded p-2 cursor-pointer text-center text-transparent"),z(e,"bg-slate-500",t[6]==="non-selected"),z(e,"bg-transparent",t[6]==="empty"),z(e,"bg-red-500",t[6]==="selected")},m(o,a){x(o,e,a),n||(s=D(e,"click",r),n=!0)},p(o,a){t=o,a&4&&z(e,"bg-slate-500",t[6]==="non-selected"),a&4&&z(e,"bg-transparent",t[6]==="empty"),a&4&&z(e,"bg-red-500",t[6]==="selected")},d(o){o&&w(e),n=!1,s()}}}function Ge(t){let e,n,s=t[0].course.name+"",r,o,a,f,c,l,d,u,m,i,b,_,P,V,re,O=t[2],y=[];for(let v=0;v<O.length;v+=1)y[v]=ae(ce(t,O,v));return{c(){e=p("div"),n=p("button"),r=A(s),o=E(),a=p("button"),a.textContent="ⓘ",f=E(),c=p("select"),l=p("option"),d=p("option"),d.textContent="1. LF",u=p("option"),u.textContent="2. LF",m=p("option"),m.textContent="3. PfF",i=p("option"),i.textContent="4. PfF",b=p("option"),b.textContent="5. PK",_=E(),P=p("div");for(let v=0;v<y.length;v+=1)y[v].c();h(n,"class","course-name bg-slate-700 rounded p-2 cursor-pointer w-20 grow"),h(a,"class","w-12 p-2 bg-slate-700 rounded"),l.__value="empty",l.value=l.__value,d.__value="lf-1",d.value=d.__value,u.__value="lf-2",u.value=u.__value,m.__value="prf-3",m.value=m.__value,i.__value="prf-4",i.value=i.__value,b.__value="pk-5",b.value=b.__value,h(c,"name","prf"),h(c,"class","prf-selector p-2 grow-0 w-20 text-s text-inherit bg-slate-700 rounded"),h(P,"class","semesters-container flex justify-stretch gap-1 grow-[5]"),h(e,"class","course flex flex-wrap gap-1")},m(v,H){x(v,e,H),g(e,n),g(n,r),g(e,o),g(e,a),g(e,f),g(e,c),g(c,l),g(c,d),g(c,u),g(c,m),g(c,i),g(c,b),g(e,_),g(e,P);for(let k=0;k<y.length;k+=1)y[k]&&y[k].m(P,null);V||(re=[D(n,"click",t[3]),D(a,"click",t[4])],V=!0)},p(v,[H]){if(H&1&&s!==(s=v[0].course.name+"")&&U(r,s),H&7){O=v[2];let k;for(k=0;k<O.length;k+=1){const le=ce(v,O,k);y[k]?y[k].p(le,H):(y[k]=ae(le),y[k].c(),y[k].m(P,null))}for(;k<y.length;k+=1)y[k].d(1);y.length=O.length}},i:$,o:$,d(v){v&&w(e),Q(y,v),V=!1,F(re)}}}function Te(t,e,n){let s,{course:r}=e,{num_semesters:o}=e;const a=l=>{let d=Me(r);for(let u=0;u<r.selected.length;u++)n(0,r.selected[u]=!d,r)},f=l=>ne.set(r.course),c=(l,d)=>{n(0,r.selected[l]=!r.selected[l],r),console.log(l)};return t.$$set=l=>{"course"in l&&n(0,r=l.course),"num_semesters"in l&&n(1,o=l.num_semesters)},t.$$.update=()=>{t.$$.dirty&3&&n(2,s=Ie(r,o))},[r,o,s,a,f,c]}class He extends T{constructor(e){super(),G(this,e,Te,Ge,N,{course:0,num_semesters:1})}}function fe(t,e,n){const s=t.slice();return s[2]=e[n],s}function de(t){let e,n;return e=new He({props:{course:t[2],num_semesters:t[1]}}),{c(){W(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p(s,r){const o={};r&1&&(o.course=s[2]),r&2&&(o.num_semesters=s[1]),e.$set(o)},i(s){n||(C(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){K(e,s)}}}function Re(t){let e,n,s=t[0].name+"",r,o,a,f,c=t[0].courses,l=[];for(let u=0;u<c.length;u+=1)l[u]=de(fe(t,c,u));const d=u=>S(l[u],1,1,()=>{l[u]=null});return{c(){e=p("div"),n=p("div"),r=A(s),o=E(),a=p("div");for(let u=0;u<l.length;u+=1)l[u].c();h(n,"class","group-name text-xl font-bold"),h(a,"class","courses border-2 border-slate-500 rounded-lg p-1 m-1 grid gap-1"),h(e,"class","course-group select-none")},m(u,m){x(u,e,m),g(e,n),g(n,r),g(e,o),g(e,a);for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(a,null);f=!0},p(u,[m]){if((!f||m&1)&&s!==(s=u[0].name+"")&&U(r,s),m&3){c=u[0].courses;let i;for(i=0;i<c.length;i+=1){const b=fe(u,c,i);l[i]?(l[i].p(b,m),C(l[i],1)):(l[i]=de(b),l[i].c(),C(l[i],1),l[i].m(a,null))}for(we(),i=c.length;i<l.length;i+=1)d(i);ye()}},i(u){if(!f){for(let m=0;m<c.length;m+=1)C(l[m]);f=!0}},o(u){l=l.filter(Boolean);for(let m=0;m<l.length;m+=1)S(l[m]);f=!1},d(u){u&&w(e),Q(l,u)}}}function We(t,e,n){let{group:s}=e,{num_semesters:r}=e;return t.$$set=o=>{"group"in o&&n(0,s=o.group),"num_semesters"in o&&n(1,r=o.num_semesters)},[s,r]}class Ze extends T{constructor(e){super(),G(this,e,We,Re,N,{group:0,num_semesters:1})}}function me(t,e,n){const s=t.slice();return s[1]=e[n],s[3]=n,s}function _e(t){let e,n=t[3]+1+"",s,r;return{c(){e=p("div"),s=A(n),r=A("."),h(e,"class","course-semester w-full p-2 text-center")},m(o,a){x(o,e,a),g(e,s),g(e,r)},p:$,d(o){o&&w(e)}}}function Je(t){let e,n,s,r,o,a,f,c,l,d,u={length:t[0]},m=[];for(let i=0;i<u.length;i+=1)m[i]=_e(me(t,u,i));return{c(){e=p("div"),n=p("div"),s=p("div"),r=p("div"),r.textContent="Kurs",o=E(),a=p("div"),f=E(),c=p("div"),c.textContent="Pf",l=E(),d=p("div");for(let i=0;i<m.length;i+=1)m[i].c();h(r,"class","course-name p-2 grow w-20"),h(a,"class","course-exams p-2 w-12 text-transparent"),h(c,"class","course-exams p-2 grow-0 w-20"),h(d,"class","flex justify-stretch gap-1 grow-[5]"),h(s,"class","course flex flex-wrap gap-1"),h(n,"class","bg-slate-800 rounded-lg p-1 m-1"),h(e,"class","p-2 bg-gradient-to-b from-slate-900 via-slate-900 to-transparent select-none")},m(i,b){x(i,e,b),g(e,n),g(n,s),g(s,r),g(s,o),g(s,a),g(s,f),g(s,c),g(s,l),g(s,d);for(let _=0;_<m.length;_+=1)m[_]&&m[_].m(d,null)},p(i,[b]){if(b&1){u={length:i[0]};let _;for(_=0;_<u.length;_+=1){const P=me(i,u,_);m[_]?m[_].p(P,b):(m[_]=_e(P),m[_].c(),m[_].m(d,null))}for(;_<m.length;_+=1)m[_].d(1);m.length=u.length}},i:$,o:$,d(i){i&&w(e),Q(m,i)}}}function Qe(t,e,n){let{num_semesters:s}=e;return t.$$set=r=>{"num_semesters"in r&&n(0,s=r.num_semesters)},[s]}class Ue extends T{constructor(e){super(),G(this,e,Qe,Je,N,{num_semesters:0})}}function ge(t){let e,n=t[1].name+"",s,r,o;function a(l,d){return l[1].descr?Xe:Ve}let f=a(t),c=f(t);return{c(){e=p("h1"),s=A(n),r=E(),c.c(),o=Se(),h(e,"class","heading text-4xl font-bold")},m(l,d){x(l,e,d),g(e,s),x(l,r,d),c.m(l,d),x(l,o,d)},p(l,d){d&2&&n!==(n=l[1].name+"")&&U(s,n),f===(f=a(l))&&c?c.p(l,d):(c.d(1),c=f(l),c&&(c.c(),c.m(o.parentNode,o)))},d(l){l&&w(e),l&&w(r),c.d(l),l&&w(o)}}}function Ve(t){let e;return{c(){e=p("div"),e.textContent="no info"},m(n,s){x(n,e,s)},p:$,d(n){n&&w(e)}}}function Xe(t){let e,n,s=t[1].descr.info_text+"",r,o=t[1].descr.image_url&&pe(t);return{c(){o&&o.c(),e=E(),n=p("div"),r=A(s),h(n,"class","course-info")},m(a,f){o&&o.m(a,f),x(a,e,f),x(a,n,f),g(n,r)},p(a,f){a[1].descr.image_url?o?o.p(a,f):(o=pe(a),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null),f&2&&s!==(s=a[1].descr.info_text+"")&&U(r,s)},d(a){o&&o.d(a),a&&w(e),a&&w(n)}}}function pe(t){let e,n,s;return{c(){e=p("img"),ie(e.src,n=t[1].descr.image_url)||h(e,"src",n),h(e,"alt",s=`course-${t[1].id}`)},m(r,o){x(r,e,o)},p(r,o){o&2&&!ie(e.src,n=r[1].descr.image_url)&&h(e,"src",n),o&2&&s!==(s=`course-${r[1].id}`)&&h(e,"alt",s)},d(r){r&&w(e)}}}function Ye(t){let e,n,s,r,o,a,f,c=t[1]&&ge(t);return{c(){e=p("dialog"),n=p("div"),s=p("div"),c&&c.c(),r=E(),o=p("button"),o.textContent="✕",h(s,"class","grow"),h(o,"class","close-btn bg-slate-800 m-2 w-8 h-8 rounded grow-0"),h(n,"class","course-info rounded bg-slate-700 p-4 h-full relative flex"),h(e,"class","text-inherit bg-transparent backdrop:bg-opacity-10 mr-0 p-0 pr-4 bg-gradient-to-l to-transparent from-slate-900 pl-20 lg:w-[30rem] md:w-1/2 h-screen top-0 fixed svelte-gemc3f")},m(l,d){x(l,e,d),g(e,n),g(n,s),c&&c.m(s,null),g(n,r),g(n,o),t[3](e),a||(f=[D(o,"click",t[2]),D(e,"close",t[4]),D(e,"click",Ae(t[5]))],a=!0)},p(l,[d]){l[1]?c?c.p(l,d):(c=ge(l),c.c(),c.m(s,null)):c&&(c.d(1),c=null)},i:$,o:$,d(l){l&&w(e),c&&c.d(),t[3](null),a=!1,F(f)}}}function et(t,e,n){let s;Pe(t,ne,l=>n(1,s=l));let r;const o=l=>r.close();function a(l){Y[l?"unshift":"push"](()=>{r=l,n(0,r)})}const f=l=>ne.set(void 0),c=l=>r.close();return t.$$.update=()=>{t.$$.dirty&3&&r&&s&&r.showModal()},[r,s,o,a,f,c]}class tt extends T{constructor(e){super(),G(this,e,et,Ye,N,{})}}function he(t,e,n){const s=t.slice();return s[2]=e[n],s}function be(t){let e,n;return e=new Ze({props:{group:t[2],num_semesters:t[0].num_semesters}}),{c(){W(e.$$.fragment)},m(s,r){M(e,s,r),n=!0},p:$,i(s){n||(C(e.$$.fragment,s),n=!0)},o(s){S(e.$$.fragment,s),n=!1},d(s){K(e,s)}}}function nt(t){let e,n,s,r,o,a,f,c,l;n=new tt({}),a=new Ue({props:{num_semesters:t[0].num_semesters}});let d=t[1].groups,u=[];for(let i=0;i<d.length;i+=1)u[i]=be(he(t,d,i));const m=i=>S(u[i],1,1,()=>{u[i]=null});return{c(){e=p("div"),W(n.$$.fragment),s=E(),r=p("div"),o=p("div"),W(a.$$.fragment),f=E(),c=p("div");for(let i=0;i<u.length;i+=1)u[i].c();h(o,"class","sticky top-0"),h(c,"class","course-groups"),h(r,"class","p-10"),h(e,"class","course-picker bg-gray-900 w-full min-h-screen text-slate-100 ")},m(i,b){x(i,e,b),M(n,e,null),g(e,s),g(e,r),g(r,o),M(a,o,null),g(r,f),g(r,c);for(let _=0;_<u.length;_+=1)u[_]&&u[_].m(c,null);l=!0},p(i,[b]){if(b&3){d=i[1].groups;let _;for(_=0;_<d.length;_+=1){const P=he(i,d,_);u[_]?(u[_].p(P,b),C(u[_],1)):(u[_]=be(P),u[_].c(),C(u[_],1),u[_].m(c,null))}for(we(),_=d.length;_<u.length;_+=1)m(_);ye()}},i(i){if(!l){C(n.$$.fragment,i),C(a.$$.fragment,i);for(let b=0;b<d.length;b+=1)C(u[b]);l=!0}},o(i){S(n.$$.fragment,i),S(a.$$.fragment,i),u=u.filter(Boolean);for(let b=0;b<u.length;b+=1)S(u[b]);l=!1},d(i){i&&w(e),K(n),K(a),Q(u,i)}}}function st(t){let e={num_semesters:4,groups:[{name:"1. AF",id:"af-1",courses:[{name:"Deutsch",id:"de",tags:["lk"]},{name:"Englisch",id:"en",tags:["lk"]},{name:"Franzoesisch",id:"frz",tags:["lk"]},{name:"Latein",id:"lat",tags:[]},{name:"Russisch",id:"rus",tags:[]},{name:"Spanisch",id:"sp",tags:[]},{name:"Musik",id:"mus",tags:["lk"]},{name:"Kunst",id:"kun",tags:["lk"]},{name:"Darstellendes Spiel",id:"ds",tags:["lk"]}]},{name:"2. AF",id:"af-2",courses:[{name:"Politikwissenschaft",id:"pw",tags:["lk"]},{name:"Geschichte",id:"ges",tags:["lk"]},{name:"Geographie",id:"geo",tags:["lk"]},{name:"Phylosophie",id:"philo",tags:[]}]},{name:"3. AF",id:"af-3",courses:[{name:"Mathematik",id:"mat",tags:["lk"]},{name:"Physik",id:"phy",tags:["lk"]},{name:"Chemie",id:"chem",tags:["lk"]},{name:"Biologie",id:"bio",tags:["lk"]},{name:"Informatik",id:"inf",tags:[]}]},{name:"Sport",id:"spo",courses:[{name:"Sport",id:"spo"},{name:"Sport Theorie",id:"spo-th",offset:2},{name:"Ski und Snowboard",id:"ski",offset:1,num_semesters:1}]},{name:"Ensemblemusik",id:"ensemble",courses:[{name:"Chor",id:"chor"},{name:"Blaeser",id:"blaeser"}]},{name:"Zusatzkurse",id:"zusatz",courses:[{name:"CCC",id:"ccc"},{name:"Debating",id:"debating"},{name:"Digitale Welten",id:"dw",num_semesters:2}]},{name:"Seminarkurse",id:"sem",courses:[{name:"Neurowissenschaften",id:"neuro",num_semesters:2},{name:"Doping",id:"doping",num_semesters:2},{name:"Finanzmathematik",id:"fima",num_semesters:2}]}]},n=De(e);return[e,n]}class rt extends T{constructor(e){super(),G(this,e,st,nt,N,{})}}function lt(t){let e,n,s;return n=new rt({}),{c(){e=p("main"),W(n.$$.fragment)},m(r,o){x(r,e,o),M(n,e,null),s=!0},p:$,i(r){s||(C(n.$$.fragment,r),s=!0)},o(r){S(n.$$.fragment,r),s=!1},d(r){r&&w(e),K(n)}}}class ot extends T{constructor(e){super(),G(this,e,null,lt,N,{})}}new ot({target:document.getElementById("app")});