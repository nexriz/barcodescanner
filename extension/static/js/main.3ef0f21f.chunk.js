(this.webpackJsonpscanner=this.webpackJsonpscanner||[]).push([[0],{217:function(e,n,t){e.exports=t(429)},222:function(e,n,t){},287:function(e,n){},427:function(e,n,t){},429:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(4),c=t.n(o),i=(t(222),t(35)),u=t(44),l=t(32),s=t.n(l),d=function(e){return{inputStream:{name:"Live",type:"LiveStream",target:e.target,constraints:{width:640,height:480,facingMode:"environment"},area:{top:"10%",right:"10%",left:"10%",bottom:"10%"},singleChannel:!1},decoder:{readers:["code_128_reader","ean_reader","ean_8_reader","code_39_reader","code_39_vin_reader","codabar_reader"],debug:{drawBoundingBox:!1,showFrequency:!1,drawScanline:!1,showPattern:!1}},locate:!0,frequency:10,locator:{halfSample:!0,patchSize:"medium",debug:{showCanvas:!1,showPatches:!1,showFoundPatches:!1,showSkeleton:!1,showLabels:!1,showPatchLabels:!1,showRemainingPatchLabels:!1,boxFromPatches:{showTransformed:!1,showTransformedBox:!1,showBB:!1}}}}},m=t(34),f="PRODUCT_ADD",b="PRODUCT_REPLACE_ALL",p="PRODUCT_UPDATE",h="PRODUCT_REQUESTED",v="PRODUCT_EMIT",E="SOCKET_ROOM_JOIN_REQUESTED",g="SOCKET_ROOM_LEAVE_REQUESTED",O="SOCKET_ROOM_CREATE_REQUESTED",x="SOCKET_ROOM_JOINED",y="SOCKET_ROOM_LEFT",w="SOCKET_ROOM_CREATED",j="SOCKET_ROOM_CREATED_ERROR",k="SOCKET_ROOM_JOINED_ERROR",C="SOCKET_ROOM_MEMBER_LIST",_="EXTENSION_SEND_MESSAGE";var R=function(e){var n=e.onStart,t=void 0===n?function(){}:n,a=e.onMatch,o=void 0===a?function(){}:a,c=Object(r.useState)({match:!1,processing:!1}),l=Object(u.a)(c,2),f=l[0],b=l[1],p=Object(m.c)((function(e){return e.products})),E=function(){var e=Object(r.useState)(!1),n=Object(u.a)(e,2),t=n[0],a=n[1];return[t,{on:function(){return a(!0)},off:function(){return a(!1)}}]}(),g=Object(u.a)(E,2),O=g[0],x=g[1],y=Object(r.useRef)(),w=Object(r.useRef)({}),j=Object(r.useRef)(),k=Object(m.b)(),C=Object(m.c)((function(e){return e.rooms}));console.log(C),Object(r.useEffect)((function(){j.current=!1;return s.a.init(d({target:y.current}),(function(e){e?console.log(e):(s.a.start(),t&&t(),s.a.onProcessed(T),s.a.onDetected(S))})),function(){s.a.stop()}}),[]);var _=Object(r.useCallback)((function(e){k({type:v,payload:e.codeResult})}),[]),R=Object(r.useCallback)((function(e){k({type:h,payload:e.codeResult})}),[]),S=Object(r.useCallback)((function(e){if(!j.current){if(w.current[e.codeResult.code]>=3){var n=s.a.canvas.ctx.overlay,t=s.a.canvas.dom.overlay;n.clearRect(0,0,parseInt(t.getAttribute("width")),parseInt(t.getAttribute("height"))),_(e),R(e),b((function(n){return Object(i.a)({},n,{match:e.codeResult})})),w.current={},x.on(),j.current=!0}w.current[e.codeResult.code]||(w.current[e.codeResult.code]=0),w.current[e.codeResult.code]+=1}}),[o,j]),T=Object(r.useCallback)((function(e){if(!j.current){var n=s.a.canvas.ctx.overlay,t=s.a.canvas.dom.overlay;e&&(e.boxes&&(n.clearRect(0,0,parseInt(t.getAttribute("width")),parseInt(t.getAttribute("height"))),e.boxes.filter((function(n){return n!==e.box})).forEach((function(e){}))),e.codeResult&&e.codeResult.code&&s.a.ImageDebug.drawPath(e.line,{x:"x",y:"y"},n,{color:"#FF4500",lineWidth:3}))}}),[j]),F=Object(r.useCallback)((function(){b({match:!1,processing:!1}),j.current=!1,x.off()}),[]),P=Object(r.useCallback)((function(){return s.a.stop()}),[]);return[{ref:y},f,{start:F,stop:P,isPaused:O,list:p,pauseCTL:x}]},S=t(135),T=t.n(S),F=t(136),P=t.n(F),M=t(20),D=t(17),L=t(37);function I(){var e=Object(M.a)(["\n\tdisplay: block;\n\twhite-space: nowrap;\n\toutline: none;\n\tbackground: ",";\n    padding: 5px;\n    text-align: center;\n    border-radius: 2px;\n    color: #222;\n    text-transform: uppercase;\n    line-height: normal;\n    cursor: pointer;\n\tborder-bottom: 3px solid ",";\n\t/* vertical-align: bottom; */\n\tmargin: 15px 0;\n\n\t&:hover {\n\t  color: #222;\n  \t}\n"]);return I=function(){return e},e}function A(){var e=Object(M.a)(["\n\tdisplay: block;\n\twhite-space: nowrap;\n\toutline: none;\n\tbackground: ",";\n    padding: 5px;\n    text-align: center;\n    border-radius: 2px;\n    color: #222;\n    text-transform: uppercase;\n    line-height: normal;\n    cursor: pointer;\n\tborder-bottom: 3px solid ",";\n\t/* vertical-align: bottom; */\n\tmargin: 15px 0;\n\n\t&:hover {\n\t  color: #222;\n  \t}\n"]);return A=function(){return e},e}function N(){var e=Object(M.a)(["\n  /* height: 60; */\n  width: 50px;\n  border-radius: 0; \n  outline: none;\n  text-align: center; \n  background-color: #ff4d4f; \n  vertical-align: middle; \n  display: flex;\n  justify-content: center; \n  align-items: center;\n  text-shadow: 0 -1px 0 rgba(0,0,0,0.12);\n  text-transform: capitalize;\n  font-size: 16;\n  border-radius: 1;\n  border-bottom: 3px solid #b71313!important;\n  box-shadow: 0 2px 0 rgba(0,0,0,0.045);\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  font-weight: 800;\n  padding: 10px;\n  color: #222;\n  border-bottom-left-radius: 10px;\n  transition: color 0.2s, background-color 0.2s, border 0.2s;\n\n  &:hover {\n\t  background-color: #ff7875;\n\t  color: #222;\n  }\n"]);return N=function(){return e},e}function K(){var e=Object(M.a)(["\n  padding: 10px 0;\n  z-index: 1000;\n  height: calc(100% - 80px);\n  margin: 10px 0;\n  overflow: scroll;\n  -webkit-overflow-scrolling: touch;\n\n  >ul {\n    padding: 0;\n    li {\n      h4 {\n        padding: 0;\n        margin: 0;\n        text-align: center;\n      }\n      color: white;\n      list-style-type: none;\n      padding: 0;\n    }\n  }\n\n"]);return K=function(){return e},e}function U(){var e=Object(M.a)(["\n\toverflow: hidden;\n\tborder-radius: 4px;\n"]);return U=function(){return e},e}function B(){var e=Object(M.a)(["\n  color: #7CFC00;\n\n  transition: opacity 0.2s ease-in, visibility 0.2s ease-in;\n  opacity: ",";\n  visibility: ",";\n\n  >h3 {\n    text-align: center;\n    margin: 5px;\n\tcolor: #7CFC00;\n    text-transform: capitalize;\n  }\n"]);return B=function(){return e},e}function z(){var e=Object(M.a)(["\n  height: 30%;\n  width: 30%;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  background: none;\n  border-bottom: 1px solid ",";\n  border-right: 1px solid ",";\n\n"]);return z=function(){return e},e}function J(){var e=Object(M.a)(["\n  height: 30%;\n  width: 30%;\n  position: absolute;\n  bottom: 0;\n  background: none;\n  left: 0;\n  border-bottom: 1px solid ",";\n  border-left: 1px solid ",";\n\n"]);return J=function(){return e},e}function W(){var e=Object(M.a)(["\n  height: 30%;\n  width: 30%;\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: none;\n  border-top: 1px solid ",";\n  border-right: 1px solid ",";\n\n"]);return W=function(){return e},e}function q(){var e=Object(M.a)(["\n  height: 30%;\n  width: 30%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: none;\n  border-top: 1px solid ",";\n  border-left: 1px solid ",";\n"]);return q=function(){return e},e}function H(){var e=Object(M.a)(["\n  position: relative;\n  z-index: 10;  \n  width: 100%;\n  height: 100%;\n  transition: border 0.2s;\n  box-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  > * {\n    transition: all 0.2s ease-in;\n  }\n"]);return H=function(){return e},e}function Q(){var e=Object(M.a)(["\n\n  width: 100%;\n  height: calc(100% - 70%);\n  position: absolute;\n  bottom: 0;\n  background: linear-gradient(\n      rgba(0, 0, 0, 0.0) 0%,\n      rgba(0, 0, 0, 0.7) 50%,\n      rgba(0, 0, 0, 0.8) 70%,\n      rgba(0, 0, 0, 0.9) 80%,\n      rgba(0, 0, 0, 1) 90%,\n      rgba(0, 0, 0, 1) 95%,\n\n      rgba(0, 0, 0, 1.0) 100%\n    );\n\n\n"]);return Q=function(){return e},e}function V(){var e=Object(M.a)(["\n  height: calc(15%);\n  width: 100%;\n  overflow: hidden;\n"]);return V=function(){return e},e}function Y(){var e=Object(M.a)(["\n  width: 100%;\n  height: 100%;\n  background: rgba(0,0,0,0.7);\n  display: flex;\n  justify-content: center;\n  align-items: ",";\n  color: white!important;\n  text-transform: capitalize;\n  position: relative;\n  overflow: hidden;\n  & > h4 {\n\tcolor: white!important;\n  }\n"]);return Y=function(){return e},e}function G(){var e=Object(M.a)(["\n  flex: 1;\n  background: rgba(0,0,0,0.7);\n"]);return G=function(){return e},e}function X(){var e=Object(M.a)(["\n  flex: 5;\n  background: ",";\n"]);return X=function(){return e},e}function $(){var e=Object(M.a)(["\n  flex: 1;\n  background: rgba(0,0,0,0.7);\n"]);return $=function(){return e},e}function Z(){var e=Object(M.a)(["\n  display: flex;\n  height: 70%;\n\n"]);return Z=function(){return e},e}function ee(){var e=Object(M.a)(["\n  width: 100%;\n  height: 15%;\n\n"]);return ee=function(){return e},e}function ne(){var e=Object(M.a)(["\n  /* \n  width: 640px;\n  height: 480px; */\n  /* width: 100%;\n  height: 100%; */\n  position: relative;\n  overflow: hidden;\n\n"]);return ne=function(){return e},e}function te(){var e=Object(M.a)(["\n  /* width: 100vw; */\n  /* height: 480px; */\n  position: absolute;\n  top: 0;\n  width: 100vw;\n  height: 100vh;\n\n  /* display:flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden; */\n\n  position: absolute;\n  background: ",";\n \n\n"]);return te=function(){return e},e}function re(){var e=Object(M.a)(["\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: black;\n  position: fixed;\n  z-index: 1000;\n\n\n"]);return re=function(){return e},e}var ae=D.a.div(re()),oe=D.a.div(te(),(function(e){return e.isPaused?"black":"none"})),ce=D.a.div(ne()),ie=D.a.div(ee()),ue=Object(D.a)(ie)(Z()),le=D.a.div($()),se=D.a.div(X(),(function(e){return e.isPaused?"black":"none"})),de=D.a.div(G()),me=D.a.div(Y(),(function(e){return e.flexStart?"flex-start":(e.flexEnd,"flex-end")})),fe=Object(D.a)(ie)(V()),be=D.a.div(Q()),pe=D.a.div(H()),he=D.a.div(q(),(function(e){return e.match?"#00FF00":"white"}),(function(e){return e.match?"#00FF00":"white"})),ve=D.a.div(W(),(function(e){return e.match?"#00FF00":"white"}),(function(e){return e.match?"#00FF00":"white"})),Ee=D.a.div(J(),(function(e){return e.match?"#00FF00":"white"}),(function(e){return e.match?"#00FF00":"white"})),ge=D.a.div(z(),(function(e){return e.match?"#00FF00":"white"}),(function(e){return e.match?"#00FF00":"white"})),Oe=D.a.div(B(),(function(e){return e.isMatch?1:0}),(function(e){return e.isMatch?"visible":"hidden"})),xe=D.a.svg(U()),ye=(D.a.div(K()),Object(D.a)(L.c)(N())),we=Object(D.a)(L.c)(A(),(function(e){return e.bg?e.bg:"#fac742"}),(function(e){return e.bc?e.bc:"#d29300"})),je=D.a.div(I(),(function(e){return e.bg?e.bg:"#fac742"}),(function(e){return e.bc?e.bc:"#d29300"})),ke=t(8),Ce=function(e){return{format:e.match.format.replace("_","").toUpperCase(),lineColor:"#000000",background:"#ffffff",width:2,height:40,displayValue:!0}};var _e=function(){var e=R({}),n=Object(u.a)(e,3),t=n[0],o=n[1],c=n[2],i=Object(r.useRef)();return Object(r.useEffect)((function(){o.match&&T()(i.current,o.match.code,Ce(o))}),[o.match]),a.a.createElement(ae,null,a.a.createElement(ce,t),a.a.createElement(oe,{isPaused:c.isPaused},a.a.createElement(ie,null,a.a.createElement(me,{flexEnd:!0},a.a.createElement(ye,{to:"/",style:{position:"absolute",top:0,right:0}},a.a.createElement(ke.a,{type:"close"})),a.a.createElement("h4",{style:{display:o.match?"none":"block"}},"Scan Barcode"))),a.a.createElement(ue,null,a.a.createElement(de,null),a.a.createElement(se,{isPaused:c.isPaused},a.a.createElement(pe,null,a.a.createElement(he,{className:"border",match:o.match}),a.a.createElement(ve,{className:"border",match:o.match}),a.a.createElement(Oe,{isMatch:o.match},a.a.createElement("h3",null,"Match hittad!"),a.a.createElement("div",{onClick:function(e){return c.start()}},a.a.createElement(xe,{ref:i})),a.a.createElement(we,{bc:"#025190",bg:"#017ad4",to:"/barcodes"},"List"),a.a.createElement(je,{onClick:function(e){return c.start()}},"Back")),a.a.createElement(ge,{className:"border",match:o.match}),a.a.createElement(Ee,{className:"border",match:o.match}))),a.a.createElement(le,null)),a.a.createElement(fe,null,a.a.createElement(me,{flexStart:!0}),a.a.createElement(be,null))))};var Re=t(433),Se=t(59),Te=t(51),Fe=t(431),Pe=t(147),Me=t(432),De=[{title:"Name",dataIndex:"name"},{title:"Cost",className:"column-money",dataIndex:"cost",render:function(e){return a.a.createElement("a",null,e,"kr")}},{title:"Code",dataIndex:"code"}];function Le(){var e=(Object(m.c)((function(e){return e.products}))||[]).map((function(e,n){var t={};return e.product&&(t.cost=e.product.price,t.name=e.product.title),Object(i.a)({key:""+n,code:e.code},t)}));return a.a.createElement("div",null,a.a.createElement(Me.a,{columns:De,dataSource:e,bordered:!0,title:function(){return"List of scanned barcodes"}}))}var Ie=t(15),Ae=t.n(Ie);function Ne(e){return Ae.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",fetch("https://develottment.com/products/"+e,{mode:"cors"}).then((function(e){return e.json()})));case 1:case"end":return n.stop()}}))}var Ke=Fe.a.Header,Ue=Fe.a.Content,Be=Fe.a.Footer,ze=Fe.a.Sider,Je=(Pe.a.SubMenu,function(){var e=Object(r.useState)({collapsed:!0,room:"scanner",selectedKey:"/"}),n=Object(u.a)(e,2),t=n[0],o=n[1],c=Object(m.c)((function(e){return e.rooms})),l=Object(m.b)(),s=Object(Te.f)();Object(r.useEffect)((function(){console.log(s),o((function(e){return Object(i.a)({},e,{selectedKey:s.pathname})}))}),[s.pathname]);return a.a.createElement(Fe.a,{style:{minHeight:"100vh"}},a.a.createElement(ze,{collapsed:t.collapsed,onCollapse:function(e){o((function(n){return Object(i.a)({},n,{collapsed:e})}))}},a.a.createElement("div",{className:"logo"}),a.a.createElement(Pe.a,{theme:"dark",defaultSelectedKeys:[t.selectedKey],selectedKeys:[t.selectedKey],mode:"inline"},a.a.createElement(Pe.a.Item,{key:"/"},a.a.createElement(L.b,{to:"/"},a.a.createElement(ke.a,{type:"api"}),a.a.createElement("span",null,"Rooms"))),a.a.createElement(Pe.a.Item,{key:"/barcodes"},a.a.createElement(L.b,{to:"/barcodes"},a.a.createElement(ke.a,{type:"barcode"}),a.a.createElement("span",null,"Barcodes"))),a.a.createElement(Pe.a.Item,{key:"/scanner"},a.a.createElement(L.b,{to:"/scanner"},a.a.createElement(ke.a,{type:"scan"}),a.a.createElement("span",null,"Scanner"))))),a.a.createElement(Fe.a,null,a.a.createElement(Ke,{style:{background:"#fff",padding:0}}),a.a.createElement(Ue,{style:{margin:"0"}},a.a.createElement("div",{style:{padding:24,background:"#fff",minHeight:360}},a.a.createElement(Te.c,null,a.a.createElement(Te.a,{path:"/barcodes",render:function(){return a.a.createElement(Le,null)}}),a.a.createElement(Te.a,{path:"/",render:function(){return a.a.createElement("div",null,a.a.createElement("h4",null,"You're in room: ",c.roomname),a.a.createElement("div",{style:{margin:"10px 0"}},a.a.createElement("ul",null,Object.entries(c.members).map((function(e){var n=Object(u.a)(e,2),t=n[0],r=n[1];return a.a.createElement("li",null,t," -> active: ",r?"YES":"NO")})))),a.a.createElement(Re.a,{value:t.room,onChange:function(e){return o((function(n){return Object(i.a)({},n,{room:e.target.value})}))}}),a.a.createElement(Se.a,{onClick:function(){return l({type:O,payload:{roomname:t.room}})}},"Create"),a.a.createElement(Se.a,{onClick:function(){return l({type:E,payload:{roomname:t.room}})}},"Join"),c.error&&a.a.createElement("div",null,c.error.message),a.a.createElement("div",null,a.a.createElement(Se.a,{onClick:function(){l({type:_,payload:{type:"SELECT_INPUT_ELEMENT"}})}},"Chrome input"),a.a.createElement(Se.a,{onClick:function(){l({type:_,payload:{type:"SELECT_BUTTON_ELEMENT"}})}},"Chrome button"),a.a.createElement(Se.a,{onClick:function(){l({type:_,payload:{type:"SAVE_URL"}})}},"Chrome save")))}})))),a.a.createElement(Be,{style:{textAlign:"center"}})))});var We=function(){return Object(r.useEffect)((function(){}),[]),a.a.createElement("div",null,a.a.createElement(Te.a,{path:"/scanner",render:function(){return a.a.createElement(_e,null)}}),a.a.createElement(Te.a,{path:"/",render:function(){return a.a.createElement(Je,null)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var qe=t(40),He=t(108),Qe=t(23),Ve=Ae.a.mark(Ge),Ye=Ae.a.mark(Xe);function Ge(e){var n;return Ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Qe.c)((r=e.payload,{type:f,payload:r}));case 2:return t.next=4,Object(Qe.a)(Ne,e.payload.code);case 4:return n=t.sent,t.next=7,Object(Qe.c)({type:p,payload:n});case 7:case"end":return t.stop()}var r}),Ve)}function Xe(e,n){return Ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e("/post/barcode",n.payload.code);case 1:case"end":return t.stop()}}),Ye)}var $e=Ae.a.mark(nn),Ze=Ae.a.mark(tn),en=Ae.a.mark(rn);function nn(e,n){return Ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e("/room/join",n.payload.roomname);case 1:case"end":return t.stop()}}),$e)}function tn(e,n){return Ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e("/room/create",n.payload.roomname);case 1:case"end":return t.stop()}}),Ze)}function rn(e,n){return Ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e("/room/leave",n.payload.roomname);case 1:case"end":return t.stop()}}),en)}var an=Ae.a.mark(on);function on(e){return Ae.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:chrome.tabs.query({active:!0,currentWindow:!0},(function(n){var t=n[0];chrome.tabs.sendMessage(t.id,e.payload)}));case 1:case"end":return n.stop()}}),an)}var cn,un=Ae.a.mark(bn),ln=Ae.a.mark(pn),sn=Ae.a.mark(hn);function dn(){return cn=P()("https://develottment.com",{path:"/stream"}),new Promise((function(e){cn.on("connect",(function(){cn.on("/receive/barcode",(function(e){chrome.tabs.query({active:!0,currentWindow:!0},(function(n){var t=n[0];chrome.tabs.sendMessage(t.id,e)}))})),e(cn)}))}))}function mn(e){return Object(He.b)((function(n){return e.on("connect",(function(n){return console.log("Connected -> ",e.id)})),e.on("/recieve/barcode",(function(e){n({type:h,payload:{code:e}}),n({type:_,payload:{type:"SEARCH_BARCODE",payload:e}})})),e.on("/action",(function(e){n(e)})),function(){}}))}function fn(e){return new Promise((function(n){n((function(){e.emit.apply(e,arguments)}))}))}function bn(e){var n;return Ae.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Object(Qe.d)(e);case 3:return n=t.sent,t.next=6,Object(Qe.c)(n);case 6:t.next=0;break;case 8:case"end":return t.stop()}}),un)}function pn(){var e,n,t,r,a=arguments;return Ae.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:for(e=a.length,n=new Array(e),t=0;t<e;t++)n[t]=a[t];return n[0],r=n[1],o.next=4,Object(Qe.e)(h,Ge);case 4:return o.next=6,Object(Qe.e)(v,Xe,r);case 6:return o.next=8,Object(Qe.e)(E,nn,r);case 8:return o.next=10,Object(Qe.e)(g,rn,r);case 10:return o.next=12,Object(Qe.e)(O,tn,r);case 12:return o.next=14,Object(Qe.e)(_,on);case 14:case"end":return o.stop()}}),ln)}function hn(){var e,n,t;return Ae.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(Qe.a)(dn);case 2:return e=r.sent,r.next=5,Object(Qe.a)(mn,e);case 5:return n=r.sent,r.next=8,Object(Qe.a)(fn,e);case 8:return t=r.sent,r.next=11,Object(Qe.b)(bn,n);case 11:return r.next=13,Object(Qe.b)(pn,e,t);case 13:case"end":return r.stop()}}),sn)}var vn=hn,En=t(212);var gn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case b:return n.payload;case f:return[].concat(Object(En.a)(e),[n.payload]);case p:return e.map((function(e){return n.payload&&n.payload.productid&&e.code===n.payload.productid&&(e.product=n.payload),e}));default:return e}};var On=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{roomname:"scanner",result:null,members:{}},n=arguments.length>1?arguments[1]:void 0;switch(n.type){case j:case k:return Object(i.a)({},e,{error:n.payload,members:e.members});case w:return{roomname:n.payload.roomname,result:n.payload.result,members:e.members};case x:return{roomname:n.payload.roomname,members:e.members};case y:return{roomname:"",members:e.members};case C:return{roomname:e.roomname,members:n.payload.members};default:return e}},xn=Object(qe.c)({products:gn,rooms:On}),yn=Object(He.a)(),wn=Object(qe.e)(xn,Object(qe.a)(yn));yn.run(vn);var jn=wn;t(427),t(428);c.a.render(a.a.createElement((function(){return a.a.createElement(m.a,{store:jn},a.a.createElement(L.a,null,a.a.createElement(We,null)))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})),document.addEventListener("touchmove",(function(e){1!==(e=e.originalEvent||e).scale&&e.preventDefault()}),!1)}},[[217,1,2]]]);