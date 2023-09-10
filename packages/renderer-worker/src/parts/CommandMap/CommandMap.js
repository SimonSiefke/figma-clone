import * as RemoteCanvas from '../RemoteCanvas/RemoteCanvas.js'

export const commandMap = {
  'RemoteCanvas.create': RemoteCanvas.create,
  'RemoteCanvas.handlePointerDown': RemoteCanvas.handlePointerDown,
  'RemoteCanvas.handlePointerMove': RemoteCanvas.handlePointerMove,
  'RemoteCanvas.handlePointerUp': RemoteCanvas.handlePointerUp,
  'RemoteCanvas.handleDoubleClick': RemoteCanvas.handleDoubleClick,
}
