import { configureStore } from '@reduxjs/toolkit';
import characterReducer from './character/characterSlice'


export const store = configureStore({
  reducer: {
    character: characterReducer,

  }
})

export default store;