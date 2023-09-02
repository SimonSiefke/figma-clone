import * as GetFirstWorkerEvent from '../GetFirstWorkerEvent/GetFirstWorkerEvent.js'
import * as FirstWorkerEventType from '../FirstWorkerEventType/FirstWorkerEventType.js'

export const create = async ({ url, name }) => {
  const worker = new Worker(url, {
    type: 'module',
    name,
  })
  const { type, event } = await GetFirstWorkerEvent.getFirstWorkerEvent(worker)
  if (type === FirstWorkerEventType.Error) {
    throw new Error(`Failed to create worker`)
  }
  if (event.data !== 'ready') {
    console.log({ event: event.data })
    throw new Error(`unexpected first message from worker`)
  }
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
