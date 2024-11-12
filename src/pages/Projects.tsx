import { CloudArrowUpIcon, PaintBrushIcon, LinkIcon, CircleStackIcon, UserCircleIcon} from '@heroicons/react/20/solid';
import WeatherAppImg from '../components/assets/img/weatherapp.png';
import ToDoAppImg from '../components/assets/img/todoapp.png';

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Using gitHub and deploy on vercel platform.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Frontend.',
    description: 'Styling, anim and working off the look - frontend.',
    icon: PaintBrushIcon,
  },
  {
    name: 'Work with API.',
    description: 'Working with an existing third-party API.',
    icon: LinkIcon,
  },
];

const Projects: React.FC = () => {
  return (
    <div className="overflow-hidden bg-black rounded-lg bg-opacity-20 py-24 mt-10 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600"><a href="https://github.com/Matus4709/WeatherAppReact">GitHub</a> <a href="https://weatherappmatus4709.vercel.app/" className='ms-5' target="_blank"
                rel="noopener noreferrer">Live</a></h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-300 sm:text-5xl">
                Weather App
              </p>
              <p className="mt-6 text-lg/8 text-gray-400">
                Weather App powered by React and Weather API. I using there Tailwind, Frame Motion.  
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-300">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={WeatherAppImg}
            className="!w-[48rem] max-w-none object-cover rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
      

      <div className="overflow-hidden bg-black rounded-lg bg-opacity-20 py-24 mt-15 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600"><a href="https://github.com/Matus4709/TodoList-Django-React">GitHub</a> </h2>
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-300 sm:text-5xl">
                To Do List
              </p>
              <p className="mt-6 text-lg/8 text-gray-400">
                To Do List powered by Django + React + Authentication  
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-400 lg:max-w-none">
              
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-300">
                      <CircleStackIcon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                      Database
                    </dt>{' '}
                    <dd className="inline">Create and managment MySQL database to CRUD tasks.</dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-300">
                      <UserCircleIcon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                      Authentication
                    </dt>{' '}
                    <dd className="inline">Create Authentication system on MySQL with Django.</dd>
                  </div>
             
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={ToDoAppImg}
            className="!w-[48rem] max-w-none object-cover rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>

    </div>
  );
};

export default Projects;
