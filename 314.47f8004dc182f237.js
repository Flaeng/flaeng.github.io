"use strict";(self.webpackChunkdemo_project=self.webpackChunkdemo_project||[]).push([[314],{2314:(x,a,n)=>{n.r(a),n.d(a,{BadgePageModule:()=>h,BreadcrumbsRoutingModule:()=>l});var p=n(6895),m=n(9199),o=n(3761),b=n(3869),U=n(751),u=n(8256),g=n(7954),Z=n(4772),f=n(8082);function v(e,A){if(1&e&&(u.TgZ(0,"b"),u._uU(1),u.qZA()),2&e){const t=A.item,r=A.index;u.xp6(1),u.AsE(" ",t.header," - ",r%2==1?"even":"odd"," ")}}function B(e,A){if(1&e&&(u.TgZ(0,"i",6),u._uU(1),u.qZA()),2&e){const t=A.item,r=A.index;u.Q6J("routerLink",t.url),u.xp6(1),u.AsE(" ",t.header," - ",r%2==1?"even":"odd"," ")}}const d=function(){return{header:"Forside",url:"#",isActive:!1}},s=function(){return{header:"Komponenter",url:"#",isActive:!1}},i=function(){return{header:"Br\xf8dkrumme",url:"#",isActive:!0}},c=function(e,A,t){return[e,A,t]},_=[{path:"",component:(()=>{class e extends U.y{}return e.\u0275fac=function(){let A;return function(r){return(A||(A=u.n5z(e)))(r||e)}}(),e.\u0275cmp=u.Xpm({type:e,selectors:[["app-breadcrumbs-page"]],features:[u.qOj],decls:51,vars:18,consts:[["header","Br\xf8dkrumme","sub-header","Component","doc-url","https://designsystem.dk/komponenter/broedkrumme/"],[3,"items"],["ng-non-bindable",""],[3,"active-item-template","item-template","items"],["activeItemTemplate",""],["itemTemplate",""],[1,"p-1","fs-1",3,"routerLink"]],template:function(t,r){if(1&t&&(u._UZ(0,"app-header",0),u.TgZ(1,"app-demo-view"),u._UZ(2,"fds-breadcrumbs",1),u.qZA(),u.TgZ(3,"code",2),u._uU(4,'\n\xa0\xa0<fds-breadcrumbs\xa0[items]="[\n'),u._UZ(5,"br"),u._uU(6,"\n\xa0\xa0\xa0\xa0\xa0\xa0{\xa0\xa0header:\xa0'Forside',\xa0url:\xa0'#',\xa0isActive:\xa0false\xa0\xa0},\n"),u._UZ(7,"br"),u._uU(8,"\n\xa0\xa0\xa0\xa0\xa0\xa0{\xa0\xa0header:\xa0'Komponenter',\xa0url:\xa0'#',\xa0isActive:\xa0false\xa0\xa0},\n"),u._UZ(9,"br"),u._uU(10,"\n\xa0\xa0\xa0\xa0\xa0\xa0{\xa0\xa0header:\xa0'Br\xf8dkrumme',\xa0url:\xa0'#',\xa0isActive:\xa0true\xa0\xa0},\n"),u._UZ(11,"br"),u._uU(12,'\n\xa0\xa0]"></fds-breadcrumbs>\n'),u._UZ(13,"br"),u.qZA(),u.TgZ(14,"app-demo-view"),u._UZ(15,"fds-breadcrumbs",3),u.YNc(16,v,2,2,"ng-template",null,4,u.W1O),u.YNc(18,B,2,3,"ng-template",null,5,u.W1O),u.qZA(),u.TgZ(20,"code",2),u._uU(21,'\n\xa0\xa0<fds-breadcrumbs\xa0[active-item-template]="activeItemTemplate"\xa0[item-template]="itemTemplate"\xa0[items]="[\n'),u._UZ(22,"br"),u._uU(23,"\n\xa0\xa0\xa0\xa0\xa0\xa0{\xa0\xa0header:\xa0'Forside',\xa0url:\xa0'#',\xa0isActive:\xa0false\xa0\xa0},\n"),u._UZ(24,"br"),u._uU(25,"\n\xa0\xa0\xa0\xa0\xa0\xa0{\xa0\xa0header:\xa0'Komponenter',\xa0url:\xa0'#',\xa0isActive:\xa0false\xa0\xa0},\n"),u._UZ(26,"br"),u._uU(27,"\n\xa0\xa0\xa0\xa0\xa0\xa0{\xa0\xa0header:\xa0'Br\xf8dkrumme',\xa0url:\xa0'#',\xa0isActive:\xa0true\xa0\xa0},\n"),u._UZ(28,"br"),u._uU(29,'\n\xa0\xa0]"></fds-breadcrumbs>\n'),u._UZ(30,"br"),u._uU(31,'\n\xa0\xa0<ng-template\xa0#activeItemTemplate\xa0let-item="item"\xa0let-index="index">\n'),u._UZ(32,"br"),u._uU(33,"\n\xa0\xa0\xa0\xa0\xa0\xa0<b>\n"),u._UZ(34,"br"),u._uU(35,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0{\xa0{\xa0\xa0item.header\xa0\xa0}\xa0}\xa0-\xa0{\xa0{\xa0\xa0index\xa0%\xa02\xa0==\xa01\xa0?\xa0'even'\xa0:\xa0'odd'\xa0\xa0}\xa0}\n"),u._UZ(36,"br"),u._uU(37,"\n\xa0\xa0\xa0\xa0\xa0\xa0</b>\n"),u._UZ(38,"br"),u._uU(39,"\n\xa0\xa0</ng-template>\n"),u._UZ(40,"br"),u._uU(41,'\n\xa0\xa0<ng-template\xa0#itemTemplate\xa0let-item="item"\xa0let-index="index">\n'),u._UZ(42,"br"),u._uU(43,'\n\xa0\xa0\xa0\xa0\xa0\xa0<i\xa0[routerLink]="item.url"\xa0class="p-1\xa0fs-1">\n'),u._UZ(44,"br"),u._uU(45,"\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0{\xa0{\xa0\xa0item.header\xa0\xa0}\xa0}\xa0-\xa0{\xa0{\xa0\xa0index\xa0%\xa02\xa0==\xa01\xa0?\xa0'even'\xa0:\xa0'odd'\xa0\xa0}\xa0}\n"),u._UZ(46,"br"),u._uU(47,"\n\xa0\xa0\xa0\xa0\xa0\xa0</i>\n"),u._UZ(48,"br"),u._uU(49,"\n\xa0\xa0</ng-template>\n"),u._UZ(50,"br"),u.qZA()),2&t){const M=u.MAs(17),T=u.MAs(19);u.xp6(2),u.Q6J("items",u.kEZ(7,c,u.DdM(4,d),u.DdM(5,s),u.DdM(6,i))),u.xp6(13),u.Q6J("active-item-template",M)("item-template",T)("items",u.kEZ(14,c,u.DdM(11,d),u.DdM(12,s),u.DdM(13,i)))}},dependencies:[m.rH,g.W,Z.G,f.n],encapsulation:2}),e})()}];let l=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[m.Bz.forChild(_),m.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[l,p.ez,b.$,o.vj,o.qe]}),e})()}}]);