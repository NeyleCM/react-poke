/*----CON useEffect-----*/
const SearchForm = ({ pokemonName, handleChange }) => (
  <>
  <form onSubmit={(e) => e.preventDefault()}>
    <label htmlFor="pokemonName">Buscar Pokémon:</label>
    <input
      type="text"
      id="pokemonName"
      value={pokemonName}
      placeholder="Nombre del pokemón"
      onChange={handleChange} 
    />
  </form>
  </>
);

export default SearchForm;

/*----SIN useEffect-----*/

// const SearchForm = ({ pokemonName, setPokemonName, handleSubmit }) => (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="pokemonName">Buscar Pokémon:</label>
//       <input
//         type="text"
//         id="pokemonName"
//         value={pokemonName}
//         onChange={(e) => setPokemonName(e.target.value)}
//       />
//       <button type="submit">Buscar</button>
//     </form>
//   );
  
//   export default SearchForm;