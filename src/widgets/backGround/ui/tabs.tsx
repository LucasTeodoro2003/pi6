import React from "react";


interface IniciarTabs {
  show: boolean;
  setShow: (_: boolean) => void;
  tabs: Array<{ name: string; href: string; current: boolean }>;
  alterIDVideos: (href: string, index: number) => void;
  activeTab: number;
}

const Tabs: React.FC<IniciarTabs> = ({ show, setShow, tabs, alterIDVideos, activeTab }) => {
  return (
    <div>
      <div className="hidden sm:block">
        <nav
          className="isolate flex divide-x divide-gray-200 rounded-lg shadow dark:shadow-gray-600"
          aria-label="Tabs"
        >
          {tabs.map((tab, tabIdx) => (
            <a
              key={tab.name}
              href={tab.href}
              onClick={(e) => {
                e.preventDefault();
                alterIDVideos(tab.href, tabIdx);
              }}
              className={`group relative min-w-0 flex-1 overflow-hidden bg-white dark:bg-gray-800 py-4 px-4 text-sm font-medium text-center ${
                activeTab === tabIdx ? "text-gray-900 dark:text-gray-300" : "text-gray-500 dark:text-gray-500 hover:text-gray-700 dark:hover:text-white"
              }`}
              aria-current={activeTab === tabIdx ? "page" : undefined}
            >
              <span>{tab.name}</span>
              {activeTab === tabIdx && (
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-0.5 bg-indigo-500"
                />
              )}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export { Tabs };