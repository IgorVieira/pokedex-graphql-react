import React,  { useEffect, useState, Fragment } from 'react';
import { map, isEmpty } from 'lodash';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import { LoadingText } from '../../constants/style';
import {
  PokemonContainer,
  PokemonContent,
  PokemonDetailImage,
  PokemonDescription,
  PokemonForm,
  PokemonInput,
  PokemonButton,
  PokemonLine,
  PokemonLink,
  PokemonLabel,
  PokemonListItem,
  PokemonInfo
} from './style';


const PokemonDetails = ({
  getPokemonById,
  pokemonDetails,
  match,
  updatePokemonData,
  isLoading,
}) => {
  useEffect(() => {
    getPokemonById(match.params.id)
  }, [getPokemonById, match.params.id])

  const [ name, setName ] = useState()
  const [ error, setError ] = useState()

  const handleWithSaveInfo = (e) => {
    e.preventDefault();
    
    const data = {
      pokemon: {
        ...pokemonDetails,
        name,
      }
    }

    if(!isEmpty(data.pokemon.name)) {
      updatePokemonData(data)
      setName('')
      setError('')
    } else {
      setError(`Please, select a name!`)
    }

  }
  
  return (
    <Fragment>
      <PokemonContainer>
        {
          isLoading
        ?  <LoadingText>Loading...</LoadingText>
        : <PokemonContent>
            <PokemonInfo>
              <PokemonDetailImage src={pokemonDetails.image} alt={pokemonDetails.image} />
              <PokemonLabel>Name: {pokemonDetails.name}</PokemonLabel>
              <PokemonLabel>HP: {pokemonDetails.maxHP}</PokemonLabel>
              <PokemonLabel>CP: {pokemonDetails.maxCP}</PokemonLabel>
              <PokemonLabel>Attacks:</PokemonLabel>
              <PokemonListItem>
                {map(pokemonDetails.attacks, (attacks, index) => (
                  <ul key={index}>
                    {map(attacks, (attack, index) => (
                      <li key={index}>{attack.name} -  {attack.type}</li>
                    ))}
                  </ul>  
                ))}
              </PokemonListItem>
              <PokemonLabel>Type: {map(pokemonDetails.types, (type) => `\n${type}`)}</PokemonLabel>

            </PokemonInfo>
            <PokemonDescription>
              <PokemonForm>
                <PokemonLabel>Name:</PokemonLabel>
                <PokemonInput name='name' onChange={(e) => setName(e.target.value)} />
                <PokemonButton onClick={(e) => handleWithSaveInfo(e)}>Edit</PokemonButton>
              </PokemonForm>
              <PokemonLine />
              <PokemonLabel>{error}</PokemonLabel>
              <PokemonLink><Link to="/">Back</Link></PokemonLink>
            </PokemonDescription>
          </PokemonContent>
        }

      </PokemonContainer>
      <Footer />
    </Fragment>
  );
};

export default PokemonDetails