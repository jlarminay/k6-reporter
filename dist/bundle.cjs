"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});function ee(w){return w&&w.__esModule&&Object.prototype.hasOwnProperty.call(w,"default")?w.default:w}function I(w){throw new Error('Could not dynamically require "'+w+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var z={exports:{}},B;function re(){return B||(B=1,function(w,j){(function(_){w.exports=_()})(function(){return function(){function _(x,a,f){function v(p,i){if(!a[p]){if(!x[p]){var s=typeof I=="function"&&I;if(!i&&s)return s(p,!0);if(u)return u(p,!0);var c=new Error("Cannot find module '"+p+"'");throw c.code="MODULE_NOT_FOUND",c}var n=a[p]={exports:{}};x[p][0].call(n.exports,function(o){var h=x[p][1][o];return v(h||o)},n,n.exports,_,x,a,f)}return a[p].exports}for(var u=typeof I=="function"&&I,T=0;T<f.length;T++)v(f[T]);return v}return _}()({1:[function(_,x,a){var f=_("fs"),v=_("path"),u=_("./utils"),T=!1,p=_("../package.json").version,i="<",s=">",c="%",n="locals",o="ejs",h="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",y=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],b=y.concat("cache"),A=/^\uFEFF/,k=/^[a-zA-Z_$][0-9a-zA-Z_$]*$/;a.cache=u.cache,a.fileLoader=f.readFileSync,a.localsName=n,a.promiseImpl=new Function("return this;")().Promise,a.resolveInclude=function(r,l,e){var t=v.dirname,d=v.extname,g=v.resolve,L=g(e?l:t(l),r),N=d(r);return N||(L+=".ejs"),L};function m(r,l){var e;if(l.some(function(t){return e=a.resolveInclude(r,t,!0),f.existsSync(e)}))return e}function E(r,l){var e,t,d=l.views,g=/^[A-Za-z]+:\\|^\//.exec(r);if(g&&g.length)r=r.replace(/^\/*/,""),Array.isArray(l.root)?e=m(r,l.root):e=a.resolveInclude(r,l.root||"/",!0);else if(l.filename&&(t=a.resolveInclude(r,l.filename),f.existsSync(t)&&(e=t)),!e&&Array.isArray(d)&&(e=m(r,d)),!e&&typeof l.includer!="function")throw new Error('Could not find the include file "'+l.escapeFunction(r)+'"');return e}function S(r,l){var e,t=r.filename,d=arguments.length>1;if(r.cache){if(!t)throw new Error("cache option requires a filename");if(e=a.cache.get(t),e)return e;d||(l=W(t).toString().replace(A,""))}else if(!d){if(!t)throw new Error("Internal EJS error: no file name or template provided");l=W(t).toString().replace(A,"")}return e=a.compile(l,r),r.cache&&a.cache.set(t,e),e}function G(r,l,e){var t;if(e){try{t=S(r)(l)}catch(d){return e(d)}e(null,t)}else{if(typeof a.promiseImpl=="function")return new a.promiseImpl(function(d,g){try{t=S(r)(l),d(t)}catch(L){g(L)}});throw new Error("Please provide a callback function")}}function W(r){return a.fileLoader(r)}function Z(r,l){var e=u.shallowCopy(u.createNullProtoObjWherePossible(),l);if(e.filename=E(r,e),typeof l.includer=="function"){var t=l.includer(r,e.filename);if(t&&(t.filename&&(e.filename=t.filename),t.template))return S(e,t.template)}return S(e)}function U(r,l,e,t,d){var g=l.split(`
`),L=Math.max(t-3,0),N=Math.min(g.length,t+3),P=d(e),M=g.slice(L,N).map(function(C,R){var D=R+L+1;return(D==t?" >> ":"    ")+D+"| "+C}).join(`
`);throw r.path=P,r.message=(P||"ejs")+":"+t+`
`+M+`

`+r.message,r}function J(r){return r.replace(/;(\s*$)/,"$1")}a.compile=function(l,e){var t;return e&&e.scope&&(T||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),T=!0),e.context||(e.context=e.scope),delete e.scope),t=new F(l,e),t.compile()},a.render=function(r,l,e){var t=l||u.createNullProtoObjWherePossible(),d=e||u.createNullProtoObjWherePossible();return arguments.length==2&&u.shallowCopyFromList(d,t,y),S(d,r)(t)},a.renderFile=function(){var r=Array.prototype.slice.call(arguments),l=r.shift(),e,t={filename:l},d,g;return typeof arguments[arguments.length-1]=="function"&&(e=r.pop()),r.length?(d=r.shift(),r.length?u.shallowCopy(t,r.pop()):(d.settings&&(d.settings.views&&(t.views=d.settings.views),d.settings["view cache"]&&(t.cache=!0),g=d.settings["view options"],g&&u.shallowCopy(t,g)),u.shallowCopyFromList(t,d,b)),t.filename=l):d=u.createNullProtoObjWherePossible(),G(t,d,e)},a.Template=F,a.clearCache=function(){a.cache.reset()};function F(r,l){var e=u.hasOwnOnlyObject(l),t=u.createNullProtoObjWherePossible();this.templateText=r,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",t.client=e.client||!1,t.escapeFunction=e.escape||e.escapeFunction||u.escapeXML,t.compileDebug=e.compileDebug!==!1,t.debug=!!e.debug,t.filename=e.filename,t.openDelimiter=e.openDelimiter||a.openDelimiter||i,t.closeDelimiter=e.closeDelimiter||a.closeDelimiter||s,t.delimiter=e.delimiter||a.delimiter||c,t.strict=e.strict||!1,t.context=e.context,t.cache=e.cache||!1,t.rmWhitespace=e.rmWhitespace,t.root=e.root,t.includer=e.includer,t.outputFunctionName=e.outputFunctionName,t.localsName=e.localsName||a.localsName||n,t.views=e.views,t.async=e.async,t.destructuredLocals=e.destructuredLocals,t.legacyInclude=typeof e.legacyInclude<"u"?!!e.legacyInclude:!0,t.strict?t._with=!1:t._with=typeof e._with<"u"?e._with:!0,this.opts=t,this.regex=this.createRegex()}F.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},F.prototype={createRegex:function(){var r=h,l=u.escapeRegExpChars(this.opts.delimiter),e=u.escapeRegExpChars(this.opts.openDelimiter),t=u.escapeRegExpChars(this.opts.closeDelimiter);return r=r.replace(/%/g,l).replace(/</g,e).replace(/>/g,t),new RegExp(r)},compile:function(){var r,l,e=this.opts,t="",d="",g=e.escapeFunction,L,N=e.filename?JSON.stringify(e.filename):"undefined";if(!this.source){if(this.generateSource(),t+=`  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`,e.outputFunctionName){if(!k.test(e.outputFunctionName))throw new Error("outputFunctionName is not a valid JS identifier.");t+="  var "+e.outputFunctionName+` = __append;
`}if(e.localsName&&!k.test(e.localsName))throw new Error("localsName is not a valid JS identifier.");if(e.destructuredLocals&&e.destructuredLocals.length){for(var P="  var __locals = ("+e.localsName+` || {}),
`,M=0;M<e.destructuredLocals.length;M++){var C=e.destructuredLocals[M];if(!k.test(C))throw new Error("destructuredLocals["+M+"] is not a valid JS identifier.");M>0&&(P+=`,
  `),P+=C+" = __locals."+C}t+=P+`;
`}e._with!==!1&&(t+="  with ("+e.localsName+` || {}) {
`,d+=`  }
`),d+=`  return __output;
`,this.source=t+this.source+d}e.compileDebug?r=`var __line = 1
  , __lines = `+JSON.stringify(this.templateText)+`
  , __filename = `+N+`;
try {
`+this.source+`} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}
`:r=this.source,e.client&&(r="escapeFn = escapeFn || "+g.toString()+`;
`+r,e.compileDebug&&(r="rethrow = rethrow || "+U.toString()+`;
`+r)),e.strict&&(r=`"use strict";
`+r),e.debug&&console.log(r),e.compileDebug&&e.filename&&(r=r+`
//# sourceURL=`+N+`
`);try{if(e.async)try{L=new Function("return (async function(){}).constructor;")()}catch(O){throw O instanceof SyntaxError?new Error("This environment does not support async/await"):O}else L=Function;l=new L(e.localsName+", escapeFn, include, rethrow",r)}catch(O){throw O instanceof SyntaxError&&(e.filename&&(O.message+=" in "+e.filename),O.message+=` while compiling ejs

`,O.message+=`If the above error is not helpful, you may want to try EJS-Lint:
`,O.message+="https://github.com/RyanZim/EJS-Lint",e.async||(O.message+=`
`,O.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),O}var R=e.client?l:function(H){var Q=function(Y,X){var q=u.shallowCopy(u.createNullProtoObjWherePossible(),H);return X&&(q=u.shallowCopy(q,X)),Z(Y,e)(q)};return l.apply(e.context,[H||u.createNullProtoObjWherePossible(),g,Q,U])};if(e.filename&&typeof Object.defineProperty=="function"){var D=e.filename,K=v.basename(D,v.extname(D));try{Object.defineProperty(R,"name",{value:K,writable:!1,enumerable:!1,configurable:!0})}catch{}}return R},generateSource:function(){var r=this.opts;r.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,`
`).replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var l=this,e=this.parseTemplateText(),t=this.opts.delimiter,d=this.opts.openDelimiter,g=this.opts.closeDelimiter;e&&e.length&&e.forEach(function(L,N){var P;if(L.indexOf(d+t)===0&&L.indexOf(d+t+t)!==0&&(P=e[N+2],!(P==t+g||P=="-"+t+g||P=="_"+t+g)))throw new Error('Could not find matching close tag for "'+L+'".');l.scanLine(L)})},parseTemplateText:function(){for(var r=this.templateText,l=this.regex,e=l.exec(r),t=[],d;e;)d=e.index,d!==0&&(t.push(r.substring(0,d)),r=r.slice(d)),t.push(e[0]),r=r.slice(e[0].length),e=l.exec(r);return r&&t.push(r),t},_addOutput:function(r){if(this.truncate&&(r=r.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!r)return r;r=r.replace(/\\/g,"\\\\"),r=r.replace(/\n/g,"\\n"),r=r.replace(/\r/g,"\\r"),r=r.replace(/"/g,'\\"'),this.source+='    ; __append("'+r+`")
`},scanLine:function(r){var l=this,e=this.opts.delimiter,t=this.opts.openDelimiter,d=this.opts.closeDelimiter,g=0;switch(g=r.split(`
`).length-1,r){case t+e:case t+e+"_":this.mode=F.modes.EVAL;break;case t+e+"=":this.mode=F.modes.ESCAPED;break;case t+e+"-":this.mode=F.modes.RAW;break;case t+e+"#":this.mode=F.modes.COMMENT;break;case t+e+e:this.mode=F.modes.LITERAL,this.source+='    ; __append("'+r.replace(t+e+e,t+e)+`")
`;break;case e+e+d:this.mode=F.modes.LITERAL,this.source+='    ; __append("'+r.replace(e+e+d,e+d)+`")
`;break;case e+d:case"-"+e+d:case"_"+e+d:this.mode==F.modes.LITERAL&&this._addOutput(r),this.mode=null,this.truncate=r.indexOf("-")===0||r.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case F.modes.EVAL:case F.modes.ESCAPED:case F.modes.RAW:r.lastIndexOf("//")>r.lastIndexOf(`
`)&&(r+=`
`)}switch(this.mode){case F.modes.EVAL:this.source+="    ; "+r+`
`;break;case F.modes.ESCAPED:this.source+="    ; __append(escapeFn("+J(r)+`))
`;break;case F.modes.RAW:this.source+="    ; __append("+J(r)+`)
`;break;case F.modes.COMMENT:break;case F.modes.LITERAL:this._addOutput(r);break}}else this._addOutput(r)}l.opts.compileDebug&&g&&(this.currentLine+=g,this.source+="    ; __line = "+this.currentLine+`
`)}},a.escapeXML=u.escapeXML,a.__express=a.renderFile,a.VERSION=p,a.name=o,typeof window<"u"&&(window.ejs=a)},{"../package.json":6,"./utils":2,fs:3,path:4}],2:[function(_,x,a){var f=/[|\\{}()[\]^$+*?.]/g,v=Object.prototype.hasOwnProperty,u=function(n,o){return v.apply(n,[o])};a.escapeRegExpChars=function(n){return n?String(n).replace(f,"\\$&"):""};var T={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},p=/[&<>'"]/g;function i(n){return T[n]||n}var s=`var _ENCODE_HTML_RULES = {
      "&": "&amp;"
    , "<": "&lt;"
    , ">": "&gt;"
    , '"': "&#34;"
    , "'": "&#39;"
    }
  , _MATCH_HTML = /[&<>'"]/g;
function encode_char(c) {
  return _ENCODE_HTML_RULES[c] || c;
};
`;a.escapeXML=function(n){return n==null?"":String(n).replace(p,i)};function c(){return Function.prototype.toString.call(this)+`;
`+s}try{typeof Object.defineProperty=="function"?Object.defineProperty(a.escapeXML,"toString",{value:c}):a.escapeXML.toString=c}catch{console.warn("Unable to set escapeXML.toString (is the Function prototype frozen?)")}a.shallowCopy=function(n,o){if(o=o||{},n!=null)for(var h in o)u(o,h)&&(h==="__proto__"||h==="constructor"||(n[h]=o[h]));return n},a.shallowCopyFromList=function(n,o,h){if(h=h||[],o=o||{},n!=null)for(var y=0;y<h.length;y++){var b=h[y];if(typeof o[b]<"u"){if(!u(o,b)||b==="__proto__"||b==="constructor")continue;n[b]=o[b]}}return n},a.cache={_data:{},set:function(n,o){this._data[n]=o},get:function(n){return this._data[n]},remove:function(n){delete this._data[n]},reset:function(){this._data={}}},a.hyphenToCamel=function(n){return n.replace(/-[a-z]/g,function(o){return o[1].toUpperCase()})},a.createNullProtoObjWherePossible=function(){return typeof Object.create=="function"?function(){return Object.create(null)}:{__proto__:null}instanceof Object?function(){return{}}:function(){return{__proto__:null}}}(),a.hasOwnOnlyObject=function(n){var o=a.createNullProtoObjWherePossible();for(var h in n)u(n,h)&&(o[h]=n[h]);return o}},{}],3:[function(_,x,a){},{}],4:[function(_,x,a){(function(f){function v(i,s){for(var c=0,n=i.length-1;n>=0;n--){var o=i[n];o==="."?i.splice(n,1):o===".."?(i.splice(n,1),c++):c&&(i.splice(n,1),c--)}if(s)for(;c--;c)i.unshift("..");return i}a.resolve=function(){for(var i="",s=!1,c=arguments.length-1;c>=-1&&!s;c--){var n=c>=0?arguments[c]:f.cwd();if(typeof n!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!n)continue;i=n+"/"+i,s=n.charAt(0)==="/"}return i=v(T(i.split("/"),function(o){return!!o}),!s).join("/"),(s?"/":"")+i||"."},a.normalize=function(i){var s=a.isAbsolute(i),c=p(i,-1)==="/";return i=v(T(i.split("/"),function(n){return!!n}),!s).join("/"),!i&&!s&&(i="."),i&&c&&(i+="/"),(s?"/":"")+i},a.isAbsolute=function(i){return i.charAt(0)==="/"},a.join=function(){var i=Array.prototype.slice.call(arguments,0);return a.normalize(T(i,function(s,c){if(typeof s!="string")throw new TypeError("Arguments to path.join must be strings");return s}).join("/"))},a.relative=function(i,s){i=a.resolve(i).substr(1),s=a.resolve(s).substr(1);function c(k){for(var m=0;m<k.length&&k[m]==="";m++);for(var E=k.length-1;E>=0&&k[E]==="";E--);return m>E?[]:k.slice(m,E-m+1)}for(var n=c(i.split("/")),o=c(s.split("/")),h=Math.min(n.length,o.length),y=h,b=0;b<h;b++)if(n[b]!==o[b]){y=b;break}for(var A=[],b=y;b<n.length;b++)A.push("..");return A=A.concat(o.slice(y)),A.join("/")},a.sep="/",a.delimiter=":",a.dirname=function(i){if(typeof i!="string"&&(i=i+""),i.length===0)return".";for(var s=i.charCodeAt(0),c=s===47,n=-1,o=!0,h=i.length-1;h>=1;--h)if(s=i.charCodeAt(h),s===47){if(!o){n=h;break}}else o=!1;return n===-1?c?"/":".":c&&n===1?"/":i.slice(0,n)};function u(i){typeof i!="string"&&(i=i+"");var s=0,c=-1,n=!0,o;for(o=i.length-1;o>=0;--o)if(i.charCodeAt(o)===47){if(!n){s=o+1;break}}else c===-1&&(n=!1,c=o+1);return c===-1?"":i.slice(s,c)}a.basename=function(i,s){var c=u(i);return s&&c.substr(-1*s.length)===s&&(c=c.substr(0,c.length-s.length)),c},a.extname=function(i){typeof i!="string"&&(i=i+"");for(var s=-1,c=0,n=-1,o=!0,h=0,y=i.length-1;y>=0;--y){var b=i.charCodeAt(y);if(b===47){if(!o){c=y+1;break}continue}n===-1&&(o=!1,n=y+1),b===46?s===-1?s=y:h!==1&&(h=1):s!==-1&&(h=-1)}return s===-1||n===-1||h===0||h===1&&s===n-1&&s===c+1?"":i.slice(s,n)};function T(i,s){if(i.filter)return i.filter(s);for(var c=[],n=0;n<i.length;n++)s(i[n],n,i)&&c.push(i[n]);return c}var p="ab".substr(-1)==="b"?function(i,s,c){return i.substr(s,c)}:function(i,s,c){return s<0&&(s=i.length+s),i.substr(s,c)}}).call(this,_("_process"))},{_process:5}],5:[function(_,x,a){var f=x.exports={},v,u;function T(){throw new Error("setTimeout has not been defined")}function p(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?v=setTimeout:v=T}catch{v=T}try{typeof clearTimeout=="function"?u=clearTimeout:u=p}catch{u=p}})();function i(m){if(v===setTimeout)return setTimeout(m,0);if((v===T||!v)&&setTimeout)return v=setTimeout,setTimeout(m,0);try{return v(m,0)}catch{try{return v.call(null,m,0)}catch{return v.call(this,m,0)}}}function s(m){if(u===clearTimeout)return clearTimeout(m);if((u===p||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(m);try{return u(m)}catch{try{return u.call(null,m)}catch{return u.call(this,m)}}}var c=[],n=!1,o,h=-1;function y(){!n||!o||(n=!1,o.length?c=o.concat(c):h=-1,c.length&&b())}function b(){if(!n){var m=i(y);n=!0;for(var E=c.length;E;){for(o=c,c=[];++h<E;)o&&o[h].run();h=-1,E=c.length}o=null,n=!1,s(m)}}f.nextTick=function(m){var E=new Array(arguments.length-1);if(arguments.length>1)for(var S=1;S<arguments.length;S++)E[S-1]=arguments[S];c.push(new A(m,E)),c.length===1&&!n&&i(b)};function A(m,E){this.fun=m,this.array=E}A.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={};function k(){}f.on=k,f.addListener=k,f.once=k,f.off=k,f.removeListener=k,f.removeAllListeners=k,f.emit=k,f.prependListener=k,f.prependOnceListener=k,f.listeners=function(m){return[]},f.binding=function(m){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(m){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},{}],6:[function(_,x,a){x.exports={name:"ejs",description:"Embedded JavaScript templates",keywords:["template","engine","ejs"],version:"3.1.9",author:"Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",license:"Apache-2.0",bin:{ejs:"./bin/cli.js"},main:"./lib/ejs.js",jsdelivr:"ejs.min.js",unpkg:"ejs.min.js",repository:{type:"git",url:"git://github.com/mde/ejs.git"},bugs:"https://github.com/mde/ejs/issues",homepage:"https://github.com/mde/ejs",dependencies:{jake:"^10.8.5"},devDependencies:{browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^4.0.2","lru-cache":"^4.0.1",mocha:"^10.2.0","uglify-js":"^3.3.16"},engines:{node:">=0.10.0"},scripts:{test:"npx jake test"}}},{}]},{},[1])(1)})}(z)),z.exports}var te=re();const ne=ee(te),ie=`<!DOCTYPE html>\r
<html lang="en">\r
  <head> \r
    <meta charset="UTF-8" />\r
    <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css" crossorigin="anonymous">\r
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" crossorigin="anonymous">\r
    <link rel="shortcut icon" href="https://raw.githubusercontent.com/jlarminay/k6-reporter/main/assets/icon.png" type="image/png">\r
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\r
    <title>K6 Load Test: <%= title %></title>\r
    <style>\r
      body {\r
        margin: 1rem;\r
      }\r
      footer { \r
        float: right;\r
        font-size: 0.8rem;\r
        color: #777;\r
      }\r
      footer a {\r
        text-decoration: none;\r
        color: #777;\r
      }\r
      .failed {\r
        background-color: #ff6666 !important;\r
      }     \r
      .good {\r
        background-color: #3abe3a !important;\r
      }   \r
      td.failed {\r
        font-weight: bold;\r
      }\r
      h2 {\r
        padding-bottom: 4px;\r
        border-bottom: solid 3px #cccccc;\r
      }\r
      .tabs {\r
        display: flex;\r
        flex-wrap: wrap; \r
      }\r
      .tabs label {\r
        order: 1; \r
        display: block;\r
        padding: 1rem 2rem;\r
        margin-right: 0.2rem;\r
        cursor: pointer;\r
        color: #666;\r
        background: #ddd;\r
        font-weight: bold;\r
        font-size: 1.2rem;\r
        flex: 1 1;\r
        transition: background ease 0.2s;\r
        border-top-left-radius: 0.3rem;\r
        border-top-right-radius: 0.3rem;\r
        border-color: #ccc;\r
        border-style: solid;\r
        border-width: 2px 2px 0px;\r
        box-shadow: inset 0px -3px 7px -1px rgba(0,0,0,0.33);\r
      }\r
      .tabs .tab {\r
        order: 99;\r
        flex-grow: 1;\r
        width: 100%;\r
        display: none;\r
        padding: 1rem;\r
        background: #fff;\r
      }\r
      .tabs input[type="radio"] {\r
        display: none;\r
      }\r
      .tabs input[type="radio"]:checked + label {\r
        background: #fff;\r
        box-shadow: none;\r
        color: #000;\r
      }\r
      .tabs input[type="radio"]:checked + label + .tab {\r
        display: block;\r
      }\r
      .box {\r
        flex: 1 1;\r
        border-radius: 0.3rem;\r
        background-color: #3abe3a;\r
        margin: 1rem;\r
        padding: 0.5rem;\r
        font-size: 2vw; \r
        box-shadow: 0px 4px 7px -1px rgba(0,0,0,0.49);\r
        color: white;\r
        position: relative;\r
        overflow: hidden;\r
      }\r
      .box h4 {\r
        margin: 0;\r
        padding-bottom: 0.5rem;\r
        text-align: center;\r
        position: relative;\r
        z-index: 50;\r
      }\r
      .row {\r
        display: flex;\r
      }\r
      .row div {\r
        flex: 1 1;\r
        text-align: center;\r
        margin-bottom: 0.5rem;\r
      }\r
      .bignum {\r
        position: relative;\r
        font-size: min(6vw, 80px);\r
        z-index: 20;\r
      }\r
      table {\r
        font-size: min(2vw, 22px);\r
        width: 100%;\r
      }\r
      .icon { \r
        position: absolute;\r
        top: 60%;\r
        left: 50%;\r
        transform: translate(-50%, -50%);\r
        color: #0000002d;\r
        font-size: 8vw;\r
        z-index: 1;\r
      }\r
      .metricbox {\r
        background-color: #5697e2;\r
        font-size: 3vw;\r
        height: auto;\r
      }\r
      .metricbox .row {\r
        position: relative;\r
        z-index: 20;\r
      }\r
    </style>\r
  </head>\r
\r
  <body>\r
    <h1>\r
      <svg style="vertical-align:middle" width="50" height="45" viewBox="0 0 50 45" fill="none" class="footer-module--logo--_lkxx"><path d="M31.968 34.681a2.007 2.007 0 002.011-2.003c0-1.106-.9-2.003-2.011-2.003a2.007 2.007 0 00-2.012 2.003c0 1.106.9 2.003 2.012 2.003z" fill="#7D64FF"></path><path d="M39.575 0L27.154 16.883 16.729 9.31 0 45h50L39.575 0zM23.663 37.17l-2.97-4.072v4.072h-2.751V22.038l2.75 1.989v7.66l3.659-5.014 2.086 1.51-3.071 4.21 3.486 4.776h-3.189v.001zm8.305.17c-2.586 0-4.681-2.088-4.681-4.662 0-1.025.332-1.972.896-2.743l4.695-6.435 2.086 1.51-2.239 3.07a4.667 4.667 0 013.924 4.6c0 2.572-2.095 4.66-4.681 4.66z" fill="#7D64FF"></path></svg> \r
      &nbsp; K6 Load Test: <%= title %>\r
    </h1>\r
\r
    <div class="row">\r
      <div class="box">\r
        <i class="fas fa-globe icon"></i>\r
        <h4>Total Requests</h4>\r
        <div class="bignum"><% if(data.metrics.http_reqs) { %><%= data.metrics.http_reqs.values.count %><% } %></div>\r
        <div class="bignum"><% if(data.metrics.grpc_reqs) { %><%= data.metrics.grpc_reqs.values.count %><% } %></div>\r
      </div>\r
      <% if(data.metrics.http_req_failed && data.metrics.http_req_failed.values) { %>\r
        <div class="box <% if(data.metrics.http_req_failed.values.passes > 0) { %> failed <% } %>">\r
          <i class="far fa-times-circle icon"></i>\r
          <h4>Failed Requests</h4>\r
          <div class="bignum"><%= data.metrics.http_req_failed.values.passes %></div>\r
        </div> \r
      <% } %>     \r
      <div class="box <% if(thresholdFailures > 0) { %> failed <% } %>">\r
        <i class="fas fa-chart-bar icon"></i>\r
        <h4>Breached Thresholds</h4>\r
        <div class="bignum"><%= thresholdFailures %></div>\r
      </div>\r
      <div class="box <% if(checkFailures > 0) { %> failed <% } %>">\r
        <i class="fas fa-eye icon"></i>\r
        <h4>Failed Checks</h4>\r
        <div class="bignum"><%= checkFailures %></div>\r
      </div>\r
    </div>\r
\r
    <br>\r
    \r
    <div class="tabs">\r
      <input type="radio" name="tabs" id="tabone" checked="checked">\r
      <label for="tabone"><i class="far fa-clock"></i> &nbsp; Request Metrics</label>\r
      <div class="tab">\r
        <table class="pure-table pure-table-striped">\r
          <tbody>\r
            <thead>\r
              <tr>\r
                <th></th>\r
                <th>Count</th>\r
                <th>Average</th>\r
                <th>Maximum</th>\r
                <th>Median</th> \r
                <th>Minimum</th>\r
                <th>90th Percentile</th>\r
                <th>95th Percentile</th>\r
                <th>99th Percentile</th>\r
              </tr>\r
            </thead>\r
            \r
            <% function checkFailed(metric, valName) {\r
                if(!metric.thresholds) return ''\r
                for(thres in metric.thresholds) {\r
                  if(thres.includes(valName)) {\r
                    if(!metric.thresholds[thres].ok) return 'failed'\r
                    return 'good'\r
                  }\r
                }\r
              }\r
\r
              for(metricName of standardMetrics) { \r
                if(!data.metrics[metricName]) { continue }\r
                var metric = data.metrics[metricName] \r
            %>\r
              <tr>\r
                <td><b><%= metricName %></b></td>\r
\r
                <% if(metric.values.count) { %>\r
                  <td class="<%= checkFailed(metric, 'count') %>"><%= metric.values.count %></td>\r
                <% } else { %>\r
                  <td>-</td>\r
                <% } %>\r
                \r
                <% if(metric.values.avg) { %>\r
                  <td class="<%= checkFailed(metric, 'avg') %>"><%= metric.values.avg.toFixed(2) %></td>\r
                <% } else { %>\r
                  <td>-</td>\r
                <% } %>\r
\r
                <% if(metric.values.max) { %>\r
                  <td class="<%= checkFailed(metric, 'max') %>"><%= metric.values.max.toFixed(2) %></td>\r
                <% } else { %>\r
                  <td>-</td>\r
                <% } %>  \r
\r
                <% if(metric.values.med) { %>\r
                  <td class="<%= checkFailed(metric, 'med') %>"><%= metric.values.med.toFixed(2) %></td>\r
                <% } else { %>\r
                  <td>-</td>\r
                <% } %>  \r
                \r
                <% if(metric.values.min) { %>\r
                  <td class="<%= checkFailed(metric, 'min') %>"><%= metric.values.min.toFixed(2) %></td>\r
                <% } else { %>\r
                  <td>-</td>\r
                <% } %>   \r
                              \r
                <% if(metric.values['p(90)']) { %>\r
                  <td class="<%= checkFailed(metric, 'p(90)') %>"><%= metric.values['p(90)'].toFixed(2) %></td>\r
                <% } else { %>\r
                  <td>-</td>\r
                <% } %>\r
\r
                <% if(metric.values['p(95)']) { %>\r
                  <td class="<%= checkFailed(metric, 'p(95)') %>"><%= metric.values['p(95)'].toFixed(2) %></td>\r
                <% } else { %>\r
                  <td>-</td> \r
                <% } %>\r
\r
                <% if(metric.values['p(99)']) { %>\r
                  <td class="<%= checkFailed(metric, 'p(99)') %>"><%= metric.values['p(99)'].toFixed(2) %></td>\r
                <% } else { %>\r
                  <td>-</td> \r
                <% } %>\r
              </tr>\r
            <% } %>\r
          </tbody>\r
        </table>\r
        <br>\r
\r
        <% \r
          first = true \r
          var sortedMetrics = {}\r
          Object.keys(data.metrics).sort().forEach(function(k) {\r
            sortedMetrics[k] = data.metrics[k]\r
          });\r
          for(metricName in sortedMetrics) {\r
            if(standardMetrics.includes(metricName) || otherMetrics.includes(metricName)) { continue }\r
            var metric = sortedMetrics[metricName] \r
        %>\r
          <% if(first) { first = false %> <h2>Custom Metrics</h2> \r
          <table class="pure-table pure-table-striped">\r
            <tbody>\r
              <thead>\r
                <tr>\r
                  <th></th>\r
                  <th>Count</th>\r
                  <th>Average</th>\r
                  <th>Maximum</th>\r
                  <th>Median</th> \r
                  <th>Minimum</th>\r
                  <th>90th Percentile</th>\r
                  <th>95th Percentile</th>\r
                  <th>99th Percentile</th>\r
                </tr>\r
              </thead>\r
              <% } %>\r
              <tr>\r
                <td><b><%= metricName %></b></td>\r
\r
                <% if(metric.values.count) { %>\r
                  <td class="<%= checkFailed(metric, 'count') %>"><%= metric.values.count %></td>\r
                <% } else { %>\r
                  <td>-</td>\r
                <% } %>\r
                \r
                <% if(metric.values.avg) { %>\r
                  <td class="<%= checkFailed(metric, 'avg') %>"><%= metric.values.avg.toFixed(2) %></td>\r
                <% } else { %>\r
                  <td>-</td>\r
                <% } %>\r
\r
                <% if(metric.values.max) { %>\r
                  <td class="<%= checkFailed(metric, 'max') %>"><%= metric.values.max.toFixed(2) %></td>\r
                <% } else { %>\r
                  <td>-</td>\r
                <% } %>  \r
\r
                <% if(metric.values.med) { %>\r
                  <td class="<%= checkFailed(metric, 'med') %>"><%= metric.values.med.toFixed(2) %></td>\r
                <% } else { %>\r
                  <td>-</td>\r
                <% } %>  \r
                \r
                <% if(metric.values.min) { %>\r
                  <td class="<%= checkFailed(metric, 'min') %>"><%= metric.values.min.toFixed(2) %></td>\r
                <% } else { %>\r
                  <td>-</td>\r
                <% } %>   \r
                              \r
                <% if(metric.values['p(90)']) { %>\r
                  <td class="<%= checkFailed(metric, 'p(90)') %>"><%= metric.values['p(90)'].toFixed(2) %></td>\r
                <% } else { %>\r
                  <td>-</td>\r
                <% } %>\r
\r
                <% if(metric.values['p(95)']) { %>\r
                  <td class="<%= checkFailed(metric, 'p(95)') %>"><%= metric.values['p(95)'].toFixed(2) %></td>\r
                <% } else { %>\r
                  <td>-</td> \r
                <% } %>\r
\r
                <% if(metric.values['p(99)']) { %>\r
                  <td class="<%= checkFailed(metric, 'p(99)') %>"><%= metric.values['p(99)'].toFixed(2) %></td>\r
                <% } else { %>\r
                  <td>-</td> \r
                <% } %>\r
              </tr>\r
              <% } %>\r
            </tbody>\r
          </table>\r
          <br>\r
\r
\r
        &nbsp;&nbsp; Note. All times are in milli-seconds\r
      </div> \r
      <!-- ---- end tab ---- -->\r
\r
      <input type="radio" name="tabs" id="tabtwo">\r
      <label for="tabtwo"><i class="fas fa-chart-line"></i> &nbsp; Other Stats</label>\r
      <div class="tab">\r
        <div class="row">\r
          <% if (data.metrics.checks) { %>\r
            <div class="box metricbox">\r
              <h4>Checks</h4>\r
              <i class="fas fa-eye icon"></i>\r
              <div class="row"><div>Passed</div><div><%= data.metrics.checks.values.passes %></div></div>\r
              <div class="row"><div>Failed</div><div><%= data.metrics.checks.values.fails %></div></div>\r
            </div>\r
          <% } %>\r
\r
          <% if (data.metrics.iterations) { %>\r
            <div class="box metricbox">\r
              <h4>Iterations</h4>\r
              <i class="fas fa-redo icon"></i>\r
              <div class="row"><div>Total</div><div><%= data.metrics.iterations.values.count %></div></div>\r
              <div class="row"><div>Rate</div><div><%= data.metrics.iterations.values.rate.toFixed(2) %>/s</div></div>\r
            </div>\r
          <% } %>\r
\r
          <div class="box metricbox">\r
            <h4>Virtual Users</h4>\r
            <i class="fas fa-user icon"></i>\r
            <div class="row"><div>Min</div><div><%= data.metrics.vus ? data.metrics.vus.values.min : 1 %></div></div>\r
            <div class="row"><div>Max</div><div><%= data.metrics.vus ? data.metrics.vus.values.max : 1 %></div></div>\r
          </div>\r
        </div>\r
\r
        <div class="row">\r
          <div class="box metricbox">\r
            <h4>Requests</h4>\r
            <i class="fas fa-globe icon"></i>\r
            <div class="row"><div>Total</div><div><% if(data.metrics.http_reqs) { %><%= data.metrics.http_reqs.values.count %><% } %></div></div>\r
            <div class="row"><div>Rate</div><div><% if(data.metrics.http_reqs) { %><%= data.metrics.http_reqs.values.rate.toFixed(2) %>/s<% } %></div></div>\r
          </div>\r
\r
          <div class="box metricbox">\r
            <h4>Data Received</h4>\r
            <i class="fas fa-cloud-download-alt icon"></i>\r
            <div class="row"><div>Total</div><div><%= (data.metrics.data_received.values.count/1000000).toFixed(2) %> MB</div></div>\r
            <div class="row"><div>Rate</div><div><%= (data.metrics.data_received.values.rate/1000000).toFixed(2) %> mB/s</div></div>\r
          </div>\r
\r
          <div class="box metricbox">\r
            <h4>Data Sent</h4>\r
            <i class="fas fa-cloud-upload-alt icon"></i>\r
            <div class="row"><div>Total</div><div><%= (data.metrics.data_sent.values.count/1000000).toFixed(2) %> MB</div></div>\r
            <div class="row"><div>Rate</div><div><%= (data.metrics.data_sent.values.rate/1000000).toFixed(2) %> mB/s</div></div>\r
          </div>   \r
        </div>\r
      </div>  \r
      <!-- ---- end tab ---- -->     \r
\r
      <input type="radio" name="tabs" id="tabthree">\r
      <label for="tabthree"><i class="fas fa-tasks"></i> Checks & Groups</label>\r
      <div class="tab">\r
\r
        <% for(group of data.root_group.groups) { %>\r
          <h2>&bull; Group - <%= group.name %></h2>\r
          <table class="pure-table pure-table-horizontal" style="width: 100%">\r
            <thead>\r
              <tr>\r
                <th>Check Name</th>\r
                <th>Passes</th>\r
                <th>Failures</th>\r
              </tr>\r
            </thead>\r
            <% for(check of group.checks) { %>\r
              <tr class="checkDetails <% if(check.fails > 0) { %>failed<% } %>">\r
                <td width="50%"><%= check.name %></td><td><%= check.passes %></td><td><%= check.fails %></td>\r
              </tr>\r
            <% } %>\r
          </table>\r
          <br>\r
        <% } %>\r
\r
        <h2>&bull; Other Checks</h2>\r
        <table class="pure-table pure-table-horizontal" style="width: 100%">\r
          <thead>\r
            <tr>\r
              <th>Check Name</th>\r
              <th>Passes</th>\r
              <th>Failures</th>\r
            </tr>\r
          </thead>\r
          <% for(check of data.root_group.checks) { %>\r
            <tr class="checkDetails <% if(check.fails > 0) { %>failed<% } %>">\r
              <td width="50%"><%= check.name %></td><td><%= check.passes %></td><td><%= check.fails %></td>\r
            </tr>\r
          <% } %>\r
        </table>     \r
      </div> \r
      <!-- ---- end tab ---- -->\r
    </div>\r
    <footer>K6 Reporter v<%= version %> - Josh Larminay, 2025, <a href="https://github.com/jlarminay/k6-reporter">[GitHub]</a></footer>\r
  </body>\r
</html>\r
`,$="2.3.0";function ae(w,j={}){j.title||(j.title=new Date().toISOString().slice(0,16).replace("T"," ")),j.hasOwnProperty("debug")||(j.debug=!1),console.log(`[k6-reporter v${$}] Generating HTML summary report`),j.debug&&console.log(JSON.stringify(w,null,2));let _=0,x=0;for(let p in w.metrics)if(w.metrics[p].thresholds){x++;let i=w.metrics[p].thresholds;for(let s in i)i[s].ok||_++}let a=0,f=0;if(w.root_group.checks){let{passes:p,fails:i}=V(w.root_group.checks);a+=i,f+=p}for(let p of w.root_group.groups)if(p.checks){let{passes:i,fails:s}=V(p.checks);a+=s,f+=i}const v=["grpc_req_duration","http_req_duration","http_req_waiting","http_req_connecting","http_req_tls_handshaking","http_req_sending","http_req_receiving","http_req_blocked","iteration_duration","group_duration","ws_connecting","ws_msgs_received","ws_msgs_sent","ws_sessions"],u=["iterations","data_sent","checks","http_reqs","data_received","vus_max","vus","http_req_failed","http_req_duration{expected_response:true}"];return ne.render(ie,{data:w,title:j.title,standardMetrics:v,otherMetrics:u,thresholdFailures:_,thresholdCount:x,checkFailures:a,checkPasses:f,version:$})}function V(w){let j=0,_=0;for(let x of w)j+=parseInt(x.passes),_+=parseInt(x.fails);return{passes:j,fails:_}}exports.htmlReport=ae;
