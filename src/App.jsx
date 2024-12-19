import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import { Navbar } from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './components/Nosotros'
import Contacto from './components/Contacto';
import { Proveedor } from './context/CarritoContext';
import Carrito from './components/Carrito';
import Checkout from './components/Checkout';



function App() {



  return (
    <>
      <Proveedor>
        <BrowserRouter>

          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>

        </BrowserRouter>
      </Proveedor>
    </>
  )
}

export default App
