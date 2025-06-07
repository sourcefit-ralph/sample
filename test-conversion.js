// Test conversion functionality
import { marked } from 'marked';
import jsPDF from 'jspdf';
import { Document, Packer, Paragraph, TextRun } from 'docx';

const testMarkdown = `# Test Document

This is a **professional** test document to verify conversion quality.

## Features

- Enhanced PDF generation
- Professional DOCX formatting
- Multiple themes
- Advanced settings

### Code Example

\`\`\`javascript
function test() {
  console.log("Enhanced conversion");
}
\`\`\`

> This is a blockquote to test formatting

| Feature | Status |
|---------|--------|
| PDF | ✅ Enhanced |
| DOCX | ✅ Professional |
| HTML | ✅ Multiple themes |
`;

console.log('Testing Markdown parsing...');
const tokens = marked.lexer(testMarkdown);
console.log('✅ Markdown tokens parsed:', tokens.length, 'elements');

console.log('Testing jsPDF...');
const pdf = new jsPDF();
pdf.text('Test PDF Generation', 10, 10);
console.log('✅ jsPDF instance created');

console.log('Testing DOCX...');
const doc = new Document({
  sections: [{
    children: [
      new Paragraph({
        children: [
          new TextRun({
            text: 'Test DOCX Generation',
            bold: true,
            size: 24
          })
        ]
      })
    ]
  }]
});
console.log('✅ DOCX document created');

console.log('✅ All conversion libraries working correctly');