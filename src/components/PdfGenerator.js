// PdfGenerator.js

import React from 'react';
import html2pdf from 'html2pdf.js';

const PdfGenerator = () => {
  const generatePdf = () => {
    const content = document.getElementById('pdfContent');
    const options = {
      margin: 10,
      filename: 'generated.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().from(content).set(options).outputPdf();
  };

  return (
    <div>
      <h1>Generate PDF</h1>
      <div id="pdfContent">
        {/* Your content to be included in the PDF */}
        <p>This is the content of the PDF.</p>
      </div>
      <button onClick={generatePdf}>Generate PDF</button>
    </div>
  );
};

export default PdfGenerator;
