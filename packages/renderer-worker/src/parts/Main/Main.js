import * as RemoteCanvas from '../RemoteCanvas/RemoteCanvas.js'
import * as RendererProcess from '../RendererProcess/RendererProcess.js'

export const main = async () => {
  await RendererProcess.listen()
  const canvas = await RemoteCanvas.create()

  const ctx = canvas.getContext('2d')
  ctx.fillStyle = 'orange'
  ctx.fillRect(0, 0, 100, 100)
}
