import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ClientesServicios from "../../servicios/ClientesServicios";

const FormClientes = () => {
    const { id } = useParams();
    const navigateTo = useNavigate();

    const [ nombres, setNombres ] = useState("");
    const [ apellidos, setApellidos ] = useState("");
    const [ documento, setDocumento ] = useState("");
    const [ direccion, setDireccion ] = useState("");
    const [ telefono, setTelefono ] = useState("");
    const [ correo, setCorreo ] = useState("");
    const [ passw, setPassw ] = useState("");
    const [ confirm, setConfirm ] = useState("");
    const [ mensaje, setMensaje ] = useState("");
    const [ titulo, setTitulo ] = useState("");

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
                if (id == null) {
                    await ClientesServicios.guardarCliente(cliente);
                    navigateTo("/");
                }
                else {
                    await ClientesServicios.modificarCliente(id, cliente);
                    navigateTo("/clientes");
                }
            } catch (error) {
                setMensaje("Ocurrió un error");
            }
        }
        else {
            setMensaje("Las contraseñas no coinciden");
        }
    }

    const cargarCliente = async () => {
        try {
            if (id != null) {
                const respuesta = await ClientesServicios.buscarCliente(id);
                if (respuesta.data != null) {
                    console.log(respuesta.data);
                    setNombres(respuesta.data.nombres);
                    setApellidos(respuesta.data.apellidos);
                    setDocumento(respuesta.data.documento);
                    setDireccion(respuesta.data.direccion);
                    setTelefono(respuesta.data.telefono);
                    setCorreo(respuesta.data.correo);
                    setPassw(respuesta.data.passw);
                    setConfirm(respuesta.data.passw);
                }
                setTitulo("Edición");
            }
            else {
                setTitulo("Registro");
            }
        } catch (error) {
            console.log("Ocurrió un error");
        }
    }

    const cancelar = () => {
        if (id != null) {
            navigateTo("/clientes");
        }
        else {
            navigateTo("/");
        }
    }

    useEffect(()=> {
       cargarCliente();
    }, [])

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

    return (
        <div className="container mt-3">
            <div>Imagen</div>
            <div>
                <h3>{titulo} de clientes</h3>
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
                            <input className="form-control form-control-sm" type="number" onChange={cambiarDocumento} readOnly = {id!=null ? true : false } value={documento} name="documento" id="documento" required/>
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
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="passw">Contraseña *</label>
                            <input className="form-control form-control-sm" type="password" onChange={cambiarPassw} value={passw} name="passw" id="passw" required/>
                        </div>
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="confirm">Confirme contraseña *</label>
                            <input className="form-control form-control-sm" type="password" onChange={cambiarConfirm} value={confirm} name="confirm" id="confirm" required/>
                        </div>
                    </div>
                    <div className="mt-3">
                        <button onClick={guardarCliente} className="btn btn-primary me-2">Guardar</button>
                        <button onClick={cancelar} className="btn btn-secondary">Cancelar</button>
                        <div id="mensaje">{mensaje}</div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormClientes;