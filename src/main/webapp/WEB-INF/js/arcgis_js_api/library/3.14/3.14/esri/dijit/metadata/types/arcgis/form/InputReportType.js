// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.14/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/form/InputReportType","dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/has ../../../../../kernel ../../../base/etc/docUtil ./InputSelectCode".split(" "),function(a,e,d,f,g,h,k){a=a([k],{postCreate:function(){this.inherited(arguments)},emitInteractionOccurred:function(b){this.inherited(arguments);try{var c=this.parentXNode.gxeDocument;!c.isViewOnly&&c.isAgsFGDC&&this._updateEvalMethod()}catch(a){console.error(a)}},_updateEvalMethod:function(){var b=this.getInputValue(),
c=h.findInputWidget("/metadata/dqInfo/report/evalMethDesc",this.parentXNode.parentElement.domNode),a=!1;if("DQAbsExtPosAcc"===b||"DQQuanAttAcc"===b)a=!0;c&&(b=c.parentXNode.labelNode,a?(c.parentXNode.minOccurs=1,d.remove(b,"gxeOptionalLabel"),d.add(b,"gxeMandatoryLabel")):(c.parentXNode.minOccurs=0,d.remove(b,"gxeMandatoryLabel"),d.add(b,"gxeOptionalLabel")),c.emitInteractionOccurred())}});f("extend-esri")&&e.setObject("dijit.metadata.types.arcgis.form.InputReportType",a,g);return a});