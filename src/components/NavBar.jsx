import PropTypes from "prop-types";

function NavBar({ tableau, fonction }) {
  return (
    <nav className="nav-style">
      {tableau.map((pokemon) => (
        <button key={pokemon.id} onClick={() => fonction(pokemon.id)}>
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

NavBar.propTypes = {
  tableau: PropTypes.array.isRequired,
  fonction: PropTypes.func.isRequired,
};

export default NavBar;
