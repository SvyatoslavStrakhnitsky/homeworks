(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],{12:function(e,t,n){e.exports={items:"Affairs_items__3YLsY",buttonX:"Affairs_buttonX__18DoK",buttons:"Affairs_buttons__mtrox"}},13:function(e,t,n){e.exports={someClass:"Greeting_someClass__3gNMb",errorInput:"Greeting_errorInput__ViaYg",error:"Greeting_error__2PhVO",buttonAdd:"Greeting_buttonAdd__2SwGQ"}},14:function(e,t,n){e.exports={superInput:"SuperInputText_superInput__FMWVn",errorInput:"SuperInputText_errorInput__1Fn6b",error:"SuperInputText_error__rsALi"}},18:function(e,t,n){e.exports={blue:"HW4_blue__1mD9r",column:"HW4_column__E_16h",testSpanError:"HW4_testSpanError__2rU70"}},19:function(e,t,n){e.exports={default:"SuperButton_default__hHn41",red:"SuperButton_red__9eK1w"}},20:function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__1LVFp",spanClassName:"SuperCheckbox_spanClassName__3hCLZ"}},26:function(e,t,n){e.exports={App:"App_App__1mYBb"}},33:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(25),s=n.n(a),i=(n(33),n(26)),o=n.n(i),j=n(7),l=n(2),b=n(0);var u=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:"404"}),Object(b.jsx)("div",{children:"Page not found!"}),Object(b.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})};var d=function(){return Object(b.jsx)("div",{})};var h=function(){return Object(b.jsx)("div",{})},x=n(6),O=n.n(x);var m=function(e){return Object(b.jsxs)("div",{className:O.a.message,children:[Object(b.jsx)("img",{className:O.a.avatar,src:e.avatar,alt:"avatar"}),Object(b.jsx)("div",{className:O.a.angle}),Object(b.jsxs)("div",{className:O.a.content,children:[Object(b.jsx)("div",{className:O.a.name,children:e.name}),Object(b.jsx)("div",{className:O.a.text,children:e.message}),Object(b.jsx)("div",{className:O.a.time,children:e.time})]})]})},f={avatar:"https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg",name:"Sviatoslav",message:"npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",time:(new Date).toLocaleTimeString().slice(0,5)};var p=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 1",Object(b.jsx)(m,{avatar:f.avatar,name:f.name,message:f.message,time:f.time}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},_=n(5),v=n(12),g=n.n(v);var C=function(e){return Object(b.jsxs)("div",{className:g.a.items,children:[Object(b.jsx)("div",{children:Object(b.jsx)("span",{children:e.affair.name})}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("span",{children:[" ",e.affair.priority]}),Object(b.jsx)("button",{className:g.a.buttonX,onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})]})};var k=function(e){var t=e.data.map((function(t){return Object(b.jsx)(C,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(b.jsxs)("div",{className:g.a.buttons,children:[t,Object(b.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(b.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},N=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var w=function(){var e=Object(r.useState)(N),t=Object(_.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)("all"),s=Object(_.a)(a,2),i=s[0],o=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 2",Object(b.jsx)("div",{children:Object(b.jsx)(k,{data:j,setFilter:o,deleteAffairCallback:function(e){return c(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}})}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},y=n(28),S=n(13),A=n.n(S),I=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,c=e.error,a=e.totalUsers,s=e.onKeyPressHandler,i=c?A.a.errorInput:A.a.someClass;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{value:t,onChange:n,className:i,onKeyPress:s,onBlur:n}),Object(b.jsx)("button",{className:A.a.buttonAdd,onClick:r,children:"Add"}),Object(b.jsxs)("span",{style:{color:"blue"},children:[" ",a]})]}),Object(b.jsx)("div",{className:A.a.error,children:c})]})},M=function(e){var t=e.users,n=e.addUserCallback,c=Object(r.useState)(""),a=Object(_.a)(c,2),s=a[0],i=a[1],o=Object(r.useState)(""),j=Object(_.a)(o,2),l=j[0],u=j[1],d=function(){n(s),s&&(alert("Hello ".concat(s)),i(""))},h=t.length;return Object(b.jsx)(I,{name:s,setNameCallback:function(e){var t=e.currentTarget.value;if(""===t.trim())return i(""),u("Name is required");u(""),i(t)},onKeyPressHandler:function(e){"Enter"===e.key&&d()},addUser:d,error:l,totalUsers:h})},T=n(42);var E=function(){var e=Object(r.useState)([]),t=Object(_.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 3",Object(b.jsx)(M,{users:n,addUserCallback:function(e){var t={_id:Object(T.a)(),name:e};""!==t.name&&c([].concat(Object(y.a)(n),[t]))}}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})},P=n(8),F=n(9),H=n(14),K=n.n(H),U=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,c=e.onEnter,a=e.error,s=e.className,i=e.spanClassName,o=Object(F.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(K.a.error," ").concat(i||""),l="".concat(K.a.input," ").concat(a?K.a.errorInput:K.a.superInput," ").concat(s);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(P.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),c&&"Enter"===e.key&&c()},className:l},o)),a&&Object(b.jsx)("span",{className:j,children:a})]})},B=n(18),L=n.n(B),W=n(19),G=n.n(W),V=function(e){var t=e.red,n=e.className,r=Object(F.a)(e,["red","className"]),c="".concat(t?G.a.red:G.a.default," ").concat(n);return Object(b.jsx)("button",Object(P.a)({className:c},r))},X=n(20),Y=n.n(X),D=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,c=(e.spanClassName,e.children),a=Object(F.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Y.a.checkbox," ").concat(r||"");return Object(b.jsxs)("label",{children:[Object(b.jsx)("input",Object(P.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},a)),c&&Object(b.jsx)("span",{className:Y.a.spanClassName,children:c})]})};var J=function(){var e=Object(r.useState)(""),t=Object(_.a)(e,2),n=t[0],c=t[1],a=n?"":"error",s=function(){a?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(_.a)(i,2),j=o[0],l=o[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)("hr",{}),"homeworks 4",Object(b.jsxs)("div",{className:L.a.column,children:[Object(b.jsx)(U,{value:n,onChangeText:c,onEnter:s,error:a}),Object(b.jsx)(U,{className:L.a.blue}),Object(b.jsx)(V,{children:"default"}),Object(b.jsx)(V,{red:!0,onClick:s,children:"delete "}),Object(b.jsx)(V,{disabled:!0,children:"disabled"}),Object(b.jsx)(D,{checked:j,onChangeChecked:l,children:"some text "}),Object(b.jsx)(D,{checked:j,onChange:function(e){return l(e.currentTarget.checked)}})]}),Object(b.jsx)("hr",{}),Object(b.jsx)("hr",{})]})};var Q=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{}),Object(b.jsx)(w,{}),Object(b.jsx)(E,{}),Object(b.jsx)(J,{})]})},q="/pre-junior",z="/junior",R="junior-plus";var Z=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(l.d,{children:[Object(b.jsx)(l.b,{path:"/",exact:!0,render:function(){return Object(b.jsx)(l.a,{to:q})}}),Object(b.jsx)(l.b,{path:q,render:function(){return Object(b.jsx)(Q,{})}}),Object(b.jsx)(l.b,{path:z,render:function(){return Object(b.jsx)(d,{})}}),Object(b.jsx)(l.b,{path:R,render:function(){return Object(b.jsx)(h,{})}}),Object(b.jsx)(l.b,{render:function(){return Object(b.jsx)(u,{})}})]})})};var $=function(){return Object(b.jsx)("nav",{children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:q,children:"Profile"})}),Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:z,children:"Message"})}),Object(b.jsx)("li",{children:Object(b.jsx)(j.b,{to:R,children:"Music"})})]})})};var ee=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(j.a,{children:[Object(b.jsx)($,{}),Object(b.jsx)(Z,{})]})})};var te=function(){return Object(b.jsxs)("div",{className:o.a.App,children:[Object(b.jsx)("div",{children:"react homeworks:"}),Object(b.jsx)(ee,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(te,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports={message:"Message_message__3L7Ez",avatar:"Message_avatar__2jvoN",content:"Message_content__18dod",name:"Message_name__3ogQP",text:"Message_text__3JhcQ",time:"Message_time__1ewpU",angle:"Message_angle__1Bb31"}}},[[40,1,2]]]);
//# sourceMappingURL=main.ed66170a.chunk.js.map