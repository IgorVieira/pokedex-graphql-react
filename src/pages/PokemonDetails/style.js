import styled from 'styled-components'

export const PokemonContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin-top: 30px;
  justify-content: center;
  background: cornflowerblue;
  border: 8px solid fuchsia;
`

export const PokemonDetailImage = styled.img`
  border: 8px solid slateblue;
  margin-top: 10px;
  max-width: 300px;
  max-height: 346px;
`

export const PokemonDescription = styled.div`
  margin-top: 10px;
  margin-right: 50px;
  margin-left: 50px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
`

export const PokemonInfo = styled.div`
  padding-left: 20px;
  padding-right: 24px;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  padding-right: 24px;
  align-items: flex-start;
`

export const PokemonForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`

export const PokemonInput = styled.input`
  border: 2px solid black;
  outline: none;
`

export const PokemonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 150px;
`

export const PokemonButton = styled.button`
  padding: 10px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  outline: none;
  border: 2px solid #000;
  margin-bottom: 20px;
  margin-top: 20px;
  background: turquoise;
  cursor: pointer;
`

export const PokemonLink = styled.div`
  margint-top: 10px;
  margin-bottom: 20px;
`

export const PokemonLine = styled.hr`
  border: 1px solid #000;
  width: 100%;
`

export const PokemonLabel = styled.label`
  display: flex;
  align-items: center;
  color: #000;
  margin-top: 5px;
  line-height: 35px;
`

export const PokemonListItem = styled.div`
  color: #000;
  margin-top: 5px;
  margin-left: 10px;
  line-height: 25px;
`;