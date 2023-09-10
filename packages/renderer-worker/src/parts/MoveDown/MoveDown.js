import * as MoveSpeed from '../MoveSpeed/MoveSpeed.js'

export const id = 'moveDown'

export const execute = (object) => {
  return {
    ...object,
    y: object.y + MoveSpeed.moveSpeed,
  }
}
