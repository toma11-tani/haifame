# Repository Guidelines

## Project Structure & Module Organization
- Vite + React app with Tailwind. Entry points: `src/main.jsx` mounts `<App />`, `src/App.jsx` wires routes.
- UI is split into reusable pieces under `src/components` (e.g., `Navbar.jsx`, `Hero.jsx`, `Menu.jsx`) and page-level wrappers in `src/pages` (e.g., `HomePage.jsx`, `AboutPage.jsx`). Styles live in `src/index.css` with Tailwind directives; global config in `tailwind.config.js` and `postcss.config.js`.
- Static assets belong in `public/`; Vite serves them at root. Avoid importing from outside `src/` to keep the build predictable.

## Build, Test, and Development Commands
- Install dependencies: `npm install`.
- Run locally with hot reload: `npm run dev`.
- Production build to `dist/`: `npm run build`.
- Preview the built site locally: `npm run preview`.
- Deploy to GitHub Pages (builds then publishes `dist/`): `npm run deploy`. Ensure `gh-pages` is available and GitHub token/SSH is configured.

## Coding Style & Naming Conventions
- Use 2-space indentation, semicolons optional but be consistent within a file. Favor const and arrow functions.
- Components and pages: PascalCase filenames and exports (e.g., `GalleryPage.jsx`). Hooks or utilities: camelCase.
- Prefer functional components with top-level imports sorted by path depth. Co-locate small, component-specific helpers near their use; promote shared UI into `src/components`.
- Styling: favor Tailwind utility classes; keep custom CSS minimal in `src/index.css`. When adding global tokens, use Tailwind config instead of ad-hoc values.

## Testing Guidelines
- No automated test suite is configured yet. When adding tests, prefer Vitest + React Testing Library to match Vite. Name test files `ComponentName.test.jsx` alongside components or in `__tests__` under `src/`.
- For manual verification, run `npm run build` to catch import and Tailwind issues before pushing.

## Commit & Pull Request Guidelines
- Recent history uses short, imperative summaries (e.g., "Fix GitHub Pages routing"). Follow that style; keep scope focused and descriptive.
- PRs should include: what changed and why, screenshots for UI changes (desktop + mobile), related issue or ticket link, and any manual verification steps. If modifying build/deploy paths, call it out explicitly to avoid regressions on GitHub Pages.
