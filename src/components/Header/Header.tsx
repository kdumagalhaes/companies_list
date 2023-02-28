import { Container } from './styles'

export enum Modes {
  RED = 'red',
  GREEN = 'green',
}

interface HeaderProps {
  mode: Modes
  type?: string
  title: string
}

export function Header({ mode, type, title }: HeaderProps) {
  return (
    <Container mode={mode}>
      {type ? <span className="type">{type}</span> : ''}
      <h1 className="title">{title}</h1>
    </Container>
  )
}
