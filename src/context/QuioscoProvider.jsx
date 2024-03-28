import { createContext, useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { categorias as categoriasDB } from '../data/categorias'

const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {
  
  const [categorias, setCategorias] = useState(categoriasDB)
  const [categoriaActual, setCategoriaActual] = useState(categorias[0])
  const [modal, setModal] = useState(false)
  const [producto, setProducto] = useState({})
  const [pedido, setPedido] = useState([])
  const [total, setTotal] = useState(0)
  
  useEffect(() => {
    // tiene dos parametros, total es un acumulado, producto es el elemento sobre el cual está iterando
    // multiplica el precio por la cantidad para obtener el subtotal de cada producto y lo suma al total
    // incrementando en cada iteración
    // se define que el valor de inicio es 0
    const nuevoTotal = pedido.reduce( (total, producto) => (producto.precio * producto.cantidad)
    + total, 0 )
    setTotal(nuevoTotal)
  }, [pedido])
  
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
  
  const handleAgregarPedido = ({categoria_id,...producto}) => {
    if(pedido.some( pedidoState => pedidoState.id === producto.id )){
      // itera sobre los productos en el estado e identifica si el producto ya fue agregado al pedido 
      // y si es asi retorna producto, en caso contrario entonces retorna pedidoState (lo que ya tiene 
      // en memoria)
      const pedidoActualizado = pedido.map(pedidoState => pedidoState.id === producto.id 
        ? producto : pedidoState)
      
      setPedido(pedidoActualizado)
      toast.success('Guardado Correctamente')
    } else {
      setPedido([...pedido, producto])
      toast.success('Agregado al Pedido')
    }
  }
  
  const handleEditarCantidad = id => {
    const productoActualizar = pedido.filter(producto => producto.id === id)[0]
    setProducto(productoActualizar)
    setModal(!modal)
  }
  
  const handleEliminarProductoPedido = id => {
    // obtiene todos los pedidos que sean diferentes al que queremos eliminar y actualiza el estado
    // con estos
    const pedidoActualizado = pedido.filter(producto => producto.id !== id)
    setPedido(pedidoActualizado)
    toast.success('Eliminado del Pedido')
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
        handleAgregarPedido,
        handleEditarCantidad,
        handleEliminarProductoPedido,
        total
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