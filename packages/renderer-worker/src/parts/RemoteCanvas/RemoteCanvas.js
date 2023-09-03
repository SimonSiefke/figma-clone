import * as RendererProcess from '../RendererProcess/RendererProcess.js'

export const create = () => {
  return RendererProcess.invoke('RemoteCanvas.create')
}

export const handlePointerDown = (eventX, eventY) => {
  console.log('down', eventX, eventY)
}

export const handlePointerMove = (eventX, eventY) => {}

export const handlePointerUp = (eventX, eventY) => {}
