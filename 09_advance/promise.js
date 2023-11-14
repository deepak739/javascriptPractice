// Promise
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Iska matlab ye hota hai ki jo bhi request hum kr rhe hai wo abhi ke abhi uska result ni aa jaye balki wo queue me lage rhe aur jab samay acha ho tab result de
// matlab ki hum promise kiye hai credit card walo ko ki paise denge lekin kab denge ye pta nhi lekin promise hai ki denge
// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

//promise ko consume krne se pehle bnaya kaise jata, promise apne aap me ek object hota hai
const promiseOne = new Promise(function(resolve, reject) {
    // Do an async task 
    //DB calls, cryptography related, network calls
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()
    },2000)
})

promiseOne.then(function(){
    console.log("promise consumed");  // ye tabhi promise consume hoga jab jo promise create kiya gya tha wo agar resolve ho gya hai, matlab upar wale code se agar hum resolve hata dete hai to ye log me jo hai wo print ni hoga kyu ki promise resolve hu ni hua hai, to ise execute krne k liye resolve krna padta hai aur phir resolve.then ka role aata hai aur tabhi promise consume hota hai
})

const promise2 = new Promise(function(resolve, reject){
setTimeout(function(){
    console.log("Async 2");
    resolve()
}, 2000)
}).then(function(){
    console.log("Async 2 completed");
})


const promiseThree = new Promise(function(resolve, request){
setTimeout(function(){
    resolve({"username":"chai", "email":"chaiaurcode@example.com"})
}, 2000) 
})

promiseThree.then(function(user){
    console.log(user);

})

const promise4 = new Promise(function(resolve, reject){
     
})