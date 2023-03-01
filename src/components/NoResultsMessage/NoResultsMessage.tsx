import { Container } from './styles'

interface NoResultsMessageProps {
  message: string
}

export function NoResultsMessage({ message }: NoResultsMessageProps) {
  return <Container>{message}</Container>
}
