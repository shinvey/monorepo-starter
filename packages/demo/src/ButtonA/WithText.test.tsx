import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import WithTextA from './WithTextA'

test('展示WithText组件', async () => {
  render(<WithTextA />)
  expect(screen.getByRole('button')).toHaveTextContent('Hello Button')
})
