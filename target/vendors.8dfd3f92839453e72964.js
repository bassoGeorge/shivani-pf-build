webpackJsonp([1],{645:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n(54),n(152),n(8),n(42),n(646),n(64),n(123)},646:function(e,t,n){"use strict";/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function normalizeMethodName(e){if("string"!=typeof e)return e;switch(e.toUpperCase()){case"GET":return u.Get;case"POST":return u.Post;case"PUT":return u.Put;case"DELETE":return u.Delete;case"OPTIONS":return u.Options;case"HEAD":return u.Head;case"PATCH":return u.Patch}throw new Error('Invalid request method. The method "'+e+'" is not supported.')}function getResponseURL(e){return"responseURL"in e?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}function stringToArrayBuffer(e){for(var t=new Uint16Array(e.length),n=0,r=e.length;n<r;n++)t[n]=e.charCodeAt(n);return t.buffer}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 * @param {?=} rawParams
 * @return {?}
 */
function paramParser(e){void 0===e&&(e="");var t=new Map;if(e.length>0){e.split("&").forEach(function(e){var n=e.indexOf("="),r=-1==n?[e,""]:[e.slice(0,n),e.slice(n+1)],o=r[0],s=r[1],a=t.get(o)||[];a.push(s),t.set(o,a)})}return t}function standardEncoding(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/gi,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%2B/gi,"+").replace(/%3D/gi,"=").replace(/%3F/gi,"?").replace(/%2F/gi,"/")}function _getJsonpConnections(){var e="object"==typeof window?window:{};return null===B&&(B=e[C]={}),B}function urlEncodeParams(e){var t=new _;return Object.keys(e).forEach(function(n){var r=e[n];r&&Array.isArray(r)?r.forEach(function(e){return t.append(n,e.toString())}):t.append(n,r.toString())}),t}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function httpRequest(e,t){return e.createConnection(t).response}function mergeOptions(e,t,n,r){var o=e;return t?o.merge(new M({method:t.method||n,url:t.url||r,search:t.search,params:t.params,headers:t.headers,body:t.body,withCredentials:t.withCredentials,responseType:t.responseType})):o.merge(new M({method:n,url:r}))}/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function _createDefaultCookieXSRFStrategy(){return new F}function httpFactory(e,t){return new z(e,t)}function jsonpFactory(e,t){return new K(e,t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"BrowserXhr",function(){return i}),n.d(t,"JSONPBackend",function(){return q}),n.d(t,"JSONPConnection",function(){return A}),n.d(t,"CookieXSRFStrategy",function(){return F}),n.d(t,"XHRBackend",function(){return k}),n.d(t,"XHRConnection",function(){return L}),n.d(t,"BaseRequestOptions",function(){return x}),n.d(t,"RequestOptions",function(){return M}),n.d(t,"BaseResponseOptions",function(){return y}),n.d(t,"ResponseOptions",function(){return f}),n.d(t,"ReadyState",function(){return p}),n.d(t,"RequestMethod",function(){return u}),n.d(t,"ResponseContentType",function(){return l}),n.d(t,"ResponseType",function(){return c}),n.d(t,"Headers",function(){return h}),n.d(t,"Http",function(){return z}),n.d(t,"Jsonp",function(){return K}),n.d(t,"HttpModule",function(){return Y}),n.d(t,"JsonpModule",function(){return Q}),n.d(t,"Connection",function(){return R}),n.d(t,"ConnectionBackend",function(){return m}),n.d(t,"XSRFStrategy",function(){return O}),n.d(t,"Request",function(){return U}),n.d(t,"Response",function(){return w}),n.d(t,"QueryEncoder",function(){return b}),n.d(t,"URLSearchParams",function(){return _}),n.d(t,"VERSION",function(){return V}),n.d(t,"ɵg",function(){return E}),n.d(t,"ɵa",function(){return H}),n.d(t,"ɵf",function(){return v}),n.d(t,"ɵb",function(){return _createDefaultCookieXSRFStrategy}),n.d(t,"ɵc",function(){return httpFactory}),n.d(t,"ɵd",function(){return jsonpFactory});var r=n(39),o=n(8),s=n(0),a=(n.n(s),n(54)),i=function(){function BrowserXhr(){}return BrowserXhr.prototype.build=function(){return new XMLHttpRequest},BrowserXhr}();i.decorators=[{type:o.Injectable}],i.ctorParameters=function(){return[]};var u={};u.Get=0,u.Post=1,u.Put=2,u.Delete=3,u.Options=4,u.Head=5,u.Patch=6,u[u.Get]="Get",u[u.Post]="Post",u[u.Put]="Put",u[u.Delete]="Delete",u[u.Options]="Options",u[u.Head]="Head",u[u.Patch]="Patch";var p={};p.Unsent=0,p.Open=1,p.HeadersReceived=2,p.Loading=3,p.Done=4,p.Cancelled=5,p[p.Unsent]="Unsent",p[p.Open]="Open",p[p.HeadersReceived]="HeadersReceived",p[p.Loading]="Loading",p[p.Done]="Done",p[p.Cancelled]="Cancelled";var c={};c.Basic=0,c.Cors=1,c.Default=2,c.Error=3,c.Opaque=4,c[c.Basic]="Basic",c[c.Cors]="Cors",c[c.Default]="Default",c[c.Error]="Error",c[c.Opaque]="Opaque";var d={};d.NONE=0,d.JSON=1,d.FORM=2,d.FORM_DATA=3,d.TEXT=4,d.BLOB=5,d.ARRAY_BUFFER=6,d[d.NONE]="NONE",d[d.JSON]="JSON",d[d.FORM]="FORM",d[d.FORM_DATA]="FORM_DATA",d[d.TEXT]="TEXT",d[d.BLOB]="BLOB",d[d.ARRAY_BUFFER]="ARRAY_BUFFER";var l={};l.Text=0,l.Json=1,l.ArrayBuffer=2,l.Blob=3,l[l.Text]="Text",l[l.Json]="Json",l[l.ArrayBuffer]="ArrayBuffer",l[l.Blob]="Blob";var h=function(){function Headers(e){var t=this;if(this._headers=new Map,this._normalizedNames=new Map,e)return e instanceof Headers?void e.forEach(function(e,n){e.forEach(function(e){return t.append(n,e)})}):void Object.keys(e).forEach(function(n){var r=Array.isArray(e[n])?e[n]:[e[n]];t.delete(n),r.forEach(function(e){return t.append(n,e)})})}return Headers.fromResponseHeaderString=function(e){var t=new Headers;return e.split("\n").forEach(function(e){var n=e.indexOf(":");if(n>0){var r=e.slice(0,n),o=e.slice(n+1).trim();t.set(r,o)}}),t},Headers.prototype.append=function(e,t){var n=this.getAll(e);null===n?this.set(e,t):n.push(t)},Headers.prototype.delete=function(e){var t=e.toLowerCase();this._normalizedNames.delete(t),this._headers.delete(t)},Headers.prototype.forEach=function(e){var t=this;this._headers.forEach(function(n,r){return e(n,t._normalizedNames.get(r),t._headers)})},Headers.prototype.get=function(e){var t=this.getAll(e);return null===t?null:t.length>0?t[0]:null},Headers.prototype.has=function(e){return this._headers.has(e.toLowerCase())},Headers.prototype.keys=function(){return Array.from(this._normalizedNames.values())},Headers.prototype.set=function(e,t){Array.isArray(t)?t.length&&this._headers.set(e.toLowerCase(),[t.join(",")]):this._headers.set(e.toLowerCase(),[t]),this.mayBeSetNormalizedName(e)},Headers.prototype.values=function(){return Array.from(this._headers.values())},Headers.prototype.toJSON=function(){var e=this,t={};return this._headers.forEach(function(n,r){var o=[];n.forEach(function(e){return o.push.apply(o,e.split(","))}),t[e._normalizedNames.get(r)]=o}),t},Headers.prototype.getAll=function(e){return this.has(e)?this._headers.get(e.toLowerCase())||null:null},Headers.prototype.entries=function(){throw new Error('"entries" method is not implemented on Headers class')},Headers.prototype.mayBeSetNormalizedName=function(e){var t=e.toLowerCase();this._normalizedNames.has(t)||this._normalizedNames.set(t,e)},Headers}(),f=function(){function ResponseOptions(e){void 0===e&&(e={});var t=e.body,n=e.status,r=e.headers,o=e.statusText,s=e.type,a=e.url;this.body=null!=t?t:null,this.status=null!=n?n:null,this.headers=null!=r?r:null,this.statusText=null!=o?o:null,this.type=null!=s?s:null,this.url=null!=a?a:null}return ResponseOptions.prototype.merge=function(e){return new ResponseOptions({body:e&&null!=e.body?e.body:this.body,status:e&&null!=e.status?e.status:this.status,headers:e&&null!=e.headers?e.headers:this.headers,statusText:e&&null!=e.statusText?e.statusText:this.statusText,type:e&&null!=e.type?e.type:this.type,url:e&&null!=e.url?e.url:this.url})},ResponseOptions}(),y=function(e){function BaseResponseOptions(){return e.call(this,{status:200,statusText:"Ok",type:c.Default,headers:new h})||this}return r.a(BaseResponseOptions,e),BaseResponseOptions}(f);y.decorators=[{type:o.Injectable}],y.ctorParameters=function(){return[]};/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var m=function(){function ConnectionBackend(){}return ConnectionBackend.prototype.createConnection=function(e){},ConnectionBackend}(),R=function(){function Connection(){}return Connection}(),O=function(){function XSRFStrategy(){}return XSRFStrategy.prototype.configureRequest=function(e){},XSRFStrategy}(),g=function(e){return e>=200&&e<300},b=function(){function QueryEncoder(){}return QueryEncoder.prototype.encodeKey=function(e){return standardEncoding(e)},QueryEncoder.prototype.encodeValue=function(e){return standardEncoding(e)},QueryEncoder}(),_=function(){function URLSearchParams(e,t){void 0===e&&(e=""),void 0===t&&(t=new b),this.rawParams=e,this.queryEncoder=t,this.paramsMap=paramParser(e)}return URLSearchParams.prototype.clone=function(){var e=new URLSearchParams("",this.queryEncoder);return e.appendAll(this),e},URLSearchParams.prototype.has=function(e){return this.paramsMap.has(e)},URLSearchParams.prototype.get=function(e){var t=this.paramsMap.get(e);return Array.isArray(t)?t[0]:null},URLSearchParams.prototype.getAll=function(e){return this.paramsMap.get(e)||[]},URLSearchParams.prototype.set=function(e,t){if(void 0===t||null===t)return void this.delete(e);var n=this.paramsMap.get(e)||[];n.length=0,n.push(t),this.paramsMap.set(e,n)},URLSearchParams.prototype.setAll=function(e){var t=this;e.paramsMap.forEach(function(e,n){var r=t.paramsMap.get(n)||[];r.length=0,r.push(e[0]),t.paramsMap.set(n,r)})},URLSearchParams.prototype.append=function(e,t){if(void 0!==t&&null!==t){var n=this.paramsMap.get(e)||[];n.push(t),this.paramsMap.set(e,n)}},URLSearchParams.prototype.appendAll=function(e){var t=this;e.paramsMap.forEach(function(e,n){for(var r=t.paramsMap.get(n)||[],o=0;o<e.length;++o)r.push(e[o]);t.paramsMap.set(n,r)})},URLSearchParams.prototype.replaceAll=function(e){var t=this;e.paramsMap.forEach(function(e,n){var r=t.paramsMap.get(n)||[];r.length=0;for(var o=0;o<e.length;++o)r.push(e[o]);t.paramsMap.set(n,r)})},URLSearchParams.prototype.toString=function(){var e=this,t=[];return this.paramsMap.forEach(function(n,r){n.forEach(function(n){return t.push(e.queryEncoder.encodeKey(r)+"="+e.queryEncoder.encodeValue(n))})}),t.join("&")},URLSearchParams.prototype.delete=function(e){this.paramsMap.delete(e)},URLSearchParams}(),v=function(){function Body(){}return Body.prototype.json=function(){return"string"==typeof this._body?JSON.parse(this._body):this._body instanceof ArrayBuffer?JSON.parse(this.text()):this._body},Body.prototype.text=function(e){if(void 0===e&&(e="legacy"),this._body instanceof _)return this._body.toString();if(this._body instanceof ArrayBuffer)switch(e){case"legacy":return String.fromCharCode.apply(null,new Uint16Array(this._body));case"iso-8859":return String.fromCharCode.apply(null,new Uint8Array(this._body));default:throw new Error("Invalid value for encodingHint: "+e)}return null==this._body?"":"object"==typeof this._body?JSON.stringify(this._body,null,2):this._body.toString()},Body.prototype.arrayBuffer=function(){return this._body instanceof ArrayBuffer?this._body:stringToArrayBuffer(this.text())},Body.prototype.blob=function(){if(this._body instanceof Blob)return this._body;if(this._body instanceof ArrayBuffer)return new Blob([this._body]);throw new Error("The request body isn't either a blob or an array buffer")},Body}(),w=function(e){function Response(t){var n=e.call(this)||this;return n._body=t.body,n.status=t.status,n.ok=n.status>=200&&n.status<=299,n.statusText=t.statusText,n.headers=t.headers,n.type=t.type,n.url=t.url,n}return r.a(Response,e),Response.prototype.toString=function(){return"Response with status: "+this.status+" "+this.statusText+" for URL: "+this.url},Response}(v),S=0,C="__ng_jsonp__",B=null,E=function(){function BrowserJsonp(){}return BrowserJsonp.prototype.build=function(e){var t=document.createElement("script");return t.src=e,t},BrowserJsonp.prototype.nextRequestID=function(){return"__req"+S++},BrowserJsonp.prototype.requestCallback=function(e){return C+"."+e+".finished"},BrowserJsonp.prototype.exposeConnection=function(e,t){_getJsonpConnections()[e]=t},BrowserJsonp.prototype.removeConnection=function(e){_getJsonpConnections()[e]=null},BrowserJsonp.prototype.send=function(e){document.body.appendChild(e)},BrowserJsonp.prototype.cleanup=function(e){e.parentNode&&e.parentNode.removeChild(e)},BrowserJsonp}();E.decorators=[{type:o.Injectable}],E.ctorParameters=function(){return[]};/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var P="JSONP injected script did not invoke callback.",T="JSONP requests must use GET request method.",A=function(){function JSONPConnection(){}return JSONPConnection.prototype.finished=function(e){},JSONPConnection}(),N=function(e){function JSONPConnection_(t,n,r){var o=e.call(this)||this;if(o._dom=n,o.baseResponseOptions=r,o._finished=!1,t.method!==u.Get)throw new TypeError(T);return o.request=t,o.response=new s.Observable(function(e){o.readyState=p.Loading;var s=o._id=n.nextRequestID();n.exposeConnection(s,o);var a=n.requestCallback(o._id),i=t.url;i.indexOf("=JSONP_CALLBACK&")>-1?i=i.replace("=JSONP_CALLBACK&","="+a+"&"):i.lastIndexOf("=JSONP_CALLBACK")===i.length-"=JSONP_CALLBACK".length&&(i=i.substring(0,i.length-"=JSONP_CALLBACK".length)+"="+a);var u=o._script=n.build(i),d=function(t){if(o.readyState!==p.Cancelled){if(o.readyState=p.Done,n.cleanup(u),!o._finished){var s=new f({body:P,type:c.Error,url:i});return r&&(s=r.merge(s)),void e.error(new w(s))}var a=new f({body:o._responseData,url:i});o.baseResponseOptions&&(a=o.baseResponseOptions.merge(a)),e.next(new w(a)),e.complete()}},l=function(t){if(o.readyState!==p.Cancelled){o.readyState=p.Done,n.cleanup(u);var s=new f({body:t.message,type:c.Error});r&&(s=r.merge(s)),e.error(new w(s))}};return u.addEventListener("load",d),u.addEventListener("error",l),n.send(u),function(){o.readyState=p.Cancelled,u.removeEventListener("load",d),u.removeEventListener("error",l),o._dom.cleanup(u)}}),o}return r.a(JSONPConnection_,e),JSONPConnection_.prototype.finished=function(e){this._finished=!0,this._dom.removeConnection(this._id),this.readyState!==p.Cancelled&&(this._responseData=e)},JSONPConnection_}(A),q=function(e){function JSONPBackend(){return null!==e&&e.apply(this,arguments)||this}return r.a(JSONPBackend,e),JSONPBackend}(m),H=function(e){function JSONPBackend_(t,n){var r=e.call(this)||this;return r._browserJSONP=t,r._baseResponseOptions=n,r}return r.a(JSONPBackend_,e),JSONPBackend_.prototype.createConnection=function(e){return new N(e,this._browserJSONP,this._baseResponseOptions)},JSONPBackend_}(q);H.decorators=[{type:o.Injectable}],H.ctorParameters=function(){return[{type:E},{type:f}]};/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var J=/^\)\]\}',?\n/,L=function(){function XHRConnection(e,t,n){var r=this;this.request=e,this.response=new s.Observable(function(o){var s=t.build();s.open(u[e.method].toUpperCase(),e.url),null!=e.withCredentials&&(s.withCredentials=e.withCredentials);var a=function(){var t=1223===s.status?204:s.status,r=null;204!==t&&"string"==typeof(r=void 0===s.response?s.responseText:s.response)&&(r=r.replace(J,"")),0===t&&(t=r?200:0);var a=h.fromResponseHeaderString(s.getAllResponseHeaders()),i=getResponseURL(s)||e.url,u=s.statusText||"OK",p=new f({body:r,status:t,headers:a,statusText:u,url:i});null!=n&&(p=n.merge(p));var c=new w(p);if(c.ok=g(t),c.ok)return o.next(c),void o.complete();o.error(c)},i=function(e){var t=new f({body:e,type:c.Error,status:s.status,statusText:s.statusText});null!=n&&(t=n.merge(t)),o.error(new w(t))};if(r.setDetectedContentType(e,s),null==e.headers&&(e.headers=new h),e.headers.has("Accept")||e.headers.append("Accept","application/json, text/plain, */*"),e.headers.forEach(function(e,t){return s.setRequestHeader(t,e.join(","))}),null!=e.responseType&&null!=s.responseType)switch(e.responseType){case l.ArrayBuffer:s.responseType="arraybuffer";break;case l.Json:s.responseType="json";break;case l.Text:s.responseType="text";break;case l.Blob:s.responseType="blob";break;default:throw new Error("The selected responseType is not supported")}return s.addEventListener("load",a),s.addEventListener("error",i),s.send(r.request.getBody()),function(){s.removeEventListener("load",a),s.removeEventListener("error",i),s.abort()}})}return XHRConnection.prototype.setDetectedContentType=function(e,t){if(null==e.headers||null==e.headers.get("Content-Type"))switch(e.contentType){case d.NONE:break;case d.JSON:t.setRequestHeader("content-type","application/json");break;case d.FORM:t.setRequestHeader("content-type","application/x-www-form-urlencoded;charset=UTF-8");break;case d.TEXT:t.setRequestHeader("content-type","text/plain");break;case d.BLOB:var n=e.blob();n.type&&t.setRequestHeader("content-type",n.type)}},XHRConnection}(),F=function(){function CookieXSRFStrategy(e,t){void 0===e&&(e="XSRF-TOKEN"),void 0===t&&(t="X-XSRF-TOKEN"),this._cookieName=e,this._headerName=t}return CookieXSRFStrategy.prototype.configureRequest=function(e){var t=Object(a["ɵgetDOM"])().getCookie(this._cookieName);t&&e.headers.set(this._headerName,t)},CookieXSRFStrategy}(),k=function(){function XHRBackend(e,t,n){this._browserXHR=e,this._baseResponseOptions=t,this._xsrfStrategy=n}return XHRBackend.prototype.createConnection=function(e){return this._xsrfStrategy.configureRequest(e),new L(e,this._browserXHR,this._baseResponseOptions)},XHRBackend}();k.decorators=[{type:o.Injectable}],k.ctorParameters=function(){return[{type:i},{type:f},{type:O}]};/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var M=function(){function RequestOptions(e){void 0===e&&(e={});var t=e.method,n=e.headers,r=e.body,o=e.url,s=e.search,a=e.params,i=e.withCredentials,u=e.responseType;this.method=null!=t?normalizeMethodName(t):null,this.headers=null!=n?n:null,this.body=null!=r?r:null,this.url=null!=o?o:null,this.params=this._mergeSearchParams(a||s),this.withCredentials=null!=i?i:null,this.responseType=null!=u?u:null}return Object.defineProperty(RequestOptions.prototype,"search",{get:function(){return this.params},set:function(e){this.params=e},enumerable:!0,configurable:!0}),RequestOptions.prototype.merge=function(e){return new RequestOptions({method:e&&null!=e.method?e.method:this.method,headers:e&&null!=e.headers?e.headers:new h(this.headers),body:e&&null!=e.body?e.body:this.body,url:e&&null!=e.url?e.url:this.url,params:e&&this._mergeSearchParams(e.params||e.search),withCredentials:e&&null!=e.withCredentials?e.withCredentials:this.withCredentials,responseType:e&&null!=e.responseType?e.responseType:this.responseType})},RequestOptions.prototype._mergeSearchParams=function(e){return e?e instanceof _?e.clone():"string"==typeof e?new _(e):this._parseParams(e):this.params},RequestOptions.prototype._parseParams=function(e){var t=this;void 0===e&&(e={});var n=new _;return Object.keys(e).forEach(function(r){var o=e[r];Array.isArray(o)?o.forEach(function(e){return t._appendParam(r,e,n)}):t._appendParam(r,o,n)}),n},RequestOptions.prototype._appendParam=function(e,t,n){"string"!=typeof t&&(t=JSON.stringify(t)),n.append(e,t)},RequestOptions}(),x=function(e){function BaseRequestOptions(){return e.call(this,{method:u.Get,headers:new h})||this}return r.a(BaseRequestOptions,e),BaseRequestOptions}(M);x.decorators=[{type:o.Injectable}],x.ctorParameters=function(){return[]};/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var U=function(e){function Request(t){var n=e.call(this)||this,r=t.url;n.url=t.url;var o=t.params||t.search;if(o){var s=void 0;if(s="object"!=typeof o||o instanceof _?o.toString():urlEncodeParams(o).toString(),s.length>0){var a="?";-1!=n.url.indexOf("?")&&(a="&"==n.url[n.url.length-1]?"":"&"),n.url=r+a+s}}return n._body=t.body,n.method=normalizeMethodName(t.method),n.headers=new h(t.headers),n.contentType=n.detectContentType(),n.withCredentials=t.withCredentials,n.responseType=t.responseType,n}return r.a(Request,e),Request.prototype.detectContentType=function(){switch(this.headers.get("content-type")){case"application/json":return d.JSON;case"application/x-www-form-urlencoded":return d.FORM;case"multipart/form-data":return d.FORM_DATA;case"text/plain":case"text/html":return d.TEXT;case"application/octet-stream":return this._body instanceof G?d.ARRAY_BUFFER:d.BLOB;default:return this.detectContentTypeFromBody()}},Request.prototype.detectContentTypeFromBody=function(){return null==this._body?d.NONE:this._body instanceof _?d.FORM:this._body instanceof j?d.FORM_DATA:this._body instanceof I?d.BLOB:this._body instanceof G?d.ARRAY_BUFFER:this._body&&"object"==typeof this._body?d.JSON:d.TEXT},Request.prototype.getBody=function(){switch(this.contentType){case d.JSON:case d.FORM:return this.text();case d.FORM_DATA:return this._body;case d.TEXT:return this.text();case d.BLOB:return this.blob();case d.ARRAY_BUFFER:return this.arrayBuffer();default:return null}},Request}(v),X=function(){},D="object"==typeof window?window:X,j=D.FormData||X,I=D.Blob||X,G=D.ArrayBuffer||X,z=function(){function Http(e,t){this._backend=e,this._defaultOptions=t}return Http.prototype.request=function(e,t){var n;if("string"==typeof e)n=httpRequest(this._backend,new U(mergeOptions(this._defaultOptions,t,u.Get,e)));else{if(!(e instanceof U))throw new Error("First argument must be a url string or Request instance.");n=httpRequest(this._backend,e)}return n},Http.prototype.get=function(e,t){return this.request(new U(mergeOptions(this._defaultOptions,t,u.Get,e)))},Http.prototype.post=function(e,t,n){return this.request(new U(mergeOptions(this._defaultOptions.merge(new M({body:t})),n,u.Post,e)))},Http.prototype.put=function(e,t,n){return this.request(new U(mergeOptions(this._defaultOptions.merge(new M({body:t})),n,u.Put,e)))},Http.prototype.delete=function(e,t){return this.request(new U(mergeOptions(this._defaultOptions,t,u.Delete,e)))},Http.prototype.patch=function(e,t,n){return this.request(new U(mergeOptions(this._defaultOptions.merge(new M({body:t})),n,u.Patch,e)))},Http.prototype.head=function(e,t){return this.request(new U(mergeOptions(this._defaultOptions,t,u.Head,e)))},Http.prototype.options=function(e,t){return this.request(new U(mergeOptions(this._defaultOptions,t,u.Options,e)))},Http}();z.decorators=[{type:o.Injectable}],z.ctorParameters=function(){return[{type:m},{type:M}]};var K=function(e){function Jsonp(t,n){return e.call(this,t,n)||this}return r.a(Jsonp,e),Jsonp.prototype.request=function(e,t){if("string"==typeof e&&(e=new U(mergeOptions(this._defaultOptions,t,u.Get,e))),!(e instanceof U))throw new Error("First argument must be a url string or Request instance.");if(e.method!==u.Get)throw new Error("JSONP requests must use GET request method.");return httpRequest(this._backend,e)},Jsonp}(z);K.decorators=[{type:o.Injectable}],K.ctorParameters=function(){return[{type:m},{type:M}]};var Y=function(){function HttpModule(){}return HttpModule}();Y.decorators=[{type:o.NgModule,args:[{providers:[{provide:z,useFactory:httpFactory,deps:[k,M]},i,{provide:M,useClass:x},{provide:f,useClass:y},k,{provide:O,useFactory:_createDefaultCookieXSRFStrategy}]}]}],Y.ctorParameters=function(){return[]};var Q=function(){function JsonpModule(){}return JsonpModule}();Q.decorators=[{type:o.NgModule,args:[{providers:[{provide:K,useFactory:jsonpFactory,deps:[q,M]},E,{provide:M,useClass:x},{provide:f,useClass:y},{provide:q,useClass:H}]}]}],Q.ctorParameters=function(){return[]};/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var V=new o.Version("4.3.6")}},[645]);