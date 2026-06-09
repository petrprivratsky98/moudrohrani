'use client'
import {useState, useEffect} from 'react'
import Image from 'next/image'
import {C} from './Colors'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, {passive: true})
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    {href: '#o-skolce', label: 'O školce'},
    {href: '#program',  label: 'Program'},
    {href: '#rozvrh',   label: 'Rozvrh'},
    {href: '#kontakt',  label: 'Kontakt'},
    {href: 'https://moudrohrani.webooker.eu/flutter/', label: 'Rezervační systém', external: true},
  ]

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        padding: '0 clamp(20px, 5vw, 64px)',
        height: 68,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: C.white,
        boxShadow: scrolled ? '0 2px 16px rgba(40,30,10,0.08)' : '0 1px 0 rgba(40,30,10,0.06)',
        transition: 'box-shadow 0.3s',
      }}>
        <a href="#" onClick={() => setMenuOpen(false)} style={{
          textDecoration: 'none', display: 'flex', alignItems: 'center',
        }}>
          <Image
            src="/logo-text.png"
            alt="Moudrohraní"
            height={36}
            width={198}
            style={{height: 'clamp(28px, 2.6vw, 36px)', width: 'auto'}}
            priority
          />
        </a>

        {/* Desktop */}
        <div style={{display: 'flex', gap: 'clamp(20px, 2.5vw, 40px)', alignItems: 'center'}}
          className="nav-desktop">
          {links.map(l => (
            <a key={l.href} href={l.href}
              {...(l.external ? {target: '_blank', rel: 'noopener noreferrer'} : {})}
              style={{
                fontSize: 13, fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', textDecoration: 'none',
                color: l.external ? C.orange : C.ink,
              }}>{l.label}</a>
          ))}
          <a href="#kontakt" style={{
            fontSize: 13, fontWeight: 800, letterSpacing: '0.06em',
            textTransform: 'uppercase', padding: '10px 22px', borderRadius: 100,
            background: C.orange, color: C.white, textDecoration: 'none',
          }}>Mám zájem ↗</a>
        </div>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
          style={{background: 'none', border: 'none', cursor: 'pointer', padding: 4, zIndex: 501}}
        >
          <svg width="26" height="18" viewBox="0 0 26 18" fill="none">
            <rect y="0"    width="26" height="2.5" rx="1.25" fill={menuOpen ? C.white : C.ink}
              style={{transition: 'all 0.3s', transformOrigin: '13px 1.25px',
                transform: menuOpen ? 'rotate(45deg) translate(0,7px)' : 'none'}}/>
            <rect y="7.75" width="26" height="2.5" rx="1.25" fill={menuOpen ? C.white : C.ink}
              style={{transition: 'all 0.3s', opacity: menuOpen ? 0 : 1}}/>
            <rect y="15.5" width="26" height="2.5" rx="1.25" fill={menuOpen ? C.white : C.ink}
              style={{transition: 'all 0.3s', transformOrigin: '13px 16.75px',
                transform: menuOpen ? 'rotate(-45deg) translate(0,-7px)' : 'none'}}/>
          </svg>
        </button>
      </nav>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        aria-label="Zpět nahoru"
        style={{
          position: 'fixed', bottom: 32, right: 32, zIndex: 400,
          width: 48, height: 48, borderRadius: '50%',
          background: C.orange, border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(40,30,10,0.18)',
          opacity: scrolled ? 1 : 0,
          pointerEvents: scrolled ? 'auto' : 'none',
          transition: 'opacity 0.3s',
        }}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 14V4M9 4L4 9M9 4l5 5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Mobile overlay */}
      <div className={`nav-mobile-overlay${menuOpen ? ' open' : ''}`}>
        <div style={{display: 'flex', flexDirection: 'column', gap: 4, flex: 1}}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              {...(l.external ? {target: '_blank', rel: 'noopener noreferrer'} : {})}
              style={{
                fontSize: 'clamp(22px, 6vw, 40px)', fontWeight: 800,
                color: l.external ? C.amber : C.white,
                textDecoration: 'none', lineHeight: 1.3, letterSpacing: '-0.02em',
                padding: '8px 0', borderBottom: `1px solid rgba(255,255,255,0.12)`,
              }}>{l.label}</a>
          ))}
        </div>
        <a href="#kontakt" onClick={() => setMenuOpen(false)} style={{
          display: 'inline-flex', alignItems: 'center', gap: 12, marginTop: 32,
          padding: '18px 36px', borderRadius: 100, background: C.orange,
          color: C.white, fontSize: 16, fontWeight: 800,
          textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em',
        }}>Mám zájem ↗</a>
      </div>
    </>
  )
}
