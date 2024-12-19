import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../context/CarritoContext'

const CartWidget = () => {

    const {cantidadEnCarrito} = useContext(CarritoContext);
    return (
        <div>
            <Link to="/carrito" className='menuLink'>
                <i class="bi bi-cart"> </i>
                <span className='numero'>{cantidadEnCarrito()}</span>
            </Link>
        </div>
    )
}

export default CartWidget