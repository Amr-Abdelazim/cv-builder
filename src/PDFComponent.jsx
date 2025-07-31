// ExampleComponent.jsx
import React, { useRef } from 'react';
import html2pdf from 'html2pdf.js';

const PDFComponent = () => {
  const contentRef = useRef();

  const handleDownload = () => {
    const element = contentRef.current;

    const opt = {
      margin: 0.5,
      filename: 'document.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div>
      <div ref={contentRef} >
        <h1>Hello PDF</h1>
        <p>This part will be saved as PDF.</p>
        <img src="/vite.svg" alt="Example" />
      </div>

      <button onClick={handleDownload}>Download as PDF</button>
    </div>
  );
};

export default PDFComponent;
