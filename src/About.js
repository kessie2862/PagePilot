import React from 'react';
import Root from './routes/root';
// import './index.css';

function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Root />
      <div className="mt-8 max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-4">About Book Search App</h1>
        <p className="text-lg mb-4">
          Welcome to the Book Search App! This application allows you to search
          for your favorite books and explore a vast collection of literature.
        </p>
        <p className="text-lg mb-4">
          With Book Search, you can discover new authors, explore different
          genres, and find that special book you&apos;ve been looking for.
        </p>
        <p className="text-lg mb-4">
          Whether you&apos;re an avid reader, a student conducting research, or
          simply someone who loves books, Book Search is your go-to destination
          for all things literature.
        </p>
        <p className="text-lg">Start searching for your next great read now!</p>
      </div>
    </div>
  );
}

export default About;
