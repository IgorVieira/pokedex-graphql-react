
import styled from 'styled-components'

export const PokemonListOfPainels = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding: 0;
  list-style: none;
  margin-right: 100px;
  margin-left: 100px
`

export const PokemonPainel = styled.div`
  display: flex;
  padding: 5px;
  width: 212px;
  background: cornflowerblue;
  border: 8px solid fuchsia;
  margin-top: 30px;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 30px;
  flex-direction: column;
`

export const PokemonImage = styled.img`
  width: 195px;
  height: 234px;
  border: 8px solid slateblue;
`

export const PokemonContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 100px;
`

export const PokemonType = styled.div`
  margin-top: 10px;
  line-height: 22px;
`

export const PokemonName = styled.div`
  margin-top: 15px;
`

export const PokemonButton = styled.button`
  padding: 7px;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: bold;
  background: aquamarine;
  cursor: pointer;
  outline: none;
}
`