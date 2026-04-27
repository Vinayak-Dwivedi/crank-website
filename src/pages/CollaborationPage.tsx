import { useState } from 'react'
import Waveform from '../components/Waveform'
import Footer from '../components/Footer'
import { FaLink } from 'react-icons/fa'


interface FormState {
  name: string
  email: string
  description: string
}

export default function CollaborationPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.description) return
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const handleAddLink = () => {
    const url = window.prompt('Enter your link (e.g., https://soundcloud.com/...)')
    if (url) {
      setForm(f => ({
        ...f,
        description: f.description 
          ? `${f.description}\n${url}`
          : url
      }))
    }
  }

  const inputClass = (name: string) =>
    `w-full bg-transparent border-b pb-2 pt-2 font-['Inter','Roboto','Open_Sans',sans-serif] font-light text-[16px] md:text-[18px] tracking-[0.01em] outline-none transition-all duration-200 text-[#cccccc] placeholder-[#555] ${
      focused === name ? 'border-[#f0ede8]' : 'border-[#2a2a2a]'
    }`

  return (
    <div>
      {/* Header */}
      <div className="px-5 md:px-12 pt-9 md:pt-16 pb-6 text-center">
       
        <h1 className="discography-heading text-[80px] sm:text-[100px] md:text-[120px] leading-[0.85] mb-5 md:mb-8 animate-fade-up delay-100 w-fit mx-auto">
          COLLABORATE
        </h1>
        <div className="flex justify-center animate-fade-up delay-200 mb-6">
          <Waveform bars={9} height="h-8 md:h-10"  barClassName="discography-bg"  />
        </div>
        {/* <div className="flex justify-center flex-wrap gap-6 mt-4 text-[#888] animate-fade-up delay-300">
          <FaInstagram className="w-5 h-5 hover:text-[#f0ede8] transition-colors cursor-pointer" />
          <SiGmail className="w-5 h-5 hover:text-[#f0ede8] transition-colors cursor-pointer" />
          <SiX className="w-4 h-4 hover:text-[#f0ede8] transition-colors cursor-pointer mt-[2px]" />
          <SiThreads className="w-5 h-5 hover:text-[#f0ede8] transition-colors cursor-pointer" />
        </div> */}
        <p className="max-w-2xl mx-auto font-['Inter','Roboto','Open_Sans',sans-serif] font-light text-[16px] md:text-[18px] leading-[1.6] tracking-[0.01em] text-[#cccccc] mb-8 md:mb-12 animate-fade-up delay-100">
          We collaborate with artists who share a commitment to intentional sound. We are open to working with vocalists, lyricists, instrumentalists, and producers whose work reflects clarity, emotion, and originality. To be considered, please submit a curated selection of your work along with a brief introduction. All submissions are reviewed. Selected collaborators will be contacted directly.
        </p>
      </div>

      <div className="max-w-3xl mx-auto w-full">
        {/* Form */}
        <div className="px-5 md:px-12 pb-10 flex flex-col gap-6 md:gap-8">

        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            onFocus={() => setFocused('name')}
            onBlur={() => setFocused(null)}
            className={inputClass('name')}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            onFocus={() => setFocused('email')}
            onBlur={() => setFocused(null)}
            className={inputClass('email')}
          />
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1.5 pt-4">
          <div className="logo-gradient-border-full !rounded-xl overflow-hidden relative">
            <div className="bg-[#0a0a0a] rounded-[calc(0.75rem-1px)]">
              <textarea
                rows={4}
                placeholder="Tell us about your work and include links or files to your best material."
                value={form.description}
                onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                onFocus={() => setFocused('description')}
                onBlur={() => setFocused(null)}
                className="w-full bg-transparent p-4 pb-12 font-inter font-light text-[16px] md:text-[18px] tracking-[0.01em] leading-[1.6] outline-none transition-all duration-200 text-[#cccccc] placeholder-[#555] resize-none border-none"
              />
              {/* Link Button */}
              <button
                type="button"
                onClick={handleAddLink}
                className="absolute bottom-3 left-4 p-2 text-[#555] hover:text-[#f0ede8] transition-colors group flex items-center gap-2"
                title="Add a link"
              >
                <FaLink className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-widest font-semibold opacity-0 group-hover:opacity-100 transition-opacity">Add Link</span>
              </button>
            </div>
          </div>
        </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            disabled={!form.name || !form.email || !form.description}
            className={`w-full font-['Inter','Roboto','Open_Sans',sans-serif] font-semibold uppercase text-[12px] md:text-[14px] tracking-[0.2em] py-5 md:py-6 transition-all duration-200 ${
              form.name && form.email && form.description
                ? submitted
                  ? 'bg-[#2a2a2a] text-[#888] cursor-default'
                  : 'bg-[#f0ede8] text-[#0a0a0a] hover:opacity-85 active:scale-[0.99]'
                : 'bg-[#1a1a1a] text-[#444] cursor-not-allowed border border-[#2a2a2a]'
            }`}
          >
            {submitted ? '✓ SUBMITTED' : 'Submit Your Work'}
          </button>
        </div>

        {/* Preview tiles */}
        {/* <div className="grid grid-cols-2 gap-0.5 md:gap-4 mx-5 md:mx-12 mb-10 md:mb-20">
          <div className="aspect-square bg-[#161616] border border-[#2a2a2a] relative overflow-hidden flex items-end p-3 md:p-6">
            <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
              <rect width="150" height="150" fill="#1a1a1a"/>
              <rect x="10" y="50" width="130" height="70" fill="#222" rx="3"/>
              <rect x="15" y="55" width="120" height="30" fill="#161616" rx="2"/>
              <circle cx="28" cy="70" r="5" fill="#333"/>
              <circle cx="45" cy="70" r="5" fill="#333"/>
              <circle cx="62" cy="70" r="5" fill="#333"/>
              <rect x="80" y="63" width="50" height="13" fill="#2a2a2a" rx="2"/>
              <rect x="15" y="90" width="120" height="7" fill="#2a2a2a" rx="1"/>
              <rect x="15" y="101" width="80" height="7" fill="#2a2a2a" rx="1"/>
              <rect x="0" y="110" width="150" height="40" fill="rgba(0,0,0,0.55)"/>
            </svg>
            <span className="relative z-10 font-bebas text-[18px] md:text-[24px] tracking-[0.1em]">STUDIO ACCESS</span>
          </div>
          <div className="aspect-square bg-[#0d0d0d] border border-[#2a2a2a] relative overflow-hidden flex items-end p-3 md:p-6">
            <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
              <rect width="150" height="150" fill="#0d0d0d"/>
              <ellipse cx="75" cy="95" rx="60" ry="38" fill="#1a1a1a"/>
              <rect x="55" y="28" width="40" height="82" rx="20" fill="#222"/>
              <rect x="65" y="110" width="20" height="28" fill="#222"/>
              <rect x="40" y="115" width="26" height="10" rx="5" fill="#1a1a1a" transform="rotate(-26 53 120)"/>
              <rect x="84" y="115" width="26" height="10" rx="5" fill="#1a1a1a" transform="rotate(26 97 120)"/>
              <ellipse cx="75" cy="138" rx="38" ry="7" fill="#111"/>
              <rect x="0" y="110" width="150" height="40" fill="rgba(0,0,0,0.55)"/>
            </svg>
            <span className="relative z-10 font-bebas text-[18px] md:text-[24px] tracking-[0.1em]">TOUR UPDATES</span>
          </div>
        </div> */}
      </div>

      <Footer />
    </div>
  )
}
