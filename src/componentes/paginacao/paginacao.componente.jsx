import { useState } from 'react';
import "./paginacao.css";

/**
 * Componente que contém os botões para paginar
 *
 * Você deve adicionar as propriedades necessárias para que funcione corretamente
 *
 *
 * @returns Elemento JSX
 */
const Paginacao = () => {
  const [page, setPage] = useState(1)



  return (
    <div className="paginacao">
      <button 
        onClick={() => setPage((prev) => prev - 1)}
        disabled={page === 1} 
        className={"primary"}
      >
        Anterior
      </button>

      <button 
        onClick={() => setPage((prev) => prev + 1)}
        disabled={page === 3}
        className={"primary"}
       >
        Próximo
      </button>
    </div>
  );
};

export default Paginacao;
