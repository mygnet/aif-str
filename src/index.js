/**
 * Divide a chain into pieces according to a size
 * @param {string} data source string
 * @param {integer} len number of chunks into which a chain will be divided
 */
export function split(data, len) {
  let splitLength = len
  splitLength = splitLength === undefined ? 1 : parseInt(splitLength)
  if (data === undefined || splitLength < 1) return false
  data += ''
  const chunks = []
  let pos = 0
  const _len = data.length
  while (pos < _len) chunks.push(data.slice(pos, pos += splitLength))
  return chunks
}
/**
 * Transforms the first letter in uppercase of a given string
 * @param {string} data source string
 * @returns 
 */
export function ucfirst(data) {
  return data.charAt(0).toUpperCase() + data.slice(1)
}
/**
 * Transform to camelCase a string given an expression
 * @param {string} data source string
 * @param {string} exp expression used for string separation
 * @returns 
 */
export function camelize(data, exp) {
  exp || (exp = /\/(.)/)
  return ucfirst(data.replace(RegExp(exp, 'g'), function($1) {
    return $1.toUpperCase()
  }))
}
/**
 * Fill a string to the left or right
 * @param {string} data source string
 * @param {integer} len character size to fill
 * @param {char} chr padding character, defaults to whitespace
 * @param {boolean} ty if true it fills to the left, otherwise it will fill to the right
 * @returns
 */
export function pad(data, len, chr, ty) {
  const pad = Array(len).fill(chr || ' ').join('')
  return (ty ? '' : data) + pad.substring(0, pad.length - data.length) + (ty ? data : '')
}
/**
 * Fill a string to the left
 * @param {string} data source string
 * @param {integer} len character size to fill
 * @param {char} chr padding character, defaults to whitespace
 * @returns 
 */
export function padLeft(data, len, chr) {
  return pad(data, len, chr, true)
}
