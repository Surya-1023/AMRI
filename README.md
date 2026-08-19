# AMRI — Association for Mathematics, Research and Innovation

A React + Tailwind CSS website built from the AMRI wireframe, with a distinctive
"research notebook / chalkboard" visual identity: chalkboard-dark hero sections,
paper-textured content sections, a serif display face (Fraunces) paired with
Inter body text and JetBrains Mono for labels, and a chalk-drawn button style.

## Run it

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

Requires Node 18+.

## Structure

```
src/
  components/
    Navbar.jsx       — sticky nav, mobile menu
    Footer.jsx        — sitemap + social links
    Button.jsx        — Link / external <a> / <button>, 3 style variants
    PageHero.jsx      — shared dark hero banner for sub-pages
  pages/
    Home.jsx          — full landing page (hero, about, why-AMRI, research
                         areas, programs, events, impact, community, news)
    About.jsx
    Research.jsx
    Programs.jsx
    Events.jsx
    Membership.jsx    — join form
    Innovation.jsx
    Contact.jsx       — contact form
    Register.jsx      — simple event-registration redirect page
    NotFound.jsx
```

## Every button and where it goes

| Button (from wireframe)                                                              | Destination                                                |
|----------------------------------------------------------------------------------------|--------------------------------------------------------------|
| Nav: Home / About / Research / Programs / Events / Membership / Innovation / Contact    | `/`, `/about`, `/research`, `/programs`, `/events`, `/membership`, `/innovation`, `/contact` |
| Hero → "Join AMRI"                                                                     | `/membership`                                                 |
| Hero → "Explore Programs"                                                              | `/programs`                                                   |
| About preview → "Learn more about AMRI"                                                | `/about`                                                      |
| Research areas → "Explore Research"                                                    | `/research`                                                   |
| Programs preview → "See all programs"                                                  | `/programs`                                                   |
| Event card → "Register now" (FDP)                                                      | `/register?event=fdp`                                         |
| Event card → "Register now" (Workshop)                                                 | `/register?event=workshop`                                    |
| Event card → "View details" (Conference)                                               | `/events` (scrolls to conference card)                         |
| "View all events"                                                                      | `/events`                                                      |
| Impact section → "Discover our research"                                               | `/research`                                                    |
| "Join AMRI today"                                                                      | `/membership`                                                  |
| Footer → About / Research / Events / Membership / Contact                              | respective pages                                               |
| Footer → Email                                                                         | `mailto:contact@amri.org`                                      |
| Footer → LinkedIn / YouTube                                                            | external links (placeholder URLs — update to real profiles)    |
| Footer → Location                                                                      | `/contact`                                                      |

The Membership and Contact pages include working front-end forms (no backend
wired up — swap `handleSubmit` for a real API call or a form service like
Formspree when ready). `/register` is one lightweight, reusable confirmation
page for any event, so you don't need a dedicated page per event.

## Customizing

Colors and fonts are defined as design tokens in `src/index.css` under
`@theme` (Tailwind v4's CSS-first config) — change `--color-*` / `--font-*`
there and they propagate everywhere as utility classes (`bg-paper`,
`text-gold`, `font-display`, etc).
