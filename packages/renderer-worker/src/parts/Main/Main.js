import * as RemoteCanvas from '../RemoteCanvas/RemoteCanvas.js'
import * as RendererProcess from '../RendererProcess/RendererProcess.js'
import * as CommandMap from '../CommandMap/CommandMap.js'
import * as CommandState from '../CommandState/CommandState.js'
import * as HandleCanvas from '../HandleCanvas/HandleCanvas.js'

export const main = async () => {
  CommandState.registerCommands(CommandMap.commandMap)
  await RendererProcess.listen()
  const canvas = await RemoteCanvas.create()
  HandleCanvas.handleCanvas(canvas)
}
