"use strict";(self.webpackChunkdemo_project=self.webpackChunkdemo_project||[]).push([[592],{3869:(f,c,t)=>{t.d(c,{$:()=>e});var n=t(6895),a=t(8256);let e=(()=>{class u{}return u.\u0275fac=function(s){return new(s||u)},u.\u0275mod=a.oAB({type:u}),u.\u0275inj=a.cJS({imports:[n.ez]}),u})()},7954:(f,c,t)=>{t.d(c,{W:()=>e});var n=t(8256);const a=["*"];let e=(()=>{class u{}return u.\u0275fac=function(s){return new(s||u)},u.\u0275cmp=n.Xpm({type:u,selectors:[["app-demo-view"]],ngContentSelectors:a,decls:5,vars:0,consts:[[1,"mb-2"]],template:function(s,i){1&s&&(n.F$t(),n.TgZ(0,"h3",0),n._uU(1,"Example"),n.qZA(),n.Hsn(2),n.TgZ(3,"h3",0),n._uU(4,"Markdown"),n.qZA())},encapsulation:2}),u})()},4772:(f,c,t)=>{t.d(c,{G:()=>s});var n=t(8256),a=t(6895);function e(i,p){if(1&i&&(n.TgZ(0,"a",4),n._uU(1),n.O4$(),n.TgZ(2,"svg",5),n._UZ(3,"use",6),n.qZA()()),2&i){const l=n.oxw(2);n.Q6J("href",l.docUrl,n.LSH),n.xp6(1),n.hij(" ",l.docUrl," ")}}function u(i,p){if(1&i&&(n.TgZ(0,"div"),n._uU(1," Dokumentation: "),n.YNc(2,e,4,2,"a",3),n.qZA()),2&i){const l=n.oxw();n.xp6(2),n.Q6J("ngIf",l.docUrl)}}const o=["*"];let s=(()=>{class i{constructor(){this.header="",this.subHeader=null,this.docUrl=null}}return i.\u0275fac=function(l){return new(l||i)},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-header"]],inputs:{header:"header",subHeader:["sub-header","subHeader"],docUrl:["doc-url","docUrl"]},ngContentSelectors:o,decls:7,vars:3,consts:[[1,"subheading"],[4,"ngIf"],[1,"font-lead"],["target","_blank",3,"href",4,"ngIf"],["target","_blank",3,"href"],["aria-hidden","true",1,"icon-svg"],[0,"xlink","href","#open-in-new"]],template:function(l,A){1&l&&(n.F$t(),n.TgZ(0,"div",0),n._uU(1),n.qZA(),n.TgZ(2,"h1"),n._uU(3),n.qZA(),n.YNc(4,u,3,1,"div",1),n.TgZ(5,"p",2),n.Hsn(6),n.qZA()),2&l&&(n.xp6(1),n.Oqu(A.subHeader),n.xp6(2),n.Oqu(A.header),n.xp6(1),n.Q6J("ngIf",A.docUrl))},dependencies:[a.O5],encapsulation:2}),i})()},6283:(f,c,t)=>{t.d(c,{J:()=>d});var n=t(4191),a=t(751),e=t(8256),u=t(9199),o=t(7954),s=t(4772),i=t(4089);function p(m,g){if(1&m&&(e.TgZ(0,"a",5),e._uU(1),e.qZA()),2&m){const v=g.item,C=g.level,Z=g.index;e.Q6J("routerLink",v.url),e.xp6(1),e.lnq(" ",C," - ",v.title," - ",Z%2==1?"even":"odd"," ")}}const l=function(){return{url:"#",title:"Page 1",subtitle:null,isActive:!1,children:null}},A=function(){return{url:"#",title:"Page 2",subtitle:null,isActive:!1,children:null}},M=function(){return{url:"#",title:"Page 3",subtitle:null,isActive:!0,children:null}},E=function(){return{url:"#",title:"Page 4",subtitle:null,isActive:!1,children:null}},U=function(m,g,v,C){return[m,g,v,C]},P=function(){return{url:"#",title:"Page 1",subtitle:"Welcome",isActive:!1,children:null}},_=function(){return{url:"#",title:"Page 2",subtitle:"To",isActive:!0,children:null}},h=function(){return{url:"#",title:"Page 3",subtitle:"Design",isActive:!1,children:null}},r=function(){return{url:"#",title:"Page 4",subtitle:"System",isActive:!1,children:null}};let d=(()=>{class m extends a.y{constructor(){super(...arguments),this.page1children=[new n.y4({url:"#",title:"Page 1.0"}),new n.y4({url:"#",title:"Page 1.1"}),new n.y4({url:"#",title:"Page 1.2"}),new n.y4({url:"#",title:"Page 1.3"})],this.page4children=[new n.y4({url:"#",title:"Page 4.0"}),new n.y4({url:"#",title:"Page 4.1"}),new n.y4({url:"#",title:"Page 4.2",isActive:!0}),new n.y4({url:"#",title:"Page 4.3"})],this.sideNavigationItems=[new n.y4({url:"#",title:"Page 1",children:this.page1children}),new n.y4({url:"#",title:"Page 2"}),new n.y4({url:"#",title:"Page 3"}),new n.y4({url:"#",title:"Page 4",children:this.page4children,isActive:!0}),new n.y4({url:"#",title:"Page 5"}),new n.y4({url:"#",title:"Page 6"}),new n.y4({url:"#",title:"Page 7"})]}}return m.\u0275fac=function(){let g;return function(C){return(g||(g=e.n5z(m)))(C||m)}}(),m.\u0275cmp=e.Xpm({type:m,selectors:[["app-side-navigation-page"]],features:[e.qOj],decls:59,vars:23,consts:[["header","Sidenavigation","sub-header","Component","doc-url","https://designsystem.dk/komponenter/sidenav/"],[3,"items"],["ng-non-bindable",""],[3,"items","item-template"],["templateItem",""],[1,"p-1","fs-1",3,"routerLink"]],template:function(v,C){if(1&v&&(e._UZ(0,"app-header",0),e.TgZ(1,"app-demo-view"),e._UZ(2,"fds-side-navigation",1),e.qZA(),e.TgZ(3,"code",2),e._uU(4,'\n<fds-side-navigation\xa0[items]="['),e._UZ(5,"br"),e._uU(6,"\n\xa0\xa0{\xa0\xa0url:\xa0'#',\xa0title:\xa0'Page\xa01',\xa0subtitle:\xa0null,\xa0isActive:\xa0false,\xa0children:\xa0null\xa0\xa0},"),e._UZ(7,"br"),e._uU(8,"\n\xa0\xa0{\xa0\xa0url:\xa0'#',\xa0title:\xa0'Page\xa02',\xa0subtitle:\xa0null,\xa0isActive:\xa0false,\xa0children:\xa0null\xa0\xa0},"),e._UZ(9,"br"),e._uU(10,"\n\xa0\xa0{\xa0\xa0url:\xa0'#',\xa0title:\xa0'Page\xa03',\xa0subtitle:\xa0null,\xa0isActive:\xa0true,\xa0children:\xa0null\xa0\xa0},"),e._UZ(11,"br"),e._uU(12,"\n\xa0\xa0{\xa0\xa0url:\xa0'#',\xa0title:\xa0'Page\xa04',\xa0subtitle:\xa0null,\xa0isActive:\xa0false,\xa0children:\xa0null\xa0\xa0},"),e._UZ(13,"br"),e._uU(14,'\n]"></fds-side-navigation>'),e._UZ(15,"br"),e.qZA(),e.TgZ(16,"app-demo-view"),e._UZ(17,"fds-side-navigation",1),e.qZA(),e.TgZ(18,"code",2),e._uU(19,'\n<fds-side-navigation\xa0[items]="['),e._UZ(20,"br"),e._uU(21,"\n\xa0\xa0{\xa0\xa0url:\xa0'#',\xa0title:\xa0'Page\xa01',\xa0subtitle:\xa0'Welcome',\xa0isActive:\xa0false,\xa0children:\xa0null\xa0\xa0},"),e._UZ(22,"br"),e._uU(23,"\n\xa0\xa0{\xa0\xa0url:\xa0'#',\xa0title:\xa0'Page\xa02',\xa0subtitle:\xa0'To',\xa0isActive:\xa0true,\xa0children:\xa0null\xa0\xa0},"),e._UZ(24,"br"),e._uU(25,"\n\xa0\xa0{\xa0\xa0url:\xa0'#',\xa0title:\xa0'Page\xa03',\xa0subtitle:\xa0'Design',\xa0isActive:\xa0false,\xa0children:\xa0null\xa0\xa0},"),e._UZ(26,"br"),e._uU(27,"\n\xa0\xa0{\xa0\xa0url:\xa0'#',\xa0title:\xa0'Page\xa04',\xa0subtitle:\xa0'System',\xa0isActive:\xa0false,\xa0children:\xa0null\xa0\xa0},"),e._UZ(28,"br"),e._uU(29,'\n]"></fds-side-navigation>'),e._UZ(30,"br"),e.qZA(),e.TgZ(31,"app-demo-view"),e._UZ(32,"fds-side-navigation",1),e.qZA(),e.TgZ(33,"code",2),e._uU(34,'\n<fds-side-navigation\xa0[items]="sideNavigationItems"></fds-side-navigation>'),e._UZ(35,"br"),e.qZA(),e.TgZ(36,"app-demo-view"),e._UZ(37,"fds-side-navigation",3),e.YNc(38,p,2,4,"ng-template",null,4,e.W1O),e.qZA(),e.TgZ(40,"code",2),e._uU(41,"\n<fds-side-navigation"),e._UZ(42,"br"),e._uU(43,'\n\xa0\xa0[items]="sideNavigationItems"'),e._UZ(44,"br"),e._uU(45,'\n\xa0\xa0[item-template]="templateItem"'),e._UZ(46,"br"),e._uU(47,"\n></fds-side-navigation>"),e._UZ(48,"br"),e._uU(49,'\n<ng-template\xa0#templateItem\xa0let-item="item"\xa0let-level="level"\xa0let-index="index">'),e._UZ(50,"br"),e._uU(51,'\n\xa0\xa0<a\xa0[routerLink]="item.url"\xa0class="p-1\xa0fs-1">'),e._UZ(52,"br"),e._uU(53,"\n\xa0\xa0\xa0\xa0{\xa0{\xa0\xa0level\xa0\xa0}\xa0}\xa0-\xa0{\xa0{\xa0\xa0item.title\xa0\xa0}\xa0}\xa0-\xa0{\xa0{\xa0\xa0index\xa0%\xa02\xa0==\xa01\xa0?\xa0'even'\xa0:\xa0'odd'\xa0\xa0}\xa0}"),e._UZ(54,"br"),e._uU(55,"\n\xa0\xa0</a>"),e._UZ(56,"br"),e._uU(57,"\n</ng-template>"),e._UZ(58,"br"),e.qZA()),2&v){const Z=e.MAs(39);e.xp6(2),e.Q6J("items",e.l5B(9,U,e.DdM(5,l),e.DdM(6,A),e.DdM(7,M),e.DdM(8,E))),e.xp6(15),e.Q6J("items",e.l5B(18,U,e.DdM(14,P),e.DdM(15,_),e.DdM(16,h),e.DdM(17,r))),e.xp6(15),e.Q6J("items",C.sideNavigationItems),e.xp6(5),e.Q6J("items",C.sideNavigationItems)("item-template",Z)}},dependencies:[u.yS,o.W,s.G,i.e],encapsulation:2}),m})()},4905:(f,c,t)=>{t.d(c,{J:()=>s});var n=t(8256),a=t(9930),e=t(7274);const u=["content"],o=["*"];let s=(()=>{class i{constructor(l,A){this.form=l,this.formField=A,this.id=null,this.text=null,this.content=null}ngAfterViewChecked(){this.text=this.content?.nativeElement.innerText??null}ngOnInit(){this.form?.register(this),this.id=this.formField?.register(this)??null}ngOnDestroy(){this.form?.deregister(this),this.formField?.deregister(this)}}return i.\u0275fac=function(l){return new(l||i)(n.Y36(a.U,8),n.Y36(e.h,8))},i.\u0275cmp=n.Xpm({type:i,selectors:[["fds-form-error-message"]],viewQuery:function(l,A){if(1&l&&n.Gf(u,5),2&l){let M;n.iGM(M=n.CRH())&&(A.content=M.first)}},ngContentSelectors:o,decls:6,vars:1,consts:[[1,"form-error-message"],[1,"sr-only"],["content",""]],template:function(l,A){1&l&&(n.F$t(),n.TgZ(0,"span",0)(1,"span",1),n._uU(2,"Fejl:"),n.qZA(),n.TgZ(3,"span",null,2),n.Hsn(5),n.qZA()()),2&l&&n.uIk("id",A.id)},encapsulation:2}),i})()},9123:(f,c,t)=>{t.d(c,{r:()=>e});var n=t(6895),a=t(8256);let e=(()=>{class u{}return u.\u0275fac=function(s){return new(s||u)},u.\u0275mod=a.oAB({type:u}),u.\u0275inj=a.cJS({imports:[n.ez]}),u})()},9930:(f,c,t)=>{t.d(c,{U:()=>u});var n=t(1135),a=t(8256);const e=["*"];let u=(()=>{class o{constructor(){this._errorMessageList=[],this._errorMessages=new n.X([])}get errorMessages(){return this._errorMessages.asObservable()}register(i){this._errorMessageList.push(i),this._errorMessages.next(this._errorMessageList)}deregister(i){const p=this._errorMessageList.indexOf(i);-1!==p&&(this._errorMessageList.splice(p,1),this._errorMessages.next(this._errorMessageList))}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=a.Xpm({type:o,selectors:[["fds-form"]],ngContentSelectors:e,decls:2,vars:0,consts:[["novalidate",""]],template:function(i,p){1&i&&(a.F$t(),a.TgZ(0,"form",0),a.Hsn(1),a.qZA())},encapsulation:2}),o})()},3082:(f,c,t)=>{t.d(c,{o:()=>n});class n{static preventDefaultAndEmit(e,u){e.preventDefault(),e.stopPropagation(),u.emit(e)}}},7889:(f,c,t)=>{t.d(c,{o:()=>u});var n=t(8256),a=t(6895);function e(o,s){if(1&o&&(n.O4$(),n.TgZ(0,"svg",1),n._UZ(1,"use"),n.qZA()),2&o){const i=n.oxw();n.xp6(1),n.uIk("href","#"+i.icon,null,"xlink")}}let u=(()=>{class o{constructor(){this.icon=null}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["fds-icon"]],inputs:{icon:"icon"},decls:1,vars:1,consts:[["class","icon-svg","aria-hidden","true","focusable","false",4,"ngIf"],["aria-hidden","true","focusable","false",1,"icon-svg"]],template:function(i,p){1&i&&n.YNc(0,e,2,1,"svg",0),2&i&&n.Q6J("ngIf",null!=p.icon)},dependencies:[a.O5],encapsulation:2}),o})()},1895:(f,c,t)=>{t.d(c,{a:()=>P});var n=t(1854),a=t(2726),e=t(8256),u=t(7274),o=t(6895),s=t(433);const i=["formControlWrapper"];function p(_,h){if(1&_&&(e.TgZ(0,"div",8),e._uU(1),e.qZA()),2&_){const r=e.oxw();e.xp6(1),e.hij(" ",r.prefix," ")}}function l(_,h){if(1&_&&(e.TgZ(0,"div",9),e._uU(1),e.qZA()),2&_){const r=e.oxw();e.xp6(1),e.hij(" ",r.suffix," ")}}function A(_,h){if(1&_&&(e.TgZ(0,"span",10),e._uU(1),e.qZA()),2&_){const r=e.oxw();e.xp6(1),e.hij("Du kan indtaste op til ",r.maxlength," tegn")}}function M(_,h){if(1&_&&(e.TgZ(0,"span",11),e._uU(1),e.qZA()),2&_){const r=e.oxw();e.xp6(1),e.hij("Du har ",r.maxlength," tegn tilbage")}}function E(_,h){if(1&_&&(e.TgZ(0,"span",12),e._uU(1),e.qZA()),2&_){const r=e.oxw();e.xp6(1),e.hij("Du har ",r.maxlength," tegn tilbage")}}const U=function(_){return{"form-input-wrapper--suffix":_}};let P=(()=>{class _ extends a.G{constructor(r){super(r),this.disabled=!1,this.readonly=!1,this.placeholder="",this.type="text",this.size=null,this.prefix=null,this.suffix=null,this.maxlength=null,this.showCharacterLimit=!1,this.name="",this._value="",this.underlayingControl=null}get value(){return this._value}set value(r){this._value=r,super.emitChanges(r)}ngOnInit(){super.onInit()}setValue(r){this.value=r}ngOnChanges(r){super.handleChangesForCharacterLimit(this)}ngAfterViewInit(){super.trySetupCharacterLimit(this)}}return _.\u0275fac=function(r){return new(r||_)(e.Y36(u.h,8))},_.\u0275cmp=e.Xpm({type:_,selectors:[["fds-input"]],viewQuery:function(r,d){if(1&r&&e.Gf(i,5),2&r){let m;e.iGM(m=e.CRH())&&(d.formControlWrapper=m.first)}},inputs:{disabled:"disabled",readonly:"readonly",placeholder:"placeholder",type:"type",size:"size",prefix:"prefix",suffix:"suffix",maxlength:"maxlength",showCharacterLimit:["show-character-limit","showCharacterLimit"],name:"name",value:"value"},features:[e._Bn([...n.m.formInput(_)]),e.qOj,e.TTD],decls:9,vars:18,consts:[["formControlWrapper",""],[1,"form-input-wrapper",3,"ngClass"],["class","form-input-prefix","aria-hidden","true",4,"ngIf"],[3,"disabled","type","ngModel","readonly","placeholder","ngModelChange"],["class","form-input-suffix","aria-hidden","true",4,"ngIf"],["id","input-type-character-limit-message","class","sr-only",4,"ngIf"],["class","form-hint character-limit","aria-hidden","true",4,"ngIf"],["class","character-limit-sr-only sr-only","aria-live","polite",4,"ngIf"],["aria-hidden","true",1,"form-input-prefix"],["aria-hidden","true",1,"form-input-suffix"],["id","input-type-character-limit-message",1,"sr-only"],["aria-hidden","true",1,"form-hint","character-limit"],["aria-live","polite",1,"character-limit-sr-only","sr-only"]],template:function(r,d){1&r&&(e.TgZ(0,"div",null,0)(2,"div",1),e.YNc(3,p,2,1,"div",2),e.TgZ(4,"input",3),e.NdJ("ngModelChange",function(g){return d.value=g}),e.qZA(),e.YNc(5,l,2,1,"div",4),e.qZA(),e.YNc(6,A,2,1,"span",5),e.YNc(7,M,2,1,"span",6),e.YNc(8,E,2,1,"span",7),e.qZA()),2&r&&(e.uIk("data-maxlength",d.maxlength),e.xp6(2),e.Q6J("ngClass",e.VKq(16,U,d.suffix)),e.xp6(1),e.Q6J("ngIf",d.prefix),e.xp6(1),e.Gre("form-input ",d.size?"input-"+d.size:"",""),e.Q6J("disabled",d.disabled)("type",d.type)("ngModel",d.value)("readonly",d.readonly)("placeholder",d.placeholder),e.uIk("id",d.name),e.xp6(1),e.Q6J("ngIf",d.suffix),e.xp6(1),e.Q6J("ngIf",d.showCharacterLimit),e.xp6(1),e.Q6J("ngIf",d.showCharacterLimit),e.xp6(1),e.Q6J("ngIf",d.showCharacterLimit))},dependencies:[o.mk,o.O5,s.Fj,s.JJ,s.On],encapsulation:2}),_})()},165:(f,c,t)=>{t.d(c,{F:()=>u});var n=t(6895),a=t(433),e=t(8256);let u=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[n.ez,a.u5]}),o})()},7314:(f,c,t)=>{t.d(c,{a:()=>e});var n=t(8256);const a=["*"];let e=(()=>{class u{onClick(s){s.preventDefault(),s.stopPropagation();const i=document.body.querySelector("#main-content");!i||(i.scrollIntoView(),i.focus())}}return u.\u0275fac=function(s){return new(s||u)},u.\u0275cmp=n.Xpm({type:u,selectors:[["fds-skip-link"]],ngContentSelectors:a,decls:2,vars:0,consts:[["href","#main-content",1,"skipnav",3,"click"]],template:function(s,i){1&s&&(n.F$t(),n.TgZ(0,"a",0),n.NdJ("click",function(l){return i.onClick(l)}),n.Hsn(1),n.qZA())},encapsulation:2}),u})()}}]);