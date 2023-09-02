import * as RendererWorkerUrl from '../RendererWorkerUrl/RendererWorkerUrl.js'

export const main = () => {
  const worker = new Worker(RendererWorkerUrl.rendererWorkerUrl, {
    type: 'module',
    name: 'Renderer Worker',
  })
  console.log('created renderer worker')
}
