'use client'

import Link from 'next/link'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

export default function WhatsAppLink() {
  return (
    <Link
      href="https://wa.me/5511930455232"
      onClick={() => dataLayerPush}
      className="flex items-center justify-center gap-3.5"
    >
      <WhatsAppIcon />
      <span className="font-bold uppercase">Fale conosco</span>
    </Link>
  )
}

function dataLayerPush() {
  window.dataLayer.push({
    event: 'generate_lead',
  })
}
