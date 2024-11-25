import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({producto}) => {
    return (
        <div className='producto'>
            <img src={producto.imagen}/>
            <div>
                <h4>{producto.titulo}</h4>
                <p>Precio: ${producto.precio}</p>
                <Link to={`/item/${producto.id}`} className='verMas'>Ver más</Link>
            </div>
        </div>
    )
}

export default Item