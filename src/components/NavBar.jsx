import PropTypes from "prop-types";

function NavBar({ tableau, fonction, objet }) {
  
  const handleClick = (i) => {
    // setPokemonIndex
    fonction(i);
  };

  if (tableau[objet].name === "Pikachu") {
    alert(`pika pikachu !!!`);
  }
  return (
    <nav className="nav-style">
      {tableau.map((pokemon) => (
        <button key={pokemon.id} onClick={() => handleClick(pokemon.id)}>
          {pokemon.name}
        </button>
      ))}
    </nav>
  );
}

NavBar.propTypes = {
  objet: PropTypes.number.isRequired,
  tableau: PropTypes.array.isRequired,
  fonction: PropTypes.func.isRequired,
};

export default NavBar;
