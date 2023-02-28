import styled from 'styled-components'

interface Props {
  mode: string
}

export const Container = styled.div<Props>`
  .title {
    display: flex;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 1rem;
    padding-left: 1rem;

    .title-1,
    .title-2 {
      width: 180px;
    }
  }

  .data-row {
    display: flex;
    margin-bottom: 0.5rem;
    background-color: ${({ theme }) => theme.white};
    padding: 1rem;
    border-radius: 7px;
    outline: 1px solid ${({ theme }) => theme['light-gray']};

    .data-row-1,
    .data-row-2 {
      width: 180px;
    }

    .data-link {
      text-decoration: none;
      font-weight: 700;
      color: ${(props) =>
        (props.mode === 'red' && '#ED1C24') ||
        (props.mode === 'green' && '#1F96A2')};
      transition: all 0.3s;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`
