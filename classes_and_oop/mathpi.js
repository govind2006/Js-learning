const desc = Object.getOwnPropertyDescriptor(Math,'PI')
// console.log(desc);

// Math.PI=7; // writable: false, is false so we are not able to change the value
// console.log(Math.PI);

const chai = {
    name:'ginger chai',
    price:250,
    isAvailable:true,

    orderchai:function(){
        console.log("error occured");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})
// console.log(Object.getOwnPropertyDescriptor(chai,'name'));

for(let [key,val] of Object.entries(chai)){
    if(typeof val!=='function'){
        console.log(key,' ',val);
    }
}