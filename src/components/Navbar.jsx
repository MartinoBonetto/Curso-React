import React from "react";
import './NavBar.css'
import "./CartWidget.jsx"
import CartWidget from "./CartWidget.jsx";

function Navbar(){
    return (
        <>
            <header className="header">
                <a href="" className="logo">DARKS GAMERS</a>

                <nav className="navbar">
                    <a href="#">Todos los productos</a>
                    <a href="#">Procesadores</a>
                    <a href="#">Gabinetes</a>
                    <a href="#">Memorias</a>
                    <a href="#">Placas de video</a>
                    <CartWidget />
                </nav>
            </header>
        </>
    )
}

export default Navbar
