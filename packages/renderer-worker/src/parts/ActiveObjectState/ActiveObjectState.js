export const state = {
  x: 0,
  y: 0,
  /**
   * @type {any}
   */
  object: undefined,
  mouseDown: false,
}

export const set = (x, y, mouseDown, object) => {
  state.x = x
  state.y = y
  state.mouseDown = mouseDown
  state.object = object
}

export const getObject = () => {
  return state.object
}
