import { View, Text } from '@react-pdf/renderer';
import { pdfStyles } from '../pdfStyles';

interface Props {
  score: number;
  total: number;
  pct: number;
  band: string;
}

export function PDFScoreBlock({ score, total, pct, band }: Props) {
  return (
    <View style={pdfStyles.scoreBlock}>
      <Text style={pdfStyles.scoreBig}>
        {score} / {total}
      </Text>
      <Text style={pdfStyles.scorePct}>{pct}%</Text>
      <Text style={pdfStyles.scoreBand}>{band}</Text>
    </View>
  );
}
