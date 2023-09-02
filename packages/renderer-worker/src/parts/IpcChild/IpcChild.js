import * as IpcChildModule from '../IpcChildModule/IpcChildModule.js'

export const create = async ({ method, ...options }) => {
  const module = await IpcChildModule.getModule(method)
  // @ts-ignore
  const rawIpc = module.create(options)
  if (module.signal) {
    module.signal(rawIpc)
  }
  const ipc = module.wrap(rawIpc)
  return ipc
}
