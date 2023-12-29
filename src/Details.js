import { ArrowRightIcon } from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Knowledge Acquisition.',
    description:
      "It allows individuals to acquire information on a wide range of subjects. Whether it's textbooks, articles, or novels, reading exposes people to new ideas, concepts, and facts.",
    icon: ArrowRightIcon,
  },
  {
    name: 'Critical Thinking Skills.',
    description:
      'Additionally, it encorages critical thinking by presenting diverse perspectives and challenging ideas.',
    icon: ArrowRightIcon,
  },
  {
    name: 'Empathy and Cultural Understanding.',
    description:
      'Fiction in particular, allows readers to immerse themselves in different cultures, historical periods, and perspectives.',
    icon: ArrowRightIcon,
  },
];

function Details() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Over here
              </h2>
              <p className="mt-2 text-lg font-bold tracking-tight text-gray-900 sm:text-4xl">
                Wanna know the importance of reading? 🤔
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Reading is a fundamental skill with numerous benefits. Here are
                three important reasons why reading is essential.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}

export default Details;
