parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{}],"TLrf":[function(require,module,exports) {
class t{constructor({targetDate:t,selector:e}){this.refs={days:document.querySelector(`${e} [data-value="days"]`),hours:document.querySelector(`${e} [data-value="hours"]`),mins:document.querySelector(`${e} [data-value="mins"]`),secs:document.querySelector(`${e} [data-value="secs"]`)},this.targetDate=t,this.start()}start(){setInterval(()=>{const t=Date.now(),e=this.getTimeComponents(this.targetDate-t);this.refs.days.textContent=e.days,this.refs.hours.textContent=e.hours,this.refs.mins.textContent=e.mins,this.refs.secs.textContent=e.secs},1e3)}getTimeComponents(t){return{days:Math.floor(t/864e5),hours:Math.floor(t%864e5/36e5),mins:Math.floor(t%36e5/6e4),secs:Math.floor(t%6e4/1e3)}}}const e=new t({selector:"#timer-1",targetDate:new Date("Jan 01, 2022")});
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/classCountdownTimer");
},{"./sass/main.scss":"clu1","./js/classCountdownTimer":"TLrf"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.700fa758.js.map