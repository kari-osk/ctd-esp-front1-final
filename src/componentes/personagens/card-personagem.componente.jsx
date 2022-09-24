import { Link } from 'react-router-dom';
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
const CardPersonagem = (character) => {

  return (
    <div className="card-personagem" key={character.id}>
      <h1>teste</h1>
      <img
        src={character.image}
        alt={character.name}
      />
      <div className="card-personagem-body">
        <span>{character.name}</span>
        <Link to={`favoritos${character.id}`}>
          <BotaoFavorito isFavorito={false} />
        </Link>
      </div>
    </div>
  );
};

export default CardPersonagem;
