import { App } from 'vue'
import Space from './src/space'
import { installComponent } from '../install'
import type { SheepUIOptions } from '../_utils/global-config'

// 具名导出
export { Space }

// 导出插件
export default {
  install(app: App, options?: SheepUIOptions) {
    installComponent(app, Space, options)
  }
}
