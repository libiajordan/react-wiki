
import styles from "./Card.module.scss";

const Card = ({ results, onAddToFavorites, onSelectPokemon }) => {
  return (
    <div className="row">
      {results && results.length > 0 ? (
        results.map((pokemon, index) => {
          const id = pokemon.url.split("/").filter(Boolean).pop(); // Obtener ID del Pokémon
          return (
            <div key={index} className="col-4 mb-3">
              <div className={styles.card}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                  alt={pokemon.name}
                  className={styles.img}
                />
                <div className={styles.content}>
                  <div className="fs-4 fw-bold">{pokemon.name}</div>
                  <div className={styles.buttonGroup}>
                    <button
                      className="btn btn-primary"
                      onClick={() => onSelectPokemon(pokemon)}
                    >
                      Ver Información
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>No hay resultados disponibles.</p>
      )}
    </div>
  );
};

export default Card;
