import * as pokemonTypes from '../../../store/actionTypes';
import { 
  defaultPokemonState,
  defaultPokemonstState,
  getPokemonById,
  getPokemons
} from '../../../store/reducers';
import { first } from 'lodash';
import { pokemonsMock } from '../mock';

describe('pokemon reducer', () => {
  it('should make a request for list the pokemons', () => {
    expect(getPokemons(defaultPokemonstState, {
      type: pokemonTypes.GET_POKEMONS_REQUEST,
    }))
      .toEqual({
        ...defaultPokemonstState,
        error: null,
        isFetching: true,
      });
  });

  it('should set correct return pokemon list in data request', () => {
    const data = pokemonsMock;
    const pokemons = data
    expect(getPokemons(defaultPokemonstState, {
      type: pokemonTypes.GET_POKEMONS_SUCCESS,
      dispatch: { data }
    }))
      .toEqual({
        ...defaultPokemonstState,
        error: null,
        isFetching: false,
        ...pokemons
      });
  });

  it('should set error for pokemon list in this request', () => {
    const error = 'Unprocessable entity';

    expect(getPokemons(defaultPokemonstState, {
      type: pokemonTypes.GET_POKEMONS_ERROR,
      dispatch: { error }
    }))
      .toEqual({
        ...defaultPokemonstState,
        error,
        isFetching: false,
      });
  });

  it('should make a request for a pokemon', () => {
    const isFetching = true

    expect(getPokemons(defaultPokemonState, {
      type: pokemonTypes.GET_POKEMON_BY_ID_REQUEST,
    }))
      .toEqual({
        ...defaultPokemonState,
        error: null,
        ...isFetching,
      });
  });

  it('should set correct return pokemon in data request', () => {
    const data = {
      pokemon: first(pokemonsMock)
    }

    expect(getPokemonById(defaultPokemonState, {
      type: pokemonTypes.GET_POKEMON_BY_ID_SUCCESS,
      dispatch: { data }
    }))
    .toEqual({
      ...defaultPokemonState,
      isFetching: false,
      pokemon: {...data}
    })
  });

  it('should set error for get a pokemon in this request', () => {
    const error = 'Unprocessable entity'

    expect(getPokemonById(defaultPokemonState, {
      type: pokemonTypes.GET_POKEMON_BY_ID_ERROR,
      dispatch: { error }
    }))
      .toEqual({
        ...defaultPokemonState,
        error,
        isFetching: false,
      });
  });
  
  it('should set error for get a pokemon in this request', () => {
    const data =  10;
    expect(getPokemons(defaultPokemonstState, {
      type: pokemonTypes.UPDATE_COUNTER,
      dispatch: { data }
    }))
      .toEqual({
        ...defaultPokemonstState,
        isFetching: true,
        counter: data
      });
  });

});
