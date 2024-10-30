import { useState } from "react";
import PokemonCard from "./components/Pokemoncard";
import "./App.css";
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];
function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  console.log(pokemonIndex);

  const handlePrevious = () => {
    // si pokemon index est == 0  tu ne dois rien faire
    setPokemonIndex(pokemonIndex - 1);
  };

  const handleNext = () => {

    // si pokemon index est égal à la taille de mon tableau pokemonlist tu ne dois rien faire
    setPokemonIndex(pokemonIndex + 1);
  };

  return (
    <section>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      { pokemonIndex > 0 ?(
      <button onClick={handlePrevious}>Précédent</button>) : ("")}
      { pokemonIndex < pokemonList.length - 1 ? (
      <button onClick={handleNext}>Suivant</button>) : ("")}
    </section>
  );
}
export default App;
