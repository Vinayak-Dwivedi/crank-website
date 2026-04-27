import { Page } from '../App'

interface NavbarProps {
  scrolled: boolean
  navOpen: boolean
  onToggleNav: () => void
  onLogoClick: () => void
  onNavigate?: (page: Page) => void
}

export default function Navbar({ scrolled: _scrolled, navOpen, onToggleNav, onLogoClick, onNavigate }: NavbarProps) {
  return (
    <nav
      className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] h-14 z-[100] flex justify-between items-center bg-black transition-all duration-300"
    >
      {/* Logo */}
      <button
        onClick={onLogoClick}
        className="cranktasy-header ml-5 md:ml-12 hover:opacity-70 transition-opacity -rotate-[4deg] mt-[-4px]"
      >
        CrankTasy
      </button>

      {/* Right controls */}
      <div className="flex items-center gap-4 lg:gap-6 mr-5 md:mr-12">
        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 lg:gap-10 items-center">
          <button onClick={() => onNavigate?.('disco')} className="font-heading-stack text-[18px] tracking-[0.1em] discography-heading transition-colors uppercase">Music</button>
          <button onClick={() => onNavigate?.('collab')} className="font-heading-stack text-[18px] tracking-[0.1em] discography-heading transition-colors uppercase">Collaborate</button>
        </div>

        {/* Hamburger */}
        <button
          onClick={onToggleNav}
          aria-label="Toggle navigation"
          className="relative w-[34px] h-[34px] bg-white rounded-full flex flex-col justify-center items-center gap-[4px] z-[200] md:hidden cursor-pointer hover:scale-105 transition-transform"
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
    </nav>
  )
}
