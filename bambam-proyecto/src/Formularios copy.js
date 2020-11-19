import React from 'react';

const Formulario = () => {


    const [usuario, setusuario] = React.useState('')
    const [password, setpassword] = React.useState('')

    const [lista, setLista] = React.useState([])

    const guardarDatos = (e) => {
        e.preventDefault()
        
        if(!usuario.trim()){
            console.log('esta vacio usuario')
            return
        }
        
        if(!password.trim()){
            console.log('esta vacio passowrd')
            return
        }
        
        console.log('procesando datos...' + usuario + password)

        e.target.reset()
        setusuario('')
        setpassword('')
    }

    return (
        <div>
            <h1>Iniciar Sesión</h1>
            <form classNamer="row" onSubmit={ guardarDatos } >
                <div className="col-md-3">     
                    <input  
                        type="email"
                        placeholder="Ingrese Usuario"
                        className="form-control"
                        onChange={ (e) => setusuario(e.target.value) }/>
                </div> 
                <div className="col-md-3">     
                    <input 
                        type="password"
                        placeholder="Ingrese Contraseña"
                        className="form-control"
                        onChange={ e => setpassword(e.target.value) }/>
                </div>
                <div className="col-md-3">
                    <button>Ingresar</button>
                </div>     
                
            </form>
        </div>
    )
}

export default Formulario