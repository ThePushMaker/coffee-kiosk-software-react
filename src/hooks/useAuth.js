import clienteAxios from "../config/axios"
export const useAuth = ({middleware, url}) => {
  const login = async (datos, setErrores) => {
    try {
      const {data} = await clienteAxios.post('/login', datos)
      localStorage.setItem('AUTH_TOKEN', data.token)
      setErrores([])
    } catch (error) {
      setErrores(Object.values(error.response.data.errors))
    }
  }
  const registro = () => {
    
  }
  const logout = () => {
    
  }
  
  return {
    login,
    registro,
    logout
  }
}