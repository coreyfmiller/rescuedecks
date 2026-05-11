import type { Metadata } from 'next'
import { Lora, Open_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const lora = Lora({ 
  subsets: ["latin"],
  variable: '--font-serif'
});
const openSans = Open_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Rescue Decks | Custom Decks & Outdoor Living in New Brunswick',
  description: 'Premium deck building services in Kings County & Saint John County. Pressure treated, cedar, composite and pool decks. Plus pergolas, gazebos, sheds and more.',
  keywords: 'deck builder, custom decks, New Brunswick, Kings County, Saint John County, pressure treated decks, cedar decks, composite decks, pool decks, pergolas, gazebos',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${lora.variable} ${openSans.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
