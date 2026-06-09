import {C} from './Colors'

const members = [
  {name: 'Šimona Rybárová',    role: 'Manažerka',                      color: C.orange},
  {name: 'Ema Pantie',         role: 'Pečovatelka a manažerka',         color: C.amber},
  {name: 'Megan Ramsay',       role: 'Hlavní lektorka — angličtina',    color: C.green},
  {name: 'Radka Sailerová',    role: 'Pečovatelka',                     color: C.sky},
  {name: 'Monika Veisová',     role: 'Pečovatelka',                     color: C.coral},
  {name: 'Andrea Huserová',    role: 'Pečovatelka',                     color: C.amber},
  {name: 'Kateřina Korandová', role: 'Pečovatelka',                     color: C.green},
]

function initials(name) {
  return name.split(' ').map(p => p[0]).join('')
}

export function Tym() {
  return (
    <section id="tym" style={{
      padding: 'clamp(80px,10vw,128px) clamp(24px,5vw,80px)',
      background: C.cream,
    }}>
      <div style={{maxWidth: 1200, margin: '0 auto'}}>
        <div style={{marginBottom: 'clamp(48px,5vw,64px)'}}>
          <div style={{fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.orange, marginBottom: 16}}>Náš tým</div>
          <h2 style={{
            fontSize: 'clamp(32px,4vw,56px)', fontWeight: 900,
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
          {members.map(({name, role, color}) => (
            <div key={name} style={{
              display: 'flex', alignItems: 'center', gap: 20,
              background: C.white,
              borderRadius: 16,
              padding: '20px 24px',
              boxShadow: '0 1px 0 rgba(40,30,10,0.06)',
            }}>
              <div style={{
                width: 58, height: 58, borderRadius: '50%', flexShrink: 0,
                background: `${color}22`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 16, fontWeight: 800, color: color,
                letterSpacing: '-0.02em',
              }}>
                {initials(name)}
              </div>
              <div>
                <div style={{fontSize: 16, fontWeight: 800, color: C.ink, letterSpacing: '-0.01em', marginBottom: 4}}>{name}</div>
                <div style={{fontSize: 13, color: C.muted, fontWeight: 500}}>{role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
