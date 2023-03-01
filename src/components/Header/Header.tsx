import { Container } from './styles'
import { Modes } from '../../styles/themes/default'

interface HeaderProps {
  mode: Modes
  type?: string
  title: string
}

export function Header({ mode, type, title }: HeaderProps) {
  return (
    <Container data-testid="header-test" mode={mode}>
      {type ? (
        <span data-testid="span-test" className="type">
          {type}
        </span>
      ) : (
        ''
      )}
      <h1 data-testid="h1-test" className="title">
        {title}
      </h1>
    </Container>
  )
}
