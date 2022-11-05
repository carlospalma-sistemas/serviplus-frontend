import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoAgentes from "./componentes/agentes/ListadoAgentes";
import FormClientes from "./componentes/clientes/FormClientes";
import ListadoClientes from "./componentes/clientes/ListadoClientes";
import Bienvenida from "./componentes/general/Bienvenida";
import Header from "./componentes/general/Header";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bienvenida/>} exact></Route>
          <Route path="/clientes" element={<ListadoClientes/>} exact></Route>
          <Route path="/clientes/form" element={<FormClientes/>} exact></Route>
          <Route path="/clientes/form/:id" element={<FormClientes/>} exact></Route>
          <Route path="/agentes" element={<ListadoAgentes/>} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
