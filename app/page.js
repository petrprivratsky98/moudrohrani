'use client'
import {useState} from 'react'
import {Nav} from './components/Nav'
import {Footer} from './components/Footer'
import {C} from './components/Colors'

// ❋ 001 — Hero
function Hero() {
  return (
    <section style={{
      minHeight: '100svh', position: 'relative',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      background: `linear-gradient(160deg, ${C.dark} 0%, #243B28 45%, #2E5233 100%)`,
      overflow: 'hidden',
      padding: 'clamp(120px,15vh,180px) clamp(24px,8vw,120px) clamp(80px,10vh,120px)',
    }}>
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: 'clamp(300px,45vw,650px)', height: 'clamp(300px,45vw,650px)',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${C.green}33 0%, transparent 70%)`,
        pointerEvents: 'none',
      }}/>
      <div style={{
        position: 'absolute', bottom: '-15%', left: '-8%',
        width: 'clamp(200px,35vw,500px)', height: 'clamp(200px,35vw,500px)',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${C.yellow}22 0%, transparent 70%)`,
        pointerEvents: 'none',
      }}/>

      <div style={{position: 'relative', maxWidth: 1200, margin: '0 auto', width: '100%'}}>
        <div style={{
          display: 'inline-block', fontSize: 11, fontWeight: 700, letterSpacing: '0.2em',
          textTransform: 'uppercase', color: C.yellow, marginBottom: 24,
          padding: '6px 14px', border: `1px solid ${C.yellow}44`, borderRadius: 100,
        }}>
          Praha 6 · Hanspaulka
        </div>

        <h1 style={{
          fontSize: 'clamp(42px,7vw,96px)', fontWeight: 900, color: C.cream,
          lineHeight: 1.05, letterSpacing: '-0.03em', marginBottom: 28,
          maxWidth: '12ch',
        }}>
          Místo, kde děti<br/>
          <em style={{fontStyle: 'normal', color: `${C.cream}66`}}>rozkvétají.</em>
        </h1>

        <p style={{
          fontSize: 'clamp(16px,1.6vw,20px)', color: `${C.cream}88`,
          lineHeight: 1.7, maxWidth: 520, marginBottom: 48,
        }}>
          Anglicko-česká školička pro děti od 18 měsíců do 4 let.
          English, jóga, výtvarné tvoření, hudba — a vždy čas na hru.
        </p>

        <div style={{display: 'flex', gap: 16, flexWrap: 'wrap'}}>
          <a href="#kontakt" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: 'clamp(14px,1.5vw,18px) clamp(24px,2.5vw,36px)',
            borderRadius: 100, background: C.coral, color: C.cream,
            fontSize: 'clamp(13px,1.2vw,15px)', fontWeight: 800,
            textTransform: 'uppercase', letterSpacing: '0.08em',
            boxShadow: `0 8px 32px ${C.coral}55`,
          }}>Chci místo pro dítě ↗</a>
          <a href="#o-skolce" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            padding: 'clamp(14px,1.5vw,18px) clamp(24px,2.5vw,36px)',
            borderRadius: 100, border: `1.5px solid ${C.cream}33`, color: C.cream,
            fontSize: 'clamp(13px,1.2vw,15px)', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.08em',
          }}>Zjistit víc</a>
        </div>
      </div>
    </section>
  )
}

// ❋ 002 — Stats bar
function Stats() {
  const items = [
    {num: '18m – 4r', label: 'Věk dítěte'},
    {num: '1 : 4', label: 'Učitel na děti'},
    {num: '5 dnů', label: 'Každý týden'},
    {num: '2×', label: 'Rodilí mluvčí'},
  ]
  return (
    <div style={{
      background: C.yellow,
      padding: 'clamp(24px,3vw,40px) clamp(24px,5vw,80px)',
      overflowX: 'auto',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24,
        minWidth: 480,
      }}>
        {items.map(({num, label}) => (
          <div key={label} style={{textAlign: 'center'}}>
            <div style={{fontSize: 'clamp(22px,2.5vw,36px)', fontWeight: 900, color: C.dark, letterSpacing: '-0.03em'}}>{num}</div>
            <div style={{fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', color: `${C.dark}66`, marginTop: 6}}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

// ❋ 003 — O školce
function OShkolce() {
  const points = [
    {icon: '🌿', text: 'Sídlíme v klidné Hanspaulce, kousek od lesů a hřišť.'},
    {icon: '🤝', text: 'Malé skupinky — maximálně 10 dětí ve skupině.'},
    {icon: '🌱', text: 'Ekologický přístup a úcta k přírodě jsou pro nás samozřejmostí.'},
    {icon: '❤️', text: 'Individuální přístup ke každému dítěti je základ naší práce.'},
  ]
  return (
    <section id="o-skolce" style={{
      padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,80px)',
      background: C.creamDark,
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(480px,100%),1fr))',
        gap: 'clamp(48px,6vw,96px)', alignItems: 'center',
      }}>
        <div>
          <div style={{fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.green, marginBottom: 16}}>O školce</div>
          <h2 style={{fontSize: 'clamp(32px,4vw,52px)', fontWeight: 900, color: C.ink, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 24}}>
            Anglicky každý den,<br/>
            <em style={{fontStyle: 'normal', color: `${C.ink}44`}}>přirozeně a s radostí.</em>
          </h2>
          <p style={{fontSize: 'clamp(15px,1.4vw,18px)', color: `${C.ink}77`, lineHeight: 1.75, marginBottom: 40, maxWidth: 480}}>
            Moudrohraní je anglicko-česká školička pro ty nejmenší — od 18 měsíců do 4 let. Věříme, že nejlepší způsob, jak se dítě učí, je skrze hru, pohyb a radostné objevování.
          </p>
          <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
            {points.map(({icon, text}) => (
              <div key={text} style={{display: 'flex', gap: 16, alignItems: 'flex-start'}}>
                <span style={{fontSize: 22, lineHeight: 1, flexShrink: 0, marginTop: 2}}>{icon}</span>
                <span style={{fontSize: 15, color: `${C.ink}88`, lineHeight: 1.65}}>{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          background: `linear-gradient(135deg, ${C.dark} 0%, #2E5233 100%)`,
          borderRadius: 32, padding: 'clamp(40px,4vw,60px)',
          position: 'relative', overflow: 'hidden',
          minHeight: 400, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        }}>
          <div style={{
            position: 'absolute', top: -40, right: -40, width: 280, height: 280,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${C.green}55 0%, transparent 70%)`,
          }}/>
          <div style={{
            position: 'absolute', bottom: -60, left: -30, width: 220, height: 220,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${C.yellow}33 0%, transparent 70%)`,
          }}/>
          <div style={{position: 'relative'}}>
            <div style={{fontSize: 'clamp(48px,6vw,72px)', marginBottom: 24}}>🌿</div>
            <blockquote style={{
              fontSize: 'clamp(18px,2vw,24px)', fontWeight: 700, color: C.cream,
              lineHeight: 1.35, letterSpacing: '-0.02em', margin: 0, marginBottom: 20,
            }}>
              &ldquo;Jedno dítě, jedna hvězda — každé svítí po svém.&rdquo;
            </blockquote>
            <div style={{fontSize: 13, color: `${C.cream}55`, fontWeight: 600}}>Ema Pantie, zakladatelka</div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ❋ 004 — Program
function Program() {
  const items = [
    {emoji: '🇬🇧', title: 'Angličtina', text: 'Dva rodilí mluvčí. Angličtina prostupuje celým dnem přirozeně — ve hře, příbězích i písničkách.', color: C.sky},
    {emoji: '🧘', title: 'Jóga pro děti', text: 'Pohybové a dechové aktivity přizpůsobené nejmenším. Rozvíjí koordinaci, koncentraci a klid.', color: C.green},
    {emoji: '🎨', title: 'Výtvarné tvoření', text: 'Malování, modelování, koláže — volnost k vyjádření a rozvoj jemné motoriky.', color: C.coral},
    {emoji: '🎵', title: 'Hudba a rytmus', text: 'Zpívání, rytmická cvičení a pohyb na hudbu. Muzika každý den.', color: C.yellow},
    {emoji: '💬', title: 'Rozvoj řeči', text: 'Logopedická podpora, příběhy a hry zaměřené na komunikaci v obou jazycích.', color: C.green},
    {emoji: '🤲', title: 'Emoční inteligence', text: 'Učíme děti pojmenovat emoce, řešit konflikty a budovat zdravé vztahy.', color: C.coral},
  ]
  return (
    <section id="program" style={{
      padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,80px)',
      background: C.cream,
    }}>
      <div style={{maxWidth: 1200, margin: '0 auto'}}>
        <div style={{textAlign: 'center', marginBottom: 'clamp(48px,5vw,72px)'}}>
          <div style={{fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.coral, marginBottom: 16}}>Program</div>
          <h2 style={{fontSize: 'clamp(32px,4vw,52px)', fontWeight: 900, color: C.ink, letterSpacing: '-0.03em', lineHeight: 1.1}}>
            Pestrý den plný<br/>
            <em style={{fontStyle: 'normal', color: `${C.ink}33`}}>objevování.</em>
          </h2>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px,100%),1fr))', gap: 24}}>
          {items.map(({emoji, title, text, color}) => (
            <div key={title} style={{
              background: C.creamDark, borderRadius: 24,
              padding: 'clamp(28px,3vw,40px)',
              borderTop: `3px solid ${color}`,
            }}>
              <div style={{fontSize: 36, marginBottom: 16}}>{emoji}</div>
              <div style={{fontSize: 18, fontWeight: 800, color: C.ink, marginBottom: 10, letterSpacing: '-0.02em'}}>{title}</div>
              <p style={{fontSize: 14, color: `${C.ink}66`, lineHeight: 1.7, margin: 0}}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ❋ 005 — Filozofie
function Filozofie() {
  const pillars = [
    {num: '01', title: 'Malé skupiny', text: 'Jeden pedagog na 3–4 děti. Dítě dostane opravdovou pozornost a péči.'},
    {num: '02', title: 'Individuální přístup', text: 'Každé dítě je jiné. Tempo, zájem i styl učení plně respektujeme.'},
    {num: '03', title: 'Příroda a ekologie', text: 'Učíme děti mít rádi přírodu. Výlety, hry venku, ekologické materiály.'},
    {num: '04', title: 'Radost ze hry', text: 'Hra je nejpřirozenější způsob učení. Vždy byl a vždy bude.'},
  ]
  return (
    <section style={{
      padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,80px)',
      background: `linear-gradient(160deg, ${C.dark} 0%, #1E3521 100%)`,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle at 20% 50%, ${C.green}22 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${C.yellow}11 0%, transparent 40%)`,
        pointerEvents: 'none',
      }}/>
      <div style={{maxWidth: 1200, margin: '0 auto', position: 'relative'}}>
        <div style={{textAlign: 'center', marginBottom: 'clamp(48px,5vw,72px)'}}>
          <div style={{fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.yellow, marginBottom: 16}}>Naše filozofie</div>
          <h2 style={{fontSize: 'clamp(32px,4vw,52px)', fontWeight: 900, color: C.cream, letterSpacing: '-0.03em', lineHeight: 1.1}}>
            Věříme, že základ<br/>
            <em style={{fontStyle: 'normal', color: `${C.cream}44`}}>je v dobrém začátku.</em>
          </h2>
        </div>

        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(260px,100%),1fr))', gap: 24}}>
          {pillars.map(({num, title, text}) => (
            <div key={num} style={{
              background: `${C.cream}08`,
              border: `1px solid ${C.cream}12`,
              borderRadius: 24, padding: 'clamp(28px,3vw,40px)',
            }}>
              <div style={{fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', color: `${C.cream}33`, marginBottom: 16}}>{num}</div>
              <div style={{fontSize: 20, fontWeight: 800, color: C.cream, marginBottom: 12, letterSpacing: '-0.02em'}}>{title}</div>
              <p style={{fontSize: 14, color: `${C.cream}55`, lineHeight: 1.7, margin: 0}}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ❋ 006 — Rozvrh
function Rozvrh() {
  const days = ['Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek']
  const activities = [
    {time: '8:00',  label: 'Příchod a ranní volná hra'},
    {time: '9:00',  label: 'Angličtina s rodilým mluvčím'},
    {time: '10:00', label: 'Tematická aktivita — výtvarná, pohybová nebo hudební'},
    {time: '11:00', label: 'Čas venku — hřiště, příroda, pohyb'},
    {time: '12:00', label: 'Oběd a odpočinek'},
    {time: '13:00', label: 'Konec základní doby'},
    {time: '16:00', label: 'Konec prodloužené péče'},
  ]
  return (
    <section id="rozvrh" style={{
      padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,80px)',
      background: C.creamDark,
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(440px,100%),1fr))',
        gap: 'clamp(48px,6vw,96px)', alignItems: 'start',
      }}>
        <div>
          <div style={{fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.green, marginBottom: 16}}>Rozvrh</div>
          <h2 style={{fontSize: 'clamp(32px,4vw,52px)', fontWeight: 900, color: C.ink, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 24}}>
            Strukturovaný den,<br/>
            <em style={{fontStyle: 'normal', color: `${C.ink}33`}}>prostor pro spontaneitu.</em>
          </h2>
          <p style={{fontSize: 'clamp(15px,1.4vw,18px)', color: `${C.ink}77`, lineHeight: 1.75, marginBottom: 36}}>
            Provoz probíhá pondělí až pátek. Základní doba je 8:00–13:00, s možností prodloužení do 16:00.
          </p>
          <div style={{display: 'flex', gap: 10, flexWrap: 'wrap'}}>
            {days.map(d => (
              <span key={d} style={{
                fontSize: 12, fontWeight: 700, padding: '6px 14px',
                borderRadius: 100, background: `${C.green}15`, color: C.green,
                letterSpacing: '0.05em',
              }}>{d}</span>
            ))}
          </div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column'}}>
          {activities.map(({time, label}, i) => (
            <div key={time} style={{
              display: 'flex', gap: 20, alignItems: 'flex-start',
              paddingBottom: i < activities.length - 1 ? 20 : 0,
              borderBottom: i < activities.length - 1 ? `1px solid ${C.ink}10` : 'none',
              marginBottom: i < activities.length - 1 ? 20 : 0,
            }}>
              <div style={{
                fontSize: 12, fontWeight: 700, color: C.green,
                letterSpacing: '0.05em', minWidth: 44, paddingTop: 2,
              }}>{time}</div>
              <div style={{fontSize: 15, color: `${C.ink}77`, lineHeight: 1.5, flex: 1}}>{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ❋ 007 — Kontakt
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
    width: '100%', padding: '14px 18px', borderRadius: 12,
    border: `1.5px solid ${C.ink}20`, background: C.cream,
    fontSize: 15, color: C.ink, outline: 'none', fontFamily: 'inherit',
  }

  const labelStyle = {
    fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
    letterSpacing: '0.12em', color: `${C.ink}55`,
  }

  return (
    <section id="kontakt" style={{
      padding: 'clamp(80px,10vw,140px) clamp(24px,5vw,80px)',
      background: C.cream,
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px,100%),1fr))',
        gap: 'clamp(48px,6vw,96px)',
      }}>
        <div>
          <div style={{fontSize: 11, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.coral, marginBottom: 16}}>Kontakt</div>
          <h2 style={{fontSize: 'clamp(32px,4vw,52px)', fontWeight: 900, color: C.ink, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 24}}>
            Zajímá vás místo<br/>
            <em style={{fontStyle: 'normal', color: `${C.ink}33`}}>pro vaše dítě?</em>
          </h2>
          <p style={{fontSize: 'clamp(15px,1.4vw,18px)', color: `${C.ink}77`, lineHeight: 1.75, marginBottom: 48}}>
            Napište nám nebo zavolejte. Rádi vám školu ukážeme a zodpovíme všechny otázky.
          </p>

          <div style={{display: 'flex', flexDirection: 'column', gap: 28}}>
            {[
              {label: 'Email',   val: 'ema@moudrohrani.cz',          href: 'mailto:ema@moudrohrani.cz', icon: '✉️'},
              {label: 'Telefon', val: '777 009 121',                  href: 'tel:+420777009121',         icon: '📞'},
              {label: 'Adresa',  val: 'Na Pískách 1175/71\nPraha 6 — Hanspaulka', icon: '📍'},
            ].map(({label, val, href, icon}) => (
              <div key={label} style={{display: 'flex', gap: 16, alignItems: 'flex-start'}}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: `${C.green}15`, display: 'flex',
                  alignItems: 'center', justifyContent: 'center',
                  fontSize: 20, flexShrink: 0,
                }}>{icon}</div>
                <div>
                  <div style={{fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: `${C.ink}44`, marginBottom: 4}}>{label}</div>
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
            background: `${C.green}10`, border: `1.5px solid ${C.green}30`,
            borderRadius: 24, padding: 56,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 16,
          }}>
            <div style={{fontSize: 52}}>🌿</div>
            <h3 style={{fontSize: 24, fontWeight: 800, color: C.ink, letterSpacing: '-0.02em'}}>Zpráva odeslána!</h3>
            <p style={{fontSize: 16, color: `${C.ink}66`, lineHeight: 1.65, maxWidth: 320}}>Ozveme se vám co nejdříve. Těšíme se na setkání!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: 18}}>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16}}>
              <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                <label style={labelStyle}>Jméno</label>
                <input type="text" required placeholder="Vaše jméno" value={form.name}
                  onChange={e => setForm(f => ({...f, name: e.target.value}))}
                  style={inputStyle}/>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
                <label style={labelStyle}>Věk dítěte</label>
                <input type="text" placeholder="Např. 2 roky" value={form.age}
                  onChange={e => setForm(f => ({...f, age: e.target.value}))}
                  style={inputStyle}/>
              </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
              <label style={labelStyle}>Email</label>
              <input type="email" required placeholder="vas@email.cz" value={form.email}
                onChange={e => setForm(f => ({...f, email: e.target.value}))}
                style={inputStyle}/>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', gap: 8}}>
              <label style={labelStyle}>Zpráva</label>
              <textarea required rows={5} value={form.msg}
                placeholder="Napište nám — zájem o místo, otázky, prohlídka..."
                onChange={e => setForm(f => ({...f, msg: e.target.value}))}
                style={{...inputStyle, resize: 'vertical'}}/>
            </div>
            {status === 'err' && (
              <p style={{fontSize: 13, color: C.coral, margin: 0}}>
                Něco se nepovedlo. Zkuste to znovu nebo nám napište přímo na email.
              </p>
            )}
            <button type="submit" disabled={status === 'sending'} style={{
              padding: '16px 32px', borderRadius: 100, border: 'none',
              background: C.coral, color: C.cream,
              fontSize: 14, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em',
              cursor: status === 'sending' ? 'default' : 'pointer',
              opacity: status === 'sending' ? 0.7 : 1,
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
        <Stats />
        <OShkolce />
        <Program />
        <Filozofie />
        <Rozvrh />
        <Kontakt />
      </main>
      <Footer />
    </>
  )
}
