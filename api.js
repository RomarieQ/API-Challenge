
const pokemon_container = 
document.getElementById('pokemon_container');

const fetchPokemon = async () => {
    for(let i = 1; i <= 151; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonLayout(pokemon);
}

fetchPokemon();

function createPokemonLayout(pokemon) {
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon');

    const pokemonInnerHTML = `
        ${pokemon.name}
        <div class="image-container">
            <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png">
        </div>
        <div class="stats">
            <span class="number">${pokemon.id}</span>
            <h4 class="name">${name}</h4>
        </div>
        
    `;
    pokemonElement.innerHTML = pokemonInnerHTML; 
       
    
    pokemon_container.appendChild(pokemonElement);
}