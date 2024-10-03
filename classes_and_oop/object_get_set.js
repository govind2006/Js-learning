const User = {
    _email:'hello@ge.com',
    _password:'123',

    get email(){
        return this._email.toUpperCase
    },

    set email(value){
        this._email=value
    },

    

}