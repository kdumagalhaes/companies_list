import styled from 'styled-components'

export const Button = styled.button`
  padding: 0.6rem 1.6rem;
  border: none;
  background-color: ${({ theme }) => theme.gray};
  border-radius: 4px;
  margin-bottom: 2rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme['light-gray']};
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  transition: all 0.3s;

  &:hover {
    box-shadow: none;
    opacity: 0.9;
  }
`
