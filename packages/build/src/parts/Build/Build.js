import fs from 'node:fs'
import path, { join } from 'node:path'
import * as Root from '../Root/Root.js'
import * as Replace from '../Replace/Replace.js'
import * as BundleJs from '../BundleJs/BundleJs.js'

export const build = async () => {
  const pathPrefix = process.env.PATH_PREFIX || ''
  const dist = path.join(Root.root, 'dist')
  fs.rmSync(dist, { recursive: true, force: true })
  fs.mkdirSync(dist, { recursive: true })
  fs.cpSync(join(Root.root, 'static'), dist, { recursive: true, force: true })
  fs.cpSync(join(Root.root, 'packages', 'renderer-worker', 'src'), join(dist, 'packages', 'renderer-worker', 'src'), { recursive: true, force: true })
  fs.cpSync(join(Root.root, 'packages', 'renderer-process', 'src'), join(dist, 'packages', 'renderer-process', 'src'), {
    recursive: true,
    force: true,
  })
  await Replace.replace({
    path: 'dist/index.html',
    occurrence: 'packages/renderer-process/src/rendererProcessMain.js',
    replacement: 'packages/renderer-process/dist/rendererProcessMain.js',
  })
  await Replace.replace({
    path: 'dist/packages/renderer-process/src/parts/AssetDir/AssetDir.js',
    occurrence: '../../../../..',
    replacement: `${pathPrefix}`,
  })
  await Replace.replace({
    path: 'dist/packages/renderer-process/src/parts/RendererWorkerUrl/RendererWorkerUrl.js',
    occurrence: 'packages/renderer-worker/src/rendererWorkerMain.js',
    replacement: 'packages/renderer-worker/dist/rendererWorkerMain.js',
  })
  await Replace.replace({
    path: 'dist/packages/renderer-process/src/parts/Ajax/Ajax.js',
    occurrence: '../../../../../static/js/ky.js',
    replacement: '../../../../../js/ky.js',
  })
  await Replace.replace({
    path: 'dist/packages/renderer-worker/src/parts/Ajax/Ajax.js',
    occurrence: '../../../../../static/js/ky.js',
    replacement: '../../../../../js/ky.js',
  })
  await BundleJs.bundleJs({
    cwd: join(Root.root, 'dist', 'packages', 'renderer-process'),
    from: 'src/rendererProcessMain.js',
    platform: 'web',
  })
  await BundleJs.bundleJs({
    cwd: join(Root.root, 'dist', 'packages', 'renderer-worker'),
    from: 'src/rendererWorkerMain.js',
    platform: 'webworker',
  })
}
