(this["webpackJsonpdsearch-console"]=this["webpackJsonpdsearch-console"]||[]).push([[66],{1034:function(e,t,a){"use strict";a.r(t);var l=a(62),n=a(0),r=a.n(n),c=a(14),u=a(39),i=a(135),o=a.n(i),s=a(695),m=a(4),E=new(a(83).a),d=function(){return function(e){return E.call({uri:"/elasticsearch/_all/_settings"}).then((function(t){return e({type:m.mb,payload:t.data})}))}},h=function(){return function(e){return E.call({uri:"/tools/plugins"}).then((function(t){return e({type:m.pb,payload:t.data})}))}},f=a(685),v=a(715),y=a(710),p=a(693),g=a(694),b=a(692),k=a(691),L=a(178),_=a(686),z=a(615),T=a(786),O=a(857),j=a(734),M=a(1031),B=a(879),w=a(621),S=a(624),I=a(664),x=a(676),D=Object(s.a)((function(e){return{formControl:{minWidth:250},select:{minWidth:120,marginLeft:e.spacing(1),flex:1,borderBottom:"1px solid gray","&:hover":{borderBottom:"1px solid black"}}}})),H=Object(c.c)(f.a)(x.a),C=Object(c.c)(v.a)(x.a),P=Object(c.c)(y.a)(x.a);function R(e){var t=e.resultBrief,a=[];if(t.tokens)for(var l=0;l<t.tokens.length;l++)l%5===0&&a.push([]),a[a.length-1].push(t.tokens[l].token);return r.a.createElement(p.a,null,r.a.createElement("colgroup",null,r.a.createElement("col",{width:"20%"}),r.a.createElement("col",{width:"20%"}),r.a.createElement("col",{width:"20%"}),r.a.createElement("col",{width:"20%"}),r.a.createElement("col",{width:"20%"})),r.a.createElement(g.a,null,a.length>0?a.map((function(e,t){return r.a.createElement(b.a,{hover:!0,key:t},e.map((function(e){return r.a.createElement(k.a,null," ",e)})))})):r.a.createElement(b.a,{hover:!0,key:"nothing"},r.a.createElement(k.a,null,"\uac80\uc0c9\ub41c \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4"))))}function Y(e){var t=e.resultDetail;return t.result?r.a.createElement(p.a,{key:"detailResult"},r.a.createElement(g.a,null,r.a.createElement(b.a,{hover:!0},r.a.createElement(k.a,null,r.a.createElement(L.a,{variant:"h4"},"1. ",t.result[2].key),r.a.createElement("br",null),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.result[2].value}}))),r.a.createElement(b.a,{hover:!0},r.a.createElement(k.a,null,r.a.createElement(L.a,{variant:"h4"},"2. ",t.result[3].key),r.a.createElement("br",null),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.result[3].value}}))),r.a.createElement(b.a,{hover:!0},r.a.createElement(k.a,null,r.a.createElement(L.a,{variant:"h4"},"3. ",t.result[4].key),r.a.createElement("br",null),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.result[4].value}}))),r.a.createElement(b.a,{hover:!0},r.a.createElement(k.a,null,r.a.createElement(L.a,{variant:"h4"},"4. ",t.result[5].key),r.a.createElement("br",null),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.result[5].value}}))),r.a.createElement(b.a,{hover:!0},r.a.createElement(k.a,null,r.a.createElement(L.a,{variant:"h4"},"5. ",t.result[6].key),r.a.createElement("br",null),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.result[6].value}}))),r.a.createElement(b.a,{hover:!0},r.a.createElement(k.a,null,r.a.createElement(L.a,{variant:"h4"},"6. ",t.result[7].key),r.a.createElement("br",null),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.result[7].value}}))))):r.a.createElement(p.a,{key:"empltyDetail"},r.a.createElement(g.a,null,r.a.createElement(b.a,null,r.a.createElement(k.a,null,"\uac80\uc0c9\ub41c \uacb0\uacfc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4."))))}function W(e){var t=e.dispatch,a=e.analyzerList,c=e.pluginList,u=e.resultBrief,i=e.resultDetail,o=Object(n.useState)("EMPTY"),s=Object(l.a)(o,2),f=s[0],v=s[1],y=Object(n.useState)("brief"),p=Object(l.a)(y,2),g=p[0],b=p[1],k=D(),I=[];void 0!==a&&null!==a&&Object.keys(a).filter((function(e){return!e.startsWith(".")})).map((function(e){var t=a[e].settings.index.analysis;return void 0!==t&&void 0!==t.analyzer&&Object.keys(t.analyzer).map((function(t){return I.push(e+"/"+t)})),r.a.createElement(r.a.Fragment,null)}));return r.a.createElement(H,{mb:6},r.a.createElement(_.a,null,r.a.createElement(P,{id:"analyzer_contents",label:"\ubd84\uc11d\ud560 \ub0b4\uc6a9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.",multiline:!0,rows:2,variant:"outlined",fullWidth:!0}," "),r.a.createElement(z.a,{display:"flex",alignItems:"center",justifyContent:"left"},r.a.createElement(z.a,{p:3},r.a.createElement(T.a,null,r.a.createElement(O.a,{value:g,row:!0,onChange:function(e){"brief"===g?(0!==((c||{}).plugins||[]).length?v(((c||{}).plugins||[])[0]):v("EMPTY"),t(d())):(0!==I.length?v(I[0]):v("EMPTY"),t(h())),b(e.target.value)}},r.a.createElement(j.a,{value:"brief",control:r.a.createElement(M.a,{size:"small"}),label:"\uac04\ub7b5"}),r.a.createElement(j.a,{value:"detail",control:r.a.createElement(M.a,{size:"small"}),label:"\uc0c1\uc138"})))),r.a.createElement(z.a,{p:3},r.a.createElement(T.a,{className:k.formControl},r.a.createElement(B.a,{id:"analyzer_select",value:f,onChange:function(e){v(e.target.value)},defaultValue:"",displayEmpty:!0},"brief"===g?0===I.length?r.a.createElement(w.a,{key:"no",selected:!0,disabled:!0,value:"EMPTY"}," \ubd84\uc11d\uae30\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. "):I.map((function(e,t){return 0===t?r.a.createElement(w.a,{key:e,selected:!0,value:e}," ",e," "):r.a.createElement(w.a,{key:e,value:e}," ",e," ")})):0===((c||{}).plugins||[]).length?r.a.createElement(w.a,{key:"no",selected:!0,disabled:!0,value:"EMPTY"}," \ubd84\uc11d\uae30\uac00 \uc5c6\uc2b5\ub2c8\ub2e4. "):((c||{}).plugins||[]).map((function(e,t){return 0===t?r.a.createElement(w.a,{key:e,selected:!0,value:e}," ",e," "):r.a.createElement(w.a,{key:e,value:e}," ",e," ")}))))),r.a.createElement(S.a,{variant:"outlined",color:"secondary",onClick:function(){var e=document.getElementById("analyzer_contents"),a=document.getElementById("analyzer_select"),l={};if("brief"===g){var n=a.innerHTML.split("/");if(n&&2===n.length){var r=n[0].replace(" ",""),c=n[1].replace(" ","");l.text=e.value,l.analyzer=c,t(function(e,t){return function(a){return E.call({uri:"/elasticsearch/"+e+"/_analyze",method:"POST",data:t}).then((function(e){return a({type:m.nb,payload:e.data})}))}}(r,l)).catch((function(e){console.log(e)}))}else console.error("err",n)}else{var u=a.innerHTML;u=u.replace(/ /gi,""),l.plugin=u,l.text=e.value,t(function(e){return function(t){return E.call({uri:"/tools/detail/analysis",method:"POST",data:e}).then((function(e){return t({type:m.ob,payload:e.data})}))}}(l))}}},"\ubd84\uc11d")),r.a.createElement(z.a,{m:2},r.a.createElement(L.a,{variant:"h4",display:"inline"},"\ubd84\uc11d \uacb0\uacfc")),r.a.createElement(z.a,{p:2},"brief"===g?r.a.createElement(R,{resultBrief:u}):r.a.createElement(Y,{resultDetail:i}))))}t.default=Object(u.b)((function(e){return{pluginList:e.toolsReducers.pluginList,analyzerList:e.toolsReducers.analyzerList,resultBrief:e.toolsReducers.resultBrief,resultDetail:e.toolsReducers.resultDetail}}))((function(e){var t=e.dispatch,a=e.analyzerList,l=e.pluginList,c=e.resultBrief,u=e.resultDetail;return Object(n.useEffect)((function(){t(d()),t(h())}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{title:"\ubd84\uc11d\ub3c4\uad6c"}),r.a.createElement(L.a,{variant:"h3",display:"inline"},"\ubd84\uc11d\ub3c4\uad6c"),r.a.createElement(C,{my:6}),r.a.createElement(I.a,{container:!0,spacing:6},r.a.createElement(I.a,{item:!0,xs:12},r.a.createElement(W,{dispatch:t,analyzerList:a,pluginList:l,resultBrief:c,resultDetail:u,onClick:function(){return console.log("click")}}))))}))}}]);
//# sourceMappingURL=66.e1feb068.chunk.js.map