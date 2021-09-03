// what the fuck is an object? 
// it's a collection of muthafuckin data inside some curly bois

const pokemon = {
   // key/value pairs. Keys are properties
   name: 'Pikachu',
   type: "Electric",
};

// aCCESSING PROPERTY VALUES IS THROUGH EITHER DOT OR BRACKET NOTATION
// no index numbers, use keys instead ya numbskull
console.log(pokemon.name);
console.log(pokemon['type']);

// brackets vs dots
// dot notation is literal af bruh
// can't be used with variables, not literal enough dawg

// brackets are flexible, can be used with variablez

function printName(object, property){
    //dynamic is everything, dont be static 
    return object[property];
}

console.log(printName(pokemon, 'name'));

// notations can change values

pokemon.name = 'Electabuzz';
pokemon.moves = ['Thunder Punch', 'Thunderbolt', 'Leer', 'Quick Attack'];
console.log(pokemon.moves);
// delete pokemon.type; removes whatever is noted

// spread operator is best for modifying objects
 const newPokemon = {...pokemon}; // use curlies instead of square brackets
 newPokemon.name = 'Gengar';
 newPokemon.type = 'Ghost';
 newPokemon.moves = ['Hypnosis', "Shadow Punch", 'Dream Eater', 'Curse'];

 // now we have two pokemon...four left!

 console.log(pokemon);
 console.log(newPokemon);

 // object loopin' : for...in
 function objLoops(obj){
     for(const key in obj){
         //for each key inside the object, create a variable 
          console.log(obj[key]); // logs all of the values of the object's keys. 
     }
 }

 objLoops(pokemon);