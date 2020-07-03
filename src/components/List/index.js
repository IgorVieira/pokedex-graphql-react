import { connect } from 'react-redux';
import { fetchPokemonList, updateCounter } from '../../store/actions';
import List from './List';

const mapStateToProps = state =>({
  listOfPokemons: state.getPokemons.pokemons,
  counter: state.getPokemons.counter,
  isLoading: state.getPokemons.isFetching,
});

const mapDispatchToProps = {
  fetchPokemonList,
  updateCounter
};

export default connect(mapStateToProps, mapDispatchToProps)(List);