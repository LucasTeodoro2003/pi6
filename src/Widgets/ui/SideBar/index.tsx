import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '#', icon: HomeIcon, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Sidebar() {
  return (
    <>
      <div>
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Componentes Sidebar */}
          <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 dark:border-gray-900 bg-white dark:bg-gray-800 ">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4 ">
              <div className="flex flex-shrink-0 items-center px-4">
                <img
                  className="h-8 w-auto "
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="PI"
                />
              </div>
              <nav className="mt-5 flex-1 space-y-1 bg-white dark:bg-gray-800 px-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-100 dark:bg-gray-300 text-gray-600 dark:text-gray-600' : 'text-gray-600 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white/80',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-gray-500 dark:texr-gray-600' : 'text-gray-400 dark:text-white group-hover:text-gray-500 dark:group-hover:text-white/80',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
