class User{
    constructor(email,username){
        this.email = email
        this.username=username
    }
    set email(emvalueail){
        this._email=emvalueail
    }
    get email(){
        return `${this._email}xyz`
    }
}

const user1 = new User('user1@ai','user1')

console.log(user1.email);
