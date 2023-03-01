import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it } from 'vitest'
import { NoResultsMessage } from '../NoResultsMessage'

interface NoResultsMessageMockProps {
  message: string
}

const NoResultsMessageMock = ({ message }: NoResultsMessageMockProps) => {
  return <NoResultsMessage message={message} />
}

describe('NoResultsMessage', () => {
  it('should render text message based on props', () => {
    render(<NoResultsMessageMock message="this is a test" />)
    const divElement = screen.getByTestId('message-test')
    expect(divElement).toHaveTextContent('this is a test')
  })
})
