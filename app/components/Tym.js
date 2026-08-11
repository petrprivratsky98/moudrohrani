'use client'
import {useState} from 'react'
import Image from 'next/image'
import {C} from './Colors'

const members = [
  {name: 'Šimona Rybárová',    role: 'Manažerka',                      color: C.orange, photo: '/tym/simona.jpg'},
  {name: 'Ema Pantie',         role: 'Pečovatelka a manažerka',         color: C.amber,  photo: '/tym/ema.jpg'},
  {name: 'Megan Ramsay',       role: 'Hlavní lektorka — angličtina',    color: C.green,  photo: '/tym/megan.jpg'},
  {name: 'Radka Sailerová',    role: 'Pečovatelka',                     color: C.sky,    photo: '/tym/radka.jpg'},
  {name: 'Monika Veisová',     role: 'Pečovatelka',                     color: C.coral,  photo: '/tym/monika.jpg'},
  {name: 'Andrea Huserová',    role: 'Pečovatelka',                     color: C.amber,  photo: '/tym/andrea.jpg'},
  {name: 'Kateřina Korandová', role: 'Pečovatelka',                     color: C.green,  photo: '/tym/katerina.jpg'},
]

function initials(name) {
  return name.split(' ').map(p => p[0]).join('')
}

// Fotka, pokud existuje a načte se; jinak tiše spadne na kolečko s iniciálami.
function Avatar({name, photo, color}) {
  const [broken, setBroken] = useState(false)

  if (photo && !broken) {
    return (
      <div style={{
        width: 58, height: 58, borderRadius: '50%', flexShrink: 0,
        position: 'relative', overflow: 'hidden',
        background: `${color}22`,
      }}>
        <Image
          src={photo}
          alt={name}
          fill
          sizes="58px"
          style={{objectFit: 'cover'}}
          onError={() => setBroken(true)}
        />
      </div>
    )
  }

  return (
    <div style={{
      width: 58, height: 58, borderRadius: '50%', flexShrink: 0,
      background: `${color}22`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 16, fontWeight: 800, color: color,
      letterSpacing: '-0.02em',
    }}>
      {initials(name)}
    </div>
  )
}

export function Tym() {
  return (
    <section id="tym" style={{
      padding: 'clamp(80px,10vw,128px) clamp(24px,5vw,80px)',
      background: C.cream,
    }}>
      <div style={{maxWidth: 1320, margin: '0 auto'}}>
        <div style={{marginBottom: 'clamp(48px,5vw,64px)'}}>
          <div style={{fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.orange, marginBottom: 16}}>Náš tým</div>
          <h2 style={{
            fontSize: 'clamp(32px,4vw,62px)', fontWeight: 900,
            color: C.ink, letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0,
          }}>
            Lidé, kteří se starají<br/>o vaše děti.
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(260px,100%),1fr))',
          gap: 'clamp(24px,3vw,40px)',
        }}>
          {members.map(({name, role, color, photo}) => (
            <div key={name} style={{
              display: 'flex', alignItems: 'center', gap: 20,
              background: C.white,
              borderRadius: 16,
              padding: '20px 24px',
              boxShadow: '0 1px 0 rgba(40,30,10,0.06)',
            }}>
              <Avatar name={name} photo={photo} color={color} />
              <div>
                <div style={{fontSize: 'clamp(16px,1.1vw,17px)', fontWeight: 800, color: C.ink, letterSpacing: '-0.01em', marginBottom: 4}}>{name}</div>
                <div style={{fontSize: 'clamp(13px,0.9vw,14px)', color: C.muted, fontWeight: 500}}>{role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
