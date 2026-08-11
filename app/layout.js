import {Plus_Jakarta_Sans} from 'next/font/google'
import './globals.css'

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
})

const siteUrl = 'https://www.moudrohrani.cz'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Moudrohraní — Dětská skupina Praha 6',
    template: '%s — Moudrohraní',
  },
  description: 'Dětská skupina pro děti od 1,5 do 3 let v Praze 6 — Hanspaulce. Respektující přístup, citlivá adaptace, angličtina přirozenou formou a radost z objevování.',
  keywords: [
    'dětská skupina Praha 6',
    'dětská skupina Hanspaulka',
    'dětská skupina Dejvice',
    'dětská skupina Bubeneč',
    'dětská skupina Břevnov',
    'dětská skupina Suchdol',
    'hlídání dětí Praha 6',
    'respektující dětská skupina',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: siteUrl,
    siteName: 'Moudrohraní',
    title: 'Moudrohraní — Dětská skupina Praha 6',
    description: 'Respektující dětská skupina pro děti od 1,5 do 3 let v srdci pražské Hanspaulky.',
    images: [{url: '/uvod.jpeg', width: 2560, height: 1707, alt: 'Moudrohraní — dětská skupina Praha 6'}],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moudrohraní — Dětská skupina Praha 6',
    description: 'Respektující dětská skupina pro děti od 1,5 do 3 let v srdci pražské Hanspaulky.',
    images: ['/uvod.jpeg'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ChildCare',
  name: 'Moudrohraní',
  url: siteUrl,
  logo: `${siteUrl}/logo-m.png`,
  image: `${siteUrl}/uvod.jpeg`,
  description: 'Respektující dětská skupina pro děti od 1,5 do 3 let v Praze 6 — Hanspaulce.',
  telephone: '+420777009121',
  email: 'info@moudrohrani.cz',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Na Pískách 1175/71',
    addressLocality: 'Praha 6',
    addressRegion: 'Praha',
    postalCode: '160 00',
    addressCountry: 'CZ',
  },
  areaServed: ['Praha 6', 'Hanspaulka', 'Dejvice', 'Bubeneč', 'Břevnov', 'Suchdol'],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '16:00',
  },
  sameAs: [
    'https://www.facebook.com/moudrohrani',
    'https://www.instagram.com/moudrohrani',
  ],
}

export default function RootLayout({children}) {
  return (
    <html lang="cs" className={font.className}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
        {children}
      </body>
    </html>
  )
}
