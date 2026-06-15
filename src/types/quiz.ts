export type AnswerLetter = 'A' | 'B' | 'C' | 'D';

export type DocumentSource =
  | 'Welcome Guide'
  | 'Cleaning Manual'
  | 'Appliances & Utilities Manual'
  | 'Emergency & Safety Guide';

export interface QuestionOption {
  letter: AnswerLetter;
  text: string;
}

export interface QuizQuestion {
  id: number;
  title: string;
  question: string;
  options: QuestionOption[];
  correctAnswer: AnswerLetter;
  explanation: string;
  whyOthersWrong: Partial<Record<AnswerLetter, string>>;
  source: DocumentSource;
}

export interface ParticipantAnswer {
  questionId: number;
  selected: AnswerLetter;
  isCorrect: boolean;
}

export interface QuizSubmission {
  fullName: string;
  answers: ParticipantAnswer[];
  score: number;
  totalPossible: number;
  submittedAt: string; // ISO date string
}

export type QuizStage =
  | { stage: 'landing' }
  | { stage: 'participant-form' }
  | { stage: 'question'; questionIndex: number }
  | { stage: 'results' };
