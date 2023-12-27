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
// {id}/, es una convención utilizada en algunas API REST para indicar que cierta parte de la URL es un marcador de posición o variable. Esto no es específico de JavaScript, sino más bien una convención en el diseño de API REST.
// sin $ no funciona el id
// 2 definir endpoint
//3 decir donde vamos a guadar los datos recogidos por fetch y ponerle await
//4 pasar los datos recogidos fetch a .json ambien con await
//5 ponemos return para manejar los datos de la pokeData

const getPokemon = async (id) => {
	const endPoint = `https://pokeapi.co/api/v2/pokemon/${id}/`
	const response = await fetch(endPoint)
	const pokeData = await response.json()
	
	return pokeData
};

const getPokemons = async (num) => {
	for (let i = 1; i<=num; i++) {
		const pokeData = await getPokemon(i);  //lo pongouna constante porque sino devuelve promesas
		
		const poke_number = `# ${pokeData.id.toString().padStart(3, 0)}`   // lo pasa a string 001
		const poke_name = pokeData.name
		const poke_type = pokeData.types[0].type.name
		const poke_image = pokeData.sprites.other['official-artwork'].front_default  // es con [] no puede haber guiones 
		console.log(poke_number, poke_name,poke_type,poke_image);
		
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

// const createPokeCard = () =>{
//   const
// }



//const pokemon_count = 150
//const poke-number
//const poke-name
//const poke-type
//const poke-image


// const createPokemonCard =
// 		` <div class="pokemon" style="background-color: ${color.[poke-type]};">
// 			<div class="img-container">
// 				<img src="${poke-image}" alt="${poke-name}>
// 			</div>
// 			<div class="info">
// 				<span class="number">${poke-number}</span>
// 				<h3 class="name">${poke-name}</h3>
// 				<small class="type">Type: <span>${poke-type}</span></small>
// 			</div>
// 		</div>`
		
// charactersContainer.innerHTML += createPokemonCard;




// function getPokemons() {
// 	const endPoint = "https://pokeapi.co/api/v2/pokemon/"
// 	let response = fetch(endPoint);
// 	return response
// 	};


// console.log( getPokemons());
