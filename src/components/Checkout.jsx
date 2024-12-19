import React, { useContext, useState } from 'react'
import { CarritoContext } from '../context/CarritoContext';
import { useForm } from "react-hook-form";
import { collection, addDoc } from 'firebase/firestore';
import { db } from "../firebase/config";

const Checkout = () => {

    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarro } = useContext(CarritoContext);

    const { register, handleSubmit } = useForm();
    
        const Comprar = (data) => {
            const pedido = {
                cliente: data,
                productos: carrito,
                total: precioTotal()
            }
            console.log(pedido);

            const pedidoRef = collection(db, "Pedidos");

            addDoc(pedidoRef, pedido)
                .then((doc) => {
                    setPedidoId(doc.id);
                    vaciarCarro();
                })

        }

        if(pedidoId) {
            return (
                <div className='container'>
                    <h1 className='titulo'>Muchas gracias por tu compra</h1>
                    <p>Tu numero de pedido es: {pedidoId}</p>
                </div>
            )
        }
    
        return (
            <div className='container'>
                <h1 className='titulo'>Finalizar compra</h1>
                <form className='formulario' onSubmit={handleSubmit(Comprar)}>
                    <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")}/>
                    <input type="email" placeholder='Ingresa tu email' {...register("email")}/>
                    <input type="phone" placeholder='Ingresa tu telefono' {...register("telefono")}/>
                    <button className='enviar' type='submit'>Comprar</button>
                </form>
            </div>
        )
}

export default Checkout