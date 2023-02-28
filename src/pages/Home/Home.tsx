import { useEffect, useState } from 'react'
import { Header } from '../../components/Header/Header'
import { List } from '../../components/List/List'
import { Modes } from '../../styles/themes/default'
import { Container } from './styles'

interface CompaniesApi {
  id: number
  name: string
  vatin: string
}

export function Home() {
  const URL = 'http://localhost:3000/companies'

  const [companies, setCompanies] = useState<CompaniesApi[]>()

  const fetchCompanies = async () => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      setCompanies(data)
    } catch (error) {
      console.warn(error)
    }
  }

  useEffect(() => {
    fetchCompanies()
  }, [])

  return (
    <Container>
      <Header mode={Modes.RED} title="Companies" />
      <List mode={Modes.RED} title1="Company name" title2="Vatin">
        {companies?.map((company) => {
          return (
            <ul key={company.id} className="data-row">
              <li className="data-row-1">
                <a href="#" className="data-link">
                  {company.name}
                </a>
              </li>
              <li className="data-row-2">{company.vatin}</li>
            </ul>
          )
        })}
      </List>
    </Container>
  )
}
