import express from 'express'
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..', '..', '..')

const app = express()

app.use(express.static(root))

const handleListening = () => {
  console.log(`[server] listening on http://localhost:3000`)
}

const main = () => {
  app.listen(3000, handleListening)
}

main()
