import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import { favoriteSelector, getFavorite, removeCharacter } from '../features/character/characterSlice';

/**
 * Esta é a página de favoritos. Aqui você deve ver todos os personagens marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns Página de favoritos
 */
const PaginaFavoritos = () => {

  const dispatch = useDispatch()
  const favoriteCharacters = useSelector(favoriteSelector)


  useEffect(() => {
    dispatch(getFavorite())
  }, [])

  const handleClick = () =>{
    dispatch(removeCharacter())
  }

  return (
    <div className="container">
      <div className="actions">
        <h3>Personagens Favoritos</h3>
        <button 
          onClick={handleClick}
          className="danger"
        >Limpar filtro</button>
      </div>
      <GradePersonagens selector={favoriteCharacters}/>
    </div>
  );
};

export default PaginaFavoritos;
