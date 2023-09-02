import fs from 'node:fs'
import path, { join } from 'node:path'
import * as Root from '../Root/Root.js'

export const build = () => {
  const dist = path.join(Root.root, 'dist')
  fs.rmSync(dist, { recursive: true, force: true })
  fs.mkdirSync(dist, { recursive: true })
  fs.cpSync(join(Root.root, 'static'), dist, { recursive: true, force: true })
  fs.cpSync(join(Root.root, 'packages', 'renderer-worker', 'src'), join(dist, 'packages', 'renderer-worker', 'src'), { recursive: true, force: true })
  fs.cpSync(join(Root.root, 'packages', 'renderer-process', 'src'), join(dist, 'packages', 'renderer-process', 'src'), {
    recursive: true,
    force: true,
  })
}
