// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.14/esri/copyright.txt for details.
//>>built
define("esri/arcgis/csv","dojo/_base/lang dojo/_base/array dojo/_base/Deferred dojo/sniff dojo/number dojox/data/CsvStore ../kernel ../config ../request ../SpatialReference ../geometry/jsonUtils ../geometry/webMercatorUtils".split(" "),function(k,c,B,C,O,P,Q,D,R,s,E,F){function G(a){var b=0,d="";c.forEach([","," ",";","|","\t"],function(c){var g=a.split(c).length;g>b&&(b=g,d=c)});return d}function H(a,b){if(!a||"[object Date]"!==Object.prototype.toString.call(a)||isNaN(a.getTime()))return!1;var d=
!0;if(C("chrome")&&/\d+\W*$/.test(b)){var c=b.match(/[a-zA-Z]{2,}/);if(c){for(var d=!1,g=0,h=c.length,v=/^((jan(uary)?)|(feb(ruary)?)|(mar(ch)?)|(apr(il)?)|(may)|(jun(e)?)|(jul(y)?)|(aug(ust)?)|(sep(tember)?)|(oct(ober)?)|(nov(ember)?)|(dec(ember)?)|(am)|(pm)|(gmt)|(utc))$/i;!d&&g<=h&&!(d=!v.test(c[g]));)g++;d=!d}}return d}function I(a,b,d){var e=a.indexOf("\n"),e=k.trim(a.substr(0,e)),g=b.columnDelimiter;g||(g=G(e));var h=new P({data:a,separator:g});h.fetch({onComplete:function(a,g){var f=0,e={layerDefinition:b.layerDefinition,
featureSet:{features:[],geometryType:"esriGeometryPoint"}},z=e.layerDefinition.objectIdField,t=e.layerDefinition.fields;!z&&!c.some(t,function(a){return"esriFieldTypeOID"===a.type?(z=a.name,!0):!1})&&(t.push({name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1}),z="__OBJECTID");var m,n,q=h._attributes,s=[],u=[];c.forEach(t,function(a){"esriFieldTypeDate"===a.type?s.push(a.name):("esriFieldTypeDouble"===a.type||"esriFieldTypeInteger"===a.type)&&u.push(a.name)});b.locationInfo&&
"coordinates"===b.locationInfo.locationType?(m=b.locationInfo.latitudeFieldName,n=b.locationInfo.longitudeFieldName):c.forEach(q,function(a){var f;f=c.indexOf(J,a.toLowerCase());-1!==f&&(m=a);f=c.indexOf(K,a.toLowerCase());-1!==f&&(n=a)});if(!m||!n)setTimeout(function(){console.error("File does not seem to contain fields with point coordinates.")},1),d&&d(null,Error("File does not seem to contain fields with point coordinates."));else{-1===c.indexOf(u,m)&&u.push(m);-1===c.indexOf(u,n)&&u.push(n);
var r;k.isArray(b.outFields)&&-1===c.indexOf(b.outFields,"*")&&(r=b.outFields);c.forEach(q,function(a){c.some(t,function(f){return a===f.name})||t.push({name:a,alias:a,type:a===m||a===n?"esriFieldTypeDouble":"esriFieldTypeString"})});var q=0,y=a.length;for(q;q<y;q++){var w=a[q],x=h.getAttributes(w),p={};c.forEach(x,function(a){if(a&&(a===m||a===n||!r||-1<c.indexOf(r,a))){var f=a;0===a.length&&c.forEach(t,function(f,b){f.name==="attribute_"+(b-1)&&(a="attribute_"+(b-1))});if(-1<c.indexOf(s,a)){var f=
h.getValue(w,f),b=new Date(f);p[a]=H(b,f)?b.getTime():null}else if(-1<c.indexOf(u,a)){b=O.parse(h.getValue(w,f));if((a===m||a===n)&&(isNaN(b)||181<Math.abs(b)))b=parseFloat(h.getValue(w,f));isNaN(b)?p[a]=null:p[a]=b}else p[a]=h.getValue(w,f)}});p[z]=f;f++;var x=p[m],A=p[n];null==A||(null==x||isNaN(x)||isNaN(A))||(r&&-1===c.indexOf(r,m)&&delete p[m],r&&-1===c.indexOf(r,n)&&delete p[n],e.featureSet.features.push({geometry:{x:A,y:x,spatialReference:{wkid:4326}},attributes:p}))}e.layerDefinition.name=
"csv";d&&d(e)}},onError:function(a){console.error("Error fetching items from CSV store: ",a);d&&d(null,a)}});return!0}function y(a,b,d,e,g,h){0===a.length&&g(null);var v=E.getGeometryType(b),l=[];c.forEach(a,function(a){a=new v(a);a.spatialReference=d;l.push(a)},this);b=[102113,102100,3857];d.wkid&&4326===d.wkid&&e.wkid&&-1<c.indexOf(b,e.wkid)?(c.forEach(l,function(a){a.xmin?(a.xmin=Math.max(a.xmin,-180),a.xmax=Math.min(a.xmax,180),a.ymin=Math.max(a.ymin,-89.99),a.ymax=Math.min(a.ymax,89.99)):a.rings?
c.forEach(a.rings,function(a){c.forEach(a,function(a){a[0]=Math.min(Math.max(a[0],-180),180);a[1]=Math.min(Math.max(a[1],-89.99),89.99)},this)},this):a.paths?c.forEach(a.paths,function(a){c.forEach(a,function(a){a[0]=Math.min(Math.max(a[0],-180),180);a[1]=Math.min(Math.max(a[1],-89.99),89.99)},this)},this):a.x&&(a.x=Math.min(Math.max(a.x,-180),180),a.y=Math.min(Math.max(a.y,-89.99),89.99))},this),a=[],c.forEach(l,function(b){b=F.geographicToWebMercator(b);102100!==e.wkid&&(b.spatialReference=e);a.push(b.toJson())},
this),g(a)):null!==d.wkid&&-1<c.indexOf(b,d.wkid)&&null!==e.wkid&&4326===e.wkid?(a=[],c.forEach(l,function(b){a.push(F.webMercatorToGeographic(b).toJson())},this),g(a)):(b=function(b,d){b&&b.length===a.length?(a=[],c.forEach(b,function(b){b&&(b.rings&&0<b.rings.length&&0<b.rings[0].length&&0<b.rings[0][0].length&&!isNaN(b.rings[0][0][0])&&!isNaN(b.rings[0][0][1])||b.paths&&0<b.paths.length&&0<b.paths[0].length&&0<b.paths[0][0].length&&!isNaN(b.paths[0][0][0])&&!isNaN(b.paths[0][0][1])||b.xmin&&!isNaN(b.xmin)&&
b.ymin&&!isNaN(b.ymin)||b.x&&!isNaN(b.x)&&b.y&&!isNaN(b.y))?a.push(b.toJson()):a.push(null)},this),g(a)):h(b,d)},D.defaults.geometryService?D.defaults.geometryService.project(l,e,k.hitch(this,b),h):g(null))}function L(a,b){var d=[102113,102100,3857];return a&&b&&a.wkid===b.wkid&&a.wkt===b.wkt||a&&b&&a.wkid&&b.wkid&&-1<c.indexOf(d,a.wkid)&&-1<c.indexOf(d,b.wkid)?!0:!1}function M(a,b,d,e){if(a.featureSet&&0!==a.featureSet.features.length)if(L(d,b))e(a);else{var g,h=function(b){var d=[];c.forEach(a.featureSet.features,
function(a,c){b[c]&&(a.geometry=b[c],d.push(a))},this);e(a)},v=function(b,c){console.error("error projecting featureSet ("+a.layerDefinition.name+"). Final try.");e(a)},l=function(c,e){console.error("error projecting featureSet ("+a.layerDefinition.name+"). Try one more time.");y(g,a.featureSet.geometryType,b,d,k.hitch(this,h),k.hitch(this,v))};a.featureSet.features&&0<a.featureSet.features.length?(g=[],c.forEach(a.featureSet.features,function(b){if(b.geometry.toJson)g.push(b.geometry);else{var c=
E.getGeometryType(a.featureSet.geometryType);g.push(new c(b.geometry))}}),b.toJson||(b=new s(b)),d.toJson||(d=new s(d)),y(g,a.featureSet.geometryType,b,d,k.hitch(this,h),k.hitch(this,l))):e(a)}}var J="lat latitude y ycenter latitude83 latdecdeg POINT-Y".split(" "),K="lon lng long longitude x xcenter longitude83 longdecdeg POINT-X".split(" "),N={latFieldStrings:J,longFieldStrings:K,buildCSVFeatureCollection:function(a){var b=new B,c=function(a,c){c?b.errback(c):b.callback(a)},e={url:a.url,handleAs:"text",
load:function(b){I(b,a,k.hitch(this,c))},error:function(a){b.errback(a);console.error("error: "+a)}};-1<a.url.indexOf("arcgis.com")&&(-1<a.url.indexOf("/content/items")&&-1<a.url.indexOf("/data"))&&(e.headers={"Content-Type":""});R(e,{usePost:!1});return b},projectFeatureCollection:function(a,b,c){var e=new B;c||(c=new s({wkid:4326}));M(a,c,b,k.hitch(this,function(a){e.callback(a)}));return e},generateDefaultPopupInfo:function(a){var b={esriFieldTypeDouble:1,esriFieldTypeSingle:1},d={esriFieldTypeInteger:1,
esriFieldTypeSmallInteger:1},e={esriFieldTypeDate:1},g=null;a=c.map(a.layerDefinition.fields,k.hitch(this,function(a){"NAME"===a.name.toUpperCase()&&(g=a.name);var c="esriFieldTypeOID"!==a.type&&"esriFieldTypeGlobalID"!==a.type&&"esriFieldTypeGeometry"!==a.type,l=null;if(c){var f=a.name.toLowerCase();if(-1<",stretched value,fnode_,tnode_,lpoly_,rpoly_,poly_,subclass,subclass_,rings_ok,rings_nok,".indexOf(","+f+",")||-1<f.indexOf("area")||-1<f.indexOf("length")||-1<f.indexOf("shape")||-1<f.indexOf("perimeter")||
-1<f.indexOf("objectid")||f.indexOf("_")===f.length-1||f.indexOf("_i")===f.length-2&&1<f.length)c=!1;a.type in d?l={places:0,digitSeparator:!0}:a.type in b?l={places:2,digitSeparator:!0}:a.type in e&&(l={dateFormat:"shortDateShortTime"})}return k.mixin({},{fieldName:a.name,label:a.alias,isEditable:!0,tooltip:"",visible:c,format:l,stringFieldOption:"textbox"})}));return{title:g?"{"+g+"}":"",fieldInfos:a,description:null,showAttachments:!1,mediaInfos:[]}},_getSeparator:G,_isValidDate:H,_processCsvData:I,
_projectGeometries:y,_sameSpatialReference:L,_projectFeatureSet:M};C("extend-esri")&&k.setObject("arcgis.csv",N,Q);return N});