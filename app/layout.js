// app/layout.js
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'FreelanceFlow - All-in-One Freelance Management Platform',
    template: '%s | FreelanceFlow'
  },
  description: 'Manage clients, projects, invoices, and payments all in one place. The ultimate platform for freelancers to grow their business.',
  keywords: 'freelance, freelancer, invoicing, project management, client management, payments, freelance platform',
  authors: [{ name: 'FreelanceFlow Team' }],
  creator: 'FreelanceFlow',
  publisher: 'FreelanceFlow',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://freelanceflow-marketing.vercel.app',
    siteName: 'FreelanceFlow',
    title: 'FreelanceFlow - All-in-One Freelance Management Platform',
    description: 'Manage clients, projects, invoices, and payments all in one place.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FreelanceFlow Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FreelanceFlow - All-in-One Freelance Management Platform',
    description: 'Manage clients, projects, invoices, and payments all in one place.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://freelanceflow-marketing.vercel.app',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}