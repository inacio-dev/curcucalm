import Carousel from '../components/Carousel'
import Initital from '../components/Initital'
import Order from '../components/Order'
import Testimonials from '../components/Testimonials'

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  return (
    <main className="flex min-h-[calc(100vh-83px-56px)] w-full flex-col items-start justify-center bg-slate-light-3 md:min-h-[calc(100vh-83px-96px)]">
      <Initital />
      <Carousel />
      <Order quantity={searchParams.quantity as string} coupon={searchParams.coupon as string} />
      <Testimonials />
    </main>
  )
}
