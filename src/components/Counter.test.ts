import Counter from './Counter.svelte'
import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/svelte'

test('increment count when button is clicked', async () => {
  const { getByText } = render(Counter as any)
  const button = getByText('0')
  await fireEvent.click(button)
  expect(button).toHaveTextContent('1')
})
