import axios from "axios";

const ClientesServicios = {};

ClientesServicios.listarClientes = () => {
    return axios.get("http://localhost:8080/clientes");
}

ClientesServicios.buscarClientes = (criterio) => {
    return axios.get("http://localhost:8080/clientes?q="+criterio);
}

export default ClientesServicios;
