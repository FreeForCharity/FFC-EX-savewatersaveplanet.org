import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for the Saving Water Saves the Planet website.',
}

export default function PrivacyPolicy() {
  return (
    <article className="pt-24 md:pt-28 pb-16">
      <header className="sw-wave-bg py-12 md:py-16">
        <div className="mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[color:var(--sw-primary-dark)] mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-[color:var(--sw-muted)]">
            <em>Last updated: May 2026</em>
          </p>
        </div>
      </header>
      <div className="mx-auto px-4 max-w-3xl mt-10 sw-prose">
        <p>
          Saving Water Saves the Planet is a small nonprofit project. This site is a static
          informational website -- we don&apos;t run a database, we don&apos;t sell anything, and we
          don&apos;t track you beyond the basic logs that come with web hosting.
        </p>

        <h2>Information we collect</h2>
        <p>
          We do not collect personal information from visitors to this site. If you choose to email
          us at <a href="mailto:savewatersavethearth@gmail.com">savewatersavethearth@gmail.com</a>,
          we receive your email address and any content you send -- and we only use that to reply to
          you.
        </p>

        <h2>Cookies</h2>
        <p>
          This site does not set tracking cookies. Some third-party embeds (for example, social
          media links you click through) may set their own cookies on the destination site -- those
          are governed by the destination&apos;s privacy policy.
        </p>

        <h2>Hosting and analytics</h2>
        <p>
          This site is hosted as static files. Our hosting provider may keep standard server logs
          (IP address, time of request, user agent) for security and reliability. We do not use
          analytics products like Google Analytics.
        </p>

        <h2>Children&apos;s privacy</h2>
        <p>
          Our site is welcoming to readers of all ages. We do not knowingly collect personal
          information from children. If you have any concerns, please email us.
        </p>

        <h2>Questions</h2>
        <p>
          Email us at{' '}
          <a href="mailto:savewatersavethearth@gmail.com">savewatersavethearth@gmail.com</a>{' '}
          anytime.
        </p>
      </div>
    </article>
  )
}
