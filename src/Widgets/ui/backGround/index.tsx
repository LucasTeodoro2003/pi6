import React from 'react';
import ReactPlayer from 'react-player'

interface InicarCamera{
    VideosId: string;
}


const Background: React.FC<InicarCamera> = ({VideosId}) => {
    return (
        <div className="flex h-screen ml-64">
            <div className="bg-white dark:bg-gray-800 w-full h-full ">
                <div className='flex h-500px w-2/4 mt-5 ml-10 bg-white border-4 border-gray-600 dark:border-white'>
                    {VideosId ? (
                        <ReactPlayer url={VideosId} playing={false} pip={true} />
                    ) : (
                        <div className="flex h-full w-full text-justify justify-center">Clique no Icone da Camera para Iniciar
                        </div>
                    )}
                    </div>
            </div>
        </div>
    );
}

export {Background};