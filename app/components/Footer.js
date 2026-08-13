import Image from 'next/image'
import {C} from './Colors'

const socials = [
  {href: 'https://www.facebook.com/moudrohrani', src: '/fb.png', alt: 'Facebook'},
]

export function Footer() {
  return (
    <footer style={{background: C.ink, padding: 'clamp(48px,6vw,80px) clamp(24px,5vw,80px)'}}>
      <div style={{maxWidth: 1320, margin: '0 auto'}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(240px,100%),1fr))', gap: 'clamp(32px,4vw,64px)', marginBottom: 48}}>
          <div>
            <div style={{fontSize: 'clamp(20px,1.8vw,29px)', fontWeight: 900, color: C.orange, marginBottom: 6, letterSpacing: '-0.02em'}}>
              Moudrohraní
            </div>
            <div style={{fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: `${C.white}44`, marginBottom: 16}}>
              Dětská skupina · Praha 6
            </div>
            <p style={{fontSize: 'clamp(14px,1vw,15px)', color: `${C.white}66`, lineHeight: 1.7, margin: '0 0 14px', maxWidth: 280}}>
              Respektující dětská skupina pro děti od 1,5 do 3 let v srdci pražské Hanspaulky.
            </p>
            <p style={{fontSize: 12, color: `${C.white}44`, margin: 0}}>
              Moudrohraní z. s. · IČO 10799427
            </p>
          </div>
          <div>
            <div style={{fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: `${C.white}33`, marginBottom: 16}}>Navigace</div>
            {['Citlivá adaptace', 'Proč Moudrohraní', 'Program', 'Náš rytmus', 'Tým', 'Přijďte se podívat', 'Kontakt'].map((l, i) => (
              <a key={i} href={`#${['citliva-adaptace','proc-moudrohrani','program','rozvrh','tym','prijdte-se-podivat','kontakt'][i]}`} style={{
                display: 'block', fontSize: 'clamp(14px,1vw,15px)', color: `${C.white}77`, textDecoration: 'none',
                marginBottom: 10, fontWeight: 500,
              }}>{l}</a>
            ))}
          </div>
          <div>
            <div style={{fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: `${C.white}33`, marginBottom: 16}}>Kontakt</div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 10}}>
              {[
                {label: 'Telefon', val: '+420 777 009 121',          href: 'tel:+420777009121'},
                {label: 'Email',   val: 'info@moudrohrani.cz',      href: 'mailto:info@moudrohrani.cz'},
                {label: 'Adresa',  val: 'Na Pískách 1175/71, Praha 6'},
              ].map(({label, val, href}) => (
                <div key={label}>
                  <div style={{fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: `${C.white}33`, marginBottom: 2}}>{label}</div>
                  {href
                    ? <a href={href} style={{fontSize: 'clamp(14px,1vw,15px)', color: `${C.white}77`, textDecoration: 'none'}}>{val}</a>
                    : <div style={{fontSize: 'clamp(14px,1vw,15px)', color: `${C.white}77`}}>{val}</div>
                  }
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{height: 1, background: `${C.white}10`, marginBottom: 24}}/>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12}}>
          <span style={{fontSize: 12, color: `${C.white}33`}}>© {new Date().getFullYear()} Moudrohraní. Všechna práva vyhrazena.</span>
          <div style={{display: 'flex', alignItems: 'center', gap: 16}}>
            {socials.map(({href, src, alt}) => (
              <a key={alt} href={href} target="_blank" rel="noopener noreferrer"
                style={{opacity: 0.4, transition: 'opacity 0.2s'}}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0.4'}
              >
                <Image src={src} alt={alt} width={20} height={20} style={{display: 'block'}} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
