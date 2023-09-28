import Image from 'next/image'

import slide1 from '../assets/curcuma-slide-1.png'

export default function Carousel() {
  return (
    <section id="carousel" className="flex items-center justify-center pt-20 md:px-[35px]">
      <div className="relative mx-auto h-[778px] max-w-[1215px] overflow-hidden bg-white px-4 py-[50px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:rounded-[32px] md:px-[46px] lg:px-[72px]">
        <h2 className="text-center text-[24px] font-bold uppercase leading-[48px]">Informações</h2>
        <div className="mt-[7px]">
          <div className="mx-auto flex w-full max-w-[490px] pb-[10px] text-center [&>*]:flex-1">
            <span>Sobre</span>
            <span>Farmácia</span>
            <span>Curcucalm</span>
          </div>
          <div className="h-[4px] w-full rounded-full bg-[#C1C8CD]" />
        </div>
        <div className="flex justify-between">
          <div className="pt-[66px]">
            <h3 className="text-palatinate-blue max-w-[274px] text-[24px] font-bold uppercase leading-[30px] md:max-w-[592px] md:text-[48px] md:leading-[48px]">
              o Poder da <span className="text-cocoa-brown">Cúrcuma</span> para uma Vida Saudável!
            </h3>
            <p className="max-w-[243px] text-[14px] uppercase leading-[26px] md:mt-[22px] md:max-w-[484px] md:text-[16px] md:leading-[26px]">
              A curcumina, um poderoso composto da <strong>cúrcuma</strong>, destaca-se por suas
              propriedades antioxidantes e anti-inflamatórias. Estudos científicos confirmam sua
              eficácia na redução da <strong>dor muscular</strong> e <strong>inflamação</strong>.
            </p>
            <button className="bg-pine-green text-slate-light mt-[20px] h-[42px] rounded-lg px-[52px] text-center font-bold uppercase">
              Mostre mais
            </button>
          </div>
          <div className="absolute right-[-72px] w-[166px] md:right-[-110px] md:w-[220px] lg:right-[140px] lg:w-auto">
            <Image src={slide1} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
