import * as Id from '../Id/Id.js'

export const registerPromise = (callbacks) => {
  const id = Id.create()
  const promise = new Promise((resolve, reject) => {
    callbacks[id] = { resolve, reject }
  })
  return { id, promise }
}

export const resolve = (callbacks, id, args) => {
  if (!(id in callbacks)) {
    console.warn(`callback ${id} may already be disposed`)
    return
  }
  callbacks[id].resolve(args)
  delete callbacks[id]
}
