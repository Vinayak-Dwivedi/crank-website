import { Page } from '../App'
import { FaSpotify, FaYoutube, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { SiApplemusic, SiGmail, SiX } from 'react-icons/si'


interface NavOverlayProps {
  open: boolean
  currentPage: Page
  onNavigate: (page: Page) => void
  onClose: () => void
}

const links: { label: string; page: Page }[] = [
  { label: 'MUSIC', page: 'disco' },
  { label: 'COLLABORATE', page: 'collab' },
]

const socials = [
  { id: 'spotify', Icon: FaSpotify },
  { id: 'applemusic', Icon: SiApplemusic },
  { id: 'youtube', Icon: FaYoutube },
  { id: 'instagram', Icon: FaInstagram },
  { id: 'x', Icon: SiX },
  { id: 'facebook', Icon: FaFacebookF },
  { id: 'gmail', Icon: SiGmail },
]

export default function NavOverlay({ open, currentPage, onNavigate, onClose: _onClose }: NavOverlayProps) {
  return (
    <div
      className={`fixed top-0 right-0 w-full h-[100dvh] bg-black z-[90] flex flex-col px-10 pt-14 pb-0 transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] md:hidden ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >

      {/* Nav links - Centered vertically with more space */}
      <div className="flex-1 flex flex-col items-center justify-center gap-10">
        {links.map(({ label, page }, i) => (
          <button
            key={page}
            onClick={() => onNavigate(page)}
            className={`font-bebas text-[42px] sm:text-[60px] tracking-[0.08em] leading-none text-center transition-all duration-300 hover:scale-105 ${
              open ? 'opacity-100' : 'opacity-0'
            } ${
              currentPage === page
                ? 'text-[#f0ede8]'
                : 'text-[#f0ede8]/40 hover:text-[#f0ede8]'
            }`}
            style={{ transitionDelay: open ? `${i * 60 + 50}ms` : '0ms' }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Footer socials */}
      <div className="flex flex-col items-center gap-4 mt-auto w-full mb-4">
        <div className="flex justify-center gap-6 sm:gap-6  flex-wrap">
          {socials.map(({ id, Icon }) => (
            <a
              key={id}
              href="#"style={{ fill: "url(#iconGradient)" }}
              className="text-white hover:opacity-60 transition-opacity"
            >
              <Icon className="w-5 h-5 text-white hover:text-[grey] sm:w-5 sm:h-5 hover:scale-110 transition-transform" />
            </a>
          ))}
        </div>
        
        <div className="flex flex-col text-white items-center gap-1.5 font-mono-custom text-center tracking-[0.08em]">
          <p className="text-[12px] md:text-[14px]">Intentional Sound.</p>
          <div className="flex items-center gap-1 logo-gradient-text text-[10px] md:text-[11px]">
            <span className="text-[12px] leading-none">©</span>
            <span className="leading-none">CrankTasy</span>
          </div>
        </div>
      </div>
    </div>
  )
}
