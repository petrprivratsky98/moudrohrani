import {Plus_Jakarta_Sans} from 'next/font/google'
import './globals.css'

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Moudrohraní — Dětská skupina Praha 6',
  description: 'Dětská skupina pro děti od 1,5 do 3 let v Praze 6 — Hanspaulce. Respektující přístup, citlivá adaptace, angličtina přirozenou formou a radost z objevování.',
}

export default function RootLayout({children}) {
  return (
    <html lang="cs" className={font.className}>
      <body>{children}</body>
    </html>
  )
}
