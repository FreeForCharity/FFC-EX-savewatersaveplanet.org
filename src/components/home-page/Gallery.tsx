import React from 'react'
import { assetPath } from '@/lib/assetPath'

const galleryImages = [
  {
    src: '/Images/savewatersaveplanet/gallery-1.png',
    alt: 'Deep-watering pipe installed in soil.',
  },
  {
    src: '/Images/savewatersaveplanet/gallery-2.png',
    alt: 'Close-up of the finished pipe assembly.',
  },
  {
    src: '/Images/savewatersaveplanet/gallery-3.png',
    alt: 'Tree being watered through a deep-watering pipe.',
  },
  {
    src: '/Images/savewatersaveplanet/gallery-4.png',
    alt: 'Pipe with drilled holes prepared for installation.',
  },
  {
    src: '/Images/savewatersaveplanet/gallery-5.png',
    alt: 'Wrapped pipe with weed-protection fabric.',
  },
  {
    src: '/Images/savewatersaveplanet/gallery-6.png',
    alt: 'Pipe installed at the base of a young tree.',
  },
  {
    src: '/Images/savewatersaveplanet/gallery-7.png',
    alt: 'Pipe lid with removable top in place.',
  },
  { src: '/Images/savewatersaveplanet/gallery-8.png', alt: 'Pipe ready for the next watering.' },
  {
    src: '/Images/savewatersaveplanet/gallery-9.png',
    alt: 'Finished installation viewed from above.',
  },
]

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-16 md:py-20 bg-white">
      <div className="sw-container">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[color:var(--sw-primary-dark)] mb-3">
            See the Pipes in Action
          </h2>
          <p className="text-base text-[color:var(--sw-muted)]">
            Photos from real installations -- the same design you can build at home.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="aspect-square overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow sw-gallery-cell"
            >
              <img
                src={assetPath(img.src)}
                alt={img.alt}
                loading="lazy"
                width={400}
                height={400}
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
