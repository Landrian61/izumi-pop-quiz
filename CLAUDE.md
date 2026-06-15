# Izumi Living Pop Quiz — App Specification

*Drop this folder into the root of an empty project. Claude Code reads this `CLAUDE.md` and the data file at `src/data/quizQuestions.ts` to build the full app.*

---

## 1. Project Overview

A web-based quiz that assesses Ugandan AIBOS team members' understanding of four pre-arrival documents before they travel to Japan to stay at Izumi — a traditional Machiya house in Yokkaichi, Mie Prefecture, hosted by AEGIS Group.

The four source documents:

1. **Welcome Guide** — Izumi's philosophy, daily rhythm, conduct
2. **Cleaning Manual** — area-by-area cleaning procedures
3. **Appliances & Utilities Manual** — house equipment usage
4. **Emergency & Safety Guide** — protocols for fire, earthquake, gas leaks, medical emergencies

The quiz consists of **25 scenario-based multiple-choice questions**. Each question describes a real situation a team member might encounter, presents four plausible responses, and has one correct answer. Selecting an option immediately reveals whether the choice was right or wrong — and *why*. The "why" is the most important part: it converts every wrong answer into a teaching moment.

**Submission flow:** Once the participant completes all 25 questions, the app generates a downloadable PDF of their results (score, per-question breakdown). They then email that PDF to Andrew. No accounts, no databases, no logins — the PDF *is* the submission.

---

## 2. Goal

The quiz is preparation, not a hurdle. Team members should:

1. Demonstrate they have engaged deeply with the four documents
2. Receive immediate, educational feedback on their thinking
3. Arrive at Izumi already knowing how to behave in everyday situations
4. Leave with a PDF they can share as proof of completion

---

## 3. Tech Stack

Keep it lightweight. No backend, no database, no auth.

- **Framework:** Vite + React 18 + TypeScript
- **Styling:** Tailwind CSS with custom design tokens (in `src/styles/tokens.css`)
- **State:** React `useState` / `useReducer` — no external state library
- **PDF generation:** `@react-pdf/renderer` (renders real PDFs client-side, no server needed)
- **Persistence (in-progress quiz only):** `localStorage`
- **Deployment:** Netlify (free tier, drag-and-drop `/dist`, or Git-connected)

That's it. No environment variables. No API keys. No backend code.

---

## 4. Design System

The visual identity has two influences that must blend:

1. **The Izumi document family** — crimson Georgia headings, cream backgrounds, honey-tan rules, amber accents. This is the brand thread connecting the Welcome Guide, Cleaning Manual, and other documents.
2. **The Makoto Shinkai-inspired anime aesthetic** used in the Izumi wall charts — soft cinematic lighting, warm gradients, atmospheric depth, refined linework. This is the emotional thread that makes Izumi feel like a place worth caring for.

The quiz app should feel like it belongs in the same world as both. Professional, warm, slightly cinematic.

### Colors (define as CSS custom properties in `src/styles/tokens.css`)

```css
:root {
  /* Brand — from the document family */
  --accent: #8B2E2E;          /* Crimson — headings, primary buttons */
  --accent-soft: #F4E8E8;     /* Light crimson tint */
  --accent-deep: #6B2222;     /* Deeper crimson for hover/press */

  /* Surfaces — cream foundations */
  --cream: #FBF6EE;           /* Page background */
  --cream-warm: #FAF6EE;      /* Card surfaces, alternate rows */
  --cream-deep: #F3EBD8;      /* Pressed surfaces */
  --header-bg: #F0E5D5;       /* Section headers, card headers */

  /* Rules and accents */
  --honey-tan: #C9A66B;       /* Borders, dividers */
  --honey-tan-soft: #E8D6A8;  /* Soft honey accent */
  --amber: #B8845B;           /* Secondary accents */
  --amber-soft: #F2E7CD;      /* Soft amber background */

  /* Anime-cinematic accents — for atmosphere, gradients, glows */
  --dawn-rose: #E8B4A8;       /* Soft rose for dawn-like gradients */
  --dusk-gold: #DDB877;       /* Warm gold for sunset highlights */
  --sky-pale: #E5DDD0;        /* Pale warm sky for backdrops */
  --shadow-warm: rgba(139, 46, 46, 0.08);  /* Warm crimson shadow */

  /* Text */
  --text: #1A1A1A;
  --text-muted: #4A4A4A;
  --text-soft: #7A6F5C;

  /* Feedback states */
  --correct: #2A6B3B;
  --correct-soft: #DDEFE0;
  --correct-glow: rgba(42, 107, 59, 0.15);
  --incorrect: #B33A3A;
  --incorrect-soft: #F2DDDD;
  --incorrect-glow: rgba(179, 58, 58, 0.15);
}
```

### Typography

- **Headings:** `Georgia, 'Times New Roman', serif` — same as the documents
- **Body:** `Arial, 'Helvetica Neue', sans-serif`
- **Japanese characters in question text:** `'Noto Sans JP', sans-serif` as fallback so kanji like 火事, 救急です, 冷房, 暖房, 止, おしり, ビデ, 停止, 乾燥, 熱中症 render correctly

Add Noto Sans JP via Google Fonts in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" rel="stylesheet">
```

### The Manga/Anime Aesthetic — How to Translate It to UI

Avoid literal anime illustrations or characters. The aesthetic is about *atmosphere*, not iconography. Apply it through:

- **Subtle warm gradients on the page background.** Not flat cream — a faint cream-to-rose or cream-to-gold gradient, very soft, mimicking dawn light through paper.
- **Soft, cinematic shadows.** Cards should sit on the page with warm-toned shadows (`box-shadow: 0 4px 24px var(--shadow-warm)`), not the hard grey shadows of typical web UI.
- **Glow on interaction.** Hover states should subtly glow rather than just darken. Buttons gain a warm halo on hover. Selected options have a soft ring of light.
- **Generous whitespace and asymmetric balance.** Don't fill the screen edge-to-edge. Leave breathing room. Anime composition is patient.
- **Refined typography hierarchy.** Big titles, generous line-heights, deliberate weight contrast. Georgia at large sizes carries the same poise as Shinkai's lettering.
- **Slow, purposeful transitions.** Page transitions, option-lock animations, feedback reveals — all should ease in over 250–400ms. Snappy isn't this aesthetic; cinematic is.
- **Optional touch:** a very faint paper-grain texture overlay on cards (low opacity, 3–5%) to add tactile warmth without distraction.

The reference point is the wall charts you've been generating for Izumi (Furo Bath, Sleeping Room, etc.). The app should feel like the digital cousin of those — same world, same temperature, same care.

### What to avoid

- Flat material design / Tailwind defaults (gray-500 borders, sharp shadows)
- Pure white anywhere — always tinted cream
- Generic emoji or icon libraries for feedback (use refined custom marks or simple ✓/✗ in the brand colors)
- Heavy animation (no bouncing, no flashing, nothing playful in the cartoonish sense)
- Stock photos
- Anime characters or illustrations (we want the *feeling*, not the literal style)

---

## 5. App Features and User Flow

### Page 1 — Landing

- **Title:** "Izumi Living Pop Quiz" in large Georgia crimson
- **Subtitle:** "A pre-arrival check on what you've learned"
- **Intro paragraph (smaller, warm):**
  > Welcome. This short quiz tests your understanding of the four pre-arrival documents: the Welcome Guide, the Cleaning Manual, the Appliances & Utilities Manual, and the Emergency & Safety Guide. Each question describes a real situation you may encounter at Izumi. Take your time. After each answer, you will see immediate feedback explaining whether your choice was right or wrong, and why. This is preparation, not a test.
- **Stat row:** "25 questions · ~15–20 minutes · One attempt"
- Large **Begin** button (crimson, Georgia, with the warm-glow hover)
- Soft cinematic background gradient
- Footer: "AIBOS Uganda · Izumi Living Stream"

### Page 2 — Participant Form

- Heading: "Before we start"
- **Full Name** (text, required)
- **Email Address** (email, required, validates format)
- **Start Quiz** button (disabled until both fields are filled and email is valid)

On submit, persist name and email to `localStorage`, navigate to question 1.

### Page 3 — Quiz Question (one at a time, 25 questions)

For each question:

- **Top bar:** "Question N of 25" + a thin progress bar (honey-tan fill on cream-warm track)
- **Question title** in Georgia crimson, large (e.g., "The Evening After Your Furo Bath")
- **Scenario text** in body font, generous line-height (1.7)
- **Four option cards** stacked vertically:
  - Letter badge (A/B/C/D) on the left — circular, honey-tan border, Georgia letter inside
  - Option text in body font
  - Full card is clickable
  - Hover: soft cream-warm background, warm glow, slight scale (1.01)
  - Cursor: pointer
  - Default: cream background, honey-tan border

**On first click of an option:**

1. Lock all four options (no further changes — this is intentional, see philosophy below)
2. The selected option:
   - Correct → green border, green-soft background, ✓ icon, soft green glow
   - Incorrect → red border, red-soft background, ✗ icon, soft red glow
3. If the user got it wrong, also highlight the correct option with green border + ✓ (no glow on the unselected one)
4. **Feedback Panel** fades in below the options (250ms ease)
5. **Next** button appears at the bottom (or **See My Results** on question 25)

**Why locking is intentional:** Real life doesn't have a re-try button. Once you've leaned a suitcase against a shoji and torn it, you've done it. The quiz mirrors this. The locked answer + immediate feedback is the teaching mechanism — the discomfort of seeing a wrong answer is what makes the lesson stick.

### Feedback Panel (the heart of the experience)

The panel must contain:

1. **Result heading:**
   - Correct: green Georgia "Correct" + ✓
   - Wrong: amber-red Georgia "Not quite" + ✗
2. **Explanation paragraph** — the `explanation` field (always shown)
3. **"Why the other options miss" section** — listing each option from `whyOthersWrong` with its letter and reasoning

Panel visual:
- Cream-warm background
- 4px honey-tan left border (the "rule" motif from the documents)
- Comfortable padding (~24px)
- Heading in Georgia, body in Arial
- Subtle fade-in animation

### Page 4 — Results

After question 25:

- **Score display:** "21 out of 25" in massive Georgia crimson, centered
- **Score percentage** subtle below: "84%"
- **Band message** based on score (out of 25):
  - 23–25: "Excellent. You're ready for Izumi."
  - 18–22: "Strong understanding. Review the scenarios you missed below."
  - 13–17: "Take time to re-read the documents and try the quiz again."
  - 0–12: "Please re-read all four documents thoroughly before arrival."
- **Two prominent buttons side by side:**
  - **Download Results PDF** (crimson, primary) — generates and downloads the PDF
  - **Retake Quiz** (outlined, secondary) — clears state, returns to landing
- **Submission instruction** (small note below buttons):
  > Email the downloaded PDF to Andrew as your submission. The PDF is your record of completion.
- **Per-question review** as collapsible accordion cards below:
  - Title of the question
  - ✓ green or ✗ red mark
  - Click to expand: shows the scenario, the user's selection, the correct answer, and the explanation

### Behaviour notes

- **Mobile-responsive** throughout. Test at 375px width.
- **Touch-friendly** tap targets — option cards should be at least 60px tall on mobile.
- **localStorage** preserves in-progress state. Mid-quiz refresh resumes at the same question. After completion, results page survives refresh until the user clicks Retake.
- **No autosave indicator** — the saving is invisible; the experience just doesn't lose your work.

---

## 6. PDF Generation

Use `@react-pdf/renderer`. The PDF is generated client-side when the user clicks **Download Results PDF**, then triggers a download via the browser. No server involved.

### Filename pattern

```
Izumi-Quiz-Results_FirstName-LastName_YYYY-MM-DD.pdf
```

Example: `Izumi-Quiz-Results_John-Doe_2026-06-25.pdf`

### PDF Layout (single A4 portrait page if scoring high; flow to additional pages for the review)

**Header (top of page 1):**
- Title: "Izumi Living Pop Quiz — Results" (Georgia, crimson)
- Thin honey-tan rule below
- Right-aligned: submission date (formatted as "25 June 2026")

**Identity block (just below header):**
- Full Name (Georgia, bold)
- Email (Arial, muted)

**Score block (large, centered, takes ~1/3 of page 1):**
- Big crimson Georgia score: "21 / 25"
- Percentage below: "84%"
- Band message (italics, muted text)

**Per-question review (flows from page 1 to additional pages as needed):**

For each of the 25 questions:
- Compact card with:
  - Question number and title in Georgia
  - ✓ correct (green) or ✗ wrong (red) marker
  - "Your answer: [letter] — [text]" in muted gray
  - If wrong: "Correct answer: [letter] — [text]" in green
  - Skip the long "whyOthersWrong" — keep this readable. Just the user's answer vs the correct one.

**Footer (bottom of every page):**
- Thin honey-tan rule
- "AIBOS Uganda · Izumi Living Stream · Generated [datetime]"
- Page numbering: "Page N of M"

### PDF Styling Notes

Match the document family visual identity:
- Background: cream `#FBF6EE`
- Headings: Georgia, crimson `#8B2E2E`
- Body: Arial (or Helvetica if Arial unavailable in PDF font registry), text `#1A1A1A`
- Rules: 1px honey-tan `#C9A66B`
- Card backgrounds for review items: cream-warm `#FAF6EE` with thin honey-tan border

The PDF should feel like a Welcome-Guide companion — same temperature, same care.

### Suggested PDF component structure

```
src/pdf/
├── ResultsPDF.tsx        # Main PDF document component (uses @react-pdf/renderer)
├── components/
│   ├── PDFHeader.tsx
│   ├── PDFScoreBlock.tsx
│   ├── PDFReviewCard.tsx
│   └── PDFFooter.tsx
└── pdfStyles.ts          # Styled components for PDF (StyleSheet.create)
```

`@react-pdf/renderer` requires fonts to be explicitly registered. Register Georgia (or fallback to Times-Roman, which is built into PDF specs) and Helvetica.

---

## 7. Component Architecture

```
src/
├── App.tsx                       # Top-level routing/state machine
├── main.tsx                      # Entry point
├── index.css                     # Tailwind directives + global resets
├── components/
│   ├── LandingPage.tsx           # Title, intro, Begin button
│   ├── ParticipantForm.tsx       # Name + email capture
│   ├── QuizContainer.tsx         # Manages question state, progress, transitions
│   ├── QuestionCard.tsx          # Renders one question with options and feedback
│   ├── OptionButton.tsx          # Single option card
│   ├── FeedbackPanel.tsx         # Result + explanation + whyOthersWrong
│   ├── ProgressBar.tsx           # "Question N of 25" + visual bar
│   ├── ResultsPage.tsx           # Final score, band message, PDF button, per-question review
│   ├── ReviewAccordion.tsx       # Per-question review item (collapsible)
│   ├── BackgroundGradient.tsx    # The soft cinematic page backdrop
│   └── Layout.tsx                # Page wrapper with header/footer
├── data/
│   └── quizQuestions.ts          # All 25 questions (separate file — see below)
├── types/
│   └── quiz.ts                   # TypeScript interfaces (defined below)
├── lib/
│   ├── storage.ts                # localStorage helpers
│   └── pdfDownload.ts            # Trigger PDF generation and download
├── pdf/
│   ├── ResultsPDF.tsx            # PDF document component
│   ├── pdfStyles.ts              # PDF StyleSheet
│   └── components/               # PDF subcomponents
└── styles/
    └── tokens.css                # CSS custom properties (design tokens)
```

---

## 8. TypeScript Types

Create as `src/types/quiz.ts`:

```typescript
export type AnswerLetter = 'A' | 'B' | 'C' | 'D';

export type DocumentSource =
  | 'Welcome Guide'
  | 'Cleaning Manual'
  | 'Appliances & Utilities Manual'
  | 'Emergency & Safety Guide';

export interface QuestionOption {
  letter: AnswerLetter;
  text: string;
}

export interface QuizQuestion {
  id: number;
  title: string;
  question: string;
  options: QuestionOption[];
  correctAnswer: AnswerLetter;
  explanation: string;
  whyOthersWrong: Partial<Record<AnswerLetter, string>>;
  source: DocumentSource;
}

export interface ParticipantAnswer {
  questionId: number;
  selected: AnswerLetter;
  isCorrect: boolean;
}

export interface QuizSubmission {
  fullName: string;
  email: string;
  answers: ParticipantAnswer[];
  score: number;
  totalPossible: number;
  submittedAt: string; // ISO date string
}

export type QuizStage =
  | { stage: 'landing' }
  | { stage: 'participant-form' }
  | { stage: 'question'; questionIndex: number }
  | { stage: 'results' };
```

---

## 9. Quiz Data

The full set of 25 questions lives in `src/data/quizQuestions.ts` (already in this folder). Import it into the quiz container:

```typescript
import { quizQuestions } from './data/quizQuestions';
```

The data is structured exactly to match the `QuizQuestion` interface above. Each question has:

- `id` (1–25)
- `title` — descriptive heading (e.g., "The Evening After Your Furo Bath", "When the Ground Begins to Shake")
- `question` — the scenario text, varied phrasing throughout (e.g., "What would you do if…", "How would you approach a situation where…", "This has happened — what would be your next step?")
- `options` — array of 4 options with letters A/B/C/D
- `correctAnswer` — the letter of the correct option
- `explanation` — full paragraph explaining why the correct answer is right
- `whyOthersWrong` — object mapping each incorrect option letter to a short reason why it's wrong
- `source` — which of the four documents the question draws from

Distribution across documents:
- Welcome Guide: 7 questions
- Cleaning Manual: 5 questions
- Appliances & Utilities Manual: 6 questions
- Emergency & Safety Guide: 7 questions

---

## 10. localStorage Schema

Save in-progress state under key `izumi-quiz-state`:

```typescript
interface PersistedState {
  participant: { fullName: string; email: string } | null;
  answers: ParticipantAnswer[];
  currentQuestionIndex: number;
  completed: boolean;
}
```

- Save after each answer is locked in
- On app boot, load state — if `completed === true`, route directly to results
- If `participant === null`, route to landing
- Clear state when user clicks Retake Quiz

---

## 11. Deployment

### Netlify (recommended)

1. `npm run build` produces `/dist`
2. Drag and drop `/dist` onto Netlify, or connect the Git repo for auto-deploy
3. Build command: `npm run build`
4. Publish directory: `dist`
5. No environment variables needed

### Vercel (alternative)

1. `vercel` CLI or import via GitHub
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

---

## 12. Acceptance Checklist

The app is complete when:

- [ ] Landing page renders with title, intro, and Begin button
- [ ] Soft cinematic gradient background is visible (not flat cream)
- [ ] Participant form requires both name and a valid email
- [ ] All 25 questions render correctly including Japanese kanji (火事, 救急です, 冷房, 暖房, 止, 熱中症, おしり, ビデ, 停止, 乾燥)
- [ ] Selecting an option locks the answer and shows immediate feedback
- [ ] Feedback panel shows correct/incorrect result, explanation, and per-option reasoning
- [ ] Locked options visibly stay locked — no clicking through them again
- [ ] Progress bar advances correctly through all 25 questions
- [ ] Results page shows the final score out of 25 with band-appropriate message
- [ ] **Download Results PDF button generates and downloads a properly-formatted PDF**
- [ ] PDF filename follows the pattern `Izumi-Quiz-Results_FirstName-LastName_YYYY-MM-DD.pdf`
- [ ] PDF includes header, identity block, score block, per-question review, footer
- [ ] PDF visual identity matches the document family (cream, crimson Georgia, honey-tan rules)
- [ ] Per-question review accordion shows all 25 questions with user's answer and the correct answer
- [ ] Retake button clears state and returns to landing
- [ ] Mobile-responsive on phones (test at 375px width)
- [ ] Refresh mid-quiz resumes at the same question
- [ ] After completion, refresh on results page does not reset the quiz
- [ ] Visual identity matches the Izumi document family + carries the warm cinematic feel
- [ ] Deployed to Netlify with a shareable URL

---

## 13. Project Identity

- **Project name:** Izumi Living Pop Quiz
- **Owner:** AIBOS Uganda — EMS Team, Izumi Living Stream
- **Lead:** Andrew (Luswata Andrew Brian)
- **Audience:** Ugandan AIBOS team members travelling to Japan to stay at Izumi
- **Host organization:** AEGIS Group, Yokkaichi, Mie Prefecture
- **Sister artifacts:** Welcome Guide, Cleaning Manual, Appliances & Utilities Manual, Emergency & Safety Guide, wall charts (Makoto Shinkai-style)

When in doubt about tone, copy, or visual decisions, lean toward the warmth, care, and precision of the existing Izumi documents. The quiz is part of the same family.
