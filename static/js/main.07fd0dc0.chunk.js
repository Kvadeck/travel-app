(this["webpackJsonptravel-app"]=this["webpackJsonptravel-app"]||[]).push([[0],{123:function(e,t,n){},165:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(17),r=n.n(c),o=(n(123),n(66)),i=n(8),l=n(204),s=n(201),u=n(10),d=function(e){return{type:"LOADER",payload:e}},j=function(e){return{type:"ERROR",payload:e.message}},b=n(42),p=n.n(b),m="https://rss-travel-app.herokuapp.com",h=function(){return function(e,t){e(d(!0));var n=t(),a=n.locale,c=n.search;return function(e){var t="".concat(m,"/countries?locale=").concat(e);return p.a.get(t).then((function(e){return e.data}))}(a).then((function(t){return e(O(t))})).then((function(){return e(x(c))})).catch((function(t){return e(j(t))})).finally((function(){return e(e(d(!1)))}))}},O=function(e){return{type:"COUNTRIES",payload:e}},f=function(e){return function(t,n){t(d(!0));var a=n().locale;return function(e,t){var n="".concat(m,"/countries/").concat(e,"?locale=").concat(t);return p.a.get(n).then((function(e){return e.data}))}(e,a).then((function(e){return t({type:"COUNTRY",payload:e})})).catch((function(e){return t(j(e))})).finally((function(){return t(t(d(!1)))}))}},x=function(e){return{type:"FILTER_COUNTRIES",payload:e}},g=n(189),y=n(188),v=n(19),w=n(191),C=n(192),N=n(194),k=n(193),R=n(195),S=n(208),L=n(1),E=Object(y.a)((function(e){return{root:{maxWidth:345,margin:"0 auto","&:hover":{boxShadow:"0 5px 8px 0 ".concat(Object(v.b)(e.palette.primary.main,.4),",\n                        0 5px 8px 0 ").concat(Object(v.b)(e.palette.primary.main,.4)),"& *":{color:e.palette.primary.light}}},card:{padding:"2px 0px 2px 0px",height:"6rem",textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center"}}}));var I=function(e){var t=e.onPreview,n=e.countries,a=E(),c=Object(S.a)().t;return Object(L.jsx)(L.Fragment,{children:Object(L.jsx)(g.a,{container:!0,spacing:4,children:n.map((function(e){return Object(L.jsx)(g.a,{item:!0,xs:12,sm:6,md:3,onClick:function(){return t(e.isoCode)},children:Object(L.jsx)(w.a,{className:a.root,children:Object(L.jsxs)(C.a,{children:[Object(L.jsx)(k.a,{component:"img",alt:e.capital.name,height:"140",image:e.image,title:e.name}),Object(L.jsxs)(N.a,{className:a.card,children:[Object(L.jsx)(R.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.name}),Object(L.jsxs)(R.a,{variant:"body2",color:"textSecondary",component:"p",children:[c("labels.capital")," ",e.capital.name]})]})]})})},e.isoCode)}))})})},T=n(196),_=Object(y.a)({root:{justifyContent:"center",alignItems:"center",position:"absolute",top:0,left:0,right:0,bottom:0}}),B=function(){var e=_();return Object(L.jsx)(g.a,{container:!0,spacing:4,className:e.root,children:Object(L.jsx)(T.a,{size:"5rem"})})},A=n(205),F=Object(y.a)({root:{position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}),W=function(){var e=Object(S.a)().t,t=F();return Object(L.jsx)(A.a,{className:t.root,children:Object(L.jsx)("h1",{children:e("labels.countriesNotFound")})})},P=Object(u.b)((function(e){return{loader:e.loader,filteredCountries:e.filteredCountries,locale:e.locale}}),(function(e){return{onLoadCountries:function(){return e(h())}}}))((function(e){var t=e.loader,n=e.locale,c=void 0===n?"en":n,r=e.filteredCountries,o=e.onLoadCountries,l=Object(i.f)();Object(a.useEffect)((function(){o()}),[c]);var s=Object(a.useCallback)((function(e){return l.push("/countries/".concat(e))}),[l]);return Object(L.jsxs)(L.Fragment,{children:[t&&Object(L.jsx)(B,{}),!t&&0===r.length&&Object(L.jsx)(W,{}),!t&&r.length>0&&Object(L.jsx)(I,{countries:r,onPreview:s})]})})),D=function(){return function(e){return function(){var e="".concat("https://www.cbr-xml-daily.ru/daily_json.js");return p.a.get(e).then((function(e){return e.data}))}().then((function(t){return e(U(t))}))}},U=function(e){return{type:"CURRENCY",payload:e}},z=n(12),H=n(112),M=n(33),G=n(53),Y=n.n(G),Z=n(109),V=n(209),J=n(197);Y.a.accessToken="pk.eyJ1IjoiZWxlZG9uIiwiYSI6ImNrbTBmaGJrMjFpdzMydXJ6dDZmZW1vMWYifQ.7z-Hdb4FoPZCKJYM1it7Tw";var K=function(e){var t=e.className,n=e.isoCode,c=e.capitalCoordinates,r=e.locale,o=e.title,i=Object(a.useRef)(),l=Object(a.useState)(c.lon),s=Object(M.a)(l,2),u=s[0],d=s[1],j=Object(a.useState)(c.lat),b=Object(M.a)(j,2),p=b[0],m=b[1],h=Object(a.useState)(4),O=Object(M.a)(h,2),f=O[0],x=O[1],g=Object(Z.a)();return g=Object(V.a)(g),Object(a.useEffect)((function(){var e=new Y.a.Map({container:i.current,style:"mapbox://styles/mapbox/streets-v11",center:[u,p],zoom:f});return e.on("move",(function(){d(e.getCenter().lng.toFixed(6)),m(e.getCenter().lat.toFixed(6)),x(e.getZoom().toFixed(4))})),e.on("load",(function(){(new Y.a.Marker).setLngLat([c.lon,c.lat]).addTo(e),e.addControl(new Y.a.FullscreenControl),e.addLayer({id:"country-boundaries",source:{type:"vector",url:"mapbox://mapbox.country-boundaries-v1"},"source-layer":"country_boundaries",type:"fill",paint:{"fill-color":"#008080","fill-opacity":.4}},"country-label"),e.setLayoutProperty("country-label","text-field",["get","name_".concat("uk"!==r?r:"en")]),e.setFilter("country-boundaries",["in","iso_3166_1_alpha_3",n])})),function(){return e.remove()}}),[]),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(A.a,{my:3,children:Object(L.jsx)(J.a,{theme:g,children:Object(L.jsx)(R.a,{align:"center",component:"h1",variant:"h4",children:o})})}),Object(L.jsx)(A.a,{className:"map-container ".concat(t),ref:i})]})};K.defaultProps={locale:"en",className:""};var X=K,Q=Object(u.b)((function(e){return{isoCode:e.country.isoCode,locale:e.locale,capitalCoordinates:e.country.capital.coordinates}}))((function(e){var t=e.className,n=e.locale,a=e.capitalCoordinates,c=e.isoCode,r=Object(S.a)().t;return Object(L.jsx)(X,{locale:n,capitalCoordinates:a,isoCode:c,className:t,title:r("labels.map")})})),q=Object(y.a)((function(e){return{date:{fontSize:"24px"},time:{fontSize:"28px"},center:{textAlign:"center"}}}));var $=function(e){var t,n=e.locale,c=e.timezone,r=q(),o=c.name,i={timeZone:o,month:"long",day:"numeric",weekday:"long"},l={timeZone:o,hour:"numeric",minute:"numeric",second:"numeric",hour12:!1},s=function(){return(new Date).toLocaleString(n,i)},u=function(){return(new Date).toLocaleString(n,l)},d=Object(a.useState)(s()),j=Object(M.a)(d,2),b=j[0],p=j[1],m=Object(a.useState)(u()),h=Object(M.a)(m,2),O=h[0],f=h[1];return Object(a.useEffect)((function(){var e=setInterval((function(){p(s()),f(u())}),1e3);return function(){return clearInterval(e)}})),Object(L.jsxs)(A.a,{className:r.center,children:[Object(L.jsx)(R.a,{className:r.date,children:(t=b,t[0].toUpperCase()+t.slice(1))}),Object(L.jsx)(R.a,{className:r.time,children:O})]})},ee=Object(u.b)((function(e){return{locale:e.locale,timezone:e.country.timezone}}))((function(e){var t=e.locale,n=e.timezone;return Object(L.jsx)($,{locale:t,timezone:n})})),te=Object(y.a)((function(e){return{title:{fontSize:"24px"},center:{textAlign:"center"},currency:{fontSize:"18px"},currencyItem:{display:"block"}}}));var ne=function(e){var t=e.currency,n=e.country,a=te(),c=Object(S.a)().t,r=t.Valute,o=n.currency.code,i="RUB"===o?1:r[o].Value,l="RUB"===o?r.USD.Value:i/r.USD.Value,s="RUB"===o?r.EUR.Value:i/r.EUR.Value,u=[{name:"RUB",value:i.toFixed(2)},{name:"USD",value:l.toFixed(2)},{name:"EUR",value:s.toFixed(2)}];return Object(L.jsxs)(A.a,{className:a.center,children:[Object(L.jsxs)(R.a,{className:a.title,children:[c("labels.currency")," ",o]}),Object(L.jsx)(R.a,{className:a.currency,children:u.map((function(e){return o!==e.name?Object(L.jsx)(A.a,{className:a.currencyItem,component:"span",children:"".concat(e.value," ").concat(e.name)},e.name):""}))})]})},ae=Object(u.b)((function(e){return{locale:e.locale,currency:e.currency,country:e.country}}))((function(e){var t=e.currency,n=e.country;return Object(L.jsx)(ne,{currency:t,country:n})})),ce=Object(y.a)({weather:{padding:"10px 0 10px 10px"},weatherWrapper:{maxWidth:"300px",margin:"0 auto"},weatherHeader:{fontSize:"30px",fontWeight:"bold",lineHeight:"30px",marginBottom:"10px"},tempContainer:{display:"flex",justifyContent:"space-between",alignItems:"center"},weatherTemp:{fontSize:"36px",fontWeight:"bold"},weatherIcon:{width:"100px"},weatherDetail:{fontSize:"20px"}});var re=function(e){var t=e.weather,n=e.country,a=ce(),c=Object(S.a)().t,r=n?n.capital.name:"",o=t.weather[0].description,i=o.substring(0,1).toUpperCase()+o.substr(1);return Object(L.jsx)(A.a,{className:a.weather,children:Object(L.jsxs)(A.a,{className:a.weatherWrapper,children:[Object(L.jsx)(R.a,{className:a.weatherHeader,children:r}),Object(L.jsxs)(A.a,{className:a.tempContainer,children:[Object(L.jsxs)(R.a,{className:a.weatherTemp,children:[Math.round(t.main.temp)," \xb0C"]}),Object(L.jsx)("img",{className:a.weatherIcon,src:"http://openweathermap.org/img/wn/".concat(t.weather[0].icon,"@2x.png"),alt:t.weather[0].description})]}),Object(L.jsx)(R.a,{className:a.weatherDetail,children:i}),Object(L.jsxs)(R.a,{className:a.weatherDetail,children:[c("labels.wind")," ",t.wind.speed," ",c("labels.speed")]}),Object(L.jsxs)(R.a,{className:a.weatherDetail,children:[c("labels.humidity")," ",t.main.humidity,"%"]})]})})},oe=function(e,t,n){return function(a){return function(e,t,n){var a="http://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(t,"&units=metric&lang=").concat(n,"&appid=").concat("2ecdbcd74acc04b0ecd238486739e5ae");return p.a.get(a).then((function(e){return e.data}))}(e,t,n).then((function(e){return a(ie(e))}))}},ie=function(e){return{type:"WEATHER",payload:e}},le=Object(u.b)((function(e){return{locale:e.locale,weather:e.weather,country:e.country}}),(function(e){return{onLoadWeather:function(t,n,a){return e(oe(t,n,a))}}}))((function(e){var t=e.weather,n=e.country,c=e.locale,r=e.onLoadWeather;return Object(a.useEffect)((function(){if(n){var e=n.capital.coordinates.lat,t=n.capital.coordinates.lon;r(e,t,c)}}),[c,n.isoCode,r]),Object(L.jsxs)(A.a,{position:"relative",minWidth:"5rem",minHeight:"5rem",children:[!t&&Object(L.jsx)(B,{}),t&&Object(L.jsx)(re,{weather:t,country:n})]})})),se=n(16),ue=n(96),de=n.n(ue);function je(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.reduce((function(e,t){return e.push({original:t.image,thumbnail:t.image,description:t.description,thumbnailClass:"sight-thumbnail"}),e}),[])}n(164);var be=n(97),pe=n.n(be),me=n(98),he=n.n(me),Oe=n(99),fe=n.n(Oe),xe=n(100),ge=n.n(xe);var ye=function(e){var t=e.title,n=e.data.sights,a=Object(y.a)((function(e){var t;return{icon:(t={},Object(z.a)(t,e.breakpoints.down("sm"),{fontSize:"2rem"}),Object(z.a)(t,e.breakpoints.up("md"),{fontSize:"3.5rem"}),Object(z.a)(t,e.breakpoints.up("lg"),{fontSize:"4rem"}),t),fullScreenBtn:{bottom:"initial",top:"0"},title:{wordWrap:"break-word"}}}))(),c=Object(Z.a)();return c=Object(V.a)(c),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(A.a,{my:3,children:Object(L.jsx)(J.a,{theme:c,children:Object(L.jsx)(R.a,{className:a.title,align:"center",component:"h1",variant:"h4",children:t})})}),Object(L.jsx)(de.a,Object(se.a)(Object(se.a)({renderLeftNav:function(e,t){return Object(L.jsx)("button",{className:"image-gallery-icon image-gallery-left-nav",disabled:t,onClick:e,children:Object(L.jsx)(pe.a,{className:a.icon})})},renderRightNav:function(e,t){return Object(L.jsx)("button",{className:"image-gallery-icon image-gallery-right-nav",disabled:t,onClick:e,children:Object(L.jsx)(he.a,{className:a.icon})})},renderFullscreenButton:function(e,t){return Object(L.jsx)("button",{type:"button",className:"image-gallery-icon image-gallery-fullscreen-button image-gallery-fullscreen-button ".concat(a.fullScreenBtn," ").concat(t?" active":""),onClick:e,children:t?Object(L.jsx)(ge.a,{className:a.icon}):Object(L.jsx)(fe.a,{className:a.icon})})}},{showPlayButton:!1,thumbnailPosition:"right",onErrorImageURL:"https://picsum.photos/id/1015/1000/600/"}),{},{items:je(n)}))]})},ve=Object(u.b)((function(e){return{sights:e.country.sights}}))((function(e){var t=Object(S.a)().t;return Object(L.jsx)(ye,{title:t("labels.sights"),data:e})})),we=Object(y.a)((function(e){return{box:{position:"relative",paddingBottom:"56.25%",paddingTop:"25px",height:"0",maxWidth:"1920px",margin:"0 auto"},player:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}}));var Ce=function(e){var t=e.title,n=e.error,a=e.video.video,c=we(),r=function(e){var t=e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/);return t&&11===t[2].length?t[2]:null}(a),o=Object(Z.a)();return o=Object(V.a)(o),Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(A.a,{my:3,children:Object(L.jsx)(J.a,{theme:o,children:Object(L.jsx)(R.a,{align:"center",component:"h1",variant:"h4",children:t})})}),r?Object(L.jsx)(A.a,{className:c.box,children:Object(L.jsx)("iframe",{title:t,className:c.player,type:"text/html",src:"https://www.youtube.com/embed/".concat(r),frameBorder:"0",allow:"accelerometer",autoPlay:!0,"clipboard-write":"true","encrypted-media":"true",gyroscope:"true","picture-in-picture":"true",allowFullScreen:!0})}):Object(L.jsx)("h1",{align:"center",children:n})]})},Ne=Object(u.b)((function(e){return{video:e.country.video,error:e.error}}))((function(e,t){var n=Object(S.a)().t;return Object(L.jsx)(Ce,{title:n("labels.video"),error:t,video:e})})),ke=Object(y.a)((function(e){var t;return{countryMap:{overflow:"hidden",position:"relative",minHeight:"40vh"},descriptionGrid:(t={},Object(z.a)(t,e.breakpoints.down("xs"),{padding:"initial",marginBottom:e.spacing(4)}),Object(z.a)(t,e.breakpoints.down("sm"),{padding:"initial",marginBottom:e.spacing(4)}),Object(z.a)(t,"padding",e.spacing(0,10,0,0)),t),widgetBox:{padding:e.spacing(2),backgroundColor:e.palette.grey[200],marginBottom:e.spacing(2)},image:{width:"100%"},capital:{padding:e.spacing(3,0,2,0)}}}));var Re=function(e){var t=e.country,n=e.currency,a=ke(),c=Object(S.a)().t;return Object(L.jsxs)(A.a,{children:[Object(L.jsx)(R.a,{variant:"h3",gutterBottom:!0,children:t.name}),Object(L.jsxs)(g.a,{container:!0,children:[Object(L.jsxs)(g.a,{item:!0,xs:12,md:9,className:a.descriptionGrid,children:[Object(L.jsx)("img",{className:a.image,src:t.image,alt:t.name}),Object(L.jsxs)(R.a,{className:a.capital,children:[Object(L.jsx)("b",{children:c("labels.capital")})," ",t.capital.name]}),Object(L.jsx)(R.a,{gutterBottom:!0,children:t.description})]}),Object(L.jsxs)(g.a,{item:!0,xs:12,md:3,children:[Object(L.jsx)(H.a,{elevation:0,className:a.widgetBox,children:Object(L.jsx)(le,{})}),n?Object(L.jsx)(H.a,{elevation:0,className:a.widgetBox,children:Object(L.jsx)(ae,{})}):"",Object(L.jsx)(H.a,{elevation:0,className:a.widgetBox,children:Object(L.jsx)(ee,{})})]})]}),Object(L.jsx)(A.a,{my:5,children:Object(L.jsx)(ve,{})}),Object(L.jsx)(A.a,{my:5,children:Object(L.jsx)(Q,{className:a.countryMap})}),Object(L.jsx)(A.a,{my:5,children:Object(L.jsx)(Ne,{})})]})},Se=Object(u.b)((function(e){return{loader:e.loader,country:e.country,locale:e.locale,error:e.error,currency:e.currency,weather:e.weather}}),(function(e){return{onLoadCountry:function(t){return e(f(t))},onLoadCurrency:function(){return e(D())}}}))((function(e){var t=e.loader,n=e.locale,c=void 0===n?"en":n,r=e.country,o=e.onLoadCountry,l=e.error,s=e.onLoadCurrency,u=e.currency,d=Object(i.g)().isoCode,j=Object(i.f)();return Object(a.useEffect)((function(){o(d),s()}),[c]),Object(a.useEffect)((function(){l&&j.push("/not-found")}),[l,j]),Object(L.jsxs)(L.Fragment,{children:[t&&Object(L.jsx)(B,{}),!t&&!!r&&Object(L.jsx)(Re,{country:r,currency:u})]})})),Le=n(200),Ee=n(202),Ie=n(207),Te=n(203),_e=n(104),Be=n.n(_e),Ae=n(101),Fe=n.n(Ae),We=Object(y.a)((function(e){return{select:{color:Object(v.b)(e.palette.common.white,.5),fontSize:"1rem",padding:"8px",minWidth:"5rem",borderRadius:e.shape.borderRadius,backgroundColor:Object(v.b)(e.palette.background.default,.15),border:"none",outline:"none",appearance:"none","&:hover":{backgroundColor:Object(v.b)(e.palette.background.default,.4)},"&>option":{color:e.palette.common.black}},container:Object(z.a)({display:"flex",flexDirection:"row",alignItems:"center"},e.breakpoints.down("md"),{marginRight:e.spacing(1)}),icon:Object(z.a)({color:Object(v.b)(e.palette.common.white,.5),marginRight:e.spacing(1)},e.breakpoints.down("md"),{display:"none"})}})),Pe=function(e){var t=e.currentLocale,n=e.onLocaleChange,c=We(),r=Object(S.a)(),o=r.t,i=r.i18n;Object(a.useEffect)((function(){i.changeLanguage(t)}),[t,i]);var l=Object(a.useCallback)((function(e){n(e.target.value)}),[n]);return Object(L.jsxs)(A.a,{className:c.container,children:[Object(L.jsx)(Fe.a,{className:c.icon}),Object(L.jsxs)("select",{value:t,onChange:l,className:c.select,children:[Object(L.jsx)("option",{value:"ru",children:o("labels.locale.ru")}),Object(L.jsx)("option",{value:"en",children:o("labels.locale.en")}),Object(L.jsx)("option",{value:"uk",children:o("labels.locale.uk")})]})]})},De=Object(u.b)((function(e){return{locale:e.locale}}),(function(e){return{onLocaleChange:function(t){return e({type:"LOCALE",payload:t})}}}))((function(e){var t=e.locale,n=void 0===t?"en":t,a=e.onLocaleChange,c=e.className;return Object(L.jsx)(Pe,{currentLocale:n,onLocaleChange:a,className:c})})),Ue=n(198),ze=n(206),He=n(199),Me=n(170),Ge=n(103),Ye=n.n(Ge),Ze=n(102),Ve=n.n(Ze),Je=Object(y.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},paper:{backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},loginBtn:{marginLeft:"10px"}}}));var Ke=function(){var e=Je(),t=Object(a.useState)(!1),n=Object(M.a)(t,2),c=n[0],r=n[1];return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(Ue.a,{className:e.loginBtn,onClick:function(){r(!0)},children:c?Object(L.jsx)(Ye.a,{}):Object(L.jsx)(Ve.a,{})}),Object(L.jsx)(ze.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",className:e.modal,open:c,onClose:function(){r(!1)},closeAfterTransition:!0,BackdropComponent:He.a,BackdropProps:{timeout:500},children:Object(L.jsx)(Me.a,{in:c,children:Object(L.jsxs)("div",{className:e.paper,children:[Object(L.jsx)("h2",{id:"transition-modal-title",children:"Transition modal"}),Object(L.jsx)("p",{id:"transition-modal-description",children:"react-transition-group animates me."})]})})})]})},Xe=Object(y.a)((function(e){return{toolbar:Object(z.a)({},e.breakpoints.down("sm"),{justifyContent:"space-between"}),title:Object(z.a)({flexGrow:3,display:"none"},e.breakpoints.up("sm"),{display:"block"}),titleLink:{color:"white",textDecoration:"none",fontSize:"18px"},languageSwitch:{flexGrow:0},search:Object(z.a)({flexGrow:1,display:"flex",justifyContent:"space-between",position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(v.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(v.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},searchButton:{color:"white",border:"2px solid rgba(255, 255, 255, 0.2)",borderLeftColor:"white","&:hover":{border:"none"}},inputRoot:{color:"inherit",flexGrow:"1"},inputInput:Object(z.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"100%"}})}}));var Qe=Object(u.b)((function(e){return{countries:e.countries}}),(function(e){return{onSearchValue:function(t){return e(x(t))}}}))((function(e){var t=e.search,n=e.onSearchValue,a=Xe(),c=Object(S.a)().t,r=Object(i.h)({path:"/countries/:isoCode",strict:!0,sensitive:!0});return Object(L.jsx)(Le.a,{position:"fixed",children:Object(L.jsx)(s.a,{maxWidth:"lg",children:Object(L.jsxs)(Ee.a,{disableGutters:!0,className:a.toolbar,children:[Object(L.jsx)(R.a,{className:a.title,variant:"h6",noWrap:!0,children:Object(L.jsx)(o.b,{className:a.titleLink,to:"/",children:"Travel App"})}),!r&&Object(L.jsxs)("div",{className:a.search,children:[Object(L.jsx)("div",{className:a.searchIcon,children:Object(L.jsx)(Be.a,{})}),Object(L.jsx)(Ie.a,{type:"search",autoFocus:!0,autoComplete:"false",placeholder:c("labels.search.placeholder"),classes:{root:a.inputRoot,input:a.inputInput},inputProps:{"aria-label":"search"},onChange:function(e){n(e.target.value)}}),Object(L.jsx)(Te.a,{variant:"outlined",color:"primary",className:a.searchButton,onClick:function(){return n(t)},children:c("labels.search.button")})]}),Object(L.jsx)(De,{className:a.languageSwitch}),Object(L.jsx)(Ke,{})]})})})})),qe=n.p+"static/media/rs_school_1.1cc27900.svg",$e=Object(y.a)((function(e){return{footer:{backgroundColor:e.palette.primary.main,color:"white",padding:e.spacing(3,0)},footerContainer:{justifyContent:"center",alignItems:"center"},date:Object(z.a)({display:"flex",alignItems:"center",justifyContent:"flex-end"},e.breakpoints.down("sm"),{justifyContent:"center"}),gitHubLink:{color:"white",textDecoration:"none"},gitHubList:Object(z.a)({display:"flex",flexGrow:1,alignItems:"center",justifyContent:"space-between"},e.breakpoints.down("sm"),{flexDirection:"column",alignItems:"center",marginTop:"20px",marginBottom:"20px"}),logo:Object(z.a)({width:"70px"},e.breakpoints.down("sm"),{textAlign:"center"})}})),et=function(e){var t=e.className,n=e.github,a=e.fullname;return Object(L.jsx)("a",{className:t,target:"_blank",rel:"noreferrer",href:n,children:a})};var tt=function(e){e.className;var t=$e(),n=(0,Object(S.a)().t)("labels.developers",{returnObjects:!0});return Object(L.jsx)("footer",{className:t.footer,children:Object(L.jsx)(s.a,{maxWidth:"lg",className:t.footerContainer,children:Object(L.jsxs)(g.a,{container:!0,children:[Object(L.jsx)(g.a,{item:!0,xs:12,md:2,className:t.logo,children:Object(L.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://rs.school/react/",children:Object(L.jsx)("img",{className:t.logo,src:qe,alt:"RSS"})})}),Object(L.jsx)(g.a,{item:!0,xs:12,md:8,className:t.gitHubList,children:n.map((function(e,n){return Object(L.jsx)(et,{className:t.gitHubLink,fullname:e.fullname,github:e.github},n.toString())}))}),Object(L.jsx)(g.a,{item:!0,xs:12,md:2,className:t.date,children:(new Date).getFullYear()})]})})})},nt=Object(y.a)((function(e){return{root:{position:"absolute",top:0,left:0,bottom:0,right:0,textAlign:"center",color:e.palette.text.primary,p:{color:e.palette.text.secondary}}}}));var at=Object(u.b)((function(e){return{error:e.error}}))((function(e){var t=e.error,n=e.className,a=Object(S.a)().t;return Object(L.jsxs)(g.a,{container:!0,spacing:2,className:"".concat(nt().root," ").concat(n),direction:"column",justify:"center",children:[Object(L.jsx)(s.a,{component:"h1",children:a("labels.error")}),Object(L.jsx)(s.a,{component:"p",color:!0,children:t})]})})),ct=n(46),rt=n(105),ot=n(106),it=n(110),lt={countries:[],search:"",filteredCountries:[],country:null,locale:"ru",loader:!0,error:null,currency:null,weather:null},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADER":return Object(se.a)(Object(se.a)({},e),{},{loader:t.payload});case"ERROR":return Object(se.a)(Object(se.a)({},e),{},{loader:!1,error:t.payload});case"COUNTRIES":return Object(se.a)(Object(se.a)({},e),{},{countries:Object(it.a)(t.payload)});case"FILTER_COUNTRIES":var n=e.countries.filter((function(e){var n=t.payload.toLowerCase();return e.name.toLowerCase().includes(n)||e.capital.name.toLowerCase().includes(n)}));return Object(se.a)(Object(se.a)({},e),{},{filteredCountries:n,search:t.payload});case"COUNTRY":return Object(se.a)(Object(se.a)({},e),{},{country:t.payload});case"CURRENCY":return Object(se.a)(Object(se.a)({},e),{},{currency:t.payload});case"WEATHER":return Object(se.a)(Object(se.a)({},e),{},{weather:t.payload});case"LOCALE":return Object(se.a)(Object(se.a)({},e),{},{locale:t.payload});default:return e}},ut=Object(rt.composeWithDevTools)(Object(ct.applyMiddleware)(ot.a)),dt=Object(ct.createStore)(st,ut),jt=Object(y.a)((function(e){return{rootContainer:{display:"flex",flexDirection:"column",minHeight:"100vh"},mainContent:{marginTop:e.spacing(12),marginBottom:e.spacing(4),flexGrow:1,position:"relative"},footer:{flex:"0 0 auto"}}}));var bt=function(){var e=jt();return Object(L.jsx)(a.Suspense,{fallback:"loading...",children:Object(L.jsx)(u.a,{store:dt,children:Object(L.jsxs)(o.a,{children:[Object(L.jsx)(l.a,{}),Object(L.jsxs)(A.a,{component:"div",className:e.rootContainer,children:[Object(L.jsx)(Qe,{}),Object(L.jsx)(s.a,{component:"main",className:e.mainContent,children:Object(L.jsxs)(i.c,{children:[Object(L.jsx)(i.a,{path:["/countries","/"],component:P,exact:!0}),Object(L.jsx)(i.a,{path:"/countries/:isoCode",component:Se}),Object(L.jsx)(i.a,{path:"*",component:at})]})}),Object(L.jsx)(tt,{className:e.footer})]})]})})})},pt=n(75),mt=n(52),ht=n(107);pt.a.use(ht.a).use(mt.e).init({debug:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_MAPBOX_TOKEN:"pk.eyJ1IjoiZWxlZG9uIiwiYSI6ImNrbTBmaGJrMjFpdzMydXJ6dDZmZW1vMWYifQ.7z-Hdb4FoPZCKJYM1it7Tw",REACT_APP_API:"https://rss-travel-app.herokuapp.com",REACT_APP_CURRENCY_URL:"https://www.cbr-xml-daily.ru/daily_json.js",REACT_APP_WEATHER_KEY:"2ecdbcd74acc04b0ecd238486739e5ae"}).REACT_APP_I18N_LOG_LEVEL||!1,fallbackLng:"en",supportedLngs:["en","ru","uk"],interpolation:{escapeValue:!1},react:{useSuspense:!0},backend:{loadPath:"/translations/{{lng}}/{{ns}}.json"}});pt.a;r.a.render(Object(L.jsx)(bt,{}),document.getElementById("root"))}},[[165,1,2]]]);
//# sourceMappingURL=main.07fd0dc0.chunk.js.map