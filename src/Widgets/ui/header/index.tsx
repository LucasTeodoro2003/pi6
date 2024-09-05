import HomePage from '../../../Pages/Home';
import '../../../index';



function Header() {
    return (
        <div className='bg-cyan-50 dark:bg-black pt-8'>
            <div className='flex items-center'>
                <img src="https://s5.static.brasilescola.uol.com.br/be/2023/09/escudo-do-cruzeiro.jpg" alt="Escudo Cruzeiro" className='w-12 h-12 border-2 border-blue-600 dark:border-white rounded-full shadow-lg object-cover mr-4 ml-20 mb-8' />
                <h2 className='text-blue-600 font-bold mb-8'>Cruzeiro</h2>
            </div>
        </div>
    )
}

export default Header;