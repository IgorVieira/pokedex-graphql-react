import { connect } from 'react-redux';

import { getPokemonById, updatePokemonData } from '../../store/actions';
import PokemonDetails from './PokemonDetails';

const mapStateToProps = state => ({
  pokemonDetails: state.getPokemonById.pokemon,
  isLoading: state.getPokemonById.isFetching
})

const mapDispatchToProps = {
  getPokemonById,
  updatePokemonData,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails);