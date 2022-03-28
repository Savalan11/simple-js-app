
//pokemon respository in which the pokemon´s list is included
let PokemonRepository = (function () {
let PokemonList= [];
let ApiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=50';
let modalContainer = document.querySelector('#modal-container');
// The pokenomonlist is an empty Array which is linked to the Pokemon API
// This is important in terms of switching from the static list to a complete list of Pokemon e.g ApiUrl
//modal at the top so all funtions may access this variable
  function add (pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ){
      PokemonList.push(pokemon);
    } else {
       console.log("pokemon is not correct");
      }
    }
//condition, loop,function, to verify and inspect the type of object inserted into the code
  function getAll() {
  return PokemonList;
}


  function addListItem (pokemon) {
    let PokemonList = document.querySelector('.list-group');
    let ListPokemon = document.createElement('li');

    let Button = document.createElement('Button');
    Button.innerText = pokemon.name;
    //I added this to trigger the modal and it functions successfully
    Button.classList.add('list-group-item','list-group-item-action','text-center');
    Button.setAttribute('data-toggle', 'modal');
    Button.setAttribute('data-target', '#pokemonModal');

  // How do I should have MAJ on Pokemon' names?

    Button.classList.add('btnbtn-primary');// or btn btprimary.addclass with jQuery
    ListPokemon.classList.add('list-group-item'); // to be confirmed

    ListPokemon.appendChild(Button);
    PokemonList.appendChild(ListPokemon);
    Button.addEventListener('click', function () {
    showDetails (pokemon);
})
}
//creates a button, a eListener that is called,logged at every click
  async function loadList() {
  try {
    const response = await fetch(ApiUrl);
    const json = await response.json();
    json.results.forEach(function (item) {
      let pokemon = {
      name: item.name,
      detailsUrl: item.url
      };
      add(pokemon);
    });
  } catch (e) {
    console.error(e);
  }
}
//Async function using the fetch method to get pokemonlist from "ApiUrl"
//result = response = promise= the Json function passed as a parameter of the fetch
  async function loadDetails(item) {
  let url = item.detailsUrl;
  try {
    const response = await fetch(url);
    const details = await response.json();
    // Allows details to item =

    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  } catch (e) {
    console.error(e);
  }
}


//Async function using the fetch method to get pokemonlist from "ApiUrl"
//result = response = promise= the Json function passed as a parameter of fetch
function showDetails(item) {
   PokemonRepository.loadDetails(item).then(function () {
     showModal(item);
   });
 }


//  addition to a search function

function showModal(item) {
  let modalBody = $(".modal-body");
  let modalTitle = $(".modal-title");

  modalTitle.empty ();
  modalBody.empty ();

  let nameElement = $ ("<p> " + "Name : " + item.name + "</p> ");

  let imageElement = document.createElement('img');
  imageElement.setAttribute ("src", item.imageUrl);

  let heightElement = $ ("<p> " + "Height : " + item.height + "</p> ")

  modalTitle.append(nameElement);
  modalBody.append(imageElement);
  modalBody.append(heightElement);

}

  return {
    add: add,
    getAll: getAll,
    addListItem : addListItem,
    loadList : loadList,
    loadDetails : loadDetails,
    showDetails : showDetails,
    //searchPokemon : searchPokemon,
    showModal : showModal // call back the modal as all previous functions
  };
})();
// The code above is wrapped into an IIFE which protects my code and executes it automatically thanks to this function - ()
// this applies to all the previously created fucntion in the IFFE

PokemonRepository.loadList().then(function () {
  PokemonRepository.getAll().forEach(function (pokemon) {
    PokemonRepository.addListItem(pokemon);
  });
});
