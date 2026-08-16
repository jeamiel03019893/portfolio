# Emiel Azucena — Portfolio

Personal portfolio site: a single scrolling page covering intro, about, experience, projects, skills, and contact.

**Live site:** [emiel.vercel.app](https://emiel.vercel.app/)

## Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — dev server & build
- [Tailwind CSS v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (new-york style) on top of [Radix UI](https://www.radix-ui.com/)
- [lucide-react](https://lucide.dev/) — icons

## Features

- Single-page layout with same-page anchor navigation; the header highlights the active section as you scroll (`IntersectionObserver`)
- Project grid with a detail dialog per project, driven entirely by one data file
- Scroll-reveal entrance animations shared across sections via a reusable `FadeIn` wrapper

## Getting Started

```bash
git clone https://github.com/jeamiel03019893/portfolio.git
cd portfolio
npm install
npm run dev
```

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check (`tsc -b`) then production build |
| `npm run preview` | Preview the production build locally |

## Project Structure

```
src/
├── App.tsx                  # Stacks section components into the single page
├── components/
│   ├── sections/             # One component per page section (#about, #experience, #projects, #skills, #contact)
│   ├── ui/                   # shadcn/ui primitives (button, card, dialog, badge, ...)
│   ├── Header.tsx             # Nav with scroll-spy active-link highlighting
│   ├── ThemeProvider.tsx      # Light/dark theme context
│   ├── FadeIn.tsx             # Shared scroll-reveal animation wrapper
│   ├── ProjectCard.tsx        # Project grid card
│   ├── ProjectModal.tsx       # Project detail dialog
│   └── StatusBadge.tsx        # Status pill (e.g. "Live Production")
├── data/
│   └── projects.ts           # Single source of truth for all project content
├── assets/img/projects/      # Project images referenced from projects.ts
└── lib/                      # Shared utilities
```

## Adding a Project

Projects are defined in [`src/data/projects.ts`](src/data/projects.ts) — each entry drives both the grid card and its detail dialog. To add one:

1. Drop the project image in `src/assets/img/projects/`
2. Add a new entry to `projects.ts` (set `gridSize` to control its size in the grid, and `status` for its badge)

No other files need to change.
