import { call, put, takeLatest, select } from 'redux-saga/effects'
import {  setAvailableCharacters, setIsLoading, searchCharacterSelector, selectedCharacterSelector } from '../character/characterSlice'

/**
 *  Função geradora Saga.
 *  Para buscar todos os personagens e realizar o filtro por nome.
 */


export function* fetchAsyncCharacters() {
  yield put(setIsLoading(true))
  const search = yield select(searchCharacterSelector)


  let baseUrl = 'https://rickandmortyapi.com/api/character'
  if (search) {
    baseUrl = `${baseUrl}?name=${search}`
  }

  const response = yield call(fetch, baseUrl, {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json'
    },
  })

  if (response.status !== 200) {
    alert('Não existe personagem com esse nome')
    yield put(setIsLoading(false))
  }
  else {
    const data = yield response.json()
    yield put(setAvailableCharacters(data.results))
    yield put(setIsLoading(false))
  }
}

// export function* fetchDetails() {
//   yield put(setIsLoading(true))
//   const details = yield select(selectedCharacterSelector)

//   let baseUrl = 'https://rickandmortyapi.com/api/episode'
//   if (details) {
//     baseUrl = `${baseUrl}?id=${details.id}`
//   }

// }


export default function* characterSagas() {
  yield takeLatest('character/fetchAsyncCharacters', fetchAsyncCharacters)
}