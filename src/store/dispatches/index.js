import * as actionTypes from '../actionTypes';

export const getPokemonsRequest = () => ({
  type: actionTypes.GET_POKEMONS_REQUEST,
});

export const getPokemonsSuccess = (data) =>  ({
  type: actionTypes.GET_POKEMONS_SUCCESS,
  dispatch: { data },
})

export const getPokemonsError = (error) => ({
  type: actionTypes.GET_POKEMONS_ERROR,
  dispatch: { error },
});

export const getPokemonByIdRequest = () => ({
  type: actionTypes.GET_POKEMON_BY_ID_REQUEST,
});

export const getPokemonByIdSuccess = (data) => ({
  type: actionTypes.GET_POKEMON_BY_ID_SUCCESS,
  dispatch: { data },
})

export const getPokemonByIdError = (error) => ({
  type: actionTypes.GET_POKEMON_BY_ID_ERROR,
  dispatch: { error },
});

export const updatePokemonByIdSuccess = (data) => ({
  type: actionTypes.UPDATE_POKEMON_BY_ID_SUCCESS,
  dispatch: { data },
})

export const updatePokemonByIdError = (error) => ({
  type: actionTypes.UPDATE_POKEMON_BY_ID_ERROR,
  dispatch: { error },
});

export const updateCounter = (data) => ({
  type: actionTypes.UPDATE_COUNTER,
  dispatch: { data },
})

