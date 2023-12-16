import React from 'react';
import Root from './routes/root';
import './index.css';

function SearchBook() {
  return (
    <div className="default-container">
      <Root />
      <h1 className="search-header">This is the Search Book page</h1>
    </div>
  );
}

export default SearchBook;
