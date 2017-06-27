'use strict'

const http = require('http')
const promisify = require('es6-promisify')
const config = require('./config/config')
const _ = require('ramda')
const Task = require('data.task')
const Either = require('data.either')
const { Left, Right } = Either
const app = require('./server')

const safePropGet = _.curry((prop, obj) => {
  const property = _.prop(prop, obj)
  return _.isNil(property) ? Left(`Prop Not Found: ${prop}`) : Right(property)
})

const chain = _.curry((fn, container) =>
  container.chain(fn))

const server = http.createServer(app)

const serverListen = promisify(server.listen, server)

const serverTask = port =>
  new Task((rej, res) =>
    serverListen(port)
      .then(() => res(`App Listening on port ${port}...`))
      .catch(err => {
        rej(`Error happened on server start: ${err}`)
        process.exit(1)
      }))

const startServer = _.compose(
  chain(serverTask),
  chain(safePropGet('port')),
  safePropGet('server')
)

startServer(config)
  .fork(console.error, console.log)

