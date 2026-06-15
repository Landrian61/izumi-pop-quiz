import type { AnswerLetter, QuizQuestion } from '../types/quiz';
import { OptionButton } from './OptionButton';
import { FeedbackPanel } from './FeedbackPanel';

interface Props {
  question: QuizQuestion;
  selected: AnswerLetter | null;
  isLast: boolean;
  onSelect: (letter: AnswerLetter) => void;
  onNext: () => void;
}

export function QuestionCard({
  question,
  selected,
  isLast,
  onSelect,
  onNext,
}: Props) {
  const locked = selected !== null;
  const isCorrect = selected === question.correctAnswer;

  return (
    <div className="animate-rise-in mt-6">
      <div className="paper-grain rounded-2xl border border-honey-tan/60 bg-cream-warm/80 px-5 py-7 shadow-warm backdrop-blur-sm sm:px-8 sm:py-9">
        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-text-soft">
          {question.source}
        </p>

        <h2 className="jp-text font-serif text-2xl leading-snug text-accent sm:text-3xl">
          {question.title}
        </h2>

        <p className="jp-text mt-4 text-[15px] leading-[1.7] text-text-muted">
          {question.question}
        </p>

        <div className="mt-7 space-y-3">
          {question.options.map((option) => (
            <OptionButton
              key={option.letter}
              option={option}
              locked={locked}
              isSelected={selected === option.letter}
              isCorrectAnswer={option.letter === question.correctAnswer}
              onSelect={onSelect}
            />
          ))}
        </div>

        {locked && selected && (
          <FeedbackPanel
            question={question}
            selected={selected}
            isCorrect={isCorrect}
          />
        )}

        {locked && (
          <div className="mt-7 flex justify-end">
            <button
              onClick={onNext}
              className="animate-fade-in inline-flex items-center gap-2 rounded-full bg-accent px-9 py-3.5 font-serif text-base text-cream shadow-warm transition-all duration-300 ease-cinematic hover:bg-accent-deep hover:shadow-[0_0_24px_rgba(139,46,46,0.32)] focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/30 active:scale-[0.98]"
            >
              {isLast ? 'See My Results' : 'Next'}
              <span aria-hidden>→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
