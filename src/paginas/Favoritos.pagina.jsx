import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CardPersonagem from '../componentes/personagens/card-personagem.componente';
import GradePersonagens from "../componentes/personagens/grade-personagens.componente";
import { favoriteListSelector, clearFavorite, getFavorites, availableCharacterSelector } from '../features/character/characterSlice';

import './Pagina.css'
/**
 * Esta é a página de favoritos. Aqui são apresentados todos os personagens marcados como favoritos
 *
 * Função handleClearFavorite: serve para tirar os personagens da lista de favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns Página de favoritos
 */
const PaginaFavoritos = () => {

  const dispatch = useDispatch()
  const favorites = useSelector(favoriteListSelector)
  // const character = useSelector(availableCharacterSelector)

  const hasFavorite = favorites.length

  useEffect(() => {
    dispatch(getFavorites())
  }, [dispatch])

  const handleClearFavorite = () =>{
    dispatch(clearFavorite())
    // dispatch(getFavorites())
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
            <GradePersonagens data={favorites} /> 
          : <div className='favorite_msg'>
              <h3>Não tem personagem favorito</h3>
              <button className='primary'><Link to='/' className='link_home_btn'>Escolha na página inicial</Link></button>
            </div> 
        }
    </div>
  );
};

export default PaginaFavoritos;
