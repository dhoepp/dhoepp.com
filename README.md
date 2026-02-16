# dhoepp.com

Personal developer portfolio built with [Astro](https://astro.build), showcasing a transition from 13 years of IT infrastructure experience into software development.

**Live:** [dhoepp.com](https://dhoepp.com)

## Background Animation

The site features a procedurally generated background using two SVG blob shapes animated with CSS keyframes at offset intervals (90s and 85s). The asymmetrical timing creates a non-repeating visual pattern that cycles over ~25 minutes before looping. The entire animation runs on two SVGs (888 bytes + 716 bytes), a CSS blur filter, and keyframe transforms — no JavaScript, no canvas, no external libraries.

## Tech Stack

- **Framework:** Astro 5
- **Language:** TypeScript
- **Styling:** Scoped CSS with backdrop blur and layered box-shadow for a 2.5D card effect
- **Deployment:** Vercel with custom domain

## Project Structure

```
src/
├── assets/          # SVG blob backgrounds
├── components/      # Astro components (Hero, About, Projects, Contact)
├── data/            # Project data (TypeScript)
├── layouts/         # Base layout with global styles and scroll-snap
└── pages/           # Route pages
```

## Getting Started

```sh
# Clone the repository
git clone https://github.com/dhoepp/dhoepp.com.git
cd dhoepp.com

# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server runs at `localhost:4321`.

## Commands

| Command             | Action                                       |
| :------------------ | :------------------------------------------- |
| `npm install`       | Install dependencies                         |
| `npm run dev`       | Start local dev server at `localhost:4321`    |
| `npm run build`     | Build production site to `./dist/`           |
| `npm run preview`   | Preview the production build locally         |

## Featured Projects

- **Math Learning App** — FastAPI education application with TypeScript frontend ([repo](https://github.com/dhoepp/math-practice-app) | [demo](https://math-practice-app-eta.vercel.app/))
- **Developer Portfolio** — This site. Sub-1KB procedural background animation with a 25-minute loop cycle ([repo](https://github.com/dhoepp/dhoepp.com))
