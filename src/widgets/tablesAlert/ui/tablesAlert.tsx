import { InformationCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Person } from "../../../Entities/employee";

interface TablesAlertPromps {
  people: Person[];
}

const TablesAlert: React.FC<TablesAlertPromps> = ({ people }) => {
  return (
    <ul
      role="list"
      className="ml-4 mt-4 mr-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
        >
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">
                  {person.name}
                </h3>
                <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                  {person.usingEpi}
                </span>
              </div>
              <p className="mt-1 truncate text-sm text-gray-500">
                {person.title}
              </p>
            </div>
            <img
              className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
              src={person.image}
              alt=""
            />
          </div>
          <div>
            <div className="-mt-px flex divide-gray-200">
              <div className="-ml-14 flex w-0 flex-1">Detalhes</div>
              <div className="-ml-px flex w-0 flex-1"></div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export { TablesAlert };
