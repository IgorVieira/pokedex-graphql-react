import * as dispatches from '../dispatches';
import { request } from 'graphql-request'

export const fetchPokemonList = (value) => (
  dispatch => {
    dispatch(dispatches.getPokemonsRequest());
 
    const query = `{
      pokemons(first: ${value}) {
        id
        name
        image
        types
      }
    }`
    
    return request('https://graphql-pokemon.now.sh/', query)
      .then((data) => {
        return dispatch(dispatches.getPokemonsSuccess(data))
      })
      .catch(error => {
        return dispatch(dispatches.getPokemonsError(error))
      })
  }
);


export const getPokemonById = (pokemonId) => (
  dispatch => {
    dispatch(dispatches.getPokemonByIdRequest());
 
    const query = `{
      pokemon(id: "${pokemonId}") {
        id
        name
        types
        image
        maxHP
    	  maxCP
        attacks {
          fast {
            name
            type
            damage
          }
          special {
            name
            type
            damage
          }
        }
      }
    }`

    return request('https://graphql-pokemon.now.sh/', query)
      .then((data) => dispatch(dispatches.getPokemonByIdSuccess(data.pokemon)))
      .catch(error => dispatch(dispatches.getPokemonByIdError(error)))
  }
);

export const updatePokemonData = (data) => 
  dispatch => {
    return dispatch(dispatches.updatePokemonByIdSuccess(data))
  }
  

export const updateCounter = (data) =>
  dispatch => dispatch(dispatches.updateCounter(data))


