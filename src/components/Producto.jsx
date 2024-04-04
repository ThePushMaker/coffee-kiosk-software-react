import {formatearDinero} from '../helpers'
import useQuiosco from '../hooks/useQuiosco'

export default function Producto({ producto, botonAgregar = false, botonDisponible = false, mutate }) {
  const {handleClickModal, handleSetProducto, handleClickProductoAgotado} = useQuiosco()
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
      
      {botonAgregar === true && (
        <button
          type='button'
          className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3
          uppercase font-bold rounded'
          onClick={ () => {
            handleClickModal() 
            handleSetProducto(producto)
          }}        
        >
          Agregar
        </button>
      )}
      {botonDisponible === true && (
        <button
        type='button'
        className='bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3
        uppercase font-bold rounded'
        onClick={() => {
            handleClickProductoAgotado(producto.id)
            mutate()
        }}        
      >
        Producto Agotado
      </button>
      )}
      
            {/* <button 
      onClick={() => mutate()}
      >
      reinasd
      </button> */}
      
    </div>
  )
}
