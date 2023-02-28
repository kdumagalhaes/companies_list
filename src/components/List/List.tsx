import { Container } from './styles'
import { Modes } from '../../styles/themes/default'

interface ListProps {
  mode: Modes
  title1: string
  title2: string
}

export function List({ mode, title1, title2 }: ListProps) {
  return (
    <Container mode={mode}>
      <ul className="title">
        <li className="title-1">{title1}</li>
        <li className="title-2">{title2}</li>
      </ul>
      <ul className="data-row">
        <li className="data-row-1">
          <a href="#" className="data-link">
            Local Public Office
          </a>
        </li>
        <li className="data-row-2">500754012</li>
      </ul>
      <ul className="data-row">
        <li className="data-row-1">
          <a href="#" className="data-link">
            Local Office
          </a>
        </li>
        <li className="data-row-2">500754012</li>
      </ul>
    </Container>
  )
}
