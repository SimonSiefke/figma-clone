import * as ObjectId from '../ObjectId/ObjectId.js'

export const id = ObjectId.Circle

export const drawObject = (ctx, object) => {
  const { background, x, y, size } = object
  ctx.fillStyle = background
  ctx.beginPath()
  ctx.arc(x, y, size, 0, 2 * Math.PI)
  ctx.stroke()
}
