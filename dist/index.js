'use strict';exports.__esModule=!0,exports.split=split,exports.ucfirst=ucfirst,exports.camelize=camelize,exports.pad=pad,exports.padLeft=padLeft;/**
 * Divide a chain into pieces according to a size
 * @param {string} data source string
 * @param {integer} splitLength number of chunks into which a chain will be divided
 */function split(a,b){if(b=void 0===b?1:parseInt(b),void 0===a||1>b)return!1;a+='';for(var c=[],d=0,e=a.length;d<e;)c.push(a.slice(d,d+=b));return c}/**
 * Transforms the first letter in uppercase of a given string
 * @param {tring} str source string
 * @returns 
 */function ucfirst(a){return a.charAt(0).toUpperCase()+a.slice(1)}/**
 * Transform to camelCase a string given an expression
 * @param {string} str source string
 * @param {string} ex expression used for string separation
 * @returns 
 */function camelize(a,b){return b||(b=/\/(.)/),ucfirst(a.replace(RegExp(b,'g'),function(a){return a.toUpperCase()}))}/**
 * Fill a string to the left or right
 * @param {string} str source string
 * @param {integer} len character size to fill
 * @param {char} c padding character, defaults to whitespace
 * @param {boolean} ty if true it fills to the left, otherwise it will fill to the right
 * @returns 
 */function pad(a,b,d,c){var e=Array(b).fill(d||' ').join('');return(c?'':a)+e.substring(0,e.length-a.length)+(c?a:'')}/**
 * Fill a string to the left
 * @param {string} str source string
 * @param {integer} len character size to fill
 * @param {char} c padding character, defaults to whitespace
 * @returns 
 */function padLeft(a,b,d){return pad(a,b,d,!0)}