(this.webpackJsonptvmaze=this.webpackJsonptvmaze||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),c=n(12),a=n.n(c),s=(n(18),n(3)),l=(n(19),n(20),n(1)),r=function(){return Object(l.jsx)("div",{id:"headerlogo-container",children:Object(l.jsx)("img",{id:"headerlogo",src:"https://static.tvmaze.com/images/tvm-header-logo.png",alt:""})})},d=n(5),j=n(9),h=(n(22),function(e){var t=e.show;return Object(l.jsxs)("div",{id:"shortShow-container",children:[Object(l.jsx)("div",{id:"shortShowImages-container",children:Object(l.jsx)("img",{src:t.show.image.original,alt:""})}),Object(l.jsxs)("div",{id:"shortShowInfo-container",children:[Object(l.jsx)("h1",{children:t.show.name}),Object(l.jsxs)("p",{children:["Score ",Object(l.jsx)("span",{children:t.score.toFixed(2)})]}),Object(l.jsx)(j.b,{id:"shortShowInfo-detailsbtn",to:"shows/".concat(t.show.id),children:"Details"})]})]})}),u=(n(23),function(){var e=Object(o.useState)(),t=Object(d.a)(e,2),n=t[0],i=t[1];return Object(o.useEffect)((function(){fetch("https://api.tvmaze.com/search/shows?q=all").then((function(e){return e.json()})).then((function(e){return i(e)})).catch((function(e){console.log(e)}))}),[]),Object(l.jsx)("div",{id:"shows-container",children:null===n||void 0===n?void 0:n.map((function(e){return Object(l.jsx)(h,{show:e},e.score)}))})}),b=n(2),m=n(13),O=(n(24),function(){var e=Object(s.g)().showID,t=Object(o.useState)(),n=Object(d.a)(t,2),i=n[0],c=n[1],a=Object(o.useState)(),r=Object(d.a)(a,2),h=r[0],u=r[1],O=Object(o.useState)(!1),v=Object(d.a)(O,2),x=v[0],f=v[1],g=Object(o.useState)(!1),w=Object(d.a)(g,2),p=w[0],S=w[1],y=Object(m.a)(),N=y.register,k=y.handleSubmit;return Object(o.useEffect)((function(){fetch("https://api.tvmaze.com/shows/".concat(e)).then((function(e){return e.json()})).then((function(e){c(e);var t=JSON.parse(localStorage.getItem(e.name));t&&(u(t),S(!0))})).catch((function(e){console.log(e)}))}),[e]),null!==i&&void 0!==i&&i.name?Object(l.jsxs)("div",{id:"detailedShow-container",children:[Object(l.jsx)("div",{id:"detailedShowImage-container",children:Object(l.jsx)("img",{src:null===i||void 0===i?void 0:i.image.original,alt:""})}),Object(l.jsxs)("div",{id:"detailedShowInfo-container",children:[Object(l.jsx)(j.b,{id:"detailedShowInfo-homebtn",to:"/",children:"Back to List"}),Object(l.jsx)("h1",{children:null===i||void 0===i?void 0:i.name}),Object(l.jsx)("div",{dangerouslySetInnerHTML:{__html:null===i||void 0===i?void 0:i.summary}}),Object(l.jsxs)("p",{children:["This ",null===i||void 0===i?void 0:i.type," show was Premiered On ",Object(l.jsx)("span",{children:null===i||void 0===i?void 0:i.premiered})]}),Object(l.jsx)("div",{id:"bookingManagement",children:p?Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"This show is already booked!"}),Object(l.jsxs)("p",{children:["Booked by ",Object(l.jsx)("span",{children:null===h||void 0===h?void 0:h.customerName})]}),Object(l.jsx)("button",{className:"detailedShowInfo-bookbtn",onClick:function(){S(!1),f(!0)},children:"Change booking?"})]}):Object(l.jsxs)("div",{children:[!x&&Object(l.jsx)("button",{className:"detailedShowInfo-bookbtn",onClick:function(){return f(!0)},children:"Get ticket"}),x&&Object(l.jsxs)("form",{id:"bookingForm",onSubmit:k((function(e){""!==e.customerName?""!==e.customerEmail?(u(e),localStorage.setItem(null===i||void 0===i?void 0:i.name,JSON.stringify(e)),S(!0)):alert("Please Provide your Email"):alert("Please provide your name")})),children:[Object(l.jsx)("label",{htmlFor:"showName",children:"Name of the Show"}),Object(l.jsx)("input",Object(b.a)({id:"showName",type:"text",defaultValue:null===i||void 0===i?void 0:i.name,readOnly:!0},N("showName"))),Object(l.jsx)("label",{htmlFor:"customerName",children:"Enter your Name"}),Object(l.jsx)("input",Object(b.a)({id:"customerName",type:"text",defaultValue:null===h||void 0===h?void 0:h.customerName},N("customerName"))),Object(l.jsx)("label",{htmlFor:"customerEmail",children:"Enter your Email"}),Object(l.jsx)("input",Object(b.a)({id:"customerEmail",type:"email",defaultValue:null===h||void 0===h?void 0:h.customerEmail},N("customerEmail"))),Object(l.jsx)("label",{htmlFor:"seatQuantity",children:"How many seats do you want to book?"}),Object(l.jsx)("input",Object(b.a)({id:"seatQuantity",type:"number",defaultValue:null!==h&&void 0!==h&&h.seatQuantity?null===h||void 0===h?void 0:h.seatQuantity:1,min:1},N("seatQuantity"))),Object(l.jsx)("button",{className:"detailedShowInfo-bookbtn",type:"submit",children:"Book Now!"})]})]})})]})]}):Object(l.jsx)("div",{children:Object(l.jsx)("h1",{id:"loadingData",children:"Please Wait a moment!"})})});var v=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(r,{}),Object(l.jsxs)(s.c,{children:[Object(l.jsx)(s.a,{path:"/",element:Object(l.jsx)(u,{})}),Object(l.jsx)(s.a,{path:"/shows/:showID",element:Object(l.jsx)(O,{})})]})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),o(e),i(e),c(e),a(e)}))};a.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(j.a,{basename:"/tvmaze",children:Object(l.jsx)(v,{})})}),document.getElementById("root")),x()}},[[25,1,2]]]);
//# sourceMappingURL=main.47b0adb5.chunk.js.map