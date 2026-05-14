import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { assetPath } from '@/lib/assetPath'
import { Leaf, Droplets, HandHeart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About',
  description:
    'About the Saving Water Saves the Planet project -- a Girl Scout Gold Award initiative teaching homeowners to save water with DIY deep-watering pipes.',
}

const AboutPage = () => {
  return (
    <article className="pt-24 md:pt-28 pb-16">
      <header className="sw-wave-bg py-12 md:py-16">
        <div className="sw-container max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--sw-primary)]/10 text-[color:var(--sw-primary-dark)] text-xs font-semibold uppercase tracking-wider mb-4">
            <Leaf className="w-4 h-4" />
            Our Story
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[color:var(--sw-primary-dark)] mb-4">
            About Saving Water Saves the Planet
          </h1>
          <p className="text-lg text-[color:var(--sw-muted)]">
            A Girl Scout Gold Award project on a mission to help every homeowner save water, one
            tree at a time.
          </p>
        </div>
      </header>

      <div className="sw-container max-w-3xl mt-10 sw-prose">
        <p>
          Hi -- I&apos;m Elina, a Girl Scout senior, and this nonprofit project is my Gold Award.
          The Gold Award is the highest honor a Girl Scout can earn, and it asks you to solve a
          problem in your community. I chose water.
        </p>
        <p>
          Only <strong>2% of the water on Earth is drinkable freshwater</strong>. The other 98% is
          salt water. With 8.1 billion people sharing that tiny slice, every gallon matters --
          especially in drought-prone places like California, where lawns and gardens use enormous
          amounts of water every year.
        </p>
        <p>
          My project helps homeowners save up to <strong>50% of their backyard water</strong> by
          building a simple homemade irrigation system: a deep-watering pipe that delivers water
          directly to the root zone of a tree, so almost none of it evaporates at the surface.
        </p>

        <div className="my-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[color:var(--sw-paper-alt)] rounded-xl p-5 text-center">
            <Droplets className="w-8 h-8 mx-auto text-[color:var(--sw-primary)] mb-2" />
            <div className="font-semibold text-[color:var(--sw-primary-dark)]">Less water</div>
            <p className="text-sm text-[color:var(--sw-muted)] mt-1">
              Up to 50% reduction in irrigation use.
            </p>
          </div>
          <div className="bg-[color:var(--sw-paper-alt)] rounded-xl p-5 text-center">
            <Leaf className="w-8 h-8 mx-auto text-[color:var(--sw-leaf)] mb-2" />
            <div className="font-semibold text-[color:var(--sw-primary-dark)]">Healthier trees</div>
            <p className="text-sm text-[color:var(--sw-muted)] mt-1">
              Deep roots grow stronger and faster.
            </p>
          </div>
          <div className="bg-[color:var(--sw-paper-alt)] rounded-xl p-5 text-center">
            <HandHeart className="w-8 h-8 mx-auto text-[color:var(--sw-primary)] mb-2" />
            <div className="font-semibold text-[color:var(--sw-primary-dark)]">For everyone</div>
            <p className="text-sm text-[color:var(--sw-muted)] mt-1">
              About $30 builds five pipes from hardware-store parts.
            </p>
          </div>
        </div>

        <h2>How a deep-watering pipe works</h2>
        <p>
          The pipe is buried vertically next to a tree. Water you pour in flows down through holes
          drilled at three different depths. The smallest holes near the bottom let water seep
          slowly to the deepest roots; the larger holes near the top water the shallower roots
          quickly. Below the surface, the water can&apos;t evaporate, so almost all of it goes to
          the tree.
        </p>

        <div className="my-6 rounded-xl overflow-hidden shadow-md">
          <img
            src={assetPath('/Images/savewatersaveplanet/pipe-diagram.png')}
            alt="Cross-section diagram showing the deep-watering pipe in soil and how water reaches roots."
            className="w-full h-auto"
          />
        </div>

        <h2>Ready to build one?</h2>
        <p>
          The build is the fun part, and you only need a trip to the hardware store to get started.
        </p>
        <div className="not-prose mt-6 flex flex-wrap gap-3">
          <Link
            href="/how-to-make-your-own"
            className="inline-flex items-center gap-2 bg-[color:var(--sw-primary)] hover:bg-[color:var(--sw-primary-dark)] text-white font-semibold px-5 py-3 rounded-lg shadow-md transition-colors"
          >
            How to Make Your Own
          </Link>
          <Link
            href="/watering-your-tree"
            className="inline-flex items-center gap-2 border-2 border-[color:var(--sw-primary)] text-[color:var(--sw-primary-dark)] hover:bg-[color:var(--sw-primary)]/10 font-semibold px-5 py-3 rounded-lg transition-colors"
          >
            Watering Your Tree
          </Link>
        </div>
      </div>
    </article>
  )
}

export default AboutPage
