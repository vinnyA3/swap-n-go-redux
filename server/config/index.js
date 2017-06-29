'use strict'

const _ = require('ramda')
const Task = require('data.task')
const Either = require('data.either')
const { Right, Left } = Either
const { map, safeGetProp, eitherToTask } = require('../utils')

const argv = new Task((rej, res) => res(process.env))

const getConfig = argv
  .map(safeGetProp('PROCESS_TYPE'))
  .chain(eitherToTask)
  .map(type => require(`./${type}`))

module.exports = getConfig
