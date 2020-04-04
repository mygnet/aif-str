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
