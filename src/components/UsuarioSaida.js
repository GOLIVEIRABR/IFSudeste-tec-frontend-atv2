import React from 'react';
import './UsuarioSaida.css';

export default function UsuarioSaida(props) {
  return (
    <div className="custom">
      <p>Login: {props.value}</p>
      <p>Segundo parágrafo com texto qualquer</p>
    </div>
  )
}
