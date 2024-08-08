// src/components/SearchPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchPage.css';

function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?pdf=${searchQuery.trim()}`);
    }
  };

  return (
    <div className="search-page">
      <h1>PDF Search</h1>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Enter PDF name"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchPage;