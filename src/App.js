import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Card from "./componets/Card/Card";
import Favorites from "./componets/Favorites/Favorites";
import PokemonDetail from "./componets/PokemonDetail/PokemonDetail.js";
import Pagination from "./componets/Pagination/Pagination.js";

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [pageNumber, setPageNumber] = useState(1);

  console.log(pageNumber);
  const [fetchedData, updateFetchedData] = useState([]);
  const [favorites, setFavorites] = useState([]); // Estado para favoritos
  const [selectedPokemon, setSelectedPokemon] = useState(null); // Pokémon seleccionado
  const { results } = fetchedData;

  const api = `https://pokeapi.co/api/v2/pokemon?offset=${(pageNumber - 1) * 20
    }&limit=10`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  const addToFavorites = (pokemon) => {
    if (!favorites.find((fav) => fav.name === pokemon.name)) {
      setFavorites([...favorites, pokemon]);
    }
  };

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand " to="/">
            Pokémon <span className="text-primary"> WiKi</span>
          </Link>
          <Link className="nav-link text-primary" to="/favorites">
          <span className="text-primary"> Favoritos</span>
          </Link>
        </div>
      </nav>
      <div className="App">


        <h1 className="text-center my-4">
          <Link to="/" className="text-decoration-none text-dark">
            Pokémon<span className="text-primary"> WiKi</span>
          </Link>
        </h1>

        <div className="container">
          <Routes>
            {/* Ruta principal */}
            <Route
              path="/"
              element={
                <div className="row">
                  <div className="col-3">{/* Filtros pueden ir aquí */}</div>
                  <div className="col-8">
                    <div className="row">
                      <Card
                        results={results}
                        onAddToFavorites={addToFavorites}
                        onSelectPokemon={setSelectedPokemon} // Selección del Pokémon
                      />
                    </div>
                  </div>
                </div>
              }
            />
            {/* Ruta de favoritos */}
            <Route
              path="/favorites"
              element={<Favorites favorites={favorites} />}
            />
          </Routes>
        </div>

        <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />

      </div>
      {/* Modal para mostrar el detalle del Pokémon */}
      {selectedPokemon && (
        <PokemonDetail
          pokemon={selectedPokemon}
          onAddToFavorites={addToFavorites}
          onClose={() => setSelectedPokemon(null)} // Cerrar el detalle
        />
      )}
    </Router>
  );
}

export default App;
