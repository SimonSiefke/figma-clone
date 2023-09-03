import * as CtxState from '../CtxState/CtxState.js'
import * as DrawObjects from '../DrawObjects/DrawObjects.js'
import * as ObjectState from '../ObjectState/ObjectState.js'
import * as RendererProcess from '../RendererProcess/RendererProcess.js'

export const create = () => {
  return RendererProcess.invoke('RemoteCanvas.create')
}

export const handlePointerDown = (eventX, eventY) => {
  console.log('down', eventX, eventY)
}

export const handlePointerMove = (eventX, eventY) => {
  const relativeX = eventX - 10
  const relativeY = eventY - 80
  const objects = ObjectState.getObjects()
  objects[0].x = relativeX
  objects[0].y = relativeY
  DrawObjects.drawObjects(CtxState.get(1), objects)
}

export const handlePointerUp = (eventX, eventY) => {}
