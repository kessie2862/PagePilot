'use client';

import { useState } from 'react';
import axios from 'axios';
import Root from '../components/routes/Root';
import Card from './Card';
import './styles/search.scss';

function SearchBook() {
  const [search, setSearch] = useState('');
  const [bookData, setData] = useState([]);

  const searchBook = (e) => {
    if (e.key === 'Enter') {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyDbQaNoOGLbfAK0KKA0DnwV8af1FKzeFso`
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-[5rem]">
      <Root />
      <div className="mt-8">
        <div className="mt-4 text-center">
          <h2 className="text-base md:text-xl font-bold mb-4 text-gray-600">
            If you know the name of the author or publisher, you can simply type
            it in, search,
            <br />
            and find the book without needing to know its title.
          </h2>
        </div>
        <div className="max-w-md mx-auto">
          <label
            htmlFor="book-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search Book
          </label>
          <div className="relative mx-4 md:mx-auto">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              id="book-search"
              type="text"
              onKeyDown={searchBook}
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              placeholder="Enter your book name, title, author or publisher."
              className="block w-[100%] md:mx-auto md:w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
        </div>
      </div>
      <div className="col-12 pt-5 container">
        {bookData.length > 0 && <Card book={bookData} />}
      </div>
    </div>
  );
}

export default SearchBook;
