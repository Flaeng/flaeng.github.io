"use strict";(self.webpackChunkdemo_project=self.webpackChunkdemo_project||[]).push([[346],{3346:(b,l,d)=>{d.r(l),d.d(l,{InputPageModule:()=>v,InputRoutingModule:()=>a});var g=d(6895),s=d(433),r=d(9199),A=d(165),m=d(5464),h=d(3869),n=d(8256),f=d(7954),Z=d(4772),_=d(1895);const U=[{path:"",component:(()=>{class u{constructor(){this.text1="",this.text2="",this.text3="",this.text4="",this.number1=null,this.number2=null,this.number3=null,this.number4=null}}return u.\u0275fac=function(i){return new(i||u)},u.\u0275cmp=n.Xpm({type:u,selectors:[["app-input-page"]],decls:121,vars:20,consts:[["header","Inputfelter","sub-header","Component","doc-url","https://designsystem.dk/komponenter/inputfelter/"],[3,"ngModel","ngModelChange"],[1,"mt-3"],["ng-non-bindable",""],[3,"ngModel","disabled","ngModelChange"],[3,"ngModel","readonly","ngModelChange"],["type","number","prefix","\u20ac",3,"ngModel","ngModelChange"],["type","number","suffix","kr",3,"ngModel","ngModelChange"],[3,"ngModel","maxlength","show-character-limit","ngModelChange"],["suffix",".000 kr",3,"ngModel","maxlength","show-character-limit","ngModelChange"],["placeholder","Enter text...",3,"ngModel","ngModelChange"],["value","xxs","size","width-xxs"],["value","width-xs","size","width-xs"],["value","width-s","size","width-s"],["value","width-m","size","width-m"],["value","width-l","size","width-l"],["value","width-xl","size","width-xl"],["value","1234","size","char-4"],["value","12345678","size","char-8"],["value","12345678901","size","char-11"],["value","123456789012345678901234567","size","char-27"]],template:function(i,e){1&i&&(n._UZ(0,"app-header",0),n.TgZ(1,"app-demo-view")(2,"fds-input",1),n.NdJ("ngModelChange",function(t){return e.text1=t}),n.qZA(),n.TgZ(3,"div",2),n._uU(4),n.qZA()(),n.TgZ(5,"code",3),n._uU(6,'\n<fds-input\xa0[(ngModel)]="text1"></fds-input>'),n._UZ(7,"br"),n._uU(8,'\n<div\xa0class="mt-3">'),n._UZ(9,"br"),n._uU(10,"\n\xa0\xa0{\xa0{\xa0\xa0text1\xa0\xa0}\xa0}"),n._UZ(11,"br"),n._uU(12,"\n</div>"),n._UZ(13,"br"),n.qZA(),n.TgZ(14,"app-demo-view")(15,"fds-input",4),n.NdJ("ngModelChange",function(t){return e.text1=t}),n.qZA()(),n.TgZ(16,"code",3),n._uU(17,'\n<fds-input\xa0[(ngModel)]="text1"\xa0[disabled]="true"></fds-input>'),n._UZ(18,"br"),n.qZA(),n.TgZ(19,"app-demo-view")(20,"fds-input",5),n.NdJ("ngModelChange",function(t){return e.text1=t}),n.qZA()(),n.TgZ(21,"code",3),n._uU(22,'\n<fds-input\xa0[(ngModel)]="text1"\xa0[readonly]="true"></fds-input>'),n._UZ(23,"br"),n.qZA(),n.TgZ(24,"app-demo-view")(25,"fds-input",6),n.NdJ("ngModelChange",function(t){return e.number1=t}),n.qZA(),n.TgZ(26,"div",2),n._uU(27),n.qZA()(),n.TgZ(28,"code",3),n._uU(29,'\n<fds-input\xa0[(ngModel)]="number1"\xa0type="number"\xa0prefix="\u20ac"></fds-input>'),n._UZ(30,"br"),n._uU(31,'\n<div\xa0class="mt-3">'),n._UZ(32,"br"),n._uU(33,"\n\xa0\xa0{\xa0{\xa0\xa0number1\xa0\xa0}\xa0}"),n._UZ(34,"br"),n._uU(35,"\n</div>"),n._UZ(36,"br"),n.qZA(),n.TgZ(37,"app-demo-view")(38,"fds-input",7),n.NdJ("ngModelChange",function(t){return e.number2=t}),n.qZA(),n.TgZ(39,"div",2),n._uU(40),n.qZA()(),n.TgZ(41,"code",3),n._uU(42,'\n<fds-input\xa0[(ngModel)]="number2"\xa0type="number"\xa0suffix="kr"></fds-input>'),n._UZ(43,"br"),n._uU(44,'\n<div\xa0class="mt-3">'),n._UZ(45,"br"),n._uU(46,"\n\xa0\xa0{\xa0{\xa0\xa0number2\xa0\xa0}\xa0}"),n._UZ(47,"br"),n._uU(48,"\n</div>"),n._UZ(49,"br"),n.qZA(),n.TgZ(50,"app-demo-view")(51,"fds-input",8),n.NdJ("ngModelChange",function(t){return e.text2=t}),n.qZA(),n.TgZ(52,"div",2),n._uU(53),n.qZA()(),n.TgZ(54,"code",3),n._uU(55,'\n<fds-input\xa0[(ngModel)]="text2"\xa0[maxlength]="25"\xa0[show-character-limit]="true"></fds-input>'),n._UZ(56,"br"),n._uU(57,'\n<div\xa0class="mt-3">'),n._UZ(58,"br"),n._uU(59,"\n\xa0\xa0{\xa0{\xa0\xa0text2\xa0\xa0}\xa0}"),n._UZ(60,"br"),n._uU(61,"\n</div>"),n._UZ(62,"br"),n.qZA(),n.TgZ(63,"app-demo-view")(64,"fds-input",9),n.NdJ("ngModelChange",function(t){return e.number3=t}),n.qZA(),n.TgZ(65,"div",2),n._uU(66),n.qZA()(),n.TgZ(67,"code",3),n._uU(68,'\n<fds-input\xa0[(ngModel)]="number3"\xa0suffix=".000\xa0kr"\xa0[maxlength]="4"\xa0[show-character-limit]="true"></fds-input>'),n._UZ(69,"br"),n._uU(70,'\n<div\xa0class="mt-3">'),n._UZ(71,"br"),n._uU(72,"\n\xa0\xa0{\xa0{\xa0\xa0number3\xa0\xa0}\xa0}"),n._UZ(73,"br"),n._uU(74,"\n</div>"),n._UZ(75,"br"),n.qZA(),n.TgZ(76,"app-demo-view")(77,"fds-input",10),n.NdJ("ngModelChange",function(t){return e.text3=t}),n.qZA(),n.TgZ(78,"div",2),n._uU(79),n.qZA()(),n.TgZ(80,"code",3),n._uU(81,'\n<fds-input\xa0[(ngModel)]="text3"\xa0placeholder="Enter\xa0text..."></fds-input>'),n._UZ(82,"br"),n._uU(83,'\n<div\xa0class="mt-3">'),n._UZ(84,"br"),n._uU(85,"\n\xa0\xa0{\xa0{\xa0\xa0text3\xa0\xa0}\xa0}"),n._UZ(86,"br"),n._uU(87,"\n</div>"),n._UZ(88,"br"),n.qZA(),n.TgZ(89,"app-demo-view"),n._UZ(90,"fds-input",11)(91,"fds-input",12)(92,"fds-input",13)(93,"fds-input",14)(94,"fds-input",15)(95,"fds-input",16)(96,"fds-input",17)(97,"fds-input",18)(98,"fds-input",19)(99,"fds-input",20),n.qZA(),n.TgZ(100,"code",3),n._uU(101,'\n<fds-input\xa0value="xxs"\xa0size="width-xxs"></fds-input>'),n._UZ(102,"br"),n._uU(103,'\n<fds-input\xa0value="width-xs"\xa0size="width-xs"></fds-input>'),n._UZ(104,"br"),n._uU(105,'\n<fds-input\xa0value="width-s"\xa0size="width-s"></fds-input>'),n._UZ(106,"br"),n._uU(107,'\n<fds-input\xa0value="width-m"\xa0size="width-m"></fds-input>'),n._UZ(108,"br"),n._uU(109,'\n<fds-input\xa0value="width-l"\xa0size="width-l"></fds-input>'),n._UZ(110,"br"),n._uU(111,'\n<fds-input\xa0value="width-xl"\xa0size="width-xl"></fds-input>'),n._UZ(112,"br"),n._uU(113,'\n<fds-input\xa0value="1234"\xa0size="char-4"></fds-input>'),n._UZ(114,"br"),n._uU(115,'\n<fds-input\xa0value="12345678"\xa0size="char-8"></fds-input>'),n._UZ(116,"br"),n._uU(117,'\n<fds-input\xa0value="12345678901"\xa0size="char-11"></fds-input>'),n._UZ(118,"br"),n._uU(119,'\n<fds-input\xa0value="123456789012345678901234567"\xa0size="char-27"></fds-input>'),n._UZ(120,"br"),n.qZA()),2&i&&(n.xp6(2),n.Q6J("ngModel",e.text1),n.xp6(2),n.hij(" ",e.text1," "),n.xp6(11),n.Q6J("ngModel",e.text1)("disabled",!0),n.xp6(5),n.Q6J("ngModel",e.text1)("readonly",!0),n.xp6(5),n.Q6J("ngModel",e.number1),n.xp6(2),n.hij(" ",e.number1," "),n.xp6(11),n.Q6J("ngModel",e.number2),n.xp6(2),n.hij(" ",e.number2," "),n.xp6(11),n.Q6J("ngModel",e.text2)("maxlength",25)("show-character-limit",!0),n.xp6(2),n.hij(" ",e.text2," "),n.xp6(11),n.Q6J("ngModel",e.number3)("maxlength",4)("show-character-limit",!0),n.xp6(2),n.hij(" ",e.number3," "),n.xp6(11),n.Q6J("ngModel",e.text3),n.xp6(2),n.hij(" ",e.text3," "))},dependencies:[s.JJ,s.nD,s.On,f.W,Z.G,_.a],encapsulation:2}),u})()}];let a=(()=>{class u{}return u.\u0275fac=function(i){return new(i||u)},u.\u0275mod=n.oAB({type:u}),u.\u0275inj=n.cJS({imports:[r.Bz.forChild(U),r.Bz]}),u})(),v=(()=>{class u{}return u.\u0275fac=function(i){return new(i||u)},u.\u0275mod=n.oAB({type:u}),u.\u0275inj=n.cJS({imports:[a,g.ez,s.u5,h.$,A.F,m.qe]}),u})()}}]);