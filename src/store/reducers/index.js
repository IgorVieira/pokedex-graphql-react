import { combineReducers } from 'redux'
import * as actionTypes from '../actionTypes';

export const defaultPokemonstState = {
  error: null,
  isFetching: false,
  pokemons: [],
  counter: 22
}

export const defaultPokemonState = {
  error: null,
  isFetching: false,
  pokemon: {},
}

export const getPokemons = (state = defaultPokemonstState, { type, dispatch }) => {
  switch (type) {
    case actionTypes.GET_POKEMONS_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true,
      };

    case actionTypes.GET_POKEMONS_SUCCESS:
      const pokemons = dispatch.data

      return {
        ...state,
        isFetching: false,
        ...pokemons
      };
    case actionTypes.UPDATE_COUNTER:
      return {
        ...state,
        isFetching: true,
        counter: dispatch.data
      };
    case actionTypes.GET_POKEMONS_ERROR:
      return {
        ...state,
        error: dispatch.error,
        isFetching: false,
      }
    default:
      return state;
  }
}

export const getPokemonById =  (state = defaultPokemonState, { type, dispatch }) => {
  switch (type) {
    case actionTypes.GET_POKEMON_BY_ID_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true,
      };
    case actionTypes.GET_POKEMON_BY_ID_SUCCESS:
      return {
        ...state,
        isFetching: false,
        pokemon: {...dispatch.data}
      };
    case actionTypes.UPDATE_POKEMON_BY_ID_SUCCESS:
      return {
        ...state,
        isFetching: false,
        pokemon: {...dispatch.data.pokemon}
      };
    case actionTypes.GET_POKEMON_BY_ID_ERROR:
      return {
        ...state,
        error: dispatch.error,
        isFetching: false,
      }
    default:
      return state;
  }
}



export default combineReducers({
  getPokemons,
  getPokemonById,
})