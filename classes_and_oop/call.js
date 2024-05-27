function setUserName(username){
    this.username=username
    return this;
}

function createUser(username,email,password){
    setUserName.call(this,username)
    // this.username= setUserName.call(username);
    this.email=email
    this.password=password
}

const u1 = new createUser("govind","abc@g.com","123")

console.log(u1);