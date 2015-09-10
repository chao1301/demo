// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.14/esri/copyright.txt for details.
//>>built
define("esri/layers/WebTiledLayer","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/url dojo/has dojo/string ../kernel ../urlUtils ../SpatialReference ../geometry/Extent ./TiledMapServiceLayer ./TileInfo".split(" "),function(b,m,g,n,p,k,q,r,h,l,s,t){b=b(s,{declaredClass:"esri.layers.WebTiledLayer",constructor:function(d,a){a||(a={});this.urlTemplate=d;var f=new l(-2.0037508342787E7,-2.003750834278E7,2.003750834278E7,2.0037508342787E7,new h({wkid:102100})),e=new l(-2.0037508342787E7,
-2.003750834278E7,2.003750834278E7,2.0037508342787E7,new h({wkid:102100}));this.initialExtent=a.initialExtent||f;this.fullExtent=a.fullExtent||e;this.tileInfo=a.tileInfo?a.tileInfo:new t({rows:256,cols:256,origin:{x:-2.0037508342787E7,y:2.0037508342787E7},spatialReference:{wkid:102100},lods:[{level:0,resolution:156543.033928,scale:5.91657527591555E8},{level:1,resolution:78271.5169639999,scale:2.95828763795777E8},{level:2,resolution:39135.7584820001,scale:1.47914381897889E8},{level:3,resolution:19567.8792409999,
scale:7.3957190948944E7},{level:4,resolution:9783.93962049996,scale:3.6978595474472E7},{level:5,resolution:4891.96981024998,scale:1.8489297737236E7},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},
{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:0.597164283559817,scale:2256.994353},{level:19,resolution:0.298582141647617,scale:1128.497176}]});this.spatialReference=new h(this.tileInfo.spatialReference.toJson());
this.copyright=a.copyright||"";var c=new n(d),f=c.scheme+"://"+c.authority+"/";this.urlPath=d.substring(f.length);this.tileServers=a.tileServers||[];-1===c.authority.indexOf("{subDomain}")&&this.tileServers.push(f);if(a.subDomains&&0<a.subDomains.length&&1<c.authority.split(".").length){this.subDomains=a.subDomains;var b;g.forEach(a.subDomains,function(a,d){-1<c.authority.indexOf("${subDomain}")?b=c.scheme+"://"+k.substitute(c.authority,{subDomain:a})+"/":-1<c.authority.indexOf("{subDomain}")&&(b=
c.scheme+"://"+c.authority.replace(/\{subDomain\}/gi,a)+"/");this.tileServers.push(b)},this)}this.tileServers=g.map(this.tileServers,function(a){"/"!==a.charAt(a.length-1)&&(a+="/");return a});this._levelToLevelValue=[];g.forEach(this.tileInfo.lods,function(a){this._levelToLevelValue[a.level]=a.levelValue||a.level},this);this.loaded=!0;this.onLoad(this)},getTileUrl:function(d,a,b){d=this._levelToLevelValue[d];var e=this.tileServers[a%this.tileServers.length]+k.substitute(this.urlPath,{level:d,col:b,
row:a}),e=e.replace(/\{level\}/gi,d).replace(/\{row\}/gi,a).replace(/\{col\}/gi,b),e=this.addTimestampToURL(e);return r.addProxy(e)}});p("extend-esri")&&m.setObject("layers.WebTiledLayer",b,q);return b});