import useQuiosco from '../hooks/useQuiosco'

export default function Categoria({ categoria }) {
  const {handleClickCategoria} = useQuiosco()
  const { icono, id, nombre } = categoria
  
  return (
    <div className="flex items-center gap-4 border w-full p-3
    hover:bg-amber-300 cursor-pointer">
      <img 
        src={`/img/icono_${icono}.svg`}
        alt="imagen icono"
        className="w-12"
      />
      
      <button 
        className="text-lg font-bold cursor-pointer truncate"
        type='button'
        onClick={handleClickCategoria}
      >
        {nombre}
      </button>
    </div>
  )
}
