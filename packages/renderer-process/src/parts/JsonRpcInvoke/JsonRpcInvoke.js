import * as Callback from '../Callback/Callback.js'
import * as JsonRpcVersion from '../JsonRpcVersion/JsonRpcVersion.js'
import * as UnwrapJsonRpcResult from '../UnwrapJsonRpcResult/UnwrapJsonRpcResult.js'

export const invoke = async (ipc, callbacks, method, ...params) => {
  const { id, promise } = Callback.registerPromise(callbacks)
  const request = {
    jsonrpc: JsonRpcVersion.jsonRpcVersion,
    id,
    method,
    params,
  }
  ipc.send(request)
  const response = await promise
  const result = UnwrapJsonRpcResult.unwrapJsonRpcResult(response)
  return result
}
