"use strict";(self.webpackChunkdemo_project=self.webpackChunkdemo_project||[]).push([[778],{5778:(D,o,u)=>{u.r(o),u.d(o,{SideNavigationPageModule:()=>M,SideNavigationRoutingModule:()=>g});var Z=u(6895),a=u(4736),r=u(51),c=u(3869),i=u(5030),U=u(751),t=u(8256),m=u(7954),v=u(7538),_=u(4772),p=u(4089),T=u(1968),q=u(9355);function f(e,n){if(1&e&&(t.TgZ(0,"a",17),t._uU(1),t.qZA()),2&e){const l=n.item,A=n.level,d=n.index;t.Q6J("routerLink",l.url),t.xp6(1),t.lnq(" ",A," - ",l.title," - ",d%2==1?"even":"odd"," ")}}const h=function(){return{url:"#",title:"Page 1",subtitle:null,isActive:!1,children:null}},b=function(){return{url:"#",title:"Page 2",subtitle:null,isActive:!1,children:null}},P=function(){return{url:"#",title:"Page 3",subtitle:null,isActive:!0,children:null}},y=function(){return{url:"#",title:"Page 4",subtitle:null,isActive:!1,children:null}},s=function(e,n,l,A){return[e,n,l,A]},N=function(){return{url:"#",title:"Page 1",subtitle:"Welcome",isActive:!1,children:null}},S=function(){return{url:"#",title:"Page 2",subtitle:"To",isActive:!0,children:null}},I=function(){return{url:"#",title:"Page 3",subtitle:"Design",isActive:!1,children:null}},w=function(){return{url:"#",title:"Page 4",subtitle:"System",isActive:!1,children:null}},C=[{path:"",component:(()=>{class e extends U.y{constructor(){super(...arguments),this.page1children=[new i.y4({url:"#",title:"Page 1.0"}),new i.y4({url:"#",title:"Page 1.1"}),new i.y4({url:"#",title:"Page 1.2"}),new i.y4({url:"#",title:"Page 1.3"})],this.page4children=[new i.y4({url:"#",title:"Page 4.0"}),new i.y4({url:"#",title:"Page 4.1"}),new i.y4({url:"#",title:"Page 4.2",isActive:!0}),new i.y4({url:"#",title:"Page 4.3"})],this.sideNavigationItems=[new i.y4({url:"#",title:"Page 1",children:this.page1children}),new i.y4({url:"#",title:"Page 2"}),new i.y4({url:"#",title:"Page 3"}),new i.y4({url:"#",title:"Page 4",children:this.page4children,isActive:!0}),new i.y4({url:"#",title:"Page 5"}),new i.y4({url:"#",title:"Page 6"}),new i.y4({url:"#",title:"Page 7"})]}}return e.\u0275fac=function(){let n;return function(A){return(n||(n=t.n5z(e)))(A||e)}}(),e.\u0275cmp=t.Xpm({type:e,selectors:[["app-side-navigation-page"]],features:[t.qOj],decls:234,vars:23,consts:[["header","Sidenavigation","sub-header","Component","doc-url","https://designsystem.dk/komponenter/sidenav/"],[3,"items"],["ng-non-bindable",""],[3,"items","item-template"],["templateItem",""],["id","documentation"],["header","SideNavigationComponent","subheader","class","id","SideNavigationComponent",1,"mb-5",2,"display","block"],[1,"mb-3"],[1,"table","mb-5","table--zebra","table--compact","table--responsive-scroll"],["fds-tooltip","Property name when referencing the component in TypeScript"],["fds-tooltip","Attribute to use on the component"],["fds-tooltip","Property type(s)"],["fds-tooltip","Default value of the property"],["scroll-to","#ISideNavigationItem"],["header","ISideNavigationItem","subheader","interface","id","ISideNavigationItem",1,"mb-5",2,"display","block"],["header","SideNavigationItem","subheader","class","id","SideNavigationItem",1,"mb-5",2,"display","block"],["scroll-to","#SideNavigationItem"],[1,"p-1","fs-1",3,"routerLink"]],template:function(l,A){if(1&l&&(t._UZ(0,"app-header",0),t.TgZ(1,"app-demo-view"),t._UZ(2,"fds-side-navigation",1),t.qZA(),t.TgZ(3,"code",2),t._uU(4,'\n<fds-side-navigation\xa0[items]="['),t._UZ(5,"br"),t._uU(6,"\n\xa0\xa0{\xa0\xa0url:\xa0'#',\xa0title:\xa0'Page\xa01',\xa0subtitle:\xa0null,\xa0isActive:\xa0false,\xa0children:\xa0null\xa0\xa0},"),t._UZ(7,"br"),t._uU(8,"\n\xa0\xa0{\xa0\xa0url:\xa0'#',\xa0title:\xa0'Page\xa02',\xa0subtitle:\xa0null,\xa0isActive:\xa0false,\xa0children:\xa0null\xa0\xa0},"),t._UZ(9,"br"),t._uU(10,"\n\xa0\xa0{\xa0\xa0url:\xa0'#',\xa0title:\xa0'Page\xa03',\xa0subtitle:\xa0null,\xa0isActive:\xa0true,\xa0children:\xa0null\xa0\xa0},"),t._UZ(11,"br"),t._uU(12,"\n\xa0\xa0{\xa0\xa0url:\xa0'#',\xa0title:\xa0'Page\xa04',\xa0subtitle:\xa0null,\xa0isActive:\xa0false,\xa0children:\xa0null\xa0\xa0},"),t._UZ(13,"br"),t._uU(14,'\n]"></fds-side-navigation>'),t._UZ(15,"br"),t.qZA(),t.TgZ(16,"app-demo-view"),t._UZ(17,"fds-side-navigation",1),t.qZA(),t.TgZ(18,"code",2),t._uU(19,'\n<fds-side-navigation\xa0[items]="['),t._UZ(20,"br"),t._uU(21,"\n\xa0\xa0{\xa0\xa0url:\xa0'#',\xa0title:\xa0'Page\xa01',\xa0subtitle:\xa0'Welcome',\xa0isActive:\xa0false,\xa0children:\xa0null\xa0\xa0},"),t._UZ(22,"br"),t._uU(23,"\n\xa0\xa0{\xa0\xa0url:\xa0'#',\xa0title:\xa0'Page\xa02',\xa0subtitle:\xa0'To',\xa0isActive:\xa0true,\xa0children:\xa0null\xa0\xa0},"),t._UZ(24,"br"),t._uU(25,"\n\xa0\xa0{\xa0\xa0url:\xa0'#',\xa0title:\xa0'Page\xa03',\xa0subtitle:\xa0'Design',\xa0isActive:\xa0false,\xa0children:\xa0null\xa0\xa0},"),t._UZ(26,"br"),t._uU(27,"\n\xa0\xa0{\xa0\xa0url:\xa0'#',\xa0title:\xa0'Page\xa04',\xa0subtitle:\xa0'System',\xa0isActive:\xa0false,\xa0children:\xa0null\xa0\xa0},"),t._UZ(28,"br"),t._uU(29,'\n]"></fds-side-navigation>'),t._UZ(30,"br"),t.qZA(),t.TgZ(31,"app-demo-view"),t._UZ(32,"fds-side-navigation",1),t.qZA(),t.TgZ(33,"code",2),t._uU(34,'\n<fds-side-navigation\xa0[items]="sideNavigationItems"></fds-side-navigation>'),t._UZ(35,"br"),t.qZA(),t.TgZ(36,"app-demo-view"),t._UZ(37,"fds-side-navigation",3),t.YNc(38,f,2,4,"ng-template",null,4,t.W1O),t.qZA(),t.TgZ(40,"code",2),t._uU(41,"\n<fds-side-navigation"),t._UZ(42,"br"),t._uU(43,'\n\xa0\xa0[items]="sideNavigationItems"'),t._UZ(44,"br"),t._uU(45,'\n\xa0\xa0[item-template]="templateItem"'),t._UZ(46,"br"),t._uU(47,"\n></fds-side-navigation>"),t._UZ(48,"br"),t._uU(49,'\n<ng-template\xa0#templateItem\xa0let-item="item"\xa0let-level="level"\xa0let-index="index">'),t._UZ(50,"br"),t._uU(51,'\n\xa0\xa0<a\xa0[routerLink]="item.url"\xa0class="p-1\xa0fs-1">'),t._UZ(52,"br"),t._uU(53,"\n\xa0\xa0\xa0\xa0{\xa0{\xa0\xa0level\xa0\xa0}\xa0}\xa0-\xa0{\xa0{\xa0\xa0item.title\xa0\xa0}\xa0}\xa0-\xa0{\xa0{\xa0\xa0index\xa0%\xa02\xa0==\xa01\xa0?\xa0'even'\xa0:\xa0'odd'\xa0\xa0}\xa0}"),t._UZ(54,"br"),t._uU(55,"\n\xa0\xa0</a>"),t._UZ(56,"br"),t._uU(57,"\n</ng-template>"),t._UZ(58,"br"),t.qZA(),t.TgZ(59,"app-doc-view"),t._UZ(60,"hr"),t.TgZ(61,"h2",5),t._uU(62,"Documentation"),t.qZA(),t.TgZ(63,"fds-card",6)(64,"fds-card-content")(65,"div",7)(66,"b"),t._uU(67,"Properties"),t.qZA()(),t.TgZ(68,"table",8)(69,"tr")(70,"th",9),t._uU(71,"Name"),t.qZA(),t.TgZ(72,"th",10),t._uU(73,"Attribute"),t.qZA(),t.TgZ(74,"th",11),t._uU(75,"Type"),t.qZA(),t.TgZ(76,"th",12),t._uU(77,"Default Value"),t.qZA()(),t.TgZ(78,"tr")(79,"td"),t._uU(80,"alwaysShowChildren"),t.qZA(),t.TgZ(81,"td"),t._uU(82,"always-show-children"),t.qZA(),t.TgZ(83,"td"),t._uU(84,"boolean"),t.qZA(),t.TgZ(85,"td"),t._uU(86,"false"),t.qZA()(),t.TgZ(87,"tr")(88,"td"),t._uU(89,"itemClicked"),t.qZA(),t.TgZ(90,"td"),t._uU(91,"item-clicked"),t.qZA(),t.TgZ(92,"td"),t._uU(93,"EventEmitter<ItemSelectedEvent<ISideNavigationItem>>"),t.qZA(),t.TgZ(94,"td"),t._uU(95,"new\xa0EventEmitter()"),t.qZA()(),t.TgZ(96,"tr")(97,"td"),t._uU(98,"items"),t.qZA(),t.TgZ(99,"td"),t._uU(100,"items"),t.qZA(),t.TgZ(101,"td")(102,"a",13),t._uU(103,"ISideNavigationItem[]"),t.qZA()(),t.TgZ(104,"td"),t._uU(105,"[]"),t.qZA()(),t.TgZ(106,"tr")(107,"td"),t._uU(108,"itemTemplate"),t.qZA(),t.TgZ(109,"td"),t._uU(110,"item-template"),t.qZA(),t.TgZ(111,"td"),t._uU(112,"TemplateRef<unknown> | null"),t.qZA(),t.TgZ(113,"td"),t._uU(114,"null"),t.qZA()()()()(),t.TgZ(115,"fds-card",14)(116,"fds-card-content")(117,"div",7)(118,"b"),t._uU(119,"Properties"),t.qZA()(),t.TgZ(120,"table",8)(121,"tr")(122,"th",9),t._uU(123,"Name"),t.qZA(),t.TgZ(124,"th",10),t._uU(125,"Attribute"),t.qZA(),t.TgZ(126,"th",11),t._uU(127,"Type"),t.qZA(),t.TgZ(128,"th",12),t._uU(129,"Default Value"),t.qZA()(),t.TgZ(130,"tr")(131,"td"),t._uU(132,"children"),t.qZA(),t.TgZ(133,"td"),t._uU(134,"children"),t.qZA(),t.TgZ(135,"td")(136,"a",13),t._uU(137,"ISideNavigationItem[]"),t.qZA(),t._uU(138," | null"),t.qZA(),t._UZ(139,"td"),t.qZA(),t.TgZ(140,"tr")(141,"td"),t._uU(142,"isActive"),t.qZA(),t.TgZ(143,"td"),t._uU(144,"isActive"),t.qZA(),t.TgZ(145,"td"),t._uU(146,"boolean"),t.qZA(),t._UZ(147,"td"),t.qZA(),t.TgZ(148,"tr")(149,"td"),t._uU(150,"subtitle"),t.qZA(),t.TgZ(151,"td"),t._uU(152,"subtitle"),t.qZA(),t.TgZ(153,"td"),t._uU(154,"string | null"),t.qZA(),t._UZ(155,"td"),t.qZA(),t.TgZ(156,"tr")(157,"td"),t._uU(158,"title"),t.qZA(),t.TgZ(159,"td"),t._uU(160,"title"),t.qZA(),t.TgZ(161,"td"),t._uU(162,"string"),t.qZA(),t._UZ(163,"td"),t.qZA(),t.TgZ(164,"tr")(165,"td"),t._uU(166,"url"),t.qZA(),t.TgZ(167,"td"),t._uU(168,"url"),t.qZA(),t.TgZ(169,"td"),t._uU(170,"string"),t.qZA(),t._UZ(171,"td"),t.qZA()()()(),t.TgZ(172,"fds-card",15)(173,"fds-card-content")(174,"div",7)(175,"b"),t._uU(176,"Properties"),t.qZA()(),t.TgZ(177,"table",8)(178,"tr")(179,"th",9),t._uU(180,"Name"),t.qZA(),t.TgZ(181,"th",10),t._uU(182,"Attribute"),t.qZA(),t.TgZ(183,"th",11),t._uU(184,"Type"),t.qZA(),t.TgZ(185,"th",12),t._uU(186,"Default Value"),t.qZA()(),t.TgZ(187,"tr")(188,"td"),t._uU(189,"children"),t.qZA(),t.TgZ(190,"td"),t._uU(191,"children"),t.qZA(),t.TgZ(192,"td")(193,"a",16),t._uU(194,"SideNavigationItem[]"),t.qZA(),t._uU(195," | null"),t.qZA(),t.TgZ(196,"td"),t._uU(197,"null"),t.qZA()(),t.TgZ(198,"tr")(199,"td"),t._uU(200,"isActive"),t.qZA(),t.TgZ(201,"td"),t._uU(202,"isActive"),t.qZA(),t.TgZ(203,"td"),t._uU(204,"boolean"),t.qZA(),t.TgZ(205,"td"),t._uU(206,"false"),t.qZA()(),t.TgZ(207,"tr")(208,"td"),t._uU(209,"subtitle"),t.qZA(),t.TgZ(210,"td"),t._uU(211,"subtitle"),t.qZA(),t.TgZ(212,"td"),t._uU(213,"string | null"),t.qZA(),t.TgZ(214,"td"),t._uU(215,"null"),t.qZA()(),t.TgZ(216,"tr")(217,"td"),t._uU(218,"title"),t.qZA(),t.TgZ(219,"td"),t._uU(220,"title"),t.qZA(),t.TgZ(221,"td"),t._uU(222,"string"),t.qZA(),t.TgZ(223,"td"),t._uU(224,"''"),t.qZA()(),t.TgZ(225,"tr")(226,"td"),t._uU(227,"url"),t.qZA(),t.TgZ(228,"td"),t._uU(229,"url"),t.qZA(),t.TgZ(230,"td"),t._uU(231,"string"),t.qZA(),t.TgZ(232,"td"),t._uU(233,"''"),t.qZA()()()()()()),2&l){const d=t.MAs(39);t.xp6(2),t.Q6J("items",t.l5B(9,s,t.DdM(5,h),t.DdM(6,b),t.DdM(7,P),t.DdM(8,y))),t.xp6(15),t.Q6J("items",t.l5B(18,s,t.DdM(14,N),t.DdM(15,S),t.DdM(16,I),t.DdM(17,w))),t.xp6(15),t.Q6J("items",A.sideNavigationItems),t.xp6(5),t.Q6J("items",A.sideNavigationItems)("item-template",d)}},dependencies:[a.yS,m.W,v.Z,_.G,p.e,T.A,q.g]}),e})()}];let g=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[a.Bz.forChild(C),a.Bz]}),e})(),M=(()=>{class e{}return e.\u0275fac=function(l){return new(l||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g,Z.ez,c.$,r.UC,r.qe]}),e})()}}]);