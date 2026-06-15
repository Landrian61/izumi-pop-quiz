/** Band message keyed on raw score out of 25. */
export function bandMessage(score: number): string {
  if (score >= 23) return "Excellent. You're ready for Izumi.";
  if (score >= 18) return 'Strong understanding. Review the scenarios you missed below.';
  if (score >= 13) return 'Take time to re-read the documents and try the quiz again.';
  return 'Please re-read all four documents thoroughly before arrival.';
}

export function percentage(score: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((score / total) * 100);
}

/** "25 June 2026" */
export function formatLongDate(d: Date): string {
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/** "2026-06-25" for filenames */
export function formatISODate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

/** "25 June 2026, 14:30" for the footer generated-at stamp */
export function formatDateTime(d: Date): string {
  return `${formatLongDate(d)}, ${d.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  })}`;
}

/** Sanitise a name into "First-Last" for the filename. */
export function nameForFile(fullName: string): string {
  return (
    fullName
      .trim()
      .replace(/[^\p{L}\p{N}\s-]/gu, '')
      .replace(/\s+/g, '-') || 'Participant'
  );
}
