/*
	Copyright (c) 2004-2011, The Dojo Foundation All Rights Reserved.
	Available via Academic Free License >= 2.1 OR the modified BSD license.
	see: http://dojotoolkit.org/license for details
*/

//>>built
define("dojo/dom",["./sniff","./_base/window"],function(f,g){if(7>=f("ie"))try{document.execCommand("BackgroundImageCache",!1,!0)}catch(k){}var e={};f("ie")?e.byId=function(a,d){if("string"!=typeof a)return a;var b=d||g.doc,c=a&&b.getElementById(a);if(c&&(c.attributes.id.value==a||c.id==a))return c;b=b.all[a];if(!b||b.nodeName)b=[b];for(var e=0;c=b[e++];)if(c.attributes&&c.attributes.id&&c.attributes.id.value==a||c.id==a)return c}:e.byId=function(a,d){return("string"==typeof a?(d||g.doc).getElementById(a):
a)||null};e.isDescendant=function(a,d){try{a=e.byId(a);for(d=e.byId(d);a;){if(a==d)return!0;a=a.parentNode}}catch(b){}return!1};f.add("css-user-select",function(a,d,b){if(!b)return!1;a=b.style;d=["Khtml","O","Moz","Webkit"];b=d.length;var c="userSelect";do if("undefined"!==typeof a[c])return c;while(b--&&(c=d[b]+"UserSelect"));return!1});var h=f("css-user-select");e.setSelectable=h?function(a,d){e.byId(a).style[h]=d?"":"none"}:function(a,d){a=e.byId(a);var b=a.getElementsByTagName("*"),c=b.length;
if(d)for(a.removeAttribute("unselectable");c--;)b[c].removeAttribute("unselectable");else for(a.setAttribute("unselectable","on");c--;)b[c].setAttribute("unselectable","on")};return e});