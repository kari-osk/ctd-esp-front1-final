import { useSelector} from 'react-redux'
import { isLoadingSelector } from '../../features/character/characterSlice';

import './loading.style.css'

/**
 * Componente loading é uma animação de carregamento, enquanto as informações são buscadas na Api.
 * 
 * @returns Loading
 */

const Loading = () => {

  const isLoading = useSelector(isLoadingSelector)

  return (
      <div className='spinner_container' >
        {isLoading ? <div role="alert" className="loader"/> : null}
      </div>
  )
}

export default Loading
