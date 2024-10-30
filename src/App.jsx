import { useState } from 'react';
import './App.css';
import Header from './Header';
import SearchForm from './SearchForm';
import PokemonDetails from './PokemonDetails';
import ErrorMessage from './ErrorMessage';

function App() {
  const [pokemon, setPokemon] = useState(null);
  const [pokemonName, setPokemonName] = useState('');
  const [error, setError] = useState(null);

  const fetchPokemon = async (name) => {
    try {
      setError(null);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
      if (!response.ok) {
        throw new Error('Pokémon no encontrado');
      }
      const data = await response.json();
      setPokemon(data);
    } catch (err) {
      setError(err.message);
      setPokemon(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPokemon(pokemonName);
  };

  return (
    <>
      <Header />
      <SearchForm 
        pokemonName={pokemonName} 
        setPokemonName={setPokemonName} 
        handleSubmit={handleSubmit} 
      />
      {error && <ErrorMessage error={error} />}
      {pokemon && <PokemonDetails pokemon={pokemon} />}
    </>
  );
}

export default App;