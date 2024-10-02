import { Person } from "./types";

interface EmployeeRowProps {
  person: Person;
}

export function EmployeeRow({ person }: EmployeeRowProps) {
  return (
    <tr key={person.email}>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
          </div>
          <div className="ml-4">
            <div className="font-medium text-gray-900 dark:text-white">
              {person.name}
            </div>
            <div className="text-gray-500 dark:text-gray-300">
              {person.email}
            </div>
          </div>
        </div>
      </td>
      <td className="whitespace-nowrap px-1 py-4 text-sm text-gray-500">
        <div className="text-gray-900 dark:text-white">{person.title}</div>
        <div className="text-gray-500 dark:text-white">{person.department}</div>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-center">
        {person.usingEpi ? (
          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
            Completa
          </span>
        ) : (
          <span className="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
            Incompleta
          </span>
        )}
      </td>
    </tr>
  );
}
