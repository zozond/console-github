(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[69],{1464:function(e,t,a){"use strict";a.r(t);var n,r=a(2),o=a(59),c=a(15),l=a(0),s=a.n(l),i=a(87),u=a(38),m=a(11),h=a(131),p=a.n(h),g=a(607),b=a(168),d=a(598),f=a(170),v=a(841),E=a(692),O=a(840),j=a(726),S=a(713),y=a(648),w=a(661),I=a(106),R=a(4),C=Object(m.c)(g.a)(w.a),k=Object(m.c)(b.a)(n||(n=Object(c.a)(["\n  padding: ","px;\n\n  "," {\n    padding: ","px;\n  }\n"])),(function(e){return e.theme.spacing(6)}),(function(e){return e.theme.breakpoints.up("md")}),(function(e){return e.theme.spacing(10)}));t.default=Object(u.b)((function(e){return Object(r.a)({},e.dsearchReducers)}))((function(e){var t=e.dispatch,a=Object(i.f)(),n=s.a.useRef({value:""}),r=s.a.useRef({value:""}),c=s.a.useRef({value:""}),u=Object(l.useState)(!1),m=Object(o.a)(u,2),h=m[0],g=m[1],b=Object(l.useState)(!1),w=Object(o.a)(b,2),x=w[0],W=w[1],F=Object(l.useState)(!1),J=Object(o.a)(F,2),q=J[0],z=J[1];function A(){var e=r.current.value,t=c.current.value,a=n.current.value;localStorage.removeItem(R.u),0!==e.length&&0!==t.length?(W(!1),B(a,e,t)):W(!0)}function B(e,n,r){e.startsWith("https://")||e.startsWith("http://")||(e="http://"+e),sessionStorage.setItem(R.v,e),t(Object(I.d)({server:e,email:n,password:r})).then((function(t){console.log("sign in success"),W(!1),q&&localStorage.setItem(R.u,JSON.stringify({hash1:q,hash2:btoa(btoa(btoa(e))),hash3:btoa(btoa(btoa(n))),hash4:btoa(btoa(btoa(r)))})),a.replace("/cluster")})).catch((function(e){W(!0),console.log(e)}))}return Object(l.useEffect)((function(){var e=localStorage.getItem(R.v),r=JSON.parse(localStorage.getItem(R.u)||"{}");try{t(Object(I.b)()).then((function(e){console.log("authenticated"),sessionStorage.setItem(R.v,localStorage.getItem(R.v)),a.replace("/cluster")})),r.hash1&&(console.log("auto login"),z(r.hash1),B(atob(atob(atob(r.hash2))),atob(atob(atob(r.hash3))),atob(atob(atob(r.hash4))))),e&&(n.current.value=e)}catch(o){console.error(o),sessionStorage.removeItem(R.v),localStorage.removeItem(R.v)}}),[]),s.a.createElement(s.a.Fragment,null,s.a.createElement(k,null,s.a.createElement(p.a,{title:"\ub85c\uadf8\uc778"}),s.a.createElement(d.a,{align:"center"},s.a.createElement("img",{alt:"dsearch",src:"/static/img/dsearch/danawa_m_login.png"})),s.a.createElement(d.a,{style:{marginTop:"12px"}},s.a.createElement(f.a,{style:{fontSize:"1.45rem"},component:"h1",variant:"h4",align:"center",gutterBottom:!0},"\ub85c\uadf8\uc778")),s.a.createElement("form",null,s.a.createElement(v.a,{margin:"normal",required:!0,fullWidth:!0},s.a.createElement(E.a,{htmlFor:"server"},"\uc11c\ubc84"),s.a.createElement(O.a,{id:"server",name:"server",autoComplete:"server",autoFocus:!0,inputRef:n,onBlur:function(){var e=n.current.value;if(0!==e.length){var a=e;e.startsWith("http")||(a="http://"+e),t(Object(I.c)(a)).then((function(e){g(!e)})).catch((function(e){return g(!0)}))}else g(!0)},error:h})),s.a.createElement(v.a,{margin:"normal",required:!0,fullWidth:!0},s.a.createElement(E.a,{htmlFor:"server"},"\uc774\uba54\uc77c"),s.a.createElement(O.a,{id:"email",name:"email",autoComplete:"email",inputRef:r,error:x,onKeyUp:function(e){return 13===e.keyCode?A():null}})),s.a.createElement(v.a,{margin:"normal",required:!0,fullWidth:!0},s.a.createElement(E.a,{htmlFor:"password"},"\ube44\ubc00\ubc88\ud638"),s.a.createElement(O.a,{name:"password",type:"password",id:"password",autoComplete:"current-password",inputRef:c,error:x,onKeyUp:function(e){return 13===e.keyCode?A():null}})),s.a.createElement(j.a,{control:s.a.createElement(S.a,{color:"primary",checked:q,onChange:function(){return z(!q)}}),label:"\ub85c\uadf8\uc778 \uc800\uc7a5"}),s.a.createElement(y.a,{container:!0},s.a.createElement(y.a,{item:!0,xs:12},s.a.createElement(d.a,null,s.a.createElement(C,{fullWidth:!0,variant:"contained",color:"primary",mb:2,onClick:A},"\ub85c\uadf8\uc778"))))),s.a.createElement(d.a,{style:{position:"relative",top:"60px",height:"0px",textAlign:"center",fontSize:"0.8em"}},"\xa9 2020. danawa Co., Ltd. All Rights Reserved.")))}))}}]);
//# sourceMappingURL=69.ec8840dc.chunk.js.map