import { useState } from "react";
import paisaje from "../../imgs/descarga.jpg";

const Bienvenida = () => {

    const [ valor, setValor ] = useState(0);

    const sumar = () =>{
        setValor(valor+1);
    }

    return (
        <div>
           {valor}
           <button onClick={sumar}>Incrementar</button>
        </div>
    )
}

export default Bienvenida;