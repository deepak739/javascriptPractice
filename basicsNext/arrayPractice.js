const myArray = [1,2,3,4,5,6]  //myArray is a single variable conating multiple elements. In javascript, arrays are resizeable

//console.log(myArray);  //[ 1, 2, 3, 4, 5, 6 ]

//shallow copy --> same reference
//Deep copy --> not the same reference

const screenHeroes = ["Shaktiman","Jawan","Junior G"]
const myArr2 = new Array(1,4,"lalten", "jalake")

//console.log(screenHeroes[0]);
//console.log(screenHeroes.includes("Ironmen"));
//console.log(screenHeroes.concat(myArr2));

myArr2.push(5,8)
//console.log(myArr2); //push any element to the array
myArr2.pop()
//console.log(myArr2); //removed the last element

myArray.unshift(99,"jaiHanuman") //insert element at the start
// console.log(myArray);

myArray.shift()
// console.log(myArray);
// console.log(myArr2.concat(myArray));

const myArray3 = [0,1,2]
const myArray4 = ["test","array","two"]
const strArray = myArray3.join(myArray4) //first element of myArray3 then all element of myArray4, second element of myArray3 and then all element of myArray4.....converting to string//o/p --> 0test,array,two1test,array,two2
// console.log(strArray);

const arrEx = [1, 2, 3 ,4,5,6,7,8,9,10]
const arrEx2 = arrEx.slice(2,3)
// console.log(arrEx2);

const arr3 = arrEx.splice(2,3) // from 2nd index to 3rd index it will delete the element out from arrEx and give it to arr3
// console.log(arrEx);
// console.log(arr3);


const marvel_heroes = ["Thor", "Spiderman", "Ironmen"]
const dc_heroes = ["Batman", "Superman", "flash"]
//spread operator(...)
const all_reel_heroes = [...marvel_heroes, ...dc_heroes]

console.log(all_reel_heroes);
const newHeroes = marvel_heroes.push("Hero");
console.log(typeof newHeroes); //number

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //Array.of converts the given element to an array

