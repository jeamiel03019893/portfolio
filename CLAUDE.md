# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check (`tsc -b`) then production build via Vite
- `npm run preview` — preview the production build locally

There is no test suite and no lint script configured, despite `typescript-eslint` being a devDependency (no `eslint.config.*` file exists yet). Type errors surface via `npm run build` or `npx tsc -b`.

## Architecture

This is a single-page personal portfolio site: React 19 + TypeScript + Vite, styled with Tailwind CSS v4 and shadcn/ui (new-york style, configured in `components.json`).

- **`src/App.tsx`** renders one long scrolling page by stacking section components in order (`Hero`, `About`, `Experience`, `Projects`, `Skills`, `Contact`), separated by gradient divider lines. There is no router — navigation is same-page anchor scrolling.
- **`src/components/sections/`** — one component per page section (`#about`, `#experience`, `#projects`, `#skills`, `#contact` ids matter: `Header.tsx` uses an `IntersectionObserver` keyed off these ids to highlight the active nav link).
- **`src/components/ui/`** — shadcn/ui primitives (button, card, dialog, badge, scroll-area, separator). Add new primitives via the shadcn CLI conventions in `components.json` rather than hand-rolling; aliases `@/components`, `@/lib`, `@/hooks`, `@/components/ui` are wired in both `components.json` and the `@/*` TS path alias (`tsconfig.app.json`, `vite.config.ts`).
- **`src/data/projects.ts`** is the single source of truth for project content — each `Project` entry drives both the grid card (`ProjectCard.tsx`) and the detail dialog (`ProjectModal.tsx`, opened from `Projects.tsx`). `gridSize` (`'featured' | 'secondary' | 'default'`) controls layout size in the grid; `status` (e.g. `'Live Production'`) drives `StatusBadge.tsx` styling. Adding/editing a project only requires editing this file plus dropping an image under `src/assets/img/projects/`.
- **`src/components/ThemeProvider.tsx`** manages a `light`/`dark` theme (persisted to `localStorage`, defaulting to system preference) via React context (`useTheme`), toggled from `ThemeToggle.tsx`. It also drives an artificial `isLoading`/`loadingProgress` state on every theme switch — check this if a theme change appears to introduce a loading flash.
- **`src/components/FadeIn.tsx`** is the shared scroll-reveal wrapper (IntersectionObserver-based) used throughout section components for entrance animations — prefer reusing it over adding new animation logic.
- **Styling**: theme colors are OKLCH CSS custom properties defined in `src/index.css` under `:root` (dark values) with a `.light` class block overriding them for light mode, mapped through Tailwind's `@theme inline`. The page's violet-toned background (radial gradient + dot grid) is set on `body` via separate `.dark body`/`.light body` rules — both kept unlayered so they win over the layered `bg-background` utility in `@layer base`. When adding a new token or themed color, add it to *both* the `:root` and `.light` blocks; a value only defined on `:root` silently won't change in light mode.
- Indentation is inconsistent across files (tabs in some, e.g. `projects.ts`, `ProjectModal.tsx`; spaces in others, e.g. `FadeIn.tsx`) — match the existing style of the file you're editing rather than the last file you touched.
