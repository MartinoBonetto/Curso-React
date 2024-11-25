import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className='barra'>
            <Link to="/" className='logo'>DARKS GAMERS</Link>
            <ul className='menu'>
                <li><Link to="/" className='menuLink'>Productos</Link></li>
                <li><Link to="/productos/Procesadores" className='menuLink'>Procesadores</Link></li>
                <li><Link to="/Productos/Gabinetes" className='menuLink'>Gabinetes</Link></li>
                <li><Link to="/productos/Memorias" className='menuLink'>Memorias</Link></li>
                <li><Link to="/productos/Placas de video" className='menuLink'>Placas de video</Link></li>
            </ul>
        </nav>
    )
}
