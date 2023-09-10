import * as KeyBindingsMap from '../KeyBindingsMap/KeyBindingsMap.js'

const matchesKey = (keybinding, key) => {
  return keybinding.key === key
}

export const getCommand = (key) => {
  for (const keybinding of KeyBindingsMap.keyBindingsMap) {
    if (matchesKey(keybinding, key)) {
      return keybinding.command
    }
  }
  return ''
}
