import Link from 'next/link';
import Root from './routes/Root';

function About() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Root />
      <div className="mt-8 w-[90%] mx-auto max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-4">About PagePilot App</h1>
        <p className="text-base md:text-lg mb-4">
          Welcome to the PagePilot App! This application allows you to search
          for your favorite books and explore a vast collection of literature.
        </p>
        <p className="text-base md:text-lg mb-4">
          With PagePilot, you can discover new authors, explore different
          genres, and find that special book you&apos;ve been looking for.
        </p>
        <p className="text-base md:text-lg mb-4">
          Whether you&apos;re an avid reader, a student conducting research, or
          simply someone who loves books, PagePilot is your go-to destination
          for all things literature.
        </p>
        <p className="text-base md:text-lg">
          Start{' '}
          <Link href="/search" className="text-gray-500 hover:text-indigo-700">
            searching
          </Link>{' '}
          for your next great read now!
        </p>
      </div>
    </div>
  );
}

export default About;
