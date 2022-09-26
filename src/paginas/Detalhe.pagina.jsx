import {useEffect} from 'react'
import BotaoFavorito from "../componentes/botoes/botao-favorito.componente";
import CardEpisodio from "../componentes/episodios/card-episodio.componente";
import GradePersonagem from '../componentes/personagens/grade-personagens.componente';
import { useDispatch, useSelector } from 'react-redux';
import {selectedCharacterSelector } from '../features/character/characterSlice';

import "./Pagina.css";
import { fetchAsyncCharacters } from '../features/sagas/characterSagas';
/**
 * Esta é a página de detalhes. Aqui você pode mostrar a visão do personagem selecionado junto com a lista de episódios em que ele aparece
 *
 * TRABALHAR NESTE ARQUIVO É OPCIONAL E NÃO É NECESSÁRIO PARA APROVAÇÃO
 *
 *
 *
 * Uso:
 * ``` <PaginaDetalhe /> ```
 *
 * @returns Página de detalhe
 */
const PaginaDetalhe = () => {
  
  const dispatch = useDispatch()
  const selected = useSelector(selectedCharacterSelector)

    useEffect(() => {
    dispatch()
  }, [dispatch])
  
  return (
    <div className="container">
    <h1>detalhes</h1>
    <GradePersonagem data={selected}/>



      {/* <h3>Rick Sanchez</h3>
      <div className={"detalhe"}>
        <div className={"detalhe-header"}>
          <img
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="Rick Sanchez"
          />
          <div className={"detalhe-header-texto"}>
            <p>Rick Sanchez</p>
            <p>Planeta: Earth</p>
            <p>Genero: Male</p>
          </div>
          <BotaoFavorito isFavorito={false} />
        </div>
      </div>
      <h4>Lista de episódios em que o personagem apareceu</h4>
      <div className={"episodios-grade"}>
        <CardEpisodio />
        <CardEpisodio />
        <CardEpisodio />
      </div> */}
    </div>
  );
};

export default PaginaDetalhe;
