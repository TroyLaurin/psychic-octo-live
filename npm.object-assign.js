/*! For license information please see npm.object-assign.js.LICENSE.txt */
(self.webpackChunkpsychic_octo=self.webpackChunkpsychic_octo||[]).push([[290],{7418:r=>{"use strict";var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function c(r){if(null==r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}r.exports=function(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(r){return e[r]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(r){n[r]=r})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(r){return!1}}()?Object.assign:function(r,o){for(var a,i,s=c(r),f=1;f<arguments.length;f++){for(var p in a=Object(arguments[f]))t.call(a,p)&&(s[p]=a[p]);if(e){i=e(a);for(var u=0;u<i.length;u++)n.call(a,i[u])&&(s[i[u]]=a[i[u]])}}return s}}}]);