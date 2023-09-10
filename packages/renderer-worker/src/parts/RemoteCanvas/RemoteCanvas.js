import * as CtxState from '../CtxState/CtxState.js'
import * as DrawObjects from '../DrawObjects/DrawObjects.js'
import * as ObjectState from '../ObjectState/ObjectState.js'
import * as RendererProcess from '../RendererProcess/RendererProcess.js'
import * as GetObjectAt from '../GetObjectAt/GetObjectAt.js'
import * as GetRandomColor from '../GetRandomColor/GetRandomColor.js'
import * as KeyBindings from '../KeyBindings/KeyBindings.js'
import * as ActiveObjectState from '../ActiveObjectState/ActiveObjectState.js'
import * as ExecuteActiveObjectCommand from '../ExecuteActiveObjectCommand/ExecuteActiveObjectCommand.js'

export const create = () => {
  return RendererProcess.invoke('RemoteCanvas.create')
}

const px = 10
const py = 40

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
  ActiveObjectState.set(relativeDownX, relativeDownY, true, object)
  console.log('draw selection', object)
  const selectionObject = {
    type: 'rectangle-outline',
    x: object.x,
    y: object.y,
    width: object.width,
    height: object.height,
  }
  DrawObjects.drawObjects(CtxState.get(1), [...objects, selectionObject])
}

export const handlePointerMove = (eventX, eventY) => {
  const relativeX = eventX - px
  const relativeY = eventY - py
  const objects = ObjectState.getObjects()
  if (objects.length === 0) {
    return
  }
  if (!ActiveObjectState.state.mouseDown) {
    return
  }
  const object = ActiveObjectState.getObject()
  if (!object) {
    return
  }
  object.x = relativeX
  object.y = relativeY
  DrawObjects.drawObjects(CtxState.get(1), objects)
}

export const handlePointerUp = (eventX, eventY) => {
  ActiveObjectState.state.mouseDown = false
}

export const handleDoubleClick = (eventX, eventY) => {
  console.log({ eventX, eventY })
}

export const handleClickRectangle = () => {
  const objects = ObjectState.getObjects()
  const first = objects[0]
  objects.unshift({
    ...first,
    x: first.x + 10,
    y: first.y + 20,
    background: GetRandomColor.getRandomColor(),
  })
  DrawObjects.drawObjects(CtxState.get(1), objects)
}

export const handleClickText = () => {
  // TODO create text
}

export const handleKeyDown = (ctrlKey, shiftKey, altKey, key) => {
  const command = KeyBindings.getCommand(key)
  if (!command) {
    return
  }
  ExecuteActiveObjectCommand.executeActiveObjectCommand(command)
  console.log({ command })
}
