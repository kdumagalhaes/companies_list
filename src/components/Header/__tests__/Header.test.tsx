import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Header } from '../Header'
import { Modes } from '../../../styles/themes/default'

interface HeaderMockProps {
  mode: Modes
  title: string
  type?: string
}

const HeaderMock = ({ mode, title, type }: HeaderMockProps) => {
  return <Header mode={mode} title={title} type={type} />
}

describe('Header', () => {
  it('should render properly', () => {
    render(<HeaderMock mode={Modes.GREEN} title="test title" />)
    const headerElement = screen.getByTestId('header-test')
    expect(headerElement).toBeInTheDocument()
  })

  it('should render span element when prop type is defined', () => {
    render(<HeaderMock mode={Modes.GREEN} title="test title" type="mobile" />)
    const spanElement = screen.getByTestId('span-test')
    expect(spanElement).toBeInTheDocument()
  })

  it('should render type text properly based on prop', () => {
    render(
      <HeaderMock mode={Modes.GREEN} title="test title" type="test text" />,
    )
    const spanElement = screen.getByTestId('span-test')
    expect(spanElement).toHaveTextContent('test text')
  })

  it('should render title text properly based on prop', () => {
    render(<HeaderMock mode={Modes.GREEN} title="test title" />)
    const h1Element = screen.getByTestId('h1-test')
    expect(h1Element).toHaveTextContent('test title')
  })

  it('should render proper title color based on mode prop', () => {
    render(<HeaderMock mode={Modes.GREEN} title="test title" />)
    const h1Element = screen.getByTestId('h1-test')
    const styles = getComputedStyle(h1Element)
    expect(styles.color).toBe('rgb(31, 150, 162)')
  })
})
