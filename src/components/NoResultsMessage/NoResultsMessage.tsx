import { Container } from './styles'

interface NoResultsMessageProps {
  message: string
}

export function NoResultsMessage({ message }: NoResultsMessageProps) {
  return <Container data-testid="message-test">{message}</Container>
}
