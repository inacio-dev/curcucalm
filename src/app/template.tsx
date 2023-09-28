import { Toaster } from 'react-hot-toast'

import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Toaster />

      {children}

      <Footer />
    </>
  )
}
