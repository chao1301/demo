// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.14/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/editor/util/TransformDialog","dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/dom-construct dojo/has dijit/_WidgetBase dojo/i18n!../../nls/i18nBase dijit/Dialog ./OkCancelBar ./TransformPane ../../../../kernel".split(" "),function(a,b,g,d,e,f,h,k,l,m,n){a=a([f],{dialog:null,dialogTitle:h.editor.transform.dialogTitle,documentTypes:null,editor:null,okCancelBar:null,prompt:null,postCreate:function(){this.inherited(arguments)},onSelect:function(b,a){},show:function(){var a=
d.create("div",{}),e=new m({editor:this.editor,dialogBroker:this,documentTypes:this.documentTypes,prompt:this.prompt,onSelect:b.hitch(this,function(a,b,c){if(this.dialog)this.onSelect(this.dialog,a,b,c)})},d.create("div",{},a)),f=this.okCancelBar=new l({showOk:!1,onCancelClick:b.hitch(this,function(){this.dialog&&this.dialog.hide()})},d.create("div",{},a)),c=this.dialog=new k({"class":"gxeDialog  gxePopupDialog",title:this.dialogTitle,content:a,autofocus:!1});this.isLeftToRight()||g.add(c.domNode,
"gxeRtl");this.own(c.on("hide",b.hitch(this,function(){setTimeout(b.hitch(this,function(){e.destroyRecursive(!1);f.destroyRecursive(!1);c.destroyRecursive(!1);this.destroyRecursive(!1)}),300)})));c.show()}});e("extend-esri")&&b.setObject("dijit.metadata.editor.util.TransformDialog",a,n);return a});