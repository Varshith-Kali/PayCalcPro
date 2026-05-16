import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://paycalcpro.com'),
  title: {
    default: 'PayCalc Pro – Free Salary Calculator India | CTC to In-Hand 2025-26',
    template: '%s | PayCalc Pro',
  },
  description: 'Free Indian salary calculators for FY 2025-26. Calculate CTC to in-hand salary, PF, HRA exemption, gratuity & income tax instantly. New tax regime & old regime comparison.',
  keywords: [
    'salary calculator india 2025', 'ctc to inhand salary calculator',
    'in-hand salary calculator', 'pf calculator 2025', 'hra exemption calculator',
    'gratuity calculator india', 'income tax estimator fy 2025-26',
    'new tax regime 2025', 'take home salary calculator india',
    'salary calculator fy 2025-26',
  ],
  authors: [{ name: 'PayCalc Pro' }],
  creator: 'PayCalc Pro',
  publisher: 'PayCalc Pro',
  category: 'Finance',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://paycalcpro.com',
    title: 'PayCalc Pro – Free Salary Calculator India | FY 2025-26',
    description: 'Calculate CTC to in-hand salary, PF, HRA & income tax instantly. Updated for FY 2025-26.',
    siteName: 'PayCalc Pro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PayCalc Pro – Free Salary Calculator India',
    description: 'Calculate your in-hand salary, PF, HRA & taxes instantly. Free, no signup.',
  },
  verification: { google: 'your-google-verification-code' },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'PayCalc Pro',
  url: 'https://paycalcpro.com',
  description: 'Free salary calculators for Indian professionals — FY 2025-26',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://paycalcpro.com/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PayCalc Pro',
  url: 'https://paycalcpro.com',
  logo: 'https://paycalcpro.com/icon.png',
  sameAs: [],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://paycalcpro.com" />
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="format-detection" content="telephone=no" />

        {/* JSON-LD Schemas */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        {/* Google AdSense — Auto Ads */}
        <Script
          id="adsense-init"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7840512374734019"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
