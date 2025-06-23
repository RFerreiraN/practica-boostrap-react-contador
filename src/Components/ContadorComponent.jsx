import { useState } from 'react'
import { useContador } from '../Hooks/useContador'

export const ContadorComponent = () => {

  const { incrementar, resetear, decrementar, valor } = useContador()

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
