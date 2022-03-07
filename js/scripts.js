alert('Hello world');


  let favoriteFood = [{

  name: 'Anana',
  height: 0.8,
  type: ['grass', 'poison']
},

{
  name: 'Banana',
  height: 2.1,
  weight: 18,
  type: ['fire']
},

{
  name: 'Apple',
  height: 1.8,
  weight: 3.3,
  type: ['dragon']
},
                      {
  name: 'Pineapple',
  height: 7,
  weight: 2.5,
  type: ['dragon']
}];
for (let i=0; i < favoriteFood.length; i++){
  if(favoriteFood[i].height > 3){
    document.write(favoriteFood[i].name + "( height : " + favoriteFood[i].height + ")" + "What a delicios food!!! <br>")
  }else {
  document.write(favoriteFood[i].name + "( height : " + favoriteFood[i].height + ")<br>")
}
}
