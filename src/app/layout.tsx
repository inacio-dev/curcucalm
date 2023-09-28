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

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-PKRMK62W');
        `}
        </Script>

        <script
          dangerouslySetInnerHTML={{
            __html: ` (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3661221,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
          }}
        />
      </head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PKRMK62W"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        {children}
      </body>
    </html>
  )
}
