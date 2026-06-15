/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent)',
        'accent-soft': 'var(--accent-soft)',
        'accent-deep': 'var(--accent-deep)',
        cream: 'var(--cream)',
        'cream-warm': 'var(--cream-warm)',
        'cream-deep': 'var(--cream-deep)',
        'header-bg': 'var(--header-bg)',
        'honey-tan': 'var(--honey-tan)',
        'honey-tan-soft': 'var(--honey-tan-soft)',
        amber: 'var(--amber)',
        'amber-soft': 'var(--amber-soft)',
        'dawn-rose': 'var(--dawn-rose)',
        'dusk-gold': 'var(--dusk-gold)',
        'sky-pale': 'var(--sky-pale)',
        text: 'var(--text)',
        'text-muted': 'var(--text-muted)',
        'text-soft': 'var(--text-soft)',
        correct: 'var(--correct)',
        'correct-soft': 'var(--correct-soft)',
        incorrect: 'var(--incorrect)',
        'incorrect-soft': 'var(--incorrect-soft)',
      },
      fontFamily: {
        serif: ['Georgia', "'Times New Roman'", 'serif'],
        body: ['Arial', "'Helvetica Neue'", 'sans-serif'],
        jp: ["'Noto Sans JP'", 'sans-serif'],
      },
      boxShadow: {
        warm: '0 4px 24px var(--shadow-warm)',
        'warm-lg': '0 8px 40px var(--shadow-warm)',
        'glow-correct': '0 0 0 4px var(--correct-glow)',
        'glow-incorrect': '0 0 0 4px var(--incorrect-glow)',
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
