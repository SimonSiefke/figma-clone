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
