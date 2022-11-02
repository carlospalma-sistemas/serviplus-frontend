import { useState, useEffect } from "react";
import Estados from "../../enums/Estados";
import ClientesServicios from "../../servicios/ClientesServicios";

const ListadoClientes = () => {

    const [ listadoClientes, setListadoClientes ] = useState([]);
    const [ estado, setEstado ] = useState(Estados.CARGANDO);

    const cargarClientes = async () => {
        try {
            const respuesta = await ClientesServicios.listarClientes();
            console.log(respuesta);
            if (respuesta.length > 0) {
                setListadoClientes(respuesta);
                setEstado(Estados.OK);
            }
            else {
                setEstado(Estados.VACIO);
            }
        } catch (error) {
            setEstado(Estados.ERROR);
        }
    }
    cargarClientes();
    
    return (
        <div className="container">
            <h3 className="mt-3">Lista de clientes</h3>
            <table className="table table-sm"> 
                <thead>
                    <tr>
                        <th>Nombres completos</th>
                        <th>Documento</th>
                        <th>Telefono</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {   estado === Estados.CARGANDO ? 
                            (<tr><td>
                                <div class="spinner-border text-secondary" role="status">
                                    <span class="sr-only"></span>
                                </div>
                            </td></tr>) 
                        :
                        estado === Estados.ERROR ? 
                            (<tr><td>Ocurrió un error, intente más tarde</td></tr>) 
                        :
                        estado === Estados.VACIO ? 
                            (<tr><td>No hay datos</td></tr>) 
                        : 
                        listadoClientes.map((cliente) => (
                            <tr>
                                <td>{ cliente.nombres +" "+cliente.apellidos}</td>
                                <td>{ cliente.documento }</td>
                                <td>{ cliente.telefono }</td>
                                <td>
                                    <button>Editar</button>
                                    <button>Eliminar</button>
                                </td>
                            </tr>
                        )) 
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ListadoClientes;
