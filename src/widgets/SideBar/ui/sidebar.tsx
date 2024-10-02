import {
  BellAlertIcon,
  CalendarIcon,
  Cog8ToothIcon,
  HomeIcon,
  IdentificationIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

interface NavigationItem {
  name: string;
  link: string;
  icon: React.ElementType;
}

const navigation: NavigationItem[] = [
  { name: 'Home', link: '/', icon: HomeIcon },
  { name: 'Alertas', link: '/alertas', icon: BellAlertIcon },
  { name: 'Funcionários', link: '/formulary', icon: IdentificationIcon },
  { name: 'Calendar', link: '#', icon: CalendarIcon },
  { name: 'Documents', link: '#', icon: InboxIcon },
  { name: 'Configurações', link: '/config', icon: Cog8ToothIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function Sidebar() {
  const location = useLocation();

  return (
    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 dark:border-gray-900 bg-white dark:bg-gray-800 ">
        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4 ">
          <div className="flex flex-shrink-0 items-center px-4">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="PI"
            />
          </div>
          <nav className="mt-5 space-y-1 bg-white dark:bg-gray-800 px-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={classNames(
                  location.pathname === item.link
                    ? 'bg-gray-100 dark:bg-gray-300 text-gray-600 dark:text-gray-600 transition'
                    : 'text-gray-600 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white/80 transition',
                  'group flex items-center px-2 py-2 text-sm font-Jakarta font-bold rounded-md'
                )}
              >
                <item.icon
                  className={classNames(
                    location.pathname === item.link
                      ? 'text-gray-500 dark:text-gray-600'
                      : 'text-gray-400 dark:text-white group-hover:text-gray-500 dark:group-hover:text-white/80 transition',
                    'mr-3 flex-shrink-0 h-6 w-6'
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </Link>
            ))}
          </nav>
          <div className='mt-12'>
            <img src="epi.png" alt="" className='opacity-70 '/>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Sidebar };
