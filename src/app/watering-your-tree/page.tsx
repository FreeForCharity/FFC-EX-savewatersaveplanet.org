import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { assetPath } from '@/lib/assetPath'
import { Sprout, Calculator } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Watering Your Tree',
  description:
    'How much water does your tree need? Use the DBH (Diameter at Breast Height) method and your deep-watering pipe to give it the right amount.',
}

const WateringPage = () => {
  return (
    <article className="pt-24 md:pt-28 pb-16">
      <header className="sw-wave-bg py-12 md:py-16">
        <div className="mx-auto px-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--sw-leaf)]/10 text-[color:var(--sw-primary-dark)] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sprout className="w-4 h-4" />
            Use Your Pipe Well
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[color:var(--sw-primary-dark)] mb-4">
            Watering Your Tree
          </h1>
          <p className="text-lg text-[color:var(--sw-muted)]">
            How much water does your tree actually need? Here&apos;s the simple rule and the math
            behind it.
          </p>
        </div>
      </header>

      <div className="mx-auto px-4 max-w-3xl mt-10 sw-prose">
        <h2>The simple rule</h2>
        <p>
          A good baseline is{' '}
          <strong>
            about 10 gallons of water for every inch of your tree&apos;s trunk diameter
          </strong>
          . For a tree with a 4-inch trunk, that&apos;s roughly 40 gallons per watering.
        </p>
        <p>
          The exact amount depends on your tree&apos;s age, species, soil, and weather -- but the
          10-gallons-per-inch rule is a great place to start.
        </p>

        <h2>How to measure your tree (DBH)</h2>
        <p>
          Foresters measure tree size using <strong>DBH -- Diameter at Breast Height</strong>.
          It&apos;s easier than it sounds. You need a tape measure and a quick bit of math.
        </p>
        <ol>
          <li>
            <strong>Measure the circumference</strong> of the trunk at 4.5 feet (about 1.4 meters)
            above the ground. Wrap a tape measure all the way around.
          </li>
          <li>
            <strong>Divide by pi (3.1418).</strong> The result is the trunk&apos;s diameter in
            inches -- this is your DBH.
          </li>
          <li>
            <strong>Multiply DBH by 10</strong> to get the recommended gallons per watering.
          </li>
        </ol>

        <div className="not-prose my-6 bg-[color:var(--sw-paper-alt)] rounded-xl p-5 border border-[color:var(--sw-primary)]/15">
          <div className="flex items-center gap-2 mb-3 text-[color:var(--sw-primary-dark)] font-semibold">
            <Calculator className="w-5 h-5" />
            Example
          </div>
          <ul className="text-sm space-y-1">
            <li>Trunk circumference at 4.5 ft = 18 inches</li>
            <li>
              18 &divide; 3.1418 = <strong>about 5.7 inches DBH</strong>
            </li>
            <li>
              5.7 &times; 10 = <strong>about 57 gallons per watering</strong>
            </li>
          </ul>
        </div>

        <h2>How often should I water?</h2>
        <p>
          Frequency depends on your climate and your tree&apos;s species, but a common starting
          point is:
        </p>
        <ul>
          <li>
            <strong>Young trees (first 2-3 years):</strong> once or twice a week during dry weather.
          </li>
          <li>
            <strong>Established trees:</strong> once every 1-2 weeks during dry weather, deeper
            soakings.
          </li>
          <li>
            <strong>After rain:</strong> skip a watering -- the pipe makes it easy to wait without
            stressing the roots.
          </li>
        </ul>
        <p>
          Watch your tree. Yellowing or wilting leaves often mean it&apos;s thirsty. Mushy soil or
          fungus means you&apos;re overdoing it.
        </p>

        <div className="my-8 rounded-xl overflow-hidden shadow-md">
          <img
            src={assetPath('/Images/savewatersaveplanet/gallery-3.webp')}
            alt="A tree being watered using the deep-watering pipe."
            className="w-full h-auto"
          />
        </div>

        <h2>Don&apos;t have a pipe yet?</h2>
        <p>The whole guide is one click away. You can build one this weekend.</p>
        <div className="not-prose mt-6">
          <Link
            href="/how-to-make-your-own"
            className="inline-flex items-center gap-2 bg-[color:var(--sw-primary)] hover:bg-[color:var(--sw-primary-dark)] text-white font-semibold px-5 py-3 rounded-lg shadow-md transition-colors"
          >
            How to Make Your Own
          </Link>
        </div>
      </div>
    </article>
  )
}

export default WateringPage
