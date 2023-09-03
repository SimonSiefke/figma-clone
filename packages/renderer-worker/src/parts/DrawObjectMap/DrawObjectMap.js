import * as DrawObjectModule from '../DrawObjectModule/DrawObjectModule.js'

const map = Object.create(null)

for (const value of Object.values(DrawObjectModule)) {
  map[value.id] = value
}

export const getModule = (type) => {
  if (map[type]) {
    return map[type]
  }
  throw new Error('module not found')
}
