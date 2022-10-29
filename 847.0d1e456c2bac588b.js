"use strict";(self.webpackChunkdemo_project=self.webpackChunkdemo_project||[]).push([[847],{5847:(S,r,e)=>{e.r(r),e.d(r,{NgfdsPageModule:()=>x,NgfdsRoutingModule:()=>p});var _=e(6895),U=e(433),s=e(9199),c=e(7907),f=e(4895),l=e(8276),b=e(3869),u=e(8256),Z=e(7954),g=e(4772),m=e(6611),v=e(8280),h=e(7889);let T=(()=>{class n{alert(A){window.alert(A)}}return n.\u0275fac=function(A){return new(A||n)},n.\u0275cmp=u.Xpm({type:n,selectors:[["app-ngfds-dropdown-page"]],decls:212,vars:13,consts:[["header","Dropdown","sub-header","Component"],["href","https://designsystem.dk/komponenter/dropdown/","target","_blank"],["icon","open-in-new"],[3,"ngModel","ngModelChange"],[1,"my-3"],["ng-non-bindable",""],["placeholder","Choose one",3,"ngModel","ngModelChange"],["icon","face"],["icon","support-agent"],["icon","drive-eta"],["icon","accessibility-new"],["size","width-l","placeholder","Choose one or more",3,"ngModel","allow-multiple","ngModelChange"]],template:function(A,o){1&A&&(u._UZ(0,"app-header",0),u.TgZ(1,"p"),u._uU(2," This dropdown allows for custom option-visual (with icons and more) and for more than 1 item to be selected. The visual of this dropdown is based on the description FDS has provided for a multi-select-dropdown "),u.TgZ(3,"a",1),u._uU(4,"here "),u._UZ(5,"fds-icon",2),u.qZA()(),u.TgZ(6,"app-demo-view")(7,"ngfds-select",3),u.NdJ("ngModelChange",function(d){return o.dropdown1=d}),u.TgZ(8,"ngfds-option"),u._uU(9,"Option #1"),u.qZA(),u.TgZ(10,"ngfds-option"),u._uU(11,"Option #2"),u.qZA(),u.TgZ(12,"ngfds-option"),u._uU(13,"Option #3"),u.qZA(),u.TgZ(14,"ngfds-option"),u._uU(15,"Option #4"),u.qZA()(),u.TgZ(16,"div",4),u._uU(17),u.ALo(18,"json"),u.qZA()(),u.TgZ(19,"code",5),u._uU(20,'\n<ngfds-select\xa0[(ngModel)]="dropdown1">'),u._UZ(21,"br"),u._uU(22,"\n\xa0\xa0<ngfds-option>Option\xa0#1</ngfds-option>"),u._UZ(23,"br"),u._uU(24,"\n\xa0\xa0<ngfds-option>Option\xa0#2</ngfds-option>"),u._UZ(25,"br"),u._uU(26,"\n\xa0\xa0<ngfds-option>Option\xa0#3</ngfds-option>"),u._UZ(27,"br"),u._uU(28,"\n\xa0\xa0<ngfds-option>Option\xa0#4</ngfds-option>"),u._UZ(29,"br"),u._uU(30,"\n</ngfds-select>"),u._UZ(31,"br"),u._uU(32,'\n<div\xa0class="my-3">'),u._UZ(33,"br"),u._uU(34,"\n\xa0\xa0{\xa0{\xa0\xa0dropdown1\xa0|\xa0json\xa0\xa0}\xa0}"),u._UZ(35,"br"),u._uU(36,"\n</div>"),u._UZ(37,"br"),u.qZA(),u.TgZ(38,"app-demo-view")(39,"ngfds-select",6),u.NdJ("ngModelChange",function(d){return o.dropdown2=d}),u.TgZ(40,"ngfds-option"),u._UZ(41,"fds-icon",7),u._uU(42," Option #1 "),u.qZA(),u.TgZ(43,"ngfds-option"),u._UZ(44,"fds-icon",8),u._uU(45," Option #2 "),u.qZA(),u.TgZ(46,"ngfds-option"),u._UZ(47,"fds-icon",9),u._uU(48," Option #3 "),u.qZA(),u.TgZ(49,"ngfds-option"),u._UZ(50,"fds-icon",10),u._uU(51," Option #4 "),u.qZA()(),u.TgZ(52,"div",4),u._uU(53),u.ALo(54,"json"),u.qZA()(),u.TgZ(55,"code",5),u._uU(56,'\n<ngfds-select\xa0[(ngModel)]="dropdown2"\xa0placeholder="Choose\xa0one">'),u._UZ(57,"br"),u._uU(58,"\n\xa0\xa0<ngfds-option>"),u._UZ(59,"br"),u._uU(60,'\n\xa0\xa0\xa0\xa0<fds-icon\xa0icon="face"></fds-icon>'),u._UZ(61,"br"),u._uU(62,"\n\xa0\xa0\xa0\xa0Option\xa0#1"),u._UZ(63,"br"),u._uU(64,"\n\xa0\xa0</ngfds-option>"),u._UZ(65,"br"),u._uU(66,"\n\xa0\xa0<ngfds-option>"),u._UZ(67,"br"),u._uU(68,'\n\xa0\xa0\xa0\xa0<fds-icon\xa0icon="support-agent"></fds-icon>'),u._UZ(69,"br"),u._uU(70,"\n\xa0\xa0\xa0\xa0Option\xa0#2"),u._UZ(71,"br"),u._uU(72,"\n\xa0\xa0</ngfds-option>"),u._UZ(73,"br"),u._uU(74,"\n\xa0\xa0<ngfds-option>"),u._UZ(75,"br"),u._uU(76,'\n\xa0\xa0\xa0\xa0<fds-icon\xa0icon="drive-eta"></fds-icon>'),u._UZ(77,"br"),u._uU(78,"\n\xa0\xa0\xa0\xa0Option\xa0#3"),u._UZ(79,"br"),u._uU(80,"\n\xa0\xa0</ngfds-option>"),u._UZ(81,"br"),u._uU(82,"\n\xa0\xa0<ngfds-option>"),u._UZ(83,"br"),u._uU(84,'\n\xa0\xa0\xa0\xa0<fds-icon\xa0icon="accessibility-new"></fds-icon>'),u._UZ(85,"br"),u._uU(86,"\n\xa0\xa0\xa0\xa0Option\xa0#4"),u._UZ(87,"br"),u._uU(88,"\n\xa0\xa0</ngfds-option>"),u._UZ(89,"br"),u._uU(90,"\n</ngfds-select>"),u._UZ(91,"br"),u._uU(92,'\n<div\xa0class="my-3">'),u._UZ(93,"br"),u._uU(94,"\n\xa0\xa0{\xa0{\xa0\xa0dropdown2\xa0|\xa0json\xa0\xa0}\xa0}"),u._UZ(95,"br"),u._uU(96,"\n</div>"),u._UZ(97,"br"),u.qZA(),u.TgZ(98,"app-demo-view")(99,"ngfds-select",11),u.NdJ("ngModelChange",function(d){return o.dropdown3=d}),u.TgZ(100,"ngfds-option"),u._UZ(101,"fds-icon",7),u._uU(102," Option #1 "),u.qZA(),u.TgZ(103,"ngfds-option"),u._UZ(104,"fds-icon",8),u._uU(105," Option #2 "),u.qZA(),u.TgZ(106,"ngfds-option"),u._UZ(107,"fds-icon",9),u._uU(108," Option #3 "),u.qZA(),u.TgZ(109,"ngfds-option"),u._UZ(110,"fds-icon",10),u._uU(111," Option #4 "),u.qZA(),u.TgZ(112,"ngfds-option"),u._UZ(113,"fds-icon",7),u._uU(114," Option #5 "),u.qZA(),u.TgZ(115,"ngfds-option"),u._UZ(116,"fds-icon",8),u._uU(117," Option #6 "),u.qZA(),u.TgZ(118,"ngfds-option"),u._UZ(119,"fds-icon",9),u._uU(120," Option #7 "),u.qZA(),u.TgZ(121,"ngfds-option"),u._UZ(122,"fds-icon",10),u._uU(123," Option #8 "),u.qZA()(),u.TgZ(124,"div",4),u._uU(125),u.ALo(126,"json"),u.qZA()(),u.TgZ(127,"code",5),u._uU(128,"\n<ngfds-select"),u._UZ(129,"br"),u._uU(130,'\n\xa0\xa0[(ngModel)]="dropdown3"'),u._UZ(131,"br"),u._uU(132,'\n\xa0\xa0size="width-l"'),u._UZ(133,"br"),u._uU(134,'\n\xa0\xa0placeholder="Choose\xa0one\xa0or\xa0more"'),u._UZ(135,"br"),u._uU(136,'\n\xa0\xa0[allow-multiple]="true"'),u._UZ(137,"br"),u._uU(138,"\n>"),u._UZ(139,"br"),u._uU(140,"\n\xa0\xa0<ngfds-option>"),u._UZ(141,"br"),u._uU(142,'\n\xa0\xa0\xa0\xa0<fds-icon\xa0icon="face"></fds-icon>'),u._UZ(143,"br"),u._uU(144,"\n\xa0\xa0\xa0\xa0Option\xa0#1"),u._UZ(145,"br"),u._uU(146,"\n\xa0\xa0</ngfds-option>"),u._UZ(147,"br"),u._uU(148,"\n\xa0\xa0<ngfds-option>"),u._UZ(149,"br"),u._uU(150,'\n\xa0\xa0\xa0\xa0<fds-icon\xa0icon="support-agent"></fds-icon>'),u._UZ(151,"br"),u._uU(152,"\n\xa0\xa0\xa0\xa0Option\xa0#2"),u._UZ(153,"br"),u._uU(154,"\n\xa0\xa0</ngfds-option>"),u._UZ(155,"br"),u._uU(156,"\n\xa0\xa0<ngfds-option>"),u._UZ(157,"br"),u._uU(158,'\n\xa0\xa0\xa0\xa0<fds-icon\xa0icon="drive-eta"></fds-icon>'),u._UZ(159,"br"),u._uU(160,"\n\xa0\xa0\xa0\xa0Option\xa0#3"),u._UZ(161,"br"),u._uU(162,"\n\xa0\xa0</ngfds-option>"),u._UZ(163,"br"),u._uU(164,"\n\xa0\xa0<ngfds-option>"),u._UZ(165,"br"),u._uU(166,'\n\xa0\xa0\xa0\xa0<fds-icon\xa0icon="accessibility-new"></fds-icon>'),u._UZ(167,"br"),u._uU(168,"\n\xa0\xa0\xa0\xa0Option\xa0#4"),u._UZ(169,"br"),u._uU(170,"\n\xa0\xa0</ngfds-option>"),u._UZ(171,"br"),u._uU(172,"\n\xa0\xa0<ngfds-option>"),u._UZ(173,"br"),u._uU(174,'\n\xa0\xa0\xa0\xa0<fds-icon\xa0icon="face"></fds-icon>'),u._UZ(175,"br"),u._uU(176,"\n\xa0\xa0\xa0\xa0Option\xa0#5"),u._UZ(177,"br"),u._uU(178,"\n\xa0\xa0</ngfds-option>"),u._UZ(179,"br"),u._uU(180,"\n\xa0\xa0<ngfds-option>"),u._UZ(181,"br"),u._uU(182,'\n\xa0\xa0\xa0\xa0<fds-icon\xa0icon="support-agent"></fds-icon>'),u._UZ(183,"br"),u._uU(184,"\n\xa0\xa0\xa0\xa0Option\xa0#6"),u._UZ(185,"br"),u._uU(186,"\n\xa0\xa0</ngfds-option>"),u._UZ(187,"br"),u._uU(188,"\n\xa0\xa0<ngfds-option>"),u._UZ(189,"br"),u._uU(190,'\n\xa0\xa0\xa0\xa0<fds-icon\xa0icon="drive-eta"></fds-icon>'),u._UZ(191,"br"),u._uU(192,"\n\xa0\xa0\xa0\xa0Option\xa0#7"),u._UZ(193,"br"),u._uU(194,"\n\xa0\xa0</ngfds-option>"),u._UZ(195,"br"),u._uU(196,"\n\xa0\xa0<ngfds-option>"),u._UZ(197,"br"),u._uU(198,'\n\xa0\xa0\xa0\xa0<fds-icon\xa0icon="accessibility-new"></fds-icon>'),u._UZ(199,"br"),u._uU(200,"\n\xa0\xa0\xa0\xa0Option\xa0#8"),u._UZ(201,"br"),u._uU(202,"\n\xa0\xa0</ngfds-option>"),u._UZ(203,"br"),u._uU(204,"\n</ngfds-select>"),u._UZ(205,"br"),u._uU(206,'\n<div\xa0class="my-3">'),u._UZ(207,"br"),u._uU(208,"\n\xa0\xa0{\xa0{\xa0\xa0dropdown3\xa0|\xa0json\xa0\xa0}\xa0}"),u._UZ(209,"br"),u._uU(210,"\n</div>"),u._UZ(211,"br"),u.qZA()),2&A&&(u.xp6(7),u.Q6J("ngModel",o.dropdown1),u.xp6(10),u.hij(" ",u.lcZ(18,7,o.dropdown1)," "),u.xp6(22),u.Q6J("ngModel",o.dropdown2),u.xp6(14),u.hij(" ",u.lcZ(54,9,o.dropdown2)," "),u.xp6(46),u.Q6J("ngModel",o.dropdown3)("allow-multiple",!0),u.xp6(26),u.hij(" ",u.lcZ(126,11,o.dropdown3)," "))},dependencies:[U.JJ,U.On,Z.W,g.G,m.U,v.v,h.o,_.Ts],encapsulation:2}),n})();var w=e(6283),N=e(5537);function M(n,i){if(1&n&&(u.TgZ(0,"a",7),u._uU(1),u.qZA()),2&n){const A=i.item,o=i.level,t=i.index;u.Q6J("routerLink",A.url),u.xp6(1),u.lnq(" ",o," - ",A.title," - ",t%2==1?"even":"odd"," ")}}const O=function(){return{url:"#",title:"Page 1",subtitle:null,isActive:!1,children:null}},P=function(){return{url:"#",title:"Page 2",subtitle:null,isActive:!1,children:null}},C=function(){return{url:"#",title:"Page 3",subtitle:null,isActive:!0,children:null}},y=function(){return{url:"#",title:"Page 4",subtitle:null,isActive:!1,children:null}},a=function(n,i,A,o){return[n,i,A,o]},q=function(){return{url:"#",title:"Page 1",subtitle:"Welcome",isActive:!1,children:null}},D=function(){return{url:"#",title:"Page 2",subtitle:"To",isActive:!0,children:null}},J=function(){return{url:"#",title:"Page 3",subtitle:"Design",isActive:!1,children:null}},I=function(){return{url:"#",title:"Page 4",subtitle:"System",isActive:!1,children:null}},j=[{path:"dropdown",component:T},{path:"side-navigation",component:(()=>{class n extends w.J{}return n.\u0275fac=function(){let i;return function(o){return(i||(i=u.n5z(n)))(o||n)}}(),n.\u0275cmp=u.Xpm({type:n,selectors:[["app-side-navigation-page"]],features:[u.qOj],decls:193,vars:26,consts:[["header","Sidenavigation","sub-header","Component"],["header","Introduction",3,"items"],["ng-non-bindable",""],["header","Introduction","icon-position","right",3,"is-expanded","items"],["header","Introduction",3,"is-expanded","items"],["header","Introduction",3,"is-expanded","items","item-template"],["templateItem",""],[1,"p-1","fs-1",3,"routerLink"]],template:function(A,o){if(1&A&&(u._UZ(0,"app-header",0),u.TgZ(1,"app-demo-view"),u._UZ(2,"ngfds-side-navigation",1),u.qZA(),u.TgZ(3,"code",2),u._uU(4,"\n<ngfds-side-navigation"),u._UZ(5,"br"),u._uU(6,'\n\xa0\xa0header="Introduction"'),u._UZ(7,"br"),u._uU(8,'\n\xa0\xa0[items]="['),u._UZ(9,"br"),u._uU(10,"\n\xa0\xa0\xa0\xa0{\xa0"),u._UZ(11,"br"),u._uU(12,"\n\xa0\xa0\xa0\xa0\xa0\xa0url:\xa0'#',"),u._UZ(13,"br"),u._uU(14,"\n\xa0\xa0\xa0\xa0\xa0\xa0title:\xa0'Page\xa01',"),u._UZ(15,"br"),u._uU(16,"\n\xa0\xa0\xa0\xa0\xa0\xa0subtitle:\xa0null,"),u._UZ(17,"br"),u._uU(18,"\n\xa0\xa0\xa0\xa0\xa0\xa0isActive:\xa0false,"),u._UZ(19,"br"),u._uU(20,"\n\xa0\xa0\xa0\xa0\xa0\xa0children:\xa0null"),u._UZ(21,"br"),u._uU(22,"\n\xa0\xa0\xa0\xa0\xa0},"),u._UZ(23,"br"),u._uU(24,"\n\xa0\xa0\xa0\xa0{\xa0"),u._UZ(25,"br"),u._uU(26,"\n\xa0\xa0\xa0\xa0\xa0\xa0url:\xa0'#',"),u._UZ(27,"br"),u._uU(28,"\n\xa0\xa0\xa0\xa0\xa0\xa0title:\xa0'Page\xa02',"),u._UZ(29,"br"),u._uU(30,"\n\xa0\xa0\xa0\xa0\xa0\xa0subtitle:\xa0null,"),u._UZ(31,"br"),u._uU(32,"\n\xa0\xa0\xa0\xa0\xa0\xa0isActive:\xa0false,"),u._UZ(33,"br"),u._uU(34,"\n\xa0\xa0\xa0\xa0\xa0\xa0children:\xa0null"),u._UZ(35,"br"),u._uU(36,"\n\xa0\xa0\xa0\xa0\xa0},"),u._UZ(37,"br"),u._uU(38,"\n\xa0\xa0\xa0\xa0{\xa0"),u._UZ(39,"br"),u._uU(40,"\n\xa0\xa0\xa0\xa0\xa0\xa0url:\xa0'#',"),u._UZ(41,"br"),u._uU(42,"\n\xa0\xa0\xa0\xa0\xa0\xa0title:\xa0'Page\xa03',"),u._UZ(43,"br"),u._uU(44,"\n\xa0\xa0\xa0\xa0\xa0\xa0subtitle:\xa0null,"),u._UZ(45,"br"),u._uU(46,"\n\xa0\xa0\xa0\xa0\xa0\xa0isActive:\xa0true,"),u._UZ(47,"br"),u._uU(48,"\n\xa0\xa0\xa0\xa0\xa0\xa0children:\xa0null"),u._UZ(49,"br"),u._uU(50,"\n\xa0\xa0\xa0\xa0\xa0},"),u._UZ(51,"br"),u._uU(52,"\n\xa0\xa0\xa0\xa0{\xa0"),u._UZ(53,"br"),u._uU(54,"\n\xa0\xa0\xa0\xa0\xa0\xa0url:\xa0'#',"),u._UZ(55,"br"),u._uU(56,"\n\xa0\xa0\xa0\xa0\xa0\xa0title:\xa0'Page\xa04',"),u._UZ(57,"br"),u._uU(58,"\n\xa0\xa0\xa0\xa0\xa0\xa0subtitle:\xa0null,"),u._UZ(59,"br"),u._uU(60,"\n\xa0\xa0\xa0\xa0\xa0\xa0isActive:\xa0false,"),u._UZ(61,"br"),u._uU(62,"\n\xa0\xa0\xa0\xa0\xa0\xa0children:\xa0null"),u._UZ(63,"br"),u._uU(64,"\n\xa0\xa0\xa0\xa0\xa0}"),u._UZ(65,"br"),u._uU(66,'\n\xa0\xa0]"'),u._UZ(67,"br"),u._uU(68,"\n></ngfds-side-navigation>"),u._UZ(69,"br"),u.qZA(),u.TgZ(70,"app-demo-view"),u._UZ(71,"ngfds-side-navigation",3),u.qZA(),u.TgZ(72,"code",2),u._uU(73,"\n<ngfds-side-navigation"),u._UZ(74,"br"),u._uU(75,'\n\xa0\xa0header="Introduction"'),u._UZ(76,"br"),u._uU(77,'\n\xa0\xa0icon-position="right"'),u._UZ(78,"br"),u._uU(79,'\n\xa0\xa0[is-expanded]="true"'),u._UZ(80,"br"),u._uU(81,'\n\xa0\xa0[items]="['),u._UZ(82,"br"),u._uU(83,"\n\xa0\xa0\xa0\xa0{\xa0"),u._UZ(84,"br"),u._uU(85,"\n\xa0\xa0\xa0\xa0\xa0\xa0url:\xa0'#',"),u._UZ(86,"br"),u._uU(87,"\n\xa0\xa0\xa0\xa0\xa0\xa0title:\xa0'Page\xa01',"),u._UZ(88,"br"),u._uU(89,"\n\xa0\xa0\xa0\xa0\xa0\xa0subtitle:\xa0'Welcome',"),u._UZ(90,"br"),u._uU(91,"\n\xa0\xa0\xa0\xa0\xa0\xa0isActive:\xa0false,"),u._UZ(92,"br"),u._uU(93,"\n\xa0\xa0\xa0\xa0\xa0\xa0children:\xa0null"),u._UZ(94,"br"),u._uU(95,"\n\xa0\xa0\xa0\xa0\xa0},"),u._UZ(96,"br"),u._uU(97,"\n\xa0\xa0\xa0\xa0{\xa0"),u._UZ(98,"br"),u._uU(99,"\n\xa0\xa0\xa0\xa0\xa0\xa0url:\xa0'#',"),u._UZ(100,"br"),u._uU(101,"\n\xa0\xa0\xa0\xa0\xa0\xa0title:\xa0'Page\xa02',"),u._UZ(102,"br"),u._uU(103,"\n\xa0\xa0\xa0\xa0\xa0\xa0subtitle:\xa0'To',"),u._UZ(104,"br"),u._uU(105,"\n\xa0\xa0\xa0\xa0\xa0\xa0isActive:\xa0true,"),u._UZ(106,"br"),u._uU(107,"\n\xa0\xa0\xa0\xa0\xa0\xa0children:\xa0null"),u._UZ(108,"br"),u._uU(109,"\n\xa0\xa0\xa0\xa0\xa0},"),u._UZ(110,"br"),u._uU(111,"\n\xa0\xa0\xa0\xa0{\xa0"),u._UZ(112,"br"),u._uU(113,"\n\xa0\xa0\xa0\xa0\xa0\xa0url:\xa0'#',"),u._UZ(114,"br"),u._uU(115,"\n\xa0\xa0\xa0\xa0\xa0\xa0title:\xa0'Page\xa03',"),u._UZ(116,"br"),u._uU(117,"\n\xa0\xa0\xa0\xa0\xa0\xa0subtitle:\xa0'Design',"),u._UZ(118,"br"),u._uU(119,"\n\xa0\xa0\xa0\xa0\xa0\xa0isActive:\xa0false,"),u._UZ(120,"br"),u._uU(121,"\n\xa0\xa0\xa0\xa0\xa0\xa0children:\xa0null"),u._UZ(122,"br"),u._uU(123,"\n\xa0\xa0\xa0\xa0\xa0},"),u._UZ(124,"br"),u._uU(125,"\n\xa0\xa0\xa0\xa0{\xa0"),u._UZ(126,"br"),u._uU(127,"\n\xa0\xa0\xa0\xa0\xa0\xa0url:\xa0'#',"),u._UZ(128,"br"),u._uU(129,"\n\xa0\xa0\xa0\xa0\xa0\xa0title:\xa0'Page\xa04',"),u._UZ(130,"br"),u._uU(131,"\n\xa0\xa0\xa0\xa0\xa0\xa0subtitle:\xa0'System',"),u._UZ(132,"br"),u._uU(133,"\n\xa0\xa0\xa0\xa0\xa0\xa0isActive:\xa0false,"),u._UZ(134,"br"),u._uU(135,"\n\xa0\xa0\xa0\xa0\xa0\xa0children:\xa0null"),u._UZ(136,"br"),u._uU(137,"\n\xa0\xa0\xa0\xa0\xa0}"),u._UZ(138,"br"),u._uU(139,'\n\xa0\xa0]"'),u._UZ(140,"br"),u._uU(141,"\n></ngfds-side-navigation>"),u._UZ(142,"br"),u.qZA(),u.TgZ(143,"app-demo-view"),u._UZ(144,"ngfds-side-navigation",4),u.qZA(),u.TgZ(145,"code",2),u._uU(146,"\n<ngfds-side-navigation"),u._UZ(147,"br"),u._uU(148,'\n\xa0\xa0header="Introduction"'),u._UZ(149,"br"),u._uU(150,'\n\xa0\xa0[is-expanded]="true"'),u._UZ(151,"br"),u._uU(152,'\n\xa0\xa0[items]="sideNavigationItems"'),u._UZ(153,"br"),u._uU(154,"\n\xa0\xa0></ngfds-side-navigation>"),u._UZ(155,"br"),u.qZA(),u.TgZ(156,"app-demo-view"),u._UZ(157,"ngfds-side-navigation",5),u.YNc(158,M,2,4,"ng-template",null,6,u.W1O),u.qZA(),u.TgZ(160,"code",2),u._uU(161,"\n\xa0\xa0<ngfds-side-navigation"),u._UZ(162,"br"),u._uU(163,'\n\xa0\xa0header="Introduction"'),u._UZ(164,"br"),u._uU(165,'\n\xa0\xa0[is-expanded]="true"'),u._UZ(166,"br"),u._uU(167,'\n\xa0\xa0[items]="sideNavigationItems"'),u._UZ(168,"br"),u._uU(169,'\n\xa0\xa0[item-template]="templateItem"'),u._UZ(170,"br"),u._uU(171,"\n></ngfds-side-navigation>"),u._UZ(172,"br"),u._uU(173,"\n<ng-template"),u._UZ(174,"br"),u._uU(175,"\n\xa0\xa0#templateItem"),u._UZ(176,"br"),u._uU(177,'\n\xa0\xa0let-item="item"'),u._UZ(178,"br"),u._uU(179,'\n\xa0\xa0let-level="level"'),u._UZ(180,"br"),u._uU(181,'\n\xa0\xa0let-index="index"'),u._UZ(182,"br"),u._uU(183,"\n>"),u._UZ(184,"br"),u._uU(185,'\n\xa0\xa0<a\xa0[routerLink]="item.url"\xa0class="p-1\xa0fs-1">'),u._UZ(186,"br"),u._uU(187,'\n\xa0\xa0\xa0\xa0{\xa0{\xa0\xa0level\xa0\xa0}\xa0}\xa0-\xa0{\xa0{\xa0\xa0item.title\xa0\xa0}\xa0}\xa0-\xa0{\xa0{\xa0\xa0index\xa0%\xa02\xa0==\xa01\xa0?\xa0"even"\xa0:\xa0"odd"\xa0\xa0}\xa0}'),u._UZ(188,"br"),u._uU(189,"\n\xa0\xa0</a>"),u._UZ(190,"br"),u._uU(191,"\n</ng-template>"),u._UZ(192,"br"),u.qZA()),2&A){const t=u.MAs(159);u.xp6(2),u.Q6J("items",u.l5B(12,a,u.DdM(8,O),u.DdM(9,P),u.DdM(10,C),u.DdM(11,y))),u.xp6(69),u.Q6J("is-expanded",!0)("items",u.l5B(21,a,u.DdM(17,q),u.DdM(18,D),u.DdM(19,J),u.DdM(20,I))),u.xp6(73),u.Q6J("is-expanded",!0)("items",o.sideNavigationItems),u.xp6(13),u.Q6J("is-expanded",!0)("items",o.sideNavigationItems)("item-template",t)}},dependencies:[s.yS,Z.W,g.G,N.E],encapsulation:2}),n})()}];let p=(()=>{class n{}return n.\u0275fac=function(A){return new(A||n)},n.\u0275mod=u.oAB({type:n}),n.\u0275inj=u.cJS({imports:[s.Bz.forChild(j),s.Bz]}),n})(),x=(()=>{class n{}return n.\u0275fac=function(A){return new(A||n)},n.\u0275mod=u.oAB({type:n}),n.\u0275inj=u.cJS({imports:[p,_.ez,U.u5,b.$,c.Jc,f.C,l.qe,l.AG]}),n})()}}]);