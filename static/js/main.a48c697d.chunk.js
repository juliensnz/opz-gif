(this["webpackJsonpopz-giffer"]=this["webpackJsonpopz-giffer"]||[]).push([[0],[,,,function(e,n,t){"use strict";t.d(n,"c",(function(){return d})),t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return r}));var r,a=t(4),o=t.n(a),i=t(6);!function(e){e.AppLaunch="app_launch",e.ErrorOccured="error_occured",e.StartAdding="start_adding",e.GifSelected="gif_selected",e.CancelAdd="cancel_add",e.LoopAdded="loop_added",e.Download="download",e.OpenWtf="open_wtf",e.CloseWtf="close_wtf",e.OpenLike="open_like",e.CloseLike="close_like"}(r||(r={}));var c=Date.now(),u=null,l=function(){return null===u&&(null===localStorage.getItem("user_id")?(u="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var n=16*Math.random()|0;return("x"===e?n:3&n|8).toString(16)})),localStorage.setItem("user_id",u)):u=localStorage.getItem("user_id")),u},s=function(e,n){d(r.ErrorOccured,{type:e,error:n})},d=function(){var e=Object(i.a)(o.a.mark((function e(n){var t,r=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>1&&void 0!==r[1]?r[1]:{},e.prev=1,e.next=4,fetch("https://api.amplitude.com/2/httpapi",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify({api_key:"295864d9196e194b4eb7c6b5de41da90",events:[{user_id:l(),session_id:c,device_id:l(),event_type:n,time:Date.now(),event_properties:t,app_version:"".concat("0.1.0","-").concat("production")}]})});case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(n){return e.apply(this,arguments)}}()},,,,function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"d",(function(){return d})),t.d(n,"c",(function(){return f})),t.d(n,"b",(function(){return p})),t.d(n,"e",(function(){return h}));var r=t(2),a=t(1);function o(){var e=Object(r.a)(["\n  width: 100%;\n  height: 100%;\n  line-height: ","px;\n  text-align: center;\n  font-size: 25px;\n  font-weight: 200;\n"]);return o=function(){return e},e}function i(){var e=Object(r.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  line-height: ","px;\n  width: ","px;\n  text-align: center;\n  font-size: 30px;\n  font-weight: 100;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return i=function(){return e},e}function c(){var e=Object(r.a)(["\n  height: ","px;\n  width: ","px;\n  background: ",";\n  color: white;\n  position: relative;\n  z-index: 10;\n"]);return c=function(){return e},e}function u(){var e=Object(r.a)(["\n  width: ","px;\n  height: ","px;\n  background: ",";\n  overflow: hidden;\n  border-radius: 5px;\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);\n"]);return u=function(){return e},e}function l(){var e=Object(r.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.3);\n  opacity: ",";\n\n  transition: opacity 0.5s ease-in-out;\n"]);return l=function(){return e},e}var s=a.c.div(l(),(function(e){return e.isVisible?1:0})),d=a.c.div(u(),(function(e){return e.theme.addModal.windowSize}),(function(e){return e.theme.addModal.windowSize+e.theme.addModal.spacing}),(function(e){return e.theme.color.white})),f=a.c.div(c(),(function(e){return e.theme.addModal.spacing}),(function(e){return e.theme.addModal.windowSize}),(function(e){return e.theme.color.grey})),p=a.c.div(i(),(function(e){return e.theme.addModal.spacing}),(function(e){return e.theme.addModal.spacing})),h=a.c.div(o(),(function(e){return e.theme.addModal.spacing}))},function(e,n,t){"use strict";t.d(n,"g",(function(){return p})),t.d(n,"c",(function(){return f})),t.d(n,"d",(function(){return g})),t.d(n,"e",(function(){return m})),t.d(n,"f",(function(){return d})),t.d(n,"b",(function(){return c})),t.d(n,"a",(function(){return u}));var r=t(4),a=t.n(r),o=t(6),i=t(10),c=1014,u=468,l=function(e,n){var t=n.width,r=n.width/c*u,a=(n.height-r)/2;e.putImageData(n,0,-a,0,a,t,r)},s=function(e,n){var t=e.getContext("2d");null!==t&&(l(t,n),t.drawImage(e,0,0,c,u))},d=function(e){var n=Math.floor(2e3/(10*e[0].delay));return Object(i.a)(new Array(30)).map((function(t,r){return h(n>=e.length?e.length:n,r)}))},f=function(e,n){var t=0,r=d(n);return setInterval((function(){var a=n[r[t%30]].data;s(e,a),t++}),2e3/30)},p=function(e,n){var t=c/n[0].data.width;e.getContext("2d").scale(t,t)},h=function(e,n){var t=e/30;return Math.floor(n*t)},m=function(e,n){return n.map((function(n){var t=document.createElement("canvas");t.width=c,t.height=u;var r=e[n].data,a=c/r.width,o=t.getContext("2d");if(null===o)throw Error("Cannot get context");return l(o,r),o.scale(a,a),o.drawImage(t,0,0),o.getImageData(0,0,c,u)}))},b=function(e){return 22+(u+44)*Math.floor(e/4)},g=function(){var e=Object(o.a)(a.a.mark((function e(n){var t,r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((t=document.createElement("canvas")).width=4096,t.height=4096,null!==(r=t.getContext("2d"))){e.next=6;break}throw Error("Cannot create canvas");case 6:for(o in n)r.putImageData(n[o],5+(c+10)*(o%4),b(o));return r.drawImage(t,0,0),e.abrupt("return",t.toDataURL("image/png"));case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(5),a=t(0),o=function(e){var n=Object(a.useState)(e),t=Object(r.a)(n,2),o=t[0],i=t[1];return[o,function(){return i(!0)},function(){return i(!1)}]}},,function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"d",(function(){return p})),t.d(n,"b",(function(){return l})),t.d(n,"c",(function(){return d}));var r,a=t(4),o=t.n(a),i=t(6),c=t(24),u=t.n(c);!function(e){e[e.Trim=0]="Trim",e[e.Sample=1]="Sample"}(r||(r={}));var l=function(){var e=Object(i.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var t=new FileReader;t.onload=function(n){e(n.target.result)},t.readAsDataURL(n)})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=Object(i.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var t=new Image;t.onload=function(n){e(t)},t.src=n})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=Object(i.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var t=new XMLHttpRequest;t.onload=function(){var r=new FileReader;r.onloadend=function(){if(null===r.result)throw Error('Cannot fetch "'.concat(n,'"'));e(r.result)},r.readAsDataURL(t.response)},t.open("GET",n),t.responseType="blob",t.send()})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(o.a.mark((function e(n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e){var t=new u.a({gif:n,auto_play:!1});t.load((function(){e(t)}))})));case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(o.a.mark((function e(n){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s(n);case 2:return t=e.sent,document.createElement("div").appendChild(t),e.next=7,f(t);case 7:return e.abrupt("return",e.sent.get_frames());case 8:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t(2),a=t(1);function o(){var e=Object(r.a)(["\n          left: 0;\n        "]);return o=function(){return e},e}function i(){var e=Object(r.a)(["\n          right: ","px;\n          transform: rotate(-90deg);\n          transform-origin: ","px 0;\n        "]);return i=function(){return e},e}function c(){var e=Object(r.a)(["\n          bottom: 0;\n        "]);return c=function(){return e},e}function u(){var e=Object(r.a)(["\n          top: 0;\n        "]);return u=function(){return e},e}function l(){var e=Object(r.a)(["\n  position: absolute;\n  ","\n\n  ","\n\n  height: ","px;\n  width: ","px;\n  text-align: center;\n  line-height: ","px;\n  font-size: 20px;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return l=function(){return e},e}var s=a.c.div(l(),(function(e){var n=e.leading;return void 0===n||n?Object(a.b)(u()):Object(a.b)(c())}),(function(e){return e.vertical?Object(a.b)(i(),(function(e){return e.theme.addModal.spacing}),(function(e){return e.theme.addModal.windowSize})):Object(a.b)(o())}),(function(e){return e.theme.addModal.spacing}),(function(e){return e.theme.addModal.windowSize}),(function(e){return e.theme.addModal.spacing}))},,,,,function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var r=t(2),a=t(0),o=t.n(a),i=t(1),c=t(8);function u(){var e=Object(r.a)(["\n  width: ","px;\n  height: ","px;\n"]);return u=function(){return e},e}var l=i.c.canvas(u(),(function(e){return e.cssWidth}),(function(e){return e.cssWidth/c.b*c.a})),s=function(e){var n=e.gif,t=e.width,r=Object(a.useRef)(null);return Object(a.useEffect)((function(){if(null!==r&&null!==r.current){Object(c.g)(r.current,n);var e=Object(c.c)(r.current,n);return function(){clearInterval(e)}}}),[n]),o.a.createElement(l,{ref:r,width:c.b,height:c.a,cssWidth:t})}},,,,,,function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return g}));var r=t(5),a=t(2),o=t(0),i=t.n(o),c=t(1),u=t(38),l=t(28),s=t(29),d=t(9),f=t(3),p=t(7);function h(){var e=Object(a.a)(["\n  width: ","px;\n  display: flex;\n  transform: translate3d(\n    -","px,\n    0,\n    0\n  );\n  transition: transform 0.5s ease-in-out;\n"]);return h=function(){return e},e}var m=c.c.div(h(),(function(e){return 3*e.theme.addModal.windowSize}),(function(e){return e.level*(e.theme.addModal.windowSize-e.theme.addModal.spacing)})),b=function(e,n){return null!==n?2:0!==e.length?1:0},g=function(n){var t=n.initialSprite,a=void 0===t?null:t,c=n.onLoopAdd,h=n.dismissModal,g=Object(o.useState)([]),v=Object(r.a)(g,2),w=v[0],x=v[1],j=Object(o.useState)(null),O=Object(r.a)(j,2),y=O[0],E=O[1],k=Object(o.useState)(a),S=Object(r.a)(k,2),M=S[0],z=S[1],C=Object(d.a)(!1),_=Object(r.a)(C,2),I=_[0],A=_[1];return Object(o.useEffect)((function(){e((function(){return A()}))}),[A]),Object(o.useEffect)((function(){0!==w.length&&null!==y&&null!==M&&c({gif:w,configuration:y,sprite:M})}),[w,y,M,c]),i.a.createElement(p.a,{isVisible:I},i.a.createElement(p.d,null,i.a.createElement(p.c,null,i.a.createElement(p.b,{onClick:function(){null!==y?Object(f.c)(f.a.CancelAdd,{from:"sprite"}):0!==w.length?Object(f.c)(f.a.CancelAdd,{from:"configure"}):Object(f.c)(f.a.CancelAdd,{from:"start"}),h()}},"X"),i.a.createElement(p.e,null,"Add a loop")),i.a.createElement(m,{level:b(w,y)},i.a.createElement(u.b,{previous:0!==w.length,onGifSelected:function(e){x(e)}}),i.a.createElement(l.a,{previous:null!==y,gif:w,onLoopConfirmation:function(e){E(e)}}),i.a.createElement(s.a,{onSpriteConfirmation:function(e){z(e)}}))))}}).call(this,t(16).setImmediate)},,,,,function(e,n,t){"use strict";t.d(n,"a",(function(){return h}));var r=t(2),a=t(0),o=t.n(a),i=t(1),c=t(11),u=t(17),l=t(12);function s(){var e=Object(r.a)(["\n  background-color: ",";\n  color: black;\n  margin: 20px 0;\n  padding: 10px 5px;\n  font-size: 20px;\n  text-align: center;\n  text-transform: uppercase;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return s=function(){return e},e}function d(){var e=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  width: ","px;\n  height: ","px;\n  padding: ","px;\n  background: rgb(208, 208, 208);\n  box-sizing: border-box;\n  justify-content: space-between;\n  position: relative;\n"]);return d=function(){return e},e}var f=i.c.div(d(),(function(e){return e.theme.addModal.windowSize-e.theme.addModal.spacing}),(function(e){return e.theme.addModal.windowSize}),(function(e){return e.theme.addModal.spacing})),p=i.c.span(s(),(function(e){return e.theme.color.yellow})),h=function(e){var n=e.gif,t=e.onLoopConfirmation,r=e.previous;return o.a.createElement(f,null,0!==n.length&&o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{gif:n,width:420}),o.a.createElement(p,{onClick:function(){t({sample:c.a.Trim})}},"Confirm")),r&&o.a.createElement(l.a,{vertical:!0,onClick:function(){return t(null)}},"Back"))}},function(e,n,t){"use strict";t.d(n,"a",(function(){return h}));var r=t(10),a=t(2),o=t(0),i=t.n(o),c=t(1);function u(){var e=Object(a.a)(["\n  width: 95px;\n  margin-right: 10px;\n  height: 44px;\n  background: ",";\n  line-height: 44px;\n  text-align: center;\n  font-weight: 100;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return u=function(){return e},e}function l(){var e=Object(a.a)(["\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: repeat(auto-fill, minmax(95px, 1fr));\n"]);return l=function(){return e},e}function s(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  width: ","px;\n  height: ","px;\n  padding: ","px;\n  background: ",";\n  box-sizing: border-box;\n  justify-content: center;\n  display: flex;\n"]);return s=function(){return e},e}var d=c.c.div(s(),(function(e){return e.theme.addModal.windowSize-e.theme.addModal.spacing}),(function(e){return e.theme.addModal.windowSize}),(function(e){return e.theme.addModal.spacing}),(function(e){return e.theme.color.black})),f=c.c.div(l()),p=c.c.div(u(),(function(e){return e.theme.color.white})),h=function(e){var n=e.onSpriteConfirmation;return i.a.createElement(d,null,i.a.createElement(f,null,Object(r.a)(new Array(14)).map((function(e,t){return i.a.createElement(p,{key:t,onClick:function(){n(t)}},t+1)}))))}},,,,function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return d}));var r=t(5),a=t(2),o=t(0),i=t.n(o),c=t(9),u=t(7);function l(){var e=Object(a.a)(["\n  padding: 30px 50px;\n  line-height: 23px;\n"]);return l=function(){return e},e}var s=t(1).c.div(l()),d=function(n){var t=n.dismissModal,a=Object(c.a)(!1),l=Object(r.a)(a,2),d=l[0],f=l[1];return Object(o.useEffect)((function(){e((function(){return f()}))}),[f]),i.a.createElement(u.a,{isVisible:d},i.a.createElement(u.d,null,i.a.createElement(u.c,null,i.a.createElement(u.b,{onClick:function(){t()}},"X"),i.a.createElement(u.e,null,"What the **** is this?")),i.a.createElement(s,null,i.a.createElement("h2",null,"Hey! Nice to meet you, glad you asked!"),i.a.createElement("p",null,"This web application is here to ease the generation of sprites for the"," ",i.a.createElement("a",{href:"https://www.synthpaks.com/products/gif-looper-template-project-beta"},"awesome gif looper"),". ",i.a.createElement("br",null)),i.a.createElement("h2",null,"How it works?"),i.a.createElement("p",null,i.a.createElement("ul",null,i.a.createElement("li",null,'Select one of the 14 slots or click on the "Add" button'),i.a.createElement("li",null,"Select a GIF (from an URL or a file)"),i.a.createElement("li",null,"Once you have filled all of the 14 slots (or before if you don't wan't to use them all), click on the download button.")),"This will generate your sprites in the expected format."),i.a.createElement("p",null,"For the rest of the process, you can refer to the official documentation of"," ",i.a.createElement("a",{href:"https://www.synthpaks.com/products/gif-looper-template-project-beta"},"gif looper"),"."),i.a.createElement("h2",null,"Well, that's nice, but it doesn't seems to work"),i.a.createElement("p",null,"Wow, I'm really sorry to hear that, I hope that you didn't loose any work. Don't hesistate to open an issue"," ",i.a.createElement("a",{href:"https://github.com/juliensnz/opz-gif/issues"},"here")," or send me a"," ",i.a.createElement("a",{href:"https://twitter.com/juliensnz"},"tweet")," to see if I can fix it. Or even better: as this is an"," ",i.a.createElement("a",{href:"https://github.com/juliensnz/opz-gif"},"open source project"),", you maybe can fix it yourself!"))))}}).call(this,t(16).setImmediate)},function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return h}));var r=t(5),a=t(2),o=t(0),i=t.n(o),c=t(9),u=t(7),l=t(1);function s(){var e=Object(a.a)(["\n  margin: 20px 50px;\n  width: 55px;\n"]);return s=function(){return e},e}function d(){var e=Object(a.a)(["\n  padding: 20px 50px;\n  line-height: 23px;\n"]);return d=function(){return e},e}var f=l.c.div(d()),p=l.c.div(s()),h=function(n){var t=n.dismissModal,a=Object(c.a)(!1),l=Object(r.a)(a,2),s=l[0],d=l[1];return Object(o.useEffect)((function(){e((function(){return d()}))}),[d]),i.a.createElement(u.a,{isVisible:s},i.a.createElement(u.d,null,i.a.createElement(u.c,null,i.a.createElement(u.b,{onClick:function(){t()}},"X"),i.a.createElement(u.e,null,"I like it!")),i.a.createElement(f,null,i.a.createElement("p",null,"Really nice of you, I'm glad you enjoy it :)"),i.a.createElement("h2",null,"But why dude?"),i.a.createElement("p",null,"I'm a big fan of my OP-Z and wanted to play with the Motion track a bit. I found the"," ",i.a.createElement("a",{href:"https://www.synthpaks.com/products/gif-looper-template-project-beta"},"gif looper")," project but didn't want to generate sprites by hand. So here is why."),i.a.createElement("h2",null,"Is it free?"),i.a.createElement("p",null,"Yes! This project is fully ",i.a.createElement("a",{href:"https://github.com/juliensnz/opz-gif"},"open source"),", you can use this project for free, enjoy it as long as you want and even"," ",i.a.createElement("a",{href:"https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DDesktop&hl=en"},"install it locally")," ","to use it offline."),i.a.createElement("h2",null,"How can I help?"),i.a.createElement("p",null,"As this project is ",i.a.createElement("a",{href:"https://github.com/juliensnz/opz-gif"},"open source"),", you can make suggestions for improvement ",i.a.createElement("a",{href:"https://github.com/juliensnz/opz-gif/issues"},"here")," or even"," ",i.a.createElement("a",{href:"https://github.com/juliensnz/opz-gif"},"contribute to the project")," to add new feature or fix bugs.",i.a.createElement("br",null),i.a.createElement("br",null),"If you still want to support me and my work, you can make a donation using the button down bellow."),i.a.createElement(p,null))))}}).call(this,t(16).setImmediate)},,,,function(e,n,t){"use strict";t.d(n,"b",(function(){return T})),t.d(n,"a",(function(){return _}));var r=t(5),a=t(2),o=t(0),i=t.n(o),c=t(1),u=t(4),l=t.n(u),s=t(6),d=t(11),f=t(12),p=t(3);function h(){var e=Object(a.a)(["\n  background: ",";\n  color: black;\n  margin: 10px 10px;\n  padding: 10px 5px;\n  font-size: 20px;\n  text-align: center;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return h=function(){return e},e}function m(){var e=Object(a.a)(["\n  margin: 0 10px;\n  padding: 10px 5px;\n  font-size: 20px;\n  background: transparent;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n"]);return m=function(){return e},e}function b(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 60px;\n  opacity: ",";\n  height: ",";\n  transition: opacity 0.5s ease-in-out;\n"]);return b=function(){return e},e}function g(){var e=Object(a.a)(["\n  width: ","px;\n  height: ","px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  font-weight: 200;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return g=function(){return e},e}function v(){var e=Object(a.a)(["\n  background-color: ",";\n  width: ","px;\n  height: ","px;\n  transition: height 0.5s ease-in-out;\n  flex-direction: column;\n  position: relative;\n"]);return v=function(){return e},e}var w=c.c.div(v(),(function(e){return e.theme.color.yellow}),(function(e){return e.theme.addModal.windowSize}),(function(e){return e.selected?e.theme.addModal.windowSize-(e.previous?0:e.theme.addModal.spacing):e.theme.addModal.windowSize/e.theme.addModal.sourceCount})),x=c.c.div(g(),(function(e){return e.theme.addModal.windowSize}),(function(e){return e.theme.addModal.windowSize/e.theme.addModal.sourceCount})),j=c.c.div(b(),(function(e){return e.visible?1:0}),(function(e){return e.visible?e.theme.addModal.windowSize/e.theme.addModal.sourceCount:0})),O=c.c.input(m()),y=c.c.span(h(),(function(e){return e.theme.color.white})),E=function(e){var n=e.selected,t=e.previous,a=e.onSelected,c=e.onGifSelected,u=Object(o.useState)(""),h=Object(r.a)(u,2),m=h[0],b=h[1],g=Object(o.useState)(!1),v=Object(r.a)(g,2),E=v[0],k=v[1],S=Object(o.useRef)(null),M=function(e){var n=Object(o.useCallback)((function(){null!==e.current&&e.current.focus()}),[e]);return Object(o.useEffect)(n,[]),n}(S);Object(o.useEffect)((function(){_.Url===n&&M(),null===n&&setTimeout((function(){return b("")}),500)}),[n,t,M]);var z=Object(o.useCallback)(Object(s.a)(l.a.mark((function e(){var n,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.prev=1,e.next=4,Object(d.c)(m);case 4:return n=e.sent,e.next=7,Object(d.d)(n);case 7:t=e.sent,Object(p.c)(p.a.GifSelected,{type:"url"}),c(t),k(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(1),Object(p.b)("cannot_generate_gif_from_url",e.t0),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,13]])}))),[m,c,k,E]);return i.a.createElement(w,{selected:_.Url===n,previous:t},i.a.createElement(x,{onClick:function(){return _.Url!==n&&a()}},"Url"),i.a.createElement(j,{visible:_.Url===n},i.a.createElement(O,{ref:S,placeholder:"Your GIF url",type:"text",onChange:function(){var e=Object(s.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(n.currentTarget.value);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),onKeyPress:function(e){"Enter"===e.key&&z()},value:m}),i.a.createElement(y,{onClick:z},"Confirm")),t&&i.a.createElement(f.a,{vertical:!0,onClick:function(){return c([])}},"Back"),null!==n&&_.Url!==n&&i.a.createElement(f.a,{vertical:!1,leading:!1,onClick:function(){return a()}},"Back"))};function k(){var e=Object(a.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return k=function(){return e},e}function S(){var e=Object(a.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: calc(100% - ","px);\n  height: calc(100% - ","px);\n  background-image: url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23E9B13DFF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\");\n  border-radius: 10px;\n  margin: 0 ","px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 200;\n"]);return S=function(){return e},e}function M(){var e=Object(a.a)(["\n  width: ","px;\n  opacity: ",";\n  height: ","px;\n  transition: opacity 0.5s ease-in-out, transform 0.2s ease-in-out;\n  position: relative;\n\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.02);\n  }\n"]);return M=function(){return e},e}function z(){var e=Object(a.a)(["\n  width: ","px;\n  height: ","px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  font-weight: 200;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return z=function(){return e},e}function C(){var e=Object(a.a)(["\n  background-color: ",";\n  width: ","px;\n  height: ","px;\n  transition: height 0.5s ease-in-out;\n  position: relative;\n"]);return C=function(){return e},e}var _,I=c.c.div(C(),(function(e){return e.theme.color.blue}),600,(function(e){return e.selected?e.theme.addModal.windowSize-(e.previous?0:e.theme.addModal.spacing):e.theme.addModal.windowSize/e.theme.addModal.sourceCount})),A=c.c.div(z(),(function(e){return e.theme.addModal.windowSize}),(function(e){return e.theme.addModal.windowSize/e.theme.addModal.sourceCount})),L=c.c.div(M(),(function(e){return e.theme.addModal.windowSize}),(function(e){return e.visible?1:0}),(function(e){return e.visible?e.theme.addModal.windowSize/e.theme.addModal.sourceCount:0})),F=c.c.div(S(),(function(e){return 2*e.theme.addModal.spacing}),(function(e){return 2*e.theme.addModal.spacing}),(function(e){return e.theme.addModal.spacing})),G=c.c.input(k()),W=function(e){var n=e.selected,t=e.previous,a=e.onSelected,c=e.onGifSelected,u=Object(o.useState)(!1),h=Object(r.a)(u,2),m=(h[0],h[1]);return i.a.createElement(I,{selected:_.File===n,previous:t},i.a.createElement(A,{onClick:function(){return _.File!==n&&a()}},"File"),null!==n&&_.File!==n&&i.a.createElement(f.a,{vertical:!1,onClick:function(){return a()}},"Back"),i.a.createElement(L,{visible:_.File===n},i.a.createElement(F,null,"Click here or directly drop your file"),i.a.createElement(G,{type:"file",onChange:function(){var e=Object(s.a)(l.a.mark((function e(n){var t,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==n.target.files&&"image/gif"===n.target.files[0].type){e.next=2;break}return e.abrupt("return");case 2:return m(!0),e.prev=3,e.next=6,Object(d.b)(n.target.files[0]);case 6:return t=e.sent,e.next=9,Object(d.d)(t);case 9:r=e.sent,Object(p.c)(p.a.GifSelected,{type:"file"}),c(r),m(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(3),Object(p.b)("cannot_generate_gif_from_file",e.t0),m(!1);case 19:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(n){return e.apply(this,arguments)}}()})),t&&i.a.createElement(f.a,{vertical:!0,onClick:function(){return c([])}},"Back"))};function D(){var e=Object(a.a)(["\n  width: ","px;\n  overflow: hidden;\n  transform: translate3d(\n    0,\n    -","px,\n    0\n  );\n  transition: all 0.5s ease-in-out;\n"]);return D=function(){return e},e}!function(e){e[e.Url=0]="Url",e[e.File=1]="File"}(_||(_={}));var U=c.c.div(D(),(function(e){return e.theme.addModal.windowSize}),(function(e){return e.source===_.File?e.theme.addModal.windowSize/2-(e.previous?0:e.theme.addModal.spacing):0})),T=function(e){var n=e.onGifSelected,t=e.previous,a=Object(o.useState)(null),c=Object(r.a)(a,2),u=c[0],l=c[1];return i.a.createElement(U,{source:u,previous:t},i.a.createElement(E,{onSelected:function(){l(null===u?_.Url:null)},selected:u,previous:t,onGifSelected:n}),i.a.createElement(W,{onSelected:function(){l(null===u?_.File:null)},selected:u,previous:t,onGifSelected:n}))}},,,function(e,n,t){e.exports=t(54)},,,,,function(e,n,t){},,,,,,,,function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(22),i=t.n(o),c=(t(46),t(4)),u=t.n(c),l=t(6),s=t(10),d=t(5),f=t(2),p=t(1),h=t(9),m=t(23),b=t(30),g=t(31),v=t(32),w=t.n(v),x=t(8),j=function(e){return new Promise(function(){var n=Object(l.a)(u.a.mark((function n(t){var r,a,o,i,c,l;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=new w.a,a=r.folder("GIFs"),o=Object(g.a)(e),n.prev=3,o.s();case 5:if((i=o.n()).done){n.next=15;break}return c=i.value,n.next=9,Object(x.d)(Object(x.e)(c.gif,Object(x.f)(c.gif)));case 9:if(""!==(l=n.sent)){n.next=12;break}return n.abrupt("return");case 12:a.file("GIF-Looper-Template-Spritesheet".concat(c.sprite+1<10?"0":"").concat(c.sprite+1,".png"),l.replace("data:image/png;base64,",""),{base64:!0});case 13:n.next=5;break;case 15:n.next=20;break;case 17:n.prev=17,n.t0=n.catch(3),o.e(n.t0);case 20:return n.prev=20,o.f(),n.finish(20);case 23:r.generateAsync({type:"blob"}).then((function(e){t(e)}));case 24:case"end":return n.stop()}}),n,null,[[3,17,20,23]])})));return function(e){return n.apply(this,arguments)}}())},O=t(17);function y(){var e=Object(f.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 100;\n  font-size: 25px;\n  color: ",";\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n\n  &:hover {\n    cursor: pointer;\n    opacity: 1;\n  }\n"]);return y=function(){return e},e}function E(){var e=Object(f.a)(["\n  &:hover {\n    cursor: pointer;\n  }\n"]);return E=function(){return e},e}function k(){var e=Object(f.a)(["\n  &:hover {\n    cursor: pointer;\n  }\n"]);return k=function(){return e},e}function S(){var e=Object(f.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  height: 138px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid ",";\n  border-radius: 3px;\n  font-size: 40px;\n  color: ",";\n  background: repeating-linear-gradient(\n    120deg,\n    ",",\n    "," 5px,\n    "," 5px,\n    "," 6px\n  );\n"]);return S=function(){return e},e}function M(){var e=Object(f.a)(["\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: repeat(4, 300px);\n"]);return M=function(){return e},e}function z(){var e=Object(f.a)(["\n  flex: 1;\n  display: flex;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return z=function(){return e},e}var C=p.c.div(z()),_=p.c.div(M()),I=p.c.div(S(),(function(e){return e.theme.color.lightGrey}),(function(e){return e.theme.color.lightGrey}),(function(e){return e.theme.color.white}),(function(e){return e.theme.color.white}),(function(e){return e.theme.color.lightGrey}),(function(e){return e.theme.color.lightGrey})),A=Object(p.c)(I)(k()),L=Object(p.c)(I)(E()),F=p.c.div(y(),(function(e){return e.theme.color.red}),(function(e){return e.theme.color.black})),G=function(e){var n=e.loops,t=e.onOpenAddLoop,r=e.onOpenInfoLoop,o=e.onOpenLikeLoop,i=Object(s.a)(new Array(14)).map((function(e,t){return n.find((function(e){return e.sprite===t}))}));return a.a.createElement(C,null,a.a.createElement(_,null,i.map((function(e,n){return a.a.createElement(I,{key:n},void 0===e?n<14?n+1:"":a.a.createElement(O.a,{gif:e.gif,width:300}),n<14&&a.a.createElement(F,{onClick:function(){return t(n)}},void 0===e?a.a.createElement("span",null,"Add"):a.a.createElement("span",null,"Edit")))})),a.a.createElement(A,{onClick:function(){return r()}},"Wtf?"),a.a.createElement(L,{onClick:function(){return o()}},"Like?")))},W=t(3),D=t(33),U=t(34);function T(){var e=Object(f.a)(["\n  padding: 0 30px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  background-color: ",";\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return T=function(){return e},e}function R(){var e=Object(f.a)(["\n  flex: 1;\n"]);return R=function(){return e},e}function P(){var e=Object(f.a)(["\n  padding: 0 30px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  background-color: ",";\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return P=function(){return e},e}function B(){var e=Object(f.a)(["\n  height: 60px;\n  display: flex;\n  color: white;\n  background: rgb(19, 19, 19);\n"]);return B=function(){return e},e}function N(){var e=Object(f.a)(["\n  height: 60px;\n  display: flex;\n  color: white;\n  background: rgb(19, 19, 19);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  font-weight: 100;\n  width: 100%;\n"]);return N=function(){return e},e}function H(){var e=Object(f.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  font-family: 'Muli', sans-serif;\n  box-sizing: border-box;\n"]);return H=function(){return e},e}var V=p.c.div(H()),X=p.c.div(N()),J=p.c.div(B()),q=p.c.div(P(),(function(e){return e.theme.color.yellow})),Y=p.c.div(R()),K=p.c.div(T(),(function(e){return e.theme.color.blue})),Z=function(){var e=Object(h.a)(!1),n=Object(d.a)(e,3),t=n[0],o=n[1],i=n[2],c=Object(h.a)(!1),f=Object(d.a)(c,3),p=f[0],g=f[1],v=f[2],w=Object(h.a)(!0),x=Object(d.a)(w,3),O=x[0],y=x[1],E=x[2],k=function(){var e=Object(r.useState)([]),n=Object(d.a)(e,2),t=n[0],a=n[1],o=Object(r.useCallback)((function(e){var n=Object(s.a)(t).filter((function(n){return n.sprite!==e.sprite}));a([].concat(Object(s.a)(n),[e]))}),[t,a]);return[t,o]}(),S=Object(d.a)(k,2),M=S[0],z=S[1],C=Object(r.useState)(null),_=Object(d.a)(C,2),I=_[0],A=_[1];return a.a.createElement(V,null,a.a.createElement(X,null,a.a.createElement("span",null,"Gif looper generator")),a.a.createElement(G,{loops:M,onOpenInfoLoop:function(){Object(W.c)(W.a.OpenWtf),g()},onOpenLikeLoop:function(){Object(W.c)(W.a.OpenLike),y()},onOpenAddLoop:function(e){Object(W.c)(W.a.StartAdding,{loop_number:e,from:"loop"}),A(e),o()}}),a.a.createElement(J,null,a.a.createElement(q,{onClick:function(){Object(W.c)(W.a.StartAdding,{from:"button"}),o()}},a.a.createElement("span",null,"Add")),a.a.createElement(Y,null),0!==M.length&&a.a.createElement(K,{onClick:Object(l.a)(u.a.mark((function e(){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(W.c)(W.a.Download,{loop_count:M.length}),e.prev=1,e.next=4,j(M);case 4:n=e.sent,Object(b.saveAs)(n,"GIFs.zip"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),Object(W.b)("cannot_generate_zip",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))},a.a.createElement("span",null,"Download"))),t&&a.a.createElement(m.a,{dismissModal:function(){return i()},onLoopAdd:function(e){null===I?Object(W.c)(W.a.LoopAdded,{loop_count:M.length,from:"button"}):Object(W.c)(W.a.LoopAdded,{loop_count:M.length,from:"sprite",loop:I}),i(),z(e),A(null)},initialSprite:I}),p&&a.a.createElement(D.a,{dismissModal:function(){Object(W.c)(W.a.CloseWtf),v()}}),O&&a.a.createElement(U.a,{dismissModal:function(){Object(W.c)(W.a.CloseLike),E()}}))},$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Q(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ee=t(35),ne=t(36),te=t(37),re=t(40),ae=function(e){Object(re.a)(t,e);var n=Object(te.a)(t);function t(e){var r;return Object(ee.a)(this,t),(r=n.call(this,e)).state={hasError:!1,error:null},r}return Object(ne.a)(t,[{key:"componentDidCatch",value:function(e,n){console.error(e),Object(W.b)("fatal_error",e)}},{key:"render",value:function(){var e=this;return this.state.hasError?a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Something went wrong: ",null!==this.state.error?this.state.error.message:""),a.a.createElement("span",{onClick:function(){e.setState({hasError:!1,error:null})}},"Click here to dismiss this error")):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,error:e}}}]),t}(a.a.Component);Object(W.c)(W.a.AppLaunch),i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ae,null,a.a.createElement(p.a,{theme:{addModal:{windowSize:600,sourceCount:2,spacing:60},color:{yellow:"rgb(233, 177, 61)",red:"rgb(193, 51, 56)",blue:"rgb(39, 94, 132)",white:"rgb(208, 208, 208)",grey:"rgb(128, 128, 128)",lightGrey:"rgb(179, 179, 179)",black:"rgb(18, 18, 18)"}}},a.a.createElement(Z,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/opz-gif",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/opz-gif","/service-worker.js");$?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Q(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Q(n,e)}))}}()}],[[41,1,2]]]);
//# sourceMappingURL=main.a48c697d.chunk.js.map