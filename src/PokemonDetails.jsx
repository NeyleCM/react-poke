const PokemonDetails = ({ pokemon }) => (
    <div className="cardPokemon">
      <h2>{pokemon.name.toUpperCase()}</h2>
      <img src={pokemon.sprites.other.dream_world.front_default} alt={pokemon.name} className="imgCardPokemon"/>
      <p>Altura: {pokemon.height * 10} cm</p>
      <p>Peso: {pokemon.weight / 10} kg</p>
    </div>
  );
  
  export default PokemonDetails;