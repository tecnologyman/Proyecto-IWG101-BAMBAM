import React, {Fragment, useState} from 'react';

const Formulario = () => {

    const [datos, setDatos] = useState({
        user:"",
        pass:""
    })

    const handleInputChange = (event) => {
        //console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log(datos.user+ ":" + datos.pass)
    } 

    nombrepredeterminado="Tecnologyman:matias1234"

    return (
        <Fragment>
            <h1>Iniciar Sesión</h1>
            <form className="row" onSubmit ={enviarDatos}>
                <div className="col-md-3">
                    <input
                        type="Text"
                        placeholder="Ingrese Usuario"
                        className="form-control"
                        name="user"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-3">
                    <input
                        type="password"
                        placeholder="Ingrese Contraseña"
                        className="form-control"
                        name="pass"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-3">
                    <button className="btm btn-primary" type="submit">Ingresar</button>
                </div>
            </form>
        </Fragment>
    )
}

export default Formulario