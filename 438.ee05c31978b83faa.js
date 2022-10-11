"use strict";(self.webpackChunkdemo_project=self.webpackChunkdemo_project||[]).push([[438],{7438:(U,d,n)=>{n.r(d),n.d(d,{ToggleSwitchPageModule:()=>b,ToggleSwitchRoutingModule:()=>c});var h=n(6895),a=n(433),i=n(4736),u=n(51),r=n(3869),e=n(8256),p=n(7954),m=n(7538),T=n(4772),f=n(1854);const Z=["*"];let v=(()=>{class t{constructor(){this.disabled=!1,this._value=!1,this.id="toggle-switch"+(t.idGenerator++).toString(),this.onChange=null,this.onTouched=null,this.onValidatorChange=null}get value(){return this._value}set value(o){this._value=o,this.onChange?.call(this,o),this.onTouched?.call(this)}writeValue(o){this.value=o}registerOnChange(o){this.onChange=o}registerOnTouched(o){this.onTouched=o}setDisabledState(o){this.disabled=o}validate(o){return null}registerOnValidatorChange(o){this.onValidatorChange=o}}return t.idGenerator=1,t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["fds-toggle-switch"]],inputs:{disabled:"disabled"},features:[e._Bn([...f.m.formInput(t)])],ngContentSelectors:Z,decls:3,vars:3,consts:[["type","checkbox",1,"form-toggle",3,"disabled"],[1,"form-toggle-label"]],template:function(o,g){1&o&&(e.F$t(),e._UZ(0,"input",0),e.TgZ(1,"label",1),e.Hsn(2),e.qZA()),2&o&&(e.Q6J("disabled",g.disabled),e.uIk("id",g.id),e.xp6(1),e.uIk("for",g.id))},encapsulation:2}),t})();var C=n(1968),w=n(9355);const A=[{path:"",component:(()=>{class t{constructor(){this.value1=!1,this.value2=!0}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-toggle-switch-page"]],decls:54,vars:3,consts:[["header","Toggle-Switch","sub-header","Component","doc-url","https://designsystem.dk/komponenter/toggle/"],[3,"ngModel","ngModelChange"],["ng-non-bindable",""],[3,"ngModel","disabled","ngModelChange"],["id","documentation"],["header","ToggleSwitchComponent","subheader","class","id","ToggleSwitchComponent",1,"mb-5",2,"display","block"],[1,"mb-3"],[1,"table","mb-5","table--zebra","table--compact","table--responsive-scroll"],["fds-tooltip","Property name when referencing the component in TypeScript"],["fds-tooltip","Attribute to use on the component"],["fds-tooltip","Property type(s)"],["fds-tooltip","Default value of the property"]],template:function(o,g){1&o&&(e._UZ(0,"app-header",0),e.TgZ(1,"app-demo-view")(2,"fds-toggle-switch",1),e.NdJ("ngModelChange",function(s){return g.value1=s}),e._uU(3,"Check me"),e.qZA()(),e.TgZ(4,"code",2),e._uU(5,'\n<fds-toggle-switch\xa0[(ngModel)]="value1">Check\xa0me</fds-toggle-switch>'),e._UZ(6,"br"),e.qZA(),e.TgZ(7,"app-demo-view")(8,"fds-toggle-switch",3),e.NdJ("ngModelChange",function(s){return g.value2=s}),e._uU(9," Check me "),e.qZA()(),e.TgZ(10,"code",2),e._uU(11,'\n<fds-toggle-switch\xa0[(ngModel)]="value2"\xa0[disabled]="true">'),e._UZ(12,"br"),e._uU(13,"\n\xa0\xa0Check\xa0me"),e._UZ(14,"br"),e._uU(15,"\n</fds-toggle-switch>"),e._UZ(16,"br"),e.qZA(),e.TgZ(17,"app-doc-view"),e._UZ(18,"hr"),e.TgZ(19,"h2",4),e._uU(20,"Documentation"),e.qZA(),e.TgZ(21,"fds-card",5)(22,"fds-card-content")(23,"div",6)(24,"b"),e._uU(25,"Properties"),e.qZA()(),e.TgZ(26,"table",7)(27,"tr")(28,"th",8),e._uU(29,"Name"),e.qZA(),e.TgZ(30,"th",9),e._uU(31,"Attribute"),e.qZA(),e.TgZ(32,"th",10),e._uU(33,"Type"),e.qZA(),e.TgZ(34,"th",11),e._uU(35,"Default Value"),e.qZA()(),e.TgZ(36,"tr")(37,"td"),e._uU(38,"disabled"),e.qZA(),e.TgZ(39,"td"),e._uU(40,"disabled"),e.qZA(),e.TgZ(41,"td"),e._uU(42,"boolean"),e.qZA(),e.TgZ(43,"td"),e._uU(44,"false"),e.qZA()(),e.TgZ(45,"tr")(46,"td"),e._uU(47,"value"),e.qZA(),e.TgZ(48,"td"),e._uU(49,"value"),e.qZA(),e.TgZ(50,"td"),e._uU(51,"boolean"),e.qZA(),e.TgZ(52,"td"),e._uU(53,"(calculated value)"),e.qZA()()()()()()),2&o&&(e.xp6(2),e.Q6J("ngModel",g.value1),e.xp6(6),e.Q6J("ngModel",g.value2)("disabled",!0))},dependencies:[a.JJ,a.On,p.W,m.Z,T.G,v,C.A,w.g]}),t})()}];let c=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[i.Bz.forChild(A),i.Bz]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c,h.ez,a.u5,r.$,u.bx,u.qe]}),t})()}}]);