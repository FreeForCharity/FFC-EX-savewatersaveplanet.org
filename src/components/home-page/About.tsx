import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="sw-container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--sw-primary-dark)] mb-4">
            About the Project
          </h2>
          <p className="text-lg text-[color:var(--sw-muted)] leading-relaxed mb-4">
            I&apos;m Elina, a Girl Scout senior, and this is my Gold Award project. The goal is
            simple: help homeowners save up to 50% of their backyard water by building an
            inexpensive, deep-watering irrigation pipe.
          </p>
          <p className="text-base text-[color:var(--sw-muted)] leading-relaxed mb-6">
            When water is delivered directly to the deep roots of a tree, almost none of it
            evaporates from the surface. Trees grow faster, stay healthier, and your water bill goes
            down. That&apos;s a win for your yard and a win for the planet.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[color:var(--sw-primary)] hover:text-[color:var(--sw-primary-dark)] font-semibold"
          >
            Read more about the project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl overflow-hidden shadow-md bg-[color:var(--sw-paper-alt)] p-4 flex flex-col items-center justify-center text-center">
            <div className="text-5xl font-bold text-[color:var(--sw-primary)]">50%</div>
            <div className="mt-2 text-sm text-[color:var(--sw-muted)]">
              less irrigation water used
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md bg-[color:var(--sw-paper-alt)] p-4 flex flex-col items-center justify-center text-center">
            <div className="text-5xl font-bold text-[color:var(--sw-leaf)]">2%</div>
            <div className="mt-2 text-sm text-[color:var(--sw-muted)]">
              of Earth&apos;s water is drinkable
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-md bg-[color:var(--sw-paper-alt)] p-4 flex flex-col items-center justify-center text-center col-span-2">
            <div className="text-3xl font-bold text-[color:var(--sw-primary-dark)]">
              ~$30 / 5 pipes
            </div>
            <div className="mt-2 text-sm text-[color:var(--sw-muted)]">
              built from basic hardware-store parts
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
