import { Page } from '../App'

import { FaSpotify, FaYoutube } from 'react-icons/fa'
import { SiApplemusic } from 'react-icons/si'
import Waveform from '../components/Waveform'

interface HomePageProps {
  onNavigate: (page: Page) => void
}

export default function HomePage({ onNavigate: _onNavigate }: HomePageProps) {
  return (
    <div className="relative h-[calc(100vh-56px)] md:h-[calc(100vh-72px)] w-full bg-black text-[#f0ede8] overflow-hidden flex flex-col items-center justify-center p-4">
      
      <div className="relative z-10 w-full max-w-[1200px] flex flex-col items-center justify-center gap-4 md:gap-8 max-h-full">
        
        {/* Title Group */}
        <div className="text-center animate-fade-up">
          <h1 className="discography-heading text-[15vw] sm:text-[12vw] md:text-[110px] leading-[0.85] mb-1 md:mb-2 filter brightness-110 block text-center whitespace-nowrap">
            COSMIC NIGHT
          </h1>
          <p className="font-mono-custom text-[clamp(10px,1.5vh,16px)] tracking-[0.4em] uppercase text-[#cccccc] opacity-80 text-sm">
            OUT NOW
          </p>
        </div>

        {/* Visualizer */}
        <div className="animate-fade-up delay-100 flex items-center justify-center">
          <Waveform bars={12} height="h-[clamp(24px,4vh,40px)]" barClassName="logo-gradient-bg" />
        </div>

        {/* Album Art Section (New Poster) */}
        <div className="relative group animate-fade-up delay-200">
          <div className="relative z-10 w-[clamp(240px,45vh,480px)] aspect-square bg-[#0d0d0d] border border-[#1a1a1a] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden">
            <img 
              src="/Gemini_Generated_Image_ubi2obubi2obubi2.png" 
              alt="Cosmic Night Poster" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-20"></div>
          </div>
        </div>

        {/* Streaming Icons */}
        <div className="flex gap-8 md:gap-14 animate-fade-up delay-300 items-center justify-center">
          <svg width="0" height="0" className="absolute">
            <linearGradient id="iconGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#a0a0a0" />
            </linearGradient>
          </svg>
          <button className="hover:opacity-70 transition-opacity group">
            <FaSpotify style={{ fill: "url(#iconGradient)" }} className="w-[clamp(24px,4vh,32px)] h-[clamp(24px,4vh,32px)] group-hover:scale-110 transition-transform" />
          </button>
          <button className="hover:opacity-70 transition-opacity group">
            <SiApplemusic style={{ fill: "url(#iconGradient)" }} className="w-[clamp(24px,4vh,32px)] h-[clamp(24px,4vh,32px)] group-hover:scale-110 transition-transform" />
          </button>
          <button className="hover:opacity-70 transition-opacity group">
            <FaYoutube style={{ fill: "url(#iconGradient)" }} className="w-[clamp(24px,4vh,32px)] h-[clamp(24px,4vh,32px)] group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      {/* Note: Scroll indicator, Sound bar (right) and NEW RELEASE badge (center) are omitted as requested */}
    </div>
  )
}

