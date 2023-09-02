import * as JsonRpcVersion from '../JsonRpcVersion/JsonRpcVersion.js'
import * as Callback from '../Callback/Callback.js'

export const create = (method, ...params) => {
  return {
    jsonrpc: JsonRpcVersion.jsonRpcVersion,
    method,
    params,
  }
}
