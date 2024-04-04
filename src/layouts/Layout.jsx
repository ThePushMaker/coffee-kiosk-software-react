
import { Outlet } from 'react-router-dom'
import Modal from 'react-modal'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'
import ModalProducto from '../components/ModalProducto'
import useQuiosco from '../hooks/useQuiosco'
import { useAuth } from '../hooks/useAuth'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// agregamos el modal al #root para que no genere error en consola
Modal.setAppElement('#root')

export default function Layout() {
  useAuth({middleware: 'auth'})
  const {modal, handleClickModal} = useQuiosco()
  
  return (
    <>
      <div className='md:flex'>
        <Sidebar />
        
        <main className='flex-1 h-screen overflow-y-scroll bg-gray-100 p-3'>
          <Outlet />
        </main>
        
        <Resumen />
      </div>
      
    
      <Modal isOpen={modal} style={customStyles}>
        <ModalProducto />
      </Modal>
      
      <ToastContainer />
      
    </>
  )
}
