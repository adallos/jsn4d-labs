'use strict'
const assert = require('assert')
const buffer = Buffer.alloc(4096)
console.log(buffer)

for (const byte of buffer) assert.equal(byte, 0)
console.log('passed!')
