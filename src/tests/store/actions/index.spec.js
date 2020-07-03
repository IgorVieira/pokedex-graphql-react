import MockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { pokemonsMock, pokemonMock } from '../mock';
import { first } from 'lodash';
import * as actions from '../../../store/actions';
import * as dispatches from '../../../store/dispatches';
import { defaultPokemonState, defaultPokemonstState } from '../../../store/reducers';

describe('bank actions', () => {
  let store;
  const state = { defaultPokemonState, defaultPokemonstState };
  const middlewares = [thunk];
  const mockStore = MockStore(middlewares);

  beforeEach(() => {
    store = mockStore(state);
  });

  afterEach(() => {
    store.clearActions();
  });

  it('triggers for GET_POKEMONS_SUCCESS', async() => {
    const payload = {
      pokemons: pokemonsMock
    };

    const expectedActions = [
      dispatches.getPokemonsRequest(),
      dispatches.getPokemonsSuccess(payload),
    ];

    await store.dispatch(actions.fetchPokemonList(1));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('triggers for GET_POKEMONS_SUCCESS', async() => {
    const data = pokemonMock;
    const pokemonId = "UG9rZW1vbjowMDE=";
    
    const expectedActions = [
      dispatches.getPokemonByIdRequest(),
      dispatches.getPokemonByIdSuccess(data),
    ];

    await store.dispatch(actions.getPokemonById(pokemonId));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('triggers for UPDATE_COUNTER', async() => {
    const data = 10;
    
    const expectedActions = [
      dispatches.updateCounter(data),
    ];

    await store.dispatch(actions.updateCounter(data));
    expect(store.getActions()).toEqual(expectedActions);
  });

});
