import { createSlice } from '@reduxjs/toolkit';

/**
 * CreateSlice possui o estado inicial, funções redutoras e os seus tipos de ações correspondendes. 
 */

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
    page: 1,
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
     setFavoriteList: (state, action) => {
      state.favoriteList = action.payload
    },
    clearFavorite: (state) => {
      state.favoriteList = []
    },
  },
})


//Selector
export const isLoadingSelector = (state) => state.character.isLoading;
export const availableCharacterSelector = (state) => state.character.availableCharacter;
export const selectedCharacterSelector = (state) => state.character.selectedCharacter;
export const searchCharacterSelector = (state) => state.character.search;
export const isFavoriteSelector = (state) => state.character.isFavorite;
export const favoriteListSelector = (state) => state.character.favoriteList;
export const nameStartWithSelector = (state, namePrefix) => state.filter(state=> state.name.startsWith(namePrefix));
export const pageSelector = (state) => state.character.page;


//Actions
export const fetchAsyncCharacters = () => ({type: 'character/fetchAsyncCharacters'})
export const addCharacter = (character) => ({ type: 'character/addCharacter', payload: character })
export const removeCharacter = (id) => ({ type: 'character/removeCharacter', payload: id })
export const setAvailableCharacters = (character) => ({ type: 'character/setAvailableCharacters', payload: character})
export const setIsLoading = (isLoading) => ({ type: 'character/setIsLoading', payload: isLoading })
export const setSearch = (search) => ({ type: 'character/setSearch', payload: search });
export const setIsFavorite = (isFavorite) => ({ type: 'character/setIsFavorite', payload: isFavorite });
export const setFavoriteList = (favoriteList) => ({ type: 'character/setFavoriteList', payload: favoriteList})
export const getFavorites = () => ({ type: 'character/getFavorites'})
export const clearFavorite = () => ({ type: 'character/clearFavorite'})


//Reducer
export default characterSlice.reducer;


