import { useNavigate } from 'react-router-dom'
import { Button } from './styles'
import BackIcon from '../../assets/icons/back-arrow.svg'

export function BackButton() {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }
  return (
    <Button data-testid="back-button-test" onClick={goBack}>
      <img src={BackIcon} className="back-arrow" alt="back arrow" />
      Back
    </Button>
  )
}
