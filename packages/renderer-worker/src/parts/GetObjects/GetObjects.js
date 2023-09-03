import * as Ajax from '../Ajax/Ajax.js'
import * as ObjectsUrl from '../ObjectsUrl/ObjectsUrl.js'
import { VError } from '../VError/VError.js'

export const getObjects = async () => {
  try {
    const url = ObjectsUrl.objectsUrl
    return await Ajax.getJson(url)
  } catch (error) {
    throw new VError(error, `Failed to get objects`)
  }
}
