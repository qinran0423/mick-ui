import Test from './Test'
import { render } from '@testing-library/vue'

// 单测应该写的很小， 仅覆盖单独函数，类，复用逻辑等
// 单测关注逻辑正确性，且仅关注程序功能的一小块
// 对于可视部分， 组件验证基于输入的props slots等渲染输出的结果
// 对于行为逻辑，组件测试验证响应用户输入事件正确渲染更新和派发事件
test('Test.jsx should work', () => {
  const { getByText } = render(Test)
  getByText('Test: 0')
})
