import * as JsonRpcVersion from '../JsonRpcVersion/JsonRpcVersion.js'

export const create = (message, error) => {
  return {
    // @ts-ignore
    jsonrpc: JsonRpcVersion.Two,
    id: message.id,
    error,
  }
}
