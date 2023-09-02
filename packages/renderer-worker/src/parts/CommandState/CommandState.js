import * as RemoteCanvas from '../RemoteCanvas/RemoteCanvas.js'

export const getFn = (method) => {
  switch (method) {
    case 'RemoteCanvas.create':
      return RemoteCanvas.create
    default:
      throw new Error(`command not found ${method}`)
  }
}
