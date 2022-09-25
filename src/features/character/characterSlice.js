import { createSlice } from '@reduxjs/toolkit';

//Slice 
const characterSlice = createSlice({
  name: 'character',
  initialState: {
    isLoading: false,
    search: '',
    availableCharacter: [],
    selectedCharacter: [],
    isFavorite: false,
    favoriteList: [],
  },
  reducers: {
    addCharacter: (state, action) => {
      state.selectedCharacter = [...state.selectedCharacter, (action.payload || [])];
    },
    removeCharacter: (state, action) => {
      state.selectedCharacter = [...state.selectedCharacter.filter(
        (character) => character.id !== action.payload.id)]
    },
    setAvailableCharacters: (state, action) => {
      state.availableCharacter = action.payload
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setSearch(state, action) {
      state.search = action.payload
    }, 
    isFavorite: (state, action) => {
      state.isFavorite = action.payload
    },
  },
})


//Selector
export const isLoadingSelector = (state) => state.character.isLoading;
export const availableCharacterSelector = (state) => state.character.availableCharacter;
export const selectedCharacterSelector = (state) => state.character.selectedCharacter;
export const searchCharacterSelector = (state) => state.character.search;
export const isFavoriteSelector = (state) => state.character.isFavorite;
export const favoriteSelector = (state) => state.character.favoriteSelector;
export const pageSelector = (state) => state.character.pageSelector;

export const fetchAsyncCharacters = () => ({
  type: 'character/fetchAsyncCharacters'
})
export const addCharacter = (character) => ({ type: 'character/addCharacter', payload: character })
export const removeCharacter = (id) => ({ type: 'character/removeCharacter', payload: id })
export const setAvailableCharacters = (character) => ({ type: 'character/setAvailableCharacters', payload: character})
export const setIsLoading = (isLoading) => ({ type: 'character/setIsLoading', payload: isLoading })
export const setSearch = (search) => ({ type: 'character/setSearch', payload: search });
export const setIsFavorite = (isFavorite) => ({ type: 'character/setIsFavorite', payload: isFavorite });
export const getFavorite = () => ({ type: 'character/getFavorite'});
export const setFavotire = (favoriteList) => ({ type: 'character/setFavotire'})


//Reducer
export default characterSlice.reducer;








//Thunk
// export function fetAsyncCharacters(id) {
//   return async function (dispatch) {
//     dispatch(setIsLoading(true))

//     const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
//     const data = await response.json();

//     dispatch(setAvailableCharacters(data.results))
//     dispatch(setIsLoading(false))
//   }
// };
