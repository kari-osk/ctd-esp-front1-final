import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Filtros from "../componentes/personagens/filtros.componente";
import Paginacao from "../componentes/paginacao/paginacao.componente";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import Loading from '../componentes/loading/loading';
import { availableCharacterSelector, fetchAsyncCharacters, setSearch } from '../features/character/characterSlice';

import './Pagina.css'

/**
 * Esta é a página principal.
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns Página inicio
 * 
 * Função: handleClearSearch, serve para limpar o campo de busca de personagens. E retornar ao estado inicial com todos os personagens.
 *
 */

const PaginaInicio = () => {

  const dispatch = useDispatch()

  const [page, setPage] = useState(1)
  const cardsInPage = 9 
  const availableCharacters = useSelector(availableCharacterSelector)
  const totalCards = availableCharacters.length
  const indexOfLastCard = page * cardsInPage
  const indexOfFirstCard = indexOfLastCard - cardsInPage 
  const currentCards = availableCharacters.slice(indexOfFirstCard, indexOfLastCard);
  const paginate = pagenumber => setPage(pagenumber)
 

  const handleClearSearch = () => {
    dispatch(setSearch(''))
    dispatch(fetchAsyncCharacters())
  }
  
  useEffect(() => {
    dispatch(fetchAsyncCharacters())
  }, [dispatch])

  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personagens</h3>
        <button 
          onClick={handleClearSearch}
          className="danger">
          Limpar filtro
        </button>
      </div>
      <Filtros/>
      <Loading />
      <Paginacao 
				quantTotalCards={totalCards}
				cardsInPage={cardsInPage}
        paginate={paginate}
       />
      <GradePersonagens data={currentCards}/>
      <Paginacao 
				quantTotalCards={totalCards}
				cardsInPage={cardsInPage}
        paginate={paginate}
       />
    </div>
  );
};

export default PaginaInicio;
