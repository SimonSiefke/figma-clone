import * as RemoteCanvas from '../RemoteCanvas/RemoteCanvas.js'

export const commandMap = {
  'RemoteCanvas.create': RemoteCanvas.create,
  'RemoteCanvas.handleClickRectangle': RemoteCanvas.handleClickRectangle,
  'RemoteCanvas.handleClickText': RemoteCanvas.handleClickText,
  'RemoteCanvas.handleDoubleClick': RemoteCanvas.handleDoubleClick,
  'RemoteCanvas.handlePointerDown': RemoteCanvas.handlePointerDown,
  'RemoteCanvas.handlePointerMove': RemoteCanvas.handlePointerMove,
  'RemoteCanvas.handlePointerUp': RemoteCanvas.handlePointerUp,
  'RemoteCanvas.handleKeyDown': RemoteCanvas.handleKeyDown,
}
