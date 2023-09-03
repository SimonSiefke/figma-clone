import * as GetObjects from '../GetObjects/GetObjects.js'
import * as ObjectState from '../ObjectState/ObjectState.js'
import { VError } from '../VError/VError.js'

export const loadObjects = async () => {
  try {
    const objects = await GetObjects.getObjects()
    ObjectState.setObjects(objects)
  } catch (error) {
    throw new VError(error, `Failed to load objects`)
  }
}
