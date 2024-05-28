class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teahcer extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addcourse(){
        console.log(`New course was added by ${this.username}`);
    }
}

const t1 = new Teahcer("u1","abc@ge.com","123")

// console.log(t1.addcourse());
t1.addcourse();