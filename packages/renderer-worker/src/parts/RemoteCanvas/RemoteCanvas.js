import * as CtxState from '../CtxState/CtxState.js'
import * as DrawObjects from '../DrawObjects/DrawObjects.js'
import * as ObjectState from '../ObjectState/ObjectState.js'
import * as RendererProcess from '../RendererProcess/RendererProcess.js'
import * as GetObjectAt from '../GetObjectAt/GetObjectAt.js'

export const create = () => {
  return RendererProcess.invoke('RemoteCanvas.create')
}

const px = 10
const py = 40

const mouseDownState = {
  x: 0,
  y: 0,
  /**
   * @type {any}
   */
  object: undefined,
}

export const handlePointerDown = (eventX, eventY) => {
  const relativeX = eventX - px
  const relativeY = eventY - py
  const objects = ObjectState.getObjects()
  const object = GetObjectAt.getObjectAt(objects, relativeX, relativeY)
  if (!object) {
    return
  }
  const relativeDownX = object.x - relativeX
  const relativeDownY = object.y - relativeY
  mouseDownState.x = relativeDownX
  mouseDownState.y = relativeDownY
  mouseDownState.object = object
}

export const handlePointerMove = (eventX, eventY) => {
  const relativeX = eventX - px
  const relativeY = eventY - py
  const objects = ObjectState.getObjects()
  if (objects.length === 0) {
    return
  }
  if (!mouseDownState.object) {
    return
  }
  const object = mouseDownState.object
  object.x = relativeX
  object.y = relativeY
  DrawObjects.drawObjects(CtxState.get(1), objects)
}

export const handlePointerUp = (eventX, eventY) => {
  mouseDownState.x = 0
  mouseDownState.y = 0
  mouseDownState.object = undefined
}

export const handleDoubleClick = (eventX, eventY) => {
  console.log({ eventX, eventY })
}
