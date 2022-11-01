const clientes = [
    {
        nombres: "Carlos A",
        apellidos: "Palma Suárez",
        documento: 1234,
        direccion: "Calle Carrera",
        telefono: 321,
        correo: "carlos@carlos.com",
        passw: "admin"
    }, 
    {
        nombres: "Cielo",
        apellidos: "Chacón",
        documento: 2314,
        direccion: "Calle Carrera",
        telefono: 332,
        correo: "cielo@cielo.com",
        passw: "cielo"
    }, 
    {
        nombres: "Sergio",
        apellidos: "Palma",
        documento: 45678,
        direccion: "Bucaramanga",
        telefono: 301,
        correo: "sergio@cielo.com",
        passw: "sergio"
    },
]

const ClientesServicios = {};

ClientesServicios.listarClientes = () => {
    return clientes;
}

export default ClientesServicios;
