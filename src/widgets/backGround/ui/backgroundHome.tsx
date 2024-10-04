import { FaceSmileIcon } from "@heroicons/react/24/outline";
import React from "react";
import ReactPlayer from "react-player";
import { Person } from "../../../Entities/employee";
import { AlertEmployee } from "../../alertEmployee/ui/alertEmployee";
import { Table } from "../../tableEmployee/ui/table";
import { Tabs } from "../../tabsPlayer/ui/tabs";
interface BackgroundHomeProps {
  VideosId: string;
  tabs: Array<{ name: string; href: string; current: boolean }>;
  alterIDVideos: (href: string, index: number) => void;
  activeTab: number;
  people: Person[];
}

const BackgroundHome: React.FC<BackgroundHomeProps> = ({
  VideosId,
  tabs,
  alterIDVideos,
  activeTab,
  people,
}) => {
  return (
    <div className="flex h-screen ml-64">
      <div className="bg-white dark:bg-gray-800 w-full h-full">
        <div className="flex mt-5 ml-9 bg-white dark:bg-gray-800">
          <div className="flex text-justify w-screen">
            {VideosId ? (
              <div className="flex flex-col">
                <div className="flex">
                  <div className="flex flex-col">
                    <h2 className="text-lg font-Jakarta font-semibold mb-4 text-center dark:text-white">
                      Câmeras Disponíveis
                    </h2>
                    <Tabs
                      setShow={() => {}}
                      tabs={tabs}
                      alterIDVideos={alterIDVideos}
                      activeTab={activeTab}
                    />
                    <ReactPlayer url={VideosId} playing={false} pip={true} />
                  </div>
                  <div></div>
                  <Table people={people} />
                </div>
                <div className="px-36 mx-36 mt-4">
                <AlertEmployee />
                </div>
              </div>
            ) : (
              <div className="flex h-full w-full font-Jakarta font-semibold text-justify justify-center dark:text-white">
                Clique no Icone da Camera para Iniciar{" "}
                <FaceSmileIcon className="ml-2 w-5 h-5"></FaceSmileIcon>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { BackgroundHome };
