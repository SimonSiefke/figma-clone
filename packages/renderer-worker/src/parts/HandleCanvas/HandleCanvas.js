import * as Objects from '../Objects/Objects.js'
import * as DrawObjects from '../DrawObjects/DrawObjects.js'

export const handleCanvas = async (canvas) => {
  const ctx = canvas.getContext('2d')
  DrawObjects.drawObjects(ctx, Objects.objects)
}
