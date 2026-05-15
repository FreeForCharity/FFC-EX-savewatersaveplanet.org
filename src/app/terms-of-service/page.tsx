import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for the Saving Water Saves the Planet website.',
}

export default function TermsOfService() {
  return (
    <article className="pt-24 md:pt-28 pb-16">
      <header className="sw-wave-bg py-12 md:py-16">
        <div className="mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-[color:var(--sw-primary-dark)] mb-3">
            Terms of Service
          </h1>
          <p className="text-sm text-[color:var(--sw-muted)]">
            <em>Last updated: May 2026</em>
          </p>
        </div>
      </header>
      <div className="mx-auto px-4 max-w-3xl mt-10 sw-prose">
        <h2>About this site</h2>
        <p>
          Saving Water Saves the Planet is an educational nonprofit project. The instructions,
          diagrams, and tips on this site are provided in good faith to help people save water.
        </p>

        <h2>Use of content</h2>
        <p>
          You are welcome to use the instructions on this site to build your own deep-watering pipe
          at home. If you republish any text or images, please credit{' '}
          <em>Saving Water Saves the Planet</em>.
        </p>

        <h2>DIY safety</h2>
        <p>
          The build involves common tools like drills and shovels. Please follow safety basics --
          wear gloves and safety glasses when drilling, watch your fingers, and supervise children.
          You build at your own risk; we are not responsible for damages or injuries.
        </p>

        <h2>External links</h2>
        <p>
          We link to product pages and social platforms for your convenience. Those sites have their
          own terms and privacy policies.
        </p>

        <h2>Changes</h2>
        <p>We may update these terms occasionally. The latest version always lives on this page.</p>

        <h2>Questions</h2>
        <p>
          Email us at{' '}
          <a href="mailto:savewatersavethearth@gmail.com">savewatersavethearth@gmail.com</a>.
        </p>
      </div>
    </article>
  )
}
