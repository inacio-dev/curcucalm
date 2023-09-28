'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import CheckIcon from '@mui/icons-material/Check'
import ClearIcon from '@mui/icons-material/Clear'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import clsx from 'clsx'
import toast from 'react-hot-toast'
import { useInView } from 'react-intersection-observer'

import CouponDialog from './CouponDialog'

type CouponProps = {
  quantity: string
  coupon: string
}

export default function Coupon(props: CouponProps) {
  const [ref, inView] = useInView()
  const [coupon, setCoupon] = useState(props.coupon)
  const [openDialog, setOpenDialog] = useState(false)
  const [openQuantityDialog, setOpenQuantityDialog] = useState(false)

  function notify(value: 'success' | 'error') {
    value === 'success'
      ? toast.success('Cupom adicionado.')
      : props.coupon !== '' && toast.error('Cumpom não adicionado.')
  }

  useEffect(() => {
    setCoupon(props.coupon)

    props.coupon !== 'queromais' ? notify('error') : notify('success')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.coupon])

  useEffect(() => {
    if (inView && props.coupon !== 'queromais' && !openQuantityDialog) {
      setOpenDialog(true)
      setOpenQuantityDialog(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <>
      <CouponDialog quantity={props.quantity} open={openDialog} onOpenChange={setOpenDialog} />

      <div ref={ref} className="mt-[18px]">
        <div className="flex justify-between overflow-hidden rounded-lg border-2 border-slate-light-4 md:max-w-[312px]">
          <input
            className="h-[43px] w-full px-4 font-medium uppercase text-slate-dark-10 placeholder:uppercase"
            value={coupon}
            disabled={props.coupon !== ''}
            onChange={(e) => setCoupon(e.currentTarget.value as string)}
            placeholder="Adicionar cupom"
          />

          <Link
            href={
              props.coupon !== ''
                ? `?${new URLSearchParams({
                    quantity: props.quantity,
                    coupon: '',
                  })}`
                : `?${new URLSearchParams({
                    quantity: props.quantity,
                    coupon,
                  })}`
            }
            replace
            scroll={false}
            className={clsx(
              'inline-flex items-center justify-center rounded-lg px-3 transition-colors duration-1000',
              props.coupon !== ''
                ? props.coupon === 'queromais' && props.quantity !== '1'
                  ? 'bg-brand-pine-green hover:bg-brand-crimson'
                  : 'bg-brand-crimson hover:bg-brand-crimson/60'
                : 'bg-brand-palatinate-blue hover:bg-brand-palatinate-blue/60 hover:duration-300',
            )}
          >
            {props.coupon !== '' ? (
              <>
                {props.coupon === 'queromais' && props.quantity !== '1' ? (
                  <CheckIcon className="fill-slate-light-3" />
                ) : (
                  <ClearIcon className="fill-slate-light-3" />
                )}
              </>
            ) : (
              <PlayArrowIcon className="fill-slate-light-3" />
            )}
          </Link>
        </div>
      </div>
    </>
  )
}
