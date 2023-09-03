import * as RendererWorkerUrl from '../RendererWorkerUrl/RendererWorkerUrl.js'
import * as IpcParent from '../IpcParent/IpcParent.js'
import * as IpcParentType from '../IpcParentType/IpcParentType.js'
import * as JsonRpc from '../JsonRpc/JsonRpc.js'

export const state = {
  /**
   * @type {any}
   */
  rpc: undefined,
}

export const listen = async () => {
  const ipc = await IpcParent.create({
    method: IpcParentType.ModuleWorker,
    name: 'Renderer Worker',
    url: RendererWorkerUrl.rendererWorkerUrl,
  })
  const rpc = JsonRpc.create(ipc)
  state.rpc = rpc
}

export const send = (method, ...params) => {
  state.rpc.send(method, ...params)
}
