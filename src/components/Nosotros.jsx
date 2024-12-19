import { useEffect } from "react"

const Nosotros = () => {

    const Click = () => {
        console.log("click")
    }

    useEffect(() => {
        window.addEventListener("click", Click)

        return () => {
            window.removeEventListener("click", Click)
        }

    }, [])

    

    return (
        <div className="container">
            <h1 className="titulo">Nosotros</h1>
            
        </div>
    )
}

export default Nosotros