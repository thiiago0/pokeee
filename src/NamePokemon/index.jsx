import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../Constantes";

import "./name.css";

const NamePokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setPokemon(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getPokemon();
  }, []);

  return (
    <div className="container">
      <div className="titulo">
        <h1> Listados de Pokemons</h1>
      </div>
      <div className="card-container">
        {pokemon.map((p) => (
          <div className="card" key={p.name}>
            {p.sprites && p.sprites.front_default && (
              <img
                className="image  animate__zoomInDown"
                src={p.sprites.front_default}
                alt={p.name}
              />
            )}

            <h4 className="nombre">{p.name}</h4>
            <Link to={`/pokemons/${p.url.split("/").slice(-2)[0]}/${p.name}`}>
              <button className="btn-pokemon">ver pokemon</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NamePokemon;
