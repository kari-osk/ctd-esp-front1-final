import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import { favoriteListSelector, clearFavorite, getFavorites, removeCharacter } from '../features/character/characterSlice';

import './Pagina.css'

/**
 * Página de favoritos. Aqui são apresentados todos os personagens marcados como favoritos, caso não haja favoritos é mostrado a mensageam "Ainda não tem personagem favorito" e o botão para voltar a página Início. 
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns Página de favoritos
 * 
 * Função: handleClearFavorite serve para limpar a lista de personagens favoritos
 * 
 */

const PaginaFavoritos = () => {

  const dispatch = useDispatch()
  const favorites = useSelector(favoriteListSelector)
  const hasFavorite = favorites.length

  useEffect(() => {
    dispatch(getFavorites())
  }, [dispatch])

 
  const handleClearFavorite = (favoriteId) =>{
    dispatch(clearFavorite())
    dispatch(removeCharacter(favoriteId))
  }

  return (
    <div className="container">
      <div className="actions">
        <h3>Personagens Favoritos</h3>
        <button 
          onClick={handleClearFavorite}
          className="danger"
        >
        Limpar filtro
        </button>
      </div>


      { hasFavorite
        ?
        <div className='episodios-grade'>
          <GradePersonagens data={favorites}/> 
        </div>
        : 
        <div className='favorite_msg'>
          <h3>Ainda não tem personagem favorito</h3>
          <button className='primary'>
            <Link to='/' className='link_home_btn'>Escolha na página ínicio</Link>
          </button>
        </div> 
      }
    </div>
  );
};

export default PaginaFavoritos;
