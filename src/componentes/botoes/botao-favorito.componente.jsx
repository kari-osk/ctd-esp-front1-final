import "./botao-favorito.css";
import star from '../../image/star.png'
import starFilled from '../../image/star-filled.png'
import { useDispatch, useSelector } from 'react-redux';
import { addCharacter, getFavorites, removeCharacter, selectedCharacterSelector } from '../../features/character/characterSlice';


/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 * Função handleClick verifica se o personagem selecionado possui o id, se sim dispara a função de remover o elemento, se não adiciona o elemento de   favorito 
 * 
 *
 * @returns Elemento JSX
 */
const BotaoFavorito = ({ isFavorito, favoriteId }) => {

  const dispatch = useDispatch()
  const selectedCharacter = useSelector(selectedCharacterSelector)

  const handleClick = () => {
    if (selectedCharacter.includes(favoriteId)) {
      dispatch(removeCharacter(favoriteId))
      dispatch(getFavorites())
    } else {
      dispatch(addCharacter(favoriteId))
      dispatch(getFavorites())
    }
  }

  return (
    <div className="botao-favorito">
      {isFavorito ? (
        <button className='botao-favorito' onClick={handleClick}>
          <img  src={starFilled} alt="Não é favorito"/>
        </button>
        ) 
      : (
        <button className='botao-favorito'onClick={handleClick}>
          <img src={star} alt="Favorito"/>
        </button>
        )
      }
    </div>
  );
};

export default BotaoFavorito;
