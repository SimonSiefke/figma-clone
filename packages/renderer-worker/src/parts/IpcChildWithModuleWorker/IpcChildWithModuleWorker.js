export const create = () => {
  return globalThis
}

export const signal = (global) => {
  global.postMessage('ready')
}

export const wrap = (global) => {
  return {
    global,
    addEventListener(type, listener) {
      switch (type) {
        case 'message':
          const wrappedListener = (event) => {
            listener(event.data)
          }
          this.global.addEventListener('message', wrappedListener)
          break
        default:
          break
      }
    },
    send(message) {
      this.global.postMessage(message)
    },
  }
}
