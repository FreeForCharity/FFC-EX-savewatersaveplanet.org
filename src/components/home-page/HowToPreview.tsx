import React from 'react'
import Link from 'next/link'
import { Wrench, Sprout, ArrowRight } from 'lucide-react'
import { assetPath } from '@/lib/assetPath'

const HowToPreview: React.FC = () => {
  return (
    <section id="how-to" className="py-16 md:py-20 bg-[color:var(--sw-paper-alt)]">
      <div className="sw-container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--sw-primary-dark)] mb-3">
            Build One This Weekend
          </h2>
          <p className="text-base text-[color:var(--sw-muted)]">
            Two short guides walk you through everything you need to build a deep-watering pipe and
            then use it well.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link
            href="/how-to-make-your-own"
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col"
          >
            <div className="aspect-video overflow-hidden bg-[color:var(--sw-paper-alt)]">
              <img
                src={assetPath('/Images/savewatersaveplanet/pipe-diagram.png')}
                alt="Diagram of a deep-watering pipe showing drilled holes at different depths."
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-2 text-[color:var(--sw-primary)] mb-2">
                <Wrench className="w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-wider">Build it</span>
              </div>
              <h3 className="text-xl font-bold text-[color:var(--sw-primary-dark)] mb-2">
                How to Make Your Own
              </h3>
              <p className="text-sm text-[color:var(--sw-muted)] flex-1">
                Step-by-step instructions with the materials list, tools, and drill-bit sizes you
                need.
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--sw-primary)] group-hover:gap-2 transition-all">
                Start building
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          <Link
            href="/watering-your-tree"
            className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col"
          >
            <div className="aspect-video overflow-hidden bg-[color:var(--sw-paper-alt)]">
              <img
                src={assetPath('/Images/savewatersaveplanet/gallery-3.png')}
                alt="A tree being watered with a deep-watering pipe in place."
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-2 text-[color:var(--sw-leaf)] mb-2">
                <Sprout className="w-5 h-5" />
                <span className="text-xs font-semibold uppercase tracking-wider">Use it well</span>
              </div>
              <h3 className="text-xl font-bold text-[color:var(--sw-primary-dark)] mb-2">
                Watering Your Tree
              </h3>
              <p className="text-sm text-[color:var(--sw-muted)] flex-1">
                Learn the right amount of water for your tree using its diameter at breast height
                (DBH).
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--sw-leaf)] group-hover:gap-2 transition-all">
                See the watering guide
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HowToPreview
