import { render } from '@testing-library/vue'
import Tree from '../src/tree'

describe('tree test', () => {
  test('tree init render', async () => {
    const { getByRole } = render(Tree)
    const tree = getByRole('div')
    expect(tree.classList.contains('.s-tree')).toBe(true)
  })
})
