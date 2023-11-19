import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";
import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

const pokemonList = [
  {
    id: 0,
    name: "Bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    id: 1,
    name: "Charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    id: 2,
    name: "Squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    id: 3,
    name: "Pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    id: 4,
    name: "Mew",
  },
];

function App() {
  useEffect(
    () =>  {
    alert("hello pokemon trainer :)");
    }, 
    []
 );
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const pokemon = pokemonList[pokemonIndex];

  return (
    <>
      <div>
        <h1>POKEDEX</h1>
      </div>
      <div>
        <NavBar 
        tableau={pokemonList}
        objet={pokemonIndex}
        fonction={setPokemonIndex} />
      </div>
      <div>
        <PokemonCard pokemon={pokemon} />
      </div>
    </>
  );
}

export default App;
