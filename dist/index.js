'use strict';exports.__esModule=!0,exports.split=split;/**
 * Divide a chain into pieces according to a size
 * @param {string} data 
 * @param {integer} splitLength 
 */function split(a,b){if(b=void 0===b?1:parseInt(b),void 0===a||1>b)return!1;a+='';for(var c=[],d=0,e=a.length;d<e;)c.push(a.slice(d,d+=b));return c}