const sayName = function(){
    console.log("Govind")
}
const chnageH1=function(){
    let x = document.querySelector('h1');
    let y =x.innerHTML;
    y="Hello "+y
    x.innerHTML=y;
}

setTimeout(sayName,2000)
const changeH1 = setTimeout(chnageH1,3000)
document.querySelector('#stop').addEventListener('click',function(e){
    console.log(e)
    clearTimeout(changeH1);
    console.log("Stop")
})

