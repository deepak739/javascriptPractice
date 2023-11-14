const user = {
    username : "Deepak",
    loginCount : 8,
    signedIn : true,

      

    getUserDetails: function(){
        //console.log("Got usr details from database");
        //console.log(`username: ${this.username}`);
        console.log(this);
    }

}

//console.log(user.username);
//console.log(user.getUserDetails);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(this.user);
    }

    return this
}

const userOne = new User("Deepak", 12, true) // jaise hi new keyword use krte hai to ek naya object create hota hai
//ye jo constructor function call hota hai new keyword ke karan
//this keyword hai to uske andar value add ho jayega

const userTwo = new User("LearningJS", 11, false)
console.log(userOne);
console.log(userTwo);