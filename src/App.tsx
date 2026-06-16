import { useEffect, useMemo, useState } from 'react';
import { Layout } from './components/Layout';
import { LandingPage } from './components/LandingPage';
import { ParticipantForm } from './components/ParticipantForm';
import { QuizContainer } from './components/QuizContainer';
import { ResultsPage } from './components/ResultsPage';
import { quizQuestions } from './data/quizQuestions';
import type { ParticipantAnswer, QuizStage } from './types/quiz';
import {
  clearState,
  loadState,
  saveState,
  type PersistedState,
} from './lib/storage';
import { buildQuizSet, makeSeed } from './lib/shuffle';

export default function App() {
  const [participant, setParticipant] = useState<PersistedState['participant']>(
    null,
  );
  const [answers, setAnswers] = useState<ParticipantAnswer[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [seed, setSeed] = useState<number | null>(null);
  const [stage, setStage] = useState<QuizStage>({ stage: 'landing' });
  const [hydrated, setHydrated] = useState(false);

  // The per-attempt quiz set, with each question's options shuffled. Derived
  // deterministically from the seed so a refresh reproduces the same order.
  const questions = useMemo(
    () => (seed == null ? quizQuestions : buildQuizSet(quizQuestions, seed)),
    [seed],
  );

  // Boot: restore in-progress / completed state from localStorage.
  useEffect(() => {
    const s = loadState();
    setParticipant(s.participant);
    setAnswers(s.answers);
    setCurrentIndex(s.currentQuestionIndex);
    setCompleted(s.completed);
    // Restore the attempt's seed; mint one if an older in-progress state
    // predates this feature so the quiz still renders consistently.
    setSeed(s.seed ?? (s.participant ? makeSeed() : null));

    if (s.completed && s.participant) {
      setStage({ stage: 'results' });
    } else if (s.participant) {
      setStage({ stage: 'question', questionIndex: s.currentQuestionIndex });
    } else {
      setStage({ stage: 'landing' });
    }
    setHydrated(true);
  }, []);

  // Persist whenever meaningful state changes (after hydration).
  useEffect(() => {
    if (!hydrated) return;
    saveState({
      participant,
      answers,
      currentQuestionIndex: currentIndex,
      completed,
      seed,
    });
  }, [hydrated, participant, answers, currentIndex, completed, seed]);

  const handleBegin = () => setStage({ stage: 'participant-form' });

  const handleParticipant = (p: { fullName: string }) => {
    setParticipant(p);
    setAnswers([]);
    setCurrentIndex(0);
    setCompleted(false);
    setSeed(makeSeed()); // fresh option shuffle for this attempt
    setStage({ stage: 'question', questionIndex: 0 });
  };

  const handleAnswer = (answer: ParticipantAnswer) => {
    setAnswers((prev) => {
      if (prev.some((a) => a.questionId === answer.questionId)) return prev;
      return [...prev, answer];
    });
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      const next = currentIndex + 1;
      setCurrentIndex(next);
      setStage({ stage: 'question', questionIndex: next });
    } else {
      setCompleted(true);
      setStage({ stage: 'results' });
    }
  };

  const handleRetake = () => {
    clearState();
    setParticipant(null);
    setAnswers([]);
    setCurrentIndex(0);
    setCompleted(false);
    setSeed(null);
    setStage({ stage: 'landing' });
  };

  // Avoid a flash of the landing page before hydration completes.
  if (!hydrated) {
    return <Layout>{null}</Layout>;
  }

  return (
    <Layout>
      {stage.stage === 'landing' && <LandingPage onBegin={handleBegin} />}

      {stage.stage === 'participant-form' && (
        <ParticipantForm onSubmit={handleParticipant} />
      )}

      {stage.stage === 'question' && (
        <QuizContainer
          questions={questions}
          currentIndex={currentIndex}
          answers={answers}
          onAnswer={handleAnswer}
          onNext={handleNext}
        />
      )}

      {stage.stage === 'results' && participant && (
        <ResultsPage
          participant={participant}
          questions={questions}
          answers={answers}
          onRetake={handleRetake}
        />
      )}
    </Layout>
  );
}
