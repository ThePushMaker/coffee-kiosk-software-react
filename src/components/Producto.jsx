import {formatearDinero} from '../helpers'
import useQuiosco from '../hooks/useQuiosco'

export default function Producto({ producto }) {
  const {handleClickModal} = useQuiosco()
  const { nombre, precio, imagen } = producto
  
  
  return (
    <div
      className='border p-3 shadow bg-white'
    >
      <img
        alt={ `imagen ${nombre}` }
        className='w-full'
        src={ `/img/${imagen}.jpg` }
      />
      
      <div className='p-5'>
        <h3 className='text-2xl font-bold'>{ nombre }</h3>
        <p className='mt-5 font-black text-4xl text-amber-400'>
          { formatearDinero(precio) }
        </p>
      </div>
      
      <button
        type='button'
        className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold'
        onClick={ () => handleClickModal() }        
      >
        Agregar
      </button>
      
    </div>
  )
}
