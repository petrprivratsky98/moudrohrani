'use client'
import {useState} from 'react'
import {Nav} from './components/Nav'
import {Footer} from './components/Footer'
import {C} from './components/Colors'

// ❋ 001 — Hero
function Hero() {
  const cards = [
    {emoji: '🇬🇧', label: 'Angličtina každý den', bg: C.orange,   fg: C.white},
    {emoji: '🧘',  label: 'Jóga a pohyb',          bg: C.green,    fg: C.white},
    {emoji: '1:4', label: 'Poměr pedagog/děti',    bg: C.amber,    fg: C.ink},
    {emoji: '🌿',  label: 'Ekologický přístup',    bg: C.sand,     fg: C.ink},
  ]
  return (
    <section style={{
      minHeight: '100svh',
      background: C.cream,
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: 'clamp(100px,12vh,160px) clamp(24px,7vw,100px) clamp(64px,8vh,100px)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: -80, right: -80,
        width: 500, height: 500, borderRadius: '50%',
        background: `radial-gradient(circle, ${C.amber}44 0%, transparent 65%)`,
        pointerEvents: 'none',
      }}/>
      <div style={{
        position: 'absolute', bottom: -100, left: -60,
        width: 400, height: 400, borderRadius: '50%',
        background: `radial-gradient(circle, ${C.orange}22 0%, transparent 65%)`,
        pointerEvents: 'none',
      }}/>

      <div style={{
        maxWidth: 1200, margin: '0 auto', width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(460px,100%),1fr))',
        gap: 'clamp(48px,6vw,80px)', alignItems: 'center',
      }}>
        {/* Left: text */}
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: `${C.orange}18`, borderRadius: 100,
            padding: '6px 16px', marginBottom: 28,
          }}>
            <span style={{fontSize: 14}}>📍</span>
            <span style={{fontSize: 12, fontWeight: 700, color: C.orange, letterSpacing: '0.1em', textTransform: 'uppercase'}}>Praha 6 — Hanspaulka</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(40px,6vw,80px)', fontWeight: 900,
            color: C.ink, lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 24,
          }}>
            Vítejte<br/>
            v <span style={{color: C.orange}}>Moudrohraní</span>
          </h1>

          <p style={{
            fontSize: 'clamp(16px,1.5vw,19px)', color: C.muted,
            lineHeight: 1.75, maxWidth: 460, marginBottom: 40,
          }}>
            Anglicko-česká školička pro děti od 18 měsíců do 4 let.
            Hravé učení, rodilí mluvčí, jóga, výtvarky a spousta radosti — každý den.
          </p>

          <div style={{display: 'flex', gap: 14, flexWrap: 'wrap'}}>
            <a href="#kontakt" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 28px', borderRadius: 100,
              background: C.orange, color: C.white,
              fontSize: 14, fontWeight: 800,
              textTransform: 'uppercase', letterSpacing: '0.08em',
              boxShadow: `0 6px 24px ${C.orange}44`,
            }}>Chci místo ↗</a>
            <a href="#o-skolce" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '14px 28px', borderRadius: 100,
              border: `2px solid ${C.ink}18`, color: C.ink,
              fontSize: 14, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.08em',
            }}>Zjistit víc</a>
          </div>
        </div>

        {/* Right: info cards */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16,
        }}>
          {cards.map(({emoji, label, bg, fg}) => (
            <div key={label} style={{
              background: bg, borderRadius: 24,
              padding: 'clamp(20px,2.5vw,32px)',
              display: 'flex', flexDirection: 'column', gap: 10,
              boxShadow: '0 4px 20px rgba(40,30,10,0.08)',
            }}>
              <span style={{fontSize: 'clamp(28px,3vw,40px)', lineHeight: 1}}>{emoji}</span>
              <span style={{fontSize: 'clamp(13px,1.2vw,15px)', fontWeight: 700, color: fg, lineHeight: 1.35}}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ❋ 002 — O školce
function OShkolce() {
  const points = [
    'Jsme anglicko-česká školička pro děti od 18 měsíců do 4 let.',
    'Malé skupinky — maximálně 10 dětí, vždy s plnou pozorností.',
    'Ekologický přístup a přírodní pomůcky jsou pro nás samozřejmostí.',
    'Spolupracujeme s firmou Econea a preferujeme přírodní materiály.',
    'Budujeme k přírodě a okolí zdravý vztah od nejútlejšího věku.',
  ]
  return (
    <section id="o-skolce" style={{
      padding: 'clamp(72px,9vw,120px) clamp(24px,5vw,80px)',
      background: C.white,
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(440px,100%),1fr))',
        gap: 'clamp(48px,6vw,96px)', alignItems: 'center',
      }}>
        <div>
          <div style={{
            display: 'inline-block', fontSize: 11, fontWeight: 700,
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: C.orange, marginBottom: 16,
          }}>O školce</div>
          <h2 style={{
            fontSize: 'clamp(30px,3.5vw,48px)', fontWeight: 900,
            color: C.ink, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 28,
          }}>
            Anglicky každý den,<br/>
            <span style={{color: C.muted, fontWeight: 600}}>přirozeně a s radostí.</span>
          </h2>
          <div style={{display: 'flex', flexDirection: 'column', gap: 14}}>
            {points.map(text => (
              <div key={text} style={{display: 'flex', gap: 14, alignItems: 'flex-start'}}>
                <div style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: C.orange, flexShrink: 0, marginTop: 7,
                }}/>
                <span style={{fontSize: 15, color: C.muted, lineHeight: 1.65}}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div style={{
          background: C.sand, borderRadius: 32,
          padding: 'clamp(36px,4vw,56px)',
          display: 'flex', flexDirection: 'column', gap: 20,
        }}>
          <div style={{fontSize: 48}}>👧🏻</div>
          <p style={{
            fontSize: 'clamp(18px,2vw,24px)', fontWeight: 700,
            color: C.ink, lineHeight: 1.4, letterSpacing: '-0.02em', margin: 0,
          }}>
            &ldquo;Tým lektorů, kteří svou práci dělají s radostí a věnují dětem svou plnou pozornost.&rdquo;
          </p>
          <div style={{display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 8}}>
            {[
              {num: '18m+', label: 'Od věku'},
              {num: '2×', label: 'Rodilí mluvčí'},
              {num: '10', label: 'Max dětí'},
            ].map(({num, label}) => (
              <div key={label}>
                <div style={{fontSize: 'clamp(20px,2vw,28px)', fontWeight: 900, color: C.orange, letterSpacing: '-0.03em'}}>{num}</div>
                <div style={{fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.muted, marginTop: 2}}>{label}</div>
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
    {emoji: '🇬🇧', title: 'Anglický program', text: 'Angličtina prostupuje celým dnem. Dva rodilí mluvčí — ve hře, příbězích i písničkách.', color: C.orange},
    {emoji: '🧘', title: 'Jóga pro děti', text: 'Pohybové a dechové aktivity přizpůsobené nejmenším. Koordinace, klid, koncentrace.', color: C.green},
    {emoji: '🎨', title: 'Výtvarné tvoření', text: 'Malování, modelování, koláže. Volnost k vyjádření a rozvoj jemné motoriky.', color: C.coral},
    {emoji: '🎵', title: 'Hudba a rytmus', text: 'Zpívání, rytmická cvičení a pohyb na hudbu. Muzika každý den.', color: C.amber},
    {emoji: '💬', title: 'Rozvoj řeči', text: 'Logopedická podpora, příběhy a hry zaměřené na komunikaci v obou jazycích.', color: C.sky},
    {emoji: '🤲', title: 'Emoční inteligence', text: 'Učíme děti pojmenovat emoce, řešit konflikty a budovat zdravé vztahy.', color: C.green},
  ]
  return (
    <section id="program" style={{
      padding: 'clamp(72px,9vw,120px) clamp(24px,5vw,80px)',
      background: C.sand,
    }}>
      <div style={{maxWidth: 1200, margin: '0 auto'}}>
        <div style={{textAlign: 'center', marginBottom: 'clamp(40px,5vw,64px)'}}>
          <div style={{fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.orange, marginBottom: 12}}>Program</div>
          <h2 style={{fontSize: 'clamp(30px,3.5vw,48px)', fontWeight: 900, color: C.ink, letterSpacing: '-0.03em', lineHeight: 1.1}}>
            Programové aktivity
          </h2>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px,100%),1fr))', gap: 20}}>
          {items.map(({emoji, title, text, color}) => (
            <div key={title} style={{
              background: C.white, borderRadius: 20,
              padding: 'clamp(24px,2.5vw,36px)',
              borderLeft: `4px solid ${color}`,
              boxShadow: '0 2px 12px rgba(40,30,10,0.05)',
            }}>
              <div style={{fontSize: 32, marginBottom: 14}}>{emoji}</div>
              <div style={{fontSize: 17, fontWeight: 800, color: C.ink, marginBottom: 8, letterSpacing: '-0.01em'}}>{title}</div>
              <p style={{fontSize: 14, color: C.muted, lineHeight: 1.65, margin: 0}}>{text}</p>
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
    {time: '10:15 – 12:00', label: 'Hrajeme si moudře — venku, pohybové aktivity, jemná motorika, výtvarné činnosti'},
    {time: '12:00 – 12:30', label: 'Obědová pauza'},
    {time: '12:30 – 13:00', label: 'Odchod dětí z dopoledního programu'},
    {time: '13:00 – 15:00', label: 'Odpočinek dětí, klidné aktivity'},
    {time: '15:00 – 15:30', label: 'Svačina'},
    {time: '15:30 – 16:00', label: 'Odchod domů'},
  ]
  return (
    <section id="rozvrh" style={{
      padding: 'clamp(72px,9vw,120px) clamp(24px,5vw,80px)',
      background: C.orange,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative circles */}
      <div style={{
        position: 'absolute', top: -60, right: -60, width: 300, height: 300,
        borderRadius: '50%', background: 'rgba(255,255,255,0.08)', pointerEvents: 'none',
      }}/>
      <div style={{
        position: 'absolute', bottom: -80, left: -40, width: 250, height: 250,
        borderRadius: '50%', background: 'rgba(255,255,255,0.06)', pointerEvents: 'none',
      }}/>

      <div style={{maxWidth: 1200, margin: '0 auto', position: 'relative'}}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(380px,100%),1fr))',
          gap: 'clamp(48px,6vw,80px)', alignItems: 'start',
        }}>
          <div>
            <div style={{fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 16}}>Rozvrh</div>
            <h2 style={{fontSize: 'clamp(30px,3.5vw,48px)', fontWeight: 900, color: C.white, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 24}}>
              Jak probíhá<br/>každý den?
            </h2>
            <p style={{fontSize: 'clamp(15px,1.4vw,17px)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.75, marginBottom: 32, maxWidth: 400}}>
              Program probíhá od pondělí do pátku od 8:00 do 13:00. V případě zájmu je možnost docházky do 16:00.
            </p>
            <p style={{fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.65, margin: 0, fontStyle: 'italic'}}>
              Časový harmonogram je pouze orientační — přizpůsobujeme ho potřebám dětí a aktuální situaci.
            </p>
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.12)', borderRadius: 24,
            padding: 'clamp(24px,3vw,36px)', backdropFilter: 'blur(8px)',
          }}>
            {activities.map(({time, label}, i) => (
              <div key={time} style={{
                display: 'flex', gap: 16, alignItems: 'flex-start',
                paddingBottom: i < activities.length - 1 ? 16 : 0,
                borderBottom: i < activities.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                marginBottom: i < activities.length - 1 ? 16 : 0,
              }}>
                <div style={{
                  fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.6)',
                  minWidth: 88, paddingTop: 2, flexShrink: 0,
                }}>{time}</div>
                <div style={{fontSize: 14, color: C.white, lineHeight: 1.45}}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          marginTop: 'clamp(48px,5vw,64px)', padding: 'clamp(28px,3vw,40px)',
          background: 'rgba(255,255,255,0.15)', borderRadius: 20,
          backdropFilter: 'blur(8px)', textAlign: 'center',
        }}>
          <p style={{fontSize: 'clamp(16px,1.6vw,20px)', color: C.white, fontWeight: 600, margin: '0 0 20px'}}>
            Přijďte na návštěvu a vyzkoušejte si den s námi!
          </p>
          <a href="#kontakt" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '14px 32px', borderRadius: 100,
            background: C.white, color: C.orange,
            fontSize: 14, fontWeight: 800,
            textTransform: 'uppercase', letterSpacing: '0.08em',
            textDecoration: 'none',
          }}>Napsat nám ↗</a>
        </div>
      </div>
    </section>
  )
}

// ❋ 005 — Kontakt
function Kontakt() {
  const [form, setForm] = useState({name: '', email: '', age: '', msg: ''})
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
    width: '100%', padding: '13px 16px', borderRadius: 10,
    border: `1.5px solid ${C.ink}15`, background: C.cream,
    fontSize: 15, color: C.ink, outline: 'none', fontFamily: 'inherit',
  }

  const labelStyle = {
    fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
    letterSpacing: '0.12em', color: C.muted,
  }

  return (
    <section id="kontakt" style={{
      padding: 'clamp(72px,9vw,120px) clamp(24px,5vw,80px)',
      background: C.white,
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px,100%),1fr))',
        gap: 'clamp(48px,6vw,80px)',
      }}>
        <div>
          <div style={{fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.orange, marginBottom: 16}}>Kontakt</div>
          <h2 style={{fontSize: 'clamp(30px,3.5vw,48px)', fontWeight: 900, color: C.ink, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20}}>
            Zajímá vás místo<br/>pro vaše dítě?
          </h2>
          <p style={{fontSize: 'clamp(15px,1.4vw,17px)', color: C.muted, lineHeight: 1.75, marginBottom: 40, maxWidth: 400}}>
            Pro více informací kontaktujte Emu — ráda vám školu ukáže a zodpoví všechny otázky.
          </p>

          <div style={{display: 'flex', flexDirection: 'column', gap: 24}}>
            {[
              {label: 'Email',   val: 'ema@moudrohrani.cz',                      href: 'mailto:ema@moudrohrani.cz', icon: '✉️'},
              {label: 'Telefon', val: '777 009 121',                              href: 'tel:+420777009121',         icon: '📞'},
              {label: 'Adresa',  val: 'Na Pískách 1175/71\nPraha 6 — Hanspaulka',                                   icon: '📍'},
            ].map(({label, val, href, icon}) => (
              <div key={label} style={{display: 'flex', gap: 14, alignItems: 'flex-start'}}>
                <div style={{
                  width: 42, height: 42, borderRadius: 12,
                  background: `${C.orange}15`, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, flexShrink: 0,
                }}>{icon}</div>
                <div>
                  <div style={{fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: C.muted, marginBottom: 3}}>{label}</div>
                  {href
                    ? <a href={href} style={{fontSize: 15, color: C.ink, fontWeight: 600}}>{val}</a>
                    : <div style={{fontSize: 15, color: C.ink, fontWeight: 600, whiteSpace: 'pre-line'}}>{val}</div>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

        {status === 'ok' ? (
          <div style={{
            background: `${C.green}12`, border: `2px solid ${C.green}30`,
            borderRadius: 24, padding: 56,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 16,
          }}>
            <div style={{fontSize: 52}}>🎉</div>
            <h3 style={{fontSize: 24, fontWeight: 800, color: C.ink, letterSpacing: '-0.02em'}}>Zpráva odeslána!</h3>
            <p style={{fontSize: 16, color: C.muted, lineHeight: 1.65, maxWidth: 300}}>Ozveme se vám co nejdříve. Těšíme se na setkání!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: 16}}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14}}>
              <div style={{display: 'flex', flexDirection: 'column', gap: 7}}>
                <label style={labelStyle}>Jméno</label>
                <input type="text" required placeholder="Vaše jméno" value={form.name}
                  onChange={e => setForm(f => ({...f, name: e.target.value}))} style={inputStyle}/>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 7}}>
                <label style={labelStyle}>Věk dítěte</label>
                <input type="text" placeholder="Např. 2 roky" value={form.age}
                  onChange={e => setForm(f => ({...f, age: e.target.value}))} style={inputStyle}/>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 7}}>
              <label style={labelStyle}>Email</label>
              <input type="email" required placeholder="vas@email.cz" value={form.email}
                onChange={e => setForm(f => ({...f, email: e.target.value}))} style={inputStyle}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 7}}>
              <label style={labelStyle}>Zpráva</label>
              <textarea required rows={5} value={form.msg}
                placeholder="Napište nám — zájem o místo, otázky, prohlídka..."
                onChange={e => setForm(f => ({...f, msg: e.target.value}))}
                style={{...inputStyle, resize: 'vertical'}}/>
            </div>
            {status === 'err' && (
              <p style={{fontSize: 13, color: C.coral, margin: 0}}>
                Něco se nepovedlo. Zkuste to znovu nebo napište přímo na email.
              </p>
            )}
            <button type="submit" disabled={status === 'sending'} style={{
              padding: '15px 32px', borderRadius: 100, border: 'none',
              background: C.orange, color: C.white,
              fontSize: 14, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em',
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
        <Rozvrh />
        <Kontakt />
      </main>
      <Footer />
    </>
  )
}
