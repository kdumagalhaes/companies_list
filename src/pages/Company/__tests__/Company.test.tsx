import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { describe, it } from 'vitest'
import { CompaniesProvider } from '../../../context/CompaniesContext'
import { Company } from '../Company'

const CompanyMock = () => {
  return (
    <CompaniesProvider>
      <BrowserRouter>
        <Company />
      </BrowserRouter>
    </CompaniesProvider>
  )
}

describe('Company page', () => {
  it('should render properly', () => {
    render(<CompanyMock />)
    const divElement = screen.getByTestId('company-div-test')
    expect(divElement).toBeInTheDocument()
  })
})
