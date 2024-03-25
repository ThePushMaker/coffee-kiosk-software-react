import { createContext } from 'react'

const QuioscoContext = createContext();

const QuioscoProvider = ({children}) => {
  
  return (
    <QuioscoContext.Prodiver
      value={{
        
      }}
    >
      {children}
    </QuioscoContext.Prodiver>
  )
}

export {
  QuioscoProvider
}
export default QuioscoContext