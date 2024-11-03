import * as RemoteCanvasEvents from '../RemoteCanvasEvents/RemoteCanvasEvents.js'

// TODO use virtual dom for toolbar
export const create = () => {
  const canvas = document.createElement('canvas')
  canvas.addEventListener('pointerdown', RemoteCanvasEvents.handlePointerDown)
  canvas.addEventListener('pointermove', RemoteCanvasEvents.handlePointerMove)
  canvas.addEventListener('pointerup', RemoteCanvasEvents.handlePointerUp)
  canvas.addEventListener('dblclick', RemoteCanvasEvents.handleDoubleClick)

  const buttonRectangle = document.getElementById('Rectangle')
  buttonRectangle.onclick = RemoteCanvasEvents.handleClickRectangle
  const buttonText = document.getElementById('Text')
  buttonText.onclick = RemoteCanvasEvents.handleClickText
  const buttonCircle = document.getElementById('Circle')
  buttonCircle.onclick = RemoteCanvasEvents.handleClickCircle

  window.addEventListener('keydown', RemoteCanvasEvents.handleKeyDown)
  document.body.append(canvas)
  const offscreenCanvas = canvas.transferControlToOffscreen()
  return offscreenCanvas
}
