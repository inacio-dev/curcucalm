import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import ShareIcon from '@mui/icons-material/Share'
import StarRateIcon from '@mui/icons-material/StarRate'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import clsx from 'clsx'

import oneFrascosLg from '../assets/1-frasco-lg.png'
import threeFrascosLg from '../assets/3-frascos-lg.png'
import fiveFrascosLg from '../assets/5-frascos-lg.png'
import eco from '../assets/eco-friendly.png'
import gluten from '../assets/gluten-free.png'
import natural from '../assets/natural.png'
import selo from '../assets/selo.png'
import vegano from '../assets/vegano.png'

type OrderProps = {
  searchParams: { [key: string]: string | string[] | undefined }
}

const quantityVariants = ['5', '3', '1']

const quantityToImageMap: { [key: string]: StaticImageData } = {
  '1': oneFrascosLg,
  '3': threeFrascosLg,
  '5': fiveFrascosLg,
}

type detailsProps = {
  'full-price': number
  price: number
  discount: number
  'cred-price': number
  parcel: number
  link: string
}

const quantityToDetailsMap: { [key: string]: detailsProps } = {
  '5': {
    'full-price': 1176,
    price: 397,
    discount: 66,
    'cred-price': 417,
    parcel: 41.87,
    link: 'https://go.perfectpay.com.br/PPU38CMSUI7',
  },
  '3': {
    'full-price': 594,
    price: 297,
    discount: 50,
    'cred-price': 317,
    parcel: 31.83,
    link: 'https://go.perfectpay.com.br/PPU38CMSUI4',
  },
  '1': {
    'full-price': 327,
    price: 197,
    discount: 40,
    'cred-price': 217,
    parcel: 21.79,
    link: 'https://go.perfectpay.com.br/PPU38CMSUI1',
  },
}

export default function Order(props: OrderProps) {
  const selectedQuantity = (props.searchParams.quantity || '5') as string
  const selectedImage = quantityToImageMap[selectedQuantity] || fiveFrascosLg

  return (
    <section
      id="order"
      className="mx-auto mt-20 grid w-full max-w-[1280px] grid-cols-12 items-start justify-center px-3.5 text-slate-dark-4 md:px-8"
    >
      <div className="col-span-7 w-full">
        <h2 className="text-center text-[32px] font-bold uppercase leading-[48px] md:text-left md:text-[48px]">
          Monte seu pedido!
        </h2>

        <div className="mt-1 hidden items-center justify-start gap-2 md:flex">
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

          <button>
            <ShareIcon className="fill-slate-dark-4" />
          </button>
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

      <div className="col-span-5 hidden max-h-[554px] w-full items-center justify-center md:flex">
        <div className="relative h-full w-full rounded-lg bg-slate-light-4 px-20 pb-4 pt-20 shadow-md">
          <Image src={selo} alt="" className="absolute right-14 top-14" />
          <Image
            src={selectedImage}
            alt=""
            className="md:h-[152px] md:w-[152px] lg:h-auto lg:w-auto"
          />

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

      <div className="col-span-12 w-full max-w-[592px]">
        <div>
          <ul className="mt-[30px] flex flex-wrap gap-4 md:max-w-[592px] [&>*]:flex-[1_1_154px]">
            {quantityVariants.map((quantity, index) => (
              <li key={index} className="inline-flex">
                <Link
                  href={`?${new URLSearchParams({
                    quantity,
                  })}`}
                  replace
                  scroll={false}
                  className={clsx(
                    'flex h-[52px] w-full items-center justify-center rounded-lg border-2 px-[46px] text-center font-normal transition-colors duration-300 hover:border-slate-dark-6 hover:font-bold',
                    selectedQuantity === quantity ? 'border-slate-dark-4' : 'border-slate-light-4',
                  )}
                >
                  <span className={clsx(selectedQuantity === quantity && 'font-bold')}>
                    {quantity} {quantity === '1' ? 'frasco' : 'frascos'}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-[18px]">
          <div className="flex justify-between rounded-lg border-2 border-[#ECEEF0] md:max-w-[312px]">
            <input
              className="h-[43px] px-4 font-medium text-slate-dark-10 placeholder:uppercase"
              placeholder="Adicionar cupom"
            />

            <button className="inline-flex items-center justify-center rounded-lg bg-brand-palatinate-blue px-3">
              <PlayArrowIcon />
            </button>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-center md:gap-[50px]">
          <Link
            href={
              quantityToDetailsMap[selectedQuantity]['link'] || quantityToDetailsMap['5']['link']
            }
            className="inline-flex h-[42px] w-full items-center justify-center rounded-lg bg-brand-crimson font-bold uppercase text-slate-light-3 md:max-w-[310px]"
          >
            Comprar agora
          </Link>

          <button className="flex items-center justify-center gap-3.5">
            <WhatsAppIcon />
            <span className="font-bold uppercase">Fale conosco</span>
          </button>
        </div>
      </div>

      {/* 

      <div className="md:hidden">
        <div className="relative mx-auto mt-3 flex h-[325px] w-[336px] flex-col items-center justify-center gap-4 rounded-[16px] bg-[#ECEEF0] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <Image src={selo} alt="" className="absolute right-4 top-2" />
          <Image src={frascos} alt="" />
          <div className="grid grid-cols-2 gap-4 text-[14px]">
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

        <div className="mx-auto mt-4 flex w-[350px] items-center gap-2">
          <div className="flex">
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
            <StarRateIcon />
          </div>
          <p className="font-bold">
            4.8 <span className="text-[#687076]">(Total de 187 reviews)</span>
          </p>
          <div>
            <ShareIcon />
          </div>
        </div>
      </div>

      <div className="mt-[35px] md:flex md:justify-between">
        

        
      </div>

      <div>
        

        <div className="mt-[52px] text-[14px] uppercase leading-[26px] md:hidden">
          <p>
            Aliviar Dores Musculares e Articulares, Combater a Inflamação, Recuperar a Vitalidade e
            Promover o Bem-Estar Geral.
          </p>
          <p className="text-palatinate-blue my-5 underline">
            <strong>modo de uso</strong>
          </p>
          <p>
            <strong>Garantia</strong> de resultados ou o seu dinheiro de volta!
          </p>
        </div>
      </div> */}
    </section>
  )
}
