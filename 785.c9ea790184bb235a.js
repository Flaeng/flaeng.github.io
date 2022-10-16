"use strict";(self.webpackChunkdemo_project=self.webpackChunkdemo_project||[]).push([[785],{5785:(h,g,e)=>{e.r(g),e.d(g,{LanguagePickerPageModule:()=>k,LanguagePickerRoutingModule:()=>s});var c=e(6895),t=e(9199),o=e(5464),i=e(3869),U=e(751),u=e(8256),l=e(7954),d=e(4772),m=e(1504),_=e(3657);const p=function(){return{nativeLanguageName:"Dansk",currentLanguageName:"Dansk",iso639dash1code:"da",isActive:!0,url:"?lang=da"}},Z=function(){return{nativeLanguageName:"English",currentLanguageName:"Engelsk",iso639dash1code:"en-gb",isActive:!1,url:"?lang=en-gb"}},f=function(){return{nativeLanguageName:"Deutsch",currentLanguageName:"Tysk",iso639dash1code:"de",isActive:!1,url:"?lang=de"}},b=function(){return{nativeLanguageName:"Polski",currentLanguageName:"Polsk",iso639dash1code:"pl",isActive:!1,url:"?lang=pl"}},L=function(A,n,a,r){return[A,n,a,r]},v=[{path:"",component:(()=>{class A extends U.y{}return A.\u0275fac=function(){let n;return function(r){return(n||(n=u.n5z(A)))(r||A)}}(),A.\u0275cmp=u.Xpm({type:A,selectors:[["app-language-picker-page"]],features:[u.qOj],decls:89,vars:11,consts:[["header","Sprogv\xe6lger","sub-header","Component","doc-url","https://designsystem.dk/komponenter/sprogvaegler/"],[3,"routerLink"],[3,"items","change"],["ng-non-bindable",""]],template:function(a,r){1&a&&(u.TgZ(0,"app-header",0),u._uU(1," Used within "),u.TgZ(2,"a",1),u._uU(3,"fds-footer"),u.qZA(),u._uU(4," like this: "),u.TgZ(5,"code"),u._uU(6," <fds-footer>"),u._UZ(7,"br"),u._uU(8," \xa0\xa0<fds-language-picker></fds-language-picker>"),u._UZ(9,"br"),u._uU(10," </fds-footer> "),u.qZA()(),u.TgZ(11,"app-demo-view")(12,"fds-footer")(13,"fds-language-picker",2),u.NdJ("change",function(P){return r.alert("You selected: "+P.selectedItem.nativeLanguageName)}),u.qZA()()(),u.TgZ(14,"code",3),u._uU(15,"\n<fds-footer>"),u._UZ(16,"br"),u._uU(17,"\n\xa0\xa0<fds-language-picker"),u._UZ(18,"br"),u._uU(19,'\n\xa0\xa0\xa0\xa0[items]="['),u._UZ(20,"br"),u._uU(21,"\n\xa0\xa0\xa0\xa0\xa0\xa0{\xa0"),u._UZ(22,"br"),u._uU(23,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0nativeLanguageName:\xa0'Dansk',"),u._UZ(24,"br"),u._uU(25,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0currentLanguageName:\xa0'Dansk',"),u._UZ(26,"br"),u._uU(27,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0iso639dash1code:\xa0'da',"),u._UZ(28,"br"),u._uU(29,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0isActive:\xa0true,"),u._UZ(30,"br"),u._uU(31,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0url:\xa0'?lang=da'"),u._UZ(32,"br"),u._uU(33,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0},"),u._UZ(34,"br"),u._uU(35,"\n\xa0\xa0\xa0\xa0\xa0\xa0{\xa0"),u._UZ(36,"br"),u._uU(37,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0nativeLanguageName:\xa0'English',"),u._UZ(38,"br"),u._uU(39,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0currentLanguageName:\xa0'Engelsk',"),u._UZ(40,"br"),u._uU(41,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0iso639dash1code:\xa0'en-gb',"),u._UZ(42,"br"),u._uU(43,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0isActive:\xa0false,"),u._UZ(44,"br"),u._uU(45,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0url:\xa0'?lang=en-gb'"),u._UZ(46,"br"),u._uU(47,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0},"),u._UZ(48,"br"),u._uU(49,"\n\xa0\xa0\xa0\xa0\xa0\xa0{\xa0"),u._UZ(50,"br"),u._uU(51,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0nativeLanguageName:\xa0'Deutsch',"),u._UZ(52,"br"),u._uU(53,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0currentLanguageName:\xa0'Tysk',"),u._UZ(54,"br"),u._uU(55,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0iso639dash1code:\xa0'de',"),u._UZ(56,"br"),u._uU(57,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0isActive:\xa0false,"),u._UZ(58,"br"),u._uU(59,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0url:\xa0'?lang=de'"),u._UZ(60,"br"),u._uU(61,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0},"),u._UZ(62,"br"),u._uU(63,"\n\xa0\xa0\xa0\xa0\xa0\xa0{\xa0"),u._UZ(64,"br"),u._uU(65,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0nativeLanguageName:\xa0'Polski',"),u._UZ(66,"br"),u._uU(67,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0currentLanguageName:\xa0'Polsk',"),u._UZ(68,"br"),u._uU(69,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0iso639dash1code:\xa0'pl',"),u._UZ(70,"br"),u._uU(71,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0isActive:\xa0false,"),u._UZ(72,"br"),u._uU(73,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0url:\xa0'?lang=pl'"),u._UZ(74,"br"),u._uU(75,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0}"),u._UZ(76,"br"),u._uU(77,'\n\xa0\xa0\xa0\xa0]"'),u._UZ(78,"br"),u._uU(79,'\n\xa0\xa0\xa0\xa0(change)="'),u._UZ(80,"br"),u._uU(81,"\n\xa0\xa0\xa0\xa0\xa0\xa0alert('You\xa0selected:\xa0'\xa0+\xa0$event.selectedItem.nativeLanguageName)"),u._UZ(82,"br"),u._uU(83,'\n\xa0\xa0\xa0\xa0"'),u._UZ(84,"br"),u._uU(85,"\n\xa0\xa0></fds-language-picker>"),u._UZ(86,"br"),u._uU(87,"\n</fds-footer>"),u._UZ(88,"br"),u.qZA()),2&a&&(u.xp6(2),u.Q6J("routerLink","/footers"),u.xp6(11),u.Q6J("items",u.l5B(6,L,u.DdM(2,p),u.DdM(3,Z),u.DdM(4,f),u.DdM(5,b))))},dependencies:[t.yS,l.W,d.G,m._,_.c],encapsulation:2}),A})()}];let s=(()=>{class A{}return A.\u0275fac=function(a){return new(a||A)},A.\u0275mod=u.oAB({type:A}),A.\u0275inj=u.cJS({imports:[t.Bz.forChild(v),t.Bz]}),A})(),k=(()=>{class A{}return A.\u0275fac=function(a){return new(a||A)},A.\u0275mod=u.oAB({type:A}),A.\u0275inj=u.cJS({imports:[s,c.ez,i.$,o._6,o.qe,o.Nx]}),A})()}}]);