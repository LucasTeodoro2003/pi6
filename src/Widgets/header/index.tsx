import HomePage from '../../Pages/Home';
import '../../index';



function Header() {
    return (
        <div className='bg-cyan-50 dark:bg-black pt-4'>
            <div>
                <img onClick={() => document.body.classList.toggle('dark')} src="https://s5.static.brasilescola.uol.com.br/be/2023/09/escudo-do-cruzeiro.jpg" alt="Escudo Cruzeiro" className='w-12 h-12 border-2 border-black rounded-full shadow-lg object-cover mr-4 ml-20 mb-4' />
                <h2 className='text-black dark:text-cyan-500 font-bold text-center'>Teste HomePage Widgets</h2>
            </div>
        </div>
    )
}

export default Header;