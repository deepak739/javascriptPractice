// data types -- types of data 
// Types of data types
// Primitive(call by value) and Non-primitive(Call by reference)

//Primitive
//7 types -- String, Number, null, undefined, boolean, BigInt, Symbol

const id = '123'
const anotherId = '123'
console.log(id==anotherId);

const id1 = Symbol('123')
const anotherId1 = Symbol('123')
console.log(id1==anotherId1);

//Non-primitive
// Arrays, Object , Functions

//Arrays

const superHeroes = ["shaktimaan", "juniorG","Naagraj", "Doga"]
console.log(superHeroes);

//Object
const myObject = {
    naam : "Deepak",
    age : 30,
}
console.log(myObject);

//Functions
// myFunction(); --> ReferenceError: Cannot access 'myFunction' before initialization
const myFunction = function()
{
    console.log("Hello World");
}
myFunction();

