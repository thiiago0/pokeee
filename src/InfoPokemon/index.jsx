import React, { useState, useEffect } from "react";
import { POKEMON_URL } from "../Constantes";
import { useParams, Link } from "react-router-dom";

const InfoPokemon = () => {
  const { id } = useParams(); // Cambio de name a id
  const [pokemons, setPokemons] = useState({
    moves: [],
    sprites: { other: { dream_world: { front_default: "" } } },
  });
  const { moves, sprites } = pokemons;
  const movesToShow = moves.slice(0, 2);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const res = await fetch(`${POKEMON_URL}${id}/`); // Cambio de name a id
        const data = await res.json();
        setPokemons(data);
      } catch (error) {
        console.error(error);
      }
    };
    getPokemons();
  }, [id]); // Cambio de name a id

  return id ? (
    <div>
      <h1 className="titulo">Información del Pokémon: {id}</h1>
      {sprites && sprites.other.dream_world.front_default && (
        <img
          className="animate__animated animate__bounce"
          src={sprites.other.dream_world.front_default}
          alt={id}
        />
      )}
      <ul className="moves">
        {movesToShow.map((move) => (
          <li key={move.move.name}>{move.move.name}</li>
        ))}
      </ul>
      <Link to="/">
        <span className="material-symbols-outlined">keyboard_return</span>
      </Link>
    </div>
  ) : null;
};

export default InfoPokemon;
{
  /* <span class="material-symbols-outlined">keyboard_return</span>; */
}
