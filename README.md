# Savoria Restaurant

A one-page restaurant site built with React + Vite 8.2.2, matching the
provided hero design (dark, gold-accented, fine-dining feel) with a
Menu, About, Chefs, and Reservation section added below.

## Stack
- Vite `8.2.2`
- `@vitejs/plugin-react` `^6.0.0` (the first version of the plugin with
  official Vite 8 support — this is what fixes the `ERESOLVE` error you
  were hitting on Netlify)
- React 19, plain CSS (no Tailwind/UI kit — one stylesheet, `src/index.css`)

## Run locally
```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # outputs to dist/
npm run preview   # preview the production build
```

## Deploying (Netlify)
`netlify.toml` is already set up with:
```
command = "npm run build"
publish = "dist"
```
Just push this to your repo and connect it — no extra config needed.

## Scroll animation
Every heading/line/card that should animate in has a `data-reveal`
attribute. `src/hooks/useReveal.js` uses an `IntersectionObserver` to add
`.is-visible` the moment each element scrolls into view, which triggers
a bottom-to-top fade+slide defined in `index.css`:

```css
[data-reveal] { opacity: 0; transform: translateY(34px); transition: ...; }
[data-reveal].is-visible { opacity: 1; transform: translateY(0); }
```

Stagger timing per element is set inline via the `--reveal-delay` CSS
variable, so elements in the same section animate in one after another
rather than all at once. It also respects `prefers-reduced-motion`.

## Editing content
- Hero copy, stats, and the 7 category cards: `src/components/Hero.jsx`
- Featured dishes: `src/components/Menu.jsx`
- Story/about copy: `src/components/About.jsx`
- Team: `src/components/Chefs.jsx`
- Reservation form fields: `src/components/Reservation.jsx`
- Colors, fonts, spacing: CSS variables at the top of `src/index.css`

## Images
Food photography is hotlinked from Unsplash (free license, no attribution
required) via `images.unsplash.com` URLs. Swap any `src` in the
components with your own photos whenever you're ready — no build changes
needed.
