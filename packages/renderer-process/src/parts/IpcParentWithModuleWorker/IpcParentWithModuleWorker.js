export const create = ({ url, name }) => {
  const worker = new Worker(url, {
    type: 'module',
    name,
  })
  return worker
}

export const wrap = (worker) => {
  return {
    worker,
    addEventListener(type, listener) {
      switch (type) {
        case 'message':
          this.worker.addEventListener('message', listener)
          break
        default:
          break
      }
    },
  }
}
