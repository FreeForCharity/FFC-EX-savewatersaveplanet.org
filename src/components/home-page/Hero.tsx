import React from 'react'
import Link from 'next/link'
import { assetPath } from '@/lib/assetPath'
import { Droplets, Leaf } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section id="hero" className="sw-wave-bg pt-28 md:pt-32 pb-16 md:pb-24">
      <div className="sw-container grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--sw-primary)]/10 text-[color:var(--sw-primary-dark)] text-xs font-semibold uppercase tracking-wider mb-5">
            <Leaf className="w-4 h-4" />
            Girl Scout Gold Award project
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[color:var(--sw-primary-dark)] leading-tight">
            Saving Water Saves the Planet
          </h1>
          <p className="mt-5 text-lg md:text-xl text-[color:var(--sw-muted)] leading-relaxed">
            Plant a deep-water pipe today and help your trees thrive while cutting your irrigation
            water use by up to 50%. A simple DIY project, designed by Elina, a 16-year-old Girl
            Scout, that anyone can build in an afternoon.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/how-to-make-your-own"
              className="inline-flex items-center gap-2 bg-[color:var(--sw-primary)] hover:bg-[color:var(--sw-primary-dark)] text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors"
            >
              <Droplets className="w-5 h-5" />
              How to Make Your Own
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border-2 border-[color:var(--sw-primary)] text-[color:var(--sw-primary-dark)] hover:bg-[color:var(--sw-primary)]/10 font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Learn About the Project
            </Link>
          </div>

          <p className="mt-6 text-sm text-[color:var(--sw-muted)]">
            Only 2% of Earth&apos;s water is drinkable freshwater. Every gallon matters.
          </p>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-[color:var(--sw-paper-alt)]">
            <img
              src={assetPath('/Images/savewatersaveplanet/gallery-1.png')}
              alt="A deep-watering pipe installed at the base of a tree."
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden md:block absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 max-w-[200px]">
            <div className="text-2xl font-bold text-[color:var(--sw-primary)]">~$30</div>
            <div className="text-xs text-[color:var(--sw-muted)]">
              builds five pipes from hardware-store parts
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
