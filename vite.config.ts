import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~@': resolve(__dirname, './src/styles')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.imooc-admin.lgdsunday.club/',
        changeOrigin: true // 是否跨域
      }
    },
    port: 8081
  },
  plugins: [
    vue(),

    AutoImport({
      resolvers: [ElementPlusResolver()],
      imports: ['vue', 'vue-router'] //这个配置可以自动引入vue,vue-router需要的hook函数，例如：ref,reactive,useRouter,useRoute等
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    createSvgIconsPlugin({
      // 指定需要缓存的图标文件夹
      iconDirs: [resolve(process.cwd(), './src/icons/svg')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]'
    })
  ]
})
