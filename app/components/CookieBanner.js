'use client'
import {useState, useEffect} from 'react'
import {C} from './Colors'

const STORAGE_KEY = 'moudrohrani-cookie-consent'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'ok')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', left: 0, right: 0, bottom: 0, zIndex: 600,
      padding: 'clamp(16px,3vw,24px)',
    }}>
      <div style={{
        maxWidth: 900, margin: '0 auto',
        background: C.ink, borderRadius: 16,
        padding: 'clamp(18px,2.5vw,24px) clamp(20px,3vw,28px)',
        display: 'flex', flexWrap: 'wrap', alignItems: 'center',
        gap: 'clamp(14px,2vw,24px)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
      }}>
        <p style={{
          flex: '1 1 320px', margin: 0,
          fontSize: 'clamp(13px,1vw,14px)', color: 'rgba(255,255,255,0.75)',
          lineHeight: 1.6,
        }}>
          Tento web používá pouze technicky nezbytné soubory cookie potřebné
          pro jeho základní fungování (např. odeslání kontaktního formuláře).
          Nepoužíváme žádné analytické ani marketingové sledování.
        </p>
        <button onClick={accept} style={{
          flexShrink: 0,
          padding: '12px 28px', borderRadius: 100, border: 'none',
          background: C.orange, color: C.white,
          fontSize: 14, fontWeight: 800,
          textTransform: 'uppercase', letterSpacing: '0.08em',
          cursor: 'pointer',
        }}>Rozumím</button>
      </div>
    </div>
  )
}
