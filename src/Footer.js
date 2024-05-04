import { Typography } from '@material-tailwind/react';

import {
  FiGithub,
  FiLinkedin,
} from 'react-icons/fi';

const socialLinks = [
  {
    id: 2,
    icon: <FiGithub />,
    url: 'https://github.com/kessie2862',
  },
  {
    id: 4,
    icon: <FiLinkedin />,
    url: 'https://www.linkedin.com/in/prosperkessie/',
  },
];

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-medium text-lg text-blue-gray-900 md:mb-0"
          >
            &copy;
            {' '}
            {currentYear}
            {' '}
            <a href="https://material-tailwind.com/">PagePilot</a>
            . All Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <ul className="flex gap-4 sm:gap-8">
              {socialLinks.map((link) => (
                <a
                  href={link.url}
                  target="__blank"
                  key={link.id}
                  className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
                >
                  <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
                </a>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
