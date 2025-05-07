"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});function ee(w){return w&&w.__esModule&&Object.prototype.hasOwnProperty.call(w,"default")?w.default:w}function I(w){throw new Error('Could not dynamically require "'+w+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var z={exports:{}},B;function te(){return B||(B=1,function(w,j){(function(_){w.exports=_()})(function(){return function(){function _(x,a,f){function v(p,i){if(!a[p]){if(!x[p]){var s=typeof I=="function"&&I;if(!i&&s)return s(p,!0);if(u)return u(p,!0);var c=new Error("Cannot find module '"+p+"'");throw c.code="MODULE_NOT_FOUND",c}var r=a[p]={exports:{}};x[p][0].call(r.exports,function(o){var h=x[p][1][o];return v(h||o)},r,r.exports,_,x,a,f)}return a[p].exports}for(var u=typeof I=="function"&&I,T=0;T<f.length;T++)v(f[T]);return v}return _}()({1:[function(_,x,a){var f=_("fs"),v=_("path"),u=_("./utils"),T=!1,p=_("../package.json").version,i="<",s=">",c="%",r="locals",o="ejs",h="(<%%|%%>|<%=|<%-|<%_|<%#|<%|%>|-%>|_%>)",y=["delimiter","scope","context","debug","compileDebug","client","_with","rmWhitespace","strict","filename","async"],b=y.concat("cache"),A=/^\uFEFF/,k=/^[a-zA-Z_$][0-9a-zA-Z_$]*$/;a.cache=u.cache,a.fileLoader=f.readFileSync,a.localsName=r,a.promiseImpl=new Function("return this;")().Promise,a.resolveInclude=function(t,l,e){var n=v.dirname,d=v.extname,g=v.resolve,L=g(e?l:n(l),t),N=d(t);return N||(L+=".ejs"),L};function m(t,l){var e;if(l.some(function(n){return e=a.resolveInclude(t,n,!0),f.existsSync(e)}))return e}function E(t,l){var e,n,d=l.views,g=/^[A-Za-z]+:\\|^\//.exec(t);if(g&&g.length)t=t.replace(/^\/*/,""),Array.isArray(l.root)?e=m(t,l.root):e=a.resolveInclude(t,l.root||"/",!0);else if(l.filename&&(n=a.resolveInclude(t,l.filename),f.existsSync(n)&&(e=n)),!e&&Array.isArray(d)&&(e=m(t,d)),!e&&typeof l.includer!="function")throw new Error('Could not find the include file "'+l.escapeFunction(t)+'"');return e}function S(t,l){var e,n=t.filename,d=arguments.length>1;if(t.cache){if(!n)throw new Error("cache option requires a filename");if(e=a.cache.get(n),e)return e;d||(l=W(n).toString().replace(A,""))}else if(!d){if(!n)throw new Error("Internal EJS error: no file name or template provided");l=W(n).toString().replace(A,"")}return e=a.compile(l,t),t.cache&&a.cache.set(n,e),e}function G(t,l,e){var n;if(e){try{n=S(t)(l)}catch(d){return e(d)}e(null,n)}else{if(typeof a.promiseImpl=="function")return new a.promiseImpl(function(d,g){try{n=S(t)(l),d(n)}catch(L){g(L)}});throw new Error("Please provide a callback function")}}function W(t){return a.fileLoader(t)}function Z(t,l){var e=u.shallowCopy(u.createNullProtoObjWherePossible(),l);if(e.filename=E(t,e),typeof l.includer=="function"){var n=l.includer(t,e.filename);if(n&&(n.filename&&(e.filename=n.filename),n.template))return S(e,n.template)}return S(e)}function U(t,l,e,n,d){var g=l.split(`
`),L=Math.max(n-3,0),N=Math.min(g.length,n+3),P=d(e),M=g.slice(L,N).map(function(C,D){var R=D+L+1;return(R==n?" >> ":"    ")+R+"| "+C}).join(`
`);throw t.path=P,t.message=(P||"ejs")+":"+n+`
`+M+`

`+t.message,t}function J(t){return t.replace(/;(\s*$)/,"$1")}a.compile=function(l,e){var n;return e&&e.scope&&(T||(console.warn("`scope` option is deprecated and will be removed in EJS 3"),T=!0),e.context||(e.context=e.scope),delete e.scope),n=new F(l,e),n.compile()},a.render=function(t,l,e){var n=l||u.createNullProtoObjWherePossible(),d=e||u.createNullProtoObjWherePossible();return arguments.length==2&&u.shallowCopyFromList(d,n,y),S(d,t)(n)},a.renderFile=function(){var t=Array.prototype.slice.call(arguments),l=t.shift(),e,n={filename:l},d,g;return typeof arguments[arguments.length-1]=="function"&&(e=t.pop()),t.length?(d=t.shift(),t.length?u.shallowCopy(n,t.pop()):(d.settings&&(d.settings.views&&(n.views=d.settings.views),d.settings["view cache"]&&(n.cache=!0),g=d.settings["view options"],g&&u.shallowCopy(n,g)),u.shallowCopyFromList(n,d,b)),n.filename=l):d=u.createNullProtoObjWherePossible(),G(n,d,e)},a.Template=F,a.clearCache=function(){a.cache.reset()};function F(t,l){var e=u.hasOwnOnlyObject(l),n=u.createNullProtoObjWherePossible();this.templateText=t,this.mode=null,this.truncate=!1,this.currentLine=1,this.source="",n.client=e.client||!1,n.escapeFunction=e.escape||e.escapeFunction||u.escapeXML,n.compileDebug=e.compileDebug!==!1,n.debug=!!e.debug,n.filename=e.filename,n.openDelimiter=e.openDelimiter||a.openDelimiter||i,n.closeDelimiter=e.closeDelimiter||a.closeDelimiter||s,n.delimiter=e.delimiter||a.delimiter||c,n.strict=e.strict||!1,n.context=e.context,n.cache=e.cache||!1,n.rmWhitespace=e.rmWhitespace,n.root=e.root,n.includer=e.includer,n.outputFunctionName=e.outputFunctionName,n.localsName=e.localsName||a.localsName||r,n.views=e.views,n.async=e.async,n.destructuredLocals=e.destructuredLocals,n.legacyInclude=typeof e.legacyInclude<"u"?!!e.legacyInclude:!0,n.strict?n._with=!1:n._with=typeof e._with<"u"?e._with:!0,this.opts=n,this.regex=this.createRegex()}F.modes={EVAL:"eval",ESCAPED:"escaped",RAW:"raw",COMMENT:"comment",LITERAL:"literal"},F.prototype={createRegex:function(){var t=h,l=u.escapeRegExpChars(this.opts.delimiter),e=u.escapeRegExpChars(this.opts.openDelimiter),n=u.escapeRegExpChars(this.opts.closeDelimiter);return t=t.replace(/%/g,l).replace(/</g,e).replace(/>/g,n),new RegExp(t)},compile:function(){var t,l,e=this.opts,n="",d="",g=e.escapeFunction,L,N=e.filename?JSON.stringify(e.filename):"undefined";if(!this.source){if(this.generateSource(),n+=`  var __output = "";
  function __append(s) { if (s !== undefined && s !== null) __output += s }
`,e.outputFunctionName){if(!k.test(e.outputFunctionName))throw new Error("outputFunctionName is not a valid JS identifier.");n+="  var "+e.outputFunctionName+` = __append;
`}if(e.localsName&&!k.test(e.localsName))throw new Error("localsName is not a valid JS identifier.");if(e.destructuredLocals&&e.destructuredLocals.length){for(var P="  var __locals = ("+e.localsName+` || {}),
`,M=0;M<e.destructuredLocals.length;M++){var C=e.destructuredLocals[M];if(!k.test(C))throw new Error("destructuredLocals["+M+"] is not a valid JS identifier.");M>0&&(P+=`,
  `),P+=C+" = __locals."+C}n+=P+`;
`}e._with!==!1&&(n+="  with ("+e.localsName+` || {}) {
`,d+=`  }
`),d+=`  return __output;
`,this.source=n+this.source+d}e.compileDebug?t=`var __line = 1
  , __lines = `+JSON.stringify(this.templateText)+`
  , __filename = `+N+`;
try {
`+this.source+`} catch (e) {
  rethrow(e, __lines, __filename, __line, escapeFn);
}
`:t=this.source,e.client&&(t="escapeFn = escapeFn || "+g.toString()+`;
`+t,e.compileDebug&&(t="rethrow = rethrow || "+U.toString()+`;
`+t)),e.strict&&(t=`"use strict";
`+t),e.debug&&console.log(t),e.compileDebug&&e.filename&&(t=t+`
//# sourceURL=`+N+`
`);try{if(e.async)try{L=new Function("return (async function(){}).constructor;")()}catch(O){throw O instanceof SyntaxError?new Error("This environment does not support async/await"):O}else L=Function;l=new L(e.localsName+", escapeFn, include, rethrow",t)}catch(O){throw O instanceof SyntaxError&&(e.filename&&(O.message+=" in "+e.filename),O.message+=` while compiling ejs

`,O.message+=`If the above error is not helpful, you may want to try EJS-Lint:
`,O.message+="https://github.com/RyanZim/EJS-Lint",e.async||(O.message+=`
`,O.message+="Or, if you meant to create an async function, pass `async: true` as an option.")),O}var D=e.client?l:function(H){var Q=function(Y,X){var q=u.shallowCopy(u.createNullProtoObjWherePossible(),H);return X&&(q=u.shallowCopy(q,X)),Z(Y,e)(q)};return l.apply(e.context,[H||u.createNullProtoObjWherePossible(),g,Q,U])};if(e.filename&&typeof Object.defineProperty=="function"){var R=e.filename,K=v.basename(R,v.extname(R));try{Object.defineProperty(D,"name",{value:K,writable:!1,enumerable:!1,configurable:!0})}catch{}}return D},generateSource:function(){var t=this.opts;t.rmWhitespace&&(this.templateText=this.templateText.replace(/[\r\n]+/g,`
`).replace(/^\s+|\s+$/gm,"")),this.templateText=this.templateText.replace(/[ \t]*<%_/gm,"<%_").replace(/_%>[ \t]*/gm,"_%>");var l=this,e=this.parseTemplateText(),n=this.opts.delimiter,d=this.opts.openDelimiter,g=this.opts.closeDelimiter;e&&e.length&&e.forEach(function(L,N){var P;if(L.indexOf(d+n)===0&&L.indexOf(d+n+n)!==0&&(P=e[N+2],!(P==n+g||P=="-"+n+g||P=="_"+n+g)))throw new Error('Could not find matching close tag for "'+L+'".');l.scanLine(L)})},parseTemplateText:function(){for(var t=this.templateText,l=this.regex,e=l.exec(t),n=[],d;e;)d=e.index,d!==0&&(n.push(t.substring(0,d)),t=t.slice(d)),n.push(e[0]),t=t.slice(e[0].length),e=l.exec(t);return t&&n.push(t),n},_addOutput:function(t){if(this.truncate&&(t=t.replace(/^(?:\r\n|\r|\n)/,""),this.truncate=!1),!t)return t;t=t.replace(/\\/g,"\\\\"),t=t.replace(/\n/g,"\\n"),t=t.replace(/\r/g,"\\r"),t=t.replace(/"/g,'\\"'),this.source+='    ; __append("'+t+`")
`},scanLine:function(t){var l=this,e=this.opts.delimiter,n=this.opts.openDelimiter,d=this.opts.closeDelimiter,g=0;switch(g=t.split(`
`).length-1,t){case n+e:case n+e+"_":this.mode=F.modes.EVAL;break;case n+e+"=":this.mode=F.modes.ESCAPED;break;case n+e+"-":this.mode=F.modes.RAW;break;case n+e+"#":this.mode=F.modes.COMMENT;break;case n+e+e:this.mode=F.modes.LITERAL,this.source+='    ; __append("'+t.replace(n+e+e,n+e)+`")
`;break;case e+e+d:this.mode=F.modes.LITERAL,this.source+='    ; __append("'+t.replace(e+e+d,e+d)+`")
`;break;case e+d:case"-"+e+d:case"_"+e+d:this.mode==F.modes.LITERAL&&this._addOutput(t),this.mode=null,this.truncate=t.indexOf("-")===0||t.indexOf("_")===0;break;default:if(this.mode){switch(this.mode){case F.modes.EVAL:case F.modes.ESCAPED:case F.modes.RAW:t.lastIndexOf("//")>t.lastIndexOf(`
`)&&(t+=`
`)}switch(this.mode){case F.modes.EVAL:this.source+="    ; "+t+`
`;break;case F.modes.ESCAPED:this.source+="    ; __append(escapeFn("+J(t)+`))
`;break;case F.modes.RAW:this.source+="    ; __append("+J(t)+`)
`;break;case F.modes.COMMENT:break;case F.modes.LITERAL:this._addOutput(t);break}}else this._addOutput(t)}l.opts.compileDebug&&g&&(this.currentLine+=g,this.source+="    ; __line = "+this.currentLine+`
`)}},a.escapeXML=u.escapeXML,a.__express=a.renderFile,a.VERSION=p,a.name=o,typeof window<"u"&&(window.ejs=a)},{"../package.json":6,"./utils":2,fs:3,path:4}],2:[function(_,x,a){var f=/[|\\{}()[\]^$+*?.]/g,v=Object.prototype.hasOwnProperty,u=function(r,o){return v.apply(r,[o])};a.escapeRegExpChars=function(r){return r?String(r).replace(f,"\\$&"):""};var T={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&#34;","'":"&#39;"},p=/[&<>'"]/g;function i(r){return T[r]||r}var s=`var _ENCODE_HTML_RULES = {
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
`;a.escapeXML=function(r){return r==null?"":String(r).replace(p,i)};function c(){return Function.prototype.toString.call(this)+`;
`+s}try{typeof Object.defineProperty=="function"?Object.defineProperty(a.escapeXML,"toString",{value:c}):a.escapeXML.toString=c}catch{console.warn("Unable to set escapeXML.toString (is the Function prototype frozen?)")}a.shallowCopy=function(r,o){if(o=o||{},r!=null)for(var h in o)u(o,h)&&(h==="__proto__"||h==="constructor"||(r[h]=o[h]));return r},a.shallowCopyFromList=function(r,o,h){if(h=h||[],o=o||{},r!=null)for(var y=0;y<h.length;y++){var b=h[y];if(typeof o[b]<"u"){if(!u(o,b)||b==="__proto__"||b==="constructor")continue;r[b]=o[b]}}return r},a.cache={_data:{},set:function(r,o){this._data[r]=o},get:function(r){return this._data[r]},remove:function(r){delete this._data[r]},reset:function(){this._data={}}},a.hyphenToCamel=function(r){return r.replace(/-[a-z]/g,function(o){return o[1].toUpperCase()})},a.createNullProtoObjWherePossible=function(){return typeof Object.create=="function"?function(){return Object.create(null)}:{__proto__:null}instanceof Object?function(){return{}}:function(){return{__proto__:null}}}(),a.hasOwnOnlyObject=function(r){var o=a.createNullProtoObjWherePossible();for(var h in r)u(r,h)&&(o[h]=r[h]);return o}},{}],3:[function(_,x,a){},{}],4:[function(_,x,a){(function(f){function v(i,s){for(var c=0,r=i.length-1;r>=0;r--){var o=i[r];o==="."?i.splice(r,1):o===".."?(i.splice(r,1),c++):c&&(i.splice(r,1),c--)}if(s)for(;c--;c)i.unshift("..");return i}a.resolve=function(){for(var i="",s=!1,c=arguments.length-1;c>=-1&&!s;c--){var r=c>=0?arguments[c]:f.cwd();if(typeof r!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!r)continue;i=r+"/"+i,s=r.charAt(0)==="/"}return i=v(T(i.split("/"),function(o){return!!o}),!s).join("/"),(s?"/":"")+i||"."},a.normalize=function(i){var s=a.isAbsolute(i),c=p(i,-1)==="/";return i=v(T(i.split("/"),function(r){return!!r}),!s).join("/"),!i&&!s&&(i="."),i&&c&&(i+="/"),(s?"/":"")+i},a.isAbsolute=function(i){return i.charAt(0)==="/"},a.join=function(){var i=Array.prototype.slice.call(arguments,0);return a.normalize(T(i,function(s,c){if(typeof s!="string")throw new TypeError("Arguments to path.join must be strings");return s}).join("/"))},a.relative=function(i,s){i=a.resolve(i).substr(1),s=a.resolve(s).substr(1);function c(k){for(var m=0;m<k.length&&k[m]==="";m++);for(var E=k.length-1;E>=0&&k[E]==="";E--);return m>E?[]:k.slice(m,E-m+1)}for(var r=c(i.split("/")),o=c(s.split("/")),h=Math.min(r.length,o.length),y=h,b=0;b<h;b++)if(r[b]!==o[b]){y=b;break}for(var A=[],b=y;b<r.length;b++)A.push("..");return A=A.concat(o.slice(y)),A.join("/")},a.sep="/",a.delimiter=":",a.dirname=function(i){if(typeof i!="string"&&(i=i+""),i.length===0)return".";for(var s=i.charCodeAt(0),c=s===47,r=-1,o=!0,h=i.length-1;h>=1;--h)if(s=i.charCodeAt(h),s===47){if(!o){r=h;break}}else o=!1;return r===-1?c?"/":".":c&&r===1?"/":i.slice(0,r)};function u(i){typeof i!="string"&&(i=i+"");var s=0,c=-1,r=!0,o;for(o=i.length-1;o>=0;--o)if(i.charCodeAt(o)===47){if(!r){s=o+1;break}}else c===-1&&(r=!1,c=o+1);return c===-1?"":i.slice(s,c)}a.basename=function(i,s){var c=u(i);return s&&c.substr(-1*s.length)===s&&(c=c.substr(0,c.length-s.length)),c},a.extname=function(i){typeof i!="string"&&(i=i+"");for(var s=-1,c=0,r=-1,o=!0,h=0,y=i.length-1;y>=0;--y){var b=i.charCodeAt(y);if(b===47){if(!o){c=y+1;break}continue}r===-1&&(o=!1,r=y+1),b===46?s===-1?s=y:h!==1&&(h=1):s!==-1&&(h=-1)}return s===-1||r===-1||h===0||h===1&&s===r-1&&s===c+1?"":i.slice(s,r)};function T(i,s){if(i.filter)return i.filter(s);for(var c=[],r=0;r<i.length;r++)s(i[r],r,i)&&c.push(i[r]);return c}var p="ab".substr(-1)==="b"?function(i,s,c){return i.substr(s,c)}:function(i,s,c){return s<0&&(s=i.length+s),i.substr(s,c)}}).call(this,_("_process"))},{_process:5}],5:[function(_,x,a){var f=x.exports={},v,u;function T(){throw new Error("setTimeout has not been defined")}function p(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?v=setTimeout:v=T}catch{v=T}try{typeof clearTimeout=="function"?u=clearTimeout:u=p}catch{u=p}})();function i(m){if(v===setTimeout)return setTimeout(m,0);if((v===T||!v)&&setTimeout)return v=setTimeout,setTimeout(m,0);try{return v(m,0)}catch{try{return v.call(null,m,0)}catch{return v.call(this,m,0)}}}function s(m){if(u===clearTimeout)return clearTimeout(m);if((u===p||!u)&&clearTimeout)return u=clearTimeout,clearTimeout(m);try{return u(m)}catch{try{return u.call(null,m)}catch{return u.call(this,m)}}}var c=[],r=!1,o,h=-1;function y(){!r||!o||(r=!1,o.length?c=o.concat(c):h=-1,c.length&&b())}function b(){if(!r){var m=i(y);r=!0;for(var E=c.length;E;){for(o=c,c=[];++h<E;)o&&o[h].run();h=-1,E=c.length}o=null,r=!1,s(m)}}f.nextTick=function(m){var E=new Array(arguments.length-1);if(arguments.length>1)for(var S=1;S<arguments.length;S++)E[S-1]=arguments[S];c.push(new A(m,E)),c.length===1&&!r&&i(b)};function A(m,E){this.fun=m,this.array=E}A.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={};function k(){}f.on=k,f.addListener=k,f.once=k,f.off=k,f.removeListener=k,f.removeAllListeners=k,f.emit=k,f.prependListener=k,f.prependOnceListener=k,f.listeners=function(m){return[]},f.binding=function(m){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(m){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},{}],6:[function(_,x,a){x.exports={name:"ejs",description:"Embedded JavaScript templates",keywords:["template","engine","ejs"],version:"3.1.9",author:"Matthew Eernisse <mde@fleegix.org> (http://fleegix.org)",license:"Apache-2.0",bin:{ejs:"./bin/cli.js"},main:"./lib/ejs.js",jsdelivr:"ejs.min.js",unpkg:"ejs.min.js",repository:{type:"git",url:"git://github.com/mde/ejs.git"},bugs:"https://github.com/mde/ejs/issues",homepage:"https://github.com/mde/ejs",dependencies:{jake:"^10.8.5"},devDependencies:{browserify:"^16.5.1",eslint:"^6.8.0","git-directory-deploy":"^1.5.1",jsdoc:"^4.0.2","lru-cache":"^4.0.1",mocha:"^10.2.0","uglify-js":"^3.3.16"},engines:{node:">=0.10.0"},scripts:{test:"npx jake test"}}},{}]},{},[1])(1)})}(z)),z.exports}var ne=te();const re=ee(ne),ie=`<!DOCTYPE html>
<html lang="en">
  <head> 
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" crossorigin="anonymous">
    <link rel="shortcut icon" href="https://raw.githubusercontent.com/jlarminay/k6-reporter/main/assets/icon.png" type="image/png">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>K6 Load Test: <%= title %></title>
    <style>
      body {
        margin: 1rem;
      }
      footer { 
        float: right;
        font-size: 0.8rem;
        color: #777;
      }
      footer a {
        text-decoration: none;
        color: #777;
      }
      .failed {
        background-color: #ff6666 !important;
      }     
      .good {
        background-color: #3abe3a !important;
      }   
      td.failed {
        font-weight: bold;
      }
      h2 {
        padding-bottom: 4px;
        border-bottom: solid 3px #cccccc;
      }
      .tabs {
        display: flex;
        flex-wrap: wrap; 
      }
      .tabs label {
        order: 1; 
        display: block;
        padding: 1rem 2rem;
        margin-right: 0.2rem;
        cursor: pointer;
        color: #666;
        background: #ddd;
        font-weight: bold;
        font-size: 1.2rem;
        flex: 1 1;
        transition: background ease 0.2s;
        border-top-left-radius: 0.3rem;
        border-top-right-radius: 0.3rem;
        border-color: #ccc;
        border-style: solid;
        border-width: 2px 2px 0px;
        box-shadow: inset 0px -3px 7px -1px rgba(0,0,0,0.33);
      }
      .tabs .tab {
        order: 99;
        flex-grow: 1;
        width: 100%;
        display: none;
        padding: 1rem;
        background: #fff;
      }
      .tabs input[type="radio"] {
        display: none;
      }
      .tabs input[type="radio"]:checked + label {
        background: #fff;
        box-shadow: none;
        color: #000;
      }
      .tabs input[type="radio"]:checked + label + .tab {
        display: block;
      }
      .box {
        flex: 1 1;
        border-radius: 0.3rem;
        background-color: #3abe3a;
        margin: 1rem;
        padding: 0.5rem;
        font-size: 2vw; 
        box-shadow: 0px 4px 7px -1px rgba(0,0,0,0.49);
        color: white;
        position: relative;
        overflow: hidden;
      }
      .box h4 {
        margin: 0;
        padding-bottom: 0.5rem;
        text-align: center;
        position: relative;
        z-index: 50;
      }
      .row {
        display: flex;
      }
      .row div {
        flex: 1 1;
        text-align: center;
        margin-bottom: 0.5rem;
      }
      .bignum {
        position: relative;
        font-size: min(6vw, 80px);
        z-index: 20;
      }
      table {
        font-size: min(2vw, 22px);
        width: 100%;
      }
      .icon { 
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #0000002d;
        font-size: 8vw;
        z-index: 1;
      }
      .metricbox {
        background-color: #5697e2;
        font-size: 3vw;
        height: auto;
      }
      .metricbox .row {
        position: relative;
        z-index: 20;
      }
    </style>
  </head>

  <body>
    <h1>
      <svg style="vertical-align:middle" width="50" height="45" viewBox="0 0 50 45" fill="none" class="footer-module--logo--_lkxx"><path d="M31.968 34.681a2.007 2.007 0 002.011-2.003c0-1.106-.9-2.003-2.011-2.003a2.007 2.007 0 00-2.012 2.003c0 1.106.9 2.003 2.012 2.003z" fill="#7D64FF"></path><path d="M39.575 0L27.154 16.883 16.729 9.31 0 45h50L39.575 0zM23.663 37.17l-2.97-4.072v4.072h-2.751V22.038l2.75 1.989v7.66l3.659-5.014 2.086 1.51-3.071 4.21 3.486 4.776h-3.189v.001zm8.305.17c-2.586 0-4.681-2.088-4.681-4.662 0-1.025.332-1.972.896-2.743l4.695-6.435 2.086 1.51-2.239 3.07a4.667 4.667 0 013.924 4.6c0 2.572-2.095 4.66-4.681 4.66z" fill="#7D64FF"></path></svg> 
      &nbsp; K6 Load Test: <%= title %>
    </h1>

    <div class="row">
      <div class="box">
        <i class="fas fa-globe icon"></i>
        <h4>Total Requests</h4>
        <div class="bignum"><% if(data.metrics.http_reqs) { %><%= data.metrics.http_reqs.values.count %><% } %></div>
        <div class="bignum"><% if(data.metrics.grpc_reqs) { %><%= data.metrics.grpc_reqs.values.count %><% } %></div>
      </div>
      <% if(data.metrics.http_req_failed && data.metrics.http_req_failed.values) { %>
        <div class="box <% if(data.metrics.http_req_failed.values.passes > 0) { %> failed <% } %>">
          <i class="far fa-times-circle icon"></i>
          <h4>Failed Requests</h4>
          <div class="bignum"><%= data.metrics.http_req_failed.values.passes %></div>
        </div> 
      <% } %>     
      <div class="box <% if(thresholdFailures > 0) { %> failed <% } %>">
        <i class="fas fa-chart-bar icon"></i>
        <h4>Breached Thresholds</h4>
        <div class="bignum"><%= thresholdFailures %></div>
      </div>
      <div class="box <% if(checkFailures > 0) { %> failed <% } %>">
        <i class="fas fa-eye icon"></i>
        <h4>Failed Checks</h4>
        <div class="bignum"><%= checkFailures %></div>
      </div>
    </div>

    <br>
    
    <div class="tabs">
      <input type="radio" name="tabs" id="tabone" checked="checked">
      <label for="tabone"><i class="far fa-clock"></i> &nbsp; Request Metrics</label>
      <div class="tab">
        <table class="pure-table pure-table-striped">
          <tbody>
            <thead>
              <tr>
                <th></th>
                <th>Count</th>
                <th>Average</th>
                <th>Maximum</th>
                <th>Median</th> 
                <th>Minimum</th>
                <th>90th Percentile</th>
                <th>95th Percentile</th>
                <th>99th Percentile</th>
              </tr>
            </thead>
            
            <% function checkFailed(metric, valName) {
                if(!metric.thresholds) return ''
                for(thres in metric.thresholds) {
                  if(thres.includes(valName)) {
                    if(!metric.thresholds[thres].ok) return 'failed'
                    return 'good'
                  }
                }
              }

              for(metricName of standardMetrics) { 
                if(!data.metrics[metricName]) { continue }
                var metric = data.metrics[metricName] 
            %>
              <tr>
                <td><b><%= metricName %></b></td>

                <% if(metric.values.count) { %>
                  <td class="<%= checkFailed(metric, 'count') %>"><%= metric.values.count %></td>
                <% } else { %>
                  <td>-</td>
                <% } %>
                
                <% if(metric.values.avg) { %>
                  <td class="<%= checkFailed(metric, 'avg') %>"><%= metric.values.avg.toFixed(2) %></td>
                <% } else { %>
                  <td>-</td>
                <% } %>

                <% if(metric.values.max) { %>
                  <td class="<%= checkFailed(metric, 'max') %>"><%= metric.values.max.toFixed(2) %></td>
                <% } else { %>
                  <td>-</td>
                <% } %>  

                <% if(metric.values.med) { %>
                  <td class="<%= checkFailed(metric, 'med') %>"><%= metric.values.med.toFixed(2) %></td>
                <% } else { %>
                  <td>-</td>
                <% } %>  
                
                <% if(metric.values.min) { %>
                  <td class="<%= checkFailed(metric, 'min') %>"><%= metric.values.min.toFixed(2) %></td>
                <% } else { %>
                  <td>-</td>
                <% } %>   
                              
                <% if(metric.values['p(90)']) { %>
                  <td class="<%= checkFailed(metric, 'p(90)') %>"><%= metric.values['p(90)'].toFixed(2) %></td>
                <% } else { %>
                  <td>-</td>
                <% } %>

                <% if(metric.values['p(95)']) { %>
                  <td class="<%= checkFailed(metric, 'p(95)') %>"><%= metric.values['p(95)'].toFixed(2) %></td>
                <% } else { %>
                  <td>-</td> 
                <% } %>

                <% if(metric.values['p(99)']) { %>
                  <td class="<%= checkFailed(metric, 'p(99)') %>"><%= metric.values['p(99)'].toFixed(2) %></td>
                <% } else { %>
                  <td>-</td> 
                <% } %>
              </tr>
            <% } %>
          </tbody>
        </table>
        <br>

        <% 
          first = true 
          var sortedMetrics = {}
          Object.keys(data.metrics).sort().forEach(function(k) {
            sortedMetrics[k] = data.metrics[k]
          });
          for(metricName in sortedMetrics) {
            if(standardMetrics.includes(metricName) || otherMetrics.includes(metricName)) { continue }
            var metric = sortedMetrics[metricName] 
        %>
          <% if(first) { first = false %> <h2>Custom Metrics</h2> 
          <table class="pure-table pure-table-striped">
            <tbody>
              <thead>
                <tr>
                  <th></th>
                  <th>Count</th>
                  <th>Average</th>
                  <th>Maximum</th>
                  <th>Median</th> 
                  <th>Minimum</th>
                  <th>90th Percentile</th>
                  <th>95th Percentile</th>
                  <th>99th Percentile</th>
                </tr>
              </thead>
              <% } %>
              <tr>
                <td><b><%= metricName %></b></td>

                <% if(metric.values.count) { %>
                  <td class="<%= checkFailed(metric, 'count') %>"><%= metric.values.count %></td>
                <% } else { %>
                  <td>-</td>
                <% } %>
                
                <% if(metric.values.avg) { %>
                  <td class="<%= checkFailed(metric, 'avg') %>"><%= metric.values.avg.toFixed(2) %></td>
                <% } else { %>
                  <td>-</td>
                <% } %>

                <% if(metric.values.max) { %>
                  <td class="<%= checkFailed(metric, 'max') %>"><%= metric.values.max.toFixed(2) %></td>
                <% } else { %>
                  <td>-</td>
                <% } %>  

                <% if(metric.values.med) { %>
                  <td class="<%= checkFailed(metric, 'med') %>"><%= metric.values.med.toFixed(2) %></td>
                <% } else { %>
                  <td>-</td>
                <% } %>  
                
                <% if(metric.values.min) { %>
                  <td class="<%= checkFailed(metric, 'min') %>"><%= metric.values.min.toFixed(2) %></td>
                <% } else { %>
                  <td>-</td>
                <% } %>   
                              
                <% if(metric.values['p(90)']) { %>
                  <td class="<%= checkFailed(metric, 'p(90)') %>"><%= metric.values['p(90)'].toFixed(2) %></td>
                <% } else { %>
                  <td>-</td>
                <% } %>

                <% if(metric.values['p(95)']) { %>
                  <td class="<%= checkFailed(metric, 'p(95)') %>"><%= metric.values['p(95)'].toFixed(2) %></td>
                <% } else { %>
                  <td>-</td> 
                <% } %>

                <% if(metric.values['p(99)']) { %>
                  <td class="<%= checkFailed(metric, 'p(99)') %>"><%= metric.values['p(99)'].toFixed(2) %></td>
                <% } else { %>
                  <td>-</td> 
                <% } %>
              </tr>
              <% } %>
            </tbody>
          </table>
          <br>


        &nbsp;&nbsp; Note. All times are in milli-seconds
      </div> 
      <!-- ---- end tab ---- -->

      <input type="radio" name="tabs" id="tabtwo">
      <label for="tabtwo"><i class="fas fa-chart-line"></i> &nbsp; Other Stats</label>
      <div class="tab">
        <div class="row">
          <% if (data.metrics.checks) { %>
            <div class="box metricbox">
              <h4>Checks</h4>
              <i class="fas fa-eye icon"></i>
              <div class="row"><div>Passed</div><div><%= data.metrics.checks.values.passes %></div></div>
              <div class="row"><div>Failed</div><div><%= data.metrics.checks.values.fails %></div></div>
            </div>
          <% } %>

          <% if (data.metrics.iterations) { %>
            <div class="box metricbox">
              <h4>Iterations</h4>
              <i class="fas fa-redo icon"></i>
              <div class="row"><div>Total</div><div><%= data.metrics.iterations.values.count %></div></div>
              <div class="row"><div>Rate</div><div><%= data.metrics.iterations.values.rate.toFixed(2) %>/s</div></div>
            </div>
          <% } %>

          <div class="box metricbox">
            <h4>Virtual Users</h4>
            <i class="fas fa-user icon"></i>
            <div class="row"><div>Min</div><div><%= data.metrics.vus ? data.metrics.vus.values.min : 1 %></div></div>
            <div class="row"><div>Max</div><div><%= data.metrics.vus ? data.metrics.vus.values.max : 1 %></div></div>
          </div>
        </div>

        <div class="row">
          <div class="box metricbox">
            <h4>Requests</h4>
            <i class="fas fa-globe icon"></i>
            <div class="row"><div>Total</div><div><% if(data.metrics.http_reqs) { %><%= data.metrics.http_reqs.values.count %><% } %></div></div>
            <div class="row"><div>Rate</div><div><% if(data.metrics.http_reqs) { %><%= data.metrics.http_reqs.values.rate.toFixed(2) %>/s<% } %></div></div>
          </div>

          <div class="box metricbox">
            <h4>Data Received</h4>
            <i class="fas fa-cloud-download-alt icon"></i>
            <div class="row"><div>Total</div><div><%= (data.metrics.data_received.values.count/1000000).toFixed(2) %> MB</div></div>
            <div class="row"><div>Rate</div><div><%= (data.metrics.data_received.values.rate/1000000).toFixed(2) %> mB/s</div></div>
          </div>

          <div class="box metricbox">
            <h4>Data Sent</h4>
            <i class="fas fa-cloud-upload-alt icon"></i>
            <div class="row"><div>Total</div><div><%= (data.metrics.data_sent.values.count/1000000).toFixed(2) %> MB</div></div>
            <div class="row"><div>Rate</div><div><%= (data.metrics.data_sent.values.rate/1000000).toFixed(2) %> mB/s</div></div>
          </div>   
        </div>
      </div>  
      <!-- ---- end tab ---- -->     

      <input type="radio" name="tabs" id="tabthree">
      <label for="tabthree"><i class="fas fa-tasks"></i> Checks & Groups</label>
      <div class="tab">

        <% for(group of data.root_group.groups) { %>
          <h2>&bull; Group - <%= group.name %></h2>
          <table class="pure-table pure-table-horizontal" style="width: 100%">
            <thead>
              <tr>
                <th>Check Name</th>
                <th>Passes</th>
                <th>Failures</th>
              </tr>
            </thead>
            <% for(check of group.checks) { %>
              <tr class="checkDetails <% if(check.fails > 0) { %>failed<% } %>">
                <td width="50%"><%= check.name %></td><td><%= check.passes %></td><td><%= check.fails %></td>
              </tr>
            <% } %>
          </table>
          <br>
        <% } %>

        <h2>&bull; Other Checks</h2>
        <table class="pure-table pure-table-horizontal" style="width: 100%">
          <thead>
            <tr>
              <th>Check Name</th>
              <th>Passes</th>
              <th>Failures</th>
            </tr>
          </thead>
          <% for(check of data.root_group.checks) { %>
            <tr class="checkDetails <% if(check.fails > 0) { %>failed<% } %>">
              <td width="50%"><%= check.name %></td><td><%= check.passes %></td><td><%= check.fails %></td>
            </tr>
          <% } %>
        </table>     
      </div> 
      <!-- ---- end tab ---- -->
    </div>
    <footer>K6 Reporter v<%= version %> - Josh Larminay, 2025, <a href="https://github.com/jlarminay/k6-reporter">[GitHub]</a></footer>
  </body>
</html>
`,$="2.3.0";function ae(w,j={}){j.title||(j.title=new Date().toISOString().slice(0,16).replace("T"," ")),j.hasOwnProperty("debug")||(j.debug=!1),console.log(`[k6-reporter v${$}] Generating HTML summary report`),j.debug&&console.log(JSON.stringify(w,null,2));let _=0,x=0;for(let p in w.metrics)if(w.metrics[p].thresholds){x++;let i=w.metrics[p].thresholds;for(let s in i)i[s].ok||_++}let a=0,f=0;if(w.root_group.checks){let{passes:p,fails:i}=V(w.root_group.checks);a+=i,f+=p}for(let p of w.root_group.groups)if(p.checks){let{passes:i,fails:s}=V(p.checks);a+=s,f+=i}const v=["grpc_req_duration","http_req_duration","http_req_waiting","http_req_connecting","http_req_tls_handshaking","http_req_sending","http_req_receiving","http_req_blocked","iteration_duration","group_duration","ws_connecting","ws_msgs_received","ws_msgs_sent","ws_sessions"],u=["iterations","data_sent","checks","http_reqs","data_received","vus_max","vus","http_req_failed","http_req_duration{expected_response:true}"];return re.render(ie,{summaryData:w,title:j.title,standardMetrics:v,otherMetrics:u,thresholdFailures:_,thresholdCount:x,checkFailures:a,checkPasses:f,version:$})}function V(w){let j=0,_=0;for(let x of w)j+=parseInt(x.passes),_+=parseInt(x.fails);return{passes:j,fails:_}}exports.htmlReport=ae;
