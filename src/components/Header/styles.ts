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
      (props.mode === 'red' && '#ED1C24') ||
      (props.mode === 'green' && '#1F96A2')};
  }
`
