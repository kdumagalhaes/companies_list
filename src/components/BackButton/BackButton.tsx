import { useNavigate } from 'react-router-dom'
import { Button } from './styles'

export function BackButton() {
  const navigate = useNavigate()
  const goBack = () => {
    navigate(-1)
  }
  return <Button onClick={goBack}>Back</Button>
}
