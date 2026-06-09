# Moudrohraní

Next.js 14 (App Router) web pro anglicko-českou školičku, deploy na Vercel.

## Stack
- Next.js 14 App Router (JavaScript)
- Inline styles (žádný Tailwind)
- Bez CMS — obsah přímo v kódu

## Struktura
- app/ — routes a komponenty
- app/components/ — sdílené komponenty (Nav, Footer, Colors)
- public/ — obrázky a assety

## Konvence
- Named exporty
- Sekce číslované: ❋ 00X — Název
- Inline styles, žádné CSS moduly

## Rules
- Před commitem spustit `npm run lint`
