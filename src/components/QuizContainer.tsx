import { useEffect } from 'react';
import type { AnswerLetter, ParticipantAnswer, QuizQuestion } from '../types/quiz';
import { ProgressBar } from './ProgressBar';
import { QuestionCard } from './QuestionCard';

interface Props {
  questions: QuizQuestion[];
  currentIndex: number;
  answers: ParticipantAnswer[];
  onAnswer: (answer: ParticipantAnswer) => void;
  onNext: () => void;
}

export function QuizContainer({
  questions,
  currentIndex,
  answers,
  onAnswer,
  onNext,
}: Props) {
  const question = questions[currentIndex];
  const isLast = currentIndex === questions.length - 1;

  // If the current question was already answered (e.g. refreshed after
  // locking but before pressing Next), restore the locked selection.
  const existing = answers.find((a) => a.questionId === question.id);
  const selected = existing?.selected ?? null;

  // Scroll to top whenever the question changes.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentIndex]);

  const handleSelect = (letter: AnswerLetter) => {
    if (selected !== null) return; // already locked
    onAnswer({
      questionId: question.id,
      selected: letter,
      isCorrect: letter === question.correctAnswer,
    });
  };

  return (
    <div>
      <ProgressBar current={currentIndex + 1} total={questions.length} />

      <QuestionCard
        key={question.id}
        question={question}
        selected={selected}
        isLast={isLast}
        onSelect={handleSelect}
        onNext={onNext}
      />
    </div>
  );
}
