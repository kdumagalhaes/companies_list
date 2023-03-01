import { Header } from '../../components/Header/Header'
import { List } from '../../components/List/List'
import { Modes } from '../../styles/themes/default'
import { Container } from './styles'
import { useLocation } from 'react-router'
import { useCompanies } from '../../context/CompaniesContext'
import { NavLink } from 'react-router-dom'
import { BackButton } from '../../components/BackButton/BackButton'
import { NoResultsMessage } from '../../components/NoResultsMessage/NoResultsMessage'

export function Company() {
  const { pathname } = useLocation()
  const { getPhoneNumbersByPathName, getCompanyNameByPathName } = useCompanies()

  const filteredPhoneNumbers = getPhoneNumbersByPathName(pathname)
  const companyName = getCompanyNameByPathName(pathname)

  return (
    <Container>
      <BackButton />
      <Header mode={Modes.GREEN} type="Company" title={companyName} />
      {filteredPhoneNumbers?.length ? (
        <List mode={Modes.GREEN} title1="Number" title2="Type">
          {filteredPhoneNumbers?.map((number) => {
            return (
              <ul key={number.id} className="data-row">
                <li className="data-row-1">
                  <NavLink
                    to={{ pathname: `/number/${number.id}` }}
                    className="data-link"
                  >
                    {number.id}
                  </NavLink>
                </li>
                <li className="data-row-2">{number.type}</li>
              </ul>
            )
          })}
        </List>
      ) : (
        <NoResultsMessage message="⚠️ No results found." />
      )}
    </Container>
  )
}
