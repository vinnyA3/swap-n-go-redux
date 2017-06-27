'use strict'

const Task = require('data.task')
const Either = require('data.either')
const _ = require('ramda')

const { Left, Right } = Either

const merge = e => e.merge()

const safePropGet = _.curry((prop, obj) => {
  const property = _.prop(prop, obj)
  return _.isNil(property) ? Left(`Prop Not Found: ${prop}`) : Right(property)
})

const argv = new Task((rej, res) => res(process.env))

const env = argv
  .map(safePropGet('PORT'))
  .map(e => e.isLeft ? Right('8080') : e)
  .map(e => merge(e))
  .map(port => ({ server: { port } }))


env.fork(console.error, obj => {
  module.exports = obj
})
