let myName = "Deepak"  //it will go to stack memory
let yourName = myName //copy of myName will be assigned to yourName in stack memory

yourName = "Donnell" // value will be changed in copy of myName and not the original value of myName

console.log(myName); // Deepak, becuase of name is changed in the copy of original name and not the original name is changed
console.log(yourName); // Donnell


let userOne = {
    name : "Deepak",
    age: 30,
    email:"deepak@gmail.com",
    upi:"deepak@ybl"
}

let userTwo = userOne // the reference of userTwo will be same as  userOne as for non-primitive data types reference is assigned, so now both will point to the same memory location at the heap

console.log(userOne.email);
console.log(userOne.upi);

console.log(userTwo.email);
console.log(userTwo.upi);

userTwo.email = "changedmail@gmail.com" 
// now, if we are changing the email then original mail will be changed since userTwo is also referring to the same heap memory

userTwo.upi = "changedupi@ybl"// now, if we are changing the upi then original upi will be changed since userTwo is also referring to the same heap memory


console.log(userOne.email);
console.log(userOne.upi);

console.log(userTwo.email);
console.log(userTwo.upi);

