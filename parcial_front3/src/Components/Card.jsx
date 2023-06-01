import React from 'react'

const Card = ({musica}) => {
  return (
    <div className='estiloCard'>
      <h2>Hola {musica.nombre}</h2>
      <h2>Tu cancion favorita es: {musica.cancion}</h2>
    </div>
  )
}

export default Card