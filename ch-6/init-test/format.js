// no need for 'use strict' in mjs!!

//inline export
export const upper = (str) => {
  if (typeof str === 'symbol') str = str.toString()
  str += ''
  return str.toUpperCase()
}

// module.exports = { upper: upper }