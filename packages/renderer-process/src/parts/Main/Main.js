import * as CommandMap from '../CommandMap/CommandMap.js'
import * as CommandState from '../CommandState/CommandState.js'
import * as RendererWorker from '../RendererWorker/RendererWorker.js'

export const main = async () => {
  CommandState.registerCommands(CommandMap.commandMap)
  await RendererWorker.listen()
  console.log('created renderer worker')
}
