(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[48],{1379:function(e,t,a){"use strict";a.r(t);var n=a(2),l=a(59),r=a(0),c=a.n(r),o=a(87),u=a(11),i=a(131),m=a.n(i),s=a(698),f=a(748),E=a(712),p=a(598),d=a(674),b=a(170),g=a(607),h=a(648),y=a(826),j=a(693),O=a(999),v=a(604),k=a(695),x=a(921),_=a(729),C=a(1402),S=a(675),I=a(564),W=a(718),F=a(719),w=a(720),J=a(721),N=a(692),R=a(661),T=a(620),B=a(621),H=a(38),P=a(733),z=Object(N.a)((function(e){return{formControl:{minWidth:250},edit:{width:"100%",minHeight:"500px"}}})),A=Object(u.c)(E.a)(R.a),D=Object(u.c)(p.a)(R.a,T.a),L=Object(u.c)(d.a)(R.a),M=Object(u.c)(b.a)(R.a,T.a),U=Object(u.c)(g.a)(R.a,T.a,B.a),$=[{label:"\ub9e4\ud551"},{label:"\uc14b\ud305"}];t.default=Object(H.b)((function(e){return Object(n.a)({},e.indexTemplateReducers)}))((function(e){var t=e.dispatch,a=e.template,n=e.templates,u=Object(o.f)(),i=z(),E=Object(r.useState)(""),p=Object(l.a)(E,2),d=p[0],b=p[1],g=Object(r.useState)(""),N=Object(l.a)(g,2),R=N[0],T=N[1],B=Object(r.useState)(0),H=Object(l.a)(B,2),q=H[0],G=H[1],K=Object(r.useState)("form"),Q=Object(l.a)(K,2),V=Q[0],X=Q[1],Y=Object(r.useState)("form"),Z=Object(l.a)(Y,2),ee=Z[0],te=Z[1],ae=Object(r.useState)(""),ne=Object(l.a)(ae,2),le=ne[0],re=ne[1],ce=Object(r.useState)(""),oe=Object(l.a)(ce,2),ue=oe[0],ie=oe[1],me=Object(r.useState)(!1),se=Object(l.a)(me,2),fe=se[0],Ee=se[1];return Object(r.useEffect)((function(){""!==d?(t(Object(P.c)({template:d})),t(Object(P.d)())):b(location.pathname.substring(location.pathname.lastIndexOf("/")+1))}),[d]),Object(r.useEffect)((function(){T((a.index_patterns||[]).join(","))}),[a.index_patterns]),Object(r.useEffect)((function(){re(JSON.stringify(a.mappings||{},null,4))}),[a.mappings]),Object(r.useEffect)((function(){ie(JSON.stringify((a.settings||{}).index,null,4))}),[a.settings]),c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{title:"\ud15c\ud50c\ub9bf \uc870\ud68c"}),c.a.createElement(M,{variant:"h3",gutterBottom:!0,display:"inline"},"\ud15c\ud50c\ub9bf \uc870\ud68c"),c.a.createElement(A,{my:6}),c.a.createElement(h.a,{container:!0},c.a.createElement(h.a,{item:!0,xs:6},c.a.createElement(D,{align:"left"},c.a.createElement(y.a,null,c.a.createElement(j.a,null,"\ud15c\ud50c\ub9bf"),c.a.createElement(O.a,{value:d,onChange:function(e){return function(e){u.push("../indices-templates/".concat(e)),b(e)}(e.target.value)},style:{minWidth:250}},n.map((function(e){return e.name})).sort().map((function(e){return c.a.createElement(v.a,{key:e,value:e},e)})))))),c.a.createElement(h.a,{item:!0,xs:6},c.a.createElement(D,{align:"right"},c.a.createElement(U,{variant:"outlined",color:"primary",onClick:function(){return u.push("".concat(d,"/edit"))}},"\uc218\uc815")))),c.a.createElement(y.a,{className:i.formControl},c.a.createElement(k.a,{label:"\uc778\ub371\uc2a4 \ud328\ud134",placeholder:"access-log-*,error-log-*",value:R,onChange:function(e){return T(e.target.value)},disabled:!0})),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(s.a,{tabs:$,tabIndex:q,onChange:function(e){G(e)}}),c.a.createElement("br",null),c.a.createElement(D,{display:0===q?"block":"none"},c.a.createElement(y.a,{component:"fieldset"},c.a.createElement(x.a,{row:!0,onChange:function(e){return X(e.target.value)}},c.a.createElement(_.a,{value:"form",checked:"form"===V,control:c.a.createElement(C.a,{color:"primary"}),label:"\ud3fc"}),c.a.createElement(_.a,{value:"json",checked:"json"===V,control:c.a.createElement(C.a,{color:"primary"}),label:"json"}))),"form"===V?c.a.createElement(L,null,c.a.createElement(S.a,{m:0},c.a.createElement(D,{style:{overflow:"auto",minWidth:"700px"}},Object(f.a)({json:le,type:"mappings"})))):c.a.createElement(L,null,c.a.createElement(S.a,null,c.a.createElement(D,null,c.a.createElement(I.a,{className:i.edit,value:le,onChange:function(e){return re(e.target.value)},autoFocus:!0,disabled:!0}))))),c.a.createElement(D,{display:1===q?"block":"none"},c.a.createElement(y.a,{component:"fieldset"},c.a.createElement(x.a,{row:!0,onChange:function(e){return te(e.target.value)}},c.a.createElement(_.a,{value:"form",checked:"form"===ee,control:c.a.createElement(C.a,{color:"primary"}),label:"\ud3fc"}),c.a.createElement(_.a,{value:"json",checked:"json"===ee,control:c.a.createElement(C.a,{color:"primary"}),label:"json"}))),"form"===ee?c.a.createElement(L,null,c.a.createElement(S.a,{m:0},Object(f.a)({json:a,type:"settings"}))):c.a.createElement(L,null,c.a.createElement(S.a,null,c.a.createElement(D,null,c.a.createElement(I.a,{className:i.edit,value:ue,onChange:function(e){return ie(e.target.value)},disabled:!0}))))),c.a.createElement(W.a,{open:fe,fullWidth:!0},c.a.createElement(F.a,null,"\uc624\ub958"),c.a.createElement(w.a,null,""),c.a.createElement(J.a,null,c.a.createElement(U,{autoFocus:!0,onClick:function(){return Ee(!1)}},"\ud655\uc778"))))}))},698:function(e,t,a){"use strict";var n=a(59),l=a(0),r=a.n(l),c=a(9),o=a(712),u=a(598),i=a(1373),m=(a(170),a(1401)),s=a(11),f=a(661),E=Object(s.c)(o.a)(f.a),p=Object(s.c)(u.a)(f.a),d=Object(c.a)((function(e){return{root:{textTransform:"none",minWidth:72,fontWeight:e.typography.fontWeightRegular,marginRight:e.spacing(2),"&:hover":{color:"#40a9ff",opacity:1},"&$selected":{color:"#1890ff",fontWeight:e.typography.fontWeightMedium},"&:focus":{color:"#40a9ff"}},selected:{}}}),{index:1})((function(e){return r.a.createElement(i.a,Object.assign({disableRipple:!0},e))}));t.a=function(e){var t=e.tabs,a=e.tabIndex,l=void 0===a?0:a,c=e.onChange,o=r.a.useState({tabIndex:l}),u=Object(n.a)(o,2),i=u[0],s=u[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{value:i.tabIndex,onChange:function(e,t){s({tabIndex:t}),"function"===typeof c&&c(t)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto"},t.map((function(e,t){return r.a.createElement(d,{key:t,id:t,icon:e.icon,label:e.label||""})}))),r.a.createElement(E,null),t.map((function(e,t){return r.a.createElement(p,{key:t,role:"tabpanel",hidden:i.tabIndex!==t,id:"scrollable-auto-tabpanel-".concat(t),"aria-labelledby":"scrollable-auto-tab-".concat(t)},t===i.tabIndex&&e.component&&r.a.createElement(p,null," ",r.a.createElement(e.component,{tabs:e})," "))})))}},733:function(e,t,a){"use strict";a.d(t,"d",(function(){return c})),a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return u})),a.d(t,"c",(function(){return i}));var n=a(76),l=a(4),r=new n.a,c=function(){return function(e){return r.call({uri:"/elasticsearch/_cat/templates?format=json"}).then((function(t){return e({type:l.J,payload:t.data.filter((function(e){return!e.name.startsWith(".")}))})}))}},o=function(e){var t=e.template,a=e.index_patterns,n=e.settings,l=e.mappings;return function(e){return r.call({uri:"/elasticsearch/_template/".concat(t),method:"PUT",data:{index_patterns:a,settings:n,mappings:l}})}},u=function(e){var t=e.template;return function(e){return r.call({uri:"/elasticsearch/_template/".concat(t),method:"DELETE"})}},i=function(e){var t=e.template;return function(e){return r.call({uri:"/elasticsearch/_template/".concat(t)}).then((function(a){return e({type:l.I,payload:a.data[t]})}))}}},748:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(674),c=a(170),o=a(675),u=a(686),i=a(680),m=a(685),s=a(684),f=a(687),E=a(716),p=a(598),d=a(711),b=a.n(d),g=a(11),h=a(661),y=a(620),j=Object(g.c)(r.a)(h.a),O=Object(g.c)(c.a)(h.a,y.a);t.a=function(e){var t=e.json,a=e.type,n=t;try{"string"===typeof t&&(n=JSON.parse(t))}catch(r){}return n&&"mappings"===a?function(e){var t=[{title:"\ud0c0\uc785",key:"type",component:function(e){return e}},{title:"\uc0c9\uc778",key:"enabled",component:function(e){return void 0!==e&&null!==e&&!1===e?l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,{style:{cursor:"default"},checked:!1})):l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,{style:{cursor:"default"},checked:!0}))}},{title:"\ubd84\uc11d\uae30",key:"analyzer",component:function(e){return e}},{title:"copy_to",key:"copy_to",component:function(e){return e}},{title:"ignore_above",key:"ignore_above",component:function(e){return e}},{title:"null_value",key:"null_value",component:function(e){return e}},{title:"doc_values",key:"doc_values",component:function(e){return e}},{title:"similarity",key:"similarity",component:function(e){return e||""}},{title:"term_vector",key:"term_vector",component:function(e){return e}},{title:"store",key:"store",component:function(e){return void 0!==e&&null!==e&&!1===e?l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,{style:{cursor:"default"},checked:!1})):l.a.createElement(l.a.Fragment,null,l.a.createElement(E.a,{style:{cursor:"default"},checked:!0}))}}],a=b()(e.properties?e.properties:e),n={};return Object.keys(a).forEach((function(e){var t=e.replace(/\.properties/gi,""),l=t.substring(0,t.lastIndexOf(".")),r=t.substring(t.lastIndexOf(".")+1);n[l]||(n[l]={}),n[l][r]=a[e]})),l.a.createElement("table",{border:1,width:"100%",cellSpacing:0,cellPadding:8},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"#"),l.a.createElement("th",null,"\uc774\ub984"),t.map((function(e){return l.a.createElement("th",{key:e.title},e.title)})),l.a.createElement("th",null,"\uae30\ud0c0\uc124\uc815"))),l.a.createElement("tbody",null,Object.keys(n).filter((function(e){return!e.endsWith(".copy_to")})).map((function(e,a){var r=n[e],c=Object.keys(r).map((function(e){return t.find((function(t){return t.key===e}))?null:e+": "+r[e]})).filter((function(e){return e}));return l.a.createElement("tr",{key:a},l.a.createElement("td",{align:"center"},a+1),l.a.createElement("td",null,e.replaceAll(".fields","")),t.map((function(e){return l.a.createElement("td",{key:e.title,align:"center"},e.component(r[e.key]))})),l.a.createElement("td",null,c.join(", ")))}))))}(n):n&&"settings"===a?function(e){if(!e)return null;var t=b()(e.settings?e.settings:e);return l.a.createElement(l.a.Fragment,null,l.a.createElement(j,null,l.a.createElement(o.a,null,l.a.createElement(O,{variant:"h5",mt:5},"\uc8fc\uc694\ud56d\ubaa9"),l.a.createElement(u.a,null,l.a.createElement(i.a,null,l.a.createElement(m.a,null,l.a.createElement(s.a,null,"\uc0e4\ub4dc \uac2f\uc218"),l.a.createElement(s.a,null,"\ub808\ud50c\ub9ac\uce74 \uac2f\uc218"),l.a.createElement(s.a,null,"\ub9ac\ud504\ub808\uc26c \uac04\uaca9"))),l.a.createElement(f.a,null,l.a.createElement(m.a,null,l.a.createElement(s.a,null,((e.settings||{}).index||{}).number_of_shards||"-"),l.a.createElement(s.a,null,((e.settings||{}).index||{}).number_of_replicas||"-"),l.a.createElement(s.a,null,((e.defaults||{}).index||{}).refresh_interval||"-")))))),l.a.createElement("br",null),l.a.createElement(j,null,l.a.createElement(o.a,null,l.a.createElement(O,{variant:"h5",mt:5},"\uae30\ud0c0\ud56d\ubaa9"),l.a.createElement(u.a,null,l.a.createElement(i.a,null,l.a.createElement(m.a,null,l.a.createElement(s.a,null,"\ud0a4"),l.a.createElement(s.a,null,"\uac12"))),l.a.createElement(f.a,null,Object.keys(t||{}).map((function(e){return l.a.createElement(m.a,{key:e},l.a.createElement(s.a,null,e),l.a.createElement(s.a,null,t[e]||""))})))))))}(n):l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{style:{minHeight:"150px"}}))}}}]);
//# sourceMappingURL=48.d25b6022.chunk.js.map