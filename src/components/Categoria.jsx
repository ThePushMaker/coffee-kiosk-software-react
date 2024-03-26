import useQuiosco from '../hooks/useQuiosco'

export default function Categoria({ categoria }) {
  const {handleClickCategoria} = useQuiosco()
  const { icono, id, nombre } = categoria
  
  return (
    <button className="flex items-center gap-4 border w-full p-3
    hover:bg-amber-300 cursor-pointer"
      type='button'
      onClick={() => handleClickCategoria(id)}
    >
      <img 
        src={`/img/icono_${icono}.svg`}
        alt="imagen icono"
        className="w-12"
      />
      
      <span 
        className="text-lg font-bold cursor-pointer truncate"
      >
        {nombre}
      </span>
    </button>
  )
}
