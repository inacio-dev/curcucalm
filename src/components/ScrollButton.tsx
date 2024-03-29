'use client'

import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

import scrollTo from '../utils/scrollTo'
import { dataLayerPushSelectContent } from './CouponDialog'

type ScrollButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  scrollId: string
}

export default function ScrollButton(props: ScrollButtonProps) {
  return (
    <button
      onClick={() => {
        scrollTo(props.scrollId)
        dataLayerPushSelectContent(`S_${props.scrollId.toUpperCase()}` as string)
      }}
      className={twMerge(props.className)}
    >
      {props.children}
    </button>
  )
}
