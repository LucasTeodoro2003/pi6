import { HomePage } from '../../../Pages';
import '../../../index';



function Header() {
    return (
        <div className='bg-cyan-50 dark:bg-black pt-8'>
            <div className='flex items-center'>
                <img src="https://s5.static.brasilescola.uol.com.br/be/2023/09/escudo-do-cruzeiro.jpg" alt="Escudo Cruzeiro" className='w-12 h-12 border-2 border-blue-600 dark:border-white rounded-full shadow-lg object-cover mr-4 ml-20 mb-8' />
                <h2 className='text-blue-600 font-bold mb-8'>Cruzeiro</h2>
                {/* <div className='flex-grow flex justify-center mb-8 ml-'>MEIO FINAL</div> */}
                <div className='flex justify-end space-x-10 mb-8 mr-11 w-screen text-blue-600 font-bold'>
                    <div>Meio</div>
                    <div>Quase no meio</div>
                    <div>Menos a Direita</div>
                    <div>A direita</div>
                    <div>Totalmente a Direita</div>
                    <div className='ml-10'>|</div>
                    <div><img src="usuario.png" alt="Conta" className='w-8 h-8 dark:filter dark:invert' /></div>
                    <div><img src="sair.png" alt="Sair" className='w-6 h-6 mt-1 dark:filter dark:invert' /></div>
                </div>
            </div>
        </div>
    )
}

export default Header;