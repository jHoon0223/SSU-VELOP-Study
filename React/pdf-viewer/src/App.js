// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import PdfViewerPage from './components/PdfViewerPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/search" element={<PdfViewerPage />} />
      </Routes>
    </Router>
  );
}

export default App;