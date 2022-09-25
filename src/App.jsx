import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaInicio from "./paginas/Inicio.pagina";
import PaginaFavoritos from "./paginas/Favoritos.pagina";
import PaginaDetalhe from "./paginas/Detalhe.pagina";
import Cabecalho from "./componentes/layout/cabecalho.componente";
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Cabecalho />
        <Routes>
          <Route path="/" exact element={<PaginaInicio />} />
          <Route path="favoritos" element={<PaginaFavoritos />} />
          <Route path="detalhe" element={<PaginaDetalhe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
