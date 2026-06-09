# Majdon Loehr — Website Projektplan
> Zuletzt aktualisiert: 09.06.2026

---

## Projektziel

Eine moderne, persönliche Website für Majdon Loehr — Schauspielerin mit Schwerpunkt Bühne und Theater. Die Website soll sie als Mensch und Künstlerin präsentieren, Casting-Anfragen ermöglichen und ihre Arbeit sichtbar machen.

**Drei Ziele gleichzeitig:**
- Casting-/Buchungsanfragen generieren
- Ihre Arbeit & Präsenz zeigen
- Persönliche Marke aufbauen

---

## Über Majdon

- Schließt gerade ihre Ausbildung ab — Karrierebeginn, nicht etabliert
- Schwerpunkt: Bühne, Sprechtheater
- Besondere Stärke: Komödie, tolle Stimme, starke Bühnenenergie
- Ca. 5–6 Bühnenauftritte im Rahmen der Ausbildung
- Engagements: Hannover, Braunschweig, Gaststätten (freie Produktionen)
- Gesamtauftritte: ca. 50–60 (inkl. Gaststätten/Freie Produktionen)
- Vorhandenes Material: Professionelle Fotos, Lebenslauf/Credits, Pressestimmen
- Noch kein Demo-Reel (Platzhalter einplanen)
- Keine Agentur (aktuell)
- Website: Deutsch & Englisch (zweisprachig)

### Ausbildung

| | |
|---|---|
| Schule | Freie Schauspielschule Hamburg |
| Adresse | Gotenstraße, Hamburg |
| Status | Abschluss 2025 |

### Persönliche Daten (Casting)

| Merkmal | Angabe |
|---|---|
| Geburtsort | Braunschweig |
| Nationalität | Deutsch |
| Wohnort / Base | Braunschweig & Hamburg |
| Größe | 156 cm |
| Haarfarbe | Blond |
| Augenfarbe | Blau |
| Konfektionsgröße | XS / S |
| Sprachen | Deutsch (Muttersprache), Englisch (Grundkenntnisse Bühne) |
| Führerschein | Klasse B + Traktor/Trecker-Erfahrung |
| Fahrzeug | Eigenes Auto vorhanden |
| Schwimmen | Ja, gut |

### Besondere Fähigkeiten

**Musik & Stimme**
- Gesang
- Klavier
- Akkordeon

**Körper & Sport**
- Kraftsport
- Boxen
- Showkampf / Fechten (Schulausbildung)
- Sehr gute körperliche Fitness

**Stimme & Sprache**
- Synchronsprechen (sehr gut)
- Dialekte: Bayerisch, Sächsisch, Berlinerisch

---

## Seitenstruktur

| Seite | Inhalt |
|---|---|
| **Hero / Start** | Vollbild-Foto, Name, Tagline, Engagements, CTA |
| **Über mich** | Persönliche, narrative Bio — kein trockener CV |
| **Arbeit / Produktionen** | Credits als kuratierte Liste oder Karten |
| **Presse** | Zitate als typografische Momente, Links zu Artikeln |
| **Galerie** | Professionelle Fotos, aufgeteilt in „Bühne" und „Portrait" |
| **Kontakt** | Formular + ggf. Agentur-Link |

**Navigation (Deutsch):** Über mich · Arbeit · Presse · Galerie · Kontakt

---

## Skills & Ressourcen für Claude Code

> **Wichtig für Claude Code:** Vor dem Bauen die relevanten Skills aus dem Envisbo Skillbox-Repository lesen und anwenden:
> 
> **Repository:** `https://github.com/Envisbo-UG/Skillbox/tree/main/skills`
> 
> Dort befinden sich UI- und Frontend-Skills die für dieses Projekt genutzt werden sollen. Claude Code hat Zugriff auf das Repo und soll die relevanten SKILL.md Dateien vor dem Umsetzen jeder Sektion lesen — insbesondere alle UI/Frontend-bezogenen Skills.

---

## Tech Stack

> Aktualisiert 09.06.2026: Umsetzung als **statische Astro-Site auf GitHub Pages** (Domain `majdonloehr.de` bei IONOS). Ersetzt die ursprüngliche Next.js/Vercel-Annahme, da GitHub Pages keinen Node-Server zur Laufzeit bietet.

- **Framework:** Astro (statischer Output, eingebautes i18n & SEO)
- **Styling:** Tailwind CSS v4 (Designtokens als Theme)
- **Interaktivität:** React-Islands (Nav, Galerie, Kontaktformular)
- **Animation:** Framer Motion
- **Sprachen:** Astro-i18n, DE + EN vollständig (Routing, Sprachumschalter, `hreflang`)
- **CMS:** Keins — Inhalte typsicher im Repo (`src/i18n/ui.ts`, `src/data/*`), später migrierbar
- **Kontaktformular:** Drittanbieter (Formspree/Web3Forms), kein eigenes Backend
- **Deployment:** GitHub Pages via GitHub Actions
- **Build:** Claude Code (vollständig)

---

## SEO (oberste Priorität)

> **Grundsatz:** Die Website muss auf **jeder Ebene** SEO-optimiert sein — technisch, strukturell und inhaltlich. SEO ist kein nachträglicher Schritt, sondern bei jeder Sektion und jedem Bauschritt von Anfang an mitzudenken.

- **Technisch:** Saubere, semantische HTML-Struktur, korrekte Heading-Hierarchie (genau ein `h1` pro Seite), schnelle Ladezeiten (Core Web Vitals), Server-Side Rendering / Static Generation über Next.js
- **Meta:** Aussagekräftige `title`- und `meta description`-Tags pro Seite, Open Graph & Twitter Cards für Social-Sharing, Canonical-URLs
- **Mehrsprachigkeit:** Korrekte `hreflang`-Auszeichnung für Deutsch & Englisch
- **Strukturierte Daten:** Schema.org / JSON-LD (`Person`, ggf. `PerformingArtist`) für Majdon, ihre Credits und Kontaktdaten
- **Medien:** Beschreibende `alt`-Texte für alle Bilder, optimierte Bildformate (Next.js Image), aussagekräftige Dateinamen
- **Crawling:** `sitemap.xml` und `robots.txt` automatisch generiert
- **Inhalt:** Keyword-bewusste, natürliche Texte (Name, „Schauspielerin", Bühne/Theater, Engagement-Orte) — ohne Keyword-Stuffing

---

## Design System

### Konzept
„Die Bühne, der Mensch" — warm, persönlich, theatralisch. Wie ein schön beleuchteter Bühnenraum. Dunkel mit warmen Akzenten. Handgemacht, nicht korporativ.

### Farbpalette

| Name | Hex | Verwendung |
|---|---|---|
| Stage Dark | `#1A0F08` | Hintergrund |
| Wing Shadow | `#2E1C0E` | Trennlinien, dezente Flächen |
| Footlight | `#C2842A` | Akzentfarbe, Curtain Rule, CTAs |
| Warm Ash | `#C4AE92` | Nav-Links, Fließtext, Bio |
| Parchment | `#F0E6D3` | Headings, Name |
| Dusk Label | `#BFA07A` | Eyebrow-Labels, Metadaten |

> Anpassung v2 (09.06.2026): `#8A7055` (Velvet Mist) → `#C4AE92` (Warm Ash) für mehr Kontrast auf dunklem Hintergrund. Parchment von `#E8D9C4` auf `#F0E6D3` aufgehellt.

### Typografie

| Rolle | Schrift | Stil | Verwendung |
|---|---|---|---|
| Display | Playfair Display | 400, normal & kursiv | Name, Produktionstitel, Hero |
| Body | Cormorant Garamond | 300 | Bio, Fließtext |
| Utility | Courier New | mono, uppercase | Labels, Metadaten, Nav-Links |

### Signature Element — Die Curtain Rule
Ein **4px vertikaler Balken in Footlight-Gold** (#C2842A) markiert jeden strukturellen Moment — wie der Lichtspalt zwischen Bühnenvorhängen. Erscheint neben Eyebrow-Labels, Section-Headings und Pullzitaten. Immer strukturell, nie dekorativ.

### Motion
| Eigenschaft | Wert |
|---|---|
| Eingang | Fade + Rise 24px |
| Dauer | 600–900ms |
| Easing | ease-out cubic |
| Stagger | 120ms pro Element |

### Layout
- Max-Breite: 1100px
- Prose-Spalte: 680px
- Section-Abstand: 120px vertikal
- Grid: 12 Spalten, 24px Gutter

---

## Hero-Sektion (fertig geplant)

- Dunkler Hintergrund (#1A0F08)
- Nav: Logo „M · L" links, 5 Links rechts in Courier Mono
- Eyebrow mit Curtain Rule: „Schauspielerin · Bühne · Theater"
- Name zweizeilig: „Majdon" (Parchment) / „Loehr" (Footlight Gold)
- Tagline kursiv: „Auf der Bühne zuhause — ab dem ersten Schritt."
- Bio-Text links, Engagements-Liste rechts
- Engagements: Hannover · Braunschweig · Gaststätten / Freie Produktionen
- CTAs: „Zur Arbeit" (primär, gold) + „Kontakt aufnehmen →" (sekundär)
- Scroll-Hint unten: „Weiter erkunden"

---

## Offene Entscheidungen

- [ ] Genaue Bezeichnung der Theater in Hannover & Braunschweig
- [ ] Wie sollen „Gaststätten"-Auftritte bezeichnet werden? (z.B. „Freie Produktionen")
- [x] Welche Dialekte kann sie genau imitieren? → Bayerisch, Sächsisch, Berlinerisch
- [ ] Alle Produktionen / Credits als Liste eintragen (Name, Rolle, Theater, Jahr)
- [ ] Stimmfach (Sopran, Mezzosopran etc.)
- [ ] Tanzstile
- [ ] CMS ja/nein entscheiden
- [ ] Demo-Reel: Platzhalter oder ganz weglassen?
- [ ] Domain schon vorhanden?

---

## Nächste Schritte

1. ~~Hero-Sektion mocken~~ ✓
2. ~~Farbpalette finalisieren~~ ✓
3. Über-mich-Sektion mocken
4. Produktionsliste / Credits-Layout mocken
5. Presse-Sektion mocken
6. Galerie-Layout mocken
7. Kontaktformular mocken
8. Vollständigen Seitenfluss zusammenführen
9. In Claude Code umsetzen
