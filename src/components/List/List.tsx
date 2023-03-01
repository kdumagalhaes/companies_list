import { Container } from './styles'
import { Modes } from '../../styles/themes/default'
import { ReactNode } from 'react'
interface ListProps {
  mode: Modes
  title1: string
  title2: string
  children: ReactNode
}

export function List({ mode, title1, title2, children }: ListProps) {
  return (
    <Container data-testid="div-test" mode={mode}>
      <ul className="title">
        <li data-testid="title1-test" className="title-1">
          {title1}
        </li>
        <li data-testid="title2-test" className="title-2">
          {title2}
        </li>
      </ul>
      {children}
    </Container>
  )
}
