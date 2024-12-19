import React, { useState } from 'react'


const ItemCount = ( {cantidad, Restar, Sumar, Agregar} ) => {



return (
        <>
            <div className='item-count'>
                <button onClick={Restar}>-</button>
                <p>{cantidad}</p>
                <button onClick={Sumar}>+</button>
            </div>
            <button className='agregarCarrito' onClick={Agregar}>Agregar al Carrito</button>
        </>
    )
}

export default ItemCount