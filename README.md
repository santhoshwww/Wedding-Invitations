# Thulasi ❤️ Nikhil — Premium Wedding Invitation

A cinematic, one-page digital wedding invitation built with React, TypeScript,
Tailwind CSS, Framer Motion, GSAP, and Lenis smooth scroll.

## Getting started

This project was authored in a sandboxed environment without network access,
so dependencies have **not** been installed or build-verified here. On your
own machine, with internet access:

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    Hero/            full-screen sunrise temple hero, illustrated couple
    Ganesha/          invocation section with animated Telugu sloka
    Story/            horizontal "Our Story" timeline
    Celebrations/     Mehendi / Nalugu / Haldi / Sangeet / Wedding cards
    ScratchCard/       interactive scratch-to-reveal save-the-date
    Venue/            royal scroll venue card + Google Maps link
    Countdown/        live countdown to the muhurtham
    RSVP/             envelope with wax seal, opens to Yes/No
    Footer/           Telugu blessing + lotus bloom animation
    shared/           GlobalAtmosphere (petals/clouds/birds), TempleBell, LotusDivider
  hooks/
    useLenis.ts             boots Lenis smooth scroll, synced to GSAP's ticker
    useCountdown.ts         live countdown to a target Date
    usePrefersReducedMotion.ts
  App.tsx
  main.tsx
  index.css
```

## Notes on content

- The wedding date (28 August 2026, Friday, Muhurtham 10:18 AM) is only
  revealed through the scratch card and the countdown target — the
  Celebrations "Wedding" card intentionally withholds it, per the brief.
- All illustrations (temple skyline, couple silhouette, Ganesha, lotus,
  story icons, celebration icons) are hand-authored inline SVG — no stock
  photography.
- Animations respect `prefers-reduced-motion`: the ambient atmosphere layer
  and Lenis smooth scroll both switch off automatically for users who have
  that preference set.
- The RSVP and Google Maps venue link are front-end only; wire them to a
  form backend or CRM if you want responses collected somewhere.

## Customizing

- Colors and fonts are centralized in `tailwind.config.ts`.
- Update the wedding date/time in `src/components/Countdown/Countdown.tsx`
  and the reveal copy in `src/components/ScratchCard/ScratchCard.tsx` if
  plans change.
- Venue address and the Google Maps query string live in
  `src/components/Venue/Venue.tsx`.
