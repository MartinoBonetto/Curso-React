import React, { useContext } from 'react'
import { CarritoContext } from '../context/CarritoContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarro} = useContext(CarritoContext);

    const Vaciar = () => {
        vaciarCarro();
    }

    return (
        <div className='container'>
            <h1 className='titulo'>Carrito</h1>

            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <h3>{prod.titulo}</h3>
                        <p>${prod.precio}</p>
                        <p>cantidad:{prod.cantidad}</p>
                        <p>Precio Total: ${prod.precio * prod.cantidad}</p>
                        <br />
                    </div>
                ))
            }
            {
                carrito.length > 0 ? 
                <>
                    <h2>Precio Total: ${precioTotal()}</h2>
                    <button className='enviar' onClick={Vaciar}>Vaciar</button>
                    <Link className='enviar' to="/checkout">Finalizar Compra</Link>
                </>   :
                <h2>El carrito esta vacio</h2>
            }
        </div>
    )
}

export default Carrito