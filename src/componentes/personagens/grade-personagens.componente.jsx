import "./grade-personagem.css";
import CardPersonagem from "./card-personagem.componente";
import { useSelector } from 'react-redux';
import { availableCharacterSelector } from '../../features/character/characterSlice';


/**
 * Grade de personagens para a página inicial
 *
 * Você precisará adicionar as funções necessárias para exibir e paginar os personagens
 *
 *
 * @returns Elemento JSX
 */
const GradePersonagem = () => {

  const characters = useSelector(availableCharacterSelector)

  return (
    <div>
      {
        characters.map((character) => (
          <CardPersonagem key={character.id} character={character} />
        ))
      }
      <h1>teste</h1>
    </div>
  )
}

export default GradePersonagem;
