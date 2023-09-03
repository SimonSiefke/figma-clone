import * as DrawObjects from '../DrawObjects/DrawObjects.js'
import * as ObjectState from '../ObjectState/ObjectState.js'

export const handleCanvas = async (canvas) => {
  const ctx = canvas.getContext('2d')
  DrawObjects.drawObjects(ctx, ObjectState.getObjects())
}
