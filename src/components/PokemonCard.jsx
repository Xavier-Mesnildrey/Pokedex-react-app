

const pokemonList = [
    { name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"},
    {name: "mew" },
  ];

const pokemon = pokemonList[1];

function PokemonCard() {
    
    return (
    <figure>
    {pokemon.imgSrc ? (
        <div>
          <img src={pokemon.imgSrc} alt={pokemon.name} />
        <figcaption>{pokemon.name}</figcaption>
        </div>
      ) : (
        <div>
          <p>???</p>
          <figcaption>{pokemon.name}</figcaption>
        </div>
      )}
    </figure>
    );
}
       

    export default PokemonCard;