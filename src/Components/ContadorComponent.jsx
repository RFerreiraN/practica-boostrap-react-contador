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
      <button onClick={ incrementar } className='btn btn-primary'>+1</button>
      <button onClick={ resetear } className='btn btn-danger'>Reset</button>
      <button onClick={ decrementar } className='btn btn-primary'>-1</button>
      <p>Precio Total: { valor * 100} € </p>
    </>
  )
}
