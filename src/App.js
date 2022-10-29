import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListadoAgentes from "./agentes/ListadoAgentes";
import FormClientes from "./clientes/FormClientes";
import ListadoClientes from "./clientes/ListadoClientes";
import Bienvenida from "./general/Bienvenida";
import Header from "./general/Header";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bienvenida/>} exact></Route>
          <Route path="/clientes" element={<ListadoClientes/>} exact></Route>
          <Route path="/clientes/form" element={<FormClientes/>} exact></Route>
          <Route path="/agentes" element={<ListadoAgentes/>} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
