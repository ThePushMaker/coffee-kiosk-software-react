import { createContext } from 'react'

const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {
  
  const autenticado = true
  
  return (
    <QuioscoContext.Provider
      value={{
        autenticado
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