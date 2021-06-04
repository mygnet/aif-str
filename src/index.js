/**
 * Divide a chain into pieces according to a size
 * @param {string} data source string
 * @param {integer} splitLength number of chunks into which a chain will be divided
 */
export function split(data, splitLength) {
  splitLength = splitLength === undefined ? 1 : parseInt(splitLength)
  if (data === undefined || splitLength < 1) return false
  data += ''
  const chunks = []
  let pos = 0
  const len = data.length
  while (pos < len) chunks.push(data.slice(pos, pos += splitLength))
  return chunks
}
/**
 * Transforms the first letter in uppercase of a given string
 * @param {tring} str source string
 * @returns 
 */
export function ucfirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
/**
 * Transform to camelCase a string given an expression
 * @param {string} str source string
 * @param {string} ex expression used for string separation
 * @returns 
 */
export function camelize(str, ex) {
  ex || (ex = /\/(.)/)
  return ucfirst(str.replace(RegExp(ex, 'g'), function($1) {
    return $1.toUpperCase()
  }))
}
/**
 * Fill a string to the left or right
 * @param {string} str source string
 * @param {integer} len character size to fill
 * @param {char} c padding character, defaults to whitespace
 * @param {boolean} ty if true it fills to the left, otherwise it will fill to the right
 * @returns 
 */
export function pad(str, len, c, ty) {
  const pad = Array(len).fill(c || ' ').join('')
  return (ty ? '' : str) + pad.substring(0, pad.length - str.length) + (ty ? str : '')
}
/**
 * Fill a string to the left
 * @param {string} str source string
 * @param {integer} len character size to fill
 * @param {char} c padding character, defaults to whitespace
 * @returns 
 */
export function padLeft(str, len, c) {
  return pad(str, len, c, true)
}
