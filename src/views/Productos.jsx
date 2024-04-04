import useSWR from "swr"
import clienteAxios from "../config/axios"
import Producto from "../components/Producto"

export default function Productos() {
  const token = localStorage.getItem('AUTH_TOKEN')
  
  const fetcher = () => clienteAxios('/productos', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then(datos => datos.data)
  
  const { data, error, isLoading, mutate } = useSWR('/productos', fetcher, {refreshInterval: 10000})
  
  if(isLoading) return 'Cargando...'
  
  return (
    <div>
      <h1 className='text-4xl font-black'>Productos</h1>
      <p className='text-2xl my-10'>Maneja la disponibilidad desde aquí</p>
      
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>
        { data.data.map(producto => (
          <Producto 
            key={producto.imagen}
            producto={producto}
            botonDisponible={true}
            mutate={mutate}
          />
        )) }
      </div>
    </div>
  )
}
