import * as RemoteCanvas from '../RemoteCanvas/RemoteCanvas.js'
import * as RendererProcess from '../RendererProcess/RendererProcess.js'

export const main = async () => {
  await RendererProcess.listen()
  const canvas = await RemoteCanvas.create()
  // TODO
  console.log('hello from renderer worker')
}
