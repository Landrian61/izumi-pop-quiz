import type { ParticipantAnswer } from '../types/quiz';

const STORAGE_KEY = 'izumi-quiz-state';

export interface PersistedState {
  participant: { fullName: string } | null;
  answers: ParticipantAnswer[];
  currentQuestionIndex: number;
  completed: boolean;
}

const emptyState: PersistedState = {
  participant: null,
  answers: [],
  currentQuestionIndex: 0,
  completed: false,
};

export function loadState(): PersistedState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...emptyState };
    const parsed = JSON.parse(raw) as Partial<PersistedState>;
    return {
      participant: parsed.participant ?? null,
      answers: Array.isArray(parsed.answers) ? parsed.answers : [],
      currentQuestionIndex:
        typeof parsed.currentQuestionIndex === 'number'
          ? parsed.currentQuestionIndex
          : 0,
      completed: Boolean(parsed.completed),
    };
  } catch {
    return { ...emptyState };
  }
}

export function saveState(state: PersistedState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage may be unavailable (private mode) — fail silently */
  }
}

export function clearState(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}
