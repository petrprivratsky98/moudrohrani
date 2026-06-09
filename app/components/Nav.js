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
    if (!menuOpen) return
    const close = () => setMenuOpen(false)
    window.addEventListener('scroll', close, {once: true, passive: true})
    return () => window.removeEventListener('scroll', close)
  }, [menuOpen])

  const links = [
    {href: '#o-skolce', label: 'O školce'},
    {href: '#program',  label: 'Program'},
    {href: '#rozvrh',   label: 'Rozvrh'},
    {href: '#tym',      label: 'Tým'},
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
        boxShadow: (scrolled || menuOpen)
          ? '0 2px 16px rgba(40,30,10,0.1)'
          : '0 1px 0 rgba(40,30,10,0.06)',
        transition: 'box-shadow 0.3s',
      }}>
        <a href="#" onClick={() => setMenuOpen(false)} style={{
          textDecoration: 'none', display: 'flex', alignItems: 'center', flexShrink: 0,
        }}>
          <Image
            src="/logo-text.png"
            alt="Moudrohraní"
            height={36}
            width={198}
            style={{height: 'clamp(26px, 2.6vw, 36px)', width: 'auto'}}
            priority
          />
        </a>

        {/* Desktop links */}
        <div style={{display: 'flex', gap: 'clamp(20px, 2.5vw, 40px)', alignItems: 'center'}}
          className="nav-desktop">
          {links.map(l => (
            <a key={l.href} href={l.href}
              {...(l.external ? {target: '_blank', rel: 'noopener noreferrer'} : {})}
              style={{
                fontSize: 13, fontWeight: 700, letterSpacing: '0.08em',
                textTransform: 'uppercase', textDecoration: 'none',
                color: l.external ? C.orange : C.ink,
                whiteSpace: 'nowrap',
              }}>{l.label}</a>
          ))}
          <a href="#kontakt" style={{
            fontSize: 13, fontWeight: 800, letterSpacing: '0.06em',
            textTransform: 'uppercase', padding: '10px 22px', borderRadius: 100,
            background: C.orange, color: C.white, textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}>Mám zájem ↗</a>
        </div>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '8px 4px', display: 'flex', flexDirection: 'column',
            gap: 5, justifyContent: 'center',
          }}
        >
          <span style={{
            display: 'block', width: 24, height: 2, borderRadius: 2,
            background: C.ink, transition: 'transform 0.25s, opacity 0.25s',
            transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
          }}/>
          <span style={{
            display: 'block', width: 24, height: 2, borderRadius: 2,
            background: C.ink, transition: 'opacity 0.25s',
            opacity: menuOpen ? 0 : 1,
          }}/>
          <span style={{
            display: 'block', width: 24, height: 2, borderRadius: 2,
            background: C.ink, transition: 'transform 0.25s, opacity 0.25s',
            transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
          }}/>
        </button>
      </nav>

      {/* Dropdown */}
      <div className={`nav-dropdown${menuOpen ? ' open' : ''}`}>
        <div style={{padding: '4px clamp(20px, 5vw, 64px) 20px'}}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
              {...(l.external ? {target: '_blank', rel: 'noopener noreferrer'} : {})}
              style={{
                display: 'block',
                fontSize: 16, fontWeight: 700,
                color: l.external ? C.orange : C.ink,
                textDecoration: 'none',
                padding: '13px 0',
                borderBottom: `1px solid ${C.ink}0d`,
                letterSpacing: '-0.01em',
              }}>{l.label}</a>
          ))}
          <a href="#kontakt" onClick={() => setMenuOpen(false)} style={{
            display: 'inline-flex', alignItems: 'center',
            marginTop: 18, padding: '13px 28px', borderRadius: 100,
            background: C.orange, color: C.white,
            fontSize: 13, fontWeight: 800,
            textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em',
          }}>Mám zájem ↗</a>
        </div>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div onClick={() => setMenuOpen(false)} style={{
          position: 'fixed', inset: 0, top: 68, zIndex: 498,
          background: 'rgba(40,30,10,0.12)',
        }}/>
      )}

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
    </>
  )
}
