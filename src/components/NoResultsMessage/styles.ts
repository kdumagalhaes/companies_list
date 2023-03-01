import styled from 'styled-components'

export const Container = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.gray};
  font-size: 1.3rem;
  background-color: ${({ theme }) => theme['light-gray']};
  padding: 1rem;
  border-radius: 7px;
  text-align: center;
`
