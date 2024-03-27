import useQuiosco from "../hooks/useQuiosco"

export default function ModalProducto() {
  const { producto, handleClickModal } = useQuiosco()
  
  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <img 
          alt={`Imagen producto ${producto?.nombre}`}
          src={`/img/${producto?.imagen}.jpg`}
        />
      </div>
      
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button
            onClick={() => handleClickModal()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
