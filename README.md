# D&D Character Generator (SRD 5.1)

*[Leggi in italiano più sotto ↓](#generatore-di-personaggi-dd-srd-51)*

A free, open-source character builder and play-tracker for Dungeons &
Dragons, built entirely on Wizards of the Coast's officially open **SRD 5.1**
content (Creative Commons Attribution 4.0). Bilingual interface (Italian /
English). No backend — everything runs and saves locally in your browser.

This is a fan-made project, not affiliated with or endorsed by Wizards of
the Coast. See [NOTICE.md](NOTICE.md) for the required SRD attribution and
licensing details, and [LICENSE](LICENSE) for the MIT license covering the
code.

## Status

Functional end to end: a 7-step character creation wizard (species,
class, background, ability scores, skills, details, review), a
character sheet (screen + print), and a play mode (HP, spell slots,
rest, XP/leveling). SRD content currently covers all 12 classes (SRD
5.1's 9 races + 4 subraces, the single background and feat the SRD
publishes, full weapon/armor/equipment tables, and cantrips + spells
of levels 1–3). Class features are recorded up to level 20; spells of
level 4+ and additional subclasses are the natural next expansion.

## Development

Prerequisites: Node.js 20+.

```bash
npm install
npm run dev
```

```bash
npm run build   # production build to dist/
npm run preview # preview the production build locally
```

## Deployment

Static Vite build — deploy anywhere that serves static files (Vercel,
Netlify, GitHub Pages, ...). No environment variables or server required.

---

# Generatore di Personaggi D&D (SRD 5.1)

Un generatore di personaggi e tracker di gioco gratuito e open-source per
Dungeons & Dragons, basato interamente sui contenuti **SRD 5.1** resi
ufficialmente aperti da Wizards of the Coast (Creative Commons Attribution
4.0). Interfaccia bilingue (italiano / inglese). Nessun backend — tutto
funziona e viene salvato localmente nel browser.

Questo è un progetto amatoriale, non affiliato né sponsorizzato da Wizards
of the Coast. Vedi [NOTICE.md](NOTICE.md) per l'attribuzione SRD richiesta e
i dettagli di licenza, e [LICENSE](LICENSE) per la licenza MIT del codice.

## Stato

Funzionante da cima a fondo: un wizard di creazione personaggio in 7
passi (specie, classe, background, caratteristiche, abilità,
dettagli, riepilogo), una scheda personaggio (schermo + stampa) e una
modalità Gioca (PF, slot incantesimo, riposo, PX/livello). I contenuti
SRD coprono al momento tutte le 12 classi (le 9 razze + 4 sottorazze
della SRD 5.1, l'unico background e talento pubblicati dalla SRD, le
tabelle complete di armi/armature/equipaggiamento, e trucchetti +
incantesimi di livello 1-3). I tratti di classe sono registrati fino
al livello 20; incantesimi di livello 4+ e sottoclassi aggiuntive sono
la naturale espansione successiva.

## Sviluppo

Prerequisiti: Node.js 20+.

```bash
npm install
npm run dev
```

```bash
npm run build   # build di produzione in dist/
npm run preview # anteprima locale della build di produzione
```

## Pubblicazione

Build statica Vite — si può pubblicare ovunque si servano file statici
(Vercel, Netlify, GitHub Pages, ...). Nessuna variabile d'ambiente o server
necessari.
