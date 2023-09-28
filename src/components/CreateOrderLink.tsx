'use client'

import Link from 'next/link'

type CreateOrderLinkProps = {
  selectedCouponLink: string
  coupon: string
  value: number
}

export default function CreateOrderLink(props: CreateOrderLinkProps) {
  return (
    <Link
      href={props.selectedCouponLink}
      onClick={() => dataLayerPush(props.value, props.coupon === 'queromais' ? 'QUEROMAIS' : '')}
      className="inline-flex h-[42px] w-full items-center justify-center rounded-lg bg-brand-crimson font-bold uppercase text-slate-light-3 md:max-w-[310px]"
    >
      Comprar agora
    </Link>
  )
}

function dataLayerPush(value: number, coupon: string) {
  window.dataLayer.push({
    value,
    coupon,
    event: 'begin_checkout',
  })
}
