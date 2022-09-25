import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './character/characterSlice'
import createSagaMiddleware from 'redux-saga'
import rootSagas from './rootSagas';

const sagaMiddleware = createSagaMiddleware()

export default configureStore({
  reducer: {
    character: characterReducer,
  }, 
  middleware: (getDefaultMiddleware) => 
    [...getDefaultMiddleware({thunk: false}), 
    sagaMiddleware]
})

// export default store;

sagaMiddleware.run(rootSagas)