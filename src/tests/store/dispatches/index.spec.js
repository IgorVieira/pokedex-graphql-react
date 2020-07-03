import * as pokemonTypes from '../../../store/actionTypes';
import * as dispatches from '../../../store/dispatches';
import { pokemonsMock } from '../mock'
import { first } from 'lodash';

describe('bank data', () => {
  it('should dispatch the correct actionType to request pokemon list', () => {
    const expectedDispatch = { type: pokemonTypes.GET_POKEMONS_REQUEST };

    expect(dispatches.getPokemonsRequest()).toEqual(expectedDispatch);
  });

  it('should dispatch the correct actionType and payload on success pokemon list', () => {
    const data = pokemonsMock
    const expectedDispatch = {
      type: pokemonTypes.GET_POKEMONS_SUCCESS,
      dispatch: { data },
    };

    expect(dispatches.getPokemonsSuccess(data)).toEqual(expectedDispatch);
  });

  it('should dispatch the correct actionType and payload on pokemon list', () => {
    const error =  'Unprocessable entity';

    const expectedDispatch = {
      type: pokemonTypes.GET_POKEMONS_ERROR,
      dispatch: { error },
    };

    expect(dispatches.getPokemonsError(error)).toEqual(expectedDispatch);
  });

  it('should dispatch the correct actionType to request pokemon', () => {
    const expectedDispatch = { type: pokemonTypes.GET_POKEMON_BY_ID_REQUEST };

    expect(dispatches.getPokemonByIdRequest()).toEqual(expectedDispatch);
  });

  it('should dispatch the correct actionType and payload on success pokemon', () => {
    const data = {
      pokemon: first(pokemonsMock)
    }
    const expectedDispatch = {
      type: pokemonTypes.GET_POKEMON_BY_ID_SUCCESS,
      dispatch: { data },
    };

    expect(dispatches.getPokemonByIdSuccess(data)).toEqual(expectedDispatch);
  });

  it('should dispatch the correct actionType and payload on pokemon', () => {
    const error =  'Unprocessable entity';

    const expectedDispatch = {
      type: pokemonTypes.GET_POKEMON_BY_ID_ERROR,
      dispatch: { error },
    };

    expect(dispatches.getPokemonByIdError(error)).toEqual(expectedDispatch);
  });

  it('should dispatch the correct actionType and count 10 more pokemons', () => {
    const data = 10

    const expectedDispatch = {
      type: pokemonTypes.UPDATE_COUNTER,
      dispatch: { data },
    };

    expect(dispatches.updateCounter(data)).toEqual(expectedDispatch);
  });

});
