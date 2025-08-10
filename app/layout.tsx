import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import StickyCTA from '@/components/StickyCTA'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AJ - Advisory & Strategy',
  description: 'Advisory, Investment, Marketing, AI Strategy, and Web3 Growth services',
  keywords: 'Advisory, Investment, Marketing, AI Strategy, Web3 Growth, Business Development',
  authors: [{ name: 'Aishwarya Jain', email: 'hello@aishwaryajain.com' }],
  creator: 'Aishwarya Jain',
  publisher: 'Aishwarya Jain',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'AJ - Advisory & Strategy',
    description: 'Advisory, Investment, Marketing, AI Strategy, and Web3 Growth services',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AJ - Advisory & Strategy',
    description: 'Advisory, Investment, Marketing, AI Strategy, and Web3 Growth services',
    creator: '@aishwaryajain',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'your-google-site-verification',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <Navigation />
          <main className="relative">
            {children}
          </main>
          <StickyCTA />
        </div>
      </body>
    </html>
  )
}
