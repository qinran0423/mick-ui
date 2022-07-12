import { render } from '@testing-library/vue'
import Button from '../src/button'

test('should work', () => {
  const { getByRole } = render(Button)

  getByRole('button')
})

test('default  slots should be 按钮', () => {
  const { getByText } = render(Button)

  getByText('按钮')
})

test('slots should word', () => {
  const { getByText } = render(Button, {
    slots: {
      default() {
        return 'button'
      }
    }
  })

  getByText('button')
})

test('slots should word', () => {
  const { getByText } = render(Button, {
    slots: {
      default() {
        return 'button'
      }
    }
  })

  getByText('button')
})

test('default prop type should be secondary', () => {
  const { getByRole } = render(Button)
  const button = getByRole('button')
  expect(button.classList.contains('s-btn--secondary')).toBe(true)
})

test('type  should word', () => {
  const { getByRole } = render(Button, {
    props: {
      type: 'primary'
    }
  })

  const button = getByRole('button')
  expect(button.classList.contains('s-btn--primary')).toBe(true)
})
