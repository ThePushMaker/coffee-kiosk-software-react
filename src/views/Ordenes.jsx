import useSWR from "swr"
import clienteAxios from "../config/axios"

export default function Ordenes() {
  const token = localStorage.getItem('AUTH_TOKEN')
  const fetcher = () => clienteAxios('/pedidos', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  
  const {data, error, isLoading} = useSWR('/pedidos', fetcher)
  
  console.log(data?.data)
  console.log(error)
  console.log(isLoading)
  
  return (
    <div>
      <h1 className='text-4xl font-black'>Ordenes</h1>
      <p className='text-2xl my-10'>Administra las ordenes desde aquí</p>
    </div>
  )
}
