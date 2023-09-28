'use client'

import 'keen-slider/keen-slider.min.css'

import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, PauseCircle } from '@mui/icons-material'
import clsx from 'clsx'
import { useKeenSlider } from 'keen-slider/react'

import slide1 from '../assets/curcuma-slide-1.png'
import slide2 from '../assets/curcuma-slide-2.png'
import slide3 from '../assets/curcuma-slide-3.png'
import scrollTo from '../utils/scrollTo'

const AUTO_SLIDE_INTERVAL = 15 * 1000

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = React.useState(false)
  const [slideInterval, setSlideInterval] = React.useState(15)
  const timeoutRef = React.useRef(0)
  const intervalRef = React.useRef(0)

  const handlePause = () => {
    window.clearTimeout(timeoutRef.current)
    window.clearInterval(intervalRef.current)
    setIsPaused(true)
  }

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
  })

  const startPlay = useCallback(() => {
    clearTimeout(timeoutRef.current)
    clearInterval(intervalRef.current)
    setIsPaused(false)
    setSlideInterval(15)
    timeoutRef.current = window.setTimeout(() => {
      instanceRef.current?.next()
    }, AUTO_SLIDE_INTERVAL)
    intervalRef.current = window.setInterval(() => {
      setSlideInterval((prevInterval) => {
        const nextInterval = prevInterval - 1
        if (nextInterval === 0) return 15
        return nextInterval
      })
    }, 1000)
  }, [instanceRef])

  useEffect(() => {
    startPlay()

    instanceRef.current?.on('animationEnded', () => {
      startPlay()
    })

    instanceRef.current?.on('dragStarted', () => {
      clearTimeout(timeoutRef.current)
      clearInterval(intervalRef.current)
      setSlideInterval(15)
    })

    return () => {
      clearTimeout(timeoutRef.current)
      clearInterval(intervalRef.current)
    }
  }, [instanceRef, startPlay])

  return (
    <section id="carousel" className="flex w-full items-center justify-center pt-20 md:px-[35px]">
      <div className="relative mx-auto w-full max-w-[1215px] overflow-hidden bg-white py-[50px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:rounded-[32px] md:pl-[46px] lg:px-[72px]">
        <h2 className="text-center text-[24px] font-bold uppercase leading-[48px] md:text-[48px]">
          Informações
        </h2>
        <div className="mt-[7px] px-4 md:mt-[22px] md:pr-[46px] lg:mt-[28px] lg:px-0">
          <div className="mx-auto flex w-full max-w-[490px] text-center [&>*]:flex-1">
            <span
              className="relative cursor-pointer pb-[10px]"
              onClick={() => {
                instanceRef.current?.moveToIdx(0)
                setSlideInterval(15)
              }}
            >
              Sobre
              {currentSlide === 0 && (
                <div className="absolute bottom-0 h-[4px] w-full translate-y-[4px] rounded-full bg-[#1843D5] opacity-40" />
              )}
            </span>
            <span
              className="relative cursor-pointer pb-[10px]"
              onClick={() => {
                instanceRef.current?.moveToIdx(1)
                setSlideInterval(15)
              }}
            >
              Farmácia
              {currentSlide === 1 && (
                <div className="absolute bottom-0 h-[4px] w-full translate-y-[4px] rounded-full bg-[#1843D5] opacity-40" />
              )}
            </span>
            <span
              className="relative cursor-pointer pb-[10px]"
              onClick={() => {
                instanceRef.current?.moveToIdx(2)
                setSlideInterval(15)
              }}
            >
              Curcucalm
              {currentSlide === 2 && (
                <div className="absolute bottom-0 h-[4px] w-full translate-y-[4px] rounded-full bg-[#1843D5] opacity-40" />
              )}
            </span>
          </div>
          <div className="h-[4px] w-full rounded-full bg-[#C1C8CD]" />
        </div>
        <div className="absolute bottom-[24px] left-[50%] z-20 flex translate-x-[-50%] items-center gap-[30px] md:left-[48px] md:translate-x-0 lg:left-[96px]">
          <button
            onClick={() => {
              instanceRef.current?.prev()
              setSlideInterval(15)
            }}
          >
            <ChevronLeft className="text-[48px] md:text-[68px]" />
          </button>
          <span
            className="inline-flex h-[68px] w-[68px] cursor-pointer items-center justify-center rounded-full text-[24px] font-bold tabular-nums transition-transform duration-150 active:scale-95 md:text-[38px]"
            onClick={() => {
              isPaused ? startPlay() : handlePause()
            }}
          >
            {isPaused ? <PauseCircle className="text-[38px]" /> : `${slideInterval}s`}
          </span>
          <button
            onClick={() => {
              instanceRef.current?.next()
              setSlideInterval(15)
            }}
          >
            <ChevronRight className="text-[48px] md:text-[68px]" />
          </button>
        </div>
        <div ref={sliderRef} className="keen-slider flex h-full justify-between">
          <div className="keen-slider__slide">
            <div className="pb-[58px] pl-4 pt-[66px] md:pb-[210px] lg:pb-[230px] lg:pl-[34px]">
              <h3 className="max-w-[274px] text-[24px] font-bold uppercase leading-[30px] text-brand-palatinate-blue md:max-w-[592px] md:text-[48px] md:leading-[48px]">
                o Poder da <span className="text-brand-cocoa-brown">Cúrcuma</span> para uma Vida
                Saudável!
              </h3>
              <p className="mt-[30px] max-w-[243px] text-[14px] uppercase leading-[26px] md:mt-[22px] md:max-w-[484px] md:text-[16px] md:leading-[26px]">
                A curcumina, um poderoso composto da <strong>cúrcuma</strong>, destaca-se por suas
                propriedades antioxidantes e anti-inflamatórias. Estudos científicos confirmam sua
                eficácia na redução da <strong>dor muscular</strong> e <strong>inflamação</strong>.
              </p>
              <button
                onClick={() => {
                  instanceRef.current?.next()
                  setSlideInterval(15)
                }}
                className="mt-[34px] h-[42px] rounded-lg bg-brand-pine-green px-[52px] text-center font-bold uppercase text-slate-light-3"
              >
                Mostre mais
              </button>
            </div>
            <div
              className={clsx(
                'absolute -z-10',
                'right-[-85px] top-[40px] w-[175px]',
                'sm:right-[-117px] sm:top-[1px] sm:w-[218px]',
                'md:right-[-60px] md:top-[1px] md:w-[218px]',
                'lg:right-0 lg:h-[657px] lg:w-[253px]',
              )}
            >
              <Image src={slide1} alt="" />
            </div>
          </div>

          <div className="keen-slider__slide">
            <div className="pb-[58px] pl-4 pt-[66px] md:pb-[210px] lg:pb-[230px] lg:pl-[34px]">
              <h3 className="max-w-[274px] text-[24px] font-bold uppercase leading-[30px] text-brand-pine-green md:max-w-[592px] md:text-[48px] md:leading-[48px]">
                A nossa fórmula mágica
              </h3>
              <p className="mt-[30px] max-w-[243px] text-[14px] uppercase leading-[26px] md:mt-[22px] md:max-w-[484px] md:text-[16px] md:leading-[26px]">
                A nossa aplicação proporciona uma <strong>absorção eficaz</strong> e veloz por meio
                da glândula presente na língua.
                <br />
                <br /> Nessa área, os vasos sanguíneos têm acesso direto à corrente sanguínea,
                resultando em uma <strong>rápida</strong> assimilação dos componentes e em{' '}
                <strong>efeitos notáveis</strong> em poucos minutos.
              </p>

              <button
                onClick={() => {
                  instanceRef.current?.next()
                  setSlideInterval(15)
                }}
                className="mt-[39px] h-[42px] rounded-lg bg-brand-pine-green px-[52px] text-center font-bold uppercase text-slate-light-3"
              >
                Curcucalm
              </button>
            </div>
            <div
              className={clsx(
                'absolute -z-10',
                'right-[-85px] top-[40px] w-[175px]',
                'sm:right-[-117px] sm:top-[1px] sm:w-[218px]',
                'md:right-[-60px] md:top-[1px] md:w-[218px]',
                'lg:right-0 lg:h-[657px] lg:w-[253px]',
              )}
            >
              <Image src={slide2} alt="" />
            </div>
          </div>

          <div className="keen-slider__slide">
            <div className="pb-[58px] pl-4 pt-[66px] md:pb-[210px] lg:pb-[230px] lg:pl-[34px]">
              <h3 className="max-w-[274px] text-[24px] font-bold uppercase leading-[30px] text-brand-cocoa-brown md:max-w-[592px] md:text-[48px] md:leading-[48px]">
                Conheça o curcucalm!
              </h3>
              <p className="mt-[30px] max-w-[243px] text-[14px] uppercase leading-[26px] md:mt-[22px] md:max-w-[484px] md:text-[16px] md:leading-[26px]">
                Tomar Curcucalm é simples e prático. Siga estas instruções para aproveitar ao máximo
                os benefícios deste incrível suplemento:
                <br />
                <br /> Conte <strong>12 gotas</strong> com o conta-gotas incluso. Aplique as 12
                gotas <strong>sob a língua</strong>. Aguarde <strong>30 segundos</strong> para
                melhor absorção. Tome <strong>uma vez ao dia</strong>, de preferência pela manhã.
              </p>
              <button
                onClick={() => scrollTo('order')}
                className="mt-[20px] h-[42px] rounded-lg bg-brand-crimson px-[52px] text-center font-bold uppercase text-slate-light-3"
              >
                Comprar agora
              </button>
            </div>
            <div
              className={clsx(
                'absolute -z-10',
                'right-[-85px] top-[40px] w-[175px]',
                'sm:right-[-117px] sm:top-[1px] sm:w-[218px]',
                'md:right-[-60px] md:top-[1px] md:w-[218px]',
                'lg:right-0 lg:h-[657px] lg:w-[253px]',
              )}
            >
              <Image src={slide3} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
