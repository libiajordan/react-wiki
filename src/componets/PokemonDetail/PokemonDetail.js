import { useEffect, useState } from "react";

const PokemonDetail = ({ pokemon, onAddToFavorites, onClose }) => {
    const [pokemonDetails, setPokemonDetails] = useState(null);
  
    useEffect(() => {
      (async function () {
        const data = await fetch(pokemon.url).then((res) => res.json());
        setPokemonDetails(data);
      })();
    }, [pokemon]);
  
    if (!pokemonDetails) return null;
  
    const { name, sprites, height, weight, types } = pokemonDetails;
  
    return (
      <div className="modal show d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{name}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <img
                src={sprites.front_default}
                alt={name}
                className="img-fluid mb-3"
              />
              <p>
                <strong>Altura:</strong> {height} dm
              </p>
              <p>
                <strong>Peso:</strong> {weight} hg
              </p>
              <p>
                <strong>Tipos:</strong>{" "}
                {types.map((type) => type.type.name).join(", ")}
              </p>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-success"
                onClick={() => onAddToFavorites(pokemonDetails)}
              >
                Agregar a Favoritos
              </button>
             
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PokemonDetail;
  