import * as ObjectId from '../ObjectId/ObjectId.js'

export const id = ObjectId.Rectangle

export const drawObject = (ctx, object) => {
  const { background, x, y, width, height } = object
  ctx.fillStyle = background
  ctx.fillRect(x, y, width, height)
}
