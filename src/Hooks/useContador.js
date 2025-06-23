import { useState } from "react";

export const useContador = () => {

  const [valor, setValor] = useState(0);

  const incrementar = () => {
    setValor( valor + 1 )
  }

  const decrementar = () => {
    if ( valor < 1 ) return
    setValor( valor - 1 )
  }

  const resetear = () => {
    setValor(0)
  }

  return {
    incrementar,
    resetear,
    decrementar,
    valor
  }
}
