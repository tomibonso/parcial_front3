import React from 'react'

const Card = ({cumple}) => {
  return (
    <div className='estiloCard'>
      <h2>Hola, soy una tarjeta</h2>
      <h2>Te invitaron al cumple de {cumple.nombre}</h2>
      <h3>El dia: {cumple.dia}</h3>
    </div>
  )
}

export default Card