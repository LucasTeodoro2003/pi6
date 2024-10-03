import { useNavigate } from "react-router-dom";
import { EmployeeRow, Person } from "../../../Entities/employee";

interface TableProps {
  people: Person[];
}

const Table: React.FC<TableProps> = ({ people }) => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="font-Jakarta text-xl font-semibold text-gray-800 dark:text-white">
            Funcionários
          </h1>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            onClick={() => navigate("/formulary")}
            className="inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-sm font-semibold bg-primary  text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto font-Jakarta"
          >
            Adicionar Funcionário
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-5 md:rounded-lg">
              <div className="max-h-96 max-w-max overflow-y-auto">
                <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold font-Jakarta text-gray-900 dark:text-white sm:pl-6"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-8 py-3.5 text-left text-sm font-semibold font-Jakarta text-gray-900 dark:text-white"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-8 py-3.5 text-left text-sm font-semibold font-Jakarta text-gray-900 dark:text-white"
                      >
                        Epi's Completas
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
                    {people.slice(0, 6).map((person) => (
                      <EmployeeRow person={person} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Table };
