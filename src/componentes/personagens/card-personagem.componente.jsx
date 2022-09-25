import { useSelector } from 'react-redux';
import { selectedCharacterSelector } from '../../features/character/characterSlice';
import BotaoFavorito from "../botoes/botao-favorito.componente";
import "./card-personagem.css";


/**
 * Card para cada personagem dentro da grade de personagem.
 *
 * Você precisará adicionar as propriedades necessárias para exibir os dados dos personagens
 *
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
        src={character.image}
        alt={character.name}
      />
      <div className="card-personagem-body">
        <span>{character.name}</span>

          <BotaoFavorito 
            isFavorito={favorite(character.id)}
            favoriteId={character.id}
          />

      </div>
    </div>
  );
};

export default CardPersonagem;
