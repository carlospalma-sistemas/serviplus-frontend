import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClientesServicios from "../../servicios/ClientesServicios";

const FormClientes = () => {

    const navigateTo = useNavigate()

    const [ nombres, setNombres ] = useState("");
    const [ apellidos, setApellidos ] = useState("");
    const [ documento, setDocumento ] = useState("");
    const [ direccion, setDireccion ] = useState("");
    const [ telefono, setTelefono ] = useState("");
    const [ correo, setCorreo ] = useState("");
    const [ passw, setPassw ] = useState("");
    const [ confirm, setConfirm ] = useState("");
    const [ activo, setActivo ] = useState(false);
    const [ mensaje, setMensaje ] = useState("");

    const guardarCliente = async (event) => {
        event.preventDefault();

        if (passw === confirm) {
            try {
                const cliente = {
                    nombres: nombres,
                    apellidos: apellidos,
                    documento: documento,
                    direccion: direccion,
                    telefono: telefono,
                    correo: correo,
                    passw: passw
                }
                console.log(cliente);
                await ClientesServicios.guardarCliente(cliente);
                navigateTo("/");
            } catch (error) {
                setMensaje("Ocurrió un error");
            }
        }
        else {
            setMensaje("Las contraseñas no coinciden");
        }
    }

    const cambiarNombres = (event) => {
        setNombres(event.target.value);
    }

    const cambiarApellidos = (event) => {
        setApellidos(event.target.value);
    }

    const cambiarDocumento = (event) => {
        setDocumento(event.target.value);
    }

    const cambiarDireccion = (event) => {
        setDireccion(event.target.value);
    }

    const cambiarTelefono = (event) => {
        setTelefono(event.target.value);
    }

    const cambiarCorreo = (event) => {
        setCorreo(event.target.value);
    }

    const cambiarPassw = (event) => {
        setPassw(event.target.value);
    }

    const cambiarConfirm = (event) => {
        setConfirm(event.target.value);
    }

    const cambiarActivo = (event) => {
        setActivo(event.target.checked);
    }


    return (
        <div className="container mt-3">
            <div>Imagen</div>
            <div>
                <h3>Registro de clientes</h3>
                <form className="container" action="">
                    <div className="row">
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="nombres">Nombres *</label>
                            <input className="form-control form-control-sm" type="text" onChange={cambiarNombres} value={nombres} name="nombres" id="nombres" required/>
                        </div>
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="apellidos">Apellidos *</label>
                            <input className="form-control form-control-sm" type="text" onChange={cambiarApellidos} value={apellidos} name="apellidos" id="apellidos" required/>
                        </div>
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="documento">Ingrese documento *</label>
                            <input className="form-control form-control-sm" type="number" onChange={cambiarDocumento} value={documento} name="documento" id="documento" required/>
                        </div>
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="direccion">Ingrese dirección *</label>
                            <input className="form-control form-control-sm" type="text" onChange={cambiarDireccion} value={direccion} name="direccion" id="direccion" required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="telefono">Teléfono *</label>
                            <input className="form-control form-control-sm" type="number" onChange={cambiarTelefono} value={telefono} name="telefono" id="telefono" required/>
                        </div>
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="correo">Email *</label>
                            <input className="form-control form-control-sm" type="email" onChange={cambiarCorreo} value={correo} name="correo" id="correo" required/>
                        </div>
                        <div className="col-2">
                            <label className="form-control-sm" htmlFor="passw">Contraseña *</label>
                            <input className="form-control form-control-sm" type="password" onChange={cambiarPassw} value={passw} name="passw" id="passw" required/>
                        </div>
                        <div className="col-2">
                            <label className="form-control-sm" htmlFor="confirm">Confirme contraseña *</label>
                            <input className="form-control form-control-sm" type="password" onChange={cambiarConfirm} value={confirm} name="confirm" id="confirm" required/>
                        </div>
                        <div className="col-2">
                            <input type="checkbox" checked={activo} onChange={cambiarActivo} name="activo" id="activo" />
                            <label htmlFor="activo">Activo</label>
                        </div>
                    </div>
                    <div className="mt-3">
                        <button onClick={guardarCliente} className="btn btn-primary me-2">Guardar</button>
                        <a href="/" className="btn btn-secondary">Cancelar</a>
                        <div id="mensaje">{mensaje}</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormClientes;