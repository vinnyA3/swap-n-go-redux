'use strict'

const _ = require('ramda')
const Task = require('data.task')
const { Left, Right } = require('data.either')
const { safeGetProp, eitherToTask } = require('../utils')
// App Requires
const http = require('http')
const promisify = require('es6-promisify')
const config = require('../config')
const app = require('./server')

const server = http.createServer(app)

const serverListen = promisify(server.listen, server)

const serverTask = port =>
  new Task((rej, res) =>
    serverListen(port)
      .then(() => res(`App Listening on port ${port}...`))
      .catch(err => rej(`Error happened on server start: ${err}`)))

const startServer = config
  .map(safeGetProp('server'))
  .chain(eitherToTask)  
  .map(safeGetProp('port'))
  .chain(eitherToTask)
  .chain(serverTask)

startServer.fork(console.error, console.log)
