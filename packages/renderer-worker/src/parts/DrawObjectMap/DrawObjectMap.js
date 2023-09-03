import * as DrawObjectRectangle from '../DrawObjectRectangle/DrawObjectRectangle.js'
import * as DrawObjectText from '../DrawObjectText/DrawObjectText.js'

export const getModule = (type) => {
  switch (type) {
    case 'text':
      return DrawObjectText
    case 'rectangle':
      return DrawObjectRectangle
    default:
      throw new Error('module not found')
  }
}
