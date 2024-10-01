import { FaceSmileIcon } from "@heroicons/react/24/outline";
import React from "react";
import ReactPlayer from "react-player";
import { Tabs } from "./tabs";

interface InicarCamera {
  VideosId: string;
  tabs: Array<{ name: string; href: string; current: boolean }>;
  alterIDVideos: (href: string, index: number) => void;
  activeTab: number;
}



const Background: React.FC<InicarCamera> = ({ VideosId, tabs, alterIDVideos, activeTab}) => {
  return (
    <div className="flex h-screen ml-64">
      <div className="bg-white dark:bg-gray-800 w-full h-full ">
        <div className="flex mt-5 ml-9 bg-white dark:bg-gray-800">
          <div className="flex text-justify w-screen">
            {VideosId ? (
              <div>
                <Tabs show={true} setShow={() => {}} tabs={tabs} alterIDVideos={alterIDVideos} activeTab={activeTab} />
                <ReactPlayer url={VideosId} playing={false} pip={true} />
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

export { Background };
