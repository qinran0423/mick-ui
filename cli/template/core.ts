// 创建组件核心文件模板

import { upperFirst } from './utils'

export default function genCoreTemplete(name: string) {
  const className = `s-${name}`
  const compName = `S${upperFirst(name)}`
  const propsTypeName = `${upperFirst(name)}Props`
  const propsName = `${name}Props`
  const propsFileName = `${name}-type`
  return `
import { defineComponent, toRefs } from 'vue'
import { ${propsTypeName}, ${propsName} } from './${propsFileName}'

export default defineComponent({
  name: '${compName}',
  props: ${propsName} ,
  setup(props: ${propsTypeName}) {
    return () => {
      return (
        <div class="${className}"></div>
      )
    }
  }
})
`
}
