export default function Categoria({ categoria }) {
  
  const { icono, id, nombre } = categoria
  
  return (
    <div className="flex items-center gap-4 border w-full p-3
    hover:bg-amber-300 cursor-pointer">
      <img 
        src={`/img/icono_${icono}.svg`}
        alt="imagen icono"
        className="w-12"
      />
      <p className="text-lg font-bold cursor-pointer truncate">{nombre}</p>
    </div>
  )
}
