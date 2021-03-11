(this["webpackJsonptravel-app"]=this["webpackJsonptravel-app"]||[]).push([[0],{111:function(e,t,n){},153:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(32),o=n.n(r),i=(n(111),n(54)),l=n(8),s=n(187),u=n(184),b=n(9),j=function(e){return{type:"LOADER",payload:e}},d=function(e){return{type:"ERROR",payload:e.message}},m=n(41),p=n.n(m),h="https://rss-travel-app.herokuapp.com",O=function(){return function(e,t){e(j(!0));var n=t(),a=n.locale;return function(e,t){var n="".concat(h,"/countries?locale=").concat(t,"&search=").concat(e);return p.a.get(n).then((function(e){return e.data}))}(n.searchString,a).then((function(t){return e(f(t))})).catch((function(t){return e(d(t))})).finally((function(){return e(e(j(!1)))}))}},f=function(e){return{type:"COUNTRIES",payload:e}},g=function(e){return function(t,n){t(j(!0));var a=n().locale;return function(e,t){var n="".concat(h,"/countries/").concat(e,"?locale=").concat(t);return p.a.get(n).then((function(e){return e.data}))}(e,a).then((function(e){return t({type:"COUNTRY",payload:e})})).catch((function(e){return t(d(e))})).finally((function(){return t(t(j(!1)))}))}},x=n(174),y=n(173),v=n(15),C=n(175),w=n(176),N=n(180),k=n(178),L=n(177),S=n(181),R=n(179),E=n(191),_=n(1),I=Object(y.a)((function(e){return{root:{maxWidth:345,margin:"0 auto","&:hover":{boxShadow:"0 5px 8px 0 ".concat(Object(v.b)(e.palette.primary.main,.4),",\n                        0 5px 8px 0 ").concat(Object(v.b)(e.palette.primary.main,.4)),"& *":{color:e.palette.primary.light}}}}}));var B=function(e){var t=e.countries,n=e.onPreview,a=I(),c=Object(E.a)().t;return Object(_.jsx)(_.Fragment,{children:Object(_.jsx)(x.a,{container:!0,spacing:4,children:t.map((function(e){return Object(_.jsx)(x.a,{item:!0,xs:12,sm:6,md:3,children:Object(_.jsxs)(C.a,{className:a.root,children:[Object(_.jsxs)(w.a,{onClick:function(){return n(e.isoCode)},children:[Object(_.jsx)(L.a,{component:"img",alt:e.capital.name,height:"140",image:e.image,title:e.name}),Object(_.jsxs)(k.a,{children:[Object(_.jsx)(R.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.name}),Object(_.jsxs)(R.a,{variant:"body2",color:"textSecondary",component:"p",children:[c("labels.capital")," ",e.capital.name]})]})]}),Object(_.jsx)(N.a,{children:Object(_.jsx)(S.a,{size:"small",color:"primary",onClick:function(){return n(e.isoCode)},children:c("labels.view")})})]})},e.isoCode)}))})})},T=n(182),F=Object(y.a)({root:{justifyContent:"center",alignItems:"center",position:"absolute",top:0,left:0,right:0,bottom:0}}),P=function(){var e=F();return Object(_.jsx)(x.a,{container:!0,spacing:4,className:e.root,children:Object(_.jsx)(T.a,{size:"10rem"})})},A=Object(b.b)((function(e){return{loader:e.loader,countries:e.countries,locale:e.locale}}),(function(e){return{onLoadCountries:function(){return e(O())}}}))((function(e){var t=e.loader,n=e.locale,c=void 0===n?"en":n,r=e.countries,o=e.onLoadCountries,i=Object(l.f)();Object(a.useEffect)((function(){o()}),[c]);var s=Object(a.useCallback)((function(e){return i.push("/countries/".concat(e))}),[i]);return Object(_.jsxs)(_.Fragment,{children:[t&&Object(_.jsx)(P,{}),!t&&r.length>0&&Object(_.jsx)(B,{countries:r,onPreview:s})]})})),z=function(){return function(e){return function(){var e="https://cors-anywhere.herokuapp.com/".concat("https://www.cbr-xml-daily.ru/daily_json.js");return console.log(e),p.a.get(e).then((function(e){return e.data}))}().then((function(t){return e(D(t))}))}},D=function(e){return{type:"CURRENCY",payload:e}},U=n(188),M=n(100),W=n(37),G=n(45),Z=n.n(G);Z.a.accessToken="pk.eyJ1IjoiZWxlZG9uIiwiYSI6ImNrbTBmaGJrMjFpdzMydXJ6dDZmZW1vMWYifQ.7z-Hdb4FoPZCKJYM1it7Tw";var Y=function(e){var t=e.className,n=e.isoCode,c=e.capitalCoordinates,r=e.locale,o=e.title,i=Object(a.useRef)(),l=Object(a.useState)(c.lon),s=Object(W.a)(l,2),u=s[0],b=s[1],j=Object(a.useState)(c.lat),d=Object(W.a)(j,2),m=d[0],p=d[1],h=Object(a.useState)(4),O=Object(W.a)(h,2),f=O[0],g=O[1];return Object(a.useEffect)((function(){var e=new Z.a.Map({container:i.current,style:"mapbox://styles/mapbox/streets-v11",center:[u,m],zoom:f});return e.on("move",(function(){b(e.getCenter().lng.toFixed(6)),p(e.getCenter().lat.toFixed(6)),g(e.getZoom().toFixed(4))})),e.on("load",(function(){(new Z.a.Marker).setLngLat([c.lon,c.lat]).addTo(e),e.addControl(new Z.a.FullscreenControl),e.addLayer({id:"country-boundaries",source:{type:"vector",url:"mapbox://mapbox.country-boundaries-v1"},"source-layer":"country_boundaries",type:"fill",paint:{"fill-color":"#008080","fill-opacity":.4}},"country-label"),e.setLayoutProperty("country-label","text-field",["get","name_".concat("uk"!==r?r:"en")]),e.setFilter("country-boundaries",["in","iso_3166_1_alpha_3",n])})),function(){return e.remove()}}),[]),Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h1",{align:"center",children:o}),Object(_.jsx)(U.a,{className:"map-container ".concat(t),ref:i})]})};Y.defaultProps={locale:"en",className:""};var H=Y,J=Object(b.b)((function(e){return{isoCode:e.country.isoCode,locale:e.locale,capitalCoordinates:e.country.capital.coordinates}}))((function(e){var t=e.className,n=e.locale,a=e.capitalCoordinates,c=e.isoCode,r=Object(E.a)().t;return Object(_.jsx)(H,{locale:n,capitalCoordinates:a,isoCode:c,className:t,title:r("labels.map")})})),K=Object(y.a)((function(e){return{date:{fontSize:"24px"},time:{fontSize:"28px"},center:{textAlign:"center"}}}));var V=function(e){var t,n=e.locale,c=e.timezone,r=K(),o=c.name,i={timeZone:o,month:"long",day:"numeric",weekday:"long"},l={timeZone:o,hour:"numeric",minute:"numeric",second:"numeric",hour12:!1},s=function(){return(new Date).toLocaleString(n,i)},u=function(){return(new Date).toLocaleString(n,l)},b=Object(a.useState)(s()),j=Object(W.a)(b,2),d=j[0],m=j[1],p=Object(a.useState)(u()),h=Object(W.a)(p,2),O=h[0],f=h[1];return Object(a.useEffect)((function(){var e=setInterval((function(){m(s()),f(u())}),1e3);return function(){return clearInterval(e)}})),Object(_.jsxs)(U.a,{className:r.center,children:[Object(_.jsx)(R.a,{className:r.date,children:(t=d,t[0].toUpperCase()+t.slice(1))}),Object(_.jsx)(R.a,{className:r.time,children:O})]})},X=Object(b.b)((function(e){return{locale:e.locale,timezone:e.country.timezone}}))((function(e){var t=e.locale,n=e.timezone;return Object(_.jsx)(V,{locale:t,timezone:n})})),Q=Object(y.a)((function(e){return{title:{fontSize:"24px"},center:{textAlign:"center"},currency:{fontSize:"18px"}}}));var q=function(e){var t=e.currency,n=e.country,a=Q(),c=Object(E.a)().t,r=t.Valute,o=n.currency.code,i=r[o].Value,l=[{name:"RUB",value:i.toFixed(2)},{name:"USD",value:(i/r.USD.Value).toFixed(2)},{name:"EUR",value:(i/r.EUR.Value).toFixed(2)}];return Object(_.jsxs)(U.a,{className:a.center,children:[Object(_.jsxs)(R.a,{className:a.title,children:[c("labels.currency")," ",o]}),Object(_.jsx)(R.a,{className:a.currency,children:l.map((function(e){return o!==e.name?Object(_.jsx)(U.a,{children:"".concat(e.value," ").concat(e.name)}):""}))})]})},$=Object(b.b)((function(e){return{locale:e.locale,currency:e.currency,country:e.country}}))((function(e){var t=e.currency,n=e.country;return Object(_.jsx)(q,{currency:t,country:n})})),ee=n(16),te=n(14),ne=n(85),ae=n.n(ne);function ce(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce((function(e,t){return e.push({original:t.image,thumbnail:t.image,description:t.description,thumbnailClass:"sight-thumbnail"}),e}),[])}n(152);var re=n(86),oe=n.n(re),ie=n(87),le=n.n(ie),se=n(88),ue=n.n(se),be=n(89),je=n.n(be);var de=function(e){var t=e.title,n=e.data.sights,a=Object(y.a)((function(e){var t;return{icon:(t={},Object(te.a)(t,e.breakpoints.down("sm"),{fontSize:"2rem"}),Object(te.a)(t,e.breakpoints.up("md"),{fontSize:"3.5rem"}),Object(te.a)(t,e.breakpoints.up("lg"),{fontSize:"4rem"}),t),fullScreenBtn:{bottom:"initial",top:"0"}}}))();return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h1",{align:"center",children:t}),Object(_.jsx)(ae.a,Object(ee.a)(Object(ee.a)({renderLeftNav:function(e,t){return Object(_.jsx)("button",{className:"image-gallery-icon image-gallery-left-nav",disabled:t,onClick:e,children:Object(_.jsx)(oe.a,{className:a.icon})})},renderRightNav:function(e,t){return Object(_.jsx)("button",{className:"image-gallery-icon image-gallery-right-nav",disabled:t,onClick:e,children:Object(_.jsx)(le.a,{className:a.icon})})},renderFullscreenButton:function(e,t){return Object(_.jsx)("button",{type:"button",className:"image-gallery-icon image-gallery-fullscreen-button image-gallery-fullscreen-button ".concat(a.fullScreenBtn," ").concat(t?" active":""),onClick:e,children:t?Object(_.jsx)(je.a,{className:a.icon}):Object(_.jsx)(ue.a,{className:a.icon})})}},{showPlayButton:!1,thumbnailPosition:"right",onErrorImageURL:"https://picsum.photos/id/1015/1000/600/"}),{},{items:ce(n)}))]})},me=Object(b.b)((function(e){return{sights:e.country.sights}}))((function(e){var t=Object(E.a)().t;return Object(_.jsx)(de,{title:t("labels.sights"),data:e})})),pe=Object(y.a)((function(e){return{box:{position:"relative",paddingBottom:"56.25%",paddingTop:"25px",height:"0",maxWidth:"1920px",margin:"0 auto"},player:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}}));var he=function(e){var t=e.title,n=e.video.video,a=pe(),c=function(e){var t=e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);return t&&11===t[2].length?t[2]:null}(n);return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)("h1",{align:"center",children:t}),c?Object(_.jsx)(U.a,{className:a.box,children:Object(_.jsx)("iframe",{title:t,className:a.player,type:"text/html",src:"https://www.youtube.com/embed/".concat(c),frameBorder:"0",allow:"accelerometer",autoPlay:!0,"clipboard-write":"true","encrypted-media":"true",gyroscope:"true","picture-in-picture":"true",allowFullScreen:!0})}):Object(_.jsx)("h1",{align:"center",children:"Oops something went wrong..."})]})},Oe=Object(b.b)((function(e){return{video:e.country.video}}))((function(e){var t=Object(E.a)().t;return Object(_.jsx)(he,{title:t("labels.video"),video:e})})),fe=Object(y.a)((function(e){return{countryMap:{overflow:"hidden",position:"relative",minHeight:"40vh"},descriptionGrid:{padding:e.spacing(0,10,0,0)},widgetBox:{padding:e.spacing(2),backgroundColor:e.palette.grey[200],marginBottom:e.spacing(2)},image:{width:"100%"},capital:{padding:e.spacing(3,0,2,0)}}}));var ge=function(e){var t=e.country,n=e.currency,a=(e.loaderCurrency,fe()),c=Object(E.a)().t;return Object(_.jsxs)(U.a,{children:[Object(_.jsx)(R.a,{variant:"h3",gutterBottom:!0,children:t.name}),Object(_.jsxs)(x.a,{container:!0,children:[Object(_.jsxs)(x.a,{item:!0,xs:12,md:9,className:a.descriptionGrid,children:[Object(_.jsx)("img",{className:a.image,src:t.image,alt:t.name}),Object(_.jsxs)(R.a,{className:a.capital,children:[Object(_.jsx)("b",{children:c("labels.capital")})," ",t.capital.name]}),Object(_.jsx)(R.a,{gutterBottom:!0,children:t.description})]}),Object(_.jsxs)(x.a,{item:!0,xs:12,md:3,children:[Object(_.jsx)(M.a,{elevation:0,className:a.widgetBox,children:c("labels.weather")}),n?Object(_.jsx)(M.a,{elevation:0,className:a.widgetBox,children:Object(_.jsx)($,{})}):"",Object(_.jsx)(M.a,{elevation:0,className:a.widgetBox,children:Object(_.jsx)(X,{})})]})]}),Object(_.jsx)(U.a,{my:5,children:Object(_.jsx)(me,{})}),Object(_.jsx)(U.a,{my:5,children:Object(_.jsx)(J,{className:a.countryMap})}),Object(_.jsx)(U.a,{my:5,children:Object(_.jsx)(Oe,{})})]})},xe=Object(b.b)((function(e){return{loader:e.loader,country:e.country,locale:e.locale,error:e.error,currency:e.currency}}),(function(e){return{onLoadCountry:function(t){return e(g(t))},onLoadCurrency:function(){return e(z())}}}))((function(e){var t=e.loader,n=e.locale,c=void 0===n?"en":n,r=e.country,o=e.onLoadCountry,i=e.error,s=e.onLoadCurrency,u=e.currency,b=Object(l.g)().isoCode,j=Object(l.f)();return Object(a.useEffect)((function(){o(b),s()}),[c]),Object(a.useEffect)((function(){i&&j.push("/not-found")}),[i,j]),Object(_.jsxs)(_.Fragment,{children:[t&&Object(_.jsx)(P,{}),!t&&!!r&&Object(_.jsx)(ge,{country:r,currency:u})]})})),ye=n(183),ve=n(185),Ce=n(189),we=n(186),Ne=n(91),ke=n.n(Ne),Le=(n(93),n(92)),Se=n.n(Le),Re=n(90),Ee=n.n(Re),_e=Object(y.a)((function(e){return{select:{color:Object(v.b)(e.palette.common.white,.5),fontSize:"1rem",padding:"8px",minWidth:"5rem",borderRadius:e.shape.borderRadius,backgroundColor:Object(v.b)(e.palette.background.default,.15),border:"none",outline:"none",appearance:"none","&:hover":{backgroundColor:Object(v.b)(e.palette.background.default,.4)},"&>option":{color:e.palette.common.black}},container:Object(te.a)({display:"flex",flexDirection:"row",alignItems:"center"},e.breakpoints.down("md"),{marginRight:e.spacing(1)}),icon:Object(te.a)({color:Object(v.b)(e.palette.common.white,.5),marginRight:e.spacing(1)},e.breakpoints.down("md"),{display:"none"})}})),Ie=function(e){var t=e.currentLocale,n=e.onLocaleChange,c=_e(),r=Object(E.a)(),o=r.t,i=r.i18n;Object(a.useEffect)((function(){i.changeLanguage(t)}),[t,i]);var l=Object(a.useCallback)((function(e){n(e.target.value)}),[n]);return Object(_.jsxs)(U.a,{className:c.container,children:[Object(_.jsx)(Ee.a,{className:c.icon}),Object(_.jsxs)("select",{value:t,onChange:l,className:c.select,children:[Object(_.jsx)("option",{value:"ru",children:o("labels.locale.ru")}),Object(_.jsx)("option",{value:"en",children:o("labels.locale.en")}),Object(_.jsx)("option",{value:"uk",children:o("labels.locale.uk")})]})]})},Be=Object(b.b)((function(e){return{locale:e.locale}}),(function(e){return{onLocaleChange:function(t){return e({type:"LOCALE",payload:t})}}}))((function(e){var t=e.locale,n=void 0===t?"en":t,a=e.onLocaleChange,c=e.className;return Object(_.jsx)(Ie,{currentLocale:n,onLocaleChange:a,className:c})})),Te=Object(y.a)((function(e){return{toolbar:Object(te.a)({},e.breakpoints.down("sm"),{justifyContent:"space-between"}),title:Object(te.a)({flexGrow:3,display:"none"},e.breakpoints.up("sm"),{display:"block"}),titleLink:{color:"white",textDecoration:"none",fontSize:"18px"},languageSwitch:{flexGrow:0},search:Object(te.a)({flexGrow:1,display:"flex",justifyContent:"space-between",position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(v.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(v.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},searchButton:{color:"white",border:"2px solid rgba(255, 255, 255, 0.2)",borderLeftColor:"white","&:hover":{border:"none"}},inputRoot:{color:"inherit",flexGrow:"1"},inputInput:Object(te.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}}),loginBtn:{marginLeft:"10px"}}}));var Fe=Object(b.b)((function(e){return{countries:e.countries}}))((function(e){e.countries;var t=Te(),n=Object(E.a)().t,a=Object(l.h)({path:"/countries/:isoCode",strict:!0,sensitive:!0});return Object(_.jsx)(ye.a,{position:"fixed",children:Object(_.jsx)(u.a,{maxWidth:"lg",children:Object(_.jsxs)(ve.a,{disableGutters:!0,className:t.toolbar,children:[Object(_.jsx)(R.a,{className:t.title,variant:"h6",noWrap:!0,children:Object(_.jsx)(i.b,{className:t.titleLink,to:"/",children:"Travel App"})}),!a&&Object(_.jsxs)("div",{className:t.search,children:[Object(_.jsx)("div",{className:t.searchIcon,children:Object(_.jsx)(ke.a,{})}),Object(_.jsx)(Ce.a,{autoFocus:!0,autoComplete:"false",placeholder:n("labels.search.placeholder"),classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"},onChange:function(){return console.log("change")}}),Object(_.jsx)(S.a,{variant:"outlined",color:"primary",className:t.searchButton,onClick:function(){return console.log("search")},children:n("labels.search.button")})]}),Object(_.jsx)(Be,{className:t.languageSwitch}),Object(_.jsx)(we.a,{className:t.loginBtn,children:Object(_.jsx)(Se.a,{})})]})})})})),Pe=n.p+"static/media/rs_school_1.1cc27900.svg",Ae=Object(y.a)((function(e){return{footer:{backgroundColor:e.palette.primary.main,color:"white",padding:e.spacing(3,0)},footerContainer:{justifyContent:"center",alignItems:"center"},date:Object(te.a)({display:"flex",alignItems:"center",justifyContent:"flex-end"},e.breakpoints.down("sm"),{justifyContent:"center"}),gitHubLink:{color:"white",textDecoration:"none"},gitHubList:Object(te.a)({display:"flex",flexGrow:1,alignItems:"center",justifyContent:"space-between"},e.breakpoints.down("sm"),{flexDirection:"column",alignItems:"center",marginTop:"20px",marginBottom:"20px"}),logo:Object(te.a)({width:"70px"},e.breakpoints.down("sm"),{textAlign:"center"})}})),ze=[{fullname:"Ivan Mikhalchanka",github:"https://github.com/spaceragga"},{fullname:"Aleksei Bulgak",github:"https://github.com/aleksei-bulgak-study"},{fullname:"Nikolai Volzhenin",github:"https://github.com/Kvadeck"},{fullname:"Natalija Natein",github:"https://github.com/natein"},{fullname:"Alexandr Kudryavtcev",github:"https://github.com/kvalexandr"}],De=function(e){var t=e.className,n=e.github,a=e.fullname;return Object(_.jsx)("a",{className:t,target:"_blank",rel:"noreferrer",href:n,children:a})};var Ue=function(e){e.className;var t=Ae();return Object(_.jsx)("footer",{className:t.footer,children:Object(_.jsx)(u.a,{maxWidth:"lg",className:t.footerContainer,children:Object(_.jsxs)(x.a,{container:!0,children:[Object(_.jsx)(x.a,{item:!0,xs:12,md:2,className:t.logo,children:Object(_.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://rs.school/js/",children:Object(_.jsx)("img",{className:t.logo,src:Pe,alt:"RSS"})})}),Object(_.jsx)(x.a,{item:!0,xs:12,md:8,className:t.gitHubList,children:ze.map((function(e){return Object(_.jsx)(De,{className:t.gitHubLink,fullname:e.fullname,github:e.github},e.fullname)}))}),Object(_.jsx)(x.a,{item:!0,xs:12,md:2,className:t.date,children:(new Date).getFullYear()})]})})})},Me=Object(y.a)((function(e){return{root:{position:"absolute",top:0,left:0,bottom:0,right:0,textAlign:"center",color:e.palette.text.primary,p:{color:e.palette.text.secondary}}}}));var We=Object(b.b)((function(e){return{error:e.error}}))((function(e){var t=e.error,n=e.className,a=Object(E.a)().t;return Object(_.jsxs)(x.a,{container:!0,spacing:2,className:"".concat(Me().root," ").concat(n),direction:"column",justify:"center",children:[Object(_.jsx)(u.a,{component:"h1",children:a("labels.error")}),Object(_.jsx)(u.a,{component:"p",color:!0,children:t})]})})),Ge=n(38),Ze=n(94),Ye=n(95),He=n(98),Je={countries:[],country:null,locale:"ru",searchString:"",loader:!1,error:null,currency:null},Ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADER":return Object(ee.a)(Object(ee.a)({},e),{},{loader:t.payload});case"ERROR":return Object(ee.a)(Object(ee.a)({},e),{},{loader:!1,error:t.payload});case"COUNTRIES":return Object(ee.a)(Object(ee.a)({},e),{},{countries:Object(He.a)(t.payload)});case"COUNTRY":return Object(ee.a)(Object(ee.a)({},e),{},{country:t.payload});case"CURRENCY":return Object(ee.a)(Object(ee.a)({},e),{},{currency:t.payload});case"LOCALE":return Object(ee.a)(Object(ee.a)({},e),{},{locale:t.payload});default:return e}},Ve=Object(Ze.composeWithDevTools)(Object(Ge.applyMiddleware)(Ye.a)),Xe=Object(Ge.createStore)(Ke,Ve),Qe=Object(y.a)((function(e){return{rootContainer:{display:"flex",flexDirection:"column",minHeight:"100vh"},mainContent:{marginTop:e.spacing(12),marginBottom:e.spacing(4),flexGrow:1,position:"relative"},footer:{flex:"0 0 auto"}}}));var qe=function(){var e=Qe();return Object(_.jsx)(a.Suspense,{fallback:"loading...",children:Object(_.jsx)(b.a,{store:Xe,children:Object(_.jsxs)(i.a,{children:[Object(_.jsx)(s.a,{}),Object(_.jsxs)(U.a,{component:"div",className:e.rootContainer,children:[Object(_.jsx)(Fe,{}),Object(_.jsx)(u.a,{component:"main",className:e.mainContent,children:Object(_.jsxs)(l.c,{children:[Object(_.jsx)(l.a,{path:["/countries","/"],component:A,exact:!0}),Object(_.jsx)(l.a,{path:"/countries/:isoCode",component:xe}),Object(_.jsx)(l.a,{path:"*",component:We})]})}),Object(_.jsx)(Ue,{className:e.footer})]})]})})})},$e=n(63),et=n(44),tt=n(96);$e.a.use(tt.a).use(et.e).init({debug:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_MAPBOX_TOKEN:"pk.eyJ1IjoiZWxlZG9uIiwiYSI6ImNrbTBmaGJrMjFpdzMydXJ6dDZmZW1vMWYifQ.7z-Hdb4FoPZCKJYM1it7Tw",REACT_APP_API:"https://rss-travel-app.herokuapp.com",REACT_APP_CURRENCY_URL:"https://www.cbr-xml-daily.ru/daily_json.js"}).REACT_APP_I18N_LOG_LEVEL||!1,fallbackLng:"en",supportedLngs:["en","ru","uk"],interpolation:{escapeValue:!1},react:{useSuspense:!0},backend:{loadPath:"/translations/{{lng}}/{{ns}}.json"}});$e.a;o.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(qe,{})}),document.getElementById("root"))}},[[153,1,2]]]);
//# sourceMappingURL=main.b707ed7e.chunk.js.map