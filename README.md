# Majdon Löhr — Website

Persönliche, zweisprachige Website (DE/EN) für die Schauspielerin Majdon Löhr.
Statisch gebaut mit **Astro**, deployed über **GitHub Pages** auf `majdonloehr.de`.

Design & Konzept: siehe [projektplan.md](./projektplan.md).

---

## Tech Stack

- **Astro** (statischer Output) + **TypeScript**
- **Tailwind CSS v4** (Designtokens in [src/styles/global.css](./src/styles/global.css))
- **React-Islands** für Interaktivität (Nav, Galerie, Kontaktformular)
- **Framer Motion** für Entrance-Animationen
- **Astro i18n** für DE/EN-Routing + `hreflang`
- **@astrojs/sitemap** + JSON-LD für SEO
- Kontaktformular über **Formspree/Web3Forms** (kein Server)

## Voraussetzungen

- **Node 22+** (siehe [.nvmrc](./.nvmrc)). Mit nvm: `nvm use`.

## Lokale Entwicklung

```bash
npm install
npm run dev        # Dev-Server auf http://localhost:4321  (→ /de bzw. /en)
npm run build      # Statischer Build nach dist/
npm run preview    # Build lokal ausliefern
```

## Inhalte pflegen

Kein CMS — alles liegt typsicher im Repo:

| Inhalt | Datei |
|---|---|
| UI-Texte (DE/EN) | [src/i18n/ui.ts](./src/i18n/ui.ts) |
| Produktionen / Credits | [src/data/credits.ts](./src/data/credits.ts) |
| Pressestimmen | [src/data/press.ts](./src/data/press.ts) |
| Steckbrief & Fähigkeiten | [src/data/profile.ts](./src/data/profile.ts) |
| Galerie (Kategorien/Alt-Texte) | [src/data/gallery.ts](./src/data/gallery.ts) |
| Stammdaten (E-Mail etc.) | [src/data/site.ts](./src/data/site.ts) |

**Bilder:** in `src/assets/gallery/` ablegen (werden beim Build automatisch optimiert).
Das Hero-Bild ist `src/assets/hero.jpg`, das Social-Sharing-Bild `public/og.jpg`.

## Kontaktformular einrichten

1. Account bei [Formspree](https://formspree.io) **oder** [Web3Forms](https://web3forms.com) anlegen.
2. `.env.example` nach `.env.local` kopieren und Werte eintragen (siehe Kommentare dort).
3. Für das Deployment dieselben Werte als **GitHub-Secrets** hinterlegen
   (Settings → Secrets and variables → Actions): `PUBLIC_FORM_ENDPOINT`, ggf. `PUBLIC_FORM_ACCESS_KEY`.

Ohne Endpoint fällt das Formular automatisch auf einen `mailto:`-Link zurück.

> Außerdem: echte Kontakt-E-Mail in [src/data/site.ts](./src/data/site.ts) eintragen.

## Deployment (GitHub Pages + Domain bei IONOS)

Der Workflow [.github/workflows/deploy.yml](./.github/workflows/deploy.yml) baut und deployt bei jedem Push auf `main`.

**Einmalig einrichten:**

1. **GitHub:** Repo → Settings → Pages → *Source* = **GitHub Actions**.
2. **Custom Domain:** Die Datei [public/CNAME](./public/CNAME) enthält bereits `majdonloehr.de`.
3. **DNS bei IONOS** für `majdonloehr.de` setzen:

   | Typ | Host | Wert |
   |---|---|---|
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |
   | AAAA | `@` | `2606:50c0:8000::153` |
   | AAAA | `@` | `2606:50c0:8001::153` |
   | AAAA | `@` | `2606:50c0:8002::153` |
   | AAAA | `@` | `2606:50c0:8003::153` |
   | CNAME | `www` | `<github-user>.github.io.` |

4. Nach DNS-Propagierung in GitHub Pages **„Enforce HTTPS"** aktivieren.

> Die GitHub-Pages-IPs bei Bedarf mit der
> [offiziellen Doku](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site) abgleichen.

## Offene Inhalte (Platzhalter im Code)

- Echte Credits-Liste & exakte Theater-Namen
- Pressezitate inkl. Quellen/Links
- Galerie-Kategorisierung „Bühne"/„Porträt" final prüfen
- Demo-Reel (aktuell Platzhalter)
