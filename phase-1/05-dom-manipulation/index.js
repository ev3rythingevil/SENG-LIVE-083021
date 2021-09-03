const pokemons = [
  {
    id: 1,
    name: "bulbasaur",
    img: "https://static.wikia.nocookie.net/kingdom-keymasters-database/images/2/27/001Bulbasaur_XY_anime.png/revision/latest?cb=20160927122032",
    likes: 4,
  },
  {
    id: 2,
    name: "ivysaur",
    img: "https://static.wikia.nocookie.net/kingdom-keymasters-database/images/c/ca/002Ivysaur_XY_anime_2.png/revision/latest?cb=20161017212021",
    likes: 21,
  },
  {
    id: 3,
    name: "venusaur",
    img: "https://images.saymedia-content.com/.image/t_share/MTc2MjYwODQ5NTk2NTcyODYy/pokemon-venusaur-nicknames.png",
    likes: 7,
  },
  {
    id: 4,
    name: "charmander",
    img: "https://pixy.org/download/1207107/",
    likes: 20,
  },
  {
    id: 5,
    name: "charmeleon",
    img: "https://static.wikia.nocookie.net/pokemon-quest-adventures/images/a/a4/005Charmeleon_XY_anime_2.png/revision/latest?cb=20170313041459",
    likes: 11,
  },
];


// document.getElementById()
// accepts ID as argument
// returns FIRST match
// ID must be unique otherwise you done fucked up
// when selecting elements, store it in a variable
// const pokeForm = document.getElementById('poke-form'); 


// document.getElementsByClassName(className);
// returns multiple elements
// const label - document.getElementsById('form-label'); 
// returns multiple elements as an htmlCollection
// htmlCollection = looks like an array but isnt
// can be converted with array.from

// document.querySelector()
// accepts different selectors: id, class, tags
// returns first matching value, single elements only
// const goalsDiv = document.querySelector('#lecture-goals');


// document.querySelectorAll()
// also returns a collection that matches the selector
// querySelector allows you to use .forEach method on its HTMLCollection

//pokemons.forEach( pokemon =>{
//   renderPokemon(pokemon);
//});

 pokemons.forEach(renderPokemon);

function renderPokemon(pokemon){
  console.log(pokemon);


// document.createElement() <= use dis cause it makes nodes
// .innerHTML (can cause security issues)
   // only makes strings instead of nodez

// create a divvv
 const pokeCard = document.createElement('div');

 pokeCard.className = 'poke-card';
 console.log(pokeCard);

const pokeContainer = document.querySelector('#poke-container');

const pokeImg = document.createElement('img')
pokeImg.src = pokemon.img;
pokeCard.appendChild(pokeImg);
pokeContainer.appendChild(pokeCard);
}


const header = document.querySelector('#header');
header.innerHTML = `<img id="header-img"
src="https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?auto=webp&s=fb5fd61cae0bc9cde2bc2a006b1e2aeb0c935ce9"
/>`

const lectureGoals = document.querySelector('#lecture-goals');
lectureGoals.remove()