class User{
    constructor(){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);

    }

   static CreateId(){
        return `123`
    }
}

const deepak = new User("deepak")
console.log(deepak.CreateId); //ReferenceError: username is not defined

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone  = new Teacher("iphone", "i@phone.com")
console.log(iphone.CreateId());


class MyClass {
    // This is a static method
    static myStaticMethod() {
      console.log('Static method called');
    }
  
    // This is an instance method
    myInstanceMethod() {
      console.log('Instance method called');
    }
  }
  
  // Calling a static method without creating an instance
  MyClass.myStaticMethod(); // Output: Static method called
  
  // Creating an instance and calling an instance method
  const myInstance1 = new MyClass();
  myInstance1.myInstanceMethod(); // Output: Instance method called

  
  class MyClass {
    // This is a static property
    static myStaticProperty = 'Static Property';
  
    // This is an instance property
    myInstanceProperty = 'Instance Property';
  }
  
  // Accessing a static property without creating an instance
  console.log(MyClass.myStaticProperty); // Output: Static Property
  
  // Creating an instance and accessing an instance property
  const myInstance = new MyClass();
  console.log(myInstance.myInstanceProperty); // Output: Instance Property
  