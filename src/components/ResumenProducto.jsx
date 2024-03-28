import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";

export default function ResumenProducto({producto}) {
  const {handleEditarCantidad, handleEliminarProductoPedido} = useQuiosco()
  const {id, nombre, precio, cantidad} = producto

  return (
    <div className="shadow space-y-1 p-4 bg-white">
      <div className="space-y-2">
        <p className="text-xl font-bold">{nombre}</p>
        <p className="text-lg font-bold ">Cantidad: {cantidad}</p>
        <p className="text-lg font-bold text-amber-500">
          Precio: {formatearDinero(precio)}
        </p>
        <p className="text-lg text-gray-700">
          Subtotal: {formatearDinero(precio * cantidad)}
        </p>
      </div>

      <div className="flex justify-between gap-2 pb-4">
        <button
          type="button"
          className="bg-sky-700 p-2 text-white rounded-md font-bold uppercase shadow-md text-center"
          onClick={ () => handleEditarCantidad(id) }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
        </button>
        <button
          type="button"
          className="bg-red-700 p-2 text-white rounded-md font-bold uppercase shadow-md text-center"
          onClick={ () => handleEliminarProductoPedido(id) }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
