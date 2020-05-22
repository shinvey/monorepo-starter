import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import WithTextB from './WithTextB'

test('展示WithText组件', async () => {
  render(<WithTextB />)
  expect(screen.getByRole('button')).toHaveTextContent('Hello Button')
})
