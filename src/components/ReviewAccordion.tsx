import { useState } from 'react';
import type { ParticipantAnswer, QuizQuestion } from '../types/quiz';

interface Props {
  index: number;
  question: QuizQuestion;
  answer: ParticipantAnswer | undefined;
}

export function ReviewAccordion({ index, question, answer }: Props) {
  const [open, setOpen] = useState(false);
  const isCorrect = answer?.isCorrect ?? false;
  const selected = answer?.selected;

  const selectedText =
    question.options.find((o) => o.letter === selected)?.text ?? '—';
  const correctText =
    question.options.find((o) => o.letter === question.correctAnswer)?.text ??
    '—';

  return (
    <div className="overflow-hidden rounded-xl border border-honey-tan/60 bg-cream-warm/70 shadow-sm">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors duration-200 hover:bg-cream-deep/40"
      >
        <span
          className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold ${
            isCorrect
              ? 'bg-correct-soft text-correct'
              : 'bg-incorrect-soft text-incorrect'
          }`}
        >
          {isCorrect ? '✓' : '✗'}
        </span>

        <span className="jp-text flex-1 font-serif text-[15px] leading-snug text-text">
          <span className="text-text-soft">{index}.</span> {question.title}
        </span>

        <span
          className={`flex-shrink-0 text-text-soft transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
          aria-hidden
        >
          ▾
        </span>
      </button>

      {open && (
        <div className="animate-fade-in border-t border-honey-tan/40 px-4 py-4 sm:px-5">
          <p className="jp-text text-[14px] leading-[1.7] text-text-muted">
            {question.question}
          </p>

          <div className="mt-4 space-y-1.5 text-sm">
            <p className={isCorrect ? 'text-correct' : 'text-incorrect'}>
              <span className="font-semibold">Your answer:</span> {selected ?? '—'}{' '}
              — <span className="jp-text">{selectedText}</span>
            </p>
            {!isCorrect && (
              <p className="text-correct">
                <span className="font-semibold">Correct answer:</span>{' '}
                {question.correctAnswer} —{' '}
                <span className="jp-text">{correctText}</span>
              </p>
            )}
          </div>

          <div className="mt-4 rounded-lg border-l-4 border-honey-tan bg-cream/70 px-4 py-3">
            <p className="jp-text text-[14px] leading-[1.7] text-text-muted">
              {question.explanation}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
