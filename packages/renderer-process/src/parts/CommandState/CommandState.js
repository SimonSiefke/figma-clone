export const state = {
  commands: Object.create(null),
}

export const getFn = (method) => {
  if (!state.commands[method]) {
    throw new Error(`command not found ${method}`)
  }
  return state.commands[method]
}

export const registerCommands = (commandMap) => {
  state.commands = commandMap
}
