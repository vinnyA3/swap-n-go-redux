/* eslint-disable global-require */

'use strict'

const _ = require('ramda')
const Task = require('data.task')
const Either = require('data.either')
const { Left, Right } = Either

const merge = e => e.merge()

const availableTypes = type => _.contains(type, ['web'])

const getProcessType = new Task((rej, res) => {
  const processType = process.env.PROCESS_TYPE
  return availableTypes(processType)
    ? res(Right(processType))
    : rej(Left('Process Type not defined!'))
})

const invalidType = err => {
  console.error(err.merge()) // Always return left, thus merge Either
  process.exit(1)
}

// runProcess
const runProcess = type => {
  console.log(`Running Process: ${type}`)
  return { 'WEB' : require('./web/index') }[type]
}

// Run
getProcessType
  .map(merge)
  .map(_.toUpper)
  .fork(invalidType, runProcess)




