import { useState } from 'react'

export const ContadorComponent = () => {

  const [valor, setValor] = useState(0)

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

  return (
    <>
      <h1>Contador: { valor }</h1>
      <button onClick={ incrementar }>+1</button>
      <button onClick={ resetear }>Reset</button>
      <button onClick={ decrementar }>-1</button>
    </>
  )
}
