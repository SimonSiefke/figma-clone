export const drawObject = (ctx, object) => {
  const { background, x, y, width, height } = object
  ctx.fillStyle = background
  ctx.fillRect(x, y, width, height)
}
