'use strict';exports.__esModule=!0,exports.split=split,exports.ucfirst=ucfirst,exports.camelize=camelize,exports.pad=pad,exports.padLeft=padLeft;
/**
 * Divide a chain into pieces according to a size
 * @param {string} data source string
 * @param {integer} len number of chunks into which a chain will be divided
 */function split(data,len){var a=len;if(a=void 0===a?1:parseInt(a),void 0===data||1>a)return!1;data+='';for(var b=[],c=0,d=data.length;c<d;)b.push(data.slice(c,c+=a));return b}
/**
 * Transforms the first letter in uppercase of a given string
 * @param {string} data source string
 * @returns 
 */function ucfirst(data){return data.charAt(0).toUpperCase()+data.slice(1)}
/**
 * Transform to camelCase a string given an expression
 * @param {string} data source string
 * @param {string} exp expression used for string separation
 * @returns 
 */function camelize(data,exp){return exp||(exp=/\/(.)/),ucfirst(data.replace(RegExp(exp,'g'),function(a){return a.toUpperCase()}))}
/**
 * Fill a string to the left or right
 * @param {string} data source string
 * @param {integer} len character size to fill
 * @param {char} chr padding character, defaults to whitespace
 * @param {boolean} ty if true it fills to the left, otherwise it will fill to the right
 * @returns
 */function pad(data,len,chr,ty){var a=Array(len).fill(chr||' ').join('');return(ty?'':data)+a.substring(0,a.length-data.length)+(ty?data:'')}
/**
 * Fill a string to the left
 * @param {string} data source string
 * @param {integer} len character size to fill
 * @param {char} chr padding character, defaults to whitespace
 * @returns 
 */function padLeft(data,len,chr){return pad(data,len,chr,!0)}