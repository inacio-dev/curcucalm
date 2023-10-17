import './globals.css'

import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import Script from 'next/script'

const lora = Lora({ subsets: ['latin'], display: 'swap', variable: '--font-lora' })

export const metadata: Metadata = {
  title: 'Curcucalm',
  description: 'Este site é destinado à venda e apresentação do produto Curcucalm.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={lora.variable}>
      <head>
        <script>window.dataLayer = window.dataLayer || [];</script>
      </head>
      <body>{children}</body>
    </html>
  )
}
