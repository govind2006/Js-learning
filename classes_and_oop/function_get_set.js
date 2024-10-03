function User(email,password){
    this._email = email;
    this._password = password

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this._email=value
        }
    })
    Object.defineProperty(this,'password',{
        get:function(){
            return this._password.toLowerCase()
        },
        set:function(value){
            this._password=value
        }
    })
}

const u1 = new User("hello@ge.com","123")

console.log(u1.email)