import { connect } from 'react-redux';

import { fetchPokemonList } from '../../store/actions';
import PokemonContent from './PokemonContent';

const mapStateToProps = state => ({
  isLoading: state.getPokemons.isFetching,
  listOfPokemons: state.getPokemons.pokemons
})

const mapDispatchToProps = {
  fetchPokemonList,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonContent);