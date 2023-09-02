import * as DrawObject from '../DrawObject/DrawObject.js'

export const drawObjects = (ctx, objects) => {
  for (const object of objects) {
    DrawObject.drawObject(ctx, object)
  }
}
