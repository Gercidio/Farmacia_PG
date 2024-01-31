import { Link } from "react-router-dom"
import { Pill } from '@phosphor-icons/react'

function Navbar() {

    return (
        <>
            <div className='w-full bg-sky-950 text-white flex justify-center py-4'>

                <div className="container flex justify-between text-lg">
                        <Link to="/home" className="text-2xl font-bold flex gap-4"><Pill size={48} weight='bold' />FarmaGen</Link>
                    <div className='flex gap-4'>

                        <Link to='/produtos' className='hover:underline'>Produtos</Link>
                        <Link to='/categoria' className='hover:underline'>Categoria</Link>
                        <Link to='/cadastroCategoria' className='hover:underline'>Cadastrar Categoria</Link>
                        <div className='hover:underline'>Perfil</div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar

