// execute any JS designated for the page load
function init(){
    console.log('page has loaded, run the program');
    return 'This is a return value'; 
}

// invoking the function 
init()


// function expressions 
// does not get hoisted, so must be ordered correctly

const createPokemon = function(){
    // anonymous function
    let pokemon = prompt('Which Pokemon are you today?')
    return pokemon
}

createPokemon()

// arrow function
// similar to function expressions 

//const renderPokemon = () => {
    // more benefits to be discussed later
}

// parameters vs arguments
// parameters are placeholders/variables for a value that is going to be passed to a function
//parameters are used upon function declaration
//variables, basically

function renderPokemon(character){
    //parameters go here
    console.log(`Rendering ${character}`)
}

//arguments are the values that are passed in when a function is being invoked
// 'Gengar' is the argument, character is the parameter 
renderPokemon('Gengar')

// reference vs invocation
// referencing is just the pointer => function name
// invoking causes the code to actually run

// first class functions
// functions can behave in many different ways
// assign a function to a variable
// pass functions as an argument to other functions => callback function
// use functions as a return value for another function => high order function


// callback example
function sayName(name){
    return `Hi, I'm ${name}`
}

function greeting(callback){
    return callback('Hathor')
}

// Closures

// scopes => Local => only accessible in that function Global => accessible everywhere
}