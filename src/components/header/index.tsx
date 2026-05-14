'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { RxCross2 } from 'react-icons/rx'
import { assetPath } from '@/lib/assetPath'

interface MenuItem {
  label: string
  path: string
}

const menuItems: MenuItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'How to Make Your Own', path: '/how-to-make-your-own' },
  { label: 'Watering Your Tree', path: '/watering-your-tree' },
  { label: 'Contact', path: '/contact' },
]

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = () => setIsMobileMenuOpen(false)

  return (
    <header
      id="header"
      className={`w-full bg-white/95 backdrop-blur fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md py-2' : 'shadow-sm py-3'
      }`}
    >
      <div className="sw-container flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          onClick={handleLinkClick}
          className="flex items-center gap-2 group"
          aria-label="Saving Water Saves the Planet home"
        >
          <img
            src={assetPath('/Images/savewatersaveplanet/logo.png')}
            alt="Saving Water Saves the Planet"
            className={`transition-all duration-300 ${isScrolled ? 'h-10' : 'h-12'}`}
          />
          <span className="hidden sm:inline-block font-semibold text-[color:var(--sw-primary-dark)] text-base leading-tight">
            Saving Water
            <br />
            Saves the Planet
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex items-center gap-1">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={handleLinkClick}
                  className="block px-3 py-2 text-sm font-semibold text-[color:var(--sw-ink)] hover:text-[color:var(--sw-primary)] transition-colors rounded-md"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((v) => !v)}
          className="lg:hidden p-2 text-[color:var(--sw-primary-dark)]"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
        >
          {isMobileMenuOpen ? <RxCross2 className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[color:var(--sw-primary)]/20 bg-white">
          <div className="sw-container py-3">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    onClick={handleLinkClick}
                    className="block px-3 py-2 rounded-lg text-base font-semibold text-[color:var(--sw-ink)] hover:bg-[color:var(--sw-paper-alt)] hover:text-[color:var(--sw-primary)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
