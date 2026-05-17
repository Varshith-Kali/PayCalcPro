import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://paycalcpro.online'),
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
    url: 'https://paycalcpro.online',
    title: 'PayCalc Pro – Free Salary Calculator India | FY 2025-26',
    description: 'Calculate CTC to in-hand salary, PF, HRA & income tax instantly. Updated for FY 2025-26.',
    siteName: 'PayCalc Pro',
    images: [{ url: 'https://paycalcpro.online/icon.png', width: 512, height: 512, alt: 'PayCalc Pro Logo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PayCalc Pro – Free Salary Calculator India',
    description: 'Calculate your in-hand salary, PF, HRA & taxes instantly. Free, no signup.',
    images: ['https://paycalcpro.online/icon.png'],
  },
  verification: {
    google: 'Q8bK0Bp3t1Ie6bVQmL6s7ldvjmGmCAG8JRXXZdN2dzg',
  },
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'PayCalc Pro',
  url: 'https://paycalcpro.online',
  description: 'Free salary calculators for Indian professionals — FY 2025-26',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://paycalcpro.online/blog?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'PayCalc Pro',
  url: 'https://paycalcpro.online',
  logo: 'https://paycalcpro.online/icon.png',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact.paycalcpro@gmail.com',
    contactType: 'customer support',
  },
  sameAs: [],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://paycalcpro.online" />
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="rating" content="general" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN" />
        <meta name="geo.placename" content="India" />

        {/* JSON-LD Schemas */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        {/* Google Analytics GA4 */}
        <Script
          id="ga4-init"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-37KW56DFVE"
          strategy="afterInteractive"
        />
        <Script id="ga4-config" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-37KW56DFVE');`}
        </Script>

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
