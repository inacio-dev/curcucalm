import Image from 'next/image'
import StarRateIcon from '@mui/icons-material/StarRate'

import testimonial1 from '../assets/testimonial-1.png'
import testimonial2 from '../assets/testimonial-2.png'
import testimonial3 from '../assets/testimonial-3.png'
import testimonial4 from '../assets/testimonial-4.png'

export default function Testimonials() {
  return (
    <section className="mx-auto grid max-w-[1216px] grid-cols-1 gap-8 px-4 pb-[52px] pt-5 md:grid-cols-2 md:px-8 md:pt-[72px] lg:grid-cols-4">
      <div className="rounded-lg bg-[#ECEEF0] px-4 py-3.5">
        <div className="flex items-center gap-3.5">
          <div className="h-[48px] w-[48px] overflow-hidden rounded-full">
            <Image src={testimonial1} alt="" />
          </div>
          <div className="flex flex-col gap-2.5 uppercase">
            <p className="text-[16px] font-bold leading-[10px]">Elza Santos</p>
            <p className="text-[14px] leading-[10px]">Recife, PB</p>
          </div>
        </div>

        <div className="my-2.5 flex items-center">
          <StarRateIcon className="fill-[#FF8500]" />
          <StarRateIcon className="fill-[#FF8500]" />
          <StarRateIcon className="fill-[#FF8500]" />
          <StarRateIcon className="fill-[#FF8500]" />
          <StarRateIcon className="fill-[#FF8500]" />
        </div>
        <p className="text-sm uppercase">
          Fui diagnosticada com Ar, meu médico passou prednisolona, cheio de efeitos colaterais...
          então tomei só 15 dias... isso não é remédio, chama se milagre.. não sinto mais nada
        </p>
      </div>

      <div className="hidden rounded-lg bg-[#ECEEF0] px-4 py-3.5 md:block">
        <div className="flex items-center gap-3.5">
          <div className="h-[48px] w-[48px] overflow-hidden rounded-full">
            <Image src={testimonial2} alt="" />
          </div>
          <div className="flex flex-col gap-2.5 uppercase">
            <p className="text-[16px] font-bold leading-[10px]">Antônio Silva</p>
            <p className="text-[14px] leading-[10px]">Porto Alegre, RS</p>
          </div>
        </div>

        <div className="my-2.5 flex items-center">
          <StarRateIcon className="fill-[#FF8500]" />
          <StarRateIcon className="fill-[#FF8500]" />
          <StarRateIcon className="fill-[#FF8500]" />
          <StarRateIcon className="fill-[#FF8500]" />
          <StarRateIcon className="fill-[#FF8500]" />
        </div>
        <p className="text-sm uppercase">Melhor antiflamatório do mundo</p>
      </div>

      <div className="hidden rounded-lg bg-[#ECEEF0] px-4 py-3.5 lg:block">
        <div className="flex items-center gap-3.5">
          <div className="h-[48px] w-[48px] overflow-hidden rounded-full">
            <Image src={testimonial3} alt="" />
          </div>
          <div className="flex flex-col gap-2.5 uppercase">
            <p className="text-[16px] font-bold leading-[10px]">Joaquim Costa</p>
            <p className="text-[14px] leading-[10px]">Fortaleza, CE</p>
          </div>
        </div>

        <div className="my-2.5 flex items-center">
          <StarRateIcon className="fill-[#FF8500]" />
          <StarRateIcon className="fill-[#FF8500]" />
          <StarRateIcon className="fill-[#FF8500]" />
          <StarRateIcon className="fill-[#FF8500]" />
          <StarRateIcon className="fill-[#FF8500]" />
        </div>
        <p className="text-sm uppercase">
          eu sentia muitas dores nas mãos.. comecei a usar o tratamento natural estou outra pessoa
        </p>
      </div>

      <div className="hidden rounded-lg bg-[#ECEEF0] px-4 py-3.5 lg:block">
        <div className="flex items-center gap-3.5">
          <div className="h-[48px] w-[48px] overflow-hidden rounded-full">
            <Image src={testimonial4} alt="" />
          </div>
          <div className="flex flex-col gap-2.5 uppercase">
            <p className="text-[16px] font-bold leading-[10px]">Maria Rodrigues</p>
            <p className="text-[14px] leading-[10px]">Brasília, DF</p>
          </div>
        </div>

        <div className="my-2.5 flex items-center">
          <StarRateIcon className="fill-[#FF8500]" />
          <StarRateIcon className="fill-[#FF8500]" />
          <StarRateIcon className="fill-[#FF8500]" />
          <StarRateIcon className="fill-[#FF8500]" />
          <StarRateIcon className="fill-[#FF8500]" />
        </div>
        <p className="text-sm uppercase">
          estou tomando a menos de um mês e estou surpresa com o tanto que já está fazendo efeito
        </p>
      </div>
    </section>
  )
}
