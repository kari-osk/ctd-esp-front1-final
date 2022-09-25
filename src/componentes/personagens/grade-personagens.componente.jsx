
import CardPersonagem from "./card-personagem.componente";
import { useSelector} from 'react-redux';
import { Col, Row } from 'react-bootstrap';
import "./grade-personagem.css";

/**
 * Grade de personagens para a página inicial
 *
 * Você precisará adicionar as funções necessárias para exibir e paginar os personagens
 *
 *
 * @returns Elemento JSX
 */
const GradePersonagem = ({selector}) => {

  const characters = useSelector(selector)
  
  // console.log("grade personagem", characters)


  return (
    <div className='grade-personagens'>
      <Row mb={2}>
      {characters.map((character) => (
        <Col sm={12} md={6} lg={4}>
          <CardPersonagem key={character.id} character={character} />
        </Col>
        ))
        }
      </Row>
    </div>
  )
}

export default GradePersonagem;
