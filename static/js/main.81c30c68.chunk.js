(this["webpackJsonptravel-app"]=this["webpackJsonptravel-app"]||[]).push([[0],{132:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(27),o=n.n(r),i=(n(98),n(47)),s=n(8),l=n(170),u=n(167),j=n(9),b=function(e){return{type:"LOADER",payload:e}},d=function(e){return{type:"ERROR",payload:e.message}},m=n(53),p=n.n(m),h="https://rss-travel-app.herokuapp.com",O=function(){return function(e,t){e(b(!0));var n=t(),a=n.locale;return function(e,t){var n="".concat(h,"/countries?locale=").concat(t,"&search=").concat(e);return p.a.get(n).then((function(e){return e.data}))}(n.searchString,a).then((function(t){return e(g(t))})).catch((function(t){return e(d(t))})).finally((function(){return e(e(b(!1)))}))}},g=function(e){return{type:"COUNTRIES",payload:e}},f=function(e){return function(t,n){t(b(!0));var a=n().locale;return function(e,t){var n="".concat(h,"/countries/").concat(e,"?locale=").concat(t);return p.a.get(n).then((function(e){return e.data}))}(e,a).then((function(e){return t({type:"COUNTRY",payload:e})})).catch((function(e){return t(d(e))})).finally((function(){return t(t(b(!1)))}))}},x=n(157),v=n(156),y=n(158),w=n(159),N=n(163),C=n(161),k=n(160),L=n(164),S=n(162),R=n(2),I=Object(v.a)({root:{maxWidth:345,margin:"0 auto"}});var B=function(e){var t=e.countries,n=e.onPreview,a=I();return Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(x.a,{container:!0,spacing:4,children:t.map((function(e){return Object(R.jsx)(x.a,{item:!0,xs:12,sm:6,md:3,children:Object(R.jsxs)(y.a,{className:a.root,children:[Object(R.jsxs)(w.a,{children:[Object(R.jsx)(k.a,{component:"img",alt:e.capital.name,height:"140",image:e.image,title:e.name}),Object(R.jsxs)(C.a,{children:[Object(R.jsx)(S.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.name}),Object(R.jsxs)(S.a,{variant:"body2",color:"textSecondary",component:"p",children:["Capital: ",e.capital.name]})]})]}),Object(R.jsxs)(N.a,{children:[Object(R.jsx)(L.a,{size:"small",color:"primary",children:"Share"}),Object(R.jsx)(L.a,{size:"small",color:"primary",onClick:function(){return n(e.isoCode)},children:"Learn More"})]})]})},e.isoCode)}))})})},z=n(165),E=Object(v.a)({root:{justifyContent:"center",alignItems:"center",position:"absolute",top:0,left:0,right:0,bottom:0}}),F=function(){var e=E();return Object(R.jsx)(x.a,{container:!0,spacing:4,className:e.root,children:Object(R.jsx)(z.a,{size:"10rem"})})},T=Object(j.b)((function(e){return{loader:e.loader,countries:e.countries,locale:e.locale}}),(function(e){return{onLoadCountries:function(){return e(O())}}}))((function(e){var t=e.loader,n=e.locale,c=void 0===n?"en":n,r=e.countries,o=e.onLoadCountries,i=Object(s.f)();Object(a.useEffect)((function(){o()}),[c]);var l=Object(a.useCallback)((function(e){return i.push("/countries/".concat(e))}),[i]);return Object(R.jsxs)(R.Fragment,{children:[t&&Object(R.jsx)(F,{}),!t&&r.length>0&&Object(R.jsx)(B,{countries:r,onPreview:l})]})})),D=n(171),M=n(88),A=n(31),G=n(40),P=n.n(G);P.a.accessToken="pk.eyJ1IjoiZWxlZG9uIiwiYSI6ImNrbTBmaGJrMjFpdzMydXJ6dDZmZW1vMWYifQ.7z-Hdb4FoPZCKJYM1it7Tw";var W=function(e){var t=e.className,n=e.isoCode,c=e.capitalCoordinates,r=e.locale,o=Object(a.useRef)(),i=Object(a.useState)(c.lon),s=Object(A.a)(i,2),l=s[0],u=s[1],j=Object(a.useState)(c.lat),b=Object(A.a)(j,2),d=b[0],m=b[1],p=Object(a.useState)(4),h=Object(A.a)(p,2),O=h[0],g=h[1];return Object(a.useEffect)((function(){var e=new P.a.Map({container:o.current,style:"mapbox://styles/mapbox/streets-v11",center:[l,d],zoom:O});return e.on("move",(function(){u(e.getCenter().lng.toFixed(6)),m(e.getCenter().lat.toFixed(6)),g(e.getZoom().toFixed(4))})),e.on("load",(function(){(new P.a.Marker).setLngLat([c.lon,c.lat]).addTo(e),e.addControl(new P.a.FullscreenControl),e.addLayer({id:"country-boundaries",source:{type:"vector",url:"mapbox://mapbox.country-boundaries-v1"},"source-layer":"country_boundaries",type:"fill",paint:{"fill-color":"#008080","fill-opacity":.4}},"country-label"),e.setLayoutProperty("country-label","text-field",["get","name_".concat("uk"!==r?r:"en")]),e.setFilter("country-boundaries",["in","iso_3166_1_alpha_3",n])})),function(){return e.remove()}}),[]),Object(R.jsx)(D.a,{className:"map-container ".concat(t),ref:o})};W.defaultProps={locale:"en",className:""};var _=W,Z=Object(j.b)((function(e){return{isoCode:e.country.isoCode,locale:e.locale,capitalCoordinates:e.country.capital.coordinates}}))((function(e){var t=e.className,n=e.locale,a=e.capitalCoordinates,c=e.isoCode;return Object(R.jsx)(_,{locale:n,capitalCoordinates:a,isoCode:c,className:t})})),H=Object(v.a)((function(e){return{date:{fontSize:"24px"},time:{fontSize:"28px"},center:{textAlign:"center"}}}));var U=function(e){var t,n=e.locale,c=e.timezone,r=H(),o=c.name,i={timeZone:o,month:"long",day:"numeric",weekday:"long"},s={timeZone:o,hour:"numeric",minute:"numeric",second:"numeric",hour12:!1},l=function(){return(new Date).toLocaleString(n,i)},u=function(){return(new Date).toLocaleString(n,s)},j=Object(a.useState)(l()),b=Object(A.a)(j,2),d=b[0],m=b[1],p=Object(a.useState)(u()),h=Object(A.a)(p,2),O=h[0],g=h[1];return Object(a.useEffect)((function(){var e=setInterval((function(){m(l()),g(u())}),1e3);return function(){return clearInterval(e)}})),Object(R.jsxs)(D.a,{className:r.center,children:[Object(R.jsx)(S.a,{className:r.date,children:(t=d,t[0].toUpperCase()+t.slice(1))}),Object(R.jsx)(S.a,{className:r.time,children:O})]})},J=Object(j.b)((function(e){return{locale:e.locale,timezone:e.country.timezone}}))((function(e){var t=e.locale,n=e.timezone;return Object(R.jsx)(U,{locale:t,timezone:n})})),Y=n(16),K=n(13),Q=n(75),V=n.n(Q);function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce((function(e,t){return e.push({original:t.image,thumbnail:t.image,description:t.description,thumbnailClass:"sight-thumbnail"}),e}),[])}n(130);var q=n(76),$=n.n(q),ee=n(77),te=n.n(ee),ne=n(78),ae=n.n(ne),ce=n(79),re=n.n(ce);var oe=function(e){var t=e.title,n=e.data.sights,a=Object(v.a)((function(e){var t;return{icon:(t={},Object(K.a)(t,e.breakpoints.down("sm"),{fontSize:"2rem"}),Object(K.a)(t,e.breakpoints.up("md"),{fontSize:"3.5rem"}),Object(K.a)(t,e.breakpoints.up("lg"),{fontSize:"4rem"}),t),fullScreenBtn:{bottom:"initial",top:"0"}}}))();return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("h1",{align:"center",children:t}),Object(R.jsx)(V.a,Object(Y.a)(Object(Y.a)({renderLeftNav:function(e,t){return Object(R.jsx)("button",{className:"image-gallery-icon image-gallery-left-nav",disabled:t,onClick:e,children:Object(R.jsx)($.a,{className:a.icon})})},renderRightNav:function(e,t){return Object(R.jsx)("button",{className:"image-gallery-icon image-gallery-right-nav",disabled:t,onClick:e,children:Object(R.jsx)(te.a,{className:a.icon})})},renderFullscreenButton:function(e,t){return Object(R.jsx)("button",{type:"button",className:"image-gallery-icon image-gallery-fullscreen-button image-gallery-fullscreen-button ".concat(a.fullScreenBtn," ").concat(t?" active":""),onClick:e,children:t?Object(R.jsx)(re.a,{className:a.icon}):Object(R.jsx)(ae.a,{className:a.icon})})}},{showPlayButton:!1,thumbnailPosition:"right",onErrorImageURL:"https://picsum.photos/id/1015/1000/600/"}),{},{items:X(n)}))]})},ie=Object(j.b)((function(e){return{sights:e.country.sights}}))((function(e){return Object(R.jsx)(oe,{title:"\u0414\u043e\u0441\u0442\u043e\u043f\u0440\u0438\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",data:e})})),se=Object(v.a)((function(e){return{box:{position:"relative",paddingBottom:"56.25%",paddingTop:"25px",height:"0",maxWidth:"1920px",margin:"0 auto"},player:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}}));var le=function(e){var t=e.title,n=e.video.video,a=se(),c=function(e){var t=e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);return t&&11===t[2].length?t[2]:null}(n);return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("h1",{align:"center",children:t}),c?Object(R.jsx)(D.a,{className:a.box,children:Object(R.jsx)("iframe",{title:t,className:a.player,type:"text/html",src:"https://www.youtube.com/embed/".concat(c),frameBorder:"0",allow:"accelerometer",autoPlay:!0,"clipboard-write":"true","encrypted-media":"true",gyroscope:"true","picture-in-picture":"true",allowFullScreen:!0})}):Object(R.jsx)("h1",{align:"center",children:"Oops something went wrong..."})]})},ue=Object(j.b)((function(e){return{video:e.country.video}}))((function(e){return Object(R.jsx)(le,{title:"\u0412\u0438\u0434\u0435\u043e",video:e})})),je=Object(v.a)((function(e){return{countryMap:{overflow:"hidden",position:"relative",minHeight:"40vh"},descriptionGrid:{padding:e.spacing(0,10,0,0)},widgetBox:{padding:e.spacing(2),backgroundColor:e.palette.grey[200],marginBottom:e.spacing(2)},image:{width:"100%"},capital:{padding:e.spacing(3,0,2,0)}}}));var be=function(e){var t=e.country,n=je();return Object(R.jsxs)(D.a,{children:[Object(R.jsx)(S.a,{variant:"h3",gutterBottom:!0,children:t.name}),Object(R.jsxs)(x.a,{container:!0,children:[Object(R.jsxs)(x.a,{item:!0,xs:12,md:9,className:n.descriptionGrid,children:[Object(R.jsx)("img",{className:n.image,src:t.image,alt:t.name}),Object(R.jsxs)(S.a,{className:n.capital,children:[Object(R.jsx)("b",{children:"\u0421\u0442\u043e\u043b\u0438\u0446\u0430:"})," ",t.capital.name]}),Object(R.jsx)(S.a,{gutterBottom:!0,children:t.description})]}),Object(R.jsxs)(x.a,{item:!0,xs:12,md:3,children:[Object(R.jsx)(M.a,{elevation:0,className:n.widgetBox,children:"\u041f\u043e\u0433\u043e\u0434\u0430"}),Object(R.jsx)(M.a,{elevation:0,className:n.widgetBox,children:"\u041a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442"}),Object(R.jsx)(M.a,{elevation:0,className:n.widgetBox,children:Object(R.jsx)(J,{})})]})]}),Object(R.jsx)(D.a,{my:5,children:Object(R.jsx)(ie,{})}),Object(R.jsx)(D.a,{my:5,children:Object(R.jsx)(Z,{className:n.countryMap})}),Object(R.jsx)(D.a,{my:5,children:Object(R.jsx)(ue,{})})]})},de=Object(j.b)((function(e){return{loader:e.loader,country:e.country,locale:e.locale,error:e.error}}),(function(e){return{onLoadCountry:function(t){return e(f(t))}}}))((function(e){var t=e.loader,n=e.locale,c=void 0===n?"en":n,r=e.country,o=e.onLoadCountry,i=e.error,l=Object(s.g)().isoCode,u=Object(s.f)();return Object(a.useEffect)((function(){o(l)}),[c]),Object(a.useEffect)((function(){i&&u.push("/not-found")}),[i,u]),Object(R.jsxs)(R.Fragment,{children:[t&&Object(R.jsx)(F,{}),!t&&!!r&&Object(R.jsx)(be,{country:r})]})})),me=n(166),pe=n(168),he=n(169),Oe=n(172),ge=n(15),fe=n(81),xe=n.n(fe),ve=(n(83),n(82)),ye=n.n(ve),we=n(80),Ne=n.n(we),Ce=Object(v.a)((function(e){return{select:{color:Object(ge.b)(e.palette.common.white,.5),fontSize:"1rem",padding:"8px 8px 8px 0px",minWidth:"7rem",borderRadius:e.shape.borderRadius,backgroundColor:Object(ge.b)(e.palette.background.default,.15),border:"none",outline:"none"},container:Object(K.a)({display:"flex",flexDirection:"row",alignItems:"center"},e.breakpoints.down("md"),{marginRight:e.spacing(1)}),icon:Object(K.a)({color:Object(ge.b)(e.palette.common.white,.5),marginRight:e.spacing(1)},e.breakpoints.down("md"),{display:"none"})}})),ke=function(e){var t=e.currentLocale,n=e.onLocaleChange,c=Ce(),r=Object(a.useCallback)((function(e){n(e.target.value)}),[n]);return Object(R.jsxs)(D.a,{className:c.container,children:[Object(R.jsx)(Ne.a,{className:c.icon}),Object(R.jsxs)("select",{value:t,onChange:r,className:c.select,children:[Object(R.jsx)("option",{value:"ru",children:"Russian"}),Object(R.jsx)("option",{value:"en",children:"English"}),Object(R.jsx)("option",{value:"uk",children:"Ukranian"})]})]})},Le=Object(j.b)((function(e){return{locale:e.locale}}),(function(e){return{onLocaleChange:function(t){return e({type:"LOCALE",payload:t})}}}))((function(e){var t=e.locale,n=void 0===t?"en":t,a=e.onLocaleChange,c=e.className;return Object(R.jsx)(ke,{currentLocale:n,onLocaleChange:a,className:c})})),Se=Object(v.a)((function(e){return{toolbar:Object(K.a)({},e.breakpoints.down("sm"),{justifyContent:"space-between"}),title:Object(K.a)({flexGrow:3,display:"none"},e.breakpoints.up("sm"),{display:"block"}),titleLink:{color:"white",textDecoration:"none",fontSize:"18px"},languageSwitch:{flexGrow:0},search:Object(K.a)({flexGrow:1,position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(ge.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(ge.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(K.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),loginBtn:{marginLeft:"10px"}}}));var Re=Object(j.b)((function(e){return{countries:e.countries}}))((function(e){e.countries;var t=Se(),n=Object(s.h)({path:"/countries/:isoCode",strict:!0,sensitive:!0});return Object(R.jsx)(me.a,{position:"fixed",children:Object(R.jsx)(u.a,{maxWidth:"lg",children:Object(R.jsxs)(pe.a,{disableGutters:!0,className:t.toolbar,children:[Object(R.jsx)(S.a,{className:t.title,variant:"h6",noWrap:!0,children:Object(R.jsx)(i.b,{className:t.titleLink,to:"/",children:"Travel App"})}),Object(R.jsx)(Le,{className:t.languageSwitch}),!n&&Object(R.jsxs)("div",{className:t.search,children:[Object(R.jsx)("div",{className:t.searchIcon,children:Object(R.jsx)(xe.a,{})}),Object(R.jsx)(Oe.a,{placeholder:"Search\u2026",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}})]}),Object(R.jsx)(he.a,{className:t.loginBtn,children:Object(R.jsx)(ye.a,{})})]})})})})),Ie=n.p+"static/media/rs_school_1.1cc27900.svg",Be=Object(v.a)((function(e){return{footer:{backgroundColor:e.palette.primary.main,color:"white",padding:e.spacing(3,0)},footerContainer:{justifyContent:"center",alignItems:"center"},date:Object(K.a)({display:"flex",alignItems:"center",justifyContent:"flex-end"},e.breakpoints.down("sm"),{justifyContent:"center"}),gitHubLink:{color:"white",textDecoration:"none"},gitHubList:Object(K.a)({display:"flex",flexGrow:1,alignItems:"center",justifyContent:"space-between"},e.breakpoints.down("sm"),{flexDirection:"column",alignItems:"center",marginTop:"20px",marginBottom:"20px"}),logo:Object(K.a)({width:"70px"},e.breakpoints.down("sm"),{textAlign:"center"})}})),ze=[{fullname:"Ivan Mikhalchanka",github:"https://github.com/spaceragga"},{fullname:"Aleksei Bulgak",github:"https://github.com/aleksei-bulgak-study"},{fullname:"Nikolai Voljenin",github:"https://github.com/Kvadeck"},{fullname:"Natalija Natein",github:"https://github.com/natein"},{fullname:"Alexandr Kudryavtcev",github:"https://github.com/kvalexandr"}],Ee=function(e){var t=e.className,n=e.github,a=e.fullname;return Object(R.jsx)("a",{className:t,target:"_blank",rel:"noreferrer",href:n,children:a})};var Fe=function(e){e.className;var t=Be();return Object(R.jsx)("footer",{className:t.footer,children:Object(R.jsx)(u.a,{maxWidth:"lg",className:t.footerContainer,children:Object(R.jsxs)(x.a,{container:!0,children:[Object(R.jsx)(x.a,{item:!0,xs:12,md:2,className:t.logo,children:Object(R.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://rs.school/js/",children:Object(R.jsx)("img",{className:t.logo,src:Ie,alt:"RSS"})})}),Object(R.jsx)(x.a,{item:!0,xs:12,md:8,className:t.gitHubList,children:ze.map((function(e){return Object(R.jsx)(Ee,{className:t.gitHubLink,fullname:e.fullname,github:e.github},e.fullname)}))}),Object(R.jsx)(x.a,{item:!0,xs:12,md:2,className:t.date,children:(new Date).getFullYear()})]})})})},Te=Object(v.a)((function(e){return{root:{position:"absolute",top:0,left:0,bottom:0,right:0,textAlign:"center",color:e.palette.text.primary,p:{color:e.palette.text.secondary}}}}));var De=Object(j.b)((function(e){return{error:e.error}}))((function(e){var t=e.error,n=e.className;return Object(R.jsxs)(x.a,{container:!0,spacing:2,className:"".concat(Te().root," ").concat(n),direction:"column",justify:"center",children:[Object(R.jsx)(u.a,{component:"h1",children:"Page was not found."}),Object(R.jsx)(u.a,{component:"p",color:!0,children:t})]})})),Me=n(33),Ae=n(84),Ge=n(85),Pe=n(86),We={countries:[],country:null,locale:"uk",searchString:"",loader:!1,error:null},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADER":return Object(Y.a)(Object(Y.a)({},e),{},{loader:t.payload});case"ERROR":return Object(Y.a)(Object(Y.a)({},e),{},{loader:!1,error:t.payload});case"COUNTRIES":return Object(Y.a)(Object(Y.a)({},e),{},{countries:Object(Pe.a)(t.payload)});case"COUNTRY":return Object(Y.a)(Object(Y.a)({},e),{},{country:t.payload});case"LOCALE":return Object(Y.a)(Object(Y.a)({},e),{},{locale:t.payload});default:return e}},Ze=Object(Ae.composeWithDevTools)(Object(Me.applyMiddleware)(Ge.a)),He=Object(Me.createStore)(_e,Ze),Ue=Object(v.a)((function(e){return{rootContainer:{display:"flex",flexDirection:"column",minHeight:"100vh"},mainContent:{marginTop:e.spacing(12),marginBottom:e.spacing(4),flexGrow:1,position:"relative"},footer:{flex:"0 0 auto"}}}));var Je=function(){var e=Ue();return Object(R.jsx)(j.a,{store:He,children:Object(R.jsxs)(i.a,{children:[Object(R.jsx)(l.a,{}),Object(R.jsxs)(D.a,{component:"div",className:e.rootContainer,children:[Object(R.jsx)(Re,{}),Object(R.jsx)(u.a,{component:"main",className:e.mainContent,children:Object(R.jsxs)(s.c,{children:[Object(R.jsx)(s.a,{path:["/countries","/"],component:T,exact:!0}),Object(R.jsx)(s.a,{path:"/countries/:isoCode",component:de}),Object(R.jsx)(s.a,{path:"*",component:De})]})}),Object(R.jsx)(Fe,{className:e.footer})]})]})})};o.a.render(Object(R.jsx)(c.a.StrictMode,{children:Object(R.jsx)(Je,{})}),document.getElementById("root"))},98:function(e,t,n){}},[[132,1,2]]]);
//# sourceMappingURL=main.81c30c68.chunk.js.map