'use strict'
const { promisify } = require('util')

const print = ((err, contents) => { 
  if (err) console.error(err)
  else console.log(contents) 
})

const opA = ((cb) => {
  setTimeout(() => {
    cb(null, 'A')
  }, 500)
})

const opB = ((cb) => {
  setTimeout(() => {
    cb(null, 'B')
  }, 250)
})

const opC = ((cb) => {
  setTimeout(() => {
    cb(null, 'C')
  }, 125)
})


// won't work. Gotta promisify what's meant to be async
const printer = promisify( (cb) => {
  const promisifiedPrint = (_, log) => { 
    print(log)
    return cb()
  }
  opC(promisifiedPrint)
  opA(promisifiedPrint)
  opB(promisifiedPrint)
})



const printer2 = promisify((cb) => {
  const promisifiedPrint = (err, contents) => { 
    if (err) console.error(err)
    else console.log(contents) 
    cb()
  }
  opA(promisifiedPrint)
  opB(promisifiedPrint)
  opC(promisifiedPrint)
})

async function run () {
  await printer2()
  console.log('finished!')
}



run()