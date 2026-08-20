# TasteNest — Restaurant Home Page (React)

A React + Vite build of the home page from your Figma file, coded to match
the design and fully responsive across mobile / tablet / desktop.

## Stack

- **React 18** + **Vite** (fast dev server, no config needed)
- **react-router-dom** for routing (Home + your existing auth routes)
- **react-icons** for all icons
- **CSS Modules** per component — no CSS framework, no conflicts between
  components, styles co-located with the component they belong to

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build      # production build to /dist
npm run preview    # preview the production build locally
```

## Folder structure

```
src/
├── components/
│   ├── common/           # Button, SectionHeading — reused across sections
│   ├── layout/            # Header, Footer — used on every non-auth page
│   └── home/               # One folder per home-page section:
│       Hero, About, CategoryTabs, DiscoverMenu, ReserveTable,
│       FeaturedDishes, Testimonials, Experts, AppPromo,
│       RecentNews, InstagramFeed
├── pages/
│   ├── Home/               # Assembles all home sections in order
│   ├── Login/               # Placeholder — wire up your existing component
│   ├── Signup/               # Placeholder — wire up your existing component
│   └── ForgotPassword/        # Placeholder — wire up your existing component
├── routes/
│   └── AppRoutes.jsx        # All <Route> definitions live here
├── data/
│   └── homeData.js          # All section content (menu items, testimonials,
│                              experts, news, nav links) — edit here, not JSX
├── styles/
│   ├── variables.css        # Color/font/spacing tokens
│   └── global.css           # Reset + base typography + .container/.section
├── App.jsx                  # Header/Footer wrapper + route outlet
└── main.jsx                 # React root, BrowserRouter

public/
└── images/                  # Drop your exported Figma images here (see
                               the README inside that folder for exact names)
```

> Images live in `public/restaurant-website/images/`, not `src/`. Vite serves everything in
> `public/` from the site root as-is, so `public/restaurant-website/images/hero-dish.jpg`
> is referenced in code as `/restaurant-website/images/hero-dish.jpg` and works correctly in
> both dev and production builds.

Every component has its JSX file sitting next to its own `*.module.css` —
e.g. `Hero.jsx` + `Hero.module.css` — so styles never leak between sections.

## Wiring up your existing auth

You mentioned Login, Signup, and Forgot Password are already built. Drop
your components into `src/pages/Login`, `src/pages/Signup`,
`src/pages/ForgotPassword` (replacing the placeholders), and the routes in
`src/routes/AppRoutes.jsx` will pick them up automatically — no other
changes needed. `App.jsx` already hides the site Header/Footer on
`/login`, `/signup`, and `/forgot-password` so those pages render clean.

## Responsive breakpoints

Every component's CSS module has its own `@media` queries:

- **Desktop:** default styles, no media query, ≥ 992px
- **Tablet:** `@media (max-width: 991px)`
- **Mobile:** `@media (max-width: 767px)` and `@media (max-width: 576px)`
  for the tightest layouts (nav collapses to a hamburger drawer here)

## Design tokens

All colors/fonts live in `src/styles/variables.css` as CSS custom
properties (`--color-primary`, `--color-accent`, `--font-heading`, etc.),
matched to the red/yellow/black palette and Poppins-style heading font
from the Figma file. Change a value there and it updates everywhere.

## Images

The design references photos (hero dish, chef portraits, menu items,
Instagram grid, etc.) that live in your Figma file, not in this codebase.
Export them from Figma and drop them into `public/images/` — see the
README in that folder for the exact filenames each component expects.

## Next steps / extending

- **Other pages** (About, Shop, Blog, Contact from the nav) aren't built
  yet — add a folder under `pages/` and a `<Route>` in `AppRoutes.jsx` the
  same way `Home` is wired up.
- **Cart / booking logic**: `ReserveTable.jsx` and the cart button in
  `FeaturedDishes.jsx` currently just log to the console — connect them to
  your backend/API when ready.
- **Multiple home page variants**: since your Figma file has several home
  pages, duplicate `pages/Home` (e.g. `pages/Home2`) and add a route if you
  want to build the others later — the section components in
  `components/home/` can mostly be reused/restyled rather than rebuilt.
