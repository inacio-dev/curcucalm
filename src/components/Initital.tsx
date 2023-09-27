import Image from 'next/image'

import frascos from '../assets/3-frascos.png'
import eco from '../assets/eco-friendly.png'
import gluten from '../assets/gluten-free.png'
import manCover from '../assets/man-cover.png'
import natural from '../assets/natural.png'
import vegano from '../assets/vegano.png'

export default function Initital() {
  return (
    <section className="mt-[56px] w-full overflow-x-hidden border-t-[10px] border-t-brand-cocoa-brown md:mt-[96px]">
      <div className="relative mx-auto flex max-w-[1280px] justify-between px-3.5 pb-[222px] md:px-8 lg:mt-9 lg:pb-0">
        <Image
          src={manCover}
          alt=""
          className="absolute bottom-0 left-[-36px] w-[228px] md:left-[-26px] md:w-[335px] lg:relative lg:w-auto"
        />

        <div className="mt-[28px] text-right uppercase md:mt-[57px] lg:mt-[97px]">
          <h1 className="text-[24px] font-bold leading-[28px] md:text-[48px] md:leading-[48px] lg:max-w-[592px]">
            Alívio completo das dores corporais e inchaços
          </h1>
          <ul className="mt-[25px] grid grid-cols-[repeat(2,max-content)] place-items-end justify-end gap-3 text-[10px] font-medium md:ml-auto md:max-w-[464px] md:grid-cols-[repeat(4,max-content)] md:gap-[17px]">
            <li className="inline-flex items-center gap-1.5">
              <Image src={gluten} alt="" />
              <span>Gluten Free</span>
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Image src={vegano} alt="" />
              <span>Vegano</span>
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Image src={natural} alt="" />
              <span>100% Natural</span>
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Image src={eco} alt="" />
              <span>Eco Friendly</span>
            </li>
          </ul>

          <p className="mt-6 text-[14px] leading-[26px] md:ml-auto md:max-w-[459px] md:text-[16px]">
            Apenas 12 gotas diárias podem fazer toda a diferença no alívio das dores e no seu
            bem-estar. Experimente o <strong>Curcucalm</strong> e aproveite os benefícios.
          </p>

          <button className="mt-6 h-[42px] rounded-lg bg-brand-pine-green px-[44px] text-sm font-bold uppercase text-slate-light-3 md:mt-[30px] md:px-[65px] md:text-base lg:px-[65px]">
            Saiba mais
          </button>
        </div>
      </div>

      <div className="relative grid h-[83px] grid-cols-[246px_1fr] md:grid-cols-[493px_1fr]">
        <div className="bg-brand-cocoa-brown" />
        <div className="bg-brand-pine-green" />
        <Image src={frascos} alt="" className="absolute bottom-[52px] right-0 lg:right-10" />
      </div>
    </section>
  )
}
