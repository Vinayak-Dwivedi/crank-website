import { Page } from '../App'

interface NavbarProps {
  scrolled: boolean
  navOpen: boolean
  activePage: Page
  onToggleNav: () => void
  onLogoClick: () => void
  onNavigate?: (page: Page) => void
}

export default function Navbar({ scrolled: _scrolled, navOpen, activePage, onToggleNav, onLogoClick, onNavigate }: NavbarProps) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 h-14 z-[200] bg-black transition-all duration-300"
    >
      <div className="w-full max-w-[1920px] mx-auto h-full flex justify-between items-center px-4 md:px-6">
      {/* Logo */}
        <button
          onClick={onLogoClick}
          className="cranktasy-header hover:opacity-70 transition-opacity -rotate-[4deg] mt-[-4px]"
        >
          CrankTasy
        </button>

      {/* Right controls */}
        <div className="flex items-center gap-4 lg:gap-6">
        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 lg:gap-10 items-center">
          <button 
            onClick={() => onNavigate?.('disco')} 
            className={`font-heading-stack discography-heading  text-[18px] tracking-[0.1em] transition-all duration-300 uppercase `}
          >
            Music
          </button>
          <button 
            onClick={() => onNavigate?.('collab')} 
            className={`font-heading-stack text-[18px] discography-heading  tracking-[0.1em] transition-all duration-300 uppercase ${
              activePage === 'collab' ? 'discography-heading ' : ' '
            }`}
          >
            Collaborate
          </button>
        </div>

        {/* Hamburger */}
        <button
          onClick={onToggleNav}
          aria-label="Toggle navigation"
          className="relative w-[34px] h-[34px] cosmic-night-bg rounded-full flex flex-col justify-center items-center gap-[4px] z-[200] md:hidden cursor-pointer hover:scale-105 transition-transform"
        >
          <span
            className={`block w-[18px] h-[2px] bg-black transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
              navOpen ? 'translate-y-[6px] rotate-45' : ''
            }`}
          />
          <span
            className={`block w-[18px] h-[2px] bg-black transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
              navOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-[18px] h-[2px] bg-black transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
              navOpen ? '-translate-y-[6px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>
    </div>
  </nav>
  )
}
