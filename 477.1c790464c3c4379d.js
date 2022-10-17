"use strict";(self.webpackChunkdemo_project=self.webpackChunkdemo_project||[]).push([[477],{2477:(E,d,r)=>{r.r(d),r.d(d,{StructuredListPageModule:()=>T,StructuredListRoutingModule:()=>a});var o=r(6895),c=r(9199),A=r(3761),l=r(3869),m=r(751),t=r(8256),_=r(7954),p=r(4772);const U=["*"];let f=(()=>{class e{}return e.\u0275fac=function(u){return new(u||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["fds-structured-list"]],ngContentSelectors:U,decls:1,vars:0,template:function(u,s){1&u&&(t.F$t(),t.Hsn(0))},encapsulation:2}),e})();var g=r(3082);const Z=["template"];function b(e,n){if(1&e){const u=t.EpF();t.TgZ(0,"div",6)(1,"a",7),t.NdJ("click",function(i){t.CHM(u);const y=t.oxw(3);return t.KtG(y.editClicked(i))}),t._uU(2," Redig\xe9r "),t.TgZ(3,"span",8),t._uU(4),t.qZA()()()}if(2&e){const u=t.oxw(3);t.xp6(4),t.hij(" ",u.header," ")}}function h(e,n){if(1&e&&(t.ynx(0),t.TgZ(1,"div",4),t._uU(2),t.qZA(),t.TgZ(3,"div"),t._uU(4),t.qZA(),t.YNc(5,b,5,1,"div",5),t.BQk()),2&e){const u=t.oxw(2);t.xp6(2),t.hij(" ",u.header," "),t.xp6(1),t.Gre("col-12 col-md-",u.canEdit?"6":"8",""),t.xp6(1),t.hij(" ",u.content," "),t.xp6(1),t.Q6J("ngIf",u.canEdit)}}function v(e,n){if(1&e&&(t.TgZ(0,"div",2),t.YNc(1,h,6,6,"ng-container",3),t.qZA()),2&e){const u=t.oxw(),s=t.MAs(3);t.xp6(1),t.Q6J("ngIf",u.header||u.content)("ngIfElse",s)}}function S(e,n){1&e&&t.Hsn(0)}const C=["*"];let L=(()=>{class e{constructor(u){this.viewContainerRef=u,this.header=null,this.content=null,this.canEdit=!1,this.edit=new t.vpe}ngOnInit(){this.viewContainerRef.createEmbeddedView(this.template)}editClicked(u){g.o.preventDefaultAndEmit(u,this.edit)}}return e.\u0275fac=function(u){return new(u||e)(t.Y36(t.s_b))},e.\u0275cmp=t.Xpm({type:e,selectors:[["fds-structured-list-item"]],viewQuery:function(u,s){if(1&u&&t.Gf(Z,7),2&u){let i;t.iGM(i=t.CRH())&&(s.template=i.first)}},inputs:{header:"header",content:"content",canEdit:"canEdit"},outputs:{edit:"edit"},ngContentSelectors:C,decls:4,vars:0,consts:[["template",""],["noContentOrHeader",""],[1,"row","row-bordered","no-gutters"],[4,"ngIf","ngIfElse"],[1,"col-12","col-md-4","weight-semibold"],["class","col-12 col-md-2 align-text-md-right",4,"ngIf"],[1,"col-12","col-md-2","align-text-md-right"],["href","#",3,"click"],[1,"sr-only"]],template:function(u,s){1&u&&(t.F$t(),t.YNc(0,v,2,2,"ng-template",null,0,t.W1O),t.YNc(2,S,1,0,"ng-template",null,1,t.W1O))},dependencies:[o.O5],encapsulation:2}),e})();const x=[{path:"",component:(()=>{class e extends m.y{}return e.\u0275fac=function(){let n;return function(s){return(n||(n=t.n5z(e)))(s||e)}}(),e.\u0275cmp=t.Xpm({type:e,selectors:[["app-structured-list-page"]],features:[t.qOj],decls:99,vars:2,consts:[["header","Structured List","sub-header","Component","doc-url","https://designsystem.dk/komponenter/strukturerede-lister/"],["header","Navn","content","Kirsten M\xf8nster Jensen"],["header","Sagsnummer","content","123.456"],["header","Dato","content","04/05/2011"],["header","Beskrivelse","content","Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],["ng-non-bindable",""],["header","Navn","content","Kirsten M\xf8nster Jensen",3,"canEdit","edit"],["header","Beskrivelse","content","Lorem ipsum dolor sit amet, consectetur adipiscing elit, \n        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",3,"canEdit","edit"]],template:function(u,s){1&u&&(t._UZ(0,"app-header",0),t.TgZ(1,"app-demo-view")(2,"fds-structured-list"),t._UZ(3,"fds-structured-list-item",1)(4,"fds-structured-list-item",2)(5,"fds-structured-list-item",3)(6,"fds-structured-list-item",4),t.qZA()(),t.TgZ(7,"code",5),t._uU(8,"\n<fds-structured-list>"),t._UZ(9,"br"),t._uU(10,"\n\xa0\xa0<fds-structured-list-item"),t._UZ(11,"br"),t._uU(12,'\n\xa0\xa0\xa0\xa0header="Navn"'),t._UZ(13,"br"),t._uU(14,'\n\xa0\xa0\xa0\xa0content="Kirsten\xa0M\xf8nster\xa0Jensen"'),t._UZ(15,"br"),t._uU(16,"\n\xa0\xa0></fds-structured-list-item>"),t._UZ(17,"br"),t._uU(18,"\n\xa0\xa0<fds-structured-list-item"),t._UZ(19,"br"),t._uU(20,'\n\xa0\xa0\xa0\xa0header="Sagsnummer"'),t._UZ(21,"br"),t._uU(22,'\n\xa0\xa0\xa0\xa0content="123.456"'),t._UZ(23,"br"),t._uU(24,"\n\xa0\xa0></fds-structured-list-item>"),t._UZ(25,"br"),t._uU(26,"\n\xa0\xa0<fds-structured-list-item"),t._UZ(27,"br"),t._uU(28,'\n\xa0\xa0\xa0\xa0header="Dato"'),t._UZ(29,"br"),t._uU(30,'\n\xa0\xa0\xa0\xa0content="04/05/2011"'),t._UZ(31,"br"),t._uU(32,"\n\xa0\xa0></fds-structured-list-item>"),t._UZ(33,"br"),t._uU(34,"\n\xa0\xa0<fds-structured-list-item"),t._UZ(35,"br"),t._uU(36,'\n\xa0\xa0\xa0\xa0header="Beskrivelse"'),t._UZ(37,"br"),t._uU(38,'\n\xa0\xa0\xa0\xa0content="Lorem\xa0ipsum\xa0dolor\xa0sit\xa0amet,\xa0consectetur\xa0adipiscing\xa0elit,\xa0'),t._UZ(39,"br"),t._uU(40,'\n\xa0\xa0\xa0\xa0\xa0\xa0sed\xa0do\xa0eiusmod\xa0tempor\xa0incididunt\xa0ut\xa0labore\xa0et\xa0dolore\xa0magna\xa0aliqua."'),t._UZ(41,"br"),t._uU(42,"\n\xa0\xa0></fds-structured-list-item>"),t._UZ(43,"br"),t._uU(44,"\n</fds-structured-list>"),t._UZ(45,"br"),t.qZA(),t.TgZ(46,"app-demo-view")(47,"fds-structured-list")(48,"fds-structured-list-item",6),t.NdJ("edit",function(){return s.alert("You clicked edit on Navn")}),t.qZA(),t._UZ(49,"fds-structured-list-item",2)(50,"fds-structured-list-item",3),t.TgZ(51,"fds-structured-list-item",7),t.NdJ("edit",function(){return s.alert("You clicked edit on Beskrivelse")}),t.qZA()()(),t.TgZ(52,"code",5),t._uU(53,"\n<fds-structured-list>"),t._UZ(54,"br"),t._uU(55,"\n\xa0\xa0<fds-structured-list-item"),t._UZ(56,"br"),t._uU(57,'\n\xa0\xa0\xa0\xa0header="Navn"'),t._UZ(58,"br"),t._uU(59,'\n\xa0\xa0\xa0\xa0content="Kirsten\xa0M\xf8nster\xa0Jensen"'),t._UZ(60,"br"),t._uU(61,'\n\xa0\xa0\xa0\xa0[canEdit]="true"'),t._UZ(62,"br"),t._uU(63,"\n\xa0\xa0\xa0\xa0(edit)=\"alert('You\xa0clicked\xa0edit\xa0on\xa0Navn')\""),t._UZ(64,"br"),t._uU(65,"\n\xa0\xa0></fds-structured-list-item>"),t._UZ(66,"br"),t._uU(67,"\n\xa0\xa0<fds-structured-list-item"),t._UZ(68,"br"),t._uU(69,'\n\xa0\xa0\xa0\xa0header="Sagsnummer"'),t._UZ(70,"br"),t._uU(71,'\n\xa0\xa0\xa0\xa0content="123.456"'),t._UZ(72,"br"),t._uU(73,"\n\xa0\xa0></fds-structured-list-item>"),t._UZ(74,"br"),t._uU(75,"\n\xa0\xa0<fds-structured-list-item"),t._UZ(76,"br"),t._uU(77,'\n\xa0\xa0\xa0\xa0header="Dato"'),t._UZ(78,"br"),t._uU(79,'\n\xa0\xa0\xa0\xa0content="04/05/2011"'),t._UZ(80,"br"),t._uU(81,"\n\xa0\xa0></fds-structured-list-item>"),t._UZ(82,"br"),t._uU(83,"\n\xa0\xa0<fds-structured-list-item"),t._UZ(84,"br"),t._uU(85,'\n\xa0\xa0\xa0\xa0header="Beskrivelse"'),t._UZ(86,"br"),t._uU(87,'\n\xa0\xa0\xa0\xa0content="Lorem\xa0ipsum\xa0dolor\xa0sit\xa0amet,\xa0consectetur\xa0adipiscing\xa0elit,\xa0'),t._UZ(88,"br"),t._uU(89,'\n\xa0\xa0\xa0\xa0\xa0\xa0sed\xa0do\xa0eiusmod\xa0tempor\xa0incididunt\xa0ut\xa0labore\xa0et\xa0dolore\xa0magna\xa0aliqua."'),t._UZ(90,"br"),t._uU(91,'\n\xa0\xa0\xa0\xa0[canEdit]="true"'),t._UZ(92,"br"),t._uU(93,"\n\xa0\xa0\xa0\xa0(edit)=\"alert('You\xa0clicked\xa0edit\xa0on\xa0Beskrivelse')\""),t._UZ(94,"br"),t._uU(95,"\n\xa0\xa0></fds-structured-list-item>"),t._UZ(96,"br"),t._uU(97,"\n</fds-structured-list>"),t._UZ(98,"br"),t.qZA()),2&u&&(t.xp6(48),t.Q6J("canEdit",!0),t.xp6(3),t.Q6J("canEdit",!0))},dependencies:[_.W,p.G,f,L],encapsulation:2}),e})()}];let a=(()=>{class e{}return e.\u0275fac=function(u){return new(u||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[c.Bz.forChild(x),c.Bz]}),e})(),T=(()=>{class e{}return e.\u0275fac=function(u){return new(u||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a,o.ez,l.$,A.aw,A.qe]}),e})()}}]);