(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{170:function(e,a,t){},171:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(20),c=t.n(l),s=t(21),o=t.n(s),i=t(39),m=t(92),u=t(93),d=t(95),E=t(96),f=t(8),h=t(38),p=t(172),v=t(173),g=t(174),b=t(175),y=t(176),N=t(177),w=t(178),k=t(18),x=function(){var e=Object(n.useState)(!1),a=Object(h.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement(p.a,{color:"dark",dark:!0,expand:"md",className:"p-3"},r.a.createElement(v.a,{to:"/home"},"Why I love U"),r.a.createElement(g.a,{onClick:function(){return l(!t)}}),r.a.createElement(b.a,{isOpen:t,navbar:!0},r.a.createElement(y.a,{className:"mr-auto",navbar:!0},r.a.createElement(N.a,null,r.a.createElement(k.c,{className:"nav-link",to:"/home"},r.a.createElement("i",{className:"fa fa-home","aria-hidden":"true"})," Home")),r.a.createElement(N.a,null,r.a.createElement(k.c,{className:"nav-link",to:"/reasons"},"Reasons"))),r.a.createElement(w.a,null,"To The Moon"))))},j=t(194),I=t(180),O=t(181),S=t(182),q=t(183),R=t(184),C=t(185),T=t(188),M=t(179),_=t(186),L=t(187),A=t(189),D=t(25),z=t(52),W=function(e){var a=e.Post,t=(e.isLoading,Object(n.useState)(!1)),l=Object(h.a)(t,2),c=l[0],s=l[1],o=function(){return s(!c)};return r.a.createElement("div",{className:" col-12 mt-5"},r.a.createElement(M.a,{color:"primary",onClick:o,className:" btn-block"},"Add Reasons"),r.a.createElement(j.a,{isOpen:c,toggle:o},r.a.createElement(I.a,{toggle:o},"Add Raison title"),r.a.createElement(D.LocalForm,{onSubmit:function(e){o(),a(e.title,e.img,e.raison)}},r.a.createElement(O.a,null,r.a.createElement(S.a,{className:"form-group"},r.a.createElement(q.a,{html:"title",md:2},"Title"),r.a.createElement(R.a,{md:10},r.a.createElement(D.Control.text,{model:".title",id:"title",placeholder:"Title",className:"form-control",validators:{required:z.required}}),r.a.createElement(D.Errors,{className:"text-danger",model:".title",show:"touched",messages:{required:"Is Required"}}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(q.a,{html:"raison",md:2},"image"),r.a.createElement(R.a,{md:10},r.a.createElement(D.Control.file,{model:".img",id:"img",className:"form-control",validators:{required:z.required}}),r.a.createElement(D.Errors,{className:"text-danger",model:".img",show:"touched",messages:{required:"Is Required"}}))),r.a.createElement(S.a,{className:"form-group"},r.a.createElement(q.a,{html:"raison",md:12},"Rasion"),r.a.createElement(R.a,{md:12},r.a.createElement(D.Control.textarea,{model:".raison",row:"10",id:"raison",className:"form-control",validators:{required:z.required}}),r.a.createElement(D.Errors,{className:"text-danger",model:".raison",show:"touched",messages:{required:"Is Required"}})))),r.a.createElement(C.a,null,r.a.createElement(M.a,{type:"submit",color:"primary"},"Send")," ",r.a.createElement(M.a,{color:"secondary",onClick:o},"Cancel")))))},V=function(e){var a=e.Delete,t=(e.isLoading,Object(n.useState)(!1)),l=Object(h.a)(t,2),c=l[0],s=l[1],o=function(){return s(!c)};return r.a.createElement("div",{className:" col-12 mt-2"},r.a.createElement(M.a,{color:"danger",onClick:o,className:"btn-block"},"Delete All Reasons"),r.a.createElement(j.a,{isOpen:c,toggle:o},r.a.createElement(I.a,{toggle:o},"Are you sure ?"),r.a.createElement(O.a,null,r.a.createElement(M.a,{color:"warning",onClick:a},"Confirm"))))},$=function(e){var a=e.raison;return r.a.createElement(_.a,null,r.a.createElement(k.b,{to:"/reasons/".concat(a._id)},r.a.createElement(L.a,{src:a.img,alt:a.img}),r.a.createElement(T.a,null,r.a.createElement(A.a,null,a.title))))},J=function(e){var a=e.raisons.raison.map((function(e){return r.a.createElement("div",{key:e.id,className:"col-9 col-md-3 m-3 "},r.a.createElement($,{raison:e}))}));return r.a.createElement("div",null,r.a.createElement("div",{className:"container mb-5 "},r.a.createElement("div",{className:"row col-12 animated bounce"},r.a.createElement(W,{Post:e.postRaison}),r.a.createElement(V,{Delete:e.deleteRaisons,isLoading:e.raisons.isLoading})),r.a.createElement("hr",null),r.a.createElement("div",{className:"row justify-content-center animated backInRight delay-1s "},a)))},F=function(e){var a=e.raison;return console.log(a.img),r.a.createElement("div",{key:a._id},r.a.createElement(_.a,null,r.a.createElement(L.a,{src:a.img,alt:a.title})))},P=function(e){var a=e.raison;return r.a.createElement("div",null,r.a.createElement("h1",{className:"mb-4 text-secondary"},a.title)," ",r.a.createElement("br",null)," ",r.a.createElement("br",null),r.a.createElement("h4",{className:"mb-4 text-secondary text-center"},a.raison))},U=function(e){return r.a.createElement("div",{className:"row mx-auto container mt-5 mb-5 animated backInDown border border-secondary"},r.a.createElement("div",{className:"col-6 mt-5 justify-content-center mb-5 "},r.a.createElement("div",{className:"col-12"},r.a.createElement(F,{raison:e.raison}))),r.a.createElement("div",{className:"col-6 mt-5 justify-content-center mb-5"},r.a.createElement("div",null,r.a.createElement(P,{raison:e.raison}),r.a.createElement(k.b,{to:"/reasons"},r.a.createElement(M.a,{color:"danger",size:"lg",block:!0,onClick:function(){e.deleteRaison(e.raison._id)}},"Delete reason")))))},Y=t(190),Z=t(191),B=t(193),G=function(){return r.a.createElement("div",null,r.a.createElement(Y.a,{fluid:!0,className:"bg-muted text-info animated pulse "},r.a.createElement(Z.a,{fluid:!0,className:""},r.a.createElement("h1",{className:"display-3 "},"Why i love u?"),r.a.createElement("p",{className:"lead"}," This is the question, maybe a hard question but not for the reasons, i have so much reasons to love u, it's difficult to select which one reason.",r.a.createElement("br",null),"With this page I want to tell u all the reasons to love u, this will have more updates and will contain more reasons and new functions",r.a.createElement("br",null),r.a.createElement("br",null),"---Love u baby it's just de begining"))))},H=function(e){var a=e.items;return r.a.createElement("div",{className:" row col-12 col-mt-9 m-auto animated bounce"},r.a.createElement(B.a,{items:a}))},K=function(e){return r.a.createElement("div",null,r.a.createElement(G,null),r.a.createElement("div",{className:"container mt-5 mb-5"},r.a.createElement(H,{items:[{src:"images/carousel/carousel_1.jpeg",altText:"Slide 1",caption:""},{src:"images/carousel/carousel_2.jpeg",altText:"Slide 2",caption:""},{src:"images/carousel/carousel_3.jpeg",altText:"Slide 3",caption:""},{src:"images/carousel/carousel_4.jpeg",altText:"Slide 4",caption:""},{src:"images/carousel/carousel_5.jpeg",altText:"Slide 5",caption:""},{src:"images/carousel/carousel_6.jpeg",altText:"Slide 6",caption:""}]}),r.a.createElement("hr",null),r.a.createElement("div",{className:"row text-justify mt-3 animated bounce"},r.a.createElement("div",{className:"col-12 col-md-6 mt-2  "},r.a.createElement("h3",{className:"text-primary text-left "},"Goals"),r.a.createElement("h4",null,"You and only you, the love of my life, that little girl who takes my breath away and doesn't let me breathe with her eyes. That baby I want to spend the rest of my days. With whom I want to share, celebrate, enjoy, travel and live the most incredible life on the planet, we'll have the brightest, most beautiful and happy family. achieve our goals, dreams and aspirations, if there is one thing I am sure of, my love is that we will go far, we will fly as high as an eagle and we will never give up. We will fulfill our dreams")),r.a.createElement("div",{className:"col-12 col-md-6 mt-2"},r.a.createElement("h3",{className:"text-primary text-left"},"Wishes"),r.a.createElement("h4",null,"I wish with all my heart to continue calling you my princess, my little girl, my freshly fried cake. I want to be able to count on you through thick and thin, I want to be able to help you fulfill your dreams, to make you stronger and above all to help you enjoy life. Take away every bitterness that you carry is my goal and loving you is my goal. I love you and only you for all my life, you and only you in my bed for the rest of my days watching you wake up every morning and sleeping every night I LOVE YOU")))))},Q=t(192),X=function(e){return e.ErrMess.err?r.a.createElement(Q.a,{color:"primary",className:"m-0"},e.ErrMess.errMess):r.a.createElement("div",null)},ee=function(){return r.a.createElement("div",{className:"footer bg-dark text-white mt-5 p-5"},r.a.createElement("div",{className:"container "},r.a.createElement("h1",null,"Contact us"),r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("div",{className:"col-12 col-md-5 align-self-center"},r.a.createElement("address",null,r.a.createElement("i",{className:"fa fa-phone fa-lg"}),": +58 424-1094447",r.a.createElement("br",null),r.a.createElement("i",{className:"fa fa-envelope fa-lg"}),": ",r.a.createElement("a",{href:"mailto:oscaremiliolugoyt@gmail.com"},"oscaremiliolugoyt@gmail.com"))),r.a.createElement("div",{className:"col-12 col-md-5 align-self-center text-justify"},r.a.createElement("p",null,"I'm Just a software development student, i'm working with react and node if u have any question o recomendation please contact me :)"),r.a.createElement("div",{className:"text-center"},r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://google.com/+"},r.a.createElement("i",{className:"fa fa-google-plus"})),r.a.createElement("a",{className:"btn btn-social-icon btn-facebook",href:"http://www.facebook.com/profile.php?id="},r.a.createElement("i",{className:"fa fa-facebook"})),r.a.createElement("a",{className:"btn btn-social-icon btn-linkedin",href:"http://www.linkedin.com/in/"},r.a.createElement("i",{className:"fa fa-linkedin"})),r.a.createElement("a",{className:"btn btn-social-icon btn-twitter",href:"http://twitter.com/"},r.a.createElement("i",{className:"fa fa-twitter"})),r.a.createElement("a",{className:"btn btn-social-icon btn-google",href:"http://youtube.com/"},r.a.createElement("i",{className:"fa fa-youtube"})),r.a.createElement("a",{className:"btn btn-social-icon",href:"mailto:"},r.a.createElement("i",{className:"fa fa-envelope-o"})))))))},ae=function(){return r.a.createElement("div",{className:"container "},r.a.createElement("div",{className:"row col-12 p-5 justify-content-center"},r.a.createElement("span",{className:"fa fa-spinner fa-pulse fa-3x fa-fw text-primary"}),r.a.createElement("p",null,"Loading . . .")))},te=t(40),ne=t.n(te),re={err:!1,errMess:"",raison:[]},le=function(e){Object(E.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this,e)).state={raisons:re},n}return Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(){var a=Object(i.a)(o.a.mark((function a(t){var n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,ne.a.get("api/reason");case 3:n=a.sent,t.err=!1,t.raison=n.data,e.setState({raisons:t}),a.next=15;break;case 9:a.prev=9,a.t0=a.catch(0),t.err=!0,t.errMess=a.t0.message,e.setState({raisons:t}),console.log("data: ",t);case 15:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}})()(re)}},{key:"render",value:function(){var e=this,a=function(){var a=Object(i.a)(o.a.mark((function a(t,n,r){var l,c;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,(l=new FormData).append("image",n[0]),l.append("raison",r),l.append("title",t),a.next=7,ne.a.post("api/reason",l);case 7:c=a.sent,re.err=!1,re.raison=c.data,a.next=16;break;case 12:a.prev=12,a.t0=a.catch(0),re.err=!0,re.errMess=a.t0.message;case 16:e.setState({raisons:re});case 17:case"end":return a.stop()}}),a,null,[[0,12]])})));return function(e,t,n){return a.apply(this,arguments)}}(),t=function(){var a=Object(i.a)(o.a.mark((function a(){var t;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,ne.a.delete("api/reason");case 3:t=a.sent,re.err=!1,re.raison=t.data,a.next=12;break;case 8:a.prev=8,a.t0=a.catch(0),re.err=!0,re.errMess=a.t0.message;case 12:e.setState({raisons:re});case 13:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(){return a.apply(this,arguments)}}(),n=function(){var a=Object(i.a)(o.a.mark((function a(t){var n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,ne.a.delete("api/reason/"+t);case 3:n=a.sent,re.err=!1,re.raison=n.data,console.log(n.data),a.next=13;break;case 9:a.prev=9,a.t0=a.catch(0),re.err=!0,re.errMess=a.t0.message;case 13:e.setState({raisons:re});case 14:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(X,{ErrMess:this.state.raisons}),r.a.createElement(f.d,null,r.a.createElement(f.b,{exact:!0,path:"/home",component:function(){return r.a.createElement(K,{raisons:e.state.raisons})}}),r.a.createElement(f.b,{exact:!0,path:"/reasons",component:function(){return r.a.createElement(J,{raisons:e.state.raisons,postRaison:a,deleteRaisons:t})}}),r.a.createElement(f.b,{path:"/reasons/:reasonId",component:function(a){var t=a.match,l=e.state.raisons.raison.filter((function(e){return e._id===t.params.reasonId}))[0];return l?r.a.createElement(U,{raison:l,deleteRaison:n}):r.a.createElement("div",{className:"mb-5"},r.a.createElement(ae,null))}}),r.a.createElement(f.a,{to:"/home"})),r.a.createElement(ee,null))}}]),t}(n.Component);var ce=function(){return r.a.createElement(k.a,null,r.a.createElement("div",{heigth:"100",className:"App"},r.a.createElement(le,null)))};t(167),t(168),t(169),t(170);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root"))},52:function(e,a){a.isValidEmail=function(e){return/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,10})$/.test(e)},a.isValidphone=function(e){return/^[0-9]+$/.test(e)},a.isValidname=function(e){return/^[a-zA-Z]+$/.test(e)},a.required=function(e){return e&&e.length},a.isValidNamelarge=function(e){return/^[a-zA-Z]{3,15}$/.test(e)}},97:function(e,a,t){e.exports=t(171)}},[[97,1,2]]]);
//# sourceMappingURL=main.bb285ff3.chunk.js.map