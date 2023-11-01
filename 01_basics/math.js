//Number

const score = 400
console.log(score); //400

const balance = new Number(100)
console.log(balance); //[Number: 100] --> new keyword represents object

console.log(balance.toString().length); //3
console.log(balance.toFixed(3));  //100.000  --> how much decimal point wants

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(6)); //123.897  --> 6 digits precise value

const hundreds = 10000000
console.log(hundreds.toLocaleString()); //10,000,000

console.log(hundreds.toLocaleString('en-IN'));  //1,00,00,000

console.log(Number.MAX_VALUE); //1.7976931348623157e+308

console.log(Number.MIN_VALUE); //5e-324

//Math

console.log(Math); //Object [Math] {}

console.log(Math.abs(-4)); //4  --> it will convert negative value to positive but positive value will be positive only

console.log(Math.ceil(5.6)); //6
console.log(Math.floor(5.6)); //5

console.log(Math.round(4.8)); //5
console.log(Math.min(2,5,8,9,1)); //1
console.log(Math.max(2,5,8,9,1)); //9

console.log(Math.random());
console.log(Math.random() *10);
console.log((Math.random() *10) + 1 );

console.log(Math.random() *10);

const max = 20
const min = 10

console.log(Math.floor(Math.random()*(max-min+1))+min);





