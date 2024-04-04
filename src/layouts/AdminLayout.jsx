import { Outlet } from 'react-router-dom'
import AdminSidebar from "../components/AdminSidebar"
import { useAuth } from '../hooks/useAuth'

export default function AdminLayout() {
  // solamente queremos instancairlo y validarlo definiendo el middleware 'auth', no necesitamos extraer nada
  useAuth({middleware: 'auth'})
  
  return (
    <div className='md:flex'>
        <AdminSidebar />
        
        <main className='flex-1 h-screen overflow-y-scroll bg-gray-100 p-3'>
          <Outlet />
        </main>
      </div>
  )
}
