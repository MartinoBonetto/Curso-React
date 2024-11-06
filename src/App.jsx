import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/NavBar'

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer color={"red"} greeting={"Bienvenido a DARKS GAMERS"}/>
    </>
  )
}

export default App
