import React from 'react'

export default function UsuarioEntrada(props) {
  return (
    <div>
      <input type="text" onChange={props.funcao}/>
    </div>
  )
}
