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
    <div className="grain-overlay min-h-screen bg-black text-[#f0ede8] w-full relative overflow-x-hidden">
      <div className="w-full max-w-[1920px] mx-auto relative min-h-screen flex flex-col">
        <Navbar
          scrolled={scrolled}
          navOpen={navOpen}
          activePage={currentPage}
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

        <main className={`flex-1 pt-14 md:pt-[72px] transition-opacity duration-300 ${navOpen ? 'opacity-0 pointer-events-none invisible' : 'opacity-100 visible'}`}>
          {currentPage === 'home'  && <HomePage  onNavigate={navigate} />}
          {currentPage === 'disco' && <DiscographyPage />}
          {currentPage === 'collab' && <CollaborationPage />}
        </main>
      </div>
    </div>
  )
}
