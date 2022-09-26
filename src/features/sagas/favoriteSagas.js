import { select, call, put, takeLatest} from 'redux-saga/effects'
import { selectedCharacterSelector, setFavoriteList} from '../character/characterSlice'

/**
 * Função geradora getFavorites()
 * Realiza a busca na Api por todos os personagens e retorna com os selecionados como favoritos.
 */
export function* getFavorites() {
  try {
    const selectedCharacter = yield select(selectedCharacterSelector)
    
    if (selectedCharacter.length > 0) {
      const response = yield call(fetch,`https://rickandmortyapi.com/api/character/${selectedCharacter}`, 
      {
        method: 'GET', 
        headers: {
          'Content-Type': 'application/json'
        }
      })
    const data = yield response.json()
    yield put(setFavoriteList(data))
  }
  } catch (error) {
    console.log('favorite saga', error)
  }
}


export function* favoriteSagas() {
  yield takeLatest('character/getFavorites', getFavorites)
}
