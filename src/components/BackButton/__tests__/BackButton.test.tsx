import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it } from 'vitest'
import { BackButton } from '../BackButton'

const BackButtonMock = () => {
  return (
    <BrowserRouter>
      <BackButton />
    </BrowserRouter>
  )
}

describe('BackButton', () => {
  it('should render properly', () => {
    render(<BackButtonMock />)
    const buttonElement = screen.getByTestId('back-button-test')
    expect(buttonElement).toBeInTheDocument()
  })
})
