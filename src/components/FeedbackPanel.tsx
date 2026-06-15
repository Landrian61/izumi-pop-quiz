import type { AnswerLetter, QuizQuestion } from '../types/quiz';

interface Props {
  question: QuizQuestion;
  selected: AnswerLetter;
  isCorrect: boolean;
}

export function FeedbackPanel({ question, selected, isCorrect }: Props) {
  // List the wrong-option reasons, skipping the one the user got right.
  const otherEntries = (
    Object.entries(question.whyOthersWrong) as [AnswerLetter, string][]
  ).filter(([letter]) => letter !== question.correctAnswer);

  return (
    <div
      className="animate-feedback mt-6 rounded-r-xl border-l-4 border-honey-tan bg-cream-warm/90 px-6 py-6 shadow-warm backdrop-blur-sm"
      role="status"
    >
      <div className="flex items-center gap-2">
        <span
          className={`text-xl font-bold ${
            isCorrect ? 'text-correct' : 'text-incorrect'
          }`}
        >
          {isCorrect ? '✓' : '✗'}
        </span>
        <h3
          className={`font-serif text-2xl ${
            isCorrect ? 'text-correct' : 'text-incorrect'
          }`}
        >
          {isCorrect ? 'Correct' : 'Not quite'}
        </h3>
      </div>

      {!isCorrect && (
        <p className="mt-3 text-sm text-text-soft">
          You chose <strong>{selected}</strong>. The correct answer is{' '}
          <strong className="text-correct">{question.correctAnswer}</strong>.
        </p>
      )}

      <p className="jp-text mt-3 text-[15px] leading-7 text-text-muted">
        {question.explanation}
      </p>

      {otherEntries.length > 0 && (
        <div className="mt-5">
          <h4 className="font-serif text-base text-accent">
            Why the other options miss
          </h4>
          <ul className="mt-3 space-y-2.5">
            {otherEntries.map(([letter, reason]) => (
              <li key={letter} className="flex gap-3 text-sm leading-6">
                <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-honey-tan/70 font-serif text-xs text-text-soft">
                  {letter}
                </span>
                <span className="jp-text text-text-muted">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
