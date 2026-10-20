import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from './../components/header'
import Footer from './../components/footer'
import GoogleTagManager, { GoogleTagManagerNoScript } from './../components/google-tag-manager'
import { lato, faustina } from '@/lib/fonts'

// Get basePath for GitHub Pages deployment
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const metadata: Metadata = {
  metadataBase: new URL('https://savewatersaveplanet.org'),
  title: {
    default: 'Saving Water Saves the Planet',
    template: '%s | Saving Water Saves the Planet',
  },
  description:
    'A Girl Scout Gold Award project: DIY deep-watering pipes that help homeowners save up to 50% of irrigation water while keeping trees healthier.',
  keywords: [
    'water conservation',
    'Girl Scout Gold Award',
    'deep watering pipe',
    'DIY irrigation',
    'tree watering',
    'environmental nonprofit',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://savewatersaveplanet.org/',
    siteName: 'Saving Water Saves the Planet',
    title: 'Saving Water Saves the Planet',
    description:
      'DIY deep-watering pipes that help homeowners save up to 50% of irrigation water -- a Girl Scout Gold Award project.',
    images: [
      {
        url: '/Images/savewatersaveplanet/logo.png',
        width: 800,
        height: 600,
        alt: 'Saving Water Saves the Planet logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saving Water Saves the Planet',
    description: 'DIY deep-watering pipes that help homeowners save up to 50% of irrigation water.',
    images: ['/Images/savewatersaveplanet/logo.png'],
  },
  icons: {
    icon: [{ url: `${basePath}/icon.svg`, type: 'image/svg+xml' }],
    apple: [{ url: `${basePath}/apple-icon.svg`, type: 'image/svg+xml' }],
  },
  manifest: `${basePath}/site.webmanifest`,
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0e7490',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <GoogleTagManager />
      </head>
      <body
        className={['antialiased', lato.variable, faustina.variable].join(' ')}
        suppressHydrationWarning={true}
      >
        <GoogleTagManagerNoScript />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black focus:shadow-lg"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
