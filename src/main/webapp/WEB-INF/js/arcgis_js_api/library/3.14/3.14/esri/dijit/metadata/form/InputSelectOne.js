// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.14/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/form/templates/InputSelectOne.html":'\x3cdiv class\x3d"gxeInput gxeInputSelectOne"\x3e\r\n  \x3cselect class\x3d"gxeEditOnly" data-dojo-attach-point\x3d"focusNode"\r\n    data-dojo-attach-event\x3d"onchange: _onChange"\x3e\x3c/select\x3e\r\n  \x3cinput class\x3d"gxeEditOnly" type\x3d"text" style\x3d"display:none;"\r\n    data-dojo-attach-point\x3d"otherNode"\r\n    data-dojo-attach-event\x3d"onchange: _onOtherChange, onkeyup: _onOtherKeyup"/\x3e\r\n  \x3cdiv class\x3d"gxeViewOnlyText gxeViewOnly" data-dojo-attach-point\x3d"viewOnlyNode"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"containerNode" style\x3d"display:none;"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/form/InputSelectOne","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/dom-style dojo/has ../base/InputBase ../base/OptionsMixin dojo/text!./templates/InputSelectOne.html ../../../kernel".split(" "),function(d,e,f,k,c,l,m,n,p,q){d=d([m,n],{allInline:!1,_wasValueSet:!1,templateString:p,postCreate:function(){this.inherited(arguments)},startup:function(){this._started||(this.inherited(arguments),this.initializeOptions())},connectXNode:function(a,
b){this.inherited(arguments);var h=a.value;(!b||a.fixed)&&"undefined"!==typeof h&&null!==h&&this.setInputValue(h);try{this.allInline&&!b&&a.containerNode&&a.elementHeader&&a.elementHeader.labelNode?(c.set(a.containerNode,"display","inline-block"),c.set(a.elementHeader.domNode,"display","inline-block"),c.set(a.elementHeader.labelNode,"display","inline-block"),c.set(this.domNode,"display","inline-block")):this.allInline&&!b&&a.containerNode&&a.headerNode&&a.labelNode?(c.set(a.containerNode,"display",
"inline-block"),c.set(a.headerNode,"display","inline-block"),c.set(a.labelNode,"display","inline-block"),c.set(this.domNode,"display","inline-block")):this.allInline&&(!b&&a.containerNode&&a.labelNode)&&(c.set(a.containerNode,"display","inline-block"),c.set(a.labelNode,"display","inline-block"),c.set(this.domNode,"display","inline-block"))}catch(g){}},filterOptions:function(a){var b=null;if(!this.parentXNode)return a;if(!this.parentXNode.optionsFilter)return this.parentXNode.gxeDocument&&this.parentXNode.gxeDocument.documentType&&
(b=this.parentXNode.gxeDocument.documentType),b.filterOptions&&"function"===typeof b.filterOptions?b.filterOptions(this.parentXNode,this.parentXNode.gxeDocument,a):a;var c=this.parentXNode.optionsFilter.split(",");return f.filter(a,function(a){return f.some(c,function(b){return a.value===b})})},getDisplayValue:function(){if(this.parentXNode&&(this.parentXNode.gxeDocument&&this.parentXNode.gxeDocument.isViewOnly)&&!this._wasValueSet)return null;var a=this.focusNode,b=this._getSelectedOption();return b&&
!b.xtnIsOther?a.options[a.selectedIndex].label:b&&b.xtnIsOther?this.otherNode.value:null},getInputValue:function(){if(this.parentXNode&&(this.parentXNode.gxeDocument&&this.parentXNode.gxeDocument.isViewOnly)&&!this._wasValueSet)return null;var a=this.focusNode,b=this._getSelectedOption();return b&&!b.xtnIsOther?a.options[a.selectedIndex].value:b&&b.xtnIsOther?this.otherNode.value:null},initializeOptions:function(){this.fetchOptionWidgets().then(e.hitch(this,function(a){a=this.filterOptions(a);this.populateOptions(a)}),
e.hitch(this,function(a){console.error(a)}),e.hitch(this,function(a){}))},_getSelectedOption:function(){if(!this.focusNode)return null;var a=this.focusNode.selectedIndex;return-1!==a?this.focusNode.options[a]:null},_onChange:function(a){(a=this._getSelectedOption())?a.xtnIsOther?c.set(this.otherNode,"display",""):c.set(this.otherNode,"display","none"):c.set(this.otherNode,"display","none");this.emitInteractionOccurred()},_onOtherChange:function(a){this.emitInteractionOccurred()},_onOtherKeyup:function(a){this.emitInteractionOccurred()},
populateOptions:function(a){var b=this.focusNode.options,c=!1;f.forEach(a,function(a){var g=null,d=!1,e=!1;!c&&a.selected&&(c=d=e=!0);try{g=new Option(a.label,a.value,d,e),a.isOther&&(g.xtnIsOther=!0),b.add(g)}catch(f){console.error(f)}});var g=this.containerNode;this.destroyDescendants(!1);setTimeout(function(){k.destroy(g)},5E3)},setInputValue:function(a){this._wasValueSet=!0;"undefined"===typeof a&&(a=null);var b=-1,d=-1;f.some(this.focusNode.options,function(c,e){if(c.xtnIsOther)d=e;else if(c.value===
a)return b=e,!0});-1===b&&-1!==d?(this.focusNode.selectedIndex=d,this.otherNode.value=a,c.set(this.otherNode,"display","")):(-1!==b&&(this.focusNode.selectedIndex=b),c.set(this.otherNode,"display","none"));this.applyViewOnly()}});l("extend-esri")&&e.setObject("dijit.metadata.form.InputSelectOne",d,q);return d});