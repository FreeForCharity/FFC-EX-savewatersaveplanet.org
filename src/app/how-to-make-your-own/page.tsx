import React from 'react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { assetPath } from '@/lib/assetPath'
import { Wrench, ShoppingCart, AlertCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How to Make Your Own',
  description:
    'Step-by-step DIY guide for building a deep-watering pipe. Materials, tools, and full instructions to save up to 50% of irrigation water.',
}

const materials = [
  { name: '3-inch corrugated drain pipe', note: 'cut to your desired length' },
  { name: 'Pipe cutter or hacksaw', note: '' },
  { name: 'Drill', note: '' },
  { name: 'Three drill-bit sizes', note: '1/16", 1/8", and 3/8"' },
  { name: 'Permanent marker', note: 'for marking hole positions' },
  { name: 'An empty Pringles can (with lid)', note: 'used as the bottom cap and removable top' },
  { name: 'Construction adhesive', note: 'to attach the bottom cap' },
  { name: 'Weed-protector landscape fabric', note: 'wraps the pipe to prevent clogging' },
  { name: 'Scissors', note: '' },
  { name: 'Rope or strong thread', note: 'to secure the fabric' },
  { name: 'Garden gloves', note: '' },
  { name: 'Shovel', note: '' },
]

const HowToPage = () => {
  return (
    <article className="pt-24 md:pt-28 pb-16">
      <header className="sw-wave-bg py-12 md:py-16">
        <div className="mx-auto px-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--sw-primary)]/10 text-[color:var(--sw-primary-dark)] text-xs font-semibold uppercase tracking-wider mb-4">
            <Wrench className="w-4 h-4" />
            DIY Guide
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[color:var(--sw-primary-dark)] mb-4">
            How to Make Your Own Deep-Watering Pipe
          </h1>
          <p className="text-lg text-[color:var(--sw-muted)]">
            A weekend project that can save up to 50% of the water you use on your trees. Costs
            about $30 for a set of five pipes.
          </p>
        </div>
      </header>

      <div className="mx-auto px-4 max-w-3xl mt-10 sw-prose">
        <h2>How it works</h2>
        <p>
          The pipe is buried vertically next to a tree. You drill three sizes of holes along its
          length:
        </p>
        <ul>
          <li>
            <strong>Smallest holes (1/16&quot;)</strong> near the bottom -- water seeps slowly to
            the deepest roots.
          </li>
          <li>
            <strong>Medium holes (1/8&quot;)</strong> in the middle -- supply the mid-depth roots.
          </li>
          <li>
            <strong>Largest holes (3/8&quot;)</strong> near the top -- water reaches the upper roots
            quickly.
          </li>
        </ul>
        <p>
          Because the water is delivered below the surface, almost none of it evaporates -- it all
          goes to the tree. The deep roots, which are the most important for tree health, get
          watered thoroughly.
        </p>

        <div className="my-8 rounded-xl overflow-hidden shadow-md">
          <img
            src={assetPath('/Images/savewatersaveplanet/pipe-diagram.png')}
            alt="Diagram showing the deep-watering pipe and how holes of different sizes deliver water to different root depths."
            className="w-full h-auto"
          />
        </div>

        <h2>Materials and tools</h2>
        <p>Everything you need is available at a hardware store like Lowe&apos;s or Home Depot.</p>
        <div className="not-prose my-6 bg-[color:var(--sw-paper-alt)] rounded-xl p-5 border border-[color:var(--sw-primary)]/15">
          <div className="flex items-center gap-2 mb-3 text-[color:var(--sw-primary-dark)] font-semibold">
            <ShoppingCart className="w-5 h-5" />
            Shopping list
          </div>
          <ul className="space-y-1 text-sm">
            {materials.map((m) => (
              <li key={m.name} className="flex flex-wrap gap-x-2">
                <span className="font-semibold text-[color:var(--sw-ink)]">{m.name}</span>
                {m.note && <span className="text-[color:var(--sw-muted)]">-- {m.note}</span>}
              </li>
            ))}
          </ul>
        </div>

        <h2>Step-by-step instructions</h2>

        <h3>Step 1 -- Cut the pipe</h3>
        <p>
          Use a pipe cutter or hacksaw to cut the corrugated drain pipe to your desired length. A
          length of 2-3 feet works well for most yards.
        </p>

        <h3>Step 2 -- Mark and drill the holes</h3>
        <p>
          Using your marker, mark hole positions in three zones along the pipe. Drill the smallest
          holes (1/16&quot;) near the bottom, the medium holes (1/8&quot;) in the middle, and the
          largest holes (3/8&quot;) near the top. Wear gloves and safety glasses.
        </p>
        <p className="text-sm text-[color:var(--sw-muted)]">
          <em>
            Tip: if you accidentally drill a hole in the wrong place, you can simply flip the pipe
            upside down -- the design is forgiving.
          </em>
        </p>

        <h3>Step 3 -- Cap the bottom with a Pringles lid</h3>
        <p>
          Use construction adhesive to glue the bottom of an empty Pringles can to the bottom of the
          pipe. This stops dirt from getting in and keeps water flowing out through the holes
          instead. Let the adhesive cure as the label says.
        </p>

        <div className="my-6 grid grid-cols-2 gap-3">
          <img
            src={assetPath('/Images/savewatersaveplanet/how-to-1.jpeg')}
            alt="Drilling holes into the corrugated drain pipe."
            className="w-full rounded-xl shadow-sm"
          />
          <img
            src={assetPath('/Images/savewatersaveplanet/how-to-2.jpeg')}
            alt="Pipe being prepared with cap and weed fabric."
            className="w-full rounded-xl shadow-sm"
          />
        </div>

        <h3>Step 4 -- Wrap with weed-protector fabric</h3>
        <p>
          Cut a piece of landscape weed-protector fabric large enough to wrap the entire pipe. The
          fabric keeps roots and soil from clogging the holes while still letting water through.
          Secure the fabric in place with rope or strong thread.
        </p>

        <h3>Step 5 -- Make a removable lid</h3>
        <p>
          Cut the Pringles can&apos;s plastic top so it sits snugly on top of the pipe as a
          removable lid. This keeps debris out between waterings and lets you top the pipe up
          easily.
        </p>

        <h3>Step 6 -- Install it next to your tree</h3>
        <p>
          Use a shovel to dig a vertical hole next to your tree, roughly the depth of the pipe.
          Slide the pipe in so the top sits just at or slightly above ground level. Backfill around
          the pipe and tamp the soil. To water, pour water (or insert a hose) into the top opening.
        </p>

        <div className="not-prose my-6 bg-[color:var(--sw-sand)]/40 border border-[color:var(--sw-sand)] rounded-xl p-5 flex gap-3">
          <AlertCircle className="w-6 h-6 text-[color:var(--sw-primary-dark)] flex-shrink-0 mt-0.5" />
          <p className="text-sm text-[color:var(--sw-ink)]">
            <strong>A small mistake won&apos;t ruin your pipe.</strong> If a hole is in the wrong
            spot, flip the pipe. If you make one bad cut, keep going -- it still works. This project
            is meant to be approachable.
          </p>
        </div>

        <h2>Next step: water your tree</h2>
        <p>
          Now that you&apos;ve built your pipe, head over to the watering guide to figure out how
          many gallons your tree needs based on its size.
        </p>
        <div className="not-prose mt-6">
          <Link
            href="/watering-your-tree"
            className="inline-flex items-center gap-2 bg-[color:var(--sw-leaf)] hover:bg-[color:var(--sw-leaf)]/90 text-white font-semibold px-5 py-3 rounded-lg shadow-md transition-colors"
          >
            See the watering guide
          </Link>
        </div>
      </div>
    </article>
  )
}

export default HowToPage
