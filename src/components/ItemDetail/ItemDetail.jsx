import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorProducto'>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <p>¡Nada sabe mejor que la auténtica pasta casera fresca! Por eso te invitamos a probar nuestros productos.</p>
        <img src={img} alt={nombre} />
    </div>
  )
}

export default ItemDetail