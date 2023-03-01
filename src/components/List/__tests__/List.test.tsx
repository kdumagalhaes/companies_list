import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { List } from '../List'
import { ReactNode } from 'react'
import { Modes } from '../../../styles/themes/default'

interface ListMockProps {
  mode: Modes
  title1: string
  title2: string
  children: ReactNode
}

const ListMock = ({ children, mode, title1, title2 }: ListMockProps) => {
  return (
    <List mode={mode} title1={title1} title2={title2}>
      {children}
    </List>
  )
}

describe('List', () => {
  it('should render properly', () => {
    render(
      <ListMock mode={Modes.GREEN} title1="test title1" title2="test title2">
        <ul></ul>
      </ListMock>,
    )
    const divElement = screen.getByTestId('div-test')
    expect(divElement).toBeInTheDocument()
  })

  it('should render title1 text based on props', () => {
    render(
      <ListMock mode={Modes.GREEN} title1="test title1" title2="test title2">
        <ul></ul>
      </ListMock>,
    )
    const title1Element = screen.getByTestId('title1-test')
    expect(title1Element).toHaveTextContent('test title1')
  })

  it('should render title2 text based on props', () => {
    render(
      <ListMock mode={Modes.GREEN} title1="test title1" title2="test title2">
        <ul></ul>
      </ListMock>,
    )
    const title1Element = screen.getByTestId('title2-test')
    expect(title1Element).toHaveTextContent('test title2')
  })
})
