(this["webpackJsonptravel-app"]=this["webpackJsonptravel-app"]||[]).push([[0],{109:function(e,t,n){},143:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(7),r=n.n(o),i=(n(109),n(56)),s=n(9),l=n(190),u=n(187),j=n(14),b=function(e){return{type:"LOADER",payload:e}},d=function(e){return{type:"ERROR",payload:e.message}},m=n(64),p=n.n(m),h="https://rss-travel-app.herokuapp.com",O=function(){return function(e,t){e(b(!0));var n=t(),a=n.locale;return function(e,t){var n="".concat(h,"/countries?locale=").concat(t,"&search=").concat(e);return p.a.get(n).then((function(e){return e.data}))}(n.searchString,a).then((function(t){return e(f(t))})).catch((function(t){return e(d(t))})).finally((function(){return e(e(b(!1)))}))}},f=function(e){return{type:"COUNTRIES",payload:e}},g=function(e){return function(t,n){t(b(!0));var a=n().locale;return function(e,t){var n="".concat(h,"/countries/").concat(e,"?locale=").concat(t);return p.a.get(n).then((function(e){return e.data}))}(e,a).then((function(e){return t({type:"COUNTRY",payload:e})})).catch((function(e){return t(d(e))})).finally((function(){return t(t(b(!1)))}))}},x=n(176),y=n(175),v=n(178),C=n(179),N=n(183),k=n(181),w=n(180),L=n(184),S=n(182),I=n(2),R=Object(y.a)({root:{maxWidth:345,margin:"0 auto"}});var B=function(e){var t=e.countries,n=e.onPreview,a=R();return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(x.a,{container:!0,spacing:4,children:t.map((function(e){return Object(I.jsx)(x.a,{item:!0,xs:12,sm:6,md:3,children:Object(I.jsxs)(v.a,{className:a.root,children:[Object(I.jsxs)(C.a,{children:[Object(I.jsx)(w.a,{component:"img",alt:e.capital.name,height:"140",image:e.image,title:e.name}),Object(I.jsxs)(k.a,{children:[Object(I.jsx)(S.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.name}),Object(I.jsxs)(S.a,{variant:"body2",color:"textSecondary",component:"p",children:["Capital: ",e.capital.name]})]})]}),Object(I.jsxs)(N.a,{children:[Object(I.jsx)(L.a,{size:"small",color:"primary",children:"Share"}),Object(I.jsx)(L.a,{size:"small",color:"primary",onClick:function(){return n(e.isoCode)},children:"Learn More"})]})]})},e.isoCode)}))})})},z=n(185),E=Object(y.a)({root:{justifyContent:"center",alignItems:"center",position:"absolute",top:0,left:0,right:0,bottom:0}}),F=function(){var e=E();return Object(I.jsx)(x.a,{container:!0,spacing:4,className:e.root,children:Object(I.jsx)(z.a,{size:"10rem"})})},T=Object(j.b)((function(e){return{loader:e.loader,countries:e.countries,locale:e.locale}}),(function(e){return{onLoadCountries:function(){return e(O())}}}))((function(e){var t=e.loader,n=e.locale,c=void 0===n?"en":n,o=e.countries,r=e.onLoadCountries,i=Object(s.f)();Object(a.useEffect)((function(){r()}),[c]);var l=Object(a.useCallback)((function(e){return i.push("/countries/".concat(e))}),[i]);return Object(I.jsxs)(I.Fragment,{children:[t&&Object(I.jsx)(F,{}),!t&&o.length>0&&Object(I.jsx)(B,{countries:o,onPreview:l})]})})),M=n(192),D=n(98),A=n(31),G=n(48),_=n.n(G);_.a.accessToken="pk.eyJ1IjoiZWxlZG9uIiwiYSI6ImNrbTBmaGJrMjFpdzMydXJ6dDZmZW1vMWYifQ.7z-Hdb4FoPZCKJYM1it7Tw";var P=function(e){var t=e.className,n=e.isoCode,c=e.capitalCoordinates,o=e.locale,r=Object(a.useRef)(),i=Object(a.useState)(c.lon),s=Object(A.a)(i,2),l=s[0],u=s[1],j=Object(a.useState)(c.lat),b=Object(A.a)(j,2),d=b[0],m=b[1],p=Object(a.useState)(4),h=Object(A.a)(p,2),O=h[0],f=h[1];return Object(a.useEffect)((function(){var e=new _.a.Map({container:r.current,style:"mapbox://styles/mapbox/streets-v11",center:[l,d],zoom:O});return e.on("move",(function(){u(e.getCenter().lng.toFixed(6)),m(e.getCenter().lat.toFixed(6)),f(e.getZoom().toFixed(4))})),e.on("load",(function(){(new _.a.Marker).setLngLat([c.lon,c.lat]).addTo(e),e.addControl(new _.a.FullscreenControl),e.addLayer({id:"country-boundaries",source:{type:"vector",url:"mapbox://mapbox.country-boundaries-v1"},"source-layer":"country_boundaries",type:"fill",paint:{"fill-color":"#008080","fill-opacity":.4}},"country-label"),e.setLayoutProperty("country-label","text-field",["get","name_".concat("uk"!==o?o:"en")]),e.setFilter("country-boundaries",["in","iso_3166_1_alpha_3",n])})),function(){return e.remove()}}),[]),Object(I.jsx)(M.a,{className:"map-container ".concat(t),ref:r})};P.defaultProps={locale:"en",className:""};var W=P,Z=Object(j.b)((function(e){return{isoCode:e.country.isoCode,locale:e.locale,capitalCoordinates:e.country.capital.coordinates}}))((function(e){var t=e.className,n=e.locale,a=e.capitalCoordinates,c=e.isoCode;return Object(I.jsx)(W,{locale:n,capitalCoordinates:a,isoCode:c,className:t})})),H=Object(y.a)((function(e){return{date:{fontSize:"24px"},time:{fontSize:"28px"},center:{textAlign:"center"}}}));var J=function(e){var t,n=e.locale,c=e.timezone,o=H(),r=c.name,i={timeZone:r,month:"long",day:"numeric",weekday:"long"},s={timeZone:r,hour:"numeric",minute:"numeric",second:"numeric",hour12:!1},l=function(){return(new Date).toLocaleString(n,i)},u=function(){return(new Date).toLocaleString(n,s)},j=Object(a.useState)(l()),b=Object(A.a)(j,2),d=b[0],m=b[1],p=Object(a.useState)(u()),h=Object(A.a)(p,2),O=h[0],f=h[1];return Object(a.useEffect)((function(){var e=setInterval((function(){m(l()),f(u())}),1e3);return function(){return clearInterval(e)}})),Object(I.jsxs)(M.a,{className:o.center,children:[Object(I.jsx)(S.a,{className:o.date,children:(t=d,t[0].toUpperCase()+t.slice(1))}),Object(I.jsx)(S.a,{className:o.time,children:O})]})},U=Object(j.b)((function(e){return{locale:e.locale,timezone:e.country.timezone}}))((function(e){var t=e.locale,n=e.timezone;return Object(I.jsx)(J,{locale:t,timezone:n})})),Y=n(19),K=n(16),Q=n(85),V=n.n(Q);function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce((function(e,t){return e.push({original:t.image,thumbnail:t.image,description:t.description,thumbnailClass:"sight-thumbnail"}),e}),[])}n(141);var q=n(86),$=n.n(q),ee=n(87),te=n.n(ee),ne=n(88),ae=n.n(ne),ce=n(89),oe=n.n(ce);var re=function(e){var t=e.title,n=e.data.sights,a=Object(y.a)((function(e){var t;return{icon:(t={},Object(K.a)(t,e.breakpoints.down("sm"),{fontSize:"2rem"}),Object(K.a)(t,e.breakpoints.up("md"),{fontSize:"3.5rem"}),Object(K.a)(t,e.breakpoints.up("lg"),{fontSize:"4rem"}),t),fullScreenBtn:{bottom:"initial",top:"0"}}}))();return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)("h1",{align:"center",children:t}),Object(I.jsx)(V.a,Object(Y.a)(Object(Y.a)({renderLeftNav:function(e,t){return Object(I.jsx)("button",{className:"image-gallery-icon image-gallery-left-nav",disabled:t,onClick:e,children:Object(I.jsx)($.a,{className:a.icon})})},renderRightNav:function(e,t){return Object(I.jsx)("button",{className:"image-gallery-icon image-gallery-right-nav",disabled:t,onClick:e,children:Object(I.jsx)(te.a,{className:a.icon})})},renderFullscreenButton:function(e,t){return Object(I.jsx)("button",{type:"button",className:"image-gallery-icon image-gallery-fullscreen-button image-gallery-fullscreen-button ".concat(a.fullScreenBtn," ").concat(t?" active":""),onClick:e,children:t?Object(I.jsx)(oe.a,{className:a.icon}):Object(I.jsx)(ae.a,{className:a.icon})})}},{showPlayButton:!1,thumbnailPosition:"right",onErrorImageURL:"https://picsum.photos/id/1015/1000/600/"}),{},{items:X(n)}))]})},ie=Object(j.b)((function(e){return{sights:e.country.sights}}))((function(e){return Object(I.jsx)(re,{title:"\u0414\u043e\u0441\u0442\u043e\u043f\u0440\u0438\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",data:e})})),se=Object(y.a)((function(e){return{countryMap:{overflow:"hidden",position:"relative",minHeight:"40vh"},descriptionGrid:{padding:e.spacing(0,10,0,0)},widgetBox:{padding:e.spacing(2),backgroundColor:e.palette.grey[200],marginBottom:e.spacing(2)},image:{width:"100%"},capital:{padding:e.spacing(3,0,2,0)}}}));var le=function(e){var t=e.country,n=se();return Object(I.jsxs)(M.a,{children:[Object(I.jsx)(S.a,{variant:"h3",gutterBottom:!0,children:t.name}),Object(I.jsxs)(x.a,{container:!0,children:[Object(I.jsxs)(x.a,{item:!0,xs:12,md:9,className:n.descriptionGrid,children:[Object(I.jsx)("img",{className:n.image,src:t.image,alt:t.name}),Object(I.jsxs)(S.a,{className:n.capital,children:[Object(I.jsx)("b",{children:"\u0421\u0442\u043e\u043b\u0438\u0446\u0430:"})," ",t.capital.name]}),Object(I.jsx)(S.a,{gutterBottom:!0,children:t.description})]}),Object(I.jsxs)(x.a,{item:!0,xs:12,md:3,children:[Object(I.jsx)(D.a,{elevation:0,className:n.widgetBox,children:"\u041f\u043e\u0433\u043e\u0434\u0430"}),Object(I.jsx)(D.a,{elevation:0,className:n.widgetBox,children:"\u041a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442"}),Object(I.jsx)(D.a,{elevation:0,className:n.widgetBox,children:Object(I.jsx)(U,{})})]})]}),Object(I.jsx)(M.a,{my:5,children:Object(I.jsx)(ie,{})}),Object(I.jsx)(M.a,{my:5,children:Object(I.jsx)(Z,{className:n.countryMap})})]})},ue=Object(j.b)((function(e){return{loader:e.loader,country:e.country,locale:e.locale,error:e.error}}),(function(e){return{onLoadCountry:function(t){return e(g(t))}}}))((function(e){var t=e.loader,n=e.locale,c=void 0===n?"en":n,o=e.country,r=e.onLoadCountry,i=e.error,l=Object(s.g)().isoCode,u=Object(s.f)();return Object(a.useEffect)((function(){r(l)}),[c]),Object(a.useEffect)((function(){i&&u.push("/not-found")}),[i,u]),Object(I.jsxs)(I.Fragment,{children:[t&&Object(I.jsx)(F,{}),!t&&!!o&&Object(I.jsx)(le,{country:o})]})})),je=n(186),be=n(188),de=n(189),me=n(193),pe=n(18),he=n(91),Oe=n.n(he),fe=(n(93),n(92)),ge=n.n(fe),xe=n(6),ye=n(191),ve=n(194),Ce=n(67),Ne=n.n(Ce),ke=n(90),we=n.n(ke),Le=Object(y.a)((function(e){return{button:{color:e.palette.common.white},icon:{display:"inherit"},singleIcon:Object(K.a)({},e.breakpoints.down("sm"),{display:"flex",alignItems:"center"})}})),Se=Object(xe.a)({paper:{minWidth:"10rem"}})((function(e){return Object(I.jsx)(ye.a,Object(Y.a)({},e))})),Ie=function(e){var t=e.currentLocale,n=e.onLocaleChange,o=e.className,r=Le(),i=c.a.useState(null),s=Object(A.a)(i,2),l=s[0],u=s[1],j=function(){u(null)},b=Object(a.useCallback)((function(e){console.log(e.target.id),n(e.target.id),j()}),[n]);return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(L.a,{className:"".concat(r.button," ").concat(o),onClick:function(e){u(e.currentTarget)},startIcon:Object(I.jsx)(M.a,{component:"span",display:{xs:"none",md:"block"},children:Object(I.jsx)(Ne.a,{className:r.icon})}),endIcon:Object(I.jsx)(M.a,{component:"span",display:{xs:"none",md:"block"},children:Object(I.jsx)(we.a,{className:r.icon})}),children:[Object(I.jsx)(M.a,{component:"span",display:{xs:"none",md:"block"},children:t}),Object(I.jsx)(M.a,{display:{xs:"block",md:"none"},className:r.singleIcon,children:Object(I.jsx)(Ne.a,{})})]}),Object(I.jsxs)(Se,{anchorEl:l,open:!!l,onClose:j,children:[Object(I.jsx)(ve.a,{onClick:b,id:"ru",children:"ru"}),Object(I.jsx)(ve.a,{onClick:b,id:"en",children:"en"}),Object(I.jsx)(ve.a,{onClick:b,id:"uk",children:"uk"})]})]})},Re=Object(j.b)((function(e){return{locale:e.locale}}),(function(e){return{onLocaleChange:function(t){return e({type:"LOCALE",payload:t})}}}))((function(e){var t=e.locale,n=void 0===t?"en":t,a=e.onLocaleChange,c=e.className;return Object(I.jsx)(Ie,{currentLocale:n,onLocaleChange:a,className:c})})),Be=Object(y.a)((function(e){return{toolbar:Object(K.a)({},e.breakpoints.down("sm"),{justifyContent:"space-between"}),title:Object(K.a)({flexGrow:3,display:"none"},e.breakpoints.up("sm"),{display:"block"}),titleLink:{color:"white",textDecoration:"none",fontSize:"18px"},languageSwitch:{flexGrow:0},search:Object(K.a)({flexGrow:1,position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(pe.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(pe.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(K.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),loginBtn:{marginLeft:"10px"}}}));var ze=Object(j.b)((function(e){return{countries:e.countries}}))((function(e){e.countries;var t=Be(),n=Object(s.h)({path:"/countries/:isoCode",strict:!0,sensitive:!0});return Object(I.jsx)(je.a,{position:"fixed",children:Object(I.jsx)(u.a,{maxWidth:"lg",children:Object(I.jsxs)(be.a,{disableGutters:!0,className:t.toolbar,children:[Object(I.jsx)(S.a,{className:t.title,variant:"h6",noWrap:!0,children:Object(I.jsx)(i.b,{className:t.titleLink,to:"/",children:"Travel App"})}),Object(I.jsx)(Re,{className:t.languageSwitch}),!n&&Object(I.jsxs)("div",{className:t.search,children:[Object(I.jsx)("div",{className:t.searchIcon,children:Object(I.jsx)(Oe.a,{})}),Object(I.jsx)(me.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})]}),Object(I.jsx)(de.a,{className:t.loginBtn,children:Object(I.jsx)(ge.a,{})})]})})})})),Ee=n.p+"static/media/rs_school_1.1cc27900.svg",Fe=Object(y.a)((function(e){return{footer:{backgroundColor:e.palette.primary.main,color:"white",padding:e.spacing(3,0)},footerContainer:{justifyContent:"center",alignItems:"center"},date:Object(K.a)({display:"flex",alignItems:"center",justifyContent:"flex-end"},e.breakpoints.down("sm"),{justifyContent:"center"}),gitHubLink:{color:"white",textDecoration:"none"},gitHubList:Object(K.a)({display:"flex",flexGrow:1,alignItems:"center",justifyContent:"space-between"},e.breakpoints.down("sm"),{flexDirection:"column",alignItems:"center",marginTop:"20px",marginBottom:"20px"}),logo:Object(K.a)({width:"70px"},e.breakpoints.down("sm"),{textAlign:"center"})}})),Te=[{fullname:"Ivan Mikhalchanka",github:"https://github.com/spaceragga"},{fullname:"Aleksei Bulgak",github:"https://github.com/aleksei-bulgak-study"},{fullname:"Nikolai Voljenin",github:"https://github.com/Kvadeck"},{fullname:"Natalija Natein",github:"https://github.com/natein"},{fullname:"Alexandr Kudryavtcev",github:"https://github.com/kvalexandr"}],Me=function(e){var t=e.className,n=e.github,a=e.fullname;return Object(I.jsx)("a",{className:t,target:"_blank",rel:"noreferrer",href:n,children:a})};var De=function(e){e.className;var t=Fe();return Object(I.jsx)("footer",{className:t.footer,children:Object(I.jsx)(u.a,{maxWidth:"lg",className:t.footerContainer,children:Object(I.jsxs)(x.a,{container:!0,children:[Object(I.jsx)(x.a,{item:!0,xs:12,md:2,className:t.logo,children:Object(I.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://rs.school/js/",children:Object(I.jsx)("img",{className:t.logo,src:Ee,alt:"RSS"})})}),Object(I.jsx)(x.a,{item:!0,xs:12,md:8,className:t.gitHubList,children:Te.map((function(e){return Object(I.jsx)(Me,{className:t.gitHubLink,fullname:e.fullname,github:e.github},e.fullname)}))}),Object(I.jsx)(x.a,{item:!0,xs:12,md:2,className:t.date,children:(new Date).getFullYear()})]})})})},Ae=Object(y.a)((function(e){return{root:{position:"absolute",top:0,left:0,bottom:0,right:0,textAlign:"center",color:e.palette.text.primary,p:{color:e.palette.text.secondary}}}}));var Ge=Object(j.b)((function(e){return{error:e.error}}))((function(e){var t=e.error,n=e.className;return Object(I.jsxs)(x.a,{container:!0,spacing:2,className:"".concat(Ae().root," ").concat(n),direction:"column",justify:"center",children:[Object(I.jsx)(u.a,{component:"h1",children:"Page was not found."}),Object(I.jsx)(u.a,{component:"p",color:!0,children:t})]})})),_e=n(40),Pe=n(94),We=n(95),Ze=n(96),He={countries:[],country:null,locale:"uk",searchString:"",loader:!1,error:null},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADER":return Object(Y.a)(Object(Y.a)({},e),{},{loader:t.payload});case"ERROR":return Object(Y.a)(Object(Y.a)({},e),{},{loader:!1,error:t.payload});case"COUNTRIES":return Object(Y.a)(Object(Y.a)({},e),{},{countries:Object(Ze.a)(t.payload)});case"COUNTRY":return Object(Y.a)(Object(Y.a)({},e),{},{country:t.payload});case"LOCALE":return Object(Y.a)(Object(Y.a)({},e),{},{locale:t.payload});default:return e}},Ue=Object(Pe.composeWithDevTools)(Object(_e.applyMiddleware)(We.a)),Ye=Object(_e.createStore)(Je,Ue),Ke=Object(y.a)((function(e){return{rootContainer:{display:"flex",flexDirection:"column",minHeight:"100vh"},mainContent:{marginTop:e.spacing(12),marginBottom:e.spacing(4),flexGrow:1,position:"relative"},footer:{flex:"0 0 auto"}}}));var Qe=function(){var e=Ke();return Object(I.jsx)(j.a,{store:Ye,children:Object(I.jsxs)(i.a,{children:[Object(I.jsx)(l.a,{}),Object(I.jsxs)(M.a,{component:"div",className:e.rootContainer,children:[Object(I.jsx)(ze,{}),Object(I.jsx)(u.a,{component:"main",className:e.mainContent,children:Object(I.jsxs)(s.c,{children:[Object(I.jsx)(s.a,{path:["/countries","/"],component:T,exact:!0}),Object(I.jsx)(s.a,{path:"/countries/:isoCode",component:ue}),Object(I.jsx)(s.a,{path:"*",component:Ge})]})}),Object(I.jsx)(De,{className:e.footer})]})]})})};r.a.render(Object(I.jsx)(c.a.StrictMode,{children:Object(I.jsx)(Qe,{})}),document.getElementById("root"))}},[[143,1,2]]]);
//# sourceMappingURL=main.3d4d6ef5.chunk.js.map