import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it } from 'vitest'
import { CompaniesProvider } from '../../../context/CompaniesContext'
import { Phone } from '../Phone'

const PhoneMock = () => {
  return (
    <CompaniesProvider>
      <BrowserRouter>
        <Phone />
      </BrowserRouter>
    </CompaniesProvider>
  )
}

describe('Phone page', () => {
  it('should render properly', () => {
    render(<PhoneMock />)
    const divElement = screen.getByTestId('phone-div-test')
    expect(divElement).toBeInTheDocument()
  })
})
