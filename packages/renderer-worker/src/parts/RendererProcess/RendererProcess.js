import * as IpcChild from '../IpcChild/IpcChild.js'
import * as IpcChildType from '../IpcChildType/IpcChildType.js'
import * as JsonRpc from '../JsonRpc/JsonRpc.js'

export const state = {
  /**
   * @type {any}
   */
  rpc: undefined,
}

export const listen = async () => {
  const ipc = await IpcChild.create({
    method: IpcChildType.Auto,
  })
  const rpc = JsonRpc.create(ipc)
  state.rpc = rpc
}

export const invoke = (method, ...params) => {
  state.rpc.invoke(method, ...params)
}
