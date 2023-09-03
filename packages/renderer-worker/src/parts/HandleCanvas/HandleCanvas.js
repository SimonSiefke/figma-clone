import * as DrawObjects from '../DrawObjects/DrawObjects.js'
import * as ObjectState from '../ObjectState/ObjectState.js'
import * as CtxState from '../CtxState/CtxState.js'

export const handleCanvas = async (canvas) => {
  const ctx = canvas.getContext('2d')
  canvas.width = 800
  canvas.height = 500
  CtxState.set(1, ctx)
  DrawObjects.drawObjects(ctx, ObjectState.getObjects())
}
