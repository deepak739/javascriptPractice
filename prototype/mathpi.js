const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

//o/p
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   } --> isse ye pta chalta hai ki humlog PI ki value change ni kr skte hai
// --> object ke bare me kuch hidden chiz deti hai 
// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const chai = {
    name:"ginger chai",
    price : 250,
    isAvailable: true,

    orderChai : function(){
        console.log("chai ni bani");
    }
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// Object.defineProperty(chai, "name",{
//   writable: false,
//   enumerable: false  
// })
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }

    console.log(`${key}: ${value}`);
    
}
