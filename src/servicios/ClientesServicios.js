import axios from "axios";

const ClientesServicios = {};

ClientesServicios.listarClientes = () => {
    return axios.get("http://localhost:8080/api/clientes");
}

ClientesServicios.buscarClientes = (criterio) => {
    return axios.get("http://localhost:8080/api/clientes?q="+criterio);
}

ClientesServicios.buscarCliente = (id) => {
    return axios.get("http://localhost:8080/api/clientes/"+id);
}

ClientesServicios.guardarCliente = (cliente) => {
    return axios.post("http://localhost:8080/api/clientes", cliente);
}

ClientesServicios.modificarCliente = (id, cliente) => {
    return axios.put("http://localhost:8080/api/clientes/"+id, cliente);
}

ClientesServicios.borrarCliente = (id) => {
    return axios.delete("http://localhost:8080/api/clientes/"+id);
}

export default ClientesServicios;
