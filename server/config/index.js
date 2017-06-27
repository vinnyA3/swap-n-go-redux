'use strict'

const _ = require('ramda')
const Task = require('data.task')
const Either = require('data.either')
const { Right, Left } = Either

const map = _.curry((fn, container) =>
  container.map(fn))

const getENVArgv = new Task((rej, res) => res(process.env))

const isDevelopment = envVars => {
  if (_.head(envVars) === 'development') {
    require('dotenv').config({ silent: true })
  }
}

const config = _.compose(
  map(_.tap(isDevelopment)),
  map(_.props(['NODE_ENV', 'PROCESS_TYPE']))
)

//  impure Which Process
const whichProcess = envVars => {
  let config
  try {
    config = require(`./${envVars[1]}`)
    module.exports = config
  } catch(ex) {
    if (ex.code === 'MODULE_NOT_FOUND') {
      return new Error(`No Config for process type: ${envVars[1]}`)
    }
  }
}

config(getENVArgv).fork(console.error, whichProcess)
