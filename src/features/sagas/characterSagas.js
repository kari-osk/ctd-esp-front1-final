import {  setAvailableCharacters, setIsLoading, searchCharacterSelector, pageSelector } from '../character/characterSlice'
import { call, put, takeLatest, select } from 'redux-saga/effects'

export function* fetchAsyncCharacters() {
  yield put(setIsLoading(true))
  const search = yield select(searchCharacterSelector)
  const page = yield select(pageSelector)

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

export default function* characterSagas() {
  yield takeLatest('character/fetchAsyncCharacters', fetchAsyncCharacters)
}