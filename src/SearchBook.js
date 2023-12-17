import React, { useState } from 'react';
import axios from 'axios';
import Root from './routes/root';
import Card from './Card';
import './index.css';

function SearchBook() {
  const [search, setSearch] = useState('');
  const [bookData, setData] = useState([]);
  console.log(bookData);

  const searchBook = (e) => {
    if (e.key === 'Enter') {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDbQaNoOGLbfAK0KKA0DnwV8af1FKzeFso`,
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="default-container">
      <Root />
      <div className="row2">
        <h2>Find Your Book</h2>
        <div className="search">
          <input
            type="text"
            placeholder="Enter Your Book Name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={searchBook}
          />
        </div>
      </div>
      <div className="container">
        {bookData.length > 0 && <Card book={bookData} />}
      </div>
    </div>
  );
}

export default SearchBook;
