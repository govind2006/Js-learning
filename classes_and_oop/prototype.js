let myname = "Govind     "

// console.log(myname.truelength);


let myhero = ["nscb","bhagatsingh"]

let heropower = {
    nscb:"ajadi",
    bhagatsingh:"ajadi1",

    getnsbcpower: function(){
        console.log(`netaji power is ${this.nscb}`);
    },

    getbhagatsinghpower: function(){
        console.log(`bhagatsingh power is ${this.bhagatsingh}`);
    },
}
Object.prototype.govind = function(){
    console.log("Govind is present in all object");
}

// heropower.govind()
// myhero.govind()


// inheritance
const User={
    username: "Govind",
    email:"abc@ge.com"
}


const Teacher={
    makevideo :true
}
const TeachingSupport={
    isAvailable: false
}
const TAsupport={
    makeAssignment:'Js Assignment',
    fulltime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User


// modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUser="Kumar.    "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}
anotherUser.trueLength();

"govidf v".trueLength();
"IceTea  ".trueLength();