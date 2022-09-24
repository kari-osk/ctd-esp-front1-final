import { createSlice } from '@reduxjs/toolkit';

//Slice 
const characterSlice = createSlice({
  name: 'character',
  initialState: {
    isLoading: false,
    search: '',
    availableCharacter: [{}],
    selectedCharacter: [{}]
  },
  reducers: {
    addCharacter: (state, action) => {
      state.selectedCharacter.push(action.payload);
    },
    removeCharacter: (state, action) => {
      state.selectedCharacter = state.selectedCharacter.filter(
        (character) => character.id !== action.payload.id)
    },
    setAvailableCharacters: (state, action) => {
      state.availableCharacter = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setSearch(state, action) {
      state.search = action.payload
    }
  },
})


//Selector
export const isLoadingSelector = (state) => state.character.isLoading;
export const availableCharacterSelector = (state) => state.character.availableCharacter;
export const selectedCharacterSelector = (state) => state.character.selectedCharacter;
export const searchCharacterSelector = (state) => state.character.search;


//Thunk
export function fetAsyncCharacters(id) {
  return async function (dispatch) {
    dispatch(setIsLoading(true))

    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const data = await response.json();

    dispatch(setAvailableCharacters(data.results))
    dispatch(setIsLoading(false))
  }
};


export const fetchAvailableCharacters = () => ({
  type: 'character/fetchAvailableCharacters'
})
export const {
  addCharacter,
  removeCharacter,
  setAvailableCharacters,
  setIsLoading,
  setSearch,
} = characterSlice.actions


//Reducer
export default characterSlice.reducer;