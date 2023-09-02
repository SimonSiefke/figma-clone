export const create = () => {
  const canvas = document.createElement('canvas')
  document.body.append(canvas)
  const offscreenCanvas = canvas.transferControlToOffscreen()
  return offscreenCanvas
}
