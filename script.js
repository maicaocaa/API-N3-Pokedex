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


// 1 definir funcion asincrona
//elegir el endpoint

function getPokemons() {
	const endPoint = "https://pokeapi.co/api/v2/pokemon/"
	let response = fetch(endPoint);
	return response
	};






console.log( getPokemons());

// const createPokemonCard =
// 		` <div class="pokemon" style="background-color: rgb(222,253,224);">
// 			<div class="img-container">
// 				<img src="" alt="Bulbasaur">
// 			</div>
// 			<div class="info">
// 				<span class="number">001</span>
// 				<h3 class="name">Bulbasaur</h3>
// 				<small class="type">Type: <span>grass</span></small>
// 			</div>
// 		</div>`
		
// charactersContainer.innerHTML += createPokemonCard;

