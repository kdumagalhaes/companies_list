import styled from 'styled-components'

export const Container = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.red};
  font-size: 1.3rem;
  outline: 1px solid ${({ theme }) => theme.red};
  padding: 1rem;
  border-radius: 7px;
  text-align: center;
`
