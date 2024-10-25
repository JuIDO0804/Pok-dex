import PokemonCard from "./components/Pokemoncard";
import "./App.css";
const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "mew",
    },

  ];
function App() {
  
  return (
    <section>
      <PokemonCard pokemon={pokemonList[1]}/>

    </section>
  );
}
export default App;
