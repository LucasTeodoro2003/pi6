import React from "react";
import { Person } from "../../../Entities";
import { TablesAlert } from "../../tablesAlert/ui/tablesAlert";

interface BackgroundAlertPromps {
  people: Person[];
}

const BackgroundAlert: React.FC<BackgroundAlertPromps> = ({people}) => {
  
  return (
    <div className="flex h-screen ml-64">
      <div className="bg-white dark:bg-gray-800 w-full h-full ">
        <TablesAlert people={people}/>
        <div className="flex mt-5 ml-9 bg-white dark:bg-gray-800">
          <div className="flex text-justify w-screen"></div>
        </div>
      </div>
    </div>
  );
};

export { BackgroundAlert };
