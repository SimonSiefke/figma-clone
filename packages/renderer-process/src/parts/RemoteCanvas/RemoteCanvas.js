export const create = () => {
  const canvas = document.createElement('canvas')
  const offscreenCanvas = canvas.transferControlToOffscreen()
  return offscreenCanvas
}
