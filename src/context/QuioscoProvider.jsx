import { createContext, useState } from 'react'
import { categorias as categoriasDB } from '../data/categorias'

const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {
  
  const [categorias, setCategorias] = useState(categoriasDB)
  const [categoriaActual, setCategoriaActual] = useState(categorias[0])
  
  const handleClickCategoria = (id) => {
    console.log('click')
  }
  
  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria
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