"use strict";(self.webpackChunkdemo_project=self.webpackChunkdemo_project||[]).push([[576],{2576:(P,a,p)=>{p.r(a),p.d(a,{NgfdsPageModule:()=>S,NgfdsRoutingModule:()=>m});var u=p(6895),l=p(433),g=p(9199),n=p(8256);let h=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[u.ez]}),o})();var f=p(2201),w=p(3869),U=p(7954),Z=p(4772),O=p(1854),x=p(2726);const C=["formControl"];function v(o,d){if(1&o&&(n.ynx(0),n._uU(1),n.BQk()),2&o){const e=n.oxw();n.xp6(1),n.Oqu(e.placeholder)}}function b(o,d){if(1&o&&n._uU(0),2&o){const e=n.oxw();n.hij(" ",e.selectedItem.text,"\n")}}function I(o,d){if(1&o){const e=n.EpF();n.ynx(0),n.TgZ(1,"button",8),n.NdJ("click",function(s){const r=n.CHM(e).$implicit,c=n.oxw(2);return n.KtG(c.unselectItem(s,r))})("keydown.enter",function(s){const r=n.CHM(e).$implicit,c=n.oxw(2);return n.KtG(c.unselectItem(s,r))}),n.TgZ(2,"span",9),n._uU(3,"Frav\xe6lg"),n.qZA(),n._uU(4),n.O4$(),n.TgZ(5,"svg",10),n._UZ(6,"use",11),n.qZA()(),n.BQk()}if(2&o){const e=d.$implicit;n.xp6(4),n.hij(" ",e.text," ")}}function D(o,d){if(1&o&&n.YNc(0,I,7,1,"ng-container",7),2&o){const e=n.oxw();n.Q6J("ngForOf",e.selectedItems)}}const _=function(o){return{open:o}},T=["*"];let A=(()=>{class o extends x.G{constructor(e){super(),this.el=e,this.placeholder=null,this.disabled=!1,this.isOpen=!1,this.min=-1,this.max=-1,this.allowMultiple=!1,this._selectedItems=[],this.options=[]}get selectedItem(){return this.allowMultiple&&console.warn("Select allows for multiple items to be selected. This property only returns the first selected item. Use: selectedItems for an array of selected items."),0===this.selectedItems.length?null:this.selectedItems[0]}set selectedItem(e){this.selectedItems=e?[e]:[]}get selectedItems(){return this._selectedItems}set selectedItems(e){this._selectedItems=e,this.emitNgModelChanged()}setValue(e){Array.isArray(e)?this.selectedItems=e??null:this.selectedItem=e??null}emitNgModelChanged(){for(const e of this.options)e.isSelected=-1!==this.selectedItems.indexOf(e)}registerOption(e){this.options.push(e)}unregisterOption(e){const t=this.options.indexOf(e);-1!==t&&this.options.splice(t,1)}openDropdown(e){this.preventDefault(e),this.isOpen=!0,null===this.selectedItem?0!==this.options.length&&this.options[0].setFocus():this.selectedItem.setFocus()}toggleDropdown(e){e.defaultPrevented||(this.isOpen?this.closeDropdown(e):this.openDropdown(e))}closeDropdown(e){this.preventDefault(e),this.isOpen=!1}preventDefault(e){e.preventDefault(),e.stopPropagation()}globalClickHandler(e,t){t&&(this.formControl.nativeElement.contains(t)||this.closeDropdown(e))}globalKeydownHandler(e){setTimeout(()=>{if(!1===this.isOpen||"tab"!==e.key.toLowerCase())return;const t=document.activeElement;this.formControl.nativeElement.contains(t)||this.closeDropdown(e)})}focusPreviousItem(e){this.preventDefault(e);const t=this.getItemIndexWithFocus();-1===t||0===t?this.options[this.options.length-1].setFocus():this.options[t-1].setFocus()}getItemIndexWithFocus(){const e=this.options.map((s,i)=>s.hasFocus()?i:-1);return Math.max(...e)}focusNextItem(e){this.preventDefault(e);let t=this.getItemIndexWithFocus();t=t===this.options.length-1?-1:t,this.options[t+1].setFocus()}toggleItemSelected(e,t){(this.allowMultiple?-1!==this.selectedItems.indexOf(t):this.selectedItem===t)?this.unselectItem(e,t):this.selectItem(e,t),this.emitNgModelChanged()}selectItem(e,t){this.allowMultiple?-1===this.selectedItems.indexOf(t)&&this.selectedItems.push(t):(this.selectedItem=t,this.closeDropdown(e)),this.emitNgModelChanged()}unselectItem(e,t){if(e.stopPropagation(),this.allowMultiple){const s=this.selectedItems.indexOf(t);-1!==s&&this.selectedItems.splice(s,1)}else this.selectedItem=null;this.emitNgModelChanged()}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(n.SBq))},o.\u0275cmp=n.Xpm({type:o,selectors:[["ngfds-select"]],viewQuery:function(e,t){if(1&e&&n.Gf(C,5),2&e){let s;n.iGM(s=n.CRH())&&(t.formControl=s.first)}},hostBindings:function(e,t){1&e&&n.NdJ("click",function(i){return t.globalClickHandler(i,i.target)},!1,n.evT)("keydown",function(i){return t.globalKeydownHandler(i)},!1,n.evT)},inputs:{placeholder:"placeholder",disabled:"disabled",isOpen:"isOpen",min:"min",max:"max",allowMultiple:["allow-multiple","allowMultiple"]},features:[n._Bn([...O.m.formInput(o)]),n.qOj],ngContentSelectors:T,decls:10,vars:8,consts:[["tabindex","0",1,"form-select","multi",3,"ngClass","click","keydown.enter","keydown.space","keydown.arrowup","keydown.arrowdown"],["formControl",""],[4,"ngIf","ngIfElse"],[1,"dropdown-wrapper",3,"clickOutside"],[1,"dropdown-list",3,"ngClass"],["showSelectedItem",""],["showSelectedItems",""],[4,"ngFor","ngForOf"],[1,"tag","tag-icon",3,"click","keydown.enter"],[1,"sr-only"],["aria-hidden","true",1,"icon-svg"],[0,"xlink","href","#close"]],template:function(e,t){if(1&e&&(n.F$t(),n.TgZ(0,"div",0,1),n.NdJ("click",function(i){return t.toggleDropdown(i)})("keydown.enter",function(i){return t.openDropdown(i)})("keydown.space",function(i){return t.openDropdown(i)})("keydown.arrowup",function(i){return t.focusPreviousItem(i)})("keydown.arrowdown",function(i){return t.focusNextItem(i)}),n.YNc(2,v,2,1,"ng-container",2),n.TgZ(3,"div",3),n.NdJ("clickOutside",function(i){return t.closeDropdown(i)}),n.TgZ(4,"div",4),n.Hsn(5),n.qZA()()(),n.YNc(6,b,1,1,"ng-template",null,5,n.W1O),n.YNc(8,D,1,1,"ng-template",null,6,n.W1O)),2&e){const s=n.MAs(7),i=n.MAs(9);n.Q6J("ngClass",n.VKq(4,_,t.isOpen)),n.xp6(2),n.Q6J("ngIf",0===t.selectedItems.length)("ngIfElse",t.allowMultiple?i:s),n.xp6(2),n.Q6J("ngClass",n.VKq(6,_,t.isOpen))}},dependencies:[u.mk,u.sg,u.O5],encapsulation:2}),o})();const y=["dropdownOption"];function M(o,d){if(1&o&&(n.TgZ(0,"div",6),n._UZ(1,"input",7)(2,"label",8),n.qZA()),2&o){const e=n.oxw();n.xp6(1),n.Q6J("checked",e.isSelected)}}function k(o,d){if(1&o&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&o){const e=n.oxw();n.xp6(1),n.Oqu(e.text)}}const N=["*"];let F=(()=>{class o{constructor(e){this.parent=e,this.text="",this.parentAllowsMultiple=!1,this.isSelected=!1}ngOnInit(){this.parent?.registerOption(this)}setFocus(){this.dropdownOption.nativeElement.focus()}hasFocus(){return document.activeElement===this.dropdownOption.nativeElement}preventDefaultAndForwardEvent(e,t){e.preventDefault(),e.stopPropagation(),t.bind(this.parent)(e,this)}toggleSelected(e){this.preventDefaultAndForwardEvent(e,this.parent.toggleItemSelected)}select(e){this.preventDefaultAndForwardEvent(e,this.parent.selectItem)}unselect(e){this.preventDefaultAndForwardEvent(e,this.parent.unselectItem)}ngOnDestroy(){this.parent?.unregisterOption(this)}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(A,8))},o.\u0275cmp=n.Xpm({type:o,selectors:[["ngfds-option"]],viewQuery:function(e,t){if(1&e&&n.Gf(y,5),2&e){let s;n.iGM(s=n.CRH())&&(t.dropdownOption=s.first)}},inputs:{text:"text"},ngContentSelectors:N,decls:7,vars:2,consts:[["tabindex","0",1,"dropdown-option",3,"click","keydown.enter"],["dropdownOption",""],["style","display: inline-block",4,"ngIf"],[2,"display","inline-block","margin-top","-1px"],["content",""],[4,"ngIf"],[2,"display","inline-block"],["type","checkbox","tabindex","-1",1,"form-checkbox",3,"checked"],["tabindex","-1"]],template:function(e,t){if(1&e&&(n.F$t(),n.TgZ(0,"div",0,1),n.NdJ("click",function(i){return t.toggleSelected(i)})("keydown.enter",function(i){return t.toggleSelected(i)}),n.YNc(2,M,3,1,"div",2),n.TgZ(3,"div",3,4),n.Hsn(5),n.qZA(),n.YNc(6,k,2,1,"span",5),n.qZA()),2&e){const s=n.MAs(4);n.xp6(2),n.Q6J("ngIf",t.parent&&t.parent.allowMultiple),n.xp6(4),n.Q6J("ngIf",!s.children.length&&0===s.innerText.length)}},dependencies:[u.O5]}),o})();var q=p(7889);const J=[{path:"dropdown",component:(()=>{class o{alert(e){window.alert(e)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-ngfds-dropdown-page"]],decls:154,vars:13,consts:[["header","Dropdown","sub-header","Component"],["href","https://designsystem.dk/komponenter/dropdown/","target","_blank"],["icon","open-in-new"],[3,"ngModel","ngModelChange"],["text","Option #1"],["text","Option #2"],["text","Option #3"],["text","Option #4"],[1,"my-3"],["ng-non-bindable",""],["placeholder","Choose one",3,"ngModel","ngModelChange"],["icon","face"],["icon","support-agent"],["icon","drive-eta"],["icon","accessibility-new"],["placeholder","Choose one or more",3,"ngModel","allow-multiple","ngModelChange"],["text","Option #5"],["text","Option #6"],["text","Option #7"],["text","Option #8"],["text","Option #9"]],template:function(e,t){1&e&&(n._UZ(0,"app-header",0),n.TgZ(1,"p"),n._uU(2," This dropdown allows for custom option-visual (with icons and more) and for more than 1 item to be selected. The visual of this dropdown is based on the description FDS has provided for a multi-select-dropdown "),n.TgZ(3,"a",1),n._uU(4,"here "),n._UZ(5,"fds-icon",2),n.qZA()(),n.TgZ(6,"app-demo-view")(7,"ngfds-select",3),n.NdJ("ngModelChange",function(i){return t.dropdown1=i}),n._UZ(8,"ngfds-option",4)(9,"ngfds-option",5)(10,"ngfds-option",6)(11,"ngfds-option",7),n.qZA(),n.TgZ(12,"div",8),n._uU(13),n.ALo(14,"json"),n.qZA()(),n.TgZ(15,"code",9),n._uU(16,'\n<ngfds-select\xa0[(ngModel)]="dropdown1">'),n._UZ(17,"br"),n._uU(18,'\n\xa0\xa0<ngfds-option\xa0text="Option\xa0#1"></ngfds-option>'),n._UZ(19,"br"),n._uU(20,'\n\xa0\xa0<ngfds-option\xa0text="Option\xa0#2"></ngfds-option>'),n._UZ(21,"br"),n._uU(22,'\n\xa0\xa0<ngfds-option\xa0text="Option\xa0#3"></ngfds-option>'),n._UZ(23,"br"),n._uU(24,'\n\xa0\xa0<ngfds-option\xa0text="Option\xa0#4"></ngfds-option>'),n._UZ(25,"br"),n._uU(26,"\n</ngfds-select>"),n._UZ(27,"br"),n._uU(28,'\n<div\xa0class="my-3">'),n._UZ(29,"br"),n._uU(30,"\n\xa0\xa0{\xa0{\xa0\xa0dropdown1\xa0|\xa0json\xa0\xa0}\xa0}"),n._UZ(31,"br"),n._uU(32,"\n</div>"),n._UZ(33,"br"),n.qZA(),n.TgZ(34,"app-demo-view")(35,"ngfds-select",10),n.NdJ("ngModelChange",function(i){return t.dropdown2=i}),n.TgZ(36,"ngfds-option",4),n._UZ(37,"fds-icon",11),n._uU(38," Option #1 "),n.qZA(),n.TgZ(39,"ngfds-option",5),n._UZ(40,"fds-icon",12),n._uU(41," Option #2 "),n.qZA(),n.TgZ(42,"ngfds-option",6),n._UZ(43,"fds-icon",13),n._uU(44," Option #3 "),n.qZA(),n.TgZ(45,"ngfds-option",7),n._UZ(46,"fds-icon",14),n._uU(47," Option #4 "),n.qZA()(),n.TgZ(48,"div",8),n._uU(49),n.ALo(50,"json"),n.qZA()(),n.TgZ(51,"code",9),n._uU(52,'\n<ngfds-select\xa0[(ngModel)]="dropdown2"\xa0placeholder="Choose\xa0one">'),n._UZ(53,"br"),n._uU(54,'\n\xa0\xa0<ngfds-option\xa0text="Option\xa0#1">'),n._UZ(55,"br"),n._uU(56,'\n\xa0\xa0\xa0\xa0<fds-icon\xa0icon="face"></fds-icon>'),n._UZ(57,"br"),n._uU(58,"\n\xa0\xa0\xa0\xa0Option\xa0#1"),n._UZ(59,"br"),n._uU(60,"\n\xa0\xa0</ngfds-option>"),n._UZ(61,"br"),n._uU(62,'\n\xa0\xa0<ngfds-option\xa0text="Option\xa0#2">'),n._UZ(63,"br"),n._uU(64,'\n\xa0\xa0\xa0\xa0<fds-icon\xa0icon="support-agent"></fds-icon>'),n._UZ(65,"br"),n._uU(66,"\n\xa0\xa0\xa0\xa0Option\xa0#2"),n._UZ(67,"br"),n._uU(68,"\n\xa0\xa0</ngfds-option>"),n._UZ(69,"br"),n._uU(70,'\n\xa0\xa0<ngfds-option\xa0text="Option\xa0#3">'),n._UZ(71,"br"),n._uU(72,'\n\xa0\xa0\xa0\xa0<fds-icon\xa0icon="drive-eta"></fds-icon>'),n._UZ(73,"br"),n._uU(74,"\n\xa0\xa0\xa0\xa0Option\xa0#3"),n._UZ(75,"br"),n._uU(76,"\n\xa0\xa0</ngfds-option>"),n._UZ(77,"br"),n._uU(78,'\n\xa0\xa0<ngfds-option\xa0text="Option\xa0#4">'),n._UZ(79,"br"),n._uU(80,'\n\xa0\xa0\xa0\xa0<fds-icon\xa0icon="accessibility-new"></fds-icon>'),n._UZ(81,"br"),n._uU(82,"\n\xa0\xa0\xa0\xa0Option\xa0#4"),n._UZ(83,"br"),n._uU(84,"\n\xa0\xa0</ngfds-option>"),n._UZ(85,"br"),n._uU(86,"\n</ngfds-select>"),n._UZ(87,"br"),n._uU(88,'\n<div\xa0class="my-3">'),n._UZ(89,"br"),n._uU(90,"\n\xa0\xa0{\xa0{\xa0\xa0dropdown2\xa0|\xa0json\xa0\xa0}\xa0}"),n._UZ(91,"br"),n._uU(92,"\n</div>"),n._UZ(93,"br"),n.qZA(),n.TgZ(94,"app-demo-view")(95,"ngfds-select",15),n.NdJ("ngModelChange",function(i){return t.dropdown3=i}),n.TgZ(96,"ngfds-option",4),n._uU(97,"Option #1"),n.qZA(),n.TgZ(98,"ngfds-option",5),n._uU(99,"Option #2"),n.qZA(),n.TgZ(100,"ngfds-option",6),n._uU(101,"Option #3"),n.qZA(),n.TgZ(102,"ngfds-option",7),n._uU(103,"Option #4"),n.qZA(),n.TgZ(104,"ngfds-option",16),n._uU(105,"Option #5"),n.qZA(),n.TgZ(106,"ngfds-option",17),n._uU(107,"Option #6"),n.qZA(),n.TgZ(108,"ngfds-option",18),n._uU(109,"Option #7"),n.qZA(),n.TgZ(110,"ngfds-option",19),n._uU(111,"Option #8"),n.qZA(),n.TgZ(112,"ngfds-option",20),n._uU(113,"Option #9"),n.qZA()(),n.TgZ(114,"div",8),n._uU(115),n.ALo(116,"json"),n.qZA()(),n.TgZ(117,"code",9),n._uU(118,"\n<ngfds-select"),n._UZ(119,"br"),n._uU(120,'\n\xa0\xa0[(ngModel)]="dropdown3"'),n._UZ(121,"br"),n._uU(122,'\n\xa0\xa0placeholder="Choose\xa0one\xa0or\xa0more"'),n._UZ(123,"br"),n._uU(124,'\n\xa0\xa0[allow-multiple]="true"'),n._UZ(125,"br"),n._uU(126,"\n>"),n._UZ(127,"br"),n._uU(128,'\n\xa0\xa0<ngfds-option\xa0text="Option\xa0#1">Option\xa0#1</ngfds-option>'),n._UZ(129,"br"),n._uU(130,'\n\xa0\xa0<ngfds-option\xa0text="Option\xa0#2">Option\xa0#2</ngfds-option>'),n._UZ(131,"br"),n._uU(132,'\n\xa0\xa0<ngfds-option\xa0text="Option\xa0#3">Option\xa0#3</ngfds-option>'),n._UZ(133,"br"),n._uU(134,'\n\xa0\xa0<ngfds-option\xa0text="Option\xa0#4">Option\xa0#4</ngfds-option>'),n._UZ(135,"br"),n._uU(136,'\n\xa0\xa0<ngfds-option\xa0text="Option\xa0#5">Option\xa0#5</ngfds-option>'),n._UZ(137,"br"),n._uU(138,'\n\xa0\xa0<ngfds-option\xa0text="Option\xa0#6">Option\xa0#6</ngfds-option>'),n._UZ(139,"br"),n._uU(140,'\n\xa0\xa0<ngfds-option\xa0text="Option\xa0#7">Option\xa0#7</ngfds-option>'),n._UZ(141,"br"),n._uU(142,'\n\xa0\xa0<ngfds-option\xa0text="Option\xa0#8">Option\xa0#8</ngfds-option>'),n._UZ(143,"br"),n._uU(144,'\n\xa0\xa0<ngfds-option\xa0text="Option\xa0#9">Option\xa0#9</ngfds-option>'),n._UZ(145,"br"),n._uU(146,"\n</ngfds-select>"),n._UZ(147,"br"),n._uU(148,'\n<div\xa0class="my-3">'),n._UZ(149,"br"),n._uU(150,"\n\xa0\xa0{\xa0{\xa0\xa0dropdown3\xa0|\xa0json\xa0\xa0}\xa0}"),n._UZ(151,"br"),n._uU(152,"\n</div>"),n._UZ(153,"br"),n.qZA()),2&e&&(n.xp6(7),n.Q6J("ngModel",t.dropdown1),n.xp6(6),n.hij(" ",n.lcZ(14,7,t.dropdown1)," "),n.xp6(22),n.Q6J("ngModel",t.dropdown2),n.xp6(14),n.hij(" ",n.lcZ(50,9,t.dropdown2)," "),n.xp6(46),n.Q6J("ngModel",t.dropdown3)("allow-multiple",!0),n.xp6(20),n.hij(" ",n.lcZ(116,11,t.dropdown3)," "))},dependencies:[l.JJ,l.On,U.W,Z.G,A,F,q.o,u.Ts]}),o})()}];let m=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[g.Bz.forChild(J),g.Bz]}),o})(),S=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[m,u.ez,l.u5,w.$,h,f.qe,f.AG]}),o})()}}]);