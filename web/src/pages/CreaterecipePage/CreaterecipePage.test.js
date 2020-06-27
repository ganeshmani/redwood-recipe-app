import { render } from '@redwoodjs/testing'

import CreaterecipePage from './CreaterecipePage'

describe('CreaterecipePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreaterecipePage />)
    }).not.toThrow()
  })
})
