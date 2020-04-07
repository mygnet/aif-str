/**
 * Divide a chain into pieces according to a size
 * @param {string} data
 * @param {integer} splitLength
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

export function ucfirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function camelize(str, ex) {
  ex || (ex = /\/(.)/)
  return ucfirst(str.replace(RegExp(ex, 'g'), function($1) {
    return $1.toUpperCase()
  }))
}

export function pad(str, len, c, ty) {
  const pad = Array(len).fill(c || ' ').join('')
  return (ty ? '' : str) + pad.substring(0, pad.length - str.length) + (ty ? str : '')
}

export function padRight(str, len, c) {
  return pad(str, len, c, true)
}
