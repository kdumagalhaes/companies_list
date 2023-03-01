import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it } from 'vitest'
import { Home } from '../Home'

const HomeMock = () => {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
}

describe('Home page', () => {
  it('should render properly', () => {
    render(<HomeMock />)
    const divElement = screen.getByTestId('home-div-test')
    expect(divElement).toBeInTheDocument()
  })
})
