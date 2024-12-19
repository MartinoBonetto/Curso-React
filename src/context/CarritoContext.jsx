import { createContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

let carritoInicio = []; 

try {
    const Carro = localStorage.getItem("carrito");
    if (Carro) {
        carritoInicio = JSON.parse(Carro);
    }
} catch (error) {
    console.error("Error", error);

}

export const Proveedor = ({ children }) => {

    const [carrito, setCarrito] = useState(carritoInicio);

    const Agregar = (item, cantidad) => {
        const itemAgregar = { ...item, cantidad };
        const carritoNuevo = [...carrito];
        const estaEnElCarro = carritoNuevo.find((producto) => producto.id === itemAgregar.id);


        if (estaEnElCarro) {
            estaEnElCarro.cantidad += cantidad;
            setCarrito(carritoNuevo);
        } else {
            carritoNuevo.push(itemAgregar);
        }
        setCarrito(carritoNuevo);
    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
    }

    const vaciarCarro = () => {
        setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito])

    return (
        <CarritoContext.Provider value={{ carrito, Agregar, cantidadEnCarrito, precioTotal, vaciarCarro }}>
            {children}
        </CarritoContext.Provider>
    )
}

