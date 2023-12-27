const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const getPokemon = async (id) => {
	const endPoint = `https://pokeapi.co/api/v2/pokemon/${id}/`
	const response = await fetch(endPoint)
	const pokeData = await response.json()
	return pokeData
};

const getPokemons = async (num) => {
	for (let i = 1; i<=num; i++) {
		const pokeData = await getPokemon(i);  

		const poke_number = `# ${pokeData.id.toString().padStart(3, 0)}`   
		const poke_name = pokeData.name
		const poke_type = pokeData.types[0].type.name
		const poke_image = pokeData.sprites.other['official-artwork'].front_default  
		
		const createPokemonCard =
		` <div class="pokemon" style="background-color: ${colors[poke_type]};">
		  <div class="img-container">
				<img src="${poke_image}" alt="${poke_name}">
 			</div>
 			<div class="info">
 				<span class="number">${poke_number}</span>
 				<h3 class="name">${poke_name}</h3>
 				<small class="type">Type: <span>${poke_type}</span></small>
 			</div>
 		</div>`
		poke_container.innerHTML += createPokemonCard;
	}
}

getPokemons(pokemon_count);

