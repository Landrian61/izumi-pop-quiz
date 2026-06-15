# Izumi Living Pop Quiz

A lightweight, backend-free web quiz that checks the AIBOS Uganda team's
understanding of the four Izumi pre-arrival documents before they travel to
Japan. 25 scenario-based questions, immediate teaching feedback after each
answer, and a downloadable results PDF that serves as the submission.

## Tech stack

- Vite + React 18 + TypeScript
- Tailwind CSS with custom design tokens (`src/styles/tokens.css`)
- `@react-pdf/renderer` for client-side PDF generation
- `localStorage` for in-progress persistence — no backend, no database, no auth

## Develop

```bash
npm install
npm run dev
```

Open the printed local URL (default http://localhost:5173).

## Build

```bash
npm run build      # type-checks then bundles to /dist
npm run preview    # serve the production build locally
```

## Deploy (Netlify)

- Build command: `npm run build`
- Publish directory: `dist`
- No environment variables needed.

A `netlify.toml` is included (build settings + SPA redirect). You can also
drag-and-drop the `/dist` folder onto Netlify.

## Project layout

```
src/
├── App.tsx                 # Top-level stage machine + persistence
├── components/             # Landing, form, quiz, results, review UI
├── data/quizQuestions.ts   # All 25 questions
├── lib/                    # storage, scoring helpers, PDF download
├── pdf/                    # @react-pdf results document + subcomponents
├── styles/tokens.css       # Design tokens (brand + cinematic accents)
└── types/quiz.ts           # Shared TypeScript interfaces
```

## The submission flow

Participants complete all 25 questions, download their results PDF, and email
it to Andrew. The PDF *is* the record of completion — there are no accounts.

Filename pattern: `Izumi-Quiz-Results_First-Last_YYYY-MM-DD.pdf`
