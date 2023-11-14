// let myName = "Deepak    "
// console.log(myName.length);

// console.log(myName.trim().length); //ye bhi kr skte hai lekin iska ek aur tarika hai

// console.log(myName.truelength); // o/p --> undefined

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman : "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}


// heroPower.deepak()  --> aisa to abhi kuch deepak kr ke function hai ni prototype me to hume kya krna hoga ye fucntion inject krna hoga to kya hum ise inject kr skte hai kya prototype me, to ise dekhna hoga 

// to hum yaha kya krenge ki direct object ke andar hi inject krenge aur kaise krenge ye niche likha hua hai

Object.prototype.deepak = function(){
    //console.log(`deepak is present in all objects`);
}

myHeroes.deepak()

Array.prototype.heyDeepak = function(){
    //console.log("Deepak says Hello world");
}

//myHeroes.heyDeepak()
//heroPower.heyDeepak() // yaha pe error ayega kyuki myHeros ke andar heyDeepak wala function inject ni hua hai isliye kyu ki hum heyDeepak wala function jo hai use sirf array ke andar hi inject kiye hai iska matlab ki heyDeepak abhi sirf array me hai isiye ye error aa rha hai, diagram from the lecture --> ]
// Array ---> object --> null
// String --> object --> null
// fucntion --> object --> null

//dusri baat  ye ki Object.prototype.deepak --> yaha pe hum direct object ke andar hi inject kr rhe hai to yaha pe kya ho rha hai ki ye function jo directly object me inject ho rha hai wo sabke pass share hoga eg :- string ke pass bhi, function ke pass bhi, array ke pass bhi

//inheritance

const User = {
    user: "username",
    email : "chai@google.com"
}

const Teacher = {
    makevideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment : 'JS assignment',
    fullTime : true,
    __proto__:TeachingSupport // isiko bolte hai prototypal inheritance
}

Teacher.__proto__ = User // isiko bolte hai prototypal inheritance


//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher) // Teacher jo hai wo TeachingSupport ka property bhi inherit kr lega

let anotherUsername = "ChaiAurCode   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"Deepak".trueLength()
"iceTea".trueLength()