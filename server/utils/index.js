const _ = require('ramda')
const Task = require('data.task')
const Either = require('data.either')
const { Left, Right } = Either

const eitherToTask = e =>
  e.fold(Task.rejected, Task.of)

const chain = _.curry((fn, container) =>
  container.chain(fn))

const map = _.curry((fn, container) =>
  container.map(fn))

const safeGetProp = _.curry((prop, obj) => {
  const property = _.prop(prop, obj)
  return _.isNil(property) ? Left(`Prop Not Found: ${prop}`) : Right(property)
})

const safeGetProps = _.curry((props, obj) =>
  props.every(p => _.has(p, obj))
    ? Left('Missing...')
    : Right(_.pick(props, obj)))

module.exports = {
  eitherToTask,
  chain,
  map,
  safeGetProp,
  safeGetProps
}
