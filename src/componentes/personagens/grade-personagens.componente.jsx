import CardPersonagem from "./card-personagem.componente";
import { Col, Row } from 'react-bootstrap';

import "./grade-personagem.css";

/**
 * Grade de personagens para a página inicial, componente que carrega o componente de CardPersonagem
 *
 * 
 *
 *
 * @returns Elemento JSX
 */
const GradePersonagem = ({data}) => {

  return (
    <div className='grade-personagens'  >
      <Row mb={2}>
      {data.map((character) => (
        <Col sm={12} md={6} lg={6} xl={4} key={character.id}>
          <CardPersonagem key={character.id} character={character} />
        </Col>
        ))
        }
      </Row>
    </div>
  )
}

export default GradePersonagem;
