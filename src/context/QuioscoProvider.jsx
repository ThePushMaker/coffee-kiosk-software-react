import { createContext, useState } from 'react'
import { categorias as categoriasDB } from '../data/categorias'

const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {
  
  const [categorias, setCategorias] = useState(categoriasDB)
  const [categoriaActual, setCategoriaActual] = useState(categorias[0])
  const [modal, setModal] = useState(false)
  const [producto, setProducto] = useState({})
  const [pedido, setPedido] = useState([])
  
  const handleClickCategoria = id => {
    const categoria = categorias.filter(categoria => categoria.id === id)[0]

    setCategoriaActual(categoria)
  }
  
  const handleClickModal = () => {
    setModal(!modal)
  }
  
  const handleSetProducto = producto => {
    setProducto(producto)
  }
  
  const handleAgregarPedido = ({categoria_id, imagen, ...producto}) => {
    if(pedido.some( pedidoState => pedidoState.id === producto.id )){
      // itera sobre los productos en el estado e identifica si el producto ya fue agregado al pedido 
      // y si es asi retorna producto, en caso contrario entonces retorna pedidoState (lo que ya tiene 
      // en memoria)
      const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id 
        ? producto : pedidoState)
      
      setPedido(pedidoActualizado)
    } else {
      setPedido([...pedido, producto])
    }
  }
  
  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        modal,
        handleClickModal,
        producto,
        handleSetProducto,
        pedido,
        handleAgregarPedido
      }}
    >
      {children}
    </QuioscoContext.Provider>
  )
}

export {
  QuioscoProvider
}
export default QuioscoContext