import * as RendererWorker from '../RendererWorker/RendererWorker.js'

export const handlePointerDown = (event) => {
  const { clientX, clientY } = event
  RendererWorker.send('RemoteCanvas.handlePointerDown', clientX, clientY)
}

export const handlePointerUp = (event) => {
  const { clientX, clientY } = event
  RendererWorker.send('RemoteCanvas.handlePointerUp', clientX, clientY)
}

export const handlePointerMove = (event) => {
  const { clientX, clientY } = event
  RendererWorker.send('RemoteCanvas.handlePointerMove', clientX, clientY)
}

export const handleDoubleClick = (event) => {
  const { clientX, clientY } = event
  RendererWorker.send('RemoteCanvas.handleDoubleClick', clientX, clientY)
}

export const handleClickRectangle = (event) => {
  const { clientX, clientY } = event
  RendererWorker.send('RemoteCanvas.handleClickRectangle', clientX, clientY)
}

export const handleClickText = (event) => {
  const { clientX, clientY } = event
  RendererWorker.send('RemoteCanvas.handleClickText', clientX, clientY)
}

export const handleKeyDown = (event) => {
  const { ctrlKey, shiftKey, altKey, key } = event
  RendererWorker.send('RemoteCanvas.handleKeyDown', ctrlKey, shiftKey, altKey, key)
}
