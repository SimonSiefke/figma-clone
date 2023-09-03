export const state = {
  ctxMap: Object.create(null),
}

export const set = (id, canvas) => {
  state.ctxMap[id] = canvas
}

export const get = (id, canvas) => {
  return state.ctxMap[id]
}
