"use strict";(self.webpackChunkdemo_project=self.webpackChunkdemo_project||[]).push([[402],{3402:(_,d,A)=>{A.r(d),A.d(d,{CardPageModule:()=>v,CardRoutingModule:()=>c});var a=A(6895),o=A(4736),s=A(2201),p=A(3869),l=A(751),u=A(8256),i=A(7954),U=A(4772);function m(n,t){if(1&n&&(u.TgZ(0,"div",2)(1,"h2",3),u._uU(2),u.qZA(),u.TgZ(3,"p",4),u._uU(4),u.qZA()()),2&n){const e=u.oxw();u.xp6(2),u.Oqu(e.header),u.xp6(2),u.Oqu(e.subheader)}}const Z=["*"];let f=(()=>{class n{constructor(){this.header=null,this.subheader=null}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=u.Xpm({type:n,selectors:[["fds-card"]],inputs:{header:"header",subheader:"subheader"},ngContentSelectors:Z,decls:3,vars:1,consts:[[1,"card"],["class","card-header",4,"ngIf"],[1,"card-header"],[1,"header-title"],[1,"sub-header"]],template:function(e,r){1&e&&(u.F$t(),u.TgZ(0,"div",0),u.YNc(1,m,5,2,"div",1),u.Hsn(2),u.qZA()),2&e&&(u.xp6(1),u.Q6J("ngIf",r.header||r.subheader))},dependencies:[a.O5],encapsulation:2}),n})();const C=["*"];let h=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=u.Xpm({type:n,selectors:[["fds-card-content"]],ngContentSelectors:C,decls:2,vars:0,consts:[[1,"card-text"]],template:function(e,r){1&e&&(u.F$t(),u.TgZ(0,"div",0),u.Hsn(1),u.qZA())},encapsulation:2}),n})();var g=A(259);const b=[{path:"",component:(()=>{class n extends l.y{}return n.\u0275fac=function(){let t;return function(r){return(t||(t=u.n5z(n)))(r||n)}}(),n.\u0275cmp=u.Xpm({type:n,selectors:[["app-card-page"]],features:[u.qOj],decls:78,vars:0,consts:[["header","Cards","sub-header","Component","doc-url","https://designsystem.dk/komponenter/cards/"],["header","Overskrift"],["ng-non-bindable",""],["header","Header","subheader","Underst\xf8ttende tekst"],["visual","secondary"],["visual","tertiary"],["href","#"],["href","https://designsystem.dk/"]],template:function(e,r){1&e&&(u._UZ(0,"app-header",0),u.TgZ(1,"section")(2,"h2"),u._uU(3,"Simple example"),u.qZA(),u.TgZ(4,"app-demo-view")(5,"fds-card",1)(6,"fds-card-content")(7,"p"),u._uU(8,"Indhold"),u.qZA()()()(),u.TgZ(9,"code",2),u._uU(10,'\n\xa0\xa0<fds-card\xa0header="Overskrift">\n'),u._UZ(11,"br"),u._uU(12,"\n\xa0\xa0\xa0\xa0<fds-card-content>\n"),u._UZ(13,"br"),u._uU(14,"\n\xa0\xa0\xa0\xa0\xa0\xa0<p>Indhold</p>\n"),u._UZ(15,"br"),u._uU(16,"\n\xa0\xa0\xa0\xa0</fds-card-content>\n"),u._UZ(17,"br"),u._uU(18,"\n\xa0\xa0</fds-card>\n"),u._UZ(19,"br"),u.qZA()(),u.TgZ(20,"section")(21,"h2"),u._uU(22,"Advanced example"),u.qZA(),u.TgZ(23,"app-demo-view")(24,"fds-card",3)(25,"fds-card-content")(26,"p"),u._uU(27," Dette er et "),u.TgZ(28,"i"),u._uU(29,"tekstomr\xe5de"),u.qZA(),u._uU(30,", hvor du kan skrive hvad du har lyst til. "),u.qZA(),u.TgZ(31,"fds-button",4),u._uU(32,"Sekund\xe6rknap"),u.qZA(),u.TgZ(33,"fds-button",5),u._uU(34,"Terti\xe6rknap"),u.qZA(),u.TgZ(35,"p")(36,"a",6),u._uU(37," Et link til et sted i l\xf8sningen "),u.qZA()(),u.TgZ(38,"p")(39,"a",7),u._uU(40," Et link til et sted uden for l\xf8sningen "),u.qZA()()()()(),u.TgZ(41,"code",2),u._uU(42,'\n\xa0\xa0<fds-card\xa0header="Header"\xa0subheader="Underst\xf8ttende\xa0tekst">\n'),u._UZ(43,"br"),u._uU(44,"\n\xa0\xa0\xa0\xa0<fds-card-content>\n"),u._UZ(45,"br"),u._uU(46,"\n\xa0\xa0\xa0\xa0\xa0\xa0<p>\n"),u._UZ(47,"br"),u._uU(48,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Dette\xa0er\xa0et\xa0<i>tekstomr\xe5de</i>,\xa0hvor\xa0du\xa0kan\xa0skrive\xa0hvad\xa0du\xa0har\xa0lyst\n"),u._UZ(49,"br"),u._uU(50,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0til.\n"),u._UZ(51,"br"),u._uU(52,"\n\xa0\xa0\xa0\xa0\xa0\xa0</p>\n"),u._UZ(53,"br"),u._uU(54,'\n\xa0\xa0\xa0\xa0\xa0\xa0<fds-button\xa0visual="secondary">Sekund\xe6rknap</fds-button>\n'),u._UZ(55,"br"),u._uU(56,'\n\xa0\xa0\xa0\xa0\xa0\xa0<fds-button\xa0visual="tertiary">Terti\xe6rknap</fds-button>\n'),u._UZ(57,"br"),u._uU(58,"\n\xa0\xa0\xa0\xa0\xa0\xa0<p>\n"),u._UZ(59,"br"),u._uU(60,'\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<a\xa0href="#">\xa0Et\xa0link\xa0til\xa0et\xa0sted\xa0i\xa0l\xf8sningen\xa0</a>\n'),u._UZ(61,"br"),u._uU(62,"\n\xa0\xa0\xa0\xa0\xa0\xa0</p>\n"),u._UZ(63,"br"),u._uU(64,"\n\xa0\xa0\xa0\xa0\xa0\xa0<p>\n"),u._UZ(65,"br"),u._uU(66,'\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<a\xa0href="https://designsystem.dk/">\n'),u._UZ(67,"br"),u._uU(68,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Et\xa0link\xa0til\xa0et\xa0sted\xa0uden\xa0for\xa0l\xf8sningen\n"),u._UZ(69,"br"),u._uU(70,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</a>\n"),u._UZ(71,"br"),u._uU(72,"\n\xa0\xa0\xa0\xa0\xa0\xa0</p>\n"),u._UZ(73,"br"),u._uU(74,"\n\xa0\xa0\xa0\xa0</fds-card-content>\n"),u._UZ(75,"br"),u._uU(76,"\n\xa0\xa0</fds-card>\n"),u._UZ(77,"br"),u.qZA()())},dependencies:[i.W,U.G,f,h,g.r]}),n})()}];let c=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=u.oAB({type:n}),n.\u0275inj=u.cJS({imports:[o.Bz.forChild(b),o.Bz]}),n})(),v=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=u.oAB({type:n}),n.\u0275inj=u.cJS({imports:[c,a.ez,p.$,s.qe,s.eH]}),n})()}}]);