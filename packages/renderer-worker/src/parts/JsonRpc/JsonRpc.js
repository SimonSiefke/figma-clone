import * as Command from '../Command/Command.js'
import * as HandleJsonRpcMessage from '../HandleJsonRpcMessage/HandleJsonRpcMessage.js'
import * as JsonRpcInvoke from '../JsonRpcInvoke/JsonRpcInvoke.js'

export const create = (ipc) => {
  const callbacks = Object.create(null)
  const handleMessage = (message) => {
    return HandleJsonRpcMessage.handleJsonRpcMessage(ipc, callbacks, message, Command.execute)
  }
  ipc.addEventListener('message', handleMessage)
  return {
    ipc,
    callbacks,
    invoke(method, ...params) {
      return JsonRpcInvoke.invoke(this.ipc, this.callbacks, method, ...params)
    },
  }
}
