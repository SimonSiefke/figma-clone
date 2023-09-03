import * as RemoteCanvasEvents from '../RemoteCanvasEvents/RemoteCanvasEvents.js'

export const create = () => {
  const canvas = document.createElement('canvas')
  canvas.addEventListener('pointerdown', RemoteCanvasEvents.handlePointerDown)
  canvas.addEventListener('pointermove', RemoteCanvasEvents.handlePointerMove)
  canvas.addEventListener('pointerup', RemoteCanvasEvents.handlePointerUp)
  document.body.append(canvas)
  const offscreenCanvas = canvas.transferControlToOffscreen()
  return offscreenCanvas
}
