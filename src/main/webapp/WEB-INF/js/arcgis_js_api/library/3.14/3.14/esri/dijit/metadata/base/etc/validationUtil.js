// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.14/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/base/etc/validationUtil",["dojo/_base/lang","dojo/_base/array","dojo/has","dojo/i18n!../../nls/i18nBase","../../../../kernel"],function(g,l,n,f,p){var m={formatMessage:function(a,b){var c=a.label,e=null,d,h=f.validation.pattern,k=f.validation.patternWithHint;!a.isValid&&a.considerHint&&(d=a.inputWidget.hint,"undefined"!==typeof d&&null!==d&&(d=g.trim(d),0<d.length&&(e=d)));return null!=e?k.replace("{label}",c).replace("{message}",b).replace("{hint}",e):h.replace("{label}",
c).replace("{message}",b)},validateValue:function(a,b){a.isValid=!0;a.message=this.formatMessage(a,f.validation.ok);a._continue=!0;this._checkEmpty(a,b);a.isValid&&a._continue&&(this._checkAlternates(a,b),a.isValid&&a._continue&&(a.considerHint=!0,a.inputWidget._isGxeInputNumber?this._checkNumber(a,b):a.inputWidget._isFgdcInputDate?this._checkFgdcDate(a,b):a.inputWidget._isFgdcInputTime?this._checkFgdcTime(a,b):a.inputWidget._isGxeInputDate&&(a.inputWidget.forceTime?this._checkDateTime(a,b):a.inputWidget.allowTime&&
-1!==b.indexOf("T")?this._checkDateTime(a,b):this._checkDate(a,b))))},_checkAlternates:function(a,b){var c;if((c=a.xnodeWidget.alternateValues)&&c.push&&0<c.length)if(c=l.some(c,function(a){return a===b}))a._continue=!1},_checkDate:function(a,b){var c=!1,e=/^(\d{2})$/,d=b.split("-");/^(\d{4})$/.test(d[0])&&(1<d.length?e.test(d[1])&&(2<d.length?3==d.length&&("Z"===d[2].charAt(d[2].length-1)&&(d[2]=d[2].substring(0,d[2].length-1)),e.test(d[2])&&(c=!0)):c=!0):c=!0);c||(a.isValid=!1,a.message=this.formatMessage(a,
f.validation.date))},_checkDateTime:function(a,b){/^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[0-1]|0[1-9]|[1-2][0-9])T(2[0-3]|[0-1][0-9]):([0-5][0-9]):([0-5][0-9])(\.[0-9]+)?(Z|[+-](?:2[0-3]|[0-1][0-9]):[0-5][0-9])?$/.test(b)||(a.isValid=!1,a.message=this.formatMessage(a,f.validation.other))},_checkEmpty:function(a,b){var c=a.isRequired,e=a.xnodeWidget.serializeIfEmpty,d=null===b;null!=b&&("string"===typeof b?d=a.xnodeWidget.trim?0===g.trim(b).length:0===b.length:b.push&&(d=0===b.length));d&&
(c?e?a._continue=!1:(this._checkIndeterminates(a,b),a._continue&&(a.isValid=!1,a.message=this.formatMessage(a,f.validation.empty))):a._continue=!1)},_checkFgdcDate:function(a,b){var c=!1;0===b.indexOf("-")&&(c=!0);var e=b.replace(/-/g,"");c&&(e="-"+e);/^\d{4}(\d{2}(\d{2})?)?$/.test(e)||(a.isValid=!1,a.message=this.formatMessage(a,f.validation.date))},_checkFgdcTime:function(a,b){var c=b.replace(/:/g,""),c=c.replace(/\./g,""),e=/^\d{2}(\d{2}(\d{2,})?)?[+\-]\d{4}$/,d=/^\d{2}(\d{2}(\d{2,})?)?Z$/;!/^\d{2}(\d{2}(\d{2,})?)?$/.test(c)&&
(!e.test(c)&&!d.test(c))&&(a.isValid=!1,a.message=this.formatMessage(a,f.validation.other))},_checkIndeterminates:function(a,b){if(a.xnodeWidget._isGxeElement){var c=a.xnodeWidget.target,e,d=null;if("gml:beginPosition"===c||"gml:endPosition"===c)d=a.xnodeWidget.findAttributes(),l.some(d,function(b){if("indeterminatePosition"===b.target){if(!b._isOptionallyOff&&b.inputWidget&&(e=b.inputWidget.getInputValue(),"unknown"===e||"now"===e))a._continue=!1;return!0}})}},_checkNumber:function(a,b){var c,e=
a.inputWidget,d=e.minValue,h=e.maxValue;if(e.integerOnly){if(c=/(^-?\d\d*$)/,!c.test(b)){a.isValid=!1;a.message=this.formatMessage(a,f.validation.integer);return}}else c=/(^-?\d\d*\.\d*$)|(^-?\d\d*$)|(^-?\.\d\d*$)/,c.test(b)||(a.isValid=!1,a.message=this.formatMessage(a,f.validation.number));if(!(null===d&&null===h)){c=Number(b);var k=!0,g=!0;null!=d&&(k=e.minValueIsExclusive?c>d:c>=d);null!=h&&(g=e.maxValueIsExclusive?c<h:c<=h);if(!k||!g)a.isValid=!1,a.message=this.formatMessage(a,f.validation.other)}}};
n("extend-esri")&&g.setObject("dijit.metadata.base.etc.validationUtil",m,p);return m});