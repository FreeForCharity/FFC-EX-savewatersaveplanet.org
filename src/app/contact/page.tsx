import React from 'react'
import type { Metadata } from 'next'
import { Mail, MessageSquare, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with the Saving Water Saves the Planet project -- questions, partnerships, and project ideas welcome.',
}

const CONTACT_EMAIL = 'savewatersavethearth@gmail.com'
const FORM_URL = `mailto:${CONTACT_EMAIL}?subject=Hello%20from%20savewatersaveplanet.org`

const ContactPage = () => {
  return (
    <article className="pt-24 md:pt-28 pb-16">
      <header className="sw-wave-bg py-12 md:py-16">
        <div className="sw-container max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[color:var(--sw-primary-dark)] mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-[color:var(--sw-muted)]">
            Questions, ideas, or photos of your own pipe? We&apos;d love to hear from you.
          </p>
        </div>
      </header>

      <div className="sw-container max-w-3xl mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-md p-6 border border-[color:var(--sw-primary)]/10">
          <Mail className="w-8 h-8 text-[color:var(--sw-primary)] mb-3" />
          <h2 className="text-xl font-bold text-[color:var(--sw-primary-dark)] mb-2">
            Email us directly
          </h2>
          <p className="text-sm text-[color:var(--sw-muted)] mb-4">
            The fastest way to reach the project. We read everything.
          </p>
          <a
            href={FORM_URL}
            className="inline-flex items-center gap-2 bg-[color:var(--sw-primary)] hover:bg-[color:var(--sw-primary-dark)] text-white font-semibold px-5 py-2.5 rounded-lg transition-colors break-all"
          >
            <Mail className="w-4 h-4" />
            {CONTACT_EMAIL}
          </a>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 border border-[color:var(--sw-primary)]/10">
          <MessageSquare className="w-8 h-8 text-[color:var(--sw-leaf)] mb-3" />
          <h2 className="text-xl font-bold text-[color:var(--sw-primary-dark)] mb-2">
            Share your build
          </h2>
          <p className="text-sm text-[color:var(--sw-muted)] mb-4">
            Did you make your own pipe? Send a photo and a sentence about your tree -- we&apos;d
            love to feature it.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=My%20deep-watering%20pipe&body=Here%27s%20a%20photo%20of%20my%20build...`}
            className="inline-flex items-center gap-2 border-2 border-[color:var(--sw-leaf)] text-[color:var(--sw-leaf)] hover:bg-[color:var(--sw-leaf)]/10 font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Share a photo
          </a>
        </div>
      </div>

      <div className="sw-container max-w-3xl mt-8 text-center text-sm text-[color:var(--sw-muted)]">
        <p>
          A short contact form is on the way. In the meantime, email is the best way to reach us --
          we usually reply within a few days.
        </p>
      </div>
    </article>
  )
}

export default ContactPage
