import Categoria from './Categoria'
import { categorias } from '../data/categorias'

export default function Sidebar() {
  return (
    <aside className='md:w-72'>
      <div className='p-4'>
        <img
          className='w-40'
          src='img/logo.svg'
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
      
    </aside>
  )
}
