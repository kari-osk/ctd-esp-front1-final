import CardPersonagem from "./card-personagem.componente";

import "./grade-personagem.css";

/**
 * Grade de personagens para a página inicial, componente que carrega o componente de CardPersonagem
 *
 * @returns Elemento JSX
 */
 
const GradePersonagem = ({data}) => {

  return (
    <div className='grade-personagens'  >
      {data.map((character) => (
        <div key={character.id}>
          <CardPersonagem key={character.id} character={character} />
        </div>
      ))}
    </div>
  )
}

export default GradePersonagem;
