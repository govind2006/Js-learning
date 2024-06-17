class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username: ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

const risi = new User("risi");
// console.log(risi.createId())

class Teacher extends User{
    constructor(email,username){
        super(username)
        this.email=email
    }
}

const siri = new Teacher('siri@phone.com','siri')
siri.logMe();