"use strict";(self.webpackChunkdemo_project=self.webpackChunkdemo_project||[]).push([[242],{5242:(Z,l,n)=>{n.r(l),n.d(l,{CheckboxPageModule:()=>f,CheckboxRoutingModule:()=>d});var c=n(6895),a=n(433),r=n(9199),u=n(8256);let m=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[c.ez,a.u5]}),e})();var b=n(2201),h=n(3869),p=n(7954),g=n(4772),U=n(9863),_=n(7783);const v=[{path:"",component:(()=>{class e{constructor(){this.value1=!1,this.value2=!1,this.value3=!0,this.value4=!0,this.value5=!1,this.value6=!1}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-checkbox-page"]],decls:161,vars:9,consts:[["header","Checkbox / Tjekboks","sub-header","Component","doc-url","https://designsystem.dk/komponenter/tjekboks/"],[3,"ngModel","ngModelChange"],["ng-non-bindable",""],[3,"ngModel","disabled","ngModelChange"],["size","large",3,"ngModel","ngModelChange"],["size","large",3,"ngModel","disabled","ngModelChange"],["size","small",3,"ngModel","ngModelChange"],["size","small",3,"ngModel","disabled","ngModelChange"],["content","showContent1"],["name","showContent1"],["content","showContent2"],["name","showContent2"],["content","showContent3","size","small"],["name","showContent3","size","small"],["content","showContent4","size","small"],["name","showContent4","size","small"]],template:function(o,A){1&o&&(u._UZ(0,"app-header",0),u.TgZ(1,"app-demo-view")(2,"fds-checkbox",1),u.NdJ("ngModelChange",function(t){return A.value1=t}),u._uU(3," Check me "),u.qZA()(),u.TgZ(4,"code",2),u._uU(5,'\n<fds-checkbox\xa0[(ngModel)]="value1">\xa0Check\xa0me\xa0</fds-checkbox>'),u._UZ(6,"br"),u.qZA(),u.TgZ(7,"app-demo-view")(8,"fds-checkbox",3),u.NdJ("ngModelChange",function(t){return A.value2=t}),u._uU(9," Check me "),u.qZA()(),u.TgZ(10,"code",2),u._uU(11,'\n<fds-checkbox\xa0[(ngModel)]="value2"\xa0[disabled]="true">\xa0Check\xa0me\xa0</fds-checkbox>'),u._UZ(12,"br"),u.qZA(),u.TgZ(13,"app-demo-view")(14,"fds-checkbox",4),u.NdJ("ngModelChange",function(t){return A.value3=t}),u._uU(15," Check me "),u.qZA()(),u.TgZ(16,"code",2),u._uU(17,'\n<fds-checkbox\xa0[(ngModel)]="value3"\xa0size="large">\xa0Check\xa0me\xa0</fds-checkbox>'),u._UZ(18,"br"),u.qZA(),u.TgZ(19,"app-demo-view")(20,"fds-checkbox",5),u.NdJ("ngModelChange",function(t){return A.value4=t}),u._uU(21," Check me "),u.qZA()(),u.TgZ(22,"code",2),u._uU(23,'\n<fds-checkbox\xa0[(ngModel)]="value4"\xa0size="large"\xa0[disabled]="true">'),u._UZ(24,"br"),u._uU(25,"\n\xa0\xa0Check\xa0me"),u._UZ(26,"br"),u._uU(27,"\n</fds-checkbox>"),u._UZ(28,"br"),u.qZA(),u.TgZ(29,"app-demo-view")(30,"fds-checkbox",6),u.NdJ("ngModelChange",function(t){return A.value5=t}),u._uU(31," Check me "),u.qZA()(),u.TgZ(32,"code",2),u._uU(33,'\n<fds-checkbox\xa0[(ngModel)]="value5"\xa0size="small">\xa0Check\xa0me\xa0</fds-checkbox>'),u._UZ(34,"br"),u.qZA(),u.TgZ(35,"app-demo-view")(36,"fds-checkbox",7),u.NdJ("ngModelChange",function(t){return A.value6=t}),u._uU(37," Check me "),u.qZA()(),u.TgZ(38,"code",2),u._uU(39,'\n<fds-checkbox\xa0[(ngModel)]="value6"\xa0size="small"\xa0[disabled]="true">'),u._UZ(40,"br"),u._uU(41,"\n\xa0\xa0Check\xa0me"),u._UZ(42,"br"),u._uU(43,"\n</fds-checkbox>"),u._UZ(44,"br"),u.qZA(),u.TgZ(45,"app-demo-view")(46,"fds-checkbox",8),u._uU(47,"Show content 1"),u.qZA(),u.TgZ(48,"fds-checkbox-content",9)(49,"p"),u._uU(50," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum libero tortor, a porta ex accumsan a. Phasellus dapibus sollicitudin urna, vel elementum neque accumsan eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vitae odio efficitur, condimentum tellus a, sodales lorem. Aliquam aliquam vehicula arcu nec ornare. Nam tempus non enim vel sodales. Maecenas risus elit, convallis egestas justo sit amet, volutpat mollis nulla. Sed non eros vehicula, maximus lectus eu, mattis magna. "),u.qZA()(),u.TgZ(51,"fds-checkbox",10),u._uU(52,"Show content 2"),u.qZA(),u.TgZ(53,"fds-checkbox-content",11)(54,"p"),u._uU(55," Etiam finibus mi et risus tempor tincidunt. Donec pharetra semper dui in imperdiet. Vivamus pellentesque consectetur felis. Donec nibh lectus, finibus sit amet orci nec, aliquam posuere mauris. Proin quis imperdiet est, id convallis tellus. Donec tempus velit sed velit tempor, sed tempor velit dapibus. Suspendisse at orci eu libero lobortis ultricies et at urna. Sed dignissim nisl eget purus lacinia ultrices non vel libero. In felis est, posuere fermentum venenatis eu, eleifend at nibh. "),u.qZA()()(),u.TgZ(56,"code",2),u._uU(57,'\n<fds-checkbox\xa0content="showContent1">Show\xa0content\xa01</fds-checkbox>'),u._UZ(58,"br"),u._uU(59,'\n<fds-checkbox-content\xa0name="showContent1">'),u._UZ(60,"br"),u._uU(61,"\n\xa0\xa0<p>"),u._UZ(62,"br"),u._uU(63,"\n\xa0\xa0\xa0\xa0Lorem\xa0ipsum\xa0dolor\xa0sit\xa0amet,\xa0consectetur\xa0adipiscing\xa0elit.\xa0Etiam\xa0elementum"),u._UZ(64,"br"),u._uU(65,"\n\xa0\xa0\xa0\xa0libero\xa0tortor,\xa0a\xa0porta\xa0ex\xa0accumsan\xa0a.\xa0Phasellus\xa0dapibus\xa0sollicitudin\xa0urna,"),u._UZ(66,"br"),u._uU(67,"\n\xa0\xa0\xa0\xa0vel\xa0elementum\xa0neque\xa0accumsan\xa0eu.\xa0Class\xa0aptent\xa0taciti\xa0sociosqu\xa0ad\xa0litora"),u._UZ(68,"br"),u._uU(69,"\n\xa0\xa0\xa0\xa0torquent\xa0per\xa0conubia\xa0nostra,\xa0per\xa0inceptos\xa0himenaeos.\xa0Pellentesque\xa0vitae"),u._UZ(70,"br"),u._uU(71,"\n\xa0\xa0\xa0\xa0odio\xa0efficitur,\xa0condimentum\xa0tellus\xa0a,\xa0sodales\xa0lorem.\xa0Aliquam\xa0aliquam"),u._UZ(72,"br"),u._uU(73,"\n\xa0\xa0\xa0\xa0vehicula\xa0arcu\xa0nec\xa0ornare.\xa0Nam\xa0tempus\xa0non\xa0enim\xa0vel\xa0sodales.\xa0Maecenas\xa0risus"),u._UZ(74,"br"),u._uU(75,"\n\xa0\xa0\xa0\xa0elit,\xa0convallis\xa0egestas\xa0justo\xa0sit\xa0amet,\xa0volutpat\xa0mollis\xa0nulla.\xa0Sed\xa0non"),u._UZ(76,"br"),u._uU(77,"\n\xa0\xa0\xa0\xa0eros\xa0vehicula,\xa0maximus\xa0lectus\xa0eu,\xa0mattis\xa0magna."),u._UZ(78,"br"),u._uU(79,"\n\xa0\xa0</p>"),u._UZ(80,"br"),u._uU(81,"\n</fds-checkbox-content>"),u._UZ(82,"br"),u._uU(83,'\n<fds-checkbox\xa0content="showContent2">Show\xa0content\xa02</fds-checkbox>'),u._UZ(84,"br"),u._uU(85,'\n<fds-checkbox-content\xa0name="showContent2">'),u._UZ(86,"br"),u._uU(87,"\n\xa0\xa0<p>"),u._UZ(88,"br"),u._uU(89,"\n\xa0\xa0\xa0\xa0Etiam\xa0finibus\xa0mi\xa0et\xa0risus\xa0tempor\xa0tincidunt.\xa0Donec\xa0pharetra\xa0semper\xa0dui\xa0in"),u._UZ(90,"br"),u._uU(91,"\n\xa0\xa0\xa0\xa0imperdiet.\xa0Vivamus\xa0pellentesque\xa0consectetur\xa0felis.\xa0Donec\xa0nibh\xa0lectus,"),u._UZ(92,"br"),u._uU(93,"\n\xa0\xa0\xa0\xa0finibus\xa0sit\xa0amet\xa0orci\xa0nec,\xa0aliquam\xa0posuere\xa0mauris.\xa0Proin\xa0quis\xa0imperdiet"),u._UZ(94,"br"),u._uU(95,"\n\xa0\xa0\xa0\xa0est,\xa0id\xa0convallis\xa0tellus.\xa0Donec\xa0tempus\xa0velit\xa0sed\xa0velit\xa0tempor,\xa0sed\xa0tempor"),u._UZ(96,"br"),u._uU(97,"\n\xa0\xa0\xa0\xa0velit\xa0dapibus.\xa0Suspendisse\xa0at\xa0orci\xa0eu\xa0libero\xa0lobortis\xa0ultricies\xa0et\xa0at"),u._UZ(98,"br"),u._uU(99,"\n\xa0\xa0\xa0\xa0urna.\xa0Sed\xa0dignissim\xa0nisl\xa0eget\xa0purus\xa0lacinia\xa0ultrices\xa0non\xa0vel\xa0libero.\xa0In"),u._UZ(100,"br"),u._uU(101,"\n\xa0\xa0\xa0\xa0felis\xa0est,\xa0posuere\xa0fermentum\xa0venenatis\xa0eu,\xa0eleifend\xa0at\xa0nibh."),u._UZ(102,"br"),u._uU(103,"\n\xa0\xa0</p>"),u._UZ(104,"br"),u._uU(105,"\n</fds-checkbox-content>"),u._UZ(106,"br"),u.qZA(),u.TgZ(107,"app-demo-view")(108,"fds-checkbox",12),u._uU(109,"Show content"),u.qZA(),u.TgZ(110,"fds-checkbox-content",13)(111,"p"),u._uU(112," Quisque volutpat ut lorem quis vestibulum. Nunc sed pulvinar turpis, eu volutpat urna. Sed vehicula convallis est. Cras cursus justo ut lectus maximus, vitae auctor ante hendrerit. Sed ut sollicitudin lectus, eget ultrices nunc. Nulla dignissim nulla vel libero finibus tempus. Cras pretium metus ac diam vehicula, vel dictum ipsum venenatis. Ut id pellentesque urna. Phasellus dapibus mollis ipsum eget iaculis. "),u.qZA()(),u.TgZ(113,"fds-checkbox",14),u._uU(114,"Show content"),u.qZA(),u.TgZ(115,"fds-checkbox-content",15)(116,"p"),u._uU(117," Proin quam felis, mattis a sagittis eget, vestibulum at arcu. Aliquam erat volutpat. Integer efficitur hendrerit risus, nec facilisis nisi commodo eget. Donec feugiat magna a erat aliquam, a feugiat nunc congue. Nam quis risus eu libero volutpat placerat in sed turpis. Aenean lacinia ex ut orci vulputate, vestibulum interdum turpis lacinia. "),u.qZA()()(),u.TgZ(118,"code",2),u._uU(119,'\n<fds-checkbox\xa0content="showContent3"\xa0size="small">Show\xa0content</fds-checkbox>'),u._UZ(120,"br"),u._uU(121,'\n<fds-checkbox-content\xa0name="showContent3"\xa0size="small">'),u._UZ(122,"br"),u._uU(123,"\n\xa0\xa0<p>"),u._UZ(124,"br"),u._uU(125,"\n\xa0\xa0\xa0\xa0Quisque\xa0volutpat\xa0ut\xa0lorem\xa0quis\xa0vestibulum.\xa0Nunc\xa0sed\xa0pulvinar\xa0turpis,\xa0eu"),u._UZ(126,"br"),u._uU(127,"\n\xa0\xa0\xa0\xa0volutpat\xa0urna.\xa0Sed\xa0vehicula\xa0convallis\xa0est.\xa0Cras\xa0cursus\xa0justo\xa0ut\xa0lectus"),u._UZ(128,"br"),u._uU(129,"\n\xa0\xa0\xa0\xa0maximus,\xa0vitae\xa0auctor\xa0ante\xa0hendrerit.\xa0Sed\xa0ut\xa0sollicitudin\xa0lectus,\xa0eget"),u._UZ(130,"br"),u._uU(131,"\n\xa0\xa0\xa0\xa0ultrices\xa0nunc.\xa0Nulla\xa0dignissim\xa0nulla\xa0vel\xa0libero\xa0finibus\xa0tempus.\xa0Cras"),u._UZ(132,"br"),u._uU(133,"\n\xa0\xa0\xa0\xa0pretium\xa0metus\xa0ac\xa0diam\xa0vehicula,\xa0vel\xa0dictum\xa0ipsum\xa0venenatis.\xa0Ut\xa0id"),u._UZ(134,"br"),u._uU(135,"\n\xa0\xa0\xa0\xa0pellentesque\xa0urna.\xa0Phasellus\xa0dapibus\xa0mollis\xa0ipsum\xa0eget\xa0iaculis."),u._UZ(136,"br"),u._uU(137,"\n\xa0\xa0</p>"),u._UZ(138,"br"),u._uU(139,"\n</fds-checkbox-content>"),u._UZ(140,"br"),u._uU(141,'\n<fds-checkbox\xa0content="showContent4"\xa0size="small">Show\xa0content</fds-checkbox>'),u._UZ(142,"br"),u._uU(143,'\n<fds-checkbox-content\xa0name="showContent4"\xa0size="small">'),u._UZ(144,"br"),u._uU(145,"\n\xa0\xa0<p>"),u._UZ(146,"br"),u._uU(147,"\n\xa0\xa0\xa0\xa0Proin\xa0quam\xa0felis,\xa0mattis\xa0a\xa0sagittis\xa0eget,\xa0vestibulum\xa0at\xa0arcu.\xa0Aliquam\xa0erat"),u._UZ(148,"br"),u._uU(149,"\n\xa0\xa0\xa0\xa0volutpat.\xa0Integer\xa0efficitur\xa0hendrerit\xa0risus,\xa0nec\xa0facilisis\xa0nisi\xa0commodo"),u._UZ(150,"br"),u._uU(151,"\n\xa0\xa0\xa0\xa0eget.\xa0Donec\xa0feugiat\xa0magna\xa0a\xa0erat\xa0aliquam,\xa0a\xa0feugiat\xa0nunc\xa0congue.\xa0Nam\xa0quis"),u._UZ(152,"br"),u._uU(153,"\n\xa0\xa0\xa0\xa0risus\xa0eu\xa0libero\xa0volutpat\xa0placerat\xa0in\xa0sed\xa0turpis.\xa0Aenean\xa0lacinia\xa0ex\xa0ut\xa0orci"),u._UZ(154,"br"),u._uU(155,"\n\xa0\xa0\xa0\xa0vulputate,\xa0vestibulum\xa0interdum\xa0turpis\xa0lacinia."),u._UZ(156,"br"),u._uU(157,"\n\xa0\xa0</p>"),u._UZ(158,"br"),u._uU(159,"\n</fds-checkbox-content>"),u._UZ(160,"br"),u.qZA()),2&o&&(u.xp6(2),u.Q6J("ngModel",A.value1),u.xp6(6),u.Q6J("ngModel",A.value2)("disabled",!0),u.xp6(6),u.Q6J("ngModel",A.value3),u.xp6(6),u.Q6J("ngModel",A.value4)("disabled",!0),u.xp6(10),u.Q6J("ngModel",A.value5),u.xp6(6),u.Q6J("ngModel",A.value6)("disabled",!0))},dependencies:[a.JJ,a.On,p.W,g.G,U.b,_.Z]}),e})()}];let d=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[r.Bz.forChild(v),r.Bz]}),e})(),f=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[d,c.ez,a.u5,h.$,m,b.qe]}),e})()}}]);