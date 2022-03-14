let pokemonList = [{

name: 'Bulbasaur',
height: 0.7,
weight: 6.9,
type: ['grass', 'poison']
},

{
name: 'Blastoise',
height: 1.6,
weight: 85.5,
type: ['fire']
},

{
name: 'Caterpie',
height: 0.3,
weight: 2.9,
type: ['dragon']
},
{
name: 'Charmeleon',
height: 1.1,
weight: 19,
type: ['dragon']
}];
for (let i=0; i < pokemonList.length; i++){
if(pokemonList[i].height > 3){
  document.write(pokemonList[i].name + "( height : " + pokemonList[i].height + ")" + "What a unique figure!!! <br>")
}else {
document.write(pokemonList[i].name + "( height : " + pokemonList[i].height + ")<br>")
}
}
