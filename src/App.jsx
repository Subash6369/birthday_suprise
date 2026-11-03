import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Music2, VolumeX, Menu, X, Sparkles } from 'lucide-react'
import BirthdaySections from './sections/BirthdaySections.jsx'

const links = [
  ['Welcome', 'welcome'], ['Our story', 'story'], ['Gallery', 'gallery'],
  ['Love letter', 'letter'], ['Surprise', 'surprise'],
]

function FloatingHearts() {
  return <div className="floating-hearts" aria-hidden="true">
    {Array.from({ length: 13 }, (_, i) => (
      <span key={i} style={{ left: `${(i * 17 + 4) % 100}%`, animationDelay: `${i * -1.8}s`, animationDuration: `${13 + (i % 5) * 2}s`, fontSize: `${12 + (i % 4) * 7}px` }}>♡</span>
    ))}
  </div>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [musicOn, setMusicOn] = useState(false)

  const audioRef = useRef(null)

const toggleMusic = async () => {
  const audio = audioRef.current

  if (!audio) {
    console.error('Audio element not found')
    return
  }

  if (musicOn) {
    audio.pause()
    setMusicOn(false)
  } else {
    try {
      await audio.play()
      setMusicOn(true)
      console.log('Music is playing successfully!')
    } catch (error) {
      console.error('Music playback error:', error)

      alert(
        `Music Error: ${error.name}\n${error.message}`
      )
    }
  }
}

  return (
    <div className="site-shell">
      <audio
  ref={audioRef}
  src="/music/romantic.mp3"
  loop
  preload="auto"
  onError={(event) => {
    console.error('Audio loading error:', event.currentTarget.error)
  }}
/>
      <FloatingHearts />
      <header className="navbar">
        <a className="brand" href="#welcome"><span className="brand-icon"><Heart size={17} fill="currentColor" /></span> made with love</a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="music-button" onClick={toggleMusic} aria-label="Toggle background music">
            {musicOn ? <Music2 size={17} /> : <VolumeX size={17} />} <span>{musicOn ? 'Music on' : 'Music off'}</span>
          </button>
          <button className="menu-button" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>
      <main><BirthdaySections /></main>
      <footer className="footer"><Heart size={15} fill="currentColor" /> Made with love, just for you <Sparkles size={15} /></footer>
    </div>
  )
}
