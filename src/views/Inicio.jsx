import Producto from '../components/Producto.jsx'
import { productos } from '../data/productos.js'
import useQuiosco from '../hooks/useQuiosco.js'

export default function Inicio() {
  const {categoriaActual} = useQuiosco()
    
  return (
    <>
      <h1 className='text-4xl font-black'>{categoriaActual?.nombre}</h1>
      <p className='text-2xl my-10'>Elige y personaliza tu pedido</p>
      
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        { productos.map(producto => (
          <Producto 
            key={producto.imagen}
            producto={producto}
          />
        )) }
      </div>
    </>
  )
}
