import React, { useState } from 'react'
import List from '../../components/List'
import Search from '../../components/Search'
import Footer from '../../components/Footer'
import { PokemonContainer } from './style';


const PokemonContent = ({ fetchPokemonList, isLoading }) => {

  const [ filterText, setFilterText ] = useState('')

  const filterUpdate = (value) => {
    setFilterText(value)
  }

  return (
    <PokemonContainer>
        <Search 
          filterText={filterText}
          filterUpdate={filterUpdate.bind(this)}
        />
        <List
          filterText={filterText}
        />
        <Footer />
    </PokemonContainer>
  );
}

export default PokemonContent;
