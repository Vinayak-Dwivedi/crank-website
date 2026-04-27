import { Page } from '../App'
import { FaSpotify, FaYoutube, FaInstagram, FaFacebookF, FaRegCopyright } from 'react-icons/fa'
import { SiApplemusic, SiGmail, SiX } from 'react-icons/si'


interface NavOverlayProps {
  open: boolean
  currentPage: Page
  onNavigate: (page: Page) => void
  onClose: () => void
}


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
      className={`fixed inset-0 z-[250] transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Expanded background to cover safe area gaps on mobile */}
      <div className="absolute -inset-[20%] bg-black -z-10" />

      <div className="flex flex-col h-full pt-24 pb-12 px-8">
        <svg width="0" height="0" className="absolute">
          <linearGradient id="navIconGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#a0a0a0" />
          </linearGradient>
          <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="10%" stopColor="#F3A8E2" />
            <stop offset="50%" stopColor="#C894F9" />
            <stop offset="90%" stopColor="#7B88FF" />
          </linearGradient>
        </svg>

        <div className="flex-1 flex flex-col items-center justify-center gap-10">
          <button
            onClick={() => onNavigate('disco')}
            className={`font-heading-stack text-[72px] sm:text-[90px] md:text-[110px] tracking-[0.1em] text-center uppercase transition-all duration-300 w-full ${
              currentPage === 'disco' ? 'discography-heading scale-105' : 'text-white/40'
            }`}
          >
            Music
          </button>
          <button
            onClick={() => onNavigate('collab')}
            className={`font-heading-stack text-[72px] sm:text-[90px] md:text-[110px] tracking-[0.1em] text-center uppercase transition-all duration-300 w-full ${
              currentPage === 'collab' ? 'discography-heading scale-105' : 'text-white/40'
            }`}
          >
            Collaborate
          </button>
        </div>

        {/* Footer socials */}
        <div className="flex flex-col items-center gap-4 mt-auto w-full mb-4">
          <div className="flex justify-center gap-6 sm:gap-6  flex-wrap">
            {socials.map(({ id, Icon }) => (
              <a
                key={id}
                href="#"
                className="hover:opacity-80 transition-opacity"
              >
                <Icon style={{ fill: "url(#navIconGradient)" }} className="w-6 h-6 hover:scale-110 transition-transform" />
              </a>
            ))}
          </div>
          
         <div className="flex flex-col text-white items-center gap-1.5 font-mono-custom text-center tracking-[0.08em]">
                <p className="text-[12px] md:text-[14px]">Intentional Sound.</p>
                <div className="flex flex-row items-center justify-center gap-1.5  whitespace-nowrap">
                  <FaRegCopyright className="w-3.5 h-3.5 logo-gradient-text" style={{ fill: "url(#logoGradient)" }} />
                  <span className="logo-gradient-text text-[12px] md:text-[14px] md:mr-5 mr-4 font-gotham">CrankTasy</span>
                </div>
              </div>
        </div>
      </div>
    </div>
  )
}
