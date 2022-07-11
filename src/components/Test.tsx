import { defineComponent, ref, withModifiers } from 'vue'

// 1.函数式组件
// export default () => <div>Test</div>

// 2.defineComponent
// export default defineComponent({
//   render() {
//     return <div>Test</div>
//   }
// })

// 3.composition   摒弃this 对ts支持最好
export default defineComponent({
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    }
  },
  setup(props, { slots }) {
    const count = ref(0)
    const inc = () => {
      count.value++
    }

    const list = ref<string[]>(['a', 'b', 'c', 'd'])
    return () => {
      const span = true ? <span>a</span> : <span>b</span>
      return (
        <div onClick={withModifiers(inc, ['self'])}>
          Test: {count.value}
          <input type="text" v-focus v-model={count.value} />
          <div>{span}</div>
          <ul>
            {list.value.map(str => (
              <li key={str}>{str}</li>
            ))}
          </ul>
          {/* 默认插槽内容 */}
          <div>{slots.default ? slots.default() : 'default content'}</div>
          <div>{slots.title ? slots.title() : 'default title'}</div>
        </div>
      )
    }
  }
})
