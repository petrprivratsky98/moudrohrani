import {C} from './Colors'

export function Footer() {
  return (
    <footer style={{background: C.dark, padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,80px)'}}>
      <div style={{maxWidth: 1200, margin: '0 auto'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(240px,100%),1fr))', gap: 'clamp(32px,4vw,64px)', marginBottom: 48}}>
          <div>
            <div style={{fontSize: 'clamp(20px,1.8vw,28px)', fontWeight: 900, color: C.cream, marginBottom: 8, letterSpacing: '-0.02em'}}>
              Moudrohraní
            </div>
            <div style={{fontSize: 12, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: `${C.cream}55`, marginBottom: 16}}>
              Anglicko-česká školička
            </div>
            <p style={{fontSize: 14, color: `${C.cream}77`, lineHeight: 1.7, margin: 0, maxWidth: 280}}>
              Místo, kde děti rostou v angličtině, kreativitě a radosti — v srdci pražské Hanspaulky.
            </p>
          </div>
          <div>
            <div style={{fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: `${C.cream}44`, marginBottom: 16}}>Navigace</div>
            {['O školce', 'Program', 'Rozvrh', 'Kontakt'].map((l, i) => (
              <a key={i} href={`#${['o-skolce','program','rozvrh','kontakt'][i]}`} style={{
                display: 'block', fontSize: 14, color: `${C.cream}88`, textDecoration: 'none',
                marginBottom: 10, fontWeight: 500,
              }}>{l}</a>
            ))}
          </div>
          <div>
            <div style={{fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: `${C.cream}44`, marginBottom: 16}}>Kontakt</div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
              {[
                {label: 'Email', val: 'ema@moudrohrani.cz', href: 'mailto:ema@moudrohrani.cz'},
                {label: 'Telefon', val: '777 009 121', href: 'tel:+420777009121'},
                {label: 'Adresa', val: 'Na Pískách 1175/71, Praha 6'},
              ].map(({label, val, href}) => (
                <div key={label}>
                  <div style={{fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: `${C.cream}33`, marginBottom: 2}}>{label}</div>
                  {href
                    ? <a href={href} style={{fontSize: 14, color: `${C.cream}88`, textDecoration: 'none'}}>{val}</a>
                    : <div style={{fontSize: 14, color: `${C.cream}88`}}>{val}</div>
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{height: 1, background: `${C.cream}10`, marginBottom: 24}}/>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8}}>
          <span style={{fontSize: 12, color: `${C.cream}33`}}>© {new Date().getFullYear()} Moudrohraní. Všechna práva vyhrazena.</span>
          <span style={{fontSize: 12, color: `${C.cream}22`}}>IČO: 10799427</span>
        </div>
      </div>
    </footer>
  )
}
