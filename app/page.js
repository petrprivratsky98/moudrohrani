'use client'
import {useState} from 'react'
import Image from 'next/image'
import {Nav} from './components/Nav'
import {Footer} from './components/Footer'
import {Tym} from './components/Tym'
import {C} from './components/Colors'

// ❋ 001 — Hero
function Hero() {
  const stats = [
    {num: 'od 18 měsíců', label: 'do 4 let věku'},
    {num: 'max. 10 dětí', label: 've skupině'},
    {num: '2 rodilí',     label: 'mluvčí'},
    {num: 'Po – Pá',      label: '8:00 – 16:00'},
  ]
  return (
    <section style={{
      minHeight: '100svh', position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center',
    }}>
      {/* Background photo */}
      <Image
        src="/uvod.jpeg"
        alt=""
        fill
        style={{objectFit: 'cover', objectPosition: 'center 30%'}}
        priority
      />

      {/* Gradient overlay — darker on left for text, lighter on right */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(100deg, rgba(30,20,5,0.82) 0%, rgba(30,20,5,0.55) 55%, rgba(30,20,5,0.25) 100%)',
      }}/>

      {/* Content */}
      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: 1200, margin: '0 auto', width: '100%',
        padding: 'clamp(100px,13vh,160px) clamp(24px,7vw,100px)',
      }}>
        <div style={{maxWidth: 620}}>
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: C.amber, marginBottom: 28,
          }}>Praha 6 — Hanspaulka</div>

          <h1 style={{
            fontSize: 'clamp(42px,5.8vw,80px)', fontWeight: 900,
            color: C.white, lineHeight: 1.0, letterSpacing: '-0.03em', marginBottom: 28,
          }}>
            Anglicko-česká<br/>školička<br/>
            <span style={{color: C.amber}}>v Hanspaulce.</span>
          </h1>

          <p style={{
            fontSize: 'clamp(17px,1.6vw,21px)', color: 'rgba(255,255,255,0.82)',
            lineHeight: 1.75, maxWidth: 460, marginBottom: 40,
          }}>
            Místo, kde se děti od 18 měsíců do 4 let učí anglicky,
            pohybují, tvoří a především radují.
          </p>

          <div style={{display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 56}}>
            <a href="#kontakt" style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '16px 32px', borderRadius: 100,
              background: C.orange, color: C.white,
              fontSize: 14, fontWeight: 800,
              textTransform: 'uppercase', letterSpacing: '0.1em',
              boxShadow: `0 6px 24px ${C.orange}55`,
              textDecoration: 'none',
            }}>Mám zájem ↗</a>
            <a href="#o-skolce" style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '16px 32px', borderRadius: 100,
              border: '2px solid rgba(255,255,255,0.35)', color: C.white,
              fontSize: 14, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.1em',
              textDecoration: 'none',
            }}>Zjistit víc</a>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'flex', gap: 0, flexWrap: 'wrap',
            borderTop: '1px solid rgba(255,255,255,0.2)',
            paddingTop: 28,
          }}>
            {stats.map(({num, label}, i) => (
              <div key={label} style={{
                paddingRight: i < stats.length - 1 ? 32 : 0,
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.2)' : 'none',
                marginRight: i < stats.length - 1 ? 32 : 0,
                marginBottom: 12,
              }}>
                <div style={{fontSize: 'clamp(17px,1.6vw,21px)', fontWeight: 800, color: C.white, letterSpacing: '-0.01em'}}>{num}</div>
                <div style={{fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.6)', marginTop: 4}}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ❋ 002 — O školce
function OShkolce() {
  const points = [
    {title: 'Angličtina přirozeně', text: 'Dva rodilí mluvčí jsou součástí každého dne — angličtina prostupuje hrou, příběhy i písničkami.'},
    {title: 'Malé skupiny', text: 'Maximálně 10 dětí ve skupině, vždy s plnou pozorností pedagoga.'},
    {title: 'Ekologický přístup', text: 'Spolupracujeme s firmou Econea, preferujeme přírodní materiály a pomůcky. Vedeme děti k úctě k přírodě.'},
    {title: 'Individuální přístup', text: 'Tým lektorů, kteří svou práci dělají s radostí a věnují dětem svou plnou pozornost.'},
  ]
  return (
    <section id="o-skolce" style={{
      padding: 'clamp(80px,10vw,128px) clamp(24px,5vw,80px)',
      background: C.white,
    }}>
      <div style={{maxWidth: 1200, margin: '0 auto'}}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(460px,100%),1fr))',
          gap: 'clamp(48px,6vw,96px)', alignItems: 'start',
        }}>
          <div>
            <div style={{fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.orange, marginBottom: 20}}>O školce</div>
            <h2 style={{
              fontSize: 'clamp(34px,4vw,58px)', fontWeight: 900,
              color: C.ink, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 28,
            }}>
              Jsme anglicko-česká školička<br/>pro děti od 18 měsíců do 4 let.
            </h2>
            <p style={{
              fontSize: 'clamp(17px,1.6vw,20px)', color: C.muted,
              lineHeight: 1.75, margin: 0,
            }}>
              Nacházíme se v klidném prostředí pražské Hanspaulky, blízko lesů a dětských hřišť.
              V případě zájmu vás rádi pozveme na ukázkový program zdarma, určený pro děti i rodiče.
            </p>
          </div>

          <div style={{display: 'flex', flexDirection: 'column', gap: 0}}>
            {points.map(({title, text}, i) => (
              <div key={title} style={{
                paddingTop: i === 0 ? 0 : 30,
                paddingBottom: i < points.length - 1 ? 30 : 0,
                borderBottom: i < points.length - 1 ? `1px solid ${C.ink}10` : 'none',
              }}>
                <div style={{
                  fontSize: 18, fontWeight: 800, color: C.ink,
                  marginBottom: 8, letterSpacing: '-0.01em',
                }}>{title}</div>
                <p style={{fontSize: 16, color: C.muted, lineHeight: 1.7, margin: 0}}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ❋ 003 — Program
function Program() {
  const items = [
    {num: '01', title: 'Anglický program',    text: 'Angličtina prostupuje celým dnem přirozenou formou. Pracujeme se dvěma rodilými mluvčími z USA a Austrálie.'},
    {num: '02', title: 'Jóga pro děti',       text: 'Pohybové a dechové aktivity přizpůsobené nejmenším. Rozvíjí koordinaci, pozornost a schopnost relaxace.'},
    {num: '03', title: 'Výtvarné tvoření',    text: 'Malování, modelování, koláže a práce s přírodními materiály. Volnost k vyjádření a rozvoj jemné motoriky.'},
    {num: '04', title: 'Hudba a rytmus',      text: 'Zpívání, rytmická cvičení a pohyb na hudbu v obou jazycích. Muzika je součástí každého dne.'},
    {num: '05', title: 'Rozvoj řeči',         text: 'Logopedická podpora a hry zaměřené na komunikaci. Pracujeme s dětmi individuálně i ve skupině.'},
    {num: '06', title: 'Emoční inteligence',  text: 'Učíme děti pojmenovat emoce, řešit konflikty a budovat zdravé a bezpečné vztahy s vrstevníky.'},
  ]
  return (
    <section id="program" style={{
      padding: 'clamp(80px,10vw,128px) clamp(24px,5vw,80px)',
      background: C.sand,
    }}>
      <div style={{maxWidth: 1200, margin: '0 auto'}}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          flexWrap: 'wrap', gap: 24, marginBottom: 'clamp(48px,5vw,64px)',
        }}>
          <div>
            <div style={{fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.orange, marginBottom: 16}}>Programové aktivity</div>
            <h2 style={{fontSize: 'clamp(32px,4vw,56px)', fontWeight: 900, color: C.ink, letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0}}>
              Co děti čeká každý den.
            </h2>
          </div>
          <p style={{fontSize: 18, color: C.muted, lineHeight: 1.65, maxWidth: 380, margin: 0}}>
            Certifikovaný program PlayWay pro výuku angličtiny doplňují pohybové, výtvarné a hudební aktivity.
          </p>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(340px,100%),1fr))', gap: 2}}>
          {items.map(({num, title, text}) => (
            <div key={num} style={{
              background: C.white,
              padding: 'clamp(28px,3vw,44px)',
            }}>
              <div style={{
                fontSize: 11, fontWeight: 700, letterSpacing: '0.15em',
                color: C.orange, marginBottom: 14,
              }}>{num}</div>
              <div style={{fontSize: 19, fontWeight: 800, color: C.ink, marginBottom: 12, letterSpacing: '-0.01em'}}>{title}</div>
              <p style={{fontSize: 16, color: C.muted, lineHeight: 1.7, margin: 0}}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ❋ 004 — Rozvrh
function Rozvrh() {
  const activities = [
    {time: '8:00 – 8:30',   label: 'Příchod dětí, volný program'},
    {time: '8:30 – 9:00',   label: 'Přivítání v kroužku'},
    {time: '9:00 – 9:45',   label: 'Program pro všestranný rozvoj, angličtina hravou formou'},
    {time: '9:45 – 10:15',  label: 'Svačina'},
    {time: '10:15 – 12:00', label: 'Venku — pohybové aktivity, jemná motorika, výtvarné činnosti'},
    {time: '12:00 – 12:30', label: 'Obědová pauza'},
    {time: '12:30 – 13:00', label: 'Odchod dětí z dopoledního programu'},
    {time: '13:00 – 15:00', label: 'Odpočinek, klidné aktivity'},
    {time: '15:00 – 15:30', label: 'Svačina'},
    {time: '15:30 – 16:00', label: 'Odchod domů'},
  ]
  return (
    <section id="rozvrh" style={{
      padding: 'clamp(80px,10vw,128px) clamp(24px,5vw,80px)',
      background: C.orange,
    }}>
      <div style={{maxWidth: 1200, margin: '0 auto'}}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(360px,100%),1fr))',
          gap: 'clamp(48px,6vw,80px)', alignItems: 'start',
        }}>
          <div>
            <div style={{fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 20}}>Rozvrh</div>
            <h2 style={{
              fontSize: 'clamp(32px,4vw,56px)', fontWeight: 900,
              color: C.white, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 28,
            }}>
              Jak probíhá<br/>každý den?
            </h2>
            <p style={{
              fontSize: 'clamp(17px,1.6vw,20px)', color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.75, marginBottom: 24, maxWidth: 400,
            }}>
              Program probíhá od pondělí do pátku od 8:00 do 13:00.
              V případě zájmu je možnost docházky do 16:00.
            </p>
            <p style={{
              fontSize: 16, color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.65, margin: '0 0 40px',
            }}>
              Časový harmonogram je orientační — přizpůsobujeme ho potřebám dětí a situaci.
            </p>
            <a href="#kontakt" style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '15px 30px', borderRadius: 100,
              background: C.white, color: C.orange,
              fontSize: 14, fontWeight: 800,
              textTransform: 'uppercase', letterSpacing: '0.1em',
              textDecoration: 'none',
            }}>Přijďte na návštěvu →</a>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.15)',
            borderRadius: 20, padding: 'clamp(24px,3vw,36px)',
          }}>
            {activities.map(({time, label}, i) => (
              <div key={time} style={{
                display: 'flex', gap: 20, alignItems: 'flex-start',
                paddingBottom: i < activities.length - 1 ? 18 : 0,
                borderBottom: i < activities.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                marginBottom: i < activities.length - 1 ? 18 : 0,
              }}>
                <div style={{
                  fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.65)',
                  minWidth: 104, paddingTop: 2, flexShrink: 0, letterSpacing: '0.02em',
                }}>{time}</div>
                <div style={{fontSize: 16, color: C.white, lineHeight: 1.45}}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ❋ 005 — Kontakt
function Kontakt() {
  const [form, setForm]   = useState({name: '', email: '', age: '', msg: ''})
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'ok' : 'err')
    } catch {
      setStatus('err')
    }
  }

  const inputStyle = {
    width: '100%', padding: '14px 18px', borderRadius: 10,
    border: `1.5px solid ${C.ink}15`, background: C.cream,
    fontSize: 16, color: C.ink, outline: 'none', fontFamily: 'inherit',
  }

  const labelStyle = {
    fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
    letterSpacing: '0.12em', color: C.muted,
  }

  return (
    <section id="kontakt" style={{
      padding: 'clamp(80px,10vw,128px) clamp(24px,5vw,80px)',
      background: C.white,
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px,100%),1fr))',
        gap: 'clamp(48px,6vw,80px)',
      }}>
        <div>
          <div style={{fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.orange, marginBottom: 20}}>Kontakt</div>
          <h2 style={{
            fontSize: 'clamp(32px,4vw,56px)', fontWeight: 900,
            color: C.ink, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 24,
          }}>
            Zajímá vás místo<br/>pro vaše dítě?
          </h2>
          <p style={{
            fontSize: 'clamp(16px,1.5vw,19px)', color: C.muted,
            lineHeight: 1.75, marginBottom: 48, maxWidth: 420,
          }}>
            Napište nám nebo zavolejte. Rádi vám školu ukážeme
            a zodpovíme všechny vaše otázky.
          </p>

          <div style={{display: 'flex', flexDirection: 'column', gap: 28}}>
            {[
              {label: 'Email',   val: 'ema@moudrohrani.cz',                      href: 'mailto:ema@moudrohrani.cz'},
              {label: 'Telefon', val: '777 009 121',                              href: 'tel:+420777009121'},
              {label: 'Adresa',  val: 'Na Pískách 1175/71, Praha 6 — Hanspaulka'},
              {label: 'IČO',     val: '10799427'},
            ].map(({label, val, href}) => (
              <div key={label}>
                <div style={{
                  fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
                  letterSpacing: '0.15em', color: C.muted, marginBottom: 5,
                }}>{label}</div>
                {href
                  ? <a href={href} style={{fontSize: 17, color: C.ink, fontWeight: 600}}>{val}</a>
                  : <div style={{fontSize: 17, color: C.ink, fontWeight: 600}}>{val}</div>
                }
              </div>
            ))}
          </div>
        </div>

        {status === 'ok' ? (
          <div style={{
            background: C.sand, borderRadius: 20, padding: 56,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 16,
          }}>
            <h3 style={{fontSize: 28, fontWeight: 800, color: C.ink, letterSpacing: '-0.02em', margin: 0}}>Zpráva odeslána.</h3>
            <p style={{fontSize: 18, color: C.muted, lineHeight: 1.65, maxWidth: 300, margin: 0}}>Ozveme se vám co nejdříve.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: 18}}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16}}>
              <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                <label style={labelStyle}>Jméno</label>
                <input type="text" required placeholder="Vaše jméno" value={form.name}
                  onChange={e => setForm(f => ({...f, name: e.target.value}))} style={inputStyle}/>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                <label style={labelStyle}>Věk dítěte</label>
                <input type="text" placeholder="Např. 2 roky" value={form.age}
                  onChange={e => setForm(f => ({...f, age: e.target.value}))} style={inputStyle}/>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
              <label style={labelStyle}>Email</label>
              <input type="email" required placeholder="vas@email.cz" value={form.email}
                onChange={e => setForm(f => ({...f, email: e.target.value}))} style={inputStyle}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
              <label style={labelStyle}>Zpráva</label>
              <textarea required rows={5} value={form.msg}
                placeholder="Zájem o místo, otázky, prohlídka..."
                onChange={e => setForm(f => ({...f, msg: e.target.value}))}
                style={{...inputStyle, resize: 'vertical'}}/>
            </div>
            {status === 'err' && (
              <p style={{fontSize: 14, color: C.coral, margin: 0}}>
                Odeslání se nezdařilo. Zkuste to znovu nebo napište přímo na email.
              </p>
            )}
            <button type="submit" disabled={status === 'sending'} style={{
              padding: '16px 32px', borderRadius: 100, border: 'none',
              background: C.orange, color: C.white,
              fontSize: 14, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em',
              cursor: status === 'sending' ? 'default' : 'pointer',
              opacity: status === 'sending' ? 0.7 : 1,
              boxShadow: `0 4px 20px ${C.orange}33`,
            }}>
              {status === 'sending' ? 'Odesílám...' : 'Odeslat zprávu →'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <OShkolce />
        <Program />
        <Tym />
        <Rozvrh />
        <Kontakt />
      </main>
      <Footer />
    </>
  )
}
