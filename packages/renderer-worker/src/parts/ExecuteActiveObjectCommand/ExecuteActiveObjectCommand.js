import * as ActiveObjectState from '../ActiveObjectState/ActiveObjectState.js'
import * as CtxState from '../CtxState/CtxState.js'
import * as DrawObjects from '../DrawObjects/DrawObjects.js'
import * as ObjectCommandMap from '../ObjectCommandMap/ObjectCommandMap.js'
import * as ObjectState from '../ObjectState/ObjectState.js'

export const executeActiveObjectCommand = (command) => {
  const objects = ObjectState.getObjects()
  const activeObject = ActiveObjectState.getObject()
  if (!activeObject) {
    return
  }
  const index = objects.indexOf(activeObject)
  if (index === -1) {
    console.log('no obj 2')
    return
  }
  const fn = ObjectCommandMap.get(command)
  const newObject = fn(activeObject)
  ActiveObjectState.state.object = newObject
  const newObjects = [...objects.slice(0, index), newObject, ...objects.slice(index + 1)]
  ObjectState.setObjects(newObjects)
  DrawObjects.drawObjects(CtxState.get(1), newObjects)
}
