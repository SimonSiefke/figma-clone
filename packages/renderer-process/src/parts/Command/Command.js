import * as CommandState from '../CommandState/CommandState.js'

export const execute = (method, ...params) => {
  const fn = CommandState.getFn(method)
  return fn(...params)
}
