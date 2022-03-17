// IIFE
let pokemonRepository = (function() {
  let pokemonList = [{
      name: 'Bulbasaur',
      height: 0.7,
      weight: 6.9,
      type: ['grass', 'poison']
    },

    {
      name: 'Blastoise',
      height: 3.6,
      weight: 85.5,
      type: ['fire']
    },

    {
      name: 'Venusaur',
      height: 1.3,
      weight: 1.9,
      type: ['dragon']
    },
    {
      name: 'Caterpie',
      height: 0.3,
      weight: 2.9,
      type: ['dragon']
    },

    {
      name: 'Charmander',
      height: 2.4,
      weight: 0.9,
      type: ['dragon']
    },

    {
      name: 'Butterfree',
      height: 1.4,
      weight: 0.9,
      type: ['dragon']
    },

    {
      name: 'Charmeleon',
      height: 1.1,
      weight: 19,
      type: ['dragon']
    },

    {
      name: 'Rayquaza',
      height: 7,
      weight: 206.5,
      type: ['dragon']
    }
  ]
  // Public oriented functions
  function add(pokemon) {
    pokemonList.push(pokemon)
  }

  function getAll() {
    return pokemonList
  }
  // When cllicked shows pokemon name
  function showDetails(pokemon) {
    console.log(pokemon.name)
  }

  function addListener(button, pokemon) {
    button.addEventListener("click", function() {
      showDetails(pokemon)
    })
  }
  // this function adds pokemon to ul as buttons
  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    //addListener(button, pokemon);
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  }
})();
// Updated forEach loop
pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon)
});
