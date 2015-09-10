//>>built
define("dojox/app/main","require dojo/_base/kernel dojo/_base/lang dojo/_base/declare dojo/_base/config dojo/_base/window dojo/Evented dojo/Deferred dojo/when dojo/has dojo/on dojo/ready dojo/dom-construct dojo/dom-attr ./utils/model ./utils/nls ./module/lifecycle ./utils/hash ./utils/constraints ./utils/config".split(" "),function(g,r,e,h,s,t,u,m,k,n,v,w,x,D,y,z,E,p,A,B){function q(a,d){var b;a=B.configProcessHas(a);a.loaderConfig||(a.loaderConfig={});a.loaderConfig.paths||(a.loaderConfig.paths=
{});a.loaderConfig.paths.app||(b=window.location.pathname,"/"!=b.charAt(b.length)&&(b=b.split("/"),b.pop(),b=b.join("/")),a.loaderConfig.paths.app=b);g(a.loaderConfig);a.modules||(a.modules=[]);a.modules.push("./module/lifecycle");var c=a.modules.concat(a.dependencies?a.dependencies:[]);a.template&&(b=a.template,0==b.indexOf("./")&&(b="app/"+b),c.push("dojo/text!"+b));g(c,function(){for(var b=[C],c=0;c<a.modules.length;c++)b.push(arguments[c]);if(a.template)var e={templateString:arguments[arguments.length-
1]};App=h(b,e);w(function(){var b=new App(a,d||t.body());n("app-log-api")?b.log=function(){var a="";try{for(var b=0;b<arguments.length-1;b++)a+=arguments[b];console.log(a,arguments[arguments.length-1])}catch(c){}}:b.log=function(){};b.transitionToView=function(a,b,c){v.emit(a,"startTransition",{bubbles:!0,cancelable:!0,detail:b,triggerEvent:c||null})};b.setStatus(b.lifecycle.STARTING);var c=b.id;window[c]&&h.safeMixin(b,window[c]);window[c]=b;b.start()})})}n.add("app-log-api",(s.app||{}).debugApp);
var C=h(u,{constructor:function(a,d){h.safeMixin(this,a);this.params=a;this.id=a.id;this.defaultView=a.defaultView;this.controllers=[];this.children={};this.loadedModels={};this.loadedStores={};this.setDomNode(x.create("div",{id:this.id+"_Root",style:"width:100%; height:100%; overflow-y:hidden; overflow-x:hidden;"}));d.appendChild(this.domNode)},createDataStore:function(a){if(a.stores)for(var d in a.stores)if("_"!==d.charAt(0)){var b=a.stores[d].type?a.stores[d].type:"dojo/store/Memory",c={};a.stores[d].params&&
e.mixin(c,a.stores[d].params);try{var f=g(b)}catch(h){throw Error(b+" must be listed in the dependencies");}c.data&&e.isString(c.data)&&(c.data=e.getObject(c.data));if(a.stores[d].observable){try{var l=g("dojo/store/Observable")}catch(k){throw Error("dojo/store/Observable must be listed in the dependencies");}a.stores[d].store=l(new f(c))}else a.stores[d].store=new f(c);this.loadedStores[d]=a.stores[d].store}},createControllers:function(a){if(a){for(var d=[],b=0;b<a.length;b++)d.push(a[b]);var c=
new m,f;try{f=g.on?g.on("error",function(a){!c.isResolved()&&!c.isRejected()&&(c.reject("load controllers error."),f&&f.remove())}):null,g(d,function(){c.resolve.call(c,arguments);f&&f.remove()})}catch(h){c.reject(h),f&&f.remove()}var l=new m;k(c,e.hitch(this,function(a){for(var b=0;b<a.length;b++)this.controllers.push((new a[b](this)).bind());l.resolve(this)}),function(){l.reject("load controllers error.")});return l}},trigger:function(a,d){r.deprecated("dojox.app.Application.trigger","Use dojox.app.Application.emit instead",
"2.0");this.emit(a,d)},start:function(){this.createDataStore(this.params);var a=new m,d;try{d=y(this.params.models,this,this)}catch(b){return a.reject(b),a.promise}k(d,e.hitch(this,function(a){this.loadedModels=e.isArray(a)?a[0]:a;this.setupControllers();k(z(this.params),e.hitch(this,function(a){a&&e.mixin(this.nls={},a);this.startup()}))}),function(){a.reject("load model error.")})},setDomNode:function(a){var d=this.domNode;this.domNode=a;this.emit("app-domNode",{oldNode:d,newNode:a})},setupControllers:function(){var a=
window.location.hash;this._startView=p.getTarget(a,this.defaultView);this._startParams=p.getParams(a)},startup:function(){this.selectedChildren={};var a=this.createControllers(this.params.controllers);this.hasOwnProperty("constraint")?A.register(this.params.constraints):this.constraint="center";var d=function(){this.emit("app-load",{viewId:this.defaultView,initLoad:!0,params:this._startParams,callback:e.hitch(this,function(){this.emit("app-transition",{viewId:this.defaultView,forceTransitionNone:!0,
opts:{params:this._startParams}});this.defaultView!==this._startView&&this.emit("app-transition",{viewId:this._startView,opts:{params:this._startParams}});this.setStatus(this.lifecycle.STARTED)})})};k(a,e.hitch(this,function(){this.template?this.emit("app-init",{app:this,name:this.name,type:this.type,parent:this,templateString:this.templateString,controller:this.controller,callback:e.hitch(this,function(a){this.setDomNode(a.domNode);d.call(this)})}):d.call(this)}))}});return function(a,d){if(!a)throw Error("App Config Missing");
a.validate?g(["dojox/json/schema","dojox/json/ref","dojo/text!dojox/application/schema/application.json"],function(b,c){b=dojox.json.ref.resolveJson(b);b.validate(a,c)&&q(a,d)}):q(a,d)}});