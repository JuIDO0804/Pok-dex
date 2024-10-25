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
function PokemonCard({pokemon}) {
  return (
    <div>
      <figure>
        {pokemon.imgSrc ? (<img src={pokemon.imgSrc} alt="" /> ):(<p>???</p>)}
      </figure>
      <figcaption>{pokemon.name} </figcaption>
    </div>
  );
  
}
export default PokemonCard;
