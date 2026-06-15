import { pdf, type DocumentProps } from '@react-pdf/renderer';
import type { ReactElement } from 'react';
import { ResultsPDF } from '../pdf/ResultsPDF';
import type { QuizSubmission } from '../types/quiz';
import { formatISODate, nameForFile } from './scoring';

/**
 * Generate the results PDF client-side and trigger a browser download.
 * Filename: Izumi-Quiz-Results_First-Last_YYYY-MM-DD.pdf
 */
export async function downloadResultsPDF(
  submission: QuizSubmission,
): Promise<void> {
  // The wrapper component renders a <Document>; cast so pdf() accepts it.
  const doc = (
    <ResultsPDF submission={submission} />
  ) as ReactElement<DocumentProps>;

  const blob = await pdf(doc).toBlob();

  const date = formatISODate(new Date(submission.submittedAt));
  const filename = `Izumi-Quiz-Results_${nameForFile(
    submission.fullName,
  )}_${date}.pdf`;

  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  // Release the object URL after the download has been kicked off.
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
