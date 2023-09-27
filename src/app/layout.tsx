import './globals.css'

import type { Metadata } from 'next'
import { Lora } from 'next/font/google'

const lora = Lora({ subsets: ['latin'], display: 'swap', variable: '--font-lora' })

export const metadata: Metadata = {
  title: 'Curcucalm',
  description: 'Este site é destinado à venda e apresentação do produto Curcucalm.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={lora.variable}>
      <body>{children}</body>
    </html>
  )
}
