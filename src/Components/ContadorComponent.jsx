import { useState } from 'react'

export const ContadorComponent = () => {
  return (
    <>
      <h1>Contador: 0</h1>
      <button onClick={ incrementar }>+1</button>
      <button onClick={ resetear }>Reset</button>
      <button onClick={ decrementar }>-1</button>
    </>
  )
}
