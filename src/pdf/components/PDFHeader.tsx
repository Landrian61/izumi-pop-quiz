import { View, Text } from '@react-pdf/renderer';
import { pdfStyles } from '../pdfStyles';

interface Props {
  dateLabel: string;
}

export function PDFHeader({ dateLabel }: Props) {
  return (
    <View>
      <View style={pdfStyles.header}>
        <Text style={pdfStyles.headerTitle}>
          Izumi Living Pop Quiz — Results
        </Text>
        <Text style={pdfStyles.headerDate}>{dateLabel}</Text>
      </View>
      <View style={pdfStyles.rule} />
    </View>
  );
}
