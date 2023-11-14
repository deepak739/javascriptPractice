class User{
    constructor(username){
        this.username = username

    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username) //to yaha pe call ka use ni hkr rhe hai kyu ki yaha pe jo user ki property hai use extend ya inheritance ke dwara yaha bhi use kr rhe hai, aur this keyword by default behind the scene kaam kr rha hai
        //yaha se username lega aur upar wale User me ye username pass kr dega

        this.email = email
        this.password = password

    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123")
chai.addCourse()
const masalaChai = new User("masalaChai")
//masalaChai.addCourse()
masalaChai.logMe()
chai.logMe()
console.log(chai instanceof Teacher);
console.log(chai instanceof User);