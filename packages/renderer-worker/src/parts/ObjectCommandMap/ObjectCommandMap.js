import * as ObjectCommands from '../ObjectCommands/ObjectCommands.js'

const map = Object.create(null)

for (const value of Object.values(ObjectCommands)) {
  map[value.id] = value.execute
}

export const get = (id) => {
  return map[id]
}
