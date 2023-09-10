import * as MoveSpeed from '../MoveSpeed/MoveSpeed.js'

export const id = 'moveLeft'

export const execute = (object) => {
  return {
    ...object,
    x: object.x - MoveSpeed.moveSpeed,
  }
}
