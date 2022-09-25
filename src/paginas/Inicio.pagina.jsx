import Filtros from "../componentes/personagens/filtros.componente";
import Paginacao from "../componentes/paginacao/paginacao.componente";
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { availableCharacterSelector, fetchAsyncCharacters  } from '../features/character/characterSlice';
import { isLoadingSelector } from '../features/character/characterSlice';
import Spinner from 'react-bootstrap/Spinner'
import './Pagina.css'

/**
 * Esta é a página principal.
 * Uso:
 * ``` <PaginaInicio /> ```
 *
 * @returns Página inicio
 */


const PaginaInicio = () => {

  const dispatch = useDispatch()

  const isLoading = useSelector(isLoadingSelector)
  
  const available = useSelector(availableCharacterSelector)
  // const pageNumber = useSelector()

  useEffect(() => {
    dispatch(fetchAsyncCharacters())
  }, [])



  return (
    <div className="container">
      <div className="actions">
        <h3>Catálogo de Personagens</h3>
        <button className="danger">Limpar filtro</button>
      </div>
      <Filtros />
      <Paginacao />
      <div className='spinner' >
        {isLoading ? <Spinner animation='border' variant='primary'/> : null}
      </div>
      <GradePersonagens selector={availableCharacterSelector} />
      <Paginacao />
    </div>
  );
};

export default PaginaInicio;
