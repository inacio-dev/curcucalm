import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu'

import logo from '../assets/logo-desktop.png'
import ScrollButton from './ScrollButton'
import TermsDialog from './TermsDialog'

export default function Header() {
  return (
    <header className="fixed z-50 w-full bg-slate-light-3 shadow-md">
      <div className="mx-auto flex h-[56px] w-full max-w-[1280px] items-center justify-between px-3.5 md:h-[96px] md:px-8">
        <div className="hidden items-center gap-[35px] lg:flex">
          <TermsDialog>
            <button className="uppercase text-slate-dark-4">Termos e políticas</button>
          </TermsDialog>

          {/* <button className="uppercase text-slate-dark-4">FAQ</button> */}
        </div>

        <Image src={logo} alt="" className="w-[74px] md:w-[135px] lg:w-auto" />

        <div className="flex items-center gap-[18px] md:gap-[35px]">
          <ScrollButton
            scrollId="order"
            className="h-[32px] rounded-lg bg-brand-crimson px-3.5 text-xs font-bold uppercase text-slate-light-3 md:h-[42px] md:px-[30px] md:text-base"
          >
            comprar agora
          </ScrollButton>

          <button className="block lg:hidden">
            <TermsDialog>
              <MenuIcon className="fill-slate-dark-4" />
            </TermsDialog>
          </button>
        </div>
      </div>
    </header>
  )
}
