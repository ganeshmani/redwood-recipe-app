import { render } from '@redwoodjs/testing'

import NavbarLayout from './NavbarLayout'

describe('NavbarLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavbarLayout />)
    }).not.toThrow()
  })
})
