import * as DrawObject from '../DrawObject/DrawObject.js'

export const drawObjects = (ctx, objects) => {
  ctx.clearRect(0, 0, 800, 500)
  for (const object of objects) {
    DrawObject.drawObject(ctx, object)
  }
}
