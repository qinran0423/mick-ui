import { upperFirst } from './utils'

// 创建组件类型声明文件模板
export default function genTypesTemplete(name: string) {
  const propsTypeName = `${upperFirst(name)}Props`
  const propsName = `${name}Props`
  return `
import { PropType, ExtractPropTypes } from 'vue'

export const ${propsName} = {} as const
export type ${propsTypeName} = ExtractPropTypes<typeof  ${propsName}>
`
}
