(this["webpackJsonpopz-giffer"]=this["webpackJsonpopz-giffer"]||[]).push([[0],{13:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var r=t(4),i=t(0),o=function(n){var e=Object(i.useState)(n),t=Object(r.a)(e,2),o=t[0],a=t[1];return[o,function(){return a(!0)},function(){return a(!1)}]}},14:function(n,e,t){"use strict";t.d(e,"a",(function(){return d}));var r=t(2),i=t(0),o=t.n(i),a=t(1),c=t(6);function u(){var n=Object(r.a)(["\n  width: ","px;\n  height: ","px;\n"]);return u=function(){return n},n}var l=a.c.canvas(u(),(function(n){return n.cssWidth}),(function(n){return n.cssWidth/c.b*c.a})),d=function(n){var e=n.gif,t=n.width,r=Object(i.useRef)(null);return Object(i.useEffect)((function(){if(null!==r&&null!==r.current){Object(c.g)(r.current,e);var n=Object(c.c)(r.current,e);return function(){clearInterval(n)}}}),[e]),o.a.createElement(l,{ref:r,width:c.b,height:c.a,cssWidth:t})}},21:function(n,e,t){"use strict";(function(n){t.d(e,"a",(function(){return E}));var r=t(4),i=t(2),o=t(0),a=t.n(o),c=t(1),u=t(31),l=t(26),d=t(27),f=t(13);function s(){var n=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  line-height: ","px;\n  text-align: center;\n  font-size: 25px;\n  font-weight: 200;\n"]);return s=function(){return n},n}function p(){var n=Object(i.a)(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  line-height: ","px;\n  width: ","px;\n  text-align: center;\n  font-size: 30px;\n  font-weight: 100;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return p=function(){return n},n}function h(){var n=Object(i.a)(["\n  height: ","px;\n  width: ","px;\n  background: ",";\n  color: white;\n  position: relative;\n  z-index: 10;\n"]);return h=function(){return n},n}function v(){var n=Object(i.a)(["\n  width: ","px;\n  display: flex;\n  transform: translate3d(\n    -","px,\n    0,\n    0\n  );\n  transition: transform 0.5s ease-in-out;\n"]);return v=function(){return n},n}function g(){var n=Object(i.a)(["\n  width: ","px;\n  height: ","px;\n  background: ",";\n  overflow: hidden;\n  border-radius: 5px;\n  box-shadow: 0 0 30px rgba(0, 0, 0, 0.5);\n"]);return g=function(){return n},n}function m(){var n=Object(i.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.3);\n  opacity: ",";\n\n  transition: opacity 0.5s ease-in-out;\n"]);return m=function(){return n},n}var b=c.c.div(m(),(function(n){return n.isVisible?1:0})),w=c.c.div(g(),(function(n){return n.theme.addModal.windowSize}),(function(n){return n.theme.addModal.windowSize+n.theme.addModal.spacing}),(function(n){return n.theme.color.white})),x=c.c.div(v(),(function(n){return 3*n.theme.addModal.windowSize}),(function(n){return n.level*(n.theme.addModal.windowSize-n.theme.addModal.spacing)})),j=c.c.div(h(),(function(n){return n.theme.addModal.spacing}),(function(n){return n.theme.addModal.windowSize}),(function(n){return n.theme.color.grey})),O=c.c.div(p(),(function(n){return n.theme.addModal.spacing}),(function(n){return n.theme.addModal.spacing})),y=c.c.div(s(),(function(n){return n.theme.addModal.spacing})),k=function(n,e){return null!==e?2:0!==n.length?1:0},E=function(e){var t=e.initialSprite,i=void 0===t?null:t,c=e.onLoopAdd,s=e.dismissModal,p=Object(o.useState)([]),h=Object(r.a)(p,2),v=h[0],g=h[1],m=Object(o.useState)(null),E=Object(r.a)(m,2),M=E[0],S=E[1],z=Object(o.useState)(i),C=Object(r.a)(z,2),A=C[0],F=C[1],G=Object(f.a)(!1),I=Object(r.a)(G,2),U=I[0],L=I[1];return Object(o.useEffect)((function(){n((function(){return L()}))}),[L]),Object(o.useEffect)((function(){0!==v.length&&null!==M&&null!==A&&c({gif:v,configuration:M,sprite:A})}),[v,M,A]),a.a.createElement(b,{isVisible:U},a.a.createElement(w,null,a.a.createElement(j,null,a.a.createElement(O,{onClick:function(){return s()}},"X"),a.a.createElement(y,null,"Add a loop")),a.a.createElement(x,{level:k(v,M)},a.a.createElement(u.b,{previous:0!==v.length,onGifSelected:function(n){g(n)}}),a.a.createElement(l.a,{previous:null!==M,gif:v,onLoopConfirmation:function(n){S(n)}}),a.a.createElement(d.a,{onSpriteConfirmation:function(n){F(n)}}))))}}).call(this,t(18).setImmediate)},26:function(n,e,t){"use strict";t.d(e,"a",(function(){return h}));var r=t(2),i=t(0),o=t.n(i),a=t(1),c=t(8),u=t(14),l=t(9);function d(){var n=Object(r.a)(["\n  background-color: ",";\n  color: black;\n  margin: 20px 0;\n  padding: 10px 5px;\n  font-size: 20px;\n  text-align: center;\n  text-transform: uppercase;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return d=function(){return n},n}function f(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  width: ","px;\n  height: ","px;\n  padding: ","px;\n  background: rgb(208, 208, 208);\n  box-sizing: border-box;\n  justify-content: space-between;\n  position: relative;\n"]);return f=function(){return n},n}var s=a.c.div(f(),(function(n){return n.theme.addModal.windowSize-n.theme.addModal.spacing}),(function(n){return n.theme.addModal.windowSize}),(function(n){return n.theme.addModal.spacing})),p=a.c.span(d(),(function(n){return n.theme.color.yellow})),h=function(n){var e=n.gif,t=n.onLoopConfirmation,r=n.previous;return o.a.createElement(s,null,0!==e.length&&o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{gif:e,width:420}),o.a.createElement(p,{onClick:function(){t({sample:c.a.Trim})}},"Confirm")),r&&o.a.createElement(l.a,{vertical:!0,onClick:function(){return t(null)}},"Back"))}},27:function(n,e,t){"use strict";t.d(e,"a",(function(){return h}));var r=t(7),i=t(2),o=t(0),a=t.n(o),c=t(1);function u(){var n=Object(i.a)(["\n  width: 95px;\n  margin-right: 10px;\n  height: 44px;\n  background: ",";\n  line-height: 44px;\n  text-align: center;\n  font-weight: 100;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return u=function(){return n},n}function l(){var n=Object(i.a)(["\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: repeat(auto-fill, minmax(95px, 1fr));\n"]);return l=function(){return n},n}function d(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  width: ","px;\n  height: ","px;\n  padding: ","px;\n  background: ",";\n  box-sizing: border-box;\n  justify-content: center;\n  display: flex;\n"]);return d=function(){return n},n}var f=c.c.div(d(),(function(n){return n.theme.addModal.windowSize-n.theme.addModal.spacing}),(function(n){return n.theme.addModal.windowSize}),(function(n){return n.theme.addModal.spacing}),(function(n){return n.theme.color.black})),s=c.c.div(l()),p=c.c.div(u(),(function(n){return n.theme.color.white})),h=function(n){var e=n.onSpriteConfirmation;return a.a.createElement(f,null,a.a.createElement(s,null,Object(r.a)(new Array(16)).map((function(n,t){return a.a.createElement(p,{key:t,onClick:function(){return e(t)}},t+1)}))))}},31:function(n,e,t){"use strict";t.d(e,"b",(function(){return T})),t.d(e,"a",(function(){return C}));var r=t(4),i=t(2),o=t(0),a=t.n(o),c=t(1),u=t(3),l=t.n(u),d=t(5),f=t(8),s=t(9);function p(){var n=Object(i.a)(["\n  background: ",";\n  color: black;\n  margin: 10px 10px;\n  padding: 10px 5px;\n  font-size: 20px;\n  text-align: center;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return p=function(){return n},n}function h(){var n=Object(i.a)(["\n  margin: 0 10px;\n  padding: 10px 5px;\n  font-size: 20px;\n  background: transparent;\n  border: 1px solid rgba(0, 0, 0, 0.3);\n"]);return h=function(){return n},n}function v(){var n=Object(i.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 60px;\n  opacity: ",";\n  height: ",";\n  transition: opacity 0.5s ease-in-out;\n"]);return v=function(){return n},n}function g(){var n=Object(i.a)(["\n  width: ","px;\n  height: ","px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  font-weight: 200;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return g=function(){return n},n}function m(){var n=Object(i.a)(["\n  background-color: ",";\n  width: ","px;\n  height: ","px;\n  transition: height 0.5s ease-in-out;\n  flex-direction: column;\n  position: relative;\n"]);return m=function(){return n},n}var b=c.c.div(m(),(function(n){return n.theme.color.yellow}),(function(n){return n.theme.addModal.windowSize}),(function(n){return n.selected?n.theme.addModal.windowSize-(n.previous?0:n.theme.addModal.spacing):n.theme.addModal.windowSize/n.theme.addModal.sourceCount})),w=c.c.div(g(),(function(n){return n.theme.addModal.windowSize}),(function(n){return n.theme.addModal.windowSize/n.theme.addModal.sourceCount})),x=c.c.div(v(),(function(n){return n.visible?1:0}),(function(n){return n.visible?n.theme.addModal.windowSize/n.theme.addModal.sourceCount:0})),j=c.c.input(h()),O=c.c.span(p(),(function(n){return n.theme.color.white})),y=function(n){var e=n.selected,t=n.previous,i=n.onSelected,c=n.onGifSelected,u=Object(o.useState)(""),p=Object(r.a)(u,2),h=p[0],v=p[1],g=Object(o.useState)(!1),m=Object(r.a)(g,2),y=m[0],k=m[1],E=Object(o.useRef)(null),M=function(n){var e=Object(o.useCallback)((function(){null!==n.current&&n.current.focus()}),[n]);return Object(o.useEffect)(e,[]),e}(E);Object(o.useEffect)((function(){C.Url===e&&M(),null===e&&setTimeout((function(){return v("")}),500)}),[e,t,M]);var S=Object(o.useCallback)(Object(d.a)(l.a.mark((function n(){var e,t;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return k(!0),n.prev=1,n.next=4,Object(f.c)(h);case 4:return e=n.sent,n.next=7,Object(f.d)(e);case 7:t=n.sent,c(t),k(!1),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(1),console.error(n.t0);case 15:case"end":return n.stop()}}),n,null,[[1,12]])}))),[h,c,k,y]);return a.a.createElement(b,{selected:C.Url===e,previous:t},a.a.createElement(w,{onClick:function(){return C.Url!==e&&i()}},"Url"),a.a.createElement(x,{visible:C.Url===e},a.a.createElement(j,{ref:E,placeholder:"Your GIF url",type:"text",onChange:function(){var n=Object(d.a)(l.a.mark((function n(e){return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:v(e.currentTarget.value);case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),onKeyPress:function(n){"Enter"===n.key&&S()},value:h}),a.a.createElement(O,{onClick:S},"Confirm")),t&&a.a.createElement(s.a,{vertical:!0,onClick:function(){return c([])}},"Back"),null!==e&&C.Url!==e&&a.a.createElement(s.a,{vertical:!1,leading:!1,onClick:function(){return i()}},"Back"))};function k(){var n=Object(i.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return k=function(){return n},n}function E(){var n=Object(i.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: calc(100% - ","px);\n  height: calc(100% - ","px);\n  background-image: url(\"data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23E9B13DFF' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e\");\n  border-radius: 10px;\n  margin: 0 ","px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 200;\n"]);return E=function(){return n},n}function M(){var n=Object(i.a)(["\n  width: ","px;\n  opacity: ",";\n  height: ","px;\n  transition: opacity 0.5s ease-in-out, transform 0.2s ease-in-out;\n  position: relative;\n\n  &:hover {\n    cursor: pointer;\n    transform: scale(1.02);\n  }\n"]);return M=function(){return n},n}function S(){var n=Object(i.a)(["\n  width: ","px;\n  height: ","px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  font-weight: 200;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return S=function(){return n},n}function z(){var n=Object(i.a)(["\n  background-color: ",";\n  width: ","px;\n  height: ","px;\n  transition: height 0.5s ease-in-out;\n  position: relative;\n"]);return z=function(){return n},n}var C,A=c.c.div(z(),(function(n){return n.theme.color.blue}),600,(function(n){return n.selected?n.theme.addModal.windowSize-(n.previous?0:n.theme.addModal.spacing):n.theme.addModal.windowSize/n.theme.addModal.sourceCount})),F=c.c.div(S(),(function(n){return n.theme.addModal.windowSize}),(function(n){return n.theme.addModal.windowSize/n.theme.addModal.sourceCount})),G=c.c.div(M(),(function(n){return n.theme.addModal.windowSize}),(function(n){return n.visible?1:0}),(function(n){return n.visible?n.theme.addModal.windowSize/n.theme.addModal.sourceCount:0})),I=c.c.div(E(),(function(n){return 2*n.theme.addModal.spacing}),(function(n){return 2*n.theme.addModal.spacing}),(function(n){return n.theme.addModal.spacing})),U=c.c.input(k()),L=function(n){var e=n.selected,t=n.previous,i=n.onSelected,c=n.onGifSelected,u=Object(o.useState)(!1),p=Object(r.a)(u,2),h=(p[0],p[1]);return a.a.createElement(A,{selected:C.File===e,previous:t},a.a.createElement(F,{onClick:function(){return C.File!==e&&i()}},"File"),null!==e&&C.File!==e&&a.a.createElement(s.a,{vertical:!1,onClick:function(){return i()}},"Back"),a.a.createElement(G,{visible:C.File===e},a.a.createElement(I,null,"Click here or directly drop your file"),a.a.createElement(U,{type:"file",onChange:function(){var n=Object(d.a)(l.a.mark((function n(e){var t,r;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(null!==e.target.files&&"image/gif"===e.target.files[0].type){n.next=2;break}return n.abrupt("return");case 2:return h(!0),n.next=5,Object(f.b)(e.target.files[0]);case 5:return t=n.sent,n.next=8,Object(f.d)(t);case 8:r=n.sent,c(r),h(!1);case 11:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()})),t&&a.a.createElement(s.a,{vertical:!0,onClick:function(){return c([])}},"Back"))};function R(){var n=Object(i.a)(["\n  width: ","px;\n  overflow: hidden;\n  transform: translate3d(\n    0,\n    -","px,\n    0\n  );\n  transition: all 0.5s ease-in-out;\n"]);return R=function(){return n},n}!function(n){n[n.Url=0]="Url",n[n.File=1]="File"}(C||(C={}));var W=c.c.div(R(),(function(n){return n.theme.addModal.windowSize}),(function(n){return n.source===C.File?n.theme.addModal.windowSize/2-(n.previous?0:n.theme.addModal.spacing):0})),T=function(n){var e=n.onGifSelected,t=n.previous,i=Object(o.useState)(null),c=Object(r.a)(i,2),u=c[0],l=c[1];return a.a.createElement(W,{source:u,previous:t},a.a.createElement(y,{onSelected:function(){l(null===u?C.Url:null)},selected:u,previous:t,onGifSelected:e}),a.a.createElement(L,{onSelected:function(){l(null===u?C.File:null)},selected:u,previous:t,onGifSelected:e}))}},33:function(n,e,t){n.exports=t(46)},38:function(n,e,t){},46:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t.n(r),o=t(20),a=t.n(o),c=(t(38),t(3)),u=t.n(c),l=t(5),d=t(7),f=t(4),s=t(2),p=t(1),h=t(13),v=t(21),g=t(28),m=t(29),b=t(30),w=t.n(b),x=t(6),j=function(n){return new Promise(function(){var e=Object(l.a)(u.a.mark((function e(t){var r,i,o,a,c,l;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=new w.a,i=r.folder("GIFs"),o=Object(m.a)(n),e.prev=3,o.s();case 5:if((a=o.n()).done){e.next=15;break}return c=a.value,e.next=9,Object(x.d)(Object(x.e)(c.gif,Object(x.f)(c.gif)));case 9:if(""!==(l=e.sent)){e.next=12;break}return e.abrupt("return");case 12:i.file("GIF-Looper-Template-Spritesheet".concat(c.sprite+1<10?"0":"").concat(c.sprite+1,".png"),l.replace("data:image/png;base64,",""),{base64:!0});case 13:e.next=5;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(3),o.e(e.t0);case 20:return e.prev=20,o.f(),e.finish(20);case 23:r.generateAsync({type:"blob"}).then((function(n){t(n)}));case 24:case"end":return e.stop()}}),e,null,[[3,17,20,23]])})));return function(n){return e.apply(this,arguments)}}())},O=t(14);function y(){var n=Object(s.a)(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background: ",";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 100;\n  font-size: 25px;\n  color: ",";\n  opacity: 0;\n  transition: opacity 0.2s ease-in-out;\n\n  &:hover {\n    cursor: pointer;\n    opacity: 1;\n  }\n"]);return y=function(){return n},n}function k(){var n=Object(s.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  height: 138px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid ",";\n  border-radius: 3px;\n  font-size: 40px;\n  color: ",";\n  background: repeating-linear-gradient(\n    120deg,\n    ",",\n    "," 5px,\n    "," 5px,\n    "," 6px\n  );\n"]);return k=function(){return n},n}function E(){var n=Object(s.a)(["\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: repeat(4, 300px);\n"]);return E=function(){return n},n}function M(){var n=Object(s.a)(["\n  flex: 1;\n  display: flex;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return M=function(){return n},n}var S=p.c.div(M()),z=p.c.div(E()),C=p.c.div(k(),(function(n){return n.theme.color.lightGrey}),(function(n){return n.theme.color.lightGrey}),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.white}),(function(n){return n.theme.color.lightGrey}),(function(n){return n.theme.color.lightGrey})),A=p.c.div(y(),(function(n){return n.theme.color.red}),(function(n){return n.theme.color.black})),F=function(n){var e=n.loops,t=n.onOpenAddLoop,r=Object(d.a)(new Array(16)).map((function(n,t){return e.find((function(n){return n.sprite===t}))}));return i.a.createElement(S,null,i.a.createElement(z,null,r.map((function(n,e){return i.a.createElement(C,{key:e},void 0===n?e+1:i.a.createElement(O.a,{gif:n.gif,width:300}),i.a.createElement(A,{onClick:function(){return t(e)}},void 0===n?i.a.createElement("span",null,"Add"):i.a.createElement("span",null,"Edit")))}))))};function G(){var n=Object(s.a)(["\n  padding: 0 30px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  background-color: ",";\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return G=function(){return n},n}function I(){var n=Object(s.a)(["\n  flex: 1;\n"]);return I=function(){return n},n}function U(){var n=Object(s.a)(["\n  padding: 0 30px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  box-sizing: border-box;\n  background-color: ",";\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return U=function(){return n},n}function L(){var n=Object(s.a)(["\n  height: 60px;\n  display: flex;\n  color: white;\n  background: rgb(19, 19, 19);\n"]);return L=function(){return n},n}function R(){var n=Object(s.a)(["\n  height: 60px;\n  display: flex;\n  color: white;\n  background: rgb(19, 19, 19);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  font-weight: 100;\n  width: 100%;\n"]);return R=function(){return n},n}function W(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  font-family: 'Muli', sans-serif;\n  box-sizing: border-box;\n"]);return W=function(){return n},n}var T=p.c.div(W()),B=p.c.div(R()),D=p.c.div(L()),P=p.c.div(U(),(function(n){return n.theme.color.yellow})),q=p.c.div(I()),J=p.c.div(G(),(function(n){return n.theme.color.blue})),N=function(){var n=Object(h.a)(!1),e=Object(f.a)(n,3),t=e[0],o=e[1],a=e[2],c=function(){var n=Object(r.useState)([]),e=Object(f.a)(n,2),t=e[0],i=e[1],o=Object(r.useCallback)((function(n){var e=Object(d.a)(t).filter((function(e){return e.sprite!==n.sprite}));i([].concat(Object(d.a)(e),[n]))}),[t,i]);return[t,o]}(),s=Object(f.a)(c,2),p=s[0],m=s[1],b=Object(r.useState)(null),w=Object(f.a)(b,2),x=w[0],O=w[1];return i.a.createElement(T,null,i.a.createElement(B,null,i.a.createElement("span",null,"Gif looper generator")),i.a.createElement(F,{loops:p,onOpenAddLoop:function(n){O(n),o()}}),i.a.createElement(D,null,i.a.createElement(P,{onClick:function(){o()}},i.a.createElement("span",null,"Add")),i.a.createElement(q,null),i.a.createElement(J,{onClick:Object(l.a)(u.a.mark((function n(){var e;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,j(p);case 2:e=n.sent,Object(g.saveAs)(e,"GIFs.zip");case 4:case"end":return n.stop()}}),n)})))},i.a.createElement("span",null,"Download"))),t&&i.a.createElement(v.a,{dismissModal:function(){return a()},onLoopAdd:function(n){a(),m(n),O(null)},initialSprite:x}))},V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function X(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}a.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(p.a,{theme:{addModal:{windowSize:600,sourceCount:2,spacing:60},color:{yellow:"rgb(233, 177, 61)",red:"rgb(193, 51, 56)",blue:"rgb(39, 94, 132)",white:"rgb(208, 208, 208)",grey:"rgb(128, 128, 128)",lightGrey:"rgb(179, 179, 179)",black:"rgb(18, 18, 18)"}}},i.a.createElement(N,null))),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/opz-gif",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/opz-gif","/service-worker.js");V?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):X(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):X(e,n)}))}}()},6:function(n,e,t){"use strict";t.d(e,"g",(function(){return p})),t.d(e,"c",(function(){return s})),t.d(e,"d",(function(){return m})),t.d(e,"e",(function(){return v})),t.d(e,"f",(function(){return f})),t.d(e,"b",(function(){return c})),t.d(e,"a",(function(){return u}));var r=t(3),i=t.n(r),o=t(5),a=t(7),c=1014,u=468,l=function(n,e){var t=e.width,r=e.width/c*u,i=(e.height-r)/2;n.putImageData(e,0,-i,0,i,t,r)},d=function(n,e){var t=n.getContext("2d");null!==t&&(l(t,e),t.drawImage(n,0,0,c,u))},f=function(n){var e=Math.floor(2e3/(10*n[0].delay));return Object(a.a)(new Array(30)).map((function(t,r){return h(e>=n.length?n.length:e,r)}))},s=function(n,e){var t=0,r=f(e);return setInterval((function(){var i=e[r[t%30]].data;d(n,i),t++}),2e3/30)},p=function(n,e){var t=c/e[0].data.width;n.getContext("2d").scale(t,t)},h=function(n,e){var t=n/30;return Math.floor(e*t)},v=function(n,e){return e.map((function(e){var t=document.createElement("canvas");t.width=c,t.height=u;var r=n[e].data,i=c/r.width,o=t.getContext("2d");if(null===o)throw Error("Cannot get context");return l(o,r),o.scale(i,i),o.drawImage(t,0,0),o.getImageData(0,0,c,u)}))},g=function(n){return 22+(u+44)*Math.floor(n/4)},m=function(){var n=Object(o.a)(i.a.mark((function n(e){var t,r,o;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if((t=document.createElement("canvas")).width=4096,t.height=4096,null!==(r=t.getContext("2d"))){n.next=6;break}throw Error("Cannot create canvas");case 6:for(o in e)r.putImageData(e[o],5+(c+10)*(o%4),g(o));return r.drawImage(t,0,0),n.abrupt("return",t.toDataURL("image/png"));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},8:function(n,e,t){"use strict";t.d(e,"a",(function(){return r})),t.d(e,"d",(function(){return p})),t.d(e,"b",(function(){return l})),t.d(e,"c",(function(){return f}));var r,i=t(3),o=t.n(i),a=t(5),c=t(22),u=t.n(c);!function(n){n[n.Trim=0]="Trim",n[n.Sample=1]="Sample"}(r||(r={}));var l=function(){var n=Object(a.a)(o.a.mark((function n(e){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n){var t=new FileReader;t.onload=function(e){n(e.target.result)},t.readAsDataURL(e)})));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=Object(a.a)(o.a.mark((function n(e){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n){var t=new Image;t.onload=function(e){n(t)},t.src=e})));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=Object(a.a)(o.a.mark((function n(e){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n){var t=new XMLHttpRequest;t.onload=function(){var r=new FileReader;r.onloadend=function(){if(null===r.result)throw Error('Cannot fetch "'.concat(e,'"'));n(r.result)},r.readAsDataURL(t.response)},t.open("GET",e),t.responseType="blob",t.send()})));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=Object(a.a)(o.a.mark((function n(e){return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",new Promise((function(n){var t=new u.a({gif:e,auto_play:!1});t.load((function(){n(t)}))})));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=Object(a.a)(o.a.mark((function n(e){var t;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,d(e);case 2:return t=n.sent,document.createElement("div").appendChild(t),n.next=7,s(t);case 7:return n.abrupt("return",n.sent.get_frames());case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},9:function(n,e,t){"use strict";t.d(e,"a",(function(){return d}));var r=t(2),i=t(1);function o(){var n=Object(r.a)(["\n          left: 0;\n        "]);return o=function(){return n},n}function a(){var n=Object(r.a)(["\n          right: ","px;\n          transform: rotate(-90deg);\n          transform-origin: ","px 0;\n        "]);return a=function(){return n},n}function c(){var n=Object(r.a)(["\n          bottom: 0;\n        "]);return c=function(){return n},n}function u(){var n=Object(r.a)(["\n          top: 0;\n        "]);return u=function(){return n},n}function l(){var n=Object(r.a)(["\n  position: absolute;\n  ","\n\n  ","\n\n  height: ","px;\n  width: ","px;\n  text-align: center;\n  line-height: ","px;\n  font-size: 20px;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return l=function(){return n},n}var d=i.c.div(l(),(function(n){var e=n.leading;return void 0===e||e?Object(i.b)(u()):Object(i.b)(c())}),(function(n){return n.vertical?Object(i.b)(a(),(function(n){return n.theme.addModal.spacing}),(function(n){return n.theme.addModal.windowSize})):Object(i.b)(o())}),(function(n){return n.theme.addModal.spacing}),(function(n){return n.theme.addModal.windowSize}),(function(n){return n.theme.addModal.spacing}))}},[[33,1,2]]]);
//# sourceMappingURL=main.a9f04fb3.chunk.js.map