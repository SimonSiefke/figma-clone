export const id = 'rectangle-outline'

export const drawObject = (ctx, object) => {
  const { x, y, width, height } = object
  ctx.strokeRect(x, y, width, height)
}
