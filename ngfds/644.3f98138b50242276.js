"use strict";(self.webpackChunkdemo_project=self.webpackChunkdemo_project||[]).push([[644],{2644:(M,a,A)=>{A.r(a),A.d(a,{StepIndicatorPageModule:()=>P,StepIndicatorRoutingModule:()=>Z});var s=A(6895),o=A(4736),c=A(51),p=A(3869),r=A(4455),m=A(751),t=A(8256),_=A(7954),U=A(7538),g=A(4772),T=A(9377),I=A(1968),b=A(9355);function q(e,u){if(1&e&&(t.TgZ(0,"a",19),t._uU(1),t.qZA()),2&e){const l=u.item,n=u.level,i=u.index;t.Q6J("routerLink",l.url),t.xp6(1),t.lnq(" ",n," - ",l.title," - ",i%2==1?"even":"odd"," ")}}function f(e,u){if(1&e&&(t.TgZ(0,"a",19),t._uU(1),t.qZA()),2&e){const l=u.item,n=u.level,i=u.index;t.Q6J("routerLink",l.url),t.xp6(1),t.lnq(" ",n," - ",l.title," - ",i%2==1?"even":"odd"," ")}}function v(e,u){if(1&e&&(t._uU(0),t.O4$(),t.TgZ(1,"svg",20),t._UZ(2,"use",21),t.qZA()),2&e){const l=u.current,n=u.max,i=t.oxw();t.hij(" ",i.Math.round(l/n*100),"% of the way there ")}}const h=function(){return{title:"Step 1",url:null,icon:null}},S=function(){return{title:"Step 2",url:null,icon:null}},w=function(){return{title:"Step 3",url:null,icon:null}},y=function(){return{title:"Step 4",url:null,icon:null}},x=function(){return{title:"Step 5",url:null,icon:null}},k=function(e,u,l,n,i){return[e,u,l,n,i]},C=[{path:"",component:(()=>{class e extends m.y{constructor(){super(...arguments),this.Math=Math,this.stepIndicatorItems=[new r.yY({title:"Step 1"}),new r.yY({title:"Step 2"}),new r.yY({title:"Step 3"}),new r.yY({title:"Step 4"}),new r.yY({title:"Step 5"})]}}return e.\u0275fac=function(){let u;return function(n){return(u||(u=t.n5z(e)))(n||e)}}(),e.\u0275cmp=t.Xpm({type:e,selectors:[["app-step-indicator-page"]],features:[t.qOj],decls:308,vars:22,consts:[["header","Trinindikator","sub-header","Component","doc-url","https://designsystem.dk/komponenter/trinindikatorer/"],[3,"items","selected-index","item-clicked"],["ng-non-bindable",""],["show-expand-view","allways",3,"items","selected-item","item-clicked"],[3,"items","selected-item","item-template","item-clicked"],["templateItem",""],["show-expand-view","allways",3,"items","selected-item","item-template","expand-template","item-clicked"],["expandTemplate",""],["id","documentation"],["header","StepIndicatorComponent","subheader","class","id","StepIndicatorComponent",1,"mb-5",2,"display","block"],[1,"mb-3"],[1,"table","mb-5","table--zebra","table--compact","table--responsive-scroll"],["fds-tooltip","Property name when referencing the component in TypeScript"],["fds-tooltip","Attribute to use on the component"],["fds-tooltip","Property type(s)"],["fds-tooltip","Default value of the property"],["scroll-to","#IStepIndicatorItem"],["header","IStepIndicatorItem","subheader","interface","id","IStepIndicatorItem",1,"mb-5",2,"display","block"],["header","StepIndicatorItem","subheader","class","id","StepIndicatorItem",1,"mb-5",2,"display","block"],[1,"p-1","fs-1",3,"routerLink"],["aria-hidden","true","focusable","false",1,"icon-svg"],[0,"xlink","href","#arrow-drop-down"]],template:function(l,n){if(1&l&&(t._UZ(0,"app-header",0),t.TgZ(1,"app-demo-view")(2,"fds-step-indicator",1),t.NdJ("item-clicked",function(d){return n.alert(d.selectedItem.title)}),t.qZA()(),t.TgZ(3,"code",2),t._uU(4,"\n<fds-step-indicator"),t._UZ(5,"br"),t._uU(6,'\n\xa0\xa0[items]="['),t._UZ(7,"br"),t._uU(8,"\n\xa0\xa0\xa0\xa0{\xa0\xa0title:\xa0'Step\xa01',\xa0url:\xa0null,\xa0icon:\xa0null\xa0\xa0},"),t._UZ(9,"br"),t._uU(10,"\n\xa0\xa0\xa0\xa0{\xa0\xa0title:\xa0'Step\xa02',\xa0url:\xa0null,\xa0icon:\xa0null\xa0\xa0},"),t._UZ(11,"br"),t._uU(12,"\n\xa0\xa0\xa0\xa0{\xa0\xa0title:\xa0'Step\xa03',\xa0url:\xa0null,\xa0icon:\xa0null\xa0\xa0},"),t._UZ(13,"br"),t._uU(14,"\n\xa0\xa0\xa0\xa0{\xa0\xa0title:\xa0'Step\xa04',\xa0url:\xa0null,\xa0icon:\xa0null\xa0\xa0},"),t._UZ(15,"br"),t._uU(16,"\n\xa0\xa0\xa0\xa0{\xa0\xa0title:\xa0'Step\xa05',\xa0url:\xa0null,\xa0icon:\xa0null\xa0\xa0}"),t._UZ(17,"br"),t._uU(18,'\n\xa0\xa0]"'),t._UZ(19,"br"),t._uU(20,'\n\xa0\xa0[selected-index]="2"'),t._UZ(21,"br"),t._uU(22,'\n\xa0\xa0(item-clicked)="alert($event.selectedItem.title)"'),t._UZ(23,"br"),t._uU(24,"\n></fds-step-indicator>"),t._UZ(25,"br"),t.qZA(),t.TgZ(26,"app-demo-view")(27,"fds-step-indicator",3),t.NdJ("item-clicked",function(d){return n.alert(d.selectedItem.title)}),t.qZA()(),t.TgZ(28,"code",2),t._uU(29,"\n<fds-step-indicator"),t._UZ(30,"br"),t._uU(31,'\n\xa0\xa0[items]="stepIndicatorItems"'),t._UZ(32,"br"),t._uU(33,'\n\xa0\xa0[selected-item]="stepIndicatorItems[1]"'),t._UZ(34,"br"),t._uU(35,'\n\xa0\xa0show-expand-view="allways"'),t._UZ(36,"br"),t._uU(37,'\n\xa0\xa0(item-clicked)="alert($event.selectedItem.title)"'),t._UZ(38,"br"),t._uU(39,"\n></fds-step-indicator>"),t._UZ(40,"br"),t.qZA(),t.TgZ(41,"app-demo-view")(42,"fds-step-indicator",4),t.NdJ("item-clicked",function(d){return n.alert(d.selectedItem.title)}),t.qZA(),t.YNc(43,q,2,4,"ng-template",null,5,t.W1O),t.qZA(),t.TgZ(45,"code",2),t._uU(46,"\n<fds-step-indicator"),t._UZ(47,"br"),t._uU(48,'\n\xa0\xa0[items]="stepIndicatorItems"'),t._UZ(49,"br"),t._uU(50,'\n\xa0\xa0[selected-item]="stepIndicatorItems[1]"'),t._UZ(51,"br"),t._uU(52,'\n\xa0\xa0[item-template]="templateItem"'),t._UZ(53,"br"),t._uU(54,'\n\xa0\xa0(item-clicked)="alert($event.selectedItem.title)"'),t._UZ(55,"br"),t._uU(56,"\n></fds-step-indicator>"),t._UZ(57,"br"),t._uU(58,"\n<ng-template"),t._UZ(59,"br"),t._uU(60,"\n\xa0\xa0#templateItem"),t._UZ(61,"br"),t._uU(62,'\n\xa0\xa0let-item="item"'),t._UZ(63,"br"),t._uU(64,'\n\xa0\xa0let-level="level"'),t._UZ(65,"br"),t._uU(66,'\n\xa0\xa0let-index="index"'),t._UZ(67,"br"),t._uU(68,"\n>"),t._UZ(69,"br"),t._uU(70,'\n\xa0\xa0<a\xa0[routerLink]="item.url"\xa0class="p-1\xa0fs-1">'),t._UZ(71,"br"),t._uU(72,'\n\xa0\xa0\xa0\xa0{\xa0{\xa0\xa0level\xa0\xa0}\xa0}\xa0-\xa0{\xa0{\xa0\xa0item.title\xa0\xa0}\xa0}\xa0-\xa0{\xa0{\xa0\xa0index\xa0%\xa02\xa0==\xa01\xa0?\xa0"even"\xa0:\xa0"odd"\xa0\xa0}\xa0}'),t._UZ(73,"br"),t._uU(74,"\n\xa0\xa0</a>"),t._UZ(75,"br"),t._uU(76,"\n</ng-template>"),t._UZ(77,"br"),t.qZA(),t.TgZ(78,"app-demo-view")(79,"fds-step-indicator",6),t.NdJ("item-clicked",function(d){return n.alert(d.selectedItem.title)}),t.qZA(),t.YNc(80,f,2,4,"ng-template",null,5,t.W1O),t.YNc(82,v,3,1,"ng-template",null,7,t.W1O),t.qZA(),t.TgZ(84,"code",2),t._uU(85,"\n<fds-step-indicator"),t._UZ(86,"br"),t._uU(87,'\n\xa0\xa0[items]="stepIndicatorItems"'),t._UZ(88,"br"),t._uU(89,'\n\xa0\xa0[selected-item]="stepIndicatorItems[1]"'),t._UZ(90,"br"),t._uU(91,'\n\xa0\xa0[item-template]="templateItem"'),t._UZ(92,"br"),t._uU(93,'\n\xa0\xa0[expand-template]="expandTemplate"'),t._UZ(94,"br"),t._uU(95,'\n\xa0\xa0show-expand-view="allways"'),t._UZ(96,"br"),t._uU(97,'\n\xa0\xa0(item-clicked)="alert($event.selectedItem.title)"'),t._UZ(98,"br"),t._uU(99,"\n></fds-step-indicator>"),t._UZ(100,"br"),t._uU(101,"\n<ng-template"),t._UZ(102,"br"),t._uU(103,"\n\xa0\xa0#templateItem"),t._UZ(104,"br"),t._uU(105,'\n\xa0\xa0let-item="item"'),t._UZ(106,"br"),t._uU(107,'\n\xa0\xa0let-level="level"'),t._UZ(108,"br"),t._uU(109,'\n\xa0\xa0let-index="index"'),t._UZ(110,"br"),t._uU(111,"\n>"),t._UZ(112,"br"),t._uU(113,'\n\xa0\xa0<a\xa0[routerLink]="item.url"\xa0class="p-1\xa0fs-1">'),t._UZ(114,"br"),t._uU(115,'\n\xa0\xa0\xa0\xa0{\xa0{\xa0\xa0level\xa0\xa0}\xa0}\xa0-\xa0{\xa0{\xa0\xa0item.title\xa0\xa0}\xa0}\xa0-\xa0{\xa0{\xa0\xa0index\xa0%\xa02\xa0==\xa01\xa0?\xa0"even"\xa0:\xa0"odd"\xa0\xa0}\xa0}'),t._UZ(116,"br"),t._uU(117,"\n\xa0\xa0</a>"),t._UZ(118,"br"),t._uU(119,"\n</ng-template>"),t._UZ(120,"br"),t._uU(121,'\n<ng-template\xa0#expandTemplate\xa0let-current="current"\xa0let-max="max">'),t._UZ(122,"br"),t._uU(123,"\n\xa0\xa0{\xa0{\xa0\xa0Math.round((current\xa0/\xa0max)\xa0*\xa0100)\xa0\xa0}\xa0}%\xa0of\xa0the\xa0way\xa0there"),t._UZ(124,"br"),t._uU(125,'\n\xa0\xa0<svg\xa0class="icon-svg"\xa0aria-hidden="true"\xa0focusable="false">'),t._UZ(126,"br"),t._uU(127,'\n\xa0\xa0\xa0\xa0<use\xa0xlink:href="#arrow-drop-down"></use>'),t._UZ(128,"br"),t._uU(129,"\n\xa0\xa0</svg>"),t._UZ(130,"br"),t._uU(131,"\n</ng-template>"),t._UZ(132,"br"),t.qZA(),t.TgZ(133,"app-doc-view"),t._UZ(134,"hr"),t.TgZ(135,"h2",8),t._uU(136,"Documentation"),t.qZA(),t.TgZ(137,"fds-card",9)(138,"fds-card-content")(139,"div",10)(140,"b"),t._uU(141,"Properties"),t.qZA()(),t.TgZ(142,"table",11)(143,"tr")(144,"th",12),t._uU(145,"Name"),t.qZA(),t.TgZ(146,"th",13),t._uU(147,"Attribute"),t.qZA(),t.TgZ(148,"th",14),t._uU(149,"Type"),t.qZA(),t.TgZ(150,"th",15),t._uU(151,"Default Value"),t.qZA()(),t.TgZ(152,"tr")(153,"td"),t._uU(154,"dropdownControl"),t.qZA(),t.TgZ(155,"td"),t._uU(156,"dropdownControl"),t.qZA(),t.TgZ(157,"td"),t._uU(158,"DKFDS.Dropdown | null"),t.qZA(),t.TgZ(159,"td"),t._uU(160,"null"),t.qZA()(),t.TgZ(161,"tr")(162,"td"),t._uU(163,"expandTemplate"),t.qZA(),t.TgZ(164,"td"),t._uU(165,"expand-template"),t.qZA(),t.TgZ(166,"td"),t._uU(167,"TemplateRef<unknown> | null"),t.qZA(),t.TgZ(168,"td"),t._uU(169,"null"),t.qZA()(),t.TgZ(170,"tr")(171,"td"),t._uU(172,"itemClicked"),t.qZA(),t.TgZ(173,"td"),t._uU(174,"item-clicked"),t.qZA(),t.TgZ(175,"td"),t._uU(176,"EventEmitter<ItemSelectedEvent<IStepIndicatorItem>>"),t.qZA(),t.TgZ(177,"td"),t._uU(178,"new\xa0EventEmitter()"),t.qZA()(),t.TgZ(179,"tr")(180,"td"),t._uU(181,"items"),t.qZA(),t.TgZ(182,"td"),t._uU(183,"items"),t.qZA(),t.TgZ(184,"td")(185,"a",16),t._uU(186,"IStepIndicatorItem[]"),t.qZA()(),t.TgZ(187,"td"),t._uU(188,"[]"),t.qZA()(),t.TgZ(189,"tr")(190,"td"),t._uU(191,"itemTemplate"),t.qZA(),t.TgZ(192,"td"),t._uU(193,"item-template"),t.qZA(),t.TgZ(194,"td"),t._uU(195,"TemplateRef<unknown> | null"),t.qZA(),t.TgZ(196,"td"),t._uU(197,"null"),t.qZA()(),t.TgZ(198,"tr")(199,"td"),t._uU(200,"selectedIndex"),t.qZA(),t.TgZ(201,"td"),t._uU(202,"selected-index"),t.qZA(),t.TgZ(203,"td"),t._uU(204,"number | null"),t.qZA(),t.TgZ(205,"td"),t._uU(206,"null"),t.qZA()(),t.TgZ(207,"tr")(208,"td"),t._uU(209,"selectedItem"),t.qZA(),t.TgZ(210,"td"),t._uU(211,"selectedItem"),t.qZA(),t.TgZ(212,"td")(213,"a",16),t._uU(214,"IStepIndicatorItem"),t.qZA(),t._uU(215," | null"),t.qZA(),t.TgZ(216,"td"),t._uU(217,"(calculated value)"),t.qZA()(),t.TgZ(218,"tr")(219,"td"),t._uU(220,"showExpandView"),t.qZA(),t.TgZ(221,"td"),t._uU(222,"show-expand-view"),t.qZA(),t.TgZ(223,"td"),t._uU(224,"'on-mobile' | 'allways' | 'never'"),t.qZA(),t.TgZ(225,"td"),t._uU(226,"'on-mobile'"),t.qZA()()()()(),t.TgZ(227,"fds-card",17)(228,"fds-card-content")(229,"div",10)(230,"b"),t._uU(231,"Properties"),t.qZA()(),t.TgZ(232,"table",11)(233,"tr")(234,"th",12),t._uU(235,"Name"),t.qZA(),t.TgZ(236,"th",13),t._uU(237,"Attribute"),t.qZA(),t.TgZ(238,"th",14),t._uU(239,"Type"),t.qZA(),t.TgZ(240,"th",15),t._uU(241,"Default Value"),t.qZA()(),t.TgZ(242,"tr")(243,"td"),t._uU(244,"icon"),t.qZA(),t.TgZ(245,"td"),t._uU(246,"icon"),t.qZA(),t.TgZ(247,"td"),t._uU(248,"string | null"),t.qZA(),t._UZ(249,"td"),t.qZA(),t.TgZ(250,"tr")(251,"td"),t._uU(252,"title"),t.qZA(),t.TgZ(253,"td"),t._uU(254,"title"),t.qZA(),t.TgZ(255,"td"),t._uU(256,"string"),t.qZA(),t._UZ(257,"td"),t.qZA(),t.TgZ(258,"tr")(259,"td"),t._uU(260,"url"),t.qZA(),t.TgZ(261,"td"),t._uU(262,"url"),t.qZA(),t.TgZ(263,"td"),t._uU(264,"string | null"),t.qZA(),t._UZ(265,"td"),t.qZA()()()(),t.TgZ(266,"fds-card",18)(267,"fds-card-content")(268,"div",10)(269,"b"),t._uU(270,"Properties"),t.qZA()(),t.TgZ(271,"table",11)(272,"tr")(273,"th",12),t._uU(274,"Name"),t.qZA(),t.TgZ(275,"th",13),t._uU(276,"Attribute"),t.qZA(),t.TgZ(277,"th",14),t._uU(278,"Type"),t.qZA(),t.TgZ(279,"th",15),t._uU(280,"Default Value"),t.qZA()(),t.TgZ(281,"tr")(282,"td"),t._uU(283,"icon"),t.qZA(),t.TgZ(284,"td"),t._uU(285,"icon"),t.qZA(),t.TgZ(286,"td"),t._uU(287,"string | null"),t.qZA(),t.TgZ(288,"td"),t._uU(289,"null"),t.qZA()(),t.TgZ(290,"tr")(291,"td"),t._uU(292,"title"),t.qZA(),t.TgZ(293,"td"),t._uU(294,"title"),t.qZA(),t.TgZ(295,"td"),t._uU(296,"string"),t.qZA(),t.TgZ(297,"td"),t._uU(298,"''"),t.qZA()(),t.TgZ(299,"tr")(300,"td"),t._uU(301,"url"),t.qZA(),t.TgZ(302,"td"),t._uU(303,"url"),t.qZA(),t.TgZ(304,"td"),t._uU(305,"string | null"),t.qZA(),t.TgZ(306,"td"),t._uU(307,"null"),t.qZA()()()()()()),2&l){const i=t.MAs(44),d=t.MAs(83);t.xp6(2),t.Q6J("items",t.qbA(16,k,t.DdM(11,h),t.DdM(12,S),t.DdM(13,w),t.DdM(14,y),t.DdM(15,x)))("selected-index",2),t.xp6(25),t.Q6J("items",n.stepIndicatorItems)("selected-item",n.stepIndicatorItems[1]),t.xp6(15),t.Q6J("items",n.stepIndicatorItems)("selected-item",n.stepIndicatorItems[1])("item-template",i),t.xp6(37),t.Q6J("items",n.stepIndicatorItems)("selected-item",n.stepIndicatorItems[1])("item-template",i)("expand-template",d)}},dependencies:[o.yS,_.W,U.Z,g.G,T.k,I.A,b.g]}),e})()}];let Z=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[o.Bz.forChild(C),o.Bz]}),e})(),P=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[Z,s.ez,p.$,c.JN,c.qe]}),e})()}}]);