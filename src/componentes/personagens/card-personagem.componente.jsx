import { useSelector } from 'react-redux';
import { selectedCharacterSelector } from '../../features/character/characterSlice';
import BotaoFavorito from "../botoes/botao-favorito.componente";

import "./card-personagem.css";

/**
 * Componente Card para cada personagem dentro da grade de personagem.
 * 
 * Através do click no BotaoFavorito, o personagem será favoritado ou não.
 *
 * @returns Elemento JSX
 */

const CardPersonagem = ({character}) => {

  const isFavorite = useSelector(selectedCharacterSelector)

  const favorite = (characterName) => {
    if (isFavorite.toString().includes(characterName)) {
      return true
    } else {
      return false
    }
  }

  return (
    <div className="card-personagem" key={character.id}>
      <img
        className='card-personagem_img'
        src={character.image}
        alt={character.name}
      />
      <div className="card-personagem-body">
        <h4>{character.name}</h4>
          <BotaoFavorito 
            isFavorito={favorite(character.id)}
            favoriteId={character.id}
          />
      </div>
    </div>
  );
};

export default CardPersonagem;
