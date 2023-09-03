export const id = 'text'

export const drawObject = (ctx, object) => {
  const { x, y, text } = object
  ctx.fillStyle = 'black'
  ctx.font = '48px serif'
  ctx.fillText(text, x, y)
}
