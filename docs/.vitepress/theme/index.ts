import Theme from 'vitepress/dist/client/theme-default'
import HelloWorldVue from '../../../src/components/HelloWorld.vue'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components'
import MickUI from '../../../src/mick-ui'

export default {
  ...Theme,
  // 扩展应用程序实例
  enhanceApp({ app }) {
    // 注册组件
    registerComponents(app)
    app.component('HelloWorld', HelloWorldVue)
    app.use(MickUI)
  }
}
