'use client'
import {useState} from 'react'
import Image from 'next/image'
import {Nav} from './components/Nav'
import {Footer} from './components/Footer'
import {Tym} from './components/Tym'
import {C} from './components/Colors'

// ❋ 001 — Hero (Emoce)
function Hero() {
  const stats = [
    {num: '1,5 – 3 roky', label: 'věk dětí'},
    {num: 'max. 12 dětí', label: 've skupině'},
    {num: '4 pečující', label: 'osoby'},
    {num: 'Po – Pá', label: '8:00 – 16:00'},
  ]
  return (
    <section style={{
      minHeight: '100svh', position: 'relative', overflow: 'hidden',
      display: 'flex', alignItems: 'center',
    }}>
      <Image
        src="/uvod.jpeg"
        alt=""
        fill
        style={{objectFit: 'cover', objectPosition: 'center 30%'}}
        priority
      />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(100deg, rgba(30,20,5,0.85) 0%, rgba(30,20,5,0.58) 55%, rgba(30,20,5,0.25) 100%)',
      }}/>
      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: 1320, margin: '0 auto', width: '100%',
        padding: 'clamp(100px,13vh,160px) clamp(24px,7vw,100px)',
      }}>
        <div style={{maxWidth: 640}}>
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.22em',
            textTransform: 'uppercase', color: C.amber, marginBottom: 28,
          }}>Praha 6 — Hanspaulka</div>

          <h1 style={{
            fontSize: 'clamp(42px,5.8vw,80px)', fontWeight: 900,
            color: C.white, lineHeight: 1.0, letterSpacing: '-0.03em', marginBottom: 28,
          }}>
            První krůčky<br/>mimo domov.<br/>
            <span style={{color: C.amber}}>Společně.</span>
          </h1>

          <p style={{
            fontSize: 'clamp(17px,1.6vw,23px)', color: 'rgba(255,255,255,0.82)',
            lineHeight: 1.75, maxWidth: 480, marginBottom: 44,
          }}>
            Dětská skupina pro děti od 1,5 do 3 let s respektujícím přístupem,
            citlivou adaptací, smysluplným programem a rodinnou atmosférou.
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
            <a href="#proc-moudrohrani" style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '16px 32px', borderRadius: 100,
              border: '2px solid rgba(255,255,255,0.35)', color: C.white,
              fontSize: 14, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.1em',
              textDecoration: 'none',
            }}>Zjistit víc</a>
          </div>

          <div className="stats-grid" style={{
            borderTop: '1px solid rgba(255,255,255,0.2)',
            paddingTop: 28,
          }}>
            {stats.map(({num, label}) => (
              <div key={label}>
                <div style={{fontSize: 'clamp(17px,1.6vw,23px)', fontWeight: 800, color: C.white, letterSpacing: '-0.01em'}}>{num}</div>
                <div style={{fontSize: 'clamp(13px,1vw,14px)', fontWeight: 500, color: 'rgba(255,255,255,0.6)', marginTop: 4}}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ❋ 002 — Citlivá adaptace
function CitlivaAdaptace() {
  return (
    <section id="citliva-adaptace" style={{
      padding: 'clamp(80px,10vw,128px) clamp(24px,5vw,80px)',
      background: C.white,
    }}>
      <div style={{maxWidth: 1320, margin: '0 auto'}}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(460px,100%),1fr))',
          gap: 'clamp(40px,5vw,72px)', alignItems: 'end',
        }}>
          <div>
            <div style={{fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.orange, marginBottom: 20}}>Citlivá adaptace</div>
            <h2 style={{
              fontSize: 'clamp(34px,4vw,64px)', fontWeight: 900,
              color: C.ink, letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0,
            }}>
              S rodiči fungujeme<br/>
              <span style={{fontWeight: 400, fontStyle: 'italic', color: C.muted}}>jako jeden tým.</span>
            </h2>
          </div>
          <p style={{
            fontSize: 'clamp(17px,1.5vw,22px)', color: C.muted,
            lineHeight: 1.8, margin: 0,
          }}>
            První odloučení je velkým krokem pro dítě i rodiče. V Moudrohraní dáváme
            dětem bezpečí, čas a prostor, aby si na nové prostředí postupně zvykly.
            Adaptaci tvoříme společně s rodiči a zůstáváme s nimi v pravidelném
            kontaktu. Nasloucháme, sdílíme a společně hledáme, co jejich dítě
            právě potřebuje.
          </p>
        </div>
      </div>
    </section>
  )
}

// ❋ 003 — Proč Moudrohraní
function ProcMoudrohrani() {
  const duvody = [
    {
      title: 'Respektující přístup',
      text: 'Respektujeme osobnost, tempo i potřeby každého dítěte a podporujeme ho v jeho přirozeném rozvoji.',
    },
    {
      title: 'Citlivá adaptace',
      text: 'Na adaptaci klademe velký důraz. Každému dítěti dáváme čas a podporu, kterou potřebuje, a rodiče jsou při adaptaci vítáni.',
    },
    {
      title: 'Malá skupinka, velká péče',
      text: 'Dostatek pečujících osob nám umožňuje vnímat potřeby každého dítěte a věnovat mu individuální pozornost, kdykoli ji potřebuje.',
    },
    {
      title: 'Smysluplný program',
      text: 'Dětem nabízíme podněty a aktivity, které je baví a přirozeně rozvíjejí. Střídáme společné aktivity s volnou hrou, tvořením, pohybem a objevováním.',
    },
    {
      title: 'Příroda na dosah',
      text: 'Pražská Hanspaulka nám umožňuje být blízko přírodě. Pro venkovní aktivity rádi využíváme nedaleký les a dětská hřiště.',
    },
    {
      title: 'Zdravé prostředí',
      text: 'Dbáme na zdravé stravování, přírodní materiály a ekologický přístup. Chceme, aby děti trávily čas v příjemném a zdravém prostředí.',
    },
  ]

  return (
    <section id="proc-moudrohrani" style={{
      padding: 'clamp(80px,10vw,128px) clamp(24px,5vw,80px)',
      background: C.sand,
    }}>
      <div style={{maxWidth: 1320, margin: '0 auto'}}>
        <div style={{marginBottom: 'clamp(56px,6vw,80px)'}}>
          <div style={{fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.orange, marginBottom: 20}}>Proč Moudrohraní</div>
          <h2 style={{
            fontSize: 'clamp(34px,4vw,64px)', fontWeight: 900,
            color: C.ink, letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0,
          }}>
            Na čem<br/>
            <span style={{fontWeight: 400, fontStyle: 'italic', color: C.muted}}>nám záleží.</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(340px,100%),1fr))',
          gap: 2,
        }}>
          {duvody.map(({title, text}, i) => (
            <div key={title} style={{
              background: i % 2 === 0 ? C.white : C.cream,
              padding: 'clamp(28px,3vw,44px)',
            }}>
              <div style={{
                width: 34, height: 34, borderRadius: '50%',
                background: C.orange, color: C.white,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 14, fontWeight: 800, marginBottom: 20, flexShrink: 0,
              }}>{i + 1}</div>
              <div style={{fontSize: 'clamp(19px,1.6vw,21px)', fontWeight: 800, color: C.ink, marginBottom: 12, letterSpacing: '-0.01em'}}>{title}</div>
              <p style={{fontSize: 'clamp(16px,1.2vw,17px)', color: C.muted, lineHeight: 1.75, margin: 0}}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ❋ 005 — Co děti během dne zažívají (program jako druhá vrstva)
function Program() {
  const aktivity = [
    {emoji: '🧘', title: 'Pohyb a jóga', text: 'Dechová a pohybová cvičení přizpůsobená nejmenším. Podporujeme koordinaci, vnímání vlastního těla, pozornost i schopnost zklidnit se.'},
    {emoji: '🎨', title: 'Výtvarné tvoření', text: 'Malujeme, stříháme, lepíme, modelujeme a zkoušíme různé materiály a techniky. Děti mají volnou ruku a prostor tvořit podle své fantazie. A někdy se u toho i pořádně zašpiníme.'},
    {emoji: '🎵', title: 'Hudba a rytmus', text: 'Zpívání, rytmické hry a pohyb na hudbu. Hudba přirozeně provází náš každodenní život.'},
    {emoji: '💬', title: 'Rozvoj řeči', text: 'Povídáme si, vyprávíme a společně sdílíme, co nás během dne potká. Děti si přirozeně rozvíjejí schopnost naslouchat, vyjadřovat se a komunikovat s ostatními.'},
    {emoji: '🌍', title: 'Angličtina přirozeně', text: 'Angličtinu zařazujeme do našeho programu hravou a přirozenou formou. Děti se s ní seznamují prostřednictvím písniček, říkanek, her a dalších aktivit.'},
    {emoji: '❤️', title: 'Vztahy a emoce', text: 'Pomáháme dětem rozpoznávat a pojmenovávat emoce, vyjadřovat své potřeby a postupně zvládat běžné situace a konflikty. Podporujeme bezpečné a respektující vztahy mezi dětmi.'},
  ]

  return (
    <section id="program" style={{
      padding: 'clamp(80px,10vw,128px) clamp(24px,5vw,80px)',
      background: C.sand,
    }}>
      <div style={{maxWidth: 1320, margin: '0 auto'}}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          flexWrap: 'wrap', gap: 24, marginBottom: 'clamp(48px,5vw,64px)',
        }}>
          <div>
            <div style={{fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.orange, marginBottom: 16}}>Co děti během dne zažívají</div>
            <h2 style={{fontSize: 'clamp(32px,4vw,62px)', fontWeight: 900, color: C.ink, letterSpacing: '-0.03em', lineHeight: 1.05, margin: 0}}>
              Hrajeme si, objevujeme,<br/>
              <span style={{fontWeight: 400, fontStyle: 'italic', color: C.muted}}>rosteme.</span>
            </h2>
          </div>
          <p style={{fontSize: 'clamp(17px,1.3vw,19px)', color: C.muted, lineHeight: 1.7, maxWidth: 380, margin: 0}}>
            Dětem nabízíme pestrý program, který podporuje jejich přirozený rozvoj.
            Střídáme tvoření, pohyb, hudbu, povídání, procházky, volnou hru
            i společné chvíle u jídla.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px,100%),1fr))',
          gap: 2,
        }}>
          {aktivity.map(({emoji, title, text}) => (
            <div key={title} style={{
              background: C.white,
              padding: 'clamp(24px,2.5vw,36px)',
              display: 'flex', flexDirection: 'column', gap: 12,
            }}>
              <div style={{fontSize: 26}}>{emoji}</div>
              <div style={{fontSize: 'clamp(18px,1.3vw,19px)', fontWeight: 800, color: C.ink, letterSpacing: '-0.01em'}}>{title}</div>
              <p style={{fontSize: 'clamp(15px,1.1vw,16px)', color: C.muted, lineHeight: 1.75, margin: 0}}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ❋ 006 — Náš rytmus
function Rozvrh() {
  const activities = [
    {time: '8:00 – 9:00',   label: 'Příchod dětí, volná hra a klidný start'},
    {time: '9:00 – 9:45',   label: 'Přivítání v kroužku a společné aktivity'},
    {time: '9:45 – 10:00',  label: 'Svačina'},
    {time: '10:00 – 10:20', label: 'Tvoření a výtvarné aktivity'},
    {time: '10:20 – 12:00', label: 'Pobyt venku – les, hřiště a pohybové aktivity'},
    {time: '12:00 – 12:30', label: 'Oběd'},
    {time: '12:30 – 13:00', label: 'Odchod dětí z dopoledního programu'},
    {time: '13:00 – 14:30', label: 'Odpočinek, spánek či klidné aktivity'},
    {time: '14:30 – 15:00', label: 'Odpolední svačina'},
    {time: '15:00 – 16:00', label: 'Volná hra a odchod dětí'},
  ]
  return (
    <section id="rozvrh" style={{
      padding: 'clamp(80px,10vw,128px) clamp(24px,5vw,80px)',
      background: C.orange,
    }}>
      <div style={{maxWidth: 1320, margin: '0 auto'}}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(360px,100%),1fr))',
          gap: 'clamp(48px,6vw,80px)', alignItems: 'start',
        }}>
          <div>
            <div style={{fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: 20}}>Náš rytmus</div>
            <h2 style={{
              fontSize: 'clamp(32px,4vw,62px)', fontWeight: 900,
              color: C.white, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 28,
            }}>
              Jak vypadá den<br/>v Moudrohraní.
            </h2>
            <p style={{
              fontSize: 'clamp(16px,1.2vw,17px)', color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.7, margin: '0 0 40px',
            }}>
              Děti mají rády, když vědí, co je čeká. Pravidelná struktura dne
              jim dává pocit jistoty a pomáhá jim postupně se zapojovat do
              společného fungování. Časový harmonogram je orientační —
              přizpůsobujeme ho aktuální situaci a potřebám dětí.
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
                  fontSize: 'clamp(13px,0.9vw,14px)', fontWeight: 700, color: 'rgba(255,255,255,0.65)',
                  minWidth: 104, paddingTop: 2, flexShrink: 0, letterSpacing: '0.02em',
                }}>{time}</div>
                <div style={{fontSize: 'clamp(16px,1.1vw,17px)', color: C.white, lineHeight: 1.5}}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ❋ 007 — Přijďte se podívat
function PrijdteSePodivat() {
  return (
    <section style={{
      padding: 'clamp(80px,10vw,128px) clamp(24px,5vw,80px)',
      background: C.sand,
    }}>
      <div style={{
        maxWidth: 1320, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(460px,100%),1fr))',
        gap: 'clamp(40px,5vw,72px)', alignItems: 'center',
      }}>
        <div>
          <div style={{fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.orange, marginBottom: 20}}>Ukázkový program</div>
          <h2 style={{
            fontSize: 'clamp(32px,4vw,62px)', fontWeight: 900,
            color: C.ink, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 24,
          }}>
            Přijďte se podívat.
          </h2>
          <p style={{
            fontSize: 'clamp(17px,1.5vw,22px)', color: C.ink,
            lineHeight: 1.8, fontWeight: 600, marginBottom: 16,
          }}>
            Nejlepší způsob, jak poznat Moudrohraní, je zažít jeho atmosféru.
          </p>
          <p style={{
            fontSize: 'clamp(16px,1.3vw,20px)', color: C.muted,
            lineHeight: 1.8, marginBottom: 16,
          }}>
            Rádi vás pozveme na ukázkový program, kterého se děti účastní společně
            s rodiči. Můžete s námi strávit celé dopoledne během našeho provozu,
            prohlédnout si naše prostředí, seznámit se s pečujícími osobami a zažít,
            jak u nás probíhá program. Ukázkový program je pro vás zdarma a zcela
            nezávazný.
          </p>
          <p style={{
            fontSize: 'clamp(16px,1.3vw,20px)', color: C.muted,
            lineHeight: 1.8, marginBottom: 32,
          }}>
            Máte zájem přijít? Zavolejte nám nebo vyplňte kontaktní formulář
            a my vám sdělíme možný termín návštěvy.
          </p>
          <a href="#kontakt" style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '16px 32px', borderRadius: 100,
            background: C.orange, color: C.white,
            fontSize: 14, fontWeight: 800,
            textTransform: 'uppercase', letterSpacing: '0.1em',
            textDecoration: 'none',
            boxShadow: `0 4px 20px ${C.orange}33`,
            marginBottom: 32,
          }}>Mám zájem ↓</a>
          <p style={{
            fontSize: 14, color: C.muted,
            lineHeight: 1.8, margin: 0,
            paddingTop: 24, borderTop: `1px solid ${C.ink}10`,
          }}>
            Jste rodiče z Dejvic, Bubenče, Břevnova nebo Suchdola a hledáte dětskou
            skupinu pro děti od 1,5 roku? Moudrohraní je respektující
            dětská skupina na Praze 6 v krásném prostředí Hanspaulky. Vyznáváme
            respektující přístup a dlouhou adaptaci, s rodiči tvoříme jeden tým.
            Dbáme na přirozenost, pestrost, angličtinu, zdraví a ohleduplnost k přírodě.
          </p>
        </div>
        <div style={{
          borderRadius: 20, background: C.white,
          boxShadow: `0 8px 32px ${C.ink}15`,
          padding: 'clamp(32px,3.5vw,48px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'flex-start', justifyContent: 'center', gap: 20,
        }}>
          <div style={{fontSize: 34}}>📝</div>
          <div style={{fontSize: 'clamp(20px,1.6vw,24px)', fontWeight: 800, color: C.ink, letterSpacing: '-0.01em'}}>
            Domluvte si termín návštěvy
          </div>
          <p style={{fontSize: 'clamp(15px,1.1vw,16px)', color: C.muted, lineHeight: 1.7, margin: 0}}>
            Vyplňte krátký kontaktní formulář níže a my se vám ozveme s možným
            termínem ukázkového programu.
          </p>
          <a href="#kontakt" style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '14px 28px', borderRadius: 100,
            border: `2px solid ${C.orange}`, color: C.orange,
            fontSize: 14, fontWeight: 800,
            textTransform: 'uppercase', letterSpacing: '0.1em',
            textDecoration: 'none',
          }}>Vyplnit formulář ↓</a>
        </div>
      </div>
    </section>
  )
}

// ❋ 008 — Kontakt
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
    boxSizing: 'border-box',
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
        maxWidth: 1320, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(400px,100%),1fr))',
        gap: 'clamp(48px,6vw,80px)',
      }}>
        <div>
          <div style={{fontSize: 12, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.orange, marginBottom: 20}}>Kontakt</div>
          <h2 style={{
            fontSize: 'clamp(32px,4vw,62px)', fontWeight: 900,
            color: C.ink, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 20,
          }}>
            Zajímá vás místo<br/>
            <span style={{fontWeight: 400, fontStyle: 'italic', color: C.muted}}>pro vaše dítě?</span>
          </h2>
          <p style={{
            fontSize: 'clamp(16px,1.5vw,21px)', color: C.muted,
            lineHeight: 1.8, marginBottom: 16, maxWidth: 420,
          }}>
            Rádi vás pozveme na <strong style={{color: C.ink}}>ukázkový program zdarma</strong> —
            přijďte se podívat, poznat prostředí a popovídat si s naším týmem.
          </p>
          <p style={{
            fontSize: 'clamp(15px,1.3vw,19px)', color: C.muted,
            lineHeight: 1.8, marginBottom: 48, maxWidth: 420,
          }}>
            Napište nám nebo zavolejte. Zodpovíme všechny otázky
            a sdělíme aktuální obsazenost i možnosti docházky.
          </p>

          <div style={{display: 'flex', flexDirection: 'column', gap: 28}}>
            {[
              {label: 'Organizace', val: 'Moudrohraní z.s., IČO 10799427'},
              {label: 'Email',   val: 'info@moudrohrani.cz',                       href: 'mailto:info@moudrohrani.cz'},
              {label: 'Telefon', val: '+420 777 009 121',                           href: 'tel:+420777009121'},
              {label: 'Adresa',  val: 'Na Pískách 1175/71, Praha 6 — Hanspaulka'},
            ].map(({label, val, href}) => (
              <div key={label}>
                <div style={{
                  fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
                  letterSpacing: '0.15em', color: C.muted, marginBottom: 5,
                }}>{label}</div>
                {href
                  ? <a href={href} style={{fontSize: 'clamp(17px,1.1vw,18px)', color: C.ink, fontWeight: 600, textDecoration: 'none'}}>{val}</a>
                  : <div style={{fontSize: 'clamp(17px,1.1vw,18px)', color: C.ink, fontWeight: 600}}>{val}</div>
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
            <div style={{fontSize: 40}}>✓</div>
            <h3 style={{fontSize: 'clamp(28px,2vw,30px)', fontWeight: 800, color: C.ink, letterSpacing: '-0.02em', margin: 0}}>Zpráva odeslána.</h3>
            <p style={{fontSize: 'clamp(18px,1.3vw,19px)', color: C.muted, lineHeight: 1.65, maxWidth: 300, margin: 0}}>Ozveme se vám co nejdříve, obvykle do pár dnů.</p>
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
                placeholder="Zájem o místo, otázky, ukázkový program..."
                onChange={e => setForm(f => ({...f, msg: e.target.value}))}
                style={{...inputStyle, resize: 'vertical'}}/>
            </div>
            {status === 'err' && (
              <p style={{fontSize: 14, color: '#c0392b', margin: 0}}>
                Odeslání se nezdařilo. Zkuste to znovu nebo napište přímo na info@moudrohrani.cz
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
        <CitlivaAdaptace />
        <ProcMoudrohrani />
        <Program />
        <Rozvrh />
        <Tym />
        <PrijdteSePodivat />
        <Kontakt />
      </main>
      <Footer />
    </>
  )
}
