import { clamp } from 'lodash'
import styled from 'styled-components'

interface Props {
  mode: string
}

export const Container = styled.header<Props>`
  margin-bottom: 3rem;

  .type {
    text-transform: uppercase;
    font-size: 0.9rem;
  }

  .title {
    color: ${(props) =>
      (props.mode === 'red' && 'rgb(237, 28, 36)') ||
      (props.mode === 'green' && 'rgb(31, 150, 162)')};
  }
`
