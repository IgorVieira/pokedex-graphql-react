import React, { useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { filter } from 'lodash';
import { LoadingText } from '../../constants/style';
import {
  PokemonContent,
  PokemonButton,
  PokemonImage,
  PokemonPainel,
  PokemonName,
  PokemonType
} from './style';

const List = ({ fetchPokemonList, listOfPokemons, filterText, updateCounter, counter, isLoading }) => {

  useEffect(() => {
    fetchPokemonList(counter)

    function handleScrollEvent() {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
      
      if (bottomOfWindow && listOfPokemons.length <= 150) {
        fetchPokemonList(counter)
        updateCounter(counter+10)
      }
    }

    window.addEventListener("scroll", handleScrollEvent, true);
     
    return () => {
      window.removeEventListener("scroll", handleScrollEvent, true);
    }

  }, [counter, fetchPokemonList, listOfPokemons.length, updateCounter])


  const cardList = filter(listOfPokemons, (pokemon) => {
                    return pokemon.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
                  })
                  .map((pokemon) => (
                    <PokemonPainel key={pokemon.id}>
                      <PokemonImage src={pokemon.image} alt={pokemon.image}/>
                      <PokemonName>{pokemon.name}</PokemonName>
                      <PokemonType>Type: <br/> {pokemon.types.map(type => `\n${type}`)}</PokemonType>
                      <Link to={`/show/${pokemon.id}`}><PokemonButton>See More</PokemonButton></Link>
                    </PokemonPainel>
                  ))
    return (
     <Fragment>
        <PokemonContent>
          {cardList}
        </PokemonContent>
        {isLoading && <LoadingText>Loading...</LoadingText>}
     </Fragment>
    )
}

export default List
