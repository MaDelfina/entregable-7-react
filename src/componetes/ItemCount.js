import { useState } from "react"

const ItemCount = ({onAdd, initial, stock} ) => {

  const[contador, setContador] = useState(0)
  const[confirmed, setConfirmed] = useState(false)
 
  const incrementador = () => {
    setContador(contador + 1);
  }

  const decrementador = () => {
    setContador(contador - 1);
  }

  const confirmar = () => {
    setConfirmed(!confirmed)
  }

  return (
    <div>
      <p>{contador}</p>
      <button onClick={decrementador}>-</button>
      <button onClick={confirmar}>Agregar al carrito</button>
      <button onClick={incrementador}>+</button>
    </div>
  )
}

export default ItemCount;