import React from "react";
import { Formulary } from "../../formulary/ui/formulary";


interface InicarCamera {
}



const BackgroundFormulary: React.FC<InicarCamera> = () => {
  return (
    <div className="flex h-screen ml-64">
      <div className="bg-white dark:bg-gray-800 w-full h-full ">
        <Formulary />
        <div className="flex mt-5 ml-9 bg-white dark:bg-gray-800">
          <div className="flex text-justify w-screen">
          </div>
        </div>
      </div>
    </div>
  );
};

export { BackgroundFormulary };