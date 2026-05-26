const fs = require('fs');
const path = require('path');
// Update this path if the PDF is in a different location
const pdfPath = path.resolve('C:\\Users\\Owner\\Downloads\\DOC-20241224-WA0029..pdf');

(async () => {
  try {
    const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
    const data = new Uint8Array(fs.readFileSync(pdfPath));
    const loadingTask = pdfjsLib.getDocument({ data });
    const pdfDocument = await loadingTask.promise;
    let fullText = '';
    for (let i = 1; i <= pdfDocument.numPages; i++) {
      const page = await pdfDocument.getPage(i);
      const content = await page.getTextContent();
      const strings = content.items.map((item) => item.str || '');
      fullText += strings.join(' ') + '\n\n';
    }
    console.log('---PDF TEXT START---');
    console.log(fullText.trim() || '(no text extracted)');
    console.log('---PDF TEXT END---');
  } catch (err) {
    console.error('Error reading PDF:', err && err.message ? err.message : err);
    process.exit(1);
  }
})();
