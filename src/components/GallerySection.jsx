import { motion as Motion } from 'framer-motion'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80',
    alt: 'Private villa pool',
    size: 'h-[360px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=80',
    alt: 'Bedroom interior with curated decor',
    size: 'h-[520px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1000&q=80',
    alt: 'Ocean view lounge',
    size: 'h-[420px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
    alt: 'Spa and wellness room',
    size: 'h-[500px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?auto=format&fit=crop&w=1000&q=80',
    alt: 'Restaurant table setup',
    size: 'h-[350px]',
  },
  {
    src: 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&w=1000&q=80',
    alt: 'Lobby staircase and architecture',
    size: 'h-[460px]',
  },
]

function GallerySection() {
  return (
    <section id="gallery" className="border-y border-sage/20 bg-forest/10 py-20 sm:py-28">
      <div className="section-shell">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <h2 className="section-title max-w-2xl">A Living Gallery Of Quiet Luxury</h2>
          <p className="max-w-md text-sm leading-relaxed text-ivory/75 sm:text-base">
            Every space is composed around texture, natural light, and long
            views, making each moment feel curated but never staged.
          </p>
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {galleryImages.map((image) => (
            <Motion.figure
              key={image.src}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.35 }}
              className="luxury-hover mb-5 break-inside-avoid overflow-hidden rounded-2xl"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className={`${image.size} w-full object-cover`}
              />
            </Motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GallerySection
