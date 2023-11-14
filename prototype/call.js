function SetUSername(username){
    //complex DB calls
    this.username = username
}

function createUser(username, email, password){
    SetUSername.call(this, username) //reference hold kr ke rakhna hai aur yaha pe this dene ka matlab ye hai isi context ke liye -- ye sab humlog kr isliye rahe hai so thall call ka matlab samajh me aa jaye, yaha ho kya raha hai ki username upar wale function me use kiya gya uska context bhi wahi pe hai aur to wo function jo hai wo call to ho rha hai lekin call hone baad wo memory se remove ho ja rha hai isliye hume krna kya hai ki uski reference bind kr ke rakhna hai using call aur ye call this bhi optionally accept krta hai

    this.email = email
    this.pasword = password
}

const chai = new createUser("chai", "chai@fb.com","123")
console.log(chai);