class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addcourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const t1 = new Teacher("u1","abc@ge.com","123")
// t1.logMe()
// console.log(t1.addcourse());
// t1.addcourse();

// console.log(t1 instanceof User);