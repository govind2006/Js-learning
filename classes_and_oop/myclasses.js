// ES6

class User{
    constructor(username,email,password){
        this.username=username,
        this.email=email,
        this.password=password
    }
    encryptpassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}

const u1 = new User("abc","abc@gmail.com","123")

console.log(u1.encryptpassword());
console.log(u1.changeusername());