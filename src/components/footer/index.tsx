'use client'

import React from 'react'
import Link from 'next/link'
import { Mail } from 'lucide-react'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Footer: React.FC = () => {
  const currentYear = React.useMemo(() => new Date().getFullYear(), [])

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: 'https://www.facebook.com/savewatersaveplanet',
      label: 'Facebook',
    },
    {
      icon: FaXTwitter,
      href: 'https://x.com/savewatersaveplanet',
      label: 'X (Twitter)',
    },
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/savewatersaveplanet',
      label: 'Instagram',
    },
  ]

  return (
    <footer className="bg-[color:var(--sw-primary-dark)] text-white">
      <div className="sw-container grid grid-cols-1 md:grid-cols-3 gap-10 py-12">
        {/* About blurb */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white">Saving Water Saves the Planet</h3>
          <p className="text-sm text-white/85 leading-relaxed">
            A Girl Scout Gold Award project teaching homeowners how to save up to 50% of their
            irrigation water with a simple DIY deep-watering pipe.
          </p>
        </div>

        {/* Quick links */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-white">Explore</h3>
          <ul className="space-y-1 text-sm">
            {[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
              { name: 'How to Make Your Own', href: '/how-to-make-your-own' },
              { name: 'Watering Your Tree', href: '/watering-your-tree' },
              { name: 'Contact', href: '/contact' },
              { name: 'Privacy Policy', href: '/privacy-policy' },
              { name: 'Terms of Service', href: '/terms-of-service' },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-[color:var(--sw-sand)] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + social */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
          <a
            href="mailto:savewatersavethearth@gmail.com"
            className="inline-flex items-center gap-2 text-sm hover:text-[color:var(--sw-sand)] transition-colors break-all"
          >
            <Mail className="w-5 h-5 flex-shrink-0" />
            savewatersavethearth@gmail.com
          </a>
          <div className="flex gap-3 pt-2">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="bg-white/10 hover:bg-[color:var(--sw-accent)] p-2 rounded-full transition-colors"
              >
                <Icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-white/80">
        <p>
          &copy; {currentYear} Saving Water Saves the Planet. A project of{' '}
          <Link
            href="https://freeforcharity.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[color:var(--sw-sand)]"
          >
            Free For Charity
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}

export default Footer
