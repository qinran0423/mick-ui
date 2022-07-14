import type { App, Plugin } from 'vue'
import SButton from './button'
import STree from './tree'

const components = [SButton, STree]

const MickUI = {
  install(app: App) {
    Object.keys(components).forEach((key: any) => {
      const component = components[key]
      app.use(component)
    })
  }
}

export default MickUI
