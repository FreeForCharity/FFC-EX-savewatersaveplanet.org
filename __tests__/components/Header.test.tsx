import React from 'react'
import { render, screen } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Header from '../../src/components/header'

expect.extend(toHaveNoViolations)

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}))

describe('Header component', () => {
  it('should render the header', () => {
    render(<Header />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('should display the Saving Water Saves the Planet logo', () => {
    render(<Header />)
    expect(screen.getByAltText('Saving Water Saves the Planet')).toBeInTheDocument()
  })

  it('should display Home navigation link', () => {
    render(<Header />)
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('should display About navigation link', () => {
    render(<Header />)
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('should display the DIY guide link', () => {
    render(<Header />)
    expect(screen.getAllByText('How to Make Your Own').length).toBeGreaterThan(0)
  })

  it('should have navigation links', () => {
    render(<Header />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })

  it('should have a mobile menu button', () => {
    render(<Header />)
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('should not have accessibility violations', async () => {
    const { container } = render(<Header />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
