import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import NavOverlay from './components/NavOverlay'
import HomePage from './pages/HomePage'
import DiscographyPage from './pages/DiscographyPage'
import CollaborationPage from './pages/CollaborationPage'

export type Page = 'home' | 'disco' | 'collab'

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [navOpen, setNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [navOpen])

  const navigate = (page: Page) => {
    setCurrentPage(page)
    setNavOpen(false)
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  return (
    <div className="grain-overlay min-h-screen bg-black text-[#f0ede8] w-full max-w-[1920px] mx-auto relative">
      <Navbar
        scrolled={scrolled}
        navOpen={navOpen}
        onToggleNav={() => setNavOpen(v => !v)}
        onLogoClick={() => navigate('home')}
        onNavigate={navigate}
      />

      <NavOverlay
        open={navOpen}
        currentPage={currentPage}
        onNavigate={navigate}
        onClose={() => setNavOpen(false)}
      />

      <main className="pt-14 md:pt-[72px]">
        {currentPage === 'home'  && <HomePage  onNavigate={navigate} />}
        {currentPage === 'disco' && <DiscographyPage />}
        {currentPage === 'collab' && <CollaborationPage />}
      </main>
    </div>
  )
}
