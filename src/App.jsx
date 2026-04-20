import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import IntroStrip from './components/IntroStrip'
import EditorialSection from './components/EditorialSection'
import GallerySection from './components/GallerySection'
import RoomsSection from './components/RoomsSection'
import Footer from './components/Footer'
import SectionReveal from './components/SectionReveal'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="overflow-x-hidden bg-obsidian text-ivory">
      <Navbar isScrolled={isScrolled} />
      <main>
        <HeroSection />
        <SectionReveal>
          <IntroStrip />
        </SectionReveal>
        <SectionReveal>
          <EditorialSection />
        </SectionReveal>
        <SectionReveal>
          <GallerySection />
        </SectionReveal>
        <SectionReveal>
          <RoomsSection />
        </SectionReveal>
      </main>
      <Footer />
    </div>
  )
}

export default App
