import * as JsonRpcVersion from '../JsonRpcVersion/JsonRpcVersion.js'

export const send = (ipc, method, ...params) => {
  const request = {
    jsonrpc: JsonRpcVersion.jsonRpcVersion,
    method,
    params,
  }
  ipc.send(request)
}
