import {Plus_Jakarta_Sans} from 'next/font/google'
import './globals.css'

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Moudrohraní — Anglicko-česká školička',
  description: 'Anglicko-česká školička pro děti od 18 měsíců do 4 let v Praze 6 — Hanspaulce. English, jóga, výtvarné tvoření, hudba a radost z objevování.',
}

export default function RootLayout({children}) {
  return (
    <html lang="cs" className={font.className}>
      <body>{children}</body>
    </html>
  )
}
