
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












// const pokemonInfo = document.getElementById("pokemonInfo");
// // console.log("pokemonInfo");


// for(let i = 1; i <= 151; i++) {
    // const url = `https://pokeapi.co/api/v2/pokemon/${i}`;

//     fetch(url)
//         .then((result) => {
//             return result.json();
//         })
//         .then((data) => {

//             const pokemon = {};
//             pokemon['name'] = data.name;
//             pokemon['id'] = data.id;
//             pokemon['image'] = data.sprites['front_default'];
//             console.log(pokemon);


           
//         })
// };

// const displayPokemon = (pokemon) => {
//     console.log(pokemon);
//     const pokemonHTMLString = pokemon
//     .map(
//         (pokes) =>
//     `
//     <li>
//         <img src="${pokes.image}"/>
//         <h2>${pokes.id}. ${pokes.name}</h2>
//         <p>Type: ${pokes.type}</p>
//     </li>
//     `
//     )
//     .join('');
//     pokes.innerHTML = pokemonHTMLString;
// }
