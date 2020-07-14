import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { filter } from 'lodash';
import { useScrollToTop } from '../../utils'
import { LoadingText } from '../../constants/style';
import { ArrowFromBottom } from '@styled-icons/boxicons-regular/ArrowFromBottom'
import {
  PokemonContent,
  PokemonButton,
  PokemonImage,
  PokemonPainel,
  PokemonName,
  PokemonType,
  PokemonScrollTop
} from './style';

const List = ({
  fetchPokemonList,
  listOfPokemons,
  filterText,
  updateCounter,
  counter,
  isLoading
}) => {


  const [ visible, setVisible ] =  useState(false)

  useEffect(() => {
    fetchPokemonList(counter)

    function handleScrollEvent() {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
      
      if (bottomOfWindow && listOfPokemons.length <= 150) {
        fetchPokemonList(counter)
        updateCounter(counter+10)
      }

      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    

    window.addEventListener("scroll", handleScrollEvent, true);
     
    return () => {
      window.removeEventListener("scroll", handleScrollEvent, true);
    }

  }, [counter, fetchPokemonList, listOfPokemons.length, updateCounter])

  const setScrollToTop = useScrollToTop(true);
  

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
     <>
      <PokemonContent>
        <>{cardList}</>
        
        {
          visible &&
          <PokemonScrollTop 
            onClick={() => setScrollToTop(true)}
          >
            <ArrowFromBottom />
          </PokemonScrollTop>
        }
      
      </PokemonContent>
      {isLoading && <LoadingText>Loading...</LoadingText>}
     </>
    )
}


List.propTypes = {
  fetchPokemonList: PropTypes.func.isRequired,
  listOfPokemons: PropTypes.array.isRequired,
  filterText: PropTypes.string.isRequired,
  updateCounter: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default List
