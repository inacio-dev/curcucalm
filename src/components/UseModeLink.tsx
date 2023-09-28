'use client'

import scrollTo from '../utils/scrollTo'

export default function UseModeLink() {
  return (
    <button
      onClick={() => scrollTo('carousel')}
      className="my-5 font-bold uppercase text-brand-palatinate-blue underline"
    >
      modo de uso
    </button>
  )
}
