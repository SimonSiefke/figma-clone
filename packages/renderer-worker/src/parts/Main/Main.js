import * as RemoteCanvas from '../RemoteCanvas/RemoteCanvas.js'
import * as RendererProcess from '../RendererProcess/RendererProcess.js'
import * as CommandMap from '../CommandMap/CommandMap.js'
import * as CommandState from '../CommandState/CommandState.js'

export const main = async () => {
  CommandState.registerCommands(CommandMap.commandMap)
  await RendererProcess.listen()
  const canvas = await RemoteCanvas.create()

  const ctx = canvas.getContext('2d')
  ctx.fillStyle = 'orange'
  ctx.fillRect(0, 0, 100, 100)
}
