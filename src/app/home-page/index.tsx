import React from 'react'
import Hero from '@/components/home-page/Hero'
import About from '@/components/home-page/About'
import HowToPreview from '@/components/home-page/HowToPreview'
import Gallery from '@/components/home-page/Gallery'
import Contact from '@/components/home-page/Contact'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <About />
      <HowToPreview />
      <Gallery />
      <Contact />
    </div>
  )
}

export default HomePage
