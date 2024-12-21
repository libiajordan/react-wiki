import styles from "./Favorites.module.scss";
import PokemonDetail from "../PokemonDetail/PokemonDetail";


const Favorites = ({ favorites, onSelectPokemon }) => {
  return (
    <div className="container">
      <h1 className="text-center my-4">
        Mis <span className="text-primary">Favoritos</span>
      </h1>
      <div className="row">
        {favorites.length > 0 ? (
          favorites.map((pokemon) => (
            <div key={pokemon.id} className="col-4 mb-3">
              <div className={styles.card}>
                <img
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  className={styles.img}
                />
                <div className={styles.content}>
                  <div className="fs-4 fw-bold">{pokemon.name}</div>
                  <button
                    className="btn btn-primary mt-2"
                    onClick={() => onSelectPokemon(pokemon)}
                  >
                    Ver Información
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className={styles.message}>No tienes favoritos aún.</p>
        )}
      </div>
    </div>
  );
};

export default Favorites;
