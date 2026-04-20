function Navbar({ isScrolled }) {
  const baseClasses =
    'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out'
  const stateClasses = isScrolled
    ? 'bg-obsidian/92 backdrop-blur-lg border-b border-sage/20'
    : 'bg-transparent border-b border-transparent'

  return (
    <header className={`${baseClasses} ${stateClasses}`}>
      <nav className="section-shell flex h-20 items-center justify-between text-sm uppercase tracking-[0.18em] sm:h-24">
        <div className="flex items-center gap-4 sm:gap-8">
          <button
            type="button"
            className="luxury-hover rounded-full border border-sage/40 px-4 py-2 text-[11px] text-ivory/90 sm:text-xs"
          >
            Menu
          </button>
          <a href="#editorial" className="hidden text-ivory/80 sm:block">
            Journal
          </a>
        </div>

        <a
          href="#hero"
          className="font-serif text-xl tracking-[0.28em] text-ivory sm:text-2xl"
        >
          VERDANT
        </a>

        <div className="flex items-center gap-4 text-[11px] sm:gap-8 sm:text-xs">
          <a href="#rooms" className="hidden text-ivory/80 sm:block">
            Rooms
          </a>
          <a href="#gallery" className="text-ivory/90">
            Gallery
          </a>
          <a
            href="#book"
            className="luxury-hover rounded-full border border-sage/40 px-4 py-2 text-ivory/95"
          >
            Book
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
