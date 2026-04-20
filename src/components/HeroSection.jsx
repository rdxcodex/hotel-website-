import { motion as Motion } from 'framer-motion'

const heroImage =
  'https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=2200&q=80'

function HeroSection() {
  return (
    <section id="hero" className="relative flex h-screen min-h-[760px] items-center">
      <Motion.img
        src={heroImage}
        alt="Luxury hotel facade and pool at dusk"
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 10, ease: 'linear' }}
        fetchPriority="high"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/55 via-obsidian/45 to-obsidian/80" />

      <div className="section-shell relative z-10 mt-24 text-center sm:mt-28">
        <Motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="mb-5 text-xs uppercase tracking-[0.3em] text-sage sm:text-sm"
        >
          Heritage Coastal Retreat
        </Motion.p>
        <Motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.22 }}
          className="mx-auto max-w-5xl font-serif text-[2.8rem] leading-[0.86] tracking-tightest text-ivory sm:text-6xl lg:text-8xl xl:text-[6.9rem]"
        >
          A Quiet Address For Slow, Beautiful Living
        </Motion.h1>
      </div>

      <div id="book" className="section-shell absolute bottom-7 left-1/2 z-20 w-full -translate-x-1/2">
        <Motion.form
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="grid grid-cols-1 gap-3 rounded-2xl border border-sage/30 bg-obsidian/70 p-4 backdrop-blur-xl sm:grid-cols-2 md:grid-cols-4 md:p-5"
        >
          <label className="flex flex-col gap-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-sage">
              Check In
            </span>
            <input
              type="date"
              className="rounded-xl border border-sage/40 bg-obsidian/70 px-4 py-3 text-sm text-ivory outline-none transition focus:border-sage"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-sage">
              Check Out
            </span>
            <input
              type="date"
              className="rounded-xl border border-sage/40 bg-obsidian/70 px-4 py-3 text-sm text-ivory outline-none transition focus:border-sage"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-sage">
              Guests
            </span>
            <select className="rounded-xl border border-sage/40 bg-obsidian/70 px-4 py-3 text-sm text-ivory outline-none transition focus:border-sage">
              <option>2 Adults</option>
              <option>3 Adults</option>
              <option>4 Adults</option>
            </select>
          </label>
          <button
            type="button"
            className="luxury-hover mt-auto rounded-xl bg-sage px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-obsidian"
          >
            Check Availability
          </button>
        </Motion.form>
      </div>
    </section>
  )
}

export default HeroSection
