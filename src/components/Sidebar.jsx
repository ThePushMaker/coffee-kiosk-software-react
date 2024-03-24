import Categoria from './Categoria'
import { categorias } from '../data/categorias'

export default function Sidebar() {
  return (
    <aside className='md:w-72'>
      <div className='p-4'>
        <img
          className='w-40'
          src='img/logo.svg'
          alt='imagen logo'
        />
      </div>
      
      <div className='mt-10'>
        { categorias.map(categoria => (
          <Categoria 
            key={ categoria.id }
            categoria={ categoria } 
          />
        )) }
      </div>
      
      <div className='my-5 px-5'>
          <button
            className='text-center bg-red-500 hover:bg-red-700 text-white w-full p-3 font-bold cursor-pointer'
          >
            Cancelar Orden
          </button>
      </div>
      
    </aside>
  )
}
