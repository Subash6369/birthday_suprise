import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Confetti from 'react-confetti'
import { useWindowSize } from './useWindowSize.js'
import { Heart, Sparkles, Gift, Cake, Mail, Star, ArrowDown, Flower2, LockKeyhole, MapPin, Camera } from 'lucide-react'

const name = 'Ponnarasi💜'
const birthdayDate = '2026-11-08T00:00:00+05:30' // Change this to her birthday: YYYY-MM-DDTHH:mm:ss

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}
function Reveal({ children, className = '' }) {
  return <motion.div className={className} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>{children}</motion.div>
}
function Heading({ eyebrow, title, subtitle }) {
  return <Reveal className="section-heading"><span className="eyebrow"><Sparkles size={14} /> {eyebrow}</span><h2>{title}</h2>{subtitle && <p>{subtitle}</p>}</Reveal>
}
function Section({ id, className = '', children }) {
  return <section id={id} className={`section ${className}`}>{children}</section>
}
function Countdown() {
  const [now, setNow] = useState(Date.now())
  useEffect(() => { const timer = window.setInterval(() => setNow(Date.now()), 1000); return () => window.clearInterval(timer) }, [])
  const target = new Date(birthdayDate).getTime()
  const diff = Math.max(0, target - now)
  const units = [['Days', Math.floor(diff / 86400000)], ['Hours', Math.floor(diff / 3600000) % 24], ['Minutes', Math.floor(diff / 60000) % 60], ['Seconds', Math.floor(diff / 1000) % 60]]
  return <div className="countdown-grid">{units.map(([label, value]) => <div className="countdown-cell" key={label}><strong>{String(value).padStart(2, '0')}</strong><span>{label}</span></div>)}</div>
}
const memories = [
  ['The beginning for Start', "Shying away, but fully opening my heart. Our story's beautiful beginning."],
  ['A favourite day on with', 'Still smiling over this day. So grateful for it.'],
  ['Little moments in life somememories', "It's the small moments that turn into the biggest memories."],
  ['Today and always be with yours', 'Thankful for every page and every chapter with you and me.'],
]
const reasons = ['Your beautiful smile', 'The way you make ordinary days special', 'Your kindness and caring heart', 'How you make me laugh', 'Simply being you', 'The happiness you bring into my life']
const promises = ['I will always listen to you.', 'I will celebrate your little victories.', 'I will stand beside you through hard days.', 'I will keep finding reasons to make you smile.']
const dreams = ['A trip to our dream destination', 'Watching sunsets together', 'Collecting a thousand more memories', 'Making our little dreams come true']
const gallery = [
  ['Our favourite memory in Lifeful', '/images/photo-1.jpg'],
  ['A day to remember with enjoying moment', '/images/photo-2.jpg'],
  ['Your beautiful smile on Heart😘', '/images/photo-3.jpg'],
  ['A little moment in Life', '/images/photo-4.jpg'],
  ['My happy place in Temple', '/images/photo-5.jpg'],
  ['Always special for heart', '/images/photo-6.jpg'],
]

export default function BirthdaySections() {
  const [letterOpen, setLetterOpen] = useState(false)
  const [giftOpen, setGiftOpen] = useState(false)
  const [cakeLit, setCakeLit] = useState(true)
  const [celebrate, setCelebrate] = useState(false)
  const [secretOpen, setSecretOpen] = useState(false)
  const { width, height } = useWindowSize()

  const startCelebration = () => {
    setCelebrate(true)
    setCakeLit(false)
    window.setTimeout(() => setCelebrate(false), 6500)
  }

  return <>
    <Section id="welcome" className="hero-section">
      <div className="hero-glow glow-one" /><div className="hero-glow glow-two" />
      <Reveal className="hero-content">
        <span className="pill"><Flower2 size={15} /> a little surprise for you</span>
        <p className="script-line">To the sweetest person in my world</p>
        <h1>Happy Birthday,<br /><em>{name}</em><span className="hero-heart">♡</span></h1>
        <p className="hero-copy">Today is all about celebrating you — your smile, your heart, and all the beautiful things that make you, you.</p>
        <a className="primary-button" href="#wishes">Open your surprise <Heart size={17} fill="currentColor" /></a>
        <a className="scroll-hint" href="#countdown"><ArrowDown size={16} /> scroll to explore</a>
      </Reveal>
      <div className="hero-deco deco-flower">✿</div><div className="hero-deco deco-heart">♡</div><div className="hero-deco deco-sparkle">✧</div>
    </Section>

    <Section id="countdown" className="soft-section">
      <Heading eyebrow="the special day" title="A day made for you" subtitle="Counting every moment until we celebrate you." />
      <Countdown />
      <p className="tiny-note">Update the birthday date in <code></code><p></p> to make the countdown yours.</p>
    </Section>

    <Section id="wishes" className="wishes-section">
      <div className="wish-card"><span className="big-quote">“</span><p className="script-line">A wish from my heart</p><h2>May your day be as lovely as your soul.</h2><p>May this new year bring you endless laughter, peaceful days, exciting adventures and every little thing your heart has been wishing for. You deserve all the happiness in the world.</p><span className="signature">With all my love ♡</span></div>
    </Section>

    <Section id="story">
      <Heading eyebrow="chapter by chapter" title="Our little story" subtitle="Some moments become memories. Some people become home." />
      <div className="timeline">{memories.map(([title, text], i) => <Reveal className={`timeline-item ${i % 2 ? 'right' : ''}`} key={title}><span className="timeline-number">0{i + 1}</span><div className="memory-card"><span className="memory-date">A MOMENT TO KEEP</span><h3>{title}</h3><p>{text}</p></div></Reveal>)}</div>
    </Section>

    <Section id="timeline" className="soft-section">
      <Heading eyebrow="little things, big feelings" title="Moments I want to keep" subtitle="A few pages from our favourite story. Replace these with your real dates and memories." />
      <div className="memory-grid">{['The first hello', 'Our longest laugh', 'A perfect day', 'A memory I replay'].map((t, i) => <Reveal className="memory-tile" key={t}><span className="tile-icon">{['♡', '✿', '☀', '✧'][i]}</span><h3>{t}</h3><p>{['The start of something wonderful.', 'A laugh I wish I could save forever.', 'A simple day that meant everything.', 'One of my favourite little chapters.'][i]}</p></Reveal>)}</div>
    </Section>

    <Section id="gallery">
      <Heading eyebrow="captured happiness" title="Our photo gallery" subtitle="A few snapshots that hold a thousand feelings." />
      <div className="gallery-grid">{gallery.map(([caption, src], i) => <Reveal className={`photo-card photo-${i + 1}`} key={src}><div className="photo-frame"><img src={src} alt={caption} onError={e => { e.currentTarget.style.display = 'none' }} /><div className="photo-placeholder"><Camera size={28} /><span>Add your photo</span></div></div><p>{caption}</p></Reveal>)}</div>
      <p className="tiny-note"> <code></code></p>
    </Section>

    <Section id="reasons" className="soft-section">
      <Heading eyebrow="a little list from my heart" title="Reasons I adore you" subtitle="There are a million, but here are a few to start with." />
      <div className="reason-grid">{reasons.map((r, i) => <Reveal className="reason-card" key={r}><span>{String(i + 1).padStart(2, '0')}</span><Heart size={19} fill="currentColor" /><h3>{r}</h3></Reveal>)}</div>
    </Section>

    <Section id="letter" className="letter-section">
      <Heading eyebrow="written just for you" title="A letter from me to you" subtitle="There are things that deserve more than a quick message." />
      <motion.button className="envelope" whileHover={{ y: -7, rotate: -1 }} whileTap={{ scale: .97 }} onClick={() => setLetterOpen(v => !v)}>
        <Mail size={46} /><span>{letterOpen ? 'Close your letter' : 'Tap to open your letter'}</span><Heart size={22} fill="currentColor" />
      </motion.button>
      <AnimatePresence>{letterOpen && <motion.div className="letter-paper" initial={{ opacity: 0, y: 20, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10 }}><p className="script-line">My dearest {name},</p><p>Happy birthday, my love. I hope you know how special you are to me. Thank you for being the person whose smile can make my day brighter and enjoyed me. I wish you courage for every dream, peace in every moment and happiness in every little thing.and my one of his for you only.Naa Epothum unnaku tha nee epothum ennaku my Kuttachiiiii🤗🌍</p><p>May we create many more beautiful memories together. Today and always, I am cheering for you.</p><p className="signature">Forever sending you love, ♡</p></motion.div>}</AnimatePresence>
    </Section>

    
<Section id="moments" className="soft-section">
  <Heading
    eyebrow="press play on a memory"
    title="Our favourite moments"
    subtitle="Every second with you is a beautiful memory. ❤️"
  />

  <div style={{
    maxWidth: '750px',
    margin: '30px auto',
    padding: '12px',
    background: '#fff',
    borderRadius: '22px',
    boxShadow: '0 8px 30px rgba(220, 100, 150, 0.15)'
  }}>
    <video
      controls
      playsInline
      preload="metadata"
      style={{
        width: '100%',
        display: 'block',
        borderRadius: '16px'
      }}
    >
      <source
        src="/videos/our-moments.mp4"
        type="video/mp4"
      />
      Your browser does not support video playback.
    </video>
  </div>

  <p style={{ textAlign: 'center' }}>
    A little collection of memories made with you. 💗
  </p>
</Section>


    <Section id="promises">
      <Heading eyebrow="little promises, lots of love" title="Promises from my heart" subtitle="Not just words for today, but intentions for all our tomorrows." />
      <div className="promise-grid">{promises.map((p, i) => <Reveal className="promise-card" key={p}><Heart size={21} /><p>{p}</p><span>Promise {i + 1}</span></Reveal>)}</div>
    </Section>

    <Section id="gift" className="gift-section soft-section">
      <Heading eyebrow="something special" title="A little gift for you" subtitle="There is a surprise waiting inside. Are you ready?" />
      <motion.button className="gift-box" onClick={() => setGiftOpen(v => !v)} whileHover={{ scale: 1.05, rotate: 2 }} whileTap={{ scale: .95 }}><Gift size={70} /><span>{giftOpen ? 'Your gift is open!' : 'Tap to unwrap'}</span></motion.button>
      <AnimatePresence>{giftOpen && <motion.div className="gift-message" initial={{ opacity: 0, scale: .8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}><Sparkles /><h3>The best gift is having you in my life.</h3><p>And this little website is just one tiny way to remind you and we make trip with enjoyful moments and I have Suprise for You. ♡</p></motion.div>}</AnimatePresence>
    </Section>

    <Section id="cake" className="cake-section">
      <Heading eyebrow="make a birthday wish" title="Your birthday cake" subtitle="Close your eyes, make a wish, and tap the button." />
      <div className="cake-art" aria-label="Illustration of a birthday cake"><div className="candles">{[0, 1, 2].map(n => <span className="candle" key={n}><i className={cakeLit ? 'flame' : 'flame off'} /></span>)}</div><div className="cake-top" /><div className="cake-middle" /><div className="cake-bottom" /><div className="cake-plate" /></div>
      <button className="primary-button" onClick={startCelebration}><Cake size={18} /> {cakeLit ? 'Blow out the candles' : 'Celebrate again!'}</button>
      {!cakeLit && <p className="cake-wish">May every wish you make find its way to you. ✨</p>}
      {celebrate && <Confetti width={width} height={height} numberOfPieces={260} recycle={false} />}
    </Section>

    <Section id="dreams" className="soft-section">
      <Heading eyebrow="someday, together" title="Dreams for tomorrow" subtitle="A little wishlist of beautiful things still waiting for us." />
      <div className="dream-list">{dreams.map((d, i) => <Reveal className="dream-item" key={d}><MapPin size={19} /><span>{d}</span><Star size={16} /></Reveal>)}</div>
    </Section>

    <Section id="secret">
      <Heading eyebrow="psst… one last thing" title="A tiny secret" subtitle="Some surprises are meant to be discovered." />
      <button className="secret-heart" onClick={() => setSecretOpen(v => !v)}><LockKeyhole size={25} /><span>{secretOpen ? 'A little secret for you' : 'Tap the heart to unlock'}</span><Heart size={40} fill="currentColor" /></button>
      <AnimatePresence>{secretOpen && <motion.div className="secret-message" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}><h3>If I could choose again,</h3><p>I would still choose every laugh, every conversation and every beautiful moment that brought us here. You are my favourite person. ♡</p></motion.div>}</AnimatePresence>
    </Section>

    <Section id="surprise" className="final-section">
      <div className="final-glow" />
      <Reveal className="final-content"><span className="final-star">✧</span><p className="script-line">and before you go…</p><h2>Happy Birthday,<br /><em>my favourite person.</em></h2><p>May your life always be filled with love, laughter, magic and everything beautiful. Thank you for being you.</p><div className="final-heart"><Heart size={48} fill="currentColor" /></div><span className="signature">Made with all my love ♡</span></Reveal>
    </Section>
  </>
}
