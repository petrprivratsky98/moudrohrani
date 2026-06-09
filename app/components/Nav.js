'use client'
import {useState, useEffect} from 'react'
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
    {href: '#program', label: 'Program'},
    {href: '#rozvrh', label: 'Rozvrh'},
    {href: '#kontakt', label: 'Kontakt'},
  ]

  const linkStyle = {
    fontSize: 13, fontWeight: 700, letterSpacing: '0.1em',
    textTransform: 'uppercase', textDecoration: 'none', cursor: 'pointer',
    color: scrolled ? C.ink : C.cream,
    textShadow: scrolled ? 'none' : '0 1px 6px rgba(0,0,0,0.3)',
    transition: 'color 0.3s',
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
        padding: '16px clamp(24px, 5vw, 80px)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        backdropFilter: scrolled || menuOpen ? 'blur(14px)' : 'none',
        background: scrolled ? `${C.cream}ee` : menuOpen ? `${C.dark}ee` : 'transparent',
        borderBottom: scrolled ? `1px solid ${C.ink}15` : '1px solid transparent',
        transition: 'all 0.3s',
      }}>
        <a href="#" onClick={() => setMenuOpen(false)} style={{
          textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1.15,
        }}>
          <span style={{
            fontSize: 'clamp(18px, 1.6vw, 26px)', fontWeight: 900,
            letterSpacing: '-0.02em',
            color: scrolled ? C.ink : C.cream,
            textShadow: scrolled ? 'none' : '0 2px 12px rgba(0,0,0,0.35)',
            transition: 'color 0.3s',
          }}>Moudrohraní</span>
          <span style={{
            fontSize: 'clamp(9px, 0.72vw, 11px)', fontWeight: 600,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: scrolled ? C.ink : C.cream, opacity: 0.75,
            transition: 'color 0.3s',
          }}>Anglicko-česká školička</span>
        </a>

        {/* Desktop */}
        <div style={{display: 'flex', gap: 'clamp(24px, 3vw, 48px)', alignItems: 'center'}}
          className="nav-desktop">
          {links.map(l => (
            <a key={l.href} href={l.href} style={linkStyle}>{l.label}</a>
          ))}
          <a href="#kontakt" style={{
            fontSize: 13, fontWeight: 800, letterSpacing: '0.08em',
            textTransform: 'uppercase', padding: '10px 22px', borderRadius: 100,
            background: C.coral, color: C.cream, textDecoration: 'none',
            boxShadow: scrolled ? 'none' : '0 4px 20px rgba(0,0,0,0.18)',
            transition: 'all 0.3s',
          }}>Chci místo ↗</a>
        </div>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
          style={{zIndex: 501, background: 'none', border: 'none', cursor: 'pointer', padding: 4}}
        >
          <svg width="26" height="18" viewBox="0 0 26 18" fill="none">
            <rect y="0"    width="26" height="2.5" rx="1.25" fill={menuOpen ? C.cream : scrolled ? C.ink : C.cream}
              style={{transition: 'all 0.3s', transformOrigin: '13px 1.25px',
                transform: menuOpen ? 'rotate(45deg) translate(0,7px)' : 'none'}}/>
            <rect y="7.75" width="26" height="2.5" rx="1.25" fill={menuOpen ? C.cream : scrolled ? C.ink : C.cream}
              style={{transition: 'all 0.3s', opacity: menuOpen ? 0 : 1}}/>
            <rect y="15.5" width="26" height="2.5" rx="1.25" fill={menuOpen ? C.cream : scrolled ? C.ink : C.cream}
              style={{transition: 'all 0.3s', transformOrigin: '13px 16.75px',
                transform: menuOpen ? 'rotate(-45deg) translate(0,-7px)' : 'none'}}/>
          </svg>
        </button>
      </nav>

      {/* Mobile overlay */}
      <div className={`nav-mobile-overlay${menuOpen ? ' open' : ''}`}>
        <div style={{display: 'flex', flexDirection: 'column', gap: 4, flex: 1}}>
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              fontSize: 'clamp(28px, 7vw, 48px)', fontWeight: 800, color: C.cream,
              textDecoration: 'none', lineHeight: 1.3, letterSpacing: '-0.02em',
              padding: '8px 0', borderBottom: `1px solid ${C.cream}12`,
            }}>{l.label}</a>
          ))}
        </div>
        <a href="#kontakt" onClick={() => setMenuOpen(false)} style={{
          display: 'inline-flex', alignItems: 'center', gap: 12, marginTop: 32,
          padding: '18px 36px', borderRadius: 100, background: C.coral,
          color: C.cream, fontSize: 16, fontWeight: 800,
          textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.08em',
        }}>Chci místo ↗</a>
      </div>
    </>
  )
}
