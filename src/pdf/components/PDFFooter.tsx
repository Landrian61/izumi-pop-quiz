import { View, Text } from '@react-pdf/renderer';
import { pdfStyles } from '../pdfStyles';

interface Props {
  generatedAt: string;
}

export function PDFFooter({ generatedAt }: Props) {
  return (
    <View style={pdfStyles.footer} fixed>
      <View style={pdfStyles.footerRule} />
      <View style={pdfStyles.footerRow}>
        <Text style={pdfStyles.footerText}>
          AIBOS Uganda · Izumi Living Stream · Generated {generatedAt}
        </Text>
        <Text
          style={pdfStyles.footerText}
          render={({ pageNumber, totalPages }) =>
            `Page ${pageNumber} of ${totalPages}`
          }
        />
      </View>
    </View>
  );
}
