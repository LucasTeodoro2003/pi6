import '../../../index';
import { useState } from 'react';
import { AlertSimple } from '../../../shared';
import { CameraIcon } from '@heroicons/react/20/solid';
import { ArrowLeftStartOnRectangleIcon } from '@heroicons/react/24/outline';

interface ReceiveName{
    name: string;
}


const Header: React.FC<ReceiveName> = ({name}) => {
const [show, setShow]=useState(false)

    return (
        <>
        <div className='bg-white dark:bg-gray-800 pt-8 border-gray-200   dark:border-gray-900 border-b-2'>
            <div className='flex items-center'>
                {/* <img src="https://s5.static.brasilescola.uol.com.br/be/2023/09/escudo-do-cruzeiro.jpg" alt="Escudo Cruzeiro" className='w-12 h-12 border-2 border-blue-600 dark:border-white rounded-full shadow-lg object-cover mr-4 ml-20 mb-8' />
                <h2 className='text-blue-600 font-bold mb-8'>Cruzeiro</h2> */}
                {/* <div className='flex-grow flex justify-center mb-8 ml-'>MEIO FINAL</div> */}
                <div className='flex justify-end space-x-10 mb-8 mr-11 w-screen text-gray-800 dark:text-white font-medium'>
                    {/* <div>Meio</div>
                    <div>Quase no meio</div>
                    <div>Menos a Direita</div>
                    <div>A direita</div> */}
                    <div>Bem Vindo, {name}</div>
                    <div className='ml-10'>|</div>
                    <button onClick={() => {
                setShow(true)
            }}><CameraIcon title="Camera" className='w-8 h-8 text-gray-800 dark:text-white'  /></button>
                    <button><ArrowLeftStartOnRectangleIcon title="sair.png" className='w-7 h-7  text-gray-800 dark:text-white' /></button>
                </div>
            </div>
        </div>

        <AlertSimple show={show} setShow={setShow}/>
        </>
    )
}

export {Header};