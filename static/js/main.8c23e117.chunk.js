(this.webpackJsonpmathtrainer=this.webpackJsonpmathtrainer||[]).push([[0],{38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(0),s=n.n(a),r=n(18),i=n.n(r),j=(n(38),n(4)),o=n(20),h=(n(39),function(){var e=Object(a.useState)(20),t=Object(o.a)(e,2),n=t[0],s=t[1],r=Object(a.useState)(0),i=Object(o.a)(r,2),j=i[0],h=i[1],l=Object(a.useState)(""),d=Object(o.a)(l,2),b=d[0],u=d[1],O=Object(a.useState)("20+12"),m=Object(o.a)(O,2),x=m[0],f=m[1],v=Object(a.useState)(0),M=Object(o.a)(v,2),p=M[0],N=M[1],g=function(){s(n-1),n<0&&s(0)};Object(a.useEffect)((function(){if(n>0){var e=setTimeout(g,1e3);return function(){return clearTimeout(e)}}})),Object(a.useEffect)((function(){S()}),[]);var S=function(){var e=Math.round(4*Math.random());if(0==e){var t=Math.round(50*Math.random()),n=Math.round(50*Math.random());N(t+n),f("".concat(t,"+").concat(n))}else if(1==e){var c=Math.round(50*Math.random()),a=Math.round(50*Math.random());N(Math.max(c,a)-Math.min(c,a)),f("".concat(Math.max(c,a),"-").concat(Math.min(c,a)))}else if(2==e){var s=Math.round(20*Math.random()),r=Math.round(10*Math.random());N(s*r),f("".concat(s,"*").concat(r))}else{var i=Math.round(10*Math.random())+1,j=Math.round(15*Math.random())+1,o=i*j;N(i),f("".concat(o,"/").concat(j))}};return n<=0?Object(c.jsxs)("div",{className:"container-l",children:[Object(c.jsx)("h1",{children:"\u0427\u0430\u0441 \u0432\u0438\u0439\u0448\u043e\u0432!"}),Object(c.jsxs)("h2",{children:["\u0412\u0438 \u043d\u0430\u0431\u0440\u0430\u043b\u0438 ",j," ",j%10==1?"\u0431\u0430\u043b":j%10==2||j%10==3||j%10==4?"\u0431\u0430\u043b\u0438":"\u0431\u0430\u043b\u0456\u0432"]}),Object(c.jsx)("p",{className:"againb",onClick:function(){window.location.reload()},children:"\u25b6"})]}):Object(c.jsxs)("div",{className:"container",children:[Object(c.jsxs)("div",{className:"timer",children:[Object(c.jsx)("h1",{children:n}),Object(c.jsxs)("span",{className:"score",children:["\u0411\u0430\u043b\u0438: ",j]})]}),Object(c.jsx)("div",{className:"expression",children:Object(c.jsx)("h1",{children:x})}),Object(c.jsx)("form",{className:"answer",onSubmit:function(e){e.preventDefault(),b.toString().match(/^$|\s+/)||(u(""),b==p?(S(),s(n+3),h(j+1)):s(n-3))},children:Object(c.jsx)("input",{type:"number",id:"ansinp",name:"answerv",value:b,onChange:function(e){u(e.target.value)}})})]})}),l=n(16),d=(n(40),function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"contn",children:[Object(c.jsx)("h1",{className:"header",children:"\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u043d\u0438\u0439 \u0442\u0440\u0435\u043d\u0430\u0436\u0435\u0440"}),Object(c.jsx)("span",{className:"startg",children:Object(c.jsx)(l.b,{to:"/play",className:"sl",children:"\u25b6"})})]})})});var b=n(67),u=n(64),O=n(66),m=n(65);n(46);var x=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"bar",children:Object(c.jsx)(b.a,{position:"static",children:Object(c.jsxs)(u.a,{className:"cont",children:[Object(c.jsx)(m.a,{edge:"start",color:"inherit","aria-label":"menu",children:"\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430"}),Object(c.jsx)("div",{className:"links",children:Object(c.jsx)(O.a,{color:"inherit",children:Object(c.jsx)(l.b,{to:"/",className:"l",children:"\u0413\u043e\u043b\u043e\u0432\u043d\u0430 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0430"})})})]})})})})};var f=function(){var e=Object(c.jsxs)(j.d,{children:[Object(c.jsx)(j.b,{path:"/",exact:!0,children:Object(c.jsx)(d,{})}),Object(c.jsx)(j.b,{path:"/play",exact:!0,children:Object(c.jsx)(h,{})}),Object(c.jsx)(j.a,{to:"/"})]});return Object(c.jsx)(l.a,{children:Object(c.jsxs)("div",{className:"main",children:[Object(c.jsx)(x,{className:"navbar"}),e]})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,68)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))};i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),v()}},[[47,1,2]]]);
//# sourceMappingURL=main.8c23e117.chunk.js.map