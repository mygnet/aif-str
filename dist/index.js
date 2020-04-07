'use strict';

exports.__esModule = true;
exports.split = split;
exports.ucfirst = ucfirst;
exports.camelize = camelize;
exports.pad = pad;
exports.padRight = padRight;
/**
 * Divide a chain into pieces according to a size
 * @param {string} data
 * @param {integer} splitLength
 */
function split(data, splitLength) {
  splitLength = splitLength === undefined ? 1 : parseInt(splitLength);
  if (data === undefined || splitLength < 1) return false;
  data += '';
  var chunks = [];
  var pos = 0;
  var len = data.length;
  while (pos < len) {
    chunks.push(data.slice(pos, pos += splitLength));
  }return chunks;
}

function ucfirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function camelize(str, ex) {
  ex || (ex = /\/(.)/);
  return ucfirst(str.replace(RegExp(ex, 'g'), function ($1) {
    return $1.toUpperCase();
  }));
}

function pad(str, len, c, ty) {
  var pad = Array(len).fill(c || ' ').join('');
  return (ty ? '' : str) + pad.substring(0, pad.length - str.length) + (ty ? str : '');
}

function padRight(str, len, c) {
  return pad(str, len, c, true);
}