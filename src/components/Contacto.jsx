import { useForm } from "react-hook-form";

function Contacto() {

    const {register, submit} = useForm();

    const enviar = (data) => {

    }

    return (
        <div className='container'>
            <h1>Contacto</h1>
            <form className='formulario' onSubmit={submit(enviar)}>
                <input type="text" placeholder='Ingresa tu nombre' {...register("nombre")}/>
                <input type="email" placeholder='Ingresa tu email' {...register("email")}/>
                <button className='enviar' type='submit'>Enviar</button>
            </form>
        </div>
    )
}

export default Contacto