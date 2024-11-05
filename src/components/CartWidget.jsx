import React from "react";
import './CartWidget.css'

function CartWidget(){
    return(
        <>
            <a class="boton-menu boton-carrito" href="carrito.html"><i class="bi bi-cart"></i>
            <span id="numero" class="numero">(0)</span></a>
        </>
    )
}

export default CartWidget