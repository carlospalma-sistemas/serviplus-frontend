const FormClientes = () => {
    return (
        <div className="container mt-3">
            <div>Imagen</div>
            <div>
                <h3>Registro de clientes</h3>
                <form className="container" action="">
                    <div className="row">
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="nombres">Nombres *</label>
                            <input className="form-control form-control-sm" type="text" name="nombres" id="nombres" required/>
                        </div>
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="apellidos">Apellidos *</label>
                            <input className="form-control form-control-sm" type="text" name="apellidos" id="apellidos" required/>
                        </div>
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="documento">Ingrese documento *</label>
                            <input className="form-control form-control-sm" type="text" name="documento" id="documento" required/>
                        </div>
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="direccion">Ingrese dirección *</label>
                            <input className="form-control form-control-sm" type="text" name="direccion" id="direccion" required/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="telefono">Teléfono *</label>
                            <input className="form-control form-control-sm" type="text" name="telefono" id="telefono" required/>
                        </div>
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="correo">Email *</label>
                            <input className="form-control form-control-sm" type="email" name="correo" id="correo" required/>
                        </div>
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="passw">Contraseña *</label>
                            <input className="form-control form-control-sm" type="password" name="passw" id="passw" required/>
                        </div>
                        <div className="col-3">
                            <label className="form-control-sm" htmlFor="confirm">Confirme contraseña *</label>
                            <input className="form-control form-control-sm" type="password" name="confirm" id="confirm" required/>
                        </div>
                    </div>
                    <div className="mt-3">
                        <button className="btn btn-primary me-2">Guardar</button>
                        <a href="/" className="btn btn-secondary">Cancelar</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormClientes;