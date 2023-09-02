import * as RendererWorker from '../RendererWorker/RendererWorker.js'

export const main = async () => {
  await RendererWorker.listen()
  console.log('created renderer worker')
}
