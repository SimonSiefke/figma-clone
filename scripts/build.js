import fs from 'node:fs'
import path, { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const dist = path.join(root, 'dist')

fs.rmSync(dist, { recursive: true, force: true })
fs.mkdirSync(dist, { recursive: true })
fs.cpSync(join(root, 'static'), dist, { recursive: true, force: true })
fs.cpSync(join(root, 'packages', 'renderer-worker', 'src'), join(dist, 'packages', 'renderer-worker', 'src'), { recursive: true, force: true })
fs.cpSync(join(root, 'packages', 'renderer-process', 'src'), join(dist, 'packages', 'renderer-process', 'src'), { recursive: true, force: true })
