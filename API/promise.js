

const promise5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(error){
            resolve({user:"Js",pwd:"123"})
        }else{
            reject('Error JS went wrong')
        }
    },1000)
})

// promise5.then

async function consumePromise5(){
   try{
    const res = await promise5
    console.log(res);
   }
   catch(error){
    console.log(error)
   }
}

consumePromise5()

async  function getallusers(){
    try{
        const res = await fetch('https://api.github.com/users/govind2006');
        const data = await res.json()
        console.log(data)
    }catch(error){
        console.log("E : ",error)
    }
}
// getallusers()

fetch('https://api.github.com/users/govind2006').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>console.log(error))