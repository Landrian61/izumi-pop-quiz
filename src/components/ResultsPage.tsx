import { useState } from 'react';
import type {
  ParticipantAnswer,
  QuizQuestion,
  QuizSubmission,
} from '../types/quiz';
import { ReviewAccordion } from './ReviewAccordion';
import { bandMessage, percentage } from '../lib/scoring';

interface Props {
  participant: { fullName: string };
  questions: QuizQuestion[];
  answers: ParticipantAnswer[];
  onRetake: () => void;
}

export function ResultsPage({
  participant,
  questions,
  answers,
  onRetake,
}: Props) {
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState(false);

  const score = answers.filter((a) => a.isCorrect).length;
  const total = questions.length;
  const pct = percentage(score, total);
  const band = bandMessage(score);

  const handleDownload = async () => {
    setDownloading(true);
    setError(false);
    try {
      const submission: QuizSubmission = {
        fullName: participant.fullName,
        answers,
        score,
        totalPossible: total,
        submittedAt: new Date().toISOString(),
      };
      // Lazy-load the heavy PDF library only when actually needed.
      const { downloadResultsPDF } = await import('../lib/pdfDownload');
      await downloadResultsPDF(submission);
    } catch (e) {
      console.error('PDF generation failed', e);
      setError(true);
    } finally {
      setDownloading(false);
    }
  };

  const answerFor = (id: number) => answers.find((a) => a.questionId === id);

  return (
    <div className="animate-rise-in mt-4">
      {/* Score block */}
      <div className="paper-grain rounded-2xl border border-honey-tan/60 bg-cream-warm/80 px-6 py-12 text-center shadow-warm backdrop-blur-sm sm:px-12">
        <p className="font-serif text-sm uppercase tracking-widest text-text-soft">
          Your Result
        </p>
        <p className="mt-4 font-serif text-6xl text-accent sm:text-7xl">
          {score} <span className="text-text-soft">out of</span> {total}
        </p>
        <p className="mt-2 text-lg text-text-soft">{pct}%</p>
        <p className="mx-auto mt-6 max-w-md font-serif text-lg italic text-text-muted">
          {band}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="w-full rounded-full bg-accent px-8 py-3.5 font-serif text-base text-cream shadow-warm transition-all duration-300 ease-cinematic hover:bg-accent-deep hover:shadow-[0_0_24px_rgba(139,46,46,0.32)] focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/30 active:scale-[0.98] disabled:cursor-wait disabled:opacity-70 sm:w-auto"
          >
            {downloading ? 'Preparing PDF…' : 'Download Results PDF'}
          </button>
          <button
            onClick={onRetake}
            className="w-full rounded-full border-2 border-accent bg-transparent px-8 py-3.5 font-serif text-base text-accent transition-all duration-300 ease-cinematic hover:bg-accent-soft focus:outline-none focus-visible:ring-4 focus-visible:ring-accent/30 active:scale-[0.98] sm:w-auto"
          >
            Retake Quiz
          </button>
        </div>

        {error && (
          <p className="mt-4 text-sm text-incorrect">
            Something went wrong generating the PDF. Please try again.
          </p>
        )}

        <p className="mx-auto mt-6 max-w-md text-xs leading-5 text-text-soft">
          Email the downloaded PDF to Andrew as your submission. The PDF is your
          record of completion.
        </p>
      </div>

      {/* Per-question review */}
      <h3 className="mt-12 mb-4 font-serif text-2xl text-accent">
        Review your answers
      </h3>
      <div className="space-y-2.5">
        {questions.map((q, i) => (
          <ReviewAccordion
            key={q.id}
            index={i + 1}
            question={q}
            answer={answerFor(q.id)}
          />
        ))}
      </div>
    </div>
  );
}
