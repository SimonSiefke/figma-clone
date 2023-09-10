const overlaps = (object, x, y) => {
  return object.x >= x && object.y >= y && x <= object.x + object.width && y <= object.y + object.height
}

export const getObjectAt = (objects, x, y) => {
  for (const object of objects) {
    if (overlaps(object, x, y)) {
      return object
    }
  }
  return undefined
}
