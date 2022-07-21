import { render } from '@testing-library/vue'
import Space from '../src/space'

describe('space test', () => {
  test('space init render', async () => {
    const { getByRole } = render(Space)
    getByRole('space')
  })
})
