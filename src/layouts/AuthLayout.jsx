import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <main className="min-h-screen max-w-4xl m-auto flex flex-col md:flex-row items-center justify-center gap-11 p-10">
    
      {/* side image */}
      <img
        src="../img/logo.png"
        alt="imagen logotipo"
        className="max-w-xs"
      />
      
      {/* side form */}
      <div className="w-full">
        <Outlet />
      </div>
    </main>
  )
}
