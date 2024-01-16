'use strict'
const { EventEmitter } = require('events')

process.nextTick(console.log, 'passed!')

const ee = new EventEmitter()

ee.on('error', (e)=> console.log(e))
ee.emit('error', Error('timeout'))
