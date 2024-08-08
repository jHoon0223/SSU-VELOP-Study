// src/components/PdfViewerPage.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import './PdfViewerPage.css';

// PDF.js worker 설정
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PdfViewerPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const pdfName = queryParams.get('pdf');
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const onDocumentLoadError = (error) => {
    console.error('Failed to load PDF document:', error);
  };

  const handlePrevPage = () => {
    setPageNumber(Math.max(pageNumber - 1, 1));
  };

  const handleNextPage = () => {
    setPageNumber(Math.min(pageNumber + 1, numPages));
  };

  const handleZoomIn = () => {
    setScale(scale + 0.2);
  };

  const handleZoomOut = () => {
    setScale(Math.max(scale - 0.2, 0.5));
  };

  const pdfFilePath = `/${pdfName}.pdf`;
  console.log('PDF File Path:', pdfFilePath);

  return (
    <div className="pdf-viewer-page">
      <h1>{pdfName}</h1>
      <Document
        file={pdfFilePath}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        loading="Loading PDF..."
      >
        <Page pageNumber={pageNumber} scale={scale} />
      </Document>
      <div className="controls">
        <button onClick={handlePrevPage} disabled={pageNumber <= 1}>
          Previous Page
        </button>
        <button onClick={handleNextPage} disabled={pageNumber >= numPages}>
          Next Page
        </button>
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
        <p>
          Page {pageNumber} of {numPages || '...'}
        </p>
      </div>
    </div>
  );
}

export default PdfViewerPage;