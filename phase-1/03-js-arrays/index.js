// What are Arrays?
// an ordered list that can contain multiple values/elements, usually with a common theme

const myArray = [4, 'Bob' , true , ['Lemons']]; //is an array, it can hold multiple different types of Data
// this is called the array literal, the most common way of array initialization

// accessing elements in the array: Each element has an index, which is an 'ID' of sorts
// index starts at 0 and increments

console.log(myArray[1]);

// accessing through index is usually best for smaller arrays, but there are better ways
// index numbers can be used to mod elements

myArray[2]= 'Deeply Satisfied Phantasmagoria';

// finding the last element of an array can be acheived by finding the length of the array with .length and subtracting one!
console.log(myArray.length-1);

// array manipulation
// .push to destructively add to the end of an array
 myArray.push('My Legs have abandoned me');
// .unshift adds an element to the front of an array, also destructive
myArray.unshift('Shitballs it\'s hotter n hells hallways here.');
// spread operator (...) creates a copy of the OG array and can then add to it
const fuckedUpFriday = [...myArray];
console.log(fuckedUpFriday);

// removing elements

// pop n' shift: The Destructive Ones. Pop hits the rear, while shift is up front
myArray.shift(); // this kills index 0
console.log(myArray);

// .slice: the gentle one. Returns a portion or a copy of the array it is invoked upon

const bobsHell = fuckedUpFriday.slice(0,2);
console.log(bobsHell);
console.log(fuckedUpFriday);
console.log(myArray);

// Pass by value vs pass by reference
// primitives are pass by value
// Non Prims are pass by reference

// pass by value: Retains og value but will pass said value onwards

let x = 2

function square(num){
    return num = num*num;
}
 let result = square(x);
 //console.log(result);
 //console.log(x);

 // pass by reference: any changes made to a reference of the data that was passed on
 // will be reflected in the original state

 const copyOfMyArray = myArray;
 // copyOfMyArray.push() would also affect myArray, because copyOf and myArray are both referencing the same value in memory

 // loopin' babie 
 // .foreach() => the modern man's loop / array method
 // .foreach() enters the array and deals with each element individually as it loops through
 // takes a callback function
 // use this if you aren't changing or mutating the element

myArray.forEach((concepts) => { console.log(concepts) });

// .map
// use to change/modify the elementz
let newArray = myArray.map((concepts) => { return  console.log(concepts.toUpperCase);});