import Image from 'next/image'
import ShareIcon from '@mui/icons-material/Share'
import StarRateIcon from '@mui/icons-material/StarRate'

import frascosLg from '../assets/5-frascos-lg.png'
import frascos from '../assets/5-frascos.png'
import eco from '../assets/eco-friendly.png'
import gluten from '../assets/gluten-free.png'
import natural from '../assets/natural.png'
import selo from '../assets/selo.png'
import vegano from '../assets/vegano.png'

export default function Order() {
  return (
    <section className="mx-auto mt-20 max-w-[1216px] px-4 md:px-8">
      <h2 className="text-center text-[32px] font-bold uppercase leading-[48px] md:text-left md:text-[48px]">
        Monte seu pedido!
      </h2>

      <div className="mt-1 hidden items-center gap-2 md:flex">
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
        <div>
          <p className="font-semibold text-[#787F85] line-through">R$ 1.176,00</p>
          <p className="text-cocoa-brown text-[48px] font-bold leading-[48px]">R$ 397,00</p>
          <p className="text-[14px] font-semibold leading-[16px] text-[#18745F]">
            (66% de desconto)
          </p>
          <p className="text-[14px]">
            À vista no PIX com até <strong>5% OFF</strong>
          </p>
          <p className="text-[14px] font-bold">R$ 417,00</p>
          <p className="text-[14px]">
            Em até 12x de <strong>R$ 41,87</strong> sem juros no cartão
          </p>

          <div className="mt-[40px] hidden max-w-[336px] text-[16px] uppercase leading-[26px] md:block lg:max-w-[484px]">
            <p>
              Aliviar Dores Musculares e Articulares, Combater a Inflamação, Recuperar a Vitalidade
              e Promover o Bem-Estar Geral.
            </p>
            <p className="text-palatinate-blue my-5 underline">
              <strong>modo de uso</strong>
            </p>
            <p>
              <strong>Garantia</strong> de resultados ou o seu dinheiro de volta!
            </p>
          </div>
        </div>

        <div className="relative mt-3 hidden h-[325px] w-[336px] flex-col items-center justify-center gap-4 rounded-[16px] bg-[#ECEEF0] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] md:flex md:h-[394px] lg:h-[520px] lg:w-[488px]">
          <Image src={selo} alt="" className="absolute right-4 top-2" />
          <Image src={frascosLg} alt="" className="md:h-[152px] md:w-[152px] lg:h-auto lg:w-auto" />
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
      </div>

      <div>
        <div>
          <ul className="mt-[30px] flex flex-wrap gap-4 md:max-w-[592px] [&>*]:flex-[1_1_154px]">
            <li className="inline-flex h-[52px] items-center justify-center rounded-lg border-2 border-[#ECEEF0] px-[46px] text-center">
              5 frascos
            </li>
            <li className="inline-flex h-[52px] items-center justify-center rounded-lg border-2 border-[#ECEEF0] px-[46px] text-center">
              3 frascos
            </li>
            <li className="inline-flex h-[52px] items-center justify-center rounded-lg border-2 border-[#ECEEF0] px-[46px] text-center">
              1 frascos
            </li>
          </ul>
        </div>

        <div className="mt-[18px]">
          <div className="flex justify-between rounded-lg border-2 border-[#ECEEF0] md:max-w-[312px]">
            <input
              className="h-[43px] px-4 font-medium text-[#687076] placeholder:uppercase"
              placeholder="Adicionar cupom"
            />

            <div className="bg-palatinate-blue inline-flex items-center justify-center rounded-lg px-3">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.79294 25.7814C7.43319 25.7807 7.07981 25.6864 6.76755 25.5077C6.06443 25.1093 5.62732 24.3358 5.62732 23.4962V6.50401C5.62732 5.66202 6.06443 4.89092 6.76755 4.49249C7.08724 4.30876 7.45042 4.21427 7.81911 4.21891C8.1878 4.22355 8.54849 4.32714 8.86345 4.51885L23.3859 13.2118C23.6886 13.4016 23.9381 13.6651 24.111 13.9777C24.284 14.2903 24.3747 14.6417 24.3747 14.9989C24.3747 15.3562 24.284 15.7076 24.111 16.0201C23.9381 16.3327 23.6886 16.5963 23.3859 16.786L8.86111 25.4814C8.53878 25.6762 8.16959 25.7799 7.79294 25.7814Z"
                  fill="#D7DBDF"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-center md:gap-[50px]">
          <button className="bg-crimson text-slate-light inline-flex h-[42px] w-full items-center justify-center rounded-lg font-bold uppercase md:max-w-[310px]">
            Comprar agora
          </button>

          <div className="flex items-center justify-center gap-3.5">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.2249 5.72832C21.1553 4.6479 19.8813 3.79127 18.4772 3.20838C17.073 2.62549 15.5669 2.32803 14.0466 2.33332C7.6766 2.33332 2.48494 7.52499 2.48494 13.895C2.48494 15.9367 3.0216 17.92 4.02494 19.67L2.3916 25.6667L8.5166 24.0567C10.2083 24.9783 12.1099 25.4683 14.0466 25.4683C20.4166 25.4683 25.6083 20.2767 25.6083 13.9067C25.6083 10.815 24.4066 7.90999 22.2249 5.72832ZM14.0466 23.5083C12.3199 23.5083 10.6283 23.0417 9.1466 22.1667L8.7966 21.9567L5.1566 22.9133L6.12494 19.3667L5.8916 19.005C4.93231 17.4731 4.42293 15.7024 4.4216 13.895C4.4216 8.59832 8.73827 4.28165 14.0349 4.28165C16.6016 4.28165 19.0166 5.28499 20.8249 7.10499C21.7203 7.99628 22.4299 9.05643 22.9126 10.224C23.3952 11.3915 23.6413 12.6433 23.6366 13.9067C23.6599 19.2033 19.3433 23.5083 14.0466 23.5083ZM19.3199 16.3217C19.0283 16.1817 17.6049 15.4817 17.3483 15.3767C17.0799 15.2833 16.8933 15.2367 16.6949 15.5167C16.4966 15.8083 15.9483 16.4617 15.7849 16.6483C15.6216 16.8467 15.4466 16.87 15.1549 16.7183C14.8633 16.5783 13.9299 16.2633 12.8333 15.2833C11.9699 14.5133 11.3983 13.5683 11.2233 13.2767C11.0599 12.985 11.1999 12.8333 11.3516 12.6817C11.4799 12.5533 11.6433 12.3433 11.7833 12.18C11.9233 12.0167 11.9816 11.8883 12.0749 11.7017C12.1683 11.5033 12.1216 11.34 12.0516 11.2C11.9816 11.06 11.3983 9.63665 11.1649 9.05332C10.9316 8.49332 10.6866 8.56332 10.5116 8.55165H9.9516C9.75327 8.55165 9.44993 8.62165 9.1816 8.91332C8.92493 9.20499 8.17827 9.90499 8.17827 11.3283C8.17827 12.7517 9.2166 14.1283 9.3566 14.315C9.4966 14.5133 11.3983 17.43 14.2916 18.6783C14.9799 18.9817 15.5166 19.1567 15.9366 19.285C16.6249 19.5067 17.2549 19.4717 17.7566 19.4017C18.3166 19.32 19.4716 18.7017 19.7049 18.025C19.9499 17.3483 19.9499 16.7767 19.8683 16.6483C19.7866 16.52 19.6116 16.4617 19.3199 16.3217Z"
                fill="#26292B"
              />
            </svg>
            <span className="font-bold uppercase">Fale conosco</span>
          </div>
        </div>

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
      </div>
    </section>
  )
}
