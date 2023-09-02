import * as IpcChildType from '../IpcChildType/IpcChildType.js'
import * as IpcChildWithModuleWorker from '../IpcChildWithModuleWorker/IpcChildWithModuleWorker.js'

export const getModule = (method) => {
  switch (method) {
    case IpcChildType.ModuleWorker:
      return IpcChildWithModuleWorker
    default:
      throw new Error(`no ipc found`)
  }
}
