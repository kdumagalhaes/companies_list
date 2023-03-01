import { Header } from '../../components/Header/Header'
import { List } from '../../components/List/List'
import { Modes } from '../../styles/themes/default'
import { Container } from './styles'
import { NavLink } from 'react-router-dom'
import { useCompanies } from '../../context/CompaniesContext'

export function Home() {
  const { companies } = useCompanies()

  return (
    <Container data-testid="home-div-test">
      <Header mode={Modes.RED} title="Companies" />
      <List mode={Modes.RED} title1="Company name" title2="Vatin">
        {companies?.map((company) => {
          return (
            <ul key={company.id} className="data-row">
              <li className="data-row-1">
                <NavLink
                  to={{ pathname: `/company/${company.id}` }}
                  className="data-link"
                >
                  {company.name}
                </NavLink>
              </li>
              <li className="data-row-2">{company.vatin}</li>
            </ul>
          )
        })}
      </List>
    </Container>
  )
}
