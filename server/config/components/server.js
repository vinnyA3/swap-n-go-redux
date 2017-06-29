'use strict'

const Task = require('data.task')
const Either = require('data.either')
const { Left, Right } = Either
const { safeGetProp, eitherToTask } = require('../../utils')


const argv = new Task((rej, res) => res(process.env))

const serverPort = argv
  .map(safeGetProp('PORT'))
  .chain(eitherToTask)
  .map(port => ({ server: { port } }))

// To keep index file clean, perform fork logic here
serverPort.fork(e => {
  console.error(e)
  process.exit(1)
}, serverObject => {
  module.exports = serverObject  
})
