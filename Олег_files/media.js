(function(){var q,w=this;function aa(a,c){var b=a.split("."),d=w;b[0]in d||!d.execScript||d.execScript("var "+b[0]);for(var e;b.length&&(e=b.shift());)b.length||void 0===c?d[e]?d=d[e]:d=d[e]={}:d[e]=c}
function ba(a){var c=typeof a;if("object"==c)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return c;var b=Object.prototype.toString.call(a);if("[object Window]"==b)return"object";if("[object Array]"==b||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==b||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==c&&"undefined"==typeof a.call)return"object";return c}function y(a){return"string"==typeof a};var ca=window._top100.getPubSub();var da;function z(){return!0};function ea(){}
function B(a,c,b){if(null==c)b.push("null");else{if("object"==typeof c){if("array"==ba(c)){var d=c;c=d.length;b.push("[");for(var e="",g=0;g<c;g++)b.push(e),B(a,d[g],b),e=",";b.push("]");return}if(c instanceof String||c instanceof Number||c instanceof Boolean)c=c.valueOf();else{b.push("{");e="";for(d in c)Object.prototype.hasOwnProperty.call(c,d)&&(g=c[d],"function"!=typeof g&&(b.push(e),fa(d,b),b.push(":"),B(a,g,b),e=","));b.push("}");return}}switch(typeof c){case "string":fa(c,b);break;case "number":b.push(isFinite(c)&&
!isNaN(c)?String(c):"null");break;case "boolean":b.push(String(c));break;case "function":b.push("null");break;default:throw Error("Unknown type: "+typeof c);}}}var ga={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ha=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g;
function fa(a,c){c.push('"',a.replace(ha,function(a){var c=ga[a];c||(c="\\u"+(a.charCodeAt(0)|65536).toString(16).substr(1),ga[a]=c);return c}),'"')};var C=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function E(a,c){return a<c?-1:a>c?1:0};function G(a){this.b=[];this.u=[];this.a={};this.F=this.c=0;this.D=a||!1}q=G.prototype;q.C=function(){return 0===this.c&&0===this.F};q.clone=function(){for(var a=new G(this.D),c=this.u.concat(),b=this.b.concat(),d=0,e=c.length;d<e;++d)a.A(c[d],this.a[c[d]]);d=0;for(e=b.length;d<e;++d)a.o(b[d],this.a[b[d]]);return a};q.B=function(a,c){a=H(this,a);return Object.prototype.hasOwnProperty.call(this.a,a)?this.a[a]:c};
q.o=function(a,c){a=H(this,a);Object.prototype.hasOwnProperty.call(this.a,a)||(this.c++,this.b.push(a));this.a[a]=c};q.I=function(a){a=H(this,a);if(Object.prototype.hasOwnProperty.call(this.a,a)){delete this.a[a];for(var c=[],b=0,d=this.b.length;b<d;++b)this.b[b]!==a&&c.push(this.b[b]);this.b=c;this.c=c.length}};q.A=function(a,c){a=H(this,a);Object.prototype.hasOwnProperty.call(this.a,a)||(this.F++,this.u.push(a));this.a[a]=c};
q.toString=function(){if(this.C())return"";for(var a=[],c=this.u.concat().concat(this.b.concat()),b=void 0,d=void 0,b="",e=0,g=c.length;e<g;++e)b=c[e],d=this.B(b),b=encodeURIComponent(String(b)),""!==d&&(b+="="+encodeURIComponent(String(d))),a.push(b);return a.join("&")};function H(a,c){var b=String(c);a.D&&(b=b.toLowerCase());return b}var L=G.prototype;L.set=L.o;L.get=L.B;L.setMeta=L.A;L.remove=L.I;L.isEmpty=L.C;L.toString=L.toString;var ia=Array.prototype.indexOf?function(a,c,b){return Array.prototype.indexOf.call(a,c,b)}:function(a,c,b){b=null==b?0:0>b?Math.max(0,a.length+b):b;if(y(a))return y(c)&&1==c.length?a.indexOf(c,b):-1;for(;b<a.length;b++)if(b in a&&a[b]===c)return b;return-1},P=Array.prototype.forEach?function(a,c,b){Array.prototype.forEach.call(a,c,b)}:function(a,c,b){for(var d=a.length,e=y(a)?a.split(""):a,g=0;g<d;g++)g in e&&c.call(b,e[g],g,a)};
function la(a,c,b){a:{for(var d=a.length,e=y(a)?a.split(""):a,g=0;g<d;g++)if(g in e&&c.call(b,e[g],g,a)){c=g;break a}c=-1}return 0>c?null:y(a)?a.charAt(c):a[c]};var Q;a:{var ma=w.navigator;if(ma){var na=ma.userAgent;if(na){Q=na;break a}}Q=""};var oa=-1!=Q.indexOf("Opera")||-1!=Q.indexOf("OPR"),R=-1!=Q.indexOf("Trident")||-1!=Q.indexOf("MSIE"),pa=-1!=Q.indexOf("Edge"),qa=-1!=Q.indexOf("Gecko")&&!(-1!=Q.toLowerCase().indexOf("webkit")&&-1==Q.indexOf("Edge"))&&!(-1!=Q.indexOf("Trident")||-1!=Q.indexOf("MSIE"))&&-1==Q.indexOf("Edge"),ra=-1!=Q.toLowerCase().indexOf("webkit")&&-1==Q.indexOf("Edge");function sa(){var a=w.document;return a?a.documentMode:void 0}var S;
a:{var ta="",ua=function(){var a=Q;if(qa)return/rv\:([^\);]+)(\)|;)/.exec(a);if(pa)return/Edge\/([\d\.]+)/.exec(a);if(R)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ra)return/WebKit\/(\S+)/.exec(a);if(oa)return/(?:Version)[ \/]?(\S+)/.exec(a)}();ua&&(ta=ua?ua[1]:"");if(R){var va=sa();if(null!=va&&va>parseFloat(ta)){S=String(va);break a}}S=ta}var wa={};
function T(a){var c;if(!(c=wa[a])){c=0;for(var b=C(String(S)).split("."),d=C(String(a)).split("."),e=Math.max(b.length,d.length),g=0;0==c&&g<e;g++){var r=b[g]||"",p=d[g]||"",t=RegExp("(\\d*)(\\D*)","g"),l=RegExp("(\\d*)(\\D*)","g");do{var n=t.exec(r)||["","",""],A=l.exec(p)||["","",""];if(0==n[0].length&&0==A[0].length)break;c=E(0==n[1].length?0:parseInt(n[1],10),0==A[1].length?0:parseInt(A[1],10))||E(0==n[2].length,0==A[2].length)||E(n[2],A[2])}while(0==c)}c=wa[a]=0<=c}return c}
var xa=w.document,ya=xa&&R?sa()||("CSS1Compat"==xa.compatMode?parseInt(S,10):5):void 0;var za=!1;
(function(a){function c(){b||(za=b=!0,a())}var b=!1;za&&a();if(document.addEventListener)document.addEventListener("DOMContentLoaded",function(){c()},!1);else if(document.attachEvent){if(document.documentElement.doScroll&&window==window.top){var d=function(){if(!b&&document.body)try{document.documentElement.doScroll("left"),c()}catch(a){setTimeout(d,0)}};d()}document.attachEvent("onreadystatechange",function(){"complete"===document.readyState&&c()})}window.addEventListener?window.addEventListener("load",c,
!1):window.attachEvent&&window.attachEvent("onload",c)})(function(){za=!0});var Aa;if(!(Aa=!qa&&!R)){var Ba;if(Ba=R)Ba=9<=Number(ya);Aa=Ba}Aa||qa&&T("1.9.1");var Na=R&&!T("9");var Oa={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Pa={IMG:" ",BR:"\n"};function Y(a){if(Na&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var c=[];Qa(a,c,!0);a=c.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Na||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function Qa(a,c,b){if(!(a.nodeName in Oa))if(3==a.nodeType)b?c.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):c.push(a.nodeValue);else if(a.nodeName in Pa)c.push(Pa[a.nodeName]);else for(a=a.firstChild;a;)Qa(a,c,b),a=a.nextSibling}function Ra(a){this.a=a||w.document||document};
var Sa=function(){function a(a,f){if(!a)return[];if(a.constructor==Array)return a;if(!y(a))return[a];if(y(f)&&(f=y(f)?document.getElementById(f):f,!f))return[];f=f||document;var b=f.ownerDocument||f.documentElement;I=f.contentType&&"application/xml"==f.contentType||oa&&(f.doctype||"[object XMLDocument]"==b.toString())||!!b&&(F?b.xml:f.xmlVersion||b.xmlVersion);return(b=d(a)(f))&&b.l?b:c(b)}function c(a){if(a&&a.l)return a;var f=[];if(!a||!a.length)return f;a[0]&&f.push(a[0]);if(2>a.length)return f;
x++;if(F&&I){var c=x+"";a[0].setAttribute("_zipIdx",c);for(var b=1,d;d=a[b];b++)a[b].getAttribute("_zipIdx")!=c&&f.push(d),d.setAttribute("_zipIdx",c)}else if(F&&a.J)try{for(b=1;d=a[b];b++)U(d)&&f.push(d)}catch(e){}else for(a[0]&&(a[0]._zipIdx=x),b=1;d=a[b];b++)a[b]._zipIdx!=x&&f.push(d),d._zipIdx=x;return f}function b(a,f){if(!f)return 1;var b=Ya(a);return f[b]?0:f[b]=1}function d(a,f){if(Ca){var b=Da[a];if(b&&!f)return b}if(b=Ea[a])return b;var b=a.charAt(0),c=-1==a.indexOf(" ");0<=a.indexOf("#")&&
c&&(f=!0);if(!Ca||f||-1!=">~+".indexOf(b)||F&&-1!=a.indexOf(":")||Fa&&0<=a.indexOf(".")||-1!=a.indexOf(":contains")||-1!=a.indexOf("|=")){var D=a.split(/\s*,\s*/);return Ea[a]=2>D.length?e(a):function(a){for(var f=0,b=[],c;c=D[f++];)b=b.concat(e(c)(a));return b}}var g=0<=">~+".indexOf(a.charAt(a.length-1))?a+" *":a;return Da[a]=function(f){try{if(9!=f.nodeType&&!c)throw Error("");var b=f.querySelectorAll(g);F?b.J=!0:b.l=!0;return b}catch(h){return d(a,!0)(f)}}}function e(a){var f=Ga(C(a));if(1==f.length){var b=
g(f[0]);return function(a){if(a=b(a,[]))a.l=!0;return a}}return function(a){a=M(a);for(var b,c,ja=f.length,d,h,e=0;e<ja;e++){h=[];b=f[e];c=a.length-1;0<c&&(d={},h.l=!0);c=g(b);for(var Ha=0;b=a[Ha];Ha++)c(b,h,d);if(!h.length)break;a=h}return h}}function g(a){var b=Ia[a.i];if(b)return b;var c=a.G,c=c?c.m:"",d=l(a,{h:1}),D="*"==a.tag,e=document.getElementsByClassName;if(c)e={h:1},D&&(e.tag=1),d=l(a,e),"+"==c?b=t(d):"~"==c?b=p(d):">"==c&&(b=r(d));else if(a.id)d=!a.H&&D?z:l(a,{h:1,id:1}),b=function(b,
c){var f;f=b?new Ra(9==b.nodeType?b:b.ownerDocument||b.document):da||(da=new Ra);var h=a.id;if((h=(f=y(h)?f.a.getElementById(h):h)&&d(f))&&!(h=9==b.nodeType)){for(h=f.parentNode;h&&h!=b;)h=h.parentNode;h=!!h}if(h)return M(f,c)};else if(e&&/\{\s*\[native code\]\s*\}/.test(String(e))&&a.f.length&&!Fa)var d=l(a,{h:1,f:1,id:1}),g=a.f.join(" "),b=function(a,b){for(var c=M(0,b),f,h=0,ja=a.getElementsByClassName(g);f=ja[h++];)d(f,a)&&c.push(f);return c};else D||a.H?(d=l(a,{h:1,tag:1,id:1}),b=function(b,
f){for(var c=M(0,f),h,e=0,D=b.getElementsByTagName(a.v());h=D[e++];)d(h,b)&&c.push(h);return c}):b=function(b,c){for(var f=M(0,c),h,d=0,e=b.getElementsByTagName(a.v());h=e[d++];)f.push(h);return f};return Ia[a.i]=b}function r(a){a=a||z;return function(f,c,d){for(var e=0,g=f[Ja];f=g[e++];)N(f)&&(!d||b(f,d))&&a(f,e)&&c.push(f);return c}}function p(a){return function(c,d,e){for(c=c[O];c;){if(N(c)){if(e&&!b(c,e))break;a(c)&&d.push(c)}c=c[O]}return d}}function t(a){return function(c,d,e){for(;c=c[O];)if(!W||
U(c)){e&&!b(c,e)||!a(c)||d.push(c);break}return d}}function l(a,b){if(!a)return z;b=b||{};var c=null;b.h||(c=J(c,U));b.tag||"*"!=a.tag&&(c=J(c,function(c){return c&&c.tagName==a.v()}));b.f||P(a.f,function(a,b){var f=new RegExp("(?:^|\\s)"+a+"(?:\\s|$)");c=J(c,function(a){return f.test(a.className)});c.count=b});b.g||P(a.g,function(a){var b=a.name;ka[b]&&(c=J(c,ka[b](b,a.value)))});b.j||P(a.j,function(a){var b,f=a.s;a.type&&Ka[a.type]?b=Ka[a.type](f,a.w):f.length&&(b=Za(f));b&&(c=J(c,b))});b.id||a.id&&
(c=J(c,function(b){return!!b&&b.id==a.id}));c||"default"in b||(c=z);return c}function n(a){return X(a)%2}function A(a){return!(X(a)%2)}function X(a){var b=a.parentNode,c=0,d=b[Ja],e=a._i||-1,g=b._l||-1;if(!d)return-1;d=d.length;if(g==d&&0<=e&&0<=g)return e;b._l=d;e=-1;for(b=b.firstElementChild||b.firstChild;b;b=b[O])N(b)&&(b._i=++c,a===b&&(e=c));return e}function La(a){for(;a=a[O];)if(N(a))return!1;return!0}function Ma(a){for(;a=a[$a];)if(N(a))return!1;return!0}function K(a,b){return a?"class"==b?
a.className||"":"for"==b?a.htmlFor||"":"style"==b?a.style.cssText||"":(I?a.getAttribute(b):a.getAttribute(b,2))||"":""}function U(a){return 1==a.nodeType}function J(a,b){return a?b?function(){return a.apply(window,arguments)&&b.apply(window,arguments)}:a:b}function Ga(a){function b(){0<=p&&(k.id=c(p,m).replace(/\\/g,""),p=-1);if(0<=r){var a=r==m?null:c(r,m);0>">~+".indexOf(a)?k.tag=a:k.m=a;r=-1}0<=V&&(k.f.push(c(V+1,m).replace(/\\/g,"")),V=-1)}function c(b,d){return C(a.slice(b,d))}a=0<=">~+".indexOf(a.slice(-1))?
a+" * ":a+" ";for(var d=[],e=-1,g=-1,l=-1,n=-1,V=-1,p=-1,r=-1,t="",u="",x,m=0,A=a.length,k=null,v=null;t=u,u=a.charAt(m),m<A;m++)"\\"!=t&&(k||(x=m,k={i:null,g:[],j:[],f:[],tag:null,m:null,id:null,v:function(){return I?this.K:this.tag}},r=m),0<=e?"]"==u?(v.s?v.w=c(l||e+1,m):v.s=c(e+1,m),!(e=v.w)||'"'!=e.charAt(0)&&"'"!=e.charAt(0)||(v.w=e.slice(1,-1)),k.j.push(v),v=null,e=l=-1):"="==u&&(l=0<="|~^$*".indexOf(t)?t:"",v.type=l+u,v.s=c(e+1,m-l.length),l=m+1):0<=g?")"==u&&(0<=n&&(v.value=c(g+1,m)),n=g=
-1):"#"==u?(b(),p=m+1):"."==u?(b(),V=m):":"==u?(b(),n=m):"["==u?(b(),e=m,v={}):"("==u?(0<=n&&(v={name:c(n+1,m),value:null},k.g.push(v)),g=m):" "==u&&t!=u&&(b(),0<=n&&k.g.push({name:c(n+1,m)}),k.H=k.g.length||k.j.length||k.f.length,k.L=k.i=c(x,m),k.K=k.tag=k.m?null:k.tag||"*",k.tag&&(k.tag=k.tag.toUpperCase()),d.length&&d[d.length-1].m&&(k.G=d.pop(),k.i=k.G.i+" "+k.i),d.push(k),k=null));return d}function M(a,b){var c=b||[];a&&c.push(a);return c}var Fa=ra&&"BackCompat"==document.compatMode,F=R&&!T("9"),
Ja=document.firstChild.children?"children":"childNodes",I=!1,Ka={"*=":function(a,b){return function(c){return 0<=K(c,a).indexOf(b)}},"^=":function(a,b){return function(c){return 0==K(c,a).indexOf(b)}},"$=":function(a,b){return function(c){c=" "+K(c,a);return c.lastIndexOf(b)==c.length-b.length}},"~=":function(a,b){var c=" "+b+" ";return function(b){return 0<=(" "+K(b,a)+" ").indexOf(c)}},"|=":function(a,b){b=" "+b;return function(c){c=" "+K(c,a);return c==b||0==c.indexOf(b+"-")}},"=":function(a,b){return function(c){return K(c,
a)==b}}},W="undefined"==typeof document.firstChild.nextElementSibling,O=W?"nextSibling":"nextElementSibling",$a=W?"previousSibling":"previousElementSibling",N=W?U:z,ka={checked:function(){return function(a){return a.checked||a.attributes.checked}},"first-child":function(){return Ma},"last-child":function(){return La},"only-child":function(){return function(a){return Ma(a)&&La(a)?!0:!1}},empty:function(){return function(a){var b=a.childNodes;for(a=a.childNodes.length-1;0<=a;a--){var c=b[a].nodeType;
if(1===c||3==c)return!1}return!0}},contains:function(a,b){var c=b.charAt(0);if('"'==c||"'"==c)b=b.slice(1,-1);return function(a){return 0<=a.innerHTML.indexOf(b)}},not:function(a,b){var c=Ga(b)[0],d={h:1};"*"!=c.tag&&(d.tag=1);c.f.length||(d.f=1);var e=l(c,d);return function(a){return!e(a)}},"nth-child":function(a,b){if("odd"==b)return n;if("even"==b)return A;if(-1!=b.indexOf("n")){var c=b.split("n",2),d=c[0]?"-"==c[0]?-1:parseInt(c[0],10):1,e=c[1]?parseInt(c[1],10):0,g=0,l=-1;0<d?0>e?e=e%d&&d+e%
d:0<e&&(e>=d&&(g=e-e%d),e=e%d):0>d&&(d*=-1,0<e&&(l=e,e=e%d));if(0<d)return function(a){a=X(a);return a>=g&&(0>l||a<=l)&&a%d==e};b=e}var p=parseInt(b,10);return function(a){return X(a)==p}}},Za=F?function(a){var b=a.toLowerCase();"class"==b&&(a="className");return function(c){return I?c.getAttribute(a):c[a]||c[b]}}:function(a){return function(b){return b&&b.getAttribute&&b.hasAttribute(a)}},Ia={},Ea={},Da={},Ca=!!document.querySelectorAll&&(!ra||T("526")),x=0,Ya=F?function(a){return I?a.getAttribute("_uid")||
a.setAttribute("_uid",++x)||x:a.uniqueID}:function(a){return a._uid||(a._uid=++x)};a.g=ka;return a}();aa("goog.dom.query",Sa);aa("goog.dom.query.pseudos",Sa.g);function Ta(){this.b=[];this.a={};Ua(this)}function Ua(a){a.c=function(a,b){return Sa(a,b)}}function Va(a,c){var b=a.c("[itemscope]",c);0==b.length||P(b,function(a){if(!(0<=ia(this.b,a)))switch(this.b.push(a),a.getAttribute("itemprop")){case "author":Wa(this,a)}},a)}
function Xa(a,c){var b=a.c("[itemprop]",c);0==b.length||P(b,function(a){if(!(0<=ia(this.b,a))){this.b.push(a);var b="";switch(a.getAttribute("itemprop")){case "identifier":if(this.a.mid)break;this.a.mid=Z(a,"content");break;case "headline":this.a.title=ab(a);break;case "datePublished":(b=Z(a,"content"))||(b=Z(a,"datetime"));this.a.dpub=b;break;case "dateModified":(b=Z(a,"content"))||(b=Z(a,"datetime"));this.a.dmod=b;break;case "genre":this.a.gen=Z(a,"content");break;case "description":case "abstract":var c=
ab(a)||"";c||(c=Z(a,"content"));this.a.des=c;break;case "articleBody":b="";a&&(b=a.offsetHeight);this.a.arth=b;var b=this.a,r="",p={};if(a)var p=a.getBoundingClientRect(),t=w.document.body,l=w.document.documentElement,p={top:p.top+(window.pageYOffset||l.scrollTop||t.scrollTop)-(l.clientTop||t.clientTop||0),left:p.left+(window.pageXOffset||l.scrollLeft||t.scrollLeft)-(l.clientLeft||t.clientLeft||0)};p&&p.top&&(r=parseInt(p.top,10));b.artst=r;var b=this.a,r=0,n;a&&Y(a)&&(n=Y(a));n&&(r=n.length);b.arts=
r;n=this.a;b=0;a&&Y(a)&&(c=Y(a));c&&(b=c.split(" ").length);n.artw=b;this.a.img=this.c("img",a).length;break;case "author":this.a.anm=Z(a,"content")}}},a)}function bb(a){var c="";a&&a.getAttribute("itemtype")&&(a=a.getAttribute("itemtype"),c=a.split("schema.org/")[1]||"");return c}function Z(a,c){var b="";a&&a.getAttribute(c)&&(b=a.getAttribute(c));return b}function ab(a){var c="";a&&Y(a)&&(c=Y(a));return c}
function Wa(a,c){var b=a.c("[itemprop]",c);0!=b.length&&P(b,function(a){if(!(0<=ia(this.b,a)))switch(this.b.push(a),a.getAttribute("itemprop")){case "name":this.a.anm=Z(a,"content");break;case "url":this.a.aurl=Z(a,"href")}},a)}function cb(a){var c=a.c("[itemscope]");return la(c,function(a){a=bb(a);return"BlogPosting"===a||"NewsArticle"===a||"Article"===a||"WebPage"===a||"News"===a},a)};function db(){this.a=new Ta}var eb=void 0;db.prototype.b=function(){var a;a=this.a;var c=cb(a);if(c){a.a.type=bb(c);a.a.mid=Z(c,"data-id");a.a.url=w.location.href.split("#")[0]||"";Va(a,c);Xa(a,c);var b;b:{c=a.a;for(b in c){b=!1;break b}b=!0}b?a=!1:(b="",JSON&&"function"===typeof JSON.stringify?a=JSON.stringify(a.a):(b=[],B(new ea,a.a,b),a=b.join("")),b=a,a=new G,a.A("et","pvm"),a.o("mp",b))}else a=!1;return a};var fb=db.prototype;fb.getMediaData=fb.b;
ca.publish("module_init","media",function(){eb||(eb=new db);return eb});})();
