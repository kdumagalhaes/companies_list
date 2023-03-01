import { Header } from '../../components/Header/Header'
import { List } from '../../components/List/List'
import { Modes } from '../../styles/themes/default'
import { Container } from './styles'
import { useLocation } from 'react-router'
import { useCompanies } from '../../context/CompaniesContext'

export function Company() {
  const { pathname } = useLocation()
  const { getPhoneNumbersByPathName, getCompanyNameByPathName } = useCompanies()

  const filteredPhoneNumbers = getPhoneNumbersByPathName(pathname)
  const companyName = getCompanyNameByPathName(pathname)

  return (
    <Container>
      <Header mode={Modes.GREEN} type="Company" title={companyName} />
      <List mode={Modes.GREEN} title1="Number" title2="Type">
        {filteredPhoneNumbers?.map((number) => {
          return (
            <ul key={number.id} className="data-row">
              <li className="data-row-1">
                <a href="#" className="data-link">
                  {number.id}
                </a>
              </li>
              <li className="data-row-2">{number.type}</li>
            </ul>
          )
        })}
      </List>
    </Container>
  )
}
