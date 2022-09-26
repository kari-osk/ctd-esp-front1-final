import { useSelector} from 'react-redux'
import { isLoadingSelector } from '../../features/character/characterSlice';
import Spinner from 'react-bootstrap/Spinner'
import './loading.style.css'

/**
 * Componente loading para mostrar ao usuário animação de carregamento, enquanto a informação e buscada na Api
 * 
 * @returns Loading
 */
const Loading = () => {

  const isLoading = useSelector(isLoadingSelector)

  return (
      <div className='spinner_container' >
        {isLoading ? <Spinner className='spinner' animation='border'  variant='primary'/> : null}
      </div>
  )
}

export default Loading
