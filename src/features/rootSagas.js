import {all} from 'redux-saga/effects'
import characterSagas from './sagas/characterSagas'
import { favoriteSagas } from './sagas/favoriteSagas'

export default function* rootSagas() {
  yield all([
    characterSagas(),
    favoriteSagas(),
  ])
}