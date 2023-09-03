export const state = {
  /**
   * @type {any[]}
   */
  objects: [],
}

export const getObjects = () => {
  return state.objects
}

export const setObjects = (objects) => {
  state.objects = objects
}
