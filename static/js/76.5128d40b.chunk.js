(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[76],{1458:function(e,t,n){"use strict";n.r(t);var a=n(59),r=n(0),c=n.n(r),l=n(843),i=n(970),o=n(726),u=n(1499),s=n(598),f=n(2),d=n(38),m=n(676),h=n(677),b=n(170),j=n(600),E=n(979),O=n.n(E),p=n(1180),g=n.n(p),y=n(1190),v=n.n(y),w=n(1181),k=n.n(w),_=n(1189),x=n.n(_),S=n(863),R=n.n(S),C=n(1182),z=n.n(C),N=n(1183),I=n.n(N),M=n(1184),D=n.n(M),P=n(1186),F=n.n(P),T=n(1187),W=n.n(T),A=n(1188),K=n.n(A),U=n(1191),B=n.n(U),J=n(1185),V=n.n(J),H=n(860),L=n.n(H),q=n(1192),G=n.n(q),Q=n(736),X=n(716),Y=n.n(X),Z={Add:Object(r.forwardRef)((function(e,t){return c.a.createElement(g.a,Object.assign({},e,{ref:t}))})),Check:Object(r.forwardRef)((function(e,t){return c.a.createElement(k.a,Object.assign({},e,{ref:t}))})),Clear:Object(r.forwardRef)((function(e,t){return c.a.createElement(z.a,Object.assign({},e,{ref:t}))})),Delete:Object(r.forwardRef)((function(e,t){return c.a.createElement(I.a,Object.assign({},e,{ref:t}))})),DetailPanel:Object(r.forwardRef)((function(e,t){return c.a.createElement(R.a,Object.assign({},e,{ref:t}))})),Edit:Object(r.forwardRef)((function(e,t){return c.a.createElement(D.a,Object.assign({},e,{ref:t}))})),Export:Object(r.forwardRef)((function(e,t){return c.a.createElement(V.a,Object.assign({},e,{ref:t}))})),Filter:Object(r.forwardRef)((function(e,t){return c.a.createElement(F.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(r.forwardRef)((function(e,t){return c.a.createElement(W.a,Object.assign({},e,{ref:t}))})),LastPage:Object(r.forwardRef)((function(e,t){return c.a.createElement(K.a,Object.assign({},e,{ref:t}))})),NextPage:Object(r.forwardRef)((function(e,t){return c.a.createElement(R.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(r.forwardRef)((function(e,t){return c.a.createElement(x.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(r.forwardRef)((function(e,t){return c.a.createElement(z.a,Object.assign({},e,{ref:t}))})),Search:Object(r.forwardRef)((function(e,t){return c.a.createElement(L.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(r.forwardRef)((function(e,t){return c.a.createElement(v.a,Object.assign({},e,{ref:t}))})),ThirdStateCheck:Object(r.forwardRef)((function(e,t){return c.a.createElement(B.a,Object.assign({},e,{ref:t}))})),ViewColumn:Object(r.forwardRef)((function(e,t){return c.a.createElement(G.a,Object.assign({},e,{ref:t}))}))},$=null;var ee=Object(d.b)((function(e){return Object(f.a)(Object(f.a)({},e.indicesReducers),e.dsearchReducers)}))((function(e){var t=e.dispatch,n=e.index,l=e.authUser,i=e.mappings,o=Object(d.d)((function(e){return Object(f.a)({},e.indicesReducers)})).documentSourceResponse,u=Object(r.useState)(""),E=Object(a.a)(u,2),p=E[0],g=E[1],y=Object(r.useState)(0),v=Object(a.a)(y,2),w=v[0],k=v[1],_=Object(r.useState)(5),x=Object(a.a)(_,2),S=x[0],R=x[1],C=Object(r.useState)([]),z=Object(a.a)(C,2),N=z[0],I=z[1],M=Object(r.useState)([]),D=Object(a.a)(M,2),P=D[0],F=D[1],T=Object(r.useState)(""),W=Object(a.a)(T,2),A=W[0],K=W[1],U=Object(r.useState)(!1),B=Object(a.a)(U,2),J=B[0],V=B[1],H=Object(r.useRef)(null);function L(e){var a=e.searchSize,r=void 0===a?100:a,c=e.columns,l=void 0===c?[]:c,i=e.keyword,o=void 0===i?null:i;return t(Object(Q.l)(n)).then((function(e){var a=e.payload;t(Object(Q.i)({index:n,from:w,size:r||S,columns:l,keyword:o})).then((function(e){console.log("\ud655\uc778\uc6a9",e.hits);var t={ID:null};return t=Object.assign(t,a.properties),(e.hits||{}).hits.forEach((function(e){var n=Y()(e._source);Object.keys(n).forEach((function(e){t[e]=null}))})),void 0!==o&&null!==o&&""!==o||I(Object.keys(t)),{columns:Object.keys(t),hits:e.hits}})).then((function(e){F(e?(e.hits||{}).hits.map((function(t){var n=Y()(t),a={};return e.columns.forEach((function(e){a[e.replace(/\./gi,"___")]=n["_source."+e]||""})),a.ID=t._id,a._hitsId=t._id,a})):[]),V(!1)}))}))}function q(e){R(e),L({keyword:p})}function G(e){F([]),null!==$&&clearTimeout($),$=setTimeout((function(){V(!0),g(e);var t=Y()(i);L({columns:N.filter((function(e){return["text","keyword"].includes(t["".concat(e,".type")])})).filter((function(e){return!t["".concat(e,".format")]})),keyword:e})}),500)}function ee(e,t){return"ID"===e?-1:"ID"===t||e.length>t.length?1:t.length>e.length?-1:0}return Object(r.useEffect)((function(){F([]),K(""),g(""),k(0),R(5),""!==n&&L({keyword:p})}),[n]),Object(r.useEffect)((function(){var e=o;if(!e||!e.hits)return!1;var t={ID:null};e.hits.hits.forEach((function(e){var n=Y()(e._source);Object.keys(n).forEach((function(e){t[e]=null}))}));var n=Object.keys(t);I(n),F(e.hits.hits.map((function(e){var t=Y()(e),a={};return n.forEach((function(e){a[e.replace(/\./gi,"___")]=t["_source."+e]||""})),a.ID=e._id,a._hitsId=e._id,a})))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{style:{width:"100%",height:"0px",display:J?"block":"none"}},c.a.createElement(s.a,{style:{zIndex:"1201",width:"100%",top:"120px",height:(((H||{}).current||{}).offsetHeight||478)-175+"px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#4646465c",opacity:.5,position:"relative"}},c.a.createElement(j.a,{color:"primary",style:{zIndex:"1202"}}))),c.a.createElement(s.a,{ref:H},l.role.index?c.a.createElement(O.a,{icons:Z,title:"",localization:{body:{emptyDataSourceMessage:""}},columns:N.sort((function(e,t){return ee(e,t)})).map((function(e){return{title:e,field:e.replace(/\./gi,"___"),editable:"ID"===e?"never":"always",cellStyle:{whiteSpace:"nowrap",maxWidth:"180px",overflow:"hidden"}}})),data:P.map((function(e){var t={};return Object.keys(e).forEach((function(n){"object"!==typeof e[n]&&(t[n]=e[n])})),t})),onChangeRowsPerPage:q,editable:{onRowAdd:function(e){return new Promise((function(a,r){var c=Object(X.unflatten)(e),l={};Object.keys(c).forEach((function(e){return l[e.replace(/___/gi,".")]=c[e]})),delete l.ID,t(Object(Q.a)({index:n,body:l})).then((function(){return setTimeout((function(){V(!0),L({keyword:p}).then(a)}),1e3)})).catch(r)}))},onRowUpdate:function(e,a){return new Promise((function(a,r){var c=Object(X.unflatten)(e),l={};Object.keys(c).forEach((function(e){return l[e.replace(/___/gi,".")]=c[e]}));var i=l._hitsId;delete l._hitsId,delete l.ID,delete l._id,t(Object(Q.f)({index:n,id:i,body:l})).then((function(){return setTimeout((function(){V(!0),L({keyword:p}).then(a)}),1e3)})).catch(r)}))},onRowDelete:function(e){return new Promise((function(a,r){var c=Object(X.unflatten)(e)._hitsId;t(Object(Q.d)({index:n,id:c})).then((function(){return setTimeout((function(){V(!0),L({keyword:p}).then(a)}),1e3)})).catch(r)}))}},onSearchChange:G,options:{headerStyle:{maxWidth:"180px"}},onRowClick:function(e,t){K(e.target.innerText||"")}}):c.a.createElement(O.a,{icons:Z,title:"",localization:{body:{emptyDataSourceMessage:""}},columns:N.sort((function(e,t){return ee(e,t)})).map((function(e){return{title:e,field:e.replace(/\./gi,"___"),editable:"ID"===e?"never":"always",cellStyle:{whiteSpace:"nowrap",maxWidth:"180px"}}})),data:P,onChangeRowsPerPage:q,onSearchChange:G,options:{headerStyle:{maxWidth:"180px"}},onRowClick:function(e,t){K(e.target.innerText||"")}})),c.a.createElement(m.a,{style:{display:""===A?"none":"block"}},c.a.createElement(h.a,null,c.a.createElement(s.a,{mt:5},c.a.createElement(b.a,{variant:"h5",gutterBottom:!0},A)))))})),te=n(696),ne=n(650),ae=n(648),re=n(603),ce=n(607),le=n(1048),ie=n(604),oe=n(751),ue=n(681),se=n(678),fe=n(680),de=n(679),me=n(682),he=n(636),be=Object(te.a)((function(e){return{}})),je=[5,10,20];var Ee=Object(d.b)((function(e){return Object(f.a)({},e.indicesReducers)}))((function(e){var t=e.dispatch,n=e.index,i=e.mappings,o=be(),u=Object(r.useState)(""),d=Object(a.a)(u,2),b=d[0],E=d[1],O=Object(r.useState)(""),p=Object(a.a)(O,2),g=p[0],y=p[1],v=Object(r.useState)([]),w=Object(a.a)(v,2),k=w[0],_=w[1],x=Object(r.useState)(0),S=Object(a.a)(x,2),R=S[0],C=S[1],z=Object(r.useState)(5),N=Object(a.a)(z,2),I=N[0],M=N[1],D=Object(r.useState)([]),P=Object(a.a)(D,2),F=P[0],T=P[1],W=Object(r.useState)(0),A=Object(a.a)(W,2),K=A[0],U=A[1],B=Object(r.useState)(!1),J=Object(a.a)(B,2),V=J[0],H=J[1];function L(e){var a=e.searchFrom,r=e.searchSize,c=e.searchKeyword;T([]),H(!0),t(Object(Q.l)(n)).then((function(e){var t=((e||{}).payload||{}).properties||{},n={};return Object.keys(Y()(t)).forEach((function(e){n[e.replace(/.properties/gi,"")]=Y()(t)[e]})),{mappings:t,flatMappings:n}})).then((function(e){var l=[],o=Y()(i);return l=(l=k.filter((function(e){return["text","keyword"].includes(o["".concat(e,".type")])}))).filter((function(e){return!o["".concat(e,".format")]})),t(Object(Q.i)({index:n,from:a||R,size:r||I,keyword:void 0===c?b:c,columns:l})).then((function(t){return Object(f.a)(Object(f.a)({},e),{},{documents:t})}))})).then((function(e){var t=(((e||{}).documents||{}).hits||{}).hits||[];if(void 0===c||""===c){var n={};t.forEach((function(e){var t=Y()(e._source);Object.keys(t).forEach((function(e){n[e]=null}))})),_(Object.keys(n))}var a={};return t.forEach((function(t){var n=t._id,r=Y()(t._source);a[n]=[],Object.keys(r).forEach((function(c){var l="";"text"===((e||{}).flatMappings||{})[c+".type"]&&(l="standard"),((e||{}).flatMappings||{})[c+".analyzer"]&&(l=(e||{}).flatMappings[c+".analyzer"]),l&&""!==l&&a[n].push({field:c,text:r[c],analyzer:l});var i={};Object.keys((e||{}).flatMappings||{}).filter((function(e){return e.includes("".concat(c,".fields"))})).forEach((function(t){t.endsWith(".analyzer")?(delete i["".concat(t.substring(0,t.length-9),".type")],i[t]={field:t.substring(0,t.length-9).replace(/\.fields/gi,""),text:r[c],analyzer:((e||{}).flatMappings||{})[t]||"standard"}):t.endsWith(".type")&&!i["".concat(t.substring(0,t.length-5),".analyzer")]&&(i[t]={field:t.substring(0,t.length-5).replace(/\.fields/gi,""),text:r[c],analyzer:"standard"})})),Object.values(i).forEach((function(e){t._source[e.field]=r[c],a[n].push(e)}))}))})),Object(f.a)(Object(f.a)({},e||{}),{},{totalSize:((((e||{}).documents||{}).hits||{}).total||{}).value||0,documentAnalyzerMap:a})})).then((function(e){t(Object(Q.b)(n,(e||{}).documentAnalyzerMap||{})).then((function(t){var n=[];((((e||{}).documents||{}).hits||{}).hits||[]).forEach((function(e){var a=Y()(e._source);n.push({key:"* ID",value:e._id,term:"-"}),Object.keys(a).forEach((function(r){var c="";if(t[e._id]&&t[e._id].length>0){var l=t[e._id].find((function(e){return e.field===r}));l&&l.term&&l.term.length>0&&(c=l.term.join(", "))}n.push({key:r,value:a[r],term:c})}))})),H(!1),T(n),U(e.totalSize)}))})).catch((function(e){H(!1),console.log("error",e)}))}function q(e){C(e),L({searchFrom:e})}function G(e){E(e),C(0),L({searchFrom:0,searchKeyword:e})}return Object(r.useEffect)((function(){E(""),_([]),C(0),L({searchKeyword:"",searchFrom:0})}),[n]),n?c.a.createElement(c.a.Fragment,null,c.a.createElement("br",null),c.a.createElement(m.a,null,c.a.createElement(h.a,null,c.a.createElement(ne.a,{container:!0},c.a.createElement(ne.a,{item:!0,xs:4},c.a.createElement(s.a,{className:o.form},c.a.createElement(ae.a,{className:o.input,placeholder:"Search",value:g,onChange:function(e){return y(e.target.value)},onKeyUp:function(e){13===e.keyCode&&G(g)}}),c.a.createElement(re.a,{className:o.iconButton,onClick:function(){return G(g)}},c.a.createElement(he.a,null)))),c.a.createElement(ne.a,{item:!0,xs:4},c.a.createElement(s.a,{align:"center"},c.a.createElement(ce.a,{variant:"outlined",onClick:function(){return q(R-I)},disabled:R<=0},"\uc774\uc804"),c.a.createElement(s.a,{component:"span",m:3},F.length>0?isNaN(R/I+1)?0:R/I+1:0,"/",isNaN(Math.ceil(K/I))?0:Math.ceil(K/I)),c.a.createElement(ce.a,{variant:"outlined",onClick:function(){return q(R+I)},disabled:(isNaN(R/I+1)?0:R/I+1)>=(isNaN(Math.ceil(K/I))?0:Math.ceil(K/I))},"\ub2e4\uc74c"))),c.a.createElement(ne.a,{item:!0,xs:4},c.a.createElement(s.a,{align:"right"},c.a.createElement(l.a,{className:o.formControl},c.a.createElement(le.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:I,onChange:function(e){M(e.target.value),L({searchFrom:0,searchSize:e.target.value})}},je.map((function(e){return c.a.createElement(ie.a,{key:e,value:e},e)}))))))),c.a.createElement(oe.a,null,c.a.createElement(ue.a,{size:"small"},c.a.createElement("colgroup",null,c.a.createElement("col",{style:{width:"20%"}}),c.a.createElement("col",{style:{width:"40%"}}),c.a.createElement("col",{style:{width:"40%"}})),c.a.createElement(se.a,null,c.a.createElement(fe.a,null,c.a.createElement(de.a,null,"\uc544\uc774\ub514"),c.a.createElement(de.a,null,"\uac12"),c.a.createElement(de.a,null,"\ubd84\uc11d\uacb0\uacfc"))),c.a.createElement(me.a,{style:{display:V?"table-row-group":"none"}},c.a.createElement(fe.a,null,c.a.createElement(de.a,{colSpan:3},c.a.createElement(s.a,{align:"center"},c.a.createElement(j.a,null))))),c.a.createElement(me.a,{style:{display:V?"none":"table-row-group"}},F.map((function(e,t){try{return c.a.createElement(fe.a,{key:"".concat(e.key,"-").concat(t)},c.a.createElement(de.a,null,e.key),c.a.createElement(de.a,null,e.value),c.a.createElement(de.a,null,e.term))}catch(n){return console.error(n),!1}}))))),c.a.createElement("br",null),c.a.createElement(ne.a,{container:!0},c.a.createElement(ne.a,{item:!0,xs:12},c.a.createElement(s.a,{align:"center"},c.a.createElement(ce.a,{variant:"outlined",onClick:function(){return q(R-I)},disabled:R<=0},"\uc774\uc804"),c.a.createElement(s.a,{component:"span",m:3},F.length>0?isNaN(R/I+1)?0:R/I+1:0,"/",isNaN(Math.ceil(K/I))?0:Math.ceil(K/I)),c.a.createElement(ce.a,{variant:"outlined",onClick:function(){return q(R+I)},disabled:(isNaN(R/I+1)?0:R/I+1)>=(isNaN(Math.ceil(K/I))?0:Math.ceil(K/I))},"\ub2e4\uc74c"))))))):null}));t.default=function(){var e=Object(r.useState)("source"),t=Object(a.a)(e,2),n=t[0],f=t[1];function d(e){f(e.target.value)}return c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{component:"fieldset"},c.a.createElement(i.a,{row:!0,"aria-label":"position",name:"position",defaultValue:"top"},c.a.createElement(o.a,{value:"source",checked:"source"===n,onChange:d,control:c.a.createElement(u.a,{color:"primary"}),label:"\uae30\ubcf8"}),c.a.createElement(o.a,{value:"indexed",checked:"indexed"===n,onChange:d,control:c.a.createElement(u.a,{color:"primary"}),label:"\ubd84\uc11d\ub41c \uc0c9\uc778\uc5b4"}))),c.a.createElement(s.a,{mt:2},"source"===n?c.a.createElement(ee,null):c.a.createElement(Ee,null)))}}}]);
//# sourceMappingURL=76.5128d40b.chunk.js.map