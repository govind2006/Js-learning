function mulr(num){
    return num*5;
}

mulr.power=2

// console.log(mulr(4));
// console.log(mulr.power);
// console.log(mulr.prototype);

function cretaeuser(username,score){
    this.username=username
    this.score=score
    // return this; // it is required when cretaeuser("Govind",99) this type of call is used;
}

cretaeuser.prototype.increment = function(){
    this.score++;
}

cretaeuser.prototype.printme = function(){
    console.log(`score is ${this.score}`);
}

// console.log(cretaeuser("Govind",99));
const user1 = new cretaeuser("Hello",90)
const user2 = new cretaeuser("Hii",80)
user1.increment();
console.log(user1.printme())
console.log(user2)

