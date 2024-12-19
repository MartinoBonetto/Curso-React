import { useContext, useState } from "react";
import ItemCount from "./ItemCount"
import { CarritoContext } from "../context/CarritoContext";


const ItemDetail = ( {item}) => {

    const {carrito, Agregar} = useContext(CarritoContext);

    const [cantidad, setCantidad] = useState(1);

    const Restar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }
    
    const Sumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }

    

    return (
        <div className="container">
            <div className="productoDetalle">
                <img src={item.imagen} alt={item.titulo} />
                <div>
                    <h3 className="titulo">
                        {item.titulo}
                    </h3>
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="categoria">Categoría: {item.categoria}</p>
                    <p className="precio">Precio: ${item.precio}</p>

                    <ItemCount cantidad={cantidad} 
                    Restar={Restar} 
                    Sumar={Sumar} 
                    Agregar={() => { Agregar(item, cantidad) }}
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail