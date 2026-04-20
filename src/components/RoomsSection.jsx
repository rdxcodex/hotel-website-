import { useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'

const suites = [
  {
    name: 'Horizon Suite',
    price: '$580 / night',
    description:
      'Panoramic sea views, sunken lounge, and a private open-air soaking bath.',
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80',
    features: ['83 sqm interior', 'Private terrace', 'Butler service'],
  },
  {
    name: 'Garden Residence',
    price: '$720 / night',
    description:
      'A secluded residence framed by old cedar trees with full dining and spa setup.',
    image:
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80',
    features: ['106 sqm interior', 'Plunge pool', 'Evening tasting menu'],
  },
  {
    name: 'Skyline Penthouse',
    price: '$990 / night',
    description:
      'Double-height suite with skyline panorama and tailored in-room experiences.',
    image:
      'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1600&q=80',
    features: ['140 sqm interior', 'Private cinema wall', 'Dedicated concierge'],
  },
]

function RoomsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeSuite = suites[activeIndex]

  const goPrevious = () => {
    setActiveIndex((current) => (current === 0 ? suites.length - 1 : current - 1))
  }

  const goNext = () => {
    setActiveIndex((current) => (current === suites.length - 1 ? 0 : current + 1))
  }

  return (
    <section id="rooms" className="py-20 sm:py-28">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl border border-sage/20">
          <AnimatePresence mode="wait">
            <Motion.img
              key={activeSuite.image}
              src={activeSuite.image}
              alt={activeSuite.name}
              loading="lazy"
              decoding="async"
              initial={{ opacity: 0.45 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.45 }}
              transition={{ duration: 0.55 }}
              className="h-[480px] w-full object-cover sm:h-[560px]"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/75 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
            <p className="text-xs uppercase tracking-[0.2em] text-sage">Signature Suite</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={goPrevious}
                className="luxury-hover rounded-full border border-sage/40 bg-obsidian/60 px-4 py-2 text-xs uppercase tracking-[0.2em]"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={goNext}
                className="luxury-hover rounded-full border border-sage/40 bg-obsidian/60 px-4 py-2 text-xs uppercase tracking-[0.2em]"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-sage">Rooms & Suites</p>
          <h2 className="section-title mb-5 max-w-lg">{activeSuite.name}</h2>
          <p className="mb-8 max-w-lg text-base leading-relaxed text-ivory/80">
            {activeSuite.description}
          </p>

          <ul className="mb-10 grid gap-3 text-sm text-ivory/86 sm:text-base">
            {activeSuite.features.map((feature) => (
              <li key={feature} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-5">
            <Motion.button
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="luxury-hover rounded-full bg-sage px-8 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-obsidian"
            >
              {activeSuite.price}
            </Motion.button>
            <p className="text-sm uppercase tracking-[0.2em] text-ivory/70">
              {String(activeIndex + 1).padStart(2, '0')} /{' '}
              {String(suites.length).padStart(2, '0')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoomsSection
