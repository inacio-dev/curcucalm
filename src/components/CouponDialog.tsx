'use client'

import React, { ReactNode } from 'react'
import Link from 'next/link'
import ClearIcon from '@mui/icons-material/Clear'
import * as Dialog from '@radix-ui/react-dialog'

type CouponDialogProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  quantity: string
}

export default function CouponDialog(props: CouponDialogProps) {
  return (
    <Dialog.Root open={props.open} onOpenChange={props.onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-50 bg-slate-dark-4/40" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] overflow-hidden overflow-y-auto rounded-[6px] bg-slate-light-3 p-[25px] text-slate-dark-4 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 mb-6 text-3xl font-bold">
            Use o código <strong className="text-brand-crimson">QUEROMAIS</strong> e receba um
            frasco adicional gratuitamente.
          </Dialog.Title>

          <Dialog.Description>
            Oferta especial aplicável a pedidos de 3 ou 5 frascos. Compras individuais de 1 frasco
            não se qualificam para a promoção.
          </Dialog.Description>

          <div className="mt-[25px] flex justify-end">
            <Dialog.Close asChild>
              <Link
                href={`?${new URLSearchParams({
                  quantity: props.quantity,
                  coupon: 'queromais',
                })}`}
                replace
                scroll={false}
                onClick={() => dataLayerPushSelectContent('S_APLICAR_CUPOM')}
                className="inline-flex h-[35px] items-center justify-center rounded-[4px] bg-brand-pine-green px-[15px] font-medium leading-none text-slate-light-3 transition-colors duration-300 hover:bg-brand-pine-green/60 focus:shadow-[0_0_0_2px] focus:outline-none"
              >
                Aplicar cupom
              </Link>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <ClearIcon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export function dataLayerPushSelectContent(content_id: string) {
  window.dataLayer.push({
    content_type: 'section',
    content_id,
    event: 'select_content',
  })
}
