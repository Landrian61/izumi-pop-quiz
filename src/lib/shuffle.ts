import type { AnswerLetter, QuizQuestion } from '../types/quiz';

const LETTERS: AnswerLetter[] = ['A', 'B', 'C', 'D'];

/**
 * mulberry32 — a small, fast, deterministic PRNG seeded from a 32-bit int.
 * Deterministic seeding lets us reproduce the exact same shuffle on refresh,
 * so locked answers and the results review stay consistent within an attempt.
 */
function mulberry32(seed: number): () => number {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Shuffle one question's options and re-letter them A–D by their new
 * position, remapping `correctAnswer` and the `whyOthersWrong` keys so the
 * question stays internally consistent.
 */
function shuffleQuestion(q: QuizQuestion, rng: () => number): QuizQuestion {
  const order = [...q.options];
  // Fisher–Yates
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }

  const oldToNew: Partial<Record<AnswerLetter, AnswerLetter>> = {};
  const options = order.map((opt, idx) => {
    const newLetter = LETTERS[idx];
    oldToNew[opt.letter] = newLetter;
    return { letter: newLetter, text: opt.text };
  });

  const whyOthersWrong: Partial<Record<AnswerLetter, string>> = {};
  for (const [oldLetter, reason] of Object.entries(q.whyOthersWrong) as [
    AnswerLetter,
    string,
  ][]) {
    const nl = oldToNew[oldLetter];
    if (nl) whyOthersWrong[nl] = reason;
  }

  return {
    ...q,
    options,
    correctAnswer: oldToNew[q.correctAnswer]!,
    whyOthersWrong,
  };
}

/** Build a per-attempt quiz set with every question's options shuffled. */
export function buildQuizSet(
  questions: QuizQuestion[],
  seed: number,
): QuizQuestion[] {
  const rng = mulberry32(seed);
  return questions.map((q) => shuffleQuestion(q, rng));
}

/** A fresh non-zero seed for a new attempt. */
export function makeSeed(): number {
  return Math.floor(Math.random() * 0x7fffffff) + 1;
}
