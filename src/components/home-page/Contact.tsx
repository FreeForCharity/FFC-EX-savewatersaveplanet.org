import React from 'react'
import { Mail, MessageSquare } from 'lucide-react'

const Contact: React.FC = () => {
  return (
    <section
      id="contact-home"
      className="py-16 md:py-20 bg-gradient-to-br from-[color:var(--sw-primary)] to-[color:var(--sw-primary-dark)] text-white"
    >
      <div className="sw-container text-center max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Have a Question? Say Hi!</h2>
        <p className="text-base md:text-lg text-white/90 mb-8">
          Whether you&apos;re building your first pipe or curious about the project, we&apos;d love
          to hear from you.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:savewatersavethearth@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-[color:var(--sw-primary-dark)] hover:bg-[color:var(--sw-sand)] font-semibold px-6 py-3 rounded-lg shadow-md transition-colors"
          >
            <Mail className="w-5 h-5" />
            Email Us
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-white hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            More Ways to Contact
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
