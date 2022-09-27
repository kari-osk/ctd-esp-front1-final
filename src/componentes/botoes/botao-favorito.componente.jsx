import { useDispatch, useSelector } from 'react-redux';
import { addCharacter, favoriteListSelector, removeCharacter, selectedCharacterSelector} from '../../features/character/characterSlice';
import star from '../../image/star.png'
import starFilled from '../../image/star-filled.png'

import "./botao-favorito.css";

/**
 * Botão que indica se um elemento é favorito ou não, e dá a possibilidade de marcá-lo/desmarcá-lo
 *
 * Função handleClick verifica se o personagem selecionado possui o id, se sim dispara a função de remover o elemento, se não adiciona o elemento de   favorito 
 * 
 *
 * @returns Elemento JSX
 */

const BotaoFavorito = ({ isFavorito, favoriteId }) => {

  const dispatch = useDispatch()
  const selectedCharacter = useSelector(selectedCharacterSelector)

    const handleClickRemove = () => {
    if (selectedCharacter.includes(favoriteId)) {
      dispatch(removeCharacter(favoriteId))
    }
  }

    const handleClickAdd = () => {
      dispatch(addCharacter(favoriteId))
  }


  return (
    <div className='botao-favorito'>
      {isFavorito 
        ? 
        (<button className='botao-favorito' onClick={handleClickRemove}>
          <img  src={starFilled} alt='Favorito'/>
        </button>) 
        : 
        (<button className='botao-favorito'onClick={handleClickAdd}>
          <img src={star} alt='Não é favorito'/>
        </button>)
      }
    </div>
  );
};

export default BotaoFavorito;
