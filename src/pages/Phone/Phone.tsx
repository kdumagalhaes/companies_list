import { useLocation } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { Modes } from '../../styles/themes/default'
import { Container } from './styles'
import { useCompanies } from '../../context/CompaniesContext'
import { BackButton } from '../../components/BackButton/BackButton'
import { formatPtPhoneNumber } from '../../utils/formatPtPhoneNumber'

export function Phone() {
  const { pathname } = useLocation()

  const { getPhoneTypeByPathName } = useCompanies()
  const phoneType = getPhoneTypeByPathName(pathname)

  const phoneNumber = pathname.slice(8)
  const formatedPhoneNumber = formatPtPhoneNumber(phoneNumber)

  return (
    <Container data-testid="phone-div-test">
      <BackButton />
      <Header mode={Modes.GREEN} type={phoneType} title={formatedPhoneNumber} />
    </Container>
  )
}
