

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

// consumePromise5()

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
let cnt=0;
let year=2011;
// fetch(`https://jsonmock.hackerrank.com/api/football_matches?year=${year}`).then((response)=>{
//     return response.json()
// }).then((res)=>{
//     const resdata = res.data;
//     for(let i=0;i<resdata.length;i++){
//         if(resdata[i].year==2011 && resdata[i].team1goals==resdata[i].team2goals){
//             cnt++;
//         }
//     }
//     console.log(`draw match = ${cnt}`);
// }).catch((error)=>console.log(error))



let comp = 'UEFA Champions League';

const getallwin = async function(win) {
    console.log(comp, year, win);
    const res = await fetch(`https://jsonmock.hackerrank.com/api/football_matches?competition=${comp}&year=${year}&team1=${win}`);
    const data = await res.json();
    console.log(res);
    return "ok";
};

const titlewin = async function() {
    const res = await fetch(`https://jsonmock.hackerrank.com/api/football_competitions?name=${comp}&year=${year}`);
    const data = await res.json();
    return data.data[0].winner;
};

titlewin()
    .then(winner => {
        return getallwin(winner);
    })
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error('Error:', error);
    });



