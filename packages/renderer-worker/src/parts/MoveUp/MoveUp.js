import * as MoveSpeed from '../MoveSpeed/MoveSpeed.js'

export const id = 'moveUp'

export const execute = (object) => {
  return {
    ...object,
    y: object.y - MoveSpeed.moveSpeed,
  }
}
