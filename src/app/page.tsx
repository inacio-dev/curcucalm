import Carousel from '../components/Carousel'
import Initital from '../components/Initital'
import Order from '../components/Order'
import Testimonials from '../components/Testimonials'

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-83px-56px)] w-full flex-col items-start justify-center bg-slate-light-3 md:min-h-[calc(100vh-83px-96px)]">
      <Initital />
      <Carousel />
      <Order />
      <Testimonials />
    </main>
  )
}
