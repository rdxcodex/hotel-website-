import { motion as Motion } from 'framer-motion'

const editorialImages = {
  center:
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1500&q=80',
  left:
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
  right:
    'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
}

function EditorialSection() {
  return (
    <section id="editorial" className="py-20 sm:py-28">
      <div className="section-shell">
        <div className="relative grid gap-6 lg:grid-cols-[1fr_1.6fr_1fr]">
          <Motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.35 }}
            src={editorialImages.left}
            alt="Luxury lounge details"
            loading="lazy"
            decoding="async"
            className="luxury-hover h-64 w-full rounded-2xl object-cover lg:mt-16 lg:h-[420px]"
          />

          <Motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.35 }}
            src={editorialImages.center}
            alt="Hotel courtyard at sunset"
            loading="lazy"
            decoding="async"
            className="luxury-hover h-[460px] w-full rounded-2xl object-cover sm:h-[560px]"
          />

          <Motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.35 }}
            src={editorialImages.right}
            alt="Private spa scene"
            loading="lazy"
            decoding="async"
            className="luxury-hover h-64 w-full rounded-2xl object-cover lg:mt-24 lg:h-[360px]"
          />

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <h2 className="max-w-4xl px-6 text-center font-serif text-5xl leading-[0.88] text-ivory drop-shadow-[0_8px_35px_rgba(2,13,16,0.45)] sm:text-6xl lg:text-8xl">
              Crafted Like An Editorial Story
            </h2>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Motion.button
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="luxury-hover rounded-full border border-sage/50 px-8 py-3 text-xs uppercase tracking-[0.22em] text-ivory"
          >
            Explore The Estate
          </Motion.button>
        </div>
      </div>
    </section>
  )
}

export default EditorialSection
