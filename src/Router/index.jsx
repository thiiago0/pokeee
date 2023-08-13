import React from "react";
import { Route, Routes } from "react-router-dom";
import NamePokemon from "../NamePokemon";
import InfoPokemon from "../InfoPokemon";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<NamePokemon />} />
      <Route path="/pokemons/:id/:name" element={<InfoPokemon />} />
    </Routes>
  );
};

export default Router;
