import { Alias, defineConfig, PluginOption } from 'vite'
import react from '@vitejs/plugin-react-swc'
import vue from '@vitejs/plugin-vue'
import { GlobSync } from 'glob'
import { resolve } from 'path'
import fs from 'fs-extra'
import basicSsl from '@vitejs/plugin-basic-ssl'
import vueJsx from '@vitejs/plugin-vue-jsx'

const getWorkspaceAlias = () => {
  const basePath = resolve(__dirname, '../../')
  const pkg = fs.readJSONSync(resolve(basePath, 'package.json')) || {}
  const alias: Alias[] = []
  const workspaces = pkg.workspaces
  if (Array.isArray(workspaces)) {
    workspaces.forEach((pattern) => {
      const { found } = new GlobSync(pattern, { cwd: basePath })
      found.forEach((name) => {
        try {
          const pkg = fs.readJSONSync(resolve(basePath, name, './package.json'))
          alias.push({
            find: pkg.name,
            replacement: resolve(basePath, name, './src'),
          })
        } catch (error) {}
      })
    })
  }
  return alias
}

/**
 * 兼容vue jsx和react jsx
 */
function jsx(): PluginOption[] {
  const vueRegex = /(examples-vue\/vue\/).*\.[jt]sx$/
  const vueJsxPlugin: PluginOption = {
    ...vueJsx({
      include: vueRegex,
    }),
    config(config) {
      return {
        define: {
          __VUE_OPTIONS_API__: config.define?.__VUE_OPTIONS_API__ ?? true,
          __VUE_PROD_DEVTOOLS__: config.define?.__VUE_PROD_DEVTOOLS__ ?? false,
        },
        esbuild: {
          exclude: vueRegex,
        },
      }
    },
  }

  const reactJsxPlugin = react().map<PluginOption>((plugin) => {
    if (!plugin) return plugin
    return {
      ...plugin,
      transform(code, id, opt) {
        if (vueRegex.test(id)) {
          return
        }
        if ('transform' in plugin && typeof plugin.transform === 'function') {
          return plugin.transform.bind(this)(code, id, opt)
        }
      },
    }
  })

  return [vueJsxPlugin, reactJsxPlugin]
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), jsx(), basicSsl()],
  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
      { find: '@', replacement: resolve(__dirname, 'src') },
      ...getWorkspaceAlias(),
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        charset: false,
      },
      scss: {
        javascriptEnabled: true,
        charset: false,
      },
    },
  },
  server: {},
})
