import type { AnswerLetter, QuestionOption } from '../types/quiz';

interface Props {
  option: QuestionOption;
  locked: boolean;
  isSelected: boolean;
  isCorrectAnswer: boolean;
  onSelect: (letter: AnswerLetter) => void;
}

export function OptionButton({
  option,
  locked,
  isSelected,
  isCorrectAnswer,
  onSelect,
}: Props) {
  // Visual state resolution once the answer is locked.
  let stateClasses =
    'border-honey-tan bg-cream hover:bg-cream-warm hover:shadow-warm hover:scale-[1.01]';
  let badgeClasses = 'border-honey-tan text-accent';
  let mark: '✓' | '✗' | null = null;
  let markClass = '';

  if (locked) {
    if (isSelected && isCorrectAnswer) {
      stateClasses =
        'border-correct bg-correct-soft shadow-glow-correct';
      badgeClasses = 'border-correct text-correct';
      mark = '✓';
      markClass = 'text-correct';
    } else if (isSelected && !isCorrectAnswer) {
      stateClasses =
        'border-incorrect bg-incorrect-soft shadow-glow-incorrect';
      badgeClasses = 'border-incorrect text-incorrect';
      mark = '✗';
      markClass = 'text-incorrect';
    } else if (isCorrectAnswer) {
      // The right answer the user didn't pick — highlight, no glow.
      stateClasses = 'border-correct bg-correct-soft/60';
      badgeClasses = 'border-correct text-correct';
      mark = '✓';
      markClass = 'text-correct';
    } else {
      stateClasses = 'border-honey-tan/40 bg-cream/60 opacity-70';
      badgeClasses = 'border-honey-tan/50 text-text-soft';
    }
  }

  return (
    <button
      type="button"
      disabled={locked}
      onClick={() => onSelect(option.letter)}
      aria-pressed={isSelected}
      className={`group flex w-full items-center gap-4 rounded-xl border-2 px-4 py-4 text-left transition-all duration-300 ease-cinematic focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/20 ${stateClasses} ${
        locked ? 'cursor-default' : 'cursor-pointer'
      }`}
      style={{ minHeight: 60 }}
    >
      <span
        className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border-2 font-serif text-base transition-colors duration-300 ${badgeClasses}`}
      >
        {option.letter}
      </span>

      <span className="jp-text flex-1 text-[15px] leading-6 text-text">
        {option.text}
      </span>

      {mark && (
        <span className={`animate-fade-in text-xl font-bold ${markClass}`}>
          {mark}
        </span>
      )}
    </button>
  );
}
