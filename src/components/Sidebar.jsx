import Categoria from './Categoria'
import useQuiosco from '../hooks/useQuiosco'
import { useAuth } from '../hooks/useAuth'

export default function Sidebar() {
  const {categorias} = useQuiosco()
  const {logout, user} = useAuth({middleware: 'auth'})
  
  return (
    <aside className='md:w-72'>
      <div className='p-4'>
        <img
          className='w-40'
          src='img/logo.svg'
          alt='imagen logo'
        />
      </div>
      
      <p className="my-10 text-3xl font-bold italic text-center text-amber-500 truncate">Hola: {user?.name}</p>
      
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
            className='text-center bg-red-500 hover:bg-red-700 text-white truncate w-full p-3 font-bold
            cursor-pointer rounded'
            onClick={logout}
          >
            Cancelar Orden
          </button>
      </div>
      
    </aside>
  )
}
