import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import StarRateIcon from '@mui/icons-material/StarRate'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import clsx from 'clsx'

import oneFrascosLg from '../assets/1-frasco-lg.png'
import threeFrascosLg from '../assets/3-frascos-lg.png'
import threePlusFrascosLg from '../assets/3+1-frascos-lg.png'
import fiveFrascosLg from '../assets/5-frascos-lg.png'
import fivePlusFrascosLg from '../assets/5+1-frascos-lg.png'
import eco from '../assets/eco-friendly.png'
import gluten from '../assets/gluten-free.png'
import natural from '../assets/natural.png'
import selo from '../assets/selo.png'
import vegano from '../assets/vegano.png'
import Coupon from './Coupon'

type OrderProps = {
  searchParams: { [key: string]: string | string[] | undefined }
}

const quantityVariants = ['5', '3', '1']

const quantityToImageMap: { [key: string]: StaticImageData } = {
  '1': oneFrascosLg,
  '3': threeFrascosLg,
  '5': fiveFrascosLg,
}

const quantityToImagePlusMap: { [key: string]: StaticImageData } = {
  '1': oneFrascosLg,
  '3': threePlusFrascosLg,
  '5': fivePlusFrascosLg,
}

type detailsProps = {
  'full-price': number
  price: number
  discount: number
  'cred-price': number
  parcel: number
  link: string
  'plus-link': string
}

const quantityToDetailsMap: { [key: string]: detailsProps } = {
  '5': {
    'full-price': 1176,
    price: 397,
    discount: 66,
    'cred-price': 417,
    parcel: 41.87,
    link: 'https://go.perfectpay.com.br/PPU38CMSUI7',
    'plus-link': 'https://go.perfectpay.com.br/PPU38CMSUI9',
  },
  '3': {
    'full-price': 594,
    price: 297,
    discount: 50,
    'cred-price': 317,
    parcel: 31.83,
    link: 'https://go.perfectpay.com.br/PPU38CMSUI4',
    'plus-link': 'https://go.perfectpay.com.br/PPU38CMSUI6',
  },
  '1': {
    'full-price': 327,
    price: 197,
    discount: 40,
    'cred-price': 217,
    parcel: 21.79,
    link: 'https://go.perfectpay.com.br/PPU38CMSUI1',
    'plus-link': '',
  },
}

export default function Order(props: OrderProps) {
  const selectedQuantity = (props.searchParams.quantity || '5') as string
  const selectedCoupon = (props.searchParams.coupon || '') as string
  const selectedImage =
    selectedCoupon === 'queromais'
      ? quantityToImagePlusMap[selectedQuantity] || fivePlusFrascosLg
      : quantityToImageMap[selectedQuantity] || fiveFrascosLg

  const selectedCouponLink =
    selectedCoupon === 'queromais'
      ? selectedQuantity !== '1'
        ? quantityToDetailsMap[selectedQuantity]['plus-link'] ||
          quantityToDetailsMap['5']['plus-link']
        : quantityToDetailsMap[selectedQuantity]['link'] || quantityToDetailsMap['5']['link']
      : quantityToDetailsMap[selectedQuantity]['link'] || quantityToDetailsMap['5']['link']

  return (
    <section
      id="order"
      className="mx-auto mt-20 grid w-full max-w-[1280px] grid-cols-1 items-start justify-center px-3.5 text-slate-dark-4 md:grid-cols-12 md:px-8"
    >
      <div className="col-span-1 w-full justify-center md:col-span-7">
        <h2 className="text-center text-[32px] font-bold uppercase leading-[48px] md:text-left md:text-[48px]">
          Monte seu pedido!
        </h2>

        <div className="col-span-1 my-10 flex h-[400px] max-h-[554px] w-full items-center justify-center sm:h-[450px] md:hidden">
          <div className="relative flex h-full w-full flex-col items-center justify-center rounded-lg bg-slate-light-4 shadow-md">
            <Image src={selo} alt="" className="absolute right-4 top-4" />
            <Image src={selectedImage} alt="" className="h-auto w-auto" />

            <div className="grid grid-cols-2 gap-4 pt-2 text-[14px]">
              <div className="inline-flex items-center gap-1.5">
                <Image src={gluten} alt="" />
                <span>Gluten Free</span>
              </div>
              <div className="inline-flex items-center gap-1.5">
                <Image src={vegano} alt="" />
                <span>Vegano</span>
              </div>
              <div className="inline-flex items-center gap-1.5">
                <Image src={natural} alt="" />
                <span>100% Natural</span>
              </div>
              <div className="inline-flex items-center gap-1.5">
                <Image src={eco} alt="" />
                <span>Eco Friendly</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-1 flex items-center justify-center gap-2 md:justify-start">
          <div className="flex">
            <StarRateIcon className="fill-[#FF8500]" />
            <StarRateIcon className="fill-[#FF8500]" />
            <StarRateIcon className="fill-[#FF8500]" />
            <StarRateIcon className="fill-[#FF8500]" />
            <StarRateIcon className="fill-[#FF8500]" />
          </div>
          <p className="font-bold">
            4.8 <span className="text-[#687076]">(Total de 187 reviews)</span>
          </p>

          {/* <button>
            <ShareIcon className="fill-slate-dark-4" />
          </button> */}
        </div>

        <div className="flex w-full flex-col space-y-2 pt-6">
          <p className="font-semibold text-slate-dark-10 line-through">
            {(
              quantityToDetailsMap[selectedQuantity]['full-price'] ||
              quantityToDetailsMap['5']['full-price']
            ).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </p>
          <div className="flex items-end space-x-2">
            <p className="text-[48px] font-bold leading-[48px] text-brand-cocoa-brown">
              {(
                quantityToDetailsMap[selectedQuantity]['price'] ||
                quantityToDetailsMap['5']['price']
              ).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </p>
            <p className="text-[14px] font-semibold leading-[16px] text-brand-pine-green">
              (
              {quantityToDetailsMap[selectedQuantity]['discount'] ||
                quantityToDetailsMap['5']['discount']}
              % de desconto)
            </p>
          </div>
          <p className="text-[14px]">
            À vista no PIX com até <strong>5% OFF</strong>
          </p>

          <p className="pt-2 text-[14px] font-bold">
            {(
              quantityToDetailsMap[selectedQuantity]['cred-price'] ||
              quantityToDetailsMap['5']['cred-price']
            ).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </p>
          <p className="text-[14px]">
            Em até 12x de{' '}
            <strong>
              {(
                quantityToDetailsMap[selectedQuantity]['parcel'] ||
                quantityToDetailsMap['5']['parcel']
              ).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </strong>{' '}
            sem juros no cartão
          </p>

          <div className="mt-[40px] hidden max-w-[336px] text-[16px] uppercase leading-[26px] md:block lg:max-w-[484px]">
            <p>
              Aliviar Dores Musculares e Articulares, Combater a Inflamação, Recuperar a Vitalidade
              e Promover o Bem-Estar Geral.
            </p>
            <p className="my-5 text-brand-palatinate-blue underline">
              <strong>modo de uso</strong>
            </p>
            <p>
              <strong>Garantia</strong> de resultados ou o seu dinheiro de volta!
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-1 hidden h-[450px] max-h-[450px] w-full items-center justify-center md:col-span-5 md:flex">
        <div className="relative flex h-full w-full flex-col items-center justify-center rounded-lg bg-slate-light-4 shadow-md">
          <Image src={selo} alt="" className="absolute right-5 top-5" />
          <Image src={selectedImage} alt="" className="h-auto w-auto" />

          <div className="grid grid-cols-2 gap-4 pt-2 text-[14px]">
            <div className="inline-flex items-center gap-1.5">
              <Image src={gluten} alt="" />
              <span>Gluten Free</span>
            </div>
            <div className="inline-flex items-center gap-1.5">
              <Image src={vegano} alt="" />
              <span>Vegano</span>
            </div>
            <div className="inline-flex items-center gap-1.5">
              <Image src={natural} alt="" />
              <span>100% Natural</span>
            </div>
            <div className="inline-flex items-center gap-1.5">
              <Image src={eco} alt="" />
              <span>Eco Friendly</span>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-1 w-full max-w-[592px] md:col-span-12">
        <div>
          <ul className="mt-[30px] flex flex-wrap gap-4 md:max-w-[592px] [&>*]:flex-[1_1_154px]">
            {quantityVariants.map((quantity, index) => (
              <li key={index} className="inline-flex">
                <Link
                  href={`?${new URLSearchParams({
                    quantity,
                    coupon: selectedCoupon,
                  })}`}
                  replace
                  scroll={false}
                  className={clsx(
                    'flex h-[52px] w-full items-center justify-center rounded-lg border-2 px-[46px] text-center font-normal transition-colors duration-300 hover:border-slate-dark-6 hover:font-bold',
                    selectedQuantity === quantity ? 'border-slate-dark-4' : 'border-slate-light-4',
                  )}
                >
                  <span className={clsx('w-full', selectedQuantity === quantity && 'font-bold')}>
                    {quantity}{' '}
                    {quantity === '1'
                      ? 'frasco'
                      : selectedCoupon === 'queromais'
                      ? 'frascos + 1'
                      : 'frascos'}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-end space-x-4">
          <Coupon quantity={selectedQuantity} coupon={selectedCoupon} />

          {selectedCoupon === 'queromais' ? (
            <>
              {selectedQuantity === '1' ? (
                <span className="max-w-[250px] text-sm font-semibold text-brand-crimson">
                  Compras individuais de 1 frasco não se qualificam para a promoção.
                </span>
              ) : (
                <span className="max-w-[250px] text-sm font-semibold text-brand-pine-green">
                  Ganhe um frasco adicional gratuitamente com este cupom!
                </span>
              )}
            </>
          ) : (
            <>
              {selectedCoupon !== '' && (
                <span className="max-w-[250px] text-sm font-semibold text-brand-crimson">
                  Cupom inválido!
                </span>
              )}
            </>
          )}
        </div>

        <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-center md:gap-[50px]">
          <Link
            href={selectedCouponLink}
            className="inline-flex h-[42px] w-full items-center justify-center rounded-lg bg-brand-crimson font-bold uppercase text-slate-light-3 md:max-w-[310px]"
          >
            Comprar agora
          </Link>

          <Link
            href="https://wa.me/5511930455232"
            className="flex items-center justify-center gap-3.5"
          >
            <WhatsAppIcon />
            <span className="font-bold uppercase">Fale conosco</span>
          </Link>
        </div>

        <div className="mt-[40px] block max-w-[336px] text-[16px] uppercase leading-[26px] md:hidden lg:max-w-[484px]">
          <p>
            Aliviar Dores Musculares e Articulares, Combater a Inflamação, Recuperar a Vitalidade e
            Promover o Bem-Estar Geral.
          </p>
          <p className="my-5 text-brand-palatinate-blue underline">
            <strong>modo de uso</strong>
          </p>
          <p>
            <strong>Garantia</strong> de resultados ou o seu dinheiro de volta!
          </p>
        </div>
      </div>
    </section>
  )
}
