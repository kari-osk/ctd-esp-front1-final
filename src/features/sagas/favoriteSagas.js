import { addCharacter, removeCharacter} from '../character/characterSlice'
import { put, takeEvery} from 'redux-saga/effects'

export function* addCharacterSaga(action) {
  try {
    yield put(addCharacter(action.payload))
  } catch (error) {
    console.log(error)
  }
}

export function* removeCharacterSaga(action) {
  try {
    yield put(removeCharacter(action.payload))
  } catch (error) {
    console.log(error)
  }
}



export function* favoriteSagas() {
  yield takeEvery('favoriteCharacter/addCharacter', addCharacterSaga)
  yield takeEvery('favoriteCharacter/removeCharacter', removeCharacterSaga)
}
