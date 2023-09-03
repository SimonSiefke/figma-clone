import * as DrawObjectMap from '../DrawObjectMap/DrawObjectMap.js'

export const drawObject = (ctx, object) => {
  const module = DrawObjectMap.getModule(object.type)
  module.drawObject(ctx, object)
}
