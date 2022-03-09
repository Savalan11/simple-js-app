  let pokemonList = [{

  name: 'Bulbasaur',
  height: 0.8,
  weight: 2.1
  type: ['grass', 'poison']
},

{
  name: 'Blastoise',
  height: 2.1,
  weight: 18,
  type: ['fire']
},

{
  name: 'Caterpie',
  height: 1.8,
  weight: 3.3,
  type: ['dragon']
},
                      {
  name: 'Charmeleon',
  height: 7,
  weight: 2.5,
  type: ['dragon']
}];
for (let i=0; i < pokemonList.length; i++){
  if(pokemonList[i].height > 3){
    document.write(pokemonList[i].name + "( height : " + pokemonList[i].height + ")" + "What a delicios figure!!! <br>")
  }else {
  document.write(pokemonList[i].name + "( height : " + pokemonList[i].height + ")<br>")
}
}
