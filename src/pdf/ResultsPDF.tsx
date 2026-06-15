import { Document, Page, View, Text } from '@react-pdf/renderer';
import { pdfStyles } from './pdfStyles';
import { PDFHeader } from './components/PDFHeader';
import { PDFScoreBlock } from './components/PDFScoreBlock';
import { PDFFooter } from './components/PDFFooter';
import type { QuizSubmission } from '../types/quiz';
import {
  bandMessage,
  percentage,
  formatLongDate,
  formatDateTime,
} from '../lib/scoring';

interface Props {
  submission: QuizSubmission;
}

export function ResultsPDF({ submission }: Props) {
  const submittedDate = new Date(submission.submittedAt);
  const dateLabel = formatLongDate(submittedDate);
  const generatedAt = formatDateTime(submittedDate);
  const pct = percentage(submission.score, submission.totalPossible);
  const band = bandMessage(submission.score);

  return (
    <Document
      title={`Izumi Quiz Results — ${submission.fullName}`}
      author="AIBOS Uganda · Izumi Living Stream"
    >
      <Page size="A4" style={pdfStyles.page}>
        <PDFHeader dateLabel={dateLabel} />

        <View>
          <Text style={pdfStyles.identityName}>{submission.fullName}</Text>
        </View>

        <PDFScoreBlock
          score={submission.score}
          total={submission.totalPossible}
          pct={pct}
          band={band}
        />

        <PDFFooter generatedAt={generatedAt} />
      </Page>
    </Document>
  );
}
