import { StyleSheet } from '@react-pdf/renderer';

/* Palette mirrors the document family / design tokens. */
export const pdfColors = {
  cream: '#FBF6EE',
  creamWarm: '#FAF6EE',
  crimson: '#8B2E2E',
  honeyTan: '#C9A66B',
  text: '#1A1A1A',
  textMuted: '#5A5247',
  correct: '#2A6B3B',
  incorrect: '#B33A3A',
};

/*
 * Fonts: @react-pdf ships Times-Roman and Helvetica as built-in PDF
 * standard fonts. We use Times-Roman in place of Georgia (both are warm
 * serifs) for headings, and Helvetica for body text.
 */
export const pdfStyles = StyleSheet.create({
  page: {
    backgroundColor: pdfColors.cream,
    paddingTop: 40,
    paddingBottom: 56,
    paddingHorizontal: 44,
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: pdfColors.text,
  },

  /* Header */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  headerTitle: {
    fontFamily: 'Times-Roman',
    fontSize: 18,
    color: pdfColors.crimson,
    maxWidth: 360,
  },
  headerDate: {
    fontFamily: 'Helvetica',
    fontSize: 9,
    color: pdfColors.textMuted,
  },
  rule: {
    borderBottomWidth: 1,
    borderBottomColor: pdfColors.honeyTan,
    marginTop: 8,
    marginBottom: 14,
  },

  /* Identity */
  identityName: {
    fontFamily: 'Times-Bold',
    fontSize: 13,
    color: pdfColors.text,
  },
  identityEmail: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: pdfColors.textMuted,
    marginTop: 2,
  },

  /* Score block */
  scoreBlock: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 26,
  },
  scoreBig: {
    fontFamily: 'Times-Bold',
    fontSize: 46,
    color: pdfColors.crimson,
  },
  scorePct: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    color: pdfColors.textMuted,
    marginTop: 2,
  },
  scoreBand: {
    fontFamily: 'Times-Italic',
    fontSize: 11,
    color: pdfColors.textMuted,
    marginTop: 10,
    textAlign: 'center',
    maxWidth: 360,
  },

  /* Section heading */
  sectionHeading: {
    fontFamily: 'Times-Roman',
    fontSize: 13,
    color: pdfColors.crimson,
    marginBottom: 8,
  },

  /* Review card */
  card: {
    backgroundColor: pdfColors.creamWarm,
    borderWidth: 1,
    borderColor: pdfColors.honeyTan,
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 7,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  cardMark: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 11,
    marginRight: 6,
    width: 12,
  },
  cardTitle: {
    fontFamily: 'Times-Bold',
    fontSize: 10.5,
    color: pdfColors.text,
    flex: 1,
  },
  cardSource: {
    fontFamily: 'Helvetica',
    fontSize: 7.5,
    color: pdfColors.textMuted,
    marginLeft: 6,
  },
  cardAnswer: {
    fontFamily: 'Helvetica',
    fontSize: 9,
    color: pdfColors.textMuted,
    marginTop: 4,
    marginLeft: 18,
  },
  cardAnswerCorrect: {
    fontFamily: 'Helvetica',
    fontSize: 9,
    color: pdfColors.correct,
    marginTop: 2,
    marginLeft: 18,
  },

  /* Footer (fixed on every page) */
  footer: {
    position: 'absolute',
    bottom: 24,
    left: 44,
    right: 44,
  },
  footerRule: {
    borderBottomWidth: 1,
    borderBottomColor: pdfColors.honeyTan,
    marginBottom: 6,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: {
    fontFamily: 'Helvetica',
    fontSize: 7.5,
    color: pdfColors.textMuted,
  },
});
