import * as JsonRpcInvoke from '../JsonRpcInvoke/JsonRpcInvoke.js'

export const create = (ipc) => {
  return {
    ipc,
    callbacks: Object.create(null),
    invoke(method, ...params) {
      return JsonRpcInvoke.invoke(this.ipc, this.callbacks, method, ...params)
    },
  }
}
