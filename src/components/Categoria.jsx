import useQuiosco from '../hooks/useQuiosco'

export default function Categoria({ categoria }) {
  const {handleClickCategoria, categoriaActual} = useQuiosco()
  const { icono, id, nombre } = categoria
  
  // función para resaltar la categoria actual segun su id, se colocó aqui para mantener más limpio el código del return
  const resaltarCategoriaActual = () => categoriaActual.id === id ? 'bg-amber-400' : 'bg-white'
  
  return (
    <button className={`${resaltarCategoriaActual()} flex items-center gap-4 border w-full p-3
    hover:bg-amber-300 cursor-pointer`}
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
