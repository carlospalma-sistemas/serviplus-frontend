import Estados from "../../enums/Estados";
import ClientesServicios from "../../servicios/ClientesServicios";

const ListadoClientes = () => {

    let estado = Estados.CARGANDO;
    const listadoClientes = ClientesServicios.listarClientes();
    console.log(listadoClientes);
    if (listadoClientes.length > 0) {
        estado = Estados.OK;
    }
    else {
        estado = Estados.VACIO;
    }
    estado = Estados.CARGANDO;
    
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
                    {   estado == Estados.CARGANDO ? 
                            (<div>Cargando...</div>) 
                        :
                        estado == Estados.VACIO ? 
                            (<div>No hay datos</div>) 
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
