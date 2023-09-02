import * as RendererProcess from '../RendererProcess/RendererProcess.js'

export const create = () => {
  return RendererProcess.invoke('RemoteCanvas.create')
}
